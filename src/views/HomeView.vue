<template>
  <v-container fill-height fluid>
    <v-row class="fill-height">
      <v-col cols="12">
        <v-item-group v-model="productList">
          <v-row>
            <v-col
              v-for="(product, index) in productList"
              :key="index"
              cols="6"
              md="3"
              sm="6"
              lg="3"
            >
              <v-item>
                <v-card max-width="300">
                  <v-img
                    height="100"
                    :src="product.image_url"
                    class="white--text align-end"
                  />
                  <v-btn
                    icon
                    @click="changeProductFav(product, 0)"
                    v-if="product.favorite == '1'"
                    ><v-icon>fas fa-heart</v-icon></v-btn
                  >
                  <v-btn icon @click="changeProductFav(product, 1)" v-else
                    ><v-icon>far fa-heart</v-icon></v-btn
                  >
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
                        product.stock < 1
                          ? 'red--text font-italic'
                          : 'green--text font-italic'
                      "
                    />
                    <v-spacer />
                    <v-btn
                      @click="addProductCart(product)"
                      class="primary"
                      :disabled="product.stock < 1 ? true : false"
                    >
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
  name: "HomeView",
  data: () => ({
    limit: 12,
  }),
  async created() {
    await this.fetchProducts();
  },
  mounted() {
    this.scrollLoader();
  },
  methods: {
    async fetchProducts() {
      await this.$store.dispatch("ProductsStore/fetchProducts", this.limit);
    },
    addProductCart(product) {
      this.$store.dispatch("ProductsStore/addCartProduct", product);
    },
    changeProductFav(product, fav) {
      this.$store.dispatch("ProductsStore/changeFavProduct", {
        product: product,
        fav: fav,
      });
      this.$router.push("/fav");
    },
    scrollLoader() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.limit += 12;
          this.fetchProducts();
        }
      };
    },
  },
  computed: {
    productList() {
      return this.$store.getters["ProductsStore/getProductList"];
    },
  },
};
</script>
