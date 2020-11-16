import {ViewBase} from "./../../node_modules/crs-binding/crs-view-base.js";

/**
 * Menu Toggle
 */
export default class MenuToggleHcoded extends ViewBase {

    /**
     * Change property value and hide list containing event target
     * @param event
     * @param property
     * @return {Promise<void>}
     */
    async changeValue(event, property) {
        const value = event.target.dataset[property];
        if(value != null) {
            this.setProperty(property, value)
        }

        this.setProperty(`menu.${property}`, !`!menu[${property}}]`);
    }
}