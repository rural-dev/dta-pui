const {NODE_ENV} = process.env;
const inDevelopment = NODE_ENV === 'development';

module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'tailwindcss-react-native/babel',
            {blockModuleTransform: ['react-select']},
        ],
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: !inDevelopment
                    ? /node_modules\/(?!(react-native-ratings))/
                    : /(node_modules)/,
                options: {
                    cacheDirectory: inDevelopment,
                    cacheCompression: false,
                },
            },
        ],
    },
};
