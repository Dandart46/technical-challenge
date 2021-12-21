<template>
  <v-container fill-height fluid>
    <v-row class="fill-height">
      <v-col cols="12">
        <list-component :products="productList.slice(0, 20)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListComponent from "../components/ListComponent.vue";
export default {
  components: { ListComponent },
  name: "HomeView",
  async created() {
    await this.$store.dispatch("ProductsStore/fetchProducts");
  },
  computed: {
    productList() {
      return this.$store.getters["ProductsStore/getProductList"];
    },
  },
};
</script>
