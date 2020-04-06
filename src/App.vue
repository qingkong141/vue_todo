<template>
    <div>
        <main-header></main-header>
        <main-todo></main-todo>
    </div>
</template>
<script>
    import './assstes/styles/test.css'
    import mainHeader from './compontents/mainHeader.vue'
    import mainTodo  from './compontents/mainTodo/maintodo.vue'
    export default {
        name:'App',
        components:{
            mainHeader,
            mainTodo
        },
        created() {
        }
    }
</script>