<script setup>
import { RouterLink, RouterView } from 'vue-router'
import  {PRIVATE_ROUTS_VALUE} from '@/enums'
</script>

<template>

    <aside class="sidebar" id="sidebar">
    <div class="sidebar__logo">
      <span class="sidebar__logo-dot"></span>
      Admin<span style="color:#3b82f6">Panel</span>
    </div>

    <nav class="sidebar__nav">
      <div class="sidebar__section">Главное</div>

      <a href="#" class="sidebar__link sidebar__link--active">
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>
        Дашборд
      </a>
      <a href="#" class="sidebar__link">
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3v18h18M7 14l4-4 3 3 5-6"/></svg>
        Аналитика
      </a>

      <div class="sidebar__section">Управление</div>
       <RouterLink :to="PRIVATE_ROUTS_VALUE.users" class="sidebar__link"> 
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
        Пользователи

      </RouterLink>
     
      <a href="#" class="sidebar__link">
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 7h-9M14 17H5M19 17a2 2 0 100-4 2 2 0 000 4zM7 7a2 2 0 100 4 2 2 0 000-4z"/></svg>
        Заказы
        <span class="sidebar__badge">12</span>
      </a>
      <a href="#" class="sidebar__link">
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 12V8H6a2 2 0 010-4h12v4M4 6v14a2 2 0 002 2h14v-4M18 12a2 2 0 000 4h4v-4z"/></svg>
        Продукты
      </a>

      <div class="sidebar__section">Система</div>

      <a href="#" class="sidebar__link">
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        Настройки
      </a>
    </nav>

    <div class="sidebar__footer">
      <div class="avatar">АИ</div>
      <div>
        <div class="sidebar__user-name">Алексей Иванов</div>
        <div class="sidebar__user-role">Администратор</div>
      </div>
    </div>
  </aside>



</template>

<style>
 .sidebar {
    background: var(--sidebar-bg);
    color: #cbd5e1;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
  }

  .sidebar__logo {
    padding: 20px 24px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sidebar__logo-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--primary);
  }

  .sidebar__nav {
    padding: 16px 12px;
    flex: 1;
  }

  .sidebar__section {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #64748b;
    padding: 16px 12px 8px;
    font-weight: 600;
  }

  .sidebar__link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    color: #cbd5e1;
    text-decoration: none;
    border-radius: 8px;
    font-size: 14px;
    transition: background .15s, color .15s;
    margin-bottom: 2px;
  }

  .sidebar__link:hover {
    background: var(--sidebar-hover);
    color: #fff;
  }

  .sidebar__link--active {
    background: var(--sidebar-active);
    color: #fff;
    font-weight: 500;
  }

  .sidebar__link svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  .sidebar__badge {
    margin-left: auto;
    background: var(--danger);
    color: #fff;
    font-size: 11px;
    padding: 2px 7px;
    border-radius: 10px;
    font-weight: 600;
  }

  .sidebar__footer {
    padding: 16px;
    border-top: 1px solid rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    flex-shrink: 0;
  }


  .sidebar__user-name { color: #fff; font-size: 13px; font-weight: 500; }
  .sidebar__user-role { color: #94a3b8; font-size: 12px; }


</style>