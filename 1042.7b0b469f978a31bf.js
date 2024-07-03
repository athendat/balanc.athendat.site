"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[1042],{47413:(I,p,r)=>{r.d(p,{Dz:()=>i,Lx:()=>u});var o=r(59640);const a=t=>t.pagination,i=(0,o.Mz)(a,t=>t.pagination),u=(0,o.Mz)(a,t=>t.secondaryPagination)},29217:(I,p,r)=>{r.d(p,{OB:()=>u,x2:()=>i});var o=r(59640);const a=t=>t.employees,i=(0,o.Mz)(a,t=>t.employee),u=(0,o.Mz)(a,t=>t.employees)},62590:(I,p,r)=>{r.d(p,{r:()=>S});var o=r(96354),a=r(88141),i=r(98020),u=r(98216),t=r(53473);const C=t.J1`
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
`,P=t.J1`
    mutation UpdateEmployeeImage($updateEntityImageInput: UpdateEntityImageInput!) {
        updateEmployeeImage(updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,A=t.J1`
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
`,M=t.J1`
    query findActiveEmployees($search: String!, $size: Int!) {
        findActiveEmployees(search: $search, size: $size) {
            id
            name
            lastname1
            lastname2
            fullname
        }
    }
`;var g=r(54438),T=r(59640);let S=(()=>{class E{constructor(l,e){this.apolloProvider=l,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createEmployee(l){return this._apollo.mutate({mutation:C,variables:{createEmployeeInput:l},errorPolicy:"all"}).pipe((0,o.T)(({data:e})=>e?e.createEmployee:null),(0,a.M)(e=>{e&&(this.store.dispatch((0,i.bV)({employee:e.employee})),this.store.dispatch((0,i.bC)({employee:e.employee})))}))}findAllEmployees(l=0,e=10,n="name",d="asc",c=null,m=!1){return this._apollo.query({query:f,variables:{page:l,size:e,sort:n,order:d,search:c},errorPolicy:"all"}).pipe((0,o.T)(({data:s})=>s?s.findAllEmployees:null),(0,a.M)(s=>{s&&(this.store.dispatch(m?(0,i.Qq)({employees:s.employees}):(0,i.wp)({employees:s.employees})),this.store.dispatch((0,u.Bp)({pagination:s.pagination})))}))}findActiveEmployees(l="",e=25){return this._apollo.query({query:M,variables:{search:l,size:e},errorPolicy:"all"}).pipe((0,o.T)(({data:n})=>n?n.findActiveEmployees:[]),(0,a.M)(n=>{n&&this.store.dispatch((0,i.wp)({employees:n}))}))}findEmployeeById(l){return this._apollo.query({query:y,variables:{employeeId:l},errorPolicy:"all"}).pipe((0,o.T)(({data:e})=>e?e.findEmployeeById:null),(0,a.M)(e=>{e&&this.store.dispatch((0,i.bC)({employee:e.employee}))}))}updateEmployee(l){return this._apollo.mutate({mutation:h,variables:{updateEmployeeInput:l},errorPolicy:"all"}).pipe((0,o.T)(({data:e})=>e?e.updateEmployee:null),(0,a.M)(e=>{e&&(this.store.dispatch((0,i.Y$)({employee:e.employee})),this.store.dispatch((0,i.bC)({employee:e.employee})))}))}updateEmployeeStatus(l){return this._apollo.mutate({mutation:$,variables:{updateEntityStatusInput:l},errorPolicy:"all"}).pipe((0,o.T)(({data:e})=>e?e.updateEmployeeStatus:null),(0,a.M)(e=>{e&&this.store.dispatch((0,i.Sv)(l))}))}updateEmployeeImage(l){return this._apollo.mutate({mutation:P,variables:{updateEntityImageInput:l},errorPolicy:"all"}).pipe((0,o.T)(({data:e})=>e?e.updateEmployeeImage:null),(0,a.M)(e=>{e&&this.store.dispatch((0,i.FE)(l))}))}removeEmployee(l,e=0,n=10,d="name",c="desc",m=null){return this._apollo.mutate({mutation:A,variables:{employeeId:l,page:e,size:n,sort:d,order:c,search:m},errorPolicy:"all"}).pipe((0,o.T)(({data:s})=>s?s.removeEmployee:null),(0,a.M)(s=>{s&&(this.store.dispatch((0,i.Vk)({id:l})),this.store.dispatch((0,u.Bp)({pagination:s.pagination})))}))}static#e=this.\u0275fac=function(e){return new(e||E)(g.KVO(t.Ic),g.KVO(T.il))};static#t=this.\u0275prov=g.jDH({token:E,factory:E.\u0275fac,providedIn:"root"})}return E})()},23301:(I,p,r)=>{r.d(p,{I:()=>u,p:()=>i});var o=r(54438),a=r(92581);const i=(t,C)=>(0,o.WQX)(a.v).getCurrencies(),u=(t,C)=>(0,o.WQX)(a.v).getActiveCurrency()},91401:(I,p,r)=>{r.d(p,{y$:()=>u});var o=r(59640);const a=t=>t.currencies,u=((0,o.Mz)(a,t=>t.currency),(0,o.Mz)(a,t=>t.currencies))},92581:(I,p,r)=>{r.d(p,{v:()=>E});var o=r(54438),a=r(96697),i=r(25558),u=r(88141),t=r(53473),C=r(59640),f=r(98216),y=r(54588),h=r(91401);const $=t.J1`
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
`,P=t.J1`
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
`,A=t.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCurrencyStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`,M=t.J1`
mutation RemoveCurrency($removeCurrencyId: String!) {
    removeCurrency(id: $removeCurrencyId) {
        ok,
        message
    }
}
`,g=t.J1`
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
`,S=t.J1`
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
`;let E=(()=>{class v{constructor(){this.apolloProvider=(0,o.WQX)(t.Ic),this.store=(0,o.WQX)(C.il),this._apollo=this.apolloProvider.use("BALANC")}createCurrency(e){return this.store.select(h.y$).pipe((0,a.s)(1),(0,i.n)(n=>this._apollo.mutate({mutation:$,variables:{createCurrencyInput:e},errorPolicy:"all"}).pipe((0,u.M)(({data:d})=>{const c=structuredClone(n);c.push(d.createCurrency.currency),this.store.dispatch((0,y.Ih)({currencies:c}))}))))}getCurrencies(e=1,n=20,d="name",c="asc",m=""){return this._apollo.query({query:g,variables:{offset:n*(e-1),limit:n,sort:d,order:c,search:m},errorPolicy:"all"}).pipe((0,u.M)(({data:s})=>{this.store.dispatch((0,f.Bp)({pagination:s.findAllCurrencies.pagination})),this.store.dispatch((0,y.Ih)({currencies:s.findAllCurrencies.currencies}))}))}getActiveCurrency(){return this._apollo.query({query:T,errorPolicy:"all"}).pipe((0,u.M)(({data:e})=>{e&&this.store.dispatch((0,y.Ih)({currencies:e.findAllActiveCurrencies.currencies}))}))}getCurrencyById(e){return this._apollo.query({query:S,variables:{findCurrencyByIdId:e},errorPolicy:"all"}).pipe((0,u.M)(({data:n})=>{this.store.dispatch((0,y.MN)({currency:n.findCurrencyById.currency}))}))}updateCurrency(e){return this.store.select(h.y$).pipe((0,a.s)(1),(0,i.n)(n=>this._apollo.mutate({mutation:P,variables:{updateCurrencyInput:e},errorPolicy:"all"}).pipe((0,u.M)(({data:d})=>{const c=structuredClone(n);c[n.findIndex(s=>s.id===e.id)]=d.updateCurrency.currency,this.store.dispatch((0,y.Ih)({currencies:c}))}))))}updateCurrencyStatus(e){return this.store.select(h.y$).pipe((0,a.s)(1),(0,i.n)(n=>this._apollo.mutate({mutation:A,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,u.M)(({})=>{const c=structuredClone(n);c[n.findIndex(s=>s.id===e.id)].active=e.active,this.store.dispatch((0,y.Ih)({currencies:c}))}))))}removeCurrency(e){return this.store.select(h.y$).pipe((0,a.s)(1),(0,i.n)(n=>this._apollo.mutate({mutation:M,variables:{removeCurrencyId:e},errorPolicy:"all"}).pipe((0,u.M)(({})=>{const c=structuredClone(n),m=n.findIndex(s=>s.id===e);c.splice(m,1),this.store.dispatch((0,y.Ih)({currencies:c}))}))))}static#e=this.\u0275fac=function(n){return new(n||v)};static#t=this.\u0275prov=o.jDH({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()}}]);