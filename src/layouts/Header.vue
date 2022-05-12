<template>
  <div class="header">
        <div class="head-title">To Do 칸반보드</div>
        <div class="head-button"><div class = "headBtn" @click =  "this.$store.state.modalState = true" >추가</div></div>
        <div class="head-selectbox">우선순위
          <select class = "select"  v-model = "selectOption" @change="onChangeSelect">
            <option selected>선택</option>
            <option>높은순</option>
            <option>낮은순</option>
          </select>
        </div>
  </div>
</template>

<script>
export default {
  props : {
    selectOption : ''
  },
  methods : {
    onChangeSelect(){
      this.$store.dispatch('sortTodoList', this.selectOption)
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  margin-top: 50px;
  top : 0;
  left : 0;
  text-align: center;
}
.head-button{
  float: right;
  margin-right: 6%;
  width: 120px;
  height: 50px;
  font-size:30px;
  color: white;
  line-height: 50px;
  text-align: center;
  background: black;
  border: solid 2px;
  border-radius: 17px;
}
.head-selectbox{
  float: left;
  margin-left: 6%;
  margin-top : 30px
}
.head-title{
  font-weight: bold;
  font-size: 50px;
  color: gray;
}
a {
  color: #42b983;
}
</style>
