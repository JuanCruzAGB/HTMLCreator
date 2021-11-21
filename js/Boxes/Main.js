// ? HTMLCreatorJS repository
import Html from "juancruzagb/htmlcreator/js/Core/Html";

/**
 * * Main creates an excellent <main>.
 * @export
 * @class Main
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Main extends Html {
    /**
     * * Creates an instance of Main.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='main-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Main
     */
    constructor (data = {
        props: {
            id: 'main-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Main.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Main.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Main.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Main.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Main
     */
    static props = {
        id: 'main-1',
        classList: [],
        nodeName: 'MAIN',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Main
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Main
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Main
     */
    static children = [
        // 
    ]
}