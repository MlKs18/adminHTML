<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { PRIVATE_ROUTS_VALUE } from '@/enums';
</script>

<template>
 <header class="header">
      <div class="container header__inner">
        <a href="#" class="logo">Shop<span>.</span>Ru</a>

        <nav class="nav">
          <a href="#" class="nav__link nav__link--active">Главная</a>
          <a href="#categories" class="nav__link">Категории</a>
          <a href="#top" class="nav__link">Товары</a>
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
    <RouterLink class="linkAdmin" :to="PRIVATE_ROUTS_VALUE.dashboard">Adminka</RouterLink>
          <slot/>

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

/* ---------- 1. ХЕДЕР ---------- */
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

.linkAdmin {
  position: absolute;
  top: 20px;
  left: 140px;
  padding: 5px 25px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: lightblue;
  color: white;
  font-weight: bold;
}

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
</style>

