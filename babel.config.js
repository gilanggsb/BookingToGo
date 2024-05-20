module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@features": "./src/features",
          "@utils": "./src/utils",
          "@helpers": "./src/utils/helpers",
          "@constants": "./src/utils/constants",
          "@services": "./src/utils/services",
          "@type": "./src/types",
          "@states": "./src/states",
        },
      },
    ],
    // [
    //   'react-native-reanimated/plugin',
    //   {
    //     relativeSourceLocation: true,
    //   },
    // ],
  ],
};
