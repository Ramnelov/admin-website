import type { ParentComponent } from 'solid-js'

const PageContainer: ParentComponent = ({ children }) => {
  return (
    <div class="mt-20 flex grow flex-col items-center justify-center pb-3 text-center">
      <div class="w-full max-w-xs md:max-w-md lg:max-w-lg">{children}</div>
    </div>
  )
}

export default PageContainer
