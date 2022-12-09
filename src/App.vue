<script>
import { store, fetchCharacters } from "./store";
import theHeader from './components/theHeader.vue';
import theFilter from "./components/filter.vue";
import charactersList from "./components/charactersList.vue";
export default {
  components: { theHeader, theFilter, charactersList },
  data() {
    return {
      store
    };
  },
  methods: {
    onSearch(activeFilter) {
      this.store.filter = activeFilter;
      fetchCharacters();
      console.log(activeFilter);
    }
  },
};
</script>

<template>
  <theHeader></theHeader>
  <main>
    <theFilter @search="onSearch"></theFilter>
    <charactersList></charactersList>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";

body {
  background-color: rgb(43 58 71);
}
</style>