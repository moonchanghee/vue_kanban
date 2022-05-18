<template>
  <div class="kanban">
    <div class="content" >
      <div class="ToDo"
           @drop = "onDrop($event)"
           @dragover = "onDragover($event)"
           @dragleave  = "onDragleave($event)"
      >
        <div class = "item item-todo">ToDo</div>
        <div class="ToDo" v-for = "item in this.$store.state.todo">
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
           @dragleave  = "onDragleave($event)"
      >
        <div class = "item item-inprogress">In Progress</div>
        <div v-for = "item in this.$store.state.todo">
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
           @dragleave  = "onDragleave($event)"
      >
        <div class = "item item-done">Done</div>
        <div class="Done" v-for = "item in this.$store.state.todo">
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
  components : {
    TodoItem,
    DropZone
  },
  methods : {
    onStartDrag (id) {
      this.$store.state.startId = id
      console.log("start")
    },

    //캐싱 수정
    onDrop(e){
      e.preventDefault()
      console.log("eeee", e.path[2].getAttribute("class"))
      // console.log("eeee", e.path[2].getAttribute("class"))

      if(e.path[2].getAttribute("class") === "content"){
        console.log(e.path[2])
        console.log(e.path[1].getAttribute("class"))
      }
      let payload = {
        event : e,
        todoState : e.path[2].getAttribute("class")
      }
      this.$store.dispatch(Constant.ON_DROP, payload)
      e.target.classList.remove("dropzone_active")
    },




    onDragover(e){
      e.preventDefault()
      // console.log("dragover" ,e)
      // e.target.classList.add("dropzone_active")
    },
    onDragleave(e){
      console.log("dragleave" ,e)
      // e.target.classList.remove("dropzone_active")
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

/* .dropzone{*/
/*   height: 7px;*/
/*   transition: background 0.15s, height 0.15s;*/
/* }*/

/*.dropzone_active {*/
/*  height: 30px;*/
/*  background: rgba(0, 0, 0, 0.25);*/
/*}*/


</style>