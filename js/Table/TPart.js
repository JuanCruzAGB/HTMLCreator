// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import Cell from "./Cell.js";
import Row from "./Row.js";

/**
 * * TPart creates an excellent <tbody> or <thead>.
 * @export
 * @class TPart
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class TPart extends Html {
    /**
     * * Creates an instance of TPart.
     * @param {object} [props] TPart properties:
     * @param {string} [props.id='tbody-1'] TPart primary key.
     * @param {string[]} [props.classes] TPart primary key.
     * @param {object} [rows] TPart Rows.
     * @memberof TPart
     */
    constructor (props = {
        id: 'tbody-1',
        type: 'body',
        classes: [],
    }, rows = []) {
        if (props.type === 'head') {
            props.nodeName = 'THEAD';
        }
        super({ ...TPart.props, ...props });
        this.createHTML(this.props.nodeName);
        this.setRows(rows);
    }

    /**
     * * Set the TPart Rows.
     * @param {object[]} [rows] Row Rows.
     * @memberof TPart
     */
    setRows (rows = []) {
        if (!this.rows) {
            this.rows = [];
        }
        for (const key in rows) {
            if (Object.hasOwnProperty.call(rows, key)) {
                let row = rows[key];
                row = new Row((row.hasOwnProperty('props') ? { id: `${ this.props.id }-row-${ parseInt(key) + 1 }`, ...row.props} : {}), (row.hasOwnProperty('cells') ? row.cells : []));
                this.rows.push(row);
                this.appendChild(row.html);
            }
        }
    }

    /**
     * * Get a TPart Cell.
     * @param {string} id_cell Cell primary key.
     * @returns {Cell|false}
     * @memberof TPart
     */
    getCell (id_cell = false) {
        if (id_cell) {
            for (const row of this.rows) {
                if (row.hasCell(id_cell)) {
                    return row.getCell(id_cell);
                }
            }
            return false;
        }
        if (!id_cell) {
            console.error("Cell primary key is required");
        }
    }

    /**
     * * Get a TPart Row.
     * @param {string} id_row Row primary key.
     * @returns {Row|false}
     * @memberof TPart
     */
    getRow (id_row = false) {
        if (id_row) {
            for (const row of this.rows) {
                if (row.props.id === id_row) {
                    return row;
                }
            }
            return false;
        }
        if (!id_row) {
            console.error("Row primary key is required");
        }
    }

    /**
     * * Check if there is a TPart Cell.
     * @param {string} id_cell Cell primary key.
     * @returns {boolean}
     * @memberof TPart
     */
    hasCell (id_cell = false) {
        if (id_cell) {
            for (const row of this.rows) {
                if (row.hasCell(id_cell)) {
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
     * * Check if there is a TPart Row.
     * @param {string} id_row Row primary key.
     * @returns {boolean}
     * @memberof TPart
     */
    hasRow (id_row = false) {
        if (id_row) {
            for (const row of this.rows) {
                if (row.props.id === id_row) {
                    return true;
                }
            }
            return false;
        }
        if (!id_row) {
            console.error("Row primary key is required");
        }
    }

    /**
     * * Removes a TPart Cell.
     * @param {string} id_cell Cell primary key.
     * @returns {Cell|false}
     * @memberof TPart
     */
    removeCell (id_cell = false) {
        if (id_cell) {
            for (const row of this.rows) {
                return row.removeCell(id_cell);
            }
            return false;
        }
        if (!id_cell) {
            console.error("Cell primary key is required");
        }
    }

    /**
     * * Removes a TPart Row.
     * @param {string} id_row Row primary key.
     * @returns {Row|false}
     * @memberof TPart
     */
    removeRow (id_row = false) {
        if (id_row) {
            for (const key in [...this.rows]) {
                if (Object.hasOwnProperty.call(this.rows, key)) {
                    const row = this.rows[key];
                    if (row.props.id === id_row) {
                        row.removeHTML();
                        delete this.rows[key];
                        return row;
                    }
                }
            }
            return false;
        }
        if (!id_row) {
            console.error("Row primary key is required");
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof TPart
     */
    static props = {
        id: 'tbody-1',
        classes: [],
        nodeName: 'TBODY',
    }
}

// ? TPart childs
TPart.Cell = Cell;
TPart.Row = Row;

// ? Default export
export default TPart;