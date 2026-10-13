<script setup>

</script>

<template>
  <main>
    <header class="header">
      <div class="container header__inner">
        <a href="#" class="logo">Shop<span>.</span>Ru</a>

        <nav class="nav">
          <a href="#" class="nav__link">Главная</a>
          <a href="#" class="nav__link">Категории</a>
          <a href="#" class="nav__link nav__link--active">Товары</a>
          <a href="#" class="nav__link">Блог</a>
          <a href="#" class="nav__link">О нас</a>
        </nav>

        <div class="header__actions">
          <button class="icon-btn" aria-label="Поиск">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button class="icon-btn" aria-label="Избранное">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
            </svg>
          </button>
          <button class="icon-btn" aria-label="Корзина">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
            </svg>
            <span class="badge">3</span>
          </button>
          <button class="burger" aria-label="Меню">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- ============ Хлебные крошки ============ -->
    <div class="crumbs-wrap">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Хлебные крошки">
          <a href="#">Главная</a>
          <span class="sep">/</span>
          <a href="#">Категории</a>
          <span class="sep">/</span>
          <a href="#">Обувь</a>
          <span class="sep">/</span>
          <span class="current">Nike Air Zoom Pegasus 40</span>
        </nav>
      </div>
    </div>

    <!-- ============ Товар ============ -->
    <section class="product-view">
      <div class="container">
        <div class="product-view__layout">

          <!-- ---------- Галерея ---------- -->
          <div class="gallery">
            <div class="gallery__thumbs">
              <button class="thumb thumb--active">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80" alt="">
              </button>
              <button class="thumb">
                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&q=80" alt="">
              </button>
              <button class="thumb">
                <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=200&q=80" alt="">
              </button>
              <button class="thumb">
                <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200&q=80" alt="">
              </button>
            </div>

            <div class="gallery__main">
              <span class="gallery__label">-20%</span>
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=80"
                   alt="Nike Air Zoom Pegasus 40">
              <button class="gallery__nav gallery__nav--prev" aria-label="Назад">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button class="gallery__nav gallery__nav--next" aria-label="Вперёд">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- ---------- Информация ---------- -->
          <div class="product-info">

            <div class="product-info__meta">
              <span class="product-info__brand">Nike</span>
              <span class="in-stock">В наличии</span>
              <span>Артикул: NK-AZP40-001</span>
            </div>

            <h1 class="product-info__title">Кроссовки Nike Air Zoom Pegasus 40</h1>

            <div class="rating">
              <span class="stars">★★★★★</span>
              <span class="rating__value">4.9</span>
              <a href="#reviews" class="rating__reviews">214 отзывов</a>
              <span style="color:var(--color-muted)">· 1 842 покупки</span>
            </div>

            <div class="price-block">
              <span class="price-block__current">7 990 ₽</span>
              <span class="price-block__old">9 990 ₽</span>
              <span class="price-block__discount">−20%</span>
            </div>

            <!-- Опции -->
            <div class="options">

              <!-- Цвет -->
              <div class="option">
                <div class="option__head">
                  <span class="option__label">Цвет:</span>
                  <span class="option__value">Чёрный / Белый</span>
                </div>
                <div class="colors">
                  <button class="color-swatch color-swatch--active" style="background:#1a1d23"
                          title="Чёрный / Белый"></button>
                  <button class="color-swatch" style="background:#2563eb" title="Синий"></button>
                  <button class="color-swatch" style="background:#ef4444" title="Красный"></button>
                  <button class="color-swatch" style="background:#ffffff" title="Белый"></button>
                </div>
              </div>

              <!-- Размер -->
              <div class="option">
                <div class="option__head">
                  <span class="option__label">Размер:</span>
                  <a href="#" class="option__link">Таблица размеров →</a>
                </div>
                <div class="sizes">
                  <button class="size size--disabled">38</button>
                  <button class="size">39</button>
                  <button class="size size--active">40</button>
                  <button class="size">41</button>
                  <button class="size">42</button>
                  <button class="size">43</button>
                  <button class="size">44</button>
                  <button class="size size--disabled">45</button>
                </div>
              </div>

            </div>

            <!-- Покупка -->
            <div class="buy-actions">
              <div class="qty">
                <button type="button" aria-label="Уменьшить">−</button>
                <input type="text" value="1" readonly>
                <button type="button" aria-label="Увеличить">+</button>
              </div>

              <button class="btn btn--primary btn--flex">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
                </svg>
                В корзину
              </button>

              <button class="btn btn--outline btn--icon" aria-label="В избранное">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                </svg>
              </button>
            </div>

            <!-- Преимущества -->
            <div class="perks">
              <div class="perk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                <span class="perk__label">Доставка</span>
                <span class="perk__text">Завтра, бесплатно</span>
              </div>
              <div class="perk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 6h18l-2 13H5z"/>
                  <path d="M8 6V4a4 4 0 0 1 8 0v2"/>
                </svg>
                <span class="perk__label">Возврат</span>
                <span class="perk__text">30 дней без вопросов</span>
              </div>
              <div class="perk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span class="perk__label">Гарантия</span>
                <span class="perk__text">Официальная, 1 год</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ============ Табы ============ -->
    <section class="tabs-section" id="reviews">
      <div class="container">
        <div class="tabs">
          <button class="tab tab--active">Описание</button>
          <button class="tab">Характеристики</button>
          <button class="tab">Отзывы (214)</button>
          <button class="tab">Доставка и оплата</button>
        </div>

        <div class="tab-panels">
          <!-- Описание -->
          <div class="tab-panel">
            <h3>О модели</h3>
            <p>
              Nike Air Zoom Pegasus 40 — это юбилейная, 40-я версия самой
              популярной беговой модели Nike. Обновлённая конструкция
              обеспечивает более мягкую амортизацию и улучшенную
              воздухопроницаемость верхней части.
            </p>
            <p>
              Две пружинящие вставки Nike Air Zoom в области пятки и носка
              возвращают энергию при каждом шаге, а плотный сетчатый верх
              сохраняет ногу прохладной даже на длинных дистанциях.
            </p>

            <h3>Особенности</h3>
            <p>
              Пена ReactX по всей длине стопы стала на 13% мягче
              предшественницы, при этом сохранила износостойкость.
              Усиленная пятка фиксирует стопу при боковых перемещениях.
            </p>
          </div>

          <!-- Характеристики -->
          <div class="tab-panel" hidden>
            <table class="spec-table">
              <tr><td>Бренд</td><td>Nike</td></tr>
              <tr><td>Модель</td><td>Air Zoom Pegasus 40</td></tr>
              <tr><td>Тип</td><td>Беговые кроссовки</td></tr>
              <tr><td>Пол</td><td>Унисекс</td></tr>
              <tr><td>Верх</td><td>Инженерный сетчатый материал</td></tr>
              <tr><td>Подошва</td><td>ReactX, резина Waffle</td></tr>
              <tr><td>Амортизация</td><td>Nike Air Zoom (двойная)</td></tr>
              <tr><td>Вес</td><td>283 г (размер 42)</td></tr>
              <tr><td>Сезон</td><td>Круглогодичный</td></tr>
              <tr><td>Страна производства</td><td>Вьетнам</td></tr>
            </table>
          </div>

          <!-- Отзывы -->
          <div class="tab-panel" hidden>
            <p>Отзывы покупателей отображаются здесь. Форма добавления отзыва
              и список — в реальном проекте.</p>
          </div>

          <!-- Доставка -->
          <div class="tab-panel" hidden>
            <h3>Доставка</h3>
            <p>
              По Москве и Санкт-Петербургу — курьером в течение 1–2 дней.
              По России — СДЭК и Почта России, 2–7 рабочих дней.
              Бесплатно при заказе от 5 000 ₽.
            </p>
            <h3>Оплата</h3>
            <p>
              Банковской картой, через СБП, наличными при получении
              или в рассрочку (Халва, Сплит).
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ Похожие товары ============ -->
    <section class="section">
      <div class="container">
        <div class="section__head">
          <div>
            <h2 class="section__title">Похожие товары</h2>
            <p class="section__subtitle">Другие беговые модели Nike</p>
          </div>
          <a href="#" class="section__link">Смотреть все →</a>
        </div>

        <div class="products">

          <article class="product">
            <div class="product__media">
              <span class="product__label product__label--new">NEW</span>
              <button class="product__fav" aria-label="В избранное">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                </svg>
              </button>
              <img src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80" alt="Кроссовки">
            </div>
            <div class="product__body">
              <span class="product__category">Кроссовки</span>
              <h3 class="product__title">Nike Air Max 270 React</h3>
              <div class="product__rating">
                <span class="stars">★★★★☆</span>
                <span>4.7 · 132</span>
              </div>
              <div class="product__footer">
                <div class="product__price">
                  <span class="price-current">11 490 ₽</span>
                </div>
                <button class="add-to-cart" aria-label="В корзину">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <article class="product">
            <div class="product__media">
              <button class="product__fav" aria-label="В избранное">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                </svg>
              </button>
              <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80" alt="Кроссовки">
            </div>
            <div class="product__body">
              <span class="product__category">Кроссовки</span>
              <h3 class="product__title">Nike Revolution 7</h3>
              <div class="product__rating">
                <span class="stars">★★★★☆</span>
                <span>4.5 · 88</span>
              </div>
              <div class="product__footer">
                <div class="product__price">
                  <span class="price-current">5 990 ₽</span>
                  <span class="price-old">7 490 ₽</span>
                </div>
                <button class="add-to-cart" aria-label="В корзину">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <article class="product">
            <div class="product__media">
              <span class="product__label">-15%</span>
              <button class="product__fav" aria-label="В избранное">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                </svg>
              </button>
              <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80" alt="Кроссовки">
            </div>
            <div class="product__body">
              <span class="product__category">Кроссовки</span>
              <h3 class="product__title">Nike ZoomX Vaporfly NEXT%</h3>
              <div class="product__rating">
                <span class="stars">★★★★★</span>
                <span>4.9 · 76</span>
              </div>
              <div class="product__footer">
                <div class="product__price">
                  <span class="price-current">18 990 ₽</span>
                  <span class="price-old">22 490 ₽</span>
                </div>
                <button class="add-to-cart" aria-label="В корзину">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <article class="product">
            <div class="product__media">
              <button class="product__fav" aria-label="В избранное">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                </svg>
              </button>
              <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80" alt="Кроссовки">
            </div>
            <div class="product__body">
              <span class="product__category">Кроссовки</span>
              <h3 class="product__title">Nike Free Run 5.0</h3>
              <div class="product__rating">
                <span class="stars">★★★★☆</span>
                <span>4.4 · 54</span>
              </div>
              <div class="product__footer">
                <div class="product__price">
                  <span class="price-current">8 490 ₽</span>
                </div>
                <button class="add-to-cart" aria-label="В корзину">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- ============ ФУТЕР ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <a href="#" class="logo">Shop<span>.</span>Ru</a>
            <p class="footer__about">
              Магазин качественных товаров с доставкой по всей стране.
              Работаем с 2015 года и всегда рады помочь.
            </p>
            <div class="socials">
              <a href="#" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 3 2 10.5l6 2 2 7 3-4 6 4z"/>
                </svg>
              </a>
              <a href="#" aria-label="VK">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 7h3c.5 2.4 1.6 4.4 3 5.6V7h3v5.2c1.4-1.2 2.5-3.2 3-5.2h3c-.7 3-2.3 5.5-4 7 1.7 1.4 3.4 3.8 4.1 6h-3.3c-.6-1.8-1.8-3.4-3.8-4.8V20h-1.5C6.4 20 3 15 3 7z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 12s0-3.5-.5-5c-.3-1-1-1.8-2-2C18.7 4.5 12 4.5 12 4.5s-6.7 0-8.5.5c-1 .3-1.8 1-2 2C1 8.5 1 12 1 12s0 3.5.5 5c.3 1 1 1.8 2 2 1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5c1-.3 1.8-1 2-2 .5-1.5.5-5 .5-5zM10 15V9l5 3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer__col">
            <h4>Магазин</h4>
            <ul>
              <li><a href="#">Каталог</a></li>
              <li><a href="#">Акции</a></li>
              <li><a href="#">Новинки</a></li>
              <li><a href="#">Бренды</a></li>
            </ul>
          </div>

          <div class="footer__col">
            <h4>Помощь</h4>
            <ul>
              <li><a href="#">Доставка</a></li>
              <li><a href="#">Оплата</a></li>
              <li><a href="#">Возврат</a></li>
              <li><a href="#">Вопросы и ответы</a></li>
            </ul>
          </div>

          <div class="footer__col">
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:+78001234567">8 (800) 123-45-67</a></li>
              <li><a href="mailto:hello@shop.ru">hello@shop.ru</a></li>
              <li><a href="#">Москва, ул. Пример, 1</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__bottom">
          <span>© 2025 Shop.Ru — Все права защищены</span>
          <div class="footer__bottom-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>

  </main>
