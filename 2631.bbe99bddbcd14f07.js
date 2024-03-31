"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2631],{63425:(M,y,t)=>{t.d(y,{B:()=>m,n:()=>n});var s=t(54438),e=t(21326);const n=(d,c)=>(0,s.WQX)(e.N).getUoms(),m=(d,c)=>(0,s.WQX)(e.N).findActiveUoms()},17085:(M,y,t)=>{t.d(y,{Ns:()=>m});var s=t(59640);const e=d=>d.uoms,m=((0,s.Mz)(e,d=>d.uom),(0,s.Mz)(e,d=>d.uoms))},21326:(M,y,t)=>{t.d(y,{N:()=>C});var s=t(54438),e=t(73512),n=t(96697),m=t(25558),d=t(88141),c=t(59640),p=t(44e3),l=t(98216),U=t(17085);const P=e.J1`
    mutation CreateUom($createUomInput: CreateUomInput!) {
        createUom(createUomInput: $createUomInput) {

            ok
            message

            uom {
                id
                active
                name
                abbr
                type
            }

        }
    }
`,T=e.J1`
    mutation UpdateUom($updateUomInput: UpdateUomInput!) {
        updateUom(updateUomInput: $updateUomInput) {
            ok
            message

            uom {
                id
                active
                name
                abbr
                type
            }
        }
    }
`,$=e.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateUomStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,O=e.J1`
    mutation RemoveUom($removeUomId: String!) {
        removeUom(id: $removeUomId) {
            ok
            message
        }
    }
`,B=e.J1`
    query FindAllUoms($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllUoms(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            uoms {
                id
                active
                name
                abbr
                type
            }
        }
    }
`,R=e.J1`
    query FindActiveUoms {
        findActiveUoms {
            ok
            message

            uoms {
                id
                name
                abbr
            }
        }
    }
`,S=e.J1`
    query FindUomById($findUomByIdId: String!) {
        findUomById(id: $findUomByIdId) {
            ok
            message

            uom {
                id
                active
                name
                abbr
                type
            }
        }
    }
`;let C=(()=>{class E{constructor(){this.apolloProvider=(0,s.WQX)(e.Ic),this.store=(0,s.WQX)(c.il),this._apollo=this.apolloProvider.use("BALANC")}createUom(a){return this.store.select(U.Ns).pipe((0,n.s)(1),(0,m.n)(i=>this._apollo.mutate({mutation:P,variables:{createUomInput:a},errorPolicy:"all"}).pipe((0,d.M)(({data:v})=>{const u=structuredClone(i);u.push(v.createUom.uom),this.store.dispatch((0,p.JR)({uoms:u}))}))))}getUoms(a=1,i=20,v="code",u="asc",I=""){return this._apollo.query({query:B,errorPolicy:"all",variables:{offset:i*(a-1),limit:i,sort:v,order:u,search:I}}).pipe((0,d.M)(({data:g})=>{this.store.dispatch((0,l.Bp)({pagination:g.findAllUoms.pagination})),this.store.dispatch((0,p.JR)({uoms:g.findAllUoms.uoms}))}))}findActiveUoms(a="",i=10){return this._apollo.query({query:R,variables:{search:a,size:i},errorPolicy:"all"}).pipe((0,d.M)(({data:v})=>{this.store.dispatch((0,p.JR)({uoms:v.findActiveUoms.uoms}))}))}getUomById(a){return this._apollo.query({query:S,variables:{findUomByIdId:a},errorPolicy:"all"}).pipe((0,d.M)(({data:i})=>{this.store.dispatch((0,p.qV)({uom:i.findUomById.uom}))}))}updateUom(a){return this.store.select(U.Ns).pipe((0,n.s)(1),(0,m.n)(i=>this._apollo.mutate({mutation:T,variables:{updateUomInput:a},errorPolicy:"all"}).pipe((0,d.M)(({data:v})=>{const u=structuredClone(i);u[i.findIndex(g=>g.id===a.id)]=v.updateUom.uom,this.store.dispatch((0,p.JR)({uoms:u}))}))))}updateUomStatus(a){return this.store.select(U.Ns).pipe((0,n.s)(1),(0,m.n)(i=>this._apollo.mutate({mutation:$,variables:{updateEntityStatusInput:a},errorPolicy:"all"}).pipe((0,d.M)(({})=>{const u=structuredClone(i);u[i.findIndex(g=>g.id===a.id)].active=a.active,this.store.dispatch((0,p.JR)({uoms:u}))}))))}removeUom(a){return this.store.select(U.Ns).pipe((0,n.s)(1),(0,m.n)(i=>this._apollo.mutate({mutation:O,variables:{removeUomId:a},errorPolicy:"all"}).pipe((0,d.M)(({errors:v})=>{if(v)return;const u=structuredClone(i),I=i.findIndex(g=>g.id===a);u.splice(I,1),this.store.dispatch((0,p.JR)({uoms:u}))}))))}static#t=this.\u0275fac=function(i){return new(i||E)};static#e=this.\u0275prov=s.jDH({token:E,factory:E.\u0275fac,providedIn:"root"})}return E})()},16551:(M,y,t)=>{t.d(y,{Jq:()=>d,MQ:()=>m,be:()=>p,oi:()=>c,ug:()=>n});var s=t(54438),e=t(69599);const n=(l,U)=>(0,s.WQX)(e.t).getDepots(),m=(l,U)=>(0,s.WQX)(e.t).findActiveDepots(),d=(l,U)=>(0,s.WQX)(e.t).findActiveAndRealDepots(),c=(l,U)=>(0,s.WQX)(e.t).findDepotsForIncomes(),p=(l,U)=>{const P=l.params.periodId;return P?(0,s.WQX)(e.t).findDepotByPeriodId(P):null}},53159:(M,y,t)=>{t.d(y,{c_:()=>m,dY:()=>n});var s=t(59640);const e=c=>c.depots,n=(0,s.Mz)(e,c=>c.depot),m=(0,s.Mz)(e,c=>c.depots);(0,s.Mz)(e,c=>c.ownDepots)},69599:(M,y,t)=>{t.d(y,{t:()=>u});var s=t(96697),e=t(25558),n=t(88141),m=t(96354),d=t(98216),c=t(53159),p=t(26782),l=t(73512);const U=l.J1`
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
`,P=l.J1`
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
`,T=l.J1`
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
`,$=l.J1`
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
`,O=l.J1`
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
`,B=l.J1`
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
`,R=l.J1`
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
`,S=l.J1`
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
`,C=l.J1`
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
`,E=l.J1`
    mutation RemoveDepot($removeDepotId: String!) {
        removeDepot(id: $removeDepotId) {
            ok
            message
        }
    }
