<script setup>
import { ref } from 'vue';
const isLogin= ref(true)
const setActive=(param)=> {
    isLogin.value = param
}
</script>
<template>
  <div class="auth-container">
    <div class="auth-header">
      <h1>Добро пожаловать 👋</h1>
      <p>Войдите или создайте аккаунт</p>
    </div>

    <div class="tabs">
      <button class="tab" 
      :class="isLogin?'active':''"
      @click="setActive(true)"
      data-tab="login">Вход</button>
      <button class="tab" 
      :class="!isLogin?'active':''"
      @click="setActive(false)"
      data-tab="register">Регистрация</button>
      <div class="tab-indicator" id="indicator"></div>

    </div>

    <div class="auth-body">

      <!-- Форма входа -->
      <form class="form active" id="login-form" novalidate>
        <div class="form-group">
          <label for="login-email">Email</label>
          <input type="email" id="login-email" placeholder="you@example.com" required>
          <span class="error-text">Введите корректный email</span>
        </div>

        <div class="form-group">
          <label for="login-password">Пароль</label>
          <input type="password" id="login-password" placeholder="••••••••" required>
          <span class="error-text">Введите пароль</span>
        </div>

        <div class="form-options">
          <label class="checkbox-label">
            <input type="checkbox" id="remember">
            <span>Запомнить меня</span>
          </label>
          <a href="#" class="link">Забыли пароль?</a>
        </div>

        <button type="submit" class="btn-primary">Войти</button>

        <div class="divider"><span>или войдите через</span></div>

        <div class="social-buttons">
          <a href="/auth/google" class="btn-social btn-google">
            <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Google
          </a>
          <a href="/auth/vk" class="btn-social btn-vk">
            <svg viewBox="0 0 24 24" fill="#0077ff"><path d="M13.16 17.1c-5.4 0-8.7-3.75-8.83-9.98h2.7c.09 4.58 2.19 6.52 3.83 6.92V7.12h2.55v4.05c1.61-.17 3.3-2 3.87-4.05h2.54c-.44 2.53-2.27 4.36-3.57 5.12 1.3.62 3.4 2.22 4.2 4.86h-2.8c-.62-1.93-2.16-3.42-4.24-3.62v3.62h-.25z"/></svg>
            VK
          </a>
          <a href="/auth/github" class="btn-social btn-github">
            <svg viewBox="0 0 24 24" fill="#333"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7 0-.7 0-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 0-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
            GitHub
          </a>
          <a href="/auth/telegram" class="btn-social btn-telegram">
            <svg viewBox="0 0 24 24" fill="#229ed9"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
            Telegram
          </a>
        </div>
      </form>

      <!-- Форма регистрации -->
      <form class="form" id="register-form" novalidate>
        <div class="form-group">
          <label for="reg-name">Имя</label>
          <input type="text" id="reg-name" placeholder="Иван Иванов" required>
          <span class="error-text">Введите имя</span>
        </div>

        <div class="form-group">
          <label for="reg-email">Email</label>
          <input type="email" id="reg-email" placeholder="you@example.com" required>
          <span class="error-text">Введите корректный email</span>
        </div>

        <div class="form-group">
          <label for="reg-password">Пароль</label>
          <input type="password" id="reg-password" placeholder="Минимум 8 символов" required>
          <span class="error-text">Пароль должен содержать минимум 8 символов</span>
        </div>

        <div class="form-group">
          <label for="reg-confirm">Подтвердите пароль</label>
          <input type="password" id="reg-confirm" placeholder="Повторите пароль" required>
          <span class="error-text">Пароли не совпадают</span>
        </div>

        <div class="form-options">
          <label class="checkbox-label">
            <input type="checkbox" id="terms" required>
            <span>Я согласен с <a href="#" class="link">условиями</a></span>
          </label>
        </div>

        <button type="submit" class="btn-primary">Создать аккаунт</button>

        <div class="divider"><span>или зарегистрируйтесь через</span></div>

        <div class="social-buttons">
          <a href="/auth/google" class="btn-social btn-google">
            <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Google
          </a>
          <a href="/auth/vk" class="btn-social btn-vk">
            <svg viewBox="0 0 24 24" fill="#0077ff"><path d="M13.16 17.1c-5.4 0-8.7-3.75-8.83-9.98h2.7c.09 4.58 2.19 6.52 3.83 6.92V7.12h2.55v4.05c1.61-.17 3.3-2 3.87-4.05h2.54c-.44 2.53-2.27 4.36-3.57 5.12 1.3.62 3.4 2.22 4.2 4.86h-2.8c-.62-1.93-2.16-3.42-4.24-3.62v3.62h-.25z"/></svg>
            VK
          </a>
          <a href="/auth/github" class="btn-social btn-github">
            <svg viewBox="0 0 24 24" fill="#333"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7 0-.7 0-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 0-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
            GitHub
          </a>
          <a href="/auth/telegram" class="btn-social btn-telegram">
            <svg viewBox="0 0 24 24" fill="#229ed9"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
            Telegram
          </a>
        </div>
      </form>

    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Roboto, -apple-system, sans-serif;
}

