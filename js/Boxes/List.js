// ? HTMLCreatorJS repository
import Html from '../Html.js';
import Item from './Item.js';

/**
 * * List creates an excellent <ul> or <ol>.
 * @export
 * @class List
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class List extends Html {
    /**
     * * Creates an instance of List.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='list-1'] Primary key.
     * @param {string} [data.props.type='unordered']
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {object[]} [data.items] Array of <li>.
     * @memberof List
     */
    constructor (data = {
        props: {
            id: 'list-1',
            type: 'unordered',
            classList: [],
        }, state: {
            id: false,
        }, items: [],
    }) {
        super({ ...List.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...List.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...List.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) });
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
        for (const key in items) {
            if (Object.hasOwnProperty.call(items, key)) {
                let data = items[key];
                let item = new Item({
                    ...data,
                    id: `${ this.props.id }-item-${ parseInt(key) + 1 }`,
                });
                this.items.push(item);
                this.appendChild(item.html);
            }
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
            for (const item of this.items) {
                if (item.props.id == id_item) {
                    return item;
                }
            }
            return false;
        }
        if (!id_item) {
            console.error('Item primary key is required');
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
            for (const item of this.items) {
                if (item.props.id == id_item) {
                    return true;
                }
            }
            return false;
        }
        if (!id_item) {
            console.error('Item primary key is required');
        }
    }

    /**
     * * Removes a List Item.
     * @param {string} id_item Item primary key.
     * @returns {Item|false}
     * @memberof List
     */
    removeItem (id_item = false) {
        if (id_item) {
            for (const key in [...this.items]) {
                if (Object.hasOwnProperty.call(this.items, key)) {
                    const item = this.items[key];
                    if (item.props.id == id_item) {
                        item.removeHTML();
                        delete this.items[key];
                        return item;
                    }
                }
            }
            return false;
        }
        if (!id_item) {
            console.error('Item primary key is required');
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
        classList: [],
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

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof List
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {Item} Item Item class child.
     * @memberof List
     */
    static Item = Item;
}