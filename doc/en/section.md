
# JuanCruzAGB repository
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

HTMLCreatorJS can create an excelent `<section>`.

## Configuración
Import **HTMLCreator** into your script to generate the logic.
```
Import { HTMLCreator as HTMLCreatorJS } from 'submodules/HTMLCreatorJS/js/HTMLCreator.js';
```
And create the `<section>`.
```
let section = new HTMLCreatorJS({props}, {innerHTML});
```
The **properties** are:
- {string} **id:** Section HTMLElement Id. Default = `section-1`
- {string[]} **classes:** Section HTMLElement classList. Default = empty array.

The **innerHTML** can be a `string` or another HTMLElement, but you could send an array to generate new HTMLElements with **HTMLCreatorJS**. For example:
```
let section = new HTMLCreatorJS({
	id: 'section-perfect',
	classes: ['container', 'text-center'],
}, [
	['h1', {
		props: {
			id: 'section-title',
			classes: ``,
		}, innerHTML: 'Hello world!',
	}],
	['p', {
		props: {
			id: 'section-paragraph',
			classes: ``,
		}, innerHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eveniet eligendi impedit, dolorum culpa atque maiores hic doloribus labore aperiam nesciunt provident dolore officiis alias, quaerat nostrum beatae quibusdam maxime!',
	}],
]);
```