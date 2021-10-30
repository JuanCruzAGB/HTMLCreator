// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Image creates an excellent <img>.
 * @export
 * @class Image
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Image extends Html {
    /**
     * * Creates an instance of Image.
     * @param {object} [data.data]
     * @param {object} [data.data.props]
     * @param {string} [data.props.id='image-1'] Primary key.
     * @param {string|false} [data.props.url=false] File url.
     * @param {string} [data.props.name='Image genereted with HTMLCreatorJS']
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Image
     */
    constructor (data = {
        props: {
            id: 'image-1',
            url: false,
            name: 'Image genereted with HTMLCreatorJS',
            classList: [],
        }, state: {
            id: false,
        }, parentNode: false,
    }) {
        super({
            props: {
                ...Image.props,
                ...((data && data.hasOwnProperty('props')) ? data.props : {}),
            }, state: {
                ...Image.state,
                ...((data && data.hasOwnProperty('state')) ? data.state : {})
            }, callbacks: {
                ...Image.callbacks,
                ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {})
            }, parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
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
     * * Saves a new Image URL.
     * @param {string} url
     * @memberof Image
     */
    set url (url) {
        this.setProps('url', url);
        this.setAttribute('src', this.props.url);
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
        classList: [],
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

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Image
     */
    static callbacks = {
        // 
    }
}