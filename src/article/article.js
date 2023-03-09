import { load } from '../utils';
import Article from './Article.svelte';

let app = {};

const runSvelte = (data = []) =>
  new Article({
    target: document.body,
    props: {
      data,
    },
  });

load(runSvelte, false).then((val) => (app = val));

export default app;
