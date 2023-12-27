import adapter from '@sveltejs/adapter-auto';
import { default as adapterStatic} from '@sveltejs/adapter-static';

import { mdsvex } from 'mdsvex';

const kitConfigs = {
  dev: {
    adapter,
    base: ''
  },
  "static": {
    adapter: adapterStatic,
    base: '/ptwd-sveltedemo'
  }
};

const kitConfig = (process.env.NODE_ENV === 'production') ?
  kitConfigs.static : kitConfigs.dev;


const config = {

  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx']
    })
  ],

  extensions: ['.svelte', '.md', '.svx'],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: kitConfig.adapter(),

    paths: {
      base: kitConfig.base,
    }

  }
};

export default config;
