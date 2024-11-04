import { useNavigate } from '@solidjs/router'
import { ImSpinner8 } from 'solid-icons/im'
import { Component, createEffect, Match, Switch } from 'solid-js'
import { useSessionData } from '~/data/data-context'

export const Home: Component = () => {
  const sessionDataResource = useSessionData()
  const navigate = useNavigate()

  createEffect(() => {
    if (sessionDataResource.loading) {
      return
    }
    if (sessionDataResource.error) {
      navigate('/login')
    }
  })

  return (
    <>
      <Switch>
        <Match when={sessionDataResource.loading}>
          <ImSpinner8 class="mx-auto size-10 animate-spin" />
        </Match>
        <Match when={!sessionDataResource.error}>
          <h1 class="mb-4 text-3xl font-semibold">Welcome {sessionDataResource()?.user.email}</h1>
        </Match>
      </Switch>
    </>
  )
}
