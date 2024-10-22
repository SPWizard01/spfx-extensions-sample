import { build, $ } from "bun"
import styleLoader from "bun-style-loader";
import dynamicPathPlugin from "bun-dynamic-path";
import { bunConfig } from "./bun.config";
await $`rm -rf dist`
// await $`tsc`
const result = await build({
    ...bunConfig
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