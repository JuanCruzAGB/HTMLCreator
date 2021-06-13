// ? JuanCruzAGB repository
import Html from "../../JuanCruzAGB/js/Html.js";

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
     * @param {object} [props] Title properties:
     * @param {string} [props.id='title-1'] Title primary key.
     * @param {number} [props.level=1] Title level.
     * @param {string[]} [props.classes] Title class names.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Title inner HTML Element.
     * @memberof Title
     */
    constructor (props = {
        id: 'title-1',
        level: 1,
        classes: [],
    }, innerHTML = false) {
        props.nodeName = `H${ props.level }`;
        super({ ...Title.props, ...props });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this.html, innerHTML);
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
}

// ? Default export
export default Title;