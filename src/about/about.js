import { load } from '../utils';

import About from './About.svelte';

let app = {};

const runSvelte = () =>
  new About({
    target: document.body,
  });

load(runSvelte).then((val) => (app = val));

export default app;
