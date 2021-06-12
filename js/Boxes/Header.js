// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import Title from "../Texts/Title.js";

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
     * @param {object} [title] Title properties.
     * @memberof Header
     */
    constructor (props = {
        id: 'header-1',
        classes: [],
    }, title = {}) {
        super({ ...Header.props, ...props });
        this.setTitle(title);
        this.createHTML(this.props.nodeName, this.title.html);
    }

    /**
     * * Set the Header Title.
     * @param {object} [title] Title properties.
     * @memberof Header
     */
    setTitle (title = {}) {
        this.title = new Title(((title.hasOwnProperty('props')) ? title.props : {}), ((title.hasOwnProperty('innerHTML')) ? title.innerHTML : false));
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

// ? Header childs
Header.Title = Title;

// ? Default export
export default Header;