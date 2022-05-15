<template>
  <div id="app">
    <Header/>
    <Modal/>
    <Kanban/>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import Kanban from "./layouts/Kanban.vue"
import Header from './layouts/Header.vue'

export default {
  name: 'App',
  components: {
    Modal,
    Kanban,
    Header
  }
}
</script>



