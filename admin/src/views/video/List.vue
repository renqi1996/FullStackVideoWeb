<template>
  <div>
    <h3>
      视频列表
    </h3>
    <el-table :data="tempList" border stripe>
      <el-table-column 
        v-for="(field, name) in fields"
        :prop="name"
        :key="name"
        :label="field.label"
        :width="field.width">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs }from 'vue';
// import request from '../../utils/api/axios';
import { fetchVideoList } from '../../utils/api/video';

export default defineComponent({
  name: 'VideoList',
  setup() {
    const data = reactive({
      tempList: [] as any,
      // Function can write here,
      fields: {
        _id: {
          label: 'ID',
        },
        name: {
          label: '视频名称',
        },
        cover: {
          label: '视频封面',
        }
      },
      fetchList: async () => {
        const list = await fetchVideoList();
        console.log('list: ', list);
        data.tempList = list;
      },
    })
    const refData = toRefs(data);

    onBeforeMount(() => {
      data.fetchList();
    });

    return {
      ...refData
    }
  },
})
</script>

<style scoped>
  
</style>