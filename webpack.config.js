const path = require('path');

module.exports = {
  // ...other webpack configuration options
  
  resolve: {
    fallback: {
      "url": require.resolve("url/")
    }
  },
  
  // ...other webpack configuration options
};