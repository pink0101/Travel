<template>
  <div id="app">
    <keep-alive> <!-- vue自带的标签 路由的内容加载过后，就放到内存中，避免生命钩子多次去获取数据，影响网页的性能 -->
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