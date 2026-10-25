<script setup>
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import {useRouter} from "vue-router";
import CardItem from "@/components/CardItem.vue";
const router = useRouter();
const goToNextStep = () => {
  router.push({ name: 'test1'});
}
const data = [
    {
        id: 1,
        img: "/src/assets/img/images.jpeg",
        counterProduct: 128,
        title: "Обувь",
        shortDescription: "Кроссовки, ботинки, кеды",
        description: "Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.",
        tags: ["Кроссовки", "ботинки", "кеды"],
        link: "/"
    },
    {
        id: 2,
        img: "/src/assets/img/images1.jpeg",
        counterProduct: 128,
        title: "Обувь",
        shortDescription: "Кроссовки, ботинки, кеды",
        description: "Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.",
        tags: ["Кроссовки", "ботинки", "кеды"],
        link: "/"
    },
    {
        id: 3,
        img: "/src/assets/img/images2.jpeg",
        counterProduct: 128,
        title: "Всё для комфортной ходьбы и активного образа жизни ",
        shortDescription: "Кроссовки, ботинки, кеды",
        description: "Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.",
        tags: ["Кроссовки", "ботинки", "кеды"],
        link: "/"
    },
    {
        id: 4,
        img: "/src/assets/img/images3.jpeg",
        counterProduct: 128,
        title: "Обувь",
        shortDescription: "Кроссовки, ботинки, кеды",
        description: "Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.",
        tags: ["Кроссовки", "ботинки", "кеды"],
        link: "/"
    },
    {
        id: 5,
        img: "/src/assets/img/images4.jpeg",
        counterProduct: 128,
        title: "Обувь",
        shortDescription: "Кроссовки, ботинки, кеды",
        description: "Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.",
        tags: ["Кроссовки", "ботинки", "кеды"],
        link: "/"
    },
    {
        id: 6,
        img: "/src/assets/img/images5.jpeg",
        counterProduct: 128,
        title: "Обувь",
        shortDescription: "Кроссовки, ботинки, кеды",
        description: "Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.",
        tags: ["Кроссовки", "ботинки", "кеды"],
        link: "/"
    },
    {
        id: 7,
        img: "/src/assets/img/images6.jpeg",
        title: "Обувь",
        shortDescription: "Кроссовки, ботинки, кеды",
        description: "Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок.",
        tags: ["Кроссовки", "ботинки", "кеды"],
        link: "/"
    },
]
</script>

<template>
  <main class="main-wrapper">
    -<IconArrowRight @click="goToNextStep" :size="120"/>
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


    <div class="wrapper-categories">

      <ul class="categories-list">
        <li 
        v-for="item in data"
        :key= "item.id"
        class="categories-item">

            <CardItem :data="item"/>
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
  padding: 30px;
}

.categories-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;

}

.categories-item {
    width: 33.3%;
    height: 400px;
}

</style>