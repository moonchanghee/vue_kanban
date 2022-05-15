<template>
  <div class="dropzone"
       @drop = "onDrop($event)"
       @dragover = "onDragover($event)"
       @dragleave  = "onDragleave($event)"
  />
</template>

<script>
export default {
  data() {
    return{
      todo : this.$store.state.todo
    }
  },

  props: {
    todoState : String
  },
  methods : {
    onDrop(e){
      let payload = {
        event : e,
        todoState : this.todoState
      }
      this.$store.dispatch('onDrop', payload)
      e.target.classList.remove("dropzone_active")
    },
    onDragover(e){
      e.preventDefault()
      e.target.classList.add("dropzone_active")
    },
    onDragleave(e){
      e.target.classList.remove("dropzone_active")
    }
  }
}

</script>

<style>
.dropzone{
  height: 7px;
  transition: background 0.15s, height 0.15s;
}

.dropzone_active {
  height: 30px;
  background: rgba(0, 0, 0, 0.25);
}

</style>
