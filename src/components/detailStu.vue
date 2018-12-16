<template>
<div class="container">
  <p class="title">学生详情</p>
  <table class="atable">
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
        </tr>
      </thead>
      <tbody>
           <tr v-for="(item, index) in params" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.nation}}</td>
            <td>{{item.study}}</td>
            <td>{{item.class}}</td>
            <td>{{item.tel}}</td>
            <td>{{item.flatnum}}</td>
            <td>{{item.roomnum}}</td>
          </tr>
      </tbody>
    </table>
    <el-button size="mini" class="btn" @click.native="goback()">go back</el-button>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'detailRoom',
  data () {
    return {
      params: []
    }
  },
  mounted () {
    this.getStuDetail()
  },
  methods: {
    // 获取动漫信息
    getStuDetail () {
      const id = this.$route.params.sid;
    //   alert(roomnum);
      axios.get('/api/findStuById', {
        params: {
          id: id
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.params = res.data.result
        }
      })
    },
    goback(){
      this.$router.push('/student');
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn{
  margin-top:30px;
}
.title{
  margin-bottom:20px;
}
.atable{
  width: 80%;
  margin:0 auto;
  background:#E4E7ED;
  padding:20px;
}
</style>

