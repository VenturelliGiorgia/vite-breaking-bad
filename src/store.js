import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
    characterList: [],
    filter: null
});

export function fetchCharacters() {
    axios.get("https://rickandmortyapi.com/api/character", {
        params: {
            name: store.filter
        },
    })
        .then(resp => {
            console.log(resp.data.results);
            store.characterList = resp.data.results;
        });
}