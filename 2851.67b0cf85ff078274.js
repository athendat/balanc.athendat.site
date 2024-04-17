"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2851],{63425:(B,g,t)=>{t.d(g,{B:()=>d,n:()=>c});var n=t(54438),a=t(21326);const c=(h,P)=>(0,n.WQX)(a.N).getUoms(),d=(h,P)=>(0,n.WQX)(a.N).findActiveUoms()},17085:(B,g,t)=>{t.d(g,{Ns:()=>d});var n=t(59640);const a=h=>h.uoms,d=((0,n.Mz)(a,h=>h.uom),(0,n.Mz)(a,h=>h.uoms))},21326:(B,g,t)=>{t.d(g,{N:()=>o});var n=t(54438),a=t(73512),c=t(96697),d=t(25558),h=t(88141),P=t(59640),v=t(44e3),p=t(98216),y=t(17085);const u=a.J1`
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
`,I=a.J1`
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
`,f=a.J1`
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
`;let o=(()=>{class s{constructor(){this.apolloProvider=(0,n.WQX)(a.Ic),this.store=(0,n.WQX)(P.il),this._apollo=this.apolloProvider.use("BALANC")}createUom(e){return this.store.select(y.Ns).pipe((0,c.s)(1),(0,d.n)(i=>this._apollo.mutate({mutation:u,variables:{createUomInput:e},errorPolicy:"all"}).pipe((0,h.M)(({data:r})=>{const _=structuredClone(i);_.push(r.createUom.uom),this.store.dispatch((0,v.JR)({uoms:_}))}))))}getUoms(e=1,i=20,r="code",_="asc",M=""){return this._apollo.query({query:C,errorPolicy:"all",variables:{offset:i*(e-1),limit:i,sort:r,order:_,search:M}}).pipe((0,h.M)(({data:E})=>{this.store.dispatch((0,p.Bp)({pagination:E.findAllUoms.pagination})),this.store.dispatch((0,v.JR)({uoms:E.findAllUoms.uoms}))}))}findActiveUoms(e="",i=10){return this._apollo.query({query:O,variables:{search:e,size:i},errorPolicy:"all"}).pipe((0,h.M)(({data:r})=>{this.store.dispatch((0,v.JR)({uoms:r.findActiveUoms.uoms}))}))}getUomById(e){return this._apollo.query({query:W,variables:{findUomByIdId:e},errorPolicy:"all"}).pipe((0,h.M)(({data:i})=>{this.store.dispatch((0,v.qV)({uom:i.findUomById.uom}))}))}updateUom(e){return this.store.select(y.Ns).pipe((0,c.s)(1),(0,d.n)(i=>this._apollo.mutate({mutation:I,variables:{updateUomInput:e},errorPolicy:"all"}).pipe((0,h.M)(({data:r})=>{const _=structuredClone(i);_[i.findIndex(E=>E.id===e.id)]=r.updateUom.uom,this.store.dispatch((0,v.JR)({uoms:_}))}))))}updateUomStatus(e){return this.store.select(y.Ns).pipe((0,c.s)(1),(0,d.n)(i=>this._apollo.mutate({mutation:f,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,h.M)(({})=>{const _=structuredClone(i);_[i.findIndex(E=>E.id===e.id)].active=e.active,this.store.dispatch((0,v.JR)({uoms:_}))}))))}removeUom(e){return this.store.select(y.Ns).pipe((0,c.s)(1),(0,d.n)(i=>this._apollo.mutate({mutation:T,variables:{removeUomId:e},errorPolicy:"all"}).pipe((0,h.M)(({errors:r})=>{if(r)return;const _=structuredClone(i),M=i.findIndex(E=>E.id===e);_.splice(M,1),this.store.dispatch((0,v.JR)({uoms:_}))}))))}static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275prov=n.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},16551:(B,g,t)=>{t.d(g,{Jq:()=>h,MQ:()=>d,nn:()=>v,oi:()=>P,ug:()=>c});var n=t(54438),a=t(69599);const c=(y,u)=>(0,n.WQX)(a.t).getDepots(),d=(y,u)=>(0,n.WQX)(a.t).findActiveDepots(),h=(y,u)=>(0,n.WQX)(a.t).findActiveAndRealDepots(),P=(y,u)=>(0,n.WQX)(a.t).findDepotsForIncomes(),v=(y,u)=>(0,n.WQX)(a.t).findDepotsForAdmin()},53159:(B,g,t)=>{t.d(g,{c_:()=>d,dY:()=>c});var n=t(59640);const a=P=>P.depots,c=(0,n.Mz)(a,P=>P.depot),d=(0,n.Mz)(a,P=>P.depots);(0,n.Mz)(a,P=>P.ownDepots)},69599:(B,g,t)=>{t.d(g,{t:()=>M});var n=t(96697),a=t(25558),c=t(88141),d=t(96354),h=t(98216),P=t(53159),v=t(26782),p=t(73512);const y=p.J1`
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
`,u=p.J1`
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
`,I=p.J1`
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
`,f=p.J1`
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
`,T=p.J1`
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
`,C=p.J1`
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
`,O=p.J1`
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
`,W=p.J1`
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
`,o=p.J1`
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
`,s=p.J1`
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
`,l=p.J1`
    mutation RemoveDepot($removeDepotId: String!) {
        removeDepot(id: $removeDepotId) {
            ok
            message
        }
    }
