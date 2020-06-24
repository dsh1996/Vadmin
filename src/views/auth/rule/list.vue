<template>
  <section>
    <el-table :data="rules" border style="width: 100%" class="scroll">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="角色" align="center"></el-table-column>
      <el-table-column prop="auth" label="权限" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <section style="margin:15px auto; text-align:center">
      <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        {
          name: "管理员",
          auth: "增、删、改、查",
          status: "分发",
          createTime: "2020-06-22 15:33:21",
          updateTime: "2020-06-22 15:33:21"
        },
        {
          name: "系统检查员",
          auth: "查",
          status: "回收",
          createTime: "2020-06-22 15:33:21",
          updateTime: "2020-06-22 15:33:21"
        }
      ]
    };
  }
};
</script>

<style>
</style>