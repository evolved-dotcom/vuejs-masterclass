<script setup lang="ts"></script>

<template>
  <AuthLayout>
    <RouterView v-slot:="{ Component, route }">
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
