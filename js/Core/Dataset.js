// ? External repository
import Class from '../../../JuanCruzAGB/js/Class.js';

/**
 * * Dataset controls the Html datasets.
 * @export
 * @class Dataset
 * @extends {Class}
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Dataset extends Class {
    /**
     * * Creates an instance of Dataset.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='data-1'] Primary key.
     * @param {string} [data.props.name='id']
     * @param {*} [data.props.value='data-1']
     * @param {object} [data.state]
     * @param {boolean} [data.state.visible=false] If the Dataset should be visible.
     * @param {HTMLElement|false} [data.html] Dataset HTML Element.
     * @memberof Dataset
     */
    constructor (data = {
        props: {
            id: 'data-1',
            name: 'id',
            value: 'data-1',
        }, state: {
            visible: false,
        }, html: false,
    }) {
        super({
            props: {
                ...Dataset.props,
                ...(data && data.hasOwnProperty('props')) ? data.props: {},
            }, state: {
                ...Dataset.state,
                ...(data && data.hasOwnProperty('state')) ? data.state: {},
            },
        });
        if (data && data.hasOwnProperty('html')) {
            this.setHTML(data.html);
            this.set();
        }
    }

    /**
     * * Remove the Dataset from the DOM.
     * @memberof Dataset
     */
    remove () {
        if (this.hasOwnProperty('html')) {
            if (this.html.dataset[this.props.name]) {
                delete this.html.dataset[this.props.name];
                this.setState('visible', false);
            }
        }
    }

    /**
     * * Set the Dataset in the DOM.
     * @memberof Dataset
     */
    set () {
        if (this.hasOwnProperty('html')) {
            if (this.html.dataset[this.props.name]) {
                this.html.dataset[this.props.name] = this.props.value;
                this.setState('visible', true);
            }
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Dataset
     */
    static props = {
        id: 'data-1',
        name: 'id',
        value: 'data-1',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Dataset
     */
    static state = {
        visible: false,
    }
}