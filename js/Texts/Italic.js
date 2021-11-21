// ? HTMLCreatorJS repository
import Html from "juancruzagb/htmlcreator/js/Core/Html";

/**
 * * Italic creates an excellent <i>.
 * @export
 * @class Italic
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Italic extends Html {
    /**
     * * Creates an instance of Italic.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='italic-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Italic
     */
    constructor (data = {
        props: {
            id: 'italic-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Italic.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Italic.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Italic.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Italic.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Italic
     */
    static props = {
        id: 'italic-1',
        classList: [],
        nodeName: 'I',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Italic
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Italic
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Italic
     */
    static children = [
        // 
    ]
}