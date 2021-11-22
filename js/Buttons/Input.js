// ? HTMLCreator repository
import Option from "@juancruzagb/htmlcreator/js/Boxes/Option";

// ? Core
import Html from "@juancruzagb/htmlcreator/js/Core/Html";

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
     * @param {boolean} [data.state.checked=false] If the HTML Element should be checked.
     * @param {boolean} [data.state.disabled=false] If the HTML Element should be disabled.
     * @param {boolean} [data.state.hidden=false] If the HTML Element should be hidden.
     * @param {boolean} [data.state.multiple=false] If the HTML Element should accepts multiple files.
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {number|false} [data.state.selectedIndex=false] Input select selected Option index.
     * @param {object} [data.callbacks]
     * @param {object} [data.callbacks.change]
     * @param {function} [data.callbacks.change.function]
     * @param {*} [data.callbacks.change.params]
     * @param {object} [data.callbacks.focusout]
     * @param {function} [data.callbacks.focusout.function]
     * @param {*} [data.callbacks.focusout.params]
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
            checked: false,
            disabled: false,
            hidden: false,
            multiple: false,
            id: false,
            selectedIndex: false,
        }, callbacks: {
            change: {
                function: (params) => { /* console.log(params) */ },
                params: {},
            }, click: {
                function: (params) => { /* console.log(params) */ },
                params: {},
            }, focusout: {
                function: (params) => { /* console.log(params) */ },
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
        this.options = Option.generate(options);
        for (const option of this.options) {
            this.appendChild(option.html);
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
            this.setAttribute('checked', true);
        }
    }

    /**
     * * Check the Input disabled state.
     * @memberof Input
     */
    checkDisabledState () {
        if (this.state.disabled) {
            this.setAttribute('disabled', true);
        }
    }

    /**
     * * Check the Input hidden state.
     * @memberof Input
     */
    checkHiddenState () {
        if (this.state.hidden) {
            this.setAttribute('hidden', true);
        }
    }

    /**
     * * Check the Input multiple state.
     * @memberof Input
     */
    checkMultipleState () {
        if (this.state.multiple) {
            this.setAttribute('multiple', true);
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
     * * Check the Input.
     * @param {boolean} [check=true] New Input checked state
     * @returns {boolean}
     * @memberof Input
     */
    check (check = true) {
        this.setState('checked', check);
        this.checkCheckedState();
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
        checked: false,
        disabled: false,
        hidden: false,
        multiple: false,
        id: false,
        selectedIndex: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callback.
     * @memberof Input
     */
    static callbacks = {
        change: {
            function: (params) => { /* console.log(params) */ },
            params: {},
        }, click: {
            function: (params) => { /* console.log(params) */ },
            params: {},
        }, focusout: {
            function: (params) => { /* console.log(params) */ },
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