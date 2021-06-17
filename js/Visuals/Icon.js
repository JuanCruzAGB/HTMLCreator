// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

/**
 * * Icon creates an excellent <icon>.
 * @export
 * @class Icon
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Icon extends Html {
    /**
     * * Creates an instance of Icon.
     * @param {object} [props] Icon properties:
     * @param {string} [props.id='icon-1'] Icon primary key.
     * @param {string[]} [props.classes] Icon class names.
     * @memberof Icon
     */
    constructor (props = {
        id: 'icon-1',
        classes: [],
    }) {
        super({ ...Icon.props, ...props });
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Icon
     */
    static props = {
        id: 'icon-1',
        classes: [],
        nodeName: 'I',
    }
}

// ? Default export
export default Icon;