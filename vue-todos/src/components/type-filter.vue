<template>
    <ul>
        <li v-for='(item,index) in types'
            :key='index+1'
            @click='handleUpdateFilter(item)'
        >
        {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    props:['types','filter','handleUpdateFilter'],
}
</script>

