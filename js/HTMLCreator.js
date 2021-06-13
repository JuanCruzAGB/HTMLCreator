// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

// ? HTMLCreatorJS repository
// ? Boxes
import Div from "./Boxes/Div.js";
import Figure from "./Boxes/Figure.js";
import Footer from "./Boxes/Footer.js";
import Form from "./Boxes/Form.js";
import Header from "./Boxes/Header.js";
import Item from "./Boxes/Item.js";
import Label from "./Boxes/Label.js";
import List from "./Boxes/List.js";
import Main from "./Boxes/Main.js";
import Section from "./Boxes/Section.js";
// ? Buttons
import Button from "./Buttons/Button.js";
import Input from "./Buttons/Input.js";
import Link from "./Buttons/Link.js";
// ? Table
import Table from "./Table/Table.js";
import TPart from "./Table/TPart.js";
import Row from "./Table/Row.js";
import Cell from "./Table/Cell.js";
// ? Texts
import Paragraph from "./Texts/Paragraph.js";
import Span from "./Texts/Span.js";
import Title from "./Texts/Title.js";
// ? Visuals
import Icon from "./Visuals/Icon.js";
import Image from "./Visuals/Image.js";

/**
 * * HTMLCreator creates multiple HTMLElement.
 * @export
 * @class HTMLCreator
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Class
 */
export class HTMLCreator extends Class {
    /**
     * * Creates an instance of HTMLCreator.
     * @param {otring} [tag] HTML Element node name.
     * @param {sbject} [data] HTML Elemenet data.
     * @memberof HTMLCreator
     */
    constructor (tag = 'DIV', data = {}) {
        super();
        switch (tag.toUpperCase()) {
        // ? Boxes
            case 'DIV':
                return new Div((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'FIGURE':
                return new Figure((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('image') ? data.image : {}));
            case 'FOOTER':
                return new Footer((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'FORM':
                return new Form((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('state') ? data.state : {}), (data.hasOwnProperty('callback') ? data.callback : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : []));
            case 'HEADER':
                return new Header((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('title') ? data.title : {}));
            case 'LI':
                return new Item((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'LABEL':
                return new Label((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'OL':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'ordered';
                }
                return new List((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('items') ? data.items : []));
            case 'UL':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'unordered';
                }
                return new List((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('items') ? data.items : []));
            case 'MAIN':
                return new Main((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'SECTION':
                return new Section((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
        // ? Buttons
            case 'BUTTON':
                return new Button((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('state') ? data.state : {}), (data.hasOwnProperty('callback') ? data.callback : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'INPUT':
                return new Input((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('state') ? data.state : {}), (data.hasOwnProperty('callbacks') ? data.callbacks : {}));
            case 'SELECT':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'select';
                }
                return new Input((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('state') ? data.state : {}), (data.hasOwnProperty('callbacks') ? data.callbacks : {}));
            case 'TEXTAREA':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'textarea';
                }
                return new Input((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('state') ? data.state : {}), (data.hasOwnProperty('callbacks') ? data.callbacks : {}));
            case 'A':
                return new Link((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('state') ? data.state : {}), (data.hasOwnProperty('callback') ? data.callback : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
        // ? Table
            case 'TABLE':
                return new Table((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('structure') ? data.structure : []));
            case 'TBODY':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'body';
                }
                return new TPart((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('rows') ? data.rows : []));
            case 'THEAD':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'head';
                }
                return new TPart((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('rows') ? data.rows : []));
            case 'TR':
                return new Row((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('cells') ? data.cells : []));
            case 'TD':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'normal';
                }
                return new Cell((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'TH':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'header';
                }
                return new Cell((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
        // ? Texts
            case 'P':
                return new Span((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'SPAN':
                return new Span((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H1':
            case 'H2':
            case 'H3':
            case 'H4':
            case 'H5':
            case 'H6':
                return new Title((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
        // ? Visuals
            case 'ICON':
                return new Icon((data.hasOwnProperty('props') ? data.props : {}));
            case 'IMG':
                return new Image((data.hasOwnProperty('props') ? data.props : {}));
            default:
                console.warn(`HTMLCreatorJS does not support ${ tag } yet`);
                break;
        }
    }

    /**
     * * Set the inner HTML Element
     * @param {object} HTML HTML Element created with HTMLCreatorJS.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof HTMLCreator
     */
    setInnerHTML (HTML = false, innerHTML = false) {
        if (typeof innerHTML === 'string') {
            HTML.appendChild(innerHTML);
        }
        if (typeof innerHTML !== 'string') {
            if (innerHTML.nodeName) {
                HTML.appendChild(innerHTML);
            }
            if (!innerHTML.nodeName) {
                for (let child of innerHTML) {
                    if (!HTML.children) {
                        HTML.children = [];
                    }
                    child = new this((child.length ? child[0] : 'DIV'), ((child.length > 1) ? child[1] : {}));
                    HTML.children.push(child);
                    HTML.appendChild(child.html);
                }
            }
        }
    }
}

// ? HTMLCreator childs
HTMLCreator.Div = Div;
// ? Boxes
HTMLCreator.Div = Div;
HTMLCreator.Figure = Figure;
HTMLCreator.Footer = Footer;
HTMLCreator.Form = Form;
HTMLCreator.Header = Header;
HTMLCreator.Item = Item;
HTMLCreator.Label = Label;
HTMLCreator.List = List;
HTMLCreator.Main = Main;
HTMLCreator.Section = Section;
// ? Buttons
HTMLCreator.Button = Button;
HTMLCreator.Input = Input;
HTMLCreator.Link = Link;
// ? Table
HTMLCreator.Table = Table;
HTMLCreator.TPart = TPart;
HTMLCreator.Row = Row;
HTMLCreator.Cell = Cell;
// ? Texts
HTMLCreator.Span = Span;
HTMLCreator.Title = Title;
// ? Visuals
HTMLCreator.Icon = Icon;
HTMLCreator.Image = Image;

// ? Default export
export default HTMLCreator;