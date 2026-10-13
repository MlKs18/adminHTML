<script setup>

</script>

<template>
  <main>
    <header class="header">
      <div class="container header__inner">
        <a href="#" class="logo">Shop<span>.</span>Ru</a>

        <nav class="nav">
          <a href="#" class="nav__link">Главная</a>
          <a href="#" class="nav__link nav__link--active">Каталог</a>
          <a href="#" class="nav__link">Блог</a>
          <a href="#" class="nav__link">О нас</a>
          <a href="#" class="nav__link">Контакты</a>
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

    <!-- ============ Заголовок страницы + крошки + чипы категорий ============ -->
    <section class="page-head">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Хлебные крошки">
          <a href="#">Главная</a>
          <span class="sep">/</span>
          <a href="#">Каталог</a>
          <span class="sep">/</span>
          <span class="current">Обувь</span>
        </nav>

        <h1 class="page-head__title">Обувь</h1>
        <p class="page-head__subtitle">
          128 товаров в категории. Кроссовки, ботинки, сандалии и мокасины
          от проверенных брендов — с быстрой доставкой по всей стране.
        </p>

        <div class="chips">
          <a href="#" class="chip chip--active">
            Обувь <span class="chip__count">128</span>
          </a>
          <a href="#" class="chip">
            Одежда <span class="chip__count">347</span>
          </a>
          <a href="#" class="chip">
            Аксессуары <span class="chip__count">94</span>
          </a>
          <a href="#" class="chip">
            Гаджеты <span class="chip__count">212</span>
          </a>
          <a href="#" class="chip">
            Дом <span class="chip__count">156</span>
          </a>
          <a href="#" class="chip">
            Красота <span class="chip__count">88</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ============ Каталог ============ -->
    <section class="catalog">
      <div class="container">
        <div class="catalog__layout">

          <!-- ---------- САЙДБАР ФИЛЬТРОВ ---------- -->
          <aside class="filters">
            <div class="filters__head">
              <h2 class="filters__title">Фильтры</h2>
              <a href="#" class="filters__reset">Сбросить</a>
            </div>

            <!-- Цена -->
            <div class="filter-group">
              <h3 class="filter-group__title">Цена, ₽</h3>
              <div class="price-range">
                <div class="price-range__values">
                  <input type="number" class="price-input" placeholder="от 0" min="0">
                  <span class="price-range__dash">—</span>
                  <input type="number" class="price-input" placeholder="до 50 000" min="0">
                </div>
              </div>
            </div>

            <!-- Бренд -->
            <div class="filter-group">
              <h3 class="filter-group__title">Бренд</h3>
              <label class="checkbox">
                <input type="checkbox" checked>
                <span>Nike</span>
                <span class="checkbox__count">42</span>
              </label>
              <label class="checkbox">
                <input type="checkbox">
                <span>Adidas</span>
                <span class="checkbox__count">36</span>
              </label>
              <label class="checkbox">
                <input type="checkbox">
                <span>Puma</span>
                <span class="checkbox__count">28</span>
              </label>
              <label class="checkbox">
                <input type="checkbox">
                <span>New Balance</span>
                <span class="checkbox__count">15</span>
              </label>
              <label class="checkbox">
                <input type="checkbox">
                <span>Reebok</span>
                <span class="checkbox__count">7</span>
              </label>
            </div>

            <!-- Размер -->
            <div class="filter-group">
              <h3 class="filter-group__title">Размер</h3>
              <div class="chips">
                <a href="#" class="chip">36</a>
                <a href="#" class="chip">38</a>
                <a href="#" class="chip chip--active">40</a>
                <a href="#" class="chip">42</a>
                <a href="#" class="chip">44</a>
                <a href="#" class="chip">46</a>
              </div>
            </div>

            <!-- Цвет -->
            <div class="filter-group">
              <h3 class="filter-group__title">Цвет</h3>
              <div class="color-swatches">
                <span class="swatch swatch--active" style="background:#1a1d23" title="Чёрный"></span>
                <span class="swatch" style="background:#ffffff" title="Белый"></span>
                <span class="swatch" style="background:#ef4444" title="Красный"></span>
                <span class="swatch" style="background:#2563eb" title="Синий"></span>
                <span class="swatch" style="background:#10b981" title="Зелёный"></span>
                <span class="swatch" style="background:#f59e0b" title="Жёлтый"></span>
                <span class="swatch" style="background:#a855f7" title="Фиолетовый"></span>
              </div>
            </div>

            <!-- Наличие -->
            <div class="filter-group">
              <h3 class="filter-group__title">Наличие</h3>
              <label class="checkbox">
                <input type="checkbox" checked>
                <span>Только в наличии</span>
              </label>
              <label class="checkbox">
                <input type="checkbox">
                <span>Со скидкой</span>
              </label>
              <label class="checkbox">
                <input type="checkbox">
                <span>Новинки</span>
              </label>
            </div>

            <button class="btn btn--primary btn--block">Применить</button>
          </aside>

          <!-- ---------- ТОВАРЫ ---------- -->
          <div>
            <!-- Панель над сеткой -->
            <div class="toolbar">
              <div class="toolbar__count">
                Найдено <b>128</b> товаров
              </div>

              <div class="toolbar__right">
                <button class="btn btn--outline filters-toggle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2">
                    <line x1="4" y1="6" x2="20" y2="6"/>
                    <line x1="4" y1="12" x2="20" y2="12"/>
                    <line x1="4" y1="18" x2="20" y2="18"/>
                  </svg>
                  Фильтры
                </button>

                <div class="select-wrap">
                  <select>
                    <option>Популярные</option>
                    <option>Сначала дешёвые</option>
                    <option>Сначала дорогие</option>
                    <option>С высоким рейтингом</option>
                    <option>Новинки</option>
                  </select>
                </div>

                <div class="view-toggle">
                  <button class="active" aria-label="Сетка">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/>
                    </svg>
                  </button>
                  <button aria-label="Список">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="8" y1="6" x2="21" y2="6"/>
                      <line x1="8" y1="12" x2="21" y2="12"/>
                      <line x1="8" y1="18" x2="21" y2="18"/>
                      <circle cx="4" cy="6" r="1"/>
                      <circle cx="4" cy="12" r="1"/>
                      <circle cx="4" cy="18" r="1"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Сетка товаров -->
            <div class="products">

              <article class="product">
                <div class="product__media">
                  <span class="product__label">-20%</span>
                  <button class="product__fav" aria-label="В избранное">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                    </svg>
                  </button>
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" alt="Кроссовки">
                </div>
                <div class="product__body">
                  <span class="product__category">Кроссовки</span>
                  <h3 class="product__title">Nike Air Zoom Pegasus 40</h3>
                  <div class="product__rating">
                    <span class="stars">★★★★★</span>
                    <span>4.9 · 214</span>
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
                  <h3 class="product__title">Adidas Ultraboost Light</h3>
                  <div class="product__rating">
                    <span class="stars">★★★★☆</span>
                    <span>4.7 · 132</span>
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

              <article class="product">
                <div class="product__media">
                  <button class="product__fav" aria-label="В избранное">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                    </svg>
                  </button>
                  <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80" alt="Кроссовки">
                </div>
                <div class="product__body">
                  <span class="product__category">Кроссовки</span>
                  <h3 class="product__title">Puma RS-X Reinvention</h3>
                  <div class="product__rating">
                    <span class="stars">★★★★☆</span>
                    <span>4.5 · 88</span>
                  </div>
                  <div class="product__footer">
                    <div class="product__price">
                      <span class="price-current">8 990 ₽</span>
                      <span class="price-old">10 490 ₽</span>
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
                  <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80" alt="Ботинки">
                </div>
                <div class="product__body">
                  <span class="product__category">Ботинки</span>
                  <h3 class="product__title">Timberland Premium 6-Inch Boot</h3>
                  <div class="product__rating">
                    <span class="stars">★★★★★</span>
                    <span>4.8 · 176</span>
                  </div>
                  <div class="product__footer">
                    <div class="product__price">
                      <span class="price-current">16 990 ₽</span>
                      <span class="price-old">19 990 ₽</span>
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
                  <img src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&q=80" alt="Кеды">
                </div>
                <div class="product__body">
                  <span class="product__category">Кеды</span>
                  <h3 class="product__title">Converse Chuck Taylor All Star</h3>
                  <div class="product__rating">
                    <span class="stars">★★★★★</span>
                    <span>4.9 · 302</span>
                  </div>
                  <div class="product__footer">
                    <div class="product__price">
                      <span class="price-current">5 490 ₽</span>
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
                  <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80" alt="Кроссовки">
                </div>
                <div class="product__body">
                  <span class="product__category">Кроссовки</span>
                  <h3 class="product__title">New Balance 574 Classic</h3>
                  <div class="product__rating">
                    <span class="stars">★★★★☆</span>
                    <span>4.6 · 94</span>
                  </div>
                  <div class="product__footer">
                    <div class="product__price">
                      <span class="price-current">11 990 ₽</span>
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
                  <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" alt="Кроссовки">
                </div>
                <div class="product__body">
                  <span class="product__category">Кроссовки</span>
                  <h3 class="product__title">Reebok Classic Leather</h3>
                  <div class="product__rating">
                    <span class="stars">★★★★☆</span>
                    <span>4.4 · 62</span>
                  </div>
                  <div class="product__footer">
                    <div class="product__price">
                      <span class="price-current">7 490 ₽</span>
                      <span class="price-old">8 990 ₽</span>
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
                  <h3 class="product__title">Asics Gel-Kayano 30</h3>
                  <div class="product__rating">
                    <span class="stars">★★★★★</span>
                    <span>4.8 · 118</span>
                  </div>
                  <div class="product__footer">
                    <div class="product__price">
                      <span class="price-current">13 990 ₽</span>
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
                  <span class="product__label">-25%</span>
                  <button class="product__fav" aria-label="В избранное">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                    </svg>
                  </button>
                  <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80" alt="Кроссовки">
                </div>
                <div class="product__body">
                  <span class="product__category">Кроссовки</span>
                  <h3 class="product__title">Vans Old Skool Black</h3>
                  <div class="product__rating">
                    <span class="stars">★★★★★</span>
                    <span>4.7 · 208</span>
                  </div>
                  <div class="product__footer">
                    <div class="product__price">
                      <span class="price-current">4 490 ₽</span>
                      <span class="price-old">5 990 ₽</span>
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

            <!-- Пагинация -->
            <nav class="pagination" aria-label="Пагинация">
              <a href="#" class="pagination__link pagination__link--disabled" aria-label="Назад">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </a>

              <a href="#" class="pagination__link pagination__link--active">1</a>
              <a href="#" class="pagination__link">2</a>
              <a href="#" class="pagination__link">3</a>
              <a href="#" class="pagination__link">4</a>
              <span class="pagination__dots">…</span>
              <a href="#" class="pagination__link">14</a>

              <a href="#" class="pagination__link" aria-label="Вперёд">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>
            </nav>
          </div>

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

