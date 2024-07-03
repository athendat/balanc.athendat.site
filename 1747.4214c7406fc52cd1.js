"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[1747],{16551:(R,A,r)=>{r.d(A,{Jq:()=>I,MQ:()=>p,nn:()=>D,oi:()=>h,ug:()=>u});var d=r(54438),c=r(69599);const u=(_,l)=>(0,d.WQX)(c.t).getDepots(),p=(_,l)=>(0,d.WQX)(c.t).findActiveDepots(),I=(_,l)=>(0,d.WQX)(c.t).findActiveAndRealDepots(),h=(_,l)=>(0,d.WQX)(c.t).findDepotsForIncomes(),D=(_,l)=>(0,d.WQX)(c.t).findDepotsForAdmin()},53159:(R,A,r)=>{r.d(A,{c_:()=>p,dY:()=>u});var d=r(59640);const c=h=>h.depots,u=(0,d.Mz)(c,h=>h.depot),p=(0,d.Mz)(c,h=>h.depots);(0,d.Mz)(c,h=>h.ownDepots)},69599:(R,A,r)=>{r.d(A,{t:()=>C});var d=r(96697),c=r(25558),u=r(88141),p=r(96354),I=r(98216),h=r(53159),D=r(26782),a=r(53473);const _=a.J1`
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
`,l=a.J1`
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
`,v=a.J1`
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
`,E=a.J1`
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
`,T=a.J1`
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
`,S=a.J1`
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
`,U=a.J1`
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
`,O=a.J1`
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
`,F=a.J1`
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
`,t=a.J1`
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
`,e=a.J1`
    mutation RemoveDepot($removeDepotId: String!) {
        removeDepot(id: $removeDepotId) {
            ok
            message
        }
    }
