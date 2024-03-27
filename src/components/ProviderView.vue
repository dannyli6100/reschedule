<template>
    <div class="box">
        <h2>Name: {{ name }}</h2>
        <p>id: {{ id }} </p>
        <p>Monday: {{ mondayHours }}</p>
        <p>Tuesday: {{ tuesdayHours }}</p>
        <p>Wednesday: {{ wednesdayHours }}</p>
        <p>Thursday: {{ thursdayHours }}</p>
        <p>Friday: {{ fridayHours }}</p>
        <button @click="$emit('deleteItem', id)">Delete Provider</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    name: String,
    id: String,
    mondayHours: String,
    tuesdayHours: String,
    wednesdayHours: String,
    thursdayHours: String,
    fridayHours: String
})

const emit = defineEmits(['deleteItem'])
</script>

<style lang="scss" scoped>

</style>