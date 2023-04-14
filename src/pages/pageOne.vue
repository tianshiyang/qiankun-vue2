<template>
  <div>
    <h1>父应用Router传递的数据: 姓名: {{ this.routeQuery.name }}, 年龄: {{ this.routeQuery.age }}</h1>
    
    <el-divider></el-divider>

    <el-card class="box-card">
      <el-form inline :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formInline.user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.postion" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    
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
      routeQuery: {},
      formInline: {
        user: "",
        postion: ""
      }
    }
  },
  created() {
    this.getRouterQuery()
  },
  methods: {
    getRouterQuery() {
      this.routeQuery = this.$route.query || {}
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