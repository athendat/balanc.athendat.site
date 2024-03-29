"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8121],{99433:(E,y,s)=>{s.d(y,{w:()=>c});var l=s(54438),p=s(98300);const c=(d,u)=>(0,l.WQX)(p.d).getFuels()},56501:(E,y,s)=>{s.d(y,{UC:()=>d});var l=s(59640);const p=u=>u.fuels,d=((0,l.Mz)(p,u=>u.fuel),(0,l.Mz)(p,u=>u.fuels))},98300:(E,y,s)=>{s.d(y,{d:()=>M});var l=s(96697),p=s(25558),c=s(88141),d=s(31496),u=s(98216),f=s(56501),v=s(73512);const T=v.J1`
    mutation CreateFuel($createFuelInput: CreateFuelInput!) {
        createFuel(createFuelInput: $createFuelInput) {

            ok
            message

            fuel {
                id
                active
                name
                slug
            }

        }
    }
`,S=v.J1`
    mutation UpdateFuel($updateFuelInput: UpdateFuelInput!) {
        updateFuel(updateFuelInput: $updateFuelInput) {
            ok
            message

            fuel {
                id
                active
                name
                slug
            }
        }
    }
`,F=v.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateFuelStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,P=v.J1`
    mutation RemoveFuel($removeFuelId: String!) {
        removeFuel(id: $removeFuelId) {
            ok
            message
        }
    }
`,C=v.J1`
    query FindAllFuels($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllFuels(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            fuels {
                id
                active
                name
                slug
            }
        }
    }
`,$=v.J1`
    query FindFuelById($findFuelByIdId: String!) {
        findFuelById(id: $findFuelByIdId) {
            ok
            message

            fuel {
                id
                active
                name
                slug
            }
        }
    }
