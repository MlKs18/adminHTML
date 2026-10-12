<script setup>

</script>

<template>
  <div class="main">

    <!-- Topbar -->
   <AdminTopbar/>

    <!-- Content -->
    <main class="content">

      <div class="page-header">
        <div>
          <h1>Обзор</h1>
          <p>Добро пожаловать, вот что происходит сегодня</p>
        </div>
        <button class="btn btn--primary">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          Добавить
        </button>
      </div>

      <!-- Stats -->
      <section class="stats">
        <div class="stat">
          <div class="stat__head">
            <span class="stat__label">Пользователи</span>
            <div class="stat__icon stat__icon--blue">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z"/></svg>
            </div>
          </div>
          <div class="stat__value">2 847</div>
          <div class="stat__delta stat__delta--up">↑ 12.5% за неделю</div>
        </div>

        <div class="stat">
          <div class="stat__head">
            <span class="stat__label">Заказы</span>
            <div class="stat__icon stat__icon--green">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>
            </div>
          </div>
          <div class="stat__value">1 429</div>
          <div class="stat__delta stat__delta--up">↑ 8.2% за неделю</div>
        </div>

        <div class="stat">
          <div class="stat__head">
            <span class="stat__label">Выручка</span>
            <div class="stat__icon stat__icon--orange">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            </div>
          </div>
          <div class="stat__value">₽ 384k</div>
          <div class="stat__delta stat__delta--up">↑ 4.1% за неделю</div>
        </div>

        <div class="stat">
          <div class="stat__head">
            <span class="stat__label">Отказы</span>
            <div class="stat__icon stat__icon--red">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
            </div>
          </div>
          <div class="stat__value">2.4%</div>
          <div class="stat__delta stat__delta--down">↓ 0.3% за неделю</div>
        </div>
      </section>

      <!-- Grid -->
      <div class="grid-2">

        <!-- Table -->
        <section class="card">
          <div class="card__head">
            <h3 class="card__title">Последние заказы</h3>
            <button class="btn btn--outline" style="padding:6px 12px;font-size:13px;">Все</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Клиент</th>
                <th>Заказ</th>
                <th>Статус</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="table-user">
                    <div class="avatar">МП</div>
                    <span>Мария Петрова</span>
                  </div>
                </td>
                <td>#10245</td>
                <td><span class="badge badge--green">Оплачен</span></td>
                <td>₽ 12 400</td>
              </tr>
              <tr>
                <td>
                  <div class="table-user">
                    <div class="avatar" style="background:linear-gradient(135deg,#f59e0b,#ef4444)">ИС</div>
                    <span>Иван Смирнов</span>
                  </div>
                </td>
                <td>#10244</td>
                <td><span class="badge badge--yellow">В обработке</span></td>
                <td>₽ 8 900</td>
              </tr>
              <tr>
                <td>
                  <div class="table-user">
                    <div class="avatar" style="background:linear-gradient(135deg,#10b981,#3b82f6)">АК</div>
                    <span>Анна Кузнецова</span>
                  </div>
                </td>
                <td>#10243</td>
                <td><span class="badge badge--blue">Отправлен</span></td>
                <td>₽ 5 200</td>
              </tr>
              <tr>
                <td>
                  <div class="table-user">
                    <div class="avatar" style="background:linear-gradient(135deg,#8b5cf6,#ec4899)">ДВ</div>
                    <span>Дмитрий Волков</span>
                  </div>
                </td>
                <td>#10242</td>
                <td><span class="badge badge--red">Отменён</span></td>
                <td>₽ 3 750</td>
              </tr>
            </tbody>
          </table>
        </section>

        <!-- Activity -->
        <section class="card">
          <div class="card__head">
            <h3 class="card__title">Активность</h3>
          </div>
          <div class="activity">
            <div class="activity__item">
              <span class="activity__dot" style="background:#10b981"></span>
              <div>
                <div class="activity__text">Новый пользователь зарегистрировался</div>
                <div class="activity__time">5 минут назад</div>
              </div>
            </div>
            <div class="activity__item">
              <span class="activity__dot" style="background:#3b82f6"></span>
              <div>
                <div class="activity__text">Заказ #10245 оплачен</div>
                <div class="activity__time">23 минуты назад</div>
              </div>
            </div>
            <div class="activity__item">
              <span class="activity__dot" style="background:#f59e0b"></span>
              <div>
                <div class="activity__text">Обновлён товар «Куртка зимняя»</div>
                <div class="activity__time">1 час назад</div>
              </div>
            </div>
            <div class="activity__item">
              <span class="activity__dot" style="background:#ef4444"></span>
              <div>
                <div class="activity__text">Отменён заказ #10242</div>
                <div class="activity__time">2 часа назад</div>
              </div>
            </div>
            <div class="activity__item">
              <span class="activity__dot" style="background:#8b5cf6"></span>
              <div>
                <div class="activity__text">Обновление системы завершено</div>
                <div class="activity__time">3 часа назад</div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </main>
  </div>
