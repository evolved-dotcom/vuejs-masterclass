<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient.ts';
import type { Tables } from '../../../database/types.ts';
import type { ColumnDef } from '@tanstack/vue-table';
import { RouterLink } from 'vue-router';
import { usePageStore } from '@/stores/page.ts';
const tasks = ref<Tables<'tasks'>[] | null>(null);

usePageStore().pageData.title = 'Tasks page';

const getTask = async () => {
  const { data, error } = await supabase.from('tasks').select(`
    *,
    projects(
      id,
      name,
      slug
    )
  `);
  console.log(data);
  if (error) {
    console.error('Error fetching tasks:', error);
  } else {
    tasks.value = data;
  }
};

await getTask();

const columns: ColumnDef<Tables<'tasks'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/tasks/${row.original.id}`,
          class: 'text-left font-medium hover:bg-muted block w-full',
        },
        () => row.getValue('name'),
      );
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left' }, row.getValue('status'));
    },
  },
  {
    accessorKey: 'due_date',
    header: () => h('div', { class: 'text-left' }, 'Due Date'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left' }, row.getValue('due_date'));
    },
  },
  {
    accessorKey: 'projects',
    header: () => h('div', { class: 'text-left' }, 'Project'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/projects/${row.original.projects.slug}`,
          class: 'text-left font-medium hover:bg-muted block w-full',
        },
        () => row.getValue('projects').name,
      );
    },
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left' }, JSON.stringify(row.getValue('collaborators')));
    },
  },
];
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped></style>
