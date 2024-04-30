<template>
    <form @submit="submitProvider" id="form" class="form">
        <p>Time in format HH:MM(am/pm) - HH:MM(am/pm)</p>
        <div class="form-element">
            <label for="providerName">Name</label>
            <input type="text" id="providerName" placeholder="Enter Name for Provider" />
        </div>
        <div class="form-element">
            <label for="monday-hours">Monday Hours</label>
            <input type="text" id="monday-hours" placeholder="Enter Time for Monday" />
        </div>
        <div class="form-element">
            <label for="tuesday-hours">Tuesday Hours</label>
            <input type="text" id="tuesday-hours" placeholder="Enter Time for Tuesday" />
        </div>
        <div class="form-element">
            <label for="wednesday-hours">Wednesday Hours</label>
            <input type="text" id="wednesday-hours" placeholder="Enter Time for Wednesday" />
        </div>
        <div class="form-element">
            <label for="thursday-hours">Thursday Hours</label>
            <input type="text" id="thursday-hours" placeholder="Enter Time for Thursday" />
        </div>
        <div class="form-element">
            <label for="friday-hours">Friday Hours</label>
            <input type="text" id="friday-hours" placeholder="Enter Time for Friday" />
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'
import { uid } from 'uid'

const props = defineProps(['providerList'])
const emit = defineEmits(['submitProvider'])

const submitProvider = (event) => {
    event.preventDefault()

    const providerName = document.getElementById('providerName').value
    const mondayHours = document.getElementById('monday-hours').value
    const tuesdayHours = document.getElementById('tuesday-hours').value
    const wednesdayHours = document.getElementById('wednesday-hours').value
    const thursdayHours = document.getElementById('thursday-hours').value
    const fridayHours = document.getElementById('friday-hours').value

    const newProvider = {
        id: uid(),
        name: providerName,
        hoursPerDay: [
            { day: 'Monday', hours: mondayHours },
            { day: 'Tuesday', hours: tuesdayHours },
            { day: 'Wednesday', hours: wednesdayHours },
            { day: 'Thursday', hours: thursdayHours },
            { day: 'Friday', hours: fridayHours },
        ]
    }

    emit('submitProvider', newProvider)
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