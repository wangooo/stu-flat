<template>
  <div>
    <p>更改学生信息</p>
    <form action="" :model="params">
      <div class="form-item">
        name: <input type="text" v-model="params.name" name="name" >
      </div>
      <div class="form-item">
        <!-- sex: <input type="text" v-model="params.sex"> -->
        性别:
        <template>
        <el-radio v-model="params.sex" label="男">男</el-radio>
        <el-radio v-model="params.sex" label="女">女</el-radio>
      </template>
      </div>
      <div class="form-item">
        nation: <input type="text" v-model="params.nation">
      </div>
      <div class="form-item">
        study: <input type="text" v-model="params.study">
      </div>
      <div class="form-item">
        class: <input type="text" v-model="params.class">
      </div>
      <div class="form-item">
        tel: <input type="text" v-model="params.tel">
      </div>
      <div class="form-item">
        flatnum: <input type="text" v-model="params.flatnum">
      </div>
      <div class="form-item">
        roomnum: <input type="text" v-model="params.roomnum">
      </div>
    </form>
    <p></p>
   <el-button @click.native="updateStu(params)" size="mini">提交</el-button>
    <el-button @click.native="getBack" size="mini">返回</el-button>
  </div>
</template>

<script>
import axios from 'axios'
const defaultstus = {
  id:'',
  name:'',
  sex:'',
  nation:'',
  study:'',
  class:'',
  tel:'',
  flatnum:'',
  roomnum:''
}
export default {
  data () {
    return {
      params: {...defaultstus},
      signo: "",
      capacity:""
    }
  },
  mounted () {
    this.getStuDetail()
  },
  methods: {
    // 获取动漫信息
    getStuDetail () {
      const id = this.$route.params.sid;
      axios.get('/api/findStuById', {
        params: {
          id: id
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.params = res.data.result[0]
        }
      })
    },
    // 更改此动漫信息
    updateStu (params) {
      if(!this.params.id){
        alert("请填写id");
      }
      else if(!this.params.name){
        alert("请填写姓名");
      }
      else if(!this.params.nation){
        alert("请填写民族");
      }
      else if(!this.params.study){
        alert("请填写专业");
      }
      else if(!this.params.class){
        alert("请填写班级")
      }
      else if(!this.params.flatnum){
        alert("请填写寝室楼号");
      }
      else if(!this.params.roomnum){
        alert("请填写寝室号");
      }
      else{
        const roomN=this.params.roomnum;
        // alert(roomN);
        axios.get('/api/findRoomById', {
          params: {
            roomnum: roomN
          }
        }).then(res => {
          if (res.data.code === 200) {
            this.capacity = res.data.result[0]["capacity"];
            // alert(this.capacity);
          }
        })

        const oo=this.params.roomnum;
        axios.get('/api/showRoomnumCount',{
          params: {
            roomnum: oo
          }
        }).then(res => {
          if (res.data.code === 200) {
            this.signo = res.data.result[0]["count(*)"];
            if(this.signo>=this.capacity){
              alert("房间住满了。");
            }
            else{
              axios.post('/api/updateStu', {
              ...params
              }).then(res => {
                if (res.data.code === 200) {
                  window.alert('修改成功！')
                }
              })
            }
          }
        })
      }
    },
    getBack () {
      // alert(this.signo);
      this.$router.push('/student');
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
