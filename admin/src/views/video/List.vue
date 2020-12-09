<template>
  <div>
    <h3>
      视频列表
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs }from 'vue';
import request from '../../utils/api/axios';

export default defineComponent({
  name: 'VideoList',
  setup() {
    const data = reactive({
      tempList: [],
      // Function can write here
    })
    const refData = toRefs(data);

    return {
      ...refData
    }
  },
  methods: {
    async fetch() {
      const res = await request('videos', 'get')
      this.demo = res
      console.log('res: ', res);
    },
  },
  created() {
    console.log('get into created')
    this.fetch()
  }
})
</script>

<style scoped>
  
</style>