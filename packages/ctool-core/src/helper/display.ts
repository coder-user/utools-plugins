import { DisplayInterface} from "@/types";
import platform from './platform';

class DisplayObject {
    private readonly _handle: DisplayInterface;

    constructor(handle: DisplayInterface) {
        this._handle = handle;
    }

    get handle(): DisplayInterface {
        return this._handle;
    }

    hideMainWindow(): void {
        this.handle.hideMainWindow();
    }
}

export const display = new DisplayObject(platform.runtime.display)
