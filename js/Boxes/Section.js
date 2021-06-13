// ? JuanCruzAGB repository
import Html from "../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Section creates an excellent <section>.
 * @export
 * @class Section
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Section extends Html {
    /**
     * * Creates an instance of Section.
     * @param {object} [props] Section properties:
     * @param {string} [props.id='section-1'] Section primary key.
     * @param {string[]} [props.classes] Section class names.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Section inner HTML Element.
     * @memberof Section
     */
    constructor (props = {
        id: 'section-1',
        classes: [],
    }, innerHTML = false) {
        super({ ...Section.props, ...props });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this.html, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Section
     */
    static props = {
        id: 'section-1',
        classes: [],
        nodeName: 'SECTION',
    }
}

// ? Default export
export default Section;