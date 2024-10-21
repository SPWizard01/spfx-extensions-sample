import type { SPFxExtensionAppInstance } from "@spfx-extensions/core";

export function launch(instance: SPFxExtensionAppInstance) {
    console.log("App launched");
    return () => {
        instance.unmount();
    }
}