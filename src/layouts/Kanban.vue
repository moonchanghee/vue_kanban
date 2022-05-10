<template>
  <div class="kanban">
    <div class="content" >
      <div class="ToDoMain">
        <div class = "item item-todo">ToDo</div>
        <div class="dropzone"
             @drop = "$emit('onDrop' , $event, this.startId , 'ToDo')"
             @dragover = "ondragover($event)"
             @dragleave  = "ondragleave($event)"
        />
        <div class="ToDo" v-for = "item in todo">
          <div v-if = "item.todoState === 'ToDo'" v-bind:id = "item.id" v-bind:class = "item.todoState" >
            <TodoItem
                :item = "item"
                @delete = "deleteId"
                @update = "updateId"
                @dragstart = "startDrag($event , item)"
            />
            <div class="dropzone"
                 @drop = "$emit('onDrop' , $event, this.startId , item.todoState)"
                 @dragover = "ondragover($event)"
                 @dragleave  = "ondragleave($event)"
            />
          </div>
        </div>
      </div>
      <div class="In_progressMain">
        <div class = "item item-inprogress">In Progress</div>
        <div class="dropzone"
             @drop = "$emit('onDrop' , $event, this.startId , 'In_progress')"
             @dragover = "ondragover($event)"
             @dragleave  = "ondragleave($event)"
        />
        <div class="In_progress" v-for = "item in todo">
          <div v-if = "item.todoState === 'In_progress'" v-bind:id = "item.id" v-bind:class = "item.todoState" >
            <TodoItem
                :item = "item"
                @delete = deleteId
                @update = "updateId"
                @dragstart = "startDrag($event , item)"
            />
            <div class="dropzone"
                 @drop = "$emit('onDrop' , $event, this.startId , item.todoState)"
                 @dragover = "ondragover($event)"
                 @dragleave  = "ondragleave($event)"
            />
          </div>
        </div>
      </div>
      <div class="DoneMain">
        <div class = "item item-done">Done</div>
        <div class="dropzone"
             @drop = "$emit('onDrop' , $event, this.startId , 'Done')"
             @dragover = "ondragover($event)"
             @dragleave  = "ondragleave($event)"
        />
        <div class="Done" v-for = "item in todo"  >
          <div v-if = "item.todoState === 'Done'" v-bind:id = "item.id" v-bind:class = "item.todoState" >
            <TodoItem
                :item = "item"
                @delete = deleteId
                @update = "updateId"
                @dragstart = "startDrag($event , item)"
            />
            <div class="dropzone"
                 @drop = "$emit('onDrop' , $event, this.startId , item.todoState)"
                 @dragover = "ondragover($event)"
                 @dragleave  = "ondragleave($event)"
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
  methods : {
    deleteId(e){
      this.$emit('deleteId' , e)
    },
    updateId(e){
      this.$emit('updateId' , e)
    },
    startDrag (e, item) {
      this.startId = item.id
    },
    ondragover(e){
      e.preventDefault()
      e.target.classList.add("dropzone_active")

    },
    ondragleave(e){
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