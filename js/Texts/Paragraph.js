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
     * @param {object} [props]
     * @param {string} [props.id='paragraph-1'] Primary key.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Paragraph
     */
    constructor (props = {
        id: 'paragraph-1',
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = false) {
        super({ ...Paragraph.props, ...props }, { ...Paragraph.state, ...state });
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

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Paragraph
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Paragraph;