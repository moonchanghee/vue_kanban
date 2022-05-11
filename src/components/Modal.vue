<template>
  <div class="modal hidden"  v-if = "this.$store.state.modalState" >
    <div>
      <label for="title" >제목:</label>
      <input v-bind:value="todoTitle" v-on:input="updateTitle">
    </div>
    <div>
      <label for="date" >완료일: </label>
      <input v-bind:value="todoDate" v-on:input="updatDate">
    </div>
    <div>
      우선순위<select v-model="prioritySelected" v-on:input="updatePriority">
        <option v-for="option in stateOptions" v-bind:value="option.value" >
          {{ option.text }}
        </option>
      </select>
      상태<select v-model="stateSelected" v-on:input="updatedState">
        <option v-for="option in priorityOptions" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
    <p><textarea cols="45" rows="10" v-bind:value="todoContents" v-on:input="updateContents"></textarea></p>
        <div class="closeBtn"  @click =  "onClickAddItem">작성완료</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    updateBool : Boolean,
  },
  data() {
    return{
      todoTitle: "",
      todoDate : '',
      todoState : '',
      todoPriority : '',
      todoContents : '',
      todoPriorityNum : '',
      stateSelected: '0',
      prioritySelected: '0',
      stateOptions: [
        { text: '선택', value: 0 },
        { text: '높음', value: 1 },
        { text: '중간', value: 2 },
        { text: '낮음', value: 3 }
      ],
      priorityOptions: [
        { text: '선택', value: 0 },
        { text: 'ToDo', value: 'ToDo' },
        { text: 'In_progress', value: 'In_progress' },
        { text: 'Done', value: 'Done' }
      ]
    }
  },
  methods: {
    updateTitle: function(e) {
      this.todoTitle = e.target.value
    },
    updatDate: function(e) {
      this.todoDate = e.target.value
    },
    updatedState: function(e) {
      this.todoState = e.target.value
    },
    updatePriority: function(e) {
      this.todoPriorityNum = e.target.value
      this.todoPriority = e.target[e.target.value].text
    },
    updateContents : function(e){
      this.todoContents = e.target.value
    },
    uuid : function(){
      return 'xx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },

    onClickAddItem(){
      let data = {
        id : this.uuid(),
        todoTitle : this.todoTitle,
        todoDate : this.todoDate,
        todoPriority: this.todoPriority,
        todoContents: this.todoContents,
        todoPriorityNum: this.todoPriorityNum,
        todoState : this.stateSelected,
        prioritySelected:this.prioritySelected
      }
      this.$store.commit('addItem' , data)
      this.$store.state.modalState = false
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