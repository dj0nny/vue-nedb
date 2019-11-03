const Datastore = require('nedb');

const db = new Datastore({ filename: 'records.json', autoload: true });

export default {
  state: {
    records: [{}],
  },

  getters: {},

  mutations: {
    add_record(state, payload) {
      state.records.push(payload);
    },
    set_records_state(state, payload) {
      state.records = payload;
    },
  },

  actions: {
    add({ commit }, record) {
      db.insert(record, (err, record) => {
        commit('add_record', record);
      });
    },
    fetchRecords({ commit }) {
      db.find({}, (err, records) => {
        commit('set_records_state', records);
      });
    },
  },

};
