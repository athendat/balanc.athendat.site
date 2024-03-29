"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[4213],{56808:(P,v,e)=>{e.d(v,{hQ:()=>r,wQ:()=>n});var s=e(59640);const y=c=>c.customers,r=(0,s.Mz)(y,c=>c.customer),n=(0,s.Mz)(y,c=>c.customers)},34413:(P,v,e)=>{e.d(v,{MI:()=>m,wf:()=>I,zA:()=>l});var s=e(54438),y=e(18810),r=e(99437),n=e(62590),c=e(51188);let I=(()=>{class t{constructor(o,i){this._employeesService=o,this._router=i}resolve(o,i){return this._employeesService.findAllEmployees().pipe((0,r.W)(h=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(i){return new(i||t)(s.KVO(n.r),s.KVO(c.Ix))};static#e=this.\u0275prov=s.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),l=(()=>{class t{constructor(o,i){this._employeesService=o,this._router=i}resolve(o,i){const h=o.params.employeeId;return"new"===h?null:this._employeesService.findEmployeeById(h).pipe((0,r.W)(E=>{const L=i.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(L),(0,y.$)(E)}))}static#t=this.\u0275fac=function(i){return new(i||t)(s.KVO(n.r),s.KVO(c.Ix))};static#e=this.\u0275prov=s.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const m=(t,f)=>(0,s.WQX)(n.r).findActiveEmployees()},24121:(P,v,e)=>{e.d(v,{cH:()=>l,j8:()=>I,pP:()=>m});var s=e(99437),y=e(18810),r=e(54438),n=e(49098),c=e(51188);let I=(()=>{class t{constructor(o,i){this._locationsService=o,this._router=i}resolve(o,i){const h=o.paramMap.get("locationId");if("new"!==h)return this._locationsService.getLocationById(h).pipe((0,s.W)(E=>{console.error(E);const L=i.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(L),(0,y.$)(E)}))}static#t=this.\u0275fac=function(i){return new(i||t)(r.KVO(n.O),r.KVO(c.Ix))};static#e=this.\u0275prov=r.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),l=(()=>{class t{constructor(o){this._locationsService=o}resolve(o,i){return this._locationsService.getLocations()}static#t=this.\u0275fac=function(i){return new(i||t)(r.KVO(n.O))};static#e=this.\u0275prov=r.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),m=(()=>{class t{constructor(o){this._locationsService=o}resolve(o,i){return this._locationsService.findActiveLocations()}static#t=this.\u0275fac=function(i){return new(i||t)(r.KVO(n.O))};static#e=this.\u0275prov=r.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()},49098:(P,v,e)=>{e.d(v,{O:()=>L});var s=e(88141),y=e(96354),r=e(24984),n=e(98216),c=e(73512);const I=c.J1`
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
`,l=c.J1`
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
`,m=c.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateLocationStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,t=c.J1`
    mutation RemoveLocation($removeLocationId: String!) {
        removeLocation(id: $removeLocationId) {
            ok
            message
        }
    }
`,f=c.J1`
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
`,o=c.J1`
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
`,i=c.J1`
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
`;var h=e(54438),E=e(59640);let L=(()=>{class O{constructor(p,d){this.apolloProvider=p,this.store=d,this._apollo=this.apolloProvider.use("BALANC")}createLocation(p){return this._apollo.mutate({mutation:I,variables:{createLocationInput:p},errorPolicy:"all"}).pipe((0,s.M)(({data:d})=>{d&&(this.store.dispatch((0,r.yJ)({location:d.createLocation.location})),this.store.dispatch((0,r.Og)({location:d.createLocation.location})))}))}getLocations(p=0,d=25,R="name",$="asc",u=""){return this._apollo.query({query:f,errorPolicy:"all",variables:{page:p,size:d,sort:R,order:$,search:u}}).pipe((0,s.M)(({data:a})=>{a&&(this.store.dispatch((0,n.Bp)({pagination:a.findAllLocations.pagination})),this.store.dispatch((0,r.xu)({locations:a.findAllLocations.locations})))}))}findActiveLocations(p="",d=25){return this._apollo.query({query:o,variables:{search:p,size:d},errorPolicy:"all"}).pipe((0,y.T)(({data:R})=>R?R.findActiveLocations:[]),(0,s.M)(R=>{R&&this.store.dispatch((0,r.xu)({locations:R}))}))}getLocationById(p){return this._apollo.query({query:i,variables:{findLocationByIdId:p},errorPolicy:"all"}).pipe((0,s.M)(({data:d})=>{d&&this.store.dispatch((0,r.Og)({location:d.findLocationById.location}))}))}updateLocation(p){return this._apollo.mutate({mutation:l,variables:{updateLocationInput:p},errorPolicy:"all"}).pipe((0,s.M)(({data:d})=>{d&&(this.store.dispatch((0,r.Nt)({location:d.updateLocation.location})),this.store.dispatch((0,r.Og)({location:d.updateLocation.location})))}))}updateLocationStatus(p){return this._apollo.mutate({mutation:m,variables:{updateEntityStatusInput:p},errorPolicy:"all"}).pipe((0,s.M)(({data:d})=>{d&&this.store.dispatch((0,r.jr)({id:p.id,active:p.active}))}))}removeLocation(p){return this._apollo.mutate({mutation:t,variables:{removeLocationId:p},errorPolicy:"all"}).pipe((0,s.M)(({data:d})=>{d&&this.store.dispatch((0,r.q$)({id:p}))}))}static#t=this.\u0275fac=function(d){return new(d||O)(h.KVO(c.Ic),h.KVO(E.il))};static#e=this.\u0275prov=h.jDH({token:O,factory:O.\u0275fac,providedIn:"root"})}return O})()},21607:(P,v,e)=>{e.d(v,{At:()=>n,To:()=>I,ih:()=>c,tz:()=>r});class r{constructor(m,t,f,o,i,h){this.productId=m,this.name=t,this.uom=f,this.price=o,this.quantity=i,this.depotId=h}}class n{constructor(m,t,f){this.assistanceId=m,this.price=t,this.quantity=f}}var c=function(l){return l.nueva="nueva",l.recibida="recibida",l.cobrada="cobrada",l.rechazada="rechazada",l.cancelada="cancelada",l.facturada="facturada",l.entregada="entregada",l}(c||{});class I{constructor(m,t,f,o){this.nueva=m,this.recibida=t,this.rechazada=f,this.cancelada=o}}},3899:(P,v,e)=>{e.d(v,{o:()=>r});const r=(0,e(59640).Mz)(n=>n.rates,n=>n.rates)},25910:(P,v,e)=>{e.d(v,{f:()=>d});var s=e(54438),y=e(96697),r=e(25558),n=e(88141),c=e(96354),I=e(73512),l=e(59640),m=e(98216),t=e(28610),f=e(3899);const o=I.J1`
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
`,i=I.J1`
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
`,h=I.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRateStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,E=I.J1`
    mutation RemoveRate($removeRateId: String!) {
        removeRate(id: $removeRateId) {
            ok
            message
        }
    }
