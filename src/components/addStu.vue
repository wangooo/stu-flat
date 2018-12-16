<template>
  <div>
    <p class="title">添加stu</p>
    <form action="" :model="params" class="form">
      <div class="form-item">
        id: <input type="text" name="name" id="" v-model="params.id">
      </div>
      <div class="form-item">
        姓名: <input type="text" v-model="params.name">
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
        民族: <input type="text" v-model="params.nation">
      </div>
      <div class="form-item">
        专业: <input type="text" v-model="params.study">
      </div>
      <div class="form-item">
        班级: <input type="text" v-model="params.class">
      </div>
      <div class="form-item">
        号码: <input type="text" v-model="params.tel">
      </div>
      <div class="form-item">
        寝室楼号: <input type="text" v-model="params.flatnum">
      </div>
      <div class="form-item">
        寝室房号: <input type="text" v-model="params.roomnum">
      </div>
    </form>
    <div class="btn">
      <el-button @click.native="addStu(params)" size="mini">Add </el-button>
      <el-button @click.native="getBack" size="mini">go back</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const defaultstus = {
  id:'',
  name:'',
  sex:'男',
  nation:'',
  study:'',
  class:'',
  tel:'',
  flatnum:'',
  roomnum:'',
}
export default {
  data () {
    return {
      params: {...defaultstus},
      signo: "",
      capacity:"",
    }
  },
  methods: {
    addStu (params) {

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
          if(res.data.result[0]){
            // alert("存在");
            axios.get('/api/showRoomnumCount',{
              params: {
                roomnum: roomN
              }
            }).then(res => {
              if (res.data.code === 200) {
                this.signo = res.data.result[0]["count(*)"];
                if(this.signo>=this.capacity){
                  // alert("房间住满了。");
                  alert(this.capacity);
              
                }
                else{
                  axios.post('/api/addStu', {
                  ...params
                }).then(res => {
                  if (res.data.code === 200) {
                    window.alert('添加学生成功!');
                    // alert(this.params.roomnum);
                  }
                })
                }
              }
            })
          }
          else{
            alert("此寝室号不存在");
          }
        }
      })
    }
    },
    getBack () {
      this.$router.push('/student')
    }
  }
}
</script>

<style>
.form-item {
  margin: 10px;
  font-size: 16px;
}
.title{
  font-size: 20px;
}
.form{
  padding:20px;
  width: 20%;
  margin:0 auto;
  background:#F2F6FC;
  /* background:url(../../static/img/001.png) no-repeat 5px 5px; */
}
.btn{
  margin-top:20px;
}
</style>
