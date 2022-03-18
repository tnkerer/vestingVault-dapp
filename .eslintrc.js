module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    '@metamask/eslint-config',
    '@metamask/eslint-config/config/nodejs',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'json',
  ],
  'rules': {
  },
  'globals': {
    'web3': true,
  },
};
