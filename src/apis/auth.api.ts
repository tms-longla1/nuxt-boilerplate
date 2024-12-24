import type { TLoginPayload, TLoginResponse, TUser } from '~/types/auth.type'

export const login = (body: TLoginPayload) =>
  useNuxtApp().$http<TLoginResponse>('/auth/login', {
    method: 'POST',
    body
  })

export const getMe = async () => {
  return useNuxtApp().$http<TUser>('/auth/me')
}
