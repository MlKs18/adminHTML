<script setup>

</script>

<template>

  <!-- ============ Хлебные крошки ============ -->
  <div class="crumbs-wrap">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Хлебные крошки">
        <a href="#">Главная</a>
        <span class="sep">/</span>
        <span class="current">Корзина</span>
      </nav>
    </div>
  </div>

  <!-- ============ Заголовок ============ -->
  <div class="container page-head">
    <h1 class="page-head__title">
      Корзина
      <span class="page-head__count">3 товара</span>
    </h1>
  </div>

  <!-- ============ Корзина ============ -->
  <section class="cart">
    <div class="container">
      <div class="cart__layout">

        <!-- ---------- Список товаров ---------- -->
        <div>
          <div class="cart-list">

            <!-- Товар 1 -->
            <article class="cart-item">
              <div class="cart-item__media">
                <span class="cart-item__label">-20%</span>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80"
                     alt="Nike Air Zoom Pegasus 40">
              </div>

              <div class="cart-item__content">
                <span class="cart-item__category">Обувь · Nike</span>
                <h3 class="cart-item__title">
                  <a href="#">Кроссовки Nike Air Zoom Pegasus 40</a>
                </h3>

                <div class="cart-item__options">
                                <span class="cart-item__option">
                                    Цвет: <b>Чёрный / Белый</b>
                                    <span class="cart-item__color"></span>
                                </span>
                  <span class="cart-item__option">
                                    Размер: <b>40</b>
                                </span>
                </div>

                <div class="cart-item__controls">
                  <div class="qty">
                    <button type="button" aria-label="Уменьшить">−</button>
                    <input type="text" value="1" readonly>
                    <button type="button" aria-label="Увеличить">+</button>
                  </div>

                  <button class="link-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                      <path d="M10 11v6M14 11v6"/>
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                    </svg>
                    Удалить
                  </button>
                </div>
              </div>

              <div class="cart-item__side">
                <button class="fav-btn" aria-label="В избранное">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                  </svg>
                </button>

                <div class="cart-item__price">
                  <span class="price-current">7 990 ₽</span>
                  <span class="price-old">9 990 ₽</span>
                </div>
              </div>
            </article>

            <!-- Товар 2 -->
            <article class="cart-item">
              <div class="cart-item__media">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80"
                     alt="Смарт-часы Chrono X2">
              </div>

              <div class="cart-item__content">
                <span class="cart-item__category">Аксессуары · Chrono</span>
                <h3 class="cart-item__title">
                  <a href="#">Смарт-часы Chrono X2 Black Edition</a>
                </h3>

                <div class="cart-item__options">
                                <span class="cart-item__option">
                                    Цвет: <b>Чёрный</b>
                                    <span class="cart-item__color"></span>
                                </span>
                  <span class="cart-item__option">
                                    Ремешок: <b>Силикон</b>
                                </span>
                </div>

                <div class="cart-item__controls">
                  <div class="qty">
                    <button type="button" aria-label="Уменьшить">−</button>
                    <input type="text" value="1" readonly>
                    <button type="button" aria-label="Увеличить">+</button>
                  </div>

                  <button class="link-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                      <path d="M10 11v6M14 11v6"/>
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                    </svg>
                    Удалить
                  </button>
                </div>
              </div>

              <div class="cart-item__side">
                <button class="fav-btn" aria-label="В избранное">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                  </svg>
                </button>

                <div class="cart-item__price">
                  <span class="price-current">12 490 ₽</span>
                </div>
              </div>
            </article>

            <!-- Товар 3 -->
            <article class="cart-item">
              <div class="cart-item__media">
                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&q=80"
                     alt="Беспроводные наушники SoundAir">
              </div>

              <div class="cart-item__content">
                <span class="cart-item__category">Гаджеты · SoundAir</span>
                <h3 class="cart-item__title">
                  <a href="#">Беспроводные наушники SoundAir Pro 2</a>
                </h3>

                <div class="cart-item__options">
                                <span class="cart-item__option">
                                    Цвет: <b>Белый</b>
                                    <span class="cart-item__color" style="background:#ffffff"></span>
                                </span>
                </div>

                <div class="cart-item__controls">
                  <div class="qty">
                    <button type="button" aria-label="Уменьшить">−</button>
                    <input type="text" value="2" readonly>
                    <button type="button" aria-label="Увеличить">+</button>
                  </div>

                  <button class="link-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                      <path d="M10 11v6M14 11v6"/>
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                    </svg>
                    Удалить
                  </button>
                </div>
              </div>

              <div class="cart-item__side">
                <button class="fav-btn" aria-label="В избранное">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                  </svg>
                </button>

                <div class="cart-item__price">
                  <span class="price-current">10 980 ₽</span>
                  <span class="price-old">13 980 ₽</span>
                </div>
              </div>
            </article>

          </div>

          <!-- Продолжить покупки -->
          <div style="margin-top: 24px;">
            <a href="#" class="continue-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              Продолжить покупки
            </a>
          </div>
        </div>

        <!-- ---------- Сайдбар: промокод + сводка ---------- -->
        <aside class="sidebar">

          <!-- Промокод -->
          <div class="promo">
            <div class="promo__title">Промокод</div>
            <form class="promo__form" onsubmit="return false;">
              <input type="text" class="promo__input" placeholder="Введите код">
              <button type="submit" class="btn btn--outline">Применить</button>
            </form>
          </div>

          <!-- Итоговая сводка -->
          <div class="summary">
            <h2 class="summary__title">Итого</h2>

            <div class="summary__row">
              <span>Товары (4 шт.)</span>
              <span>31 460 ₽</span>
            </div>

            <div class="summary__row summary__row--discount">
              <span>Скидка</span>
              <span>−5 980 ₽</span>
            </div>

            <div class="summary__row">
              <span>Доставка</span>
              <span>Бесплатно</span>
            </div>

            <div class="summary__row summary__row--total">
              <span>К оплате</span>
              <span class="summary__total-value">25 480 ₽</span>
            </div>

            <div class="summary__savings">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
              </svg>
              Вы экономите 5 980 ₽
            </div>
          </div>

          <!-- Кнопка оформления -->
          <div>
            <button class="checkout-btn">
              Оформить заказ
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <p class="checkout-note">
              Нажимая кнопку, вы соглашаетесь с
              <a href="#">условиями оферты</a>
              и <a href="#">политикой конфиденциальности</a>.
            </p>
          </div>

        </aside>

      </div>
    </div>
  </section>

  <!-- ============ Рекомендуем также ============ -->
  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="section__head">
        <div>
          <h2 class="section__title">С этим товаром покупают</h2>
          <p class="section__subtitle">Не забудьте добавить к заказу</p>
        </div>
        <a href="#" class="section__link">Смотреть все →</a>
      </div>

      <div class="products">

        <article class="product">
          <div class="product__media">
            <span class="product__label">-10%</span>
            <button class="product__fav" aria-label="В избранное">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
              </svg>
            </button>
            <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="Носки">
          </div>
          <div class="product__body">
            <span class="product__category">Аксессуары</span>
            <h3 class="product__title">Носки Nike Everyday 3 пары</h3>
            <div class="product__rating">
              <span class="stars">★★★★★</span>
              <span>4.8 · 412</span>
            </div>
            <div class="product__footer">
              <div class="product__price">
                <span class="price-current">1 490 ₽</span>
                <span class="price-old">1 690 ₽</span>
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
            <span class="product__label product__label--new">NEW</span>
            <button class="product__fav" aria-label="В избранное">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
              </svg>
            </button>
            <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80" alt="Бутылка">
          </div>
          <div class="product__body">
            <span class="product__category">Спорт</span>
            <h3 class="product__title">Спортивная бутылка 750 мл</h3>
            <div class="product__rating">
              <span class="stars">★★★★☆</span>
              <span>4.6 · 128</span>
            </div>
            <div class="product__footer">
              <div class="product__price">
                <span class="price-current">990 ₽</span>
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
            <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=80" alt="Сумка">
          </div>
          <div class="product__body">
            <span class="product__category">Аксессуары</span>
            <h3 class="product__title">Спортивная сумка Duffel Bag 40L</h3>
            <div class="product__rating">
              <span class="stars">★★★★☆</span>
              <span>4.7 · 96</span>
            </div>
            <div class="product__footer">
              <div class="product__price">
                <span class="price-current">3 490 ₽</span>
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
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" alt="Коврик">
          </div>
          <div class="product__body">
            <span class="product__category">Спорт</span>
            <h3 class="product__title">Коврик для йоги 6 мм</h3>
            <div class="product__rating">
              <span class="stars">★★★★★</span>
              <span>4.9 · 214</span>
            </div>
            <div class="product__footer">
              <div class="product__price">
                <span class="price-current">2 290 ₽</span>
                <span class="price-old">2 990 ₽</span>
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

