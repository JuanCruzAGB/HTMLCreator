// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import Image from "../Visuals/Image.js";

/**
 * * Figure creates an excellent <figure>.
 * @export
 * @class Figure
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Figure extends Html {
    /**
     * * Creates an instance of Figure.
     * @param {object} [props] Figure properties:
     * @param {string} [props.id='figure-1'] Figure primary key.
     * @param {string[]} [props.classes] Figure class names.
     * @param {object} [image] Image properties.
     * @memberof Figure
     */
    constructor (props = {
        id: 'figure-1',
        classes: [],
    }, image = {}) {
        super({ ...Figure.props, ...props });
        this.setImage(image);
        this.createHTML(this.props.nodeName, this.image.html);
    }

    /**
     * * Set the Figure Image.
     * @param {object} [image] Image properties.
     * @memberof Figure
     */
    setImage (image = {}) {
        this.image = new Image(((image.hasOwnProperty('props')) ? image.props : {}));
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Figure
     */
    static props = {
        id: 'figure-1',
        classes: [],
        nodeName: 'FIGURE',
    }
}

// ? Figure childs
Figure.Image = Image;

// ? Default export
export default Figure;