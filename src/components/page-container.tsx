import type { ParentComponent } from 'solid-js'

const PageContainer: ParentComponent = ({ children }) => {
  return (
    <div class="mx-2 mt-20 flex grow flex-col items-center justify-center pb-3 text-center">
      <div class="w-full max-w-4xl">{children}</div>
    </div>
  )
}

export default PageContainer
