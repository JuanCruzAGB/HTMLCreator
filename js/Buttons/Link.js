// ? HTMLCreatorJS repository
import Html from '../Html.js';

/**
 * * Link creates an excellet <link>.
 * @export
 * @class Link
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Link extends Html {
    /**
     * * Creates an instance of Link.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string[]} [data.props.classList] Class list.
     * @param {string} [data.props.id='link-1'] Primary key.
     * @param {string|boolean} [data.props.target=false]
     * @param {string} [data.props.url='#'] Redirection url.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {boolean} [data.state.preventDefault=true] If the Click event should execut prevent default.
     * @param {object} [data.callbacks]
     * @param {object} [data.callbacks.click]
     * @param {function} [data.callbacks.click.function]
     * @param {object} [data.callbacks.click.params]
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Link
     */
    constructor (data = {
        props: {
            classList: [],
            id: 'link-1',
            target: false,
            url: '#',
        }, state: {
            id: false,
            preventDefault: false,
        }, callbacks: {
            click: {
                function: (params) => { /* console.log(params) */ },
                params: {},
            },
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Link.props,
                ...((data && data.hasOwnProperty('props')) ? data.props : {}),
            }, state: {
                ...Link.state,
                ...((data && data.hasOwnProperty('state')) ? data.state : {})
            }, callbacks: {
                ...Link.callbacks,
                ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {})
            }, children: [
                ...Link.children,
                ...((data && data.hasOwnProperty('children')) ? data.children : [])
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
        this.createHTML(this.props.nodeName);
        this.setHTMLAttributes();
    }

    /**
     * * Set the HTML Element attributes.
     * @memberof Link
     */
    setHTMLAttributes () {
        this.setAttribute('href', this.props.url);
        if (this.props.target) {
            this.setAttribute('target', this.props.target);
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Link
     */
    static props = {
        id: 'link-1',
        url: '#',
        classList: [],
        nodeName: 'A',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Link
     */
    static state = {
        id: false,
        preventDefault: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Link
     */
    static callbacks = {
        click: {
            function: (params) => { /* console.log(params) */ },
            params: {},
        },
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Link
     */
    static children = [
        // 
    ]
}