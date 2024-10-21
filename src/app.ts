import type { SPFxExtensionAppInstance } from "@spfx-extensions/core";

/**
 * Required function to launch the app
 * @param instance will be provided by the SPFx Extensions framework
 * @returns 
 */
export function launch(instance: SPFxExtensionAppInstance) {
    if(instance.element) {
        instance.element.innerHTML = `App launched asdasdasd asda`;
    }
    const cfg = instance.getConfigValue?.();
    console.log("Config value", cfg);
    const renderCleanup = instance.addEventListener("onConfigurationRender", (pane)=>{
        pane.domElement.innerHTML = `<button>Click me</button>`;
        instance.saveConfigValue?.({type: "asdasd", value: "asdasd"});
    })
    const cleanup =instance.addEventListener("onDisplayModeChange", (e) => {
        console.log("Display mode changed", e);
    })
    return () => {
        renderCleanup();
        cleanup();
        instance.unmount();
    }
}