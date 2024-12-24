<template>
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {{ $t('common.sign_in_title') }}
      </h2>
    </div>
    <form class="mt-8 space-y-6" novalidate @submit.prevent="onSubmit">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="username" class="sr-only">{{ $t('common.username') }}</label>
          <input
            id="username"
            v-model="username"
            v-bind="usernameAttrs"
            type="text"
            autocomplete="email"
            :placeholder="$t('common.username')"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            :class="{ 'border-red-500': errors.username }"
          />
          <span v-if="errors.username" class="text-red-500 text-xs mt-1">{{ errors.username }}</span>
        </div>
        <div>
          <label for="password" class="sr-only">{{ $t('common.password') }}</label>
          <input
            id="password"
            v-model="password"
            v-bind="passwordAttrs"
            type="password"
            autocomplete="current-password"
            :placeholder="$t('common.password')"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            :class="{ 'border-red-500': errors.password }"
          />
          <span v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</span>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">
            {{ $t('common.remember_me') }}
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            {{ $t('common.forgot_password') }}
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {{ $t('common.sign_in') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { login } from '~/apis/auth.api'
import type { TLoginPayload } from '~/types/auth.type'

definePageMeta({
  layout: 'un-auth'
})

const loginSchema = yup.object({
  username: yup.string().required('Tên người dùng là bắt buộc'),
  password: yup.string().required('Mật khẩu là bắt buộc').min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
})

type TLoginSchema = yup.InferType<typeof loginSchema>

const { handleSubmit, errors, defineField } = useForm<TLoginSchema>({
  validationSchema: loginSchema
})

const loginMutation = useMutation({
  mutationFn: (body: TLoginPayload) => login(body)
})

const [username, usernameAttrs] = defineField('username')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit((values) => {
  loginMutation.mutate(values, {
    onSuccess: (response) => {
      const accessToken = useCookie('accessToken')
      accessToken.value = response.accessToken
      navigateTo('/')
    },
    onError: (error) => {
      console.log(error)
    }
  })
})
</script>
