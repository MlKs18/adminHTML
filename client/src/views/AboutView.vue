<template>
 

  <!-- ============ Хлебные крошки ============ -->
  <div class="crumbs-wrap">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Хлебные крошки">
        <a href="#">Главная</a>
        <span class="sep">/</span>
        <span class="current">О нас</span>
      </nav>
    </div>
  </div>

  <!-- ============ HERO ============ -->
  <section class="hero">
    <img class="hero__bg"
         src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
         alt="Команда Shop.Ru">
    <div class="hero__overlay"></div>

    <div class="container hero__inner">
      <div class="hero__content">
        <span class="hero__tag">О компании</span>
        <h1 class="hero__title">Мы делаем покупки удобными с 2015 года</h1>
        <p class="hero__text">
          Shop.Ru — это команда из 120 человек, которая каждый день
          помогает тысячам покупателей находить нужные товары
          по честным ценам с быстрой доставкой.
        </p>
      </div>
    </div>
  </section>

  <!-- ============ О компании ============ -->
  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="about-grid__text">
          <h2 class="section__title">Кто мы такие</h2>
          <p>
            Мы начинали как небольшой интернет-магазин обуви
            в Москве. Сегодня Shop.Ru — это более 1 200 товаров
            в 8 категориях, собственный склад на 4 000 м²
            и служба доставки, работающая во всех регионах страны.
          </p>
          <p>
            Наш принцип прост: продавать только то, чем пользуемся
            сами. Каждый товар проходит проверку качества до того,
            как попадёт на витрину. Если товар нам не нравится —
            мы его не продаём, даже если он популярен.
          </p>
          <p>
            Мы верим, что покупки должны быть простыми, честными
            и приятными. Поэтому у нас:
            <b>бесплатный возврат 30 дней</b>,
            <b>реальные фото товаров</b>,
            <b>отзывы без модерации</b>
            и поддержка, которая отвечает за 3 минуты.
          </p>
        </div>

        <div class="about-grid__media">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
               alt="Склад Shop.Ru">
        </div>
      </div>

      <!-- Цифры -->
      <div class="stats">
        <div class="stat">
          <div class="stat__value">10 лет</div>
          <div class="stat__label">на рынке</div>
        </div>
        <div class="stat">
          <div class="stat__value">1 200+</div>
          <div class="stat__label">товаров в каталоге</div>
        </div>
        <div class="stat">
          <div class="stat__value">340 000</div>
          <div class="stat__label">довольных покупателей</div>
        </div>
        <div class="stat">
          <div class="stat__value">4.9</div>
          <div class="stat__label">средний рейтинг</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ Ценности ============ -->
  <section class="section section--tight" style="background: var(--color-surface);">
    <div class="container">
      <div class="section__head section__head--center">
        <div>
          <h2 class="section__title">Наши принципы</h2>
          <p class="section__subtitle">
            Три вещи, на которых держится всё, что мы делаем
          </p>
        </div>
      </div>

      <div class="values">
        <div class="value">
          <div class="value__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 class="value__title">Только проверенное</h3>
          <p class="value__text">
            Каждый товар проходит многоступенчатую проверку.
            Мы возвращаем производителю партии, если находим
            хоть один брак в выборке.
          </p>
        </div>

        <div class="value">
          <div class="value__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h3 class="value__title">Скорость важна</h3>
          <p class="value__text">
            Собираем заказ за 20 минут. Курьер приезжает
            в течение 2 часов по Москве и на следующий день
            по большинству регионов.
          </p>
        </div>

        <div class="value">
          <div class="value__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <h3 class="value__title">Забота о клиенте</h3>
          <p class="value__text">
            Поддержка отвечает в чате за 3 минуты. Если что-то
            пошло не так — решаем проблему, а не перекладываем
            на покупателя.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ Контакты ============ -->
  <section class="section">
    <div class="container">
      <div class="section__head">
        <div>
          <h2 class="section__title">Контакты</h2>
          <p class="section__subtitle">
            Свяжитесь с нами любым удобным способом — мы на связи
            с 9:00 до 21:00 по Москве
          </p>
        </div>
      </div>

      <div class="contacts-layout">

        <!-- Список контактов -->
        <div class="contacts-list">

          <div class="contact-card">
            <div class="contact-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="contact-card__body">
              <span class="contact-card__label">Телефон</span>
              <span class="contact-card__value">
                            <a href="tel:+78001234567">8 (800) 123-45-67</a>
                        </span>
              <span class="contact-card__note">
                            Бесплатно по России, ежедневно 9:00–21:00 МСК
                        </span>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div class="contact-card__body">
              <span class="contact-card__label">E-mail</span>
              <span class="contact-card__value">
                            <a href="mailto:hello@shop.ru">hello@shop.ru</a>
                        </span>
              <span class="contact-card__note">
                            Отвечаем в течение 1 рабочего дня
                        </span>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="contact-card__body">
              <span class="contact-card__label">Офис и склад</span>
              <span class="contact-card__value">
                            Москва, ул. Промышленная, 12, стр. 3
                        </span>
              <span class="contact-card__note">
                            Пн–Сб, 10:00–19:00 · Самовывоз по предзаказу
                        </span>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <div class="contact-card__body">
              <span class="contact-card__label">Чат поддержки</span>
              <span class="contact-card__value">
                            <a href="#">Открыть чат в Telegram</a>
                        </span>
              <span class="contact-card__note">
                            Средний ответ — 3 минуты
                        </span>
            </div>
          </div>

        </div>

        <!-- Форма -->
        <form class="contact-form" onsubmit="return false;">
          <h3 class="contact-form__title">Напишите нам</h3>
          <p class="contact-form__subtitle">
            Задайте вопрос — вернёмся с ответом в течение дня
          </p>

          <div class="form-row">
            <div class="form-field">
              <label class="form-field__label" for="contact-name">Ваше имя</label>
              <input class="form-field__input" type="text" id="contact-name"
                     placeholder="Как к вам обращаться">
            </div>
            <div class="form-field">
              <label class="form-field__label" for="contact-email">Email</label>
              <input class="form-field__input" type="email" id="contact-email"
                     placeholder="you@example.com">
            </div>
          </div>

          <div class="form-field">
            <label class="form-field__label" for="contact-subject">Тема</label>
            <input class="form-field__input" type="text" id="contact-subject"
                   placeholder="Например: вопрос по заказу №12345">
          </div>

          <div class="form-field">
            <label class="form-field__label" for="contact-message">Сообщение</label>
            <textarea class="form-field__textarea" id="contact-message"
                      placeholder="Опишите вопрос подробнее..."></textarea>
          </div>

          <label class="form-check">
            <input type="checkbox">
            <span>
                        Согласен с
                        <a href="#">политикой конфиденциальности</a>
                        и обработкой персональных данных
                    </span>
          </label>

          <button type="submit" class="btn btn--primary btn--block">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Отправить сообщение
          </button>
        </form>

      </div>
    </div>
  </section>

  <!-- ============ Карта ============ -->
  <section class="map-section">
    <div class="container">
      <div class="section__head">
        <div>
          <h2 class="section__title">Как нас найти</h2>
          <p class="section__subtitle">
            Офис, склад и пункт самовывоза — в одном месте
          </p>
        </div>
        <a href="#" class="btn btn--outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Открыть в Яндекс.Картах
        </a>
      </div>

      <div class="map-wrap">
        <!-- Яндекс Карта: Москва, ул. Промышленная, 12 (пример координат) -->
        <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755800&z=15&pt=37.617700,55.755800,pm2rdm"
            loading="lazy"
            allowfullscreen
            title="Карта — офис Shop.Ru">
        </iframe>

        <div class="map-overlay">
          <h3 class="map-overlay__title">Офис Shop.Ru</h3>
          <p class="map-overlay__text">
            Москва, ул. Промышленная, 12, стр. 3<br>
            Вход со стороны внутреннего двора, парковка бесплатная
          </p>
          <a href="#" class="map-overlay__link">
            Проложить маршрут
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ Приглашение к работе ============ -->
  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="jobs-section">
        <div class="jobs-section__inner">
          <div>
            <span class="jobs-section__tag">Мы в поиске</span>
            <h2 class="jobs-section__title">
              Присоединяйтесь к нашей команде
            </h2>
            <p class="jobs-section__text">
              Мы растём каждую неделю и постоянно ищем людей,
              которым не всё равно. У нас нет бюрократии, есть
              возможность влиять на продукт с первого дня
              и атмосфера, в которой хочется работать.
            </p>
            <div class="jobs-section__actions">
              <a href="#" class="btn btn--white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                </svg>
                Все вакансии
              </a>
              <a href="#" class="btn btn--ghost">Отправить резюме</a>
            </div>
          </div>

          <div class="jobs-list">

            <a href="#" class="job-item">
              <div class="job-item__info">
                <span class="job-item__title">Frontend-разработчик (Vue)</span>
                <span class="job-item__meta">
                                <span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    Москва / удалённо
                                </span>
                                <span>от 200 000 ₽</span>
                            </span>
              </div>
              <span class="job-item__arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
            </a>

            <a href="#" class="job-item">
              <div class="job-item__info">
                <span class="job-item__title">Менеджер по закупкам</span>
                <span class="job-item__meta">
                                <span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    Москва, офис
                                </span>
                                <span>от 120 000 ₽</span>
                            </span>
              </div>
              <span class="job-item__arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
            </a>

            <a href="#" class="job-item">
              <div class="job-item__info">
                <span class="job-item__title">Специалист поддержки</span>
                <span class="job-item__meta">
                                <span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    Удалённо
                                </span>
                                <span>от 70 000 ₽</span>
                            </span>
              </div>
              <span class="job-item__arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
            </a>

            <a href="#" class="job-item">
              <div class="job-item__info">
                <span class="job-item__title">Курьер-водитель</span>
                <span class="job-item__meta">
                                <span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    Москва и МО
                                </span>
                                <span>от 90 000 ₽</span>
                            </span>
              </div>
              <span class="job-item__arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </span>
            </a>

          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ Команда ============ -->
  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="section__head section__head--center">
        <div>
          <h2 class="section__title">Кто стоит за Shop.Ru</h2>
          <p class="section__subtitle">
            Небольшая команда, которая делает большое дело
          </p>
        </div>
      </div>

      <div class="team">
        <div class="member">
          <div class="member__photo">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                 alt="Алексей Морозов">
          </div>
          <h3 class="member__name">Алексей Морозов</h3>
          <p class="member__role">Основатель и CEO</p>
        </div>

        <div class="member">
          <div class="member__photo">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                 alt="Мария Ковалёва">
          </div>
          <h3 class="member__name">Мария Ковалёва</h3>
          <p class="member__role">Директор по продукту</p>
        </div>

        <div class="member">
          <div class="member__photo">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
                 alt="Дмитрий Соколов">
          </div>
          <h3 class="member__name">Дмитрий Соколов</h3>
          <p class="member__role">Технический директор</p>
        </div>

        <div class="member">
          <div class="member__photo">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
                 alt="Екатерина Иванова">
          </div>
          <h3 class="member__name">Екатерина Иванова</h3>
          <p class="member__role">Руководитель поддержки</p>
        </div>
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

