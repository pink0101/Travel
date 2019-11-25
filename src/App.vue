<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!-- vue自带的标签 路由的内容加载过后，就放到内存中，避免生命钩子多次去获取数据，影响网页的性能 --> <!-- exclude="Detail" 或 activated 生命周期钩子 表示不放到内存中，每次刷新都会请求 -->
      <!-- router-view 显示的是当前路由对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>