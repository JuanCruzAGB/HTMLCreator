// ? HTMLCreator repository
import Html from "@juancruzagb/htmlcreator/js/Core/Html.js";

/**
 * * Label creates an excellent <label>.
 * @export
 * @class Label
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Label extends Html {
    /**
     * * Creates an instance of Label.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='label-1'] Primary key.
     * @param {string|false} [data.props.for=false] HTML for <input> primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Label
     */
    constructor (data = {
        props: {
            id: 'label-1',
            for: false,
            classList: [],
        }, state: {
            id: false,
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Label.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Label.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Label.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Label.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
        this.setHTMLAttributes();
    }

    /**
     * * Set the HTML Element attributes.
     * @memberof Label
     */
    setHTMLAttributes () {
        if (this.props.for) {
            this.setAttribute('for', this.props.for);
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Label
     */
    static props = {
        id: 'label-1',
        for: false,
        classList: [],
        nodeName: 'LABEL',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Label
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Label
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Label
     */
    static children = [
        // 
    ]
}