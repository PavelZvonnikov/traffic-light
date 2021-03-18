<template>
  <div class="info">
    <div class="info-text" v-if="value === 2">You can go!</div>
    <div class="info-text" v-else>Please, wait</div>
    <div class="info-timer">{{calculatedTime}}</div>
  </div>
</template>

<script src="./index.js" />

<style scoped>
  @import './style.css';
</style>
