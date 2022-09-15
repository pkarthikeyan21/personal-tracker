module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
        'module-resolver',
        {
            root: ['.'],
            extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
            alias: {
                "@store" : './src/store',
                '@components': './src/components',
                '@navigation' : './src/navigation',
                '@constants' : './src/constants',
                '@contexts' : './src/contexts',
                '@assets' : './src/assets',
                '@screens':'./src/screens',
                '@services' : './src/services',
                
            },
        },
    ]
]
};
