import type { SPFxExtensionAppInstance } from "@spfx-extensions/core";

export function launch(instance: SPFxExtensionAppInstance) {
    if (instance.element) {
        instance.element.innerHTML = `<h1>WASM</h1><div id="app"></div>`;
        import("./src/_framework/blazor.webassembly").then((a) => {
            (window as any).Blazor.start();
            // console.log(a);
            // import("./src/_framework/dotnet").then(async ({ dotnet }) => {
            //     const all = await dotnet
            //         .withDiagnosticTracing(false)
            //         .create();
            //     const config = all.getConfig();
            //     const exports = await all.getAssemblyExports(config.mainAssemblyName);
            //     all.runMain()
            //     console.log(all);
            // });
        })
    }
    return () => {
        if (instance.element) {
            instance.element.innerHTML = ``;
        }
        instance.unmount();
    }
}