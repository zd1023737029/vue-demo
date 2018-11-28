<template>
    <div>
            <h1>shopMain {{$route.name}} {{$route.params.userName}}</h1>
            <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"shop",
    data(){
        return{
            test : 147
        }
    }
}
</script>
<style>
 .router-link-active{
     color : #FFF;
     text-decoration: none
 }
</style>

