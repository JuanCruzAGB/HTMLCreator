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
     * @param {object} [props] Header properties:
     * @param {string} [props.id='header-1'] Header primary key.
     * @param {string[]} [props.classes] Header class names.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Header inner HTML Element.
     * @memberof Header
     */
    constructor (props = {
        id: 'header-1',
        classes: [],
    }, innerHTML = false) {
        super({ ...Header.props, ...props });
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
}

// ? Default export
export default Header;