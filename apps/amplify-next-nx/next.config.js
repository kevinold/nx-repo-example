//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
//const path = require('path')

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // https://github.com/nrwl/nx/issues/9017#issuecomment-1197118775
  // output: 'standalone',
  // experimental: {
  // 	outputFileTracingRoot: path.join(__dirname, "../../"),
  // },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
