import { ParentComponent, Suspense } from 'solid-js'

import { ColorModeProvider, ColorModeScript, createLocalStorageManager } from '@kobalte/core'
import PageContainer from '~/components/page-container'

const App: ParentComponent = (props) => {
  const storageManager = createLocalStorageManager('vite-ui-theme')

  // const [isMobile, setIsMobile] = createSignal(window.matchMedia('(max-width: 768px)').matches)

  // const updateMedia = () => {
  //   setIsMobile(window.matchMedia('(max-width: 768px)').matches)
  // }

  // onMount(() => window.matchMedia('(max-width: 768px)').addEventListener('change', updateMedia))

  // onCleanup(() =>
  //   window.matchMedia('(max-width: 768px)').removeEventListener('change', updateMedia)
  // )

  return (
    <>
      <div class="font-titillium flex h-dvh flex-col">
        <ColorModeScript storageType={storageManager.type} />
        <ColorModeProvider storageManager={storageManager} initialColorMode="dark">
          <PageContainer>
            <Suspense>{props.children}</Suspense>
          </PageContainer>
        </ColorModeProvider>
      </div>
    </>
  )
}

export default App
