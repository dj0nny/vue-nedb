<template>
  <div class="record-details">
    <b-row>
      <b-col md="6">
        <img class="cover" :src="currentRecord.cover" >
      </b-col>
      <b-col md="6">
        test
      </b-col>
    </b-row>
    {{currentRecord}}
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

<style lang="scss" scoped>
.cover {
  width: 100%;
}
</style>
