var Datastore = require('nedb')
  , db = new Datastore({ filename: 'records.json', autoload: true });

export default {
  state: {
    records: [{}]
  },

  getters: {},

  mutations: {},

  actions: {}
}