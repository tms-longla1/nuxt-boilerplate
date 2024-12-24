import { getMe } from '~/apis/auth.api'

const _withoutAuthRoute = ['/login']

export default defineNuxtRouteMiddleware(async (_to) => {
  const accessToken = useCookie('accessToken')
  if (accessToken.value) {
    try {
      await getMe()
      if (_withoutAuthRoute.includes(_to.path)) {
        console.log('aaaaaaas')
        return navigateTo('/')
      }
    } catch {
      accessToken.value = null
      return navigateTo('/login')
    }
  } else {
    if (!_withoutAuthRoute.includes(_to.path)) {
      return navigateTo('/login')
    }
  }
})