</template>

<style scoped>
/* ---------- Сброс и базовые стили ---------- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --color-bg: #f7f8fa;
  --color-surface: #ffffff;
  --color-text: #1a1d23;
  --color-muted: #6b7280;
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-border: #e5e7eb;
  --color-success: #10b981;
  --color-danger: #ef4444;
  --radius: 12px;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  --container: 1200px;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

.container {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 20px;
}

/* ---------- ХЕДЕР ---------- */
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 72px;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.logo span {
  color: var(--color-primary);
}

.nav {
  display: flex;
  gap: 28px;
}

.nav__link {
  font-size: 15px;
  color: var(--color-muted);
  transition: color 0.2s ease;
}

.nav__link:hover,
.nav__link--active {
  color: var(--color-text);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--color-text);
  transition: background 0.2s ease;
}

.icon-btn:hover {
  background: #f1f3f5;
}

.icon-btn svg {
  width: 20px;
  height: 20px;
}

.badge {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--color-primary);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.burger span {
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
}

/* ---------- Хлебные крошки ---------- */
.crumbs-wrap {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px 0;
  font-size: 13px;
  color: var(--color-muted);
}

.breadcrumbs a {
  transition: color 0.2s ease;
}

.breadcrumbs a:hover {
  color: var(--color-primary);
}

