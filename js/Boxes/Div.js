// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Div creates an excellent <div>.
 * @export
 * @class Div
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Div extends Html {
    /**
     * * Creates an instance of Div.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='div-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @memberof Div
     */
    constructor (data = {
        props: {
            id: 'div-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
    }) {
        super({ ...Div.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Div.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Div.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) }, [ ...Div.children, ...((data && data.hasOwnProperty('children')) ? data.children : []) ]);
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Div
     */
    static props = {
        id: 'div-1',
        classList: [],
        nodeName: 'DIV',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Div
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Div
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Div
     */
    static children = [
        // 
    ]
}