// ? HTMLCreator repository
import Html from "juancruzagb/htmlcreator/js/Core/Html";

/**
 * * Nav creates an excellent <nav>.
 * @export
 * @class Nav
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Nav extends Html {
    /**
     * * Creates an instance of Nav.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='nav-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Nav
     */
    constructor (data = {
        props: {
            id: 'nav-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Nav.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Nav.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Nav.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Nav.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Nav
     */
    static props = {
        id: 'nav-1',
        classList: [],
        nodeName: 'NAV',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Nav
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Nav
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Nav
     */
    static children = [
        // 
    ]
}