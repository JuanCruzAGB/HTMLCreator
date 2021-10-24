// ? HTMLCreatorJS repository
import Html from '../Html.js';
import Option from '../Boxes/Option.js';

/**
 * * Input creates an excellent <input>.
 * @export
 * @class Input
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
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
     * @param {boolean} [data.state.multiple=false] If the HTML Element should accepts multiple files.
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {number|false} [data.state.selectedIndex=false] Input select selected Option index.
     * @param {object} [data.callbacks]
     * @param {object} [data.callbacks.change]
     * @param {function} [data.callbacks.change.function]
     * @param {*} [data.callbacks.change.params]
     * @param {object} [data.callbacks.focusout]
     * @param {function} [data.callbacks.focusout.function]
     * @param {*} [data.callbacks.focusout.params]
     * @param {array} [data.options] Array of <options>
     * @param {array|false} [data.children=false] HTML Element childrens.
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
            }
        }, options: [],
        children: false,
    }) {
        if (props.type == 'select') {
            props.nodeName = 'SELECT';
        }
        if (props.type == 'textarea') {
            props.nodeName = 'TEXTAREA';
        }
        super({ ...Input.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Input.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Input.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) }, [ ...Input.children, ...((data && data.hasOwnProperty('children')) ? data.children : []) ]);
        this.createHTML(this.props.nodeName);
        this.setEventListener();
        this.setHTMLAttributes();
        if (options.length) {
            this.setOptions(options);
        }
        this.checkState();
    }
    
    /**
     * * Set the Input event listener.
     * @memberof Input
     */
    setEventListener () {
        switch (this.props.type) {
            case 'date':
                this.html.addEventListener('change', (e) => {
                    this.setProps('value', this.html.value);
                    this.change({
                        value: this.html.value,
                    });
                });
                this.html.addEventListener('focusout', (e) => {
                    this.setProps('value', this.html.value);
                    this.focusout({
                        value: this.html.value,
                    });
                });
                break;
            case 'checkbox':
                this.html.addEventListener('click', (e) => {
                    this.setState('checked', this.html.checked);
                    this.click({
                        checked: { [this.html.value]: this.html.checked },
                    });
                });
            case 'file':
            case 'radio':
            case 'select':
                this.html.addEventListener('change', (e) => {
                    let params = (
                        (this.props.type == 'checkbox') ? { checked: { [this.html.value]: this.html.checked } } :
                        (this.props.type == 'file') ? { files: this.html.files } :
                        (this.props.type == 'radio') ? { checked: this.html.value } :
                        (this.props.type == 'select') ? { selected: this.options[this.html.selectedIndex] } : {}
                    );
                    if (this.props.type == 'select') {
                        this.setProps('files', this.html.files ? this.html.files : false);
                    }
                    if (this.props.type == 'radio' || this.props.type == 'checkbox') {
                        this.setState('checked', this.html.checked);
                    }
                    if (this.props.type == 'select') {
                        this.setState('selectedIndex', this.html.selectedIndex ? this.html.selectedIndex : false);
                    }
                    this.change({ ...params });
                });
                break;
            case 'password':
            case 'text':
            case 'textarea':
                this.html.addEventListener('focusout', (e) => {
                    this.setProps('value', this.html.value);
                    this.focusout({
                        value: this.html.value,
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
        if (this.props.type != 'select' && this.props.type != 'textarea') {
            this.setAttribute('type', this.props.type);
        }
        switch (this.props.type) {
            case 'file':
                if (this.props.accept) {
                    this.setAttribute('accept', this.props.accept.join());
                }
                break;
        }
        if (this.props.defaultValue && this.props.defaultValue == 0) {
            this.setAttribute("value", this.props.defaultValue);
        }
        if (this.props.placeholder && this.props.placeholder == 0) {
            this.setAttribute("placeholder", this.props.placeholder);
        }
    }

    /**
     * * Set the <select> <ptions>.
     * @memberof Input
     */
    setOptions (options = []) {
        this.setProps('options', Option.generate(options));
        for (const option of this.props.options) {
            HTMLCreator.setInnerHTML(this, option);
        }
    }

    /**
     * * Check the Input state.
     * @memberof Input
     */
    checkState () {
        this.checkCheckedState();
        this.checkDisabledState();
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
     * * Check the Input disabled state.
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
        if (this.props.type == 'select' && this.state.selectedIndex) {
            for (const key in this.props.options) {
                if (Object.hasOwnProperty.call(this.props.options, key)) {
                    const option = this.props.options[key];
                    if (key == this.state.selectedIndex || option.props.id == this.state.selectedIndex) {
                        option.select();
                    }
                    if (key != this.state.selectedIndex && option.props.id != this.state.selectedIndex) {
                        option.unselect();
                    }
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
            this.setState('selectedIndex', selectedIndex);
            this.checkSelectedIndexState();
            return true;
        }
        console.error('Selected index is required');
        return false;
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
        }
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