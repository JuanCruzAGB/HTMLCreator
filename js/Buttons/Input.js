// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

/**
 * * Input creates an excellent <input>.
 * @export
 * @class Input
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Input extends Html {
    /**
     * * Creates an instance of Input.
     * @param {object} [props] Input properties:
     * @param {string} [props.id='input-1'] Input primary key.
     * @param {string} [props.name='input-1'] Input name.
     * @param {string} [props.type='text'] Input type.
     * @param {string} [props.defaultValue] Input default value.
     * @param {string} [props.placeholder] Input placeholder text.
     * @param {string[]} [props.accept] Input mimetype accepted.
     * @param {string[]} [props.classes] Input class names.
     * @param {object} [state] Input state:
     * @param {boolean} [state.checked=false] If the Input has to be checked.
     * @param {boolean} [state.disabled=false] If the Input has to be disabled.
     * @param {boolean} [state.multiple=false] If the Input accepts multiple files.
     * @param {object} [callbacks] Input callbacks:
     * @param {object} [callbacks.change] Input change callback:
     * @param {function} [callbacks.change.function] Input change callback function.
     * @param {*} [callbacks.change.params] Input change callback function params.
     * @param {object} [callbacks.focusout] Input on focus out callback:
     * @param {function} [callbacks.focusout.function] Input on focus out callback function.
     * @param {*} [callbacks.focusout.params] Input on focus out callback function params.
     * @memberof Input
     */
    constructor (props = {
        id: 'input-1',
        name: 'input-1',
        type: 'text',
        defaultValue: '',
        placeholder: '',
        accept: [],
        classes: [],
    }, state = {
        checked: false,
        disabled: false,
        multiple: false,
    }, callbacks = {
        change: {
            function: function (params) { /* console.log(params) */ },
            params: {}
        }, focusout: {
            function: function (params) { /* console.log(params) */ },
            params: {}
        }
    }) {
        if (props.type === 'select') {
            props.nodeName = 'SELECT';
        }
        if (props.type === 'textarea') {
            props.nodeName = 'TEXTAREA';
        }
        super({ ...Input.props, ...props }, { ...Input.state, ...state });
        this.setCallbacks({ ...Input.callbacks, ...callbacks });
        this.createHTML(this.props.nodeName);
        this.setEventListener();
        this.setHTMLAttributes();
        this.checkState();
    }
    
    /**
     * * Set the Input event listener.
     * @memberof Input
     */
    setEventListener () {
        const instance = this;
        switch (this.props.type) {
            case 'date':
                this.html.addEventListener('change', function (e) {
                    instance.change({
                        value: this.value,
                    });
                });
                this.html.addEventListener('focusout', function (e) {
                    instance.focusout({
                        value: this.value,
                    });
                });
                break;
            case 'checkbox':
                this.html.addEventListener('click', function (e) {
                    instance.click({
                        checked: { [this.value]: this.checked },
                    });
                });
            case 'file':
            case 'radio':
            case 'select':
                this.html.addEventListener('change', function (e) {
                    let params = (
                        (instance.props.type === 'checkbox') ? { checked: { [this.value]: this.checked } } :
                        (instance.props.type === 'file') ? { files: this.files } :
                        (instance.props.type === 'radio') ? { checked: this.value } :
                        (instance.props.type === 'select') ? { selected: this.options[this.selectedIndex] } : {}
                    );
                    instance.change({ ...params });
                });
                break;
            case 'password':
            case 'text':
            case 'textarea':
                this.html.addEventListener('focusout', function (e) {
                    instance.focusout({
                        value: this.value,
                    });
                });
                break;
            default:
                console.error(`Input type: ${ this.props.type } does not have event`);
                break;
        }
    }

    /**
     * * Set the HTML Element attributes.
     * @memberof Input
     */
    setHTMLAttributes () {
        this.setAttribute('name', this.props.name);
        if (this.props.type !== 'select' && this.props.type !== 'textarea') {
            this.setAttribute('type', this.props.type);
        }
        switch (this.props.type) {
            case 'file':
                if (this.props.accept) {
                    this.setAttribute('accept', this.props.accept.join());
                }
                break;
        }
        this.setAttribute('value', this.props.defaultValue);
        this.setAttribute('placeholder', this.props.placeholder);
    }

    /**
     * * Check the Input state.
     * @memberof Input
     */
    checkState () {
        this.checkCheckedState();
        this.checkDisabledState();
        this.checkMultipleState();
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
     * * Check the Input disabled state.
     * @memberof Input
     */
    checkMultipleState () {
        if (this.state.multiple) {
            this.setAttribute('multiple', true);
        }
    }

    /**
     * * Input change callback.
     * @param {*} [params={}] Change callback function optional params
     * @memberof Input
     */
    change (params = {}) {
        this.execute('change', {
            input: this,
            ...(Object.keys(params).length ? { ...this.callbacks.change.params, ...params } : { ...this.callbacks.change.params }),
        });
    }

    /**
     * * Input click callback.
     * @param {*} [params={}] Click callback function optional params
     * @memberof Input
     */
    click (params = {}) {
        this.execute('click', {
            input: this,
            ...(Object.keys(params).length ? { ...this.callbacks.click.params, ...params } : { ...this.callbacks.click.params }),
        });
    }

    /**
     * * Input focus out callback.
     * @param {*} [params={}] Foucout callback function optional params
     * @memberof Input
     */
    focusout (params = {}) {
        this.execute('focusout', {
            input: this,
            ...params
        });
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
        classes: [],
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
        multiple: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callback.
     * @memberof Input
     */
    static callbacks = {
        change: {
            function: function (params) { /* console.log(params) */ },
            params: {}
        }, focusout: {
            function: function (params) { /* console.log(params) */ },
            params: {}
        }
    }
}

// ? Default export
export default Input;