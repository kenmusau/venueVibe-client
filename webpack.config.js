// webpack.config.js
export const resolve = {
    fallback: {
        "console": require.resolve("console-browserify")
    },
};