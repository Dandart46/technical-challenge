<template>
  <v-container fluid class="fill-height align-end pa-0">
    <v-row class="align-self-start">
      <v-col cols="12" align-self="start" class="pa-0">{{
        notificaciones
      }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  async mounted() {
    await this.$store.dispatch("ProductsStore/getProductList");
  },
  computed: {
    notificaciones() {
      return this.$store.getters["ProductsStore/productListGetter"];
    },
  },
};
</script>
