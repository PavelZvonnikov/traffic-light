<template>
    <div class="light" :class="{ animate: animate, red: activeColor === 0,
    yellow: activeColor === 1 || activeColor === 3, green: activeColor === 2 }" />
</template>

<script src="./index.js" />

<style scoped>
  @import './style.css';
</style>