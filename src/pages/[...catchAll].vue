<script setup lang="ts">
import { useErrorStore } from '@/stores/error.ts';

useErrorStore().setActiveError({
  customCode: 404,
  error: 'The page you are looking for does not exist.',
});
</script>
