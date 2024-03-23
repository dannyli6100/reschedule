<template>
    <div class="box">
        <h1>Name: {{ name }}</h1>
        <p>id: {{ id }}</p>
        <p>Hours Per Week: {{ hoursPerWeek }}</p>
        <p>Monday: {{ availabilityMonday }}</p>
        <p>Tuesday: {{ availabilityTuesday }}</p>
        <p>Wednesday: {{ availabilityWednesday }}</p>
        <p>Thursday: {{ availabilityThursday }}</p>
        <p>Friday: {{ availabilityFriday }}</p>
        <button>Edit Scribe</button>
        <button @click="$emit('deleteScribe')">Delete Scribe</button>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    hoursPerWeek: String, // will need to parseInt this string
    availabilityMonday: String,
    availabilityTuesday: String,
    availabilityWednesday: String,
    availabilityThursday: String,
    availabilityFriday: String,
    id: Number
})
</script>

<style lang="scss" scoped>

</style>