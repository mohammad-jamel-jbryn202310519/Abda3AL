'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function deleteUniversity(formData: FormData) {
  const supabase = await createClient()
  
  const id = formData.get('id') as string

  if (!id) {
    throw new Error('معرف الجامعة مفقود')
  }

  const { error } = await supabase
    .from('universities')
    .delete()
    .eq('id', id)

  if (error) {
    throw new Error('فشل حذف الجامعة')
  }

  revalidatePath('/admin/universities')
  revalidatePath('/universities/list/public')
  revalidatePath('/universities/list/private')
  revalidatePath('/')
}
