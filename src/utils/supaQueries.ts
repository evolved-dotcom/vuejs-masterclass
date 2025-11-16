import { supabase } from '@/lib/supabaseClient.ts';
import type { QueryData } from '@supabase/supabase-js';

export const taskWithProjectsQuery = supabase.from('tasks').select(`
    *,
    projects(
      id,
      name,
      slug
    )
  `);

export const projectsQuery = supabase.from('projects').select();

export type TaskWithProjects = QueryData<typeof taskWithProjectsQuery>;
export type Projects = QueryData<typeof projectsQuery>;
