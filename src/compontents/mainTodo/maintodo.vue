<template>
    <div class="main-todo">
        <input type="text" class="add-todo" placeholder="添加" autofocus v-model="content" @keyup.enter="addTodo">
        <todo-item v-for="item in todoList" :key="item.id" :list=item @delTodo="delList" ></todo-item>
    </div>
</template>
<script>
import todoItem from './coms/todoitem.vue'
export default {
    name:'mainTodo',
    components:{
        todoItem
    },
    data() {
        return {
            todoList:[
                {
                    id:0,
                    content:'test',
                    componented:false
                },
                {
                    id:1,
                    content:'test',
                    componented:true
                }
            ],
            content:undefined
        }
    },
    methods:{
        // 添加功能
        addTodo() {
            if(!this.content) return
            this.todoList.unshift({
                id:this.todoList[this.todoList.length-1]&&this.todoList[this.todoList.length-1].id ++ || 0,
                content:this.content,
                componented:false
            })
            this.content=undefined
        },
        delList(id) {
            this.todoList.splice(this.todoList.findIndex(item=>item.id===id),1)
        }
    } 
}
</script>

<style  scoped>
.main-todo {
    margin:auto;
    width: 600px;
    background-color: #ffffff;
    box-shadow: 0 0 5px #666666;
}
.add-todo {
    width: 100%;
    padding: 16px 16px 16px 36px;
    font-size: 24px;
    font-weight: inherit;
    font-family: inherit;
    color: inherit;
    border: none;
    outline: none;
    box-sizing: border-box;
}

</style>