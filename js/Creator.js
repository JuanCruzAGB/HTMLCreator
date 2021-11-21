// ? JuanCruzAGB repository
import Class from "juancruzagb/src/js/Class";

// ? HTMLCreatorJS repository

// ? Boxes
import Aside from "juancruzagb/htmlcreator/js/Boxes/Aside";
import Div from "juancruzagb/htmlcreator/js/Boxes/Div";
import Figure from "juancruzagb/htmlcreator/js/Boxes/Figure";
import Footer from "juancruzagb/htmlcreator/js/Boxes/Footer";
import Form from "juancruzagb/htmlcreator/js/Boxes/Form";
import Header from "juancruzagb/htmlcreator/js/Boxes/Header";
import Item from "juancruzagb/htmlcreator/js/Boxes/Item";
import Label from "juancruzagb/htmlcreator/js/Boxes/Label";
import List from "juancruzagb/htmlcreator/js/Boxes/List";
import Main from "juancruzagb/htmlcreator/js/Boxes/Main";
import Nav from "juancruzagb/htmlcreator/js/Boxes/Nav";
import Option from "juancruzagb/htmlcreator/js/Boxes/Option";
import Section from "juancruzagb/htmlcreator/js/Boxes/Section";

// ? Buttons
import Button from "juancruzagb/htmlcreator/js/Buttons/Button";
import Input from "juancruzagb/htmlcreator/js/Buttons/Input";
import Link from "juancruzagb/htmlcreator/js/Buttons/Link";

// ? Table
import Table from "juancruzagb/htmlcreator/js/Table/Table";
import TPart from "juancruzagb/htmlcreator/js/Table/TPart";
import Row from "juancruzagb/htmlcreator/js/Table/Row";
import Cell from "juancruzagb/htmlcreator/js/Table/Cell";

// ? Texts
import Italic from "juancruzagb/htmlcreator/js/Texts/Italic";
import LineBreak from "juancruzagb/htmlcreator/js/Texts/LineBreak";
import Paragraph from "juancruzagb/htmlcreator/js/Texts/Paragraph";
import Span from "juancruzagb/htmlcreator/js/Texts/Span";
import Title from "juancruzagb/htmlcreator/js/Texts/Title";

// ? Visuals
import Icon from "juancruzagb/htmlcreator/js/Visuals/Icon";
import Image from "juancruzagb/htmlcreator/js/Visuals/Image";
import Line from "juancruzagb/htmlcreator/js/Visuals/Line";

/**
 * * Creator creates multiple HTMLElement.
 * @export
 * @class Creator
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Class
 */
