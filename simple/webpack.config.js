module.exports = {
    entry: getEntry(),
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'dist/bundle.js'
    },
    devtool: 'eval',
    module: {
        preLoaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                include: /src/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'babel',                  
                    'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    }
};

function getEntry() {
  var entry = [];

  if (process.env.NODE_ENV !== 'production') { //only want hot reloading when in dev.
        entry.push('webpack-dev-server/client?http://localhost:8080');
        entry.push('webpack/hot/only-dev-server');
  }

  entry.push('./app/index.ts');
  return entry;
};