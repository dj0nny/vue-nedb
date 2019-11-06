import Vue from 'vue';
import Vuex from 'vuex';

// import records from './modules/records';

import types from './types';

const Datastore = require('nedb');

const db = new Datastore({ filename: 'records.json', autoload: true });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    records: [],
    currentRecord: [],
  },
  mutations: {
    [types.ADD_RECORD](state, payload) {
      state.records.push(payload);
    },
    [types.SET_RECORDS](state, payload) {
      state.records = payload;
    },
    [types.SET_RECORD](state, payload) {
      state.currentRecord = payload;
    },
  },
  actions: {
    [types.ADD]({ commit }, record) {
      db.insert(record, (err, record) => {
        commit(types.ADD_RECORD, record);
      });
    },
    [types.FETCH_RECORDS]({ commit }) {
      db.find({}, (err, records) => {
        commit(types.SET_RECORDS, records);
      });
    },
    [types.FETCH_RECORD]({ commit }, recordId) {
      db.findOne({ _id: recordId }, (err, item) => {
        commit(types.SET_RECORD, item);
      });
    },
    [types.DELETE_RECORD]({ commit }, recordId) {
      db.remove({ _id: recordId }, {}, () => {
        commit(types.SET_RECORDS, this.state.records.filter(value => value._id !== recordId));
      });
    },
    [types.EDIT_RECORD]({ commit }, recordId) {
      console.log(recordId);
    }
  },
});
