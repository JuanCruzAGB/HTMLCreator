// ? HTMLCreator repository
import Html from "@juancruzagb/htmlcreator/js/Core/Html.js";

/**
 * * Aside creates an excellent <aside>.
 * @export
 * @class Aside
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Aside extends Html {
    /**
     * * Creates an instance of Aside.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='aside-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Aside
     */
    constructor (data = {
        props: {
            id: 'aside-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Aside.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Aside.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Aside.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Aside.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Aside
     */
    static props = {
        id: 'aside-1',
        classList: [],
        nodeName: 'ASIDE',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Aside
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