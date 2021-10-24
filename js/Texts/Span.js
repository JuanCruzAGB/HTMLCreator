// ? JuanCruzAGB repository
import Html from "../Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Span creates an excellent <span>.
 * @export
 * @class Span
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Span extends Html {
    /**
     * * Creates an instance of Span.
     * @param {object} [props]
     * @param {string} [props.id='span-1'] Primary key.
     * @param {string[]} [props.classes] Class list.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Span
     */
    constructor (props = {
        id: 'span-1',
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = false) {
        super({ ...Span.props, ...props }, { ...Span.state, ...state });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Span
     */
    static props = {
        id: 'span-1',
        classes: [],
        nodeName: 'SPAN',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Span
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Span;