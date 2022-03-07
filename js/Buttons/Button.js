// ? HTMLCreator repository
import Html from "@juancruzagb/htmlcreator/js/Core/Html.js";

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
     * @param {boolean} [data.state.blur=true] If the Html the blur callback function should be executed.
     * @param {boolean} [data.state.click=true] If the Html the click callback function should be executed.
     * @param {boolean} [data.state.dblclick=true] If the Html the dblclick callback function should be executed.
     * @param {boolean} [data.state.disabled=false] If the HTML Element should be disabled.
     * @param {boolean} [data.state.focusin=true] If the Html the focusin callback function should be executed.
     * @param {boolean} [data.state.focusout=true] If the Html the focusout callback function should be executed.
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {boolean} [data.state.preventDefault=false] If the Html events should prevent default.
     * @param {object} [data.callbacks]
     * @param {function} [data.callbacks.active]
     * @param {function} [data.callbacks.active.function]
     * @param {object} [data.callbacks.active.params]
     * @param {function} [data.callbacks.blur]
     * @param {function} [data.callbacks.blur.function]
     * @param {object} [data.callbacks.blur.params]
     * @param {function} [data.callbacks.check]
     * @param {function} [data.callbacks.check.function]
     * @param {object} [data.callbacks.check.params]
     * @param {function} [data.callbacks.click]
     * @param {function} [data.callbacks.click.function]
     * @param {object} [data.callbacks.click.params]
     * @param {function} [data.callbacks.dblclick]
     * @param {function} [data.callbacks.dblclick.function]
     * @param {object} [data.callbacks.dblclick.params]
     * @param {function} [data.callbacks.disable]
     * @param {function} [data.callbacks.disable.function]
     * @param {object} [data.callbacks.disable.params]
     * @param {function} [data.callbacks.enable]
     * @param {function} [data.callbacks.enable.function]
     * @param {object} [data.callbacks.enable.params]
     * @param {function} [data.callbacks.focusin]
     * @param {function} [data.callbacks.focusin.function]
     * @param {object} [data.callbacks.focusin.params]
     * @param {function} [data.callbacks.focusout]
     * @param {function} [data.callbacks.focusout.function]
     * @param {object} [data.callbacks.focusout.params]
     * @param {function} [data.callbacks.inactive]
     * @param {function} [data.callbacks.inactive.function]
     * @param {object} [data.callbacks.inactive.params]
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
            active: false,
            blur: true,
            dblclick: true,
            disabled: false,
            click: true,
            focusin: true,
            focusout: true,
            id: false,
            preventDefault: false,
            parentNode: false,
        }, callbacks: {
            active: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, blur: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, click: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, dblclick: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, disable: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, enable: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, focusin: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, focusout: {
                function: params => { /* console.log(params) */ },
                params: {},
            }, inactive: {
                function: params => { /* console.log(params) */ },
                params: {},
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
        this.checkActiveState();
        this.checkDisabledState();
    }

    /**
     * * Check the Button active state value.
     * @memberof Button
     */
    checkActiveState () {
        switch (this.state.active) {
            case true:
                this.active();
                break;
            case false:
                this.inactive();
                break;
        }
    }

    /**
     * * Check the BUtton disabled state.
     * @memberof Button
     */
    checkDisabledState () {
        if (this.state.disabled) {
            this.disable();
        } else {
            this.enable();
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
        active: false,
        blur: true,
        dblclick: true,
        disabled: false,
        click: true,
        focusin: true,
        focusout: true,
        id: false,
        preventDefault: false,
        parentNode: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Button
     */
    static callbacks = {
        active: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, blur: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, click: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, dblclick: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, disable: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, enable: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, focusin: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, focusout: {
            function: params => { /* console.log(params) */ },
            params: {},
        }, inactive: {
            function: params => { /* console.log(params) */ },
            params: {},
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