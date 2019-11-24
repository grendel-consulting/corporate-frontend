module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  "parserOptions": { "ecmaVersion": 6 },
  plugins: ["sonarjs"],
  extends: ["react-app","plugin:sonarjs/recommended"],
}
