<script setup>

</script>

<template>
  <main>
    <header class="header">
      <div class="container header__inner">
        <a href="#" class="logo">Shop<span>.</span>Ru</a>

        <nav class="nav">
          <a href="#" class="nav__link">Главная</a>
          <a href="#" class="nav__link nav__link--active">Категории</a>
          <a href="#" class="nav__link">Товары</a>
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
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- ============ Заголовок страницы ============ -->
    <section class="page-head">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Хлебные крошки">
          <a href="#">Главная</a>
          <span class="sep">/</span>
          <span class="current">Категории</span>
        </nav>

        <h1 class="page-head__title">Все категории</h1>
        <p class="page-head__subtitle">
          Более 1 000 товаров в 8 категориях. Выберите нужную и переходите
          к каталогу — с удобными фильтрами и сортировкой.
        </p>
      </div>
    </section>

    <!-- ============ Сетка категорий ============ -->
    <section class="section">
      <div class="container">
        <div class="categories">

          <!-- Обувь -->
          <a href="#" class="category">
            <div class="category__media">
              <span class="category__count-badge">128 товаров</span>
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                   alt="Обувь">
              <div class="category__name-overlay">
                <h2 class="category__name">Обувь</h2>
                <span class="category__meta">Кроссовки, ботинки, кеды</span>
              </div>
            </div>
            <div class="category__body">
              <p class="category__desc">
                Всё для комфортной ходьбы и активного образа жизни —
                от беговых кроссовок до зимних ботинок.
              </p>
              <div class="subcats">
                <span class="subcat">Кроссовки</span>
                <span class="subcat">Ботинки</span>
                <span class="subcat">Кеды</span>
                <span class="subcat">+3</span>
              </div>
              <div class="category__footer">
                        <span class="category__link">
                            Смотреть товары
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
              </div>
            </div>
          </a>

          <!-- Одежда -->
          <a href="#" class="category">
            <div class="category__media">
              <span class="category__count-badge">347 товаров</span>
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                   alt="Одежда">
              <div class="category__name-overlay">
                <h2 class="category__name">Одежда</h2>
                <span class="category__meta">Верхняя одежда, футболки, джинсы</span>
              </div>
            </div>
            <div class="category__body">
              <p class="category__desc">
                Базовая и дизайнерская одежда на каждый день.
                Только проверенные бренды и честные размеры.
              </p>
              <div class="subcats">
                <span class="subcat">Куртки</span>
                <span class="subcat">Футболки</span>
                <span class="subcat">Джинсы</span>
                <span class="subcat">+5</span>
              </div>
              <div class="category__footer">
                        <span class="category__link">
                            Смотреть товары
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
              </div>
            </div>
          </a>

          <!-- Аксессуары -->
          <a href="#" class="category">
            <div class="category__media">
              <span class="category__count-badge">94 товара</span>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
                   alt="Аксессуары">
              <div class="category__name-overlay">
                <h2 class="category__name">Аксессуары</h2>
                <span class="category__meta">Часы, сумки, ремни</span>
              </div>
            </div>
            <div class="category__body">
              <p class="category__desc">
                Детали, которые делают образ. От классических
                часов до стильных сумок и кошельков.
              </p>
              <div class="subcats">
                <span class="subcat">Часы</span>
                <span class="subcat">Сумки</span>
                <span class="subcat">Ремни</span>
              </div>
              <div class="category__footer">
                        <span class="category__link">
                            Смотреть товары
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
              </div>
            </div>
          </a>

          <!-- Гаджеты -->
          <a href="#" class="category">
            <div class="category__media">
              <span class="category__count-badge">212 товаров</span>
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80"
                   alt="Гаджеты">
              <div class="category__name-overlay">
                <h2 class="category__name">Гаджеты</h2>
                <span class="category__meta">Смартфоны, наушники, умный дом</span>
              </div>
            </div>
            <div class="category__body">
              <p class="category__desc">
                Техника и электроника: от беспроводных наушников
                до устройств умного дома.
              </p>
              <div class="subcats">
                <span class="subcat">Смартфоны</span>
                <span class="subcat">Наушники</span>
                <span class="subcat">Умный дом</span>
                <span class="subcat">+4</span>
              </div>
              <div class="category__footer">
                        <span class="category__link">
                            Смотреть товары
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
              </div>
            </div>
          </a>

          <!-- Дом -->
          <a href="#" class="category">
            <div class="category__media">
              <span class="category__count-badge">156 товаров</span>
              <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80"
                   alt="Дом">
              <div class="category__name-overlay">
                <h2 class="category__name">Дом</h2>
                <span class="category__meta">Текстиль, посуда, декор</span>
              </div>
            </div>
            <div class="category__body">
              <p class="category__desc">
                Уют начинается с деталей. Всё для дома:
                от постельного белья до декора и посуды.
              </p>
              <div class="subcats">
                <span class="subcat">Текстиль</span>
                <span class="subcat">Посуда</span>
                <span class="subcat">Декор</span>
              </div>
              <div class="category__footer">
                        <span class="category__link">
                            Смотреть товары
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
              </div>
            </div>
          </a>

          <!-- Красота -->
          <a href="#" class="category">
            <div class="category__media">
              <span class="category__count-badge">88 товаров</span>
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
                   alt="Красота">
              <div class="category__name-overlay">
                <h2 class="category__name">Красота</h2>
                <span class="category__meta">Уход, макияж, парфюм</span>
              </div>
            </div>
            <div class="category__body">
              <p class="category__desc">
                Косметика и уход за собой: от корейских сывороток
                до парфюмерии известных брендов.
              </p>
              <div class="subcats">
                <span class="subcat">Уход за кожей</span>
                <span class="subcat">Макияж</span>
                <span class="subcat">Парфюм</span>
              </div>
              <div class="category__footer">
                        <span class="category__link">
                            Смотреть товары
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
              </div>
            </div>
          </a>

          <!-- Спорт -->
          <a href="#" class="category">
            <div class="category__media">
              <span class="category__count-badge">74 товара</span>
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
                   alt="Спорт">
              <div class="category__name-overlay">
                <h2 class="category__name">Спорт</h2>
                <span class="category__meta">Тренажёры, экипировка, питание</span>
              </div>
            </div>
            <div class="category__body">
              <p class="category__desc">
                Всё для тренировок дома и в зале:
                инвентарь, экипировка и спортивное питание.
              </p>
              <div class="subcats">
                <span class="subcat">Инвентарь</span>
                <span class="subcat">Экипировка</span>
                <span class="subcat">Питание</span>
              </div>
              <div class="category__footer">
                        <span class="category__link">
                            Смотреть товары
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
              </div>
            </div>
          </a>

          <!-- Книги -->
          <a href="#" class="category">
            <div class="category__media">
              <span class="category__count-badge">521 товар</span>
              <img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80"
                   alt="Книги">
              <div class="category__name-overlay">
                <h2 class="category__name">Книги</h2>
                <span class="category__meta">Художественная, нон-фикшн, детская</span>
              </div>
            </div>
            <div class="category__body">
              <p class="category__desc">
                От классики до современных бестселлеров. Более
                500 книг в бумажном и электронном формате.
              </p>
              <div class="subcats">
                <span class="subcat">Художественная</span>
                <span class="subcat">Нон-фикшн</span>
                <span class="subcat">Детская</span>
                <span class="subcat">+2</span>
              </div>
              <div class="category__footer">
                        <span class="category__link">
                            Смотреть товары
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>

    <!-- ============ Популярные бренды ============ -->
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="section__head">
          <div>
            <h2 class="section__title">Популярные бренды</h2>
            <p class="section__subtitle">Проверенные производители с гарантией качества</p>
          </div>
        </div>

        <div class="brands">
          <a href="#" class="brand">Nike</a>
          <a href="#" class="brand">Adidas</a>
          <a href="#" class="brand">Puma</a>
          <a href="#" class="brand">New Balance</a>
          <a href="#" class="brand">Apple</a>
          <a href="#" class="brand">Samsung</a>
        </div>
      </div>
    </section>

    <!-- ============ CTA ============ -->
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="cta">
          <div class="cta__content">
            <h2 class="cta__title">Не нашли нужную категорию?</h2>
            <p class="cta__text">
              Напишите нам — мы постоянно расширяем ассортимент
              и добавляем новые категории по запросам покупателей.
            </p>
          </div>
          <a href="#" class="btn btn--white">
            Связаться с нами
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
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

