<template>
  <div>
    <p>更改寝室信息</p>
    <form action="" :model="params">
      <div class="form-item">
        capacity: <input type="text" id=""  v-model="params.capacity">
      </div>
      <div class="form-item">
        fee: <input type="text" v-model="params.fee">
      </div>
      <div class="form-item">
        roomtel: <input type="text" v-model="params.roomtel">
      </div>
      <div class="form-item">
        flatnum: <input type="text" v-model="params.flatnum">
      </div>
    </form>
    <p></p>
    <el-button @click.native="updateRoom(params)" size="mini">提交</el-button>
    <el-button @click.native="getBack" size="mini">返回</el-button>
  </div>
</template>

<script>
import axios from 'axios'
const defaultRooms = {
  roomnum:'',
  capacity: '',
  fee: '',
  roomtel:'',
  flatnum: ''
}
export default {
  data () {
    return {
      params: {...defaultRooms}
    }
  },
  mounted () {
    this.getRoomDetail()
  },
  methods: {
    // 获取动漫信息
    getRoomDetail () {
      const roomnum = this.$route.params.r;
      // alert(oo);
      // console.log(flatnum);
      axios.get('/api/findRoomById', {
        params: {
          roomnum: roomnum
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.params = res.data.result[0]
        }
      })
    },
    // 更改此动漫信息
    updateRoom (params) {
      axios.post('/api/updateRoom', {
        ...params
      }).then(res => {
        if (res.data.code === 200) {
          window.alert('Update room successfully!')
        }
      })
    },
    getBack () {
      this.$router.push('/room')
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