input,
select {
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

/* ---------- Хлебные крошки + заголовок страницы ---------- */
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

.breadcrumbs span.sep {
  color: #cbd5e1;
}

.breadcrumbs span.current {
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

/* ---------- Быстрые категории (чипы) ---------- */
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: #fff;
  color: var(--color-muted);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.chip:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.chip--active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.chip__count {
  color: #94a3b8;
  font-size: 13px;
}

.chip--active .chip__count {
  color: rgba(255, 255, 255, 0.7);
}

/* ---------- Основной лейаут: сайдбар + сетка ---------- */
.catalog {
  padding: 40px 0 72px;
}

.catalog__layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 32px;
  align-items: flex-start;
}

/* ---------- Фильтры ---------- */
.filters {
  position: sticky;
  top: 92px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.filters__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -4px;
}

.filters__title {
  font-size: 16px;
  font-weight: 700;
}

.filters__reset {
  font-size: 13px;
  color: var(--color-primary);
}

.filters__reset:hover {
  text-decoration: underline;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}

.filter-group:first-of-type {
  padding-top: 0;
  border-top: none;
}

.filter-group__title {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-text);
}

/* checkbox */
.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--color-text);
  cursor: pointer;
  user-select: none;
}

.checkbox input {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1.5px solid #cbd5e1;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  transition: all 0.15s ease;
}

