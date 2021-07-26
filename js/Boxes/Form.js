// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Form creates an excellent <form>.
 * @export
 * @class Form
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Form extends Html {
    /**
     * * Creates an instance of Form.
     * @param {object} [props]
     * @param {string} [props.id='form-1'] Primary key.
     * @param {string} [props.action='#']
     * @param {string} [props.method='post']
     * @param {string|false} [props.enctype=false]
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.submit=true] If the HTML Element should be submited.
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {object} [callback] Submit callback:
     * @param {function} [callback.function] Submit callback function.
     * @param {*} [callback.params] Submit callback function params.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Form
     */
    constructor (props = {
        id: 'form-1',
        action: '#',
        method: 'post',
        enctype: false,
        classes: [],
    }, state = {
        submit: true,
        id: false,
    }, callback = {
        function: function (params) { /* console.log('params') */ },
        params: {}
    }, innerHTML = false) {
        super({ ...Form.props, ...props }, { ...Form.state, ...state }, { submit: { ...Form.callback, ...callback } });
        HTMLCreator.setInnerHTML(this, innerHTML);
        this.createHTML(this.props.nodeName);
        this.setEventListener();
        this.setHTMLAttributes();
    }
    
    /**
     * * Set the Form event listener.
     * @memberof Form
     */
    setEventListener () {
        const instance = this;
        this.html.addEventListener('submit', function(e) {
            if (instance.state.submit) {
                e.preventDefault();
                instance.submit();
            }
        });
    }

    /**
     * * Set the HTML Element attributes.
     * @memberof Form
     */
    setHTMLAttributes () {
        this.setAttribute('action', this.props.action);
        this.setAttribute('method', this.props.method);
        if (this.props.enctype) {
            this.setAttribute('enctype', this.props.enctype);
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Form
     */
    static props = {
        id: 'form-1',
        action: '#',
        method: 'post',
        enctype: false,
        classes: [],
        nodeName: 'FORM',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Form
     */
    static state = {
        submit: true,
        id: false,
    }

    /**
     * @static
     * @var {object} callback Default callback.
     * @memberof Form
     */
    static callback = {
        function: function (params) { /* console.log('params') */ },
        params: {}
    }
}

// ? Default export
export default Form;