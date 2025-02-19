const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');
const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const svgConfig = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native',
    ),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

const config = mergeConfig(defaultConfig, svgConfig);

module.exports = withNativeWind(config, {input: './global.css'});
