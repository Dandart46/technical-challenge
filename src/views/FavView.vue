<template>
  <v-container fill-height fluid>
    <v-row class="fill-height">
      <v-col cols="12">
        <v-item-group v-model="getProductFav">
          <v-row>
            <v-col
              v-for="(product, index) in getProductFav"
              :key="index"
              cols="6"
              md="3"
              sm="6"
              lg="3"
            >
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
  name: "FavView",
  async created() {
    await this.fetchProductsFav();
  },
  methods: {
    async fetchProductsFav() {
      await this.$store.dispatch("ProductsStore/fetchFavProducts");
    },
  },
  computed: {
    getProductFav() {
      return this.$store.getters["ProductsStore/getProductFav"];
    },
  },
};
</script>
