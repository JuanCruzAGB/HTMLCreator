// ? HTMLCreator repository
import Html from "juancruzagb/htmlcreator/js/Core/Html";

/**
 * * Paragraph creates an excellent <p>.
 * @export
 * @class Paragraph
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Paragraph extends Html {
    /**
     * * Creates an instance of Paragraph.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='paragraph-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Paragraph
     */
    constructor (data = {
        props: {
            id: 'paragraph-1',
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Paragraph.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Paragraph.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Paragraph.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Paragraph.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Paragraph
     */
    static props = {
        id: 'paragraph-1',
        classList: [],
        nodeName: 'P',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Paragraph
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Paragraph
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Paragraph
     */
    static children = [
        // 
    ]
}