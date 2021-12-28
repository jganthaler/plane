module.exports = function (api) {
    api.cache(true);
    const presets = [
        ['@babel/preset-env']
    ];
    const plugins = [
        ['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
        ['@babel/plugin-proposal-class-properties', {'loose': true}]
    ];
    return {
        presets,
        plugins
    };
};
