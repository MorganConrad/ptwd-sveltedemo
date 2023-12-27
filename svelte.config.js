import { default as adapterAuto } from '@sveltejs/adapter-auto';
// import { default as adapterStatic} from '@sveltejs/adapter-static';
import { default as adapterNetlify } from '@sveltejs/adapter-netlify';


import { mdsvex } from 'mdsvex';

const kitConfigs = {
  development: {
    adapter: adapterAuto,
    base: "",
    settings: {}
  },

   production: {
     adapter: adapterNetlify,
     base: "",
     settings: {}  // TODO
   }
  }

  let kitConfig = kitConfigs[process.env.NODE_ENV];

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
    adapter: kitConfig.adapter(kitConfig.settings),

    paths: {
      base: kitConfig.base || "",
    }

  }
};

export default config;
