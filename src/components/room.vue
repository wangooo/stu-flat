<template>
  <div>
    <anav></anav>
    <div class="top">
      <p class="title">寝室信息表</p>
      <div class="search">
        <el-input type="text" v-model="serachnum" size="mini" placeholder="输入roomnum"></el-input>
        <el-button type="submit" @click.native="serach()" size="mini">查询</el-button>
      </div>
    </div>
    <table class="atable">
      <thead>
        <tr>
          <th>roomnum</th>
          <th>capacity</th>
          <th>fee</th>
          <th>roomtel</th>
          <th>flatnum</th>
          <th>check</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in rooms" :key="index">
            <td>{{item.roomnum}}</td>
            <td>{{item.capacity}}</td>
            <td>{{item.fee}}</td>
            <td>{{item.roomtel}}</td>
            <td>{{item.flatnum}}</td>
            <td><el-button size="mini" @click="getHref(item)">check</el-button></td>
            <td><el-button size="mini" @click="update(item)">update</el-button></td>
            <td><el-button size="mini" @click="deleteContent(item, index)">delete</el-button></td>
          </tr>
      </tbody>
    </table>
    <p><el-button @click.native="addRoom()" class="add">添加寝室</el-button></p>
  </div>
</template>
<script>
import anav from './anav'
import axios from 'axios'
export default {
  data () {
    return {
      rooms: [],
      serachnum:'',
    }
  },
  mounted () {
    this.getRooms()
  },
  components:{anav},
  methods: {
    // 获取全部的房间信息
    getRooms () {
      axios.get('/api/findAllRooms').then(res => {
        if (res.data.code === 200) {
          this.rooms = res.data.result
        }
      })
    },
    addRoom(){
        this.$router.push('/addRoom');
    },
    getHref (item) {
      this.$router.push(`/detailRoom/${item.roomnum}`)
    },
    update (item) {
      this.$router.push(`/updateRoom/${item.roomnum}`)
    },
    deleteContent (item, index) {
      axios.post('/api/deleteRoom', {
        roomnum: item.roomnum
      }).then(res => {
        if (res.data.code === 200) {
          this.rooms.splice(index, 1)
          window.alert('删除寝室信息成功!')
        }
      })
    },
    serach(){
      this.$router.push(`/detailRoom/${this.serachnum}`)
    }
  }
}
</script>

<style lang="scss" scoped>
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
  .el-input{
    width: 70%;
  }
}

.atable{
    padding:20px;
    margin:0 auto;
    width: 80%;
    background:rgba($color: #409EFF, $alpha: 0.7);
  }
  .add{
    margin-top:30px;
  }
</style>

