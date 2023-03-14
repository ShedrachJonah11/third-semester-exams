<template>
  <div class="container">
    <h1>Counter App</h1>
    <div class="count"> Count: {{ count }}</div>
    <div>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="reset">Reset</button>
    </div>
    <div>
      <input type="number" v-model="value" />
      <button @click="setValue()">Set Value</button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import useCounter from "@/composables/useCounter";

export default {
  name: "CounterComponent",
  setup() {
    const { count, increment, decrement, setValue, reset } = useCounter();

    const value = ref(count.value);

    watch(count, (newValue) => {
      value.value = newValue;
    });

    return {
      count,
      increment,
      decrement,
      setValue,
      reset,
      value,
    };
  },
};
</script>


<style>
.count {
  font-size: 48px;
  margin: 50px 0;
}
.container {
  display: flex;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
button {
  margin: 10px;
 border-radius: 20px;
	border: 1px solid #F2eee3;
	background-color: #F2eee3;
	color: black;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	border-color: red;
}
input {
	background-color: #f2eee3;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 30%;
    border-radius: 10px;
}
</style>
