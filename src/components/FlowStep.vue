<template>
  <div class="step" :class="'theme-' + theme">
    <div class="icon-wrap">
      <!-- 内置四种图标，满足通用复用 -->
      <svg v-if="icon === 'clock'" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" />
        <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" />
      </svg>
      <svg v-else-if="icon === 'star'" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17l-5.6 3.2 1.1-6.2L3 9.6l6.2-.9L12 3z" fill="currentColor" />
      </svg>
      <svg v-else-if="icon === 'cube'" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path d="M12 3l8 9-8 9-8-9 8-9z" fill="currentColor" />
      </svg>
      <svg v-else viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" />
        <path d="M7 12l3 3 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div class="content">
      <div class="value">{{ value }}</div>
      <div class="label">{{ label }}</div>
      <div class="sub">{{ sub }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Theme = 'primary' | 'violet' | 'blue' | 'red'
type IconType = 'clock' | 'star' | 'cube' | 'check'

defineProps<{
  value: string | number
  label: string
  sub: string
  icon: IconType
  theme: Theme
}>()
</script>

<style scoped>
.step {
  --bg-start: #ffffff;
  --bg-end: #f6f9ff;
  --value-color: #1f4cff;
  --shadow: 0 6px 16px rgba(55, 84, 170, 0.12);
  background: linear-gradient(145deg, var(--bg-start), var(--bg-end));
  border-radius: 999px;
  box-shadow: var(--shadow);
  padding: 12px 18px;
  min-width: 260px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,0.6));
  color: var(--value-color);
}

.content { display: flex; flex-direction: column; line-height: 1.15; }
.value { font-size: 22px; font-weight: 800; color: var(--value-color); }
.label { font-size: 14px; color: #1b2a50; margin-top: 4px; }
.sub { font-size: 12px; color: #7a8aaa; margin-top: 3px; }

/* 主题变量，便于复用 */
.theme-primary { --bg-start: #e9f2ff; --bg-end: #f5f8ff; --value-color: #1f4cff; }
.theme-violet  { --bg-start: #eef0ff; --bg-end: #f7f6ff; --value-color: #6e73ff; }
.theme-blue    { --bg-start: #ebf5ff; --bg-end: #f7fbff; --value-color: #2e8cff; }
.theme-red     { --bg-start: #fff0f0; --bg-end: #fff6f6; --value-color: #ff5b5b; }
</style>