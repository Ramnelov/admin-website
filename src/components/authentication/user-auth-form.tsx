import type { SubmitHandler } from '@modular-forms/solid'
import { createForm, email, required, minLength } from '@modular-forms/solid'

import { Button } from '~/components/ui/button'
import { Grid } from '~/components/ui/grid'
import { TextField, TextFieldInput, TextFieldLabel } from '~/components/ui/text-field'

import type { AuthForm } from './validations/auth'

import { ImSpinner8 } from 'solid-icons/im'

export function UserAuthForm() {
  const [authForm, { Form, Field }] = createForm<AuthForm>()

  const handleSubmit: SubmitHandler<AuthForm> = (data) => {
    try {
      console.log(data)
    } catch (error) {
      console.error((error as Error).message)
    }

    return new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <div class="grid gap-6">
      <Form onSubmit={handleSubmit}>
        <Grid class="gap-4">
          <Field
            name="email"
            validate={[
              required('Please enter your email.'),
              email('The email address is badly formatted.'),
            ]}
          >
            {(field, props) => (
              <TextField class="gap-1">
                <TextFieldLabel class="sr-only">Email</TextFieldLabel>
                <TextFieldInput
                  {...props}
                  type="email"
                  placeholder="Email"
                  class={field.error ? 'border-red-500' : ''}
                />
              </TextField>
            )}
          </Field>
          <Field
            name="password"
            validate={[
              required('Please enter your password.'),
              minLength(1, 'You password must have 1 characters or more.'),
            ]}
          >
            {(field, props) => (
              <TextField class="gap-1">
                <TextFieldLabel class="sr-only">Password</TextFieldLabel>
                <TextFieldInput
                  {...props}
                  type="password"
                  placeholder="Password"
                  class={field.error ? 'border-red-500' : ''}
                />
              </TextField>
            )}
          </Field>
          <Button type="submit" disabled={authForm.submitting}>
            {authForm.submitting && <ImSpinner8 class="mr-2 size-4 animate-spin" />}
            Login
          </Button>
        </Grid>
      </Form>
    </div>
  )
}
