<script setup lang="ts">
const errorStore = useErrorStore();
</script>

<template>
  <AuthLayout>
    <ErrorPage v-if="errorStore.activeError" />
    <RouterView v-else v-slot:="{ Component, route }">
      <Suspense :timeout="0">
        <Component :is="Component" :key="route.name" />
        <template #fallback>
          <div class="flex items-center justify-center h-full">
            <p>Loading...</p>
          </div>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
