"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3308],{30593:(A,y,i)=>{i.d(y,{$k:()=>b,BD:()=>e,DI:()=>l,E4:()=>h,ES:()=>d,F$:()=>_,FF:()=>E,N4:()=>r,Pn:()=>u,Q7:()=>m,RO:()=>T,XX:()=>g,Yv:()=>v,Zm:()=>a,_z:()=>n,eI:()=>S,hP:()=>c,ji:()=>f,l9:()=>P,qb:()=>$,s4:()=>t,tT:()=>p});var o=i(50967);const P=o.Ps`
    mutation CreateProduct($createProductInput: CreateProductInput!) {
        createProduct(createProductInput: $createProductInput) {
            ok
            message

            product {
                id
                active
                name
                price
                stock
                thumbnail
            }
        }
    }
`,n=(o.Ps`
    mutation CreateProductsFromVersatStock(
        $versatStockInput: VersatStockInput!
    ) {
        createProductsFromVersatStock(versatStockInput: $versatStockInput) {
            ok
            message

            pagination {
                length
                size
                page
            }

            products {
                id
                active
                code
                upc
                bCode
                cost
                isPerishable
                name
                brand {
                    name
                }
                uom {
                    name
                    abbr
                }
                price
                stock
                salesQuantity
                thumbnail
                uomId
                wholesaler
            }
        }
    }
`,o.Ps`
    mutation ImportProductsFromTemplateFile(
        $importProductsTemplateFileInput: ImportProductsTemplateFileInput!
    ) {
        importProductsFromTemplateFile(importProductsTemplateFileInput: $importProductsTemplateFileInput) {
            ok
            message

            pagination {
                length
                size
                page
            }

            products {
                id
                active
                code
                upc
                bCode
                cost
                isPerishable
                name
                brand {
                    name
                }
                uom {
                    name
                    abbr
                }
                price
                stock
                salesQuantity
                thumbnail
                uomId
                wholesaler
            }
        }
    }
`),m=o.Ps`
    mutation UpdateProduct($updateProductInput: UpdateProductInput!) {
        updateProduct(updateProductInput: $updateProductInput) {
            ok
            message

            product {
                id
                active

                type
                categoryId

                brandId
                brand {
                    name
                }

                currencyId
                currency {
                    name
                }

                uomId
                uom {
                    name
                    abbr
                }

                tags

                name
                description
                specifications
                guaranty

                sku
                upc
                bCode

                cost
                discount
                tax
                price

                stock
                stockMin

                isDigital
                isIngredient
                isService
                isPerishable

                thumbnail


                images


                variants {
                    color
                    cost
                    description
                    name
                    price
                    size
                    sku
                    stock
                    stock
                    thumbnail
                    upc
                }
            }
        }
    }
