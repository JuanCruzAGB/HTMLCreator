// ? HTMLCreatorJS repository
import Html from '../Core/Html.js';

/**
 * * Item creates an excellent <li>.
 * @export
 * @class Item
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
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
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Item
     */
    constructor (data = {
        props: {
            id: 'li-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Item.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Item.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Item.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Item.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
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