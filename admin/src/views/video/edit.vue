<template>
  <div>{{ifAdd ? '新建' : '编辑'}}</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      default: '',
    }
  },
  setup (props) {
    const data = reactive({
      ifAdd: false,
    });

    const refData = toRefs(data);

    onBeforeMount(() => {
      console.log('id: ', props.id);
      data.ifAdd = props.id === '' 
      console.log('ifAdd: ', data.ifAdd)
    });

    return {
      ...refData
    }
  }
})
</script>

<style>
  
</style>