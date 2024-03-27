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
        <div class="form-container">
          <ProviderInput :providerList="providerList" @submitProvider="addProvider"/>
        </div>
        <div class="select-view">
          <ProviderView
            v-for="(provider) in providerList"
            :name="provider.name"
            :mondayHours="provider.hoursPerDay[0].hours"
            :tuesdayHours="provider.hoursPerDay[1].hours"
            :wednesdayHours="provider.hoursPerDay[2].hours"
            :thursdayHours="provider.hoursPerDay[3].hours"
            :fridayHours="provider.hoursPerDay[4].hours"
            :id="provider.id"
            :provider="provider"
            v-on:deleteItem="deleteProvider">
          </ProviderView>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import Header from './components/Header.vue';
import ProviderInput from './components/ProviderInput.vue';
import ProviderView from './components/ProviderView.vue';
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
const addProvider = (newProvider) => {
  newProvider.id = uid()
  providerList.value.push(newProvider)
}

// creating a edit/deletion function
const deleteScribe = (id) => {
  const index = scribeList.value.findIndex(scribe => scribe.id === id)
  if (index !== -1) {
    scribeList.value.splice(index, 1)
  }
}

const deleteProvider = (id) => {
  const index = providerList.value.findIndex(provider => provider.id === id)
  if (index !== -1) {
    providerList.value.splice(index, 1)
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
  max-width: 375px;
}

.select-view {
  flex: 1;
  max-width: 375px;
  height: 100%;
  overflow-y: scroll;
}

</style>