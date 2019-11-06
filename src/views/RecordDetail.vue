<template>
  <div class="edit-record">
    <b-row>
      <b-col md="12">
        <h2>Edit Record</h2><br>
        <form @submit.prevent="editRecord()">
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
import types from '../store/types';

export default {
  name: 'RecordDetail',
  data: () => ({
    options: [
      { value: null, text: 'Genre' },
      { value: 'Rock', text: 'Rock' },
      { value: 'Pop', text: 'Pop' },
      { value: 'Jazz', text: 'Jazz' },
      { value: 'Blues', text: 'Blues' },
      { value: 'R & B', text: 'R & B' },
      { value: 'Hard Rock', text: 'Hard Rock' },
      { value: 'Heavy Metal', text: 'Heavy Metal' },
      { value: 'Progressive Rock', text: 'Progressive Rock' },
      { value: 'Progressive Metal', text: 'Progressive Metal' },
      { value: 'Death Metal', text: 'Death Metal' },
      { value: 'Progressive Death Metal', text: 'Progressive Death Metal' },
      { value: 'Black Metal', text: 'Black Metal' },
      { value: 'Ambient', text: 'Ambient' },
    ],
  }),
  computed: {
    ...mapState([
      'currentRecord',
    ]),
  },
  methods: {
    ...mapActions([
      types.FETCH_RECORD,
      types.EDIT_RECORD,
    ]),
    editRecord() {
      
    },
  },
  created() {
    this.FETCH_RECORD(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.edit-record {
  .col-md-6, .col-md-12 {
    margin-bottom: 40px !important;
  }

  .last {
    margin-bottom: 0px !important;
  }
}
</style>
