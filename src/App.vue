<template>
  <div id="app">
    <div class="header">
      <div class="head-container">
        <div class="head-title">To Do 칸반보드</div>
        <div class="head-button"><div class = "headBtn" @click="showModal = true" >추가</div></div>
        <div class="head-selectbox">우선순위
          <select class = "select">
            <option selected>선택</option>
            <option class = "sel_high">우선순위 높은순</option>
            <option class = "sel_low">우선순위 낮은순</option>
          </select>
        </div>
      </div>
    </div>
    <Modal
        :show= "showModal"
        :updateBool = "updateBool"
        :selectItem = "selectItem"
        @setData = "setTodoItem"

    />
    <Kanban
        :todo="todo"
        v-on:delId="this.deleteId"
        @deleteId = "deleteItem"
        @updateId = "updateItem"
    />
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import Kanban from "./layouts/Kanban.vue";
// import {eventBus} from "./main";
import eventBus from "./eventBus";

export default {
  name: 'App',
  components: {
    Modal,
    Kanban
  },
  data(){
    return {
      showModal: false,
      todo : [],
      selectItem : [],
      updateBool : false
    }
  },
  methods: {
    setTodoItem(e){
      this.showModal = e.state;
      this.todo.push(e)
      //스토리지 작업 추가

    },
    deleteItem(i){
      let itemIndex = this.todo.findIndex((e) => e.id === i)
      this.todo.splice(itemIndex , 1)
    },
    updateItem(i){
      console.log("수정 수정 수정")
      this.selectItem = this.todo.find((e) => e.id === i)
      this.showModal = true;
      console.log("this.selectItem", this.selectItem, this.showModal)
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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

