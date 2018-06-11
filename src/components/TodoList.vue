<template>

    <nav class="panel section">

        <p class="panel-heading">{{ title }}</p>

        <slot></slot>

    </nav>

</template>




<script>

    export default {

        props: {
            title: {
                required: false,
                type: String,
                default: 'Todos:'
            }
        }

    }

</script>