`,L=I.J1`
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
`,O=I.J1`
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
`,_=I.J1`
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
`,p=I.J1`
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
`;let d=(()=>{class R{constructor(){this.apolloProvider=(0,s.WQX)(I.Ic),this.store=(0,s.WQX)(l.il),this._apollo=this.apolloProvider.use("BALANC")}createRate(u){return this.store.select(f.o).pipe((0,y.s)(1),(0,r.n)(a=>this._apollo.mutate({mutation:o,variables:{createRateInput:u},errorPolicy:"all"}).pipe((0,n.M)(({data:A})=>{const g=structuredClone(a);g.push(A.createRate.rate),this.store.dispatch((0,t.CD)({rates:g}))}))))}getRates(u=0,a=10,A="name",g="asc",T=""){return this._apollo.query({query:L,errorPolicy:"all",variables:{page:u,size:a,sort:A,order:g,search:T}}).pipe((0,n.M)(({data:B})=>{this.store.dispatch((0,m.Bp)({pagination:B.findAllRates.pagination})),this.store.dispatch((0,t.CD)({rates:B.findAllRates.rates}))}))}findActiveByBaseId(u){return this._apollo.query({query:O,variables:{currencyBaseId:u},errorPolicy:"all"}).pipe((0,c.T)(({data:a})=>a?a.findActiveByBaseId:[]),(0,n.M)(a=>{a&&this.store.dispatch((0,t.CD)({rates:a}))}))}getActiveRateByBaseIdForAthendatPlatform(u){return this._apollo.query({query:_,variables:{currencyBaseId:u},errorPolicy:"all"}).pipe((0,c.T)(({data:a})=>a?a.getActiveRateByBaseIdForAthendatPlatform:null),(0,n.M)(a=>{a&&this.store.dispatch((0,t.r$)({rate:a}))}))}getRateById(u){return this._apollo.query({query:p,variables:{findRateByIdId:u},errorPolicy:"all"}).pipe((0,n.M)(({data:a})=>{this.store.dispatch((0,t.r$)({rate:a.findRateById.rate}))}))}updateRate(u){return this.store.select(f.o).pipe((0,y.s)(1),(0,r.n)(a=>this._apollo.mutate({mutation:i,variables:{updateRateInput:u},errorPolicy:"all"}).pipe((0,n.M)(({data:A})=>{const g=structuredClone(a);g[a.findIndex(B=>B.id===u.id)]=A.updateRate.rate,this.store.dispatch((0,t.CD)({rates:g}))}))))}updateRateStatus(u){return this.store.select(f.o).pipe((0,y.s)(1),(0,r.n)(a=>this._apollo.mutate({mutation:h,variables:{updateEntityStatusInput:u},errorPolicy:"all"}).pipe((0,n.M)(({})=>{const g=structuredClone(a);g[a.findIndex(B=>B.id===u.id)].active=u.active,this.store.dispatch((0,t.CD)({rates:g}))}))))}removeRate(u){return this.store.select(f.o).pipe((0,y.s)(1),(0,r.n)(a=>this._apollo.mutate({mutation:E,variables:{removeRateId:u},errorPolicy:"all"}).pipe((0,n.M)(({data:A})=>{if(A){const g=structuredClone(a),T=a.findIndex(B=>B.id===u);g.splice(T,1),this.store.dispatch((0,t.CD)({rates:g}))}}))))}static#t=this.\u0275fac=function(a){return new(a||R)};static#e=this.\u0275prov=s.jDH({token:R,factory:R.\u0275fac,providedIn:"root"})}return R})()}}]);