/* ---------- Заголовок страницы ---------- */
.page-head {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 32px 0 40px;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
  color: var(--color-muted);
  margin-bottom: 16px;
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

.page-head__title {
  font-size: clamp(26px, 3.5vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 10px;
}

.page-head__subtitle {
  color: var(--color-muted);
  font-size: 15px;
  max-width: 640px;
}

/* ---------- Секция со всеми категориями ---------- */
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

/* ---------- Основная сетка категорий ---------- */
.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.category {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
  border-color 0.25s ease;
}

.category:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
  border-color: transparent;
}

.category__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #eef1f5;
}

.category__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category:hover .category__media img {
  transform: scale(1.06);
}

.category__media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 55%,
      rgba(0, 0, 0, 0.55) 100%
  );
}

.category__count-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  color: var(--color-text);
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

.category__name-overlay {
  position: absolute;
  left: 20px;
  bottom: 16px;
  z-index: 2;
  color: #fff;
}

.category__name {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin-bottom: 4px;
}

.category__meta {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
}

.category__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 18px 20px 20px;
  gap: 14px;
}

.category__desc {
  font-size: 14px;
  color: var(--color-muted);
  line-height: 1.5;
}

.subcats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.subcat {
  font-size: 13px;
  padding: 5px 12px;
  border-radius: 999px;
  background: #f1f3f5;
  color: var(--color-muted);
  transition: all 0.15s ease;
}

