// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

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
     * @param {object} [props]
     * @param {string} [props.id='cell-1'] Primary key.
     * @param {string} [props.type='normal']
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Cell
     */
    constructor (props = {
        id: 'cell-1',
        type: 'normal',
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = false) {
        props.nodeName = ((props.type === 'header') ? 'TH' : 'TD');
        super({ ...Cell.props, ...props }, { ...Cell.state, ...state });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
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

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Cell
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Cell;