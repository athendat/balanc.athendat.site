"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5800],{86006:(b,I,r)=>{r.d(I,{M_:()=>_,u4:()=>f});var p=r(26306),a=r(29643),s=r(19212),i=r(76459),l=r(64190),c=r(84221);let f=(()=>{class n{constructor(m,u,d){this._customersService=m,this._router=u,this.store=d,this.store.select(a.Qs).subscribe(v=>{this.merchant=v})}resolve(m,u){return this.merchant?this._customersService.findAllCustomers(this.merchant.id).pipe((0,p.K)(d=>this._router.navigateByUrl("/desktop"))):null}static#t=this.\u0275fac=function(u){return new(u||n)(s.LFG(i.v),s.LFG(l.F0),s.LFG(c.yh))};static#e=this.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_=(()=>{class n{constructor(m,u,d){this._customersService=m,this._router=u,this.store=d,this.store.select(a.Qs).subscribe(v=>{this.merchant=v})}resolve(m,u){return this.merchant?this._customersService.findAllActiveCustomers(this.merchant.id).pipe((0,p.K)(d=>this._router.navigateByUrl("/desktop"))):null}static#t=this.\u0275fac=function(u){return new(u||n)(s.LFG(i.v),s.LFG(l.F0),s.LFG(c.yh))};static#e=this.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},33963:(b,I,r)=>{r.d(I,{p6:()=>i});var p=r(84221);const a=l=>l.customers,i=((0,p.P1)(a,l=>l.customer),(0,p.P1)(a,l=>l.customers))},76459:(b,I,r)=>{r.d(I,{v:()=>T});var p=r(65619),a=r(37398),s=r(99397),i=r(33686),l=r(97214),c=r(50967);const f=c.Ps`
    mutation CreateCustomer($createCustomerInput: CreateCustomerInput!) {
        createCustomer(createCustomerInput: $createCustomerInput) {
            ok,
            message,

            customer {
                id,
                merchantId,
                logoUrl,
                abbr,
                type,
                name,
                domain
            }
        }
    }
`,A=c.Ps`
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
                abbr,
                type,
                name,
                domain,

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
                    no,
                    currency
                },
            }
        }
    }
`,_=c.Ps`
    query FindAllActiveCustomers($merchantId: String!) {
        findAllActiveCustomers(merchantId: $merchantId) {
            id,
            name,
            merchantId,
            abbr,
        }
    }
`,n=c.Ps`
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
                reupp,

                type,

                bankAccounts {
                    bank,
                    beneficiary,
                    no,
                    currency,

                    cardType {
                        _id,
                        name,
                        bank,
                        currency,
                        type
                    }
                },

                description,
                abbr,
                website,
                logoUrl,
                coverUrl,
            }
        }
    }
`,S=c.Ps`
    mutation UpdateCustomer($updateCustomerInput: UpdateCustomerInput!) {
        updateCustomer(updateCustomerInput: $updateCustomerInput) {
            ok,
            message,

            customer {
                id,
                merchantId,
                logoUrl,
                abbr,
                type,
                name,
                domain
            }
        }
    }
`,m=c.Ps`
    mutation UpdateCustomerStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCustomerStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,u=c.Ps`
    mutation UpdateCustomerImage($imageProperty: String!, $updateEntityImageInput: UpdateEntityImageInput!) {
        updateCustomerImage(imageProperty: $imageProperty, updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,d=c.Ps`
    mutation RemoveCustomer($customerId: String!) {
        removeCustomer(id: $customerId) {
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
                logoUrl,
                abbr,
                type,
                name,
                domain
            }
        }
    }
`,v=c.Ps`
    query FindActiveCustomers($search: String!, $size: Int!) {
        findActiveCustomers(search: $search, size: $size) {
            id
            active
            name
            code
            credit
        }
    }
