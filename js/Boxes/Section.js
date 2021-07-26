// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

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
     * @param {object} [props]
     * @param {string} [props.id='section-1'] Primary key.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Section
     */
    constructor (props = {
        id: 'section-1',
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = false) {
        super({ ...Section.props, ...props }, { ...Section.state, ...state });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
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

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Section
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Section;