`;var m=s(94794),I=s(54438),U=s(95416),B=s(59640);let M=(()=>{class g{constructor(o,e,a){this.apolloProvider=o,this._snackBar=e,this.store=a,this._apollo=this.apolloProvider.use("BALANC")}createFuel(o){return this.store.select(f.UC).pipe((0,l.s)(1),(0,p.n)(e=>this._apollo.mutate({mutation:T,variables:{createFuelInput:o},errorPolicy:"all"}).pipe((0,c.M)(({errors:a,data:r})=>{if(a){let t="";a.forEach(i=>t+=`\n ${i.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=structuredClone(e);n.push(r.createFuel.fuel),this.store.dispatch((0,d.IR)({fuels:n}))}))))}getFuels(o=1,e=20,a="code",r="asc",n=null){return this._apollo.query({query:C,errorPolicy:"all",variables:{offset:e*(o-1),limit:e,sort:a,order:r,search:n}}).pipe((0,c.M)(({errors:t,data:i})=>{if(t){let h="";t.forEach(A=>h+=`\n ${A.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,u.Bp)({pagination:i.findAllFuels.pagination})),this.store.dispatch((0,d.IR)({fuels:i.findAllFuels.fuels}))}))}getFuelById(o){return this._apollo.query({query:$,variables:{findFuelByIdId:o},errorPolicy:"all"}).pipe((0,c.M)(({errors:e,data:a})=>{if(e){let r="";e.forEach(n=>r+=`\n ${n.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,d.R3)({fuel:a.findFuelById.fuel}))}))}updateFuel(o){return this.store.select(f.UC).pipe((0,l.s)(1),(0,p.n)(e=>this._apollo.mutate({mutation:S,variables:{updateFuelInput:o},errorPolicy:"all"}).pipe((0,c.M)(({errors:a,data:r})=>{if(a){let i="";a.forEach(h=>i+=`\n ${h.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=structuredClone(e);n[e.findIndex(i=>i.id===o.id)]=r.updateFuel.fuel,this.store.dispatch((0,d.IR)({fuels:n}))}))))}updateFuelStatus(o){return this.store.select(f.UC).pipe((0,l.s)(1),(0,p.n)(e=>this._apollo.mutate({mutation:F,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,c.M)(({errors:a})=>{if(a){let t="";a.forEach(i=>t+=`\n ${i.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=structuredClone(e);r[e.findIndex(t=>t.id===o.id)].active=o.active,this.store.dispatch((0,d.IR)({fuels:r}))}))))}removeFuel(o){return this.store.select(f.UC).pipe((0,l.s)(1),(0,p.n)(e=>this._apollo.mutate({mutation:P,variables:{removeFuelId:o},errorPolicy:"all"}).pipe((0,c.M)(({errors:a})=>{if(a){let t="";a.forEach(i=>t+=`\n ${i.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=structuredClone(e),n=e.findIndex(t=>t.id===o);r.splice(n,1),this.store.dispatch((0,d.IR)({fuels:r}))}))))}static#e=this.\u0275fac=function(e){return new(e||g)(I.KVO(v.Ic),I.KVO(U.UG),I.KVO(B.il))};static#t=this.\u0275prov=I.jDH({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},90225:(E,y,s)=>{s.d(y,{f:()=>c});var l=s(54438),p=s(86069);const c=(d,u)=>(0,l.WQX)(p.Q).getServiceTypes()},77581:(E,y,s)=>{s.d(y,{jr:()=>d});var l=s(59640);const p=u=>u.serviceTypes,d=((0,l.Mz)(p,u=>u.serviceType),(0,l.Mz)(p,u=>u.serviceTypes))},86069:(E,y,s)=>{s.d(y,{Q:()=>M});var l=s(96697),p=s(25558),c=s(88141),d=s(83888),u=s(98216),f=s(77581),v=s(73512);const T=v.J1`
    mutation CreateServiceType($createServiceTypeInput: CreateServiceTypeInput!) {
        createServiceType(createServiceTypeInput: $createServiceTypeInput) {

            ok
            message

            serviceType {
                id
                active
                name
                slug
            }

        }
    }
`,S=v.J1`
    mutation UpdateServiceType($updateServiceTypeInput: UpdateServiceTypeInput!) {
        updateServiceType(updateServiceTypeInput: $updateServiceTypeInput) {
            ok
            message

            serviceType {
                id
                active
                name
                slug
            }
        }
    }
`,F=v.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateServiceTypeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,P=v.J1`
    mutation RemoveServiceType($removeServiceTypeId: String!) {
        removeServiceType(id: $removeServiceTypeId) {
            ok
            message
        }
    }
`,C=v.J1`
    query FindAllServiceTypes($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllServiceTypes(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            serviceTypes {
                id
                active
                name
                slug
            }
        }
    }
`,$=v.J1`
    query FindServiceTypeById($findServiceTypeByIdId: String!) {
        findServiceTypeById(id: $findServiceTypeByIdId) {
            ok
            message

            serviceType {
                id
                active
                name
                slug
            }
        }
    }
`;var m=s(94794),I=s(54438),U=s(95416),B=s(59640);let M=(()=>{class g{constructor(o,e,a){this.apolloProvider=o,this._snackBar=e,this.store=a,this._apollo=this.apolloProvider.use("BALANC")}createServiceType(o){return this.store.select(f.jr).pipe((0,l.s)(1),(0,p.n)(e=>this._apollo.mutate({mutation:T,variables:{createServiceTypeInput:o},errorPolicy:"all"}).pipe((0,c.M)(({errors:a,data:r})=>{if(a){let t="";a.forEach(i=>t+=`\n ${i.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=structuredClone(e);n.push(r.createServiceType.serviceType),this.store.dispatch((0,d.f0)({serviceTypes:n}))}))))}getServiceTypes(o=1,e=20,a="code",r="asc",n=null){return this._apollo.query({query:C,errorPolicy:"all",variables:{offset:e*(o-1),limit:e,sort:a,order:r,search:n}}).pipe((0,c.M)(({errors:t,data:i})=>{if(t){let h="";t.forEach(A=>h+=`\n ${A.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,u.Bp)({pagination:i.findAllServiceTypes.pagination})),this.store.dispatch((0,d.f0)({serviceTypes:i.findAllServiceTypes.serviceTypes}))}))}getServiceTypeById(o){return this._apollo.query({query:$,variables:{findServiceTypeByIdId:o},errorPolicy:"all"}).pipe((0,c.M)(({errors:e,data:a})=>{if(e){let r="";e.forEach(n=>r+=`\n ${n.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,d.KL)({serviceType:a.findServiceTypeById.serviceType}))}))}updateServiceType(o){return this.store.select(f.jr).pipe((0,l.s)(1),(0,p.n)(e=>this._apollo.mutate({mutation:S,variables:{updateServiceTypeInput:o},errorPolicy:"all"}).pipe((0,c.M)(({errors:a,data:r})=>{if(a){let i="";a.forEach(h=>i+=`\n ${h.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=structuredClone(e);n[e.findIndex(i=>i.id===o.id)]=r.updateServiceType.serviceType,this.store.dispatch((0,d.f0)({serviceTypes:n}))}))))}updateServiceTypeStatus(o){return this.store.select(f.jr).pipe((0,l.s)(1),(0,p.n)(e=>this._apollo.mutate({mutation:F,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,c.M)(({errors:a})=>{if(a){let t="";a.forEach(i=>t+=`\n ${i.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=structuredClone(e);r[e.findIndex(t=>t.id===o.id)].active=o.active,this.store.dispatch((0,d.f0)({serviceTypes:r}))}))))}removeServiceType(o){return this.store.select(f.jr).pipe((0,l.s)(1),(0,p.n)(e=>this._apollo.mutate({mutation:P,variables:{removeServiceTypeId:o},errorPolicy:"all"}).pipe((0,c.M)(({errors:a})=>{if(a){let t="";a.forEach(i=>t+=`\n ${i.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=structuredClone(e),n=e.findIndex(t=>t.id===o);r.splice(n,1),this.store.dispatch((0,d.f0)({serviceTypes:r}))}))))}static#e=this.\u0275fac=function(e){return new(e||g)(I.KVO(v.Ic),I.KVO(U.UG),I.KVO(B.il))};static#t=this.\u0275prov=I.jDH({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()}}]);