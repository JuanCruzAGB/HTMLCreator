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
     * @param {object} [props] Label properties:
     * @param {string} [props.id='label-1'] Label primary key.
     * @param {string|false} [props.for=false] Label HTML for <input> primary key.
     * @param {string[]} [props.classes] Label class names.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Title inner HTML Element.
     * @memberof Label
     */
    constructor (props = {
        id: 'label-1',
        for: false,
        classes: [],
    }, input = false) {
        super({ ...Label.props, ...props });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this.html, innerHTML);
        this.setHTMLAttributes();
        this.setChilds();
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
}

// ? Default export
export default Label;