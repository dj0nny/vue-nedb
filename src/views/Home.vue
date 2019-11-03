<template>
  <div class="record-list-container">
    <RecordsList :list="records.records"></RecordsList>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '../store/types';

import RecordsList from '../components/RecordsList.vue';

export default {
  name: 'Home',
  components: {
    RecordsList,
  },
  computed: {
    ...mapState([
      'records',
    ]),
  },
  methods: {
    ...mapActions([
      types.FETCH_RECORDS,
    ]),
  },
  mounted() {
    this.FETCH_RECORDS();
  },
};
</script>
