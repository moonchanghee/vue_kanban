<template>
  <div class = "todoItem"  draggable="true">
    <div class = "item_content">
      <p>제목 : {{item.todoTitle}} </p>
      <p>생성일 :{{item.todoDate}} </p>
      <p>내용 : {{item.todoContents}}</p>
    </div>
    <div class="item_button">
      <button class = "delbtn" @click = "deleteBtn" >삭제</button>
      <button class = "upbtn" @click = "updateBtn" >수정</button>
      <p class = "priority"> {{item.todoPriority}}</p>
    </div>
  </div>
</template>
정
<script>
export default {
  props: {
    item : Object,
  },
  methods : {
    deleteBtn(){
      this.$store.commit('deleteItem', this.item.id)
    },
    updateBtn(){
      this.$store.commit('deleteItem', this.item.id)
    }
  }
}
</script>


<style>
.todoItem{
  border: 2px solid;
  margin: 1px 1px;
  height: 120px;
  background-color: white;
  padding: 10px 50px;
}
.item_content{
  display: inline-block;
  float: left;
}

.item_button{
  display: inline-block;
  margin: 5px 5px;
  float:right;

}

</style>