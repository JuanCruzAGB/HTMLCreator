// ? HTMLCreatorJS repository
import { Item } from "./Item.js";

/**
 * * List creates an excellent <ul> or <ol>.
 * @export
 * @class List
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class List{
    /**
     * * Creates an instance of List.
     * @param {Object} [properties] List properties:
     * @param {String} [properties.id] List ID.
     * @param {String} [properties.type] List type.
     * @param {String[]} [properties.classes] List class names.
     * @param {Object[]} [items] List Items.
     * @memberof List
     */
    constructor(properties = {
        id: 'ul-1',
        type: 'ul',
        classes: [],
    }, items = []){
        this.setProperties(properties);
        this.setItems(items);
        this.createHTML();
    }

    /**
     * * Set the List properties.
     * @param {Object} [properties] List properties:
     * @param {String} [properties.id] List ID.
     * @param {String} [properties.type] List type.
     * @param {String[]} [properties.classes] List class names.
     * @memberof List
     */
    setProperties(properties = {
        id: 'ul-1',
        type: 'ul',
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setTypeProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the List properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof List
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
     * @memberof List
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
     * @memberof List
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
     * * Set the List ID.
     * @param {Object} [properties] List properties:
     * @param {String} [properties.id] List ID.
     * @memberof List
     */
    setIDProperty(properties = {
        id: 'ul-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'ul-1';
        }
    }

    /**
     * * Returns the List ID.
     * @returns {String}
     * @memberof List
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the List type.
     * @param {Object} [properties] List properties:
     * @param {String} [properties.type] List type.
     * @memberof List
     */
    setTypeProperty(properties = {
        type: 'ul',
    }){
        if (properties.hasOwnProperty('type')) {
            this.properties.type = properties.type;
        } else {
            this.properties.type = 'ul';
        }
    }

    /**
     * * Returns the List type.
     * @returns {String}
     * @memberof List
     */
    getTypeProperty(){
        return this.properties.type;
    }

    /**
     * * Set the List class names.
     * @param {Object} [properties] List properties:
     * @param {String[]} [properties.classes] List class names.
     * @memberof List
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
     * * Returns the List class names.
     * @returns {Array}
     * @memberof List
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the List Items.
     * @param {Object[]} [items] List Items.
     * @memberof List
     */
    setItems(items = []){
        this.items = [];
        for (const item of items) {
            this.items.push(new Item((item.hasOwnProperty('properties') ? item.properties : []), (item.hasOwnProperty('innerHTML') ? item.innerHTML : [])));
        }
    }

    /**
     * * Returns the List Items.
     * @returns {Item[]}
     * @memberof List
     */
    getItems(){
        return this.items;
    }

    /**
     * * Returns the List HTML Element.
     * @returns {HTMLElement}
     * @memberof List
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the List HTML Element.
     * @memberof List
     */
    createHTML(){
        this.html = document.createElement(this.getProperties('type'));
        this.html.id = this.getProperties('id');
        for (const className of this.getProperties('classes')) {
            this.html.classList.add(className);
        }
        for (const item of this.getItems()) {
            this.html.appendChild(item.getHTML());
        }
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof List
     */
    appendChild(html){
        this.html.appendChild(html);
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof List
     */
    insertBefore(newHTML, oldHTML){
        this.html.insertBefore(newHTML, oldHTML);
    }
}