
# JuanCruzAGB repository
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

HTMLCreator can create an excelent `<footer>`.

## Configuración
Import **HTMLCreator** into your script to generate the logic.
```
Import { HTMLCreator as HTMLCreator } from 'submodules/HTMLCreator/js/HTMLCreator.js';
```
And create the `<footer>`.
```
let footer = new HTMLCreator({props}, {innerHTML});
```
The **properties** are:
- {string} **id:** Footer HTMLElement Id. Default = `footer-1`
- {string[]} **classes:** Footer HTMLElement classList. Default = empty array.

The **innerHTML** can be a `string` or another HTMLElement, but you could send an array to generate new HTMLElements with **HTMLCreator**. For example:
```
let footer = new HTMLCreator({
	id: 'footer-perfect',
	classes: ['container', 'text-center'],
}, [
	['h1', {
		props: {
			id: 'footer-title',
			classes: ``,
		}, innerHTML: 'Hello world!',
	}],
	['p', {
		props: {
			id: 'footer-paragraph',
			classes: ``,
		}, innerHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eveniet eligendi impedit, dolorum culpa atque maiores hic doloribus labore aperiam nesciunt provident dolore officiis alias, quaerat nostrum beatae quibusdam maxime!',
	}],
]);
```