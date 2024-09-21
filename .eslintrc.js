// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',
  rules: {
    'import/no-unresolved': 'of', // İsteğe bağlı: import hatalarını devre dışı bırakır
  },
  settings: {
    react: {
      version: 'detect', // React versiyonunu otomatik algılar
    },
  },
};

