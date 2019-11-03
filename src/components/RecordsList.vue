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
            <span class="delete" @click="deleteRecord(record._id)">Delete Record</span>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import types from '../store/types';

export default {
  name: 'RecordsList',
  props: [
    'list',
  ],
  methods: {
    ...mapActions([
      types.DELETE_RECORD,
    ]),
    deleteRecord(id) {
      this.DELETE_RECORD(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.record-preview {
    margin-bottom: 50px;
    text-align: center;
    border: 1px solid #3a506b;
    min-height: 190px;
    padding: 10px;

    .cover {
      img {
        width: 100%;
      }
    }

    .edit {
      margin-top: 30px;
      margin-bottom: 15px;

      a {
        color: #fff;
        background: #1c2541;
        padding: 10px;
        border: 1px solid #1c2541;
        transition: .3s all;

        &:hover {
          background: transparent;
          color: #1c2541;
          text-decoration: none;
        }
      }

      span.delete {
        display: inline-block;
        margin-left: 10px;
        color: #fff;
        background: red;
        padding: 10px;
        border: 1px solid red;
        transition: .3s all;
        cursor: pointer;

        &:hover {
          color: red;
          background: transparent !important;
        }
      }
    }
}

.message {
  text-align: center;
  font-weight: bold;
  font-size: 35px;
  color: #3a506b;
}

</style>
