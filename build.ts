import { build, $ } from "bun"

await $`rm -rf dist`
await $`tsc`
const result = await build({
    entrypoints: ["./index.ts"],
    outdir: "dist"
})
if (result.success) {
    console.table(result.outputs.map((output) => ({
        path: output.path,
        size: `${Math.floor(output.size / 1024)}KB`,
    }))
    );

} else {
    console.error(result.logs);
}