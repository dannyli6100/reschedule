<template>
  <Header />
  <div class="app-container">
    <div class="container">
      <div class="column">
        <div class="form-container">
          <ScribeInput :scribeList="scribeList" @submitScribe="addScribe" />
        </div>
        <div class="select-view">
          <ScribeView
            v-for="(scribe) in scribeList"
           :name="scribe.name"
           :hoursPerWeek="scribe.hoursPerWeek"
           :availabilityMonday="scribe.availability[0].avail"
           :availabilityTuesday="scribe.availability[1].avail"
           :availabilityWednesday="scribe.availability[2].avail"
           :availabilityThursday="scribe.availability[3].avail"
           :availabilityFriday="scribe.availability[4].avail"
           :id="scribe.id"
           :scribe="scribe"
            v-on:deleteItem="deleteScribe">
          </ScribeView>
        </div>
      </div>
      <div class="column">
        <ProviderInput />
      </div>
    </div>
  </div>

</template>

<script setup>
import Header from './components/Header.vue';
import ProviderInput from './components/ProviderInput.vue';
import ScribeInput from './components/ScribeInput.vue';
import ScribeView from './components/ScribeView.vue';
import { uid } from 'uid';
import { ref } from 'vue'

// creating our arrays to hold scribe and provider objects
const scribeList = ref([])

const providerList = ref([])

// creating a new scribe to add to list
const addScribe = (newScribe) => {
  newScribe.id = uid()
  scribeList.value.push(newScribe)
}

// creating a new provider to add to list

// creating a edit/deletion function
const deleteScribe = (id) => {
  const index = scribeList.value.findIndex(scribe => scribe.id === id)
  if (index !== -1) {
    scribeList.value.splice(index, 1)
  }
}


</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex: 1;
  width: 100%;
  height: 886px;
}

.form-container {
  flex: 1;
  max-width: 350px;
}

.select-view {
  flex: 1;
  max-width: 350px;
  height: 100%;
  overflow-y: scroll;
}

</style>