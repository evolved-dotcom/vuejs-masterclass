<script setup lang="ts">
import { usePageStore } from '@/stores/page.ts';
import { type Projects, projectsQuery } from '@/utils/supaQueries.ts';
import { columns } from '@/utils/tableColumns/projectColumns.ts';

usePageStore().pageData.title = 'Projects page';

const projects = ref<Projects | null>(null);
const getProjects = async () => {
  const { data, error } = await projectsQuery;

  if (error) console.log(error);

  projects.value = data;
};
await getProjects();
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
