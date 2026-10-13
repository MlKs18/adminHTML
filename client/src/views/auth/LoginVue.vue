<script setup>

</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a href="#" class="logo">Shop<span>.</span>Ru</a>

      <nav class="nav">
        <a href="#" class="nav__link">Главная</a>
        <a href="#" class="nav__link">Категории</a>
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

  <!-- ============ Вход ============ -->
  <section class="auth">
    <div class="container">
      <div class="auth__layout">

        <!-- ---------- Левая часть: промо ---------- -->
        <div class="promo">
          <span class="promo__tag">С возвращением</span>

          <h1 class="promo__title">
            Войдите, чтобы <span>продолжить покупки</span>
          </h1>

          <p class="promo__text">
            В личном кабинете вас ждут сохранённые товары,
            история заказов, бонусный счёт и персональные скидки.
          </p>

          <div class="perks-list">
            <div class="perk">
              <div class="perk__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="perk__body">
                <span class="perk__title">Отслеживание доставки</span>
                <span class="perk__text">Смотрите статус заказа в реальном времени</span>
              </div>
            </div>

            <div class="perk">
              <div class="perk__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z"/>
                </svg>
              </div>
              <div class="perk__body">
                <span class="perk__title">Бонусный счёт</span>
                <span class="perk__text">Копите баллы и платите ими до 30% от заказа</span>
              </div>
            </div>

            <div class="perk">
              <div class="perk__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div class="perk__body">
                <span class="perk__title">Избранное синхронизируется</span>
                <span class="perk__text">Товары из «списка желаний» всегда под рукой</span>
              </div>
            </div>

            <div class="perk">
              <div class="perk__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
              </div>
              <div class="perk__body">
                <span class="perk__title">Персональные скидки</span>
                <span class="perk__text">Специальные предложения только для вас</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ---------- Правая часть: форма ---------- -->
        <div class="auth-card">
          <h2 class="auth-card__title">Вход в аккаунт</h2>
          <p class="auth-card__subtitle">
            Нет аккаунта?
            <a href="#">Зарегистрироваться</a>
          </p>

          <!-- Соцсети -->
          <div class="socials">
            <button type="button" class="social-btn social-btn--google" aria-label="Войти через Google">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span class="social-btn__label">Google</span>
            </button>

            <button type="button" class="social-btn social-btn--yandex" aria-label="Войти через Яндекс">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="#FC3F1D"/>
                <path fill="#fff" d="M13.32 8.28h-1.05c-1.37 0-2.1.69-2.1 1.73 0 1.16.55 1.78 1.44 2.28l-1.7 3.87h-1.3l1.9-4.19c-1.12-.62-1.83-1.48-1.83-2.9 0-1.83 1.27-2.98 3.35-2.98h2.6v9.9h-1.3V8.28z"/>
              </svg>
              <span class="social-btn__label">Яндекс</span>
            </button>

            <button type="button" class="social-btn social-btn--vk" aria-label="Войти через ВКонтакте">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="#0077FF"/>
                <path fill="#fff" d="M12.7 16.3c-5.3 0-8.4-3.7-8.5-9.7h2.7c.1 4.5 2.1 6.4 3.6 6.7V6.6h2.5v3.7c1.5-.2 3.1-1.9 3.6-3.7h2.5c-.4 2.3-2.1 4-3.3 4.7 1.2.5 3.1 2.1 3.8 4.9h-2.7c-.5-1.6-1.9-2.9-3.8-3.2v3.2h-.4z"/>
              </svg>
              <span class="social-btn__label">ВКонтакте</span>
            </button>
          </div>

          <!-- Разделитель -->
          <div class="divider">
            <span>или войдите по email</span>
          </div>

          <!-- Форма -->
          <form onsubmit="return false;">

            <div class="form-field">
              <label class="form-field__label" for="login-email">Email</label>
              <input class="form-field__input" type="email" id="login-email"
                     placeholder="you@example.com" autocomplete="email" required autofocus>
            </div>

            <div class="form-field">
              <label class="form-field__label" for="login-password">Пароль</label>
              <div class="form-field__wrap">
                <input class="form-field__input form-field__input--with-toggle"
                       type="password" id="login-password"
                       placeholder="Введите пароль"
                       autocomplete="current-password" required>
                <button type="button" class="password-toggle" aria-label="Показать пароль">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Запомнить + забыли пароль -->
            <div class="form-extras">
              <label class="form-check">
                <input type="checkbox">
                <span>Запомнить меня</span>
              </label>
              <a href="#" class="form-link">Забыли пароль?</a>
            </div>

            <button type="submit" class="btn btn--primary btn--block">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
              Войти
            </button>

          </form>

          <div class="auth-card__footer">
            Нет аккаунта? <a href="#">Зарегистрироваться</a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ============ ФУТЕР (мини) ============ -->
  <footer class="footer">
    <div class="container">
      <div class="footer__bottom">
        <span>© 2025 Shop.Ru — Все права защищены</span>
        <div class="footer__bottom-links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Пользовательское соглашение</a>
          <a href="#">Помощь</a>
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
  min-height: 100vh;
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

