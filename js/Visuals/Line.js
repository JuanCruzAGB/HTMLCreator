// ? HTMLCreator repository
import Html from "@juancruzagb/htmlcreator/js/Core/Html.js";

/**
 * * Line creates an excellent <hr>.
 * @export
 * @class Line
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Line extends Html {
    /**
     * * Creates an instance of Line.
     * @param {object} [data.data]
     * @param {object} [data.data.props]
     * @param {string} [data.props.id='line-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Line
     */
    constructor (data = {
        props: {
            id: 'line-1',
            classList: [],
        }, state: {
            id: false,
        }, parentNode: false,
    }) {
        super({
            props: {
                ...Line.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Line.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Line.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Line
     */
    static props = {
        id: 'line-1',
        classList: [],
        nodeName: 'HR',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Line
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Line
     */
    static callbacks = {
        // 
    }
}