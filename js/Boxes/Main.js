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
     * @param {object} [props] Main properties:
     * @param {string} [props.id='main-1'] Main primary key.
     * @param {string[]} [props.classes] Main class names.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Main inner HTML Element.
     * @memberof Main
     */
    constructor (props = {
        id: 'main-1',
        classes: [],
    }, innerHTML = false) {
        super({ ...Main.props, ...props });
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
}

// ? Default export
export default Main;