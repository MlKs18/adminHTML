<script setup>

</script>

<template>
     <header class="topbar">
      <button class="burger" id="burger" aria-label="Меню">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>

      <h2 class="topbar__title">Дашборд</h2>

      <div class="search">
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <input type="text" placeholder="Поиск...">
      </div>

      <button class="icon-btn" aria-label="Уведомления">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
        <span class="icon-btn__dot"></span>
      </button>
    </header>
</template>

<style>
.topbar {
    background: var(--card-bg);
    border-bottom: 1px solid var(--border);
    padding: 0 24px;
    height: 64px;
    display: flex;
    align-items: center;
    gap: 16px;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .topbar__title {
    font-size: 18px;
    font-weight: 600;
  }
  .search {
    margin-left: auto;
    position: relative;
  }

  .search input {
    width: 260px;
    padding: 8px 12px 8px 36px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
    font-size: 14px;
    outline: none;
    transition: border-color .15s, background .15s;
  }

  .search input:focus {
    border-color: var(--primary);
    background: #fff;
  }

  .search svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    color: var(--text-muted);
  }

  .icon-btn {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    position: relative;
    transition: background .15s, color .15s;
  }

  .icon-btn:hover { background: var(--bg); color: var(--text); }

  .icon-btn__dot {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--danger);
    border: 2px solid #fff;
  }
</style>