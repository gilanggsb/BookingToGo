const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    server: {
        port: 8088,
    },
    resolver: {
        assetExts: assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"]
    },
    transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    }
};

module.exports = mergeConfig(defaultConfig, config);