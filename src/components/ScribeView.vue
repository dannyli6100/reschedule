<template>
    <div class="box">
        <h2>Name: {{ name }}</h2>
        <p>id: {{ id }} </p>
        <p>Hours Per Week: {{ hoursPerWeek }}</p>
        <p>Monday: {{ availabilityMonday }}</p>
        <p>Tuesday: {{ availabilityTuesday }}</p>
        <p>Wednesday: {{ availabilityWednesday }}</p>
        <p>Thursday: {{ availabilityThursday }}</p>
        <p>Friday: {{ availabilityFriday }}</p>
        <button @click="$emit('deleteItem', id)">Delete Scribe</button>
    </div>
</template>

<script setup>
const props = defineProps({
    name: String,
    hoursPerWeek: String,
    availabilityMonday: String,
    availabilityTuesday: String,
    availabilityWednesday: String,
    availabilityThursday: String,
    availabilityFriday: String,
    id: String,
})

const emit = defineEmits(['deleteItem'])

</script>

<style lang="scss" scoped>
</style>