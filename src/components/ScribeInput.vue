<template>
    <form @submit="submitScribe" id="form" class="form">
        <p>Time in format HH:MM(am/pm) - HH:MM(am/pm)</p>
        <div class="form-element">
            <label for="scribeName">Name</label>
            <input type="text" id="scribeName" placeholder="Enter Name for Scribe" />
        </div>
        <div class="form-element">
            <label for="hours">Hours Per Week</label>
            <input type="text" id="hours" placeholder="Enter Hours Per Week" />
        </div>
        <div class="form-element">
            <label for="monday-avail">Monday Availability</label>
            <input type="text" id="monday-avail" placeholder="Enter Times for Monday" />
        </div>
        <div class="form-element">
            <label for="tuesday-avail">Tuesday Availability</label>
            <input type="text" id="tuesday-avail" placeholder="Enter Times for Tuesday" />
        </div>
        <div class="form-element">
            <label for="wednesday-avail">Wednesday Availability</label>
            <input type="text" id="wednesday-avail" placeholder="Enter Times for Wednesday" />
        </div>
        <div class="form-element">
            <label for="thursday-avail">Thursday Availability</label>
            <input type="text" id="thursday-avail" placeholder="Enter Times for Thursday" />
        </div>
        <div class="form-element">
            <label for="friday-avail">Friday Availability</label>
            <input type="text" id="friday-avail" placeholder="Enter Times for Friday" />
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'
import { uid } from 'uid'

const props = defineProps(['scribeList'])
const emit = defineEmits(['submitScribe'])

const submitScribe = (event) => {
    event.preventDefault()

    const scribeName = document.getElementById('scribeName').value
    const hoursPerWeek = document.getElementById('hours').value
    const mondayAvailability = document.getElementById('monday-avail').value
    const tuesdayAvailability = document.getElementById('tuesday-avail').value
    const wednesdayAvailability = document.getElementById('wednesday-avail').value
    const thursdayAvailability = document.getElementById('thursday-avail').value
    const fridayAvailability = document.getElementById('friday-avail').value

    const newScribe = {
        id: uid(),
        name: scribeName,
        hoursPerWeek: hoursPerWeek,
        availability: [
            { day: 'Monday', avail: mondayAvailability },
            { day: 'Tuesday', avail: tuesdayAvailability },
            { day: 'Wednesday', avail: wednesdayAvailability },
            { day: 'Thursday', avail: thursdayAvailability },
            { day: 'Friday', avail: fridayAvailability },
        ]
    }

    emit('submitScribe', newScribe)
}

</script>

<style lang="scss" scoped>
.form {
    padding: 20px 30px;

    button {
        cursor: pointer;
        background-color: #3498db;
        border: 2px solid #3498db;
        border-radius: 4px;
        color: #fff;
        display: block;
        font-size: 16px;
        padding: 10px;
        margin-top: 20px;
        width: 290px;
    }
}

.form-element {
    margin-bottom: 5px;
    padding-bottom: 10px;
    position: relative;

    label {
        color: #000;
        display: block;
        margin-bottom: 5px;
    }

    input {
        border: 2px solid #f0f0f0;
        border-radius: 4px;
        display: block;
        width: 270px;
        padding: 10px;
        font-size: 14px;

        :focus {
            outline: 0;
            border-color: #000;
        }
    }
}


</style>