// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Figure creates an excellent <figure>.
 * @export
 * @class Figure
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Figure extends Html {
    /**
     * * Creates an instance of Figure.
     * @param {object} [props]
     * @param {string} [props.id='figure-1'] Primary key.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Figure
     */
    constructor (props = {
        id: 'figure-1',
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = {}) {
        super({ ...Figure.props, ...props }, { ...Figure.state, ...state });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Figure
     */
    static props = {
        id: 'figure-1',
        classes: [],
        nodeName: 'FIGURE',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Figure
     */
    static state = {
        id: false,
    }
}

// ? Figure childs
Figure.Image = Image;

// ? Default export
export default Figure;