<template>
<div class="container">
  <p class="title">寝室详情</p>
  <table class="atable">
      <thead>
        <tr>
          <th>roomnum</th>
          <th>capacity</th>
          <th>fee</th>
          <th>roomtel</th>
          <th>flatnum</th>
        </tr>
      </thead>
      <tbody>
           <tr v-for="(item, index) in params" :key="index">
            <td>{{item.roomnum}}</td>
            <td>{{item.capacity}}</td>
            <td>{{item.fee}}</td>
            <td>{{item.roomtel}}</td>
            <td>{{item.flatnum}}</td>
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
    this.getRoomDetail()
  },
  methods: {
    // 获取动漫信息
    getRoomDetail () {
      const roomnum = this.$route.params.r;
    //   alert(roomnum);
      axios.get('/api/findRoomById', {
        params: {
          roomnum: roomnum
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.params = res.data.result
        }
      })
    },
    goback(){
      this.$router.push('/room');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
