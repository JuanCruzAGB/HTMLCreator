// ? JuanCruzAGB repository
import Class from "@juancruzagb/src";

/**
 * * Controls an Dataset object.
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
                ...Dataset.props,
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
     * * Set the Dataset.
     * @memberof Dataset
     */
    set () {
        if (this.nodeElement) {
            this.nodeElement.dataset[this.props.name] = this.props.value;

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
     * @memberof Dataset
     */
    static props = {
        id: 'data-1',
        name: 'data',
        value: false,
    }
}

/**
 * * Controls the Dataset methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Check if there is an Dataset.
     * @param {array|string} name
     * @param {*} [value]
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name, value) {
        if (name == undefined) throw new Error('Dataset name is required');

        if (Array.isArray(name)) {
            for (const dataset of name) {
                if (!dataset instanceof String) {
                    if (!this.has(...dataset)) return false;
                } else {
                    if (!this.has(dataset)) return false;
                }
            }

            return true;
        }

        if (name instanceof String) throw new Error('Dataset name must be a string');

        if (value != undefined) return this.hasOwnProperty(name) && this[name] == value;

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove an Dataset.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        if (name == undefined) throw new Error('Dataset name is required');

        if (Array.isArray(name)) {
            for (const dataset of name) {
                this.remove(dataset);
            }

            return;
        }

        if (name instanceof String) throw new Error('Dataset name must be a string');

        if (this.has(name)) throw new Error('Dataset does not exist');

        this[name].remove();
        delete this[name];
    }

    /**
     * * Set an Dataset.
     * @param {array|object|string} name
     * @param {*} [value=null]
     * @param {HTMLElement|false} [nodeElement=false]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    set (name, value = null, nodeElement = false) {
        if (nodeElement) this.nodeElement = nodeElement;

        if (!name) throw new Error('Dataset name is required');

        if (Array.isArray(name)) {
            for (const dataset of name) {
                if (!dataset instanceof String) {
                    if (!this.set(...dataset)) return false;
                } else {
                    if (!this.set(dataset)) return false;
                }
            }

            return;
        } else if (name instanceof Object) {
            for (const datasetName in name) {
                if (Object.hasOwnProperty.call(name, datasetName)) this.set(datasetName, name[datasetName]);
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
}