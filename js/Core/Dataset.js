// ? JuanCruzAGB repository
import Class from "@juancruzagb/src";

/**
 * * Controls a Data object.
 * @export
 * @class Dataset
 * @extends Class
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export class Dataset extends Class {
    /**
     * * Creates an instance of Dataset.
     * @param {object} [data]
     * @param {object} [data.nodeElement=null]
     * @param {object} [data.props]
     * @param {string} [data.props.id='data-1']
     * @param {string} [data.props.name='data']
     * @param {*} [data.props.value=false]
     * @memberof Dataset
     */
    constructor (data = {
        nodeElement: null,
        props: {
            id: 'data-1',
            name: 'data',
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
     * * Remove the Data.
     * @memberof Dataset
     */
    remove () {
        if (this.nodeElement) {
            if (this.nodeElement.dataset.hasOwnProperty(this.props.name)) delete this.nodeElement.dataset[this.props.name];

            this.state.set('visible', false);
        }
    }

    /**
     * * Set the Data.
     * @memberof Dataset
     */
    set () {
        if (this.nodeElement) {
            this.nodeElement.dataset[this.props.name] = this.props.value;

            this.state.set('visible', true);
        }
    }
}

/**
 * * Controls the Data methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Check if there is a Data.
     * @param {string} name
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name) {
        if (name == undefined) throw new Error('Dataset name is required');

        if (typeof name != 'string') throw new Error('Dataset name must be a string');

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove a Data.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        if (name == undefined) throw new Error('Dataset name is required');

        if (this.has(name)) throw new Error('Dataset does not exist');

        this[name].remove();
    }

    /**
     * * Set a Data.
     * @param {object|string} name
     * @param {*} [value=null]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    set (name = {}, value = null, nodeElement = false) {
        if (nodeElement) this.nodeElement = nodeElement;

        if (!name) throw new Error('Dataset name is required');

        if (name instanceof Object) {
            for (const dataName in name) {
                if (Object.hasOwnProperty.call(name, dataName)) this.set(dataName, name[dataName]);
            }

            return;
        }

        this[name] = new Dataset({
            nodeElement: this.nodeElement,
            props: {
                id: `data-${ Object.keys(this).length }`,
                name: name,
                value: value,
            },
        });
        this[name].set();
    }
};