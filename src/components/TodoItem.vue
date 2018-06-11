<template>

    <div class="panel-block">

        <p>
            {{ title }}
            <a class="delete is-pulled-right" @click="$emit('deleteTodo')"></a>
        </p>

    </div>

</template>




<script>

    export default {

        props: {
            
            title: {
                required: true,
                type: String
            }

        }

    }

</script>




<style lang="scss">

    p {
        width: 100%;
    }

</style>