.breadcrumbs .sep {
  color: #cbd5e1;
}

.breadcrumbs .current {
  color: var(--color-text);
  font-weight: 500;
}

/* ---------- Основной блок товара ---------- */
.product-view {
  padding: 32px 0 56px;
}

.product-view__layout {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 48px;
  align-items: flex-start;
}

/* ---------- Галерея ---------- */
.gallery {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 16px;
  position: sticky;
  top: 92px;
}

.gallery__thumbs {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.thumb {
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid transparent;
  background: #eef1f5;
  cursor: pointer;
  transition: border-color 0.15s ease;
  padding: 0;
}

.thumb:hover {
  border-color: #cbd5e1;
}

.thumb--active {
  border-color: var(--color-primary);
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery__main {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius);
  overflow: hidden;
  background: #eef1f5;
}

.gallery__main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery__label {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--color-danger);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
}

.gallery__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(4px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transition: background 0.15s ease;
  z-index: 2;
}

.gallery__nav:hover {
  background: #fff;
}

.gallery__nav--prev {
  left: 16px;
}

.gallery__nav--next {
  right: 16px;
}

.gallery__nav svg {
  width: 18px;
  height: 18px;
}

/* ---------- Информация о товаре ---------- */
.product-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-info__meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 13px;
  color: var(--color-muted);
}

