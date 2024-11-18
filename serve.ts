import { startBunDevServer } from "bun-dev-server"
import { file } from "bun"
import { bunConfig } from "./bun.config";

startBunDevServer({
    buildConfig: {
        ...bunConfig,
        sourcemap: "linked",
        splitting: true,
        naming: {
            asset: "assets/[name].[ext]",
            chunk: "chunk-[name]-[hash].[ext]",
        },
        target: "bun"
    },
    watchDir: "src",
    enableTypeScriptWatch: true,
    cleanServePath: true,
    writeManifest: false,
    tls: {
        cert: file("./serve_cert.pem"),
        key: file("./serve_key.pem"),
    },
    port: 33354,
})