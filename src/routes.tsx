import { Navigate, Route } from '@solidjs/router'
import { Home } from '~/pages/Home'
import { Login } from '~/pages/Login'

export const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/*" component={() => <Navigate href={'/'} />} />
    </>
  )
}
