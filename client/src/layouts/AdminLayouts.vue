<script setup>
import '@/assets/admin.css';
import { RouterLink, RouterView } from 'vue-router'
import AdminSitebare from '@/components/AdminSitebare.vue';
import AdminTopbar from '@/components/AdminTopbar.vue';

</script>

<template>


  <div class="layout">

  <!-- ==== SIDEBAR ==== -->

    <AdminSitebare/>
  <!-- ==== MAIN ==== -->
  <slot/>

</div>
</template>

<style scoped>



</style>
