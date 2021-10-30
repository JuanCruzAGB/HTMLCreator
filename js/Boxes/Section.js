// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Section creates an excellent <section>.
 * @export
 * @class Section
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Section extends Html {
    /**
     * * Creates an instance of Section.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='section-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Section
     */
    constructor (data = {
        props: {
            id: 'section-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Section.props,
                ...((data && data.hasOwnProperty('props')) ? data.props : {}),
            }, state: {
                ...Section.state,
                ...((data && data.hasOwnProperty('state')) ? data.state : {})
            }, callbacks: {
                ...Section.callbacks,
                ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {})
            }, children: [
                ...Section.children,
                ...((data && data.hasOwnProperty('children')) ? data.children : [])
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Section
     */
    static props = {
        id: 'section-1',
        classList: [],
        nodeName: 'SECTION',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Section
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Section
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Section
     */
    static children = [
        // 
    ]
}