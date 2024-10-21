import type { SPFxExtensionAppRegistration } from "@spfx-extensions/core"
import { launchSPFxExtensionApp } from "@spfx-extensions/core/launcher"

const app: SPFxExtensionAppRegistration = {
    id: "6fe5e916-dc68-4454-b9b2-82f24305f0c7",
    name: "Sample App",
    description: "Sample App",
    isWebPartApp: true,
    hideAppSelectorWhenAppLoaded: true,
    async onInstanceRequested(newInstance) {
        const thisModule = await import("./src/app")
        return launchSPFxExtensionApp(thisModule, newInstance);
    },
}

window.__SPFxExtensions.RegisterApp(app);