<template>
  <div class = "todoItem"  draggable="true" >
    <div class = "item_content">
      <p>제목 :  </p>
      <p>생성일 :</p>
      <p>내용 :</p>
    </div>
    <div class="item_button">
      <button class = "delbtn">삭제</button>
      <button class = "upbtn">수정</button>
      <p class = "priority"> ${e.item_priority}</p>
    </div>
  </div>
</template>

<script>




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
  /*margin-top: 5px;*/
  margin: 5px 5px;
  float:right;

}



</style>