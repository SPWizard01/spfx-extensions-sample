import type { SPFxExtensionAppRegistration } from "@spfx-extensions/core"
import { launchSPFxExtensionApp } from "@spfx-extensions/core/launcher"

const allDefinitions: SPFxExtensionAppRegistration[] = [
    {
        id: "6fe5e916-dc68-4454-b9b2-82f24305f0c7",
        name: "Sample App",
        description: "Sample App",
        isWebPartApp: true,
        hideAppSelectorWhenAppLoaded: true,
        async onInstanceRequested(newInstance) {
            const thisModule = await import("./src/pnp/app")
            return launchSPFxExtensionApp(thisModule, newInstance);
        },
    },
    {
        id: "6fe5e916-dc68-4454-b9b2-82f24305f0c8",
        name: "But can it run doom?",
        description: "I hope so.",
        isWebPartApp: true,
        hideAppSelectorWhenAppLoaded: false,
        async onInstanceRequested(newInstance) {
            const thisModule = await import("./src/doom/index")
            return launchSPFxExtensionApp(thisModule, newInstance);
        },
    },
    {
        id: "6fe5e916-dc68-4454-b9b2-82f24305f0c9",
        name: "App With Assets",
        description: "Showcases dynamically imported assets.",
        isWebPartApp: true,
        hideAppSelectorWhenAppLoaded: false,
        async onInstanceRequested(newInstance) {
            const thisModule = await import("./src/appwithassets/index")
            return launchSPFxExtensionApp(thisModule, newInstance);
        },
    }
]

allDefinitions.forEach((def) => window.__SPFxExtensions.RegisterApp(def));