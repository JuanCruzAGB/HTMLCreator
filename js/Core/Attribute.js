// ? JuanCruzAGB repository
import Class from "@juancruzagb/src";

/**
 * * Controls an Attribute object.
 * @export
 * @class Attribute
 * @extends Class
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export class Attribute extends Class {
    /**
     * * Creates an instance of Attribute.
     * @param {object} [data]
     * @param {object} [data.nodeElement=null]
     * @param {object} [data.props]
     * @param {string} [data.props.id='attribute-1']
     * @param {string} [data.props.name='attribute']
     * @param {*} [data.props.value=false]
     * @memberof Attribute
     */
    constructor (data = {
        nodeElement: null,
        props: {
            id: 'attribute-1',
            name: 'attribute',
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
     * * Remove the Attribute.
     * @memberof Attribute
     */
    remove () {
        if (this.nodeElement) {
            if (this.nodeElement.hasAttribute(this.props.name)) this.nodeElement.removeAttribute(this.props.name);

            this.state.set('visible', false);
        }
    }

    /**
     * * Set the Attribute.
     * @memberof Attribute
     */
    set () {
        if (this.nodeElement) {
            switch (typeof this.props.value) {
                case 'boolean':
                    if (this.props.value) {
                        if (!this.nodeElement.hasAttribute(this.props.name)) this.nodeElement.setAttribute(this.props.name, '');

                        this.state.set('visible', true);
                    } else {
                        this.remove();
                    }
                    break;

                default:
                    if (!this.nodeElement.hasAttribute(this.props.name)) {
                        this.nodeElement.setAttribute(this.props.name, this.props.value);
                    } else {
                        this.nodeElement[this.props.name] = this.props.value;
                    }

                    this.state.set('visible', true);
                    break;
            }
        }
    }

    /**
     * * Switch the Attribute value.
     * @memberof Attribute
     */
    switch () {
        if (typeof this.props.value != 'boolean') throw new Error(`Attribute ${ this.props.name } type is not boolean`);

        this.props.value = !this.props.value;
        this.set();
    }
}

/**
 * * Controls the Attribute methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Check if there is an Attribute.
     * @param {string} name
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name) {
        if (name == undefined) throw new Error('Attribute name is required');

        if (typeof name != 'string') throw new Error('Attribute name must be a string');

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove an Attribute.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        if (name == undefined) throw new Error('Attribute name is required');

        if (this.has(name)) throw new Error('Attribute does not exist');

        this[name].remove();
        delete this[name];
    }

    /**
     * * Set an Attribute.
     * @param {object|string} name
     * @param {*} [value=null]
     * @param {HTMLElement|false} [nodeElement=false]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    set (name = {}, value = null, nodeElement = false) {
        if (nodeElement) this.nodeElement = nodeElement;

        if (!name) throw new Error('Attribute name is required');

        if (name instanceof Object) {
            for (const attributeName in name) {
                if (Object.hasOwnProperty.call(name, attributeName)) this.set(attributeName, name[attributeName]);
            }

            return;
        }

        this[name] = new Attribute({
            nodeElement: this.nodeElement,
            props: {
                id: `attribute-${ Object.keys(this).length }`,
                name: name,
                value: value,
            },
        });
        this[name].set();
    }

    /**
     * * Switch the Attribute value.
     * @param {string} name
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    switch (name) {
        if (!name) throw new Error('Attribute name is required');

        if (this.has(name)) return this[name].switch();

        return null;
    }
};