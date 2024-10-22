import asseturl from './assets/blueprint.jpg';

import type { SPFxExtensionAppInstance } from "@spfx-extensions/core";

export function launch(instance: SPFxExtensionAppInstance) {
    if (instance.element) {
        console.log(asseturl); // prints 'blueprint.jpg'
    }
    return () => {
        if (instance.element) {
            instance.element.innerHTML = ``;
        }
        instance.unmount();
    }
}