/**
 * * THead creates an excellent <thead>.
 * @export
 * @class THead
 */
export class THead{
    /**
     * * Creates an instance of THead.
     * @param {Object} [properties] THead properties.
     * @memberof THead
     */
    constructor(properties = {}){
        this.createHTML();
    }

    /**
     * * Set the THead <tr>.
     * @param {Tr} tr THead Tr.
     * @memberof THead
     */
    setTr(tr){
        this.tr = tr;
        this.appendChild(tr.getHTML());
    }

    /**
     * * Returns the THead <tr>.
     * @returns {Tr}
     * @memberof Table
     */
    getTr(){
        return this.trs;
    }

    /**
     * * Returns the <thead>.
     * @returns {HTMLElement}
     * @memberof THead
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates a <thead>.
     * @memberof THead
     */
    createHTML(){
        this.html = document.createElement('thead');
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