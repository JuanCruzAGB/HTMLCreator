
# JuanCruzAGB repository
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

HTMLCreator puede crea un excelente `<footer>`.

## Configuración
Importe **HTMLCreator** en tu javascript para generar la lógica.
```
Import { HTMLCreator as HTMLCreator } from 'submodules/HTMLCreator/js/HTMLCreator.js';
```
Y cree el `<footer>`.
```
let footer = new HTMLCreator({props}, {innerHTML});
```
Las **propiedades** existentes son:
- {string} **id:** Id de la etiqueta HTML. Por defecto viene en `footer-1`
- {string[]} **classes:** Las clases de la etiqueta HTML. Por defecto viene un array vacío.

El **contenido** de la etiqueta puede ser tanto un `string` como un elemento HTML, pero también se puede pasar un array para insertar múltiples elementos creados con **HTMLCreator**. Por ejemplo:
```
let footer = new HTMLCreator({
	id: 'footer-perfecto',
	classes: ['container', 'text-center'],
}, [
	['h1', {
		props: {
			id: 'footer-title',
			classes: ``,
		}, innerHTML: 'Hola mundo!',
	}],
	['p', {
		props: {
			id: 'footer-paragraph',
			classes: ``,
		}, innerHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eveniet eligendi impedit, dolorum culpa atque maiores hic doloribus labore aperiam nesciunt provident dolore officiis alias, quaerat nostrum beatae quibusdam maxime!',
	}],
]);
```