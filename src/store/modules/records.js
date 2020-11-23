import db from '../../nedb';

export default {
  namespaced: true,
  state: {
    records: [],
    currentRecord: [],
  },
  actions: {
    addRecord({ state }, payload) {
      db.insert(payload, (err, record) => {
        state.records.push(record);
      });
    },
    fetchAllRecords({ state }) {
      db.find({}, (err, records) => {
        state.records = records;
      });
    },
    fetchRecord({ state }, recordId) {
      db.findOne({ _id: recordId }, (err, record) => {
        state.currentRecord = record;
      });
    },
    deleteRecord({ state }, recordId) {
      db.remove({ _id: recordId }, {}, () => {
        const filteredRecords = state.records.filter((item) => item._id !== recordId);
        state.records = filteredRecords;
      });
    },
    editRecord(_, payload) {
      db.update({ _id: payload._id }, {
        $set: {
          name: payload.name,
          band: payload.band,
          genre: payload.genre,
          year: payload.year,
          cover: payload.cover,
        },
      });
    },
  },
};
