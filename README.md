# Storybook

This exercise helps you in understanding how to build testable component libraries with Storybook in Angular. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

Tasks there were run before: 

```
ng new ngTraining-storybook --create-application=false
cd ngTraining-storybook
ng g lib components
ng g m button
ng g c button --module=button
```

## Tasks

1. Check the existing project and add a second component to your component library.

2. Add storybook to your project `npx -p @storybook/cli sb init --type angular`.

3. Check the contents of the newly created `.storybook` folder. 

4. Remove the added `src/stories` folder.

5. Update the path in the `.storybook/config.js` file to point to the component library.

4. Add a npm script command to start storybook: `"storybook": "start-storybook"`.

5. In case of errors you may need to add `"emitDecoratorMetadata": true,` to the `tsconfig.json` `compilerOptions`.

6. Create your first story for the existing button:

```
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonModule } from './button.module';

storiesOf('Button', module)
    .addDecorator(
        moduleMetadata({
            imports: [ButtonModule],
        }),
    )
    .add('default', () => {
        return {
            template: `<lib-button label="Hello World"></lib-button>`,
        };
    })
```

7. Add the knobs addon to your storybook: `npm i --save-dev @storybook/addon-knobs`.

8. Add `addDecorator(withKnobs);` to your `config.js`.

9. Register the plugin in the `addon.js` via `import '@storybook/addon-knobs/register';`.

10. Add knobs to your button-story: 

```
const label = text('label', 'Hello World');

return {
	template: `<lib-button [label]="label"></lib-button>`,
	props: {
    	label
	}
};
```
