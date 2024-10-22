import { startBunDevServer } from "bun-dev-server"
import { file } from "bun"
import { bunConfig } from "./bun.config";
startBunDevServer({
    buildConfig: {
        ...bunConfig,
        sourcemap: "linked",

    },
    cleanServePath: true,
    writeManifest: true,
    tls: {
        cert: file("./serve_cert.pem"),
        key: file("./serve_key.pem"),
    },
    port: 33354,
})