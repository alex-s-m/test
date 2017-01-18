// ==UserScript==
// @name new-team.org
// @description NEW-TEAM.ORG качество, проверенное временем
// @icon data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAADXtTE7un8A98ujAP/NrjXxzKoq8b2SAP/HoxC9////Af///wHNqACds3cA/9WxAO3Wsx3v1LEX78+qAP+9kQDD6NKLQ9SqAP/fwFr/z6YA/8KaAP/Ms2D/zbR1+fTv5Q3x69YJpXAA9c2tSv/XvGL/wpwA/7qUAP/SvH7/xq1p2+rWlEHWrAD1yZQA/6lgAP+PSwD/n3EA/8mzeN/o38EXrokof7OSOf/Jr1z/ikoA/41RAP9+PwD/lmcA/66OJtXp0YhD1aoA8c+gAP+ycQD/k1kA/6iCAP/Ktn/Tj2IAraaDGfnJs33/i1cA/4dRAP+MXAD/hlUA/4ZXAP+FVwDV4sJaRdesAPHRogD/sHAA/5BVAP+uiwD/sJJD/3xLAP/Aqnb/nnkA/3U+AP+IWQD/hVQA/4JTAP98TQD/ekoA1ePFYkPYrwD10aIA/7BwAP+PVAD/qocA/6mKQv+5n2T/tJhX/283AP+EVAD/g1MA/4BSAP9+UAD/fU8A/31PANXq1pE/1qsA9dGgAP+wcAD/jVMA/5x0AP/k3MH/wKt6/3hGAP96SgD/gVEA/31OAP9+UAD/f1AA/4NUAP+EVQDV370+Q9OjAP3PnQD/sXIA/4tRAP+lgQD/4djA/5JrAP9tNwD/gFMA/3dGAP97TAD/g1UA/4FQAP+KXQD/k2gA1d68MkPUpgD/zpsA/7ByAP+RWgD/nncA/5ZxAP9yQAD/gVQA/245AP+WcAD/o4EA/3tJAP+ATQD/mnEA/66MDtfjw1ZD0JwA/8uXAP+ucgD/l2QA/4BPAP93RgD/gVEA/3A5AP+DVAD/7Obb/7ecS/9wNwD/g00A/6mCAP+9nj/l160ASdWoAPnQoAD/rGwA/5BeAP96TQD/gE8A/4VTAP9+SgD/wKpq//Pv5f+hewD/fEMA/4xUAP+zigD/yq1H59atAEPWrAD1z6EA/6JlAP+FVAD/gVEA/49dAP+BSQD/wadU/dG/loG5nmWdt5lC/4tVAP+XXAD/vpQA/9a2SufSsBpH1K0A+8icAP+PVQD/glIA/5hlAP+XXAD/pXQA/+XZuKf///8BybN0acCgOf+XXgD/pmYA/8eaAP/bukXny6k2T8SeA/+negD/azAA/4NLAP+hXwD/pmIA/9zDcPP///8p////AdrFhpfHpSn/l1QA/51TAP+/jQD/2LY55/Ls3hvGr2jDn3sA/4pfAP+pfwD/t4QA/86lAP/37tCX////Af///wHv5MKD2L9v/7mNAP+1hgD/zKkk/8+rBuf///8B8u/lJ+LZxHHl3ceL5tzBlejcuqXo2ax3+PDeCf///wH///8B////E+3lzJfm3L7L6+PPm9rHlKXj0qKDAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==
// @downloadURL https://raw.githubusercontent.com/alex-s-m/test/master/nt.js
// @connect *://new-team.org/*
// @trackerURL http://new-team.org/
// @version 0.0.1
// @require exKit
// ==/UserScript==

