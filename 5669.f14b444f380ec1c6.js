"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5669],{36646:(f,p,r)=>{r.d(p,{AZ:()=>i,FD:()=>c,iL:()=>s});var n=r(54438),a=r(72797);const i=(u,I)=>(0,n.WQX)(a.h).findAllCustomers(),s=(u,I)=>(0,n.WQX)(a.h).findAllActiveCustomers(),c=(u,I)=>{const h=u.params.customerId;return h&&"new"!==h?(0,n.WQX)(a.h).findCustomerById(h):{}}},56808:(f,p,r)=>{r.d(p,{hQ:()=>i,wQ:()=>s});var n=r(59640);const a=c=>c.customers,i=(0,n.Mz)(a,c=>c.customer),s=(0,n.Mz)(a,c=>c.customers)},72797:(f,p,r)=>{r.d(p,{h:()=>P});var n=r(84412),a=r(96354),i=r(88141),s=r(42409),c=r(98216),u=r(73512);const I=u.J1`
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
                domain
            }
        }
    }
`,h=u.J1`
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
                type,
                name,
                domain,
                code
                email
                phone


                bankAccounts {
                    no,
                    currency
                },
            }
        }
    }
`,m=u.J1`
    query FindAllActiveCustomers {
        findAllActiveCustomers {
            id,
            name,
            merchantId,
        }
    }
`,M=u.J1`
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

                email
                phone

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
                website,
                logoUrl,
                coverUrl,
            }
        }
    }
`,d=u.J1`
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
            }
        }
    }
`,l=u.J1`
    mutation UpdateCustomerStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCustomerStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,v=u.J1`
    mutation UpdateCustomerImage($imageProperty: String!, $updateEntityImageInput: UpdateEntityImageInput!) {
        updateCustomerImage(imageProperty: $imageProperty, updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,g=u.J1`
    mutation RemoveCustomer($customerId: String!) {
        removeCustomer(id: $customerId) {
            ok,
            message,
        }
    }
`,A=u.J1`
    query FindActiveCustomers($search: String!, $size: Int!) {
        findActiveCustomers(search: $search, size: $size) {
            id
            active
            name
            code
            credit
        }
    }
`;r(45312);var E=r(54438),U=r(21626),O=r(59640);let P=(()=>{class y{constructor(t,e,o){this._httpClient=t,this.apolloProvider=e,this.store=o,this._domains=new n.t(null),this._apollo=this.apolloProvider.use("BALANC")}get domains$(){return this._domains.asObservable()}createCustomer(t){return this._apollo.mutate({mutation:I,variables:{createCustomerInput:t},errorPolicy:"all"}).pipe((0,a.T)(({data:e})=>e?e.createCustomer:null),(0,i.M)(e=>{e&&(this.store.dispatch((0,s.ff)({customer:e.customer})),this.store.dispatch((0,s.hv)({customer:e.customer})))}))}findAllCustomers(t=0,e=10,o="name",T="asc",S=null,$=!1){return this._apollo.query({query:h,variables:{page:t,size:e,sort:o,order:T,search:S},errorPolicy:"all"}).pipe((0,a.T)(({data:C})=>C?C.findAllCustomers:null),(0,i.M)(C=>{C&&(this.store.dispatch($?(0,s.Yi)({customers:C.customers}):(0,s.GM)({customers:C.customers})),this.store.dispatch((0,c.Bp)({pagination:C.pagination})))}))}findAllActiveCustomers(){return this._apollo.query({query:m,errorPolicy:"all"}).pipe((0,a.T)(({data:t})=>t?t.findAllActiveCustomers:null),(0,i.M)(t=>{t&&this.store.dispatch((0,s.GM)({customers:t}))}))}findActiveCustomers(t="",e=10){return this._apollo.query({query:A,variables:{search:t,size:e},errorPolicy:"all"}).pipe((0,a.T)(({data:o})=>o?o.findActiveCustomers:[]),(0,i.M)(o=>{o&&this.store.dispatch((0,s.GM)({customers:o}))}))}findCustomerById(t){return this._apollo.query({query:M,variables:{customerId:t},errorPolicy:"all"}).pipe((0,i.M)(({data:e})=>{this.store.dispatch((0,s.hv)({customer:e.findCustomerById.customer}))}))}updateCustomer(t){return this._apollo.mutate({mutation:d,variables:{updateCustomerInput:t},errorPolicy:"all"}).pipe((0,a.T)(({data:e})=>e?e.updateCustomer:null),(0,i.M)(e=>{e&&(this.store.dispatch((0,s.Gk)({customer:e.customer})),this.store.dispatch((0,s.hv)({customer:e.customer})))}))}updateCustomerStatus(t){return this._apollo.mutate({mutation:l,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,i.M)(()=>{this.store.dispatch((0,s.uz)(t))}))}updateCustomerImage(t,e){return this._apollo.mutate({mutation:v,variables:{imageProperty:t,updateEntityImageInput:e},errorPolicy:"all"}).pipe((0,a.T)(({data:o})=>o?o.updateCustomerImage:null),(0,i.M)(o=>{o&&this.store.dispatch((0,s.pw)({...e,imageProperty:t}))}))}removeCustomer(t){return this._apollo.mutate({mutation:g,variables:{customerId:t},errorPolicy:"all"}).pipe((0,i.M)(()=>{this.store.dispatch((0,s.Be)({id:t}))}))}getDomains(){return this._httpClient.get("assets/data/domains.json").pipe((0,a.T)(t=>t.sort((e,o)=>e.name.toLowerCase()<o.name.toLowerCase()?-1:e.name.toLowerCase()>o.name.toLowerCase()?1:void 0)),(0,i.M)(t=>{this._domains.next(t)}))}getDomainFiltered(t){return this._httpClient.get("assets/data/domains.json").pipe((0,a.T)(e=>e.filter(o=>o.name===t)))}static#t=this.\u0275fac=function(e){return new(e||y)(E.KVO(U.Qq),E.KVO(u.Ic),E.KVO(O.il))};static#e=this.\u0275prov=E.jDH({token:y,factory:y.\u0275fac,providedIn:"root"})}return y})()},34413:(f,p,r)=>{r.d(p,{MI:()=>h,wf:()=>u,zA:()=>I});var n=r(54438),a=r(18810),i=r(99437),s=r(62590),c=r(51188);let u=(()=>{class m{constructor(d,l){this._employeesService=d,this._router=l}resolve(d,l){return this._employeesService.findAllEmployees().pipe((0,i.W)(v=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(l){return new(l||m)(n.KVO(s.r),n.KVO(c.Ix))};static#e=this.\u0275prov=n.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})(),I=(()=>{class m{constructor(d,l){this._employeesService=d,this._router=l}resolve(d,l){const v=d.params.employeeId;return"new"===v?null:this._employeesService.findEmployeeById(v).pipe((0,i.W)(g=>{const A=l.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(A),(0,a.$)(g)}))}static#t=this.\u0275fac=function(l){return new(l||m)(n.KVO(s.r),n.KVO(c.Ix))};static#e=this.\u0275prov=n.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const h=(m,M)=>(0,n.WQX)(s.r).findActiveEmployees()}}]);