</template>

<style>

  /* ==== SIDEBAR ==== */
 

  
  

  /* ==== MAIN ==== */
  .main {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  /* ==== TOPBAR ==== */
  

  

  /* ==== CONTENT ==== */
  .content {
    padding: 24px;
    flex: 1;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .page-header h1 {
    font-size: 24px;
    font-weight: 700;
  }

  .page-header p { color: var(--text-muted); font-size: 14px; margin-top: 2px; }

  /* ==== BUTTONS ==== */
  .btn {
    padding: 9px 16px;
    border-radius: 8px;
    border: 1px solid transparent;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: opacity .15s, background .15s;
    font-family: inherit;
  }

  .btn--primary { background: var(--primary); color: #fff; }
  .btn--primary:hover { background: #2563eb; }
  .btn--outline { background: #fff; border-color: var(--border); color: var(--text); }
  .btn--outline:hover { background: var(--bg); }

  /* ==== STATS ==== */
  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .stat__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat__label { color: var(--text-muted); font-size: 13px; }

  .stat__icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .stat__icon--blue { background: #dbeafe; color: #2563eb; }
  .stat__icon--green { background: #d1fae5; color: #059669; }
  .stat__icon--orange { background: #fef3c7; color: #d97706; }
  .stat__icon--red { background: #fee2e2; color: #dc2626; }

  .stat__value { font-size: 26px; font-weight: 700; }
  .stat__delta { font-size: 12px; font-weight: 500; }
  .stat__delta--up { color: var(--success); }
  .stat__delta--down { color: var(--danger); }

  /* ==== CARDS / TABLE ==== */
  .card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
  }

  .card__head {
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card__title { font-size: 16px; font-weight: 600; }

  .grid-2 {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
  }

  @media (max-width: 1024px) { .grid-2 { grid-template-columns: 1fr; } }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }

  thead th {
    text-align: left;
    padding: 12px 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    background: #f8fafc;
    border-bottom: 1px solid var(--border);
  }

  tbody td {
    padding: 14px 20px;
    border-bottom: 1px solid var(--border);
  }

  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover { background: #f8fafc; }

  .badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }
  .badge--green { background: #d1fae5; color: #065f46; }
  .badge--yellow { background: #fef3c7; color: #92400e; }
  .badge--red { background: #fee2e2; color: #991b1b; }
  .badge--blue { background: #dbeafe; color: #1e40af; }

  .table-user {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .table-user .avatar { width: 32px; height: 32px; font-size: 12px; }

  /* ==== ACTIVITY LIST ==== */
  .activity { padding: 8px 0; }

  .activity__item {
    display: flex;
    gap: 12px;
    padding: 14px 20px;
    border-bottom: 1px solid var(--border);
  }
  .activity__item:last-child { border-bottom: none; }

  .activity__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-top: 7px;
    flex-shrink: 0;
  }

  .activity__text { font-size: 13px; }
  .activity__time { color: var(--text-muted); font-size: 12px; margin-top: 2px; }

</style>