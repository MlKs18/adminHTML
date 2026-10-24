<script setup>
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import {useRouter} from "vue-router";
const router = useRouter();
const goToNextStep = () => {
  router.push({ name: 'test1'});
}
</script>

<template>
  <main class="main-wrapper">
    <IconArrowRight @click="goToNextStep" :size="120"/>
<!--    Этот элемент не убирай-->

    <ul class="main-menu">
      <li>
        <a class="home" href="/">Главная</a>
      </li>

      <li>/</li>

      <li>
        <a>Категории</a>
      </li>
    </ul>

    <h1 class="titleShop">Все категории12121</h1>

    <p class="textProducts">Более 1 000 товаров в 8 категориях. Выберите нужную и переходите к каталогу — с удобными фильтрами и сортировкой. </p>
    <div>
      <ul class="item-list">

        <img class="first-foto" src="/src/assets/img/images.jpeg" alt="Кросовок">

        <li class="numbersProducts">128 товаров</li>
        <li class="">Обувь</li>
        <li class="itemProduct">Кроссовки, ботинки, кеды</li>
        <li class="">Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок. </li>

        <li class="">
          <a href="">Кроссовки</a>
        </li>

        <li>
          <a class="" href="">ботинки</a>
        </li>
        <li>
          <a class="" href="">кеды</a>
        </li>
        <li>
          <a class="" href="">Смотреть товары</a>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.main-wrapper {
  min-height: 80vh;
}

.main-menu {
  display: flex;
  align-items: center;
  gap: 15px;
  list-style: none;
  margin: 10px;
  font-size: 12px;
}

.home {
  text-decoration: none;
  color: black;
}

.home:hover {
  color: #F8A5C2;
}

.titleShop {
  list-style: none;
  margin: 25px;
  font-weight: bold;
  font-size: 35px;
}

.textProducts {
  list-style: none;
  margin: 25px;
  letter-spacing: 1px;
}

.first-foto {
  position: relative;
  width: 500px;
  height: 300px;
  margin: 20px;
}

.numbersProducts {
  position: absolute;
  list-style: none;
  display: inline-block;
  padding: 0px 8px;
  border-radius: 50px;
  background-color: white;
  z-index: 1;
  top: 290px;
  left: 405px;
  color: #F8A5C2;

}


</style>
