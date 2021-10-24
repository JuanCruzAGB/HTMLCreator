// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Form creates an excellent <form>.
 * @export
 * @class Form
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Form extends Html {
    /**
     * * Creates an instance of Form.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='form-1'] Primary key.
     * @param {string} [data.props.action='#']
     * @param {string} [data.props.method='post']
     * @param {string|false} [data.props.enctype=false]
     * @param {string[]} [data.props.classList] Class list.
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {object} [data.state]
     * @param {boolean} [data.state.submit=true] If the HTML Element should be submited.
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {object} [data.callbacks]
     * @param {function} [data.callbacks.submit]
     * @param {function} [data.callbacks.submit.function]
     * @param {object} [data.callbacks.submit.params]
     * @memberof Form
     */
    constructor (data = {
        props: {
            id: 'form-1',
            action: '#',
            method: 'post',
            enctype: false,
            classList: [],
        }, state: {
            id: false,
            submit: true,
        }, callbacks: {
            submit: {
                function: (params) => { /* console.log('params') */ },
                params: {}
            },
        }, children: false,
    }) {
        super({ ...Form.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Form.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Form.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) }, [ ...Form.children, ...((data && data.hasOwnProperty('children')) ? data.children : []) ]);
        this.createHTML(this.props.nodeName);
        this.setEventListener();
        this.setHTMLAttributes();
    }
    
    /**
     * * Set the Form event listener.
     * @memberof Form
     */
    setEventListener () {
        this.html.addEventListener('submit', (e) => {
            if (this.state.submit) {
                e.preventDefault();
                this.submit();
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
        classList: [],
        nodeName: 'FORM',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Form
     */
    static state = {
        id: false,
        submit: true,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Form
     */
    static callbacks = {
        submit: {
            function: (params) => { /* console.log('params') */ },
            params: {}
        },
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Form
     */
    static children = [
        // 
    ]
}