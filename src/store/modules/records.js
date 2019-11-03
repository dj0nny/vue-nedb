import types from '../types';

const Datastore = require('nedb');

const db = new Datastore({ filename: 'records.json', autoload: true });

export default {
  state: {
    records: [{}],
  },

  getters: {},

  mutations: {
    [types.ADD_RECORDS](state, payload) {
      state.records.push(payload);
    },
    [types.SET_RECORDS](state, payload) {
      state.records = payload;
    },
  },

  actions: {
    [types.ADD]({ commit }, record) {
      db.insert(record, (err, record) => {
        commit(types.ADD_RECORDS, record);
      });
    },
    [types.FETCH_RECORDS]({ commit }) {
      db.find({}, (err, records) => {
        commit(types.SET_RECORDS, records);
      });
    },
  },

};
