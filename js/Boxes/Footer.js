// ? JuanCruzAGB repository
import Html from "../../JuanCruzAGB/js/Html.js";

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
     * @param {object} [props] Footer properties:
     * @param {string} [props.id='footer-1'] Footer primary key.
     * @param {string[]} [props.classes] Footer class names.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Footer inner HTML Element.
     * @memberof Footer
     */
    constructor (props = {
        id: 'footer-1',
        classes: [],
    }, innerHTML = false) {
        super({ ...Footer.props, ...props });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this.html, innerHTML);
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
}

// ? Default export
export default Footer;