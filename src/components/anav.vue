<template>
  <div id="nav">
        <div class="nav">
            <p @click="gohome()">学生寝室管理系统</p>
            <div class="nav-main">
                <el-button size="mini" @click="gostu()">学生信息</el-button>
                <el-button size="mini" @click="goflat()">楼房信息</el-button>
                <el-button size="mini" @click="goroom()">寝室信息</el-button>
            </div>
        </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      params:"",
    }
  },
  // computed:{
  //   flag(){
  //     return this.$store.state.flag;
  //   }
  // },
  name: 'nav',
  methods:{
   
    gohome(){
      this.$router.push('/')
    },
    goflat(){
      this.$router.push('/flat')
    },
    goroom(){
      this.$router.push('/room')
    },
    gostu(){
      this.$router.push('/student');
    }
  } 
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
*{
  padding:0;
  margin:0;
}
.nav{
    width: 100%;
    height: 60px;
    background:#409EFF;
    position:fixed;
    top:0;
    p{
        float:left;
        text-align:left;
        line-height:60px;
        margin-left:20px;
        width: 20%;
        color:white;
        // background:yellow;
    }
    .nav-main{
        float:left;
        width: 50%;
        // background:black;
        line-height:60px;
    }
    .el-button{
        margin-left:60px;
    }
}
</style>
