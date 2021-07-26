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
     * @param {object} [props]
     * @param {string} [props.id='list-1'] Primary key.
     * @param {string} [props.type='unordered']
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {object[]} [items] Array of <li>.
     * @memberof List
     */
    constructor (props = {
        id: 'list-1',
        type: 'unordered',
        classes: [],
    }, state = {
        id: false,
    }, items = []) {
        super({ ...List.props, ...props }, { ...List.state, ...state });
        super({ ...List.props, ...props });
        this.createHTML(this.props.nodeName);
        this.setItems(items);
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
            item = new Item((item.hasOwnProperty('props') ? item.props : {}), (item.hasOwnProperty('state') ? item.state : {}), (item.hasOwnProperty('innerHTML') ? item.innerHTML : []));
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

    /**
     * @static
     * @var {object} state Default state.
     * @memberof List
     */
    static state = {
        id: false,
    }
}

// ? List childs
List.Item = Item;

// ? Default export
export default List;