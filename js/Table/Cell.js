// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Cell creates an excellent <td> or <th>.
 * @export
 * @class Cell
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Cell extends Html {
    /**
     * * Creates an instance of Cell.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='cell-1'] Primary key.
     * @param {string} [data.props.type='normal']
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @memberof Cell
     */
    constructor (data = {
        props: {
            id: 'cell-1',
            type: 'normal',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
    }) {
        props.nodeName = ((props.type === 'header') ? 'TH' : 'TD');
        super({ ...Cell.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Cell.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Cell.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) }, [ ...Cell.children, ...((data && data.hasOwnProperty('children')) ? data.children : []) ]);
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Cell
     */
    static props = {
        id: 'cell-1',
        type: 'normal',
        classList: [],
        nodeName: 'TD',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Cell
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Cell
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Cell
     */
    static children = [
        // 
    ]
}