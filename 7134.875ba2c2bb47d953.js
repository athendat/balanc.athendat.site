"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[7134],{29217:(v,m,r)=>{r.d(m,{OB:()=>c,x2:()=>s});var i=r(59640);const a=t=>t.employees,s=(0,i.Mz)(a,t=>t.employee),c=(0,i.Mz)(a,t=>t.employees)},62590:(v,m,r)=>{r.d(m,{r:()=>U});var i=r(96354),a=r(88141),s=r(98020),c=r(98216),t=r(73512);const I=t.J1`
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
`,f=t.J1`
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
                    no
                }

            }
        }
    }
`,y=t.J1`
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
                    no
                    currencyId
                    bankId
                    beneficiary
                }

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
`,h=t.J1`
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
`,$=t.J1`
    mutation UpdateEmployeeStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateEmployeeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,A=t.J1`
    mutation UpdateEmployeeImage($updateEntityImageInput: UpdateEntityImageInput!) {
        updateEmployeeImage(updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,M=t.J1`
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
`,P=t.J1`
    query findActiveEmployees($search: String!, $size: Int!) {
        findActiveEmployees(search: $search, size: $size) {
            id
            name
            lastname1
            lastname2
            fullname
        }
    }
`;var C=r(54438),T=r(59640);let U=(()=>{class E{constructor(l,e){this.apolloProvider=l,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createEmployee(l){return this._apollo.mutate({mutation:I,variables:{createEmployeeInput:l},errorPolicy:"all"}).pipe((0,i.T)(({data:e})=>e?e.createEmployee:null),(0,a.M)(e=>{e&&(this.store.dispatch((0,s.bV)({employee:e.employee})),this.store.dispatch((0,s.bC)({employee:e.employee})))}))}findAllEmployees(l=0,e=10,n="name",p="asc",u=null,d=!1){return this._apollo.query({query:f,variables:{page:l,size:e,sort:n,order:p,search:u},errorPolicy:"all"}).pipe((0,i.T)(({data:o})=>o?o.findAllEmployees:null),(0,a.M)(o=>{o&&(this.store.dispatch(d?(0,s.Qq)({employees:o.employees}):(0,s.wp)({employees:o.employees})),this.store.dispatch((0,c.Bp)({pagination:o.pagination})))}))}findActiveEmployees(l="",e=25){return this._apollo.query({query:P,variables:{search:l,size:e},errorPolicy:"all"}).pipe((0,i.T)(({data:n})=>n?n.findActiveEmployees:[]),(0,a.M)(n=>{n&&this.store.dispatch((0,s.wp)({employees:n}))}))}findEmployeeById(l){return this._apollo.query({query:y,variables:{employeeId:l},errorPolicy:"all"}).pipe((0,i.T)(({data:e})=>e?e.findEmployeeById:null),(0,a.M)(e=>{e&&this.store.dispatch((0,s.bC)({employee:e.employee}))}))}updateEmployee(l){return this._apollo.mutate({mutation:h,variables:{updateEmployeeInput:l},errorPolicy:"all"}).pipe((0,i.T)(({data:e})=>e?e.updateEmployee:null),(0,a.M)(e=>{e&&(this.store.dispatch((0,s.Y$)({employee:e.employee})),this.store.dispatch((0,s.bC)({employee:e.employee})))}))}updateEmployeeStatus(l){return this._apollo.mutate({mutation:$,variables:{updateEntityStatusInput:l},errorPolicy:"all"}).pipe((0,i.T)(({data:e})=>e?e.updateEmployeeStatus:null),(0,a.M)(e=>{e&&this.store.dispatch((0,s.Sv)(l))}))}updateEmployeeImage(l){return this._apollo.mutate({mutation:A,variables:{updateEntityImageInput:l},errorPolicy:"all"}).pipe((0,i.T)(({data:e})=>e?e.updateEmployeeImage:null),(0,a.M)(e=>{e&&this.store.dispatch((0,s.FE)(l))}))}removeEmployee(l,e=0,n=10,p="name",u="desc",d=null){return this._apollo.mutate({mutation:M,variables:{employeeId:l,page:e,size:n,sort:p,order:u,search:d},errorPolicy:"all"}).pipe((0,i.T)(({data:o})=>o?o.removeEmployee:null),(0,a.M)(o=>{o&&(this.store.dispatch((0,s.Vk)({id:l})),this.store.dispatch((0,c.Bp)({pagination:o.pagination})))}))}static#e=this.\u0275fac=function(e){return new(e||E)(C.KVO(t.Ic),C.KVO(T.il))};static#t=this.\u0275prov=C.jDH({token:E,factory:E.\u0275fac,providedIn:"root"})}return E})()},23301:(v,m,r)=>{r.d(m,{I:()=>c,p:()=>s});var i=r(54438),a=r(92581);const s=(t,I)=>(0,i.WQX)(a.v).getCurrencies(),c=(t,I)=>(0,i.WQX)(a.v).getActiveCurrency()},91401:(v,m,r)=>{r.d(m,{y$:()=>c});var i=r(59640);const a=t=>t.currencies,c=((0,i.Mz)(a,t=>t.currency),(0,i.Mz)(a,t=>t.currencies))},92581:(v,m,r)=>{r.d(m,{v:()=>E});var i=r(54438),a=r(96697),s=r(25558),c=r(88141),t=r(73512),I=r(59640),f=r(98216),y=r(54588),h=r(91401);const $=t.J1`
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
`,A=t.J1`
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
`,M=t.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCurrencyStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`,P=t.J1`
mutation RemoveCurrency($removeCurrencyId: String!) {
    removeCurrency(id: $removeCurrencyId) {
        ok,
        message
    }
}
`,C=t.J1`
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
`,T=t.J1`
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
`,U=t.J1`
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
`;let E=(()=>{class g{constructor(){this.apolloProvider=(0,i.WQX)(t.Ic),this.store=(0,i.WQX)(I.il),this._apollo=this.apolloProvider.use("BALANC")}createCurrency(e){return this.store.select(h.y$).pipe((0,a.s)(1),(0,s.n)(n=>this._apollo.mutate({mutation:$,variables:{createCurrencyInput:e},errorPolicy:"all"}).pipe((0,c.M)(({data:p})=>{const u=structuredClone(n);u.push(p.createCurrency.currency),this.store.dispatch((0,y.Ih)({currencies:u}))}))))}getCurrencies(e=1,n=20,p="name",u="asc",d=""){return this._apollo.query({query:C,variables:{offset:n*(e-1),limit:n,sort:p,order:u,search:d},errorPolicy:"all"}).pipe((0,c.M)(({data:o})=>{this.store.dispatch((0,f.Bp)({pagination:o.findAllCurrencies.pagination})),this.store.dispatch((0,y.Ih)({currencies:o.findAllCurrencies.currencies}))}))}getActiveCurrency(){return this._apollo.query({query:T,errorPolicy:"all"}).pipe((0,c.M)(({data:e})=>{e&&this.store.dispatch((0,y.Ih)({currencies:e.findAllActiveCurrencies.currencies}))}))}getCurrencyById(e){return this._apollo.query({query:U,variables:{findCurrencyByIdId:e},errorPolicy:"all"}).pipe((0,c.M)(({data:n})=>{this.store.dispatch((0,y.MN)({currency:n.findCurrencyById.currency}))}))}updateCurrency(e){return this.store.select(h.y$).pipe((0,a.s)(1),(0,s.n)(n=>this._apollo.mutate({mutation:A,variables:{updateCurrencyInput:e},errorPolicy:"all"}).pipe((0,c.M)(({data:p})=>{const u=structuredClone(n);u[n.findIndex(o=>o.id===e.id)]=p.updateCurrency.currency,this.store.dispatch((0,y.Ih)({currencies:u}))}))))}updateCurrencyStatus(e){return this.store.select(h.y$).pipe((0,a.s)(1),(0,s.n)(n=>this._apollo.mutate({mutation:M,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,c.M)(({})=>{const u=structuredClone(n);u[n.findIndex(o=>o.id===e.id)].active=e.active,this.store.dispatch((0,y.Ih)({currencies:u}))}))))}removeCurrency(e){return this.store.select(h.y$).pipe((0,a.s)(1),(0,s.n)(n=>this._apollo.mutate({mutation:P,variables:{removeCurrencyId:e},errorPolicy:"all"}).pipe((0,c.M)(({})=>{const u=structuredClone(n),d=n.findIndex(o=>o.id===e);u.splice(d,1),this.store.dispatch((0,y.Ih)({currencies:u}))}))))}static#e=this.\u0275fac=function(n){return new(n||g)};static#t=this.\u0275prov=i.jDH({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()}}]);