// ? JuanCruzAGB repository
import Class from "@juancruzagb/src";

/**
 * * Controls an Style object.
 * @export
 * @class Style
 * @extends Class
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export class Style extends Class {
    /**
     * * Creates an instance of Style.
     * @param {object} [data]
     * @param {object} [data.nodeElement=null]
     * @param {object} [data.props]
     * @param {string} [data.props.id='style-1']
     * @param {string} [data.props.name='style']
     * @param {*} [data.props.value=false]
     * @memberof Style
     */
    constructor (data = {
        nodeElement: null,
        props: {
            id: 'style-1',
            name: 'style',
            value: false,
        },
    }) {
        super({
            props: {
                ...Style.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            },
        });

        this.nodeElement = (data && data.hasOwnProperty('nodeElement')) ? data.nodeElement : null;
    }

    /**
     * * Remove the Data.
     * @memberof Style
     */
    remove () {
        if (this.nodeElement) {
            if (this.nodeElement.style.hasOwnProperty(this.props.name)) delete this.nodeElement.style[this.props.name];

            this.state.set('visible', false);
        }
    }

    /**
     * * Set the Style.
     * @memberof Style
     */
    set () {
        if (this.nodeElement) {
            this.nodeElement.style[this.props.name] = this.props.value;

            this.state.set('visible', true);
        }
    }

    /**
     * * Default properties.
     * @static
     * @var {object} props
     * @param {string} props.id
     * @param {string} props.name
     * @param {*} props.value
     * @memberof Style
     */
    static props = {
        id: 'style-1',
        name: 'style',
        value: false,
    }
}

/**
 * * Controls the Style methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Check if there is an Style.
     * @param {array|string} name
     * @param {*} [value]
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name, value) {
        if (name == undefined) throw new Error('Style name is required');

        if (Array.isArray(name)) {
            for (const style of name) {
                if (!style instanceof String) {
                    if (!this.has(...style)) return false;
                } else {
                    if (!this.has(style)) return false;
                }
            }

            return true;
        }

        if (name instanceof String) throw new Error('Style name must be a string');

        if (value != undefined) return this.hasOwnProperty(name) && this[name] == value;

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove an Style.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        if (name == undefined) throw new Error('Style name is required');

        if (Array.isArray(name)) {
            for (const style of name) {
                this.remove(style);
            }

            return;
        }

        if (name instanceof String) throw new Error('Style name must be a string');

        if (this.has(name)) throw new Error('Style does not exist');

        this[name].remove();
        delete this[name];
    }

    /**
     * * Set an Style.
     * @param {array|object|string} name
     * @param {*} [value=null]
     * @param {HTMLElement|false} [nodeElement=false]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    set (name, value = null, nodeElement = false) {
        if (nodeElement) this.nodeElement = nodeElement;

        if (!name) throw new Error('Style name is required');

        if (Array.isArray(name)) {
            for (const style of name) {
                if (!style instanceof String) {
                    if (!this.set(...style)) return false;
                } else {
                    if (!this.set(style)) return false;
                }
            }

            return;
        } else if (name instanceof Object) {
            for (const styleName in name) {
                if (Object.hasOwnProperty.call(name, styleName)) this.set(styleName, name[styleName]);
            }

            return;
        }

        this[name] = new Style({
            nodeElement: this.nodeElement,
            props: {
                id: `style-${ Object.keys(this).length }`,
                name: name,
                value: value,
            },
        });
        this[name].set();
    }
}