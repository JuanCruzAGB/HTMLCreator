// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Title creates an excellent <h1>, <h2>...
 * @export
 * @class Title
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Title extends Html {
    /**
     * * Creates an instance of Title.
     * @param {object} [props]
     * @param {string} [props.id='title-1'] Primary key.
     * @param {number} [props.level=1]
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Title
     */
    constructor (props = {
        id: 'title-1',
        level: 1,
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = false) {
        props.nodeName = `H${ props.level }`;
        super({ ...Title.props, ...props }, { ...Title.state, ...state });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Title
     */
    static props = {
        id: 'title-1',
        level: 1,
        classes: [],
        nodeName: 'H1',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Title
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Title;