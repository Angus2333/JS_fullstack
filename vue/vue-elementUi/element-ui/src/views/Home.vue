<template>
  <div>
    <el-container>
      <el-header>
        <div class="title">旅梦管理系统</div>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">修改密码</el-dropdown-item>
            <el-dropdown-item command="2" split-button="true"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="1-2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            router
            active-text-color="#ffd04b">
          
            <el-submenu index="1" >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>学生列表</span>
              </template>
              <el-menu-item index="/home/userinfo">
                <span slot="title">酒神</span>
              </el-menu-item>
              <el-menu-item index="/home/form">
                <span slot="title" >小敏</span>
              </el-menu-item>
              <el-menu-item index="1-3">
                <span slot="title">周老板</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">作业情况</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  created() {
    this.userName = localStorage.getItem("user");
  },
  methods: {
    handleCommand(e) {
      //  console.log(e);
      if (e == 2) {
        localStorage.removeItem("user");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.el-container {
  height: calc(100vh - 60px);
}
.el-header {
  display: flex;
  justify-content: space-between;
  background-color:#393e42;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.title {
  flex: 9;
  text-align: center;
  font-size: 24px;
  font-weight: 700px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-dropdown {
  flex: 1;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-menu {
  height: 100%;
}
.el-menu li{
  min-width: auto!important;
}
</style>