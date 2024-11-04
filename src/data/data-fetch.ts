import { supabase } from '~/utils/supabase'

export async function fetchSession() {
  const { data, error } = await supabase.auth.getSession()

  if (error || !data.session) {
    throw new Error(error?.message || 'No session found')
  }

  return data.session
}
