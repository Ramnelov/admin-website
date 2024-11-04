import { Navigate, Route } from '@solidjs/router'
import { Login } from '~/pages/Login'
import { Home } from '~/pages/Home'

export const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/*" component={() => <Navigate href={'/'} />} />
    </>
  )
}
