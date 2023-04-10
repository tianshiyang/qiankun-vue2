<template>
  <div>
    <h1>父应用Router传递的数据: 姓名{{ this.routeQuery.name }}, 年龄 {{ this.routeQuery.age }}</h1>
    
    <el-button-group>
      <el-button type="primary" @click="goPage2">下一个页面</el-button>
      <el-button type="primary" @click="goBaseSystem">跳回主系统</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeQuery: {}
    }
  },
  created() {
    this.getRouterQuery()
  },
  methods: {
    getRouterQuery() {
      this.routeQuery = this.$route.query
    },
    goPage2() {
      this.$router.push({
        path: "pageTwo"
      })
    },
    goBaseSystem() {
      // 这里使用项目父应用的router进行跳转
      this.$parentRouter.push({
        path: "/qiankun-home",
        query: {
          status: 1,
          statusName: "vue2子应用的数据"
        }
      })
    }
  }
}
</script>