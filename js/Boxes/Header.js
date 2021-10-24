// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Header creates an excellent <header>.
 * @export
 * @class Header
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Header extends Html {
    /**
     * * Creates an instance of Header.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='header-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @memberof Header
     */
    constructor (data = {
        props: {
            id: 'header-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
    }) {
        super({ ...Header.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Header.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Header.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) }, [ ...Header.children, ...((data && data.hasOwnProperty('children')) ? data.children : []) ]);
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Header
     */
    static props = {
        id: 'header-1',
        classList: [],
        nodeName: 'HEADER',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Header
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Form
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Header
     */
    static children = [
        // 
    ]
}