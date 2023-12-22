import adapter from '@sveltejs/adapter-auto';

import { mdsvex } from 'mdsvex';

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
		adapter: adapter()
	}
};

export default config;