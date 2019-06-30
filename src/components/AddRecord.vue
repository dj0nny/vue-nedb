<template>
  <div class="add-record">
    <b-row>
      <b-col md="12">
        <form @submit.prevent="addRecord()">
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
              <b-form-input v-model="record.cover" placeholder="Cover URL" type="text"></b-form-input>
            </b-col>
            <b-col md="12" class="last">
              <b-button type="submit">Add Record</b-button>
            </b-col>
          </b-row>
        </form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddRecord',
  data:() => ({
    record: {
      name: '',
      band: '',
      genre: null,
      year: 0,
      cover: ''
    },
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
      { value: 'Ambient', text: 'Ambient' }
    ]
  }),
  methods: {
    ...mapActions([
      'add'
    ]),
    addRecord() {
      console.log(this.record)
      this.add(this.record)
    }
  }
}
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

