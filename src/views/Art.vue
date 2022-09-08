<template>
  <div class="about">
    <h1>My Art</h1>
    <div class="row" v-for="art in arts_list">
      <div class="col-md-2">
        <img :src="art" :alt="art">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Options } from 'vue-class-component'

  @Options({
    data() {
      return {
        arts_list: [
          require('@/assets/Untitled.png'),
        ]
      }
    }
  })

  export default class Art extends Vue {  }

</script>
