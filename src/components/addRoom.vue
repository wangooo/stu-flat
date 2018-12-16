<template>
  <div>
    <p>添加room</p>
    <form action="" :model="params">
      <div class="form-item">
        寝室号: <input type="text" name="name" id="" v-model="params.roomnum">
      </div>
      <div class="form-item">
        容量: <input type="text" v-model="params.capacity">
      </div>
      <div class="form-item">
        费用: <input type="text" v-model="params.fee">
      </div>
      <div class="form-item">
        座机: <input type="text" v-model="params.roomtel">
      </div>
      <div class="form-item">
        寝室楼号: <input type="text" v-model="params.flatnum">
      </div>
    </form>
    <p></p>
    <el-button @click.native="addRoom(params)" size="mini">Add </el-button>
    <el-button @click.native="getBack" size="mini">go back</el-button>
  </div>
</template>

<script>
import axios from 'axios'
const defaultrooms = {
  roomnum:'',
  capacity:'',
  fee:'',
  roomtel:'',
  flatnum:''
}
export default {
  data () {
    return {
      params: {...defaultrooms}
    }
  },
  methods: {
    // 添加一条动漫信息
    addRoom (params) {
      if(!this.params.roomnum){
        alert("请填写寝室号");
      }
      else if(!this.params.capacity){
        alert("请填写容量");
      }
      else if(!this.params.fee){
        alert("请填写费用");
      }
      else if(!this.params.roomtel){
        alert("请填写座机");
      }
      else if(!this.params.flatnum){
        alert("请填写寝室楼号");
      }
      else{
        axios.post('/api/addRoom', {
          ...params
        }).then(res => {
          if (res.data.code === 200) {
            window.alert('添加寝室信息成功!')
          }
        })
      }
    },
    getBack () {
      this.$router.push('/room')
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
