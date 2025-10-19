import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

/** @description 是否不压缩代码 */
const isNoMinify = process.env.IS_NO_MINIFY === 'true';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    distPath: {
      root: isNoMinify ? 'dist-no-minify' : 'dist-minify',
    },
    minify: !isNoMinify,
    cleanDistPath: true,
  },
});
