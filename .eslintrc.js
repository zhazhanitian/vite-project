module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: ['vue', '@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:import/recommended',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  globals: {
    $tenantId: 'readonly' // readonly writable off
  },
  rules: {
    'no-console': process.env.VITE_APP_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.VITE_APP_ENV === 'production' ? 'error' : 'off',
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-unresolved': [2, { ignore: ['antd-mobile'] }],
    'import/no-absolute-path': [0], // 关闭不能使用绝对路径导入模块
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
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
        map: [
          ['@', './src'],
          ['store', './src/store/store']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
      }
    }
  }
}
