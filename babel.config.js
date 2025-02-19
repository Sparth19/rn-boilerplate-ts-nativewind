module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          app: './app',
          assets: './app/assets',
        },
      },
    ],
  ],
};
