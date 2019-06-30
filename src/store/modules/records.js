var Datastore = require('nedb')
  , db = new Datastore({ filename: 'records.json', autoload: true });

export default {
  state: {
    records: [
      {
      id: 1,
      nome: 'test'
      },
    ]
  },

  getters: {},

  mutations: {},

  actions: {}

}