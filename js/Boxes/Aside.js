// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Aside creates an excellent <aside>.
 * @export
 * @class Aside
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Aside extends Html {
    /**
     * * Creates an instance of Aside.
     * @param {object} [data.props]
     * @param {string} [data.props.id="aside-1"] Primary key.
     * @param {string[]} [data.props.classes] Class names.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [data.innerHTML=false] Inner HTML Element.
     * @memberof Aside
     */
    constructor (data = {
        props: {
            id: "aside-1",
            classes: [],
        }, state: {
            id: false,
        }, innerHTML: false
    }) {
        super({ ...Aside.props, ...(data.hasOwnProperty("props") ? data.props : {}) }, { ...Aside.state, ...(data.hasOwnProperty("state") ? data.state : {}) });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Aside
     */
    static props = {
        id: "aside-1",
        classes: [],
        nodeName: "ASIDE",
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Aside
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Aside;