<template>
  <el-container class="form-container">
    <el-form :model="form" label-width="100px" class="video-form">
      <el-form-item label="视频标题" class="video-title">
        <el-input v-model="form.name" placeholder="视频标题"></el-input>
      </el-form-item>
      <el-form-item label="视频简介">
        <el-input v-model="form.desc" placeholder="视频简介"></el-input>
      </el-form-item>
      <el-form-item label="视频封面">
        <el-upload
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          class="video-pic-uploader">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-container>
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
      form: {
        name: '111',
        desc: ''
      },
    });

    const refData = toRefs(data);


    const onSubmit = (): void => {
      console.log('data: ', data.form.desc);
    };

    onBeforeMount(() => {
      console.log('id: ', props.id);
      data.ifAdd = props.id === '' 
      console.log('ifAdd: ', data.ifAdd)
    });

    return {
      ...refData,
      onSubmit
    }
  }
})
</script>

<style>
  .form-container {
    margin-left: 10rem;
  }
  .video-form {
    width: 80%;
  }
</style>