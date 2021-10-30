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
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {array} [data.props.classList] Html class list.
     * @param {object} [data.props.dataset] Html data attributes.
     * @param {string} [data.props.nodeName='DIV'] Html node name.
     * @param {string} [data.props.id='html-1'] Html primary key.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {boolean} [data.state.preventDefault=false] If the Html events should prevent default.
     * @param {boolean} [data.state.stopPropagation=false] If the Html events should stop propagation.
     * @param {object} [data.callbacks]
     * @param {array} [data.children] Html children.
     * @param {HTMLElement|false} [data.parentNode] Parent Html Element.
     * @memberof Html
     */
    constructor (data = {
        props: {
            classList: [],
            dataset: {},
            nodeName: 'DIV',
            id: 'html-1',
        }, state: {
            id: false,
            preventDefault: false,
            stopPropagation: false,
        }, callbacks: {},
        children: [],
        parentNode: false,
    }) {
        super({ ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...((data && data.hasOwnProperty('state')) ? data.state : {}) });
        this.setCallbacks({ ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) });
        this.children = (data && data.hasOwnProperty('children')) ? data.children : [];
        this.parentNode = (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false;
    }

    /**
     * * Returns the Html class list.
     * @readonly
     * @returns {array}
     * @memberof Html
     */
    get classList () {
        return this.props.classList;
    }

    /**
     * * Saves the Html class list.
     * @param {array} [classList]
     * @memberof Html
     */
    set classList (classList = []) {
        this.setProps('classList', classList);
        this.html.classList = '';
        for (const className of this.props.classList) {
            this.html.classList.add(className);
        }
    }

    /**
     * * Returns the Html primary key.
     * @readonly
     * @returns {string}
     * @memberof Html
     */
    get id () {
        return this.props.id;
    }

    /**
     * * Saves the Html primary key.
     * @param {string} [id]
     * @memberof Html
     */
    set id (id = 'html-1') {
        this.setProps('id', id);
        if (this.state.id) {
            this.html.id = id;
        }
    }

    /**
     * * Saves the Html CSS style.
     * @param {object} [style]
     * @memberof Html
     */
    set style (style = {}) {
        for (const name in style) {
            if (Object.hasOwnProperty.call(style, name)) {
                this.html.style[name] = style[name];
            }
        }
    }

    /**
     * * Set a HTML Element attribute.
     * @param {string|array} name Attribute name
     * @param {string|boolean} value Attribute value
     * @memberof Html
     */
    setAttribute (name, value) {
        if (name != undefined && value != undefined) {
            switch (typeof name) {
                case 'object':
                    for (const attribute of name) {
                        if (typeof attribute.value != 'boolean') {
                            if (!this.html.hasAttribute(name)) {
                                this.html.setAttribute(attribute.name, attribute.value);
                            } else {
                                this.html[name] = value;
                            }
                        }
                        if (typeof attribute.value == 'boolean' && value) {
                            if (!this.html.hasAttribute(name)) {
                                this.html.setAttribute(name, '');
                            } else {
                                this.html[name] = true;
                            }
                        }
                    }
                    break;
                default:
                    if (typeof value != 'boolean') {
                        if (!this.html.hasAttribute(name)) {
                            this.html.setAttribute(name, value);
                        } else {
                            this.html[name] = value;
                        }
                    }
                    if (typeof value == 'boolean' && value) {
                        if (!this.html.hasAttribute(name)) {
                            this.html.setAttribute(name, '');
                        } else {
                            this.html[name] = true;
                        }
                    }
                    break;
            }
        }
        if (name == undefined) {
            console.error('HTML Element attribute name is required');
        }
        if (value == undefined) {
            console.error(`HTML Element attribute value is required`);
        }
    }

    /**
     * * Removes a HTML Element attribute.
     * @param {string|array} name Attribute name
     * @memberof Html
     */
    removeAttribute (name) {
        if (name != undefined) {
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
        if (name == undefined) {
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
            this.setAttribute('id', this.props.id);
        }
        if (this.hasProp('dataset')) {
            for (const key in this.props.dataset) {
                if (Object.hasOwnProperty.call(this.props.dataset, key)) {
                    const value = this.props.dataset[key];
                    this.setAttribute(`data-${ key }`, value);
                }
            }
        }
        if (this.hasProp('style')) {
            for (const name in this.props.style) {
                if (Object.hasOwnProperty.call(this.props.style, name)) {
                    this.html.style[name] = this.props.style[name];
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
                    if (child instanceof Html) {
                        this.html.appendChild(child.html);
                    }
                    if (child instanceof Object && Array.isArray(child)) {
                        if (child.length == 2 && !child[1].hasOwnProperty('props')) {
                            child[1].props = {};
                        }
                        if (!child[1].props.hasOwnProperty('id')) {
                            child[1].props.id = `${ this.props.id }-child-${ parseInt(key) + 1 }`;
                        }
                        child[1].parentNode = this.html;
                        this.children[key] = new HTMLCreator(...child);
                        child = this.children[key];
                    }
                }
            }
        }
        for (const name in this.callbacks) {
            if (Object.hasOwnProperty.call(this.callbacks, name)) {
                this.setEventListener(name, this.callbacks[name]);
            }
        }
        if (this.parentNode) {
            this.parentNode.appendChild(this.html);
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
        if (typeof HTML == 'object') {
            this.html.appendChild(HTML);
        }
        if (typeof HTML == 'string') {
            this.html.innerHTML = HTML;
        }
        if (typeof HTML == 'boolean') {
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

    getChild (nodeName = 'DIV', id = false) {
        let child = false, found = false;
        let html = this.html;
        console.log(html.children);
        while (html.children.length && !found) {
            for (child of html.children) {
                if (id) {
                    if (child.nodeName == nodeName && child.id == id) {
                        found = true;
                    }
                } else {
                    if (child.nodeName == nodeName) {
                        found = true;
                    }
                }
                if (found) {
                    break;
                } else {
                    child = false;
                }
            }
            found = true;
        }
        return child;
    }

    /**
     * * Set an Html event listener.
     * @param {string} [name='click']
     * @memberof Html
     */
    setEventListener (name = 'click') {
        if (!this[name]) {
            console.error(`${ name } callback event is not supported`);
            return false;
        }
        this.html.addEventListener(name, (e) => {
            if (this.hasState('preventDefault') && this.state.preventDefault) {
                e.preventDefault();
            }
            if (this.hasState('stopPropagation') && this.state.stopPropagation) {
                e.stopPropagation();
            }
            this[name]();
        });
        return true;
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
     * * Html blur callback.
     * @param {*} value
     * @param {*} [params={}] Blur callback function optional params
     * @memberof Html
     */
    blur (params = {}) {
        this.execute('blur', {
            ...this.callbacks.blur.params,
            ...params,
            Html: this,
        });
    }

    /**
     * * Html change callback.
     * @param {*} [params={}] Change callback function optional params
     * @memberof Html
     */
    change (params = {}) {
        switch (this.props.nodeName.toUpperCase()) {
            case 'INPUT':
            case 'SELECT':
            case 'TEXTAREA':
                switch (this.props.type.toUpperCase()) {
                    case 'DATE':
                    case 'NUMBER':
                    case 'PASSWORD':
                    case 'TEXT':
                    case 'TEXTAREA':
                        this.setProps('prevValue', this.props.value);
                        this.setProps('value', this.html.value);
                        params.value = this.html.value;
                        break;
                    case 'CHECKBOX':
                        this.setState('checked', this.html.checked);
                        params.checked = {
                            [this.html.name]: this.html.checked
                        };
                        break;
                    case 'FILE':
                        this.setProps('files', this.html.files);
                        params.files = this.html.files;
                        break;
                    case 'RADIO':
                        this.setState('checked', this.html.checked);
                        params.checked = this.html.name;
                        break;
                    case 'SELECT':
                        this.setState('selectedIndex', {
                            index: this.html.selectedIndex,
                            option: this.options[this.html.selectedIndex],
                        });
                        params.selected = {
                            index: this.html.selectedIndex,
                            option: this.options[this.html.selectedIndex],
                        };
                        break;
                    default:
                        console.error(`Input type ${ this.props.type } is not supported`);
                        break;
                }
                break;
        }
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
     * * Html dblclick callback.
     * @param {*} [params={}] Double click callback function optional params
     * @memberof Html
     */
    dblclick (params = {}) {
        this.execute('dblclick', {
            ...this.callbacks.dblclick.params,
            ...params,
            Html: this,
        });
    }

    /**
     * * Html focus in callback.
     * @param {*} value
     * @param {*} [params={}] Foucin callback function optional params
     * @memberof Html
     */
    focusin (params = {}) {
        this.execute('focusin', {
            ...this.callbacks.focusin.params,
            ...params,
            Html: this,
        });
    }

    /**
     * * Html focus out callback.
     * @param {*} value
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