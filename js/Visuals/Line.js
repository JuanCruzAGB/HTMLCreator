// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Line creates an excellent <hr>.
 * @export
 * @class Line
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Line extends Html {
    /**
     * * Creates an instance of Line.
     * @param {object} [props]
     * @param {string} [props.id='line-1'] Primary key.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @memberof Line
     */
    constructor (props = {
        id: 'line-1',
        classes: [],
    }, state = {
        id: false,
    }) {
        super({ ...Line.props, ...props }, { ...Line.state, ...state });
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Line
     */
    static props = {
        id: 'line-1',
        classes: [],
        nodeName: 'HR',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Line
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Line;