<script>
import { store, fetchCharacters } from "../store";
export default {
    name: "characterList",
    data() {
        return {
            store
        };
    },
    methods: {},
    created() {
        fetchCharacters()
    }

};
</script>

<template>
    <div class="container">
        <div class="bg-white ps-4 pe-4 pb-4">
            <div class="d-flex flex-wrap">
                <div class="row ">
                    <div class="col-3 pt-4" v-for="character in store.characterList">
                        <div class="text-center card bg-card">
                            <img class="img-fluid p-3" :src="character.image" alt="">
                            <h5 class="card-title pt-2 text-white">{{ character.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-light">{{ character.status }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-card {
    background-color: rgb(43 58 71);
}
</style>