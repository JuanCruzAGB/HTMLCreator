// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Figure creates an excellent <figure>.
 * @export
 * @class Figure
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Figure extends Html {
    /**
     * * Creates an instance of Figure.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='figure-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @memberof Figure
     */
    constructor (data = {
        props: {
            id: 'figure-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
    }) {
        super({ ...Figure.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Figure.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Figure.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) }, [ ...Figure.children, ...((data && data.hasOwnProperty('children')) ? data.children : []) ]);
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Figure
     */
    static props = {
        id: 'figure-1',
        classList: [],
        nodeName: 'FIGURE',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Figure
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