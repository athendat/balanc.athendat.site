"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[4013],{85194:(O,f,t)=>{t.d(f,{t:()=>s,y:()=>v});var o=t(19212),a=t(61942);const s=(d,l)=>(0,o.f3M)(a.c).getUoms(),v=(d,l)=>(0,o.f3M)(a.c).findActiveUoms()},33355:(O,f,t)=>{t.d(f,{av:()=>v});var o=t(84221);const a=d=>d.uoms,v=((0,o.P1)(a,d=>d.uom),(0,o.P1)(a,d=>d.uoms))},61942:(O,f,t)=>{t.d(f,{c:()=>F});var o=t(19212),a=t(50967),s=t(48180),v=t(94664),d=t(99397),l=t(84221),p=t(46053),u=t(97214),g=t(33355);const c=a.Ps`
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
`,M=a.Ps`
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
`,I=a.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateUomStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,P=a.Ps`
    mutation RemoveUom($removeUomId: String!) {
        removeUom(id: $removeUomId) {
            ok
            message
        }
    }
`,S=a.Ps`
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
`,B=a.Ps`
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
`,C=a.Ps`
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
`;let F=(()=>{class ${constructor(){this.apolloProvider=(0,o.f3M)(a._M),this.store=(0,o.f3M)(l.yh),this._apollo=this.apolloProvider.use("BALANC")}createUom(r){return this.store.select(g.av).pipe((0,s.q)(1),(0,v.w)(i=>this._apollo.mutate({mutation:c,variables:{createUomInput:r},errorPolicy:"all"}).pipe((0,d.b)(({data:D})=>{const m=structuredClone(i);m.push(D.createUom.uom),this.store.dispatch((0,p.u8)({uoms:m}))}))))}getUoms(r=1,i=20,D="code",m="asc",h=""){return this._apollo.query({query:S,errorPolicy:"all",variables:{offset:i*(r-1),limit:i,sort:D,order:m,search:h}}).pipe((0,d.b)(({data:E})=>{this.store.dispatch((0,u.Jr)({pagination:E.findAllUoms.pagination})),this.store.dispatch((0,p.u8)({uoms:E.findAllUoms.uoms}))}))}findActiveUoms(r="",i=10){return this._apollo.query({query:B,variables:{search:r,size:i},errorPolicy:"all"}).pipe((0,d.b)(({data:D})=>{this.store.dispatch((0,p.u8)({uoms:D.findActiveUoms.uoms}))}))}getUomById(r){return this._apollo.query({query:C,variables:{findUomByIdId:r},errorPolicy:"all"}).pipe((0,d.b)(({data:i})=>{this.store.dispatch((0,p.sh)({uom:i.findUomById.uom}))}))}updateUom(r){return this.store.select(g.av).pipe((0,s.q)(1),(0,v.w)(i=>this._apollo.mutate({mutation:M,variables:{updateUomInput:r},errorPolicy:"all"}).pipe((0,d.b)(({data:D})=>{const m=structuredClone(i);m[i.findIndex(E=>E.id===r.id)]=D.updateUom.uom,this.store.dispatch((0,p.u8)({uoms:m}))}))))}updateUomStatus(r){return this.store.select(g.av).pipe((0,s.q)(1),(0,v.w)(i=>this._apollo.mutate({mutation:I,variables:{updateEntityStatusInput:r},errorPolicy:"all"}).pipe((0,d.b)(({})=>{const m=structuredClone(i);m[i.findIndex(E=>E.id===r.id)].active=r.active,this.store.dispatch((0,p.u8)({uoms:m}))}))))}removeUom(r){return this.store.select(g.av).pipe((0,s.q)(1),(0,v.w)(i=>this._apollo.mutate({mutation:P,variables:{removeUomId:r},errorPolicy:"all"}).pipe((0,d.b)(({errors:D})=>{if(D)return;const m=structuredClone(i),h=i.findIndex(E=>E.id===r);m.splice(h,1),this.store.dispatch((0,p.u8)({uoms:m}))}))))}static#t=this.\u0275fac=function(i){return new(i||$)};static#e=this.\u0275prov=o.Yz7({token:$,factory:$.\u0275fac,providedIn:"root"})}return $})()},8382:(O,f,t)=>{t.d(f,{_u:()=>l,d2:()=>p,gD:()=>g,oF:()=>u,s6:()=>d});var o=t(19212),a=t(26306),s=t(39702),v=t(64190);let d=(()=>{class c{constructor(I){this._depotsService=I}resolve(I,P){return this._depotsService.getDepots()}static#t=this.\u0275fac=function(P){return new(P||c)(o.LFG(s.Y))};static#e=this.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),l=(()=>{class c{constructor(I,P){this._depotsService=I,this._router=P}resolve(I,P){return this._depotsService.findActiveDepots().pipe((0,a.K)(S=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(P){return new(P||c)(o.LFG(s.Y),o.LFG(v.F0))};static#e=this.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();const p=(c,M)=>(0,o.f3M)(s.Y).findActiveAndRealDepots(),u=(c,M)=>(0,o.f3M)(s.Y).findDepotsForIncomes(),g=(c,M)=>{const I=c.params.periodId;return I?(0,o.f3M)(s.Y).findDepotByPeriodId(I):null}},58695:(O,f,t)=>{t.d(f,{$I:()=>v,ae:()=>s});var o=t(84221);const a=l=>l.depots,s=(0,o.P1)(a,l=>l.depot),v=(0,o.P1)(a,l=>l.depots);(0,o.P1)(a,l=>l.ownDepots)},39702:(O,f,t)=>{t.d(f,{Y:()=>m});var o=t(48180),a=t(94664),s=t(99397),v=t(37398),d=t(97214),l=t(58695),p=t(59668),u=t(50967);const g=u.Ps`
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
`,c=u.Ps`
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
`,M=u.Ps`
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
`,I=u.Ps`
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
`,P=u.Ps`
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
`,S=u.Ps`
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
`,B=u.Ps`
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
`,C=u.Ps`
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
`,F=u.Ps`
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
`,$=u.Ps`
    mutation RemoveDepot($removeDepotId: String!) {
        removeDepot(id: $removeDepotId) {
            ok
            message
        }
    }
