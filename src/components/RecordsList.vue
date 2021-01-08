<template>
  <div class="records-list">
    <b-row v-if="list.length == 0">
      <b-col md="12">
        <div class="message">
          There is no record
        </div>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col md="4" v-for="(record, index) in list" :key="index">
        <div class="record-preview">
          <div class="cover">
            <img :src="record.cover" :alt="record.name">
          </div>
          <div class="preview-body">
            <h2 class="record-title">{{record.name}}</h2>
            <h4 class="record-band">{{record.band}}</h4>
            <h6 class="record-genre">{{record.genre}}</h6>
          </div>
          <div class="edit">
            <router-link :to="{ name: 'record-detail', params: { id: record._id }}">Edit Record</router-link>
            <span class="delete" @click="handleDelete(record._id)">Delete Record</span>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RecordsList',
  props: [
    'list',
  ],
  methods: {
    ...mapActions('records', [
      'deleteRecord',
    ]),
    handleDelete(id) {
      this.deleteRecord(id);
    },
  },
};
</script>
