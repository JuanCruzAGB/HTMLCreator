// ? HTMLCreator repository
import Html from "@juancruzagb/htmlcreator/js/Core/Html.js";

/**
 * * Div creates an excellent <div>.
 * @export
 * @class Div
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Div extends Html {
    /**
     * * Creates an instance of Div.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='div-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Div
     */
    constructor (data = {
        props: {
            id: 'div-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Div.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Div.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Div.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Div.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
        // this.createHTML(this.props.nodeName);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Div
     */
    static props = {
        id: 'div-1',
        classList: [],
        nodeName: 'DIV',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Div
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Div
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Div
     */
    static children = [
        // 
    ]
}