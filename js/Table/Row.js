// ? HTMLCreatorJS repository
import Cell from './Cell.js';
import Html from '../Html.js';

/**
 * * Row creates an excellent <tr>.
 * @export
 * @class Row
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Row extends Html {
    /**
     * * Creates an instance of Row.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='row-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {object[]} [data.cells] Array of <td> and/or <th>.
     * @memberof Row
     */
    constructor (data = {
        props: {
            id: 'row-1',
            classList: [],
        }, state: {
            id: false,
        }, cells: [],
    }) {
        super({ ...Row.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Row.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Row.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) });
        this.setCells(cells);
        this.createHTML(this.props.nodeName);
        this.setChilds();
    }

    /**
     * * Set the HTML Element child nodes.
     * @memberof Row
     */
    setChilds () {
        for (const cell of this.cells) {
            this.appendChild(cell.html);
        }
    }

    /**
     * * Set the Row Rows.
     * @param {object[]} [cells] Row Cells.
     * @memberof Row
     */
    setCells (cells = []) {
        if (!this.cells) {
            this.cells = [];
        }
        for (const key in cells) {
            if (Object.hasOwnProperty.call(cells, key)) {
                let data = cells[key];
                let cell = new Cell({
                    ...data,
                    id: `${ this.props.id }-cell-${ parseInt(key) + 1 }`,
                });
                this.cells.push(cell);
                this.appendChild(cell.html);
            }
        }
    }

    /**
     * * Get a Row Cell.
     * @param {string} id_cell Cell primary key.
     * @returns {Cell|false}
     * @memberof Row
     */
    getCell (id_cell = false) {
        if (id_cell) {
            for (const cell of this.cells) {
                if (cell.props.id == id_cell) {
                    return cell;
                }
            }
            return false;
        }
        if (!id_cell) {
            console.error('Cell primary key is required');
        }
    }

    /**
     * * Check if there is a Row Cell.
     * @param {string} id_cell Cell primary key.
     * @returns {boolean}
     * @memberof Row
     */
    hasCell (id_cell = false) {
        if (id_cell) {
            for (const cell of this.cells) {
                if (cell.props.id == id_cell) {
                    return true;
                }
            }
            return false;
        }
        if (!id_cell) {
            console.error('Cell primary key is required');
        }
    }

    /**
     * * Removes a Row Cell.
     * @param {string} id_cell Cell primary key.
     * @returns {Cell|false}
     * @memberof Row
     */
    removeCell (id_cell = false) {
        if (id_cell) {
            for (const key in [...this.cells]) {
                if (Object.hasOwnProperty.call(this.cells, key)) {
                    const cell = this.cells[key];
                    if (cell.props.id == id_cell) {
                        cell.removeHTML();
                        delete this.cells[key];
                        return cell;
                    }
                }
            }
            return false;
        }
        if (!id_cell) {
            console.error('Cell primary key is required');
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Row
     */
    static props = {
        id: 'row-1',
        classList: [],
        nodeName: 'TR',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Row
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Row
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {Cell} Cell Cell class child.
     * @memberof Row
     */
    static Cell = Cell;
}