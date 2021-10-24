// ? JuanCruzAGB repository
import Html from "../Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Italic creates an excellent <i>.
 * @export
 * @class Italic
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Italic extends Html {
    /**
     * * Creates an instance of Italic.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id="italic-1"] Primary key.
     * @param {string[]} [data.props.classes] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [data.innerHTML=false] Inner HTML Element.
     * @memberof Italic
     */
    constructor (data = {
        props: {
            id: "italic-1",
            classes: [],
        }, state: {
            id: false,
        }, innerHTML: false,
    }) {
        super({ ...Italic.props, ...(data.hasOwnProperty("props") ? data.props : {}) }, { ...Italic.state, ...(data.hasOwnProperty("state") ? data.state : {}) });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Italic
     */
    static props = {
        id: "italic-1",
        classes: [],
        nodeName: "I",
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Italic
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Italic;