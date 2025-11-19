<script setup lang="ts">
import { usePageStore } from '@/stores/page.ts';
import { type TaskWithProjects, taskWithProjectsQuery } from '@/utils/supaQueries.ts';
import { columns } from '@/utils/tableColumns/taskColumns.ts';
import { useErrorStore } from '@/stores/error.ts';

const tasks = ref<TaskWithProjects | null>(null);

usePageStore().pageData.title = 'Tasks page';

const getTask = async () => {
  const { data, error, status } = await taskWithProjectsQuery;
  if (error) {
    useErrorStore().setActiveError({ error, customCode: status });
  } else {
    tasks.value = data;
  }
};

await getTask();
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped></style>
