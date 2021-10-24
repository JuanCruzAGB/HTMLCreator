// ? HTMLCreatorJS repository
import Html from "../Html.js";

/**
 * * Label creates an excellent <label>.
 * @export
 * @class Label
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
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
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {array|false} [data.children=false] HTML Element childrens.
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
    }) {
        super({ ...Label.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Label.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Label.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) }, [ ...Label.children, ...((data && data.hasOwnProperty('children')) ? data.children : []) ]);
        this.createHTML(this.props.nodeName);
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