module.exports = (context, options) => {
  return options.data.root.htmlWebpackPlugin.options.filename === context ? 'active' : ''
}