.auth-container {
  width: 100%;
  height: 720px;
  max-width: 440px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.auth-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 32px 30px 24px;
  text-align: center;
  color: #fff;
}

.auth-header h1 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 6px;
}

.auth-header p {
  font-size: 14px;
  opacity: 0.9;
}

.tabs {
  display: flex;
  background: #f5f6fa;
  position: relative;
}

.tab {
  flex: 1;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  color: #888;
  transition: color 0.3s;
  border: none;
  background: transparent;
  position: relative;
  z-index: 1;
}

.tab.active {
  color: #667eea;
}

.tab-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 3px;
  background: #667eea;
  transition: transform 0.3s ease;
  border-radius: 3px 3px 0 0;
}

.tab-indicator.right {
  transform: translateX(100%);
}

.auth-body {
  padding: 30px;
}

.form {
  display: none;
  animation: slideIn 0.3s ease;
}

.form.active {
  display: block;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

.form-group {
  margin-bottom: 18px;
  position: relative;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #444;
  margin-bottom: 6px;
}

.form-group input {
  width: 100%;
  padding: 13px 15px;
  border: 2px solid #e8eaf0;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s;
  outline: none;
  background: #fafbfc;
}

.form-group input:focus {
  border-color: #667eea;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
}

.form-group input.error {
  border-color: #e74c3c;
  background: #fef5f5;
}

.error-text {
  display: none;
  font-size: 12px;
  color: #e74c3c;
  margin-top: 4px;
}

.error-text.show {
  display: block;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 13px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: #666;
  user-select: none;
}

.checkbox-label input {
  width: 16px;
  height: 16px;
  accent-color: #667eea;
  cursor: pointer;
}

.link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.link:hover {
  color: #764ba2;
}

.btn-primary {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

.btn-primary:active {
  transform: translateY(0);
}

.divider {
  display: flex;
  align-items: center;
  margin: 24px 0;
  color: #aaa;
  font-size: 13px;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #e8eaf0;
}

.divider span {
  padding: 0 15px;
}

.social-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.btn-social {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 2px solid #e8eaf0;
  background: #fff;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #444;
  cursor: pointer;
  transition: all 0.25s;
  text-decoration: none;
}

.btn-social:hover {
  border-color: #d0d5e0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.btn-social svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.btn-google:hover { border-color: #db4437; color: #db4437; }
.btn-vk:hover { border-color: #0077ff; color: #0077ff; }
.btn-github:hover { border-color: #333; color: #333; }
.btn-telegram:hover { border-color: #229ed9; color: #229ed9; }

@media (max-width: 480px) {
  .auth-body { padding: 24px 20px; }
  .auth-header { padding: 24px 20px 18px; }
  .social-buttons { grid-template-columns: 1fr; }
}
</style>
