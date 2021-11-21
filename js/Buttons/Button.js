// ? HTMLCreatorJS repository
import Html from "juancruzagb/HTMLCreatorJS/js/Core/Html";

/**
 * * Button creates an excellet <button>.
 * @export
 * @class Button
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class Button extends Html {
    /**
     * * Creates an instance of Button.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='button-1'] Primary key.
     * @param {string|false} [data.props.title=false]
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.preventDefault=true] If the Click event should execut prevent default.
     * @param {boolean} [data.state.disabled=false] If the HTML Element should be disabled.
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {object} [data.callbacks]
     * @param {function} [data.callbacks.click]
     * @param {function} [data.callbacks.click.function]
     * @param {object} [data.callbacks.click.params]
     * @param {array|false} [data.children=false] HTML Element childrens.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof Button
     */
    constructor (data = {
        props: {
            id: 'button-1',
            title: false,
            classList: [],
        }, state: {
            disabled: false,
            id: false,
            preventDefault: true,
            parentNode: false,
        }, callbacks: {
            click: {
                function: (params) => { /* console.log(params) */ },
                params: {}
            },
        }, children: false,
        parentNode: false,
    }) {
        super({
            props: {
                ...Button.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...Button.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...Button.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, children: [
                ...Button.children,
                ...(data && data.hasOwnProperty('children')) ? data.children : [],
            ], parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
        this.setHTMLAttributes();
        this.checkState();
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
        this.checkDisabledState();
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
        classList: [],
        nodeName: 'BUTTON',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Button
     */
    static state = {
        disabled: false,
        id: false,
        preventDefault: true,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Button
     */
    static callbacks = {
        click: {
            function: (params) => { /* console.log(params) */ },
            params: {}
        },
    }

    /**
     * @static
     * @var {array} children Default children.
     * @memberof Button
     */
    static children = [
        // 
    ]
}