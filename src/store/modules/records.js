import db from '../../nedb';

export default {
  namespaced: true,
  state: {
    records: [],
    currentRecord: [],
    loading: false,
  },
  actions: {
    addRecord({ state }, payload) {
      state.loading = true;
      db.insert(payload, (err, record) => {
        state.records.push(record);
      });
      state.loading = false;
    },
    fetchAllRecords({ state }) {
      state.loading = true;
      db.find({}, (err, records) => {
        state.records = records;
      });
      state.loading = false;
    },
    fetchRecord({ state }, recordId) {
      state.loading = true;
      db.findOne({ _id: recordId }, (err, record) => {
        state.currentRecord = record;
      });
      state.loading = false;
    },
    deleteRecord({ state }, recordId) {
      state.loading = true;
      db.remove({ _id: recordId }, {}, () => {
        const filteredRecords = state.records.filter((item) => item._id !== recordId);
        state.records = filteredRecords;
      });
      state.loading = false;
    },
    editRecord({ state }, payload) {
      state.loading = true;
      db.update({ _id: payload._id }, {
        $set: {
          name: payload.name,
          band: payload.band,
          genre: payload.genre,
          year: payload.year,
          cover: payload.cover,
        },
      });
      state.loading = false;
    },
  },
};
