<template>
        <div :class="['todo-item', list.componented? 'componented':'']">
            <input type="checkbox" v-model="list.componented">
            <label  @click="delTodo">{{list.content}}</label>
            <button @click="delTodo"></button>
        </div>
</template>

<script>
export default {
    name:'todoItem',
    props:{
        list:{
            type:Object,
            default:{}
        }
    },
    methods:{
        delTodo() {
            this.$emit('delTodo',this.list.id)
        }
    },
    computed:{

    }
}
</script>
<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    padding: 16px 16px 16px 0px;
    border-top: 1px solid rgba(0, 0, 0,.1);
}
.todo-item:hover>button:after {
    content: 'x';
    font-size:24px ;
    height: 100%;
    line-height: 100%;
    color: tomato;
}

.todo-item>input {
    width: 50px;
    height: 30px;
    text-align: center;
    appearance: none;
    border: none;
    outline: none;
}

.todo-item>label {
    flex: 1;
    /* text-align: center; */
    font-size: 24px;
    line-height: 100%;
    transform:0.4s ;
} 
 .componented{
     color: #d9d9d9;
     text-decoration: line-through;
 } 

 .todo-item>button {
     width: 40px;
     background-color: transparent;
     border: none;
     appearance: none;
     cursor: pointer;
     outline: none;
 }
</style>