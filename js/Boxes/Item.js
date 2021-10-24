// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Item creates an excellent <li>.
 * @export
 * @class Item
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Item extends Html {
    /**
     * * Creates an instance of Item.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='li-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @memberof Item
     */
    constructor (data = {
        props: {
            id: 'li-1',
            classList: [],
            children: false,
        }, state: {
            id: false,
        }, children: false,
    }) {
        super({ ...Item.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Item.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Item.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) }, [ ...Item.children, ...((data && data.hasOwnProperty('children')) ? data.children : []) ]);
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Item
     */
    static props = {
        id: 'li-1',
        classList: [],
        nodeName: 'LI',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Item
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Item
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Item
     */
    static children = [
        // 
    ]
}