import {ViewBase} from "./../../node_modules/crs-binding/crs-view-base.js";
import {getRenderData} from "../menu-toggle-dynamic/data.js";

/**
 * Menu Toggle
 */
export default class MenuToggleDynamic extends ViewBase {
    get data() {
        return this.getProperty("data");
    }

    set data(newValue) {
        this.setProperty("data", newValue);
    }

    async connectedCallback() {
        await super.connectedCallback();
    }

    async disconnectedCallback() {
        await super.disconnectedCallback();
    }

    /**
     * Preload values that are needed to initialise the view
     * @param {*} setPropertyCallback
     */
    async preLoad(setPropertyCallback) {
        this.data = getRenderData();
    }

    /**
     * Load UI after connected
     */
    load() {
        crsbinding.data.updateUI(this, "data");
        super.load();
    }

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

        this.setProperty(`menu.${property}`, true);
        //this.setProperty(`menu.${oldProperty}`, false);
        /*this.setProperty(`menu.${property}`, `menu[${property}}]`);*/
    }


    async
}