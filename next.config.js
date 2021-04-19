const withReactSvg = require('next-react-svg');
const path = require('path');

exports.nextConfig = {
  env: {
    backendURL: 'http://localhost:4000',
    frontendURL: 'http://localhost:3000',
  }
};
 
module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/assets/icons'),
  webpack(config, options) {
    return config
  }
});