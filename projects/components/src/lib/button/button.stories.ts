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