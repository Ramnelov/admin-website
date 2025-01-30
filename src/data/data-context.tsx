import { Session } from '@supabase/supabase-js'
import type { JSX, Resource } from 'solid-js'
import { createContext, useContext } from 'solid-js'
import { Grade } from '~/data/data-types'

const SessionDataContext = createContext<Resource<Session>>()

export function SessionDataProvider(props: { value: Resource<Session>; children: JSX.Element }) {
  return (
    <SessionDataContext.Provider value={props.value}>{props.children}</SessionDataContext.Provider>
  )
}

export function useSessionData() {
  const value = useContext(SessionDataContext)
  if (value === undefined) {
    throw new Error('useSessionData must be used within a SessionDataProvider')
  }
  return value
}

const GradesDataContext = createContext<Resource<Grade[]>>()

export function GradesDataProvider(props: { value: Resource<Grade[]>; children: JSX.Element }) {
  return (
    <GradesDataContext.Provider value={props.value}>{props.children}</GradesDataContext.Provider>
  )
}

export function useGradesData() {
  const value = useContext(GradesDataContext)
  if (value === undefined) {
    throw new Error('useGradesData must be used within a GradesDataProvider')
  }
  return value
}
