<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="$route.path" style="height: 100vh;" router>
        <el-submenu v-for="(item ,index) in menu.items" 
          :key="`item-${item.title}-${index}`"
          :index="`${index+1}`"
        >
          <template #title>
            <i class="el-icon-message"></i>{{item.title}}
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(subItem, subIndex) in item.items" 
              :key="`subItem-${subItem.title}-${subIndex}`" 
              :index="subItem.path">
              {{subItem.title}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Vue 3 Admin</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Main',
  data() {
    return {
      menu: {
        items: [
          {
            title: '内容管理',
            items: [
              {
                title: '首页',
                path: '/',
              },
              {
                title: '视频管理',
                path: '/video/list',
              },
              {
                title: '分P管理',
                path: '/video/manage',
              },
            ]
          },
          {
            title: '运营管理',
            items: [
              {
                title: '用户管理',
                path: '/user/list',
              },
              {
                title: '分P管理',
                path: '/esipode/list',
              },
            ]
          }
        ]
      }
    }
  }
})
</script>

<style scoped>
  body {
    margin: 0;
  }
</style>