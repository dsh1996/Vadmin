<template>
  <div>
    <header :style="{height: height, backgroundColor: theme}">
      <section class="left">
        <div class="logo">综合平台</div>
        <div>
          <el-button
            type="text"
            icon="el-icon-s-operation"
            style="margin-right:15px;font-size:22px;"
          ></el-button>
        </div>
      </section>
      <section class="center">
        <el-input
          placeholder="搜索应用"
          prefix-icon="el-icon-search"
          v-model="searchText"
          class="input-with-search"
        ></el-input>
      </section>
      <section class="right">
        <span>
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
        </span>
        <span>
          <el-button type="info" icon="el-icon-message" size="small" circle></el-button>
        </span>
        <span>
          <el-button type="warning" icon="el-icon-star-off" size="small" circle></el-button>
        </span>
      </section>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "60px"
    },
    theme: {
      type: String,
      default: "#fefefe"
    }
  },
  data() {
    return {
      searchText: ""
    };
  }
};
</script>

<style lang="less" scope>
* {
  padding: 0;
  margin: 0;
}

header {
  width: 100%;
  z-index: 1000;
  border-bottom: 2px solid #44444494;
  box-shadow: 0 1px 40px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      margin-left: 35px;
      font-size: 24px;
      background-image: linear-gradient(135deg, rgb(95, 103, 218), #fff);
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 600;
      letter-spacing: 5px;
    }
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: calc(100% - 220px - 200px);
    .input-with-search {
      margin-left: 10px;
      width: 300px;
      border-radius: 20px;
    }
    .el-input__inner {
      border-radius: 30px;
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
  .right {
    width: 200px;
    display: flex;
    justify-content:flex-end;
    align-items: center;
    > span {
      margin: 0 10px;
    }
  }
}
</style>