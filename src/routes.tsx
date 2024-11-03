import { Navigate, Route } from '@solidjs/router'
import { Home } from '~/pages/Home'

export const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/*" component={() => <Navigate href={'/'} />} />;
    </>
  )
}
