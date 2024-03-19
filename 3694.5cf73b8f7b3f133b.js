"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3694],{88458:(P,g,a)=>{a.d(g,{L:()=>l});var d=a(56223);class l{static isEmptyInputValue(r){return null==r||0===r.length}static mustMatch(r,n){return e=>{const s=e.get(r),t=e.get(n);if(!s||!t||(t.hasError("mustMatch")&&(delete t.errors.mustMatch,t.updateValueAndValidity()),this.isEmptyInputValue(t.value)||s.value===t.value))return null;const m={mustMatch:"Las contrase\xf1a no coinciden."};return t.setErrors(m),m}}static notMustMatch(r,n){return e=>{const s=e.get(r),t=e.get(n);if(!s||!t||(t.hasError("notMustMatch")&&(delete t.errors.notMustMatch,t.updateValueAndValidity()),this.isEmptyInputValue(t.value)))return null;if(s.value===t.value){const m={notMustMatch:"no pueden coincidir."};return t.setErrors(m),m}return null}}static strongPassWord(r,n,e,s,t){return m=>{const i=m.value;if(!i)return null;const c=!r||/[A-Z]+/.test(i),f=!n||/[a-z]+/.test(i),A=!e||/[0-9]+/.test(i),$=!s||!/^[a-zA-Z0-9]+$/.test(i);return c&&f&&A&&$&&i.length>=t?null:{password:"La contrase\xf1a no cumple con los est\xe1ndares de seguridad requeridos"}}}static onlyNumber(r){return n=>{const e=n.get(r);if(!e||(e.hasError("onlyNumber")&&(delete e.errors.mustMatch,e.updateValueAndValidity()),/^[a-zA-Z0-9]+$/.test(e.value.toString())))return null;const t={onlyNumber:"Solo se admiten n\xfameros."};return e.setErrors(t),t}}static strongPasWordPattern(){return d.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)}static emailPattern(){return d.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")}static onlyIntegerPattern(){return d.kI.pattern("^[0-9]*$")}static onlyNumbersPattern(){return d.kI.pattern(/^[+-]?\d+(\.\d+)?$/)}static onlyAlphabetsWithAccentPattern(){return d.kI.pattern("^[a-zA-Z \xe1\xe9\xed\xf3\xfa\xf1\xfc]*$")}static onlyAlphabetsPattern(){return d.kI.pattern("^[a-zA-Z ]*$")}static futureDateValidator(){return r=>new Date(r.value)<=new Date?null:{futureDate:!0}}static validateIdNumber(){return r=>{if(!r)return null;let n=r.value;if(!n)return null;void 0!==r.value.idNumber&&(n=r.value.idNumber);const e=parseInt(n.substring(0,2),10),s=parseInt(n.substring(2,4),10)-1,t=parseInt(n.substring(4,6),10),m=new Date(e,s,t);if(m.getFullYear().toString().substring(2,4)===e.toString()&&m.getMonth()===s&&m.getDate()===t)return null;const c={validateIdNumber:"El n\xfamero de identidad introducido es incorrecto"};return r.setErrors(c),c}}static validFullName(r){return n=>{const e=n.get(r);if(!e||!r||(e.hasError("validFullName")&&(delete e.errors.validFullName,e.updateValueAndValidity()),this._isEmptyInputValue(e.value))||e.value.trim().split(" ").length>1)return null;const s={validFullName:"El nombre completo deber\xe1 tener al menos un nombre y un apellido"};return e.setErrors(s),s}}static _isEmptyInputValue(r){return null==r||0===r.length}}},8382:(P,g,a)=>{a.d(g,{Uj:()=>e,_u:()=>s,s6:()=>n});var d=a(26306),l=a(19212),p=a(39702),r=a(64190);let n=(()=>{class t{constructor(i){this._depotsService=i}resolve(i,c){return this._depotsService.getDepots()}static#t=this.\u0275fac=function(c){return new(c||t)(l.LFG(p.Y))};static#e=this.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),e=(()=>{class t{constructor(i){this._depotsService=i}resolve(i,c){return this._depotsService.getDepotsByManager()}static#t=this.\u0275fac=function(c){return new(c||t)(l.LFG(p.Y))};static#e=this.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),s=(()=>{class t{constructor(i,c){this._depotsService=i,this._router=c}resolve(i,c){return this._depotsService.findActiveDepots().pipe((0,d.K)(f=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(c){return new(c||t)(l.LFG(p.Y),l.LFG(r.F0))};static#e=this.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()},58695:(P,g,a)=>{a.d(g,{$I:()=>r,Wt:()=>n,ae:()=>p});var d=a(84221);const l=e=>e.depots,p=(0,d.P1)(l,e=>e.depot),r=(0,d.P1)(l,e=>e.depots),n=(0,d.P1)(l,e=>e.ownDepots)},39702:(P,g,a)=>{a.d(g,{Y:()=>b});var d=a(48180),l=a(94664),p=a(99397),r=a(37398),n=a(97214),e=a(58695),s=a(59668),t=a(50967);const m=t.Ps`
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
`,i=t.Ps`
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
`,c=t.Ps`
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
`,f=t.Ps`
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
`,A=t.Ps`
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
`,$=t.Ps`
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
`,M=t.Ps`
    mutation RemoveDepot($removeDepotId: String!) {
        removeDepot(id: $removeDepotId) {
            ok
            message
        }
    }
`,T=t.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateDepotStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var E=a(19212),S=a(22939),U=a(84221);let b=(()=>{class y{constructor(o,u,h){this.apolloProvider=o,this._snackBar=u,this.store=h,this._apollo=this.apolloProvider.use("BALANC")}createDepot(o){return this.store.select(e.$I).pipe((0,d.q)(1),(0,l.w)(u=>this._apollo.mutate({mutation:A,variables:{createDepotInput:o},errorPolicy:"all"}).pipe((0,p.b)(({data:h})=>{const v=structuredClone(u);v.push(h.createDepot.depot),this.store.dispatch((0,s.Us)({depots:v}))}))))}getDepots(o=0,u=50,h="code",v="asc",I=""){return this._apollo.query({query:i,errorPolicy:"all",variables:{page:o,size:u,sort:h,order:v,search:I}}).pipe((0,p.b)(({data:D})=>{this.store.dispatch((0,s.Us)({depots:D.findAllDepots.depots})),this.store.dispatch((0,n.Jr)({pagination:D.findAllDepots.pagination}))}))}getDepotsByManager(){return this._apollo.query({query:m,errorPolicy:"all"}).pipe((0,p.b)(({data:o})=>{this.store.dispatch((0,s.qT)({ownDepots:o.findDepotsByManager.depots}))}))}findActiveDepots(o="",u=50){return this._apollo.query({query:c,variables:{search:o,size:u},errorPolicy:"all"}).pipe((0,r.U)(({data:h})=>(this.store.dispatch((0,s.Us)({depots:h.findActiveDepots})),h.findActiveDepots)))}getDepotById(o){return this._apollo.query({query:f,variables:{findDepotByIdId:o},errorPolicy:"all"}).pipe((0,p.b)(({data:u})=>{this.store.dispatch((0,s.IH)({depot:u.createDepot.depot}))}))}updateDepot(o){return this.store.select(e.$I).pipe((0,d.q)(1),(0,l.w)(u=>this._apollo.mutate({mutation:$,variables:{updateDepotInput:o},errorPolicy:"all"}).pipe((0,p.b)(({data:h})=>{const v=structuredClone(u);v[u.findIndex(D=>D.id===o.id)]=h.updateDepot.depot,this.store.dispatch((0,s.Us)({depots:v}))}))))}updateDepotStatus(o){return this.store.select(e.$I).pipe((0,d.q)(1),(0,l.w)(u=>this._apollo.mutate({mutation:T,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,p.b)(({})=>{const v=structuredClone(u);v[u.findIndex(D=>D.id===o.id)].active=o.active,this.store.dispatch((0,s.Us)({depots:v}))}))))}removeDepot(o){return this.store.select(e.$I).pipe((0,d.q)(1),(0,l.w)(u=>this._apollo.mutate({mutation:M,variables:{removeDepotId:o},errorPolicy:"all"}).pipe((0,p.b)(({})=>{const v=structuredClone(u),I=u.findIndex(D=>D.id===o);v.splice(I,1)}))))}static#t=this.\u0275fac=function(u){return new(u||y)(E.LFG(t._M),E.LFG(S.ux),E.LFG(U.yh))};static#e=this.\u0275prov=E.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"})}return y})()}}]);