<template>
  <div class="records-list">
    <b-row>
      <b-col md="12">
        {{list}}
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

<style>

</style>
