// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * LineBreak creates an excellent <br>.
 * @export
 * @class LineBreak
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class LineBreak extends Html {
    /**
     * * Creates an instance of LineBreak.
     * @param {object} [props]
     * @param {string} [props.id='line-break-1'] Primary key.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @memberof LineBreak
     */
    constructor (props = {
        id: 'line-break-1',
        classes: [],
    }, state = {
        id: false,
    }) {
        super({ ...LineBreak.props, ...props }, { ...LineBreak.state, ...state });
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof LineBreak
     */
    static props = {
        id: 'line-break-1',
        classes: [],
        nodeName: 'BR',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof LineBreak
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default LineBreak;