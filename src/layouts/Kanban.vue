<template>
  <div class="kanban">
    <div class="content" >
      <div class="ToDoMain">
        <div class = "item item-todo">ToDo</div>
        <DropZone
            :todoState = "'Todo'"
        />
        <div class="ToDo" v-for = "item in $store.state.todo">
          <div v-if = "item.todoState === 'ToDo'" v-bind:id = "item.id" v-bind:class = "item.todoState" >
            <TodoItem
                :item = "item"
                @dragstart = "startDrag(item.id)"
            />
            <DropZone
                :todoState = "item.todoState"
            />
          </div>
        </div>
      </div>
      <div class="In_progressMain">
        <div class = "item item-inprogress">In Progress</div>
        <DropZone
            :todoState = "'In_progress'"
        />
        <div class="In_progress" v-for = "item in this.$store.state.todo">
          <div v-if = "item.todoState === 'In_progress'" v-bind:id = "item.id" v-bind:class = "item.todoState" >
            <TodoItem
                :item = "item"
                @dragstart = "startDrag(item.id)"
            />
            <DropZone
                :todoState = "item.todoState"
            />
          </div>
        </div>
      </div>
      <div class="DoneMain">
        <div class = "item item-done">Done</div>
        <DropZone
            :todoState = "'Done'"
        />
        <div class="Done" v-for = "item in this.$store.state.todo">
          <div v-if = "item.todoState === 'Done'" v-bind:id = "item.id" v-bind:class = "item.todoState" >
            <TodoItem
                :item = "item"
                @dragstart = "startDrag(item.id)"
            />
            <DropZone
                :todoState = "item.todoState"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'
import DropZone from "../components/DropZone.vue";

export default {
  name : "kanban",
  components : {
    TodoItem,
    DropZone
  },
  data(){
    return {
      startId : "",
    }
  },
  props:{
    todo : Array,
  },
  methods : {
    startDrag (id) {
      this.$store.state.startId = id
    },
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