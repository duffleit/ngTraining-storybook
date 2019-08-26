import { configure, addDecorator } from '@storybook/angular';
import { withKnobs} from "@storybook/addon-knobs";
// automatically import all files ending in *.stories.ts
const req = require.context('../projects/components/src', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);

configure(loadStories, module);
