module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: ['vue', '@typescript-eslint'],
  extends: [
    'plugin:vue/essential',
    'plugin:import/recommended',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  rules: {
    // 'import/extensions': [2, 'never', { 'web.js': 'never', json: 'never' }],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-unresolved': [2, { ignore: ['antd-mobile'] }],
    'import/no-absolute-path': [0], // 关闭不能使用绝对路径导入模块
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state' // for vuex state
        ]
      }
    ]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
      }
    }
  }
}
