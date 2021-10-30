// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Option creates an excellent <option>.
 * @export
 * @class Option
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Option extends Html {
    /**
     * * Creates an instance of Option.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='option-1'] Primary key.
     * @param {string} [data.props.defaultValue]
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.disabled=false] If the HTML Element should be disabled.
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {boolean} [data.state.selected=false] If the HTML Element should be selected.
     * @memberof Option
     */
    constructor (data = {
        props: {
            id: 'option-1',
            defaultValue: '',
            classList: [],
        }, state: {
            disabled: false,
            id: false,
            selected: false,
        },
    }) {
        super({
            props: {
                ...Option.props,
                ...((data && data.hasOwnProperty('props')) ? data.props : {}),
            }, state: {
                ...Option.state,
                ...((data && data.hasOwnProperty('state')) ? data.state : {})
            }, callbacks: {
                ...Option.callbacks,
                ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {})
            },
        });
        this.createHTML(this.props.nodeName);
        this.setHTMLAttributes();
        this.checkState();
    }

    /**
     * * Set the HTML Element attributes.
     * @memberof Option
     */
    setHTMLAttributes () {
        this.setAttribute('value', this.props.defaultValue);
    }

    /**
     * * Check the Option state.
     * @memberof Option
     */
    checkState () {
        this.checkDisabledState();
        this.checkSelectedState();
    }

    /**
     * * Check the Option disabled state.
     * @memberof Option
     */
    checkDisabledState () {
        if (this.state.disabled) {
            this.setAttribute('disabled', true);
        }
    }

    /**
     * * Check the Option selected state.
     * @memberof Option
     */
    checkSelectedState () {
        if (this.state.selected) {
            this.setAttribute('selected', true);
        }
        if (!this.state.selected) {
            this.removeAttribute('selected');
        }
    }

    /**
     * * Select the <option>.
     * @returns {boolean}
     * @memberof Option
     */
    select () {
        if (!this.state.selected) {
            this.setState('selected', true);
            this.checkSelectedState();
        }
    }

    /**
     * * Unselect the <option>.
     * @returns {boolean}
     * @memberof Option
     */
    unselect () {
        if (this.state.selected) {
            this.setState('selected', false);
            this.checkSelectedState();
        }
    }

    /**
     * * Generates & returns an Order array.
     * @static
     * @param {array} [options]
     * @returns {Option[]}
     * @memberof Option
     */
    static generate (options = []) {
        let collection = [];
        for (const data of options) {
            collection.push(new this(data));
        }
        return collection;
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Option
     */
    static props = {
        id: 'option-1',
        defaultValue: '',
        classList: [],
        nodeName: 'OPTION',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Option
     */
    static state = {
        disabled: false,
        id: false,
        selected: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Option
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Option
     */
    static children = [
        // 
    ]
}