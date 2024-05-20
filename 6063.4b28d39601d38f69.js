"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[6063],{63425:(b,M,e)=>{e.d(M,{B:()=>p,n:()=>u});var t=e(54438),s=e(21326);const u=(y,g)=>(0,t.WQX)(s.N).getUoms(),p=(y,g)=>(0,t.WQX)(s.N).findActiveUoms()},17085:(b,M,e)=>{e.d(M,{Ns:()=>p});var t=e(59640);const s=y=>y.uoms,p=((0,t.Mz)(s,y=>y.uom),(0,t.Mz)(s,y=>y.uoms))},21326:(b,M,e)=>{e.d(M,{N:()=>r});var t=e(54438),s=e(73512),u=e(96697),p=e(25558),y=e(88141),g=e(59640),v=e(44e3),m=e(98216),P=e(17085);const h=s.J1`
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
`,I=s.J1`
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
`,U=s.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateUomStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,B=s.J1`
    mutation RemoveUom($removeUomId: String!) {
        removeUom(id: $removeUomId) {
            ok
            message
        }
    }
`,S=s.J1`
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
`,R=s.J1`
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
`,x=s.J1`
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
`;let r=(()=>{class i{constructor(){this.apolloProvider=(0,t.WQX)(s.Ic),this.store=(0,t.WQX)(g.il),this._apollo=this.apolloProvider.use("BALANC")}createUom(o){return this.store.select(P.Ns).pipe((0,u.s)(1),(0,p.n)(c=>this._apollo.mutate({mutation:h,variables:{createUomInput:o},errorPolicy:"all"}).pipe((0,y.M)(({data:n})=>{const T=structuredClone(c);T.push(n.createUom.uom),this.store.dispatch((0,v.JR)({uoms:T}))}))))}getUoms(o=1,c=20,n="code",T="asc",O=""){return this._apollo.query({query:S,errorPolicy:"all",variables:{offset:c*(o-1),limit:c,sort:n,order:T,search:O}}).pipe((0,y.M)(({data:C})=>{this.store.dispatch((0,m.Bp)({pagination:C.findAllUoms.pagination})),this.store.dispatch((0,v.JR)({uoms:C.findAllUoms.uoms}))}))}findActiveUoms(o="",c=10){return this._apollo.query({query:R,variables:{search:o,size:c},errorPolicy:"all"}).pipe((0,y.M)(({data:n})=>{this.store.dispatch((0,v.JR)({uoms:n.findActiveUoms.uoms}))}))}getUomById(o){return this._apollo.query({query:x,variables:{findUomByIdId:o},errorPolicy:"all"}).pipe((0,y.M)(({data:c})=>{this.store.dispatch((0,v.qV)({uom:c.findUomById.uom}))}))}updateUom(o){return this.store.select(P.Ns).pipe((0,u.s)(1),(0,p.n)(c=>this._apollo.mutate({mutation:I,variables:{updateUomInput:o},errorPolicy:"all"}).pipe((0,y.M)(({data:n})=>{const T=structuredClone(c);T[c.findIndex(C=>C.id===o.id)]=n.updateUom.uom,this.store.dispatch((0,v.JR)({uoms:T}))}))))}updateUomStatus(o){return this.store.select(P.Ns).pipe((0,u.s)(1),(0,p.n)(c=>this._apollo.mutate({mutation:U,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,y.M)(({})=>{const T=structuredClone(c);T[c.findIndex(C=>C.id===o.id)].active=o.active,this.store.dispatch((0,v.JR)({uoms:T}))}))))}removeUom(o){return this.store.select(P.Ns).pipe((0,u.s)(1),(0,p.n)(c=>this._apollo.mutate({mutation:B,variables:{removeUomId:o},errorPolicy:"all"}).pipe((0,y.M)(({errors:n})=>{if(n)return;const T=structuredClone(c),O=c.findIndex(C=>C.id===o);T.splice(O,1),this.store.dispatch((0,v.JR)({uoms:T}))}))))}static#t=this.\u0275fac=function(c){return new(c||i)};static#e=this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},16551:(b,M,e)=>{e.d(M,{Jq:()=>y,MQ:()=>p,nn:()=>v,oi:()=>g,ug:()=>u});var t=e(54438),s=e(69599);const u=(P,h)=>(0,t.WQX)(s.t).getDepots(),p=(P,h)=>(0,t.WQX)(s.t).findActiveDepots(),y=(P,h)=>(0,t.WQX)(s.t).findActiveAndRealDepots(),g=(P,h)=>(0,t.WQX)(s.t).findDepotsForIncomes(),v=(P,h)=>(0,t.WQX)(s.t).findDepotsForAdmin()},53159:(b,M,e)=>{e.d(M,{c_:()=>p,dY:()=>u});var t=e(59640);const s=g=>g.depots,u=(0,t.Mz)(s,g=>g.depot),p=(0,t.Mz)(s,g=>g.depots);(0,t.Mz)(s,g=>g.ownDepots)},69599:(b,M,e)=>{e.d(M,{t:()=>O});var t=e(96697),s=e(25558),u=e(88141),p=e(96354),y=e(98216),g=e(53159),v=e(26782),m=e(73512);const P=m.J1`
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
`,h=m.J1`
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
`,I=m.J1`
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
`,U=m.J1`
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
`,B=m.J1`
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
`,S=m.J1`
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
`,R=m.J1`
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
`,x=m.J1`
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
`,r=m.J1`
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
`,i=m.J1`
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
`,_=m.J1`
    mutation RemoveDepot($removeDepotId: String!) {
        removeDepot(id: $removeDepotId) {
            ok
            message
        }
    }
