(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5212],{68824:(x,U,e)=>{"use strict";e.d(U,{f:()=>c});var t=e(2578),u=e(62288),d=e(54438);const y="application/vnd.openxmlformats-officedocument.spreadsheet.sheet;charset=UTF-8",g="text/plain;charset=utf-8";let c=(()=>{class D{constructor(){}exportAsExcelFile(m,T,A=[[]],B=[]){const o=u.Wp.json_to_sheet(m);let l={fill:{fgColor:{rgb:"27086f"}},font:{color:{rgb:"FFFFFF"}}};A[0].length>0&&(u.Wp.sheet_add_aoa(o,A),A[0].forEach((P,s)=>{let O=u.Wp.encode_cell({c:s,r:0});o[O].s=l})),B.length>0&&(o["!cols"]=B);const a=u.M9({Sheets:{data:o},SheetNames:["data"]},{bookType:"xlsx",type:"array"});this._saveAsFile(a,T,".xlsx",y)}exportAsCsvFile(m,T){const B={Sheets:{data:u.Wp.json_to_sheet(m)},SheetNames:["data"]},o=u.M9(B,{bookType:"csv",type:"array"});this._saveAsFile(o,T,".csv",y)}exportAsFacFile(m,T,A,B){const o="Factura_"+m.no,l=`Numero=${m.no}\nMC=CUBAN PESO\nOM=${m.currency.namev}\nFecha=${Number(m.billDate)}\nEntidad=${m.customer.code}\nConcepto=${m.concept}\nComercial=${m.commercial.name} ${m.commercial.lastname1} ${m.commercial.lastname2}\nCtaBancoMC=${A}\nCtaBancoOM=${B}\nForma=${m.paymentMethod.name}\nOperacion=${m.operationType.name}\nObservacion=${m.obs}\nMA=\nCtoArancel=\nPorcientoAra=0\nTalon=001\nContrato=\nVtaCadena=0\nNomHecho=${T.fullname}\nCargoHecho=${T.title}\nCIHecho=\nNomJA=\nCIJA=\nNomTra=\nChapa=\nLicTra=\nCITra=\nNomCliente=${m.customer.name}\nCargoCliente=\nCICliente=${m.customer.nit}\n[Propiedades]\n\n[Detalle]\n${this._versatInvoiceGenerator(m.productsInBill)}\n\n[PieFirma]\n        `;this._saveAsFile(l,o,".fac",g)}exportAsJsonFile(m){encodeURIComponent(m),this._saveAsFile(m,"data.json",".json",g)}_saveAsFile(m,T,A,B){const o=new Blob([m],{type:B});t.saveAs(o,T+"_export_"+(new Date).getTime()+A)}_versatInvoiceGenerator(m){let T="";return m.forEach(A=>{T+=`0002|002|993449|${A.uom}|1111111|0|0|0|0|0|${A.price}||0|0\n`}),T}static#t=this.\u0275fac=function(T){return new(T||D)};static#e=this.\u0275prov=d.jDH({token:D,factory:D.\u0275fac,providedIn:"root"})}return D})()},63425:(x,U,e)=>{"use strict";e.d(U,{B:()=>d,n:()=>u});var t=e(54438),i=e(21326);const u=(y,g)=>(0,t.WQX)(i.N).getUoms(),d=(y,g)=>(0,t.WQX)(i.N).findActiveUoms()},17085:(x,U,e)=>{"use strict";e.d(U,{Ns:()=>d});var t=e(59640);const i=y=>y.uoms,d=((0,t.Mz)(i,y=>y.uom),(0,t.Mz)(i,y=>y.uoms))},21326:(x,U,e)=>{"use strict";e.d(U,{N:()=>B});var t=e(54438),i=e(73512),u=e(96697),d=e(25558),y=e(88141),g=e(59640),f=e(44e3),h=e(98216),M=e(17085);const r=i.J1`
    mutation CreateUom($createUomInput: CreateUomInput!) {
        createUom(createUomInput: $createUomInput) {

            ok
            message

            uom {
                id
                active
                name
                abbr
                type
            }

        }
    }
`,c=i.J1`
    mutation UpdateUom($updateUomInput: UpdateUomInput!) {
        updateUom(updateUomInput: $updateUomInput) {
            ok
            message

            uom {
                id
                active
                name
                abbr
                type
            }
        }
    }
`,D=i.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateUomStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,E=i.J1`
    mutation RemoveUom($removeUomId: String!) {
        removeUom(id: $removeUomId) {
            ok
            message
        }
    }
`,m=i.J1`
    query FindAllUoms($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllUoms(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            uoms {
                id
                active
                name
                abbr
                type
            }
        }
    }
`,T=i.J1`
    query FindActiveUoms {
        findActiveUoms {
            ok
            message

            uoms {
                id
                name
                abbr
            }
        }
    }
`,A=i.J1`
    query FindUomById($findUomByIdId: String!) {
        findUomById(id: $findUomByIdId) {
            ok
            message

            uom {
                id
                active
                name
                abbr
                type
            }
        }
    }
`;let B=(()=>{class o{constructor(){this.apolloProvider=(0,t.WQX)(i.Ic),this.store=(0,t.WQX)(g.il),this._apollo=this.apolloProvider.use("BALANC")}createUom(n){return this.store.select(M.Ns).pipe((0,u.s)(1),(0,d.n)(a=>this._apollo.mutate({mutation:r,variables:{createUomInput:n},errorPolicy:"all"}).pipe((0,y.M)(({data:P})=>{const s=structuredClone(a);s.push(P.createUom.uom),this.store.dispatch((0,f.JR)({uoms:s}))}))))}getUoms(n=1,a=20,P="code",s="asc",b=""){return this._apollo.query({query:m,errorPolicy:"all",variables:{offset:a*(n-1),limit:a,sort:P,order:s,search:b}}).pipe((0,y.M)(({data:O})=>{this.store.dispatch((0,h.Bp)({pagination:O.findAllUoms.pagination})),this.store.dispatch((0,f.JR)({uoms:O.findAllUoms.uoms}))}))}findActiveUoms(n="",a=10){return this._apollo.query({query:T,variables:{search:n,size:a},errorPolicy:"all"}).pipe((0,y.M)(({data:P})=>{this.store.dispatch((0,f.JR)({uoms:P.findActiveUoms.uoms}))}))}getUomById(n){return this._apollo.query({query:A,variables:{findUomByIdId:n},errorPolicy:"all"}).pipe((0,y.M)(({data:a})=>{this.store.dispatch((0,f.qV)({uom:a.findUomById.uom}))}))}updateUom(n){return this.store.select(M.Ns).pipe((0,u.s)(1),(0,d.n)(a=>this._apollo.mutate({mutation:c,variables:{updateUomInput:n},errorPolicy:"all"}).pipe((0,y.M)(({data:P})=>{const s=structuredClone(a);s[a.findIndex(O=>O.id===n.id)]=P.updateUom.uom,this.store.dispatch((0,f.JR)({uoms:s}))}))))}updateUomStatus(n){return this.store.select(M.Ns).pipe((0,u.s)(1),(0,d.n)(a=>this._apollo.mutate({mutation:D,variables:{updateEntityStatusInput:n},errorPolicy:"all"}).pipe((0,y.M)(({})=>{const s=structuredClone(a);s[a.findIndex(O=>O.id===n.id)].active=n.active,this.store.dispatch((0,f.JR)({uoms:s}))}))))}removeUom(n){return this.store.select(M.Ns).pipe((0,u.s)(1),(0,d.n)(a=>this._apollo.mutate({mutation:E,variables:{removeUomId:n},errorPolicy:"all"}).pipe((0,y.M)(({errors:P})=>{if(P)return;const s=structuredClone(a),b=a.findIndex(O=>O.id===n);s.splice(b,1),this.store.dispatch((0,f.JR)({uoms:s}))}))))}static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},16551:(x,U,e)=>{"use strict";e.d(U,{Jq:()=>y,MQ:()=>d,nn:()=>f,oi:()=>g,ug:()=>u});var t=e(54438),i=e(69599);const u=(M,r)=>(0,t.WQX)(i.t).getDepots(),d=(M,r)=>(0,t.WQX)(i.t).findActiveDepots(),y=(M,r)=>(0,t.WQX)(i.t).findActiveAndRealDepots(),g=(M,r)=>(0,t.WQX)(i.t).findDepotsForIncomes(),f=(M,r)=>(0,t.WQX)(i.t).findDepotsForAdmin()},53159:(x,U,e)=>{"use strict";e.d(U,{c_:()=>d,dY:()=>u});var t=e(59640);const i=g=>g.depots,u=(0,t.Mz)(i,g=>g.depot),d=(0,t.Mz)(i,g=>g.depots);(0,t.Mz)(i,g=>g.ownDepots)},69599:(x,U,e)=>{"use strict";e.d(U,{t:()=>b});var t=e(96697),i=e(25558),u=e(88141),d=e(96354),y=e(98216),g=e(53159),f=e(26782),h=e(73512);const M=h.J1`
   query FindDepotsByManager {
        findDepotsByManager {
            ok
            message

            depots {
                id
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                name
                code
                codev
                static
            }
        }
    }
`,r=h.J1`
   query FindAllDepots($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllDepots(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
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

            depots {
                id
                active
                name
                code
                codev
                static
                managerId
                periodRestriction
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,c=h.J1`
    query FindActiveDepots($search: String!, $size: Int!) {
    findActiveDepots(search: $search, size: $size) {
            id
            active
            name
            code
            codev
            static
            managerId
            periodRestriction
            manager {
                name
                lastname1
                lastname2
                fullname
            }
        }
    }
`,D=h.J1`
    query FindActiveAndRealDepots {
    findActiveAndRealDepots {
            ok
            message

            depots {
                id
                name

                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,E=h.J1`
    query FindDepotsForIncomes {
    findDepotsForIncomes {
            ok
            message

            depots {
                id
                name
            }
        }
    }
`,m=h.J1`
    query FindDepotsForAdmin {
        findDepotsForAdmin {
            ok
            message

            depots {
                id
                name
            }
        }
    }
`,T=h.J1`
    query FindDepotByPeriodId($periodId: String!) {
    findDepotByPeriodId(periodId: $periodId) {
            ok
            message

            depot {
                id
                name
            }
        }
    }
`,A=h.J1`
    query FindDepotById($findDepotById: String!) {
        findDepotById(id: $findDepotById) {
            ok
            message

            depot {
                id
                active
                name
                code
                codev
                static
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,B=h.J1`
    mutation CreateDepot($createDepotInput: CreateDepotInput!) {
        createDepot(createDepotInput: $createDepotInput) {
            ok
            message

            depot {
                id
                active
                name
                code
                codev
                static
                managerId,
                periodRestriction
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,o=h.J1`
    mutation UpdateDepot($updateDepotInput: UpdateDepotInput!) {
        updateDepot(updateDepotInput: $updateDepotInput) {
            ok
            message

            depot {
                id
                active
                name
                code
                codev
                static
                managerId,
                periodRestriction
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,l=h.J1`
    mutation RemoveDepot($removeDepotId: String!) {
        removeDepot(id: $removeDepotId) {
            ok
            message
        }
    }
`,n=h.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateDepotStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var a=e(54438),P=e(95416),s=e(59640);let b=(()=>{class O{constructor(I,C,_){this.apolloProvider=I,this._snackBar=C,this.store=_,this._apollo=this.apolloProvider.use("BALANC")}createDepot(I){return this.store.select(g.c_).pipe((0,t.s)(1),(0,i.n)(C=>this._apollo.mutate({mutation:B,variables:{createDepotInput:I},errorPolicy:"all"}).pipe((0,u.M)(({data:_})=>{const F=structuredClone(C);F.push(_.createDepot.depot),this.store.dispatch((0,f.IX)({depots:F}))}))))}getDepots(I=0,C=50,_="code",F="asc",p=""){return this._apollo.query({query:r,errorPolicy:"all",variables:{page:I,size:C,sort:_,order:F,search:p}}).pipe((0,u.M)(({data:v})=>{this.store.dispatch((0,f.IX)({depots:v.findAllDepots.depots})),this.store.dispatch((0,y.Bp)({pagination:v.findAllDepots.pagination}))}))}getDepotsByManager(){return this._apollo.query({query:M,errorPolicy:"all"}).pipe((0,u.M)(({data:I})=>{this.store.dispatch((0,f.Gv)({ownDepots:I.findDepotsByManager.depots}))}))}findActiveDepots(I="",C=50){return this._apollo.query({query:c,variables:{search:I,size:C},errorPolicy:"all"}).pipe((0,d.T)(({data:_})=>(this.store.dispatch((0,f.IX)({depots:_.findActiveDepots})),_.findActiveDepots)))}findActiveAndRealDepots(){return this._apollo.query({query:D,errorPolicy:"all"}).pipe((0,u.M)(({data:I})=>{this.store.dispatch((0,f.IX)({depots:I.findActiveAndRealDepots.depots}))}))}findDepotsForIncomes(){return this._apollo.query({query:E,errorPolicy:"all"}).pipe((0,u.M)(({data:I})=>{this.store.dispatch((0,f.IX)({depots:I.findDepotsForIncomes.depots}))}))}findDepotsForAdmin(){return this._apollo.query({query:m,errorPolicy:"all"}).pipe((0,u.M)(({data:I})=>{this.store.dispatch((0,f.IX)({depots:I.findDepotsForAdmin.depots}))}))}findDepotByPeriodId(I){return this._apollo.query({query:T,errorPolicy:"all",variables:{periodId:I}}).pipe((0,u.M)(({data:C})=>{this.store.dispatch((0,f.VJ)({depot:C.findDepotByPeriodId.depot}))}))}getDepotById(I){return this._apollo.query({query:A,variables:{findDepotByIdId:I},errorPolicy:"all"}).pipe((0,u.M)(({data:C})=>{this.store.dispatch((0,f.VJ)({depot:C.createDepot.depot}))}))}updateDepot(I){return this.store.select(g.c_).pipe((0,t.s)(1),(0,i.n)(C=>this._apollo.mutate({mutation:o,variables:{updateDepotInput:I},errorPolicy:"all"}).pipe((0,u.M)(({data:_})=>{const F=structuredClone(C);F[C.findIndex(v=>v.id===I.id)]=_.updateDepot.depot,this.store.dispatch((0,f.IX)({depots:F}))}))))}updateDepotStatus(I){return this.store.select(g.c_).pipe((0,t.s)(1),(0,i.n)(C=>this._apollo.mutate({mutation:n,variables:{updateEntityStatusInput:I},errorPolicy:"all"}).pipe((0,u.M)(({})=>{const F=structuredClone(C);F[C.findIndex(v=>v.id===I.id)].active=I.active,this.store.dispatch((0,f.IX)({depots:F}))}))))}removeDepot(I){return this.store.select(g.c_).pipe((0,t.s)(1),(0,i.n)(C=>this._apollo.mutate({mutation:l,variables:{removeDepotId:I},errorPolicy:"all"}).pipe((0,u.M)(({data:_})=>{if(_){const F=structuredClone(C),p=C.findIndex(v=>v.id===I);F.splice(p,1),this.store.dispatch((0,f.IX)({depots:F}))}}))))}static#t=this.\u0275fac=function(C){return new(C||O)(a.KVO(h.Ic),a.KVO(P.UG),a.KVO(s.il))};static#e=this.\u0275prov=a.jDH({token:O,factory:O.\u0275fac,providedIn:"root"})}return O})()},43801:(x,U,e)=>{"use strict";e.d(U,{Bj:()=>y,N4:()=>M,Tn:()=>h,bN:()=>g,eX:()=>d});var t=e(54438),i=e(36296),u=e(4840);const d=(c,D)=>{const E=c.params.productId;return E&&"new"!==E?(0,t.WQX)(i.g).getProductById(E):{}},y=(c,D)=>(0,t.WQX)(i.g).getProducts(),g=(c,D)=>(0,t.WQX)(i.g).findActiveProducts(),h=(c,D)=>(0,t.WQX)(i.g).findIngredients(),M=(c,D)=>(0,t.WQX)(u.t).getProductsInStockAvailable()},36296:(x,U,e)=>{"use strict";e.d(U,{g:()=>T});var t=e(33446),i=e(96697),u=e(25558),d=e(88141),y=e(96354),g=e(62288),f=e(98216),h=e(39928),M=e(13189),r=e(84342),c=e(5864),D=e(54438),E=e(73512),m=e(59640);let T=(()=>{class A{constructor(o,l){this.apolloProvider=o,this.store=l,this._apollo=this.apolloProvider.use("BALANC")}createProduct(o){return this.store.select(M.VW).pipe((0,i.s)(1),(0,u.n)(l=>this._apollo.mutate({mutation:r.xq,variables:{createProductInput:o},errorPolicy:"all"}).pipe((0,d.M)(({data:n})=>{const a=(0,t.A)(l);a.push(n.createProduct.product),this.store.dispatch((0,h.d9)({products:a}))}))))}importProductsFromTemplateFile(o,l){return this._apollo.mutate({mutation:r.YV,variables:{importProductsTemplateFileInput:{products:o,depotId:l}},errorPolicy:"all"}).pipe((0,d.M)(({data:n})=>{this.store.dispatch((0,h.d9)({products:n.importProductsFromTemplateFile.products})),this.store.dispatch((0,f.Bp)({pagination:n.importProductsFromTemplateFile.pagination}))}))}getProducts(o=0,l=50,n="name",a="asc",P=""){return this._apollo.query({query:r.oH,errorPolicy:"all",variables:{page:o,size:l,sort:n,order:a,search:P}}).pipe((0,d.M)(({data:s})=>{this.store.dispatch((0,h.d9)({products:s.findAllProducts.products})),this.store.dispatch((0,f.Bp)({pagination:s.findAllProducts.pagination}))}))}findProductsToList(){return this._apollo.query({query:r.pg,errorPolicy:"all"}).pipe((0,d.M)(({data:o})=>{this.store.dispatch((0,h.d9)({products:o.findProductsToList.products}))}))}findIngredients(){return this._apollo.query({query:r.Cm,errorPolicy:"all"}).pipe((0,d.M)(({data:o})=>{this.store.dispatch((0,h.d9)({products:o.findIngredients.products}))}))}getProductsByMerchant(o=1,l=50,n="name",a="asc",P=""){return this._apollo.query({query:r.zb,errorPolicy:"all",variables:{offset:l*(o-1),limit:l,sort:n,order:a,search:P}}).pipe((0,d.M)(({data:s})=>{this.store.dispatch((0,h.d9)({products:s.findAllProductsByMerchant.products})),this.store.dispatch((0,f.Bp)({pagination:s.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:r.r,errorPolicy:"all"}).pipe((0,d.M)(({})=>{}))}findActiveProducts(o="",l=10){return this._apollo.query({query:r.LS,variables:{search:o,size:l},errorPolicy:"all"}).pipe((0,y.T)(({data:n})=>n?n.findActiveProducts:[]),(0,d.M)(n=>{n&&this.store.dispatch((0,h.d9)({products:n}))}))}findProductsByUpcS(o=[]){return this._apollo.query({query:r.hE,variables:{upcS:o},errorPolicy:"all"}).pipe((0,y.T)(({data:l})=>l?l.findProductsByUpcS:[]))}getProductsInactive(){return this._apollo.query({query:r.Ax,errorPolicy:"all"}).pipe((0,d.M)(({})=>{}))}getProductsExhausted(){return this._apollo.query({query:r.mU,errorPolicy:"all"}).pipe((0,d.M)(({})=>{}))}getProductById(o){return this._apollo.query({query:r.De,variables:{productId:o},errorPolicy:"all"}).pipe((0,d.M)(({data:l})=>{this.store.dispatch((0,h.yz)({product:l.findProductById.product}))}))}updateProduct(o){return this.store.select(M.VW).pipe((0,i.s)(1),(0,u.n)(l=>this._apollo.mutate({mutation:r.q,variables:{updateProductInput:o},errorPolicy:"all"}).pipe((0,d.M)(({data:n})=>{const a=(0,t.A)(l);a[l.findIndex(s=>s.id===o.id)]=n.updateProduct.product,this.store.dispatch((0,h.d9)({products:a})),this.store.dispatch((0,h.yz)({product:n.updateProduct.product}))}))))}updateProductStatus(o){return this.store.select(M.VW).pipe((0,i.s)(1),(0,u.n)(l=>this._apollo.mutate({mutation:r.bM,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,d.M)(({data:n})=>{if(n){const a=(0,t.A)(l);a[l.findIndex(s=>s.id===o.id)].active=o.active,this.store.dispatch((0,h.d9)({products:a}))}}))))}updateProductImages(o,l,n){return this._apollo.mutate({mutation:r.B9,variables:{updateProductById:o,thumbnail:l,images:n},errorPolicy:"all"}).pipe((0,y.T)(({data:a})=>a?a.updateProductImages:null),(0,d.M)(a=>{a&&this.store.dispatch((0,h.NM)({id:a.product.id,thumbnail:a.product.thumbnail,images:a.product.images}))}))}removeProduct(o){return this.store.select(M.VW).pipe((0,i.s)(1),(0,u.n)(l=>this._apollo.mutate({mutation:r.Fu,variables:{removeProductId:o},errorPolicy:"all"}).pipe((0,d.M)(({data:n})=>{if(n){const a=(0,t.A)(l),P=l.findIndex(s=>s.id===o);a.splice(P,1),this.store.dispatch((0,h.d9)({products:a}))}}))))}getTags(o=1,l=50,n="name",a="asc",P=""){return this._apollo.query({query:r.J,errorPolicy:"all",variables:{offset:l*(o-1),limit:l,sort:n,order:a,search:P}}).pipe((0,d.M)(({data:s})=>{this.store.dispatch((0,h.Wt)({tags:s.findAllTags.tags}))}))}createTag(o){return this.store.select(M.O).pipe((0,i.s)(1),(0,u.n)(l=>this._apollo.mutate({mutation:r.Op,variables:{createTagInput:o},errorPolicy:"all"}).pipe((0,d.M)(({data:n})=>{const a=(0,t.A)(l);a.push(n.createTag.tag),this.store.dispatch((0,h.Wt)({tags:a}))}))))}updateTag(o){return this.store.select(M.O).pipe((0,i.s)(1),(0,u.n)(l=>this._apollo.mutate({mutation:r.zk,variables:{updateTagInput:o},errorPolicy:"all"}).pipe((0,d.M)(({data:n})=>{const a=(0,t.A)(l);a[l.findIndex(s=>s.id===o.id)]=n.updateTag.tag,this.store.dispatch((0,h.Wt)({tags:a}))}))))}deleteTag(o){return this.store.select(M.O).pipe((0,i.s)(1),(0,u.n)(l=>this._apollo.mutate({mutation:r.GR,variables:{removeTagId:o},errorPolicy:"all"}).pipe((0,d.M)(()=>{const n=(0,t.A)(l),a=l.findIndex(P=>P.id===o);n.splice(a,1),this.store.dispatch((0,h.Wt)({tags:n}))}))))}getProductsAvailable(){return this._apollo.query({query:r.my,errorPolicy:"all"}).pipe((0,d.M)(({})=>{}))}importStockFormTemplateFile(o){let l;function n(s){return{upc:s.UPC?s.UPC.toString():null,sku:s.SKU?s.SKU.toString():null,bCode:s.C\u00f3digo?s.C\u00f3digo.toString():null,name:s.Nombre,description:c.H.IsNullOrEmpty(s.Descripci\u00f3n)?"":s.Descripci\u00f3n,uom:s["Unidad de Medida"],quantity:s.Cantidad,cost:s.Costo,price:s.Precio,brand:s.Marca,weight:s.Peso,width:s.Ancho,length:s.Largo,height:s.Altura,volume:s.Volumen,isPerishable:!!s["N\xfamero de Lote"],lotNumber:s["N\xfamero de Lote"]?s["N\xfamero de Lote"].toString().trim():null,dueDate:c.H.isValidDate(s["Fecha de Vencimiento"])?new Date(s["Fecha de Vencimiento"]):null}}const a=o.target,P=new FileReader;P.onload=s=>{const O=g.LF(s.target.result,{type:"binary"});l=g.Wp.sheet_to_json(O.Sheets[O.SheetNames[0]]);const C=l.map(n);this.store.dispatch((0,h.GQ)({products:C}))},P.readAsBinaryString(a.files[0])}static#t=this.\u0275fac=function(l){return new(l||A)(D.KVO(E.Ic),D.KVO(m.il))};static#e=this.\u0275prov=D.jDH({token:A,factory:A.\u0275fac,providedIn:"root"})}return A})()},78357:(x,U,e)=>{"use strict";e.d(U,{i:()=>C});var t=e(54438),i=e(89417),u=e(59115),d=e(99213),y=e(88834),g=e(21413),f=e(56977),h=e(5864),M=e(82765),r=e(60177),c=e(25084),D=e(32102),E=e(59042),m=e(82798),T=e(60850),A=e(86600);const B=["bt"];function o(_,F){if(1&_&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"uppercase"),t.k0s()),2&_){const p=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,p.get("name").value))}}function l(_,F){if(1&_&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()),2&_){const p=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,p.get("name").value))}}function n(_,F){if(1&_&&(t.j41(0,"div",15)(1,"mat-checkbox",16),t.DNE(2,o,3,3,"span")(3,l,3,3,"span"),t.k0s()()),2&_){const p=F.$implicit,v=t.XpG(2);t.R7$(),t.Y8G("formControl",p.get("checked")),t.R7$(),t.vxM(2,v.useUpperCase?2:-1),t.R7$(),t.vxM(3,v.useUpperCase?-1:3)}}function a(_,F){if(1&_&&(t.j41(0,"div",9),t.Z7z(1,n,4,3,"div",15,t.fX1),t.k0s()),2&_){const p=t.XpG();t.R7$(),t.Dyx(p.formArray.controls)}}function P(_,F){if(1&_&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&_){const p=t.sdS(4),v=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",p)("formControl",v.dateControl)("max",v.maxDate),t.R7$(),t.Y8G("for",p)}}function s(_,F){if(1&_){const p=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const R=t.eBV(p).$implicit,S=t.XpG(2);return t.Njj(S.selectEntity(R))}),t.EFF(1),t.k0s()}if(2&_){const p=F.$implicit,v=t.XpG(2);t.Y8G("value",p[v.entityPropertyName]),t.R7$(),t.SpI(" ",p[v.entityPropertyName]," ")}}function b(_,F){if(1&_&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,s,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&_){const p=t.sdS(4),v=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",v.searchEntityControl)("matAutocomplete",p)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,v.entitiesFiltered))}}function O(_,F){if(1&_&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&_){const p=t.sdS(4),v=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",p)("formControl",v.dateControl)("max",v.maxDate),t.R7$(),t.Y8G("for",p)}}function L(_,F){if(1&_){const p=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const R=t.eBV(p).$implicit,S=t.XpG(2);return t.Njj(S.selectEntity(R))}),t.EFF(1),t.k0s()}if(2&_){const p=F.$implicit;t.Y8G("value",p.name),t.R7$(),t.SpI(" ",p.name," ")}}function I(_,F){if(1&_&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,L,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&_){const p=t.sdS(4),v=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",v.searchEntityControl)("matAutocomplete",p)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,v.entitiesFiltered))}}let C=(()=>{class _{constructor(){this.entityPropertyName="name",this.useUpperCase=!1,this.dataChange=new t.bkB,this.data=[],this.maxDate=new Date,this.dateControl=new i.MJ({disabled:!0}),this.formArray=new i.Yp([]),this._unsubscribeAll=new g.B,this._formBuilder=(0,t.WQX)(i.ok),this._changeDetectorRef=(0,t.WQX)(t.gRc)}get hasFilter(){return!h.H.IsNullOrEmpty(this.selectedFilter)}ngOnInit(){this.initializeFormArray(),this.dateControl.valueChanges.pipe((0,f.Q)(this._unsubscribeAll)).subscribe(p=>{this.dataChange.next(p),this.selectedFilter=p,this.menu.closeMenu()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}clearFilter(){switch(this.filterType){case"filterEntity":this.searchEntityControl.setValue(""),this.dataChange.next(null),this.selectedFilter=null;break;case"date":this.dateControl.setValue(null);break;case"multiSelect":case"multiSelectEntity":this.clearFormArray()}this.menu.closeMenu()}closeMenu(){this.menu.closeMenu()}selectEntity(p){this.dataChange.next(p),this.selectedFilter=p,this.menu.closeMenu()}initializeFormArray(){switch(this.filterType){case"multiSelect":this.formArray=this._formBuilder.array(this.data.map(p=>this._formBuilder.group({name:[p],checked:[!1]})));break;case"multiSelectEntity":this.formArray=this._formBuilder.array(this.data.map(p=>this._formBuilder.group({id:[p.id],name:[p[this.entityPropertyName]],checked:[!1]})))}this._changeDetectorRef.markForCheck(),this.formArraySubscription=this.formArray.valueChanges.pipe((0,f.Q)(this._unsubscribeAll)).subscribe(p=>{let v=[];switch(this.filterType){case"multiSelect":v=p.filter(R=>R.checked).map(R=>R.name);break;case"multiSelectEntity":for(const R of p.filter(S=>S.checked)){const S=this.data.find($=>$.id===R.id);v.push(S)}}this.dataChange.next(v),this.selectedFilter=v})}clearFormArray(){this.formArraySubscription.unsubscribe(),this.selectedFilter=[],this.dataChange.next([]),this.initializeFormArray()}static#t=this.\u0275fac=function(v){return new(v||_)};static#e=this.\u0275cmp=t.VBU({type:_,selectors:[["table-filter"]],viewQuery:function(v,R){if(1&v&&t.GBs(B,7),2&v){let S;t.mGM(S=t.lsd())&&(R.menu=S.first)}},inputs:{entityPropertyName:"entityPropertyName",filterType:"filterType",useUpperCase:"useUpperCase",data:"data",entitiesFiltered:"entitiesFiltered",searchEntityControl:"searchEntityControl"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.aNF],decls:19,vars:6,consts:[["bt","matMenuTrigger"],["listStatusMenu","matMenu"],["dateEntity",""],["SearchEntity",""],["entityDate",""],["entitiesAutocomplete","matAutocomplete"],["mat-icon-button","","matTooltip","",1,"w-6","h-6","min-h-6","min-w-6",3,"color","matMenuTriggerFor"],[1,"icon-size-4",3,"svgIcon"],[3,"click"],[1,"w-full","px-4","py-4"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","mat-fuse-de","fuse-mat-rounded","max-w-64","min-w-64",3,"subscriptSizing"],[1,"flex","justify-end","w-full","p-2","pb-0","border-t-2"],["mat-flat-button","",3,"click"],["mat-button","","color","warn",3,"click"],[1,""],["color","primary",3,"formControl"],["matInput","","placeholder","Fecha",3,"matDatepicker","formControl","max"],["matIconSuffix","",3,"for"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],[3,"value"],[3,"click","value"]],template:function(v,R){if(1&v){const S=t.RV6();t.j41(0,"div")(1,"button",6,0),t.nrm(3,"mat-icon",7),t.k0s(),t.j41(4,"mat-menu",null,1)(6,"div",8),t.bIt("click",function(W){return t.eBV(S),t.Njj(W.stopPropagation())}),t.DNE(7,a,3,0,"div",9)(8,P,5,5,"mat-form-field",10)(9,b,8,7,"mat-form-field",11),t.j41(10,"div",12)(11,"button",13),t.bIt("click",function(){return t.eBV(S),t.Njj(R.closeMenu())}),t.EFF(12,"Cerrar"),t.k0s(),t.j41(13,"button",14),t.bIt("click",function(){return t.eBV(S),t.Njj(R.clearFilter())}),t.EFF(14,"Limpiar"),t.k0s()()()()(),t.DNE(15,O,5,5,"ng-template",null,2,t.C5r)(17,I,8,7,"ng-template",null,3,t.C5r)}if(2&v){const S=t.sdS(5);t.R7$(),t.Y8G("color",R.hasFilter?"primary":"default")("matMenuTriggerFor",S),t.R7$(2),t.Y8G("svgIcon","mat_solid:filter_list"),t.R7$(4),t.vxM(7,"multiSelect"===R.filterType||"multiSelectEntity"===R.filterType?7:-1),t.R7$(),t.vxM(8,"date"===R.filterType?8:-1),t.R7$(),t.vxM(9,"filterEntity"===R.filterType?9:-1)}},dependencies:[r.Jj,y.Hl,y.$z,y.iY,d.m_,d.An,u.Cn,u.kk,u.Cp,M.g7,M.So,r.Pc,r.PV,c.X6,c.Vh,c.bZ,c.bU,D.RG,D.rl,D.JW,D.yw,E.fS,E.fg,i.X1,i.me,i.BC,i.l_,T.jL,T.$3,A.wT,T.pN,m.Ve],encapsulation:2,changeDetection:0})}return _})()},2578:function(x,U){var e,i;void 0!==(i="function"==typeof(e=function(){"use strict";function d(r,c,D){var E=new XMLHttpRequest;E.open("GET",r),E.responseType="blob",E.onload=function(){M(E.response,c,D)},E.onerror=function(){console.error("could not download file")},E.send()}function y(r){var c=new XMLHttpRequest;c.open("HEAD",r,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function g(r){try{r.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(c)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,h=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),M=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(r,c,D){var E=f.URL||f.webkitURL,m=document.createElement("a");m.download=c=c||r.name||"download",m.rel="noopener","string"==typeof r?(m.href=r,m.origin===location.origin?g(m):y(m.href)?d(r,c,D):g(m,m.target="_blank")):(m.href=E.createObjectURL(r),setTimeout(function(){E.revokeObjectURL(m.href)},4e4),setTimeout(function(){g(m)},0))}:"msSaveOrOpenBlob"in navigator?function(r,c,D){if(c=c||r.name||"download","string"!=typeof r)navigator.msSaveOrOpenBlob(function u(r,c){return typeof c>"u"?c={autoBom:!1}:"object"!=typeof c&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\ufeff",r],{type:r.type}):r}(r,D),c);else if(y(r))d(r,c,D);else{var E=document.createElement("a");E.href=r,E.target="_blank",setTimeout(function(){g(E)})}}:function(r,c,D,E){if((E=E||open("","_blank"))&&(E.document.title=E.document.body.innerText="downloading..."),"string"==typeof r)return d(r,c,D);var m="application/octet-stream"===r.type,T=/constructor/i.test(f.HTMLElement)||f.safari,A=/CriOS\/[\d]+/.test(navigator.userAgent);if((A||m&&T||h)&&typeof FileReader<"u"){var B=new FileReader;B.onloadend=function(){var n=B.result;n=A?n:n.replace(/^data:[^;]*;/,"data:attachment/file;"),E?E.location.href=n:location=n,E=null},B.readAsDataURL(r)}else{var o=f.URL||f.webkitURL,l=o.createObjectURL(r);E?E.location=l:location.href=l,E=null,setTimeout(function(){o.revokeObjectURL(l)},4e4)}});f.saveAs=M.saveAs=M,x.exports=M})?e.apply(U,[]):e)&&(x.exports=i)},33446:(x,U,e)=>{"use strict";e.d(U,{A:()=>y});var t=e(99531);const y=function d(g){return(0,t.A)(g,5)}}}]);