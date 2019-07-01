<template>
  <div class="records-list">
    <b-row>
      <b-col md="4" v-for="(record, index) in list" :key="index">
        <div class="record-preview">
          <div class="cover">
            test
          </div>
          <div class="preview-body">
            <h2 class="record-title">{{record.name}}</h2>
            <h4 class="record-band">{{record.name}}</h4>
            <h6 class="record-genre">{{record.genre}}</h6>
          </div>
          <div class="edit">
            <b-button class="button">Edit Record</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'RecordsList',
  props: [
    'list'
  ]
}
</script>

<style lang="scss" scoped>
.record-preview {
    margin-bottom: 50px;
    text-align: center;
    border: 1px solid #3a506b;
    min-height: 190px;
    padding: 10px;
    
    .edit {
      margin-top: 30px;
      margin-bottom: 15px;
    }
}

</style>

