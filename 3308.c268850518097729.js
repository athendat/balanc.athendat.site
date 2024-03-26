"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3308],{30593:(f,T,a)=>{a.d(T,{$k:()=>h,BD:()=>e,DI:()=>A,E4:()=>I,ES:()=>n,F$:()=>_,FF:()=>b,N4:()=>r,Pn:()=>d,Q7:()=>l,RO:()=>P,XX:()=>g,Yv:()=>y,Zm:()=>i,_z:()=>c,eI:()=>v,hP:()=>E,ji:()=>S,l9:()=>p,qb:()=>$,s4:()=>t,tT:()=>u});var o=a(50967);const p=o.Ps`
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
`,c=(o.Ps`
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
`),l=o.Ps`
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
                guarantyDescription

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
`,y=o.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateProductStatus(updateEntityStatusInput: $updateEntityStatusInput)
    }
`,v=o.Ps`
    mutation RemoveProduct($removeProductId: String!) {
        removeProduct(id: $removeProductId) {
            ok
            message
        }
    }
`,u=o.Ps`
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
`,n=o.Ps`
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
`,P=o.Ps`
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
`,h=o.Ps`
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
`,b=o.Ps`
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
`,E=o.Ps`
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
`,I=o.Ps`
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
`,A=o.Ps`
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
                guarantyDescription

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

                width
                length
                height
                weight
                volume


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
`),d=o.Ps`
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
`,i=o.Ps`
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
`,S=o.Ps`
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
`},53308:(f,T,a)=>{a.d(T,{L0:()=>u,Tx:()=>y,_s:()=>l,aq:()=>c,gz:()=>g});var o=a(19212),p=a(24234),m=a(88320);const c=(P,h)=>{const b=P.params.productId;return b&&"new"!==b?(0,o.f3M)(p.s).getProductById(b):{}},l=(P,h)=>(0,o.f3M)(p.s).getProducts(),y=(P,h)=>(0,o.f3M)(p.s).findActiveProducts(),u=(P,h)=>(0,o.f3M)(p.s).findIngredients(),g=(P,h)=>(0,o.f3M)(m.T).getProductsInStockAvailable()},24234:(f,T,a)=>{a.d(T,{s:()=>E});var o=a(62660),p=a(48180),m=a(94664),c=a(99397),l=a(37398),y=a(11486),v=a(97214),u=a(78501),g=a(12936),n=a(30593),P=a(19212),h=a(50967),b=a(84221);let E=(()=>{class I{constructor(t,e){this.apolloProvider=t,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createProduct(t){return this.store.select(g.nR).pipe((0,p.q)(1),(0,m.w)(e=>this._apollo.mutate({mutation:n.l9,variables:{createProductInput:t},errorPolicy:"all"}).pipe((0,c.b)(({data:s})=>{const r=(0,o.Z)(e);r.push(s.createProduct.product),this.store.dispatch((0,u.RU)({products:r}))}))))}importProductsFromTemplateFile(t,e){return this._apollo.mutate({mutation:n._z,variables:{importProductsTemplateFileInput:{products:t,depotId:e}},errorPolicy:"all"}).pipe((0,c.b)(({data:s})=>{this.store.dispatch((0,u.RU)({products:s.importProductsFromTemplateFile.products})),this.store.dispatch((0,v.Jr)({pagination:s.importProductsFromTemplateFile.pagination}))}))}getProducts(t=0,e=50,s="name",r="asc",d=""){return this._apollo.query({query:n.tT,errorPolicy:"all",variables:{page:t,size:e,sort:s,order:r,search:d}}).pipe((0,c.b)(({data:i})=>{this.store.dispatch((0,u.RU)({products:i.findAllProducts.products})),this.store.dispatch((0,v.Jr)({pagination:i.findAllProducts.pagination}))}))}findProductsToList(){return this._apollo.query({query:n.XX,errorPolicy:"all"}).pipe((0,c.b)(({data:t})=>{this.store.dispatch((0,u.RU)({products:t.findProductsToList.products}))}))}findIngredients(){return this._apollo.query({query:n.ES,errorPolicy:"all"}).pipe((0,c.b)(({data:t})=>{this.store.dispatch((0,u.RU)({products:t.findIngredients.products}))}))}getProductsByMerchant(t=1,e=50,s="name",r="asc",d=""){return this._apollo.query({query:n.RO,errorPolicy:"all",variables:{offset:e*(t-1),limit:e,sort:s,order:r,search:d}}).pipe((0,c.b)(({data:i})=>{this.store.dispatch((0,u.RU)({products:i.findAllProductsByMerchant.products})),this.store.dispatch((0,v.Jr)({pagination:i.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:n.$k,errorPolicy:"all"}).pipe((0,c.b)(({})=>{}))}findActiveProducts(t="",e=10){return this._apollo.query({query:n.FF,variables:{search:t,size:e},errorPolicy:"all"}).pipe((0,l.U)(({data:s})=>s?s.findActiveProducts:[]),(0,c.b)(s=>{s&&this.store.dispatch((0,u.RU)({products:s}))}))}findProductsByUpcS(t=[]){return this._apollo.query({query:n.hP,variables:{upcS:t},errorPolicy:"all"}).pipe((0,l.U)(({data:e})=>e?e.findProductsByUpcS:[]))}getProductsInactive(){return this._apollo.query({query:n.E4,errorPolicy:"all"}).pipe((0,c.b)(({})=>{}))}getProductsExhausted(){return this._apollo.query({query:n.DI,errorPolicy:"all"}).pipe((0,c.b)(({})=>{}))}getProductById(t){return this._apollo.query({query:n.N4,variables:{productId:t},errorPolicy:"all"}).pipe((0,c.b)(({data:e})=>{this.store.dispatch((0,u.Gr)({product:e.findProductById.product}))}))}updateProduct(t){return this.store.select(g.nR).pipe((0,p.q)(1),(0,m.w)(e=>this._apollo.mutate({mutation:n.Q7,variables:{updateProductInput:t},errorPolicy:"all"}).pipe((0,c.b)(({data:s})=>{const r=(0,o.Z)(e);r[e.findIndex(i=>i.id===t.id)]=s.updateProduct.product,this.store.dispatch((0,u.RU)({products:r})),this.store.dispatch((0,u.Gr)({product:s.updateProduct.product}))}))))}updateProductStatus(t){return this.store.select(g.nR).pipe((0,p.q)(1),(0,m.w)(e=>this._apollo.mutate({mutation:n.Yv,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,c.b)(({data:s})=>{if(s){const r=(0,o.Z)(e);r[e.findIndex(i=>i.id===t.id)].active=t.active,this.store.dispatch((0,u.RU)({products:r}))}}))))}updateProductImages(t,e,s){return this._apollo.mutate({mutation:n.Pn,variables:{updateProductById:t,thumbnail:e,images:s},errorPolicy:"all"}).pipe((0,l.U)(({data:r})=>r?r.updateProductImages:null),(0,c.b)(r=>{r&&this.store.dispatch((0,u.nS)({id:r.product.id,thumbnail:r.product.thumbnail,images:r.product.images}))}))}removeProduct(t){return this.store.select(g.nR).pipe((0,p.q)(1),(0,m.w)(e=>this._apollo.mutate({mutation:n.eI,variables:{removeProductId:t},errorPolicy:"all"}).pipe((0,c.b)(({errors:s})=>{if(s)return;const r=(0,o.Z)(e),d=e.findIndex(i=>i.id===t);r.splice(d,1),this.store.dispatch((0,u.RU)({products:r}))}))))}getTags(t=1,e=50,s="name",r="asc",d=""){return this._apollo.query({query:n.F$,errorPolicy:"all",variables:{offset:e*(t-1),limit:e,sort:s,order:r,search:d}}).pipe((0,c.b)(({data:i})=>{this.store.dispatch((0,u.mG)({tags:i.findAllTags.tags}))}))}createTag(t){return this.store.select(g.a0).pipe((0,p.q)(1),(0,m.w)(e=>this._apollo.mutate({mutation:n.Zm,variables:{createTagInput:t},errorPolicy:"all"}).pipe((0,c.b)(({data:s})=>{const r=(0,o.Z)(e);r.push(s.createTag.tag),this.store.dispatch((0,u.mG)({tags:r}))}))))}updateTag(t){return this.store.select(g.a0).pipe((0,p.q)(1),(0,m.w)(e=>this._apollo.mutate({mutation:n.qb,variables:{updateTagInput:t},errorPolicy:"all"}).pipe((0,c.b)(({data:s})=>{const r=(0,o.Z)(e);r[e.findIndex(i=>i.id===t.id)]=s.updateTag.tag,this.store.dispatch((0,u.mG)({tags:r}))}))))}deleteTag(t){return this.store.select(g.a0).pipe((0,p.q)(1),(0,m.w)(e=>this._apollo.mutate({mutation:n.ji,variables:{removeTagId:t},errorPolicy:"all"}).pipe((0,c.b)(()=>{const s=(0,o.Z)(e),r=e.findIndex(d=>d.id===t);s.splice(r,1),this.store.dispatch((0,u.mG)({tags:s}))}))))}getProductsAvailable(){return this._apollo.query({query:n.BD,errorPolicy:"all"}).pipe((0,c.b)(({})=>{}))}importStockFormTemplateFile(t){let e;function s(i){return{upc:i.UPC?i.UPC.toString():null,sku:i.SKU?i.SKU.toString():null,bCode:i.C\u00f3digo?i.C\u00f3digo.toString():null,name:i.Nombre,description:i.Descripci\u00f3n,uom:i["Unidad de Medida"],quantity:i.Cantidad,cost:i.Costo,price:i.Precio,brand:i.Marca,weight:i.Peso,width:i.Ancho,length:i.Largo,height:i.Altura,volume:i.Volumen}}const r=t.target,d=new FileReader;d.onload=i=>{const S=y.ij(i.target.result,{type:"binary"});e=y.P6.sheet_to_json(S.Sheets[S.SheetNames[0]]);const C=e.map(s);this.store.dispatch((0,u.dy)({products:C}))},d.readAsBinaryString(r.files[0])}static#t=this.\u0275fac=function(e){return new(e||I)(P.LFG(h._M),P.LFG(b.yh))};static#e=this.\u0275prov=P.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})()},88320:(f,T,a)=>{a.d(T,{T:()=>E});var o=a(37398),p=a(99397),m=a(97214),c=a(33815),l=a(50967);const y=l.Ps`
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
`,v=l.Ps`
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
`,u=l.Ps`
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
`,g=l.Ps`
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
`;var n=a(78501),P=a(30593),h=a(19212),b=a(84221);let E=(()=>{class I{constructor(t,e){this.apolloProvider=t,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}getStocks(t=0,e=50,s="updatedAt",r="asc",d="",i="",$="",S=null){return this._apollo.query({query:y,errorPolicy:"all",variables:{page:t,size:e,sort:s,order:r,search:d,depotId:i,productId:$,availability:S}}).pipe((0,o.U)(({data:_})=>_?_.stocks:null),(0,p.b)(_=>{_&&(this.store.dispatch((0,c.Z4)({stocks:_.stocks})),this.store.dispatch((0,m.Jr)({pagination:_.pagination})))}))}findStockProducts(t="",e=10,s=null,r=null){return this._apollo.query({query:u,errorPolicy:"all",variables:{search:t,size:e,depotId:s,availability:r}}).pipe((0,o.U)(({data:d})=>d?d.findStockProducts.products:null),(0,p.b)(d=>{d&&this.store.dispatch((0,n.RU)({products:d}))}))}getProductsInStockAvailable(t="",e=50,s=null){return this._apollo.query({query:g,variables:{search:t,size:e,depotId:s},errorPolicy:"all"}).pipe((0,o.U)(({data:r})=>r?r.productsInStockAvailable:null),(0,p.b)(r=>{r&&this.store.dispatch((0,n.Pj)({productsInStock:r}))}))}getProductsInStockByDepot(t,e="",s=10){return this._apollo.query({query:P.s4,variables:{depotId:t,search:e,size:s},errorPolicy:"all"}).pipe((0,o.U)(({data:r})=>r?r.productsInStockByDepot:[]),(0,p.b)(r=>{r&&this.store.dispatch((0,n.Pj)({productsInStock:r}))}))}findStocks(t,e,s){return this._apollo.query({query:v,variables:{depotId:t,productId:e,availability:s},errorPolicy:"all"}).pipe((0,o.U)(({data:r})=>r?r.findStocks:[]))}static#t=this.\u0275fac=function(e){return new(e||I)(h.LFG(l._M),h.LFG(b.yh))};static#e=this.\u0275prov=h.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})()},62660:(f,T,a)=>{a.d(T,{Z:()=>l});var o=a(89711);const l=function c(y){return(0,o.Z)(y,5)}}}]);