`,v=o.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateProductStatus(updateEntityStatusInput: $updateEntityStatusInput)
    }
`,S=o.Ps`
    mutation RemoveProduct($removeProductId: String!) {
        removeProduct(id: $removeProductId) {
            ok
            message
        }
    }
`,p=o.Ps`
    query FindAllProducts(
        $page: Int,
        $size: Int,
        $sort: String,
        $order: Order,
        $search: String,
    ) {
        findAllProducts(
            page: $page,
            size: $size,
            sort: $sort,
            order: $order,
            search: $search
        ) {
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

            products {
                id
                active
                code
                upc
                bCode
                cost
                name
                brand {
                    name
                }
                uom {
                    name
                    abbr
                }
                price
                stock
                thumbnail
                uomId

                currencyId
                currency {
                    id
                    iso
                }
            }
        }
    }
`,g=o.Ps`
    query FindProductsToList {
        findProductsToList {
            ok
            message

            products {
                id
                name
            }
        }
    }
`,d=o.Ps`
    query FindIngredients {
        findIngredients {
            ok
            message

            products {
                id
                name
                cost
                price

                uomId
                uom {
                    name
                    abbr
                }
            }
        }
    }
`,T=o.Ps`
    query FindAllProductsByMerchant(
        $offset: Int
        $limit: Int
        $sort: String
        $order: Order
        $search: String
    ) {
        findAllProductsByMerchant(
            offset: $offset
            limit: $limit
            sort: $sort
            order: $order
            search: $search
        ) {
            ok
            message

            pagination {
                length
                size
                page
            }

            products {
                id
                active
                parentId
                type
                code
                upc
                bCode
                cost
                name
                brand {
                    name
                }
                uom {
                    name
                    abbr
                }
                price
                stock
                salesQuantity
                thumbnail
                uomId

                variants {
                    id
                    name
                    description
                    color
                    cost
                    price
                    size
                    sku
                    stock
                    stock
                    thumbnail
                    upc
                }
            }
        }
    }
`,b=o.Ps`
    query GetProductsActive {
        productsActive {
            code
            upc
            bCode
            cost
            name
            brand {
                name
            }
            uom {
                abbr
            }
            price
            stock
        }
    }
`,E=o.Ps`
    query FindActiveProducts($search: String!, $size: Int!) {
        findActiveProducts(search: $search, size: $size) {
            id
            code
            upc
            bCode
            cost
            name

            brandId
            brand {
                name
            }

            uomId
            uom {
                abbr
            }

            currencyId
            currency {
                iso
            }
            price
            stock

            description
            weight
            width
            length
            height
            volume
        }
    }
`,c=o.Ps`
    query FindProductsByUpcS($upcS: [String!]!) {
        findProductsByUpcS(upcS: $upcS) {
            id
            code
            upc
            bCode
            cost
            name

            brandId
            brand {
                name
            }

            uomId
            uom {
                abbr
            }

            currencyId
            currency {
                iso
            }
            price
            stock

            description
            weight
            width
            length
            height
            volume
        }
    }
`,h=o.Ps`
    query GetProductsInactive {
        productsInactive {
            code
            upc
            bCode
            cost
            name
            brand {
                name
            }
            uom {
                abbr
            }
            price
            stock
        }
    }
`,l=o.Ps`
    query GetProductsExhausted {
        productsExhausted {
            productId
            name
            upc
            categoryId
            brand
            uom
            price
            quantity
            code
            cost
        }
    }
`,t=o.Ps`
    query GetProductsInStockByDepot($depotId: String!, $search: String!, $size: Int!) {
        productsInStockByDepot(depotId: $depotId, search: $search, size: $size) {
            productId
            name
            upc
            categoryId
            brand
            uom
            price
            quantity
            inStock
        }
    }
`,e=o.Ps`
    query GetProductsAvailable {
        productsAvailable {
            productId
            name
            upc
            categoryId
            brand
            uom
            price
            quantity
            code
            cost
        }
    }
`,r=(o.Ps`
    query FindPerishableProducts(
        $offset: Int
        $limit: Int
        $sort: String
        $order: Order
        $search: String
    ) {
        findPerishableProducts(
            offset: $offset
            limit: $limit
            sort: $sort
            order: $order
            search: $search
        ) {
            ok
            message

            pagination {
                length
                size
                page
            }

            products {
                id
                active
                code
                upc
                bCode
                cost
                isPerishable
                name
                brand {
                    name
                }
                uom {
                    name
                    abbr
                }
                price
                stock
                salesQuantity
                thumbnail
                uomId
                # wholesaler
            }
        }
    }
`,o.Ps`
    query FindProductById($productId: String!) {
        findProductById(id: $productId) {
            ok
            message

            product {
                id
                active

                type
                categoryId

                brandId
                brand {
                    name
                }

                currencyId
                currency {
                    name
                }

                uomId
                uom {
                    name
                    abbr
                }

                tags

                name
                description
                specifications
                guaranty

                sku
                upc
                bCode

                cost
                discount
                tax
                price

                stock
                stockMin

                isDigital
                isIngredient
                isService
                isPerishable

                thumbnail


                images


                variants {
                    color
                    cost
                    description
                    name
                    price
                    size
                    sku
                    stock
                    stock
                    thumbnail
                    upc
                }
            }
        }
    }
`),u=o.Ps`
    mutation UpdateProductImages($updateProductById: String!, $thumbnail: String, $images: [String!] ) {
        updateProductImages(id: $updateProductById, thumbnail: $thumbnail, images: $images) {
            ok
            message

            product {
                id
                thumbnail
                images
            }
        }
    }
`,a=o.Ps`
    mutation CreateTag($createTagInput: CreateTagInput!) {
        createTag(createTagInput: $createTagInput) {
            ok
            message

            tag {
                id
                name
                active
            }
        }
    }
`,$=o.Ps`
    mutation UpdateTag($updateTagInput: UpdateTagInput!) {
        updateTag(updateTagInput: $updateTagInput) {
            ok
            message

            tag {
                id
                name
                active
            }
        }
    }
`,f=o.Ps`
    mutation RemoveTag($removeTagId: String!) {
        removeTag(id: $removeTagId) {
            ok
            message
        }
    }
`,_=o.Ps`
    query FindAllTags(
        $offset: Int
        $limit: Int
        $sort: String
        $order: Order
        $search: String
    ) {
        findAllTags(
            offset: $offset
            limit: $limit
            sort: $sort
            order: $order
            search: $search
        ) {
            ok
            message

            pagination {
                length
                size
                page
            }

            tags {
                id
                name
                active
            }
        }
    }
`},53308:(A,y,i)=>{i.d(y,{M6:()=>S,R_:()=>E,Rf:()=>T,SE:()=>p,uA:()=>d});var o=i(19212),P=i(26306),I=i(58504),n=i(24234),m=i(64190),v=i(88320);let S=(()=>{class c{constructor(l,t){this._productsService=l,this._router=t}resolve(l,t){const e=l.paramMap.get("productId");if("new"!==e)return this._productsService.getProductById(e).pipe((0,P.K)(s=>{console.error(s);const r=t.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(r),(0,I._)(s)}))}static#t=this.\u0275fac=function(t){return new(t||c)(o.LFG(n.s),o.LFG(m.F0))};static#e=this.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),p=(()=>{class c{constructor(l){this._productsService=l}resolve(l,t){return this._productsService.getProducts()}static#t=this.\u0275fac=function(t){return new(t||c)(o.LFG(n.s))};static#e=this.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),d=(()=>{class c{constructor(){this._productsService=(0,o.f3M)(n.s)}resolve(l,t){return this._productsService.findIngredients()}static#t=this.\u0275fac=function(t){return new(t||c)};static#e=this.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),T=(()=>{class c{constructor(l){this._stocksService=l}resolve(l,t){return this._stocksService.getProductsInStockAvailable()}static#t=this.\u0275fac=function(t){return new(t||c)(o.LFG(v.T))};static#e=this.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),E=(()=>{class c{constructor(l){this._productsService=l}resolve(l,t){return this._productsService.findActiveProducts()}static#t=this.\u0275fac=function(t){return new(t||c)(o.LFG(n.s))};static#e=this.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},24234:(A,y,i)=>{i.d(y,{s:()=>c});var o=i(62660),P=i(48180),I=i(94664),n=i(99397),m=i(37398),v=i(11486),S=i(97214),p=i(78501),g=i(12936),d=i(30593),T=i(19212),b=i(50967),E=i(84221);let c=(()=>{class h{constructor(t,e){this.apolloProvider=t,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createProduct(t){return this.store.select(g.nR).pipe((0,P.q)(1),(0,I.w)(e=>this._apollo.mutate({mutation:d.l9,variables:{createProductInput:t},errorPolicy:"all"}).pipe((0,n.b)(({data:s})=>{const r=(0,o.Z)(e);r.push(s.createProduct.product),this.store.dispatch((0,p.RU)({products:r}))}))))}importProductsFromTemplateFile(t,e){return this._apollo.mutate({mutation:d._z,variables:{importProductsTemplateFileInput:{products:t,depotId:e}},errorPolicy:"all"}).pipe((0,n.b)(({data:s})=>{this.store.dispatch((0,p.RU)({products:s.importProductsFromTemplateFile.products})),this.store.dispatch((0,S.Jr)({pagination:s.importProductsFromTemplateFile.pagination}))}))}getProducts(t=0,e=50,s="name",r="asc",u=""){return this._apollo.query({query:d.tT,errorPolicy:"all",variables:{page:t,size:e,sort:s,order:r,search:u}}).pipe((0,n.b)(({data:a})=>{this.store.dispatch((0,p.RU)({products:a.findAllProducts.products})),this.store.dispatch((0,S.Jr)({pagination:a.findAllProducts.pagination}))}))}findProductsToList(){return this._apollo.query({query:d.XX,errorPolicy:"all"}).pipe((0,n.b)(({data:t})=>{this.store.dispatch((0,p.RU)({products:t.findProductsToList.products}))}))}findIngredients(){return this._apollo.query({query:d.ES,errorPolicy:"all"}).pipe((0,n.b)(({data:t})=>{this.store.dispatch((0,p.RU)({products:t.findIngredients.products}))}))}getProductsByMerchant(t=1,e=50,s="name",r="asc",u=""){return this._apollo.query({query:d.RO,errorPolicy:"all",variables:{offset:e*(t-1),limit:e,sort:s,order:r,search:u}}).pipe((0,n.b)(({data:a})=>{this.store.dispatch((0,p.RU)({products:a.findAllProductsByMerchant.products})),this.store.dispatch((0,S.Jr)({pagination:a.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:d.$k,errorPolicy:"all"}).pipe((0,n.b)(({})=>{}))}findActiveProducts(t="",e=10){return this._apollo.query({query:d.FF,variables:{search:t,size:e},errorPolicy:"all"}).pipe((0,m.U)(({data:s})=>s?s.findActiveProducts:[]),(0,n.b)(s=>{s&&this.store.dispatch((0,p.RU)({products:s}))}))}findProductsByUpcS(t=[]){return this._apollo.query({query:d.hP,variables:{upcS:t},errorPolicy:"all"}).pipe((0,m.U)(({data:e})=>e?e.findProductsByUpcS:[]))}getProductsInactive(){return this._apollo.query({query:d.E4,errorPolicy:"all"}).pipe((0,n.b)(({})=>{}))}getProductsExhausted(){return this._apollo.query({query:d.DI,errorPolicy:"all"}).pipe((0,n.b)(({})=>{}))}getProductById(t){return this._apollo.query({query:d.N4,variables:{productId:t},errorPolicy:"all"}).pipe((0,n.b)(({data:e})=>{this.store.dispatch((0,p.Gr)({product:e.findProductById.product}))}))}updateProduct(t){return this.store.select(g.nR).pipe((0,P.q)(1),(0,I.w)(e=>this._apollo.mutate({mutation:d.Q7,variables:{updateProductInput:t},errorPolicy:"all"}).pipe((0,n.b)(({data:s})=>{const r=(0,o.Z)(e);r[e.findIndex(a=>a.id===t.id)]=s.updateProduct.product,this.store.dispatch((0,p.RU)({products:r})),this.store.dispatch((0,p.Gr)({product:s.updateProduct.product}))}))))}updateProductStatus(t){return this.store.select(g.nR).pipe((0,P.q)(1),(0,I.w)(e=>this._apollo.mutate({mutation:d.Yv,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,n.b)(({data:s})=>{if(s){const r=(0,o.Z)(e);r[e.findIndex(a=>a.id===t.id)].active=t.active,this.store.dispatch((0,p.RU)({products:r}))}}))))}updateProductImages(t,e,s){return this._apollo.mutate({mutation:d.Pn,variables:{updateProductById:t,thumbnail:e,images:s},errorPolicy:"all"}).pipe((0,m.U)(({data:r})=>r?r.updateProductImages:null),(0,n.b)(r=>{r&&this.store.dispatch((0,p.nS)({id:r.product.id,thumbnail:r.product.thumbnail,images:r.product.images}))}))}removeProduct(t){return this.store.select(g.nR).pipe((0,P.q)(1),(0,I.w)(e=>this._apollo.mutate({mutation:d.eI,variables:{removeProductId:t},errorPolicy:"all"}).pipe((0,n.b)(()=>{const s=(0,o.Z)(e),r=e.findIndex(u=>u.id===t);s.splice(r,1),this.store.dispatch((0,p.RU)({products:s}))}))))}getTags(t=1,e=50,s="name",r="asc",u=""){return this._apollo.query({query:d.F$,errorPolicy:"all",variables:{offset:e*(t-1),limit:e,sort:s,order:r,search:u}}).pipe((0,n.b)(({data:a})=>{this.store.dispatch((0,p.mG)({tags:a.findAllTags.tags}))}))}createTag(t){return this.store.select(g.a0).pipe((0,P.q)(1),(0,I.w)(e=>this._apollo.mutate({mutation:d.Zm,variables:{createTagInput:t},errorPolicy:"all"}).pipe((0,n.b)(({data:s})=>{const r=(0,o.Z)(e);r.push(s.createTag.tag),this.store.dispatch((0,p.mG)({tags:r}))}))))}updateTag(t){return this.store.select(g.a0).pipe((0,P.q)(1),(0,I.w)(e=>this._apollo.mutate({mutation:d.qb,variables:{updateTagInput:t},errorPolicy:"all"}).pipe((0,n.b)(({data:s})=>{const r=(0,o.Z)(e);r[e.findIndex(a=>a.id===t.id)]=s.updateTag.tag,this.store.dispatch((0,p.mG)({tags:r}))}))))}deleteTag(t){return this.store.select(g.a0).pipe((0,P.q)(1),(0,I.w)(e=>this._apollo.mutate({mutation:d.ji,variables:{removeTagId:t},errorPolicy:"all"}).pipe((0,n.b)(()=>{const s=(0,o.Z)(e),r=e.findIndex(u=>u.id===t);s.splice(r,1),this.store.dispatch((0,p.mG)({tags:s}))}))))}getProductsAvailable(){return this._apollo.query({query:d.BD,errorPolicy:"all"}).pipe((0,n.b)(({})=>{}))}importStockFormTemplateFile(t){let e;function s(a){return{upc:a.UPC?a.UPC.toString():null,sku:a.SKU?a.SKU.toString():null,bCode:a.C\u00f3digo?a.C\u00f3digo.toString():null,name:a.Nombre,description:a.Descripci\u00f3n,uom:a["Unidad de Medida"],quantity:a.Cantidad,cost:a.Costo,price:a.Precio,brand:a.Marca,weight:a.Peso,width:a.Ancho,length:a.Largo,height:a.Altura,volume:a.Volumen}}const r=t.target,u=new FileReader;u.onload=a=>{const f=v.ij(a.target.result,{type:"binary"});e=v.P6.sheet_to_json(f.Sheets[f.SheetNames[0]]);const k=e.map(s);this.store.dispatch((0,p.dy)({products:k}))},u.readAsBinaryString(r.files[0])}static#t=this.\u0275fac=function(e){return new(e||h)(T.LFG(b._M),T.LFG(E.yh))};static#e=this.\u0275prov=T.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},88320:(A,y,i)=>{i.d(y,{T:()=>c});var o=i(37398),P=i(99397),I=i(97214),n=i(33815),m=i(50967);const v=m.Ps`
    query FindAllStocks($page: Int, $size: Int, $sort: String, $order: Order, $search: String, $depotId: String, $productId: String, $availability: Boolean ) {
        stocks(page: $page, size: $size, sort: $sort, order: $order, search: $search, depotId: $depotId, productId: $productId, availability: $availability) {
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

            stocks {
                id
                userId
                productId
                quantity
                depotId
                updatedAt

                depot {
                    name
                }

                product {
                    id
                    name
                    price
                    upc
                    uom {
                        abbr
                    }
                    brand {
                        name
                    }
                }

                movements {
                    createdAt
                    ref
                    type
                    initQuantity
                    quantity
                    endQuantity
                }

            }
        }
    }
`,S=m.Ps`
    query FindStocks($depotId: String, $productId: String, $availability: Boolean) {
        findStocks(depotId: $depotId, productId: $productId , availability: $availability) {
                id
                productId
                quantity
                depotId
                updatedAt

                depot {
                    name
                }

                product {
                    id
                    name
                    price
                    cost
                    upc
                    uom {
                        id
                        abbr
                    }
                    brand {
                        id
                        name
                    }
                }

            }
        }
`,p=m.Ps`
    query findStockProducts($search: String!, $size: Int!, $depotId: String, $availability: Boolean ) {
        findStockProducts(search: $search, size: $size, depotId: $depotId, availability: $availability) {
            ok
            message

            products {
                id
                name
            }
        }
    }
`,g=m.Ps`
    query GetProductsInStockAvailable($search: String!, $size: Int!, $depotId: String ) {
        productsInStockAvailable(search: $search, size: $size, depotId: $depotId) {
            productId
            name
            upc
            categoryId
            brand
            uom
            price
            quantity
            depotId
            depot
            currencyId
            currency
            thumbnail
        }
    }
`;var d=i(78501),T=i(30593),b=i(19212),E=i(84221);let c=(()=>{class h{constructor(t,e){this.apolloProvider=t,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}getStocks(t=0,e=50,s="updatedAt",r="asc",u="",a="",$="",f=null){return this._apollo.query({query:v,errorPolicy:"all",variables:{page:t,size:e,sort:s,order:r,search:u,depotId:a,productId:$,availability:f}}).pipe((0,o.U)(({data:_})=>_?_.stocks:null),(0,P.b)(_=>{_&&(this.store.dispatch((0,n.Z4)({stocks:_.stocks})),this.store.dispatch((0,I.Jr)({pagination:_.pagination})))}))}findStockProducts(t="",e=10,s=null,r=null){return this._apollo.query({query:p,errorPolicy:"all",variables:{search:t,size:e,depotId:s,availability:r}}).pipe((0,o.U)(({data:u})=>u?u.findStockProducts.products:null),(0,P.b)(u=>{u&&this.store.dispatch((0,d.RU)({products:u}))}))}getProductsInStockAvailable(t="",e=50,s=null){return this._apollo.query({query:g,variables:{search:t,size:e,depotId:s},errorPolicy:"all"}).pipe((0,o.U)(({data:r})=>r?r.productsInStockAvailable:null),(0,P.b)(r=>{r&&this.store.dispatch((0,d.Pj)({productsInStock:r}))}))}getProductsInStockByDepot(t,e="",s=10){return this._apollo.query({query:T.s4,variables:{depotId:t,search:e,size:s},errorPolicy:"all"}).pipe((0,o.U)(({data:r})=>r?r.productsInStockByDepot:[]),(0,P.b)(r=>{r&&this.store.dispatch((0,d.Pj)({productsInStock:r}))}))}findStocks(t,e,s){return this._apollo.query({query:S,variables:{depotId:t,productId:e,availability:s},errorPolicy:"all"}).pipe((0,o.U)(({data:r})=>r?r.findStocks:[]))}static#t=this.\u0275fac=function(e){return new(e||h)(b.LFG(m._M),b.LFG(E.yh))};static#e=this.\u0275prov=b.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},62660:(A,y,i)=>{i.d(y,{Z:()=>m});var o=i(89711);const m=function n(v){return(0,o.Z)(v,5)}}}]);