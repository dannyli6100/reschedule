<template>
    <div class="scrollContainer">
        <div class="box">
            <h1>Name: {{ name }}</h1>
            <p>id: {{ id }} </p>
            <p>Hours Per Week: {{ hoursPerWeek }}</p>
            <p>Monday: {{ availabilityMonday }}</p>
            <p>Tuesday: {{ availabilityTuesday }}</p>
            <p>Wednesday: {{ availabilityWednesday }}</p>
            <p>Thursday: {{ availabilityThursday }}</p>
            <p>Friday: {{ availabilityFriday }}</p>
            <button>Edit Scribe</button>
            <button @click="$emit('deleteItem', id)">Delete Scribe</button>
            // passing in id to each delete button as well to identify which scribe to delete
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    hoursPerWeek: Number,
    availabilityMonday: String,
    availabilityTuesday: String,
    availabilityWednesday: String,
    availabilityThursday: String,
    availabilityFriday: String,
    id: String,
})


</script>

<style lang="scss" scoped>
.scrollContainer {
    overflow-y: scroll;
}
</style>