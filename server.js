const express = require('express');
const { matchesUA } = require('browserslist-useragent');
const useragent = require('express-useragent');
const path = require('path');
 
const app = express();
app.use(useragent.express());

function browserHasWebpSupport(userAgentSource) {
  return matchesUA(userAgentSource, {
    allowHigherVersions: true
  });
}

app.get('/images/:file', (request,response) => {
  let file;
  if (browserHasWebpSupport(request.useragent.source)) {
    file = `${request.params.file.replace(/.jpg|.png/, '.webp')}`;
  } else {
    file = request.params.file;
  }

  response.sendFile(file, {
    root: path.join(__dirname, 'images')
  });
});

app.listen(process.env.PORT || 3000);
