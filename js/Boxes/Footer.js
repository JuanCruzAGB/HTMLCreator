// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Footer creates an excellent <footer>.
 * @export
 * @class Footer
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Footer extends Html {
    /**
     * * Creates an instance of Footer.
     * @param {object} [props]
     * @param {string} [props.id='footer-1'] Primary key.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Footer
     */
    constructor (props = {
        id: 'footer-1',
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = false) {
        super({ ...Footer.props, ...props }, { ...Footer.state, ...state });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Footer
     */
    static props = {
        id: 'footer-1',
        classes: [],
        nodeName: 'FOOTER',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Footer
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Footer;