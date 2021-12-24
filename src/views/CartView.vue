<template>
  <v-container fill-height fluid>
    <v-row class="fill-height">
      <v-col cols="12">
        <cart-component />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CartComponent from "../components/CartComponent.vue";
export default {
  components: { CartComponent },
  name: "CartView",
  data: () => ({}),
};
</script>
