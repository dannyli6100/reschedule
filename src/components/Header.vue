<template>
    <header>
        <nav class="container">
            <p>For Darling</p>
            <ul class="nav-routes">
                <RouterLink :to="{name: 'home'}">Home</RouterLink>
                <!-- routerLink to calendar-->
            </ul>
        </nav>
    </header>
</template>

<script setup>
//import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
header {
    background-color: #f1f1f1;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    nav {
        display: flex;
        align-items: center;
        p {
            font-size: 24px;
            color: #000;
        }
        .nav-routes {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            gap: 12px;
            list-style: none;
        }
    }
}
</style>