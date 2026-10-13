<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { PRIVATE_ROUTS_VALUE } from '@/enums';
</script>

<template>

  <div class="main-wrapper">


    <h1>front-layout</h1>
    <RouterLink :to="PRIVATE_ROUTS_VALUE.dashboard">Adminka</RouterLink>
     <main>
      <slot/>
    </main>

  </div>
</template>

