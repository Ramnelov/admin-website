import { Component } from 'solid-js'

import { UserAuthForm } from '~/components/authentication/user-auth-form'

export const Home: Component = () => {
  return (
    <>
      <h1 class="mb-4 text-3xl font-semibold">Please log in.</h1>
      <UserAuthForm />
    </>
  )
}
