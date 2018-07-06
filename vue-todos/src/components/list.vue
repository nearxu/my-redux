<template>
    <p v-if='show'>
        <span @click = 'handleToggle(date.id)'>{{index+1}}.{{data.message}} <i>{{dateFormat(data.id)}}</i></span>
        <button @click='handleRemove(data.id)'>delete</button>
    </p>
</template>
<script>
export default {
    props:['data','filter','index','handleRemove','handleToggle'],
    computed:{
        show(){
            return (
        this.filter === 'ALL' ||
        (this.filter === 'UNDO' && !this.data.status) ||
        (this.filter === 'DONE' && this.data.status)
      )
        }
    },
    methods:{
        dateFormat(timer){
            const date = new Date(timer);
            return `${date.getFullYear()} - ${date.getMonth()+1} - ${date.getDate()}`
        }
    }
}
</script>

