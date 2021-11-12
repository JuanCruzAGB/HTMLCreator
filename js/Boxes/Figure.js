// ? HTMLCreatorJS repository
import Html from '../Core/Html.js';

/**
 * * Figure creates an excellent <figure>.
 * @export
 * @class Figure
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
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
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Figure
     */
    constructor (data = {
        props: {
            id: 'figure-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Figure.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Figure.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Figure.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Figure.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
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