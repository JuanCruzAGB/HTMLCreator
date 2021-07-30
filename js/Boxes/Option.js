// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

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
     * @param {string} [data.props.id="option-1"] Primary key.
     * @param {string} [data.props.defaultValue]
     * @param {string[]} [data.props.classes] Class names.
     * @param {object} [data.state]
     * @param {boolean} [data.state.disabled=false] If the HTML Element should be disabled.
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {boolean} [data.state.selected=false] If the HTML Element should be selected.
     * @param {string|HTMLElement|array|false|false} [data.innerHTML=false] Inner HTML Element.
     * @memberof Option
     */
    constructor (data = {
        props: {
            id: "option-1",
            defaultValue: "",
            classes: [],
        }, state: {
            disabled: false,
            id: false,
            selected: false,
        }, innerHTML: false,
    }) {
        super({ ...Option.props, ...data.props }, { ...Option.state, ...data.state });
        this.createHTML(this.props.nodeName);
        this.setHTMLAttributes();
        HTMLCreator.setInnerHTML(this, data.innerHTML);
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
            this.setAttribute("disabled", true);
        }
    }

    /**
     * * Check the Option selected state.
     * @memberof Option
     */
    checkSelectedState () {
        if (this.state.selected) {
            this.setAttribute("selected", true);
        }
        if (!this.state.selected) {
            this.removeAttribute("selected");
        }
    }

    /**
     * * Select the <option>.
     * @returns {boolean}
     * @memberof Option
     */
    select () {
        if (!this.state.selected) {
            this.setState("selected", true);
            this.checkSelectedState();
            return true;
        }
        return false;
    }

    /**
     * * Unselect the <option>.
     * @returns {boolean}
     * @memberof Option
     */
    unselect () {
        if (this.state.selected) {
            this.setState("selected", false);
            this.checkSelectedState();
            return true;
        }
        return false;
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
        id: "option-1",
        defaultValue: "",
        classes: [],
        nodeName: "OPTION",
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
}