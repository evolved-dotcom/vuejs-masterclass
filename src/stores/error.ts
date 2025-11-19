import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { PostgrestError } from '@supabase/supabase-js';
import type { CustomError, ExtendedPostgrestError } from '@/types/Error';

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | ExtendedPostgrestError | CustomError>(null);

  const setActiveError = ({
    error,
    customCode,
  }: {
    error: string | PostgrestError;
    customCode: number;
  }) => {
    if (typeof error === 'string') {
      const newCustomError = new Error(error) as CustomError;
      newCustomError.customCode = customCode;

      activeError.value = newCustomError;
      return;
    }

    const newExtendedError: ExtendedPostgrestError = {
      ...error,
      statusCode: customCode,
    };

    activeError.value = newExtendedError;
  };

  return {
    activeError,
    setActiveError,
  };
});
