<template>
  <div>
    <p class="title">添加公寓信息</p>
    <form action="" :model="params">
      <div class="form-item">
        寝室楼号: <input type="text" name="name" id="" v-model="params.flatnum">
      </div>
      <div class="form-item">
        总楼层数: <input type="text" v-model="params.floorsum">
      </div>
      <div class="form-item">
        总房间数: <input type="text" v-model="params.roomsum">
      </div>
      <div class="form-item">
        修建时间: <input type="text" v-model="params.starttime">
      </div>
    </form>
    <p></p>
    <el-button @click.native="addFlat(params)" size="mini">Add </el-button>
    <el-button @click.native="getBack" size="mini">go back</el-button>
  </div>
</template>

<script>
import axios from 'axios'
const defaultflats = {
  flatnum: '',
  floorsum: '',
  roomsum: '',
  starttime: ''
}
export default {
  data () {
    return {
      params: {...defaultflats}
    }
  },
  methods: {
    // 添加一条动漫信息
    addFlat (params) {
      axios.post('/api/addFlat', {
        ...params
      }).then(res => {
        if (res.data.code === 200) {
          window.alert('添加公寓信息成功!')
        }
      })
    },
    getBack () {
      this.$router.push('/flat')
    }
  }
}
</script>

<style>
.form-item {
  margin: 10px;
  font-size: 16px;
}
</style>
