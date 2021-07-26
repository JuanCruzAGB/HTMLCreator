// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Label creates an excellent <label>.
 * @export
 * @class Label
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Label extends Html {
    /**
     * * Creates an instance of Label.
     * @param {object} [props]
     * @param {string} [props.id='label-1'] Primary key.
     * @param {string|false} [props.for=false] HTML for <input> primary key.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Label
     */
    constructor (props = {
        id: 'label-1',
        for: false,
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = false) {
        super({ ...Label.props, ...props }, { ...Label.state, ...state });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
        this.setHTMLAttributes();
    }

    /**
     * * Set the HTML Element attributes.
     * @memberof Form
     */
    setHTMLAttributes () {
        if (this.props.for) {
            this.setAttribute('for', this.props.for);
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Label
     */
    static props = {
        id: 'label-1',
        for: false,
        classes: [],
        nodeName: 'LABEL',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Label
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Label;