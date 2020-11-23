<template>
  <div class="edit-record">
    <b-row>
      <b-col md="12">
        <h2>Edit Record</h2><br>
        <form @submit.prevent="handleEdit">
          <b-row>
            <b-col md="6">
              <b-form-input v-model="currentRecord.name" placeholder="Record name" type="text" required></b-form-input>
            </b-col>
            <b-col md="6">
              <b-form-input v-model="currentRecord.band" placeholder="Band name" type="text" required></b-form-input>
            </b-col>
            <b-col md="6">
              <b-form-select v-model="currentRecord.genre" :options="options"></b-form-select>
            </b-col>
            <b-col md="6">
              <b-form-input v-model="currentRecord.year" placeholder="Release year" type="number" required></b-form-input>
            </b-col>
            <b-col md="12">
              <b-form-input v-model="currentRecord.cover" placeholder="Cover URL" type="url"></b-form-input>
            </b-col>
            <b-col md="12" class="last">
              <b-button type="submit" class="button">Edit Record</b-button>
            </b-col>
          </b-row>
        </form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import genres from '../genres';

export default {
  name: 'RecordDetail',
  data: () => ({
    options: genres,
  }),
  computed: {
    ...mapState('records', [
      'currentRecord',
    ]),
  },
  methods: {
    ...mapActions('records', [
      'editRecord',
      'fetchRecord',
    ]),
    handleEdit() {
      this.editRecord(this.currentRecord);
      this.$router.push('/');
    },
  },
  mounted() {
    this.fetchRecord(this.$route.params.id);
  },
};
</script>
