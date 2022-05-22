import {createStore} from 'vuex'
import Constant from '../constant'
export default createStore({

    state : {
        todo : [],
        modalState : false,
        startId : '',
        updateTodo : ''
    },
    mutations : {
        addItem : function(s,payload){
            s.todo.push(payload)
            s.modalState = false
        },
        deleteItem : function(s,payload){
            let itemIndex = s.todo.findIndex((e) => e.id === payload)
            s.todo.splice(itemIndex , 1)
        },
        updateItem : function(s,payload){
            let updateIndex = s.todo.findIndex((e) => e.id === payload.id)
            s.todo.splice(updateIndex , 1, payload)
            s.updateTodo = ""
            s.modalState = false
        },
        updateOpenModal : function(s,payload){
            s.modalState = true
            s.updateTodo = payload
        },
        sortTodoList(s,payload){
            if(payload === "높은순"){
                s.todo.sort((a,b) => {
                    return a.todoPriorityNum-b.todoPriorityNum
                })
            }else if(payload === "낮은순"){
                s.todo.sort((a,b) => {
                    return b.todoPriorityNum - a.todoPriorityNum
                })
            }
        },
    },
    actions : {
        [Constant.ADD_ITEM] : ({commit}, payload) => {
            commit(Constant.ADD_ITEM, payload)
        },
        [Constant.ON_DROP] : ({commit}, payload) => {
            commit(Constant.ON_DROP, payload)
        },
        [Constant.DELETE_ITEM] : ({commit}, payload) => {
            commit(Constant.DELETE_ITEM, payload)
        },
        [Constant.UPDATE_ITEM] : ({commit}, payload) => {
            commit(Constant.UPDATE_ITEM, payload)
        },
        [Constant.UPDATE_OPEN_MODAL] : ({commit}, payload) => {
            commit(Constant.UPDATE_OPEN_MODAL, payload)
        },
        [Constant.SORT_TODOLIST] : ({commit}, payload) => {
            commit(Constant.SORT_TODOLIST, payload)
        },
    }
})