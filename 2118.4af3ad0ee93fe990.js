"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2118],{35612:(T,y,s)=>{s.d(y,{I:()=>d});var p=s(19212),u=s(205);let d=(()=>{class i{constructor(v){this._fuelsService=v}resolve(v,c){return this._fuelsService.getFuels()}static#e=this.\u0275fac=function(c){return new(c||i)(p.LFG(u.f))};static#t=this.\u0275prov=p.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},6918:(T,y,s)=>{s.d(y,{zt:()=>i});var p=s(84221);const u=m=>m.fuels,i=((0,p.P1)(u,m=>m.fuel),(0,p.P1)(u,m=>m.fuels))},205:(T,y,s)=>{s.d(y,{f:()=>U});var p=s(48180),u=s(94664),d=s(99397),i=s(86181),m=s(97214),v=s(6918),c=s(50967);const I=c.Ps`
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
`,F=c.Ps`
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
`,P=c.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateFuelStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,S=c.Ps`
    mutation RemoveFuel($removeFuelId: String!) {
        removeFuel(id: $removeFuelId) {
            ok
            message
        }
    }
`,C=c.Ps`
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
`,$=c.Ps`
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
`;var h=s(42090),E=s(19212),B=s(22939),b=s(84221);let U=(()=>{class g{constructor(o,e,r){this.apolloProvider=o,this._snackBar=e,this.store=r,this._apollo=this.apolloProvider.use("BALANC")}createFuel(o){return this.store.select(v.zt).pipe((0,p.q)(1),(0,u.w)(e=>this._apollo.mutate({mutation:I,variables:{createFuelInput:o},errorPolicy:"all"}).pipe((0,d.b)(({errors:r,data:a})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(e);l.push(a.createFuel.fuel),this.store.dispatch((0,i.fQ)({fuels:l}))}))))}getFuels(o=1,e=20,r="code",a="asc",l=null){return this._apollo.query({query:C,errorPolicy:"all",variables:{offset:e*(o-1),limit:e,sort:r,order:a,search:l}}).pipe((0,d.b)(({errors:t,data:n})=>{if(t){let f="";t.forEach(A=>f+=`\n ${A.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:f,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,m.Jr)({pagination:n.findAllFuels.pagination})),this.store.dispatch((0,i.fQ)({fuels:n.findAllFuels.fuels}))}))}getFuelById(o){return this._apollo.query({query:$,variables:{findFuelByIdId:o},errorPolicy:"all"}).pipe((0,d.b)(({errors:e,data:r})=>{if(e){let a="";e.forEach(l=>a+=`\n ${l.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,i.no)({fuel:r.findFuelById.fuel}))}))}updateFuel(o){return this.store.select(v.zt).pipe((0,p.q)(1),(0,u.w)(e=>this._apollo.mutate({mutation:F,variables:{updateFuelInput:o},errorPolicy:"all"}).pipe((0,d.b)(({errors:r,data:a})=>{if(r){let n="";r.forEach(f=>n+=`\n ${f.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:n,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(e);l[e.findIndex(n=>n.id===o.id)]=a.updateFuel.fuel,this.store.dispatch((0,i.fQ)({fuels:l}))}))))}updateFuelStatus(o){return this.store.select(v.zt).pipe((0,p.q)(1),(0,u.w)(e=>this._apollo.mutate({mutation:P,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,d.b)(({errors:r})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=structuredClone(e);a[e.findIndex(t=>t.id===o.id)].active=o.active,this.store.dispatch((0,i.fQ)({fuels:a}))}))))}removeFuel(o){return this.store.select(v.zt).pipe((0,p.q)(1),(0,u.w)(e=>this._apollo.mutate({mutation:S,variables:{removeFuelId:o},errorPolicy:"all"}).pipe((0,d.b)(({errors:r})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=structuredClone(e),l=e.findIndex(t=>t.id===o);a.splice(l,1),this.store.dispatch((0,i.fQ)({fuels:a}))}))))}static#e=this.\u0275fac=function(e){return new(e||g)(E.LFG(c._M),E.LFG(B.ux),E.LFG(b.yh))};static#t=this.\u0275prov=E.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},37714:(T,y,s)=>{s.d(y,{P:()=>d});var p=s(19212),u=s(52738);let d=(()=>{class i{constructor(v){this._serviceTypesService=v}resolve(v,c){return this._serviceTypesService.getServiceTypes()}static#e=this.\u0275fac=function(c){return new(c||i)(p.LFG(u.k))};static#t=this.\u0275prov=p.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},16650:(T,y,s)=>{s.d(y,{Fr:()=>i});var p=s(84221);const u=m=>m.serviceTypes,i=((0,p.P1)(u,m=>m.serviceType),(0,p.P1)(u,m=>m.serviceTypes))},52738:(T,y,s)=>{s.d(y,{k:()=>U});var p=s(48180),u=s(94664),d=s(99397),i=s(73565),m=s(97214),v=s(16650),c=s(50967);const I=c.Ps`
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
`,F=c.Ps`
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
`,P=c.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateServiceTypeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,S=c.Ps`
    mutation RemoveServiceType($removeServiceTypeId: String!) {
        removeServiceType(id: $removeServiceTypeId) {
            ok
            message
        }
    }
