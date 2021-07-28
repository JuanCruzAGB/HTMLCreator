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
import LineBreak from "./Texts/LineBreak.js";
import Paragraph from "./Texts/Paragraph.js";
import Span from "./Texts/Span.js";
import Title from "./Texts/Title.js";
// ? Visuals
import Icon from "./Visuals/Icon.js";
import Image from "./Visuals/Image.js";
import Line from "./Visuals/Line.js";

/**
 * * HTMLCreator creates multiple HTMLElement.
 * @export
 * @class HTMLCreator
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Class
 */
export default class HTMLCreator extends Class {
    /**
     * * Creates an instance of HTMLCreator.
     * @param {otring} [tag] HTML Element node name.
     * @param {sbject} [data] HTML Elemenet data.
     * @memberof HTMLCreator
     */
    constructor (tag = "DIV", data = {}) {
        super();
        switch (tag.toUpperCase()) {
        // ? Boxes
            case "DIV":
                return new Div((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
            case "FIGURE":
                return new Figure((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : {}));
            case "FOOTER":
                return new Footer((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
            case "FORM":
                return new Form((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("callback") ? data.callback : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : []));
            case "HEADER":
                return new Header((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : {}));
            case "LI":
                return new Item((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
            case "LABEL":
                return new Label((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
            case "OL":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("type")) {
                    data.props.type = "ordered";
                }
            case "UL":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("type")) {
                    data.props.type = "unordered";
                }
                return new List((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("items") ? data.items : []));
            case "MAIN":
                return new Main((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
            case "SECTION":
                return new Section((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
        // ? Buttons
            case "BUTTON":
                return new Button((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("callback") ? data.callback : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
            case "INPUT":
                return new Input((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("callbacks") ? data.callbacks : {}));
            case "SELECT":
                if (data.hasOwnProperty("props")) {
                    data.props.type = "select";
                }
                return new Input((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("callbacks") ? data.callbacks : {}));
            case "TEXTAREA":
                if (data.hasOwnProperty("props")) {
                    data.props.type = "textarea";
                }
                return new Input((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("callbacks") ? data.callbacks : {}));
            case "A":
                return new Link((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("callback") ? data.callback : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
        // ? Table
            case "TABLE":
                return new Table((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("structure") ? data.structure : []));
            case "TBODY":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("type")) {
                    data.props.type = "body";
                }
            case "THEAD":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("type")) {
                    data.props.type = "head";
                }
                return new TPart((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("rows") ? data.rows : []));
            case "TR":
                return new Row((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("cells") ? data.cells : []));
            case "TD":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("type")) {
                    data.props.type = "normal";
                }
            case "TH":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("type")) {
                    data.props.type = "header";
                }
                return new Cell((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
        // ? Texts
            case "BR":
                return new LineBreak((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}));
            case "P":
                return new Paragraph((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
            case "SPAN":
                return new Span((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
            case "H1":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("level")) {
                    data.props.level = 1;
                }
            case "H2":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("level")) {
                    data.props.level = 2;
                }
            case "H3":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("level")) {
                    data.props.level = 3;
                }
            case "H4":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("level")) {
                    data.props.level = 4;
                }
            case "H5":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("level")) {
                    data.props.level = 5;
                }
            case "H6":
                if (data.hasOwnProperty("props") && !data.props.hasOwnProperty("level")) {
                    data.props.level = 6;
                }
                return new Title((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}), (data.hasOwnProperty("innerHTML") ? data.innerHTML : false));
        // ? Visuals
            case "ICON":
                return new Icon((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}));
            case "IMG":
                return new Image((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}));
            case "HR":
                return new Line((data.hasOwnProperty("props") ? data.props : {}), (data.hasOwnProperty("state") ? data.state : {}));
        // ? Menus
            case "NAVMENU":
                this.import(tag, data);
                break;
            default:
                console.warn(`HTMLCreatorJS does not support ${ tag } yet`);
                break;
        }
    }

    async import (tag = "DIV", data = {}) {
        switch (tag.toUpperCase()) {
        // ? Menus
            case "NAVMENU":
                try {
                    const { Nav } = await import("./Menu/Nav/Nav.js");
                    console.log(new Nav());
                } catch (error) {
                    console.error(error);
                    // console.error("Nav module does not found");
                }
                break;
        }
    }

    /**
     * * Set the inner HTML Element
     * @static
     * @param {object} HTML HTML Element created with HTMLCreatorJS.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof HTMLCreator
     */
    static setInnerHTML (HTML = false, innerHTML = false) {
        if (innerHTML !== false && innerHTML !== null) {
            if (typeof innerHTML === "string" || typeof innerHTML === "number") {
                HTML.appendChild(`${ innerHTML }`);
            }
            if (typeof innerHTML !== "string" && typeof innerHTML !== "number" && typeof innerHTML !== "boolean") {
                if (innerHTML.nodeName) {
                    HTML.appendChild(innerHTML);
                }
                if (!innerHTML.nodeName) {
                    for (let child of innerHTML) {
                        if (!HTML.children) {
                            HTML.children = [];
                        }
                        if (child.nodeName) {
                            HTML.appendChild(child);
                        }
                        if (!child.nodeName) {
                            child = new this((child.length ? child[0] : "DIV"), ((child.length > 1) ? child[1] : {}));
                            HTML.appendChild(child.html);
                        }
                        HTML.children.push(child);
                    }
                }
            }
        }
    }

    // * HTMLCreator childs:
    //  ? Boxes
    static Div = Div;
    static Figure = Figure;
    static Footer = Footer;
    static Form = Form;
    static Header = Header;
    static Item = Item;
    static Label = Label;
    static List = List;
    static Main = Main;
    static Section = Section;
    //  ? Buttons
    static Button = Button;
    static Input = Input;
    static Link = Link;
    //  ? Table
    static Table = Table;
    static TPart = TPart;
    static Row = Row;
    static Cell = Cell;
    //  ? Texts
    static Paragraph = Paragraph;
    static Span = Span;
    static Title = Title;
    static LineBreak = LineBreak;
    //  ? Visuals
    static Icon = Icon;
    static Image = Image;
    static Line = Line;
}

// ? Default export
export { HTMLCreator as Html };