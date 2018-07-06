<template>
    <input 
        type='text' 
        id='add-todo-input' 
        @keyup.enter='add' 
        placeholder="please input"
        name='add-todo'
        
    />
</template>

<script>
export default {
    name:'add-todo',
    props:['handleAdd'],
    methods:{
        add(e){
            const val = e.target.value.trim();
            if(val){
                this.handleAdd({
                    id:new Date().getTime(),
                    message:val,
                    status:false
                })
                e.target.value = '';
            }
        }
    }
}
</script>

