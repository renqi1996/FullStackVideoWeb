<template>
  <div>
    <h3>
      视频列表
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, reactive, toRefs }from 'vue';
import request from '../../utils/api/axios';

export default defineComponent({
  name: 'VideoList',
  setup() {
    const data = reactive({
      tempList: [],
      // Function can write here
      fetchList: async () => {
        const res = await request('videos', 'get')
        console.log('res: ', res);
      },
    })
    const refData = toRefs(data);

    onBeforeMount(() => {
      console.log('1111');
      data.fetchList();
    });

    onMounted(() => {
      console.log('222');
    })

    return {
      ...refData
    }
  },
})
</script>

<style scoped>
  
</style>