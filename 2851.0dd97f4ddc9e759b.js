"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2851],{63425:(B,D,t)=>{t.d(D,{B:()=>p,n:()=>c});var n=t(54438),a=t(21326);const c=(h,v)=>(0,n.WQX)(a.N).getUoms(),p=(h,v)=>(0,n.WQX)(a.N).findActiveUoms()},17085:(B,D,t)=>{t.d(D,{Ns:()=>p});var n=t(59640);const a=h=>h.uoms,p=((0,n.Mz)(a,h=>h.uom),(0,n.Mz)(a,h=>h.uoms))},21326:(B,D,t)=>{t.d(D,{N:()=>o});var n=t(54438),a=t(73512),c=t(96697),p=t(25558),h=t(88141),v=t(59640),P=t(44e3),i=t(98216),y=t(17085);const m=a.J1`
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
`,E=a.J1`
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
`,M=a.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateUomStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,T=a.J1`
    mutation RemoveUom($removeUomId: String!) {
        removeUom(id: $removeUomId) {
            ok
            message
        }
    }
`,C=a.J1`
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
`,O=a.J1`
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
`,W=a.J1`
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
`;let o=(()=>{class s{constructor(){this.apolloProvider=(0,n.WQX)(a.Ic),this.store=(0,n.WQX)(v.il),this._apollo=this.apolloProvider.use("BALANC")}createUom(e){return this.store.select(y.Ns).pipe((0,c.s)(1),(0,p.n)(d=>this._apollo.mutate({mutation:m,variables:{createUomInput:e},errorPolicy:"all"}).pipe((0,h.M)(({data:r})=>{const g=structuredClone(d);g.push(r.createUom.uom),this.store.dispatch((0,P.JR)({uoms:g}))}))))}getUoms(e=1,d=20,r="code",g="asc",_=""){return this._apollo.query({query:C,errorPolicy:"all",variables:{offset:d*(e-1),limit:d,sort:r,order:g,search:_}}).pipe((0,h.M)(({data:A})=>{this.store.dispatch((0,i.Bp)({pagination:A.findAllUoms.pagination})),this.store.dispatch((0,P.JR)({uoms:A.findAllUoms.uoms}))}))}findActiveUoms(e="",d=10){return this._apollo.query({query:O,variables:{search:e,size:d},errorPolicy:"all"}).pipe((0,h.M)(({data:r})=>{this.store.dispatch((0,P.JR)({uoms:r.findActiveUoms.uoms}))}))}getUomById(e){return this._apollo.query({query:W,variables:{findUomByIdId:e},errorPolicy:"all"}).pipe((0,h.M)(({data:d})=>{this.store.dispatch((0,P.qV)({uom:d.findUomById.uom}))}))}updateUom(e){return this.store.select(y.Ns).pipe((0,c.s)(1),(0,p.n)(d=>this._apollo.mutate({mutation:E,variables:{updateUomInput:e},errorPolicy:"all"}).pipe((0,h.M)(({data:r})=>{const g=structuredClone(d);g[d.findIndex(A=>A.id===e.id)]=r.updateUom.uom,this.store.dispatch((0,P.JR)({uoms:g}))}))))}updateUomStatus(e){return this.store.select(y.Ns).pipe((0,c.s)(1),(0,p.n)(d=>this._apollo.mutate({mutation:M,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,h.M)(({})=>{const g=structuredClone(d);g[d.findIndex(A=>A.id===e.id)].active=e.active,this.store.dispatch((0,P.JR)({uoms:g}))}))))}removeUom(e){return this.store.select(y.Ns).pipe((0,c.s)(1),(0,p.n)(d=>this._apollo.mutate({mutation:T,variables:{removeUomId:e},errorPolicy:"all"}).pipe((0,h.M)(({errors:r})=>{if(r)return;const g=structuredClone(d),_=d.findIndex(A=>A.id===e);g.splice(_,1),this.store.dispatch((0,P.JR)({uoms:g}))}))))}static#t=this.\u0275fac=function(d){return new(d||s)};static#e=this.\u0275prov=n.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},16551:(B,D,t)=>{t.d(D,{Jq:()=>h,MQ:()=>p,be:()=>P,oi:()=>v,ug:()=>c});var n=t(54438),a=t(69599);const c=(i,y)=>(0,n.WQX)(a.t).getDepots(),p=(i,y)=>(0,n.WQX)(a.t).findActiveDepots(),h=(i,y)=>(0,n.WQX)(a.t).findActiveAndRealDepots(),v=(i,y)=>(0,n.WQX)(a.t).findDepotsForIncomes(),P=(i,y)=>{const m=i.params.periodId;return m?(0,n.WQX)(a.t).findDepotByPeriodId(m):null}},53159:(B,D,t)=>{t.d(D,{c_:()=>p,dY:()=>c});var n=t(59640);const a=v=>v.depots,c=(0,n.Mz)(a,v=>v.depot),p=(0,n.Mz)(a,v=>v.depots);(0,n.Mz)(a,v=>v.ownDepots)},69599:(B,D,t)=>{t.d(D,{t:()=>g});var n=t(96697),a=t(25558),c=t(88141),p=t(96354),h=t(98216),v=t(53159),P=t(26782),i=t(73512);const y=i.J1`
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
`,m=i.J1`
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
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,E=i.J1`
    query FindActiveDepots($search: String!, $size: Int!) {
    findActiveDepots(search: $search, size: $size) {
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
`,M=i.J1`
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
`,T=i.J1`
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
`,C=i.J1`
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
`,O=i.J1`
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
`,W=i.J1`
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
`,o=i.J1`
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
`,s=i.J1`
    mutation RemoveDepot($removeDepotId: String!) {
        removeDepot(id: $removeDepotId) {
            ok
            message
        }
    }
`,l=i.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateDepotStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var e=t(54438),d=t(95416),r=t(59640);let g=(()=>{class _{constructor(u,I,f){this.apolloProvider=u,this._snackBar=I,this.store=f,this._apollo=this.apolloProvider.use("BALANC")}createDepot(u){return this.store.select(v.c_).pipe((0,n.s)(1),(0,a.n)(I=>this._apollo.mutate({mutation:W,variables:{createDepotInput:u},errorPolicy:"all"}).pipe((0,c.M)(({data:f})=>{const U=structuredClone(I);U.push(f.createDepot.depot),this.store.dispatch((0,P.IX)({depots:U}))}))))}getDepots(u=0,I=50,f="code",U="asc",S=""){return this._apollo.query({query:m,errorPolicy:"all",variables:{page:u,size:I,sort:f,order:U,search:S}}).pipe((0,c.M)(({data:R})=>{this.store.dispatch((0,P.IX)({depots:R.findAllDepots.depots})),this.store.dispatch((0,h.Bp)({pagination:R.findAllDepots.pagination}))}))}getDepotsByManager(){return this._apollo.query({query:y,errorPolicy:"all"}).pipe((0,c.M)(({data:u})=>{this.store.dispatch((0,P.Gv)({ownDepots:u.findDepotsByManager.depots}))}))}findActiveDepots(u="",I=50){return this._apollo.query({query:E,variables:{search:u,size:I},errorPolicy:"all"}).pipe((0,p.T)(({data:f})=>(this.store.dispatch((0,P.IX)({depots:f.findActiveDepots})),f.findActiveDepots)))}findActiveAndRealDepots(){return this._apollo.query({query:M,errorPolicy:"all"}).pipe((0,c.M)(({data:u})=>{this.store.dispatch((0,P.IX)({depots:u.findActiveAndRealDepots.depots}))}))}findDepotsForIncomes(){return this._apollo.query({query:T,errorPolicy:"all"}).pipe((0,c.M)(({data:u})=>{this.store.dispatch((0,P.IX)({depots:u.findDepotsForIncomes.depots}))}))}findDepotByPeriodId(u){return this._apollo.query({query:C,errorPolicy:"all",variables:{periodId:u}}).pipe((0,c.M)(({data:I})=>{this.store.dispatch((0,P.VJ)({depot:I.findDepotByPeriodId.depot}))}))}getDepotById(u){return this._apollo.query({query:O,variables:{findDepotByIdId:u},errorPolicy:"all"}).pipe((0,c.M)(({data:I})=>{this.store.dispatch((0,P.VJ)({depot:I.createDepot.depot}))}))}updateDepot(u){return this.store.select(v.c_).pipe((0,n.s)(1),(0,a.n)(I=>this._apollo.mutate({mutation:o,variables:{updateDepotInput:u},errorPolicy:"all"}).pipe((0,c.M)(({data:f})=>{const U=structuredClone(I);U[I.findIndex(R=>R.id===u.id)]=f.updateDepot.depot,this.store.dispatch((0,P.IX)({depots:U}))}))))}updateDepotStatus(u){return this.store.select(v.c_).pipe((0,n.s)(1),(0,a.n)(I=>this._apollo.mutate({mutation:l,variables:{updateEntityStatusInput:u},errorPolicy:"all"}).pipe((0,c.M)(({})=>{const U=structuredClone(I);U[I.findIndex(R=>R.id===u.id)].active=u.active,this.store.dispatch((0,P.IX)({depots:U}))}))))}removeDepot(u){return this.store.select(v.c_).pipe((0,n.s)(1),(0,a.n)(I=>this._apollo.mutate({mutation:s,variables:{removeDepotId:u},errorPolicy:"all"}).pipe((0,c.M)(({})=>{const U=structuredClone(I),S=I.findIndex(R=>R.id===u);U.splice(S,1)}))))}static#t=this.\u0275fac=function(I){return new(I||_)(e.KVO(i.Ic),e.KVO(d.UG),e.KVO(r.il))};static#e=this.\u0275prov=e.jDH({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},43801:(B,D,t)=>{t.d(D,{Bj:()=>h,N4:()=>y,Tn:()=>i,bN:()=>v,eX:()=>p});var n=t(54438),a=t(36296),c=t(4840);const p=(E,M)=>{const T=E.params.productId;return T&&"new"!==T?(0,n.WQX)(a.g).getProductById(T):{}},h=(E,M)=>(0,n.WQX)(a.g).getProducts(),v=(E,M)=>(0,n.WQX)(a.g).findActiveProducts(),i=(E,M)=>(0,n.WQX)(a.g).findIngredients(),y=(E,M)=>(0,n.WQX)(c.t).getProductsInStockAvailable()},36296:(B,D,t)=>{t.d(D,{g:()=>C});var n=t(33446),a=t(96697),c=t(25558),p=t(88141),h=t(96354),v=t(62288),P=t(98216),i=t(39928),y=t(13189),m=t(84342),E=t(54438),M=t(73512),T=t(59640);let C=(()=>{class O{constructor(o,s){this.apolloProvider=o,this.store=s,this._apollo=this.apolloProvider.use("BALANC")}createProduct(o){return this.store.select(y.VW).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:m.xq,variables:{createProductInput:o},errorPolicy:"all"}).pipe((0,p.M)(({data:l})=>{const e=(0,n.A)(s);e.push(l.createProduct.product),this.store.dispatch((0,i.d9)({products:e}))}))))}importProductsFromTemplateFile(o,s){return this._apollo.mutate({mutation:m.YV,variables:{importProductsTemplateFileInput:{products:o,depotId:s}},errorPolicy:"all"}).pipe((0,p.M)(({data:l})=>{this.store.dispatch((0,i.d9)({products:l.importProductsFromTemplateFile.products})),this.store.dispatch((0,P.Bp)({pagination:l.importProductsFromTemplateFile.pagination}))}))}getProducts(o=0,s=50,l="name",e="asc",d=""){return this._apollo.query({query:m.oH,errorPolicy:"all",variables:{page:o,size:s,sort:l,order:e,search:d}}).pipe((0,p.M)(({data:r})=>{this.store.dispatch((0,i.d9)({products:r.findAllProducts.products})),this.store.dispatch((0,P.Bp)({pagination:r.findAllProducts.pagination}))}))}findProductsToList(){return this._apollo.query({query:m.pg,errorPolicy:"all"}).pipe((0,p.M)(({data:o})=>{this.store.dispatch((0,i.d9)({products:o.findProductsToList.products}))}))}findIngredients(){return this._apollo.query({query:m.Cm,errorPolicy:"all"}).pipe((0,p.M)(({data:o})=>{this.store.dispatch((0,i.d9)({products:o.findIngredients.products}))}))}getProductsByMerchant(o=1,s=50,l="name",e="asc",d=""){return this._apollo.query({query:m.zb,errorPolicy:"all",variables:{offset:s*(o-1),limit:s,sort:l,order:e,search:d}}).pipe((0,p.M)(({data:r})=>{this.store.dispatch((0,i.d9)({products:r.findAllProductsByMerchant.products})),this.store.dispatch((0,P.Bp)({pagination:r.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:m.r,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}findActiveProducts(o="",s=10){return this._apollo.query({query:m.LS,variables:{search:o,size:s},errorPolicy:"all"}).pipe((0,h.T)(({data:l})=>l?l.findActiveProducts:[]),(0,p.M)(l=>{l&&this.store.dispatch((0,i.d9)({products:l}))}))}findProductsByUpcS(o=[]){return this._apollo.query({query:m.hE,variables:{upcS:o},errorPolicy:"all"}).pipe((0,h.T)(({data:s})=>s?s.findProductsByUpcS:[]))}getProductsInactive(){return this._apollo.query({query:m.Ax,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}getProductsExhausted(){return this._apollo.query({query:m.mU,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}getProductById(o){return this._apollo.query({query:m.De,variables:{productId:o},errorPolicy:"all"}).pipe((0,p.M)(({data:s})=>{this.store.dispatch((0,i.yz)({product:s.findProductById.product}))}))}updateProduct(o){return this.store.select(y.VW).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:m.q,variables:{updateProductInput:o},errorPolicy:"all"}).pipe((0,p.M)(({data:l})=>{const e=(0,n.A)(s);e[s.findIndex(r=>r.id===o.id)]=l.updateProduct.product,this.store.dispatch((0,i.d9)({products:e})),this.store.dispatch((0,i.yz)({product:l.updateProduct.product}))}))))}updateProductStatus(o){return this.store.select(y.VW).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:m.bM,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,p.M)(({data:l})=>{if(l){const e=(0,n.A)(s);e[s.findIndex(r=>r.id===o.id)].active=o.active,this.store.dispatch((0,i.d9)({products:e}))}}))))}updateProductImages(o,s,l){return this._apollo.mutate({mutation:m.B9,variables:{updateProductById:o,thumbnail:s,images:l},errorPolicy:"all"}).pipe((0,h.T)(({data:e})=>e?e.updateProductImages:null),(0,p.M)(e=>{e&&this.store.dispatch((0,i.NM)({id:e.product.id,thumbnail:e.product.thumbnail,images:e.product.images}))}))}removeProduct(o){return this.store.select(y.VW).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:m.Fu,variables:{removeProductId:o},errorPolicy:"all"}).pipe((0,p.M)(({errors:l})=>{if(l)return;const e=(0,n.A)(s),d=s.findIndex(r=>r.id===o);e.splice(d,1),this.store.dispatch((0,i.d9)({products:e}))}))))}getTags(o=1,s=50,l="name",e="asc",d=""){return this._apollo.query({query:m.J,errorPolicy:"all",variables:{offset:s*(o-1),limit:s,sort:l,order:e,search:d}}).pipe((0,p.M)(({data:r})=>{this.store.dispatch((0,i.Wt)({tags:r.findAllTags.tags}))}))}createTag(o){return this.store.select(y.O).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:m.Op,variables:{createTagInput:o},errorPolicy:"all"}).pipe((0,p.M)(({data:l})=>{const e=(0,n.A)(s);e.push(l.createTag.tag),this.store.dispatch((0,i.Wt)({tags:e}))}))))}updateTag(o){return this.store.select(y.O).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:m.zk,variables:{updateTagInput:o},errorPolicy:"all"}).pipe((0,p.M)(({data:l})=>{const e=(0,n.A)(s);e[s.findIndex(r=>r.id===o.id)]=l.updateTag.tag,this.store.dispatch((0,i.Wt)({tags:e}))}))))}deleteTag(o){return this.store.select(y.O).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:m.GR,variables:{removeTagId:o},errorPolicy:"all"}).pipe((0,p.M)(()=>{const l=(0,n.A)(s),e=s.findIndex(d=>d.id===o);l.splice(e,1),this.store.dispatch((0,i.Wt)({tags:l}))}))))}getProductsAvailable(){return this._apollo.query({query:m.my,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}importStockFormTemplateFile(o){let s;function l(r){return{upc:r.UPC?r.UPC.toString():null,sku:r.SKU?r.SKU.toString():null,bCode:r.C\u00f3digo?r.C\u00f3digo.toString():null,name:r.Nombre,description:r.Descripci\u00f3n,uom:r["Unidad de Medida"],quantity:r.Cantidad,cost:r.Costo,price:r.Precio,brand:r.Marca,weight:r.Peso,width:r.Ancho,length:r.Largo,height:r.Altura,volume:r.Volumen}}const e=o.target,d=new FileReader;d.onload=r=>{const _=v.LF(r.target.result,{type:"binary"});s=v.Wp.sheet_to_json(_.Sheets[_.SheetNames[0]]);const I=s.map(l);this.store.dispatch((0,i.GQ)({products:I}))},d.readAsBinaryString(e.files[0])}static#t=this.\u0275fac=function(s){return new(s||O)(E.KVO(M.Ic),E.KVO(T.il))};static#e=this.\u0275prov=E.jDH({token:O,factory:O.\u0275fac,providedIn:"root"})}return O})()},33446:(B,D,t)=>{t.d(D,{A:()=>h});var n=t(99531);const h=function p(v){return(0,n.A)(v,5)}}}]);