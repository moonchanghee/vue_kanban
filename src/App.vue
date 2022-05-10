<template>
  <div id="app">
    <Header
      @openModal = "openModal"
      @sortTodoList = "sortTodoList"
    />
    <Modal
        :show= "showModal"
        :updateBool = "updateBool"
        :selectItem = "selectItem"
        @setData = "setTodoItem"
        @updateItem = "updateItem"
    />
    <Kanban
        :todo="todo"
        @deleteId = "deleteItem"
        @updateId = "updateOpen"
        @onDrop = "onDrop"
    />
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import Kanban from "./layouts/Kanban.vue";
import Header from './layouts/Header.vue'

export default {
  name: 'App',
  components: {
    Modal,
    Kanban,
    Header
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
    sortTodoList(e){
      if(e === "높은순"){
        this.todo.sort((a,b) => {
          return a.todoPriorityNum-b.todoPriorityNum
        })
      }else if(e === "낮은순"){
        this.todo.sort((a,b) => {
          return b.todoPriorityNum - a.todoPriorityNum
        })
      }
    },

    openModal(e){
      this.showModal = e
    },
    setTodoItem(e){
      this.showModal = e.state;
      this.todo.push(e)

      //스토리지 작업 추가

    },
    deleteItem(i){
      let itemIndex = this.todo.findIndex((e) => e.id === i)
      this.todo.splice(itemIndex , 1)
    },
    updateOpen(i){
      this.selectItem = this.todo.find((e) => e.id === i)
      this.showModal = true;
      this.updateBool = true
    },
    updateItem(data){
      let updateIndex = this.todo.findIndex((e) => e.id === data.id)
      this.todo.splice(updateIndex , 1, data)
      this.showModal = data.state;
      this.updateBool = data.updateBool
    },
    onDrop(e, id,s){
      e.preventDefault()
      let selectItem = this.todo.find((e) => e.id === id)
      selectItem.todoState = s
      let deleteId = this.todo.findIndex((e) => e.id === id)
      this.todo.splice(deleteId , 1)
      let move = this.todo.findIndex((d) => d.id === e.path[1].id)
      this.todo.splice(move+1 , 0, selectItem)
      e.target.classList.remove("dropzone_active")
    }
  }
}
</script>



