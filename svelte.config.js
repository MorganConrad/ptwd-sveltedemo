
/*
  Most scripts I see online import these as "adapter"
  and comment out the other lines.
  This requires less editing and remembering to edit!
*/

import { default as adapterAuto } from '@sveltejs/adapter-auto';
// import { default as adapterStatic} from '@sveltejs/adapter-static';
import { default as adapterNetlify } from '@sveltejs/adapter-netlify';

import { mdsvex } from 'mdsvex';

// these parts of config dont change by deployment type
const config = {

  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx']
    })
  ],

  extensions: ['.svelte', '.md', '.svx']
}


// adjust for deployment type
if (process.env.NODE_ENV === "production") {
  config.kit = {
    adapter: adapterNetlify()
  }
}

else {  // development
  config.kit = {
    adapter: adapterAuto()
  }
}

export default config;
