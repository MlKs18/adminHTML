<script setup>
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import {useRouter} from "vue-router";
const router = useRouter();
const goToNextStep = () => {
  router.push({ name: 'test2'});
}
</script>
<template>
  <main class="main-wrapper">
    <!---<IconArrowRight @click="goToNextStep" :size="120"/>-->
    <!--    Этот элемент не убирай-->

    <ul class="breadcrumbs-list">
      <li>
        <a class="homePage" href="/">Главная</a>
      </li>
      <li class="slash">/</li>
      <li>
        <a class="pageCategories">Категории</a>
      </li>
    </ul>

    <h1 class="firstTitle">Все категории</h1>

    <p class="mainDescription">Более 1 000 товаров в 8 категориях. Выберите нужную и переходите к каталогу — с удобными фильтрами и сортировкой. </p>
    <iframe srcdoc="<p>Смотри, до этого момента все норм. Один нюанс. Тег h1 один на странице, по этому ему не обязательно давать класс. Он уникален </p>"></iframe>
    <br/>
    <iframe srcdoc="<p>Далее, делаешь главную обертку для категорий и задаешь ей падинг. И делаешь главнй список </p>"></iframe>
    
    
    <div class="wrapper-categories">

      <ul class="categories-list">
        <li class="categories-item">
          <img class="first-foto" src="/src/assets/img/images.jpeg" alt="Кросовок">
          <span class="product-counter">128 товаров</span>
          <h3 class="category-title">Обувь</h3>
          <p class="category-short-description">
            Кроссовки, ботинки, кеды
          </p>
          <p class="category-description">
            Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.
          </p>
          <ul class="categories-tags-list">
            <li class="categories-tags-item">
              <a href="">Кроссовки</a>
            </li>

            <li class="categories-tags-item">
              <a href="">ботинки</a>
            </li>

            <li class="categories-tags-item">
              <a href="">кеды</a>
            </li>
          </ul>
          <a href="">Смотреть товары</a>
        </li>
        
        <li class="categories-item">
          <img class="first-foto" src="/src/assets/img/images1.jpeg" alt="Кросовок">
          <span class="product-counter">128 товаров</span>
          <h3 class="category-title">Обувь</h3>
          <p class="category-short-description">
            Кроссовки, ботинки, кеды
          </p>
          <p class="category-description">
            Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.
          </p>
          <ul class="categories-tags-list">
            <li class="categories-tags-item">
              <a href="">Кроссовки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">ботинки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">кеды</a>
            </li>
          </ul>
          <a href="">Смотреть товары</a>
        </li>
        <li class="categories-item">
          <img class="first-foto" src="/src/assets/img/images2.jpeg" alt="Кросовок">
          <span class="product-counter">128 товаров</span>
          <h3 class="category-title">Обувь</h3>
          <p class="category-short-description">
            Кроссовки, ботинки, кеды
          </p>
          <p class="category-description">
            Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.
          </p>
          <ul class="categories-tags-list">
            <li class="categories-tags-item">
              <a href="">Кроссовки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">ботинки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">кеды</a>
            </li>
          </ul>
          <a href="">Смотреть товары</a>
        </li>
        <li class="categories-item">
          <img class="first-foto" src="/src/assets/img/images3.jpeg" alt="Кросовок">
          <span class="product-counter">128 товаров</span>
          <h3 class="category-title">Обувь</h3>
          <p class="category-short-description">
            Кроссовки, ботинки, кеды
          </p>
          <p class="category-description">
            Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.
          </p>
          <ul class="categories-tags-list">
            <li class="categories-tags-item">
              <a href="">Кроссовки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">ботинки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">кеды</a>
            </li>
          </ul>
          <a href="">Смотреть товары</a>
        </li>
        <li class="categories-item">
          <img class="first-foto" src="/src/assets/img/images4.jpeg" alt="Кросовок">
          <span class="product-counter">128 товаров</span>
          <h3 class="category-title">Обувь</h3>
          <p class="category-short-description">
            Кроссовки, ботинки, кеды
          </p>
          <p class="category-description">
            Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.
          </p>
          <ul class="categories-tags-list">
            <li class="categories-tags-item">
              <a href="">Кроссовки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">ботинки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">кеды</a>
            </li>
          </ul>
          <a href="">Смотреть товары</a>
        </li>
        <li class="categories-item">
          <img class="first-foto" src="/src/assets/img/images5.jpeg" alt="Кросовок">
          <span class="product-counter">128 товаров</span>
          <h3 class="category-title">Обувь</h3>
          <p class="category-short-description">
            Кроссовки, ботинки, кеды
          </p>
          <p class="category-description">
            Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.
          </p>
          <ul class="categories-tags-list">
            <li class="categories-tags-item">
              <a href="">Кроссовки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">ботинки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">кеды</a>
            </li>
          </ul>
          <a href="">Смотреть товары</a>
        </li>
        <li class="categories-item">
          <img class="first-foto" src="/src/assets/img/images6.jpeg" alt="Кросовок">
          <span class="product-counter">128 товаров</span>
          <h3 class="category-title">Обувь</h3>
          <p class="category-short-description">
            Кроссовки, ботинки, кеды
          </p>
          <p class="category-description">
            Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.
          </p>
          <ul class="categories-tags-list">
            <li class="categories-tags-item">
              <a href="">Кроссовки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">ботинки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">кеды</a>
            </li>
          </ul>
          <a href="">Смотреть товары</a>
        </li>
        <li class="categories-item">
          <img class="first-foto" src="/src/assets/img/images7.jpeg" alt="Кросовок">
          <span class="product-counter">128 товаров</span>
          <h3 class="category-title">Обувь</h3>
          <p class="category-short-description">
            Кроссовки, ботинки, кеды
          </p>
          <p class="category-description">
            Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.
          </p>
          <ul class="categories-tags-list">
            <li class="categories-tags-item">
              <a href="">Кроссовки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">ботинки</a>
            </li>
            <li class="categories-tags-item">
              <a href="">кеды</a>
            </li>
          </ul>
          <a href="">Смотреть товары</a>
        </li>
      </ul>
    </div>

  </main>

</template>

<style scoped>
.main-wrapper {
  min-height: 80vh;
}

.breadcrumbs-list {
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  margin: 10px;
  font-size: 12px;
}

.homePage {
  margin-right: 10px;
  text-decoration: none;
}

.pageCategories {
  margin-right: 10px;
}

.slash {
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.5);
}

.firstTitle {
  list-style-type: none;
  margin: 10px;
  margin-top: 20px;
  font-size: 35px;
}

.mainDescription {
  list-style-type: none;
  margin: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  margin-top: 20px;
}

.wrapper-categories {
  outline: 2px solid red;
  padding: 30px;
}



</style>
