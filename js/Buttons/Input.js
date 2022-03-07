// ? HTMLCreator repository
import Option from "@juancruzagb/htmlcreator/js/Boxes/Option.js";

// ? Core
import Html from "@juancruzagb/htmlcreator/js/Core/Html.js";

/**
 * * Input creates an excellent <input>.
 * @export
 * @class Input
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Input extends Html {
    /**
     * * Creates an instance of Input.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='input-1'] Primary key.
     * @param {string} [data.props.name='input-1']
     * @param {string} [data.props.type='text']
     * @param {string} [data.props.defaultValue]
     * @param {string} [data.props.placeholder]
     * @param {string[]} [data.props.accept] Mimetype of files accepted.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.blur=true] If the Html the blur callback function should be executed.
     * @param {boolean} [data.state.change=true] If the Html the change callback function should be executed.
     * @param {boolean} [data.state.checked=false] If the HTML Element should be checked.
     * @param {boolean} [data.state.click=true] If the Html the click callback function should be executed.
     * @param {boolean} [data.state.dblclick=true] If the Html the dblclick callback function should be executed.
     * @param {boolean} [data.state.disabled=false] If the HTML Element should be disabled.
     * @param {boolean} [data.state.focusin=true] If the Html the focusin callback function should be executed.
     * @param {boolean} [data.state.focusout=true] If the Html the focusout callback function should be executed.
     * @param {boolean} [data.state.hidden=false] If the HTML Element should be hidden.
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {boolean} [data.state.multiple=false] If the HTML Element should accepts multiple files.
     * @param {boolean} [data.state.preventDefault=false] If the Html events should prevent default.
     * @param {number|false} [data.state.selectedIndex=false] Input select selected Option index.
     * @param {object} [data.callbacks]
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
     * @param {function} [data.callbacks.select]
     * @param {function} [data.callbacks.select.function]
     * @param {object} [data.callbacks.select.params]
     * @param {function} [data.callbacks.uncheck]
     * @param {function} [data.callbacks.uncheck.function]
     * @param {object} [data.callbacks.uncheck.params]
     * @param {function} [data.callbacks.unselect]
     * @param {function} [data.callbacks.unselect.function]
     * @param {object} [data.callbacks.unselect.params]
     * @param {array} [data.options] Array of <options>
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Input
     */
    constructor (data = {
        props: {
            id: 'input-1',
            name: 'input-1',
            type: 'text',
            defaultValue: '',
            placeholder: '',
            accept: [],
            classList: [],
        }, state: {
            blur: true,
            change: true,
            checked: false,
            click: true,
            dblclick: true,
            disabled: false,
            focusin: true,
            focusout: true,
            hidden: false,
            id: false,
            multiple: false,
            preventDefault: false,
            selectedIndex: false,
        }, callbacks: {
            blur: {
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
            }, select: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, uncheck: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, unselect: {
                function: params => { /* console.log(params) */ },
                params: {},
            },
        }, options: [],
        parentNode: false,
    }) {
        if (data) {
            if (data.hasOwnProperty('props')) {
                if (data.props.hasOwnProperty('type')) {
                    if (data.props.type.toUpperCase() == 'SELECT') {
                        data.props.nodeName = 'SELECT';
                    }
                    if (data.props.type.toUpperCase() == 'TEXTAREA') {
                        data.props.nodeName = 'TEXTAREA';
                    }
                }
            }
        }
        super({
            props: {
                ...Input.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Input.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Input.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
        this.setHTMLAttributes();
        if (this.props.type.toUpperCase() == 'SELECT' && data && data.hasOwnProperty('options') && options.length) {
            this.setOptions(data.options);
        }
        this.checkState();
    }

    /**
     * * Saves the Input value.
     * @param {*} value
     * @memberof Image
     */
    set value (value) {
        this.setProps('value', value);
        this.setAttribute('value', this.props.value);
    }

    /**
     * * Set the HTML Element attributes.
     * @memberof Input
     */
    setHTMLAttributes () {
        this.setAttribute('name', this.props.name);
        if (this.props.type.toUpperCase() != 'SELECT' && this.props.type.toUpperCase() != 'TEXTAREA') {
            this.setAttribute('type', this.props.type);
        }
        switch (this.props.type.toUpperCase()) {
            case 'FILE':
                if (this.props.accept) {
                    this.setAttribute('accept', this.props.accept.join());
                }
                break;
        }
        if (this.props.defaultValue || this.props.defaultValue == 0) {
            this.setProps('value', this.props.defaultValue);
            this.setAttribute('value', this.props.defaultValue);
        }
        if (this.props.placeholder || this.props.placeholder == 0) {
            this.setAttribute("placeholder", this.props.placeholder);
        }
    }

    /**
     * * Set the <select> <ptions>.
     * @memberof Input
     */
    setOptions (options = []) {
        if (!this.options) {
            this.options = [];
        }
        for (const data of options) {
            let option = new Option(data);
            this.appendChild(option.html);
            this.options.push(option);
        }
    }

    /**
     * * Check the Input state.
     * @memberof Input
     */
    checkState () {
        this.checkCheckedState();
        this.checkDisabledState();
        this.checkHiddenState();
        this.checkMultipleState();
        this.checkSelectedIndexState();
    }

    /**
     * * Check the Input checked state.
     * @memberof Input
     */
    checkCheckedState () {
        if (this.state.checked) {
            this.check();
        } else {
            this.uncheck();
        }
    }

    /**
     * * Check the Input disabled state.
     * @memberof Input
     */
    checkDisabledState () {
        if (this.state.disabled) {
            this.disable();
        } else {
            this.enable();
        }
    }

    /**
     * * Check the Input hidden state.
     * @memberof Input
     */
    checkHiddenState () {
        if (this.state.hidden) {
            this.setAttribute('hidden', true);
        } else {
            // TODO: Remove hidden attribute.
        }
    }

    /**
     * * Check the Input multiple state.
     * @memberof Input
     */
    checkMultipleState () {
        if (this.state.multiple) {
            this.setAttribute('multiple', true);
        } else {
            // TODO: Remove multiple attribute.
        }
    }

    /**
     * * Check the Input selected option index state.
     * @memberof Input
     */
    checkSelectedIndexState () {
        if (this.props.type.toUpperCase() == 'SELECT') {
            if (this.state.selectedIndex) {
                for (const key in this.options) {
                    if (Object.hasOwnProperty.call(this.options, key)) {
                        const option = this.options[key];
                        if (key == this.state.selectedIndex.index) {
                            option.select();
                        }
                        if (key != this.state.selectedIndex.index) {
                            option.unselect();
                        }
                    }
                }
            } else {
                for (const option of this.options) {
                    option.unselect();
                }
            }
        }
    }

    /**
     * * Select an Option.
     * @param {number} selectedIndex
     * @returns {boolean}
     * @memberof Input
     */
    select (selectedIndex = false) {
        if (selectedIndex) {
            this.setState('selectedIndex', {
                index: selectedIndex,
                option: this.options[selectedIndex],
            });
            this.checkSelectedIndexState();
        }
        this.setState('selectedIndex', false);
        this.checkSelectedIndexState();
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Input
     */
    static props = {
        id: 'input-1',
        name: 'input-1',
        type: 'text',
        defaultValue: '',
        placeholder: '',
        accept: [],
        classList: [],
        nodeName: 'INPUT',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Input
     */
    static state = {
        blur: true,
        change: true,
        checked: false,
        click: true,
        dblclick: true,
        disabled: false,
        focusin: true,
        focusout: true,
        hidden: false,
        id: false,
        multiple: false,
        preventDefault: false,
        selectedIndex: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callback.
     * @memberof Input
     */
    static callbacks = {
        blur: {
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
        }, select: {
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
     * @var {array} children Default children.
     * @memberof Input
     */
    static children = [
        // 
    ]
}