`,i=a.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateDepotStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var s=r(54438),P=r(95416),o=r(59640);let C=(()=>{class M{constructor(n,m,g){this.apolloProvider=n,this._snackBar=m,this.store=g,this._apollo=this.apolloProvider.use("BALANC")}createDepot(n){return this.store.select(h.c_).pipe((0,d.s)(1),(0,c.n)(m=>this._apollo.mutate({mutation:F,variables:{createDepotInput:n},errorPolicy:"all"}).pipe((0,u.M)(({data:g})=>{const y=structuredClone(m);y.push(g.createDepot.depot),this.store.dispatch((0,D.IX)({depots:y}))}))))}getDepots(n=0,m=50,g="code",y="asc",B=""){return this._apollo.query({query:l,errorPolicy:"all",variables:{page:n,size:m,sort:g,order:y,search:B}}).pipe((0,u.M)(({data:f})=>{this.store.dispatch((0,D.IX)({depots:f.findAllDepots.depots})),this.store.dispatch((0,I.Bp)({pagination:f.findAllDepots.pagination}))}))}getDepotsByManager(){return this._apollo.query({query:_,errorPolicy:"all"}).pipe((0,u.M)(({data:n})=>{this.store.dispatch((0,D.Gv)({ownDepots:n.findDepotsByManager.depots}))}))}findActiveDepots(n="",m=50){return this._apollo.query({query:v,variables:{search:n,size:m},errorPolicy:"all"}).pipe((0,p.T)(({data:g})=>(this.store.dispatch((0,D.IX)({depots:g.findActiveDepots})),g.findActiveDepots)))}findActiveAndRealDepots(){return this._apollo.query({query:E,errorPolicy:"all"}).pipe((0,u.M)(({data:n})=>{this.store.dispatch((0,D.IX)({depots:n.findActiveAndRealDepots.depots}))}))}findDepotsForIncomes(){return this._apollo.query({query:T,errorPolicy:"all"}).pipe((0,u.M)(({data:n})=>{this.store.dispatch((0,D.IX)({depots:n.findDepotsForIncomes.depots}))}))}findDepotsForAdmin(){return this._apollo.query({query:S,errorPolicy:"all"}).pipe((0,u.M)(({data:n})=>{this.store.dispatch((0,D.IX)({depots:n.findDepotsForAdmin.depots}))}))}findDepotByPeriodId(n){return this._apollo.query({query:U,errorPolicy:"all",variables:{periodId:n}}).pipe((0,u.M)(({data:m})=>{this.store.dispatch((0,D.VJ)({depot:m.findDepotByPeriodId.depot}))}))}getDepotById(n){return this._apollo.query({query:O,variables:{findDepotByIdId:n},errorPolicy:"all"}).pipe((0,u.M)(({data:m})=>{this.store.dispatch((0,D.VJ)({depot:m.createDepot.depot}))}))}updateDepot(n){return this.store.select(h.c_).pipe((0,d.s)(1),(0,c.n)(m=>this._apollo.mutate({mutation:t,variables:{updateDepotInput:n},errorPolicy:"all"}).pipe((0,u.M)(({data:g})=>{const y=structuredClone(m);y[m.findIndex(f=>f.id===n.id)]=g.updateDepot.depot,this.store.dispatch((0,D.IX)({depots:y}))}))))}updateDepotStatus(n){return this.store.select(h.c_).pipe((0,d.s)(1),(0,c.n)(m=>this._apollo.mutate({mutation:i,variables:{updateEntityStatusInput:n},errorPolicy:"all"}).pipe((0,u.M)(({})=>{const y=structuredClone(m);y[m.findIndex(f=>f.id===n.id)].active=n.active,this.store.dispatch((0,D.IX)({depots:y}))}))))}removeDepot(n){return this.store.select(h.c_).pipe((0,d.s)(1),(0,c.n)(m=>this._apollo.mutate({mutation:e,variables:{removeDepotId:n},errorPolicy:"all"}).pipe((0,u.M)(({data:g})=>{if(g){const y=structuredClone(m),B=m.findIndex(f=>f.id===n);y.splice(B,1),this.store.dispatch((0,D.IX)({depots:y}))}}))))}static#t=this.\u0275fac=function(m){return new(m||M)(s.KVO(a.Ic),s.KVO(P.UG),s.KVO(o.il))};static#e=this.\u0275prov=s.jDH({token:M,factory:M.\u0275fac,providedIn:"root"})}return M})()},43801:(R,A,r)=>{r.d(A,{Bj:()=>I,N4:()=>_,Tn:()=>a,bN:()=>h,eX:()=>p});var d=r(54438),c=r(36296),u=r(4840);const p=(v,E)=>{const T=v.params.productId;return T&&"new"!==T?(0,d.WQX)(c.g).getProductById(T):{}},I=(v,E)=>(0,d.WQX)(c.g).getProducts(),h=(v,E)=>(0,d.WQX)(c.g).findActiveProducts(),a=(v,E)=>(0,d.WQX)(c.g).findIngredients(),_=(v,E)=>(0,d.WQX)(u.t).getProductsInStockAvailable()},36296:(R,A,r)=>{r.d(A,{g:()=>U});var d=r(33446),c=r(96697),u=r(25558),p=r(88141),I=r(96354),h=r(62288),D=r(98216),a=r(39928),_=r(13189),l=r(84342),v=r(5864),E=r(54438),T=r(53473),S=r(59640);let U=(()=>{class O{constructor(t,e){this.apolloProvider=t,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createProduct(t){return this.store.select(_.VW).pipe((0,c.s)(1),(0,u.n)(e=>this._apollo.mutate({mutation:l.xq,variables:{createProductInput:t},errorPolicy:"all"}).pipe((0,p.M)(({data:i})=>{const s=(0,d.A)(e);s.push(i.createProduct.product),this.store.dispatch((0,a.d9)({products:s}))}))))}importProductsFromTemplateFile(t,e){return this._apollo.mutate({mutation:l.YV,variables:{importProductsTemplateFileInput:{products:t,depotId:e}},errorPolicy:"all"}).pipe((0,p.M)(({data:i})=>{this.store.dispatch((0,a.d9)({products:i.importProductsFromTemplateFile.products})),this.store.dispatch((0,D.Bp)({pagination:i.importProductsFromTemplateFile.pagination}))}))}getProducts(t=0,e=50,i="name",s="asc",P=""){return this._apollo.query({query:l.oH,errorPolicy:"all",variables:{page:t,size:e,sort:i,order:s,search:P}}).pipe((0,p.M)(({data:o})=>{this.store.dispatch((0,a.d9)({products:o.findAllProducts.products})),this.store.dispatch((0,D.Bp)({pagination:o.findAllProducts.pagination}))}))}findProductsToList(){return this._apollo.query({query:l.pg,errorPolicy:"all"}).pipe((0,p.M)(({data:t})=>{this.store.dispatch((0,a.d9)({products:t.findProductsToList.products}))}))}findIngredients(){return this._apollo.query({query:l.Cm,errorPolicy:"all"}).pipe((0,p.M)(({data:t})=>{this.store.dispatch((0,a.d9)({products:t.findIngredients.products}))}))}getProductsByMerchant(t=1,e=50,i="name",s="asc",P=""){return this._apollo.query({query:l.zb,errorPolicy:"all",variables:{offset:e*(t-1),limit:e,sort:i,order:s,search:P}}).pipe((0,p.M)(({data:o})=>{this.store.dispatch((0,a.d9)({products:o.findAllProductsByMerchant.products})),this.store.dispatch((0,D.Bp)({pagination:o.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:l.r,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}findActiveProducts(t="",e=10){return this._apollo.query({query:l.LS,variables:{search:t,size:e},errorPolicy:"all"}).pipe((0,I.T)(({data:i})=>i?i.findActiveProducts:[]),(0,p.M)(i=>{i&&this.store.dispatch((0,a.d9)({products:i}))}))}findProductsByUpcS(t=[]){return this._apollo.query({query:l.hE,variables:{upcS:t},errorPolicy:"all"}).pipe((0,I.T)(({data:e})=>e?e.findProductsByUpcS:[]))}getProductsInactive(){return this._apollo.query({query:l.Ax,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}getProductsExhausted(){return this._apollo.query({query:l.mU,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}getProductById(t){return this._apollo.query({query:l.De,variables:{productId:t},errorPolicy:"all"}).pipe((0,p.M)(({data:e})=>{this.store.dispatch((0,a.yz)({product:e.findProductById.product}))}))}updateProduct(t){return this.store.select(_.VW).pipe((0,c.s)(1),(0,u.n)(e=>this._apollo.mutate({mutation:l.q,variables:{updateProductInput:t},errorPolicy:"all"}).pipe((0,p.M)(({data:i})=>{const s=(0,d.A)(e);s[e.findIndex(o=>o.id===t.id)]=i.updateProduct.product,this.store.dispatch((0,a.d9)({products:s})),this.store.dispatch((0,a.yz)({product:i.updateProduct.product}))}))))}updateProductStatus(t){return this.store.select(_.VW).pipe((0,c.s)(1),(0,u.n)(e=>this._apollo.mutate({mutation:l.bM,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,p.M)(({data:i})=>{if(i){const s=(0,d.A)(e);s[e.findIndex(o=>o.id===t.id)].active=t.active,this.store.dispatch((0,a.d9)({products:s}))}}))))}updateProductImages(t,e,i){return this._apollo.mutate({mutation:l.B9,variables:{updateProductById:t,thumbnail:e,images:i},errorPolicy:"all"}).pipe((0,I.T)(({data:s})=>s?s.updateProductImages:null),(0,p.M)(s=>{s&&this.store.dispatch((0,a.NM)({id:s.product.id,thumbnail:s.product.thumbnail,images:s.product.images}))}))}removeProduct(t){return this.store.select(_.VW).pipe((0,c.s)(1),(0,u.n)(e=>this._apollo.mutate({mutation:l.Fu,variables:{removeProductId:t},errorPolicy:"all"}).pipe((0,p.M)(({data:i})=>{if(i){const s=(0,d.A)(e),P=e.findIndex(o=>o.id===t);s.splice(P,1),this.store.dispatch((0,a.d9)({products:s}))}}))))}getTags(t=1,e=50,i="name",s="asc",P=""){return this._apollo.query({query:l.J,errorPolicy:"all",variables:{offset:e*(t-1),limit:e,sort:i,order:s,search:P}}).pipe((0,p.M)(({data:o})=>{this.store.dispatch((0,a.Wt)({tags:o.findAllTags.tags}))}))}createTag(t){return this.store.select(_.O).pipe((0,c.s)(1),(0,u.n)(e=>this._apollo.mutate({mutation:l.Op,variables:{createTagInput:t},errorPolicy:"all"}).pipe((0,p.M)(({data:i})=>{const s=(0,d.A)(e);s.push(i.createTag.tag),this.store.dispatch((0,a.Wt)({tags:s}))}))))}updateTag(t){return this.store.select(_.O).pipe((0,c.s)(1),(0,u.n)(e=>this._apollo.mutate({mutation:l.zk,variables:{updateTagInput:t},errorPolicy:"all"}).pipe((0,p.M)(({data:i})=>{const s=(0,d.A)(e);s[e.findIndex(o=>o.id===t.id)]=i.updateTag.tag,this.store.dispatch((0,a.Wt)({tags:s}))}))))}deleteTag(t){return this.store.select(_.O).pipe((0,c.s)(1),(0,u.n)(e=>this._apollo.mutate({mutation:l.GR,variables:{removeTagId:t},errorPolicy:"all"}).pipe((0,p.M)(()=>{const i=(0,d.A)(e),s=e.findIndex(P=>P.id===t);i.splice(s,1),this.store.dispatch((0,a.Wt)({tags:i}))}))))}getProductsAvailable(){return this._apollo.query({query:l.my,errorPolicy:"all"}).pipe((0,p.M)(({})=>{}))}importStockFormTemplateFile(t){let e;function i(o){return{upc:o.UPC?o.UPC.toString():null,sku:o.SKU?o.SKU.toString():null,bCode:o.C\u00f3digo?o.C\u00f3digo.toString():null,name:o.Nombre,description:v.H.IsNullOrEmpty(o.Descripci\u00f3n)?"":o.Descripci\u00f3n,uom:o["Unidad de Medida"],quantity:o.Cantidad,cost:o.Costo,price:o.Precio,brand:o.Marca,weight:o.Peso,width:o.Ancho,length:o.Largo,height:o.Altura,volume:o.Volumen,isPerishable:!!o["N\xfamero de Lote"],lotNumber:o["N\xfamero de Lote"]?o["N\xfamero de Lote"].toString().trim():null,dueDate:v.H.isValidDate(o["Fecha de Vencimiento"])?new Date(o["Fecha de Vencimiento"]):null}}const s=t.target,P=new FileReader;P.onload=o=>{const M=h.LF(o.target.result,{type:"binary"});e=h.Wp.sheet_to_json(M.Sheets[M.SheetNames[0]]);const m=e.map(i);this.store.dispatch((0,a.GQ)({products:m}))},P.readAsBinaryString(s.files[0])}static#t=this.\u0275fac=function(e){return new(e||O)(E.KVO(T.Ic),E.KVO(S.il))};static#e=this.\u0275prov=E.jDH({token:O,factory:O.\u0275fac,providedIn:"root"})}return O})()},33446:(R,A,r)=>{r.d(A,{A:()=>I});var d=r(71252);const I=function p(h){return(0,d.A)(h,5)}}}]);