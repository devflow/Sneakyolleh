// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Simple extension to replace lolcat images from
// http://icanhascheezburger.com/ with loldog images instead.

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

        console.log("applied!");

        ret.requestHeaders = headers;
      }


    }

    return ret;
  },
  {
    urls: [
      "http://*/"
    ]
  },
  ['requestHeaders', 'blocking']
);
