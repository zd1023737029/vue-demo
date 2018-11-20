<template>
    <div>
        <h1>
            {{Msg}}
        </h1>
    </div>
</template>
<script>
export default {
    name : "Pos",
    data(){
        return{
            Msg : "Hello World! Pos"
        }
    }
}
</script>
<style scoped>
    h1{
        text-align: center;
        color: rgb(141,252,153)
    }
</style>


