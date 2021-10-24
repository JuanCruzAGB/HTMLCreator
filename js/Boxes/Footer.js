// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Footer creates an excellent <footer>.
 * @export
 * @class Footer
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Footer extends Html {
    /**
     * * Creates an instance of Footer.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='footer-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @memberof Footer
     */
    constructor (data = {
        props: {
            id: 'footer-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
    }) {
        super({ ...Footer.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Footer.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Footer.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) }, [ ...Footer.children, ...((data && data.hasOwnProperty('children')) ? data.children : []) ]);
        this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Footer
     */
    static props = {
        id: 'footer-1',
        classList: [],
        nodeName: 'FOOTER',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Footer
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Footer
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Footer
     */
    static children = [
        // 
    ]
}