<template>
  <div>
    <p>添加stu</p>
    <form action="" :model="params">
      <div class="form-item">
        id: <input type="text" name="name" id="" v-model="params.id">
      </div>
      <div class="form-item">
        name: <input type="text" v-model="params.name">
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
    </form>
    <p></p>
    <button @click="autoAdd(params)">Add </button>
    <button @click="getBack()">go back</button>
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
  methods:{
      getBack(){
        this.$router.push('/student');
      },
      autoAdd(params){
        const stud=this.params.study;
        axios.get('/api/findStuByStudy', {
        params: {
          study: stud
        }
      }).then(res => {
        if (res.data.code === 200) {
          // this.capacity = res.data.result[0]["capacity"];
          alert("ss");
        }
      })
      },
  }
  
}
</script>

<style>
.form-item {
  margin: 10px;
  font-size: 16px;
}
</style>