export default class Creator extends Class {
    /**
     * * Creates an instance of Creator.
     * @param {string} [query]
     * @param {object} [data]
     * @memberof Creator
     */
    constructor (query = 'DIV', data = {}) {
        super();
        if (/#/.exec(query) || / /.exec(query)) {
            console.log(this.query(query));
        }
        switch (query.toUpperCase()) {
        // ? Boxes
            case 'ASIDE':
                return new Aside(data);
            case 'DIV':
                return new Div(data);
            case 'FIGURE':
                return new Figure(data);
            case 'FOOTER':
                return new Footer(data);
            case 'FORM':
                return new Form(data);
            case 'HEADER':
                return new Header(data);
            case 'LI':
                return new Item(data);
            case 'LABEL':
                return new Label(data);
            case 'OL':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                    data.props.type = 'ordered';
                }
            case 'UL':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                    data.props.type = 'unordered';
                }
                return new List(data);
            case 'MAIN':
                return new Main(data);
            case 'NAV':
                return new Nav(data);
            case 'OPTION':
                return new Option(data);
            case 'SECTION':
                return new Section(data);
        // ? Buttons
            case 'BUTTON':
                return new Button(data);
            case 'SELECT':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                    data.props.type = 'select';
                }
            case 'TEXTAREA':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                    data.props.type = 'textarea';
                }
            case 'INPUT':
                return new Input(data);
            case 'A':
                return new Link(data);
        // ? Table
            case 'TABLE':
                return new Table(data);
            case 'TBODY':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                    data.props.type = 'body';
                }
            case 'THEAD':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                    data.props.type = 'head';
                }
                return new TPart(data);
            case 'TR':
                return new Row(data);
            case 'TD':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                    data.props.type = 'normal';
                }
            case 'TH':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                    data.props.type = 'header';
                }
                return new Cell(data);
        // ? Texts
            case 'BR':
                return new LineBreak(data);
            case 'I':
                return new Italic(data);
            case 'P':
                return new Paragraph(data);
            case 'SPAN':
                return new Span(data);
            case 'H1':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                    data.props.level = 1;
                }
            case 'H2':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                    data.props.level = 2;
                }
            case 'H3':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                    data.props.level = 3;
                }
            case 'H4':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                    data.props.level = 4;
                }
            case 'H5':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                    data.props.level = 5;
                }
            case 'H6':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                    data.props.level = 6;
                }
                return new Title(data);
        // ? Visuals
            case 'ICON':
                return new Icon(data);
            case 'IMG':
                return new Image(data);
            case 'HR':
                return new Line(data);
        // ? CustomInput
            case 'CUSTOMINPUT':
            case 'GALLERY':
                return this.import(query, data);
            default:
                console.warn(`HTMLCreatorJS does not support ${ query } yet`);
                break;
        }
    }

    /**
     * * Import the Creator extensions.
     * @async
     * @param {string} [query='DIV']
     * @param {object} [data={}]
     * @returns {class}
     * @memberof Creator
     */
    async import (query = 'DIV', data = {}) {
        let file = false;

        switch (query.toUpperCase()) {
        // ? CustomInput
            case 'CUSTOMINPUT':
                file = "juancruzagb/CustomInputJS/js/CustomInput";
                break;
            case 'GALLERY':
                file = "juancruzagb/gallery/js/Gallery";
                break;
            default:
                console.warn(`HTMLCreatorJS extension ${ query } does not exist yet`);
                break;
        }

        if (file) {
            const Module = await import(file);
            
            return new Module.default(data);
        }
    }

    /**
     * * Returns all node element that match selectors.
     * @param {string} [query='DIV']
     * @returns {NodeList}
     * @memberof Creator
     */
    query (query = 'DIV') {
        let nodeList = [];

        for (const nodeElement of document.querySelectorAll(query)) {
            nodeList.push(nodeElement);
        }

        return nodeList;
    }

    /**
     * @static
     * @var {Aside} Aside Aside class child.
     * @memberof Creator
     */
    static Aside = Aside;
    /**
     * @static
     * @var {Div} Div Div class child.
     * @memberof Creator
     */
    static Div = Div;

    /**
     * @static
     * @var {Figure} Figure Figure class child.
     * @memberof Creator
     */
    static Figure = Figure;

    /**
     * @static
     * @var {Footer} Footer Footer class child.
     * @memberof Creator
     */
    static Footer = Footer;

    /**
     * @static
     * @var {Form} Form Form class child.
     * @memberof Creator
     */
    static Form = Form;

    /**
     * @static
     * @var {Header} Header Header class child.
     * @memberof Creator
     */
    static Header = Header;

    /**
     * @static
     * @var {Item} Item Item class child.
     * @memberof Creator
     */
    static Item = Item;

    /**
     * @static
     * @var {Label} Label Label class child.
     * @memberof Creator
     */
    static Label = Label;

    /**
     * @static
     * @var {List} List List class child.
     * @memberof Creator
     */
    static List = List;

    /**
     * @static
     * @var {Main} Main Main class child.
     * @memberof Creator
     */
    static Main = Main;

    /**
     * @static
     * @var {Nav} Nav Nav class child.
     * @memberof Creator
     */
    static Nav = Nav;

    /**
     * @static
     * @var {Section} Section Section class child.
     * @memberof Creator
     */
    static Section = Section;
    
    /**
     * @static
     * @var {Button} Button Button class child.
     * @memberof Creator
     */
    static Button = Button;

    /**
     * @static
     * @var {Input} Input Input class child.
     * @memberof Creator
     */
    static Input = Input;

    /**
     * @static
     * @var {Link} Link Link class child.
     * @memberof Creator
     */
    static Link = Link;
    
    /**
     * @static
     * @var {Table} Table Table class child.
     * @memberof Creator
     */
    static Table = Table;

    /**
     * @static
     * @var {TPart} TPart TPart class child.
     * @memberof Creator
     */
    static TPart = TPart;

    /**
     * @static
     * @var {Row} Row Row class child.
     * @memberof Creator
     */
    static Row = Row;

    /**
     * @static
     * @var {Cell} Cell Cell class child.
     * @memberof Creator
     */
    static Cell = Cell;
    
    /**
     * @static
     * @var {Paragraph} Paragraph Paragraph class child.
     * @memberof Creator
     */
    static Paragraph = Paragraph;

    /**
     * @static
     * @var {Span} Span Span class child.
     * @memberof Creator
     */
    static Span = Span;

    /**
     * @static
     * @var {Title} Title Title class child.
     * @memberof Creator
     */
    static Title = Title;

    /**
     * @static
     * @var {LineBreak} LineBreak LineBreak class child.
     * @memberof Creator
     */
    static LineBreak = LineBreak;
    
    /**
     * @static
     * @var {Icon} Icon Icon class child.
     * @memberof Creator
     */
    static Icon = Icon;

    /**
     * @static
     * @var {Image} Image Image class child.
     * @memberof Creator
     */
    static Image = Image;

    /**
     * @static
     * @var {Line} Line Line class child.
     * @memberof Creator
     */
    static Line = Line;
}