"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3732],{33963:(T,h,e)=>{e.d(h,{H5:()=>r,p6:()=>n});var i=e(84221);const y=c=>c.customers,r=(0,i.P1)(y,c=>c.customer),n=(0,i.P1)(y,c=>c.customers)},31451:(T,h,e)=>{e.d(h,{Q:()=>I,ci:()=>l,pO:()=>m});var i=e(19212),y=e(58504),r=e(26306),n=e(62637),c=e(64190);let I=(()=>{class t{constructor(o,s){this._employeesService=o,this._router=s}resolve(o,s){return this._employeesService.findAllEmployees().pipe((0,r.K)(v=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(s){return new(s||t)(i.LFG(n.M),i.LFG(c.F0))};static#e=this.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),l=(()=>{class t{constructor(o,s){this._employeesService=o,this._router=s}resolve(o,s){const v=o.params.employeeId;return"new"===v?null:this._employeesService.findEmployeeById(v).pipe((0,r.K)(g=>{const P=s.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(P),(0,y._)(g)}))}static#t=this.\u0275fac=function(s){return new(s||t)(i.LFG(n.M),i.LFG(c.F0))};static#e=this.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const m=(t,f)=>(0,i.f3M)(n.M).findActiveEmployees()},23605:(T,h,e)=>{e.d(h,{D1:()=>I,Nc:()=>m,r7:()=>l});var i=e(26306),y=e(58504),r=e(19212),n=e(43987),c=e(64190);let I=(()=>{class t{constructor(o,s){this._locationsService=o,this._router=s}resolve(o,s){const v=o.paramMap.get("locationId");if("new"!==v)return this._locationsService.getLocationById(v).pipe((0,i.K)(g=>{console.error(g);const P=s.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(P),(0,y._)(g)}))}static#t=this.\u0275fac=function(s){return new(s||t)(r.LFG(n._),r.LFG(c.F0))};static#e=this.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),l=(()=>{class t{constructor(o){this._locationsService=o}resolve(o,s){return this._locationsService.getLocations()}static#t=this.\u0275fac=function(s){return new(s||t)(r.LFG(n._))};static#e=this.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),m=(()=>{class t{constructor(o){this._locationsService=o}resolve(o,s){return this._locationsService.findActiveLocations()}static#t=this.\u0275fac=function(s){return new(s||t)(r.LFG(n._))};static#e=this.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()},43987:(T,h,e)=>{e.d(h,{_:()=>P});var i=e(99397),y=e(37398),r=e(26045),n=e(97214),c=e(50967);const I=c.Ps`
    mutation CreateLocation($createLocationInput: CreateLocationInput!) {
        createLocation(createLocationInput: $createLocationInput) {

            ok
            message

            location {
                id
                active
                managerId
                # manager {
                #     name
                # }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }

        }
    }
`,l=c.Ps`
    mutation UpdateLocation($updateLocationInput: UpdateLocationInput!) {
        updateLocation(updateLocationInput: $updateLocationInput) {
            ok
            message

            location {
                id
                active
                managerId
                # manager {
                #     name
                # }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }
        }
    }
`,m=c.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateLocationStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,t=c.Ps`
    mutation RemoveLocation($removeLocationId: String!) {
        removeLocation(id: $removeLocationId) {
            ok
            message
        }
    }
`,f=c.Ps`
    query FindAllLocations($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllLocations(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length,
                size,
                page,
                lastPage,
                startIndex,
                endIndex
            },

            locations {
                id
                active
                managerId
                manager {
                    id
                    name
                    lastname1
                    lastname2
                    fullname
                }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }
        }
    }
`,o=c.Ps`
    query findActiveLocations($search: String!, $size: Int!) {
        findActiveLocations(search: $search, size: $size) {
            id
            active
            managerId
            name
            slug
            phone
            address
            country
            state
            city
            zip
        }
    }
`,s=c.Ps`
    query FindLocationById($findLocationByIdId: String!) {
        findLocationById(id: $findLocationByIdId) {
            ok
            message

            location {
                id
                active
                managerId
                # manager {
                #     name
                # }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }
        }
    }
`;var v=e(19212),g=e(84221);let P=(()=>{class B{constructor(p,d){this.apolloProvider=p,this.store=d,this._apollo=this.apolloProvider.use("BALANC")}createLocation(p){return this._apollo.mutate({mutation:I,variables:{createLocationInput:p},errorPolicy:"all"}).pipe((0,i.b)(({data:d})=>{d&&(this.store.dispatch((0,r.ob)({location:d.createLocation.location})),this.store.dispatch((0,r.l6)({location:d.createLocation.location})))}))}getLocations(p=0,d=25,R="name",M="asc",u=""){return this._apollo.query({query:f,errorPolicy:"all",variables:{page:p,size:d,sort:R,order:M,search:u}}).pipe((0,i.b)(({data:a})=>{a&&(this.store.dispatch((0,n.Jr)({pagination:a.findAllLocations.pagination})),this.store.dispatch((0,r.vB)({locations:a.findAllLocations.locations})))}))}findActiveLocations(p="",d=25){return this._apollo.query({query:o,variables:{search:p,size:d},errorPolicy:"all"}).pipe((0,y.U)(({data:R})=>R?R.findActiveLocations:[]),(0,i.b)(R=>{R&&this.store.dispatch((0,r.vB)({locations:R}))}))}getLocationById(p){return this._apollo.query({query:s,variables:{findLocationByIdId:p},errorPolicy:"all"}).pipe((0,i.b)(({data:d})=>{d&&this.store.dispatch((0,r.l6)({location:d.findLocationById.location}))}))}updateLocation(p){return this._apollo.mutate({mutation:l,variables:{updateLocationInput:p},errorPolicy:"all"}).pipe((0,i.b)(({data:d})=>{d&&(this.store.dispatch((0,r.YF)({location:d.updateLocation.location})),this.store.dispatch((0,r.l6)({location:d.updateLocation.location})))}))}updateLocationStatus(p){return this._apollo.mutate({mutation:m,variables:{updateEntityStatusInput:p},errorPolicy:"all"}).pipe((0,i.b)(({data:d})=>{d&&this.store.dispatch((0,r.TC)({id:p.id,active:p.active}))}))}removeLocation(p){return this._apollo.mutate({mutation:t,variables:{removeLocationId:p},errorPolicy:"all"}).pipe((0,i.b)(({data:d})=>{d&&this.store.dispatch((0,r.Mv)({id:p}))}))}static#t=this.\u0275fac=function(d){return new(d||B)(v.LFG(c._M),v.LFG(g.yh))};static#e=this.\u0275prov=v.Yz7({token:B,factory:B.\u0275fac,providedIn:"root"})}return B})()},47452:(T,h,e)=>{e.d(h,{DK:()=>c,JM:()=>n,V_:()=>I,vr:()=>r});class r{constructor(m,t,f,o,s,v){this.productId=m,this.name=t,this.uom=f,this.price=o,this.quantity=s,this.depotId=v}}class n{constructor(m,t,f){this.assistanceId=m,this.price=t,this.quantity=f}}var c=function(l){return l.nueva="nueva",l.recibida="recibida",l.cobrada="cobrada",l.rechazada="rechazada",l.cancelada="cancelada",l.facturada="facturada",l.entregada="entregada",l}(c||{});class I{constructor(m,t,f,o){this.nueva=m,this.recibida=t,this.rechazada=f,this.cancelada=o}}},10959:(T,h,e)=>{e.d(h,{I:()=>r});const r=(0,e(84221).P1)(n=>n.rates,n=>n.rates)},66330:(T,h,e)=>{e.d(h,{m:()=>d});var i=e(19212),y=e(48180),r=e(94664),n=e(99397),c=e(37398),I=e(50967),l=e(84221),m=e(97214),t=e(65413),f=e(10959);const o=I.Ps`
    mutation CreateRate($createRateInput: CreateRateInput!) {
        createRate(createRateInput: $createRateInput) {

            ok
            message

            rate {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }

        }
    }
`,s=I.Ps`
    mutation UpdateRate($updateRateInput: UpdateRateInput!) {
        updateRate(updateRateInput: $updateRateInput) {
            ok
            message

            rate {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }
        }
    }
`,v=I.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRateStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,g=I.Ps`
    mutation RemoveRate($removeRateId: String!) {
        removeRate(id: $removeRateId) {
            ok
            message
        }
    }
`,P=I.Ps`
    query FindAllRates($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllRates(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
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

            rates {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }
        }
    }
`,B=I.Ps`
    query FindActiveByBaseId($currencyBaseId: String!) {
        findActiveByBaseId(currencyBaseId: $currencyBaseId) {
            id
            active
            date
            name
            value
            currencyRefId

            currencyRef {
                id
                iso
            }

            currencyBaseId

            currencyBase {
                id
                iso
            }
        }
    }
`,$=I.Ps`
    query FindActiveRateByBaseIdForAthendatPlatform($currencyBaseId: String!) {
        getActiveRateByBaseIdForAthendatPlatform(currencyBaseId: $currencyBaseId) {
            id
            active
            date
            name
            value
            currencyRefId

            currencyRef {
                id
                iso
            }

            currencyBaseId

            currencyBase {
                id
                iso
            }
        }
    }
`,p=I.Ps`
    query FindRateById($findRateByIdId: String!) {
        findRateById(id: $findRateByIdId) {
            ok
            message

            rate {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }
        }
    }
`;let d=(()=>{class R{constructor(){this.apolloProvider=(0,i.f3M)(I._M),this.store=(0,i.f3M)(l.yh),this._apollo=this.apolloProvider.use("BALANC")}createRate(u){return this.store.select(f.I).pipe((0,y.q)(1),(0,r.w)(a=>this._apollo.mutate({mutation:o,variables:{createRateInput:u},errorPolicy:"all"}).pipe((0,n.b)(({data:L})=>{const E=structuredClone(a);E.push(L.createRate.rate),this.store.dispatch((0,t.jM)({rates:E}))}))))}getRates(u=0,a=10,L="name",E="asc",_=""){return this._apollo.query({query:P,errorPolicy:"all",variables:{page:u,size:a,sort:L,order:E,search:_}}).pipe((0,n.b)(({data:A})=>{this.store.dispatch((0,m.Jr)({pagination:A.findAllRates.pagination})),this.store.dispatch((0,t.jM)({rates:A.findAllRates.rates}))}))}findActiveByBaseId(u){return this._apollo.query({query:B,variables:{currencyBaseId:u},errorPolicy:"all"}).pipe((0,c.U)(({data:a})=>a?a.findActiveByBaseId:[]),(0,n.b)(a=>{a&&this.store.dispatch((0,t.jM)({rates:a}))}))}getActiveRateByBaseIdForAthendatPlatform(u){return this._apollo.query({query:$,variables:{currencyBaseId:u},errorPolicy:"all"}).pipe((0,c.U)(({data:a})=>a?a.getActiveRateByBaseIdForAthendatPlatform:null),(0,n.b)(a=>{a&&this.store.dispatch((0,t.FY)({rate:a}))}))}getRateById(u){return this._apollo.query({query:p,variables:{findRateByIdId:u},errorPolicy:"all"}).pipe((0,n.b)(({data:a})=>{this.store.dispatch((0,t.FY)({rate:a.findRateById.rate}))}))}updateRate(u){return this.store.select(f.I).pipe((0,y.q)(1),(0,r.w)(a=>this._apollo.mutate({mutation:s,variables:{updateRateInput:u},errorPolicy:"all"}).pipe((0,n.b)(({data:L})=>{const E=structuredClone(a);E[a.findIndex(A=>A.id===u.id)]=L.updateRate.rate,this.store.dispatch((0,t.jM)({rates:E}))}))))}updateRateStatus(u){return this.store.select(f.I).pipe((0,y.q)(1),(0,r.w)(a=>this._apollo.mutate({mutation:v,variables:{updateEntityStatusInput:u},errorPolicy:"all"}).pipe((0,n.b)(({})=>{const E=structuredClone(a);E[a.findIndex(A=>A.id===u.id)].active=u.active,this.store.dispatch((0,t.jM)({rates:E}))}))))}removeRate(u){return this.store.select(f.I).pipe((0,y.q)(1),(0,r.w)(a=>this._apollo.mutate({mutation:g,variables:{removeRateId:u},errorPolicy:"all"}).pipe((0,n.b)(({data:L})=>{if(L){const E=structuredClone(a),_=a.findIndex(A=>A.id===u);E.splice(_,1),this.store.dispatch((0,t.jM)({rates:E}))}}))))}static#t=this.\u0275fac=function(a){return new(a||R)};static#e=this.\u0275prov=i.Yz7({token:R,factory:R.\u0275fac,providedIn:"root"})}return R})()}}]);