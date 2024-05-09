"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9805],{34413:(O,y,o)=>{o.d(y,{MI:()=>g,wf:()=>I,zA:()=>f});var a=o(54438),i=o(18810),l=o(99437),d=o(62590),r=o(51188);let I=(()=>{class n{constructor(m,p){this._employeesService=m,this._router=p}resolve(m,p){return this._employeesService.findAllEmployees().pipe((0,l.W)(c=>this._router.navigateByUrl("/dashboard")))}static#e=this.\u0275fac=function(p){return new(p||n)(a.KVO(d.r),a.KVO(r.Ix))};static#t=this.\u0275prov=a.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),f=(()=>{class n{constructor(m,p){this._employeesService=m,this._router=p}resolve(m,p){const c=m.params.employeeId;return"new"===c?null:this._employeesService.findEmployeeById(c).pipe((0,l.W)(E=>{const v=p.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(v),(0,i.$)(E)}))}static#e=this.\u0275fac=function(p){return new(p||n)(a.KVO(d.r),a.KVO(r.Ix))};static#t=this.\u0275prov=a.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const g=(n,A)=>(0,a.WQX)(d.r).findActiveEmployees()},29217:(O,y,o)=>{o.d(y,{OB:()=>d,x2:()=>l});var a=o(59640);const i=r=>r.employees,l=(0,a.Mz)(i,r=>r.employee),d=(0,a.Mz)(i,r=>r.employees)},62590:(O,y,o)=>{o.d(y,{r:()=>$});var a=o(96354),i=o(88141),l=o(98020),d=o(98216),r=o(73512);const I=r.J1`
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
`,f=r.J1`
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
`,g=r.J1`
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
`,n=r.J1`
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
`,A=r.J1`
    mutation UpdateEmployeeStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateEmployeeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,m=r.J1`
    mutation UpdateEmployeeImage($updateEntityImageInput: UpdateEntityImageInput!) {
        updateEmployeeImage(updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,p=r.J1`
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
`,c=r.J1`
    query findActiveEmployees($search: String!, $size: Int!) {
        findActiveEmployees(search: $search, size: $size) {
            id
            name
            lastname1
            lastname2
            fullname
        }
    }
`;var E=o(54438),v=o(59640);let $=(()=>{class h{constructor(t,e){this.apolloProvider=t,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createEmployee(t){return this._apollo.mutate({mutation:I,variables:{createEmployeeInput:t},errorPolicy:"all"}).pipe((0,a.T)(({data:e})=>e?e.createEmployee:null),(0,i.M)(e=>{e&&(this.store.dispatch((0,l.bV)({employee:e.employee})),this.store.dispatch((0,l.bC)({employee:e.employee})))}))}findAllEmployees(t=0,e=10,u="name",P="asc",M=null,_=!1){return this._apollo.query({query:f,variables:{page:t,size:e,sort:u,order:P,search:M},errorPolicy:"all"}).pipe((0,a.T)(({data:s})=>s?s.findAllEmployees:null),(0,i.M)(s=>{s&&(this.store.dispatch(_?(0,l.Qq)({employees:s.employees}):(0,l.wp)({employees:s.employees})),this.store.dispatch((0,d.Bp)({pagination:s.pagination})))}))}findActiveEmployees(t="",e=25){return this._apollo.query({query:c,variables:{search:t,size:e},errorPolicy:"all"}).pipe((0,a.T)(({data:u})=>u?u.findActiveEmployees:[]),(0,i.M)(u=>{u&&this.store.dispatch((0,l.wp)({employees:u}))}))}findEmployeeById(t){return this._apollo.query({query:g,variables:{employeeId:t},errorPolicy:"all"}).pipe((0,a.T)(({data:e})=>e?e.findEmployeeById:null),(0,i.M)(e=>{e&&this.store.dispatch((0,l.bC)({employee:e.employee}))}))}updateEmployee(t){return this._apollo.mutate({mutation:n,variables:{updateEmployeeInput:t},errorPolicy:"all"}).pipe((0,a.T)(({data:e})=>e?e.updateEmployee:null),(0,i.M)(e=>{e&&(this.store.dispatch((0,l.Y$)({employee:e.employee})),this.store.dispatch((0,l.bC)({employee:e.employee})))}))}updateEmployeeStatus(t){return this._apollo.mutate({mutation:A,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,a.T)(({data:e})=>e?e.updateEmployeeStatus:null),(0,i.M)(e=>{e&&this.store.dispatch((0,l.Sv)(t))}))}updateEmployeeImage(t){return this._apollo.mutate({mutation:m,variables:{updateEntityImageInput:t},errorPolicy:"all"}).pipe((0,a.T)(({data:e})=>e?e.updateEmployeeImage:null),(0,i.M)(e=>{e&&this.store.dispatch((0,l.FE)(t))}))}removeEmployee(t,e=0,u=10,P="name",M="desc",_=null){return this._apollo.mutate({mutation:p,variables:{employeeId:t,page:e,size:u,sort:P,order:M,search:_},errorPolicy:"all"}).pipe((0,a.T)(({data:s})=>s?s.removeEmployee:null),(0,i.M)(s=>{s&&(this.store.dispatch((0,l.Vk)({id:t})),this.store.dispatch((0,d.Bp)({pagination:s.pagination})))}))}static#e=this.\u0275fac=function(e){return new(e||h)(E.KVO(r.Ic),E.KVO(v.il))};static#t=this.\u0275prov=E.jDH({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()}}]);