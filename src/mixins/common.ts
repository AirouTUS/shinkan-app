import Vue from 'vue'

export default Vue.extend({
  methods: {
    isActiveLink(path: string) {
      return this.$route.path.startsWith(path)
    },
    sanitize(text: string) {
      return text.replace(/\n/g, '<br/>')
    }
  }
})