.subcat:hover {
  background: var(--color-primary);
  color: #fff;
}

.category__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 4px;
}

.category__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  transition: gap 0.2s ease;
}

.category:hover .category__link {
  gap: 12px;
}

.category__link svg {
  width: 16px;
  height: 16px;
}

/* ---------- Популярные бренды ---------- */
.brands {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  padding: 12px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  font-weight: 700;
  font-size: 16px;
  color: var(--color-muted);
  letter-spacing: -0.01em;
  transition: all 0.2s ease;
}

.brand:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

/* ---------- CTA-баннер ---------- */
.cta {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  color: #fff;
  padding: 56px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.cta::before {
  content: "";
  position: absolute;
  width: 320px;
  height: 320px;
  right: -80px;
  top: -120px;
  background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.18) 0%,
      transparent 70%
  );
  border-radius: 50%;
}

.cta__content {
  position: relative;
  max-width: 560px;
}

.cta__title {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 10px;
}

.cta__text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  margin-bottom: 24px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn--white {
  background: #fff;
  color: var(--color-primary);
}

.btn--white:hover {
  background: #f1f5ff;
  transform: translateY(-1px);
}

.btn svg {
  width: 16px;
  height: 16px;
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
  .categories {
    grid-template-columns: repeat(2, 1fr);
  }

  .brands {
    grid-template-columns: repeat(3, 1fr);
  }

  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .cta {
    padding: 40px 32px;
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .burger {
    display: flex;
  }

  .page-head {
    padding: 24px 0 32px;
  }

  .section {
    padding: 40px 0;
  }
}

@media (max-width: 480px) {
  .categories {
    grid-template-columns: 1fr;
  }

  .brands {
    grid-template-columns: repeat(2, 1fr);
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

  .cta {
    padding: 32px 24px;
  }
}
</style>