.product-info__brand {
  color: var(--color-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.in-stock {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-success);
  font-weight: 500;
}

.in-stock::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-success);
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
}

.product-info__title {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.rating {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 14px;
}

.stars {
  color: #f59e0b;
  letter-spacing: 1px;
  font-size: 15px;
}

.rating__value {
  font-weight: 600;
}

.rating__reviews {
  color: var(--color-muted);
}

.rating__reviews:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

/* Цена */
.price-block {
  display: flex;
  align-items: flex-end;
  gap: 14px;
  flex-wrap: wrap;
  padding: 20px 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.price-block__current {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.price-block__old {
  font-size: 17px;
  color: var(--color-muted);
  text-decoration: line-through;
}

.price-block__discount {
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(239, 68, 68, 0.1);
  color: var(--color-danger);
  font-size: 13px;
  font-weight: 600;
}

/* Опции */
.options {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.option__head {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 10px;
}

.option__label {
  font-size: 14px;
  font-weight: 600;
}

.option__value {
  font-size: 14px;
  color: var(--color-muted);
}

.option__link {
  margin-left: auto;
  font-size: 13px;
  color: var(--color-primary);
}

.option__link:hover {
  text-decoration: underline;
}

.sizes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.size {
  min-width: 48px;
  padding: 10px 14px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  transition: all 0.15s ease;
}

.size:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.size--active {
  background: var(--color-text);
  border-color: var(--color-text);
  color: #fff;
}

.size--disabled {
  opacity: 0.35;
  pointer-events: none;
  text-decoration: line-through;
}

.colors {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.color-swatch {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  transition: all 0.15s ease;
}

.color-swatch:hover {
  transform: scale(1.06);
}

.color-swatch--active {
  border-color: var(--color-primary);
}

/* Кнопки покупки */
.buy-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.qty {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
}

.qty button {
  width: 42px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  transition: background 0.15s ease;
  font-size: 20px;
  font-weight: 300;
}

.qty button:hover {
  background: #f1f3f5;
}

.qty input {
  width: 44px;
  height: 48px;
  border: none;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  background: transparent;
}

.qty input:focus {
  outline: none;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn--primary {
  background: var(--color-primary);
  color: #fff;
}

.btn--primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
}

.btn--primary:active {
  transform: translateY(0);
}

.btn--outline {
  background: #fff;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.btn--outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.btn--icon {
  width: 48px;
  padding: 0;
}

.btn--flex {
  flex: 1;
}

.btn svg {
  width: 18px;
  height: 18px;
}

/* Преимущества */
.perks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}

.perk {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  border-radius: 10px;
  background: #f8fafc;
  text-align: center;
}

.perk svg {
  width: 22px;
  height: 22px;
  color: var(--color-primary);
}

.perk__label {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
}

.perk__text {
  font-size: 12px;
  color: var(--color-muted);
  line-height: 1.4;
}

/* ---------- Табы ---------- */
.tabs-section {
  padding: 56px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.tabs {
  display: flex;
  gap: 4px;
  border-bottom: 1px solid var(--color-border);
  overflow-x: auto;
  scrollbar-width: none;
}

.tabs::-webkit-scrollbar {
  display: none;
}

.tab {
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-muted);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.tab:hover {
  color: var(--color-text);
}

.tab--active {
  color: var(--color-text);
  border-bottom-color: var(--color-primary);
  font-weight: 600;
}

.tab-panels {
  padding-top: 32px;
  max-width: 860px;
}

.tab-panel {
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-text);
}

.tab-panel p + p {
  margin-top: 14px;
}

.tab-panel h3 {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 24px;
}

.tab-panel h3:first-child {
  margin-top: 0;
}

.spec-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.spec-table tr {
  border-bottom: 1px solid var(--color-border);
}

.spec-table tr:last-child {
  border-bottom: none;
}

.spec-table td {
  padding: 12px 0;
  vertical-align: top;
}

.spec-table td:first-child {
  width: 40%;
  color: var(--color-muted);
}

.spec-table td:last-child {
  font-weight: 500;
}

/* ---------- Похожие товары ---------- */
.section {
  padding: 56px 0;
}

.section__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 32px;
}

.section__title {
  font-size: clamp(20px, 2.5vw, 26px);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.section__subtitle {
  color: var(--color-muted);
  font-size: 14px;
  margin-top: 6px;
}

.section__link {
  color: var(--color-primary);
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
}

.section__link:hover {
  text-decoration: underline;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.product {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.product:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.product__media {
  position: relative;
  aspect-ratio: 1 / 1;
  background: #eef1f5;
  overflow: hidden;
}

.product__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product:hover .product__media img {
  transform: scale(1.05);
}

.product__label {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  border-radius: 6px;
  background: #ef4444;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}

.product__label--new {
  background: #10b981;
}

.product__fav {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  transition: color 0.2s ease, background 0.2s ease;
}

.product__fav:hover {
  background: #fff;
  color: #ef4444;
}

.product__fav svg {
  width: 17px;
  height: 17px;
}

.product__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  gap: 8px;
}

.product__category {
  font-size: 12px;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.product__title {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product__rating {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--color-muted);
}

.product__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
  padding-top: 8px;
}

.product__price {
  display: flex;
  flex-direction: column;
}

.price-current {
  font-size: 18px;
  font-weight: 700;
}

.price-old {
  font-size: 13px;
  color: var(--color-muted);
  text-decoration: line-through;
}

.add-to-cart {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--color-primary);
  color: #fff;
  transition: background 0.2s ease, transform 0.1s ease;
}

.add-to-cart:hover {
  background: var(--color-primary-dark);
}

.add-to-cart:active {
  transform: scale(0.95);
}

.add-to-cart svg {
  width: 18px;
  height: 18px;
}

/* ---------- ФУТЕР ---------- */
.footer {
  background: #0f172a;
  color: rgba(255, 255, 255, 0.7);
  padding: 64px 0 32px;
  margin-top: 40px;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 48px;
}

.footer__brand .logo {
  color: #fff;
  margin-bottom: 14px;
  display: inline-block;
}

.footer__about {
  font-size: 14px;
  line-height: 1.6;
  max-width: 320px;
  margin-bottom: 20px;
}

.socials {
  display: flex;
  gap: 10px;
}

.socials a {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  transition: background 0.2s ease;
}

.socials a:hover {
  background: var(--color-primary);
}

.socials svg {
  width: 18px;
  height: 18px;
}

.footer__col h4 {
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 18px;
}

.footer__col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__col a {
  font-size: 14px;
  transition: color 0.2s ease;
}

.footer__col a:hover {
  color: #fff;
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 13px;
}

.footer__bottom-links {
  display: flex;
  gap: 20px;
}

/* ---------- Адаптив ---------- */
@media (max-width: 992px) {
  .product-view__layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .gallery {
    position: static;
  }

  .products {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .burger {
    display: flex;
  }

  .perks {
    grid-template-columns: 1fr;
  }

  .product-view {
    padding: 24px 0 40px;
  }

  .section {
    padding: 40px 0;
  }
}

@media (max-width: 640px) {
  .gallery {
    grid-template-columns: 1fr;
  }

  .gallery__thumbs {
    flex-direction: row;
    overflow-x: auto;
    order: 2;
    padding-bottom: 4px;
  }

  .thumb {
    flex: 0 0 72px;
    width: 72px;
  }

  .gallery__main {
    order: 1;
  }

  .buy-actions {
    flex-direction: column;
  }

  .btn--flex {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .products {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    grid-template-columns: 1fr;
  }

  .header__inner {
    height: 64px;
  }

  .logo {
    font-size: 19px;
  }

  .price-block__current {
    font-size: 26px;
  }
}
</style>
