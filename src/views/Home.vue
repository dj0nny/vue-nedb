<template>
  <div class="record-list-container">
    <div class="spinner-wrapper" v-if="loading">
      <img src="../assets/spinner.svg" class="spinner">
    </div>
    <RecordsList :list="records" v-else></RecordsList>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import RecordsList from '../components/RecordsList.vue';

export default {
  name: 'Home',
  components: {
    RecordsList,
  },
  computed: {
    ...mapState('records', [
      'records',
      'loading',
    ]),
  },
  methods: {
    ...mapActions('records', [
      'fetchAllRecords',
    ]),
  },
  mounted() {
    this.fetchAllRecords();
  },
};
</script>
