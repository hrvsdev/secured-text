import adapter from "@sveltejs/adapter-auto";
import preprocessor from "svelte-preprocess";
import svg from "@poppanator/sveltekit-svg";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocessor(),
  kit: {
    adapter: adapter(),
  },
  vite: {
    plugins: [svg()],
  },
};

export default config;
