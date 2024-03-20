"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3694],{88458:($,y,i)=>{i.d(y,{L:()=>D});var n=i(56223);class D{static isEmptyInputValue(r){return null==r||0===r.length}static mustMatch(r,d){return t=>{const o=t.get(r),e=t.get(d);if(!o||!e||(e.hasError("mustMatch")&&(delete e.errors.mustMatch,e.updateValueAndValidity()),this.isEmptyInputValue(e.value)||o.value===e.value))return null;const m={mustMatch:"Las contrase\xf1a no coinciden."};return e.setErrors(m),m}}static notMustMatch(r,d){return t=>{const o=t.get(r),e=t.get(d);if(!o||!e||(e.hasError("notMustMatch")&&(delete e.errors.notMustMatch,e.updateValueAndValidity()),this.isEmptyInputValue(e.value)))return null;if(o.value===e.value){const m={notMustMatch:"no pueden coincidir."};return e.setErrors(m),m}return null}}static strongPassWord(r,d,t,o,e){return m=>{const s=m.value;if(!s)return null;const I=!r||/[A-Z]+/.test(s),p=!d||/[a-z]+/.test(s),c=!t||/[0-9]+/.test(s),P=!o||!/^[a-zA-Z0-9]+$/.test(s);return I&&p&&c&&P&&s.length>=e?null:{password:"La contrase\xf1a no cumple con los est\xe1ndares de seguridad requeridos"}}}static onlyNumber(r){return d=>{const t=d.get(r);if(!t||(t.hasError("onlyNumber")&&(delete t.errors.mustMatch,t.updateValueAndValidity()),/^[a-zA-Z0-9]+$/.test(t.value.toString())))return null;const e={onlyNumber:"Solo se admiten n\xfameros."};return t.setErrors(e),e}}static strongPasWordPattern(){return n.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)}static emailPattern(){return n.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")}static onlyIntegerPattern(){return n.kI.pattern("^[0-9]*$")}static onlyNumbersPattern(){return n.kI.pattern(/^[+-]?\d+(\.\d+)?$/)}static onlyAlphabetsWithAccentPattern(){return n.kI.pattern("^[a-zA-Z \xe1\xe9\xed\xf3\xfa\xf1\xfc]*$")}static onlyAlphabetsPattern(){return n.kI.pattern("^[a-zA-Z ]*$")}static futureDateValidator(){return r=>new Date(r.value)<=new Date?null:{futureDate:!0}}static validateIdNumber(){return r=>{if(!r)return null;let d=r.value;if(!d)return null;void 0!==r.value.idNumber&&(d=r.value.idNumber);const t=parseInt(d.substring(0,2),10),o=parseInt(d.substring(2,4),10)-1,e=parseInt(d.substring(4,6),10),m=new Date(t,o,e);if(m.getFullYear().toString().substring(2,4)===t.toString()&&m.getMonth()===o&&m.getDate()===e)return null;const I={validateIdNumber:"El n\xfamero de identidad introducido es incorrecto"};return r.setErrors(I),I}}static validFullName(r){return d=>{const t=d.get(r);if(!t||!r||(t.hasError("validFullName")&&(delete t.errors.validFullName,t.updateValueAndValidity()),this._isEmptyInputValue(t.value))||t.value.trim().split(" ").length>1)return null;const o={validFullName:"El nombre completo deber\xe1 tener al menos un nombre y un apellido"};return t.setErrors(o),o}}static _isEmptyInputValue(r){return null==r||0===r.length}}},8382:($,y,i)=>{i.d(y,{_u:()=>t,gD:()=>m,oF:()=>e,s6:()=>d,xJ:()=>o});var n=i(19212),D=i(26306),u=i(39702),r=i(64190);let d=(()=>{class s{constructor(p){this._depotsService=p}resolve(p,c){return this._depotsService.getDepots()}static#t=this.\u0275fac=function(c){return new(c||s)(n.LFG(u.Y))};static#e=this.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),t=(()=>{class s{constructor(p,c){this._depotsService=p,this._router=c}resolve(p,c){return this._depotsService.findActiveDepots().pipe((0,D.K)(P=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(c){return new(c||s)(n.LFG(u.Y),n.LFG(r.F0))};static#e=this.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),o=(()=>{class s{constructor(p,c){this._depotsService=p,this._router=c}resolve(p,c){return this._depotsService.findActiveAndRealDepots()}static#t=this.\u0275fac=function(c){return new(c||s)(n.LFG(u.Y),n.LFG(r.F0))};static#e=this.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();const e=(s,I)=>(0,n.f3M)(u.Y).findDepotsForIncomes(),m=(s,I)=>{const p=s.params.periodId;return p?(0,n.f3M)(u.Y).findDepotByPeriodId(p):null}},58695:($,y,i)=>{i.d(y,{$I:()=>r,Wt:()=>d,ae:()=>u});var n=i(84221);const D=t=>t.depots,u=(0,n.P1)(D,t=>t.depot),r=(0,n.P1)(D,t=>t.depots),d=(0,n.P1)(D,t=>t.ownDepots)},39702:($,y,i)=>{i.d(y,{Y:()=>B});var n=i(48180),D=i(94664),u=i(99397),r=i(37398),d=i(97214),t=i(58695),o=i(59668),e=i(50967);const m=e.Ps`
   query FindDepotsByManager {
        findDepotsByManager {
            ok
            message

            depots {
                id
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                name
                code
                codev
                static
            }
        }
    }
`,s=e.Ps`
   query FindAllDepots($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllDepots(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
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

            depots {
                id
                active
                name
                code
                codev
                static
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,I=e.Ps`
    query FindActiveDepots($search: String!, $size: Int!) {
    findActiveDepots(search: $search, size: $size) {
            id
            active
            name
            code
            codev
            static
            managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
        }
    }
`,p=e.Ps`
    query FindActiveAndRealDepots {
    findActiveAndRealDepots {
            ok
            message

            depots {
                id
                name

                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,c=e.Ps`
    query FindDepotsForIncomes {
    findDepotsForIncomes {
            ok
            message

            depots {
                id
                name
            }
        }
    }
`,P=e.Ps`
    query FindDepotByPeriodId($periodId: String!) {
    findDepotByPeriodId(periodId: $periodId) {
            ok
            message

            depot {
                id
                name
            }
        }
    }
`,M=e.Ps`
    query FindDepotById($findDepotById: String!) {
        findDepotById(id: $findDepotById) {
            ok
            message

            depot {
                id
                active
                name
                code
                codev
                static
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,_=e.Ps`
    mutation CreateDepot($createDepotInput: CreateDepotInput!) {
        createDepot(createDepotInput: $createDepotInput) {
            ok
            message

            depot {
                id
                active
                name
                code
                codev
                static
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,F=e.Ps`
    mutation UpdateDepot($updateDepotInput: UpdateDepotInput!) {
        updateDepot(updateDepotInput: $updateDepotInput) {
            ok
            message

            depot {
                id
                active
                name
                code
                codev
                static
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,T=e.Ps`
    mutation RemoveDepot($removeDepotId: String!) {
        removeDepot(id: $removeDepotId) {
            ok
            message
        }
    }
`,S=e.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateDepotStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var A=i(19212),O=i(22939),b=i(84221);let B=(()=>{class E{constructor(a,l,h){this.apolloProvider=a,this._snackBar=l,this.store=h,this._apollo=this.apolloProvider.use("BALANC")}createDepot(a){return this.store.select(t.$I).pipe((0,n.q)(1),(0,D.w)(l=>this._apollo.mutate({mutation:_,variables:{createDepotInput:a},errorPolicy:"all"}).pipe((0,u.b)(({data:h})=>{const v=structuredClone(l);v.push(h.createDepot.depot),this.store.dispatch((0,o.Us)({depots:v}))}))))}getDepots(a=0,l=50,h="code",v="asc",f=""){return this._apollo.query({query:s,errorPolicy:"all",variables:{page:a,size:l,sort:h,order:v,search:f}}).pipe((0,u.b)(({data:g})=>{this.store.dispatch((0,o.Us)({depots:g.findAllDepots.depots})),this.store.dispatch((0,d.Jr)({pagination:g.findAllDepots.pagination}))}))}getDepotsByManager(){return this._apollo.query({query:m,errorPolicy:"all"}).pipe((0,u.b)(({data:a})=>{this.store.dispatch((0,o.qT)({ownDepots:a.findDepotsByManager.depots}))}))}findActiveDepots(a="",l=50){return this._apollo.query({query:I,variables:{search:a,size:l},errorPolicy:"all"}).pipe((0,r.U)(({data:h})=>(this.store.dispatch((0,o.Us)({depots:h.findActiveDepots})),h.findActiveDepots)))}findActiveAndRealDepots(){return this._apollo.query({query:p,errorPolicy:"all"}).pipe((0,u.b)(({data:a})=>{this.store.dispatch((0,o.Us)({depots:a.findActiveAndRealDepots.depots}))}))}findDepotsForIncomes(){return this._apollo.query({query:c,errorPolicy:"all"}).pipe((0,u.b)(({data:a})=>{this.store.dispatch((0,o.Us)({depots:a.findDepotsForIncomes.depots}))}))}findDepotByPeriodId(a){return this._apollo.query({query:P,errorPolicy:"all",variables:{periodId:a}}).pipe((0,u.b)(({data:l})=>{this.store.dispatch((0,o.IH)({depot:l.findDepotByPeriodId.depot}))}))}getDepotById(a){return this._apollo.query({query:M,variables:{findDepotByIdId:a},errorPolicy:"all"}).pipe((0,u.b)(({data:l})=>{this.store.dispatch((0,o.IH)({depot:l.createDepot.depot}))}))}updateDepot(a){return this.store.select(t.$I).pipe((0,n.q)(1),(0,D.w)(l=>this._apollo.mutate({mutation:F,variables:{updateDepotInput:a},errorPolicy:"all"}).pipe((0,u.b)(({data:h})=>{const v=structuredClone(l);v[l.findIndex(g=>g.id===a.id)]=h.updateDepot.depot,this.store.dispatch((0,o.Us)({depots:v}))}))))}updateDepotStatus(a){return this.store.select(t.$I).pipe((0,n.q)(1),(0,D.w)(l=>this._apollo.mutate({mutation:S,variables:{updateEntityStatusInput:a},errorPolicy:"all"}).pipe((0,u.b)(({})=>{const v=structuredClone(l);v[l.findIndex(g=>g.id===a.id)].active=a.active,this.store.dispatch((0,o.Us)({depots:v}))}))))}removeDepot(a){return this.store.select(t.$I).pipe((0,n.q)(1),(0,D.w)(l=>this._apollo.mutate({mutation:T,variables:{removeDepotId:a},errorPolicy:"all"}).pipe((0,u.b)(({})=>{const v=structuredClone(l),f=l.findIndex(g=>g.id===a);v.splice(f,1)}))))}static#t=this.\u0275fac=function(l){return new(l||E)(A.LFG(e._M),A.LFG(O.ux),A.LFG(b.yh))};static#e=this.\u0275prov=A.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"})}return E})()}}]);