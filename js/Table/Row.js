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
        for (const cell of cells) {
            this.cells.push(new Cell((cell.hasOwnProperty('props') ? cell.props : []), (cell.hasOwnProperty('innerHTML') ? cell.innerHTML : [])));
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