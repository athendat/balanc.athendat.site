"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5478],{57482:(v,m,r)=>{r.d(m,{hf:()=>i,ri:()=>c});var o=r(84221);const a=t=>t.employees,i=(0,o.P1)(a,t=>t.employee),c=(0,o.P1)(a,t=>t.employees)},62637:(v,m,r)=>{r.d(m,{M:()=>S});var o=r(37398),a=r(99397),i=r(12204),c=r(97214),t=r(50967);const I=t.Ps`
    mutation CreateEmployee($createEmployeeInput: CreateEmployeeInput!) {
        createEmployee(createEmployeeInput: $createEmployeeInput) {
            ok,
            message,

            employee {
                id,
                merchantId,
                code,
                departmentId,
                chargeId,
            }
        }
    }
`,f=t.Ps`
    query FindAllEmployees($page: Int, $size: Int! $sort: String, $order: Order, $search: String ) {
        findAllEmployees(page: $page, size: $size, sort: $sort, order: $order, search: $search ) {
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

            employees {
                id,
                name,
                lastname1,
                lastname2,
                fullname,
                code,
                active,
                imageUrl,

                departmentId,
                department {
                    id,
                    name
                },

                chargeId,
                charge {
                    id,
                    name
                }

                emails {
                    email
                },
                phoneNumbers {
                    stateCode,
                    phoneNumber
                },

                bankAccounts {
                    no,
                    currency,
                },

            }
        }
    }
`,y=t.Ps`
    query FindEmployeeById($employeeId: String!) {
        findEmployeeById(id: $employeeId ) {
            ok,
            message,

            employee {
                id,
                merchantId,

                name,
                lastname1,
                lastname2,
                fullname,
                gender,
                idNumber,
                locationId

                emails {
                    email,
                    label
                },
                phoneNumbers {
                    stateCode,
                    phoneNumber,
                    label
                },

                bankAccounts {
                    bank,
                    beneficiary,
                    no,
                    currency,

                    cardType {
                        name,
                        bank,
                        currency,
                        type
                    }
                },


                merchant {
                    id,
                    name
                },

                charge {
                    id,
                    name
                },

                address,
                country,
                state,
                city,
                zip,

                dateOfJoining,
                typeOfContract,
                contractEndDate,
                contractTime,

                departmentId,
                chargeId,
                scholarship,

                salaryFreq,
                salaryMethod,
                salaryLevel,
                imageUrl,
            }
        }
    }
`,h=t.Ps`
    mutation UpdateEmployee($updateEmployeeInput: UpdateEmployeeInput!) {
        updateEmployee(updateEmployeeInput: $updateEmployeeInput) {
            ok,
            message,

            employee {
                id,
                merchantId,
                code,
                departmentId,
                chargeId,
            }
        }
    }
`,P=t.Ps`
    mutation UpdateEmployeeStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateEmployeeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,$=t.Ps`
    mutation UpdateEmployeeImage($updateEntityImageInput: UpdateEntityImageInput!) {
        updateEmployeeImage(updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,A=t.Ps`
    mutation RemoveEmployee($employeeId: String!) {
        removeEmployee(id: $employeeId) {
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

            employees {
                id,

                code,

                departmentId,
                department {
                    id,
                    name
                },

                chargeId,
                charge {
                    id,
                    name
                }

            }
        }
    }
`,U=t.Ps`
    query findActiveEmployees($search: String!, $size: Int!) {
        findActiveEmployees(search: $search, size: $size) {
            id
            name
            lastname1
            lastname2
            fullname
        }
    }