`,J=l.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateDepotStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var a=t(54438),i=t(95416),v=t(59640);let u=(()=>{class I{constructor(o,r,D){this.apolloProvider=o,this._snackBar=r,this.store=D,this._apollo=this.apolloProvider.use("BALANC")}createDepot(o){return this.store.select(c.c_).pipe((0,s.s)(1),(0,e.n)(r=>this._apollo.mutate({mutation:S,variables:{createDepotInput:o},errorPolicy:"all"}).pipe((0,n.M)(({data:D})=>{const h=structuredClone(r);h.push(D.createDepot.depot),this.store.dispatch((0,p.IX)({depots:h}))}))))}getDepots(o=0,r=50,D="code",h="asc",A=""){return this._apollo.query({query:P,errorPolicy:"all",variables:{page:o,size:r,sort:D,order:h,search:A}}).pipe((0,n.M)(({data:f})=>{this.store.dispatch((0,p.IX)({depots:f.findAllDepots.depots})),this.store.dispatch((0,d.Bp)({pagination:f.findAllDepots.pagination}))}))}getDepotsByManager(){return this._apollo.query({query:U,errorPolicy:"all"}).pipe((0,n.M)(({data:o})=>{this.store.dispatch((0,p.Gv)({ownDepots:o.findDepotsByManager.depots}))}))}findActiveDepots(o="",r=50){return this._apollo.query({query:T,variables:{search:o,size:r},errorPolicy:"all"}).pipe((0,m.T)(({data:D})=>(this.store.dispatch((0,p.IX)({depots:D.findActiveDepots})),D.findActiveDepots)))}findActiveAndRealDepots(){return this._apollo.query({query:$,errorPolicy:"all"}).pipe((0,n.M)(({data:o})=>{this.store.dispatch((0,p.IX)({depots:o.findActiveAndRealDepots.depots}))}))}findDepotsForIncomes(){return this._apollo.query({query:O,errorPolicy:"all"}).pipe((0,n.M)(({data:o})=>{this.store.dispatch((0,p.IX)({depots:o.findDepotsForIncomes.depots}))}))}findDepotByPeriodId(o){return this._apollo.query({query:B,errorPolicy:"all",variables:{periodId:o}}).pipe((0,n.M)(({data:r})=>{this.store.dispatch((0,p.VJ)({depot:r.findDepotByPeriodId.depot}))}))}getDepotById(o){return this._apollo.query({query:R,variables:{findDepotByIdId:o},errorPolicy:"all"}).pipe((0,n.M)(({data:r})=>{this.store.dispatch((0,p.VJ)({depot:r.createDepot.depot}))}))}updateDepot(o){return this.store.select(c.c_).pipe((0,s.s)(1),(0,e.n)(r=>this._apollo.mutate({mutation:C,variables:{updateDepotInput:o},errorPolicy:"all"}).pipe((0,n.M)(({data:D})=>{const h=structuredClone(r);h[r.findIndex(f=>f.id===o.id)]=D.updateDepot.depot,this.store.dispatch((0,p.IX)({depots:h}))}))))}updateDepotStatus(o){return this.store.select(c.c_).pipe((0,s.s)(1),(0,e.n)(r=>this._apollo.mutate({mutation:J,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,n.M)(({})=>{const h=structuredClone(r);h[r.findIndex(f=>f.id===o.id)].active=o.active,this.store.dispatch((0,p.IX)({depots:h}))}))))}removeDepot(o){return this.store.select(c.c_).pipe((0,s.s)(1),(0,e.n)(r=>this._apollo.mutate({mutation:E,variables:{removeDepotId:o},errorPolicy:"all"}).pipe((0,n.M)(({})=>{const h=structuredClone(r),A=r.findIndex(f=>f.id===o);h.splice(A,1)}))))}static#t=this.\u0275fac=function(r){return new(r||I)(a.KVO(l.Ic),a.KVO(i.UG),a.KVO(v.il))};static#e=this.\u0275prov=a.jDH({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})()}}]);