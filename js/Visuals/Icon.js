// ? JuanCruzAGB repository
import Html from "../Html.js";

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
     * @param {object} [props]
     * @param {string} [props.id='icon-1'] Primary key.
     * @param {string[]} [props.classes] Class list.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @memberof Icon
     */
    constructor (props = {
        id: 'icon-1',
        classes: [],
    }, state = {
        id: false,
    }) {
        super({ ...Icon.props, ...props }, { ...Icon.state, ...state });
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

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Icon
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Icon;