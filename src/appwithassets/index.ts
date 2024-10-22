import asseturl from './assets/blueprint.jpg';
import cssText from "./styles.css";
import type { SPFxExtensionAppInstance } from "@spfx-extensions/core";

export function launch(instance: SPFxExtensionAppInstance) {
    if (instance.element) {
        console.log(asseturl); // prints 'blueprint.jpg'
        console.log("CSS", cssText);
    }
    return () => {
        if (instance.element) {
            instance.element.innerHTML = ``;
        }
        instance.unmount();
    }
}