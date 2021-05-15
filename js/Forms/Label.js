// ? HTMLCreatorJS repository
import { Input } from "./Input.js";

/**
 * * Label creates an excellent <label>.
 * @export
 * @class Label
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Label{
    /**
     * * Creates an instance of Label.
     * @param {Object} [properties] Label properties:
     * @param {String} [properties.id] Label ID.
     * @param {String} [properties.for] Label HTML for <input> ID.
     * @param {String[]} [properties.classes] Label class names.
     * @param {Object} input Label Input properties & states.
     * @memberof Label
     */
    constructor(properties = {
        id: 'label-1',
        for: false,
        classes: [],
    }, input = {}){
        this.setProperties(properties);
        this.setInput(input);
        this.createHTML();
    }

    /**
     * * Set the Label properties.
     * @param {Object} [properties] Label properties:
     * @param {String} [properties.id] Label ID.
     * @param {String} [properties.for] Label HTML for <input> ID.
     * @param {String[]} [properties.classes] Label class names.
     * @memberof Label
     */
    setProperties(properties = {
        id: 'label-1',
        for: false,
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setForProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Label properties or an specific property.
     * @param {String} name Property name.
     * @returns {Object|*}
     * @memberof Label
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
     * @param {String} [name] Property name.
     * @returns {Boolean}
     * @memberof Label
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
     * @memberof Label
     */
    changeProperty(name = '', value = ''){
        if (this.hasProperty(name)) {
            this.properties[name] = value;
        }
        switch (name) {
            case 'for':
                this.html.htmlFor = this.getProperties('for');
                break;
        }
    }

    /**
     * * Set the Label ID.
     * @param {Object} [properties] Label properties:
     * @param {String} [properties.id] Label ID.
     * @memberof Label
     */
    setIDProperty(properties = {
        id: 'label-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'label-1';
        }
    }

    /**
     * * Returns the Label ID.
     * @returns {String}
     * @memberof Label
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Label HTML for <input> ID.
     * @param {Object} [properties] Label properties:
     * @param {String} [properties.for] Label HTML for <input> ID.
     * @memberof Label
     */
    setForProperty(properties = {
        for: false,
    }){
        if (properties.hasOwnProperty('for')) {
            this.properties.for = properties.for;
        } else {
            this.properties.for = false;
        }
    }

    /**
     * * Returns the Label for.
     * @returns {String}
     * @memberof Label
     */
    getForProperty(){
        return this.properties.for;
    }

    /**
     * * Set the Label class names.
     * @param {Object} [properties] Label properties:
     * @param {String[]} [properties.classes] Label class names.
     * @memberof Label
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
     * * Returns the Label class names.
     * @returns {Array}
     * @memberof Label
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Label Input.
     * @param {Object} input Label Input properties & states.
     * @memberof Label
     */
    setInput(input = {}){
        if (input.hasOwnProperty('states')) {
            this.input = new Input(input.properties, input.states);
        } else {
            this.input = new Input(input.properties);
        }
    }

    /**
     * * Returns the Label Input.
     * @returns {Input}
     * @memberof Label
     */
    getInput(){
        return this.input;
    }

    /**
     * * Returns the <label> HTML Element.
     * @returns {HTMLElement}
     * @memberof Label
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <label> HTML Element.
     * @memberof Label
     */
    createHTML(){
        this.html = document.createElement('label');
        this.html.id = this.getProperties('id');
        if (this.getProperties('for')) {
            this.html.htmlFor = this.getProperties('for');
        } else {
            this.appendChild(this.getInput().getHTML())
        }
        for (const className of this.getProperties('classes')) {
            this.html.classList.add(className);
        }
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof Div
     */
    appendChild(html){
        this.html.appendChild(html);
    }
}