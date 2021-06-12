// ? JuanCruzAGB repository
import Html from "../../JuanCruzAGB/js/Html.js";

/**
 * * Item creates an excellent <li>.
 * @export
 * @class Item
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Item extends Html {
    /**
     * * Creates an instance of Item.
     * @param {object} [props] Item properties:
     * @param {string} [props.id='li-1'] Item primary key.
     * @param {string[]} [props.classes] Item class names.
     * @param {HTMLElement|false} [innerHTML=false] Item inner HTML Element.
     * @memberof Item
     */
    constructor (props = {
        id: 'li-1',
        classes: [],
    }, innerHTML = false) {
        super({ ...Item.props, ...props });
        this.createHTML(this.props.nodeName, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Item
     */
    static props = {
        id: 'li-1',
        classes: [],
        nodeName: 'LI',
    }
}

// ? Default export
export default Item;