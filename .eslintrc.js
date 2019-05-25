module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ["sonarjs"],
  extends: ["react-app","plugin:sonarjs/recommended"],
}
