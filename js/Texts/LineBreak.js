// ? HTMLCreator repository
import Html from "@juancruzagb/htmlcreator/js/Core/Html.js";

/**
 * * LineBreak creates an excellent <br>.
 * @export
 * @class LineBreak
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class LineBreak extends Html {
    /**
     * * Creates an instance of LineBreak.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='line-break-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof LineBreak
     */
    constructor (data = {
        props: {
            id: 'line-break-1',
            classList: [],
        }, state: {
            id: false,
        }, parentNode: false,
    }) {
        super({
            props: {
                ...LineBreak.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...LineBreak.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...LineBreak.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof LineBreak
     */
    static props = {
        id: 'line-break-1',
        classList: [],
        nodeName: 'BR',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof LineBreak
     */
    static state = {
        id: false,
    }
}