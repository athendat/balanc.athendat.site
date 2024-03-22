"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9482],{31451:(A,y,n)=>{n.d(y,{HB:()=>g,Q:()=>I,ci:()=>f});var p=n(58504),l=n(26306),t=n(19212),d=n(62637),a=n(64190);let I=(()=>{class o{constructor(i,s){this._employeesService=i,this._router=s}resolve(i,s){return this._employeesService.findAllEmployees().pipe((0,l.K)(c=>this._router.navigateByUrl("/dashboard")))}static#e=this.\u0275fac=function(s){return new(s||o)(t.LFG(d.M),t.LFG(a.F0))};static#t=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),f=(()=>{class o{constructor(i,s){this._employeesService=i,this._router=s}resolve(i,s){const c=i.params.employeeId;return"new"===c?null:this._employeesService.findEmployeeById(c).pipe((0,l.K)(E=>{const v=s.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(v),(0,p._)(E)}))}static#e=this.\u0275fac=function(s){return new(s||o)(t.LFG(d.M),t.LFG(a.F0))};static#t=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),g=(()=>{class o{constructor(i,s){this._employeesService=i,this._router=s}resolve(i,s){return this._employeesService.findActiveEmployees().pipe((0,l.K)(c=>this._router.navigateByUrl("/dashboard")))}static#e=this.\u0275fac=function(s){return new(s||o)(t.LFG(d.M),t.LFG(a.F0))};static#t=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},57482:(A,y,n)=>{n.d(y,{hf:()=>t,ri:()=>d});var p=n(84221);const l=a=>a.employees,t=(0,p.P1)(l,a=>a.employee),d=(0,p.P1)(l,a=>a.employees)},62637:(A,y,n)=>{n.d(y,{M:()=>L});var p=n(37398),l=n(99397),t=n(12204),d=n(97214),a=n(50967);const I=a.Ps`
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
`,f=a.Ps`
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
`,g=a.Ps`
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
`,o=a.Ps`
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
`,M=a.Ps`
    mutation UpdateEmployeeStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateEmployeeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,i=a.Ps`
    mutation UpdateEmployeeImage($updateEntityImageInput: UpdateEntityImageInput!) {
        updateEmployeeImage(updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,s=a.Ps`
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
`,c=a.Ps`
    query findActiveEmployees($search: String!, $size: Int!) {
        findActiveEmployees(search: $search, size: $size) {
            id
            name
            lastname1
            lastname2
            fullname
        }
    }
`;var E=n(19212),v=n(84221);let L=(()=>{class h{constructor(r,e){this.apolloProvider=r,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createEmployee(r){return this._apollo.mutate({mutation:I,variables:{createEmployeeInput:r},errorPolicy:"all"}).pipe((0,p.U)(({data:e})=>e?e.createEmployee:null),(0,l.b)(e=>{e&&(this.store.dispatch((0,t.r8)({employee:e.employee})),this.store.dispatch((0,t.Y6)({employee:e.employee})))}))}findAllEmployees(r=0,e=10,u="name",P="asc",_=null,U=!1){return this._apollo.query({query:f,variables:{page:r,size:e,sort:u,order:P,search:_},errorPolicy:"all"}).pipe((0,p.U)(({data:m})=>m?m.findAllEmployees:null),(0,l.b)(m=>{m&&(this.store.dispatch(U?(0,t.uO)({employees:m.employees}):(0,t.Jq)({employees:m.employees})),this.store.dispatch((0,d.Jr)({pagination:m.pagination})))}))}findActiveEmployees(r="",e=25){return this._apollo.query({query:c,variables:{search:r,size:e},errorPolicy:"all"}).pipe((0,p.U)(({data:u})=>u?u.findActiveEmployees:[]),(0,l.b)(u=>{u&&this.store.dispatch((0,t.Jq)({employees:u}))}))}findEmployeeById(r){return this._apollo.query({query:g,variables:{employeeId:r},errorPolicy:"all"}).pipe((0,p.U)(({data:e})=>e?e.findEmployeeById:null),(0,l.b)(e=>{e&&this.store.dispatch((0,t.Y6)({employee:e.employee}))}))}updateEmployee(r){return this._apollo.mutate({mutation:o,variables:{updateEmployeeInput:r},errorPolicy:"all"}).pipe((0,p.U)(({data:e})=>e?e.updateEmployee:null),(0,l.b)(e=>{e&&(this.store.dispatch((0,t.HG)({employee:e.employee})),this.store.dispatch((0,t.Y6)({employee:e.employee})))}))}updateEmployeeStatus(r){return this._apollo.mutate({mutation:M,variables:{updateEntityStatusInput:r},errorPolicy:"all"}).pipe((0,p.U)(({data:e})=>e?e.updateEmployeeStatus:null),(0,l.b)(e=>{e&&this.store.dispatch((0,t.F8)(r))}))}updateEmployeeImage(r){return this._apollo.mutate({mutation:i,variables:{updateEntityImageInput:r},errorPolicy:"all"}).pipe((0,p.U)(({data:e})=>e?e.updateEmployeeImage:null),(0,l.b)(e=>{e&&this.store.dispatch((0,t.E4)(r))}))}removeEmployee(r,e=0,u=10,P="name",_="desc",U=null){return this._apollo.mutate({mutation:s,variables:{employeeId:r,page:e,size:u,sort:P,order:_,search:U},errorPolicy:"all"}).pipe((0,p.U)(({data:m})=>m?m.removeEmployee:null),(0,l.b)(m=>{m&&(this.store.dispatch((0,t.jw)({id:r})),this.store.dispatch((0,d.Jr)({pagination:m.pagination})))}))}static#e=this.\u0275fac=function(e){return new(e||h)(E.LFG(a._M),E.LFG(v.yh))};static#t=this.\u0275prov=E.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()}}]);