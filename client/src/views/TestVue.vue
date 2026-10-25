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
    <iframe srcdoc="<p>Ты опять решила сделать по своему?</p>
    <ol>
      <li>
        У тебя на этой странице должна быть сетка из списка товаров, а не один товар
    </li>
      <li>
        Там анимация не такая. Там изображение явно больше блока обертки, у него оверфлов хиден, что делает не видным границы и трансофрмация увеличение происходит в рамках этих границ. Хочешь проработаем эффект вместе
      </li>
      <li>
        На таких страницах вся карточка - это ссылка. Соответственно при наведении должен пальчик появлятся
      </li>
    </ol>


"></iframe>
    <div class="">!!!!!!!!!</div>
    <div class="">!!!!!!!!!</div>
    <div class="">!!!!!!!!!</div>
    <div class="">!!!!!!!!!</div>
    <div class="">!!!!!!!!!</div>
    <div style="font-weight: bold; font-size: 18px; color: red;">Смотри, что происходит, если я добавлю эллементы выше секции с карточками</div>
    <div style="font-weight: bold; font-size: 18px; color: red;">Почему у тебя заголовок "Обувь" уехал от родителя? Подрос? 18 исполнилось?</div>
    <div style="font-weight: bold; font-size: 18px; color: red;">Карточка должна быть автономна, выглядеть одинаково как в потоке, так и если я ее вставлю в другое место страницы</div>
    <div class="">!!!!!!!!!</div>
    <div class="">!!!!!!!!!</div>
    <div class="">!!!!!!!!!</div>
    <div class="">!!!!!!!!!</div>
    <div class="">!!!!!!!!!</div>
    <div class="">!!!!!!!!!</div>
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
                    <li>
                        <a class="categories-tags-item" href="">Кроссовки</a>
                    </li>
                    <li>
                        <a class="categories-tags-item" href="">ботинки</a>
                    </li>
                    <li>
                        <a class="categories-tags-item" href="">кеды</a>
                    </li>
                </ul>
                    <a class="categories-link">Смотреть товары</a>
              <iframe srcdoc="<p style='color: red;'>В этом месте анимация должна выглядеть так:</p>
                              <p style='color: red;'>Смотреть товары -></p>
                              <p style='color: red;'>А в идеале стрелка должна быть в виде свг и она должна отьезжать</p>
"></iframe>

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
  align-items: center;
  gap: 15px;
  list-style: none;
  margin: 10px;
  font-size: 12px;
}

.homePage {
  text-decoration: none;
  color: black;
}

.homePage:hover {
  color: #F8A5C2;
}

.firstTitle {
  list-style: none;
  margin: 25px;
  font-weight: bold;
  font-size: 35px;
}

.mainDescription {
  list-style: none;
  margin: 25px;
  letter-spacing: 1px;
}

.wrapper-categories {
    padding: 30px;
}

.categories-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
}

.categories-item {
  width: 33%;
  margin-right: 0.3%;
}

.first-foto {
    position: relative;
    width: 426px;
    height: 266px;
    transition: transform 0.3s ease;
}

.first-foto:hover {
    transform: scale(1.05);
}

.product-counter {
    position: absolute;
    z-index: 1;
    font-weight: bold;
    font-size: 12px;
    display: inline-block;
    padding: 3px 10px;
    background-color: white;
    border-radius: 50px;
    top: 290px;
    left: 340px;

}

.category-title {
    position: absolute;
    z-index: 1;
    font-weight: bold;
    font-size: 25px;
    top: 485px;
    left: 50px;
    color: black;
}

.category-short-description {
    position: absolute;
    z-index: 2;
    font-size: 13px;
    top: 520px;
    left: 40px;
    color: black;
}

.categories-tags-list {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
}

.categories-link {
    color: black;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    top: 10px;

}

.categories-link:hover {
    color: #F8A5C2;
}

.categories-tags-item {
    text-decoration: none;
    color: black;
}

.categories-tags-item:hover {
    color: #F8A5C2;
}

</style>
