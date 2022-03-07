// ? JuanCruzAGB repository
import Class from "@juancruzagb/src/js/Class.js";

// ? HTMLCreator repository
import Creator from "@juancruzagb/htmlcreator/js/Creator.js";

// ? Core
import Attribute from "@juancruzagb/htmlcreator/js/Core/Attribute.js";
import ClassName from "@juancruzagb/htmlcreator/js/Core/ClassName.js";
import Dataset from "@juancruzagb/htmlcreator/js/Core/Dataset.js";
import Style from "@juancruzagb/htmlcreator/js/Core/Style.js";

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
     * @param {boolean} [data.state.blur=true] If the Html the blur callback function should be executed.
     * @param {boolean} [data.state.change=true] If the Html the change callback function should be executed.
     * @param {boolean} [data.state.click=true] If the Html the click callback function should be executed.
     * @param {boolean} [data.state.dblclick=true] If the Html the dblclick callback function should be executed.
     * @param {boolean} [data.state.focusin=true] If the Html the focusin callback function should be executed.
     * @param {boolean} [data.state.focusout=true] If the Html the focusout callback function should be executed.
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {boolean} [data.state.preventDefault=false] If the Html events should prevent default.
     * @param {boolean} [data.state.submit=true] If the Html the submit callback function should be executed.
     * @param {boolean} [data.state.stopPropagation=false] If the Html events should stop propagation.
     * @param {object} [data.callbacks]
     * @param {function} [data.callbacks.active]
     * @param {function} [data.callbacks.active.function]
     * @param {object} [data.callbacks.active.params]
     * @param {function} [data.callbacks.blur]
     * @param {function} [data.callbacks.blur.function]
     * @param {object} [data.callbacks.blur.params]
     * @param {function} [data.callbacks.change]
     * @param {function} [data.callbacks.change.function]
     * @param {object} [data.callbacks.change.params]
     * @param {function} [data.callbacks.check]
     * @param {function} [data.callbacks.check.function]
     * @param {object} [data.callbacks.check.params]
     * @param {function} [data.callbacks.click]
     * @param {function} [data.callbacks.click.function]
     * @param {object} [data.callbacks.click.params]
     * @param {function} [data.callbacks.dblclick]
     * @param {function} [data.callbacks.dblclick.function]
     * @param {object} [data.callbacks.dblclick.params]
     * @param {function} [data.callbacks.disable]
     * @param {function} [data.callbacks.disable.function]
     * @param {object} [data.callbacks.disable.params]
     * @param {function} [data.callbacks.enable]
     * @param {function} [data.callbacks.enable.function]
     * @param {object} [data.callbacks.enable.params]
     * @param {function} [data.callbacks.focusin]
     * @param {function} [data.callbacks.focusin.function]
     * @param {object} [data.callbacks.focusin.params]
     * @param {function} [data.callbacks.focusout]
     * @param {function} [data.callbacks.focusout.function]
     * @param {object} [data.callbacks.focusout.params]
     * @param {function} [data.callbacks.inactive]
     * @param {function} [data.callbacks.inactive.function]
     * @param {object} [data.callbacks.inactive.params]
     * @param {function} [data.callbacks.select]
     * @param {function} [data.callbacks.select.function]
     * @param {object} [data.callbacks.select.params]
     * @param {function} [data.callbacks.submit]
     * @param {function} [data.callbacks.submit.function]
     * @param {object} [data.callbacks.submit.params]
     * @param {function} [data.callbacks.uncheck]
     * @param {function} [data.callbacks.uncheck.function]
     * @param {object} [data.callbacks.uncheck.params]
     * @param {function} [data.callbacks.unselect]
     * @param {function} [data.callbacks.unselect.function]
     * @param {object} [data.callbacks.unselect.params]
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
            blur: true,
            dblclick: true,
            change: true,
            click: true,
            focusin: true,
            focusout: true,
            id: false,
            preventDefault: false,
            submit: true,
            stopPropagation: false,
        }, callbacks: {
            active: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, blur: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, change: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, check: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, click: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, dblclick: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, disable: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, enable: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, focusin: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, focusout: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, inactive: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, select: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, submit: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, uncheck: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, unselect: {
                function: params => { /* console.log(params) */ },
                params: {},
            },
        }, children: [],
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
        if (name == undefined) {
            throw new Error('Html Element attribute name is required');
        }
        if (value == undefined) {
            throw new Error('Html Element attribute value is required');
        }
        let attributes = {};
        switch (typeof name) {
            case 'object':
                attributes = !Array.isArray(name) ? name : {};
                break;
            case 'string':
                if (!name) {
                    throw new Error('Html Element attribute name is required');
                }
                attributes[name] = value;
                break;
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

    /**
     * * Check if the Html has an Attribute.
     * @param {string|array} name Attribute name.
     * @param {*} [value=false] Attribute value.
     * @returns {boolean}
     * @memberof Html
     */
    hasAttribute (name, value = false) {
        if (name == undefined) {
            throw new Error('Html Element attribute name is required');
        }
        for (let attribute of this.attributes) {
            if (attribute.props.name == name) {
                if (!value) {
                    return true;
                }
                return attribute.props.value == value;
            }
        }
        return false;
    }

    /**
     * * Removes an Html Attributes.
     * @param {string|array} name Attribute name.
     * @memberof Html
     */
    removeAttribute (name) {
        if (name == undefined) {
            throw new Error('Html Element attribute name is required');
        }
        for (const attribute of this.attributes) {
            if (attribute.props.name == name) {
                attribute.remove();
            }
        }
    }

    /**
     * * Set an Html class list.
     * @param {string|array} classList
     * @memberof Html
     */
    setClassList (classList = []) {
        if (typeof classList != 'string' && !Array.isArray(classList)) {
            throw new Error('Html Element class name is required');
        }
        if (!this.classList) {
            this.classList = {};
        }
        if (typeof classList == 'string' && classList) {
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
    }

    /**
     * * Check if the Html has a ClassName.
     * @param {string|array} value ClassName value.
     * @returns {boolean}
     * @memberof Html
     */
    hasClassName (value) {
        if (value == undefined) {
            throw new Error('Html Element class name value is required');
        }
        for (const key in this.classList) {
            if (Object.hasOwnProperty.call(this.classList, key)) {
                return this.classList[key].props.value == value;
            }
            return false;
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
        if (name == undefined) {
            throw new Error('Html Element data name is required');
        }
        if (value == undefined) {
            throw new Error(`Html Element data value is required`);
        }
        if (!this.dataset) {
            this.dataset = [];
        }
        let dataset = {};
        switch (typeof name) {
            case 'object':
                dataset = !Array.isArray(name) ? name : {};
                break;
            case 'string':
                if (!name) {
                    throw new Error('Html Element dataset name is required');
                }
                dataset[name] = value;
                break;
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
        if (name == undefined) {
            throw new Error('Html Element style name is required');
        }
        if (value == undefined) {
            throw new Error(`Html Element style value is required`);
        }
        if (!this.style) {
            this.style = [];
        }
        let styles = {};
        switch (typeof name) {
            case 'object':
                styles = !Array.isArray(name) ? name : {};
                break;
            case 'string':
                if (!name) {
                    throw new Error('Html Element style name is required');
                }
                styles[name] = value;
                break;
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
            throw new Error(`${ name } callback event is not supported yet`);
        }
        this.html.addEventListener(name, (e) => {
            if ((this.hasState('preventDefault') && this.state.preventDefault) || (this.hasState(name) && !this.state[name])) {
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
     * * Returns a State callback alternative.
     * @param {string} name State name.
     * @param {boolean} [value=true] State value.
     * @memberof Html
     */
    getStateCallbackAlternative (name, value = true) {
        if (name == undefined) {
            throw new Error('State name is required');
        }
        if (value == undefined) {
            throw new Error('State value is required');
        }
        if (typeof value != 'boolean') {
            throw new Error('State value type is not boolean');
        }
        for (const key in Html.alternatives) {
            if (Object.hasOwnProperty.call(Html.alternatives, key)) {
                if (name == key) {
                    return value ? Html.alternatives[key][0] : Html.alternatives[key][1];
                }
            }
        }
    }

    /**
     * * Check if a State has a callbacks alternatives.
     * @param {string} name State name.
     * @memberof Html
     */
    hasStateCallbacksAlternatives (name) {
        if (name == undefined) {
            throw new Error('State name is required');
        }
        let alternatives = false;
        for (const key in Html.alternatives) {
            if (Object.hasOwnProperty.call(Html.alternatives, key)) {
                alternatives = Html.alternatives[key];
                if (name == key) {
                    break;
                }
            }
            alternatives = false;
        }
        return alternatives;
    }

    /**
     * * Active the Html.
     * @param {object} [params={}] Active callback function optional params.
     * @memberof Html
     */
    active (params = {}) {
        this.setState('active', true);
        if (!this.hasClassName('active')) {
            this.setClassList(['active']);
        }
        this.classList.active.set();
        this.execute('active', {
            ...params,
            Html: this,
        });
    }

    /**
     * * Html blur callback.
     * @param {*} value
     * @param {object} [params={}] Blur callback function optional params.
     * @memberof Html
     */
    blur (params = {}) {
        if (this.state.blur) {
            this.execute('blur', {
                ...params,
                Html: this,
            });
        }
    }

    /**
     * * Html change callback.
     * @param {object} [params={}] Change callback function optional params.
     * @memberof Html
     */
    change (params = {}) {
        if (this.state.change) {
            this.execute('change', {
                ...params,
                Html: this,
            });
        }
    }

    /**
     * * Html check callback.
     * @param {object} [params={}] Check callback function optional params.
     * @memberof Html
     */
    check (params = {}) {
        this.setState('checked', true);
        if (!this.hasAttribute('checked')) {
            this.setAttribute('checked', false);
        }
        for (const attribute of this.attributes) {
            if (attribute.props.name == 'checked') {
                attribute.switch();
            }
        }
        this.execute('check', {
            ...params,
            Html: this,
        });
    }

    /**
     * * Html click callback.
     * @param {object} [params={}] Click callback function optional params.
     * @memberof Html
     */
    click (params = {}) {
        if (this.state.click) {
            this.execute('click', {
                ...params,
                Html: this,
            });
        }
    }

    /**
     * * Html dblclick callback.
     * @param {object} [params={}] Double click callback function optional params.
     * @memberof Html
     */
    dblclick (params = {}) {
        if (this.state.dblclick) {
            this.execute('dblclick', {
                ...params,
                Html: this,
            });
        }
    }

    /**
     * * Html disable callback.
     * @param {object} [params={}] Disable callback function optional params.
     * @memberof Html
     */
    disable (params = {}) {
        this.setState('disabled', true);
        if (!this.hasAttribute('disabled')) {
            this.setAttribute('disabled', false);
        }
        for (const attribute of this.attributes) {
            if (attribute.props.name == 'disabled') {
                attribute.switch();
            }
        }
        this.execute('disable', {
            ...params,
            Html: this,
        });
    }

    /**
     * * Html enable callback.
     * @param {object} [params={}] Enable callback function optional params.
     * @memberof Html
     */
    enable (params = {}) {
        this.setState('disabled', false);
        if (!this.hasAttribute('disabled')) {
            this.setAttribute('disabled', true);
        }
        for (const attribute of this.attributes) {
            if (attribute.props.name == 'disabled') {
                attribute.switch();
            }
        }
        this.execute('enable', {
            ...params,
            Html: this,
        });
    }

    /**
     * * Html focus in callback.
     * @param {object} [params={}] Foucin callback function optional params.
     * @memberof Html
     */
    focusin (params = {}) {
        if (this.state.focusin) {
            this.execute('focusin', {
                ...params,
                Html: this,
            });
        }
    }

    /**
     * * Html focus out callback.
     * @param {object} [params={}] Foucout callback function optional params.
     * @memberof Html
     */
    focusout (params = {}) {
        if (this.state.focusout) {
            this.execute('focusout', {
                ...params,
                Html: this,
            });
        }
    }

    /**
     * * Inactive the Html.
     * @param {object} [params={}] Inactive callback function optional params.
     * @memberof Html
     */
    inactive (params = {}) {
        this.setState('active', false);
        if (!this.hasClassName('active')) {
            this.setClassList(['active']);
        }
        this.classList.active.remove();
        this.execute('inactive', {
            ...params,
            Html: this,
        });
    }

    /**
     * * Html select callback.
     * @param {object} [params={}] Select callback function optional params.
     * @memberof Html
     */
    select (params = {}) {
        this.setState('selected', true);
        if (!this.hasAttribute('selected')) {
            this.setAttribute('selected', false);
        }
        for (const attribute of this.attributes) {
            if (attribute.props.name == 'selected') {
                attribute.switch();
            }
        }
        this.execute('select', {
            ...params,
            Html: this,
        });
    }

    /**
     * * Html submit callback.
     * @param {object} [params={}] Submit callback function optional params.
     * @memberof Html
     */
    submit (params = {}) {
        if (this.state.submit) {
            this.execute('submit', {
                ...params,
                Html: this,
            });
        }
    }

    /**
     * * Switch a state.
     * @param {string} name State name.
     * @memberof Html
     */
    switch (name) {
        if (name == undefined) {
            throw new Error('State name is required');
        }
        if (!this.hasState(name)) {
            throw new Error(`State ${ name } is not defined`);
        }
        if (typeof this.state.name != 'boolean') {
            throw new Error(`State ${ name } type is not boolean`);
        }
        if (this.hasStateCallbacksAlternatives(name)) {
            this[this.getStateCallbackAlternative(name, !this.state[name])]();
        } else {
            this.setState(name, !this.state[name]);
        }
        return !this.state[name];
    }

    /**
     * * Html uncheck callback.
     * @param {object} [params={}] Uncheck callback function optional params.
     * @memberof Html
     */
    uncheck (params = {}) {
        this.setState('checked', false);
        if (!this.hasAttribute('checked')) {
            this.setAttribute('checked', true);
        }
        for (const attribute of this.attributes) {
            if (attribute.props.name == 'checked') {
                attribute.switch();
            }
        }
        this.execute('uncheck', {
            ...params,
            Html: this,
        });
    }

    /**
     * * Html unselect callback.
     * @param {object} [params={}] Unselect callback function optional params.
     * @memberof Html
     */
    unselect (params = {}) {
        this.setState('selected', false);
        if (!this.hasAttribute('selected')) {
            this.setAttribute('selected', true);
        }
        for (const attribute of this.attributes) {
            if (attribute.props.name == 'selected') {
                attribute.switch();
            }
        }
        this.execute('unselect', {
            ...params,
            Html: this,
        });
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Html
     */
    static state = {
        blur: true,
        change: true,
        click: true,
        dblclick: true,
        focusin: true,
        focusout: true,
        id: false,
        preventDefault: false,
        submit: true,
        stopPropagation: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Html
     */
    static callbacks = {
        active: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, blur: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, change: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, check: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, click: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, dblclick: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, disable: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, enable: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, focusin: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, focusout: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, inactive: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, select: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, submit: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, uncheck: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, unselect: {
            function: params => { /* console.log(params) */ },
            params: {},
        },
    }

    /**
     * @static
     * @var {array} alternatives Default state callbacks alternatives.
     * @memberof Html
     */
    static alternatives = {
        active: ['active', 'inactive'],
        checked: ['check', 'uncheck'],
        disabled: ['enable', 'disable'],
        selected: ['select', 'unselect'],
    };
}