<template>

    <form class="section" @submit.prevent="addTodo">

        <div class="field">
            <label class="label">{{ title }}</label>
            <div class="control">
                <input class="input" type="text" placeholder="Enter a Todo..." v-model.trim="model">
            </div>
        </div>

        <button class="button is-primary" type="submit">Add</button>

    </form>

</template>




<script>

    export default {
        props: {
            title: {
                required: true,
                type: String,
                default: 'Todos'
            }
        },
        data() {
            return {
                model: null
            }
        },
        methods: {
            addTodo() {

                if (this.model) {

                    this.$emit('addTodo', this.model);

                    this.resetField();

                } 

            },
            resetField() {

                this.model = null;

            }
        }
    }

</script>