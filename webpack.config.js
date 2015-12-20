module.exports = {
    entry: getEntrySources(['./app/index.ts']),
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
                    'react-hot',
                    'babel?presets[]=es2015',                  
                    'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    }
};

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}