.checkbox input:hover {
  border-color: var(--color-primary);
}

.checkbox input:checked {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.checkbox input:checked::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox__count {
  margin-left: auto;
  color: var(--color-muted);
  font-size: 13px;
}

/* Ползунок цены (два input range) */
.price-range {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.price-range__values {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
}

.price-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.price-range__dash {
  color: var(--color-muted);
}

/* Цвета */
.color-swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.swatch {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease;
}

.swatch:hover {
  transform: scale(1.1);
}

.swatch--active {
  border-color: var(--color-primary);
}

/* Кнопка "Применить" */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 22px;
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
}

.btn--block {
  width: 100%;
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

/* ---------- Панель над сеткой (сортировка) ---------- */
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.toolbar__count {
  color: var(--color-muted);
  font-size: 14px;
}

.toolbar__count b {
  color: var(--color-text);
  font-weight: 600;
}

.toolbar__right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.select-wrap {
  position: relative;
}

.select-wrap select {
  appearance: none;
  padding: 10px 38px 10px 14px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
}

.select-wrap::after {
  content: "";
  position: absolute;
  right: 14px;
  top: 50%;
  width: 8px;
  height: 8px;
  border-right: 2px solid var(--color-muted);
  border-bottom: 2px solid var(--color-muted);
  transform: translateY(-70%) rotate(45deg);
  pointer-events: none;
}

.view-toggle {
  display: inline-flex;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}

.view-toggle button {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  transition: all 0.15s ease;
}

.view-toggle button + button {
  border-left: 1px solid var(--color-border);
}

.view-toggle button:hover {
  color: var(--color-text);
}

.view-toggle button.active {
  background: var(--color-primary);
  color: #fff;
}

.view-toggle svg {
  width: 16px;
  height: 16px;
}

/* ---------- Сетка товаров ---------- */
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

/* ---------- Пустое состояние ---------- */
.empty {
  grid-column: 1 / -1;
  padding: 64px 24px;
  text-align: center;
  background: var(--color-surface);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius);
}

.empty__icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 16px;
  color: #cbd5e1;
}

.empty h3 {
  font-size: 18px;
  margin-bottom: 6px;
}

.empty p {
  color: var(--color-muted);
  font-size: 14px;
}

/* ---------- Пагинация ---------- */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 48px;
  flex-wrap: wrap;
}

.pagination__link {
  min-width: 42px;
  height: 42px;
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: #fff;
  color: var(--color-text);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.15s ease;
}

.pagination__link:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.pagination__link--active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.pagination__link--active:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  color: #fff;
}

.pagination__link--disabled {
  opacity: 0.4;
  pointer-events: none;
}

.pagination__link svg {
  width: 16px;
  height: 16px;
}

.pagination__dots {
  color: var(--color-muted);
  padding: 0 4px;
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

/* ---------- Кнопка "Фильтры" для мобилки ---------- */
.filters-toggle {
  display: none;
}

/* ---------- Адаптив ---------- */
@media (max-width: 992px) {
  .catalog__layout {
    grid-template-columns: 1fr;
  }

  .filters {
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

  .page-head {
    padding: 24px 0 32px;
  }

  .catalog {
    padding: 28px 0 56px;
  }

  .filters-toggle {
    display: inline-flex;
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
}
</style>
