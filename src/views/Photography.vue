<template>
    <div class="photography">
      <h1>My Photos</h1>
      <div class="row" v-for="photo in photos_list">
        <div class="col-md-2">
          <img :src="photo" :alt="photo">
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import { Vue, Options } from 'vue-class-component'
  
    @Options({
      data() {
        return {
          photos_list: [
            require('@/assets/Untitled.png'),
          ]
        }
      }
    })
  
    export default class Art extends Vue {  }
  
  </script>
  