module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'tailwindcss-react-native/babel',
            {blockModuleTransform: ['react-select']},
        ],
    ],
};

module.exports = api => {
    api.cache(true);

    return {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
            '@babel/plugin-transform-runtime',
            ['@babel/plugin-proposal-class-properties', {loose: true}],
        ],
        env: {
            testing: {
                presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
            },
        },
    };
};
