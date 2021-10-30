// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Title creates an excellent <h1>, <h2>...
 * @export
 * @class Title
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Title extends Html {
    /**
     * * Creates an instance of Title.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='title-1'] Primary key.
     * @param {number} [data.props.level=1]
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Title
     */
    constructor (data = {
        props: {
            id: 'title-1',
            level: 1,
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        props.nodeName = `H${ props.level }`;
        super({
            props: {
                ...Title.props,
                ...((data && data.hasOwnProperty('props')) ? data.props : {}),
            }, state: {
                ...Title.state,
                ...((data && data.hasOwnProperty('state')) ? data.state : {})
            }, callbacks: {
                ...Title.callbacks,
                ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {})
            }, children: [
                ...Title.children,
                ...((data && data.hasOwnProperty('children')) ? data.children : [])
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Title
     */
    static props = {
        id: 'title-1',
        level: 1,
        classList: [],
        nodeName: 'H1',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Title
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Title
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Title
     */
    static children = [
        // 
    ]
}