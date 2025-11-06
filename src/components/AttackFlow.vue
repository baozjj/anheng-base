<template>
  <div class="attack-flow">
    <template v-for="(s, i) in items" :key="'arrow-' + i">
      <FlowStep
        :value="s.value"
        :label="s.label"
        :sub="s.sub"
        :icon="s.icon"
        :theme="s.theme"
      />
      <!-- arrows between steps -->
      <div
        v-if="i < items.length - 1"
        class="arrow"
        :class="'theme-' + s.theme"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path
            d="M8 4l8 8-8 8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import FlowStep from "./FlowStep.vue";

type Theme = "primary" | "violet" | "blue" | "red";
type IconType = "clock" | "star" | "cube" | "check";
export interface StepItem {
  value: string | number;
  label: string;
  sub: string;
  icon: IconType;
  theme: Theme;
}

const props = defineProps<{ steps?: StepItem[] }>();

const defaultSteps: StepItem[] = [
  {
    value: "1,250",
    label: "攻击信息总数",
    sub: "来源IP",
    icon: "clock",
    theme: "primary",
  },
  {
    value: "AI智能分析",
    label: "实时处理",
    sub: "数据流实时分析",
    icon: "star",
    theme: "violet",
  },
  {
    value: 156,
    label: "已分析攻击者",
    sub: "行为分析完成",
    icon: "cube",
    theme: "blue",
  },
  {
    value: 3,
    label: "发现恶意攻击者",
    sub: "规则确认",
    icon: "check",
    theme: "red",
  },
];

const items = computed(() =>
  props.steps && props.steps.length ? props.steps : defaultSteps
);
</script>

<style scoped>
.attack-flow {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 16px 8px;
}

.arrow {
  color: #a7b5ff;
  opacity: 0.9;
}
.arrow.theme-primary {
  color: #a7b5ff;
}
.arrow.theme-violet {
  color: #8fb4ff;
}
.arrow.theme-blue {
  color: #5ba2ff;
}
.arrow.theme-red {
  color: #ff9b9b;
}

@media (max-width: 960px) {
  .attack-flow {
    flex-wrap: wrap;
  }
  .arrow {
    display: none;
  }
}
</style>
