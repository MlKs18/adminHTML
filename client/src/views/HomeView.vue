<script setup>

</script>

<template>
  <main>
   

    <!-- ============ 2. HERO ============ -->
    <section class="hero">
      <img class="hero__bg"
           src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
           alt="Горный пейзаж">
      <div class="hero__overlay"></div>

      <div class="container hero__inner">
        <div class="hero__content">
          <span class="hero__tag">Новая коллекция 2025</span>
          <h1 class="hero__title">Товары для тех, кто ценит качество</h1>
          <p class="hero__text">
            Тысячи проверенных товаров, быстрая доставка по всей стране
            и честные отзывы покупателей. Найди своё уже сегодня.
          </p>
          <div class="hero__actions">
            <a href="#top" class="btn btn--primary">
              Смотреть товары
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#categories" class="btn btn--ghost">Категории</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 3. КАТЕГОРИИ ============ -->
    <section class="section" id="categories">
      <div class="container">
        <div class="section__head">
          <div>
            <h2 class="section__title">Категории</h2>
            <p class="section__subtitle">Выберите то, что вам интересно</p>
          </div>
          <a href="#" class="section__link">Все категории →</a>
        </div>

        <div class="categories">
          <a href="#" class="category">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"
                 alt="Обувь">
            <span class="category__name">Обувь</span>
            <span class="category__count">128 товаров</span>
          </a>

          <a href="#" class="category">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
                 alt="Аксессуары">
            <span class="category__name">Аксессуары</span>
            <span class="category__count">94 товара</span>
          </a>

          <a href="#" class="category">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80"
                 alt="Гаджеты">
            <span class="category__name">Гаджеты</span>
            <span class="category__count">212 товаров</span>
          </a>

          <a href="#" class="category">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
                 alt="Одежда">
            <span class="category__name">Одежда</span>
            <span class="category__count">347 товаров</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ============ 4. ТОП ПРОДУКТОВ ============ -->
    <section class="section" id="top" style="background: #fff;">
      <div class="container">
        <div class="section__head">
          <div>
            <h2 class="section__title">Топ товаров</h2>
            <p class="section__subtitle">Самые популярные позиции этой недели</p>
          </div>
          <a href="#" class="section__link">Смотреть все →</a>
        </div>

        <div class="products">
          <!-- Товар 1 -->
          <article class="product">
            <div class="product__media">
              <span class="product__label">-20%</span>
              <button class="product__fav" aria-label="В избранное">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                </svg>
              </button>
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"
                   alt="Кроссовки">
            </div>
            <div class="product__body">
              <span class="product__category">Обувь</span>
              <h3 class="product__title">Кроссовки Urban Runner Pro</h3>
              <div class="product__rating">
                <span class="stars">★★★★★</span>
                <span>4.9 · 214 отзывов</span>
              </div>
              <div class="product__footer">
                <div class="product__price">
                  <span class="price-current">7 990 ₽</span>
                  <span class="price-old">9 990 ₽</span>
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

          <!-- Товар 2 -->
          <article class="product">
            <div class="product__media">
              <span class="product__label product__label--new">NEW</span>
              <button class="product__fav" aria-label="В избранное">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                </svg>
              </button>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
                   alt="Часы">
            </div>
            <div class="product__body">
              <span class="product__category">Аксессуары</span>
              <h3 class="product__title">Смарт-часы Chrono X2</h3>
              <div class="product__rating">
                <span class="stars">★★★★☆</span>
                <span>4.6 · 98 отзывов</span>
              </div>
              <div class="product__footer">
                <div class="product__price">
                  <span class="price-current">12 490 ₽</span>
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

          <!-- Товар 3 -->
          <article class="product">
            <div class="product__media">
              <button class="product__fav" aria-label="В избранное">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                </svg>
              </button>
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80"
                   alt="Наушники">
            </div>
            <div class="product__body">
              <span class="product__category">Гаджеты</span>
              <h3 class="product__title">Беспроводные наушники SoundAir</h3>
              <div class="product__rating">
                <span class="stars">★★★★★</span>
                <span>4.8 · 156 отзывов</span>
              </div>
              <div class="product__footer">
                <div class="product__price">
                  <span class="price-current">5 490 ₽</span>
                  <span class="price-old">6 990 ₽</span>
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

          <!-- Товар 4 -->
          <article class="product">
            <div class="product__media">
              <button class="product__fav" aria-label="В избранное">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                </svg>
              </button>
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
                   alt="Куртка">
            </div>
            <div class="product__body">
              <span class="product__category">Одежда</span>
              <h3 class="product__title">Куртка зимняя Alpine Shell</h3>
              <div class="product__rating">
                <span class="stars">★★★★☆</span>
                <span>4.5 · 74 отзыва</span>
              </div>
              <div class="product__footer">
                <div class="product__price">
                  <span class="price-current">14 900 ₽</span>
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


  </main>
</template>
<style scoped>


/* ---------- 2. HERO ---------- */
.hero {
  position: relative;
  overflow: hidden;
  background: #0f172a;
  color: #fff;
  border-radius: 0;
}

.hero__inner {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: center;
  padding: 60px 0;
}

.hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
      90deg,
      rgba(15, 23, 42, 0.85) 0%,
      rgba(15, 23, 42, 0.35) 60%,
      rgba(15, 23, 42, 0.1) 100%
  );
}

.hero__content {
  position: relative;
  max-width: 560px;
}

.hero__tag {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 13px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero__title {
  font-size: clamp(28px, 4vw, 46px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
}

.hero__text {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 32px;
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

.btn--primary {
  background: var(--color-primary);
  color: #fff;
}

.btn--primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
}

.btn--ghost {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.35);
}

.btn--ghost:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* ---------- Общие секции ---------- */
.section {
  padding: 72px 0;
}

.section__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 36px;
}

.section__title {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.section__subtitle {
  color: var(--color-muted);
  font-size: 15px;
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

/* ---------- 3. КАТЕГОРИИ ---------- */
.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.category {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 200px;
  padding: 20px;
  border-radius: var(--radius);
  overflow: hidden;
  color: #fff;
  background: #334155;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.category:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.category img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category:hover img {
  transform: scale(1.06);
}

.category::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0.7) 100%
  );
}

.category__name {
  position: relative;
  font-size: 17px;
  font-weight: 600;
}

.category__count {
  position: relative;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
}

/* ---------- 4. ТОП ПРОДУКТОВ ---------- */
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

/* ---------- 5. ФУТЕР ---------- */


/* ---------- Адаптив ---------- */
@media (max-width: 992px) {
  .categories,
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

  .hero__inner {
    min-height: 380px;
    padding: 48px 0;
  }

  .section {
    padding: 48px 0;
  }

  .section__head {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .categories,
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
}
</style>
