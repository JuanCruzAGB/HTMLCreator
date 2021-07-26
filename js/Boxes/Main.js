// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Main creates an excellent <main>.
 * @export
 * @class Main
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Main extends Html {
    /**
     * * Creates an instance of Main.
     * @param {object} [props]
     * @param {string} [props.id='main-1'] Primary key.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Main
     */
    constructor (props = {
        id: 'main-1',
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = false) {
        super({ ...Main.props, ...props }, { ...Main.state, ...state });
        this.createHTML(this.props.nodeName);
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Main
     */
    static props = {
        id: 'main-1',
        classes: [],
        nodeName: 'MAIN',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Main
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Main;