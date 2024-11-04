import { createResource, ParentComponent, Suspense } from 'solid-js'

import { ColorModeProvider, ColorModeScript, createLocalStorageManager } from '@kobalte/core'
import PageContainer from '~/components/page-container'
import { Session } from '@supabase/supabase-js'
import { supabase } from '~/utils/supabase'
import { fetchSession } from '~/data/data-fetch'
import { SessionDataProvider } from '~/data/data-context'
import { Nav } from '~/components/nav'

// await supabase.auth.signOut()

const App: ParentComponent = (props) => {
  const storageManager = createLocalStorageManager('vite-ui-theme')

  const [session, { refetch }] = createResource<Session>(fetchSession)

  supabase.auth.onAuthStateChange(async () => {
    refetch()
  })

  return (
    <>
      <div class="flex h-dvh flex-col font-titillium">
        <ColorModeScript storageType={storageManager.type} />
        <ColorModeProvider storageManager={storageManager} initialColorMode="dark">
          <SessionDataProvider value={session}>
            <Nav />
            <PageContainer>
              <Suspense>{props.children}</Suspense>
            </PageContainer>
          </SessionDataProvider>
        </ColorModeProvider>
      </div>
    </>
  )
}

export default App
