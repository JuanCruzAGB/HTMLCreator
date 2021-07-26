// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Button creates an excellet <button>.
 * @export
 * @class Button
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Button extends Html {
    /**
     * * Creates an instance of Button.
     * @param {object} [props]
     * @param {string} [props.id='button-1'] Primary key.
     * @param {string|false} [props.title=false]
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.preventDefault=true] If the Click event should execut prevent default.
     * @param {boolean} [state.disabled=false] If the HTML Element should be disabled.
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {object} [callback] Click callback:
     * @param {function} [callback.function] Click callback function.
     * @param {object} [callback.params] Click callback params.
     * @param {string|HTMLElement|array|false|false} [innerHTML=false] Inner HTML Element.
     * @memberof Button
     */
    constructor (props = {
        id: 'button-1',
        title: false,
        classes: [],
    }, state = {
        preventDefault: true,
        disabled: false,
        id: false,
    }, callback = {
        function: function () { /* console.log('clicked') */ },
        params: {}
    }, innerHTML = false) {
        super({ ...Button.props, ...props }, { ...Button.state, ...state }, { click: { ...Button.callback, ...callback }});
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
        this.setEventListener();
        this.setHTMLAttributes();
        this.checkState();
    }
    
    /**
     * * Set the Button event listener.
     * @memberof Button
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
     * @memberof Button
     */
    setHTMLAttributes () {
        if (this.props.title) {
            this.setAttribute('title', this.props.title);
        }
    }

    /**
     * * Check the Button state.
     * @memberof Button
     */
    checkState () {
        if (this.state.disabled) {
            this.checkDisabledState();
        }
    }

    /**
     * * Check the BUtton disabled state.
     * @memberof Button
     */
    checkDisabledState () {
        if (this.state.disabled) {
            this.setAttribute('disabled', true);
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Button
     */
    static props = {
        id: 'button-1',
        title: false,
        classes: [],
        nodeName: 'BUTTON',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Button
     */
    static state = {
        preventDefault: true,
        disabled: false,
        id: false,
    }

    /**
     * @static
     * @var {object} callback Default callback.
     * @memberof Button
     */
    static callback = {
        function: function() { /* console.log('clicked') */ },
        params: {}
    }
}

// ? Default export
export default Button;