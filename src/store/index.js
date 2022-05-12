import {createStore} from 'vuex'
export default createStore({

    state : {
        todo : [],
        modalState : false,
        startId : '',
        updateTodo : ''
    },
    getters : {

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
            this.state.updateTodo = ""
            this.state.modalState = false
        },
        updateOpenModal : function(s,item){
            this.state.modalState = true
            this.state.updateTodo = item
        },
        onDrop : function(s , data){
            data.event.preventDefault()
            let selectItem = this.state.todo.find((e) => e.id === this.state.startId)
            let deleteId = this.state.todo.findIndex((e) => e.id === this.state.startId)
            let move = this.state.todo.findIndex((d) => d.id === data.event.path[1].id)
            selectItem.todoState = data.todoState
            this.state.todo.splice(deleteId , 1)
            this.state.todo.splice(move+1 , 0, selectItem)
        },
        sortTodoList(s,e){
            if(e === "높은순"){
                this.state.todo.sort((a,b) => {
                    return a.todoPriorityNum-b.todoPriorityNum
                })
            }else if(e === "낮은순"){
                this.state.todo.sort((a,b) => {
                    return b.가todoPriorityNum - a.todoPriorityNum
                })
            }
        }
    },
    actions : {
        addItem({commit}, data){
            commit("addItem", data)
        },
        onDrop({commit}, data){
            commit("onDrop", data)
        },
        deleteItem({commit},id){
            commit("deleteItem", id)
        },
        updateItem({commit},data){
            commit("updateItem", data)
        },
        updateOpenModal({commit},data){
            commit("updateOpenModal", data)
        },
        sortTodoList({commit}, data){
            commit("sortTodoList", data)
        }
    }
})