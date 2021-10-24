// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Main creates an excellent <main>.
 * @export
 * @class Main
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Main extends Html {
    /**
     * * Creates an instance of Main.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='main-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @memberof Main
     */
    constructor (data = {
        props: {
            id: 'main-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
    }) {
        super({ ...Main.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Main.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Main.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) }, [ ...Main.children, ...((data && data.hasOwnProperty('children')) ? data.children : []) ]);
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Main
     */
    static props = {
        id: 'main-1',
        classList: [],
        nodeName: 'MAIN',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Main
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Main
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Main
     */
    static children = [
        // 
    ]
}