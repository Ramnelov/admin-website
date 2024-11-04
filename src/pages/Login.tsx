import { ImSpinner8 } from 'solid-icons/im'
import { Component, createEffect, Show } from 'solid-js'
import { useNavigate } from '@solidjs/router'

import { UserAuthForm } from '~/components/authentication/user-auth-form'
import { useSessionData } from '~/data/data-context'

export const Login: Component = () => {
  const sessionDataResource = useSessionData()
  const navigate = useNavigate()

  createEffect(() => {
    if (sessionDataResource.loading) {
      return
    }

    if (!sessionDataResource.error) {
      navigate('/')
    }
  })

  return (
    <>
      <Show
        when={!sessionDataResource.loading}
        fallback={<ImSpinner8 class="mx-auto size-10 animate-spin" />}
      >
        <h1 class="mb-4 text-3xl font-semibold">Please log in.</h1>
        <UserAuthForm />
      </Show>
    </>
  )
}
