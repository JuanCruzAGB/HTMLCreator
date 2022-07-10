// ? JuanCruzAGB repository
import Class from "@juancruzagb/src";

// ? HTMLCreator repository

// ? Boxes
import { Aside, Div, Figure, Footer, Form, Header, Item, Label, List, Main, Nav, Option, Section, } from "@juancruzagb/htmlcreator";

// ? Buttons
import { Button, Input, Link, } from "@juancruzagb/htmlcreator";

// ? Table
import { Table, TPart, Row, Cell, } from "@juancruzagb/htmlcreator";

// ? Texts
import { Italic, LineBreak, Paragraph, Span, Title, } from "@juancruzagb/htmlcreator";

// ? Visuals
import { Icon, Image, Line, } from "@juancruzagb/htmlcreator";

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
            throw new Error('Query type is supported yet');
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
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) data.props.type = 'ordered';
            case 'UL':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) data.props.type = 'unordered';

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
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) data.props.type = 'select';
            case 'TEXTAREA':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) data.props.type = 'textarea';
            case 'INPUT':
                return new Input(data);
            case 'A':
                return new Link(data);

        // ? Table
            case 'TABLE':
                return new Table(data);
            case 'TBODY':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) data.props.type = 'body';
            case 'THEAD':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) data.props.type = 'head';

                return new TPart(data);
            case 'TR':
                return new Row(data);
            case 'TD':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) data.props.type = 'normal';
            case 'TH':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) data.props.type = 'header';

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
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) data.props.level = 1;
            case 'H2':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) data.props.level = 2;
            case 'H3':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) data.props.level = 3;
            case 'H4':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) data.props.level = 4;
            case 'H5':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) data.props.level = 5;
            case 'H6':
                if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) data.props.level = 6;

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
            case 'MENU':
                return this.import(query, data);
            default:
                console.warn(`HTMLCreator does not support ${ query } yet`);
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
                file = "@juancruzagb/custominput/js/CustomInput.js";
                break;
            case 'GALLERY':
                file = "@juancruzagb/gallery/js/Gallery.js";
                break;
            case 'MENU':
                file = "@juancruzagb/menu/js/Menu.js";
                break;
            default:
                console.warn(`HTMLCreator extension ${ query } does not exist yet`);
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
     * @var {Aside} Aside
     * @memberof Creator
     */
    static Aside = Aside;

    /**
     * @static
     * @var {Div} Div
     * @memberof Creator
     */
    static Div = Div;

    /**
     * @static
     * @var {Figure} Figure
     * @memberof Creator
     */
    static Figure = Figure;

    /**
     * @static
     * @var {Footer} Footer
     * @memberof Creator
     */
    static Footer = Footer;

    /**
     * @static
     * @var {Form} Form
     * @memberof Creator
     */
    static Form = Form;

    /**
     * @static
     * @var {Header} Header
     * @memberof Creator
     */
    static Header = Header;

    /**
     * @static
     * @var {Item} Item
     * @memberof Creator
     */
    static Item = Item;

    /**
     * @static
     * @var {Label} Label
     * @memberof Creator
     */
    static Label = Label;

    /**
     * @static
     * @var {List} List
     * @memberof Creator
     */
    static List = List;

    /**
     * @static
     * @var {Main} Main
     * @memberof Creator
     */
    static Main = Main;

    /**
     * @static
     * @var {Nav} Nav
     * @memberof Creator
     */
    static Nav = Nav;

    /**
     * @static
     * @var {Section} Section
     * @memberof Creator
     */
    static Section = Section;
    
    /**
     * @static
     * @var {Button} Button
     * @memberof Creator
     */
    static Button = Button;

    /**
     * @static
     * @var {Input} Input
     * @memberof Creator
     */
    static Input = Input;

    /**
     * @static
     * @var {Link} Link
     * @memberof Creator
     */
    static Link = Link;
    
    /**
     * @static
     * @var {Table} Table
     * @memberof Creator
     */
    static Table = Table;

    /**
     * @static
     * @var {TPart} TPart
     * @memberof Creator
     */
    static TPart = TPart;

    /**
     * @static
     * @var {Row} Row
     * @memberof Creator
     */
    static Row = Row;

    /**
     * @static
     * @var {Cell} Cell
     * @memberof Creator
     */
    static Cell = Cell;
    
    /**
     * @static
     * @var {Paragraph} Paragraph
     * @memberof Creator
     */
    static Paragraph = Paragraph;

    /**
     * @static
     * @var {Span} Span
     * @memberof Creator
     */
    static Span = Span;

    /**
     * @static
     * @var {Title} Title
     * @memberof Creator
     */
    static Title = Title;

    /**
     * @static
     * @var {LineBreak} LineBreak
     * @memberof Creator
     */
    static LineBreak = LineBreak;
    
    /**
     * @static
     * @var {Icon} Icon
     * @memberof Creator
     */
    static Icon = Icon;

    /**
     * @static
     * @var {Image} Image
     * @memberof Creator
     */
    static Image = Image;

    /**
     * @static
     * @var {Line} Line
     * @memberof Creator
     */
    static Line = Line;
}