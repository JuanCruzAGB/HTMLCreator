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
     * @param {object|string} name
     * @param {HTMLElement|false} [nodeElement=false]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    add (name = {}, nodeElement = false) {
        if (nodeElement) this.nodeElement = nodeElement;

        if (!name) throw new Error('ClassName name is required');

        if (name instanceof Object) {
            for (const classNameName in name) {
                if (Object.hasOwnProperty.call(name, classNameName)) this.add(classNameName);
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
     * * Check if there is a ClassName.
     * @param {string} name
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name) {
        if (name == undefined) throw new Error('ClassName name is required');

        if (typeof name != 'string') throw new Error('ClassName name must be a string');

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove a ClassName.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        if (name == undefined) throw new Error('ClassName name is required');

        if (this.has(name)) throw new Error('ClassName does not exist');

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
};