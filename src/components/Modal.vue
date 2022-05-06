<template>
  <div class="modal hidden" >
    <div class="modal-title">제목  <input type="text" id = "title"></div>
    <div class="modal-date">완료일 <input type="text" id = "date">
    </div>
    <div class="modal-selectbox">우선순위
      <select id = "modal-priority">
        <option selected>선택</option>
        <option value="3">높음</option>
        <option value="2">중간</option>
        <option value="1">낮음</option>
      </select>
      상태
      <select id = "modal-state">
        <option selected>선택</option>
        <option >ToDo</option>
        <option >In_progress</option>
        <option >Done</option>
      </select>
    </div>
    <p><textarea cols="45" rows="10" id = "modal-conents"></textarea></p>
    <div class = "closeBtn hidden" @click.self = "$emit('close')" >작성완료</div>
  </div>
</template>

<script>



</script>

<style>
.modal {
  position: absolute;
  background: white;
  padding: 20px 20px;
  top: 10%;
  left: 35%;
  width: 400px;
  height: 350px;
  border: 2px solid black;

}
.modal-title {
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 15px;
}
.modal-date{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

</style>