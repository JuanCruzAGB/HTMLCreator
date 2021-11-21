// ? HTMLCreatorJS repository
import Cell from "juancruzagb/htmlcreator/js/Table/Cell";
import Row from "juancruzagb/htmlcreator/js/Table/Row";

// ? Core
import Html from "juancruzagb/htmlcreator/js/Core/Html";

/**
 * * TPart creates an excellent <tbody> or <thead>.
 * @export
 * @class TPart
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Html
 */
export default class TPart extends Html {
    /**
     * * Creates an instance of TPart.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='tbody-1'] Primary key.
     * @param {string[]} [data.props.classList] Class list.
     * @param {object} [data.state]
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {object} [data.rows] Array of <tr>.
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof TPart
     */
    constructor (data = {
        props: {
            id: 'tbody-1',
            type: 'body',
            classList: [],
        }, state: {
            id: false,
        }, rows: [],
        parentNode: false,
    }) {
        if (props.type == 'head') {
            props.nodeName = 'THEAD';
        }
        super({
            props: {
                ...TPart.props,
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            }, state: {
                ...TPart.state,
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            }, callbacks: {
                ...TPart.callbacks,
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            }, parentNode: (data && data.hasOwnProperty('parentNode')) ? data.parentNode : false,
        });
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
                let data = rows[key];
                let row = new Row({
                    ...data,
                    id: `${ this.props.id }-row-${ parseInt(key) + 1 }`,
                });
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
            console.error('Cell primary key is required');
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
                if (row.props.id == id_row) {
                    return row;
                }
            }
            return false;
        }
        if (!id_row) {
            console.error('Row primary key is required');
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
            console.error('Cell primary key is required');
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
            console.error('Cell primary key is required');
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
                    if (row.props.id == id_row) {
                        row.removeHTML();
                        delete this.rows[key];
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
     * @static
     * @var {object} props Default properties.
     * @memberof TPart
     */
    static props = {
        id: 'tbody-1',
        classList: [],
        nodeName: 'TBODY',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof TPart
     */
    static state = {
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof TPart
     */
    static callbacks = {
        // 
    }

    /**
     * @static
     * @var {Cell} Cell Cell class child.
     * @memberof TPart
     */
    static Cell = Cell;

    /**
     * @static
     * @var {Row} Row Row class child.
     * @memberof TPart
     */
    static Row = Row;
}