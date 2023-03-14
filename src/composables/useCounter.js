import { reactive } from "vue";

export default function useCounter(initialValue = 0) {
  const state = reactive({
    count: initialValue,
  });

  function increment() {
    state.count++;
  }

  function decrement() {
    state.count--;
  }

  function setValue(value) {
    state.count = value;
  }

  function reset() {
    state.count = initialValue;
  }

  return {
    count: state.count,
    increment,
    decrement,
    setValue,
    reset,
  };
}
