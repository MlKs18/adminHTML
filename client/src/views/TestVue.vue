<template>
   <main class="main-wrapper">

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
    <div>
        <ul>
            <li class="item-list">
                <img class="first-foto" src="/src/assets/img/images.jpeg" alt="Кросовок">
            </li>
            <li class="goods">128 товаров</li>
            <li>Обувь</li>
            <li>Кроссовки, ботинки, кеды</li>
            <li>Всё для комфортной ходьбы и активного образа жизни — от беговых кроссовок до зимних ботинок. </li>
            <a href="">Кроссовки</a>
            <a href="">ботинки</a>
            <a href="">кеды</a>
            <a href="">Смотреть товары</a>
        </ul>
    </div>

    <div>
         <ul>
            <li>
                <img src="/src/assets/img/images1.jpeg" alt="Кросовок">
            </li>
            <li>347 товаров</li>
            <li>Одежда</li>
            <li>Верхняя одежда, футболки, джинсы</li>
            <li>Базовая и дизайнерская одежда на каждый день. Только проверенные бренды и честные размеры. </li>
            <a href="">Куртки</a>
            <a href="">Футболки</a>
            <a href="">Джинсы</a>
            <a href="">Смотреть товары</a>
        </ul>
    </div>

    <div>
        <ul>
            <li>
                <img src="/src/assets/img/images2.jpeg" alt="Кросовок">
            </li>
            <li>94 товаров</li>
            <li>Аксессуары</li>
            <li>Часы, сумки, ремни</li>
            <li>Детали, которые делают образ. От классических часов до стильных сумок и кошельков.</li>
            <a href="/">Часы</a>
            <a href="/">Сумки</a>
            <a href="/">Ремни</a>
            <a href="/">Смотреть товары</a>
        </ul>
    </div>

    <div>
        <ul>
            <li>
                <img src="/src/assets/img/images4.jpeg" alt="Кросовок">
            </li>
            <li>212 товаров</li>
            <li>Гаджеты</li>
            <li>Смартфоны, наушники, умный дом</li>
            <li>Техника и электроника: от беспроводных наушников до устройств умного дома.</li>
            <a href="/">Смартфоны</a>
            <a href="/">Наушники</a>
            <a href="/">Умный дом</a>
            <a href="/">Смотреть товары</a>
        </ul>
    </div>

    <div>
        <ul>
            <li>
                <img src="/src/assets/img/images3.jpeg" alt="Кросовок">
            </li>
            <li>156 товаров</li>
            <li>Дом</li>
            <li>Текстиль, посуда, декор </li>
            <li>Уют начинается с деталей. Всё для дома: от постельного белья до декора и посуды.</li>
            <a href="/">Текстиль</a>
            <a href="/">Посуда</a>
            <a href="/">Декор</a>
            <a href="/">Смотреть товары</a>
        </ul>
    </div>

    <div>
        <ul>
            <li>
                <img src="/src/assets/img/images5.jpeg" alt="Кросовок">
            </li>
            <li>88 товаров</li>
            <li>Красота</li>
            <li>Уход, макияж, парфюм</li>
            <li>Косметика и уход за собой: от корейских сывороток до парфюмерии известных брендов.</li>
            <a href="/">Уход за кожей</a>
            <a href="/">Макияж</a>
            <a href="/">Парфюм</a>
            <a href="/">Смотреть товары</a>
        </ul>
    </div>

    <div>
        <ul>
            <li>
                <img src="/src/assets/img/images6.jpeg" alt="Кросовок">
            </li>
            <li>74 товара</li>
            <li>Спорт</li>
            <li>Тренажёры, экипировка, питание</li>
            <li>Всё для тренировок дома и в зале: инвентарь, экипировка и спортивное питание.</li>
            <a href="/">Инвентарь</a>
            <a href="/">Экипировка</a>
            <a href="/">Питание</a>
            <a href="/">Смотреть товары</a>
        </ul>
    </div>

    <div>
        <ul>
            <li>
               <img src="/src/assets/img/images7.jpeg" alt="Кросовок">
            </li>
            <li>521 товар</li>
            <li>Книги</li>
            <li>Художественная, нон-фикшн, детская</li>
            <li>От классики до современных бестселлеров. Более 500 книг в бумажном и электронном формате.</li>
            <a href="/">Художественная</a>
            <a href="/">Нон-фикшн</a>
            <a href="/">Детская</a>
            <a href="/">Смотреть товары</a>
        </ul>
    </div>

   </main>
  
</template>

<style scoped>
.main-wrapper {
min-height: 80vh;
}

.breadcrumbs-list {
    outline: 2px solid red;
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
    outline: 2px solid red;
    list-style-type: none;
    margin: 10px;
    margin-top: 20px;
    font-size: 35px;
}

.mainDescription {
    outline: 2px solid red;
    list-style-type: none;
    margin: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    margin-top: 20px;
}

.item-list {
   position: relative;
   list-style-type: none;
}


.first-foto {
   width: 375px;
   height: 345px;
   display: block;
   list-style-type: none;
   outline: 2px solid red;
   margin: 10px;

}

.goods {
 position: absolute;
 z-index: 1;
 bottom: 705px;
 left: 275px;
 list-style-type: none;
 outline: 2px solid red;
 color: black;
 display: inline-block;
 background-color: white;
 border-radius: 50px;
 padding: 4px 10px;
 font-weight: bold;
 font-size: 13px;
}


</style>