`,R=u.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateDepotStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var r=t(19212),i=t(22939),D=t(84221);let m=(()=>{class h{constructor(e,n,y){this.apolloProvider=e,this._snackBar=n,this.store=y,this._apollo=this.apolloProvider.use("BALANC")}createDepot(e){return this.store.select(l.$I).pipe((0,o.q)(1),(0,a.w)(n=>this._apollo.mutate({mutation:C,variables:{createDepotInput:e},errorPolicy:"all"}).pipe((0,s.b)(({data:y})=>{const U=structuredClone(n);U.push(y.createDepot.depot),this.store.dispatch((0,p.Us)({depots:U}))}))))}getDepots(e=0,n=50,y="code",U="asc",T=""){return this._apollo.query({query:c,errorPolicy:"all",variables:{page:e,size:n,sort:y,order:U,search:T}}).pipe((0,s.b)(({data:A})=>{this.store.dispatch((0,p.Us)({depots:A.findAllDepots.depots})),this.store.dispatch((0,d.Jr)({pagination:A.findAllDepots.pagination}))}))}getDepotsByManager(){return this._apollo.query({query:g,errorPolicy:"all"}).pipe((0,s.b)(({data:e})=>{this.store.dispatch((0,p.qT)({ownDepots:e.findDepotsByManager.depots}))}))}findActiveDepots(e="",n=50){return this._apollo.query({query:M,variables:{search:e,size:n},errorPolicy:"all"}).pipe((0,v.U)(({data:y})=>(this.store.dispatch((0,p.Us)({depots:y.findActiveDepots})),y.findActiveDepots)))}findActiveAndRealDepots(){return this._apollo.query({query:I,errorPolicy:"all"}).pipe((0,s.b)(({data:e})=>{this.store.dispatch((0,p.Us)({depots:e.findActiveAndRealDepots.depots}))}))}findDepotsForIncomes(){return this._apollo.query({query:P,errorPolicy:"all"}).pipe((0,s.b)(({data:e})=>{this.store.dispatch((0,p.Us)({depots:e.findDepotsForIncomes.depots}))}))}findDepotByPeriodId(e){return this._apollo.query({query:S,errorPolicy:"all",variables:{periodId:e}}).pipe((0,s.b)(({data:n})=>{this.store.dispatch((0,p.IH)({depot:n.findDepotByPeriodId.depot}))}))}getDepotById(e){return this._apollo.query({query:B,variables:{findDepotByIdId:e},errorPolicy:"all"}).pipe((0,s.b)(({data:n})=>{this.store.dispatch((0,p.IH)({depot:n.createDepot.depot}))}))}updateDepot(e){return this.store.select(l.$I).pipe((0,o.q)(1),(0,a.w)(n=>this._apollo.mutate({mutation:F,variables:{updateDepotInput:e},errorPolicy:"all"}).pipe((0,s.b)(({data:y})=>{const U=structuredClone(n);U[n.findIndex(A=>A.id===e.id)]=y.updateDepot.depot,this.store.dispatch((0,p.Us)({depots:U}))}))))}updateDepotStatus(e){return this.store.select(l.$I).pipe((0,o.q)(1),(0,a.w)(n=>this._apollo.mutate({mutation:R,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,s.b)(({})=>{const U=structuredClone(n);U[n.findIndex(A=>A.id===e.id)].active=e.active,this.store.dispatch((0,p.Us)({depots:U}))}))))}removeDepot(e){return this.store.select(l.$I).pipe((0,o.q)(1),(0,a.w)(n=>this._apollo.mutate({mutation:$,variables:{removeDepotId:e},errorPolicy:"all"}).pipe((0,s.b)(({})=>{const U=structuredClone(n),T=n.findIndex(A=>A.id===e);U.splice(T,1)}))))}static#t=this.\u0275fac=function(n){return new(n||h)(r.LFG(u._M),r.LFG(i.ux),r.LFG(D.yh))};static#e=this.\u0275prov=r.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()}}]);