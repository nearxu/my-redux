<template>
    <div>
        <input type='button' value='-' @click='dehandle({de:5})' />
        <span>{{count}}</span>

        <input type='button' value='+' @click='addHandle({n:5})' />
        <span>{{num2}}</span>

        <p>
            <button @click = 'sumFum({add:20})'>{{sum}}</button>
            <span>max 200 {{sum1}}</span>
        </p>
        <p>{{$store.state.count}}</p>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState(['count','sum']),
        ...mapGetters({
            num2:'filterCount',
            sum1:'sumGet'
        })
    },
    methods:{
        // 同步
        ...mapMutations({
            dehandle:'del',
            addHandle:'add',
            sumFum:'sumF'
        })
    }
}
</script>

