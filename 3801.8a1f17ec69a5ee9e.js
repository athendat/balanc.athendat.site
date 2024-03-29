"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3801],{84342:(A,_,a)=>{a.d(_,{Ax:()=>I,B9:()=>d,Cm:()=>n,De:()=>r,Fu:()=>S,GR:()=>E,J:()=>T,LS:()=>v,Op:()=>i,YV:()=>c,bM:()=>y,gT:()=>t,hE:()=>b,mU:()=>f,my:()=>e,oH:()=>u,pg:()=>h,q:()=>l,r:()=>P,xq:()=>p,zb:()=>m,zk:()=>$});var o=a(73512);const p=o.J1`
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
`,c=(o.J1`
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
`,o.J1`
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
`),l=o.J1`
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
`,y=o.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateProductStatus(updateEntityStatusInput: $updateEntityStatusInput)
    }
`,S=o.J1`
    mutation RemoveProduct($removeProductId: String!) {
        removeProduct(id: $removeProductId) {
            ok
            message
        }
    }
`,u=o.J1`
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
`,h=o.J1`
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
`,n=o.J1`
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
`,m=o.J1`
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
`,P=o.J1`
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
`,v=o.J1`
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
`,b=o.J1`
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
`,I=o.J1`
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
`,f=o.J1`
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
`,t=o.J1`
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
`,e=o.J1`
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
`,r=(o.J1`
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
`,o.J1`
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
`),d=o.J1`
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
`,i=o.J1`
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
`,$=o.J1`
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
`,E=o.J1`
    mutation RemoveTag($removeTagId: String!) {
        removeTag(id: $removeTagId) {
            ok
            message
        }
    }
`,T=o.J1`
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
`},43801:(A,_,a)=>{a.d(_,{Bj:()=>l,N4:()=>h,Tn:()=>u,bN:()=>y,eX:()=>c});var o=a(54438),p=a(36296),g=a(4840);const c=(m,P)=>{const v=m.params.productId;return v&&"new"!==v?(0,o.WQX)(p.g).getProductById(v):{}},l=(m,P)=>(0,o.WQX)(p.g).getProducts(),y=(m,P)=>(0,o.WQX)(p.g).findActiveProducts(),u=(m,P)=>(0,o.WQX)(p.g).findIngredients(),h=(m,P)=>(0,o.WQX)(g.t).getProductsInStockAvailable()},36296:(A,_,a)=>{a.d(_,{g:()=>b});var o=a(33446),p=a(96697),g=a(25558),c=a(88141),l=a(96354),y=a(62288),S=a(98216),u=a(39928),h=a(13189),n=a(84342),m=a(54438),P=a(73512),v=a(59640);let b=(()=>{class I{constructor(t,e){this.apolloProvider=t,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createProduct(t){return this.store.select(h.VW).pipe((0,p.s)(1),(0,g.n)(e=>this._apollo.mutate({mutation:n.xq,variables:{createProductInput:t},errorPolicy:"all"}).pipe((0,c.M)(({data:s})=>{const r=(0,o.A)(e);r.push(s.createProduct.product),this.store.dispatch((0,u.d9)({products:r}))}))))}importProductsFromTemplateFile(t,e){return this._apollo.mutate({mutation:n.YV,variables:{importProductsTemplateFileInput:{products:t,depotId:e}},errorPolicy:"all"}).pipe((0,c.M)(({data:s})=>{this.store.dispatch((0,u.d9)({products:s.importProductsFromTemplateFile.products})),this.store.dispatch((0,S.Bp)({pagination:s.importProductsFromTemplateFile.pagination}))}))}getProducts(t=0,e=50,s="name",r="asc",d=""){return this._apollo.query({query:n.oH,errorPolicy:"all",variables:{page:t,size:e,sort:s,order:r,search:d}}).pipe((0,c.M)(({data:i})=>{this.store.dispatch((0,u.d9)({products:i.findAllProducts.products})),this.store.dispatch((0,S.Bp)({pagination:i.findAllProducts.pagination}))}))}findProductsToList(){return this._apollo.query({query:n.pg,errorPolicy:"all"}).pipe((0,c.M)(({data:t})=>{this.store.dispatch((0,u.d9)({products:t.findProductsToList.products}))}))}findIngredients(){return this._apollo.query({query:n.Cm,errorPolicy:"all"}).pipe((0,c.M)(({data:t})=>{this.store.dispatch((0,u.d9)({products:t.findIngredients.products}))}))}getProductsByMerchant(t=1,e=50,s="name",r="asc",d=""){return this._apollo.query({query:n.zb,errorPolicy:"all",variables:{offset:e*(t-1),limit:e,sort:s,order:r,search:d}}).pipe((0,c.M)(({data:i})=>{this.store.dispatch((0,u.d9)({products:i.findAllProductsByMerchant.products})),this.store.dispatch((0,S.Bp)({pagination:i.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:n.r,errorPolicy:"all"}).pipe((0,c.M)(({})=>{}))}findActiveProducts(t="",e=10){return this._apollo.query({query:n.LS,variables:{search:t,size:e},errorPolicy:"all"}).pipe((0,l.T)(({data:s})=>s?s.findActiveProducts:[]),(0,c.M)(s=>{s&&this.store.dispatch((0,u.d9)({products:s}))}))}findProductsByUpcS(t=[]){return this._apollo.query({query:n.hE,variables:{upcS:t},errorPolicy:"all"}).pipe((0,l.T)(({data:e})=>e?e.findProductsByUpcS:[]))}getProductsInactive(){return this._apollo.query({query:n.Ax,errorPolicy:"all"}).pipe((0,c.M)(({})=>{}))}getProductsExhausted(){return this._apollo.query({query:n.mU,errorPolicy:"all"}).pipe((0,c.M)(({})=>{}))}getProductById(t){return this._apollo.query({query:n.De,variables:{productId:t},errorPolicy:"all"}).pipe((0,c.M)(({data:e})=>{this.store.dispatch((0,u.yz)({product:e.findProductById.product}))}))}updateProduct(t){return this.store.select(h.VW).pipe((0,p.s)(1),(0,g.n)(e=>this._apollo.mutate({mutation:n.q,variables:{updateProductInput:t},errorPolicy:"all"}).pipe((0,c.M)(({data:s})=>{const r=(0,o.A)(e);r[e.findIndex(i=>i.id===t.id)]=s.updateProduct.product,this.store.dispatch((0,u.d9)({products:r})),this.store.dispatch((0,u.yz)({product:s.updateProduct.product}))}))))}updateProductStatus(t){return this.store.select(h.VW).pipe((0,p.s)(1),(0,g.n)(e=>this._apollo.mutate({mutation:n.bM,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,c.M)(({data:s})=>{if(s){const r=(0,o.A)(e);r[e.findIndex(i=>i.id===t.id)].active=t.active,this.store.dispatch((0,u.d9)({products:r}))}}))))}updateProductImages(t,e,s){return this._apollo.mutate({mutation:n.B9,variables:{updateProductById:t,thumbnail:e,images:s},errorPolicy:"all"}).pipe((0,l.T)(({data:r})=>r?r.updateProductImages:null),(0,c.M)(r=>{r&&this.store.dispatch((0,u.NM)({id:r.product.id,thumbnail:r.product.thumbnail,images:r.product.images}))}))}removeProduct(t){return this.store.select(h.VW).pipe((0,p.s)(1),(0,g.n)(e=>this._apollo.mutate({mutation:n.Fu,variables:{removeProductId:t},errorPolicy:"all"}).pipe((0,c.M)(({errors:s})=>{if(s)return;const r=(0,o.A)(e),d=e.findIndex(i=>i.id===t);r.splice(d,1),this.store.dispatch((0,u.d9)({products:r}))}))))}getTags(t=1,e=50,s="name",r="asc",d=""){return this._apollo.query({query:n.J,errorPolicy:"all",variables:{offset:e*(t-1),limit:e,sort:s,order:r,search:d}}).pipe((0,c.M)(({data:i})=>{this.store.dispatch((0,u.Wt)({tags:i.findAllTags.tags}))}))}createTag(t){return this.store.select(h.O).pipe((0,p.s)(1),(0,g.n)(e=>this._apollo.mutate({mutation:n.Op,variables:{createTagInput:t},errorPolicy:"all"}).pipe((0,c.M)(({data:s})=>{const r=(0,o.A)(e);r.push(s.createTag.tag),this.store.dispatch((0,u.Wt)({tags:r}))}))))}updateTag(t){return this.store.select(h.O).pipe((0,p.s)(1),(0,g.n)(e=>this._apollo.mutate({mutation:n.zk,variables:{updateTagInput:t},errorPolicy:"all"}).pipe((0,c.M)(({data:s})=>{const r=(0,o.A)(e);r[e.findIndex(i=>i.id===t.id)]=s.updateTag.tag,this.store.dispatch((0,u.Wt)({tags:r}))}))))}deleteTag(t){return this.store.select(h.O).pipe((0,p.s)(1),(0,g.n)(e=>this._apollo.mutate({mutation:n.GR,variables:{removeTagId:t},errorPolicy:"all"}).pipe((0,c.M)(()=>{const s=(0,o.A)(e),r=e.findIndex(d=>d.id===t);s.splice(r,1),this.store.dispatch((0,u.Wt)({tags:s}))}))))}getProductsAvailable(){return this._apollo.query({query:n.my,errorPolicy:"all"}).pipe((0,c.M)(({})=>{}))}importStockFormTemplateFile(t){let e;function s(i){return{upc:i.UPC?i.UPC.toString():null,sku:i.SKU?i.SKU.toString():null,bCode:i.C\u00f3digo?i.C\u00f3digo.toString():null,name:i.Nombre,description:i.Descripci\u00f3n,uom:i["Unidad de Medida"],quantity:i.Cantidad,cost:i.Costo,price:i.Precio,brand:i.Marca,weight:i.Peso,width:i.Ancho,length:i.Largo,height:i.Altura,volume:i.Volumen}}const r=t.target,d=new FileReader;d.onload=i=>{const E=y.LF(i.target.result,{type:"binary"});e=y.Wp.sheet_to_json(E.Sheets[E.SheetNames[0]]);const C=e.map(s);this.store.dispatch((0,u.GQ)({products:C}))},d.readAsBinaryString(r.files[0])}static#t=this.\u0275fac=function(e){return new(e||I)(m.KVO(P.Ic),m.KVO(v.il))};static#e=this.\u0275prov=m.jDH({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})()},4840:(A,_,a)=>{a.d(_,{t:()=>b});var o=a(96354),p=a(88141),g=a(98216),c=a(49074),l=a(73512);const y=l.J1`
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
`,S=l.J1`
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
`,u=l.J1`
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
`,h=l.J1`
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
`;var n=a(39928),m=a(84342),P=a(54438),v=a(59640);let b=(()=>{class I{constructor(t,e){this.apolloProvider=t,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}getStocks(t=0,e=50,s="updatedAt",r="asc",d="",i="",$="",E=null){return this._apollo.query({query:y,errorPolicy:"all",variables:{page:t,size:e,sort:s,order:r,search:d,depotId:i,productId:$,availability:E}}).pipe((0,o.T)(({data:T})=>T?T.stocks:null),(0,p.M)(T=>{T&&(this.store.dispatch((0,c.eu)({stocks:T.stocks})),this.store.dispatch((0,g.Bp)({pagination:T.pagination})))}))}findStockProducts(t="",e=10,s=null,r=null){return this._apollo.query({query:u,errorPolicy:"all",variables:{search:t,size:e,depotId:s,availability:r}}).pipe((0,o.T)(({data:d})=>d?d.findStockProducts.products:null),(0,p.M)(d=>{d&&this.store.dispatch((0,n.d9)({products:d}))}))}getProductsInStockAvailable(t="",e=50,s=null){return this._apollo.query({query:h,variables:{search:t,size:e,depotId:s},errorPolicy:"all"}).pipe((0,o.T)(({data:r})=>r?r.productsInStockAvailable:null),(0,p.M)(r=>{r&&this.store.dispatch((0,n.ql)({productsInStock:r}))}))}getProductsInStockByDepot(t,e="",s=10){return this._apollo.query({query:m.gT,variables:{depotId:t,search:e,size:s},errorPolicy:"all"}).pipe((0,o.T)(({data:r})=>r?r.productsInStockByDepot:[]),(0,p.M)(r=>{r&&this.store.dispatch((0,n.ql)({productsInStock:r}))}))}findStocks(t,e,s){return this._apollo.query({query:S,variables:{depotId:t,productId:e,availability:s},errorPolicy:"all"}).pipe((0,o.T)(({data:r})=>r?r.findStocks:[]))}static#t=this.\u0275fac=function(e){return new(e||I)(P.KVO(l.Ic),P.KVO(v.il))};static#e=this.\u0275prov=P.jDH({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})()},33446:(A,_,a)=>{a.d(_,{A:()=>l});var o=a(99531);const l=function c(y){return(0,o.A)(y,5)}}}]);