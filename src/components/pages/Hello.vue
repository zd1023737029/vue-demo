<template>
    <div>
        <h1>
            {{Msg}}
        </h1>
    </div>
</template>
<script>
export default {
    name : "Hello",
    data(){
        return {
            Msg : "hello World! Hello"
        }
    }
}
</script>
<style scoped>
    h1{
        text-align: center;
        color: #ef2151;
    }
</style>


