<template>
  <v-app>
    <!-- Barra superior de navegación -->
    <v-app-bar app flat color="background">
      <v-app-bar-nav-icon
        @click="$router.go(-1)"
        v-if="cartRoute"
        :ripple="false"
      >
        <v-icon>fas fa-chevron-left</v-icon>
      </v-app-bar-nav-icon>
      <v-spacer />
      <!-- Titulo de la vista -->
      <v-toolbar-title class="font-weight-black">{{
        this.$route.name
      }}</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        v-if="this.$vuetify.breakpoint.name == 'xs' && !cartRoute"
      >
        <v-btn icon to="/cart" :ripple="false"
          ><v-icon>fas fa-shopping-cart</v-icon></v-btn
        >
      </v-app-bar-nav-icon>
    </v-app-bar>
    <!-- Carrito de la compra -->
    <v-navigation-drawer app right width="300">
      <v-app-bar flat color="background">
        <v-spacer />
        <v-toolbar-title class="font-weight-black"> Cart </v-toolbar-title>
        <v-spacer />
      </v-app-bar>
      <cart-component />
    </v-navigation-drawer>
    <!-- Vista principal de la app -->
    <v-main>
      <v-container fill-height fluid>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CartComponent from "./components/CartComponent.vue";
export default {
  components: { CartComponent },
  name: "App",

  data() {
    return {
      value: "recent",
      overlay: true,
    };
  },
  computed: {
    /**
     * Computed para mirar la ruta de home
     */
    cartRoute: function () {
      if (this.$route.name == "Cart") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
/* Animación de fade para las transiciones de la app */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>