// ? HTMLCreatorJS repository
import Html from "juancruzagb/htmlcreator/js/Core/Html";

/**
 * * Form creates an excellent <form>.
 * @export
 * @class Form
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
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
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {object} [data.callbacks]
     * @param {function} [data.callbacks.submit]
     * @param {function} [data.callbacks.submit.function]
     * @param {object} [data.callbacks.submit.params]
     * @param {HTMLElement} [data.parentNode] Html Element parent.
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
        parentNode: false,
    }) {
        super({
            props: {
                ...Form.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Form.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Form.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Form.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
        this.setHTMLAttributes();
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