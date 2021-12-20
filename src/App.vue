<template>
  <v-app>
    <!-- Barra superior de navegación -->
    <v-app-bar app flat color="background">
      <!-- Botón de atrás -->
      <v-app-bar-nav-icon @click="$router.go(-1)" :ripple="false">
        <v-icon>mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>
      <!-- En caso de no estar en rutas anidadas el btn se queda vacío para no romper la maquetación -->
      <v-app-bar-nav-icon>
        <v-icon></v-icon>
      </v-app-bar-nav-icon>

      <!-- Titulo de la vista -->
      <v-spacer />
      <v-toolbar-title class="secondary--text font-weight-black">{{
        this.$route.name
      }}</v-toolbar-title>
      <v-spacer />

      <!-- Arreglo de maquetación -->
      <v-app-bar-nav-icon>
        <v-icon></v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
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
export default {
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