
const lowercase  = require('./lowercase');
const capital    = require('./capital');
const other      = require('./other');
const diacritics = require('./diacritics');

const _table = [
  ...lowercase,
  ...capital,
  ...other,
  ...diacritics
];

const _xsampa = {};
const _ipa    = {};

for(const [i, e] of _table.entries()){
  _xsampa[e['X-SAMPA']] = i;
}
for(const [i, e] of _table.entries()){
  _ipa[e['IPA']] = i;
}

_escape= function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

let xsRE  = new RegExp('('+Object.keys(_xsampa).filter(x => !!x).map(_escape).join('|')+')', 'g');
let ipaRE = new RegExp('('+Object.keys(_ipa).filter(x => !!x).map(_escape).join('|')+')', 'g');



function xsampa2ipa(text){
  return text.replace(xsRE, xs => {
    const i = _xsampa[xs];
    const x = _table[i]['IPA'];
    if(!xs){ return ''; }
    return x;
  });
}

function ipa2xsampa(text){
  return text.replace(ipaRE, ipa => {
    const i = _ipa[ipa];
    const x = _table[i]['X-SAMPA'];
    if(!ipa){ return ''; }
    return x;
  });
}

module.exports = {
  xsampa2ipa,
  ipa2xsampa
};
