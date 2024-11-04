import { Session } from '@supabase/supabase-js'
import { createContext, useContext } from 'solid-js'
import type { Resource, JSX } from 'solid-js'

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
