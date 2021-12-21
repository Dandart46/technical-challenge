<template>
  <v-app>
    <!-- Barra superior de navegación -->
    <v-app-bar app flat>
      <!-- Titulo de la vista -->
      <v-spacer />
      <v-toolbar-title class="secondary--text font-weight-black">{{
        this.$route.name
      }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <!-- Carrito de la compra -->
    <v-navigation-drawer app right width="300">
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
    homeRoute: function () {
      if (this.$route.name == "Home") {
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