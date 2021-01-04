<template>
  <quick :data="left" v-if="left.length"></quick>
  <li>{{ flag }}</li>
  <quick :data="right" v-if="right.length"></quick>
</template>

<script>
export default {
  name: "quick",
  props: ['data'],
  setup(props) {
    let flag = props.data;
    function quickSort(arr, i, j) {
      if (i < j) {
        let left = i;
        let right = j;
        let pivot = arr[left];
        while (i < j) {
          while (arr[j] >= pivot && i < j) {
            // 从后往前找比基准小的数
            j--;
          }
          if (i < j) {
            arr[i++] = arr[j];
          }
          while (arr[i] <= pivot && i < j) {
            // 从前往后找比基准大的数
            i++;
          }
          if (i < j) {
            arr[j--] = arr[i];
          }
        }
        arr[i] = pivot;
        quickSort(arr, left, i - 1);
        quickSort(arr, i + 1, right);
        return arr;
      }
    }
    quickSort(flag,0,flag.length-1)
  },
};
</script>

<style>
</style>