const tailwindcss = require("tailwindcss");
const postCSSimport = require("postcss-import");
module.exports = {
  plugins: [
    postCSSimport,
    tailwindcss("./tailwind.js")
  ]
}
