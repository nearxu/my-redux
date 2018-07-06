<template>
    <div class="container">
        <add-todo :handleAdd = 'handleAdd'/>
        <todo-item
            v-for='(item,index) in list'
            :key='item.id'
            :index='index'
            :data='item'
            :filter = 'filter'
            :handleRemove='handleRemove'
            :handleToggle = 'handleToggle'
        />
    </div>
</template>

<script>

import AddTodo from './add-todo'
import TodoItem from './list'
import {createNamespacedHelpers} from 'vuex'
import {mapMutations,mapState} from 'vuex'
export default {
    components:{AddTodo,TodoItem},
    computed:{
        ...mapState(['list','filter'])
    },
    methods:{
        ...mapMutations([
            'handleAdd',
            'handleToggle',
            'handleRemove'
        ])
    }
}
</script>

