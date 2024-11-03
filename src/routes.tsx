import { Navigate, Route } from '@solidjs/router'
import { Login } from '~/pages/Login'
import { supabase } from '~/utils/supabase'
import { Home } from '~/pages/Home'
import { createEffect, createResource } from 'solid-js'
import { User } from '@supabase/supabase-js'

// await supabase.auth.signOut()

export const Routes = () => {
  const [user, { refetch }] = createResource<User | null>(async () => {
    const { data } = await supabase.auth.getUser()
    return data.user
  })

  supabase.auth.onAuthStateChange(async () => {
    refetch()
  })

  createEffect(() => {
    console.log(user())
  })

  return (
    <>
      {user.loading ? (
        <></>
      ) : (
        <>
          <Route path="/" component={user() ? Home : () => <Navigate href="/login" />} />
          <Route path="/login" component={user() ? () => <Navigate href="/" /> : Login} />
          <Route path="/*" component={() => <Navigate href={'/'} />} />
        </>
      )}
    </>
  )
}