input,
textarea {
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

/* ---------- HERO страницы ---------- */
.hero {
  position: relative;
  overflow: hidden;
  background: #0f172a;
  color: #fff;
  border-radius: 0;
}

.hero__inner {
  position: relative;
  min-height: 380px;
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
  opacity: 0.45;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
      90deg,
      rgba(15, 23, 42, 0.9) 0%,
      rgba(15, 23, 42, 0.5) 60%,
      rgba(15, 23, 42, 0.2) 100%
  );
}

.hero__content {
  position: relative;
  max-width: 640px;
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
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
}

.hero__text {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
}

/* ---------- Секции ---------- */
.section {
  padding: 72px 0;
}

.section--tight {
  padding: 56px 0;
}

.section__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.section__head--center {
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section__title {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.section__subtitle {
  color: var(--color-muted);
  font-size: 15px;
  margin-top: 8px;
  max-width: 640px;
}

/* ---------- О компании ---------- */
.about-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 48px;
  align-items: center;
}

.about-grid__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-text);
}

.about-grid__text p {
  color: #374151;
}

.about-grid__media {
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius);
  overflow: hidden;
  background: #eef1f5;
  box-shadow: var(--shadow);
}

.about-grid__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ---------- Цифры ---------- */
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 48px;
}

.stat {
  padding: 28px 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  text-align: center;
}

