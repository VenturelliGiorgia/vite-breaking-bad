<script>
import { store, fetchCharacters } from "../store";
export default {
    data() {
        return {
            store,
            name: "",
        };
    },
    methods: {
        onClick() {
            console.log("prova");
            this.$emit("search", this.name);

        }
    }
};
</script>

<template>
    <div class="container">
        <div class="pb-1">
            <form action="" class="mb-4" @submit.prevent="onClick">
                <div class="col-3">
                    <input type="text" class="form-control" name="name" v-model="name"
                        placeholder="Cerca un personaggio...">
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>


