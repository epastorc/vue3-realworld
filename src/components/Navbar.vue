<template>
    <div class="container-navbar">
        <div>
        <img @click="clickAvatar" class="avatar" src="https://www.blexar.com/avatar.png" alt="avatar">
        </div>
        <div>
        <img src="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png" alt="twitter logo">
        </div>
        <span></span>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import { Prop } from "vue-property-decorator";
      @Options({})
    export default class Navbar extends Vue {
        @Prop()
        clickAvatar!: Function
        
    }
</script>

<style scoped>
    body{
        margin: 0px;
    }
    img{
        height: 40px;
        width: 40px;
        border-radius: 5px;
    }
    .container-navbar{
        padding: 5px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .container-navbar > div {
        display: flex;
        align-items: center;
    }
</style>