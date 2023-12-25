import {DisplayInterface} from "ctool-config";

class display implements DisplayInterface {
    hideMainWindow(): void {
        window.utools.hideMainWindow()
    }
}

export default new display()
