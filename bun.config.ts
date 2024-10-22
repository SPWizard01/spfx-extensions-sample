import type { BuildConfig } from "bun";
import dynamicPathPlugin from "bun-dynamic-path";
import styleLoader from "bun-style-loader";
export const bunConfig: BuildConfig = {
    entrypoints: ["./index.ts"],
    naming: {
        asset: "assets/[name].[ext]"
    },
    outdir: "dist",
    define: {
        "BUILD_DATE": JSON.stringify(new Date().toISOString()),
    },
    plugins: [
        styleLoader(), 
        dynamicPathPlugin({ fileExtensions: ["jpg"], includeHash: true })
    ]
}