var code = {
  "version": 2,
  "type": "kit",
  "title": "new-team.org",
  "icon": "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAADXtTE7un8A98ujAP/NrjXxzKoq8b2SAP/HoxC9////Af///wHNqACds3cA/9WxAO3Wsx3v1LEX78+qAP+9kQDD6NKLQ9SqAP/fwFr/z6YA/8KaAP/Ms2D/zbR1+fTv5Q3x69YJpXAA9c2tSv/XvGL/wpwA/7qUAP/SvH7/xq1p2+rWlEHWrAD1yZQA/6lgAP+PSwD/n3EA/8mzeN/o38EXrokof7OSOf/Jr1z/ikoA/41RAP9+PwD/lmcA/66OJtXp0YhD1aoA8c+gAP+ycQD/k1kA/6iCAP/Ktn/Tj2IAraaDGfnJs33/i1cA/4dRAP+MXAD/hlUA/4ZXAP+FVwDV4sJaRdesAPHRogD/sHAA/5BVAP+uiwD/sJJD/3xLAP/Aqnb/nnkA/3U+AP+IWQD/hVQA/4JTAP98TQD/ekoA1ePFYkPYrwD10aIA/7BwAP+PVAD/qocA/6mKQv+5n2T/tJhX/283AP+EVAD/g1MA/4BSAP9+UAD/fU8A/31PANXq1pE/1qsA9dGgAP+wcAD/jVMA/5x0AP/k3MH/wKt6/3hGAP96SgD/gVEA/31OAP9+UAD/f1AA/4NUAP+EVQDV370+Q9OjAP3PnQD/sXIA/4tRAP+lgQD/4djA/5JrAP9tNwD/gFMA/3dGAP97TAD/g1UA/4FQAP+KXQD/k2gA1d68MkPUpgD/zpsA/7ByAP+RWgD/nncA/5ZxAP9yQAD/gVQA/245AP+WcAD/o4EA/3tJAP+ATQD/mnEA/66MDtfjw1ZD0JwA/8uXAP+ucgD/l2QA/4BPAP93RgD/gVEA/3A5AP+DVAD/7Obb/7ecS/9wNwD/g00A/6mCAP+9nj/l160ASdWoAPnQoAD/rGwA/5BeAP96TQD/gE8A/4VTAP9+SgD/wKpq//Pv5f+hewD/fEMA/4xUAP+zigD/yq1H59atAEPWrAD1z6EA/6JlAP+FVAD/gVEA/49dAP+BSQD/wadU/dG/loG5nmWdt5lC/4tVAP+XXAD/vpQA/9a2SufSsBpH1K0A+8icAP+PVQD/glIA/5hlAP+XXAD/pXQA/+XZuKf///8BybN0acCgOf+XXgD/pmYA/8eaAP/bukXny6k2T8SeA/+negD/azAA/4NLAP+hXwD/pmIA/9zDcPP///8p////AdrFhpfHpSn/l1QA/51TAP+/jQD/2LY55/Ls3hvGr2jDn3sA/4pfAP+pfwD/t4QA/86lAP/37tCX////Af///wHv5MKD2L9v/7mNAP+1hgD/zKkk/8+rBuf///8B8u/lJ+LZxHHl3ceL5tzBlejcuqXo2ax3+PDeCf///wH///8B////E+3lzJfm3L7L6+PPm9rHlKXj0qKDAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==",
  "desc": "NEW-TEAM.ORG качество, проверенное временем",
  "downloadUrl": "https://raw.githubusercontent.com/alex-s-m/test/master/nt.js",
  "tVersion": "0.0.2",
  "search": {
    "loginUrl": "http://new-team.org/",
    "loginFormSelector": "#main-nav>table>tbody>tr:eq(0)>td:eq(1)>form",
    "searchUrl": "http://new-team.org/tracker.php?nm=%search%",
    "nextPageSelector": {
      "selector": "div.pagetitle>h3>p:eq(1)>a:eq(3)",
      "attr": "href"
    },
    "baseUrl": "http://new-team.org/",
    "requestType": "GET",
    "listItemSelector": "#tor-tbl>tbody>tr",
    "torrentSelector": {
      "categoryTitle": "td.row1:eq(2)",
      "categoryUrl": {
        "selector": "td.row1:eq(2)>a",
        "attr": "href"
      },
      "title": "td.row4.med.tLeft>div>a",
      "url": {
        "selector": "td.row4.med.tLeft>div>a",
        "attr": "href"
      },
      "size": "td:eq(5)>u",
      "downloadUrl": {
        "selector": "td:eq(5)>a",
        "attr": "href"
      },
      "seed": "td.row1.seedmed",
      "peer": "td.row1.leechmed",
      "date": "td:eq(9)>u"
    },
    "onGetValue": {
      "date": [
        "replaceMonth"
      ]
    }
  },
  "uid": 1885093915
};

API_exKit(code);
