// ? HTMLCreatorJS repository
import Html from "juancruzagb/HTMLCreatorJS/js/Core/Html";

/**
 * * Cell creates an excellent <td> or <th>.
 * @export
 * @class Cell
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Cell extends Html {
    /**
     * * Creates an instance of Cell.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='cell-1'] Primary key.
     * @param {string} [data.props.type='normal']
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
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
        parentNode: false,
    }) {
        props.nodeName = ((props.type === 'header') ? 'TH' : 'TD');
        super({
            props: {
                ...Cell.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Cell.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Cell.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Cell.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
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