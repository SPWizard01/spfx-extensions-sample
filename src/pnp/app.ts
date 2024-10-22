import { type SPFxExtensionAppInstance } from "@spfx-extensions/core";
import { spfi, SPFx } from "@pnp/sp"
import { getSPFiCompatibleContextAsync } from "@spfx-extensions/core/context";
import "@pnp/sp/webs";
import styles from "./styles.css";
console.log("Styles", styles);

const ctx = await getSPFiCompatibleContextAsync();

const sp = spfi().using(SPFx({ pageContext: ctx }));
/**
 * Required function to launch the app
 * @param instance will be provided by the SPFx Extensions framework
 * @returns 
 */
export function launch(instance: SPFxExtensionAppInstance) {
    if (instance.element) {
        instance.element.innerHTML = `App launched asdasdasd asda`;
    }
    sp.web().then((web) => { console.log("Web", web) });
    const cfg = instance.getConfigValue?.();
    console.log("Config value", cfg);
    const renderCleanup = instance.addEventListener("onConfigurationRender", (pane) => {
        pane.domElement.innerHTML = `<button>Click me</button>`;
        instance.saveConfigValue?.({ type: "asdasd", value: "asdasd" });
    })
    const cleanup = instance.addEventListener("onDisplayModeChange", (e) => {
        console.log("Display mode changed", e);
    })
    return () => {
        renderCleanup();
        cleanup();
        instance.unmount();
    }
}