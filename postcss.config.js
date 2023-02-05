module.exports = (ctx) => {
  const postcssConfig = {
    plugins: [require('autoprefixer')],
  };


  if (ctx.mode === 'production') {
    postcssConfig.plugins.push(
      require('cssnano')({
        preset: ['default',
          {'discardComments': {'removeAll': true}}
        ]
      })
    );
  }
  
  return postcssConfig;
};