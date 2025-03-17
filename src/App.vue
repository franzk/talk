<script setup lang="ts"></script>

<template>
  <nav>
    <router-link to="/listen">Listen</router-link>
    <router-link to="/">Talk</router-link>
  </nav>
  <RouterView />
</template>

<style scoped lang="scss">
body {
  background: black;
}
nav {
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  background: #333;

  .router-link-active {
    font-weight: bold;
    color: yellow !important;
  }

  a,
  a:visited {
    color: white;
    text-decoration: none;
  }
}
</style>
