<template>
  <div id="app">
    <!-- <Main></Main> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Main from '@/components/layout/Main'

export default {
  name: "App",
  components: {
    // Main
  }
};
</script>

<style>
body,
html {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-table__body-wrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background-color: #f5f5f5;
}
.el-table__body-wrapper::-webkit-scrollbar {
  width: 8px;
  height: 10px;
  background-color: #f5f5f5;
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  border-radius: 8px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
.no-scroll::-webkit-scrollbar {
  display: none;
}
</style>
