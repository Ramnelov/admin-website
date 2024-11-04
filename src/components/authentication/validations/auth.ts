import type { Input } from 'valibot'
import { email, minLength, object, string } from 'valibot'

export const AuthSchema = object({
  email: string([email()]),
  Password: string([minLength(1)]),
})
export type AuthForm = Input<typeof AuthSchema>