/* ---------- Основной лейаут ---------- */
.auth {
  padding: 56px 0 72px;
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
}

.auth__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 480px);
  gap: 64px;
  align-items: center;
  width: 100%;
}

/* ---------- Левая часть — промо-блок ---------- */
.promo {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.promo__tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.1);
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 600;
}

.promo__tag::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary);
}

.promo__title {
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.promo__title span {
  color: var(--color-primary);
}

.promo__text {
  font-size: 16px;
  color: var(--color-muted);
  line-height: 1.6;
  max-width: 520px;
}

.perks-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
}

.perk {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.perk__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(37, 99, 235, 0.1);
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.perk__icon svg {
  width: 20px;
  height: 20px;
}

.perk__body {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.perk__title {
  font-size: 15px;
  font-weight: 600;
}

.perk__text {
  font-size: 13px;
  color: var(--color-muted);
  line-height: 1.5;
}

/* ---------- Правая часть — форма ---------- */
.auth-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 40px;
  box-shadow: var(--shadow);
}

.auth-card__title {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 8px;
}

.auth-card__subtitle {
  font-size: 14px;
  color: var(--color-muted);
  margin-bottom: 28px;
}

.auth-card__subtitle a {
  color: var(--color-primary);
  font-weight: 600;
}

.auth-card__subtitle a:hover {
  text-decoration: underline;
}

/* ---------- Соцсети ---------- */
.socials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 24px;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 12px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: #fff;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  transition: all 0.15s ease;
}

.social-btn:hover {
  border-color: #cbd5e1;
  background: #f8fafc;
  transform: translateY(-1px);
}

.social-btn:active {
  transform: translateY(0);
}

.social-btn svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.social-btn--google:hover {
  border-color: #4285f4;
}

.social-btn--yandex:hover {
  border-color: #fc3f1d;
}

.social-btn--vk:hover {
  border-color: #0077ff;
}

.social-btn__label {
  display: none;
}

/* ---------- Разделитель ---------- */
.divider {
  position: relative;
  text-align: center;
  margin: 24px 0;
}

.divider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-border);
}

.divider span {
  position: relative;
  display: inline-block;
  padding: 0 16px;
  background: var(--color-surface);
  font-size: 13px;
  color: var(--color-muted);
}

/* ---------- Форма ---------- */
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

.form-field__wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.form-field__input {
  width: 100%;
  padding: 13px 16px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: #fff;
  font-size: 15px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.form-field__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.form-field__input::placeholder {
  color: #9ca3af;
}

.form-field__input--with-toggle {
  padding-right: 48px;
}

.password-toggle {
  position: absolute;
  right: 8px;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  transition: background 0.15s ease, color 0.15s ease;
}

.password-toggle:hover {
  background: #f1f3f5;
  color: var(--color-text);
}

.password-toggle svg {
  width: 18px;
  height: 18px;
}

/* Строка "запомнить / забыли пароль" */
.form-extras {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 22px;
}

.form-check {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--color-text);
  cursor: pointer;
  line-height: 1.5;
  user-select: none;
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

.form-link {
  font-size: 13px;
  color: var(--color-primary);
  font-weight: 500;
}

.form-link:hover {
  text-decoration: underline;
}

/* Кнопка отправки */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 24px;
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
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
}

.btn--primary:active {
  transform: translateY(0);
}

.btn--block {
  width: 100%;
}

.btn svg {
  width: 18px;
  height: 18px;
}

/* Переход на регистрацию */
.auth-card__footer {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 14px;
  color: var(--color-muted);
}

.auth-card__footer a {
  color: var(--color-primary);
  font-weight: 600;
}

.auth-card__footer a:hover {
  text-decoration: underline;
}

/* ---------- ФУТЕР (мини) ---------- */
.footer {
  background: #0f172a;
  color: rgba(255, 255, 255, 0.7);
  padding: 40px 0 24px;
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 13px;
}

.footer__bottom-links {
  display: flex;
  gap: 20px;
}

.footer__bottom-links a:hover {
  color: #fff;
}

/* ---------- Адаптив ---------- */
@media (max-width: 992px) {
  .auth__layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .auth {
    padding: 40px 0 56px;
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .burger {
    display: flex;
  }

  .auth-card {
    padding: 28px 24px;
  }
}

@media (max-width: 480px) {
  .header__inner {
    height: 64px;
  }

  .logo {
    font-size: 19px;
  }

  .auth-card {
    padding: 24px 20px;
    border-radius: 12px;
  }

  .auth-card__title {
    font-size: 22px;
  }

  .socials {
    grid-template-columns: 1fr;
  }

  .social-btn {
    justify-content: flex-start;
    padding: 12px 16px;
  }

  .social-btn__label {
    display: inline;
  }

  .form-extras {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .footer__bottom {
    justify-content: center;
    text-align: center;
  }
}
</style>
