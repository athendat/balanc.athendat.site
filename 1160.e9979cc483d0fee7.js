"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[1160],{56808:(U,k,c)=>{c.d(k,{hQ:()=>I,wQ:()=>f});var F=c(59640);const t=n=>n.customers,I=(0,F.Mz)(t,n=>n.customer),f=(0,F.Mz)(t,n=>n.customers)},72797:(U,k,c)=>{c.d(k,{h:()=>h});var F=c(84412),t=c(96354),I=c(88141),f=c(42409),n=c(98216),P=c(73512);const E=P.J1`
    mutation CreateCustomer($createCustomerInput: CreateCustomerInput!) {
        createCustomer(createCustomerInput: $createCustomerInput) {
            ok,
            message,

            customer {
                id,
                merchantId,
                logoUrl,
                type,
                name,
                nit

                phoneNumber {
                    stateCode,
                    phoneNumber,
                    label
                },

            }
        }
    }
`,y=P.J1`
    query FindAllCustomers($page: Int, $size: Int! $sort: String, $order: Order, $search: String ) {
        findAllCustomers(page: $page, size: $size, sort: $sort, order: $order, search: $search ) {
            ok,
            message,

            pagination {
                length,
                size,
                page,
                lastPage,
                startIndex,
                endIndex
            },

            customers {
                id,
                merchantId,
                active,
                logoUrl,
                code,
                type,
                name,
                domain,
                credit
                nit

                email {
                    email,
                    label
                },

                phoneNumber {
                    stateCode,
                    phoneNumber,
                    label
                },

                bankAccounts {
                    no
                },
            }
        }
    }
`,_=(P.J1`
    query FindAllActiveCustomers {
        findAllActiveCustomers {
            id,
            name,
            merchantId,
        }
    }
`,P.J1`
    query FindCustomerById($customerId: String!) {
        findCustomerById(id: $customerId ) {
            ok,
            message,

            customer {
                id,
                userId,
                merchantId,
                commercialId,
                active,
                name,
                code
                credit

                domain,
                address,
                city,
                state,
                country,
                zip,

                email {
                    email,
                    label
                },
                phoneNumber {
                    stateCode,
                    phoneNumber,
                    label
                },

                nit,
                type,

                bankAccounts {
                    no
                    currencyId
                    bankId
                    beneficiary
                }

                description,
                website,
                logoUrl,
                coverUrl,
            }
        }
    }
`),D=P.J1`
    mutation UpdateCustomer($updateCustomerInput: UpdateCustomerInput!) {
        updateCustomer(updateCustomerInput: $updateCustomerInput) {
            ok,
            message,

            customer {
                id,
                merchantId,
                logoUrl,
                type,
                name,
                domain

                phoneNumber {
                    stateCode,
                    phoneNumber,
                    label
                },
            }
        }
    }
`,R=P.J1`
    mutation UpdateCustomerStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCustomerStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,j=P.J1`
    mutation UpdateCustomerImage($imageProperty: String!, $updateEntityImageInput: UpdateEntityImageInput!) {
        updateCustomerImage(imageProperty: $imageProperty, updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,G=P.J1`
    mutation RemoveCustomer($customerId: String!) {
        removeCustomer(id: $customerId) {
            ok,
            message,
        }
    }
`,N=P.J1`
    query FindActiveCustomers($search: String!, $size: Int!) {
        findActiveCustomers(search: $search, size: $size) {
            id
            active
            name
            code
            credit
            logoUrl
        }
    }
`;c(45312);var w=c(54438),u=c(21626),g=c(59640);let h=(()=>{class b{constructor(p,v,x){this._httpClient=p,this.apolloProvider=v,this.store=x,this._domains=new F.t(null),this._apollo=this.apolloProvider.use("BALANC")}get domains$(){return this._domains.asObservable()}createCustomer(p){return this._apollo.mutate({mutation:E,variables:{createCustomerInput:p},errorPolicy:"all"}).pipe((0,t.T)(({data:v})=>v?v.createCustomer:null),(0,I.M)(v=>{v&&(this.store.dispatch((0,f.ff)({customer:v.customer})),this.store.dispatch((0,f.hv)({customer:v.customer})))}))}findAllCustomers(p=0,v=10,x="name",O="asc",L=null,st=!1){return this._apollo.query({query:y,variables:{page:p,size:v,sort:x,order:O,search:L},errorPolicy:"all"}).pipe((0,t.T)(({data:B})=>B?B.findAllCustomers:null),(0,I.M)(B=>{B&&(this.store.dispatch(st?(0,f.Yi)({customers:B.customers}):(0,f.GM)({customers:B.customers})),this.store.dispatch((0,n.Bp)({pagination:B.pagination})))}))}findActiveCustomers(p="",v=10){return this._apollo.query({query:N,variables:{search:p,size:v},errorPolicy:"all"}).pipe((0,t.T)(({data:x})=>x?x.findActiveCustomers:[]),(0,I.M)(x=>{x&&this.store.dispatch((0,f.GM)({customers:x}))}))}findCustomerById(p){return this._apollo.query({query:_,variables:{customerId:p},errorPolicy:"all"}).pipe((0,t.T)(({data:v})=>v?v.findCustomerById:null),(0,I.M)(v=>{v&&this.store.dispatch((0,f.hv)({customer:v.customer}))}))}updateCustomer(p){return this._apollo.mutate({mutation:D,variables:{updateCustomerInput:p},errorPolicy:"all"}).pipe((0,t.T)(({data:v})=>v?v.updateCustomer:null),(0,I.M)(v=>{v&&(this.store.dispatch((0,f.Gk)({customer:v.customer})),this.store.dispatch((0,f.hv)({customer:v.customer})))}))}updateCustomerStatus(p){return this._apollo.mutate({mutation:R,variables:{updateEntityStatusInput:p},errorPolicy:"all"}).pipe((0,I.M)(()=>{this.store.dispatch((0,f.uz)(p))}))}updateCustomerImage(p,v){return this._apollo.mutate({mutation:j,variables:{imageProperty:p,updateEntityImageInput:v},errorPolicy:"all"}).pipe((0,t.T)(({data:x})=>x?x.updateCustomerImage:null),(0,I.M)(x=>{x&&this.store.dispatch((0,f.pw)({...v,imageProperty:p}))}))}removeCustomer(p){return this._apollo.mutate({mutation:G,variables:{customerId:p},errorPolicy:"all"}).pipe((0,I.M)(()=>{this.store.dispatch((0,f.Be)({id:p}))}))}getDomains(){return this._httpClient.get("assets/data/domains.json").pipe((0,t.T)(p=>p.sort((v,x)=>v.name.toLowerCase()<x.name.toLowerCase()?-1:v.name.toLowerCase()>x.name.toLowerCase()?1:void 0)),(0,I.M)(p=>{this._domains.next(p)}))}getDomainFiltered(p){return this._httpClient.get("assets/data/domains.json").pipe((0,t.T)(v=>v.filter(x=>x.name===p)))}static#t=this.\u0275fac=function(v){return new(v||b)(w.KVO(u.Qq),w.KVO(P.Ic),w.KVO(g.il))};static#e=this.\u0275prov=w.jDH({token:b,factory:b.\u0275fac,providedIn:"root"})}return b})()},23301:(U,k,c)=>{c.d(k,{I:()=>f,p:()=>I});var F=c(54438),t=c(92581);const I=(n,P)=>(0,F.WQX)(t.v).getCurrencies(),f=(n,P)=>(0,F.WQX)(t.v).getActiveCurrency()},91401:(U,k,c)=>{c.d(k,{y$:()=>f});var F=c(59640);const t=n=>n.currencies,f=((0,F.Mz)(t,n=>n.currency),(0,F.Mz)(t,n=>n.currencies))},92581:(U,k,c)=>{c.d(k,{v:()=>w});var F=c(54438),t=c(96697),I=c(25558),f=c(88141),n=c(73512),P=c(59640),E=c(98216),y=c(54588),S=c(91401);const _=n.J1`
    mutation CreateCurrency($createCurrencyInput: CreateCurrencyInput!) {
        createCurrency(createCurrencyInput: $createCurrencyInput) {

            ok
            message

            currency {
                id
                active
                name
                iso
                symbol
            }

        }
    }
