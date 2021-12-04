// ? JuanCruzAGB repository
import Class from "@juancruzagb/src/js/Class.js";

/**
 * * Attribute controls the Html attributes.
 * @export
 * @class Attribute
 * @extends {Class}
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Attribute extends Class {
    /**
     * * Creates an instance of Attribute.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='attribute-1'] Primary key.
     * @param {string} [data.props.name='id']
     * @param {*} [data.props.value='attribute-1']
     * @param {object} [data.state]
     * @param {boolean} [data.state.visible=false] If the Attribute should be visible.
     * @param {HTMLElement|false} [data.html] Attribute HTML Element.
     * @memberof Attribute
     */
    constructor (data = {
        props: {
            id: 'attribute-1',
            name: 'id',
            value: 'attribute-1',
        }, state: {
            visible: false,
        }, html: false,
    }) {
        super({
            props: {
                ...Attribute.props,
                ...(data && data.hasOwnProperty('props')) ? data.props: {},
            }, state: {
                ...Attribute.state,
                ...(data && data.hasOwnProperty('state')) ? data.state: {},
            },
        });
        if (data && data.hasOwnProperty('html')) {
            this.setHTML(data.html);
            this.set();
        }
    }

    set value (value) {
        this.setProps('value', value);
        if (this.state.visible) {
            this.set();
        }
    }

    /**
     * * Remove the Attribute from the DOM.
     * @memberof Attribute
     */
    remove () {
        if (this.hasOwnProperty('html')) {
            if (this.html.hasAttribute(this.props.name)) {
                this.html.removeAttribute(this.props.name);
                this.setState('visible', false);
            }
        }
    }

    /**
     * * Set the Attribute in the DOM.
     * @memberof Attribute
     */
    set () {
        if (this.hasOwnProperty('html')) {
            switch (typeof this.props.value) {
                case 'boolean':
                    if (this.props.value) {
                        if (!this.html.hasAttribute(this.props.name)) {
                            this.html.setAttribute(this.props.name, '');
                            this.setState('visible', true);
                        } else {
                            this.html[this.props.name] = true;
                            this.setState('visible', true);
                        }
                    }
                    break;
                default:
                    if (!this.html.hasAttribute(this.props.name)) {
                        this.html.setAttribute(this.props.name, this.props.value);
                        this.setState('visible', true);
                    } else {
                        this.html[this.props.name] = this.props.value;
                        this.setState('visible', true);
                    }
                    break;
            }
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Attribute
     */
    static props = {
        id: 'attribute-1',
        name: 'id',
        value: 'attribute-1',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Attribute
     */
    static state = {
        visible: false,
    }
}