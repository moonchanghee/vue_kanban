<template>
  <div class="kanban">
    <div class="content" >
      <div class="ToDo"
           @drop = "onDrop($event)"
           @dragover = "onDragover($event)"
      >
        <div class = "item item-todo">ToDo</div>
        <div class="ToDo" v-for = "item in todo">
          <div v-if = "item.todoState === 'ToDo'" v-bind:id = "item.id" v-bind:class = "item.todoState" >
            <TodoItem
                :item = "item"
                @dragstart = "onStartDrag(item.id)"
            />
          </div>
        </div>
      </div>
      <div class="In_progress"
           @drop = "onDrop($event)"
           @dragover = "onDragover($event)"
      >
        <div class = "item item-inprogress">In Progress</div>
        <div v-for = "item in todo">
          <div v-if = "item.todoState === 'In_progress'" v-bind:id = "item.id" v-bind:class = "item.todoState" >
            <TodoItem
                :item = "item"
                @dragstart = "onStartDrag(item.id)"
            />
          </div>
        </div>
      </div>
      <div class="Done"
           @drop = "onDrop($event)"
           @dragover = "onDragover($event)"
      >
        <div class = "item item-done">Done</div>
        <div class="Done" v-for = "item in todo">
          <div v-if = "item.todoState === 'Done'" v-bind:id = "item.id" v-bind:class = "item.todoState" >
            <TodoItem
                :item = "item"
                @dragstart = "onStartDrag(item.id)"
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
import Constant from "../constant";

export default {
  name : "kanban",

  data() {
    return{
      todo : this.$store.state.todo,
      startId : ""
    }
  },
  components : {
    TodoItem,
    DropZone
  },
  computed: {
    todo: {
      get() {
        return this.$store.state.todo
      },
    }},
  methods : {
    onStartDrag (id) {
      this.startId = id
    },

    onDrop(e){
      e.preventDefault()
      let selectItem = this.todo.find((e) => e.id === this.startId)
      let deleteId = this.todo.findIndex((e) => e.id === this.startId)
      this.todo.splice(deleteId , 1)
      let move = this.todo.findIndex((d) => d.id === e.path[1].id)
      if(e.path[2].getAttribute("class") === "content"){
        selectItem.todoState = e.path[1].getAttribute("class")
      }else{
        console.log(e.path[2].getAttribute("class"))
        selectItem.todoState = e.path[2].getAttribute("class")
      }
      this.todo.splice(move+1 , 0, selectItem)
      e.target.classList.remove("dropzone_active")
    },
    onDragover(e){
      e.preventDefault()
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

/* .dropzone{*/
/*   height: 7px;*/
/*   transition: background 0.15s, height 0.15s;*/
/* }*/

/*.dropzone_active {*/
/*  height: 30px;*/
/*  background: rgba(0, 0, 0, 0.25);*/
/*}*/


</style>