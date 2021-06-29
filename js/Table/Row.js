// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import Cell from "./Cell.js";

/**
 * * Row creates an excellent <tr>.
 * @export
 * @class Row
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Row extends Html {
    /**
     * * Creates an instance of Row.
     * @param {object} [props] Row properties:
     * @param {string} [props.id='row-1'] Row primary key.
     * @param {string[]} [props.classes] Row class names.
     * @param {object[]} [cells] Row Cells.
     * @memberof Row
     */
    constructor (props = {
        id: 'row-1',
        classes: [],
    }, cells = []) {
        super({ ...Row.props, ...props });
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
     * * Set the Row Cells.
     * @param {object[]} [cells] Row Cells.
     * @memberof Row
     */
    setCells (cells = []) {
        if (!this.cells) {
            this.cells = [];
        }
        for (const key in cells) {
            if (Object.hasOwnProperty.call(cells, key)) {
                const cell = cells[key];
                this.cells.push(new Cell((cell.hasOwnProperty('props') ? { id: `${ this.props.id }-cell-${ parseInt(key) + 1 }`, ...cell.props } : []), (cell.hasOwnProperty('innerHTML') ? cell.innerHTML : [])));
            }
        }
    }

    /**
     * * Get a Row Cell.
     * @param {string} id_cell Cell primary key.
     * @returns {Cell}
     * @memberof Row
     */
    getCell (id_cell = false) {
        if (id_cell) {
            for (const cell of this.cells) {
                if (cell.props.id === id_cell) {
                    return cell;
                }
            }
        }
        if (!id_cell) {
            console.error("Cell primary key is required");
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
            for (const row of this.cells) {
                if (cell.props.id === id_cell) {
                    return true;
                }
            }
            return false;
        }
        if (!id_cell) {
            console.error("Cell primary key is required");
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
                    if (cell.props.id === id_cell) {
                        cell.removeHTML();
                        delete this.cells[key];
                        return cell;
                    }
                }
            }
            return false;
        }
        if (!id_cell) {
            console.error("Cell primary key is required");
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Row
     */
    static props = {
        id: 'row-1',
        classes: [],
        nodeName: 'TR',
    }
}

// ? Row childs
Row.Cell = Cell;

// ? Default export
export default Row;