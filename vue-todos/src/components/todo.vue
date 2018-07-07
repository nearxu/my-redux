<template>
    <div class="container">
        <type-filter :types='types' :filter='filter' :handleUpdateFilter='handleUpdateFilter' />
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
import TypeFilter from './type-filter'
import {createNamespacedHelpers} from 'vuex'
import {mapMutations,mapState} from 'vuex'
export default {
    components:{AddTodo,TodoItem,TypeFilter},
    computed:{
        ...mapState(['list','filter','types','filter'])
    },
    methods:{
        ...mapMutations([
            'handleAdd',
            'handleToggle',
            'handleRemove',
            'handleUpdateFilter'
        ])
    }
}
</script>

