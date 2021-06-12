// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import Item from "./Item.js";

/**
 * * List creates an excellent <ul> or <ol>.
 * @export
 * @class List
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class List extends Html {
    /**
     * * Creates an instance of List.
     * @param {object} [props] List properties:
     * @param {string} [props.id='list-1'] List primary key.
     * @param {string} [props.type='unordered'] List type.
     * @param {string[]} [props.classes] List class names.
     * @param {object[]} [items] List Items.
     * @memberof List
     */
    constructor (props = {
        id: 'list-1',
        type: 'unordered',
        classes: [],
    }, items = []) {
        props.nodeName = ((props.type === 'ordered') ? 'OL' : 'UL');
        super({ ...List.props, ...props });
        this.setItems(items);
        this.createHTML(this.props.nodeName);
        this.setChilds();
    }

    /**
     * * Set the HTML Element child nodes.
     * @memberof List
     */
    setChilds () {
        for (const item of this.items) {
            this.appendChild(item.html);
        }
    }

    /**
     * * Set the List Items.
     * @param {object[]} [items] List Items.
     * @memberof List
     */
    setItems (items = []) {
        if (!this.items) {
            this.items = [];
        }
        for (const item of items) {
            this.items.push(new Item((item.hasOwnProperty('props') ? item.props : []), (item.hasOwnProperty('innerHTML') ? item.innerHTML : [])));
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof List
     */
    static props = {
        id: 'list-1',
        type: 'unordered',
        classes: [],
        nodeName: 'UL',
    }
}

// ? List childs
List.Item = Item;

// ? Default export
export default List;