// ? JuanCruzAGB repository
import Class from "@juancruzagb/src";

// ? Core
import { Attribute, ClassName, Children, Dataset, Style, } from "@juancruzagb/htmlcreator";

/**
 * * Html controls a class object.
 * @export
 * @class Html
 * @extends Class
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 */
 export default class Html extends Class {
    /**
     * * Creates an instance of Html.
     * @param {object} [data]
     * @param {object} [data.attributes]
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
     * @param {array} [data.classList] Html class list.
     * @param {array} [data.children] Html children.
     * @param {object} [data.dataset] Html data attributes.
     * @param {HTMLElement|false} [data.parentNode] Parent Html Element.
     * @param {object} [data.props]
     * @param {string} [data.props.nodeName='DIV'] Html node name.
     * @param {string} [data.props.id='html-1'] Html primary key.
     * @param {object} [data.state]
     * @param {object} [data.state]
     * @param {boolean} [data.state.blur=false] If the Html the blur callback function should be executed.
     * @param {boolean} [data.state.change=false] If the Html the change callback function should be executed.
     * @param {boolean} [data.state.click=false] If the Html the click callback function should be executed.
     * @param {boolean} [data.state.dblclick=false] If the Html the dblclick callback function should be executed.
     * @param {boolean} [data.state.focusin=false] If the Html the focusin callback function should be executed.
     * @param {boolean} [data.state.focusout=false] If the Html the focusout callback function should be executed.
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {boolean} [data.state.preventDefault=false] If the Html events should prevent default.
     * @param {boolean} [data.state.submit=false] If the Html the submit callback function should be executed.
     * @param {boolean} [data.state.stopPropagation=false] If the Html events should stop propagation.
     * @param {object} [data.styles]
     * @memberof Html
     */
    constructor (data = {
        attributes: {},
        callbacks: {
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
        },
        classList: [],
        children: [],
        dataset: {},
        parentNode: false,
        props: {
            id: 'html-1',
            nodeName: 'DIV',
        },
        state: {
            blur: false,
            dblclick: false,
            change: false,
            click: false,
            focusin: false,
            focusout: false,
            id: false,
            preventDefault: false,
            submit: false,
            stopPropagation: false,
        },
        styles: {},
    }) {
        super({
            callbacks: {
                ...Html.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            },
            props: {
                ...Html.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            },
            state: {
                ...Html.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            },
        });

        this.create();
        this.attributes.set((data && data.hasOwnProperty('attributes')) ? data.attributes : [], null, this.nodeElement);
        this.classList.add((data && data.hasOwnProperty('classList')) ? data.classList : [], this.nodeElement);
        this.children.append((data && data.hasOwnProperty('children')) ? data.children : [], this);
        this.dataset.add((data && data.hasOwnProperty('dataset')) ? data.dataset : [], null, this.nodeElement);
        this.styles.add((data && data.hasOwnProperty('styles')) ? data.styles : [], null, this.nodeElement);
    }

    /**
     * * Attribute.
     * @memberof Html
     */
    attributes = Attribute

    /**
     * * ClassName.
     * @memberof Html
     */
    classList = ClassName

    /**
     * * Children.
     * @memberof Html
     */
    children = Children

    /**
     * * Dataset.
     * @memberof Html
     */
    dataset = Dataset

    /**
     * * Style.
     * @memberof Html
     */
    styles = Style

    /**
     * * Removes the Html Element.
     * @memberof Html
     */
    append () {
        console.warn('Remove element is not supported yet.');
    }

    /**
     * * Creates the Html Element.
     * @memberof Html
     */
    create () {
        this.nodeElement = document.createElement(this.props.nodeName.toUpperCase());

        if (this.props.has('id') && this.state.has('id') && this.state.id) this.attributes.set('id', this.props.id);

        for (const name in this.callbacks) {
            if (Object.hasOwnProperty.call(this.callbacks, name)) this.setEventListener(name, this.callbacks[name]);
        }
    }

    /**
     * * Insert the Html Element before another.
     * @param {number} [index=0]
     * @memberof Html
     */
    insert (index = 0) {
        console.warn('Insert is not supported yet.', [ index, ]);
    }

    /**
     * * Remove the Html Element.
     * @memberof Html
     */
    remove () {
        console.warn('Remove is not supported yet.');
    }

    /**
     * * Set an Html event listener.
     * @param {string} [name='click']
     * @memberof Html
     */
    setEventListener (name = 'click') {
        if (!this[name]) throw new Error(`${ name } callback event is not supported yet`);

        this.nodeElement.addEventListener(name, (e) => {
            if ((this.state.has('preventDefault') && this.state.preventDefault) || (this.state.has(name) && !this.state[name])) e.preventDefault();

            if (this.state.has('stopPropagation') && this.state.stopPropagation) e.stopPropagation();

            this[name]();
        });
    }

    /**
     * * Returns a State callback alternative.
     * @param {string} name
     * @param {boolean} [value=true]
     * @memberof Html
     */
    getStateCallbackAlternative (name, value = true) {
        if (name == undefined) throw new Error('State name is required');

        if (value == undefined) throw new Error('State value is required');

        if (typeof value != 'boolean') throw new Error('State value type is not boolean');

        for (const key in Html.alternatives) {
            if (Object.hasOwnProperty.call(Html.alternatives, key)) {
                if (name == key) return value
                    ? Html.alternatives[key][0]
                    : Html.alternatives[key][1];
            }
        }
    }

    /**
     * * Check if a State has a callbacks alternatives.
     * @param {string} name
     * @memberof Html
     */
    hasStateCallbacksAlternatives (name) {
        if (name == undefined) throw new Error('State name is required');

        let alternatives = false;
        for (const key in Html.alternatives) {
            if (Object.hasOwnProperty.call(Html.alternatives, key)) {
                alternatives = Html.alternatives[key];

                if (name == key) break;
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
        this.classList.add('active', this.nodeElement);
        this.state.set('active', true);

        this.callbacks.execute('active', {
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
            this.callbacks.execute('blur', {
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
            this.callbacks.execute('change', {
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
        this.attributes.set('checked', true, this.nodeElement);
        this.state.set('checked', true);

        this.callbacks.execute('check', {
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
            this.callbacks.execute('click', {
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
            this.callbacks.execute('dblclick', {
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
        this.attributes.set('disabled', true, this.nodeElement);
        this.state.set('disabled', true);

        this.callbacks.execute('disable', {
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
        this.attributes.set('disabled', false, this.nodeElement);
        this.state.set('disabled', false);

        this.callbacks.execute('enable', {
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
            this.callbacks.execute('focusin', {
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
            this.callbacks.execute('focusout', {
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
        this.classList.remove('active');
        this.state.set('active', false);

        this.callbacks.execute('inactive', {
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
        this.attributes.set('selected', true, this.nodeElement);
        this.state.set('selected', true);

        this.callbacks.execute('select', {
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
            this.callbacks.execute('submit', {
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
        if (name == undefined) throw new Error('State name is required');

        if (!this.state.has(name)) throw new Error(`State ${ name } is not defined`);

        if (typeof this.state.name != 'boolean') throw new Error(`State ${ name } type is not boolean`);

        if (this.hasStateCallbacksAlternatives(name)) {
            this[this.getStateCallbackAlternative(name, !this.state[name])]();
        } else {
            this.state.set(name, !this.state[name]);
        }

        return !this.state[name];
    }

    /**
     * * Html uncheck callback.
     * @param {object} [params={}] Uncheck callback function optional params.
     * @memberof Html
     */
    uncheck (params = {}) {
        this.attributes.set('checked', false, this.nodeElement);
        this.state.set('checked', false);

        this.callbacks.execute('uncheck', {
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
        this.attributes.set('selected', false, this.nodeElement);
        this.state.set('selected', false);

        this.callbacks.execute('unselect', {
            ...params,
            Html: this,
        });
    }

    /**
     * * Default state callbacks alternatives.
     * @static
     * @var {array} alternatives
     * @param {array} alternatives.active
     * @param {array} alternatives.checked
     * @param {array} alternatives.disabled
     * @param {array} alternatives.selected
     * @memberof Html
     */
    static alternatives = {
        active: ['active', 'inactive'],
        checked: ['check', 'uncheck'],
        disabled: ['enable', 'disable'],
        selected: ['select', 'unselect'],
    }

    /**
     * * Default callbacks.
     * @static
     * @var {object} callbacks
     * @memberof Html
     */
    static callbacks = {
        // 
    }

    /**
     * * Default properties.
     * @static
     * @var {object} props
     * @param {string} props.id
     * @param {string} props.nodeName
     * @memberof Html
     */
    static props = {
        id: 'html-1',
        nodeName: 'DIV',
    }

    /**
     * * Default state.
     * @static
     * @var {object} state
     * @param {boolean} state.id
     * @param {boolean} state.preventDefault
     * @param {boolean} state.stopPropagation
     * @memberof Html
     */
    static state = {
        id: false,
        preventDefault: false,
        stopPropagation: false,
    }
}