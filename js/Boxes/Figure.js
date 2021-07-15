// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Figure creates an excellent <figure>.
 * @export
 * @class Figure
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Figure extends Html {
    /**
     * * Creates an instance of Figure.
     * @param {object} [props] Figure properties:
     * @param {string} [props.id='figure-1'] Figure primary key.
     * @param {string[]} [props.classes] Figure class names.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Image inner HTML Element.
     * @memberof Figure
     */
    constructor (props = {
        id: 'figure-1',
        classes: [],
    }, innerHTML = {}) {
        super({ ...Figure.props, ...props });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Figure
     */
    static props = {
        id: 'figure-1',
        classes: [],
        nodeName: 'FIGURE',
    }
}

// ? Figure childs
Figure.Image = Image;

// ? Default export
export default Figure;