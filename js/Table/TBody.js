/**
 * * TBody creates an excellent <tbody>.
 * @export
 * @class TBody
 */
export class TBody{
    /**
     * * Creates an instance of TBody.
     * @param {Object} [properties] TBody properties.
     * @memberof TBody
     */
    constructor(properties = {}){
        this.createHTML();
    }

    /**
     * * Set the TBody <tr>.
     * @param {Tr} tr TBody Tr.
     * @memberof TBody
     */
    setTr(tr){
        if (!this.trs) {
            this.trs = [];
        }
        this.trs.push(tr);
        this.appendChild(tr);
    }

    /**
     * * Returns the TBody <tr>.
     * @returns {Tr[]}
     * @memberof Table
     */
    getTr(){
        return this.trs;
    }

    /**
     * * Add a new TBody <tr>.
     * @param {Tr} tr New TR.
     * @param {String} [position] TBody Tr position to append.
     * @memberof Table
     */
    addTr(tr, position = 'after'){
        switch (position) {
            case 'before':
                this.insertBefore(tr, this.getTr()[0]);
                this.trs.unshift(tr);
                break;
            default:
                this.appendChild(tr);
                this.trs.push(tr);
                break;
        }
    }

    /**
     * * Returns the <tbody>.
     * @returns {HTMLElement}
     * @memberof TBody
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates a <tbody>.
     * @memberof TBody
     */
    createHTML(){
        this.html = document.createElement('tbody');
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} tr New Tr.
     * @memberof Div
     */
    appendChild(tr){
        this.html.appendChild(tr.getHTML());
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newTr New Tr.
     * @param {HTMLElement} oldTr New Tr.
     * @memberof Div
     */
    insertBefore(newTr, oldTr){
        this.html.insertBefore(newTr.getHTML(), oldTr.getHTML());
    }

    /**
     * * Remove a <tr>.
     * @param {String} ID Tr ID.
     * @memberof TBody
     */
    removeTr(ID){
        let keyRemoved;
        for (const key in this.trs) {
            const tr = this.trs[key];
            if (tr.getProperties('id') == ID) {
                keyRemoved = key;
            }
        }
        this.html.removeChild(this.trs[keyRemoved].getHTML());
        this.trs.splice(keyRemoved, 1);
    }
}