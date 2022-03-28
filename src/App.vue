<template>
  <div id="app">
    <v-app>
      <v-container class="accent">
        <v-toolbar class="primary">
          <v-toolbar-title>Administrador de usuarios</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text class="secondary">
              <router-link to="/">Home</router-link>
            </v-btn>
            <v-btn text class="secondary">        
              <router-link to="/listado">Listado</router-link>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <router-view/>
      </v-container>
    </v-app>
  </div>
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>