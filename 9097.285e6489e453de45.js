(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9097],{59097:function(o,p,c){o.exports=function(_){"use strict";var d=function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(_);function n(e){return e%100==2}function m(e){return e%100==3||e%100==4}function u(e,t,l,r){var a=e+" ";switch(l){case"s":return t||r?"nekaj sekund":"nekaj sekundami";case"m":return t?"ena minuta":"eno minuto";case"mm":return n(e)?a+(t||r?"minuti":"minutama"):m(e)?a+(t||r?"minute":"minutami"):a+(t||r?"minut":"minutami");case"h":return t?"ena ura":"eno uro";case"hh":return n(e)?a+(t||r?"uri":"urama"):m(e)?a+(t||r?"ure":"urami"):a+(t||r?"ur":"urami");case"d":return t||r?"en dan":"enim dnem";case"dd":return n(e)?a+(t||r?"dneva":"dnevoma"):a+(t||r?"dni":"dnevi");case"M":return t||r?"en mesec":"enim mesecem";case"MM":return n(e)?a+(t||r?"meseca":"mesecema"):m(e)?a+(t||r?"mesece":"meseci"):a+(t||r?"mesecev":"meseci");case"y":return t||r?"eno leto":"enim letom";case"yy":return n(e)?a+(t||r?"leti":"letoma"):m(e)?a+(t||r?"leta":"leti"):a+(t||r?"let":"leti")}}var s={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._\u010det._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_\u010de_pe_so".split("_"),ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"\u010dez %s",past:"pred %s",s:u,m:u,mm:u,h:u,hh:u,d:u,dd:u,M:u,MM:u,y:u,yy:u}};return d.default.locale(s,null,!0),s}(c(67374))}}]);