
# JuanCruzAGB repository
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

HTMLCreatorJS puede crea un excelente `<section>`.

## Configuración
Importe **HTMLCreator** en tu javascript para generar la lógica.
```
Import { HTMLCreator as HTMLCreatorJS } from 'submodules/HTMLCreatorJS/js/HTMLCreator.js';
```
Y cree el `<section>`.
```
let section = new HTMLCreatorJS({props}, {innerHTML});
```
Las **propiedades** existentes son:
- {string} **id:** Id de la etiqueta HTML. Por defecto viene en `section-1`
- {string[]} **classes:** Las clases de la etiqueta HTML. Por defecto viene un array vacío.

El **contenido** de la etiqueta puede ser tanto un `string` como un elemento HTML, pero también se puede pasar un array para insertar múltiples elementos creados con **HTMLCreatorJS**. Por ejemplo:
```
let section = new HTMLCreatorJS({
	id: 'section-perfecto',
	classes: ['container', 'text-center'],
}, [
	['h1', {
		props: {
			id: 'section-title',
			classes: ``,
		}, innerHTML: 'Hola mundo!',
	}],
	['p', {
		props: {
			id: 'section-paragraph',
			classes: ``,
		}, innerHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eveniet eligendi impedit, dolorum culpa atque maiores hic doloribus labore aperiam nesciunt provident dolore officiis alias, quaerat nostrum beatae quibusdam maxime!',
	}],
]);
```