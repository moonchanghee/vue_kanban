<template>
  <div class="kanban">
      <div class="content" >
        <div class="ToDoMain">
          <div class = "item item-todo">ToDo</div>
          <div class="ToDo">
          </div>
        </div>
        <div class="In_progressMain">
          <div class = "item item-inprogress">In Progress</div>
          <div class="In_progress">
          </div>
        </div>
        <div class="DoneMain">
          <div class = "item item-done">Done</div>
          <div class="Done">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import TooItem from '../components/TodoItem.vue'

  export default {
    name : "kanban",
    components : {
      TooItem
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
