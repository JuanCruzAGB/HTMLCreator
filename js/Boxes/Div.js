// ? JuanCruzAGB repository
import Html from "../../JuanCruzAGB/js/Html.js";

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
     * @param {object} [props] Div properties:
     * @param {string} [props.id='div-1'] Div primary key.
     * @param {string[]} [props.classes] Div class names.
     * @param {HTMLElement|false} [innerHTML=false] Div inner HTML Element.
     * @memberof Div
     */
    constructor (props = {
        id: 'div-1',
        classes: [],
    }, innerHTML = false) {
        super({ ...Div.props, ...props });
        this.createHTML(this.props.nodeName, innerHTML);
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
}

// ? Default export
export default Div;