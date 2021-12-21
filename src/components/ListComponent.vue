<template>
  <v-container fill-height fluid>
    <v-row class="fill-height">
      <v-col cols="12">
        <v-item-group v-model="products">
          <v-row>
            <v-col v-for="(product, index) in products" :key="index" cols="3">
              <v-item>
                <v-card max-width="300">
                  <v-img height="100" :src="product.image_url" />

                  <div>
                    <v-card-title class="text-subtitle-2"
                      >{{ product.productName }} <v-spacer />
                      {{ product.price }}$</v-card-title
                    >
                  </div>

                  <v-card-text class="text-truncate">{{
                    product.productDescription
                  }}</v-card-text>

                  <v-card-actions>
                    <span
                      v-text="`${product.stock} left`"
                      :class="
                        product.stock < 1 ? 'red--text' : 'secondary--text'
                      "
                    />
                    <v-spacer />
                    <v-btn @click="addProductCart(product)" class="primary">
                      Add
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ListComponent",
  data: () => ({}),
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addProductCart(product) {
      this.$store.dispatch("ProductsStore/addCartProduct", product);
    },
  },
};
</script>

<style>
</style>