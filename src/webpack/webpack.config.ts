import { Configuration } from "webpack";
import { resolve } from "path"
import { SPFxExtensionsManifestWriterPlugin } from "@spfx-extensions/core/plugins/webpack"
const config: Configuration = {
    entry: "./index.ts",
    mode: 'development',
    "target": "web",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            compilerOptions: {
                                declaration: false,
                                emitDeclarationOnly: false,
                                allowImportingTsExtensions: false,
                            },
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: "css-loader",
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
        path: resolve('dist'),
        clean: true,
        
    },
    plugins: [new SPFxExtensionsManifestWriterPlugin({ isESM: false, includeAllOutputJs: true })]
};

export default config;