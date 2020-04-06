import { SpecPage } from '@stencil/core/testing';
import { defaultContext, defaultPlatform } from './platform';

export interface ComponentProps {
    [name: string]: any;
}

export interface ComponentListeners {
    [name: string]: (event: CustomEvent<any>) => void;
}

export interface ComponentConfig {
    /**
     * The props to give the component
     */
    props?: ComponentProps;

    /**
     * Any listeners to attach to the component
     */
    listeners?: ComponentListeners;

    /**
     * A list of elements to append to the created component before it's inserted into the DOM
     */
    children?: HTMLElement[];
}

const DESTROY_FUNCTION_NAME = '__removeListeners';

/**
 * Create a new component
 *
 * @param {SpecPage} page the page to create the component on
 * @param {string} name the name of the component
 * @param {ComponentConfig} config component configuration
 *
 * @returns {HTMLElement} the component
 */
export function createComponent(
    page: SpecPage,
    name: string,
    config: ComponentConfig = {}
): HTMLElement {
    const element = page.doc.createElement(name);
    const props = config.props || {};
    const listeners = config.listeners || {};
    const children = config.children || [];

    setDefault(props);
    addProps(props, element);
    addListeners(listeners, element);
    addChildren(element, children);

    element[DESTROY_FUNCTION_NAME] = () => {
        removeListeners(listeners, element);
    };

    page.body.appendChild(element);

    return element;
}

/**
 * Destroy a component that was created by the `createComponent` function
 *
 * @param {HTMLElement} component the component to destroy
 *
 * @returns {void}
 */
export function destroyComponent(component: HTMLElement): void {
    if (!component) {
        return;
    }

    if (!(DESTROY_FUNCTION_NAME in component)) {
        return;
    }

    component[DESTROY_FUNCTION_NAME]();
}

/**
 * Sets a default props on the component
 *
 * Will set a default platform and context if not already set
 *
 * @param {ComponentProps} props the component props
 *
 * @returns {void}
 */
function setDefault(props: ComponentProps) {
    if (!('platform' in props)) {
        props.platform = defaultPlatform;
    }

    if (!('context' in props)) {
        props.context = defaultContext;
    }
}

/**
 * Add properties to a web component
 *
 * @param {ComponentProps} props the properties to set
 * @param {HTMLElement} component the web component
 *
 * @returns {void}
 */
function addProps(props: ComponentProps, component: HTMLElement): void {
    Object.entries(props).forEach(([key, value]) => {
        component[key] = value;
    });
}

/**
 * Add event listeners to a web component
 *
 * @param {ComponentListeners} listeners the events to listen to
 * @param {HTMLElement} component the web component
 *
 * @returns {void}
 */
function addListeners(
    listeners: ComponentListeners,
    component: HTMLElement
): void {
    Object.entries(listeners).forEach(([key, value]) => {
        component.addEventListener(key, value);
    });
}

/**
 * Remove event listeners from a web component
 *
 * @param {ComponentListeners} listeners the events to listen to
 * @param {HTMLElement} component the web component
 *
 * @returns {void}
 */
function removeListeners(
    listeners: ComponentListeners,
    component: HTMLElement
): void {
    Object.entries(listeners).forEach(([key, value]) => {
        component.removeEventListener(key, value);
    });
}

/**
 * Appends children to an html element
 *
 * @param {HTMLElement} parent the parent element
 * @param {HTMLElement[]} children the child elements to add
 *
 * @returns {void}
 */
function addChildren(parent: HTMLElement, children: HTMLElement[] = []): void {
    [].slice.call(children).forEach(child => {
        parent.appendChild(child);
    });
}
