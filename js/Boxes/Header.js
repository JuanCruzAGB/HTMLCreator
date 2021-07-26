// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Header creates an excellent <header>.
 * @export
 * @class Header
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Header extends Html {
    /**
     * * Creates an instance of Header.
     * @param {object} [props]
     * @param {string} [props.id='header-1'] Primary key.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Header
     */
    constructor (props = {
        id: 'header-1',
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = false) {
        super({ ...Header.props, ...props }, { ...Header.state, ...state });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Header
     */
    static props = {
        id: 'header-1',
        classes: [],
        nodeName: 'HEADER',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Header
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Header;