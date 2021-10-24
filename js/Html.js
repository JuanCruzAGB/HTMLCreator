// ? JuanCruzAGB repository
import Class from '../../JuanCruzAGB/js/Class.js';

// ? HTMLCreator repository
import HTMLCreator from './HTMLCreator.js';

/**
 * * Html controls a class object.
 * @export
 * @class Html
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Class
 */
 export default class Html extends Class {
    /**
     * * Creates an instance of Html.
     * @param {object} [props] Html properties.
     * @param {object} [state] Html state.
     * @param {object} [callbacks] Html callbacks.
     * @param {array} [children] Html children.
     * @memberof Html
     */
    constructor (props = {}, state = {}, callbacks = {}, children = []) {
        super({ ...props }, { ...state });
        this.setCallbacks({ ...callbacks });
        this.children = children;
    }

    /**
     * * Set a HTML Element attribute.
     * @param {string|array} name Attribute name
     * @param {string|boolean} value Attribute value
     * @memberof Html
     */
    setAttribute (name, value) {
        if (name !== undefined && value !== undefined) {
            switch (typeof name) {
                case 'object':
                    for (const attribute of name) {
                        if (typeof attribute.value !== 'boolean') {
                            this.html.setAttribute(attribute.name, attribute.value);
                        }
                        if (typeof attribute.value === 'boolean' && value) {
                            this.html.setAttribute(name, '');
                        }
                    }
                    break;
                default:
                    if (typeof value !== 'boolean') {
                        this.html.setAttribute(name, value);
                    }
                    if (typeof value === 'boolean' && value) {
                        this.html.setAttribute(name, '');
                    }
                    break;
            }
        }
        if (name === undefined) {
            console.error('HTML Element attribute name is required');
        }
        if (value === undefined) {
            console.error(`HTML Element attribute value is required`);
        }
    }

    /**
     * * Removes a HTML Element attribute.
     * @param {string|array} name Attribute name
     * @memberof Html
     */
    removeAttribute (name) {
        if (name !== undefined) {
            switch (typeof name) {
                case 'object':
                    for (const attribute of name) {
                        if (this.html.hasAttribute(attribute)) {
                            this.html.removeAttribute(attribute);
                        }
                    }
                    break;
                default:
                    if (this.html.hasAttribute(name)) {
                        this.html.removeAttribute(name);
                    }
                    break;
            }
        }
        if (name === undefined) {
            console.error('HTML Element attribute name is required');
        }
    }

    /**
     * * Creates the HTML Element.
     * @param {string} [nodeName='DIV']
     * @memberof Html
     */
    createHTML (nodeName = 'DIV') {
        this.setHTML(document.createElement(nodeName.toUpperCase()));
        if (this.hasProp('id') && (this.hasState('id') && this.state.id)) {
            this.html.id = this.props.id;
        }
        if (this.hasProp('dataset')) {
            for (const key in this.props.dataset) {
                if (Object.hasOwnProperty.call(this.props.dataset, key)) {
                    const value = this.props.dataset[key];
                    this.html.setAttribute(`data-${ key }`, value);
                }
            }
        }
        if (this.hasProp('classList')) {
            for (const className of this.props.classList) {
                this.html.classList.add(className);
            }
        }
        if (this.hasOwnProperty('children')) {
            for (const key in this.children) {
                if (Object.hasOwnProperty.call(this.children, key)) {
                    let child = this.children[key];
                    if (typeof child == 'string' || child instanceof HTMLElement) {
                        this.html.appendChild(child);
                    }
                    if (child instanceof Object && Array.isArray(child)) {
                        this.children[key] = new HTMLCreator(...child);
                        child = this.children[key];
                    }
                    if (child instanceof Html) {
                        this.html.appendChild(child.html);
                    }
                }
            }
        }
    }

    /**
     * * Removes the HTML Element.
     * @memberof Html
     */
    removeHTML () {
        const parentNode = this.html.parentNode;
        parentNode.removeChild(this.html);
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} HTML New child.
     * @memberof Html
     */
    appendChild (HTML = false) {
        if (typeof HTML === 'object') {
            this.html.appendChild(HTML);
        }
        if (typeof HTML === 'string') {
            this.html.innerHTML = HTML;
        }
        if (typeof HTML === 'boolean') {
            console.error('HTML Element child is required');
        }
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof Html
     */
    insertBefore(newHTML = false, oldHTML = false) {
        if (newHTML && oldHTML) {
            this.html.insertBefore(newHTML, oldHTML);
        }
        if (!newHTML) {
            console.error('HTML Element old child is required');
        }
        if (!oldHTML) {
            console.error('HTML Element new child is required');
        }
    }

    /**
     * * Removes an HTML Element.
     * @param {HTMLElement} HTML Child.
     * @memberof Html
     */
    removeChild (HTML = false) {
        if (HTML) {
            this.html.removeChild(HTML);
        }
        if (!HTML) {
            console.error('HTML Element child is required');
        }
    }

    /**
     * * Switch a state.
     * @param {string} name State name
     * @memberof Html
     */
    switch (name = false) {
        if (name) {
            if (this.hasState(name)) {
                this.setState(name, !name);
            }
            if (this.html.hasAttribute(name)) {
                this.html.setAttribute(name, !this.html.getAttribute(name));
            }
        }
        if (!name) {
            console.error('State name is required');
        }
    }

    /**
     * * Html change callback.
     * @param {*} [params={}] Change callback function optional params
     * @memberof Html
     */
    change (params = {}) {
        this.execute('change', {
            ...this.callbacks.change.params,
            ...params,
            Html: this,
        });
    }

    /**
     * * Html click callback.
     * @param {*} [params={}] Click callback function optional params
     * @memberof Html
     */
    click (params = {}) {
        this.execute('click', {
            ...this.callbacks.click.params,
            ...params,
            Html: this,
        });
    }

    /**
     * * Html focus out callback.
     * @param {*} [params={}] Foucout callback function optional params
     * @memberof Html
     */
    focusout (params = {}) {
        this.execute('focusout', {
            ...this.callbacks.focusout.params,
            ...params,
            Html: this,
        });
    }

    /**
     * * Html submit callback.
     * @param {*} [params={}] Submit callback function optional params
     * @memberof Html
     */
    submit (params = {}) {
        this.execute('submit', {
            ...this.callbacks.submit.params,
            ...params,
            Html: this,
        });
    }
}