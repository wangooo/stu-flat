<template>
  <div class="backg">
    <anav></anav>
    <div class="top">
      <p class="title">学生信息表</p>
      <div class="search">
        <el-input type="text" v-model="searchInf" placeholder="id/姓名" size="mini"></el-input>
        <el-button type="submit" @click.native="search()" size="mini">查询</el-button>
      </div>
    </div>
    <table width="80%" class="atable">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>sex</th>
          <th>nation</th>
          <th>study</th>
          <th>class</th>
          <th>tel</th>
          <th>flatnum</th>
          <th>roomnum</th>
          <th>check</th>
          <th>update</th>
          <th>delate</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in stus" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.nation}}</td>
            <td>{{item.study}}</td>
            <td>{{item.class}}</td>
            <td>{{item.tel}}</td>
            <td>{{item.flatnum}}</td>
            <td>{{item.roomnum}}</td>
            <td><el-button size="mini" @click.native="getHref(item)">check</el-button></td>
            <td><el-button size="mini" @click.native="update(item)">update</el-button></td>
            <td><el-button size="mini" @click.native="deleteContent(item, index)">delete</el-button></td>
          </tr>
      </tbody>
    </table>
    <div>
      <el-button @click.native="addStu()">添加学生信息</el-button>
      <el-button @click.native="autoadd()">自动分配</el-button>
    </div>
  </div>
</template>
<script>
import anav from './anav'
import axios from 'axios'
export default {
  data () {
    return {
      stus: [],
      serachnum:'',
      thename:"",
      idForName:"",
      searchInf:null,
    }
  },
  components:{anav},
  mounted () {
    this.getStus()
  },
  methods: {
    // 获取全部的房间信息
    getStus () {
      axios.get('/api/findAllStus').then(res => {
        if (res.data.code === 200) {
          this.stus = res.data.result
          // alert(typeof(this.stus));
        }
      })
    },
    addStu(){
      // alert(this.stus[1].id);
        this.$router.push('/addStu');
    },
    getHref(item){
        this.$router.push(`/detailStu/${item.id}`)
    },
    update(item){
        this.$router.push(`/updateStu/${item.id}`);
    },
    autoadd(){
      this.$router.push('/autoadd');
    },
    deleteContent (item, index) {
      axios.post('/api/deleteStu', {
        id: item.id
      }).then(res => {
        if (res.data.code === 200) {
          this.stus.splice(index, 1)
          window.alert('删除学生信息成功!')
        }
      })
    },
    search(){
      var flag=0;
      for(var i in this.stus){
        console.log(i+": "+this.stus[i]["id"]);
        if(this.stus[i]["id"]==this.searchInf){
          this.$router.push(`/detailStu/${this.searchInf}`)  
          flag=1;      
        }
      }
      if(flag==0){
        for(var j in this.stus){
        console.log(j+": "+this.stus[j]["name"]);
        if(this.stus[j]["name"]==this.searchInf){
          this.idForName=this.stus[j]["id"];
        }
      }
      this.$router.push(`/detailStu/${this.idForName}`)
      }
    },
    autoFp(){
      
    }
  }
}
</script>

<style scoped lang="scss">
.top{
  width: 80%;
  margin:0 auto;
  background: #E4E7ED;
  overflow:hidden;
  .title{
    text-align:left;
    font-size:20px;
    margin:20px;
    float:left;
  }
  .search{
    width: 220px;
    margin-right:20px;
    float:right;
    line-height:68px;
  }
}

.atable{
  margin:0 auto;
  background:rgba($color: #409EFF, $alpha: 0.7);
  margin-bottom:20px;
  padding:20px;
}
.el-input{
  width: 70%;
}

</style>

