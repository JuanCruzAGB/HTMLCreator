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
     * @param {object} [props] Button properties:
     * @param {string} [props.id='button-1'] Button primary key.
     * @param {string|false} [props.title=false] Button title.
     * @param {string[]} [props.classes] Button class names.
     * @param {object} [state] Button state:
     * @param {boolean} [state.preventDefault=true] Button click event prevent default.
     * @param {boolean} [state.disabled=false] Button disabled state.
     * @param {object} [callback] Button click callback.
     * @param {function} [callback.function] Button click callback function.
     * @param {object} [callback.params] Button click callback params.
     * @param {string|HTMLElement|array|false|false} [innerHTML=false] Button inner HTML Element.
     * @memberof Button
     */
    constructor (props = {
        id: 'button-1',
        title: false,
        classes: [],
    }, state = {
        preventDefault: true,
        disabled: false,
    }, callback = {
        function: function () { /* console.log('clicked') */ },
        params: {}
    }, innerHTML = false) {
        super({ ...Button.props, ...props }, { ...Button.state, ...state });
        this.setCallbacks({ default: { ...Button.callback, ...callback }});
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this.html, innerHTML);
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
     * * Button click callback.
     * @param {*} [params={}] Click callback function optional params
     * @memberof Button
     */
    click (params = {}) {
        this.execute('default', {
            button: this,
            ...params
        });
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