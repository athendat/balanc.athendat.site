(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2421],{68824:(M,_,o)=>{"use strict";o.d(_,{f:()=>a});var v=o(2578),l=o(62288),s=o(54438);const E="application/vnd.openxmlformats-officedocument.spreadsheet.sheet;charset=UTF-8",i="text/plain;charset=utf-8";let a=(()=>{class c{constructor(){}exportAsExcelFile(t,d,f=[[]],I=[]){const y=l.Wp.json_to_sheet(t);let C={fill:{fgColor:{rgb:"27086f"}},font:{color:{rgb:"FFFFFF"}}};f[0].length>0&&(l.Wp.sheet_add_aoa(y,f),f[0].forEach((u,r)=>{let R=l.Wp.encode_cell({c:r,r:0});y[R].s=C})),I.length>0&&(y["!cols"]=I);const F=l.M9({Sheets:{data:y},SheetNames:["data"]},{bookType:"xlsx",type:"array"});this._saveAsFile(F,d,".xlsx",E)}exportAsCsvFile(t,d){const I={Sheets:{data:l.Wp.json_to_sheet(t)},SheetNames:["data"]},y=l.M9(I,{bookType:"csv",type:"array"});this._saveAsFile(y,d,".csv",E)}exportAsFacFile(t,d,f,I){const y="Factura_"+t.no,C=`Numero=${t.no}\nMC=CUBAN PESO\nOM=${t.currency.namev}\nFecha=${Number(t.billDate)}\nEntidad=${t.customer.code}\nConcepto=${t.concept}\nComercial=${t.commercial.name} ${t.commercial.lastname1} ${t.commercial.lastname2}\nCtaBancoMC=${f}\nCtaBancoOM=${I}\nForma=${t.paymentMethod.name}\nOperacion=${t.operationType.name}\nObservacion=${t.obs}\nMA=\nCtoArancel=\nPorcientoAra=0\nTalon=001\nContrato=\nVtaCadena=0\nNomHecho=${d.fullname}\nCargoHecho=${d.title}\nCIHecho=\nNomJA=\nCIJA=\nNomTra=\nChapa=\nLicTra=\nCITra=\nNomCliente=${t.customer.name}\nCargoCliente=\nCICliente=${t.customer.nit}\n[Propiedades]\n\n[Detalle]\n${this._versatInvoiceGenerator(t.productsInBill)}\n\n[PieFirma]\n        `;this._saveAsFile(C,y,".fac",i)}exportAsJsonFile(t){encodeURIComponent(t),this._saveAsFile(t,"data.json",".json",i)}_saveAsFile(t,d,f,I){const y=new Blob([t],{type:I});v.saveAs(y,d+"_export_"+(new Date).getTime()+f)}_versatInvoiceGenerator(t){let d="";return t.forEach(f=>{d+=`0002|002|993449|${f.uom}|1111111|0|0|0|0|0|${f.price}||0|0\n`}),d}static#e=this.\u0275fac=function(d){return new(d||c)};static#t=this.\u0275prov=s.jDH({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},24121:(M,_,o)=>{"use strict";o.d(_,{$f:()=>s,FH:()=>E,y6:()=>l});var v=o(54438),m=o(49098);const l=(i,p)=>{const B=i.params.locationId;return B&&"new"!==B?(0,v.WQX)(m.O).getLocationById(B):{}},s=(i,p)=>(0,v.WQX)(m.O).getLocations(),E=(i,p)=>(0,v.WQX)(m.O).findActiveLocations()},21607:(M,_,o)=>{"use strict";o.d(_,{At:()=>s,G0:()=>i,ih:()=>E,tz:()=>l});class l{constructor(a,c,n,t,d,f){this.productId=a,this.name=c,this.uom=n,this.price=t,this.quantity=d,this.depotId=f}}class s{constructor(a,c,n){this.assistanceId=a,this.price=c,this.quantity=n}}var E=function(e){return e.nueva="nueva",e.recibida="recibida",e.cobrada="cobrada",e.rechazada="rechazada",e.cancelada="cancelada",e.facturada="facturada",e.entregada="entregada",e}(E||{});class i{constructor(a,c,n,t){this.nueva=a,this.recibida=c,this.rechazada=n,this.cancelada=t}}},3899:(M,_,o)=>{"use strict";o.d(_,{o:()=>l});const l=(0,o(59640).Mz)(s=>s.rates,s=>s.rates)},25910:(M,_,o)=>{"use strict";o.d(_,{f:()=>C});var v=o(54438),m=o(96697),l=o(25558),s=o(88141),E=o(96354),i=o(53473),p=o(59640),B=o(98216),h=o(28610),e=o(3899);const a=i.J1`
    mutation CreateRate($createRateInput: CreateRateInput!) {
        createRate(createRateInput: $createRateInput) {

            ok
            message

            rate {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }

        }
    }
`,c=i.J1`
    mutation UpdateRate($updateRateInput: UpdateRateInput!) {
        updateRate(updateRateInput: $updateRateInput) {
            ok
            message

            rate {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }
        }
    }
`,n=i.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRateStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,t=i.J1`
    mutation RemoveRate($removeRateId: String!) {
        removeRate(id: $removeRateId) {
            ok
            message
        }
    }
`,d=i.J1`
    query FindAllRates($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllRates(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length,
                size,
                page,
                lastPage,
                startIndex,
                endIndex
            }

            rates {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }
        }
    }
`,f=i.J1`
    query FindActiveByBaseId($currencyBaseId: String!) {
        findActiveByBaseId(currencyBaseId: $currencyBaseId) {
            id
            active
            date
            name
            value
            currencyRefId

            currencyRef {
                id
                iso
            }

            currencyBaseId

            currencyBase {
                id
                iso
            }
        }
    }
`,I=i.J1`
    query FindActiveRateByBaseIdForAthendatPlatform($currencyBaseId: String!) {
        getActiveRateByBaseIdForAthendatPlatform(currencyBaseId: $currencyBaseId) {
            id
            active
            date
            name
            value
            currencyRefId

            currencyRef {
                id
                iso
            }

            currencyBaseId

            currencyBase {
                id
                iso
            }
        }
    }
`,y=i.J1`
    query FindRateById($findRateByIdId: String!) {
        findRateById(id: $findRateByIdId) {
            ok
            message

            rate {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }
        }
    }
`;let C=(()=>{class A{constructor(){this.apolloProvider=(0,v.WQX)(i.Ic),this.store=(0,v.WQX)(p.il),this._apollo=this.apolloProvider.use("BALANC")}createRate(u){return this.store.select(e.o).pipe((0,m.s)(1),(0,l.n)(r=>this._apollo.mutate({mutation:a,variables:{createRateInput:u},errorPolicy:"all"}).pipe((0,s.M)(({data:T})=>{const R=structuredClone(r);R.push(T.createRate.rate),this.store.dispatch((0,h.CD)({rates:R}))}))))}getRates(u=0,r=10,T="name",R="asc",$=""){return this._apollo.query({query:d,errorPolicy:"all",variables:{page:u,size:r,sort:T,order:R,search:$}}).pipe((0,s.M)(({data:g})=>{this.store.dispatch((0,B.Bp)({pagination:g.findAllRates.pagination})),this.store.dispatch((0,h.CD)({rates:g.findAllRates.rates}))}))}findActiveByBaseId(u){return this._apollo.query({query:f,variables:{currencyBaseId:u},errorPolicy:"all"}).pipe((0,E.T)(({data:r})=>r?r.findActiveByBaseId:[]),(0,s.M)(r=>{r&&this.store.dispatch((0,h.CD)({rates:r}))}))}getActiveRateByBaseIdForAthendatPlatform(u){return this._apollo.query({query:I,variables:{currencyBaseId:u},errorPolicy:"all"}).pipe((0,E.T)(({data:r})=>r?r.getActiveRateByBaseIdForAthendatPlatform:null),(0,s.M)(r=>{r&&this.store.dispatch((0,h.r$)({rate:r}))}))}getRateById(u){return this._apollo.query({query:y,variables:{findRateByIdId:u},errorPolicy:"all"}).pipe((0,s.M)(({data:r})=>{this.store.dispatch((0,h.r$)({rate:r.findRateById.rate}))}))}updateRate(u){return this.store.select(e.o).pipe((0,m.s)(1),(0,l.n)(r=>this._apollo.mutate({mutation:c,variables:{updateRateInput:u},errorPolicy:"all"}).pipe((0,s.M)(({data:T})=>{const R=structuredClone(r);R[r.findIndex(g=>g.id===u.id)]=T.updateRate.rate,this.store.dispatch((0,h.CD)({rates:R}))}))))}updateRateStatus(u){return this.store.select(e.o).pipe((0,m.s)(1),(0,l.n)(r=>this._apollo.mutate({mutation:n,variables:{updateEntityStatusInput:u},errorPolicy:"all"}).pipe((0,s.M)(({})=>{const R=structuredClone(r);R[r.findIndex(g=>g.id===u.id)].active=u.active,this.store.dispatch((0,h.CD)({rates:R}))}))))}removeRate(u){return this.store.select(e.o).pipe((0,m.s)(1),(0,l.n)(r=>this._apollo.mutate({mutation:t,variables:{removeRateId:u},errorPolicy:"all"}).pipe((0,s.M)(({data:T})=>{if(T){const R=structuredClone(r),$=r.findIndex(g=>g.id===u);R.splice($,1),this.store.dispatch((0,h.CD)({rates:R}))}}))))}static#e=this.\u0275fac=function(r){return new(r||A)};static#t=this.\u0275prov=v.jDH({token:A,factory:A.\u0275fac,providedIn:"root"})}return A})()},2578:function(M,_){var o,m;void 0!==(m="function"==typeof(o=function(){"use strict";function s(e,a,c){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){h(n.response,a,c)},n.onerror=function(){console.error("could not download file")},n.send()}function E(e){var a=new XMLHttpRequest;a.open("HEAD",e,!1);try{a.send()}catch{}return 200<=a.status&&299>=a.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var p="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,B=p.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=p.saveAs||("object"!=typeof window||window!==p?function(){}:"download"in HTMLAnchorElement.prototype&&!B?function(e,a,c){var n=p.URL||p.webkitURL,t=document.createElement("a");t.download=a=a||e.name||"download",t.rel="noopener","string"==typeof e?(t.href=e,t.origin===location.origin?i(t):E(t.href)?s(e,a,c):i(t,t.target="_blank")):(t.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(t.href)},4e4),setTimeout(function(){i(t)},0))}:"msSaveOrOpenBlob"in navigator?function(e,a,c){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function l(e,a){return typeof a>"u"?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,c),a);else if(E(e))s(e,a,c);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){i(n)})}}:function(e,a,c,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return s(e,a,c);var t="application/octet-stream"===e.type,d=/constructor/i.test(p.HTMLElement)||p.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent);if((f||t&&d||B)&&typeof FileReader<"u"){var I=new FileReader;I.onloadend=function(){var A=I.result;A=f?A:A.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=A:location=A,n=null},I.readAsDataURL(e)}else{var y=p.URL||p.webkitURL,C=y.createObjectURL(e);n?n.location=C:location.href=C,n=null,setTimeout(function(){y.revokeObjectURL(C)},4e4)}});p.saveAs=h.saveAs=h,M.exports=h})?o.apply(_,[]):o)&&(M.exports=m)}}]);