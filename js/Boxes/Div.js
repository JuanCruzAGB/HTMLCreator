// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Div creates an excellent <div>.
 * @export
 * @class Div
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Div extends Html {
    /**
     * * Creates an instance of Div.
     * @param {object} [props]
     * @param {string} [props.id='div-1'] Primary key.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Div
     */
    constructor (props = {
        id: 'div-1',
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = false) {
        super({ ...Div.props, ...props }, { ...Div.state, ...state });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Div
     */
    static props = {
        id: 'div-1',
        classes: [],
        nodeName: 'DIV',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Div
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Div;