.stat__value {
  font-size: clamp(26px, 3vw, 34px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-primary);
  line-height: 1.1;
  margin-bottom: 6px;
}

.stat__label {
  font-size: 14px;
  color: var(--color-muted);
}

/* ---------- Ценности ---------- */
.values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.value {
  padding: 32px 28px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.value:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.value__icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(37, 99, 235, 0.1);
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.value__icon svg {
  width: 24px;
  height: 24px;
}

.value__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}

.value__text {
  font-size: 14px;
  color: var(--color-muted);
  line-height: 1.6;
}

/* ---------- Контакты ---------- */
.contacts-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: flex-start;
}

.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  transition: border-color 0.2s ease;
}

.contact-card:hover {
  border-color: var(--color-primary);
}

.contact-card__icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(37, 99, 235, 0.1);
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.contact-card__icon svg {
  width: 20px;
  height: 20px;
}

.contact-card__body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.contact-card__label {
  font-size: 12px;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.contact-card__value {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.4;
}

.contact-card__value a:hover {
  color: var(--color-primary);
}

.contact-card__note {
  font-size: 13px;
  color: var(--color-muted);
  margin-top: 2px;
}

/* Форма обратной связи */
.contact-form {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 32px;
}

.contact-form__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 6px;
}

.contact-form__subtitle {
  font-size: 14px;
  color: var(--color-muted);
  margin-bottom: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.form-field__label {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text);
}

