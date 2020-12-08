<template>
  <div>
    <h3>
      视频列表
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent }from 'vue';
import request from '../../utils/api/axios';

export default defineComponent({
  name: 'VideoList',
  props: {
    msg: String,
  }, 
  data() {
    return {
      count: {},
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