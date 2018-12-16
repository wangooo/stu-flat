<template>
  <div>
    <anav></anav>
    <div class="top">
      <p class="title">楼房信息表</p>
      <div class="search">
        <el-input type="text" v-model="serachnum" size="mini" placeholder="输入flatnum"></el-input>
        <el-button type="submit" @click.native="serach()" size="mini">查询</el-button>
      </div>
    </div>
    <table width="80%" class="atable">
      <thead>
        <tr>
          <th>flatnum</th>
          <th>floorsum</th>
          <th>roomsum</th>
          <th>starttime</th>
          <th>check</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in flats" :key="index">
            <td>{{item.flatnum}}</td>
            <td>{{item.floorsum}}</td>
            <td>{{item.roomsum}}</td>
            <td>{{item.starttime}}</td>
            <td><el-button @click="getHref(item)" size="mini">check</el-button></td>
            <td><el-button @click="update(item)" size="mini">update</el-button></td>
            <td><el-button @click="deleteContent(item, index)" size="mini">delete</el-button></td>
          </tr>
      </tbody>
    </table>
    <p><el-button @click="addContent()" class="add">添加公寓</el-button></p>
  </div>
</template>
<script>
import anav from './anav'
import axios from 'axios'
export default {
  data () {
    return {
      flats: [],
      serachnum:''
    }
  },
  mounted () {
    this.getFlats()
  },
  components:{anav},
  methods: {
    // 获取全部的动漫信息
    getFlats () {
      axios.get('/api/findAllFlats').then(res => {
        if (res.data.code === 200) {
          this.flats = res.data.result
        }
      })
    },
    addContent () {
      this.$router.push('/addFlat')
    },
    getHref (item) {
      this.$router.push(`/detail/${item.flatnum}`)
    },
    update (item) {
      this.$router.push(`/updateFlat/${item.flatnum}`)
    },
    deleteContent (item, index) {
      axios.post('/api/deleteFlat', {
        flatnum: item.flatnum
      }).then(res => {
        if (res.data.code === 200) {
          this.flats.splice(index, 1)
          window.alert('删除公寓信息成功!')
        }
      })
    },
    serach(){
      this.$router.push(`/detail/${this.serachnum}`)
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

