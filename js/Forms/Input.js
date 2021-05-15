/**
 * * Input creates an excellent <input>.
 * @export
 * @class Input
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Input{
    /**
     * * Creates an instance of Input.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.id] Input ID.
     * @param {String} [properties.name] Input name.
     * @param {String} [properties.type] Input type.
     * @param {String} [properties.defaultValue] Input default value.
     * @param {String} [properties.placeholder] Input placeholder text.
     * @param {String[]} [properties.accept] Input mimetype accepted.
     * @param {String[]} [properties.classes] Input class names.
     * @param {Object} [states] Input states:
     * @param {Boolean} [states.checked] Input checked status.
     * @param {Boolean} [states.disabled] Input disabled status.
     * @param {Boolean} [states.multiple] Input accept multiple files boolean.
     * @memberof Input
     */
    constructor(properties = {
        id: 'input-1',
        name: 'input-1',
        type: 'text',
        defaultValue: '',
        placeholder: '',
        accept: [],
        classes: [],
    }, states = {
        checked: false,
        disabled: false,
        multiple: false,
    }){
        this.setProperties(properties);
        this.setStates(states);
        this.createHTML();
    }

    /**
     * * Set the Input properties.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.id] Input ID.
     * @param {String} [properties.name] Input name.
     * @param {String} [properties.type] Input type.
     * @param {String} [properties.defaultValue] Input default value.
     * @param {String} [properties.placeholder] Input placeholder text.
     * @param {String[]} [properties.accept] Input mimetype accepted.
     * @param {String[]} [properties.classes] Input class names.
     * @memberof Input
     */
    setProperties(properties = {
        id: 'input-1',
        name: 'input-1',
        type: 'text',
        defaultValue: '',
        placeholder: '',
        accept: [],
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setNameProperty(properties);
        this.setTypeProperty(properties);
        this.setDefaultValueProperty(properties);
        this.setPlaceholderProperty(properties);
        this.setAcceptProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Input properties or an specific property.
     * @param {String} name Property name.
     * @returns {Object|*}
     * @memberof Input
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
     * @memberof Input
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
     * @memberof Input
     */
    changeProperty(name = '', value = ''){
        if (this.hasProperty(name)) {
            this.properties[name] = value;
        }
        switch (name) {
            case 'type':
                this.html.type = this.getProperties('type');
                break;
            case 'defaultValue':
                this.html.value = this.getProperties('defaultValue');
                break;
            case 'placeholder':
                this.html.placeholder = this.getProperties('placeholder');
                break;
        }
    }

    /**
     * * Set the Input ID.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.id] Input ID.
     * @memberof Input
     */
    setIDProperty(properties = {
        id: 'input-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'input-1';
        }
    }

    /**
     * * Returns the Input ID.
     * @returns {String}
     * @memberof Input
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Input name.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.name] Input name.
     * @memberof Input
     */
    setNameProperty(properties = {
        name: 'input-1',
    }){
        if (properties.hasOwnProperty('name')) {
            this.properties.name = properties.name;
        } else {
            this.properties.name = 'input-1';
        }
    }

    /**
     * * Returns the Input name.
     * @returns {String}
     * @memberof Input
     */
    getNameProperty(){
        return this.properties.name;
    }

    /**
     * * Set the Input type.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.type] Input type.
     * @memberof Input
     */
    setTypeProperty(properties = {
        type: 'text',
    }){
        if (properties.hasOwnProperty('type')) {
            this.properties.type = properties.type;
        } else {
            this.properties.type = 'text';
        }
    }

    /**
     * * Returns the Input type.
     * @returns {String}
     * @memberof Input
     */
    getTypeProperty(){
        return this.properties.type;
    }

    /**
     * * Set the Input default value.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.defaultValue] Input default value.
     * @memberof Input
     */
    setDefaultValueProperty(properties = {
        defaultValue: '',
    }){
        if (properties.hasOwnProperty('defaultValue')) {
            this.properties.defaultValue = properties.defaultValue;
        } else {
            this.properties.defaultValue = '';
        }
    }

    /**
     * * Returns the Input default value.
     * @returns {String}
     * @memberof Input
     */
    getDefaultValueProperty(){
        return this.properties.defaultValue;
    }

    /**
     * * Set the Input placeholder text.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.placeholder] Input placeholder text.
     * @memberof Input
     */
    setPlaceholderProperty(properties = {
        placeholder: '',
    }){
        if (properties.hasOwnProperty('placeholder')) {
            this.properties.placeholder = properties.placeholder;
        } else {
            this.properties.placeholder = 'input-1';
        }
    }

    /**
     * * Returns the Input placeholder text.
     * @returns {String}
     * @memberof Input
     */
    getPlaceholderProperty(){
        return this.properties.placeholder;
    }

    /**
     * * Set the Input class names.
     * @param {Object} [properties] Input properties:
     * @param {String[]} [properties.classes] Input class names.
     * @memberof Input
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
     * * Returns the Input class names.
     * @returns {Array}
     * @memberof Input
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Returns the Input placeholder text.
     * @returns {String}
     * @memberof Input
     */
    getPlaceholderProperty(){
        return this.properties.placeholder;
    }

    /**
     * * Set the Input mimetypes accepted.
     * @param {Object} [properties] Input properties:
     * @param {String[]} [properties.accept] Input mimetypes accepted.
     * @memberof Input
     */
    setAcceptProperty(properties = {
        accept: [],
    }){
        if (properties.hasOwnProperty('accept')) {
            this.properties.accept = properties.accept;
        } else {
            this.properties.accept = [];
        }
    }

    /**
     * * Returns the Input mimetypes accepted.
     * @returns {Array}
     * @memberof Input
     */
    getAcceptProperty(){
        return this.properties.accept;
    }

    /**
     * * Set the Input states.
     * @param {Object} [states] Input states:
     * @param {Boolean} [states.checked] Input checked status.
     * @param {Boolean} [states.disabled] Input disabled status.
     * @param {Boolean} [states.multiple] Input accept multiple files boolean.
     * @memberof Input
     */
    setStates(states = {
        checked: false,
        disabled: false,
        multiple: false,
    }){
        this.states = {};
        this.setDisabledStatus(states);
        this.setCheckedStatus(states);
        this.setMultipleStatus(states);
    }

    /**
     * * Returns the Input states or an specific state.
     * @param {String} [state] State name.
     * @returns {Object|*}
     * @memberof Input
     */
    getStates(state = ''){
        if (state && state != '') {
            return this.states[state];
        } else {
            return this.states;
        }
    }

    /**
     * * Check if there is a status.
     * @param {String} name Status name.
     * @returns {Boolean}
     * @memberof Input
     */
    hasStates(name = ''){
        if (this.states.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a status value.
     * @param {String} name Status name.
     * @param {*} value Status value.
     * @memberof Input
     */
    changeStatus(name = '', value = ''){
        if (this.hasStates(name)) {
            this.states[name] = value;
        }
        switch (name) {
            case 'checked':
                this.html.checked = true;
            case 'disabled':
                this.html.disabled = true;
                break;
        }
    }

    /**
     * * Set the Input checked status.
     * @param {Object} [states] Input states:
     * @param {Boolean} [states.checked] Input checked status.
     * @memberof Input
     */
    setCheckedStatus(states = {
        checked: false,
    }){
        if (states.hasOwnProperty('checked')) {
            this.states.checked = states.checked;
        } else {
            this.states.checked = false;
        }
    }

    /**
     * * Returns the Input checked status.
     * @returns {Boolean}
     * @memberof Input
     */
    getCheckedStatus(){
        return this.states.checked;
    }

    /**
     * * Set the Input disabled status.
     * @param {Object} [states] Input states:
     * @param {Boolean} [states.disabled] Input disabled status.
     * @memberof Input
     */
    setDisabledStatus(states = {
        disabled: false,
    }){
        if (states.hasOwnProperty('disabled')) {
            this.states.disabled = states.disabled;
        } else {
            this.states.disabled = false;
        }
    }

    /**
     * * Returns the Input disabled status.
     * @returns {Boolean}
     * @memberof Input
     */
    getDisabledStatus(){
        return this.states.disabled;
    }

    /**
     * * Set the Input accept multiple files boolean.
     * @param {Object} [states] Input states:
     * @param {Boolean} [states.multiple] Input accept multiple files boolean.
     * @memberof Input
     */
    setMultipleStatus(states = {
        multiple: false,
    }){
        if (states.hasOwnProperty('multiple')) {
            this.states.multiple = states.multiple;
        } else {
            this.states.multiple = false;
        }
    }

    /**
     * * Returns the Input accept multiple files boolean.
     * @returns {Boolean}
     * @memberof Input
     */
    getMultipleStatus(){
        return this.states.multiple;
    }

    /**
     * * Returns the <input> HTML Element.
     * @returns {HTMLElement}
     * @memberof Input
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <input> HTML Element.
     * @memberof Input
     */
    createHTML(){
        this.html = document.createElement('input');
        this.html.id = this.getProperties('id');
        this.html.name = this.getProperties('name');
        this.html.type = this.getProperties('type');
        switch (this.getProperties('type')) {
            case 'file':
                this.html.multiple = this.getStates('multiple');
                this.html.accept = '';
                for (const accepted of this.getProperties('accept')) {
                    if (this.html.accept == '') {
                        this.html.accept = `${ accepted }`;
                    } else {
                        this.html.accept += `,${ accepted }`;
                    }
                }
                break;
        }
        this.html.setAttribute('value', this.getProperties('defaultValue'));
        this.html.placeholder = this.getProperties('placeholder');
        for (const className of this.getProperties('classes')) {
            this.html.classList.add(className);
        }
        if (this.getStates('checked')) {
            this.html.checked = true;
        }
        if (this.getStates('disabled')) {
            this.html.disabled = true;
        }
    }
}