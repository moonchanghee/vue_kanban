<template>
  <div id="app">
    <Header
      @sortTodoList = "sortTodoList"
    />
    <Modal
        :show= "showModal"
        :updateBool = "updateBool"
        :selectItem = "selectItem"
    />
    <Kanban
        :todo="todo"
        @updateId = "updateOpen"
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

    updateOpen(i){
      this.selectItem = this.todo.find((e) => e.id === i)
      this.showModal = true;
      this.updateBool = true
    },
  }
}
</script>



