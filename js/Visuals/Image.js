// ? JuanCruzAGB repository
import Html from "../../JuanCruzAGB/js/Html.js";

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
     * @param {object} [props] Image properties:
     * @param {string} [props.id='image-1'] Image primary key.
     * @param {string|false} [props.url=false] Image url.
     * @param {string} [props.name='Image genereted with HTMLCreatorJS'] Image name.
     * @param {string[]} [props.classes] Image class names.
     * @memberof Image
     */
    constructor (props = {
        id: 'image-1',
        url: false,
        name: 'Image genereted with HTMLCreatorJS',
        classes: [],
    }) {
        super({ ...Image.props, ...props });
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
}

// ? Default export
export default Image;