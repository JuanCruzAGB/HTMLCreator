// ? JuanCruzAGB repository
import Class from "@juancruzagb/src";

/**
 * * Controls a ClassName object.
 * @export
 * @class ClassName
 * @extends Class
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export class ClassName extends Class {
    /**
     * * Creates an instance of ClassName.
     * @param {object} [data]
     * @param {object} [data.nodeElement=null]
     * @param {object} [data.props]
     * @param {string} [data.props.id='class-1']
     * @param {string} [data.props.name='class']
     * @memberof ClassName
     */
    constructor (data = {
        nodeElement: null,
        props: {
            id: 'class-1',
            name: 'class',
        },
    }) {
        super({
            props: {
                ...ClassName.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            },
        });

        this.nodeElement = (data && data.hasOwnProperty('nodeElement')) ? data.nodeElement : null;
    }

    /**
     * * Add the ClassName.
     * @memberof ClassName
     */
    add () {
        if (this.nodeElement) {
            if (!this.nodeElement.classList.contains(this.props.name)) this.nodeElement.classList.add(this.props.name);

            this.state.set('visible', true);
        }
    }

    /**
     * * Remove the ClassName.
     * @memberof ClassName
     */
    remove () {
        if (this.nodeElement) {
            if (this.nodeElement.classList.contains(this.props.name)) this.nodeElement.classList.remove(this.props.name);

            this.state.set('visible', false);
        }
    }

    /**
     * * Toggle the ClassName.
     * @memberof ClassName
     */
    toggle () {
        if (this.nodeElement) {
            if (this.state.visible) {
                this.remove();
            } else {
                this.add();
            }
        }
    }

    /**
     * * Default properties.
     * @static
     * @var {object} props
     * @param {string} props.id
     * @param {string} props.name
     * @memberof ClassName
     */
    static props = {
        id: 'class-1',
        name: 'class',
    }
}

/**
 * * Controls the ClassName methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Add a ClassName.
     * @param {array|string} name
     * @param {HTMLElement|false} [nodeElement=false]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    add (name = {}, nodeElement = false) {
        if (nodeElement) this.nodeElement = nodeElement;

        if (!name) throw new Error('ClassName name is required');

        if (name instanceof Object) {
            for (const className in name) {
                if (Object.hasOwnProperty.call(name, className)) this.add(className);
            }

            return;
        }

        this[name] = new ClassName({
            nodeElement: this.nodeElement,
            props: {
                id: `class-${ Object.keys(this).length }`,
                name: name,
            },
        });
        this[name].add();
    }
    /**
     * * Set an ClassName.
     * @param {array|object|string} name
     * @param {HTMLElement|false} [nodeElement=false]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    add (name, nodeElement = false) {
        if (nodeElement) this.nodeElement = nodeElement;

        if (!name) throw new Error('Class name is required');

        if (Array.isArray(name)) {
            for (const attribute of name) {
                this.add(attribute);
            }

            return;
        } else if (name instanceof Object) {
            for (const className of name) {
                this.add(className);
            }

            return;
        }

        this[name] = new ClassName({
            nodeElement: this.nodeElement,
            props: {
                id: `attribute-${ Object.keys(this).length }`,
                name: name,
            },
        });
        this[name].add();
    }

    /**
     * * Check if there is an ClassName.
     * @param {array|string} name
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    contains (name) {
        if (name == undefined) throw new Error('Class name is required');

        if (Array.isArray(name)) {
            for (const className of name) {
                if (!this.has(className)) return false;
            }

            return true;
        }

        if (name instanceof String) throw new Error('Class name must be a string');

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove an ClassName.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        if (name == undefined) throw new Error('Class name is required');

        if (Array.isArray(name)) {
            for (const attribute of name) {
                this.remove(attribute);
            }

            return;
        }

        if (name instanceof String) throw new Error('Class name must be a string');

        if (this.has(name)) throw new Error('Class does not exist');

        this[name].remove();
        delete this[name];
    }

    /**
     * * Toggle the ClassName.
     * @param {string} name
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    toggle (name) {
        if (!name) throw new Error('ClassName name is required');

        if (this.has(name)) return this[name].toggle();

        return null;
    }
}