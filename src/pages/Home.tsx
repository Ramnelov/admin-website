import { useNavigate } from '@solidjs/router'
import { ImSpinner8 } from 'solid-icons/im'
import { Component, createEffect, Match, Switch } from 'solid-js'
import { GradesStatistics } from '~/components/grades-statistics'
import { GradesTable } from '~/components/grades-table'
import { useGradesData, useSessionData } from '~/data/data-context'

export const Home: Component = () => {
  const sessionDataResource = useSessionData()
  const gradesDataResource = useGradesData()
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
        <Match when={sessionDataResource.loading || gradesDataResource.loading}>
          <ImSpinner8 class="mx-auto size-10 animate-spin" />
        </Match>
        <Match when={!sessionDataResource.error && !gradesDataResource.error}>
          <div class="flex items-start space-x-4">
            <GradesTable grades={gradesDataResource() ?? []} />
            <GradesStatistics grades={gradesDataResource() ?? []} />
          </div>
        </Match>
        <Match when={gradesDataResource.error}>
          <h1 class="mb-4 text-3xl font-semibold">Error</h1>
        </Match>
      </Switch>
    </>
  )
}
