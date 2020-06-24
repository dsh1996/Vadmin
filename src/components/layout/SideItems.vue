<template>
  <Aside :style="{width: width+'px', 'background-color': theme, height: '100%'}">
    <Section>
      <el-menu
        default-active="/sys"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
        :background-color="theme"
        text-color="#fff"
        active-text-color="rgba(255,255,255,.7)"
        :collapse="false"
      >
        <template v-for="root in menus">
          <el-submenu v-if="root.children && root.children.length > 0" :key="root.name" :index="root.path">
            <template slot="title">
              <i :class="root.icon"></i>
              <span>{{root.name}}</span>
            </template>

            <template v-if="root.children.find(v => v.type === 1)">
              <el-menu-item-group
                v-for="group in root.children"
                :key="root.name + '/' + group.name"
              >
                <template slot="title">{{group.name}}</template>
                <template v-if="group.children">
                  <el-menu-item
                    v-for="item in group.children"
                    :key="group.name+'/'+item.name"
                    :index="item.path"
                  >
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                  </el-menu-item>
                </template>
              </el-menu-item-group>
            </template>
            <template v-else>
              <el-menu-item
                v-for="item in root.children"
                :key="root.name + '/' + item.name"
                :index="item.path"
              >
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
              </el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item v-else :index="root.path" :key="root.name">
            <i :class="root.icon"></i>
            <span>{{root.name}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </Section>
    <slot></slot>
  </Aside>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 220
    },
    theme: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {
      menus: [
        {
          name: "系统管理",
          icon: "el-icon-setting",
          path: "/sys",
          type: 0,
          children: [
            {
              name: "权限管理",
              type: 1,
              children: [
                {
                  name: "角色管理",
                  icon: "el-icon-s-help",
                  path: "/rules/list",
                  type: 2
                },
                {
                  name: "分组管理",
                  icon: "el-icon-s-ticket",
                  path: "/group/list",
                  type: 2
                },
                {
                  name: "用户管理",
                  icon: "el-icon-user-solid",
                  path: "/user/list",
                  type: 2
                }
              ]
            },
            {
              name: "权限分配",
              type: 1,
              children: [
                {
                  name: "按钮权限",
                  icon: "el-icon-s-promotion",
                  path: "/btn/list",
                  type: 2
                },
                {
                  name: "页面权限",
                  icon: "el-icon-s-grid",
                  path: "/page/list",
                  type: 2
                }
              ]
            },
            {
              name: "系统日志",
              type: 1,
              children: [
                {
                  name: "授权记录",
                  icon: "el-icon-s-check",
                  path: "/log/list",
                  type: 2
                }
              ]
            }
          ]
        },
        {
          name: "服务器",
          icon: "el-icon-refrigerator",
          path: "/server/list",
          children: []
        },
        {
          name: "收藏夹",
          icon: "el-icon-star-off",
          path: "/box",
          children: [
            {
              name: "我喜欢",
              path: "/like"
            }
          ]
        },
        {
          name: "关于我们",
          icon: "el-icon-help",
          path: "/about",
          children: []
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style  lang="less" scope>
aside {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  & > section {
    width: 100%;
    height: calc(100% - 60px);
    overflow: hidden;
    .el-menu {
      height: 100%;
      border: 0;
      font-size: 14px;
    }
  }
}
</style>