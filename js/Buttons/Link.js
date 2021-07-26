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
     * @param {object} [props]
     * @param {string} [props.id='link-1'] Primary key.
     * @param {string} [props.url='#'] Redirection url.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.preventDefault=true] If the Click event should execut prevent default.
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {object} [callback] Click callback:
     * @param {function} [callback.function] Click callback function.
     * @param {object} [callback.params] Click callback params.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Link
     */
    constructor (props = {
        id: 'link-1',
        url: '#',
        classes: [],
    }, state = {
        preventDefault: false,
        id: false,
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
        id: false,
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