<template>
  <div class="wrapper">
    <div class="app">
      <Info :value="activeColor" :timer="timeToChange" />
      <div class="traffic-light">
        <router-view :animate="timeToChange < 3" :activeColor="activeColor" />
        <div class="red-off color" />
        <div class="yellow-off color" />
        <div class="green-off color" />
      </div>
    </div>
  </div>
</template>

<script src="./index.js" />

<style>
  @import './style.css';
</style>
