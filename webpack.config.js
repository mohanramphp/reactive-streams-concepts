const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'simple-stream-example': './src/simple-stream-example.ts',
        'interval-stream-example': './src/interval-stream-example.ts',
        'stream-operators-example':'./src/stream-operators-example.ts',
        'subject-example':'./src/subject-example.ts',
        'behavior-subject-example':'./src/behavior-subject-example.ts',
        'replay-subject-example':'./src/replay-subject-example.ts',
        'async-subject-example':'./src/async-subject-example.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
      }
};