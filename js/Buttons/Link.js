// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Link creates an excellet <link>.
 * @export
 * @class Link
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Link extends Html {
    /**
     * * Creates an instance of Link.
     * @param {object} [props] Link properties:
     * @param {string} [props.id='link-1'] Link primary key.
     * @param {string} [props.url='#'] Link redirection url.
     * @param {string[]} [props.classes] Link class names.
     * @param {object} [state] Link state:
     * @param {boolean} [state.preventDefault=false] Link click event prevent default.
     * @param {object} [callback] Link click callback.
     * @param {function} [callback.function] Link click callback function.
     * @param {object} [callback.params] Link click callback params.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Link inner HTML Element.
     * @memberof Link
     */
    constructor (props = {
        id: 'link-1',
        url: '#',
        classes: [],
    }, state = {
        preventDefault: false,
    }, callback = {
        function: function() { /* console.log('clicked') */ },
        params: {}
    }, innerHTML = false) {
        super({ ...Link.props, ...props }, { ...Link.state, ...state }, { click: { ...Link.callback, ...callback }});
        this.setCallbacks();
        this.createHTML(this.props.nodeName);
        this.setHTMLAttributes();
        HTMLCreator.setInnerHTML(this, innerHTML);
        this.setEventListener();
    }
    
    /**
     * * Set the Link event listener.
     * @memberof Link
     */
    setEventListener () {
        const instance = this;
        this.html.addEventListener('click', function(e) {
            if (instance.state.preventDefault) {
                e.preventDefault();
            }
            instance.click();
        });
    }

    /**
     * * Set the HTML Element attributes.
     * @memberof Link
     */
    setHTMLAttributes () {
        this.setAttribute('href', this.props.url);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Link
     */
    static props = {
        id: 'link-1',
        url: '#',
        classes: [],
        nodeName: 'A',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Link
     */
    static state = {
        preventDefault: false,
    }

    /**
     * @static
     * @var {object} callback Default callback.
     * @memberof Link
     */
    static callback = {
        function: function() { /* console.log('clicked') */ },
        params: {}
    }
}

// ? Default export
export default Link;