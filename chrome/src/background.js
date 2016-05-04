chrome.webRequest.onBeforeSendHeaders.addListener(
  function(info) {
    var ret = {};

    if(info.method.toLowerCase() === 'get'){
      var url = info.url;
      var headers = info.requestHeaders;

      var foundReferer = false;

      for( var i = 0, l = headers.length; i < l; ++i ) {
        if( headers[i].name.toLowerCase() == 'referer' ) {
          foundReferer = true;
          break;
        }
      }

      if(foundReferer === false) {
        headers.push({
          name: "Referer",
          value: url
        });

        ret.requestHeaders = headers;
      }
    }

    return ret;
  },
  {
    urls: [
      "http://*/*"
    ]
  },
  ['requestHeaders', 'blocking']
);
