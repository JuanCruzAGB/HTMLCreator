// ? JuanCruzAGB repository
import Class from "juancruzagb/src/js/Class";

/**
 * * ClassName controls the Html class names.
 * @export
 * @class ClassName
 * @extends {Class}
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class ClassName extends Class {
    /**
     * * Creates an instance of ClassName.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='className-1'] Primary key.
     * @param {*} [data.props.value='something']
     * @param {object} [data.state]
     * @param {boolean} [data.state.visible=false] If the ClassName should be visible.
     * @param {HTMLElement|false} [data.html] ClassName HTML Element.
     * @memberof ClassName
     */
    constructor (data = {
        props: {
            id: 'className-1',
            value: 'something',
        }, state: {
            visible: false,
        }, html: false,
    }) {
        super({
            props: {
                ...ClassName.props,
                ...(data && data.hasOwnProperty('props')) ? data.props: {},
            }, state: {
                ...ClassName.state,
                ...(data && data.hasOwnProperty('state')) ? data.state: {},
            },
        });
        if (data && data.hasOwnProperty('html')) {
            this.setHTML(data.html);
            this.set();
        }
    }

    /**
     * * Add the ClassName in the DOM.
     * @memberof ClassName
     */
    set () {
        if (this.hasOwnProperty('html')) {
            if (!this.html.classList.contains(this.props.value)) {
                this.html.classList.add(this.props.value);
            }
            this.setState('visible', true);
        }
    }

    /**
     * * Remove the ClassName from the DOM.
     * @memberof ClassName
     */
    remove () {
        if (this.hasOwnProperty('html')) {
            if (this.html.classList.contains(this.props.value)) {
                this.html.classList.remove(this.props.value);
            }
            this.setState('visible', false);
        }
    }

    /**
     * * Toogle the ClassName from the DOM.
     * @memberof ClassName
     */
    toggle () {
        if (this.hasOwnProperty('html')) {
            this.html.classList.toggle(this.props.value);
            this.setState('visible', this.html.classList.contains(this.props.value));
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof ClassName
     */
    static props = {
        id: 'className-1',
        value: 'something',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof ClassName
     */
    static state = {
        visible: false,
    }
}