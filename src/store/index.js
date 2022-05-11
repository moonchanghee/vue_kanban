import {createStore} from 'vuex'
export default createStore({

    state : {
        todo : [],
        modalState : false,
        startId : '',
        updateTodo : ''
    },
    getters : { //state 가져오기
        getTodo(state){
            return state.todo
        },
        selectItem(state, id){
            return state.todo.find((e) => e.id === id)
        }
    },
    mutations : { // 상태변화
        addItem : function(s,d){
            this.state.todo.push(d)
            this.state.modalState = false
        },
        deleteItem : function(s,id){
            let itemIndex = this.state.todo.findIndex((e) => e.id === id)
            this.state.todo.splice(itemIndex , 1)
        },
        updateItem : function(s,item){
            let updateIndex = this.state.todo.findIndex((e) => e.id === item.id)
            this.state.todo.splice(updateIndex , 1, item)
        },
        updateOpenModal : function(){

        },
        onDrop : function(s , data){
            data.event.preventDefault()
            let selectItem = this.state.todo.find((e) => e.id === this.state.startId)
            let deleteId = this.state.todo.findIndex((e) => e.id === this.state.startId)
            let move = this.state.todo.findIndex((d) => d.id === data.event.path[1].id)
            selectItem.todoState = data.todoState
            this.state.todo.splice(deleteId , 1)
            this.state.todo.splice(move+1 , 0, selectItem)
        }
    },
    actions : { //

    }

})