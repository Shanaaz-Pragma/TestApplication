import {ViewBase} from "./../../node_modules/crs-binding/crs-view-base.js";
import {getRenderData} from "./data.js";

/**
 * Simple Array
 */
export default class Inflation extends ViewBase {
    async connectedCallback() { 
        await super.connectedCallback();

        const template = this._element.querySelector("#items-template");
        crsbinding.inflationManager.register("items", template);

        const fragment = crsbinding.inflationManager.get("items", getRenderData());
        const container = this._element.querySelector(".container");
        container.appendChild(fragment);
        this._element.querySelector("#container").appendChild(container);
    }

    async disconnectedCallback() {
        crsbinding.inflationManager.unregister("items", template);
        await super.disconnectedCallback();
    }

}