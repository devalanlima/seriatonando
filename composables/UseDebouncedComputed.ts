export default function useDebouncedComputed(computedProperty: ComputedRef){
  const debouncedValue = ref(computedProperty.value);
  let timeoutId: ReturnType<typeof setTimeout>;

  watch(computedProperty, () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      debouncedValue.value = computedProperty.value;
    }, 500);
  });

  return debouncedValue;
}