`;var $=r(20553),y=r(19212),R=r(69862),L=r(84221);const M=$.N.API_URL;let T=(()=>{class g{constructor(e,t,o){this._httpClient=e,this.apolloProvider=t,this.store=o,this._domains=new p.X(null),this._apollo=this.apolloProvider.use("BALANC")}get domains$(){return this._domains.asObservable()}createCustomer(e){return this._apollo.mutate({mutation:f,variables:{createCustomerInput:e},errorPolicy:"all"}).pipe((0,a.U)(({data:t})=>t?t.createCustomer:null),(0,s.b)(t=>{t&&(this.store.dispatch((0,i.wK)({customer:t.customer})),this.store.dispatch((0,i.Xg)({customer:t.customer})))}))}findAllCustomers(e,t=0,o=10,E="name",P="asc",U=null,h=!1){return this._apollo.query({query:A,variables:{merchantId:e,page:t,size:o,sort:E,order:P,search:U},errorPolicy:"all"}).pipe((0,a.U)(({data:C})=>C?C.findAllCustomers:null),(0,s.b)(C=>{C&&(this.store.dispatch(h?(0,i.AT)({customers:C.customers}):(0,i.Pb)({customers:C.customers})),this.store.dispatch((0,l.Jr)({pagination:C.pagination})))}))}findAllActiveCustomers(e){return this._apollo.query({query:_,variables:{merchantId:e},errorPolicy:"all"}).pipe((0,a.U)(({data:t})=>t?t.findAllActiveCustomers:null),(0,s.b)(t=>{t&&this.store.dispatch((0,i.Pb)({customers:t}))}))}findActiveCustomers(e="",t=10){return this._apollo.query({query:v,variables:{search:e,size:t},errorPolicy:"all"}).pipe((0,a.U)(({data:o})=>o?o.findActiveCustomers:[]),(0,s.b)(o=>{o&&this.store.dispatch((0,i.Pb)({customers:o}))}))}getCustomerById(e){return this._httpClient.get(`${M}/customers/${e}`).pipe((0,s.b)(({customer:t})=>{this.store.dispatch((0,i.Xg)({customer:t}))}))}findCustomerById(e){return this._apollo.query({query:n,variables:{customerId:e},errorPolicy:"all"}).pipe((0,a.U)(({data:t})=>t?t.findCustomerById:null),(0,s.b)(t=>{t&&this.store.dispatch((0,i.Xg)({customer:t.customer}))}))}updateCustomer(e){return this._apollo.mutate({mutation:S,variables:{updateCustomerInput:e},errorPolicy:"all"}).pipe((0,a.U)(({data:t})=>t?t.updateCustomer:null),(0,s.b)(t=>{t&&(this.store.dispatch((0,i.uG)({customer:t.customer})),this.store.dispatch((0,i.Xg)({customer:t.customer})))}))}updateCustomerStatus(e){return this._apollo.mutate({mutation:m,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,a.U)(({data:t})=>t?t.updateCustomerStatus:null),(0,s.b)(t=>{t&&this.store.dispatch((0,i.gm)(e))}))}updateCustomerImage(e,t){return this._apollo.mutate({mutation:u,variables:{imageProperty:e,updateEntityImageInput:t},errorPolicy:"all"}).pipe((0,a.U)(({data:o})=>o?o.updateCustomerImage:null),(0,s.b)(o=>{o&&this.store.dispatch((0,i.Pl)({...t,imageProperty:e}))}))}removeCustomer(e,t=0,o=10,E="name",P="desc",U=null){return this._apollo.mutate({mutation:d,variables:{customerId:e,page:t,size:o,sort:E,order:P,search:U},errorPolicy:"all"}).pipe((0,a.U)(({data:h})=>h?h.removeCustomer:null),(0,s.b)(h=>{h&&(this.store.dispatch((0,i.PX)({id:e})),this.store.dispatch((0,l.Jr)({pagination:h.pagination})))}))}getDomains(){return this._httpClient.get("assets/data/domains.json").pipe((0,a.U)(e=>e.sort((t,o)=>t.name.toLowerCase()<o.name.toLowerCase()?-1:t.name.toLowerCase()>o.name.toLowerCase()?1:void 0)),(0,s.b)(e=>{this._domains.next(e)}))}getDomainFiltered(e){return this._httpClient.get("assets/data/domains.json").pipe((0,a.U)(t=>t.filter(o=>o.name===e)))}static#t=this.\u0275fac=function(t){return new(t||g)(y.LFG(R.eN),y.LFG(c._M),y.LFG(L.yh))};static#e=this.\u0275prov=y.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()}}]);