`,C=c.Ps`
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
`,$=c.Ps`
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
`;var h=s(42090),E=s(19212),B=s(22939),b=s(84221);let U=(()=>{class g{constructor(o,e,r){this.apolloProvider=o,this._snackBar=e,this.store=r,this._apollo=this.apolloProvider.use("BALANC")}createServiceType(o){return this.store.select(v.Fr).pipe((0,p.q)(1),(0,u.w)(e=>this._apollo.mutate({mutation:I,variables:{createServiceTypeInput:o},errorPolicy:"all"}).pipe((0,d.b)(({errors:r,data:a})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(e);l.push(a.createServiceType.serviceType),this.store.dispatch((0,i.jn)({serviceTypes:l}))}))))}getServiceTypes(o=1,e=20,r="code",a="asc",l=null){return this._apollo.query({query:C,errorPolicy:"all",variables:{offset:e*(o-1),limit:e,sort:r,order:a,search:l}}).pipe((0,d.b)(({errors:t,data:n})=>{if(t){let f="";t.forEach(A=>f+=`\n ${A.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:f,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,m.Jr)({pagination:n.findAllServiceTypes.pagination})),this.store.dispatch((0,i.jn)({serviceTypes:n.findAllServiceTypes.serviceTypes}))}))}getServiceTypeById(o){return this._apollo.query({query:$,variables:{findServiceTypeByIdId:o},errorPolicy:"all"}).pipe((0,d.b)(({errors:e,data:r})=>{if(e){let a="";e.forEach(l=>a+=`\n ${l.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,i.oM)({serviceType:r.findServiceTypeById.serviceType}))}))}updateServiceType(o){return this.store.select(v.Fr).pipe((0,p.q)(1),(0,u.w)(e=>this._apollo.mutate({mutation:F,variables:{updateServiceTypeInput:o},errorPolicy:"all"}).pipe((0,d.b)(({errors:r,data:a})=>{if(r){let n="";r.forEach(f=>n+=`\n ${f.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:n,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(e);l[e.findIndex(n=>n.id===o.id)]=a.updateServiceType.serviceType,this.store.dispatch((0,i.jn)({serviceTypes:l}))}))))}updateServiceTypeStatus(o){return this.store.select(v.Fr).pipe((0,p.q)(1),(0,u.w)(e=>this._apollo.mutate({mutation:P,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,d.b)(({errors:r})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=structuredClone(e);a[e.findIndex(t=>t.id===o.id)].active=o.active,this.store.dispatch((0,i.jn)({serviceTypes:a}))}))))}removeServiceType(o){return this.store.select(v.Fr).pipe((0,p.q)(1),(0,u.w)(e=>this._apollo.mutate({mutation:S,variables:{removeServiceTypeId:o},errorPolicy:"all"}).pipe((0,d.b)(({errors:r})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=structuredClone(e),l=e.findIndex(t=>t.id===o);a.splice(l,1),this.store.dispatch((0,i.jn)({serviceTypes:a}))}))))}static#e=this.\u0275fac=function(e){return new(e||g)(E.LFG(c._M),E.LFG(B.ux),E.LFG(b.yh))};static#t=this.\u0275prov=E.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()}}]);