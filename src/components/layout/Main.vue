<template>
  <div class="container">
    <Header :height="headerHight" :theme="'rgb(40, 40, 50)'"></Header>
    <main :style="{height: 'calc(100% - ' + headerHight + ' - 2px)'}">
      <SideItems :width="sideWidth" :theme="'rgb(61, 61, 70)'"></SideItems>

      <section class="content" :style="{width: 'calc(100% - ' + sideWidth + 'px - 20px)'}">
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!-- 页面切换 -->
        <div class="view no-scroll">
          <keep-alive>
            <router-view class="pages"></router-view>
          </keep-alive>
        </div>
        <footer style="line-height:4; text-align:center;color:#bd5c5c">@copy 2018-2030</footer>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import SideItems from "@/components/layout/SideItems";

export default {
  data() {
    return {
      headerHight: "70px",
      sideWidth: 220,
      transitionName: "fade"
    };
  },
  components: {
    Header,
    SideItems
  }
};
</script>

<style lang="less">
.container {
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  & main {
    width: 100%;
    background-color: #f4f5f5;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    .content {
      margin: 14px 9px 5px 9px;
      background-color: #fff;
      border-radius: 6px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      padding-bottom: 10px;
      overflow: hidden;
      .el-breadcrumb {
        line-height: 4;
        padding-left: 10px;
      }
      .breadcrumb {
        height: 50px;
        border-bottom: 2px dashed #eeeeee;
        margin-bottom: 10px;
      }

      .view {
        height: calc(100% - 100px);
        margin: 0 10px;
        overflow: overlay;
      }
    }
  }
}
</style>