`,e=p.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateDepotStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var i=t(54438),r=t(95416),_=t(59640);let M=(()=>{class E{constructor(m,D,A){this.apolloProvider=m,this._snackBar=D,this.store=A,this._apollo=this.apolloProvider.use("BALANC")}createDepot(m){return this.store.select(P.c_).pipe((0,n.s)(1),(0,a.n)(D=>this._apollo.mutate({mutation:o,variables:{createDepotInput:m},errorPolicy:"all"}).pipe((0,c.M)(({data:A})=>{const U=structuredClone(D);U.push(A.createDepot.depot),this.store.dispatch((0,v.IX)({depots:U}))}))))}getDepots(m=0,D=50,A="code",U="asc",S=""){return this._apollo.query({query:u,errorPolicy:"all",variables:{page:m,size:D,sort:A,order:U,search:S}}).pipe((0,c.M)(({data:R})=>{this.store.dispatch((0,v.IX)({depots:R.findAllDepots.depots})),this.store.dispatch((0,h.Bp)({pagination:R.findAllDepots.pagination}))}))}getDepotsByManager(){return this._apollo.query({query:y,errorPolicy:"all"}).pipe((0,c.M)(({data:m})=>{this.store.dispatch((0,v.Gv)({ownDepots:m.findDepotsByManager.depots}))}))}findActiveDepots(m="",D=50){return this._apollo.query({query:I,variables:{search:m,size:D},errorPolicy:"all"}).pipe((0,d.T)(({data:A})=>(this.store.dispatch((0,v.IX)({depots:A.findActiveDepots})),A.findActiveDepots)))}findActiveAndRealDepots(){return this._apollo.query({query:f,errorPolicy:"all"}).pipe((0,c.M)(({data:m})=>{this.store.dispatch((0,v.IX)({depots:m.findActiveAndRealDepots.depots}))}))}findDepotsForIncomes(){return this._apollo.query({query:T,errorPolicy:"all"}).pipe((0,c.M)(({data:m})=>{this.store.dispatch((0,v.IX)({depots:m.findDepotsForIncomes.depots}))}))}findDepotsForAdmin(){return this._apollo.query({query:C,errorPolicy:"all"}).pipe((0,c.M)(({data:m})=>{this.store.dispatch((0,v.IX)({depots:m.findDepotsForAdmin.depots}))}))}findDepotByPeriodId(m){return this._apollo.query({query:O,errorPolicy:"all",variables:{periodId:m}}).pipe((0,c.M)(({data:D})=>{this.store.dispatch((0,v.VJ)({depot:D.findDepotByPeriodId.depot}))}))}getDepotById(m){return this._apollo.query({query:W,variables:{findDepotByIdId:m},errorPolicy:"all"}).pipe((0,c.M)(({data:D})=>{this.store.dispatch((0,v.VJ)({depot:D.createDepot.depot}))}))}updateDepot(m){return this.store.select(P.c_).pipe((0,n.s)(1),(0,a.n)(D=>this._apollo.mutate({mutation:s,variables:{updateDepotInput:m},errorPolicy:"all"}).pipe((0,c.M)(({data:A})=>{const U=structuredClone(D);U[D.findIndex(R=>R.id===m.id)]=A.updateDepot.depot,this.store.dispatch((0,v.IX)({depots:U}))}))))}updateDepotStatus(m){return this.store.select(P.c_).pipe((0,n.s)(1),(0,a.n)(D=>this._apollo.mutate({mutation:e,variables:{updateEntityStatusInput:m},errorPolicy:"all"}).pipe((0,c.M)(({})=>{const U=structuredClone(D);U[D.findIndex(R=>R.id===m.id)].active=m.active,this.store.dispatch((0,v.IX)({depots:U}))}))))}removeDepot(m){return this.store.select(P.c_).pipe((0,n.s)(1),(0,a.n)(D=>this._apollo.mutate({mutation:l,variables:{removeDepotId:m},errorPolicy:"all"}).pipe((0,c.M)(({})=>{const U=structuredClone(D),S=D.findIndex(R=>R.id===m);U.splice(S,1)}))))}static#t=this.\u0275fac=function(D){return new(D||E)(i.KVO(p.Ic),i.KVO(r.UG),i.KVO(_.il))};static#e=this.\u0275prov=i.jDH({token:E,factory:E.\u0275fac,providedIn:"root"})}return E})()},43801:(B,g,t)=>{t.d(g,{Bj:()=>h,N4:()=>y,Tn:()=>p,bN:()=>P,eX:()=>d});var n=t(54438),a=t(36296),c=t(4840);const d=(I,f)=>{const T=I.params.productId;return T&&"new"!==T?(0,n.WQX)(a.g).getProductById(T):{}},h=(I,f)=>(0,n.WQX)(a.g).getProducts(),P=(I,f)=>(0,n.WQX)(a.g).findActiveProducts(),p=(I,f)=>(0,n.WQX)(a.g).findIngredients(),y=(I,f)=>(0,n.WQX)(c.t).getProductsInStockAvailable()},36296:(B,g,t)=>{t.d(g,{g:()=>C});var n=t(33446),a=t(96697),c=t(25558),d=t(88141),h=t(96354),P=t(62288),v=t(98216),p=t(39928),y=t(13189),u=t(84342),I=t(54438),f=t(73512),T=t(59640);let C=(()=>{class O{constructor(o,s){this.apolloProvider=o,this.store=s,this._apollo=this.apolloProvider.use("BALANC")}createProduct(o){return this.store.select(y.VW).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:u.xq,variables:{createProductInput:o},errorPolicy:"all"}).pipe((0,d.M)(({data:l})=>{const e=(0,n.A)(s);e.push(l.createProduct.product),this.store.dispatch((0,p.d9)({products:e}))}))))}importProductsFromTemplateFile(o,s){return this._apollo.mutate({mutation:u.YV,variables:{importProductsTemplateFileInput:{products:o,depotId:s}},errorPolicy:"all"}).pipe((0,d.M)(({data:l})=>{this.store.dispatch((0,p.d9)({products:l.importProductsFromTemplateFile.products})),this.store.dispatch((0,v.Bp)({pagination:l.importProductsFromTemplateFile.pagination}))}))}getProducts(o=0,s=50,l="name",e="asc",i=""){return this._apollo.query({query:u.oH,errorPolicy:"all",variables:{page:o,size:s,sort:l,order:e,search:i}}).pipe((0,d.M)(({data:r})=>{this.store.dispatch((0,p.d9)({products:r.findAllProducts.products})),this.store.dispatch((0,v.Bp)({pagination:r.findAllProducts.pagination}))}))}findProductsToList(){return this._apollo.query({query:u.pg,errorPolicy:"all"}).pipe((0,d.M)(({data:o})=>{this.store.dispatch((0,p.d9)({products:o.findProductsToList.products}))}))}findIngredients(){return this._apollo.query({query:u.Cm,errorPolicy:"all"}).pipe((0,d.M)(({data:o})=>{this.store.dispatch((0,p.d9)({products:o.findIngredients.products}))}))}getProductsByMerchant(o=1,s=50,l="name",e="asc",i=""){return this._apollo.query({query:u.zb,errorPolicy:"all",variables:{offset:s*(o-1),limit:s,sort:l,order:e,search:i}}).pipe((0,d.M)(({data:r})=>{this.store.dispatch((0,p.d9)({products:r.findAllProductsByMerchant.products})),this.store.dispatch((0,v.Bp)({pagination:r.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:u.r,errorPolicy:"all"}).pipe((0,d.M)(({})=>{}))}findActiveProducts(o="",s=10){return this._apollo.query({query:u.LS,variables:{search:o,size:s},errorPolicy:"all"}).pipe((0,h.T)(({data:l})=>l?l.findActiveProducts:[]),(0,d.M)(l=>{l&&this.store.dispatch((0,p.d9)({products:l}))}))}findProductsByUpcS(o=[]){return this._apollo.query({query:u.hE,variables:{upcS:o},errorPolicy:"all"}).pipe((0,h.T)(({data:s})=>s?s.findProductsByUpcS:[]))}getProductsInactive(){return this._apollo.query({query:u.Ax,errorPolicy:"all"}).pipe((0,d.M)(({})=>{}))}getProductsExhausted(){return this._apollo.query({query:u.mU,errorPolicy:"all"}).pipe((0,d.M)(({})=>{}))}getProductById(o){return this._apollo.query({query:u.De,variables:{productId:o},errorPolicy:"all"}).pipe((0,d.M)(({data:s})=>{this.store.dispatch((0,p.yz)({product:s.findProductById.product}))}))}updateProduct(o){return this.store.select(y.VW).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:u.q,variables:{updateProductInput:o},errorPolicy:"all"}).pipe((0,d.M)(({data:l})=>{const e=(0,n.A)(s);e[s.findIndex(r=>r.id===o.id)]=l.updateProduct.product,this.store.dispatch((0,p.d9)({products:e})),this.store.dispatch((0,p.yz)({product:l.updateProduct.product}))}))))}updateProductStatus(o){return this.store.select(y.VW).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:u.bM,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,d.M)(({data:l})=>{if(l){const e=(0,n.A)(s);e[s.findIndex(r=>r.id===o.id)].active=o.active,this.store.dispatch((0,p.d9)({products:e}))}}))))}updateProductImages(o,s,l){return this._apollo.mutate({mutation:u.B9,variables:{updateProductById:o,thumbnail:s,images:l},errorPolicy:"all"}).pipe((0,h.T)(({data:e})=>e?e.updateProductImages:null),(0,d.M)(e=>{e&&this.store.dispatch((0,p.NM)({id:e.product.id,thumbnail:e.product.thumbnail,images:e.product.images}))}))}removeProduct(o){return this.store.select(y.VW).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:u.Fu,variables:{removeProductId:o},errorPolicy:"all"}).pipe((0,d.M)(({data:l})=>{if(l){const e=(0,n.A)(s),i=s.findIndex(r=>r.id===o);e.splice(i,1),this.store.dispatch((0,p.d9)({products:e}))}}))))}getTags(o=1,s=50,l="name",e="asc",i=""){return this._apollo.query({query:u.J,errorPolicy:"all",variables:{offset:s*(o-1),limit:s,sort:l,order:e,search:i}}).pipe((0,d.M)(({data:r})=>{this.store.dispatch((0,p.Wt)({tags:r.findAllTags.tags}))}))}createTag(o){return this.store.select(y.O).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:u.Op,variables:{createTagInput:o},errorPolicy:"all"}).pipe((0,d.M)(({data:l})=>{const e=(0,n.A)(s);e.push(l.createTag.tag),this.store.dispatch((0,p.Wt)({tags:e}))}))))}updateTag(o){return this.store.select(y.O).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:u.zk,variables:{updateTagInput:o},errorPolicy:"all"}).pipe((0,d.M)(({data:l})=>{const e=(0,n.A)(s);e[s.findIndex(r=>r.id===o.id)]=l.updateTag.tag,this.store.dispatch((0,p.Wt)({tags:e}))}))))}deleteTag(o){return this.store.select(y.O).pipe((0,a.s)(1),(0,c.n)(s=>this._apollo.mutate({mutation:u.GR,variables:{removeTagId:o},errorPolicy:"all"}).pipe((0,d.M)(()=>{const l=(0,n.A)(s),e=s.findIndex(i=>i.id===o);l.splice(e,1),this.store.dispatch((0,p.Wt)({tags:l}))}))))}getProductsAvailable(){return this._apollo.query({query:u.my,errorPolicy:"all"}).pipe((0,d.M)(({})=>{}))}importStockFormTemplateFile(o){let s;function l(r){return{upc:r.UPC?r.UPC.toString():null,sku:r.SKU?r.SKU.toString():null,bCode:r.C\u00f3digo?r.C\u00f3digo.toString():null,name:r.Nombre,description:r.Descripci\u00f3n,uom:r["Unidad de Medida"],quantity:r.Cantidad,cost:r.Costo,price:r.Precio,brand:r.Marca,weight:r.Peso,width:r.Ancho,length:r.Largo,height:r.Altura,volume:r.Volumen}}const e=o.target,i=new FileReader;i.onload=r=>{const M=P.LF(r.target.result,{type:"binary"});s=P.Wp.sheet_to_json(M.Sheets[M.SheetNames[0]]);const m=s.map(l);this.store.dispatch((0,p.GQ)({products:m}))},i.readAsBinaryString(e.files[0])}static#t=this.\u0275fac=function(s){return new(s||O)(I.KVO(f.Ic),I.KVO(T.il))};static#e=this.\u0275prov=I.jDH({token:O,factory:O.\u0275fac,providedIn:"root"})}return O})()},33446:(B,g,t)=>{t.d(g,{A:()=>h});var n=t(99531);const h=function d(P){return(0,n.A)(P,5)}}}]);