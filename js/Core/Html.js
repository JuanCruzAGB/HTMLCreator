// ? JuanCruzAGB repository
import Class from "juancruzagb/src/js/Class";

// ? HTMLCreator repository
import Creator from "juancruzagb/HTMLCreatorJS/js/Creator";

// ? Core
import Attribute from "juancruzagb/HTMLCreatorJS/js/Core/Attribute";
import ClassName from "juancruzagb/HTMLCreatorJS/js/Core/ClassName";
import Dataset from "juancruzagb/HTMLCreatorJS/js/Core/Dataset";
import Style from "juancruzagb/HTMLCreatorJS/js/Core/Style";

/**
 * * Html controls a class object.
 * @export
 * @class Html
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
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
        super({
            props: {
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            },
        });
        this.setCallbacks({
            ...Html.callbacks,
            ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
        });
        if (this.hasProp('nodeName')) {
            this.create();
        }
        this.setChildren((data && data.hasOwnProperty('children')) ? data.children : []);
        this.setParent((data && data.hasOwnProperty('parentNode')) ? data.parentNode : false);
    }

    /**
     * * Set an Html Attributes.
     * @param {string|array} name Attribute name.
     * @param {string|boolean} value Attribute value.
     * @memberof Html
     */
    setAttribute (name, value) {
        if (!this.attributes) {
            this.attributes = [];
        }
        if (name != undefined && value != undefined) {
            let attributes = {};
            if (typeof name == 'string') {
                attributes[name] = value;
            }
            if (name && name instanceof Object && !Array.isArray(name)) {
                attributes = name;
            }
            for (name in attributes) {
                if (Object.hasOwnProperty.call(attributes, name)) {
                    let attribute = new Attribute({
                        props: {
                            id: `attribute-${ this.attributes.length + 1 }`,
                            name: name,
                            value: attributes[name],
                        }, html: this.html,
                    });
                    attribute.set();
                    this.attributes.push(attribute);
                }
            }
        }
        if (name == undefined) {
            console.error('Html Element attribute name is required');
        }
        if (value == undefined) {
            console.error(`Html Element attribute value is required`);
        }
    }

    /**
     * * Check if the Html has an Attribute.
     * @param {string|array} name Attribute name.
     * @param {*} [value=false] Attribute value.
     * @returns {boolean}
     * @memberof Html
     */
    hasAttribute (name, value = false) {
        if (name != undefined) {
            for (let attribute of this.attributes) {
                if (attribute.props.name == name) {
                    if (value) {
                        if (attribute.props.value == value) {
                            return true;
                        }
                    } else {
                        return true;
                    }
                }
            }
            return false;
        }
        if (name == undefined) {
            console.error('Html Element attribute name is required');
        }
    }

    /**
     * * Removes an Html Attributes.
     * @param {string|array} name Attribute name.
     * @memberof Html
     */
    removeAttribute (name) {
        if (name != undefined) {
            for (const attribute of this.attributes) {
                if (attribute.props.name == name) {
                    attribute.remove();
                }
            }
        }
        if (name == undefined) {
            console.error('Html Element attribute name is required');
        }
    }

    /**
     * * Set an Html class list.
     * @param {string|array} classList
     * @memberof Html
     */
    setClassList (classList = []) {
        if (!this.classList) {
            this.classList = {};
        }
        if (typeof classList == 'string' || Array.isArray(classList)) {
            if (typeof classList == 'string') {
                classList = [
                    classList,
                ];
            }
            for (let className of classList) {
                className = new ClassName({
                    props: {
                        id: `className-${ Object.keys(this.classList).length + 1 }`,
                        value: className,
                    }, html: this.html,
                });
                className.set();
                this.classList[className.props.value] = className;
            }
        } else {
            console.error('Html Element class name is required');
        }
    }

    /**
     * * Check if the Html has a ClassName.
     * @param {string|array} value ClassName value.
     * @returns {boolean}
     * @memberof Html
     */
    hasClassName (value) {
        if (value != undefined) {
            for (const key in this.classList) {
                if (Object.hasOwnProperty.call(this.classList, key)) {
                    const className = this.classList[key];
                    if (className.props.value == value) {
                        return true;
                    }
                }
                return false;
            }
        }
        if (value == undefined) {
            console.error('Html Element class name value is required');
        }
    }

    /**
     * * Saves the Html children.
     * @param {array} children
     * @memberof Html
     */
    setChildren (children = []) {
        if (!this.children) {
            this.children = [];
        }
        for (const child of children) {
            this.appendChild(child);
        }
    }

    /**
     * * Set an Html dataset.
     * @param {string|array} name Data name.
     * @param {string|boolean} value Data value.
     * @memberof Html
     */
    setDataset (name, value) {
        if (!this.dataset) {
            this.dataset = [];
        }
        if (name != undefined && value != undefined) {
            let dataset = {};
            if (typeof name == 'string') {
                dataset[name] = value;
            }
            if (name && name instanceof Object && !Array.isArray(name)) {
                dataset = name;
            }
            for (name in dataset) {
                if (Object.hasOwnProperty.call(dataset, name)) {
                    let data = new Dataset({
                        props: {
                            id: `data-${ this.dataset.length + 1 }`,
                            name: name,
                            value: dataset[name],
                        }, html: this.html,
                    });
                    data.set();
                    this.dataset.push(data);
                }
            }
        }
        if (name == undefined) {
            console.error('Html Element data name is required');
        }
        if (value == undefined) {
            console.error(`Html Element data value is required`);
        }
    }

    /**
     * * Saves the Html parent node.
     * @param {HTMLElement|Html} parentNode
     * @memberof Html
     */
    setParent (parentNode) {
        if (parentNode instanceof HTMLElement) {
            parentNode.appendChild(this.html);
        }
        if (parentNode instanceof Html) {
            parentNode.appendChild(this.html);
        }
        if (Array.isArray(parentNode)) {
            console.warn('Parent constructor is not supported yet.');
        }
        this.parentNode = parentNode;
    }

    /**
     * * Set an Html style.
     * @param {string|array} name Style name.
     * @param {string|boolean} value Style value.
     * @memberof Html
     */
    setStyle (name, value) {
        if (!this.style) {
            this.style = [];
        }
        if (name != undefined && value != undefined) {
            let styles = {};
            if (typeof name == 'string') {
                styles[name] = value;
            }
            if (name && name instanceof Object && !Array.isArray(name)) {
                styles = name;
            }
            for (name in styles) {
                if (Object.hasOwnProperty.call(styles, name)) {
                    let style = new Style({
                        props: {
                            id: `style-${ this.style.length }`,
                            name: name,
                            value: styles[name],
                        }, html: this.html,
                    });
                    style.set();
                    this.style.push(style);
                }
            }
        }
        if (name == undefined) {
            console.error('Html Element style name is required');
        }
        if (value == undefined) {
            console.error(`Html Element style value is required`);
        }
    }

    /**
     * * Creates the Html Element.
     * @memberof Html
     */
    create () {
        this.setHTML(document.createElement(this.props.nodeName.toUpperCase()));
        if (this.hasProp('id') && this.hasState('id') && this.state.id) {
            this.setAttribute('id', this.props.id);
        }
        if (this.hasProp('classList') && this.props.classList.length) {
            this.setClassList(this.props.classList);
        }
        if (this.hasProp('dataset') && this.props.dataset.length) {
            this.setDataset(this.props.dataset);
        }
        if (this.hasProp('styles') && this.props.styles.length) {
            this.setStyles(this.props.styles);
        }
        for (const name in this.callbacks) {
            if (Object.hasOwnProperty.call(this.callbacks, name)) {
                this.setEventListener(name, this.callbacks[name]);
            }
        }
    }

    /**
     * * Removes the Html Element.
     * @memberof Html
     */
    remove () {
        this.parentNode.removeChild(this.html);
    }

    /**
     * * Append an Html Element.
     * @param {string|HTMLElement} HTML New child.
     * @memberof Html
     */
    appendChild (child = false) {
        if (!this.children) {
            this.children = [];
        }
        if (typeof child == 'string') {
            this.html.innerText = child;
        }
        if (child instanceof HTMLElement) {
            this.html.appendChild(child);
        }
        if (child instanceof Object && Array.isArray(child)) {
            if (child.length == 1) {
                child.push({});
            }
            if (child.length == 2 && !child[1].hasOwnProperty('props')) {
                child[1].props = {};
            }
            if (!child[1].props.hasOwnProperty('id')) {
                child[1].props.id = `${ this.props.id }-child-${ this.children.length + 1 }`;
            }
            if (!child[1].hasOwnProperty('parentNode')) {
                child[1].parentNode = this.html;
            }
            child = new Creator(...child);
        }
        if (child instanceof Html) {
            this.html.appendChild(child.html);
        }
        this.children.push(child);
    }

    /**
     * * Insert an Html Element before another.
     * @param {HTMLElement} newChild New child.
     * @param {HTMLElement} oldChild New child.
     * @memberof Html
     */
    insertBefore (newChild = false, oldChild = false) {
        // TODO
        console.warn('Insert before is not supported yet.');
    }

    /**
     * * Removes an Html Element.
     * @param {HTMLElement} child Child.
     * @memberof Html
     */
    removeChild (child = false) {
        // TODO
        console.warn('Remoce child is not supported yet.');
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
     * * Active the Html.
     * @param {*} [params={}] Active callback function optional params.
     * @memberof Html
     */
    active (params = {}) {
        this.setState('active', true);
        if (!this.hasClassName('active')) {
            this.setClassList(['active']);
        }
        this.classList.active.set();
        this.execute('active', {
            ...this.hasCallback('active') ? this.callbacks.active.params : {},
            ...params,
            Html: this,
        });
    }

    /**
     * * Switch a state.
     * @param {string} name State name.
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
     * @param {*} [params={}] Blur callback function optional params.
     * @memberof Html
     */
    blur (params = {}) {
        this.execute('blur', {
            ...this.hasCallback('blur') ? this.callbacks.blur.params : {},
            ...params,
            Html: this,
        });
    }

    /**
     * * Html change callback.
     * @param {*} [params={}] Change callback function optional params.
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
            ...this.hasCallback('change') ? this.callbacks.change.params : {},
            ...params,
            Html: this,
        });
    }

    /**
     * * Html click callback.
     * @param {*} [params={}] Click callback function optional params.
     * @memberof Html
     */
    click (params = {}) {
        this.execute('click', {
            ...this.hasCallback('click') ? this.callbacks.click.params : {},
            ...params,
            Html: this,
        });
    }

    /**
     * * Html dblclick callback.
     * @param {*} [params={}] Double click callback function optional params.
     * @memberof Html
     */
    dblclick (params = {}) {
        this.execute('dblclick', {
            ...this.hasCallback('dblclick') ? this.callbacks.dblclick.params : {},
            ...params,
            Html: this,
        });
    }

    /**
     * * Html focus in callback.
     * @param {*} value
     * @param {*} [params={}] Foucin callback function optional params.
     * @memberof Html
     */
    focusin (params = {}) {
        this.execute('focusin', {
            ...this.hasCallback('focusin') ? this.callbacks.focusin.params : {},
            ...params,
            Html: this,
        });
    }

    /**
     * * Html focus out callback.
     * @param {*} value
     * @param {*} [params={}] Foucout callback function optional params.
     * @memberof Html
     */
    focusout (params = {}) {
        this.execute('focusout', {
            ...this.hasCallback('focusout') ? this.callbacks.focusout.params : {},
            ...params,
            Html: this,
        });
    }

    /**
     * * Inactive the Html.
     * @param {*} [params={}] Inactive callback function optional params.
     * @memberof Html
     */
    inactive (params = {}) {
        this.setState('active', false);
        if (!this.hasClassName('active')) {
            this.setClassList(['active']);
        }
        this.classList.active.remove();
        this.execute('inactive', {
            ...this.hasCallback('inactive') ? this.callbacks.inactive.params : {},
            ...params,
            Html: this,
        });
    }

    /**
     * * Html submit callback.
     * @param {*} [params={}] Submit callback function optional params.
     * @memberof Html
     */
    submit (params = {}) {
        this.execute('submit', {
            ...this.hasCallback('submit') ? this.callbacks.submit.params : {},
            ...params,
            Html: this,
        });
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Html
     */
    static callbacks = {
        active: {
            function: (params) => { /* console.log(params) */ },
            params: {},
        }, inactive: {
            function: (params) => { /* console.log(params) */ },
            params: {},
        }
    }
}