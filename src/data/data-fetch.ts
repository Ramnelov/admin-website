import { Grade } from '~/data/data-types'
import { supabase } from '~/utils/supabase'

/**
 * Fetches the current session.
 * @returns The current session.
 */
export async function fetchSession() {
  const { data, error } = await supabase.auth.getSession()

  if (error || !data.session) {
    throw new Error(error?.message || 'No session found')
  }

  return data.session
}

/**
 * Fetches the grades.
 * @returns The grades.
 */
export async function fetchGrades() {
  const { data: user, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    throw new Error('User is not authenticated')
  }

  const { data, error } = await supabase.from('grades').select('name, scope, grade')

  if (error) {
    throw new Error(error.message)
  }

  return data as Grade[]
}
