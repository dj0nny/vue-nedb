<template>
  <div>
    {{ currentRecord }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '../store/types';

export default {
  name: 'RecordDetail',
  computed: {
    ...mapState([
      'currentRecord',
    ]),
  },
  methods: {
    ...mapActions([
      types.FETCH_RECORD,
    ]),
  },
  created() {
    this.FETCH_RECORD(this.$route.params.id);
  },
};
</script>

<style>

</style>
