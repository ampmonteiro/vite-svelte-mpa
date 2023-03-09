import { load } from '../utils';
import Home from './Home.svelte';

let app = {};

const runSvelte = (data = []) =>
  new Home({
    target: document.body,
    props: {
      data,
    },
  });

load(runSvelte).then((val) => (app = val));

export default app;
