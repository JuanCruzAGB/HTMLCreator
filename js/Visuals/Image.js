// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

/**
 * * Image creates an excellent <img>.
 * @export
 * @class Image
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Image extends Html {
    /**
     * * Creates an instance of Image.
     * @param {object} [props]
     * @param {string} [props.id='image-1'] Primary key.
     * @param {string|false} [props.url=false] File url.
     * @param {string} [props.name='Image genereted with HTMLCreatorJS']
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @memberof Image
     */
    constructor (props = {
        id: 'image-1',
        url: false,
        name: 'Image genereted with HTMLCreatorJS',
        classes: [],
    }, state = {
        id: false,
    }) {
        super({ ...Image.props, ...props }, { ...Image.state, ...state });
        this.createHTML(this.props.nodeName);
        this.setHTMLAttributes();
    }

    /**
     * * Set the HTML Element attributes.
     * @memberof Image
     */
    setHTMLAttributes () {
        this.setAttribute('src', this.props.url);
        this.setAttribute('alt', this.props.name);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Image
     */
    static props = {
        id: 'image-1',
        url: false,
        name: 'Image genereted with HTMLCreatorJS',
        classes: [],
        nodeName: 'IMG',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Image
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Image;