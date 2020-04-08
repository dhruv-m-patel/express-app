module.exports = {
  plugins: [
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/syntax-optional-chaining',
    '@babel/syntax-dynamic-import',
    'babel-plugin-macros',
  ],
  presets: [
    ['@babel/preset-env', {
      targets: { node: 'current' },
      exclude: ['transform-regenerator'],
    }],
  ],
};
