import neostandard from 'neostandard'
import pluginVue from 'eslint-plugin-vue'

export default [
  neostandard({ ts: true }),
  pluginVue.configs['flat/recommended']
]
