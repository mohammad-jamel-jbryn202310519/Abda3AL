'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createUniversity(formData: FormData) {
  const supabase = await createClient()

  const name = formData.get('name') as string
  const type = formData.get('type') as string
  const ranking = parseInt(formData.get('ranking') as string)
  const description = formData.get('description') as string
  const logoFile = formData.get('logo') as File

  let logo_url = null

  // Upload logo if provided
  if (logoFile && logoFile.size > 0) {
    const fileExt = logoFile.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('university-assets')
      .upload(`logos/${fileName}`, logoFile)

    if (uploadError) {
      console.error('Upload error:', uploadError)
      throw new Error('Failed to upload logo')
    }

    const { data: { publicUrl } } = supabase.storage
      .from('university-assets')
      .getPublicUrl(`logos/${fileName}`)
      
    logo_url = publicUrl
  }

  // Insert into database
  const { error } = await supabase
    .from('universities')
    .insert([{ name, type, ranking, description, logo_url }])

  if (error) {
    console.error('Insert error:', error)
    throw new Error('Failed to create university')
  }

  revalidatePath('/admin/universities')
  revalidatePath('/universities/public')
  revalidatePath('/universities/private')
  redirect('/admin/universities')
}
