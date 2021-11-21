// ? HTMLCreatorJS repository
import Html from "juancruzagb/htmlcreator/js/Core/Html";

/**
 * * Footer creates an excellent <footer>.
 * @export
 * @class Footer
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
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
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Footer
     */
    constructor (data = {
        props: {
            id: 'footer-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Footer.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Footer.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Footer.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Footer.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
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