`,o=m.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateDepotStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var c=e(54438),n=e(95416),T=e(59640);let O=(()=>{class C{constructor(f,E,l){this.apolloProvider=f,this._snackBar=E,this.store=l,this._apollo=this.apolloProvider.use("BALANC")}createDepot(f){return this.store.select(g.c_).pipe((0,t.s)(1),(0,s.n)(E=>this._apollo.mutate({mutation:r,variables:{createDepotInput:f},errorPolicy:"all"}).pipe((0,u.M)(({data:l})=>{const D=structuredClone(E);D.push(l.createDepot.depot),this.store.dispatch((0,v.IX)({depots:D}))}))))}getDepots(f=0,E=50,l="code",D="asc",a=""){return this._apollo.query({query:h,errorPolicy:"all",variables:{page:f,size:E,sort:l,order:D,search:a}}).pipe((0,u.M)(({data:d})=>{this.store.dispatch((0,v.IX)({depots:d.findAllDepots.depots})),this.store.dispatch((0,y.Bp)({pagination:d.findAllDepots.pagination}))}))}getDepotsByManager(){return this._apollo.query({query:P,errorPolicy:"all"}).pipe((0,u.M)(({data:f})=>{this.store.dispatch((0,v.Gv)({ownDepots:f.findDepotsByManager.depots}))}))}findActiveDepots(f="",E=50){return this._apollo.query({query:I,variables:{search:f,size:E},errorPolicy:"all"}).pipe((0,p.T)(({data:l})=>(this.store.dispatch((0,v.IX)({depots:l.findActiveDepots})),l.findActiveDepots)))}findActiveAndRealDepots(){return this._apollo.query({query:U,errorPolicy:"all"}).pipe((0,u.M)(({data:f})=>{this.store.dispatch((0,v.IX)({depots:f.findActiveAndRealDepots.depots}))}))}findDepotsForIncomes(){return this._apollo.query({query:B,errorPolicy:"all"}).pipe((0,u.M)(({data:f})=>{this.store.dispatch((0,v.IX)({depots:f.findDepotsForIncomes.depots}))}))}findDepotsForAdmin(){return this._apollo.query({query:S,errorPolicy:"all"}).pipe((0,u.M)(({data:f})=>{this.store.dispatch((0,v.IX)({depots:f.findDepotsForAdmin.depots}))}))}findDepotByPeriodId(f){return this._apollo.query({query:R,errorPolicy:"all",variables:{periodId:f}}).pipe((0,u.M)(({data:E})=>{this.store.dispatch((0,v.VJ)({depot:E.findDepotByPeriodId.depot}))}))}getDepotById(f){return this._apollo.query({query:x,variables:{findDepotByIdId:f},errorPolicy:"all"}).pipe((0,u.M)(({data:E})=>{this.store.dispatch((0,v.VJ)({depot:E.createDepot.depot}))}))}updateDepot(f){return this.store.select(g.c_).pipe((0,t.s)(1),(0,s.n)(E=>this._apollo.mutate({mutation:i,variables:{updateDepotInput:f},errorPolicy:"all"}).pipe((0,u.M)(({data:l})=>{const D=structuredClone(E);D[E.findIndex(d=>d.id===f.id)]=l.updateDepot.depot,this.store.dispatch((0,v.IX)({depots:D}))}))))}updateDepotStatus(f){return this.store.select(g.c_).pipe((0,t.s)(1),(0,s.n)(E=>this._apollo.mutate({mutation:o,variables:{updateEntityStatusInput:f},errorPolicy:"all"}).pipe((0,u.M)(({})=>{const D=structuredClone(E);D[E.findIndex(d=>d.id===f.id)].active=f.active,this.store.dispatch((0,v.IX)({depots:D}))}))))}removeDepot(f){return this.store.select(g.c_).pipe((0,t.s)(1),(0,s.n)(E=>this._apollo.mutate({mutation:_,variables:{removeDepotId:f},errorPolicy:"all"}).pipe((0,u.M)(({data:l})=>{if(l){const D=structuredClone(E),a=E.findIndex(d=>d.id===f);D.splice(a,1),this.store.dispatch((0,v.IX)({depots:D}))}}))))}static#t=this.\u0275fac=function(E){return new(E||C)(c.KVO(m.Ic),c.KVO(n.UG),c.KVO(T.il))};static#e=this.\u0275prov=c.jDH({token:C,factory:C.\u0275fac,providedIn:"root"})}return C})()},43801:(b,M,e)=>{e.d(M,{Bj:()=>y,N4:()=>P,Tn:()=>m,bN:()=>g,eX:()=>p});var t=e(54438),s=e(36296),u=e(4840);const p=(I,U)=>{const B=I.params.productId;return B&&"new"!==B?(0,t.WQX)(s.g).getProductById(B):{}},y=(I,U)=>(0,t.WQX)(s.g).getProducts(),g=(I,U)=>(0,t.WQX)(s.g).findActiveProducts(),m=(I,U)=>(0,t.WQX)(s.g).findIngredients(),P=(I,U)=>(0,t.WQX)(u.t).getProductsInStockAvailable()},36296:(b,M,e)=>{e.d(M,{g:()=>S});var t=e(33446),s=e(96697),u=e(25558),p=e(88141),y=e(96354),g=e(62288),v=e(98216),m=e(39928),P=e(13189),h=e(84342),I=e(54438),U=e(73512),B=e(59640);let S=(()=>{class R{constructor(r,i){this.apolloProvider=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createProduct(r){return this.store.select(P.VW).pipe((0,s.s)(1),(0,u.n)(i=>this._apollo.mutate({mutation:h.xq,variables:{createProductInput:r},errorPolicy:"all"}).pipe((0,p.M)(({data:_})=>{const o=(0,t.A)(i);o.push(_.createProduct.product),this.store.dispatch((0,m.d9)({products:o}))}))))}importProductsFromTemplateFile(r,i){return this._apollo.mutate({mutation:h.YV,variables:{importProductsTemplateFileInput:{products:r,depotId:i}},errorPolicy:"all"}).pipe((0,p.M)(({data:_})=>{this.store.dispatch((0,m.d9)({products:_.importProductsFromTemplateFile.products})),this.store.dispatch((0,v.Bp)({pagination:_.importProductsFromTemplateFile.pagination}))}))}getProducts(r=0,i=50,_="name",o="asc",c=""){return this._apollo.query({query:h.oH,errorPolicy:"all",variables:{page:r,size:i,sort:_,order:o,search:c}}).pipe((0,p.M)(({data:n})=>{this.store.dispatch((0,m.d9)({products:n.findAllProducts.products})),this.store.dispatch((0,v.Bp)({pagination:n.findAllProducts.pagination}))}))}findProductsToList(){return this._apollo.query({query:h.pg,errorPolicy:"all"}).pipe((0,p.M)(({data:r})=>{this.store.dispatch((0,m.d9)({products:r.findProductsToList.products}))}))}findIngredients(){return this._apollo.query({query:h.Cm,errorPolicy:"all"}).pipe((0,p.M)(({data:r})=>{this.store.dispatch((0,m.d9)({products:r.findIngredients.products}))}))}getProductsByMerchant(r=1,i=50,_="name",o="asc",c=""){return this._apollo.query({query:h.zb,errorPolicy:"all",variables:{offset:i*(r-1),limit:i,sort:_,order:o,search:c}}).pipe((0,p.M)(({data:n})=>{this.store.dispatch((0,m.d9)({products:n.findAllProductsByMerchant.products})),this.store.dispatch((0,v.Bp)({pagination:n.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:h.r,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}findActiveProducts(r="",i=10){return this._apollo.query({query:h.LS,variables:{search:r,size:i},errorPolicy:"all"}).pipe((0,y.T)(({data:_})=>_?_.findActiveProducts:[]),(0,p.M)(_=>{_&&this.store.dispatch((0,m.d9)({products:_}))}))}findProductsByUpcS(r=[]){return this._apollo.query({query:h.hE,variables:{upcS:r},errorPolicy:"all"}).pipe((0,y.T)(({data:i})=>i?i.findProductsByUpcS:[]))}getProductsInactive(){return this._apollo.query({query:h.Ax,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}getProductsExhausted(){return this._apollo.query({query:h.mU,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}getProductById(r){return this._apollo.query({query:h.De,variables:{productId:r},errorPolicy:"all"}).pipe((0,p.M)(({data:i})=>{this.store.dispatch((0,m.yz)({product:i.findProductById.product}))}))}updateProduct(r){return this.store.select(P.VW).pipe((0,s.s)(1),(0,u.n)(i=>this._apollo.mutate({mutation:h.q,variables:{updateProductInput:r},errorPolicy:"all"}).pipe((0,p.M)(({data:_})=>{const o=(0,t.A)(i);o[i.findIndex(n=>n.id===r.id)]=_.updateProduct.product,this.store.dispatch((0,m.d9)({products:o})),this.store.dispatch((0,m.yz)({product:_.updateProduct.product}))}))))}updateProductStatus(r){return this.store.select(P.VW).pipe((0,s.s)(1),(0,u.n)(i=>this._apollo.mutate({mutation:h.bM,variables:{updateEntityStatusInput:r},errorPolicy:"all"}).pipe((0,p.M)(({data:_})=>{if(_){const o=(0,t.A)(i);o[i.findIndex(n=>n.id===r.id)].active=r.active,this.store.dispatch((0,m.d9)({products:o}))}}))))}updateProductImages(r,i,_){return this._apollo.mutate({mutation:h.B9,variables:{updateProductById:r,thumbnail:i,images:_},errorPolicy:"all"}).pipe((0,y.T)(({data:o})=>o?o.updateProductImages:null),(0,p.M)(o=>{o&&this.store.dispatch((0,m.NM)({id:o.product.id,thumbnail:o.product.thumbnail,images:o.product.images}))}))}removeProduct(r){return this.store.select(P.VW).pipe((0,s.s)(1),(0,u.n)(i=>this._apollo.mutate({mutation:h.Fu,variables:{removeProductId:r},errorPolicy:"all"}).pipe((0,p.M)(({data:_})=>{if(_){const o=(0,t.A)(i),c=i.findIndex(n=>n.id===r);o.splice(c,1),this.store.dispatch((0,m.d9)({products:o}))}}))))}getTags(r=1,i=50,_="name",o="asc",c=""){return this._apollo.query({query:h.J,errorPolicy:"all",variables:{offset:i*(r-1),limit:i,sort:_,order:o,search:c}}).pipe((0,p.M)(({data:n})=>{this.store.dispatch((0,m.Wt)({tags:n.findAllTags.tags}))}))}createTag(r){return this.store.select(P.O).pipe((0,s.s)(1),(0,u.n)(i=>this._apollo.mutate({mutation:h.Op,variables:{createTagInput:r},errorPolicy:"all"}).pipe((0,p.M)(({data:_})=>{const o=(0,t.A)(i);o.push(_.createTag.tag),this.store.dispatch((0,m.Wt)({tags:o}))}))))}updateTag(r){return this.store.select(P.O).pipe((0,s.s)(1),(0,u.n)(i=>this._apollo.mutate({mutation:h.zk,variables:{updateTagInput:r},errorPolicy:"all"}).pipe((0,p.M)(({data:_})=>{const o=(0,t.A)(i);o[i.findIndex(n=>n.id===r.id)]=_.updateTag.tag,this.store.dispatch((0,m.Wt)({tags:o}))}))))}deleteTag(r){return this.store.select(P.O).pipe((0,s.s)(1),(0,u.n)(i=>this._apollo.mutate({mutation:h.GR,variables:{removeTagId:r},errorPolicy:"all"}).pipe((0,p.M)(()=>{const _=(0,t.A)(i),o=i.findIndex(c=>c.id===r);_.splice(o,1),this.store.dispatch((0,m.Wt)({tags:_}))}))))}getProductsAvailable(){return this._apollo.query({query:h.my,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}importStockFormTemplateFile(r){let i;function _(n){return{upc:n.UPC?n.UPC.toString():null,sku:n.SKU?n.SKU.toString():null,bCode:n.C\u00f3digo?n.C\u00f3digo.toString():null,name:n.Nombre,description:n.Descripci\u00f3n,uom:n["Unidad de Medida"],quantity:n.Cantidad,cost:n.Costo,price:n.Precio,brand:n.Marca,weight:n.Peso,width:n.Ancho,length:n.Largo,height:n.Altura,volume:n.Volumen}}const o=r.target,c=new FileReader;c.onload=n=>{const O=g.LF(n.target.result,{type:"binary"});i=g.Wp.sheet_to_json(O.Sheets[O.SheetNames[0]]);const f=i.map(_);this.store.dispatch((0,m.GQ)({products:f}))},c.readAsBinaryString(o.files[0])}static#t=this.\u0275fac=function(i){return new(i||R)(I.KVO(U.Ic),I.KVO(B.il))};static#e=this.\u0275prov=I.jDH({token:R,factory:R.\u0275fac,providedIn:"root"})}return R})()},78357:(b,M,e)=>{e.d(M,{i:()=>E});var t=e(54438),s=e(89417),u=e(59115),p=e(99213),y=e(88834),g=e(21413),v=e(56977),m=e(53328),P=e(82765),h=e(60177),I=e(25084),U=e(32102),B=e(59042),S=e(82798),R=e(60850),x=e(86600);const r=["bt"];function i(l,D){if(1&l&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"uppercase"),t.k0s()),2&l){const a=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,a.get("name").value))}}function _(l,D){if(1&l&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()),2&l){const a=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,a.get("name").value))}}function o(l,D){if(1&l&&(t.j41(0,"div",15)(1,"mat-checkbox",16),t.DNE(2,i,3,3,"span")(3,_,3,3,"span"),t.k0s()()),2&l){const a=D.$implicit,d=t.XpG(2);t.R7$(),t.Y8G("formControl",a.get("checked")),t.R7$(),t.vxM(2,d.useUpperCase?2:-1),t.R7$(),t.vxM(3,d.useUpperCase?-1:3)}}function c(l,D){if(1&l&&(t.j41(0,"div",9),t.Z7z(1,o,4,3,"div",15,t.fX1),t.k0s()),2&l){const a=t.XpG();t.R7$(),t.Dyx(a.formArray.controls)}}function n(l,D){if(1&l&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&l){const a=t.sdS(4),d=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",a)("formControl",d.dateControl)("max",d.maxDate),t.R7$(),t.Y8G("for",a)}}function T(l,D){if(1&l){const a=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const A=t.eBV(a).$implicit,F=t.XpG(2);return t.Njj(F.selectEntity(A))}),t.EFF(1),t.k0s()}if(2&l){const a=D.$implicit,d=t.XpG(2);t.Y8G("value",a[d.entityPropertyName]),t.R7$(),t.SpI(" ",a[d.entityPropertyName]," ")}}function O(l,D){if(1&l&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,T,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&l){const a=t.sdS(4),d=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",d.searchEntityControl)("matAutocomplete",a)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,d.entitiesFiltered))}}function C(l,D){if(1&l&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&l){const a=t.sdS(4),d=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",a)("formControl",d.dateControl)("max",d.maxDate),t.R7$(),t.Y8G("for",a)}}function W(l,D){if(1&l){const a=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const A=t.eBV(a).$implicit,F=t.XpG(2);return t.Njj(F.selectEntity(A))}),t.EFF(1),t.k0s()}if(2&l){const a=D.$implicit;t.Y8G("value",a.name),t.R7$(),t.SpI(" ",a.name," ")}}function f(l,D){if(1&l&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,W,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&l){const a=t.sdS(4),d=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",d.searchEntityControl)("matAutocomplete",a)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,d.entitiesFiltered))}}let E=(()=>{class l{constructor(){this.entityPropertyName="name",this.useUpperCase=!1,this.dataChange=new t.bkB,this.data=[],this.maxDate=new Date,this.dateControl=new s.MJ({disabled:!0}),this.formArray=new s.Yp([]),this._unsubscribeAll=new g.B,this._formBuilder=(0,t.WQX)(s.ok),this._changeDetectorRef=(0,t.WQX)(t.gRc)}get hasFilter(){return!m.H.IsNullOrEmpty(this.selectedFilter)}ngOnInit(){this.initializeFormArray(),this.dateControl.valueChanges.pipe((0,v.Q)(this._unsubscribeAll)).subscribe(a=>{this.dataChange.next(a),this.selectedFilter=a,this.menu.closeMenu()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}clearFilter(){switch(this.filterType){case"filterEntity":this.searchEntityControl.setValue(""),this.dataChange.next(null),this.selectedFilter=null;break;case"date":this.dateControl.setValue(null);break;case"multiSelect":case"multiSelectEntity":this.clearFormArray()}this.menu.closeMenu()}closeMenu(){this.menu.closeMenu()}selectEntity(a){this.dataChange.next(a),this.selectedFilter=a,this.menu.closeMenu()}initializeFormArray(){switch(this.filterType){case"multiSelect":this.formArray=this._formBuilder.array(this.data.map(a=>this._formBuilder.group({name:[a],checked:[!1]})));break;case"multiSelectEntity":this.formArray=this._formBuilder.array(this.data.map(a=>this._formBuilder.group({id:[a.id],name:[a[this.entityPropertyName]],checked:[!1]})))}this._changeDetectorRef.markForCheck(),this.formArraySubscription=this.formArray.valueChanges.pipe((0,v.Q)(this._unsubscribeAll)).subscribe(a=>{let d=[];switch(this.filterType){case"multiSelect":d=a.filter(A=>A.checked).map(A=>A.name);break;case"multiSelectEntity":for(const A of a.filter(F=>F.checked)){const F=this.data.find($=>$.id===A.id);d.push(F)}}this.dataChange.next(d),this.selectedFilter=d})}clearFormArray(){this.formArraySubscription.unsubscribe(),this.selectedFilter=[],this.dataChange.next([]),this.initializeFormArray()}static#t=this.\u0275fac=function(d){return new(d||l)};static#e=this.\u0275cmp=t.VBU({type:l,selectors:[["table-filter"]],viewQuery:function(d,A){if(1&d&&t.GBs(r,7),2&d){let F;t.mGM(F=t.lsd())&&(A.menu=F.first)}},inputs:{entityPropertyName:"entityPropertyName",filterType:"filterType",useUpperCase:"useUpperCase",data:"data",entitiesFiltered:"entitiesFiltered",searchEntityControl:"searchEntityControl"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.aNF],decls:19,vars:6,consts:[["bt","matMenuTrigger"],["listStatusMenu","matMenu"],["dateEntity",""],["SearchEntity",""],["entityDate",""],["entitiesAutocomplete","matAutocomplete"],["mat-icon-button","","matTooltip","",1,"w-6","h-6","min-h-6","min-w-6",3,"color","matMenuTriggerFor"],[1,"icon-size-4",3,"svgIcon"],[3,"click"],[1,"w-full","px-4","py-4"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","mat-fuse-de","fuse-mat-rounded","max-w-64","min-w-64",3,"subscriptSizing"],[1,"flex","justify-end","w-full","p-2","pb-0","border-t-2"],["mat-flat-button","",3,"click"],["mat-button","","color","warn",3,"click"],[1,""],["color","primary",3,"formControl"],["matInput","","placeholder","Fecha",3,"matDatepicker","formControl","max"],["matIconSuffix","",3,"for"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],[3,"value"],[3,"click","value"]],template:function(d,A){if(1&d){const F=t.RV6();t.j41(0,"div")(1,"button",6,0),t.nrm(3,"mat-icon",7),t.k0s(),t.j41(4,"mat-menu",null,1)(6,"div",8),t.bIt("click",function(L){return t.eBV(F),t.Njj(L.stopPropagation())}),t.DNE(7,c,3,0,"div",9)(8,n,5,5,"mat-form-field",10)(9,O,8,7,"mat-form-field",11),t.j41(10,"div",12)(11,"button",13),t.bIt("click",function(){return t.eBV(F),t.Njj(A.closeMenu())}),t.EFF(12,"Cerrar"),t.k0s(),t.j41(13,"button",14),t.bIt("click",function(){return t.eBV(F),t.Njj(A.clearFilter())}),t.EFF(14,"Limpiar"),t.k0s()()()()(),t.DNE(15,C,5,5,"ng-template",null,2,t.C5r)(17,f,8,7,"ng-template",null,3,t.C5r)}if(2&d){const F=t.sdS(5);t.R7$(),t.Y8G("color",A.hasFilter?"primary":"default")("matMenuTriggerFor",F),t.R7$(2),t.Y8G("svgIcon","mat_solid:filter_list"),t.R7$(4),t.vxM(7,"multiSelect"===A.filterType||"multiSelectEntity"===A.filterType?7:-1),t.R7$(),t.vxM(8,"date"===A.filterType?8:-1),t.R7$(),t.vxM(9,"filterEntity"===A.filterType?9:-1)}},dependencies:[h.Jj,y.Hl,y.$z,y.iY,p.m_,p.An,u.Cn,u.kk,u.Cp,P.g7,P.So,h.Pc,h.PV,I.X6,I.Vh,I.bZ,I.bU,U.RG,U.rl,U.JW,U.yw,B.fS,B.fg,s.X1,s.me,s.BC,s.l_,R.jL,R.$3,x.wT,R.pN,S.Ve],encapsulation:2,changeDetection:0})}return l})()},33446:(b,M,e)=>{e.d(M,{A:()=>y});var t=e(99531);const y=function p(g){return(0,t.A)(g,5)}}}]);