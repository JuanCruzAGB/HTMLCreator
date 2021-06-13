
# JuanCruzAGB repository
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

HTMLCreatorJS can create an excelent `<main>`.

## Configuración
Import **HTMLCreator** into your script to generate the logic.
```
Import { HTMLCreator as HTMLCreatorJS } from 'submodules/HTMLCreatorJS/js/HTMLCreator.js';
```
And create the `<main>`.
```
let main = new HTMLCreatorJS({props}, {innerHTML});
```
The **properties** are:
- {string} **id:** Main HTMLElement Id. Default = `main-1`
- {string[]} **classes:** Main HTMLElement classList. Default = empty array.

The **innerHTML** can be a `string` or another HTMLElement, but you could send an array to generate new HTMLElements with **HTMLCreatorJS**. For example:
```
let main = new HTMLCreatorJS({
	id: 'main-perfect',
	classes: ['container', 'text-center'],
}, [
	['h1', {
		props: {
			id: 'main-title',
			classes: ``,
		}, innerHTML: 'Hello world!',
	}],
	['p', {
		props: {
			id: 'main-paragraph',
			classes: ``,
		}, innerHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eveniet eligendi impedit, dolorum culpa atque maiores hic doloribus labore aperiam nesciunt provident dolore officiis alias, quaerat nostrum beatae quibusdam maxime!',
	}],
]);
```