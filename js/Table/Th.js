/**
 * * Th creates an excellent <th>.
 * @export
 * @class Th
 */
export class Th{
    /**
     * * Creates an instance of Th.
     * @param {Object} [properties] Th properties:
     * @param {String} [properties.id] Th ID.
     * @param {String[]} [properties.classes] Th class names.
     * @param {*} [data] Th data.
     * @memberof Th
     */
    constructor(properties = {
        id: 'th-1',
        classes: [],
    }, data = 'Table cell header 1'){
        this.setProperties(properties);
        this.setData(data);
        this.createHTML();
    }

    /**
     * * Set the Th properties.
     * @param {Object} [properties] Th properties:
     * @param {String} [properties.id] Th ID.
     * @param {String[]} [properties.classes] Th class names.
     * @memberof Th
     */
    setProperties(properties = {
        id: 'th-1',
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Th properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}.
     * @memberof Th
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
     * @memberof Th
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
     * @memberof Th
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
     * * Set the Th ID.
     * @param {Object} [properties] Th properties:
     * @param {String} [properties.id] Th ID.
     * @memberof Th
     */
    setIDProperty(properties = {
        id: 'th-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'th-1';
        }
    }

    /**
     * * Returns the Th ID.
     * @returns {String}
     * @memberof Th
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Th class names.
     * @param {Object} [properties] Th properties:
     * @param {String[]} [properties.classes] Th class names.
     * @memberof Th
     */
    setClassesProperty(properties = {
        classes: [],
    }){
        if (properties.hasOwnProperty('classes')) {
            this.properties.classes = properties.classes;
        } else {
            this.properties.classes = [];
        }
    }

    /**
     * * Returns the Th class names.
     * @returns {String[]}
     * @memberof Th
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Th data.
     * @param {*} [data] Th data.
     * @memberof Th
     */
    setData(data = undefined){
        this.data = data;
    }

    /**
     * * Returns the Th data.
     * @returns {*}
     * @memberof Th
     */
    getData(){
        return this.data;
    }

    /**
     * * Change the Th data.
     * @param {*} [data] Th data.
     * @memberof Th
     */
    changeData(data = undefined){
        this.setData(data);
        if (this.getData()) {
            this.html.innerHTML = this.getData();
        }
    }

    /**
     * * Returns the <th>.
     * @returns {HTMLElement}
     * @memberof Th
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates a <th>.
     * @memberof Th
     */
    createHTML(){
        this.html = document.createElement('th');
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
        if (this.getData()) {
            this.html.innerHTML = this.getData();
        }
    }
}