import type { PostgrestError } from '@supabase/supabase-js';
export interface ExtendedPostgrestError extends PostgrestError {
  statusCode?: number;
}
export interface CustomError extends Error {
  customCode?: number;
}
