<template>
  <div class="kanban">
    <div class="content" >
      <div class="ToDoMain">
        <div class = "item item-todo">ToDo</div>
        <div class="ToDo" v-for = "item in todo"  >
          <div v-if = "item.todoState === 'ToDo'">
            <TodoItem
                :item = "item"
                @delete = "deleteId"
                @update = "updateId"
            />

          </div>
        </div>
      </div>
      <div class="In_progressMain">
        <div class = "item item-inprogress">In Progress</div>
        <div class="In_progress" v-for = "item in todo"  >
          <div v-if = "item.todoState === 'In_progress'">
            <TodoItem
                :item = "item"
                @delete = deleteId
                @update = "updateId"
            />
          </div>
        </div>
      </div>
      <div class="DoneMain">
        <div class = "item item-done">Done</div>
        <div class="Done" v-for = "item in todo"  >
          <div v-if = "item.todoState === 'Done'">
            <TodoItem
                :item = "item"
                @delete = deleteId
                @update = "updateId"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'

export default {
  name : "kanban",
  components : {
    TodoItem
  },
  props:{
    todo : Array,
    // delId : Function
  },
  computed : {

  },
  methods : {
    deleteId(e){
      console.log("삭제")
      this.$emit('deleteId' , e)
    },
    updateId(e){
      console.log("수정")
      this.$emit('updateId' , e)
    }
  }
}

</script>


<style scoped>
.kanban {
  width:100%;
  height:800px;
  margin:0px auto;
  padding:0px;
  overflow:hidden;
  text-align: center;
}
.content{
  width:90%;
  height:90%;
  margin:24px auto;
  padding:0px;
  overflow:hidden;
  text-align:center;
}

.content > div {
  float:left;
  color:black;
  width:33%;
  height:100%;
  text-align: center;
  box-sizing:border-box;
}

.item{
  font-size: 30px;
  padding: 10px 10px;
  margin: 2px 2px;
  font-weight: bold;
}

.item-todo{
  border: 2px solid blue;
}

.item-inprogress{
  border: 2px solid red;
}

.item-done{
  border: 2px solid gray;
}

a {
  color: #42b983;
}
</style>