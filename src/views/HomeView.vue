<script setup lang="ts">
import AttackFlow from "../components/AttackFlow.vue";

const steps = [
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
</script>

<template>
  <main>
    <AttackFlow :steps="steps" />
  </main>
</template>
