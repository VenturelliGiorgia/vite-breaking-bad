<script>
import theHeader from './components/theHeader.vue';
import theFooter from "./components/theFooter.vue";
export default {
  components: { theHeader, theFooter}
};
</script>

<template>
<theHeader></theHeader>
</template>

<style lang="scss">
@use "./styles/general.scss";
body{
  background-color:rgb(43 58 71);
}
</style>