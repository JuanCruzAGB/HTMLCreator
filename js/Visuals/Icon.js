// ? HTMLCreatorJS repository
import Html from '../Core/Html.js';

/**
 * * Icon creates an excellent <icon>.
 * @export
 * @class Icon
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Icon extends Html {
    /**
     * * Creates an instance of Icon.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='icon-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Icon
     */
    constructor (data = {
        props: {
            id: 'icon-1',
            classList: [],
        }, state: {
            id: false,
        }, parentNode: false,
    }) {
        super({
            props: {
                ...Icon.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Icon.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Icon.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Icon
     */
    static props = {
        id: 'icon-1',
        classList: [],
        nodeName: 'I',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Icon
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Icon
     */
    static callbacks = {
        // 
    }
}