<template>
  <div class="record-list-container">
    <RecordsList :list="records"></RecordsList>
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
