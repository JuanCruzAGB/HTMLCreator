// ? HTMLCreatorJS repository
import Cell from './Cell.js';
import Html from '../Html.js';
import Row from './Row.js';
import TPart from './TPart.js';

/**
 * * Table creates an excellent <table>.
 * @export
 * @class Table
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export default class Table extends Html {
    /**
     * * Creates an instance of Table.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='table-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the HTML Element should print the id property.
     * @param {array} [data.structure] Array of <thead>, <tbody>, <tr>, <td> and/or <th>.
     * @memberof Table
     */
    constructor (data = {
        props: {
            id: 'table-1',
            classList: [],
        }, state: {
            id: false,
        }, structure: [],
    }) {
        super({ ...Table.props, ...((data && data.hasOwnProperty('props')) ? data.props : {}) }, { ...Table.state, ...((data && data.hasOwnProperty('state')) ? data.state : {}) }, { ...Table.callbacks, ...((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {}) });
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
        if (typeof head == 'object') {
            this.setHead(head);
        }
        if (typeof body == 'object') {
            this.setBody(body);
        }
        if (typeof head != 'object' && typeof body != 'object') {
            this.setRows(structure);
        }
    }

    /**
     * * Set the Table Body.
     * @param {object} [tbody] Body structure.
     * @memberof Table
     */
    setBody (tbody = []) {
        if (!this.structure) {
            this.structure = [];
        }
        this.structure.tbody = new TPart({
            ...tbody,
            id: `${ this.props.id }-body`,
        });
        this.appendChild(this.structure.tbody.html);
    }

    /**
     * * Set the Table Head.
     * @param {object} [thead] Head structure.
     * @memberof Table
     */
    setHead (thead = {}) {
        if (!this.structure) {
            this.structure = [];
        }
        this.structure.thead = new TPart({
            ...thead,
            id: `${ this.props.id }-head`,
        });
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
        if (typeof head == 'object' && this.structure.hasOwnProperty('thead')) {
            this.structure.thead.setRows(head);
        }
        if (typeof body == 'object' && this.structure.hasOwnProperty('tbody')) {
            this.structure.tbody.setRows(body);
        }
        if ((typeof head != 'object' || !this.structure.hasOwnProperty('thead')) && (typeof body != 'object' || !this.structure.hasOwnProperty('tbody'))) {
            this.structure.rows = [];
            for (const key in structure) {
                if (Object.hasOwnProperty.call(structure, key)) {
                    let data = structure[key];
                    let row = new Row({
                        ...data,
                        id: `row-${ parseInt(key) + 1 }`,
                    });
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
            console.error('Cell primary key is required');
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
                    if (row.props.id == id_row) {
                        return row;
                    }
                }
            }
            return false;
        }
        if (!id_row) {
            console.error('Row primary key is required');
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
            console.error('Cell primary key is required');
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
                if (row.props.id == id_row) {
                    return true;
                }
            }
            return false;
        }
        if (!id_row) {
            console.error('Row primary key is required');
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
            console.error('Cell primary key is required');
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
                        if (row.props.id == id_row) {
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
            console.error('Row primary key is required');
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
                if (key == 'tbody') {
                    body = structure[key];
                }
                if (key == 'thead') {
                    head = structure[key];
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
        classList: [],
        nodeName: 'TABLE',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Table
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof Table
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {Cell} Cell Cell class child.
     * @memberof Table
     */
    static Cell = Cell;

    /**
     * @static
     * @var {Row} Row Row class child.
     * @memberof Table
     */
    static Row = Row;

    /**
     * @static
     * @var {TPart} TPart TPart class child.
     * @memberof Table
     */
    static TPart = TPart;
}