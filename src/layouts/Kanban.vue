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
                @dragstart = "startDrag($event , item)"
            />
            <div class="dropzone"
                 @drop="onDrop($event, 1)"
                 @dragover = "ondragover($event)"
                 @dragleave = "ondragleave($event)"
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
                @dragstart = "startDrag($event , item)"
            />
            <div class="dropzone"
                 @drop="onDrop($event, 1)"
                 @dragover.prevent
                 @dragenter.prevent
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
                @dragstart = "startDrag($event , item)"
            />
            <div class="dropzone"
                 @drop="onDrop($event, 1)"
                 @dragover.prevent
                 @dragenter.prevent
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
    TodoItem,
  },
  data(){
    return {
      startId : "",
    }
  },
  props:{
    todo : Array,
  },
  computed : {

  },
  methods : {
    deleteId(e){
      this.$emit('deleteId' , e)
    },
    updateId(e){
      this.$emit('updateId' , e)
    },
    startDrag (e, item) {
      console.log("start")
      this.startId = item.id
      // e.dataTransfer.dropEffect = 'move'
      // e.dataTransfer.effectAllowed = 'move'
      // e.dataTransfer.setData('itemID', item.id)
    },
    onDrop (e, list) {
      console.log("ondrop" , e, list)
      e.target.classList.remove("dropzone_active")

      // const itemID = e.dataTransfer.getData('itemID')
      // const item = this.items.find(item => item.id == itemID)
      // item.list = list
    },
    ondragover(e){
      console.log("dragover")
      e.target.classList.add("dropzone_active")
    },
    ondragleave(e){
      console.log("dragleave")
      e.target.classList.remove("dropzone_active")
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

.dropzone{
  height: 7px;
  transition: background 0.15s, height 0.15s;
}

.dropzone_active {
  height: 30px;
  background: rgba(0, 0, 0, 0.25);
}
</style>