<template>
  <v-container fill-height fluid>
    <v-row class="fill-height">
      <v-col cols="12">
        <v-list v-if="productCart">
          <v-list-item-group>
            <template v-for="(product, index) in productCart">
              <v-list-item two-line :key="index">
                <v-list-item-avatar rounded>
                  <v-img
                    :src="product[0].image_url"
                    contain
                    class="rounded-lg"
                    height="100"
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="product[0].productName"
                    class="text-subtitle-2 text-wrap"
                  />
                  <v-list-item-subtitle>
                    <v-btn icon
                      ><v-icon small @click="removeProductCart(product[0])"
                        >fas fa-minus</v-icon
                      ></v-btn
                    >{{ product.length
                    }}<v-btn icon
                      ><v-icon small @click="addProductCart(product[0])"
                        >fas fa-plus</v-icon
                      ></v-btn
                    >
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action
                  v-text="
                    `${cartStockPrice(product[0].price, product.length)}$`
                  "
                  class="secondary--text"
                />
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
        <v-subheader v-else class="center-text font-italic"
          >Your product cart is empty</v-subheader
        >
        <v-card v-show="productCart">
          <v-card-title
            v-text="`Total amount: ${totalPrice}$`"
            class="text-subtitle-2"
          />
          <v-card-actions>
            <v-btn block color="primary">Make a payment</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { groupBy, isEmpty } from "lodash";

export default {
  name: "CartComponent",
  data: () => ({}),
  mounted() {
    console.log("djksljdksljdksldjksl");
  },
  methods: {
    addProductCart(product) {
      this.$store.dispatch("ProductsStore/addCartProduct", product);
    },
    removeProductCart(product) {
      this.$store.dispatch("ProductsStore/removeCartProduct", product);
    },
    cartStockPrice(price, cartStock) {
      return price * cartStock;
    },
  },
  computed: {
    productCart() {
      const products = this.$store.getters["ProductsStore/getProductCart"];
      /**
       * Método de Lodash para hacer un group del array por id.
       */
      let productGroup = groupBy(products, "id");
      if (isEmpty(productGroup)) {
        return false;
      } else {
        return productGroup;
      }
    },
    totalPrice() {
      const price = this.$store.getters["ProductsStore/getTotalPriceCart"];
      return price;
    },
  },
};
</script>

<style>
</style>