`;var C=r(19212),b=r(84221);let S=(()=>{class E{constructor(l,e){this.apolloProvider=l,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createEmployee(l){return this._apollo.mutate({mutation:I,variables:{createEmployeeInput:l},errorPolicy:"all"}).pipe((0,o.U)(({data:e})=>e?e.createEmployee:null),(0,a.b)(e=>{e&&(this.store.dispatch((0,i.r8)({employee:e.employee})),this.store.dispatch((0,i.Y6)({employee:e.employee})))}))}findAllEmployees(l=0,e=10,n="name",p="asc",u=null,d=!1){return this._apollo.query({query:f,variables:{page:l,size:e,sort:n,order:p,search:u},errorPolicy:"all"}).pipe((0,o.U)(({data:s})=>s?s.findAllEmployees:null),(0,a.b)(s=>{s&&(this.store.dispatch(d?(0,i.uO)({employees:s.employees}):(0,i.Jq)({employees:s.employees})),this.store.dispatch((0,c.Jr)({pagination:s.pagination})))}))}findActiveEmployees(l="",e=25){return this._apollo.query({query:U,variables:{search:l,size:e},errorPolicy:"all"}).pipe((0,o.U)(({data:n})=>n?n.findActiveEmployees:[]),(0,a.b)(n=>{n&&this.store.dispatch((0,i.Jq)({employees:n}))}))}findEmployeeById(l){return this._apollo.query({query:y,variables:{employeeId:l},errorPolicy:"all"}).pipe((0,o.U)(({data:e})=>e?e.findEmployeeById:null),(0,a.b)(e=>{e&&this.store.dispatch((0,i.Y6)({employee:e.employee}))}))}updateEmployee(l){return this._apollo.mutate({mutation:h,variables:{updateEmployeeInput:l},errorPolicy:"all"}).pipe((0,o.U)(({data:e})=>e?e.updateEmployee:null),(0,a.b)(e=>{e&&(this.store.dispatch((0,i.HG)({employee:e.employee})),this.store.dispatch((0,i.Y6)({employee:e.employee})))}))}updateEmployeeStatus(l){return this._apollo.mutate({mutation:P,variables:{updateEntityStatusInput:l},errorPolicy:"all"}).pipe((0,o.U)(({data:e})=>e?e.updateEmployeeStatus:null),(0,a.b)(e=>{e&&this.store.dispatch((0,i.F8)(l))}))}updateEmployeeImage(l){return this._apollo.mutate({mutation:$,variables:{updateEntityImageInput:l},errorPolicy:"all"}).pipe((0,o.U)(({data:e})=>e?e.updateEmployeeImage:null),(0,a.b)(e=>{e&&this.store.dispatch((0,i.E4)(l))}))}removeEmployee(l,e=0,n=10,p="name",u="desc",d=null){return this._apollo.mutate({mutation:A,variables:{employeeId:l,page:e,size:n,sort:p,order:u,search:d},errorPolicy:"all"}).pipe((0,o.U)(({data:s})=>s?s.removeEmployee:null),(0,a.b)(s=>{s&&(this.store.dispatch((0,i.jw)({id:l})),this.store.dispatch((0,c.Jr)({pagination:s.pagination})))}))}static#e=this.\u0275fac=function(e){return new(e||E)(C.LFG(t._M),C.LFG(b.yh))};static#t=this.\u0275prov=C.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"})}return E})()},9427:(v,m,r)=>{r.d(m,{t:()=>c,x:()=>i});var o=r(19212),a=r(46482);const i=(t,I)=>(0,o.f3M)(a.t).getCurrencies(),c=(t,I)=>(0,o.f3M)(a.t).getActiveCurrency()},21510:(v,m,r)=>{r.d(m,{zd:()=>c});var o=r(84221);const a=t=>t.currencies,c=((0,o.P1)(a,t=>t.currency),(0,o.P1)(a,t=>t.currencies))},46482:(v,m,r)=>{r.d(m,{t:()=>E});var o=r(19212),a=r(48180),i=r(94664),c=r(99397),t=r(50967),I=r(84221),f=r(97214),y=r(20997),h=r(21510);const P=t.Ps`
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
`,$=t.Ps`
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
`,A=t.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCurrencyStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`,U=t.Ps`
mutation RemoveCurrency($removeCurrencyId: String!) {
    removeCurrency(id: $removeCurrencyId) {
        ok,
        message
    }
}
`,C=t.Ps`
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
`,b=t.Ps`
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
`,S=t.Ps`
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
`;let E=(()=>{class g{constructor(){this.apolloProvider=(0,o.f3M)(t._M),this.store=(0,o.f3M)(I.yh),this._apollo=this.apolloProvider.use("BALANC")}createCurrency(e){return this.store.select(h.zd).pipe((0,a.q)(1),(0,i.w)(n=>this._apollo.mutate({mutation:P,variables:{createCurrencyInput:e},errorPolicy:"all"}).pipe((0,c.b)(({data:p})=>{const u=structuredClone(n);u.push(p.createCurrency.currency),this.store.dispatch((0,y.HC)({currencies:u}))}))))}getCurrencies(e=1,n=20,p="name",u="asc",d=""){return this._apollo.query({query:C,variables:{offset:n*(e-1),limit:n,sort:p,order:u,search:d},errorPolicy:"all"}).pipe((0,c.b)(({data:s})=>{this.store.dispatch((0,f.Jr)({pagination:s.findAllCurrencies.pagination})),this.store.dispatch((0,y.HC)({currencies:s.findAllCurrencies.currencies}))}))}getActiveCurrency(){return this._apollo.query({query:b,errorPolicy:"all"}).pipe((0,c.b)(({data:e})=>{e&&this.store.dispatch((0,y.HC)({currencies:e.findAllActiveCurrencies.currencies}))}))}getCurrencyById(e){return this._apollo.query({query:S,variables:{findCurrencyByIdId:e},errorPolicy:"all"}).pipe((0,c.b)(({data:n})=>{this.store.dispatch((0,y.NW)({currency:n.findCurrencyById.currency}))}))}updateCurrency(e){return this.store.select(h.zd).pipe((0,a.q)(1),(0,i.w)(n=>this._apollo.mutate({mutation:$,variables:{updateCurrencyInput:e},errorPolicy:"all"}).pipe((0,c.b)(({data:p})=>{const u=structuredClone(n);u[n.findIndex(s=>s.id===e.id)]=p.updateCurrency.currency,this.store.dispatch((0,y.HC)({currencies:u}))}))))}updateCurrencyStatus(e){return this.store.select(h.zd).pipe((0,a.q)(1),(0,i.w)(n=>this._apollo.mutate({mutation:A,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,c.b)(({})=>{const u=structuredClone(n);u[n.findIndex(s=>s.id===e.id)].active=e.active,this.store.dispatch((0,y.HC)({currencies:u}))}))))}removeCurrency(e){return this.store.select(h.zd).pipe((0,a.q)(1),(0,i.w)(n=>this._apollo.mutate({mutation:U,variables:{removeCurrencyId:e},errorPolicy:"all"}).pipe((0,c.b)(({})=>{const u=structuredClone(n),d=n.findIndex(s=>s.id===e);u.splice(d,1),this.store.dispatch((0,y.HC)({currencies:u}))}))))}static#e=this.\u0275fac=function(n){return new(n||g)};static#t=this.\u0275prov=o.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()}}]);