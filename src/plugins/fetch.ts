import type { FetchContext } from 'ofetch'

export default defineNuxtPlugin(() => {
  // Tạo instance fetch tùy chỉnh
  const customFetch = $fetch.create({
    baseURL: 'https://dummyjson.com' as string,
    // Interceptor cho request
    onRequest(context: FetchContext) {
      // Lấy token từ cookie hoặc request headers
      let token: string | undefined

      if (import.meta.server) {
        // Trong SSR, lấy token từ request headers
        const headers = useRequestHeaders(['cookie'])
        const cookies = headers.cookie
        if (cookies) {
          const tokenMatch = cookies.match(/accessToken=([^;]+)/)
          token = tokenMatch ? tokenMatch[1] : undefined
        }
      } else {
        // Trong client, lấy token từ cookie
        const cookieToken = useCookie('accessToken').value
        token = cookieToken || undefined
      }

      // Thêm token vào header nếu có
      if (token) {
        const headers = new Headers(context.options.headers)
        headers.set('Authorization', `Bearer ${token}`)
        context.options.headers = headers
      }
    },

    // Interceptor cho response
    onResponse(_context: FetchContext) {},

    // Interceptor cho error
    onResponseError(context: FetchContext) {
      // Xử lý lỗi
      if (context.response?.status === 401) {
        // Xử lý lỗi unauthorized
        navigateTo('/login')
      }
    }
  })

  // Đăng ký $fetch tùy chỉnh
  return {
    provide: {
      http: customFetch
    }
  }
})
