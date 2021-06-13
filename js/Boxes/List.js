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
        this.createHTML(this.props.nodeName);
        this.setItems(items);
    }

    /**
     * * Set the HTML Element child nodes.
     * @memberof List
     */
    setChilds () {
        for (const item of this.items) {
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
        for (let item of items) {
            item = new Item((item.hasOwnProperty('props') ? item.props : []), (item.hasOwnProperty('innerHTML') ? item.innerHTML : []));
            this.items.push(item.html);
            this.appendChild(item.html);
        }
    }

    /**
     * * Get a List Item.
     * @param {string} id_item Item primary key.
     * @returns {Item|false}
     * @memberof List
     */
    getItem (id_item = false) {
        if (id_item) {
            for (const item of this.structure.items) {
                if (item.props.id === id_item) {
                    return item;
                }
            }
            return false;
        }
        if (!id_item) {
            console.error("Item primary key is required");
        }
    }

    /**
     * * Check if there is a List Item.
     * @param {string} id_item Item primary key.
     * @returns {boolean}
     * @memberof List
     */
    hasItem (id_item = false) {
        if (id_item) {
            for (const row of this.rows) {
                if (row.props.id === id_item) {
                    return true;
                }
            }
            return false;
        }
        if (!id_item) {
            console.error("Item primary key is required");
        }
    }

    /**
     * * Removes a List Item.
     * @param {string} item Item primary key.
     * @returns {Item|false}
     * @memberof List
     */
    removeItem (item = false) {
        if (item) {
            for (const key in [...this.items]) {
                if (Object.hasOwnProperty.call(this.items, key)) {
                    const item = this.items[key];
                    if (item.props.id === item) {
                        item.removeHTML();
                        delete this.items[key];
                        return item;
                    }
                }
            }
            return false;
        }
        if (!item) {
            console.error("Item primary key is required");
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