<template>
    <div class="con">
        <div class="title">学生寝室信息管理系统</div>
        <form action="" :model="ress" class="form">
            <el-input v-model="ress.user" placeholder="用户名"> </el-input>
            <el-input type="password" v-model="ress.password" placeholder="密码"></el-input>
            <el-input type="submit" @click.native="goto()" size="mini"></el-input>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
const defaultRes = {
  user:'',
  password:''
}
// const defaultinput = {
//   inputuser:'',
//   inputpw:''
// }
export default {
  data () {
    return {
        ress: {...defaultRes},
        pw:'',
        inp:[]
    }
  },
  mounted () {
    this.getUsers()
  },
  methods:{
      getUsers () {
        axios.get('/api/findAllUsers').then(res => {
          if (res.data.code === 200) {
            this.inp = res.data.result
          }
        })
      },
      goto(){
        const pas=this.inp[0].password;
        const us=this.inp[0].user;
        // alert(usero);
        axios.get('/api/findUserById', {
            ress: {
             user: us
            }
        }).then(res => {
            if (res.data.code === 200) {
                if(this.ress.password==pas&&this.ress.user==us){
                    this.$store.commit('changeFlag');
                    this.$router.push('/student');
                }
                else{
                    alert("用户名或密码错误");
                }

            }
        })
        // alert(this.pw);
      }
  }
}
</script>

<style lang="scss" scoped>
.con{
    padding:10px;
    background:#409EFF;
    width: 400px;
    margin: 0 auto;
    margin-top:200px;
}
.title{
    margin-top:10px;
    font-family: "Hiragino Sans GB";
    font-size:28px; 
    color:white;       
}
.form{
    margin:20px;
    .el-input{
        margin-bottom:20px;
        width: 80%;
    }
}
</style>