input {
  font: inherit;
  color: inherit;
}

.container {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 20px;
}

/* ---------- ХЕДЕР ---------- */

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

/* ---------- Заголовок страницы ---------- */
.page-head {
  padding: 32px 0 8px;
}

.page-head__title {
  font-size: clamp(26px, 3.5vw, 34px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.page-head__count {
  color: var(--color-muted);
  font-weight: 500;
  font-size: 16px;
  margin-left: 8px;
}

/* ---------- Основной лейаут ---------- */
.cart {
  padding: 32px 0 72px;
}

.cart__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 380px;
  gap: 32px;
  align-items: flex-start;
}

/* ---------- Список товаров ---------- */
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cart-item {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 20px;
  padding: 20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  transition: border-color 0.2s ease;
}

.cart-item:hover {
  border-color: #cbd5e1;
}

.cart-item__media {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  overflow: hidden;
  background: #eef1f5;
}

.cart-item__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart-item__label {
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 3px 8px;
  border-radius: 5px;
  background: var(--color-danger);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
}

.cart-item__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.cart-item__category {
  font-size: 12px;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.cart-item__title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.35;
}

.cart-item__title a:hover {
  color: var(--color-primary);
}

.cart-item__options {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 16px;
  font-size: 13px;
  color: var(--color-muted);
}

.cart-item__option {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.cart-item__option b {
  color: var(--color-text);
  font-weight: 500;
}

.cart-item__color {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #1a1d23;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  vertical-align: middle;
}

.cart-item__controls {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 4px;
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
  width: 36px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  font-size: 18px;
  font-weight: 300;
  transition: background 0.15s ease;
}

.qty button:hover {
  background: #f1f3f5;
}

.qty input {
  width: 40px;
  height: 40px;
  border: none;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  background: transparent;
}

.qty input:focus {
  outline: none;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--color-muted);
  transition: color 0.15s ease;
}

.link-btn:hover {
  color: var(--color-danger);
}

.link-btn svg {
  width: 15px;
  height: 15px;
}

/* Правая часть строки — цена и избранное */
.cart-item__side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  text-align: right;
  min-width: 120px;
}

