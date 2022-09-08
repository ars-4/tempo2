<template>

    <div class="contact">
        <h1>Contact Me</h1>
        <br>
        <div class="links" v-for="icon in icons">
            <a :href="icon[1]"><span :class="icon[0]"></span></a>
        </div>
    </div>

</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({

    data() {
        return {
            icons: [
                ["fa fa-github", 'https://github.com/artistxoder/'],
                ["fa fa-youtube", 'https://github.com/artistxoder/'],
                ["fa fa-envelope", 'https://github.com/artistxoder/'],
            ]
        }
    }

})

export default class Contact extends Vue { }
</script>