const postcssCustomMedia = require('postcss-custom-media');

module.exports = (ctx) => {
  const postcssConfig = {
    plugins: [
      require('autoprefixer'),
      postcssCustomMedia(/* pluginOptions */)
    ],
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