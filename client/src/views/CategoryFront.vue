<script setup>
  import { useStore } from 'vuex';
import LoadingVue from "@/components/LoadingVue.vue";
import { computed } from 'vue';
const store = useStore();
const categories = computed(() => store.getters['category/getCategories']);
</script>

<template>
 

 
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
        <template
        v-for="category in categories"
        :key="category.id">
        <!-- Обувь -->
        <a href="#" class="category">
          <div class="category__media">
            <span class="category__count-badge">{{category.counterProduct}} товаров</span>
            <img :src="category.img"
                  :alt="category.title">
            <div class="category__name-overlay">
              <h2 class="category__name">{{category.title}}</h2>
              <span class="category__meta">{{ category.shortDescription }}</span>
            </div>
          </div>
          <div class="category__body">
            <p class="category__desc">
              {{ category.description }}
            </p>
            <div class="subcats">
              <span class="subcat"
              v-for="tag in category.tags"
              :key="tag">{{tag}}</span>
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
        </template>
       

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
