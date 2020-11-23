<template>
  <div class="add-record">
    <b-row>
      <b-col md="12">
        <h2>Add Record</h2> <br>
        <form @submit.prevent="handleAdd">
          <b-row>
            <b-col md="6">
              <b-form-input v-model="record.name" placeholder="Record name" type="text" required></b-form-input>
            </b-col>
            <b-col md="6">
              <b-form-input v-model="record.band" placeholder="Band name" type="text" required></b-form-input>
            </b-col>
            <b-col md="6">
              <b-form-select v-model="record.genre" :options="options"></b-form-select>
            </b-col>
            <b-col md="6">
              <b-form-input v-model="record.year" placeholder="Release year" type="number" required></b-form-input>
            </b-col>
            <b-col md="12">
              <b-form-input v-model="record.cover" placeholder="Cover URL" type="url"></b-form-input>
            </b-col>
            <b-col md="12" class="last">
              <b-button type="submit" class="button">Add Record</b-button>
            </b-col>
          </b-row>
        </form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import genres from '../genres';

export default {
  name: 'AddRecord',
  data: () => ({
    record: {
      name: '',
      band: '',
      genre: null,
      year: 0,
      cover: '',
    },
    options: genres,
  }),
  methods: {
    ...mapActions('records', [
      'addRecord',
    ]),
    handleAdd() {
      this.addRecord(this.record);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.add-record {
  .col-md-6, .col-md-12 {
    margin-bottom: 40px !important;
  }

  .last {
    margin-bottom: 0px !important;
  }
}
</style>
