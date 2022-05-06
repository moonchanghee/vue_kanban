<template>
    <Header></Header>
    <Kanban></Kanban>
    <Modal></Modal>
</template>

<script>
  import Header from './layouts/Header.vue'
  import Kanban from './layouts/Kanban.vue'
  import Modal from './components/Modal.vue'

  export default {
    name : 'App',
    components : {
      Header,
      Kanban
    },
    data(){
      return {
        isModalViewed : false,
      }
    }
  }

</script>

