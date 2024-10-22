import type { SPFxExtensionAppInstance } from "@spfx-extensions/core";

export function launch(instance: SPFxExtensionAppInstance) {
    if (instance.element) {
        const fram = document.createElement("iframe");
        fram.style.width = "670px"
        fram.style.height = "470px"
        fram.style.border = "none";
        instance.element.appendChild(fram);
        const doc = fram.contentDocument || fram.contentWindow.document;
        doc.open();

        doc.write(`
        <div id="dosbox"></div>
        <br/>
        <button onclick="dosbox.requestFullScreen();">Make fullscreen</button>
        
        <script type="text/javascript" src="https://js-dos.com/cdn/js-dos-api.js"></script>
        <script type="text/javascript">
        var dosbox = new Dosbox({
            id: "dosbox",
            onload: function (dosbox) {
            dosbox.run("https://js-dos.com/cdn/upload/DOOM-@evilution.zip", "./DOOM/DOOM.EXE");
            },
            onrun: function (dosbox, app) {
            console.log("App '" + app + "' is runned");
            }
        });
        </script>
        `);
        doc.close();
 
    }
    return () => {
        if (instance.element) {
            instance.element.innerHTML = ``;
        }
        instance.unmount();
    }
}