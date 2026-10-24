<script setup>
import {PRIVATE_ROUTS_VALUE, PUBLIC_ROUTS_VALUE} from "@/enums/index.js";
import {RouterLink} from "vue-router";

defineProps({
  size: {
    type: Number,
    default: 100
  },
  circleColor: {
    type: String,
    default: '#6cb050'
  }
})

defineEmits(['click'])
</script>
<template>
  <div class="wrapper">
    <button
        class="arrow-button"
        :style="{ width: size + 'px', height: size + 'px' }"
        @click="$emit('click')"
        aria-label="Next"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          class="arrow-svg"
      >
        <circle
            cx="50"
            cy="50"
            r="48"
            :fill="circleColor"
            class="circle-bg"
        />

        <path
            d="M 25 45 L 58 45 L 58 32 L 78 50 L 58 68 L 58 55 L 25 55 Z"
            fill="white"
            stroke="white"
            stroke-width="8"
            stroke-linejoin="round"
            stroke-linecap="round"
            class="arrow-path"
        />
      </svg>
    </button>
    <h2 class="btn-title">Нажми на меня</h2>
    <RouterLink :to="PUBLIC_ROUTS_VALUE.test" class="sidebar__link">
      Вернтуться на страницу с втоей версткой

    </RouterLink>
  </div>

</template>



<style scoped>
.wrapper {
  position: fixed;
  right: 50px;
  top: 100px;
}

.arrow-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
  box-shadow: 0 4px 10px rgba(108, 176, 80, 0.3);
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.arrow-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(108, 176, 80, 0.4);
}

.arrow-button:active {
  transform: scale(0.95);
}

.arrow-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.circle-bg {
  transition: fill 0.3s ease;
}

.arrow-button:hover .circle-bg {
  filter: brightness(0.95);
}

.arrow-path {
  transform-origin: center;
  animation: arrow-slide 1.5s infinite ease-in-out;
}

@keyframes arrow-slide {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
}
</style>
