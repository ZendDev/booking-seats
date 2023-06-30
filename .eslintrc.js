module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'vue/no-v-model-argument': 'off',
    'vue/no-return-assign': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'off',
    'no-unused-vars': 'off'
  }
}
