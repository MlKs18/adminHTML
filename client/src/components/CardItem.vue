<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  }})

</script>
<template>
    <div class="main-wrapper">
        <img class="first-photo" :src="data.img" :alt="data.title" width="426" height="230">
        <span class="product-counter">{{ data.counterProduct }} товаров</span>
        <div class="title-wrapper">
            <h3 class="category-title">{{ data.title }}</h3>
            <p class="category-short-description">
            {{ data.shortDescription }}
            </p>
        </div>
        <p class="category-description">
        {{data.description}}
        </p>
        <ul class="categories-tags-list">
            <li class="categories-tags-item" 
            v-for="tag in data.tags"
            :key="tag">
                <a href="">{{tag}}</a>
            </li>
        </ul>
        <a class="endLink">Смотреть товары</a>
    </div>
</template>

<style scoped>
.main-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    position: relative;
}

.main-wrapper:hover {
    cursor: pointer;
}

.categories-tags-list {
    display: flex;
    align-items: center;
    list-style: none;
    margin-bottom: 10px;
}

.first-photo {
    height: 230px;
    max-width: 100%;
    margin-bottom: 10px;
}

.product-counter {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 2px 5px;
    background-color: #ffffff;
    border-radius: 10px;
}

.category-title {
    margin-bottom: 10px;
}

.title-wrapper {
    position: absolute;
    left: 20px;
    top: 110px;
    background-color: rgba(204, 204, 204, 0.7);
    color: #ffffff;
    border-radius: 5px;
    max-width: 70%;
}

.category-description {
    margin-bottom: 10px;
}

.categories-tags-item  {
    margin-right: 4px;
}

.categories-tags-item a {
    color: #000;
    text-decoration: none;
}

.categories-tags-item a:hover {
    color: #ccc;
   
}

.endLink {
    color: #000;
    text-decoration: none;
    font-weight: bold;
}

.endLink:hover {
    color: #ccc;
}

</style>