`,D=n.J1`
mutation UpdateCurrency($updateCurrencyInput: UpdateCurrencyInput!) {
    updateCurrency(updateCurrencyInput: $updateCurrencyInput) {
        ok
        message

        currency {
            id
            active
            name
            iso
            symbol
        }
    }
}
`,R=n.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCurrencyStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`,j=n.J1`
mutation RemoveCurrency($removeCurrencyId: String!) {
    removeCurrency(id: $removeCurrencyId) {
        ok,
        message
    }
}
`,G=n.J1`
    query FindAllCurrencies($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllCurrencies(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            currencies {
                id
                active
                name
                iso
                symbol
            }
        }
    }
`,N=n.J1`
    query FindAllActiveCurrencies {
        findAllActiveCurrencies {
            ok
            message

            currencies {
                id
                name
                iso
            }
        }
    }
`,T=n.J1`
    query FindCurrencyById($findCurrencyByIdId: String!) {
        findCurrencyById(id: $findCurrencyByIdId) {
            ok
            message

            currency {
                id
                active
                name
                iso
                symbol
            }
        }
    }
`;let w=(()=>{class u{constructor(){this.apolloProvider=(0,F.WQX)(n.Ic),this.store=(0,F.WQX)(P.il),this._apollo=this.apolloProvider.use("BALANC")}createCurrency(d){return this.store.select(S.y$).pipe((0,t.s)(1),(0,I.n)(h=>this._apollo.mutate({mutation:_,variables:{createCurrencyInput:d},errorPolicy:"all"}).pipe((0,f.M)(({data:b})=>{const l=structuredClone(h);l.push(b.createCurrency.currency),this.store.dispatch((0,y.Ih)({currencies:l}))}))))}getCurrencies(d=1,h=20,b="name",l="asc",p=""){return this._apollo.query({query:G,variables:{offset:h*(d-1),limit:h,sort:b,order:l,search:p},errorPolicy:"all"}).pipe((0,f.M)(({data:v})=>{this.store.dispatch((0,E.Bp)({pagination:v.findAllCurrencies.pagination})),this.store.dispatch((0,y.Ih)({currencies:v.findAllCurrencies.currencies}))}))}getActiveCurrency(){return this._apollo.query({query:N,errorPolicy:"all"}).pipe((0,f.M)(({data:d})=>{d&&this.store.dispatch((0,y.Ih)({currencies:d.findAllActiveCurrencies.currencies}))}))}getCurrencyById(d){return this._apollo.query({query:T,variables:{findCurrencyByIdId:d},errorPolicy:"all"}).pipe((0,f.M)(({data:h})=>{this.store.dispatch((0,y.MN)({currency:h.findCurrencyById.currency}))}))}updateCurrency(d){return this.store.select(S.y$).pipe((0,t.s)(1),(0,I.n)(h=>this._apollo.mutate({mutation:D,variables:{updateCurrencyInput:d},errorPolicy:"all"}).pipe((0,f.M)(({data:b})=>{const l=structuredClone(h);l[h.findIndex(v=>v.id===d.id)]=b.updateCurrency.currency,this.store.dispatch((0,y.Ih)({currencies:l}))}))))}updateCurrencyStatus(d){return this.store.select(S.y$).pipe((0,t.s)(1),(0,I.n)(h=>this._apollo.mutate({mutation:R,variables:{updateEntityStatusInput:d},errorPolicy:"all"}).pipe((0,f.M)(({})=>{const l=structuredClone(h);l[h.findIndex(v=>v.id===d.id)].active=d.active,this.store.dispatch((0,y.Ih)({currencies:l}))}))))}removeCurrency(d){return this.store.select(S.y$).pipe((0,t.s)(1),(0,I.n)(h=>this._apollo.mutate({mutation:j,variables:{removeCurrencyId:d},errorPolicy:"all"}).pipe((0,f.M)(({})=>{const l=structuredClone(h),p=h.findIndex(v=>v.id===d);l.splice(p,1),this.store.dispatch((0,y.Ih)({currencies:l}))}))))}static#t=this.\u0275fac=function(h){return new(h||u)};static#e=this.\u0275prov=F.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},61160:(U,k,c)=>{c.r(k),c.d(k,{default:()=>So});var F=c(51188),t=c(54438);let I=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["production"]],standalone:!0,features:[t.aNF],decls:1,vars:0,template:function(i,r){1&i&&t.nrm(0,"router-outlet")},dependencies:[F.n3],encapsulation:2,changeDetection:0})}return o})(),f=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-production-panel"]],standalone:!0,features:[t.aNF],decls:2,vars:0,template:function(i,r){1&i&&(t.j41(0,"p"),t.EFF(1,"production-panel works!"),t.k0s())},encapsulation:2})}return o})();var n=c(89417),P=c(67336),E=c(88834),y=c(82765),S=c(32102),_=c(99213),D=c(59042),R=c(96695),j=c(9183),G=c(86600),N=c(82798),T=c(30450),w=c(95416),u=c(2042),g=c(60177),d=c(60850),h=c(75351),b=c(7673),l=c(21413),p=c(56977),v=c(99172),x=c(96354),O=c(70152),L=c(59640),st=c(91401),B=c(13189),K=c(46601),Y=c(94794),ct=c(5946),$=c(73512),q=c(88141);const _t=$.J1`
    mutation CreateProductionDataSheet($createProductionDataSheetInput: CreateProductionDataSheetInput!) {
        createProductionDataSheet(createProductionDataSheetInput: $createProductionDataSheetInput) {

            ok
            message

            productionDataSheet {
                active
                allergens
                cookingTime
                totalCost
                tax
                margin
                portions
                portionCost
                portionSize
                currency {
                    iso
                    name
                }
                currencyId
                categoryId
                category {
                    name
                }
                description
                elaboration
                equipments
                id
                images
                ingredients {
                    quantity
                    cost
                    productId
                    product {
                        name
                        cost
                    }
                    uomId
                    uom {
                        abbr
                        name
                        type
                    }
                }
                merchant {
                    name
                }
                merchantId
                name
                portionSize
                preparationTime
                presentation
                price
                producedQuantity
                slug
                temperature
                thumbnail
                uom {
                    abbr
                    name
                }
                uomId
            }

        }
    }
`,bt=$.J1`
    mutation UpdateProductionDataSheet($updateProductionDataSheetInput: UpdateProductionDataSheetInput!) {
        updateProductionDataSheet(updateProductionDataSheetInput: $updateProductionDataSheetInput) {
            ok
            message

            productionDataSheet {
                active
                allergens
                cookingTime
                totalCost
                tax
                margin
                portions
                portionCost
                portionSize
                currency {
                    iso
                    name
                }
                currencyId
                categoryId
                category {
                    name
                }
                description
                elaboration
                equipments
                id
                images
                ingredients {
                    quantity
                    cost
                    productId
                    product {
                        name
                        cost
                    }
                    uomId
                    uom {
                        abbr
                        name
                        type
                    }
                }
                merchant {
                    name
                }
                merchantId
                name
                portionSize
                preparationTime
                presentation
                price
                producedQuantity
                slug
                temperature
                thumbnail
                uom {
                    abbr
                    name
                }
                uomId
            }
        }
    }
`,It=$.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateProductionDataSheetStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,xt=$.J1`
    mutation RemoveProductionDataSheet($productionDataSheetId: String!) {
        removeProductionDataSheet(id: $productionDataSheetId) {
            ok
            message
        }
    }
`,Pt=$.J1`
    query FindAllProductionDataSheets($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllProductionDataSheets(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            productionDataSheets {
                active
                allergens
                cookingTime
                totalCost
                tax
                margin
                portions
                portionCost
                portionSize
                currency {
                    iso
                    name
                }
                currencyId
                categoryId
                category {
                    name
                }
                description
                elaboration
                equipments
                id
                images
                ingredients {
                    quantity
                    cost
                    productId
                    product {
                        name
                        cost
                    }
                    uomId
                    uom {
                        abbr
                        name
                        type
                    }
                }
                merchant {
                    name
                }
                merchantId
                name
                portionSize
                preparationTime
                presentation
                price
                producedQuantity
                slug
                temperature
                thumbnail
                uom {
                    abbr
                    name
                }
                uomId
            }
        }
    }
`,Rt=$.J1`
    query FindAllProductionDataSheetsActive {
        findAllProductionDataSheetsActive {
            ok
            message

            productionDataSheets {
                id
                name
                totalCost
            }
        }
    }
`,Dt=$.J1`
    query FindProductionDataSheetById($productionDataSheetId: String!) {
        findProductionDataSheetById(id: $productionDataSheetId) {
            ok
            message

            productionDataSheet {
                active
                allergens
                cookingTime
                totalCost
                tax
                margin
                portions
                portionCost
                portionSize
                currency {
                    iso
                    name
                }
                currencyId
                categoryId
                category {
                    name
                }
                description
                elaboration
                equipments
                id
                images
                ingredients {
                    quantity
                    cost
                    productId
                    product {
                        name
                        cost
                    }
                    uomId
                    uom {
                        abbr
                        name
                        type
                    }
                }
                merchant {
                    name
                }
                merchantId
                name
                portionSize
                preparationTime
                presentation
                price
                producedQuantity
                slug
                temperature
                thumbnail
                uom {
                    abbr
                    name
                }
                uomId
            }
        }
    }
`;var mt=c(45312);const A=Symbol("STATE_SIGNAL");function Q(o,...a){o[A].update(e=>a.reduce((i,r)=>({...i,..."function"==typeof r?r(i):r}),e))}function ut(o){const a=(0,t.O8t)(()=>o());return function kt(o){return o?.constructor===Object}(a)?new Proxy(o,{get:(e,i)=>i in a?((0,t.Hps)(e[i])||Object.defineProperty(e,i,{value:(0,t.EWP)(()=>e()[i]),configurable:!0}),ut(e[i])):e[i]}):o}function pt(...o){const a=[...o],e="providedIn"in a[0]?a.shift():{},i=a;return(()=>{class s{constructor(){const C=i.reduce((at,yo)=>yo(at),function Et(){return{[A]:(0,t.vPA)({}),slices:{},signals:{},methods:{},hooks:{}}}()),{slices:M,signals:z,methods:J,hooks:rt}=C,it={...M,...z,...J};this[A]=C[A];for(const at in it)this[at]=it[at];const{onInit:nt,onDestroy:yt}=rt;nt&&nt(),yt&&(0,t.WQX)(t.abz).onDestroy(yt)}static \u0275fac=function(M){return new(M||s)};static \u0275prov=t.jDH({token:s,factory:s.\u0275fac,providedIn:e.providedIn||null})}return s})()}function V(o,a){return Object.keys(o).reduce((e,i)=>(a.includes(i)||(e[i]=o[i]),e),{})}function ht(o){return a=>{const e=o({[A]:a[A],...a.slices,...a.signals,...a.methods}),i=Object.keys(e),r=V(a.slices,i),s=V(a.signals,i);return{...a,slices:r,signals:s,methods:{...a.methods,...e}}}}function gt(o){return a=>{const e="function"==typeof o?o():o,i=Object.keys(e);a[A].update(C=>({...C,...e}));const r=i.reduce((C,M)=>{const z=(0,t.EWP)(()=>a[A]()[M]);return{...C,[M]:ut(z)}},{}),s=V(a.signals,i),m=V(a.methods,i);return{...a,slices:{...a.slices,...r},signals:s,methods:m}}}const H=pt({providedIn:"root"},gt({pagination:null,productionDataSheet:null,productionDataSheets:[]}),ht(o=>({setProductionDataSheetsList(a,e){Q(o,{productionDataSheets:a,pagination:e})},setProductionDataSheets(a){Q(o,{productionDataSheets:a})},setProductionDataSheet(a){Q(o,{productionDataSheet:a})}})));let W=(()=>{class o{#t;#e=(0,t.WQX)($.Ic);#o=(0,t.WQX)(H);constructor(){this.#t=this.#e.use(mt.c.GRAPHQL_PROVIDER)}createProductionDataSheet(e){return this.#t.mutate({mutation:_t,variables:{createProductionDataSheetInput:e},errorPolicy:"all"}).pipe((0,q.M)(({data:i})=>{const r=structuredClone(this.#o.productionDataSheets());r.push(i.createProductionDataSheet.productionDataSheet),this.#o.setProductionDataSheets(r)}))}findAllProductionDataSheets(e=0,i=20,r="name",s="asc",m=""){return this.#t.query({query:Pt,errorPolicy:"all",variables:{page:e,size:i,sort:r,order:s,search:m}}).pipe((0,q.M)(({data:C})=>{this.#o.setProductionDataSheetsList(C.findAllProductionDataSheets.productionDataSheets,C.findAllProductionDataSheets.pagination)}))}findActiveProductionDataSheets(){return this.#t.query({query:Rt,errorPolicy:"all"}).pipe((0,q.M)(({data:e})=>{this.#o.setProductionDataSheets(e.findAllProductionDataSheetsActive.productionDataSheets)}))}findProductionDataSheetById(e){return this.#t.query({query:Dt,variables:{productionDataSheetId:e},errorPolicy:"all"}).pipe((0,q.M)(({data:i})=>{this.#o.setProductionDataSheet(i.findProductionDataSheetById.productionDataSheet)}))}updateProductionDataSheet(e){return this.#t.mutate({mutation:bt,variables:{updateProductionDataSheetInput:e},errorPolicy:"all"}).pipe((0,q.M)(({data:i})=>{const r=structuredClone(this.#o.productionDataSheets()),s=r.findIndex(m=>m.id===e.id);r[s]=i.updateProductionDataSheet.productionDataSheet,this.#o.setProductionDataSheets(r)}))}updateProductionDataSheetStatus(e){return this.#t.mutate({mutation:It,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,q.M)(()=>{const i=structuredClone(this.#o.productionDataSheets()),r=i.findIndex(m=>m.id===e.id),s=i[r];s.active=e.active,i[r]=s,this.#o.setProductionDataSheets(i)}))}removeProductionDataSheet(e){return this.#t.mutate({mutation:xt,variables:{productionDataSheetId:e},errorPolicy:"all"}).pipe((0,q.M)(()=>{const i=structuredClone(this.#o.productionDataSheets()),r=i.findIndex(s=>s.id===e);i.splice(r,1),this.#o.setProductionDataSheets(i)}))}static#n=this.\u0275fac=function(i){return new(i||o)};static#a=this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var $t=c(36296);const jt=[{name:"Altramuces",checked:!1},{name:"Apio",checked:!1},{name:"Cacahuetes",checked:!1},{name:"Crust\xe1ceos",checked:!1},{name:"Frutos de secos",checked:!1},{name:"Gluten",checked:!1},{name:"Huevos",checked:!1},{name:"L\xe1cteos",checked:!1},{name:"Moluscos",checked:!1},{name:"Mostaza",checked:!1},{name:"Pescado",checked:!1},{name:"S\xe9samo",checked:!1},{name:"Soja",checked:!1},{name:"Sulfitos",checked:!1}],Tt=[{id:"d1fdf6c2-bbfc-4135-9106-c1fe3a63c119",active:!0,name:"Gramo",abbr:"g",type:"peso"},{id:"a357b446-8ce7-4389-b960-b8cc40179bd1",active:!0,name:"Mililitro",abbr:"ml",type:"volumen"}];var Mt=c(5864),dt=c(73779),ft=c(64193),qt=c(55542);const At=(o,a)=>a.id,Gt=()=>({suppressScrollY:!0}),vt=o=>({"cursor-not-allowed":o});function wt(o,a){if(1&o){const e=t.RV6();t.j41(0,"button",61),t.bIt("click",function(){t.eBV(e);const r=t.XpG();return t.Njj(r.createProductionDataSheet())}),t.nrm(1,"mat-icon",62),t.j41(2,"span",63),t.EFF(3,"Guardar"),t.k0s()()}if(2&o){const e=t.XpG();t.Y8G("disabled",e.productionDataSheetForm.invalid)("ngClass",t.eq3(3,vt,e.productionDataSheetForm.invalid)),t.R7$(),t.Y8G("svgIcon","mat_solid:save")}}function Nt(o,a){if(1&o){const e=t.RV6();t.j41(0,"button",61),t.bIt("click",function(){t.eBV(e);const r=t.XpG();return t.Njj(r.updateProductionDataSheet())}),t.nrm(1,"mat-icon",62),t.j41(2,"span",63),t.EFF(3,"Actualizar"),t.k0s()()}if(2&o){const e=t.XpG();t.Y8G("disabled",e.productionDataSheetForm.invalid)("ngClass",t.eq3(3,vt,e.productionDataSheetForm.invalid)),t.R7$(),t.Y8G("svgIcon","mat_solid:refresh")}}function Bt(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El nombre del producto es obligatorio. "),t.k0s())}function Ut(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El nombre del producto debe contener entre 3 y 255 caracteres. "),t.k0s())}function Ot(o,a){if(1&o&&(t.j41(0,"mat-option",35),t.EFF(1),t.k0s()),2&o){const e=a.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.name," ")}}function Lt(o,a){if(1&o&&(t.j41(0,"mat-optgroup",64),t.Z7z(1,Ot,2,2,"mat-option",35,t.fX1),t.k0s()),2&o){const e=t.XpG().$implicit;t.Y8G("label",e.name)("disabled",!e.active),t.R7$(),t.Dyx(e.children)}}function Yt(o,a){if(1&o&&(t.j41(0,"mat-option",35),t.EFF(1),t.k0s()),2&o){const e=t.XpG().$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.name," ")}}function zt(o,a){if(1&o&&t.DNE(0,Lt,3,2,"mat-optgroup",64)(1,Yt,2,2,"mat-option",35),2&o){const e=a.$implicit;t.vxM(0,e.children.length>0?0:-1),t.R7$(),t.vxM(1,0===e.children.length?1:-1)}}function Qt(o,a){if(1&o){const e=t.RV6();t.j41(0,"mat-icon",65),t.bIt("click",function(){t.eBV(e);const r=t.XpG();return t.Njj(r.resetCategoryField())}),t.k0s()}}function Vt(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," Debe seleccionar una categor\xeda. "),t.k0s())}function Wt(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del tiempo de preparaci\xf3n del producto debe ser 0. "),t.k0s())}function Xt(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del tiempo de preparaci\xf3n del producto debe ser 999999999. "),t.k0s())}function Jt(o,a){if(1&o&&(t.j41(0,"mat-option",35),t.EFF(1),t.k0s()),2&o){const e=a.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.iso," ")}}function Kt(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," Debe seleccionar una Moneda. "),t.k0s())}function Ht(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El margen es obligatorio. "),t.k0s())}function Zt(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del margen debe ser 0. "),t.k0s())}function te(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del margen debe ser 999999999. "),t.k0s())}function ee(o,a){if(1&o&&(t.j41(0,"mat-option",35),t.EFF(1),t.k0s()),2&o){const e=a.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.abbr," ")}}function oe(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del tama\xf1o de la porci\xf3n del producto debe ser 0. "),t.k0s())}function re(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del tama\xf1o de la porci\xf3n del producto debe ser 999999999. "),t.k0s())}function ie(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del tiempo de cocci\xf3n del producto debe ser 0. "),t.k0s())}function ne(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del tiempo de cocci\xf3n del producto debe ser 999999999. "),t.k0s())}function ae(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El impuesto es obligatorio. "),t.k0s())}function se(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del impuesto debe ser 0. "),t.k0s())}function ce(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del impuesto debe ser 999999999. "),t.k0s())}function ue(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo de la cantidad de porciones debe ser 1. "),t.k0s())}function de(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xe1ximo del tama\xf1o de la porci\xf3n del producto debe ser 999999999. "),t.k0s())}function le(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del temperatura del producto debe ser 0. "),t.k0s())}function me(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El valor m\xednimo del temperatura del producto debe ser 999999999. "),t.k0s())}function pe(o,a){if(1&o){const e=t.RV6();t.j41(0,"mat-option",66),t.bIt("click",function(r){const s=t.eBV(e).$implicit;return t.XpG().addOrRemoveIngredient(s),t.Njj(r.stopPropagation())}),t.j41(1,"div",67),t.bIt("click",function(r){const s=t.eBV(e).$implicit;return t.XpG().addOrRemoveIngredient(s),t.Njj(r.stopPropagation())}),t.j41(2,"span",68),t.nrm(3,"mat-checkbox",69),t.EFF(4),t.k0s(),t.j41(5,"span",70),t.EFF(6),t.nI1(7,"number"),t.k0s()()()}if(2&o){const e=a.$implicit;t.Y8G("value",e),t.R7$(3),t.Y8G("checked",e.checked),t.R7$(),t.SpI(" ",e.name," "),t.R7$(2),t.Lme("",t.i5U(7,5,e.stock,"1.2-2")," ",e.uom.abbr,"")}}function he(o,a){if(1&o){const e=t.RV6();t.j41(0,"div",74)(1,"div",75)(2,"div"),t.EFF(3),t.k0s(),t.j41(4,"div",76),t.EFF(5),t.k0s(),t.j41(6,"mat-form-field",77)(7,"span",78),t.EFF(8),t.k0s(),t.nrm(9,"input",79),t.k0s(),t.j41(10,"div",80),t.EFF(11),t.k0s(),t.j41(12,"div",80),t.EFF(13),t.nI1(14,"number"),t.k0s(),t.j41(15,"div",81)(16,"button",82),t.bIt("click",function(){const r=t.eBV(e).$index,s=t.XpG(2);return t.Njj(s.removeIngredient(r))}),t.nrm(17,"mat-icon",83),t.k0s()()()()}if(2&o){const e=a.$implicit,i=a.$index,r=t.XpG(2);t.R7$(),t.Y8G("formGroupName",i),t.R7$(2),t.JRh(i+1),t.R7$(2),t.SpI("",r.getProductName(e.get("productId").value)," "),t.R7$(),t.Y8G("subscriptSizing","dynamic"),t.R7$(2),t.SpI(" ",r.getUnit(e.get("productId").value),""),t.R7$(),t.Y8G("min",1)("formControl",e.get("quantity")),t.R7$(2),t.SpI(" ",r.getCost(e.get("productId").value)," "),t.R7$(2),t.SpI(" ",t.i5U(14,10,r.getCost(e.get("productId").value)*e.get("quantity").value,"1.2-2")," "),t.R7$(4),t.Y8G("svgIcon","mat_solid:close")}}function ge(o,a){if(1&o&&(t.j41(0,"div",55)(1,"div",71),t.nrm(2,"div"),t.j41(3,"div",72),t.EFF(4," Ingrediente "),t.k0s(),t.j41(5,"div",73),t.EFF(6," Cantidad "),t.k0s(),t.j41(7,"div",73),t.EFF(8," Costo Unitario "),t.k0s(),t.j41(9,"div",73),t.EFF(10," Costo Total "),t.k0s(),t.j41(11,"div",73),t.EFF(12," Quitar "),t.k0s()(),t.Z7z(13,he,18,13,"div",74,t.fX1),t.k0s()),2&o){const e=t.XpG();t.R7$(13),t.Dyx(e.productionDataSheetForm.get("ingredients").controls)}}function fe(o,a){if(1&o){const e=t.RV6();t.j41(0,"div")(1,"input",89,6),t.bIt("change",function(r){t.eBV(e);const s=t.XpG(2);return t.Njj(s.selectFiles(r,"thumbnail"))}),t.k0s(),t.j41(3,"label",90),t.nrm(4,"mat-icon",91),t.k0s()()}2&o&&(t.R7$(),t.Y8G("multiple",!1)("accept","image/png, image/webp, image/jpeg, image/png"),t.R7$(3),t.Y8G("svgIcon","mat_solid:photo_camera"))}function ve(o,a){if(1&o){const e=t.RV6();t.j41(0,"div")(1,"button",92),t.bIt("click",function(){t.eBV(e);const r=t.XpG(2);return t.Njj(r.removeImage("thumbnail"))}),t.nrm(2,"mat-icon",91),t.k0s()()}2&o&&(t.R7$(2),t.Y8G("svgIcon","mat_solid:delete"))}function Ce(o,a){if(1&o&&t.nrm(0,"img",88),2&o){const e=t.XpG(2);t.Y8G("src",e.productionDataSheetForm.get("thumbnail").value,t.B4B)}}function Fe(o,a){if(1&o&&(t.j41(0,"div",23),t.EFF(1," Imagen "),t.k0s(),t.j41(2,"div",84)(3,"div",85),t.nrm(4,"div",86),t.j41(5,"div",87),t.DNE(6,fe,5,3,"div")(7,ve,3,1,"div"),t.k0s(),t.DNE(8,Ce,1,1,"img",88),t.k0s()()),2&o){const e=t.XpG();t.R7$(6),t.vxM(6,e.productionDataSheetForm.get("thumbnail").value?-1:6),t.R7$(),t.vxM(7,e.productionDataSheetForm.get("thumbnail").value?7:-1),t.R7$(),t.vxM(8,e.productionDataSheetForm.get("thumbnail").value?8:-1)}}function Se(o,a){if(1&o){const e=t.RV6();t.j41(0,"mat-checkbox",93),t.bIt("change",function(){const r=t.eBV(e).$implicit,s=t.XpG();return t.Njj(s.toggleProductionDataSheetAllergen(r.name))}),t.EFF(1),t.k0s()}if(2&o){const e=a.$implicit,i=t.XpG();t.Y8G("color","primary")("checked",i.allergens.includes(e.name)),t.R7$(),t.SpI(" ",e.name," ")}}let ye=(()=>{class o{constructor(){this.addOnBlur=!0,this.allergensList=jt,this.allergens=[],this.currencies=[],this.editMode=!1,this.flashMessage=null,this.images=[],this.isLoading=!1,this.products=[],this.categories=[],this.ingredients=[],this.filteredProducts=[],this.searchProductControl=new n.MJ(null),this.selectedProductionDataSheet=null,this.separatorKeysCodes=[P.Fm,P.KE],this.thumbnail="",this.uoms=Tt,this.productionDataSheetsStore=(0,t.WQX)(H),this.productionDataSheetId=t.hFB.required(),this.categoriesFiltered$=(0,b.of)([]),this.#t=new l.B,this.#e=(0,t.WQX)(t.gRc),this.#o=(0,t.WQX)(h.bZ),this.#n=(0,t.WQX)(n.ok),this.#a=(0,t.WQX)(K.G),this.#i=(0,t.WQX)(ct.M),this.#s=(0,t.WQX)($t.g),this.#r=(0,t.WQX)(W),this.#c=(0,t.WQX)(F.Ix),this.#u=(0,t.WQX)(w.UG),this.#d=(0,t.WQX)(L.il),this.#l=(e,i)=>{const r=i.toLowerCase();return e?e.filter(s=>s.name.toLowerCase().trim().includes(r)):[]}}#t;#e;#o;#n;#a;#i;#s;#r;#c;#u;#d;ngOnInit(){if(this.productionDataSheetForm=this.#n.group({id:new n.MJ(""),name:new n.MJ(null,[n.k0.required,n.k0.minLength(3),n.k0.maxLength(255)]),currencyId:new n.MJ(null,[n.k0.required]),uomId:new n.MJ("d1fdf6c2-bbfc-4135-9106-c1fe3a63c119",[n.k0.required]),thumbnail:new n.MJ(""),totalCost:new n.MJ({value:0,disabled:!0},[n.k0.required,n.k0.min(0),n.k0.max(999999999),n.k0.maxLength(9)]),portionCost:new n.MJ({value:0,disabled:!0},[n.k0.required,n.k0.min(0),n.k0.max(999999999),n.k0.maxLength(9)]),margin:new n.MJ(30,[n.k0.required,n.k0.min(0),n.k0.max(999999999),n.k0.maxLength(9)]),tax:new n.MJ(10,[n.k0.required,n.k0.min(0),n.k0.max(999999999),n.k0.maxLength(9)]),price:new n.MJ({value:0,disabled:!0},[n.k0.required,n.k0.min(0),n.k0.max(999999999),n.k0.maxLength(9)]),portionSize:new n.MJ(null,[n.k0.min(0),n.k0.max(999999999),n.k0.maxLength(9)]),portions:new n.MJ(1,[n.k0.min(1),n.k0.max(999999999),n.k0.maxLength(9)]),preparationTime:new n.MJ(null,[n.k0.min(0),n.k0.max(999999999),n.k0.maxLength(9)]),temperature:new n.MJ(null,[n.k0.min(0),n.k0.max(9999),n.k0.maxLength(4)]),cookingTime:new n.MJ(null,[n.k0.min(0),n.k0.max(9999),n.k0.maxLength(4)]),allergens:new n.Yp([]),categoryId:new n.MJ("",[n.k0.required]),description:new n.MJ("",[n.k0.maxLength(1e4)]),elaboration:new n.MJ("",[n.k0.maxLength(1e4)]),presentation:new n.MJ("",[n.k0.maxLength(1e4)]),equipments:new n.MJ("",[n.k0.maxLength(1e4)]),images:new n.MJ([]),ingredients:new n.Yp([],[n.k0.required])}),this.productionDataSheetForm.get("ingredients").valueChanges.pipe((0,p.Q)(this.#t)).subscribe(()=>{const e=this.productionDataSheetForm.get("ingredients");this.calculateCosts(e),this.#e.markForCheck()}),this.productionDataSheetForm.get("portions").valueChanges.pipe((0,p.Q)(this.#t)).subscribe(()=>{const e=this.productionDataSheetForm.get("ingredients");0!==e.length&&(this.calculateCosts(e),this.#e.markForCheck())}),this.productionDataSheetForm.get("margin").valueChanges.pipe((0,p.Q)(this.#t)).subscribe(()=>{const e=this.productionDataSheetForm.get("ingredients");0!==e.length&&(this.calculateCosts(e),this.#e.markForCheck())}),this.productionDataSheetForm.get("tax").valueChanges.pipe((0,p.Q)(this.#t)).subscribe(()=>{const e=this.productionDataSheetForm.get("ingredients");0!==e.length&&(this.calculateCosts(e),this.#e.markForCheck())}),"new"!==this.productionDataSheetId()){this.editMode=!0;const e=this.productionDataSheetsStore.productionDataSheet();this.productionDataSheetForm.patchValue(e),this.images=e.images,this.selectedProductionDataSheet=e,this.productionDataSheetForm.setControl("ingredients",this.#n.array(e.ingredients.map(i=>this.#n.group(i))))}this.categoriesFiltered$=this.#d.select(dt.J),this.#d.select(dt.J).pipe((0,p.Q)(this.#t)).subscribe(e=>{this.categories=e,this.#e.markForCheck()}),this.categoriesFiltered$=this.productionDataSheetForm.get("categoryId").valueChanges.pipe((0,v.Z)(""),(0,x.T)(e=>this.#m(e||""))),this.#d.select(st.y$).pipe((0,p.Q)(this.#t)).subscribe(e=>{this.currencies=e;const i=e.find(r=>"CUP"===r.iso).id;this.productionDataSheetForm.get("currencyId").value||this.productionDataSheetForm.get("currencyId").setValue(i),this.#e.markForCheck()}),this.#d.select(B.VW).pipe((0,p.Q)(this.#t)).subscribe(e=>{this.products=e,this.products=this.products.map(i=>({...i,checked:!1})),this.filteredProducts=this.products,this.#e.markForCheck()}),this.searchProductControl.valueChanges.pipe((0,p.Q)(this.#t),(0,O.B)(200)).subscribe(e=>{""===e||null==e||(this.filteredProducts=this.products.filter(i=>i.name.toLowerCase().includes(e.toLowerCase())),this.#e.markForCheck())})}ngOnDestroy(){this.#t.next(null),this.#t.complete()}toggleProductionDataSheetAllergen(e){""!==e&&(this.allergens.includes(e)?this.allergens.splice(this.allergens.indexOf(e),1):this.allergens.push(e),this.#e.markForCheck())}addOrRemoveIngredient(e){const i=this.productionDataSheetForm.get("ingredients"),r=i.value.findIndex(s=>s.productId===e.id);-1===r?(i.push(this.#n.group({productId:e.id,uomId:e.uomId,quantity:new n.MJ(1,[n.k0.required,n.k0.min(1)]),cost:this.getCost(e.id)})),this.filteredProducts=this.filteredProducts.map(s=>s.id===e.id?{...s,checked:!0}:s)):(i.removeAt(r),this.filteredProducts=this.filteredProducts.map(s=>s.id===e.id?{...s,checked:!1}:s)),this.calculateCosts(i),this.#e.markForCheck()}removeIngredient(e){this.productionDataSheetForm.get("ingredients").removeAt(e)}calculateCosts(e){let i=0;e.controls.forEach(rt=>{const it=rt.get("quantity")?.value||0,nt=this.getCost(rt.get("productId")?.value)||0;i+=it*nt}),i=parseFloat(i.toFixed(2)),this.productionDataSheetForm.get("totalCost").setValue(i);const r=this.productionDataSheetForm.get("portions").value||1,m=parseFloat((i/r).toFixed(2));this.productionDataSheetForm.get("portionCost").setValue(m);const C=this.productionDataSheetForm.get("margin").value||0,M=this.productionDataSheetForm.get("tax").value||0,J=parseFloat((m+m*C/100+m*M/100).toFixed(2));this.productionDataSheetForm.get("price").setValue(J)}getProductName(e){const i=this.products.find(r=>r.id===e);return i?i.name:""}getUomAbbr(e){const i=this.uoms.find(r=>r.id===e);return i?i.abbr:""}createProductionDataSheet(){const e=this.productionDataSheetForm.getRawValue();delete e.id,delete e.active,e.allergens=this.allergens,this.#a.open({title:"Crear producto ",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this.#r.createProductionDataSheet(e).pipe((0,p.Q)(this.#t)).subscribe(({data:s})=>{this.#u.openFromComponent(Y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:s.createProductionDataSheet.message,type:"success",svgIcon:"mat_solid:done"}}),this.#c.navigateByUrl("/modules/production/data-sheets")}),this.#e.markForCheck()})}updateProductionDataSheet(){const e=this.productionDataSheetForm.getRawValue();e.ingredients=e.ingredients.map(r=>(delete r.product,delete r.uom,r)),e.allergens=this.allergens,this.#a.open({title:"Actualizar Producto",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this.#r.updateProductionDataSheet(e).pipe((0,p.Q)(this.#t)).subscribe(({data:s})=>{this.#u.openFromComponent(Y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:s.updateProductionDataSheet.message,type:"success",svgIcon:"mat_solid:done"}}),this.#c.navigateByUrl("/modules/production/data-sheets")}),this.#e.markForCheck()})}selectFiles(e,i){if(0===e.target.files.length)return;const r=e.target.files[0];!this.#i.validMaxMBSize(r,2)||["image/jpeg","image/jpg","image/webp","image/png"].includes(r.type)}removeImage(e){this.#a.open({title:"Cuidado",message:"\xbfEst\xe1 seguro que desea eliminar esta imagen?",icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,p.Q)(this.#t)).subscribe(r=>{if("confirmed"===r){const s=this.productionDataSheetForm.get(e).value;switch(e){case"images":this.productionDataSheetForm.get(e).setValue([]);break;case"thumbnail":this.productionDataSheetForm.get(e).setValue(null)}const m=this.productionDataSheetForm.getRawValue();this.editMode&&this.#s.updateProductImages(m.id,m.thumbnail,m.images).subscribe(C=>{this.#u.openFromComponent(Y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:C.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})},C=>{this.productionDataSheetForm.get(e).setValue(s)}),this.#e.markForCheck()}})}displayFn(e){return e&&e.name?e.name:""}displayFnCategory(e){if(""===e)return;let i="";const r=this.categories.find(s=>s.id===e&&0===s.children.length);if(r)return r.name;for(const s of this.categories){const m=s.children.find(C=>C.id===e);if(m){i=m.name;break}}return i}resetCategoryField(){this.productionDataSheetForm.get("categoryId").reset(),this.categoriesFiltered$=this.#d.select(dt.J)}getUnit(e){return"peso"===this.products.find(r=>r.id===e).uom.type?"g":"ml"}getCost(e){const i=this.products.find(r=>r.id===e);return Mt.H.convertCostToBaseUnit(i.cost,i.uom.abbr,i.uom.type)}#l;#m(e){return e?this.categories.map(i=>({id:i.id,active:i.active,name:i.name,children:this.#l(i.children,e)})).filter(i=>i.children.length>0||i.name.toLowerCase().trim().includes(e.toLocaleLowerCase())):this.categories}_uploadFile(e,i){this.#i.openCropperDialog(e,!0).pipe((0,p.Q)(this.#t)).subscribe(r=>{if(!r)return;this.productionDataSheetForm.get(i).setValue(r);const s=this.productionDataSheetForm.getRawValue();this.editMode&&this.#s.updateProductImages(s.id,s.thumbnail,s.images).subscribe(m=>{this.#u.openFromComponent(Y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:m.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#e.markForCheck()},m=>{this.productionDataSheetForm.get(i).setValue(null)})})}_mapChecked(e){return e.pipe((0,x.T)(i=>i.map(r=>this.productionDataSheetForm.get("ingredients").getRawValue().some(m=>m.id===r.id)?{...structuredClone(r),checked:!0}:{...structuredClone(r),checked:!1})))}static#p=this.\u0275fac=function(i){return new(i||o)};static#h=this.\u0275cmp=t.VBU({type:o,selectors:[["production-data-sheet"]],inputs:{productionDataSheetId:[t.Mj6.SignalBased,"productionDataSheetId"]},standalone:!0,features:[t.aNF],decls:177,vars:73,consts:[["categoriesGroup","matAutocomplete"],["descriptionLength",""],["elaborationLength",""],["presentationLength",""],["equipmentsLength",""],["productsAutocomplete","matAutocomplete"],["thumbnailFileInput",""],["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","gap-5","p-3","overflow-y-auto","bg-cover","sm:absolute","sm:inset-0","dark:bg-transparent"],[1,"z-20","flex","flex-col","bg-transparent","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:px-5"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],["routerLink","/modules/production/dashboard",1,"ml-1","text-primary-500"],["routerLink","/modules/production/data-sheets",1,"ml-1","text-primary-500"],[1,"ml-1","text-primary-500"],[1,"flex","items-center","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-600",3,"disabled","ngClass"],[1,"flex","flex-auto"],[1,"w-full",3,"formGroup","autocomplete"],[1,"grid","grid-cols-1","gap-3","sm:grid-cols-4"],[1,"flex","flex-col","gap-3","p-3","rounded-md","shadow-md","sm:col-span-3","bg-card"],[1,"text-xl","font-semibold"],[1,"grid","grid-cols-1","gap-3","mt-5","sm:grid-cols-2","lg:grid-cols-4"],[1,"w-full","sm:col-span-4","fuse-mat-dense"],["matInput","","type","text","minlength","3","maxlength","255","required","",3,"formControlName"],[1,"w-full","fuse-mat-dense"],["svgIcon","mat_solid:search","matPrefix",""],["type","text","matInput","","required","",3,"formControlName","matAutocomplete"],[3,"displayWith"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer"],["matPrefix","",1,"pr-1"],["matInput","","type","number","formControlName","preparationTime","min","0"],[3,"formControlName","required"],[3,"value"],["matInput","","type","number","formControlName","margin","min","0"],["matInput","","type","number","formControlName","portionSize","min","0"],["matSuffix","",3,"value","formControlName"],["matInput","","type","number","formControlName","cookingTime","min","0"],[1,"flex-col","w-full"],[1,"font-medium"],[1,"mt-4","text-lg","text-center"],["matInput","","type","number","formControlName","tax","min","0"],["matInput","","type","number","formControlName","portions","min","1","maxlength","9"],["matInput","","type","number","formControlName","temperature","min","0"],[1,"w-full","sm:col-span-4"],["matInput","","matTextareaAutoSize","","maxlength","10000",3,"formControlName","rows"],[1,"w-full","text-right"],["appearance","fill",1,"w-full","sm:col-span-4","fuse-mat-densee",3,"subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete",3,"closed","displayWith"],[1,"w-full",3,"value"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-2","mt-2","sm:col-span-4","min-h-36",3,"fuseScrollbarOptions"],[1,"grid"],[1,"flex","flex-col","gap-3","p-3","rounded-md","shadow-md","bg-card"],[1,"flex","flex-col","mt-5"],[1,"mb-px","text-xl","font-semibold","leading-tight"],[1,"flex","flex-wrap","items-start","mt-1.5","rounded-md"],[1,"flex","items-center","h-10","min-h-8",3,"color","checked"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-600",3,"click","disabled","ngClass"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"label","disabled"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[1,"w-full",3,"click","value"],[1,"grid","w-full","grid-cols-6",3,"click"],[1,"flex","flex-row","items-center","col-span-5","truncate","md:col-span-4"],["color","primary",3,"checked"],[1,"flex","items-center","text-center"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","ingredients-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left"],[1,"text-center"],["formArrayName","ingredients"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","ingredients-grid","md:px-8",3,"formGroupName"],[1,"truncate"],[1,"fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matTextSuffix","",1,"px-2"],["matInput","","type","number",1,"font-mono","font-semibold","text-center",3,"min","formControl"],[1,"text-lg","text-center"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"flex","items-center","justify-center","flex-auto","max-h-40"],[1,"relative","flex","items-center","justify-center","w-32","h-32","overflow-hidden","rounded-md","ring-4","ring-bg-card"],[1,"absolute","inset-0","z-10","bg-opacity-50","bg-slate-300"],[1,"absolute","inset-0","z-20","flex","items-center","justify-center"],[1,"object-cover","w-full","h-full",3,"src"],["id","thumbnail-file-input","type","file",1,"absolute","invisible","w-0","h-0","opacity-0","pointer-events-none",3,"change","multiple","accept"],["for","thumbnail-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-hover"],[1,"text-white",3,"svgIcon"],["mat-icon-button","",3,"click"],[1,"flex","items-center","h-10","min-h-8",3,"change","color","checked"]],template:function(i,r){if(1&i){const s=t.RV6();t.j41(0,"div",7)(1,"div",8)(2,"div",9)(3,"div")(4,"div",10)(5,"div")(6,"a",11),t.EFF(7,"Inicio"),t.k0s()(),t.j41(8,"div",12),t.nrm(9,"mat-icon",13),t.j41(10,"a",14),t.EFF(11,"Producci\xf3n"),t.k0s()(),t.j41(12,"div",12),t.nrm(13,"mat-icon",13),t.j41(14,"a",15),t.EFF(15,"Fichas T\xe9cnicas"),t.k0s()(),t.j41(16,"div",12),t.nrm(17,"mat-icon",13),t.j41(18,"a",16),t.EFF(19),t.k0s()()()()(),t.j41(20,"div",17),t.DNE(21,wt,4,5,"button",18)(22,Nt,4,5,"button",18),t.k0s()(),t.j41(23,"div",19)(24,"form",20)(25,"div",21)(26,"div",22)(27,"div",23),t.EFF(28," Informaci\xf3n General "),t.k0s(),t.j41(29,"div",24)(30,"mat-form-field",25)(31,"mat-label"),t.EFF(32,"Nombre"),t.k0s(),t.nrm(33,"input",26),t.DNE(34,Bt,2,0,"mat-error")(35,Ut,2,0,"mat-error"),t.k0s(),t.j41(36,"mat-form-field",27)(37,"mat-label"),t.EFF(38,"Categor\xeda"),t.k0s(),t.nrm(39,"mat-icon",28)(40,"input",29),t.j41(41,"mat-autocomplete",30,0),t.Z7z(43,zt,2,2,null,null,t.fX1),t.nI1(45,"async"),t.k0s(),t.DNE(46,Qt,1,0,"mat-icon",31)(47,Vt,2,0,"mat-error"),t.k0s(),t.j41(48,"mat-form-field",27)(49,"mat-label"),t.EFF(50,"Tiempo de preparaci\xf3n "),t.k0s(),t.j41(51,"span",32),t.EFF(52,"Minutos: "),t.k0s(),t.nrm(53,"input",33),t.DNE(54,Wt,2,0,"mat-error")(55,Xt,2,0,"mat-error"),t.k0s(),t.j41(56,"mat-form-field",27)(57,"mat-label"),t.EFF(58,"Moneda"),t.k0s(),t.j41(59,"mat-select",34),t.Z7z(60,Jt,2,2,"mat-option",35,t.fX1),t.k0s(),t.DNE(62,Kt,2,0,"mat-error"),t.k0s(),t.j41(63,"mat-form-field",27)(64,"mat-label"),t.EFF(65,"Margen de ganancia"),t.k0s(),t.j41(66,"span",32),t.EFF(67,"% "),t.k0s(),t.nrm(68,"input",36),t.DNE(69,Ht,2,0,"mat-error")(70,Zt,2,0,"mat-error")(71,te,2,0,"mat-error"),t.k0s(),t.j41(72,"mat-form-field",27)(73,"mat-label"),t.EFF(74,"Tama\xf1o de la porci\xf3n "),t.k0s(),t.nrm(75,"input",37),t.j41(76,"mat-select",38),t.Z7z(77,ee,2,2,"mat-option",35,t.fX1),t.k0s(),t.DNE(79,oe,2,0,"mat-error")(80,re,2,0,"mat-error"),t.k0s(),t.j41(81,"mat-form-field",27)(82,"mat-label"),t.EFF(83,"Tiempo de cocci\xf3n "),t.k0s(),t.j41(84,"span",32),t.EFF(85,"Minutos: "),t.k0s(),t.nrm(86,"input",39),t.DNE(87,ie,2,0,"mat-error")(88,ne,2,0,"mat-error"),t.k0s(),t.j41(89,"div",40)(90,"mat-label",41),t.EFF(91,"Costo Total"),t.k0s(),t.j41(92,"div",42),t.EFF(93),t.nI1(94,"number"),t.k0s()(),t.j41(95,"mat-form-field",27)(96,"mat-label"),t.EFF(97,"Impuesto"),t.k0s(),t.j41(98,"span",32),t.EFF(99,"% "),t.k0s(),t.nrm(100,"input",43),t.DNE(101,ae,2,0,"mat-error")(102,se,2,0,"mat-error")(103,ce,2,0,"mat-error"),t.k0s(),t.j41(104,"mat-form-field",27)(105,"mat-label"),t.EFF(106,"Cantidad de porciones "),t.k0s(),t.nrm(107,"input",44),t.DNE(108,ue,2,0,"mat-error")(109,de,2,0,"mat-error"),t.k0s(),t.j41(110,"mat-form-field",27)(111,"mat-label"),t.EFF(112,"Temperatura de servicio"),t.k0s(),t.j41(113,"span",32),t.EFF(114,"\xbaC: "),t.k0s(),t.nrm(115,"input",45),t.DNE(116,le,2,0,"mat-error")(117,me,2,0,"mat-error"),t.k0s(),t.j41(118,"div",40)(119,"mat-label",41),t.EFF(120,"Costo de la Porci\xf3n"),t.k0s(),t.j41(121,"div",42),t.EFF(122),t.nI1(123,"number"),t.k0s()(),t.j41(124,"div",40)(125,"mat-label",41),t.EFF(126,"Precio de Venta"),t.k0s(),t.j41(127,"div",42),t.EFF(128),t.nI1(129,"number"),t.k0s()(),t.j41(130,"mat-form-field",46)(131,"mat-label"),t.EFF(132,"Descripci\xf3n"),t.k0s(),t.nrm(133,"textarea",47,1),t.j41(135,"mat-hint",48),t.EFF(136),t.k0s()(),t.j41(137,"mat-form-field",46)(138,"mat-label"),t.EFF(139,"Elaboraci\xf3n"),t.k0s(),t.nrm(140,"textarea",47,2),t.j41(142,"mat-hint",48),t.EFF(143),t.k0s()(),t.j41(144,"mat-form-field",46)(145,"mat-label"),t.EFF(146,"Presentaci\xf3n"),t.k0s(),t.nrm(147,"textarea",47,3),t.j41(149,"mat-hint",48),t.EFF(150),t.k0s()(),t.j41(151,"mat-form-field",46)(152,"mat-label"),t.EFF(153,"Equipos Necesarios"),t.k0s(),t.nrm(154,"textarea",47,4),t.j41(156,"mat-hint",48),t.EFF(157),t.k0s()(),t.j41(158,"mat-form-field",49)(159,"mat-label"),t.EFF(160,"Ingredientes"),t.k0s(),t.nrm(161,"mat-icon",50)(162,"input",51),t.j41(163,"mat-autocomplete",52,5),t.bIt("closed",function(){return t.eBV(s),t.Njj(r.searchProductControl.reset())}),t.Z7z(165,pe,8,8,"mat-option",53,At),t.k0s()(),t.j41(167,"div",54),t.DNE(168,ge,15,0,"div",55),t.k0s()()(),t.j41(169,"div",56),t.DNE(170,Fe,9,3),t.j41(171,"div",57)(172,"span",58),t.EFF(173,"Al\xe9rgenos"),t.k0s(),t.j41(174,"div",59),t.Z7z(175,Se,2,3,"mat-checkbox",60,t.fX1),t.k0s()()()()()()()}if(2&i){const s=t.sdS(42),m=t.sdS(134),C=t.sdS(141),M=t.sdS(148),z=t.sdS(155),J=t.sdS(164);t.R7$(9),t.Y8G("svgIcon","mat_solid:chevron_right"),t.R7$(4),t.Y8G("svgIcon","mat_solid:chevron_right"),t.R7$(4),t.Y8G("svgIcon","mat_solid:chevron_right"),t.R7$(2),t.SpI(" ","new"===r.productionDataSheetId()?"Crear":"Editar"," "),t.R7$(2),t.vxM(21,r.editMode?-1:21),t.R7$(),t.vxM(22,r.editMode?22:-1),t.R7$(2),t.Y8G("formGroup",r.productionDataSheetForm)("autocomplete","off"),t.R7$(9),t.Y8G("formControlName","name"),t.R7$(),t.vxM(34,r.productionDataSheetForm.get("name").hasError("required")?34:-1),t.R7$(),t.vxM(35,r.productionDataSheetForm.get("name").hasError("minlength")||r.productionDataSheetForm.get("name").hasError("maxlength")?35:-1),t.R7$(5),t.Y8G("formControlName","categoryId")("matAutocomplete",s),t.R7$(),t.Y8G("displayWith",r.displayFnCategory.bind(r)),t.R7$(2),t.Dyx(t.bMT(45,61,r.categoriesFiltered$)),t.R7$(3),t.vxM(46,r.productionDataSheetForm.get("categoryId").value?46:-1),t.R7$(),t.vxM(47,r.productionDataSheetForm.get("categoryId").hasError("required")?47:-1),t.R7$(7),t.vxM(54,r.productionDataSheetForm.get("preparationTime").hasError("min")?54:-1),t.R7$(),t.vxM(55,r.productionDataSheetForm.get("preparationTime").hasError("max")?55:-1),t.R7$(4),t.Y8G("formControlName","currencyId")("required",!0),t.R7$(),t.Dyx(r.currencies),t.R7$(2),t.vxM(62,r.productionDataSheetForm.get("currencyId").hasError("required")?62:-1),t.R7$(7),t.vxM(69,r.productionDataSheetForm.get("margin").hasError("required")?69:-1),t.R7$(),t.vxM(70,r.productionDataSheetForm.get("margin").hasError("min")?70:-1),t.R7$(),t.vxM(71,r.productionDataSheetForm.get("margin").hasError("max")?71:-1),t.R7$(5),t.Y8G("value","d1fdf6c2-bbfc-4135-9106-c1fe3a63c119")("formControlName","uomId"),t.R7$(),t.Dyx(r.uoms),t.R7$(2),t.vxM(79,r.productionDataSheetForm.get("portionSize").hasError("min")?79:-1),t.R7$(),t.vxM(80,r.productionDataSheetForm.get("portionSize").hasError("max")?80:-1),t.R7$(7),t.vxM(87,r.productionDataSheetForm.get("cookingTime").hasError("min")?87:-1),t.R7$(),t.vxM(88,r.productionDataSheetForm.get("cookingTime").hasError("max")?88:-1),t.R7$(5),t.SpI(" ",t.i5U(94,63,r.productionDataSheetForm.get("totalCost").value,"1.2-2")," "),t.R7$(8),t.vxM(101,r.productionDataSheetForm.get("tax").hasError("required")?101:-1),t.R7$(),t.vxM(102,r.productionDataSheetForm.get("tax").hasError("min")?102:-1),t.R7$(),t.vxM(103,r.productionDataSheetForm.get("tax").hasError("max")?103:-1),t.R7$(5),t.vxM(108,r.productionDataSheetForm.get("portions").hasError("min")?108:-1),t.R7$(),t.vxM(109,r.productionDataSheetForm.get("portions").hasError("max")?109:-1),t.R7$(7),t.vxM(116,r.productionDataSheetForm.get("temperature").hasError("min")?116:-1),t.R7$(),t.vxM(117,r.productionDataSheetForm.get("temperature").hasError("max")?117:-1),t.R7$(5),t.SpI(" ",t.i5U(123,66,r.productionDataSheetForm.get("portionCost").value,"1.2-2")," "),t.R7$(6),t.SpI(" ",t.i5U(129,69,r.productionDataSheetForm.get("price").value,"1.2-2")," "),t.R7$(5),t.Y8G("formControlName","description")("rows",2),t.R7$(3),t.SpI(" Total de caracteres ",m.value.length," /10000 "),t.R7$(4),t.Y8G("formControlName","elaboration")("rows",2),t.R7$(3),t.SpI(" Total de caracteres ",C.value.length," /10000 "),t.R7$(4),t.Y8G("formControlName","presentation")("rows",2),t.R7$(3),t.SpI(" Total de caracteres ",M.value.length," /10000 "),t.R7$(4),t.Y8G("formControlName","equipments")("rows",2),t.R7$(3),t.SpI(" Total de caracteres ",z.value.length," /10000 "),t.R7$(),t.Y8G("subscriptSizing","dynamic"),t.R7$(3),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",r.searchProductControl)("matAutocomplete",J)("placeholder","Buscar ingredientes"),t.R7$(),t.Y8G("displayWith",r.displayFn),t.R7$(2),t.Dyx(r.filteredProducts),t.R7$(2),t.Y8G("fuseScrollbarOptions",t.lJ4(72,Gt)),t.R7$(),t.vxM(168,r.productionDataSheetForm.get("ingredients").controls.length>0?168:-1),t.R7$(2),t.vxM(170,r.editMode?170:-1),t.R7$(5),t.Dyx(r.allergensList)}},dependencies:[g.Jj,d.jL,qt.uv,d.$3,G.wT,G.D7,d.pN,E.Hl,E.$z,E.iY,y.g7,y.So,S.RG,S.rl,S.nJ,S.MV,S.TL,S.JW,S.yw,_.m_,_.An,D.fS,D.fg,R.Ou,G.pZ,G.r6,N.Ve,N.VO,T.mV,j.D6,u.NQ,g.YU,n.X1,n.qT,n.me,n.Q0,n.BC,n.cb,n.YS,n.xh,n.tU,n.VZ,n.l_,n.j4,n.JD,n.$R,n.v8,n.YN,F.Wk,ft.p,g.QX],styles:[".ingredients-grid[_ngcontent-%COMP%]{grid-template-columns:10px auto 150px 150px 150px 50px}"],changeDetection:0})}return o})();var Ct=c(57786),Z=c(25558),X=c(14823),Ft=c(56730),St=c(63729),tt=c(89079);const _e=(o,a)=>a.id,be=o=>({"pointer-events-none":o}),Ie=()=>[5,10,25,100],xe=o=>["/modules/production/data-sheets",o];function Pe(o,a){if(1&o&&t.nrm(0,"img",32),2&o){const e=t.XpG().$implicit;t.Y8G("alt","dataSheet thumbnail image")("src",e.thumbnail,t.B4B)}}function Re(o,a){1&o&&(t.j41(0,"div",33),t.EFF(1," SIN IMAGEN "),t.k0s())}function De(o,a){if(1&o){const e=t.RV6();t.j41(0,"mat-slide-toggle",47),t.bIt("change",function(r){t.eBV(e);const s=t.XpG(),m=s.$implicit,C=s.$index,M=t.XpG(2);return t.Njj(M.updateProductionDataSheetStatus(r,m,C))}),t.k0s()}if(2&o){const e=t.XpG().$implicit;t.Y8G("checked",e.active)("color","primary")}}function ke(o,a){1&o&&t.nrm(0,"mat-spinner",41),2&o&&t.Y8G("diameter",20)("color","primary")}function Ee(o,a){if(1&o){const e=t.RV6();t.j41(0,"div",26)(1,"div",28)(2,"div",29)(3,"input",30),t.bIt("change",function(r){const s=t.eBV(e).$implicit,m=t.XpG(2);return t.Njj(m.selectFiles(r,s))}),t.k0s(),t.nrm(4,"label",31),t.DNE(5,Pe,1,2,"img",32)(6,Re,2,0,"div",33),t.k0s()(),t.j41(7,"div",34),t.EFF(8),t.k0s(),t.j41(9,"div",35)(10,"span",36),t.EFF(11),t.nI1(12,"number"),t.k0s(),t.j41(13,"span",37),t.EFF(14),t.k0s()(),t.j41(15,"div",35)(16,"span",36),t.EFF(17),t.nI1(18,"number"),t.k0s(),t.j41(19,"span",37),t.EFF(20),t.k0s()(),t.j41(21,"div",38),t.EFF(22),t.k0s(),t.j41(23,"div",39),t.DNE(24,De,1,2,"mat-slide-toggle",40)(25,ke,1,2,"mat-spinner",41),t.k0s(),t.j41(26,"div",42)(27,"button",43),t.bIt("click",function(){const r=t.eBV(e).$implicit,s=t.XpG(2);return t.Njj(s.generateProductionDataSheetDataSheetDocument(r))}),t.nrm(28,"mat-icon",44),t.k0s(),t.j41(29,"button",45),t.nrm(30,"mat-icon",44),t.k0s(),t.j41(31,"button",46),t.bIt("click",function(){const r=t.eBV(e).$implicit,s=t.XpG(2);return t.Njj(s.deleteProductionDataSheet(r))}),t.nrm(32,"mat-icon",44),t.k0s()()()}if(2&o){const e=a.$implicit,i=a.$index,r=t.XpG(2);t.R7$(3),t.Y8G("id",e.id)("multiple",!1)("accept","image/png, image/webp, image/jpeg, image/png"),t.R7$(),t.Y8G("for",e.id),t.R7$(),t.vxM(5,e.thumbnail?5:-1),t.R7$(),t.vxM(6,e.thumbnail?-1:6),t.R7$(2),t.SpI(" ",e.name," "),t.R7$(3),t.JRh(t.i5U(12,18,e.totalCost/e.portions,"1.2-2")),t.R7$(3),t.JRh(e.currency.iso),t.R7$(3),t.JRh(t.i5U(18,21,e.price,"1.2-2")),t.R7$(3),t.JRh(e.currency.iso),t.R7$(2),t.SpI(" ",e.producedQuantity," "),t.R7$(2),t.vxM(24,r.isLoading&&r.selectedSlide===i?-1:24),t.R7$(),t.vxM(25,r.isLoading&&r.selectedSlide===i?25:-1),t.R7$(3),t.Y8G("svgIcon","mat_solid:description"),t.R7$(),t.Y8G("routerLink",t.eq3(24,xe,e.id)),t.R7$(),t.Y8G("svgIcon","mat_solid:edit"),t.R7$(2),t.Y8G("svgIcon","mat_solid:delete")}}function $e(o,a){if(1&o&&(t.j41(0,"div",20)(1,"div",21),t.nrm(2,"div"),t.j41(3,"div",22),t.EFF(4," Nombre "),t.k0s(),t.j41(5,"div",23),t.EFF(6," Costo "),t.k0s(),t.j41(7,"div",23),t.EFF(8," Precio "),t.k0s(),t.j41(9,"div",24),t.EFF(10," U.Producidas "),t.k0s(),t.j41(11,"div",23),t.EFF(12," Activo "),t.k0s(),t.j41(13,"div",25),t.EFF(14,"Acciones"),t.k0s()(),t.Z7z(15,Ee,33,26,"div",26,_e),t.k0s(),t.nrm(17,"mat-paginator",27)),2&o){const e=t.XpG();t.R7$(3),t.Y8G("mat-sort-header","name"),t.R7$(2),t.Y8G("mat-sort-header","cost"),t.R7$(2),t.Y8G("mat-sort-header","price"),t.R7$(2),t.Y8G("mat-sort-header","salesQuantity"),t.R7$(2),t.Y8G("mat-sort-header","active"),t.R7$(4),t.Dyx(e.productionDataSheetsStore.productionDataSheets()),t.R7$(2),t.Y8G("ngClass",t.eq3(11,be,e.isLoading))("length",e.productionDataSheetsStore.pagination().length)("pageIndex",e.productionDataSheetsStore.pagination().page)("pageSize",e.productionDataSheetsStore.pagination().size)("pageSizeOptions",t.lJ4(13,Ie))("showFirstLastButtons",!0)}}function je(o,a){1&o&&(t.j41(0,"div",48),t.EFF(1," \xa1No se ha registrado ninguna ficha t\xe9cnica! "),t.k0s())}let Te=(()=>{class o{constructor(){this.isLoading=!1,this.paginator=(0,t.ebz)(R.iy),this.productionDataSheetsStore=(0,t.WQX)(H),this.searchInputControl=new n.MJ,this.selectedSlide=null,this.sort=(0,t.ebz)(u.B4),this.user=null,this.#t=(0,t.WQX)(t.gRc),this.#e=(0,t.WQX)(t.abz),this.#o=(0,t.WQX)(Ft.Q),this.#n=(0,t.WQX)(K.G),this.#a=(0,t.WQX)(ct.M),this.#i=(0,t.WQX)(W),this.#s=(0,t.WQX)(w.UG),this.#r=new l.B,this.#c=(0,t.WQX)(L.il)}#t;#e;#o;#n;#a;#i;#s;#r;#c;ngOnInit(){this.searchInputControl.valueChanges.pipe((0,p.Q)(this.#r),(0,O.B)(300),(0,Z.n)(e=>(this.isLoading=!0,this.#i.findAllProductionDataSheets(this.productionDataSheetsStore.pagination().page,this.productionDataSheetsStore.pagination().size,this.sort().active,this.sort().direction,e))),(0,x.T)(()=>{this.isLoading=!1})).subscribe(),this.#c.select(St.SW).pipe((0,tt.pQ)(this.#e)).subscribe(e=>{this.user=e,this.#t.markForCheck()})}ngAfterViewInit(){this.sort()&&this.paginator()&&(this.sort().sort({id:"name",start:"asc",disableClear:!0}),this.#t.markForCheck(),this.sort().sortChange.pipe((0,p.Q)(this.#r)).subscribe(()=>{this.paginator().pageIndex=0}),(0,Ct.h)(this.sort().sortChange,this.paginator().page).pipe((0,Z.n)(()=>(this.isLoading=!0,this.#i.findAllProductionDataSheets(this.paginator().pageIndex,this.paginator().pageSize,this.sort().active,this.sort().direction))),(0,x.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this.#r.next(null),this.#r.complete()}selectFiles(e,i){if(0===e.target.files.length)return;const r=e.target.files[0];!this.#a.validMaxMBSize(r,2)||!["image/jpeg","image/jpg","image/webp","image/png"].includes(r.type)||this.#u(e,i)}updateProductionDataSheetStatus(e,i,r){this.isLoading=!0,this.selectedSlide=r,this.#i.updateProductionDataSheetStatus({id:i.id,active:e.checked}).subscribe(({data:s})=>{this.#s.openFromComponent(Y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.updateProductionDataSheetStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isLoading=!1,this.selectedSlide=-1,this.#t.markForCheck()})}deleteProductionDataSheet(e){this.#n.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la ficha t\xe9cnica: ${e.name}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,p.Q)(this.#r)).subscribe(r=>{"confirmed"===r&&this.#i.removeProductionDataSheet(e.id).pipe((0,p.Q)(this.#r)).subscribe(({data:s})=>{s&&(this.#s.openFromComponent(Y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeProductionDataSheet.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#t.markForCheck())})})}generateProductionDataSheetDataSheetDocument(e){this.#o.generateProductionDataSheetDataSheetDocument(e,this.user)}#u(e,i){this.#a.openCropperDialog(e,!1).pipe((0,tt.pQ)(this.#e)).subscribe(r=>{r&&this.#a.uploadImage("products",r).pipe((0,tt.pQ)(this.#e)).subscribe(s=>{const m=i;m.thumbnail=s.secure_url,delete m.active,delete m.category,delete m.currency,delete m.merchant,delete m.merchantId,delete m.slug,delete m.producedQuantity,delete m.uom,i.ingredients=i.ingredients.map(C=>(delete C.product,delete C.uom,C)),this.#i.updateProductionDataSheet(m).subscribe(({data:C})=>{this.#s.openFromComponent(Y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:C.updateProductionDataSheet.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#t.markForCheck()})})})}static#d=this.\u0275fac=function(i){return new(i||o)};static#l=this.\u0275cmp=t.VBU({type:o,selectors:[["production-data-sheets"]],viewQuery:function(i,r){1&i&&(t.wEZ(r.paginator,R.iy,5),t.wEZ(r.sort,u.B4,5)),2&i&&t.NyB(2)},standalone:!0,features:[t.aNF],decls:30,vars:9,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-3","text-secondary",3,"svgIcon"],["routerLink","/modules/production/dashboard",1,"ml-1","text-primary-500"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","","routerLink","new",1,"mt-4","text-white","sm:mt-0","bg-gradient-to-r","from-primary-500","to-primary-600","hover:to-primary-900","hover:shadow-lg"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","production-data-sheets-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"flex","items-center","justify-start",3,"mat-sort-header"],[1,"flex","items-center","justify-center",3,"mat-sort-header"],["matTooltip","Unidades Vendidas",1,"flex","items-center","justify-center",3,"mat-sort-header"],[1,"pr-4","text-right"],[1,"z-0","grid","items-center","gap-4","px-6","py-3","bg-white","border-b","dark:bg-default","production-data-sheets-grid","md:px-8"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"flex","items-center"],[1,"relative","flex","items-center","justify-center","w-12","h-12","mr-6","overflow-hidden","border","rounded","flex-0"],["type","file",1,"absolute","invisible","w-0","h-0","opacity-0","pointer-events-none",3,"change","id","multiple","accept"],[1,"absolute","w-full","h-full","cursor-pointer",3,"for"],["for","thumbnail-file-input",1,"w-full","m-0.5","rounded",3,"alt","src"],[1,"flex","items-center","justify-center","w-full","h-full","text-xs","font-semibold","leading-none","text-center","uppercase"],[1,"truncate"],[1,"flex","flex-row","justify-center","space-x-1"],[1,"font-mono"],[1,"text-xs","text-secondary"],[1,"block","text-center"],[1,"flex","justify-center","mr-3","text-center"],[3,"checked","color"],[3,"diameter","color"],[1,"flex","flex-row","justify-end","gap-2"],["mat-stroked-button","","matTooltip","Ver Documento",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Editar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],["mat-stroked-button","","matTooltip","Eliminar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[3,"change","checked","color"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(i,r){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t.EFF(6,"Inicio"),t.k0s()(),t.j41(7,"div",5),t.nrm(8,"mat-icon",6),t.j41(9,"a",7),t.EFF(10,"Producci\xf3n"),t.k0s()(),t.j41(11,"div",5),t.nrm(12,"mat-icon",6),t.j41(13,"a",8),t.EFF(14,"Fichas T\xe9cnicas"),t.k0s()()(),t.j41(15,"div",9)(16,"h2",10),t.EFF(17," Registro Fichas T\xe9cnicas "),t.k0s()()(),t.j41(18,"div",11)(19,"mat-form-field",12),t.nrm(20,"mat-icon",13)(21,"input",14),t.k0s(),t.j41(22,"button",15),t.nrm(23,"mat-icon",16),t.j41(24,"span",17),t.EFF(25,"Agregar"),t.k0s()()()(),t.j41(26,"div",18)(27,"div",19),t.DNE(28,$e,18,14)(29,je,2,0),t.k0s()()()),2&i&&(t.R7$(8),t.Y8G("svgIcon","mat_solid:chevron_right"),t.R7$(4),t.Y8G("svgIcon","mat_solid:chevron_right"),t.R7$(7),t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",r.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),t.R7$(2),t.Y8G("svgIcon","mat_solid:add"),t.R7$(5),t.vxM(28,r.productionDataSheetsStore.productionDataSheets().length>0?28:29))},dependencies:[E.Hl,E.$z,S.RG,S.rl,S.JW,_.m_,_.An,D.fS,D.fg,R.Ou,R.iy,j.D6,j.LG,T.mV,T.sG,u.NQ,u.B4,u.aE,X.uc,X.oV,g.YU,n.X1,n.me,n.BC,n.l_,F.Wk,g.QX],styles:[".production-data-sheets-grid{grid-template-columns:50px auto 150px 150px 100px 150px 100px}\n"],encapsulation:2,changeDetection:0})}return o})();const lt=pt({providedIn:"root"},gt({pagination:null,productionRequest:null,productionRequests:[]}),ht(o=>({setProductionRequestsList(a,e){Q(o,{productionRequests:a,pagination:e})},setProductionRequests(a){Q(o,{productionRequests:a})},setProductionRequest(a){Q(o,{productionRequest:a})}}))),Me=$.J1`
    mutation CreateProductionRequest($createProductionRequestInput: CreateProductionRequestInput!) {
        createProductionRequest(createProductionRequestInput: $createProductionRequestInput) {

            ok
            message

            productionRequest {
                id
                no
                userId
                merchantId
                requestedBy
                requestedDate
                dueDate
                status
                priority
                customerId
                products {
                    productId
                    quantity
                    product {
                        name
                        ingredients {
                            product {
                                name
                            }
                            quantity
                            uomId
                            uom {
                                name
                                abbr
                                type
                            }
                        }
                    }
                }
                completedDate
                comments
                merchant {
                    name
                }
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }

        }
    }
`,qe=$.J1`
    mutation UpdateProductionRequest($updateProductionRequestInput: UpdateProductionRequestInput!) {
        updateProductionRequest(updateProductionRequestInput: $updateProductionRequestInput) {
            ok
            message

            productionRequest {
                id
                no
                userId
                merchantId
                requestedBy
                requestedDate
                dueDate
                status
                priority
                customerId
                products {
                    productId
                    quantity
                    product {
                        name
                        ingredients {
                            product {
                                name
                            }
                            quantity
                            uomId
                            uom {
                                name
                                abbr
                                type
                            }
                        }
                    }
                }
                completedDate
                comments
                merchant {
                    name
                }
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,Ae=$.J1`
    mutation RemoveProductionRequest($productionRequestId: String!) {
        removeProductionRequest(id: $productionRequestId) {
            ok
            message
        }
    }
`,Ge=$.J1`
    query FindAllProductionRequests($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllProductionRequests(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            productionRequests {
                id
                no
                userId
                merchantId
                requestedBy
                requestedDate
                dueDate
                status
                priority
                customerId
                products {
                    productId
                    quantity
                    product {
                        name
                        ingredients {
                            product {
                                name
                            }
                            quantity
                            uomId
                            uom {
                                name
                                abbr
                                type
                            }
                        }
                    }
                }
                completedDate
                comments
                merchant {
                    name
                }
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,we=($.J1`
    query FindActiveProductionRequests($search: String!, $size: Int!) {
        findActiveProductionRequests(search: $search, size: $size) {
            ok
            message

            name {
                id
                name
            }
        }
    }
`,$.J1`
    query FindProductionRequestById($productionRequestId: String!) {
        findProductionRequestById(id: $productionRequestId) {
            ok
            message

            productionRequest {
                id
                no
                userId
                merchantId
                requestedBy
                requestedDate
                dueDate
                status
                priority
                customerId
                products {
                    productId
                    quantity
                    product {
                        name
                        ingredients {
                            product {
                                name
                            }
                            quantity
                            uomId
                            uom {
                                name
                                abbr
                                type
                            }
                        }
                    }
                }
                completedDate
                comments
                merchant {
                    name
                }
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`);let et=(()=>{class o{#t;#e=(0,t.WQX)($.Ic);#o=(0,t.WQX)(lt);constructor(){this.#t=this.#e.use(mt.c.GRAPHQL_PROVIDER)}createProductionRequest(e){return this.#t.mutate({mutation:Me,variables:{createProductionRequestInput:e},errorPolicy:"all"}).pipe((0,q.M)(({data:i})=>{const r=structuredClone(this.#o.productionRequests());r.push(i.createProductionRequest.productionRequest),this.#o.setProductionRequests(r)}))}findAllProductionRequests(e=0,i=20,r="name",s="asc",m=""){return this.#t.query({query:Ge,errorPolicy:"all",variables:{page:e,size:i,sort:r,order:s,search:m}}).pipe((0,q.M)(({data:C})=>{this.#o.setProductionRequestsList(C.findAllProductionRequests.productionRequests,C.findAllProductionRequests.pagination)}))}findProductionRequestById(e){return this.#t.query({query:we,variables:{productionRequestId:e},errorPolicy:"all"}).pipe((0,q.M)(({data:i})=>{this.#o.setProductionRequest(i.findProductionRequestById.productionRequest)}))}updateProductionRequest(e){return this.#t.mutate({mutation:qe,variables:{updateProductionRequestInput:e},errorPolicy:"all"}).pipe((0,q.M)(({data:i})=>{const r=structuredClone(this.#o.productionRequests()),s=r.findIndex(m=>m.id===e.id);r[s]=i.updateProductionRequest.productionRequest,this.#o.setProductionRequests(r)}))}removeProductionRequest(e){return this.#t.mutate({mutation:Ae,variables:{productionRequestId:e},errorPolicy:"all"}).pipe((0,q.M)(()=>{const i=structuredClone(this.#o.productionRequests()),r=i.findIndex(s=>s.id===e);i.splice(r,1),this.#o.setProductionRequests(i)}))}static#n=this.\u0275fac=function(i){return new(i||o)};static#a=this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const Ne=(o,a)=>a.id,Be=o=>({"pointer-events-none":o}),Ue=()=>[5,10,25,100],Oe=o=>["/modules/production/requests",o];function Le(o,a){if(1&o){const e=t.RV6();t.j41(0,"div",25)(1,"div",27),t.nrm(2,"mat-icon",28),t.j41(3,"div",29),t.EFF(4),t.nI1(5,"date"),t.k0s()(),t.j41(6,"div",30),t.EFF(7),t.k0s(),t.j41(8,"div",31),t.nrm(9,"mat-icon",28),t.j41(10,"div",30),t.EFF(11),t.k0s()(),t.j41(12,"div",31),t.nrm(13,"mat-icon",28),t.j41(14,"div",30),t.EFF(15),t.nI1(16,"date"),t.k0s()(),t.j41(17,"div",32)(18,"span",33),t.EFF(19),t.k0s()(),t.j41(20,"div",34)(21,"span",33),t.EFF(22),t.k0s()(),t.j41(23,"div",35)(24,"button",36),t.bIt("click",function(){const r=t.eBV(e).$implicit,s=t.XpG(2);return t.Njj(s.generateProductionRequestRequestDocument(r))}),t.nrm(25,"mat-icon",37),t.k0s(),t.j41(26,"button",38),t.nrm(27,"mat-icon",37),t.k0s(),t.j41(28,"button",39),t.bIt("click",function(){const r=t.eBV(e).$implicit,s=t.XpG(2);return t.Njj(s.deleteProductionRequest(r))}),t.nrm(29,"mat-icon",37),t.k0s()()()}if(2&o){const e=a.$implicit;t.R7$(2),t.Y8G("svgIcon","mat_solid:date_range"),t.R7$(2),t.SpI(" ",t.i5U(5,13,e.requestedDate,"dd/MM/yyyy")," "),t.R7$(3),t.SpI(" ",e.no," "),t.R7$(2),t.Y8G("svgIcon","mat_solid:person"),t.R7$(2),t.SpI(" ",e.requestedBy," "),t.R7$(2),t.Y8G("svgIcon","mat_solid:date_range"),t.R7$(2),t.SpI(" ",t.i5U(16,16,e.dueDate,"dd/MM/yyyy")," "),t.R7$(4),t.SpI(" ",e.priority," "),t.R7$(3),t.SpI(" ",e.status," "),t.R7$(3),t.Y8G("svgIcon","mat_solid:description"),t.R7$(),t.Y8G("routerLink",t.eq3(19,Oe,e.id)),t.R7$(),t.Y8G("svgIcon","mat_solid:edit"),t.R7$(2),t.Y8G("svgIcon","mat_solid:delete")}}function Ye(o,a){if(1&o&&(t.j41(0,"div",20)(1,"div",21)(2,"div",22),t.EFF(3," Fecha de Solicitud "),t.k0s(),t.j41(4,"div",23),t.EFF(5," N\xba "),t.k0s(),t.j41(6,"div",22),t.EFF(7," Solicitado por "),t.k0s(),t.j41(8,"div",22),t.EFF(9," Fecha de Entrega "),t.k0s(),t.j41(10,"div",22),t.EFF(11," Prioridad "),t.k0s(),t.j41(12,"div",22),t.EFF(13," Estado "),t.k0s(),t.j41(14,"div",24),t.EFF(15,"Acciones"),t.k0s()(),t.Z7z(16,Le,30,21,"div",25,Ne),t.k0s(),t.nrm(18,"mat-paginator",26)),2&o){const e=t.XpG();t.R7$(2),t.Y8G("mat-sort-header","requestedDate"),t.R7$(2),t.Y8G("mat-sort-header","no"),t.R7$(2),t.Y8G("mat-sort-header","requestedBy"),t.R7$(2),t.Y8G("mat-sort-header","dueDate"),t.R7$(2),t.Y8G("mat-sort-header","priority"),t.R7$(2),t.Y8G("mat-sort-header","status"),t.R7$(4),t.Dyx(e.productionRequestsStore.productionRequests()),t.R7$(2),t.Y8G("ngClass",t.eq3(12,Be,e.isLoading))("length",e.productionRequestsStore.pagination().length)("pageIndex",e.productionRequestsStore.pagination().page)("pageSize",e.productionRequestsStore.pagination().size)("pageSizeOptions",t.lJ4(14,Ue))("showFirstLastButtons",!0)}}function ze(o,a){1&o&&(t.j41(0,"div",40),t.EFF(1," \xa1No se ha registrado ninguna solicitud! "),t.k0s())}let Qe=(()=>{class o{constructor(){this.isLoading=!1,this.paginator=(0,t.ebz)(R.iy),this.productionRequestsStore=(0,t.WQX)(lt),this.searchInputControl=new n.MJ,this.selectedSlide=null,this.sort=(0,t.ebz)(u.B4),this.user=null,this.#t=(0,t.WQX)(t.gRc),this.#e=(0,t.WQX)(t.abz),this.#o=(0,t.WQX)(Ft.Q),this.#n=(0,t.WQX)(K.G),this.#a=(0,t.WQX)(ct.M),this.#i=(0,t.WQX)(et),this.#s=(0,t.WQX)(w.UG),this.#r=new l.B,this.#c=(0,t.WQX)(L.il)}#t;#e;#o;#n;#a;#i;#s;#r;#c;ngOnInit(){this.searchInputControl.valueChanges.pipe((0,p.Q)(this.#r),(0,O.B)(300),(0,Z.n)(e=>(this.isLoading=!0,this.#i.findAllProductionRequests(this.productionRequestsStore.pagination().page,this.productionRequestsStore.pagination().size,this.sort().active,this.sort().direction,e))),(0,x.T)(()=>{this.isLoading=!1})).subscribe(),this.#c.select(St.SW).pipe((0,tt.pQ)(this.#e)).subscribe(e=>{this.user=e,this.#t.markForCheck()})}ngAfterViewInit(){this.sort()&&this.paginator()&&(this.sort().sort({id:"name",start:"asc",disableClear:!0}),this.#t.markForCheck(),this.sort().sortChange.pipe((0,p.Q)(this.#r)).subscribe(()=>{this.paginator().pageIndex=0}),(0,Ct.h)(this.sort().sortChange,this.paginator().page).pipe((0,Z.n)(()=>(this.isLoading=!0,this.#i.findAllProductionRequests(this.paginator().pageIndex,this.paginator().pageSize,this.sort().active,this.sort().direction))),(0,x.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this.#r.next(null),this.#r.complete()}deleteProductionRequest(e){this.#n.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la solicitud de producci\xf3n: ${e.no}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,p.Q)(this.#r)).subscribe(r=>{"confirmed"===r&&this.#i.removeProductionRequest(e.id).pipe((0,p.Q)(this.#r)).subscribe(({data:s})=>{s&&(this.#s.openFromComponent(Y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeProductionRequest.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#t.markForCheck())})})}generateProductionRequestRequestDocument(e){}static#u=this.\u0275fac=function(i){return new(i||o)};static#d=this.\u0275cmp=t.VBU({type:o,selectors:[["production-requests"]],viewQuery:function(i,r){1&i&&(t.wEZ(r.paginator,R.iy,5),t.wEZ(r.sort,u.B4,5)),2&i&&t.NyB(2)},standalone:!0,features:[t.aNF],decls:30,vars:9,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","md:flex-row","flex-0","md:items-center","md:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-3","text-secondary",3,"svgIcon"],["routerLink","/modules/production/dashboard",1,"ml-1","text-primary-500"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","md:mt-0","md:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","","routerLink","new",1,"mt-4","text-white","sm:mt-0","bg-gradient-to-r","from-primary-500","to-primary-600","hover:to-primary-900","hover:shadow-lg"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","production-requests-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"flex","items-center","justify-center",3,"mat-sort-header"],[1,"flex","items-center","justify-start",3,"mat-sort-header"],[1,"pr-4","text-right"],[1,"z-0","grid","items-center","gap-4","px-6","py-3","bg-white","border-b","dark:bg-default","production-requests-grid","md:px-8"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"flex","items-center"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-2","truncate"],[1,"truncate"],[1,"flex","flex-row","justify-center","space-x-1"],[1,"block","text-center"],[1,"px-2","py-1","text-xs","font-semibold","text-white","rounded-full","bg-gradient-to-r","from-primary-500","to-primary-600"],[1,"flex","justify-center","mr-3","text-center"],[1,"flex","flex-row","justify-end","gap-2"],["mat-stroked-button","","matTooltip","Ver Documento",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Editar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],["mat-stroked-button","","matTooltip","Eliminar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(i,r){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t.EFF(6,"Inicio"),t.k0s()(),t.j41(7,"div",5),t.nrm(8,"mat-icon",6),t.j41(9,"a",7),t.EFF(10,"Producci\xf3n"),t.k0s()(),t.j41(11,"div",5),t.nrm(12,"mat-icon",6),t.j41(13,"a",8),t.EFF(14,"Solicitudes de Producci\xf3n"),t.k0s()()(),t.j41(15,"div",9)(16,"h2",10),t.EFF(17," Registro Solicitudes de Producci\xf3n "),t.k0s()()(),t.j41(18,"div",11)(19,"mat-form-field",12),t.nrm(20,"mat-icon",13)(21,"input",14),t.k0s(),t.j41(22,"button",15),t.nrm(23,"mat-icon",16),t.j41(24,"span",17),t.EFF(25,"Agregar"),t.k0s()()()(),t.j41(26,"div",18)(27,"div",19),t.DNE(28,Ye,19,15)(29,ze,2,0),t.k0s()()()),2&i&&(t.R7$(8),t.Y8G("svgIcon","mat_solid:chevron_right"),t.R7$(4),t.Y8G("svgIcon","mat_solid:chevron_right"),t.R7$(7),t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",r.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),t.R7$(2),t.Y8G("svgIcon","mat_solid:add"),t.R7$(5),t.vxM(28,r.productionRequestsStore.productionRequests().length>0?28:29))},dependencies:[g.vh,E.Hl,E.$z,S.RG,S.rl,S.JW,_.m_,_.An,D.fS,D.fg,R.Ou,R.iy,j.D6,T.mV,u.NQ,u.B4,u.aE,X.uc,X.oV,g.YU,n.X1,n.me,n.BC,n.l_,F.Wk],styles:[".production-requests-grid{grid-template-columns:50px auto 150px 150px 100px 150px 100px}\n"],encapsulation:2,changeDetection:0})}return o})();var ot=c(25084),Ve=c(31397),We=c(72797),Xe=c(56808);const Je=()=>({suppressScrollX:!0}),Ke=()=>({suppressScrollY:!0});function He(o,a){if(1&o){const e=t.RV6();t.j41(0,"mat-option",48),t.bIt("click",function(){const r=t.eBV(e).$implicit,s=t.XpG();return t.Njj(s.selectCustomer(r))}),t.EFF(1),t.k0s()}if(2&o){const e=a.$implicit;t.Y8G("value",e),t.R7$(),t.SpI(" ",e.name," ")}}function Ze(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El nombre de la persona que realiza la solicitud es obligatorio "),t.k0s())}function to(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," La fecha de la solicitud es obligatoria "),t.k0s())}function eo(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," La fecha de entrega es obligatoria "),t.k0s())}function oo(o,a){1&o&&(t.j41(0,"mat-error"),t.EFF(1," El tipo de comprobante es obligatorio "),t.k0s())}function ro(o,a){if(1&o){const e=t.RV6();t.j41(0,"mat-option",49),t.bIt("click",function(r){const s=t.eBV(e).$implicit;return t.XpG().addOrRemoveProductionRequestProduct(s),t.Njj(r.stopPropagation())}),t.j41(1,"div",50),t.bIt("click",function(r){const s=t.eBV(e).$implicit;return t.XpG().addOrRemoveProductionRequestProduct(s),t.Njj(r.stopPropagation())}),t.j41(2,"span",51),t.nrm(3,"mat-checkbox",52),t.EFF(4),t.k0s()()()}if(2&o){const e=a.$implicit;t.Y8G("value",e),t.R7$(3),t.Y8G("checked",e.checked),t.R7$(),t.SpI(" ",e.name," ")}}function io(o,a){if(1&o){const e=t.RV6();t.j41(0,"div")(1,"div",56)(2,"div"),t.EFF(3),t.k0s(),t.j41(4,"div",57),t.EFF(5),t.k0s(),t.j41(6,"mat-form-field",58),t.nrm(7,"span",59)(8,"input",60),t.k0s(),t.j41(9,"div",61),t.EFF(10),t.nI1(11,"number"),t.k0s(),t.j41(12,"div",61),t.EFF(13),t.nI1(14,"number"),t.k0s(),t.j41(15,"div",62)(16,"button",63),t.bIt("click",function(){const r=t.eBV(e).$index,s=t.XpG(2);return t.Njj(s.removeProduct(r))}),t.nrm(17,"mat-icon",64),t.k0s()()()()}if(2&o){const e=a.$implicit,i=a.$index;t.R7$(3),t.JRh(i+1),t.R7$(2),t.SpI(" ",e.get("product").value.name," "),t.R7$(),t.Y8G("subscriptSizing","dynamic"),t.R7$(2),t.Y8G("min",1)("formControl",e.get("quantity")),t.R7$(2),t.SpI(" ",t.i5U(11,8,e.get("product").value.totalCost,"1.2-2")," "),t.R7$(3),t.SpI(" ",t.i5U(14,11,e.get("product").value.totalCost*e.get("quantity").value,"1.2-2")," "),t.R7$(4),t.Y8G("svgIcon","mat_solid:close")}}function no(o,a){if(1&o&&(t.j41(0,"div",47)(1,"div",53),t.nrm(2,"div"),t.j41(3,"div",54),t.EFF(4," Producto "),t.k0s(),t.j41(5,"div",55),t.EFF(6," Cantidad "),t.k0s(),t.j41(7,"div",55),t.EFF(8," Costo Unitario "),t.k0s(),t.j41(9,"div",55),t.EFF(10," Costo Total "),t.k0s(),t.j41(11,"div",55),t.EFF(12," Quitar "),t.k0s()(),t.Z7z(13,io,18,14,"div",null,t.fX1),t.k0s()),2&o){const e=t.XpG();t.R7$(13),t.Dyx(e.productionRequestForm.get("products").controls)}}function ao(o,a){1&o&&(t.j41(0,"div",65),t.EFF(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),t.k0s())}let so=(()=>{class o{constructor(){this.editMode=!1,this.maxDate=new Date,this.productionRequestId=t.hFB.required(),this.productionRequestsStore=(0,t.WQX)(lt),this.searchCustomerControl=new n.MJ(null),this.searchProductionRequestControl=new n.MJ(null),this.searchProductControl=new n.MJ(null),this.selectedCustomerName="",this.stayHere=!1,this.filteredProducts=[],this.productionDataSheetsStore=(0,t.WQX)(H),this.#t=(0,t.WQX)(t.gRc),this.#e=(0,t.WQX)(We.h),this.#o=(0,t.WQX)(n.ok),this.#n=(0,t.WQX)(K.G),this.#a=(0,t.WQX)(et),this.#i=(0,t.WQX)(F.Ix),this.#s=(0,t.WQX)(w.UG),this.#r=(0,t.WQX)(L.il)}#t;#e;#o;#n;#a;#i;#s;#r;ngOnInit(){if(this.productionRequestForm=this.#o.group({id:new n.MJ(null),requestedBy:new n.MJ(null,[n.k0.required,n.k0.maxLength(100)]),requestedDate:new n.MJ(null,[n.k0.required]),dueDate:new n.MJ(null,[n.k0.required]),priority:new n.MJ("NORMAL",[n.k0.required,n.k0.maxLength(10)]),customerId:new n.MJ(null,[n.k0.required]),products:new n.Yp([],[n.k0.required]),comments:new n.MJ(null,[n.k0.maxLength(500)])}),"new"!==this.productionRequestId()){this.editMode=!0;const e=this.productionRequestsStore.productionRequest();this.productionRequestForm.patchValue(e),this.productionRequestForm.setControl("products",this.#o.array(e.products.map(i=>this.#o.group(i))))}this.filteredProducts=this.productionDataSheetsStore.productionDataSheets(),console.log({filteredProducts:this.filteredProducts}),this.customers$=this.#r.select(Xe.wQ),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,O.B)(200),(0,v.Z)(null),(0,Ve.Z)(e=>null!==e&&"string"==typeof e&&e!==this.selectedCustomerName?this.#e.findActiveCustomers(e.trim()):this.customers$))}selectCustomer(e){this.productionRequestForm.get("customerId").setValue(e.id),this.selectedCustomerName=e.name}displayFn(e){return e&&e.product.name?e.product.name:""}displayFnCustomer(e){return e&&e.name?e.name:""}addOrRemoveProductionRequestProduct(e){const i=this.productionRequestForm.get("products"),r=i.controls.findIndex(s=>s.get("productId").value===e.id);-1===r?(i.push(this.#o.group({id:new n.MJ(null),productId:new n.MJ(e.id,[n.k0.required]),quantity:new n.MJ(1,[n.k0.required,n.k0.min(1)]),product:new n.MJ(e,[n.k0.required])})),this.filteredProducts=this.filteredProducts.map(s=>s.id===e.id?{...s,checked:!0}:s)):(i.removeAt(r),this.filteredProducts=this.filteredProducts.map(s=>s.id===e.id?{...s,checked:!1}:s)),this.#t.markForCheck()}removeProduct(e){this.productionRequestForm.get("products").removeAt(e)}createProductionRequest(e=""){const i=this.productionRequestForm.getRawValue();i.products.forEach(r=>{delete r.product}),console.log(i)}static#c=this.\u0275fac=function(i){return new(i||o)};static#u=this.\u0275cmp=t.VBU({type:o,selectors:[["production-request"]],inputs:{productionRequestId:[t.Mj6.SignalBased,"productionRequestId"]},standalone:!0,features:[t.aNF],decls:94,vars:45,consts:[["productionRequestNgForm","ngForm"],["customerAutocomplete","matAutocomplete"],["requestedDate",""],["dueDate",""],["productsAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0",3,"fuseScrollbarOptions"],[1,"relative","flex","flex-col","px-6","py-8","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],["routerLink","/modules/production/dashboard",1,"ml-1","text-primary-500"],["routerLink","/modules/production/requests",1,"ml-1","text-primary-500"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["color","primary",3,"ngModelChange","ngModel"],["mat-flat-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click","disabled"],[1,"flex","flex-col","px-4","mt-4","mb-12","gap-y-8","sm:px-8"],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"grid","gap-4","p-10","sm:grid-cols-4","lg:grid-cols-5",3,"formGroup"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[1,"ath-autocomplete",3,"displayWith"],[3,"value"],[1,"w-full","fuse-mat-dense"],["matInput","","maxlength","100",3,"type","formControlName"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["matInput","",3,"matDatepicker","formControlName","min","required"],[3,"formControlName"],["value","LOW"],["value","NORMAL"],["value","HIGH"],[1,"w-full","sm:col-span-4","lg:col-span-5","fuse-mat-textarea"],["matInput","",3,"formControlName","rows"],[1,"col-span-4","shadow","rounded-2xl","bg-card"],[1,"p-6","pb-0"],[1,"flex","flex-col-reverse","justify-between","sm:flex-row"],["appearance","fill",1,"w-full","md:mr-8","fuse-mat-dense",3,"subscriptSizing"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete",3,"closed","displayWith"],[1,"w-full",3,"value"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-3","mt-2","min-h-72",3,"fuseScrollbarOptions"],[1,"grid"],[3,"click","value"],[1,"w-full",3,"click","value"],[1,"grid","w-full","grid-cols-6",3,"click"],[1,"flex","flex-row","items-center","col-span-5","truncate","md:col-span-3"],["color","primary",3,"checked"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","products-request-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left"],[1,"text-center"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","products-request-grid","md:px-8"],[1,"truncate"],[1,"fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matTextSuffix","",1,"px-2"],["matInput","","type","number",1,"font-mono","font-semibold","text-center",3,"min","formControl"],[1,"text-lg","text-center"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-30"]],template:function(i,r){if(1&i){const s=t.RV6();t.j41(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8)(4,"div")(5,"a",9),t.EFF(6,"Inicio"),t.k0s()(),t.j41(7,"div",10),t.nrm(8,"mat-icon",11),t.j41(9,"a",12),t.EFF(10,"Producci\xf3n"),t.k0s()(),t.j41(11,"div",10),t.nrm(12,"mat-icon",11),t.j41(13,"a",13),t.EFF(14,"Solicitudes"),t.k0s()(),t.j41(15,"div",10),t.nrm(16,"mat-icon",11),t.j41(17,"a",14),t.EFF(18),t.k0s()()(),t.j41(19,"div",15)(20,"h2",16),t.EFF(21," Registrar Solicitud de Producci\xf3n "),t.k0s()()(),t.j41(22,"div",17)(23,"mat-checkbox",18),t.mxI("ngModelChange",function(C){return t.eBV(s),t.DH7(r.stayHere,C)||(r.stayHere=C),t.Njj(C)}),t.EFF(24,"Permanecer aqu\xed"),t.k0s(),t.j41(25,"button",19),t.bIt("click",function(){return t.eBV(s),t.Njj(r.createProductionRequest())}),t.EFF(26," Registrar "),t.k0s()()(),t.j41(27,"div",20)(28,"div",21)(29,"form",22,0)(31,"mat-form-field",23)(32,"mat-label"),t.EFF(33,"Cliente"),t.k0s(),t.nrm(34,"mat-icon",24)(35,"input",25),t.j41(36,"mat-autocomplete",26,1),t.Z7z(38,He,2,2,"mat-option",27,t.fX1),t.nI1(40,"async"),t.k0s()(),t.j41(41,"mat-form-field",28)(42,"mat-label"),t.EFF(43,"Solicitada por"),t.k0s(),t.nrm(44,"input",29),t.DNE(45,Ze,2,0,"mat-error"),t.k0s(),t.j41(46,"mat-form-field",28)(47,"mat-label"),t.EFF(48,"Fecha de la solicitud"),t.k0s(),t.nrm(49,"input",30),t.j41(50,"mat-hint"),t.EFF(51,"DD/MM/YYYY"),t.k0s(),t.nrm(52,"mat-datepicker-toggle",31)(53,"mat-datepicker",null,2),t.DNE(55,to,2,0,"mat-error"),t.k0s(),t.j41(56,"mat-form-field",28)(57,"mat-label"),t.EFF(58,"Fecha de entrega"),t.k0s(),t.nrm(59,"input",32),t.j41(60,"mat-hint"),t.EFF(61,"DD/MM/YYYY"),t.k0s(),t.nrm(62,"mat-datepicker-toggle",31)(63,"mat-datepicker",null,3),t.DNE(65,eo,2,0,"mat-error"),t.k0s(),t.j41(66,"mat-form-field",28)(67,"mat-label"),t.EFF(68,"Prioridad"),t.k0s(),t.j41(69,"mat-select",33)(70,"mat-option",34),t.EFF(71,"Baja"),t.k0s(),t.j41(72,"mat-option",35),t.EFF(73,"Normal"),t.k0s(),t.j41(74,"mat-option",36),t.EFF(75,"Alta"),t.k0s()(),t.DNE(76,oo,2,0,"mat-error"),t.k0s(),t.j41(77,"mat-form-field",37)(78,"mat-label"),t.EFF(79,"Observaciones"),t.k0s(),t.nrm(80,"textarea",38),t.k0s()()(),t.j41(81,"div",39)(82,"div",40)(83,"div",41)(84,"mat-form-field",42),t.nrm(85,"mat-icon",24)(86,"input",43),t.j41(87,"mat-autocomplete",44,4),t.bIt("closed",function(){return t.eBV(s),t.Njj(r.searchProductControl.reset())}),t.Z7z(89,ro,5,3,"mat-option",45,t.fX1),t.k0s()()(),t.j41(91,"div",46),t.DNE(92,no,15,0,"div",47)(93,ao,2,0),t.k0s()()()()()}if(2&i){const s=t.sdS(37),m=t.sdS(54),C=t.sdS(64),M=t.sdS(88);t.Y8G("fuseScrollbarOptions",t.lJ4(43,Je)),t.R7$(8),t.Y8G("svgIcon","mat_solid:chevron_right"),t.R7$(4),t.Y8G("svgIcon","mat_solid:chevron_right"),t.R7$(4),t.Y8G("svgIcon","mat_solid:chevron_right"),t.R7$(2),t.SpI(" ","new"===r.productionRequestId()?"Crear":"Editar"," "),t.R7$(5),t.R50("ngModel",r.stayHere),t.R7$(2),t.Y8G("disabled",r.productionRequestForm.invalid||0===r.productionRequestForm.get("products").controls.length),t.R7$(4),t.Y8G("formGroup",r.productionRequestForm),t.R7$(5),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",r.searchCustomerControl)("matAutocomplete",s)("placeholder","Buscar cliente")("required",!0),t.R7$(),t.Y8G("displayWith",r.displayFnCustomer),t.R7$(2),t.Dyx(t.bMT(40,41,r.customersFiltered)),t.R7$(6),t.Y8G("type","text")("formControlName","requestedBy"),t.R7$(),t.vxM(45,r.productionRequestForm.get("requestedBy").hasError("required")?45:-1),t.R7$(4),t.Y8G("matDatepicker",m)("formControlName","requestedDate")("max",r.maxDate)("required",!0),t.R7$(3),t.Y8G("for",m),t.R7$(3),t.vxM(55,r.productionRequestForm.get("requestedDate").hasError("required")?55:-1),t.R7$(4),t.Y8G("matDatepicker",C)("formControlName","dueDate")("min",r.maxDate)("required",!0),t.R7$(3),t.Y8G("for",C),t.R7$(3),t.vxM(65,r.productionRequestForm.get("dueDate").hasError("required")?65:-1),t.R7$(4),t.Y8G("formControlName","priority"),t.R7$(7),t.vxM(76,r.productionRequestForm.get("priority").hasError("required")?76:-1),t.R7$(4),t.Y8G("formControlName","comments")("rows",2),t.R7$(4),t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",r.searchProductControl)("matAutocomplete",M)("placeholder","Buscar productos"),t.R7$(),t.Y8G("displayWith",r.displayFn),t.R7$(2),t.Dyx(r.filteredProducts),t.R7$(2),t.Y8G("fuseScrollbarOptions",t.lJ4(44,Ke)),t.R7$(),t.vxM(92,r.productionRequestForm.get("products").controls.length>0?92:93)}},dependencies:[g.Jj,g.QX,n.YN,n.qT,n.me,n.Q0,n.BC,n.cb,n.YS,n.tU,n.VZ,n.vS,ft.p,d.jL,d.$3,G.wT,d.pN,E.Hl,E.$z,y.g7,y.So,ot.X6,ot.Vh,ot.bZ,ot.bU,S.RG,S.rl,S.nJ,S.MV,S.TL,S.JW,S.yw,_.m_,_.An,D.fS,D.fg,N.Ve,N.VO,X.uc,n.X1,n.l_,n.j4,n.JD,F.Wk],styles:[".products-request-grid{grid-template-columns:10px auto 150px 150px 150px 50px}\n"],encapsulation:2,changeDetection:0})}return o})(),co=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-production-order"]],standalone:!0,features:[t.aNF],decls:2,vars:0,template:function(i,r){1&i&&(t.j41(0,"p"),t.EFF(1,"production-order works!"),t.k0s())},encapsulation:2})}return o})(),uo=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-production-orders"]],standalone:!0,features:[t.aNF],decls:2,vars:0,template:function(i,r){1&i&&(t.j41(0,"p"),t.EFF(1,"production-orders works!"),t.k0s())},encapsulation:2})}return o})();var lo=c(23301),mo=c(79451),po=c(43801),Fo=c(36646);const So=[{path:"",component:I,children:[{path:"",pathMatch:"full",redirectTo:"dashboard"},{path:"dashboard",component:f},{path:"data-sheets",component:Te,resolve:{dataSheets:(o,a)=>(0,t.WQX)(W).findAllProductionDataSheets()}},{path:"data-sheets/:productionDataSheetId",component:ye,resolve:{categories:mo.V7,currencies:lo.I,products:po.Tn,productionDataSheet:(o,a)=>{const e=o.params.productionDataSheetId;return e&&"new"!==e?(0,t.WQX)(W).findProductionDataSheetById(e):{}}}},{path:"requests",component:Qe,resolve:{productionRequests:(o,a)=>(0,t.WQX)(et).findAllProductionRequests()}},{path:"requests/:productionRequestId",component:so,resolve:{customers:Fo.iL,dataSheets:(o,a)=>(0,t.WQX)(W).findActiveProductionDataSheets(),productionRequest:(o,a)=>{const e=o.params.productionRequestId;return e&&"new"!==e?(0,t.WQX)(et).findProductionRequestById(e):{}}}},{path:"orders",component:uo},{path:"orders/:productionOrderId",component:co},{path:"**",redirectTo:"dashboard"}]}]},43801:(U,k,c)=>{c.d(k,{Bj:()=>n,N4:()=>S,Tn:()=>y,bN:()=>P,eX:()=>f});var F=c(54438),t=c(36296),I=c(4840);const f=(D,R)=>{const j=D.params.productId;return j&&"new"!==j?(0,F.WQX)(t.g).getProductById(j):{}},n=(D,R)=>(0,F.WQX)(t.g).getProducts(),P=(D,R)=>(0,F.WQX)(t.g).findActiveProducts(),y=(D,R)=>(0,F.WQX)(t.g).findIngredients(),S=(D,R)=>(0,F.WQX)(I.t).getProductsInStockAvailable()},36296:(U,k,c)=>{c.d(k,{g:()=>N});var F=c(33446),t=c(96697),I=c(25558),f=c(88141),n=c(96354),P=c(62288),E=c(98216),y=c(39928),S=c(13189),_=c(84342),D=c(5864),R=c(54438),j=c(73512),G=c(59640);let N=(()=>{class T{constructor(u,g){this.apolloProvider=u,this.store=g,this._apollo=this.apolloProvider.use("BALANC")}createProduct(u){return this.store.select(S.VW).pipe((0,t.s)(1),(0,I.n)(g=>this._apollo.mutate({mutation:_.xq,variables:{createProductInput:u},errorPolicy:"all"}).pipe((0,f.M)(({data:d})=>{const h=(0,F.A)(g);h.push(d.createProduct.product),this.store.dispatch((0,y.d9)({products:h}))}))))}importProductsFromTemplateFile(u,g){return this._apollo.mutate({mutation:_.YV,variables:{importProductsTemplateFileInput:{products:u,depotId:g}},errorPolicy:"all"}).pipe((0,f.M)(({data:d})=>{this.store.dispatch((0,y.d9)({products:d.importProductsFromTemplateFile.products})),this.store.dispatch((0,E.Bp)({pagination:d.importProductsFromTemplateFile.pagination}))}))}getProducts(u=0,g=50,d="name",h="asc",b=""){return this._apollo.query({query:_.oH,errorPolicy:"all",variables:{page:u,size:g,sort:d,order:h,search:b}}).pipe((0,f.M)(({data:l})=>{this.store.dispatch((0,y.d9)({products:l.findAllProducts.products})),this.store.dispatch((0,E.Bp)({pagination:l.findAllProducts.pagination}))}))}findProductsToList(){return this._apollo.query({query:_.pg,errorPolicy:"all"}).pipe((0,f.M)(({data:u})=>{this.store.dispatch((0,y.d9)({products:u.findProductsToList.products}))}))}findIngredients(){return this._apollo.query({query:_.Cm,errorPolicy:"all"}).pipe((0,f.M)(({data:u})=>{this.store.dispatch((0,y.d9)({products:u.findIngredients.products}))}))}getProductsByMerchant(u=1,g=50,d="name",h="asc",b=""){return this._apollo.query({query:_.zb,errorPolicy:"all",variables:{offset:g*(u-1),limit:g,sort:d,order:h,search:b}}).pipe((0,f.M)(({data:l})=>{this.store.dispatch((0,y.d9)({products:l.findAllProductsByMerchant.products})),this.store.dispatch((0,E.Bp)({pagination:l.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:_.r,errorPolicy:"all"}).pipe((0,f.M)(({})=>{}))}findActiveProducts(u="",g=10){return this._apollo.query({query:_.LS,variables:{search:u,size:g},errorPolicy:"all"}).pipe((0,n.T)(({data:d})=>d?d.findActiveProducts:[]),(0,f.M)(d=>{d&&this.store.dispatch((0,y.d9)({products:d}))}))}findProductsByUpcS(u=[]){return this._apollo.query({query:_.hE,variables:{upcS:u},errorPolicy:"all"}).pipe((0,n.T)(({data:g})=>g?g.findProductsByUpcS:[]))}getProductsInactive(){return this._apollo.query({query:_.Ax,errorPolicy:"all"}).pipe((0,f.M)(({})=>{}))}getProductsExhausted(){return this._apollo.query({query:_.mU,errorPolicy:"all"}).pipe((0,f.M)(({})=>{}))}getProductById(u){return this._apollo.query({query:_.De,variables:{productId:u},errorPolicy:"all"}).pipe((0,f.M)(({data:g})=>{this.store.dispatch((0,y.yz)({product:g.findProductById.product}))}))}updateProduct(u){return this.store.select(S.VW).pipe((0,t.s)(1),(0,I.n)(g=>this._apollo.mutate({mutation:_.q,variables:{updateProductInput:u},errorPolicy:"all"}).pipe((0,f.M)(({data:d})=>{const h=(0,F.A)(g);h[g.findIndex(l=>l.id===u.id)]=d.updateProduct.product,this.store.dispatch((0,y.d9)({products:h})),this.store.dispatch((0,y.yz)({product:d.updateProduct.product}))}))))}updateProductStatus(u){return this.store.select(S.VW).pipe((0,t.s)(1),(0,I.n)(g=>this._apollo.mutate({mutation:_.bM,variables:{updateEntityStatusInput:u},errorPolicy:"all"}).pipe((0,f.M)(({data:d})=>{if(d){const h=(0,F.A)(g);h[g.findIndex(l=>l.id===u.id)].active=u.active,this.store.dispatch((0,y.d9)({products:h}))}}))))}updateProductImages(u,g,d){return this._apollo.mutate({mutation:_.B9,variables:{updateProductById:u,thumbnail:g,images:d},errorPolicy:"all"}).pipe((0,n.T)(({data:h})=>h?h.updateProductImages:null),(0,f.M)(h=>{h&&this.store.dispatch((0,y.NM)({id:h.product.id,thumbnail:h.product.thumbnail,images:h.product.images}))}))}removeProduct(u){return this.store.select(S.VW).pipe((0,t.s)(1),(0,I.n)(g=>this._apollo.mutate({mutation:_.Fu,variables:{removeProductId:u},errorPolicy:"all"}).pipe((0,f.M)(({data:d})=>{if(d){const h=(0,F.A)(g),b=g.findIndex(l=>l.id===u);h.splice(b,1),this.store.dispatch((0,y.d9)({products:h}))}}))))}getTags(u=1,g=50,d="name",h="asc",b=""){return this._apollo.query({query:_.J,errorPolicy:"all",variables:{offset:g*(u-1),limit:g,sort:d,order:h,search:b}}).pipe((0,f.M)(({data:l})=>{this.store.dispatch((0,y.Wt)({tags:l.findAllTags.tags}))}))}createTag(u){return this.store.select(S.O).pipe((0,t.s)(1),(0,I.n)(g=>this._apollo.mutate({mutation:_.Op,variables:{createTagInput:u},errorPolicy:"all"}).pipe((0,f.M)(({data:d})=>{const h=(0,F.A)(g);h.push(d.createTag.tag),this.store.dispatch((0,y.Wt)({tags:h}))}))))}updateTag(u){return this.store.select(S.O).pipe((0,t.s)(1),(0,I.n)(g=>this._apollo.mutate({mutation:_.zk,variables:{updateTagInput:u},errorPolicy:"all"}).pipe((0,f.M)(({data:d})=>{const h=(0,F.A)(g);h[g.findIndex(l=>l.id===u.id)]=d.updateTag.tag,this.store.dispatch((0,y.Wt)({tags:h}))}))))}deleteTag(u){return this.store.select(S.O).pipe((0,t.s)(1),(0,I.n)(g=>this._apollo.mutate({mutation:_.GR,variables:{removeTagId:u},errorPolicy:"all"}).pipe((0,f.M)(()=>{const d=(0,F.A)(g),h=g.findIndex(b=>b.id===u);d.splice(h,1),this.store.dispatch((0,y.Wt)({tags:d}))}))))}getProductsAvailable(){return this._apollo.query({query:_.my,errorPolicy:"all"}).pipe((0,f.M)(({})=>{}))}importStockFormTemplateFile(u){let g;function d(l){return{upc:l.UPC?l.UPC.toString():null,sku:l.SKU?l.SKU.toString():null,bCode:l.C\u00f3digo?l.C\u00f3digo.toString():null,name:l.Nombre,description:D.H.IsNullOrEmpty(l.Descripci\u00f3n)?"":l.Descripci\u00f3n,uom:l["Unidad de Medida"],quantity:l.Cantidad,cost:l.Costo,price:l.Precio,brand:l.Marca,weight:l.Peso,width:l.Ancho,length:l.Largo,height:l.Altura,volume:l.Volumen,isPerishable:!!l["N\xfamero de Lote"],lotNumber:l["N\xfamero de Lote"]?l["N\xfamero de Lote"].toString().trim():null,dueDate:D.H.isValidDate(l["Fecha de Vencimiento"])?new Date(l["Fecha de Vencimiento"]):null}}const h=u.target,b=new FileReader;b.onload=l=>{const v=P.LF(l.target.result,{type:"binary"});g=P.Wp.sheet_to_json(v.Sheets[v.SheetNames[0]]);const L=g.map(d);this.store.dispatch((0,y.GQ)({products:L}))},b.readAsBinaryString(h.files[0])}static#t=this.\u0275fac=function(g){return new(g||T)(R.KVO(j.Ic),R.KVO(G.il))};static#e=this.\u0275prov=R.jDH({token:T,factory:T.\u0275fac,providedIn:"root"})}return T})()},33446:(U,k,c)=>{c.d(k,{A:()=>n});var F=c(99531);const n=function f(P){return(0,F.A)(P,5)}}}]);