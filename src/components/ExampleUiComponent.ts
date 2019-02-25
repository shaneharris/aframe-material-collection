import {Component, Entity} from "aframe";
import {ComponentControllerDefinition} from "aframe-typescript-boilerplate/built";
import {UiComponent} from "./UiComponent";

export class ExampleUiComponent extends UiComponent {

    public static DEFINITION = new ComponentControllerDefinition(
        /* Name */ "example",
        /* Schema */ {},
        /* Multiple */ false,
        /* Receive ticks */ false,
        /* Factory function */ (component: Component, entity: Entity, data: any) =>
            new ExampleUiComponent(component, entity, data));

    constructor(component: Component, entity: Entity, data: any) {
        super(component, entity, data);
    }

    init(): void {
        console.log("example ui component init.");
    }

}