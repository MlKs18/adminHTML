<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { routesList  } from '@/router/list';
</script>

<template>

  <div class="main-wrapper">
   <h1>front-layout</h1>
    <RouterLink to="/admin">Adminka</RouterLink>
     <main>
      <slot/>
    </main>
     
  </div>
</template>