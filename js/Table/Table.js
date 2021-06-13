// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import Cell from "./Cell.js";
import Row from "./Row.js";
import TPart from "./TPart.js";

/**
 * * Table creates an excellent <table>.
 * @export
 * @class Table
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Table extends Html {
    /**
     * * Creates an instance of Table.
     * @param {object} [props] Table properties:
     * @param {string} [props.id='table-1'] Table primary key.
     * @param {object} [props.classes] Class names.
     * @param {string[]} [props.classes.table] Table class names.
     * @param {string[]} [props.classes.thead] THead class names.
     * @param {string[]} [props.classes.tbody] TBody class names.
     * @param {object[]} [props.structure] Table structure.
     * @memberof Table
     */
    constructor (props = {
        id: 'table-1',
        classes: {
            table: [],
            thead: [],
            tbody: [],
        },
    }, structure = []) {
        super({ ...Table.props, ...props });
        this.createHTML(this.props.nodeName);
        this.setStructure(structure);
    }

    /**
     * * Set the Table structure.
     * @param {object[]} [structure] Table structure.
     * @memberof Table
     */
    setStructure (structure = []) {
        if (!this.structure) {
            this.structure = [];
        }
        let { body, head } = this.parseStructure(structure);
        if (typeof head === 'object') {
            this.setHead(head);
        }
        if (typeof body === 'object') {
            this.setBody(body);
        }
        if (typeof head !== 'object' && typeof body !== 'object') {
            this.setRows(structure);
        }
    }

    /**
     * * Set the Table Body.
     * @param {object[]} [structure] Body structure.
     * @memberof Table
     */
    setBody (structure = []) {
        if (!this.structure) {
            this.structure = [];
        }
        this.structure.tbody = new TPart({
            id: `${ this.props.id }-tbody`,
            classes: this.props.classes.tbody,
        }, structure);
        this.appendChild(this.structure.tbody.html);
    }

    /**
     * * Set the Table Head.
     * @param {object[]} [structure] Head structure.
     * @memberof Table
     */
    setHead (structure = []) {
        if (!this.structure) {
            this.structure = [];
        }
        this.structure.thead = new TPart({
            id: `${ this.props.id }-thead`,
            classes: this.props.classes.thead,
        }, structure);
        this.appendChild(this.structure.thead.html);
    }

    /**
     * * Set the Table Rows.
     * @param {object[]} [structure] Row structure.
     * @memberof Table
     */
    setRows (structure = []) {
        if (!this.structure) {
            this.structure = [];
        }
        let { body, head } = this.parseStructure(structure);
        if (typeof head === 'object' && this.structure.hasOwnProperty('thead')) {
            this.structure.thead.setRows(head);
        }
        if (typeof body === 'object' && this.structure.hasOwnProperty('tbody')) {
            this.structure.tbody.setRows(body);
        }
        if ((typeof head !== 'object' && !this.structure.hasOwnProperty('thead')) && (typeof body !== 'object' && !this.structure.hasOwnProperty('tbody'))) {
            this.structure.rows = [];
            for (const key in structure) {
                if (Object.hasOwnProperty.call(structure, key)) {
                    const cells = structure[key];
                    if (typeof key === 'object') {
                        const row = new Row((key.hasOwnProperty('props') ? key.props : []), cells);
                        this.structure.rows.push(row);
                        this.appendChild(row.html);
                        continue;
                    }
                    const row = new Row({
                        id: `row-${ parseInt(key) + 1 }`,
                    }, cells);
                    this.structure.rows.push(row);
                    this.appendChild(row.html);
                }
            }
        }
    }

    /**
     * * Get a Table Cell.
     * @param {string} id_cell Cell primary key.
     * @returns {Cell|false}
     * @memberof Table
     */
    getCell (id_cell = false) {
        if (id_cell) {
            if (this.structure.hasOwnProperty('thead')) {
                return this.structure.thead.getCell(id_cell);
            }
            if (this.structure.hasOwnProperty('tbody')) {
                return this.structure.tbody.getCell(id_cell);
            }
            if (!this.structure.hasOwnProperty('thead') && !this.structure.hasOwnProperty('tbody')) {
                for (const row of this.structure.rows) {
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
     * * Get a Table Row.
     * @param {string} id_row Row primary key.
     * @returns {Row|false}
     * @memberof Table
     */
    getRow (id_row = false) {
        if (id_row) {
            if (this.structure.hasOwnProperty('thead')) {
                return this.structure.thead.getRow(id_row);
            }
            if (this.structure.hasOwnProperty('tbody')) {
                return this.structure.tbody.getRow(id_row);
            }
            if (!this.structure.hasOwnProperty('thead') && !this.structure.hasOwnProperty('tbody')) {
                for (const row of this.structure.rows) {
                    if (row.props.id === id_row) {
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
     * * Check if there is a Table Cell.
     * @param {string} id_cell Cell primary key.
     * @returns {boolean}
     * @memberof Table
     */
    hasCell (id_cell = false) {
        if (id_cell) {
            if (this.structure.hasOwnProperty('thead')) {
                if (this.structure.thead.hasCell(id_cell)) {
                    return true;
                }
            }
            if (this.structure.hasOwnProperty('tbody')) {
                if (this.structure.tbody.hasCell(id_cell)) {
                    return true;
                }
            }
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
     * * Check if there is a Table Row.
     * @param {string} id_row Row primary key.
     * @returns {boolean}
     * @memberof Table
     */
    hasRow (id_row = false) {
        if (id_row) {
            if (this.structure.hasOwnProperty('thead')) {
                if (this.structure.thead.hasRow(id_row)) {
                    return true;
                }
            }
            if (this.structure.hasOwnProperty('tbody')) {
                if (this.structure.tbody.hasRow(id_row)) {
                    return true;
                }
            }
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
     * * Removes a Table Cell.
     * @param {string} id_cell Cell primary key.
     * @returns {Cell|false}
     * @memberof Table
     */
    removeCell (id_cell = false) {
        if (id_cell) {
            if (this.structure.hasOwnProperty('thead')) {
                return this.structure.thead.removeCell(id_cell);
            }
            if (this.structure.hasOwnProperty('tbody')) {
                return this.structure.tbody.removeCell(id_cell);
            }
            if (!this.structure.hasOwnProperty('thead') && !this.structure.hasOwnProperty('tbody')) {
                for (const row of this.structure.rows) {
                    return row.removeCell(id_cell);
                }
            }
            return false;
        }
        if (!id_cell) {
            console.error("Cell primary key is required");
        }
    }

    /**
     * * Removes a Table Row.
     * @param {string} id_row Row primary key.
     * @returns {Row|false}
     * @memberof Table
     */
    removeRow (id_row = false) {
        if (id_row) {
            if (this.structure.hasOwnProperty('thead')) {
                return this.structure.thead.removeRow(id_cell);
            }
            if (this.structure.hasOwnProperty('tbody')) {
                return this.structure.tbody.removeRow(id_cell);
            }
            if (!this.structure.hasOwnProperty('thead') && !this.structure.hasOwnProperty('tbody')) {
                for (const key in [...this.structure.rows]) {
                    if (Object.hasOwnProperty.call(this.structure.rows, key)) {
                        const row = this.structure.rows[key];
                        if (row.props.id === id_row) {
                            row.removeHTML();
                            delete this.structure.rows[key];
                            return row;
                        }
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
     * * Parse the a Table structure.
     * @param {object[]} [structure] Table structure.
     * @returns {object}
     * @memberof Table
     */
    parseStructure (structure = []) {
        let body = false, head = false;
        for (const key in structure) {
            if (Object.hasOwnProperty.call(structure, key)) {
                const html = structure[key];
                if (key === 'tbody') {
                    if (typeof body !== 'object') {
                        body = [];
                    }
                    for (const row in html) {
                        if (Object.hasOwnProperty.call(html, row)) {
                            const cell = html[row];
                            body.push(cell);
                        }
                    }
                }
                if (key === 'thead') {
                    if (typeof head !== 'object') {
                        head = [];
                    }
                    for (const row in html) {
                        if (Object.hasOwnProperty.call(html, row)) {
                            const cell = html[row];
                            head.push(cell);
                        }
                    }
                }
            }
        }
        return { body, head };
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Table
     */
    static props = {
        id: 'table-1',
        classes: {
            table: [],
            thead: [],
            tbody: [],
        },
        nodeName: 'TABLE',
    }
}

// ? Table childs
Table.Cell = Cell;
Table.Row = Row;
Table.TPart = TPart;

// ? Default export
export default Table;