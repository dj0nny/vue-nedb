var Datastore = require('nedb')
  , db = new Datastore({ filename: 'records.json', autoload: true });

export default {
  state: {
    records: [{}]
  },

  getters: {},

  mutations: {
    add_record(state, payload) {
      state.records.push(payload)
    },
    set_records_state(state, payload) {
      state.records = payload
    }
  },

  actions: {
    add({ commit }, record) {
      db.insert(record, function(err, record) {
        commit('add_record', record)
      })
    },
    fecthRecords({ commit }) {
      db.find({}, function (err, records) {
        commit('set_records_state', records)
      });
    }
  }

}