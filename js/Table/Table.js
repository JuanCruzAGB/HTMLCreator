// ? HTMLCreatorJS repository
import { THead } from "./THead.js";
import { TBody } from "./TBody.js";
import { Tr } from "./Tr.js";
import { Td } from "./Td.js";
import { Th } from "./Th.js";

/**
 * * Table creates an excellent <table>.
 * @export
 * @class Table
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Table{
    /**
     * * Creates an instance of Table.
     * @param {Object} [properties] Table properties:
     * @param {String} [properties.id] Table ID.
     * @param {Boolean} [properties.thead] Table <thead> boolean.
     * @param {Boolean} [properties.tbody] Table <tbody> boolean.
     * @param {String[]} [properties.trClasses] Table <tr> class names.
     * @param {Object[]} [cells] Table cells.
     * @param {Object[]} [data] Table data.
     * @memberof Table
     */
    constructor(properties = {
        id: 'table-1',
        thead: true,
        tbody: true,
        trClasses: [],
    }, cells = [], data = undefined){
        this.setProperties(properties);
        this.setData(data);
        this.setCells(cells, properties);
        this.setHTML();
    }

    /**
     * * Set the Table properties.
     * @param {Object} [properties] Table properties:
     * @param {String} [properties.id] Table ID.
     * @param {Boolean} [properties.thead] Table <thead> boolean.
     * @param {Boolean} [properties.tbody] Table <tbody> boolean.
     * @memberof Table
     */
    setProperties(properties = {
        id: 'table-1',
        thead: true,
        tbody: true,
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setTHeadBooleanProperty(properties);
        this.setTBodyBooleanProperty(properties);
    }

    /**
     * * Returns the Table properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof Table
     */
    getProperties(name = ''){
        if (name && name != '') {
            return this.properties[name];
        } else {
            return this.properties;
        }
    }

    /**
     * * Check if there is a property.
     * @param {String} name Property name.
     * @returns {Boolean}
     * @memberof Table
     */
    hasProperty(name = ''){
        if (this.properties.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a property value.
     * @param {String} name Property name.
     * @param {*} value Property value.
     * @memberof Table
     */
    changeProperty(name = '', value = ''){
        if (this.hasProperty(name)) {
            this.properties[name] = value;
        }
        switch (name) {
            default:
                break;
        }
    }

    /**
     * * Set the Table ID.
     * @param {Object} [properties] Table properties:
     * @param {String} [properties.id] Table ID.
     * @memberof Table
     */
    setIDProperty(properties = {
        id: 'table-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'table-1';
        }
    }

    /**
     * * Returns the Table ID.
     * @returns {String}
     * @memberof Table
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Table <thead> boolean.
     * @param {Object} [properties] Table properties:
     * @param {Boolean} [properties.thead] Table <thead> boolean.
     * @memberof Table
     */
    setTHeadBooleanProperty(properties = {
        thead: true,
    }){
        if (properties.hasOwnProperty('thead')) {
            this.properties.thead = properties.thead;
        } else {
            this.properties.thead = true;
            this.thead = new THead({});
        }
    }

    /**
     * * Returns the Table <thead> Boolean.
     * @returns {Boolean}
     * @memberof Table
     */
    getTHeadBooleanProperty(){
        return this.properties.thead;
    }

    /**
     * * Returns the Table <thead>.
     * @returns {THead|false}
     * @memberof Table
     */
    getTHead(){
        if (this.hasOwnProperty('thead')) {
            return this.thead;
        } else {
            return false;
        }
    }

    /**
     * * Set the Table <tbody> boolean.
     * @param {Object} [properties] Table properties:
     * @param {Boolean} [properties.tbody] Table <tbody> boolean.
     * @memberof Table
     */
    setTBodyBooleanProperty(properties = {
        tbody: true,
    }){
        if (properties.hasOwnProperty('tbody')) {
            this.properties.tbody = properties.tbody;
        } else {
            this.properties.tbody = true;
            this.tbody = new TBody({});
        }
    }

    /**
     * * Returns the Table <tbody> Boolean.
     * @returns {Boolean}
     * @memberof Table
     */
    getTBodyBooleanProperty(){
        return this.properties.tbody;
    }

    /**
     * * Returns the Table <tbody>.
     * @returns {TBody|false}
     * @memberof Table
     */
    getTBody(){
        if (this.hasOwnProperty('tbody')) {
            return this.tbody;
        } else {
            return false;
        }
    }

    /**
     * * Set the Table data.
     * @param {Object[]} [data] Table data.
     * @memberof Table
     */
    setData(data = undefined){
        this.data = data;
    }

    /**
     * * Returns the Table data.
     * @param {Number} [row] Number of row from data.
     * @param {*} [index] Index of the data.
     * @returns {*}
     * @memberof Table
     */
    getData(row = false, index = undefined){
        if (typeof row == 'number' && row >= 0) {
            if (/:/.exec(index)) {
                index = index.split(':');
                if (index.length > 2) {
                    if (this.data[row].hasOwnProperty(index[0])) {
                        let element = this.data[row][index[0]],
                            found = true;
                        for (const key in index) {
                            if (parseInt(key) >= 1) {
                                if (element.hasOwnProperty(index[parseInt(key)])) {
                                    element = element[index[parseInt(key)]];
                                } else {
                                    found = false;
                                }
                            }
                        }
                        if (found) {
                            return element;
                        }
                    }
                } else {
                    if (this.data[row].hasOwnProperty(index[0])) {
                        if (this.data[row][index[0]].hasOwnProperty(index[1])) {
                            return this.data[row][index[0]][index[1]];
                        }
                    }
                }
            } else {
                for (const key in this.data[row]) {
                    if (this.data[row].hasOwnProperty(index)) {
                        return this.data[row][index];
                    }
                }
            }
        } else {
            return this.data;
        }
    }

    /**
     * * Change the Table data.
     * @param {Object[]} data Table data.
     * @memberof Table
     */
    changeData(data){
        this.setData(data);
        this.setCells();
    }

    /**
     * * Add new Table data.
     * @param {Object[]} newData Table data.
     * @memberof Table
     */
    addData(newData){
        for (const data of newData) {
            this.data.push(data);
        }
    }

    /**
     * * Remove a Table data.
     * @param {Number} position Table data position.
     * @memberof Table
     */
    removeData(position){
        let data = this.getData();
        for (const key in this.getData()) {
            if (position == key) {
                data.splice(key);
            }
        }
    }

    /**
     * * Set the Table info.
     * @param {Object} [info] Table Cells information.
     * @memberof Table
     */
    setInfo(info = []){
        this.info = info;
    }

    /**
     * * Returns the Table info.
     * @returns {Object}
     * @memberof Table
     */
    getInfo(){
        return this.info;
    }

    /**
     * * Set the Table cells.
     * @param {Object[]} [cells] Table cells.
     * @param {Object} [properties] Table properties:
     * @param {String[]} [properties.trClasses] Table <tr> class names.
     * @memberof Table
     */
    setCells(cells = [], properties = {
        trClasses: [],
    }){
        this.cells = [];
        let cellsToAppend;
        if (!this.info) {
            this.setInfo(cells);
        }
        if (this.getData().length >= 1) {
            for (const row in this.getData()) {
                cellsToAppend = this.createCellByInfo(parseInt(row));
                if (this.properties.tbody) {
                    this.setTr(row, (properties.hasOwnProperty('trClasses') && properties.trClasses.hasOwnProperty('tbody')) ? properties.trClasses.tbody : [], cellsToAppend);
                }
            }
        }
        if (this.getTHeadBooleanProperty()) {
            cellsToAppend = this.createCellByInfo(0, 'th');
            this.setTrIntoTHead(properties, cellsToAppend);
        }
    }

    /**
     * * Returns the Table data.
     * @returns {TBody|false}
     * @memberof Table
     */
    getCells(){
        return this.cells;
    }

    /**
     * * Set a Table cell.
     * @param {Number} row Number of rows from data.
     * @param {Number} [key] Number of cell to set.
     * @param {Object} [properties] Cell properties:
     * @param {String} [properties.id] Cell ID.
     * @param {String[]} [properties.thClasses] Th class names.
     * @param {String[]} [properties.tdClasses] Td class names.
     * @param {String} [type] Cell type.
     * @memberof Table
     */
    setCell(row, key = 1, properties = {
        id: 'td-1',
        thClasses: [],
        tdClasses: [],
    }, type = 'td'){
        let column;
        switch (type) {
            case 'th':
                column = new Th({
                    id: properties.hasOwnProperty('id') ? properties.id : `th-${ key }`,
                    innerHTML: properties.hasOwnProperty('innerHTML') ? properties.innerHTML : undefined,
                    classes: properties.hasOwnProperty('thClasses') ? properties.thClasses : [],
                }, properties.hasOwnProperty('name') ? properties.name : `Table cell header ${ key }`);
                break;
            case 'td':
                column = new Td({
                    id: properties.hasOwnProperty('id') ? properties.id : `td-${ key }`,
                    name: properties.hasOwnProperty('name') ? properties.name : `Table cell ${ key }`,
                    innerHTML: properties.hasOwnProperty('innerHTML') ? properties.innerHTML : undefined,
                    classes: properties.hasOwnProperty('tdClasses') ? properties.tdClasses : [],
                }, this.getData(row, properties.innerHTML));
                this.addCell(row, column);
                break;
        }
        return column;
    }

    /**
     * * Add a new cell into the Table cell Array.
     * @param {Number} row Number of rows from data.
     * @param {Td|Th} column Cell to add.
     * @memberof Table
     */
    addCell(row, column){
        if (!this.cells[row]) {
            this.cells[row] = [];
        }
        this.cells[row].push(column);
    }

    /**
     * * Creates Td by the Table information.
     * @param {Number} row Number of rows from data.
     * @param {String} [type] Cell type.
     * @returns {Array}
     * @memberof Table
     */
    createCellByInfo(row, type = 'td'){
        let cellsToAppend = [];
        if (this.getInfo().length >= 1) {
            for (const col in this.getInfo()) {
                const cell = this.getInfo()[col];
                switch (type) {
                    case 'th':
                        cellsToAppend.push(this.setCell(0, col, cell, 'th'));
                        break;
                    default:
                        cellsToAppend.push(this.setCell(row, col, cell));
                        break;
                }
            }
        }
        return cellsToAppend;
    }

    /**
     * * Set Table <tr> into the <thead>.
     * @param {Number} key Number of Tr to set.
     * @param {Object} [properties] Cell properties:
     * @param {String} [properties.id] Cell ID.
     * @param {String[]} [properties.trClasses] Tr class names.
     * @memberof Table
     */
    setTrIntoTHead(properties = {
        trClasses: [],
    }, cellsToAppend){
        let tr = new Tr({
            id: `tr-header`,
            classes: (properties.hasOwnProperty('trClasses') && properties.trClasses.hasOwnProperty('thead')) ? properties.trClasses.thead : [],
        });
        for (const cell of cellsToAppend) {
            tr.appendChild(cell.getHTML());
        }
        this.getTHead().setTr(tr);
    }

    /**
     * * Set Table <tr>.
     * @param {Number} row Number of Tr to set.
     * @param {String[]} [classes] Table row class names.
     * @param {Object[]} cellsToAppend Array of Td to append into the Tr.
     * @memberof Table
     */
    setTr(row, classes = [], cellsToAppend){
        if (!this.trs) {
            this.trs = [];
        }
        let tr = new Tr({
            id: `tr-${ row }`,
            classes: classes,
        });
        for (const cell of cellsToAppend) {
            tr.appendChild(cell.getHTML());
        }
        this.trs.push(tr);
        this.getTBody().setTr(tr);
    }

    /**
     * * Returns the Table <tr>.
     * @returns {Tr[]}
     * @memberof Table
     */
    getTr(){
        return this.trs;
    }

    /**
     * * Add a new Table <tr>.
     * @param {Number} row Number of Tr to set.
     * @param {String[]} [classes] Table row class names.
     * @param {String} [position] Table row position to append.
     * @memberof Table
     */
    addTr(row, classes = [], position = 'after'){
        if (!this.trs) {
            this.trs = [];
        }
        let tr = new Tr({
            id: `tr-${ row }`,
            classes: classes,
        });
        for (const cell of this.createCellByInfo(row)) {
            tr.appendChild(cell.getHTML());
        }
        this.getTBody().addTr(tr, position);
        switch (position) {
            case 'before':
                this.trs.unshift(tr);
                break;
            default:
                this.trs.push(tr);
                break;
        }
    }

    /**
     * * Remove a Table <tr>.
     * @param {String} ID Tr ID.
     * @memberof Table
     */
    removeTr(ID){
        let keyRemoved;
        for (const key in this.trs) {
            const tr = this.trs[key];
            if (tr.getProperties('id') == ID) {
                keyRemoved = key;
            }
        }
        this.trs.splice(keyRemoved, 1);
        this.getTBody().removeTr(ID);
    }

    /**
     * * Set the Table HTML Element.
     * @memberof Table
     */
    setHTML(){
        this.html = document.querySelector(`table#${ this.getProperties('id') }`);
        if (this.getProperties('thead')) {
            this.html.appendChild(this.getTHead().getHTML());
        }
        if (this.getProperties('tbody')) {
            this.html.appendChild(this.getTBody().getHTML());
        }
    }

    /**
     * * Returns the Table HTML Element.
     * @returns {HTMLElement}
     * @memberof Table
     */
    getHTML(){
        return this.trs;
    }
}