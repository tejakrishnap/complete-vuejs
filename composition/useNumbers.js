import { computed, ref, watch } from "vue";

export function useNumbers() {
  const a = ref(0);
  const b = ref(0);
  const history = ref([]);

  const total = computed(() => a.value + b.value);

  watch([a, b], ([newA, newB], [oldA, oldB]) => {
    if (newA !== oldA) {
      history.value.push(`A: ${oldA} -> ${newA}`);
    }

    if (newB !== oldB) {
      history.value.push(`B: ${oldB} -> ${newB}`);
    }
  });

  return {
    a,
    b,
    total,
    history,
  };
}

// Read more about composition and utilities at https://vueuse.org/
