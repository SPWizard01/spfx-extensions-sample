import { $ } from "bun";
import { analyzeMetafile, context } from "esbuild";
import { manifestPlugin } from "@spfx-extensions/core/plugins/esbuild"
import { typecheckPlugin } from "@jgoz/esbuild-plugin-typecheck"
await $`rm -rf dist`;

const ctx = await context({
    entryPoints: ["./src/allApps.ts"],
    entryNames: "[name]",
    sourcemap: "linked",
    outdir: "./dist",
    platform: "browser",
    format: "esm",
    bundle: true,
    treeShaking: true,
    loader: {
        ".jpg": "file",
    },
    define: {
        "BUILD_DATE": JSON.stringify(new Date().toISOString()),
    },
    logOverride: {
        'direct-eval': 'silent',
    },
    metafile: true,
    plugins: [
 //       typecheckPlugin(),
        manifestPlugin({ isESM: true, includeAllOutputJs: true })
    ]
})

await ctx.watch()

const { port, host } = await ctx.serve({
    servedir: "./dist",
    certfile: "./serve_cert.pem",
    keyfile: "./serve_key.pem",
    port: 33354,
    onRequest(args) {
        console.log(args.path, args.status)
    },
})
console.log(`Serving on ${host}:${port}`)