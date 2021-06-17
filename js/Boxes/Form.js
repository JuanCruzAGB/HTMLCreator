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
     * @param {object} [props] Form properties:
     * @param {string} [props.id='form-1'] Form primary key.
     * @param {string} [props.action='#'] Form action.
     * @param {string} [props.method='post'] Form method.
     * @param {string|false} [props.enctype=false] Form enctype.
     * @param {string[]} [props.classes] Form class names.
     * @param {object} [state] Form state:
     * @param {boolean} [state.submit=true] If the Form has to be submited.
     * @param {object} [callback] Form submit callback:
     * @param {function} [callback.function] Form submit callback function.
     * @param {*} [callback.params] Form submit callback function params.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Form inner HTML Element.
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
    }, callback = {
        function: function (params) { /* console.log('params') */ },
        params: {}
    }, innerHTML = false) {
        super({ ...Form.props, ...props }, { ...Form.state, ...state });
        this.setCallbacks({ default: { ...Form.callback, ...callback } });
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
     * * Form submit callback.
     * @param {*} [params={}] Click callback function optional params
     * @memberof Form
     */
    submit (params = {}) {
        this.execute('default', {
            form: this,
            ...params
        });
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