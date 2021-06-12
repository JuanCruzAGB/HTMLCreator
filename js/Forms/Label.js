// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import Input from "./Input.js";

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
     * @param {object|false} [input=false] Label Input properties & states.
     * @memberof Label
     */
    constructor (props = {
        id: 'label-1',
        for: false,
        classes: [],
    }, input = false) {
        super({ ...Label.props, ...props });
        this.setInput(input);
        this.createHTML(this.props.nodeName);
        this.setHTMLAttributes();
        this.setChilds();
    }

    /**
     * * Set the HTML Element child nodes.
     * @memberof Form
     */
    setChilds () {
        if (this.hasOwnProperty(input)) {
            this.appendChild(input.html);
        }
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
     * * Set the Label Input.
     * @param {object|false} [input=false] Label Input properties & states.
     * @memberof Label
     */
    setInput (input = false) {
        if (input) {
            this.input = new Input((input.hasOwnProperty('props') ? input.state : {}), (input.hasOwnProperty('state') ? input.state : {}), (input.hasOwnProperty('callbacks') ? input.callbacks : {}));
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

// ? Label childs
Label.Input = Input;

// ? Default export
export default Label;