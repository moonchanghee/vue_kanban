<template>
  <div class="modal hidden"  v-if = "this.$store.state.modalState">
    <div>
      <label for="title" >제목:</label>
      <input v-model = "todoTitle">
    </div>
    <div>
      <label for="date" >완료일: </label>
      <input v-model = "todoDate">
    </div>
    <div>
      우선순위<select  v-model="prioritySelected" >
        <option :value="list" v-for="list in priorityOptions">{{ list.text }}</option>
    </select>
      상태 <select  v-model="stateSelected" >
      <option :value="list" v-for="list in stateOptions">{{ list.text }}</option>
    </select>
      <br/>
      <br/>
      <textarea cols="45" rows="10" v-model = "todoContents"></textarea>
      <div v-if="this.$store.state.updateTodo === ''" class="closeBtn"  @click="onClickButton('addItem',uuid())">작성완료</div>
      <div v-else @click="onClickButton('updateItem',this.$store.state.updateTodo.id)">수정완료</div>
    </div>
  </div>
</template>
<script>
import Constant from "../constant";

export default {
  data() {
    return{
      todoTitle: "",
      todoDate : "",
      todoContents : "",
      stateSelected: '',
      prioritySelected:'',
      priorityOptions: [
        { text: '선택', value: 0 },
        { text: '높음', value: 1 },
        { text: '중간', value: 2 },
        { text: '낮음', value: 3 }
      ],
      stateOptions: [
        { text: '선택', value: 0 },
        { text: 'ToDo', value: 'ToDo' },
        { text: 'In_progress', value: 'In_progress' },
        { text: 'Done', value: 'Done' }
      ],
    }
  },
  methods: {
    checkData(){
      let reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
      if (reg.test(this.todoTitle)) {
        return "제목에는 특수문자를 사용할 수 없습니다"
      }else if (reg.test(this.todoContents)) {
        return "내용에는 특수문자를 사용할 수 없습니다"
      } else if (this.todoTitle.length > 30) {
        return "제목은 30자를 초과할 수 없습니다"
      }else if (this.todoContents.length > 150) {
        return "내용은 150자를 초과할 수 없습니다"
      }else if (this.prioritySelected === "") {
        return "우선순위를 선택해주세요"
      } else if (this.stateSelected === "") {
        return "상태를 선택해주세요"
      } else{
        return 0
      }
    },
    uuid : function(){
      return 'xx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    onClickButton(e,id){
      let payload = {
        id: id,
        todoTitle: this.todoTitle,
        todoDate: this.todoDate,
        todoPriority: this.prioritySelected.text,
        todoContents: this.todoContents,
        todoState: this.stateSelected.value,
        todoPriorityNum: this.prioritySelected.value,
      }
      if(this.checkData()){
        alert(this.checkData())
      }
      else{
        this.$store.dispatch(e, payload)
        this.todoTitle= ""
        this.todoDate = ""
        this.todoContents = ""
        this.stateSelected= ""
        this.prioritySelected= ""
      }
    }
  }
};
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

</style>

