// ? JuanCruzAGB repository
import Class from "@juancruzagb/src/js/Class";

/**
 * * style controls the Html styles.
 * @export
 * @class style
 * @extends {Class}
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class style extends Class {
    /**
     * * Creates an instance of style.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='style-1'] Primary key.
     * @param {string} [data.props.name='id']
     * @param {*} [data.props.value='style-1']
     * @param {object} [data.state]
     * @param {boolean} [data.state.visible=false] If the style should be visible.
     * @param {HTMLElement|false} [data.html] style HTML Element.
     * @memberof style
     */
    constructor (data = {
        props: {
            id: 'style-1',
            name: 'id',
            value: 'style-1',
        }, state: {
            visible: false,
        }, html: false,
    }) {
        super({
            props: {
                ...style.props,
                ...(data && data.hasOwnProperty('props')) ? data.props: {},
            }, state: {
                ...style.state,
                ...(data && data.hasOwnProperty('state')) ? data.state: {},
            },
        });
        if (data && data.hasOwnProperty('html')) {
            this.setHTML(data.html);
            this.set();
        }
    }

    /**
     * * Remove the style from the DOM.
     * @memberof style
     */
    remove () {
        if (this.hasOwnProperty('html')) {
            if (this.html.style[this.props.name]) {
                this.html.style[this.props.name] = null;
                this.setState('visible', false);
            }
        }
    }

    /**
     * * Set the style in the DOM.
     * @memberof style
     */
    set () {
        if (this.hasOwnProperty('html')) {
            if (this.html.style[this.props.name]) {
                this.html.style[this.props.name] = this.props.value;
                this.setState('visible', true);
            }
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof style
     */
    static props = {
        id: 'style-1',
        name: 'id',
        value: 'style-1',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof style
     */
    static state = {
        visible: false,
    }
}