<template>
  <cy-editor
    class="cy-editor"
    :value="value"
    :cy-config="cyConfig"
    :editor-config="editorConfig"
    @change="change"
  />
</template>

<script>
import cyEditor from './cyeditor.js'

export default {
  name: 'App',
  components: {
    cyEditor
  },
  data () {
    return {
      value: {
        zoom: 0.7,
        pan: { x: 100, y: 40 },
        elements: {
          nodes: [],
          edges: []
        }
      },
      cyConfig: {},
      editorConfig: {
        lineType: 'taxi'
      }
    }
  },
  mounted () {
    //
  },
  computed: {},
  methods: {
    change () {
      //
    }
  }
}

</script>
<style scoped lang="stylus">
  .cy-editor {
    width: 100%;
    height: 600px;
    position: relative;
  }
</style>
