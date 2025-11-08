<script setup lang="ts"></script>

<template>
  <div>
    <h1>Home Page</h1>
    <router-link :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to projects</router-link>
  </div>
</template>

<style scoped></style>
