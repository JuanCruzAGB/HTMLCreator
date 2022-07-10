// ? JuanCruzAGB repository
import Class from "@juancruzagb/src";

/**
 * * Controls a Style object.
 * @export
 * @class Style
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export class Style extends Class {
    /**
     * * Creates an instance of Style.
     * @param {object} [data]
     * @param {object} [data.nodeElement=null]
     * @param {string} [data.props]
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
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            },
        });

        this.nodeElement = (data && data.hasOwnProperty('nodeElement')) ? data.nodeElement : null;
    }

    /**
     * * Remove the Style.
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
}

/**
 * * Controls the Style methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Check if there is a Style.
     * @param {string} name
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name) {
        if (name == undefined) throw new Error('Style name is required');

        if (typeof name != 'string') throw new Error('Style name must be a string');

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove a Style.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        if (name == undefined) throw new Error('Style name is required');

        if (this.has(name)) throw new Error('Style does not exist');

        this[name].remove();
        delete this[name];
    }

    /**
     * * Set a Style.
     * @param {object|string} name
     * @param {*} [value=null]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    set (name = {}, value = null, nodeElement = false) {
        if (nodeElement) this.nodeElement = nodeElement;

        if (!name) throw new Error('Style name is required');

        if (name instanceof Object) {
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
};