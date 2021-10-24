// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Aside creates an excellent <aside>.
 * @export
 * @class Aside
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Aside extends Html {
    /**
     * * Creates an instance of Aside.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='aside-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @memberof Aside
     */
    constructor (data = {
        props: {
            id: 'aside-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
    }) {
        super({ ...Aside.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Aside.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Aside.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) }, [ ...Aside.children, ...((data && data.hasOwnProperty('children')) ? data.children : []) ]);
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Aside
     */
    static props = {
        id: 'aside-1',
        classList: [],
        nodeName: 'ASIDE',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Aside
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Aside
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Aside
     */
    static children = [
        // 
    ]
}