.cart-item__price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.price-current {
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.price-old {
  font-size: 13px;
  color: var(--color-muted);
  text-decoration: line-through;
}

.fav-btn {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  transition: all 0.15s ease;
}

.fav-btn:hover {
  background: #f1f3f5;
  color: var(--color-danger);
}

.fav-btn svg {
  width: 17px;
  height: 17px;
}

/* ---------- Промокод + сводка ---------- */
.sidebar {
  position: sticky;
  top: 92px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.summary {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 24px;
}

.summary__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}

.summary__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 15px;
  padding: 8px 0;
}

.summary__row span:first-child {
  color: var(--color-muted);
}

.summary__row--discount span:last-child {
  color: var(--color-success);
  font-weight: 600;
}

.summary__row--total {
  padding-top: 16px;
  margin-top: 8px;
  border-top: 1px solid var(--color-border);
  font-size: 18px;
}

.summary__row--total span:first-child {
  color: var(--color-text);
  font-weight: 600;
}

.summary__total-value {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.summary__savings {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 10px 14px;
  border-radius: 10px;
  background: rgba(16, 185, 129, 0.08);
  color: #047857;
  font-size: 13px;
  font-weight: 500;
}

.summary__savings svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Промокод */
.promo {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 20px;
}

.promo__title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
}

.promo__form {
  display: flex;
  gap: 8px;
}

.promo__input {
  flex: 1;
  padding: 11px 14px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  font-size: 14px;
  background: #fff;
  transition: border-color 0.15s ease;
}

.promo__input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.promo__input::placeholder {
  color: #9ca3af;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 11px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  white-space: nowrap;
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

/* Кнопка оформления */
.checkout-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px 24px;
  border-radius: 12px;
  background: var(--color-primary);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.checkout-btn:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
}

.checkout-btn:active {
  transform: translateY(0);
}

.checkout-btn svg {
  width: 18px;
  height: 18px;
}

.checkout-note {
  text-align: center;
  font-size: 12px;
  color: var(--color-muted);
  margin-top: 12px;
  line-height: 1.5;
}

.checkout-note a {
  color: var(--color-primary);
}

.checkout-note a:hover {
  text-decoration: underline;
}

/* Кнопка "Продолжить покупки" */
.continue-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--color-muted);
  transition: color 0.15s ease, gap 0.15s ease;
}

.continue-link:hover {
  color: var(--color-primary);
  gap: 12px;
}

.continue-link svg {
  width: 16px;
  height: 16px;
}

/* ---------- Пустая корзина ---------- */
.empty-cart {
  padding: 80px 24px;
  text-align: center;
  background: var(--color-surface);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius);
}

.empty-cart__icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 20px;
  color: #cbd5e1;
}

.empty-cart__title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.empty-cart__text {
  color: var(--color-muted);
  font-size: 15px;
  max-width: 420px;
  margin: 0 auto 28px;
}

/* ---------- Похожие/рекомендуемые ---------- */
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

.stars {
  color: #f59e0b;
  letter-spacing: 1px;
}

.product__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
  padding-top: 8px;
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


/* ---------- Адаптив ---------- */
@media (max-width: 992px) {
  .cart__layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
  }

  .products {
    grid-template-columns: repeat(2, 1fr);
  }


  
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .burger {
    display: flex;
  }

  .cart {
    padding: 24px 0 48px;
  }

  .section {
    padding: 40px 0;
  }

  .cart-item {
    grid-template-columns: 96px 1fr;
    gap: 16px;
    padding: 16px;
  }

  .cart-item__side {
    grid-column: 1 / -1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px solid var(--color-border);
    min-width: 0;
  }

  .cart-item__price {
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .products {
    grid-template-columns: 1fr;
  }

  

  

  .logo {
    font-size: 19px;
  }

  .cart-item__controls {
    gap: 12px;
  }
}
</style>
