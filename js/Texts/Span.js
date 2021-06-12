// ? JuanCruzAGB repository
import Html from "../../JuanCruzAGB/js/Html.js";

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
     * @param {object} [props] Span properties:
     * @param {string} [props.id='span-1'] Span primary key.
     * @param {string[]} [props.classes] Span class names.
     * @param {HTMLElement|false} [innerHTML=false] Span inner HTML Element.
     * @memberof Span
     */
    constructor (props = {
        id: 'span-1',
        classes: [],
    }, innerHTML = false) {
        super({ ...Span.props, ...props });
        this.createHTML(this.props.nodeName, innerHTML);
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
}

// ? Default export
export default Span;