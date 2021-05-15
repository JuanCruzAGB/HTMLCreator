/**
 * * Td creates an excellent <td>.
 * @export
 * @class Td
 */
export class Td{
    /**
     * * Creates an instance of Td.
     * @param {Object} [properties] Td properties:
     * @param {String} [properties.id] Td ID.
     * @param {String} [properties.name] Td name.
     * @param {String[]} [properties.classes] Td class names.
     * @param {*} [data] Td innerHTML data.
     * @memberof Td
     */
    constructor(properties = {
        id: 'td-1',
        name: 'Table cell 1',
        classes: [],
    }, data){
        this.setProperties(properties);
        this.setData(data);
        this.createHTML();
    }

    /**
     * * Set the Td properties.
     * @param {Object} [properties] Td properties:
     * @param {String} [properties.id] Td ID.
     * @param {String} [properties.name] Td name.
     * @param {String[]} [properties.classes] Td class names.
     * @memberof Td
     */
    setProperties(properties = {
        id: 'td-1',
        name: 'Table cell 1',
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setNameProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Td properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof Td
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
     * @memberof Td
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
     * @memberof Td
     */
    changeProperty(name = '', value = ''){
        if (this.hasProperty(name)) {
            this.properties[name] = value;
        }
        switch (name) {
            case 'name':
                this.html.title = this.getProperties('name');
                break;
        }
    }

    /**
     * * Set the Td ID.
     * @param {Object} [properties] Td properties:
     * @param {String} [properties.id] Td ID.
     * @memberof Td
     */
    setIDProperty(properties = {
        id: 'td-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'td-1';
        }
    }

    /**
     * * Returns the Td ID.
     * @returns {String}
     * @memberof Td
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Td name.
     * @param {Object} [properties] Td properties:
     * @param {String} [properties.name] Td name.
     * @memberof Td
     */
    setNameProperty(properties = {
        name: 'Table cell 1',
    }){
        if (properties.hasOwnProperty('name')) {
            this.properties.name = properties.name;
        } else {
            this.properties.name = 'Table cell 1';
        }
    }

    /**
     * * Returns the Td name.
     * @returns {String}
     * @memberof Td
     */
    getNameProperty(){
        return this.properties.name;
    }

    /**
     * * Set the Td class names.
     * @param {Object} [properties] Td properties:
     * @param {String[]} [properties.classes] Td class names.
     * @memberof Td
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
     * * Returns the Td class names.
     * @returns {Array}
     * @memberof Td
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Td data.
     * @param {Object} data Td data.
     * @memberof Td
     */
    setData(data = undefined){
        this.data = data;
    }

    /**
     * * Returns the Td data.
     * @returns {*}
     * @memberof Td
     */
    getData(){
        return this.data;
    }

    /**
     * * Change the Td data.
     * @param {*} data Td data.
     * @memberof Td
     */
    changeData(data = undefined){
        this.setData(data);
        this.html.innerHTML = '';
        if (this.getData()) {
            this.html.appendChild(this.getData());
        }
    }

    /**
     * * Returns the <td>.
     * @returns {HTMLElement}
     * @memberof Td
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates a <td>.
     * @memberof Td
     */
    createHTML(){
        this.html = document.createElement('td');
        this.html.title = this.getProperties('name');
        this.html.classList.add(this.getProperties('id'));
        for (const className of this.getProperties('classes')) {
            this.html.classList.add(className);
        }
        this.html.innerHTML = '';
        if (this.getData()) {
            this.html.appendChild(this.getData());
        }
    }
}