<template>
  <div>
    <p>更改公寓信息</p>
    <form action="" :model="params">
      <div class="form-item">
        floorsum: <input type="text" id=""  v-model="params.floorsum">
      </div>
      <div class="form-item">
        roomsum: <input type="text" v-model="params.roomsum">
      </div>
      <div class="form-item">
        starttime: <input type="text" v-model="params.starttime">
      </div>
    </form>
    <p></p>
    <el-button @click.native="updateFlat(params)" size="mini">提交</el-button>
    <el-button @click.native="getBack" size="mini">返回</el-button>
  </div>
</template>

<script>
import axios from 'axios'
const defaultFlats = {
  flatnum:'',
  floorsum: '',
  roomsum: '',
  starttime: '',
}
export default {
  data () {
    return {
      params: {...defaultFlats}
    }
  },
  mounted () {
    this.getFlatDetail()
  },
  methods: {
    // 获取动漫信息
    getFlatDetail () {
      const flatnum = this.$route.params.id;
      // alert(oo);
      // console.log(flatnum);
      axios.get('/api/findFlatById', {
        params: {
          flatnum: flatnum
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.params = res.data.result[0]
        }
      })
    },
    // 更改此动漫信息
    updateFlat (params) {
      if(!this.params.floorsum){
        alert("请填写楼层总数");
      }
      else if(!this.params.roomsum){
        alert("请填写房间总数");
      }
      else if(!this.params.starttime){
        alert("请填写修建时间");
      }
      else{
        axios.post('/api/updateFlat', {
          ...params
        }).then(res => {
          if (res.data.code === 200) {
            window.alert('修改成功！')
          }
        })
      }
    },
    getBack () {
      this.$router.push('/flat')
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
