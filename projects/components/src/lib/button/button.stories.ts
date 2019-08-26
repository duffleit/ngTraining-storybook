import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonModule } from './button.module';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('Button', module)
    .addDecorator(
        moduleMetadata({
            imports: [ButtonModule],
        }),
    )
    .add('default', () => {
        const label = text('label', 'Hello World');
        const disabled = boolean('disabled', false);

        return {
            template: `<lib-button [label]="label" [disabled]="disabled"></lib-button>`,
            props: {
                label, disabled
            }
        };
    })