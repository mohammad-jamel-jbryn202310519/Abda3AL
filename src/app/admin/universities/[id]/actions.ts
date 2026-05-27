'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function uploadSpecialtyImage(formData: FormData) {
  const supabase = await createClient()

  const university_id = formData.get('university_id') as string
  const name = formData.get('name') as string // E.g., "تخصصات البكالوريوس"
  const imageFile = formData.get('image') as File

  if (!imageFile || imageFile.size === 0) {
    throw new Error('الرجاء اختيار صورة')
  }

  // Upload image
  const fileExt = imageFile.name.split('.').pop()
  const fileName = `${Math.random()}.${fileExt}`
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('university-assets')
    .upload(`specialties/${fileName}`, imageFile)

  if (uploadError) {
    console.error('Upload error:', uploadError)
    throw new Error('فشل رفع الصورة')
  }

  const { data: { publicUrl } } = supabase.storage
    .from('university-assets')
    .getPublicUrl(`specialties/${fileName}`)

  // Insert into database
  const { error } = await supabase
    .from('specialties')
    .insert([{ university_id, name, image_url: publicUrl }])

  if (error) {
    console.error('Insert error:', error)
    throw new Error('فشل حفظ التخصص')
  }

  revalidatePath(`/admin/universities/${university_id}`)
  revalidatePath(`/universities/${university_id}`)
}

export async function deleteSpecialty(id: string, university_id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('specialties')
    .delete()
    .eq('id', id)

  if (error) {
    throw new Error('فشل الحذف')
  }

  revalidatePath(`/admin/universities/${university_id}`)
  revalidatePath(`/universities/${university_id}`)
}
