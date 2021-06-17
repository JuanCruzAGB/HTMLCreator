// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Paragraph creates an excellent <p>.
 * @export
 * @class Paragraph
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Paragraph extends Html {
    /**
     * * Creates an instance of Paragraph.
     * @param {object} [props] Paragraph properties:
     * @param {string} [props.id='paragraph-1'] Paragraph primary key.
     * @param {string[]} [props.classes] Paragraph class names.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Paragraph inner HTML Element.
     * @memberof Paragraph
     */
    constructor (props = {
        id: 'paragraph-1',
        classes: [],
    }, innerHTML = false) {
        super({ ...Paragraph.props, ...props });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Paragraph
     */
    static props = {
        id: 'paragraph-1',
        classes: [],
        nodeName: 'P',
    }
}

// ? Default export
export default Paragraph;