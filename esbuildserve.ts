import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
    entryPoints: ["./index.ts"],
    outdir: "./dist",
    bundle: true,
    mangleQuoted: false,
    keepNames: true,
    platform: "browser",
    format: "esm"
})

let { host, port } = await ctx.serve({
    certfile: './serve_cert.pem',
    keyfile: './serve_key.pem',
    port: 33354,
    servedir: 'dist',
})