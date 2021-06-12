// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

/**
 * * Cell creates an excellent <td> or <th>.
 * @export
 * @class Cell
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Cell extends Html {
    /**
     * * Creates an instance of Cell.
     * @param {object} [props] Cell properties:
     * @param {string} [props.id='cell-1'] Cell primary key.
     * @param {string} [props.type='normal'] Cell type.
     * @param {string[]} [props.classes] Cell class names.
     * @param {HTMLElement|false} [innerHTML=false] Item inner HTML Element.
     * @memberof Cell
     */
    constructor (props = {
        id: 'cell-1',
        type: 'normal',
        classes: [],
    }, innerHTML = false) {
        props.nodeName = ((props.type === 'header') ? 'TH' : 'TD');
        super({ ...Cell.props, ...props });
        this.createHTML(this.props.nodeName, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Cell
     */
    static props = {
        id: 'cell-1',
        type: 'normal',
        classes: [],
        nodeName: 'TD',
    }
}

// ? Default export
export default Cell;