.form-field__input,
.form-field__textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: #fff;
  font-size: 14px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.form-field__textarea {
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
}

.form-field__input:focus,
.form-field__textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.form-check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: var(--color-muted);
  margin-bottom: 20px;
  cursor: pointer;
}

.form-check input {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1.5px solid #cbd5e1;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  margin-top: 1px;
  transition: all 0.15s ease;
}

.form-check input:hover {
  border-color: var(--color-primary);
}

.form-check input:checked {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.form-check input:checked::after {
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

.form-check a {
  color: var(--color-primary);
}

.form-check a:hover {
  text-decoration: underline;
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

.btn svg {
  width: 18px;
  height: 18px;
}

/* ---------- Карта ---------- */
.map-section {
  padding: 0 0 72px;
}

.map-wrap {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  background: #eef1f5;
  aspect-ratio: 16 / 7;
}

.map-wrap iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
  filter: grayscale(0.15) contrast(1.05);
}

.map-overlay {
  position: absolute;
  left: 32px;
  bottom: 32px;
  max-width: 340px;
  padding: 24px;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.map-overlay__title {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 6px;
}

.map-overlay__text {
  font-size: 13px;
  color: var(--color-muted);
  line-height: 1.55;
  margin-bottom: 14px;
}

.map-overlay__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  transition: gap 0.2s ease;
}

.map-overlay__link:hover {
  gap: 12px;
}

.map-overlay__link svg {
  width: 16px;
  height: 16px;
}

/* ---------- Приглашение к работе (Vacancies) ---------- */
.jobs-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  color: #fff;
  border-radius: var(--radius);
  padding: 64px 56px;
}

.jobs-section::before {
  content: "";
  position: absolute;
  width: 420px;
  height: 420px;
  right: -120px;
  top: -160px;
  background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 70%
  );
  border-radius: 50%;
}

.jobs-section::after {
  content: "";
  position: absolute;
  width: 280px;
  height: 280px;
  left: -100px;
  bottom: -140px;
  background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
  );
  border-radius: 50%;
}

.jobs-section__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: center;
}

.jobs-section__tag {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.jobs-section__title {
  font-size: clamp(24px, 3.5vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 16px;
}

.jobs-section__text {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.65;
  margin-bottom: 28px;
}

.jobs-section__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn--white {
  background: #fff;
  color: var(--color-primary);
}

.btn--white:hover {
  background: #f1f5ff;
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

/* Список вакансий внутри */
.jobs-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.job-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s ease, transform 0.2s ease;
}

.job-item:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateX(4px);
}

.job-item__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.job-item__title {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
}

.job-item__meta {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.job-item__meta span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.job-item__meta svg {
  width: 13px;
  height: 13px;
}

.job-item__arrow {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: background 0.2s ease;
}

.job-item:hover .job-item__arrow {
  background: rgba(255, 255, 255, 0.3);
}

.job-item__arrow svg {
  width: 14px;
  height: 14px;
}

/* ---------- Команда ---------- */
.team {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.member {
  text-align: center;
}

.member__photo {
  aspect-ratio: 1 / 1;
  border-radius: var(--radius);
  overflow: hidden;
  background: #eef1f5;
  margin-bottom: 16px;
}

.member__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.member:hover .member__photo img {
  transform: scale(1.05);
}

.member__name {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
}

.member__role {
  font-size: 13px;
  color: var(--color-muted);
}

/* ---------- ФУТЕР ---------- */


/* ---------- Адаптив ---------- */
@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .values {
    grid-template-columns: 1fr;
  }

  .contacts-layout {
    grid-template-columns: 1fr;
  }

  .jobs-section__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .jobs-section {
    padding: 48px 32px;
  }

  .team {
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

  .section {
    padding: 48px 0;
  }

  .hero__inner {
    min-height: 320px;
    padding: 48px 0;
  }

  .map-wrap {
    aspect-ratio: 4 / 3;
  }

  .map-overlay {
    position: static;
    max-width: none;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    border-top: 1px solid var(--color-border);
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .stats {
    grid-template-columns: 1fr;
  }

  .team {
    grid-template-columns: 1fr;
  }

  .logo {
    font-size: 19px;
  }

  .jobs-section {
    padding: 32px 24px;
  }

  .contact-form {
    padding: 24px 20px;
  }
}
</style>
