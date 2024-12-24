<template>
  <div class="min-h-screen">
    <!-- Main content -->
    <div class="px-4 py-6 sm:px-0">
      <h1 class="text-4xl font-bold text-center text-gray-800">
        {{ $t('common.username') }}:
        {{ data?.username }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getMe } from '~/apis/auth.api'

const { data, suspense } = useQuery({
  queryKey: ['me'],
  queryFn: getMe
})

onServerPrefetch(async () => {
  await suspense()
})
</script>
