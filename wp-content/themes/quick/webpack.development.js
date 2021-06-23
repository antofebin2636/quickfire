const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const webpack = require("webpack");

// const dotenv = require('dotenv').config();

// if (dotenv.error) {
//     throw ("Please set up '.env' file first. Rename and modify '.env.example' to get started.");
// }

module.exports = merge(common, {
    mode: "development",
    cache: true,
    watch: true,
    plugins: [
        // new StylelintPlugin(
        //     {
        //         fix: true,
        //         files: "src/styles/**/*.scss",
        //         formatter: 'verbose',
        //         emitError: true,
        //         emitWarning: true,
        //         lintDirtyModulesOnly: true
        //     }
        // ),
        // new FriendlyErrorsWebpackPlugin(),
        // new BrowserSyncPlugin({
        //     proxy: {
        //         target: process.env.WEBPACK_URL || 'https://local.wp-starter',
        //     },
        //     port: process.env.WEBPACK_PORT || 3030,
        //     injectChanges: true,
        //     logFileChanges: true,
        //     logPrefix: 'B U I L T ⚡ B R A V E',
        //     notify: true,
        //     reloadDelay: 0,
        //     files: [
        //         {
        //             match: ['**/*.php'],
        //             fn: function () {
        //                 this.reload()
        //             }
        //         },
        //         'dist/styles/**/*',
        //     ],

        // }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
        // new BundleAnalyzerPlugin(),
    ],
});