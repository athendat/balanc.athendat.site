"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[1431],{47399:(E,y,t)=>{t.d(y,{T:()=>d,l:()=>c});var p=t(54438),r=t(36596);const c=(o,g)=>(0,p.WQX)(r.m).getBrands(),d=(o,g)=>(0,p.WQX)(r.m).findActiveBrands()},67943:(E,y,t)=>{t.d(y,{DC:()=>d});var p=t(59640);const r=o=>o.brands,d=((0,p.Mz)(r,o=>o.brand),(0,p.Mz)(r,o=>o.brands))},36596:(E,y,t)=>{t.d(y,{m:()=>B});var p=t(54438),r=t(73512),c=t(96697),d=t(25558),o=t(88141),g=t(59640),v=t(17022),M=t(98216),I=t(67943);const P=r.J1`
    mutation CreateBrand($createBrandInput: CreateBrandInput!) {
        createBrand(createBrandInput: $createBrandInput) {

            ok
            message

            brand {
                id
                active
                name
                description
                logo
            }

        }
    }
`,A=r.J1`
    mutation UpdateBrand($updateBrandInput: UpdateBrandInput!) {
        updateBrand(updateBrandInput: $updateBrandInput) {
            ok
            message

            brand {
                id
                active
                name
                description
                logo
            }
        }
    }
`,C=r.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateBrandStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,U=r.J1`
    mutation RemoveBrand($removeBrandId: String!) {
        removeBrand(id: $removeBrandId) {
            ok
            message
        }
    }
`,T=r.J1`
    query FindAllBrands($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllBrands(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            brands {
                id
                active
                name
                description
                slug
            }
        }
    }
`,O=r.J1`
    query FindActiveBrands($search: String!, $size: Int!) {
        findActiveBrands(search: $search, size: $size) {
            ok
            message

            brands {
                id
                name
                slug
            }
        }
    }
`,D=r.J1`
    query FindBrandById($findBrandByIdId: String!) {
        findBrandById(id: $findBrandByIdId) {
            ok
            message

            brand {
                id
                active
                name
                description
                slug
                logo
            }
        }
    }
`;let B=(()=>{class ${constructor(){this.apolloProvider=(0,p.WQX)(r.Ic),this.store=(0,p.WQX)(g.il),this._apollo=this.apolloProvider.use("BALANC")}createBrand(l){return this.store.select(I.DC).pipe((0,c.s)(1),(0,d.n)(e=>this._apollo.mutate({mutation:P,variables:{createBrandInput:l},errorPolicy:"all"}).pipe((0,o.M)(({data:a})=>{const n=structuredClone(e);n.push(a.createBrand.brand),this.store.dispatch((0,v.VO)({brands:n}))}))))}getBrands(l=0,e=20,a="code",n="asc",s=""){return this._apollo.query({query:T,errorPolicy:"all",variables:{page:l,size:e,sort:a,order:n,search:s}}).pipe((0,o.M)(({data:u})=>{this.store.dispatch((0,M.Bp)({pagination:u.findAllBrands.pagination})),this.store.dispatch((0,v.VO)({brands:u.findAllBrands.brands}))}))}findActiveBrands(l="",e=50){return this._apollo.query({query:O,errorPolicy:"all",variables:{search:l,size:e}}).pipe((0,o.M)(({data:a})=>{this.store.dispatch((0,v.VO)({brands:a.findActiveBrands.brands}))}))}getBrandById(l){return this._apollo.query({query:D,variables:{findBrandByIdId:l},errorPolicy:"all"}).pipe((0,o.M)(({data:e})=>{this.store.dispatch((0,v.aA)({brand:e.findBrandById.brand}))}))}updateBrand(l){return this.store.select(I.DC).pipe((0,c.s)(1),(0,d.n)(e=>this._apollo.mutate({mutation:A,variables:{updateBrandInput:l},errorPolicy:"all"}).pipe((0,o.M)(({data:a})=>{const n=structuredClone(e);n[e.findIndex(u=>u.id===l.id)]=a.updateBrand.brand,this.store.dispatch((0,v.VO)({brands:n}))}))))}updateBrandStatus(l){return this.store.select(I.DC).pipe((0,c.s)(1),(0,d.n)(e=>this._apollo.mutate({mutation:C,variables:{updateEntityStatusInput:l},errorPolicy:"all"}).pipe((0,o.M)(()=>{const a=structuredClone(e);a[e.findIndex(s=>s.id===l.id)].active=l.active,this.store.dispatch((0,v.VO)({brands:a}))}))))}removeBrand(l){return this.store.select(I.DC).pipe((0,c.s)(1),(0,d.n)(e=>this._apollo.mutate({mutation:U,variables:{removeBrandId:l},errorPolicy:"all"}).pipe((0,o.M)(({})=>{const n=structuredClone(e),s=e.findIndex(u=>u.id===l);n.splice(s,1),this.store.dispatch((0,v.VO)({brands:n}))}))))}static#t=this.\u0275fac=function(e){return new(e||$)};static#e=this.\u0275prov=p.jDH({token:$,factory:$.\u0275fac,providedIn:"root"})}return $})()},57981:(E,y,t)=>{t.d(y,{d:()=>c});var p=t(54438),r=t(90362);const c=(d,o)=>(0,p.WQX)(r.y).getMultipliers()},98929:(E,y,t)=>{t.d(y,{DC:()=>d});var p=t(59640);const r=o=>o.multipliers,d=((0,p.Mz)(r,o=>o.multiplier),(0,p.Mz)(r,o=>o.multipliers))},90362:(E,y,t)=>{t.d(y,{y:()=>$});var p=t(96697),r=t(25558),c=t(88141),d=t(64916),o=t(98216),g=t(98929),v=t(73512);const M=v.J1`
    mutation CreateMultiplier($createMultiplierInput: CreateMultiplierInput!) {
        createMultiplier(createMultiplierInput: $createMultiplierInput) {

            ok
            message

            multiplier {
                id
                active
                value
            }

        }
    }
`,I=v.J1`
    mutation UpdateMultiplier($updateMultiplierInput: UpdateMultiplierInput!) {
        updateMultiplier(updateMultiplierInput: $updateMultiplierInput) {
            ok
            message

            multiplier {
                id
                active
                value
            }
        }
    }
`,P=v.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateMultiplierStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,A=v.J1`
    mutation RemoveMultiplier($removeMultiplierId: String!) {
        removeMultiplier(id: $removeMultiplierId) {
            ok
            message
        }
    }
`,C=v.J1`
    query FindAllMultipliers($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllMultipliers(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            multipliers {
                id
                active
                value
            }
        }
    }
`,U=v.J1`
    query FindMultiplierById($findMultiplierByIdId: String!) {
        findMultiplierById(id: $findMultiplierByIdId) {
            ok
            message

            multiplier {
                id
                active
                value
            }
        }
    }
`;var T=t(94794),O=t(54438),D=t(95416),B=t(59640);let $=(()=>{class h{constructor(e,a,n){this.apolloProvider=e,this._snackBar=a,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}createMultiplier(e){return this.store.select(g.DC).pipe((0,p.s)(1),(0,r.n)(a=>this._apollo.mutate({mutation:M,variables:{createMultiplierInput:e},errorPolicy:"all"}).pipe((0,c.M)(({errors:n,data:s})=>{if(n){let i="";n.forEach(m=>i+=`\n ${m.message}.`),this._snackBar.openFromComponent(T.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const u=structuredClone(a);u.push(s.createMultiplier.multiplier),this.store.dispatch((0,d.rd)({multipliers:u}))}))))}getMultipliers(e=1,a=20,n="code",s="asc",u=""){return this._apollo.query({query:C,errorPolicy:"all",variables:{offset:a*(e-1),limit:a,sort:n,order:s,search:u}}).pipe((0,c.M)(({errors:i,data:m})=>{if(i){let f="";i.forEach(S=>f+=`\n ${S.message}.`),this._snackBar.openFromComponent(T.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:f,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,o.Bp)({pagination:m.findAllMultipliers.pagination})),this.store.dispatch((0,d.rd)({multipliers:m.findAllMultipliers.multipliers}))}))}getMultiplierById(e){return this._apollo.query({query:U,variables:{findMultiplierByIdId:e},errorPolicy:"all"}).pipe((0,c.M)(({errors:a,data:n})=>{if(a){let s="";a.forEach(u=>s+=`\n ${u.message}.`),this._snackBar.openFromComponent(T.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,d.Up)({multiplier:n.findMultiplierById.multiplier}))}))}updateMultiplier(e){return this.store.select(g.DC).pipe((0,p.s)(1),(0,r.n)(a=>this._apollo.mutate({mutation:I,variables:{updateMultiplierInput:e},errorPolicy:"all"}).pipe((0,c.M)(({errors:n,data:s})=>{if(n){let m="";n.forEach(f=>m+=`\n ${f.message}.`),this._snackBar.openFromComponent(T.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const u=structuredClone(a);u[a.findIndex(m=>m.id===e.id)]=s.updateMultiplier.multiplier,this.store.dispatch((0,d.rd)({multipliers:u}))}))))}updateMultiplierStatus(e){return this.store.select(g.DC).pipe((0,p.s)(1),(0,r.n)(a=>this._apollo.mutate({mutation:P,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,c.M)(({errors:n})=>{if(n){let i="";n.forEach(m=>i+=`\n ${m.message}.`),this._snackBar.openFromComponent(T.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=structuredClone(a);s[a.findIndex(i=>i.id===e.id)].active=e.active,this.store.dispatch((0,d.rd)({multipliers:s}))}))))}removeMultiplier(e){return this.store.select(g.DC).pipe((0,p.s)(1),(0,r.n)(a=>this._apollo.mutate({mutation:A,variables:{removeMultiplierId:e},errorPolicy:"all"}).pipe((0,c.M)(({errors:n})=>{if(n){let i="";n.forEach(m=>i+=`\n ${m.message}.`),this._snackBar.openFromComponent(T.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=structuredClone(a),u=a.findIndex(i=>i.id===e);s.splice(u,1),this.store.dispatch((0,d.rd)({multipliers:s}))}))))}static#t=this.\u0275fac=function(a){return new(a||h)(O.KVO(v.Ic),O.KVO(D.UG),O.KVO(B.il))};static#e=this.\u0275prov=O.jDH({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},23285:(E,y,t)=>{t.d(y,{h:()=>c});var p=t(54438),r=t(52777);const c=(d,o)=>(0,p.WQX)(r.k).getOperationTypes()},94425:(E,y,t)=>{t.d(y,{nK:()=>d});var p=t(59640);const r=o=>o.operationTypes,d=((0,p.Mz)(r,o=>o.operationType),(0,p.Mz)(r,o=>o.operationTypes))},52777:(E,y,t)=>{t.d(y,{k:()=>D});var p=t(54438),r=t(96697),c=t(25558),d=t(88141),o=t(73512),g=t(59640),v=t(98216),M=t(7692),I=t(94425);const P=o.J1`
   query FindAllOperationTypes($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllOperationTypes(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            operationTypes {
                id
                active
                name
            }
        }
    }
`,A=o.J1`
    query FindOperationTypeById($findOperationTypeById: String!) {
        findOperationTypeById(id: $findOperationTypeById) {
            ok
            message

            operationType {
                id
                active
                name
            }
        }
    }
`,C=o.J1`
    mutation CreateOperationType($createOperationTypeInput: CreateOperationTypeInput!) {
        createOperationType(createOperationTypeInput: $createOperationTypeInput) {
            ok
            message

            operationType {
                id
                active
                name
            }
        }
    }
`,U=o.J1`
    mutation UpdateOperationType($updateOperationTypeInput: UpdateOperationTypeInput!) {
        updateOperationType(updateOperationTypeInput: $updateOperationTypeInput) {
            ok
            message

            operationType {
                id
                active
                name
            }
        }
    }
`,T=o.J1`
    mutation RemoveOperationType($removeOperationTypeId: String!) {
        removeOperationType(id: $removeOperationTypeId) {
            ok
            message
        }
    }
`,O=o.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateOperationTypeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;let D=(()=>{class B{constructor(){this.apolloProvider=(0,p.WQX)(o.Ic),this.store=(0,p.WQX)(g.il),this._apollo=this.apolloProvider.use("BALANC")}createOperationType(h){return this.store.select(I.nK).pipe((0,r.s)(1),(0,c.n)(l=>this._apollo.mutate({mutation:C,variables:{createOperationTypeInput:h},errorPolicy:"all"}).pipe((0,d.M)(({data:e})=>{const a=structuredClone(l);a.push(e.createOperationType.operationType),this.store.dispatch((0,M.ZO)({operationTypes:a}))}))))}getOperationTypes(h=1,l=50,e="name",a="asc",n=""){return this._apollo.query({query:P,errorPolicy:"all",variables:{offset:l*(h-1),limit:l,sort:e,order:a,search:n}}).pipe((0,d.M)(({data:s})=>{this.store.dispatch((0,M.ZO)({operationTypes:s.findAllOperationTypes.operationTypes})),this.store.dispatch((0,v.Bp)({pagination:s.findAllOperationTypes.pagination}))}))}getOperationTypeById(h){return this._apollo.query({query:A,variables:{findOperationTypeByIdId:h},errorPolicy:"all"}).pipe((0,d.M)(({data:l})=>{this.store.dispatch((0,M.c5)({operationType:l.findOneOperationTypeById.operationType}))}))}updateOperationType(h){return this.store.select(I.nK).pipe((0,r.s)(1),(0,c.n)(l=>this._apollo.mutate({mutation:U,variables:{updateOperationTypeInput:h},errorPolicy:"all"}).pipe((0,d.M)(({data:e})=>{const a=structuredClone(l);a[l.findIndex(s=>s.id===h.id)]=e.updateOperationType.operationType,this.store.dispatch((0,M.ZO)({operationTypes:a}))}))))}updateOperationTypeStatus(h){return this.store.select(I.nK).pipe((0,r.s)(1),(0,c.n)(l=>this._apollo.mutate({mutation:O,variables:{updateEntityStatusInput:h},errorPolicy:"all"}).pipe((0,d.M)(({})=>{const a=structuredClone(l);a[l.findIndex(s=>s.id===h.id)].active=h.active,this.store.dispatch((0,M.ZO)({operationTypes:a}))}))))}removeOperationType(h){return this.store.select(I.nK).pipe((0,r.s)(1),(0,c.n)(l=>this._apollo.mutate({mutation:T,variables:{removeOperationTypeId:h},errorPolicy:"all"}).pipe((0,d.M)(()=>{const e=structuredClone(l),a=l.findIndex(n=>n.id===h);e.splice(a,1),this.store.dispatch((0,M.ZO)({operationTypes:e}))}))))}static#t=this.\u0275fac=function(l){return new(l||B)};static#e=this.\u0275prov=p.jDH({token:B,factory:B.\u0275fac,providedIn:"root"})}return B})()},59013:(E,y,t)=>{t.d(y,{v:()=>c});var p=t(54438),r=t(78693);const c=(d,o)=>(0,p.WQX)(r.q).getPaymentMethods()},84713:(E,y,t)=>{t.d(y,{xi:()=>d});var p=t(59640);const r=o=>o.paymentMethods,d=((0,p.Mz)(r,o=>o.paymentMethod),(0,p.Mz)(r,o=>o.paymentMethods))},78693:(E,y,t)=>{t.d(y,{q:()=>$});var p=t(54438),r=t(96697),c=t(25558),d=t(88141),o=t(73512),g=t(59640),v=t(98216),M=t(20604),I=t(84713),P=t(94794);const A=o.J1`
   query FindAllPaymentMethods($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllPaymentMethods(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            paymentMethods {
                id
                active
                name
                useGateway
            }
        }
    }
`,C=o.J1`
    query FindPaymentMethodById($findPaymentMethodById: String!) {
        findPaymentMethodById(id: $findPaymentMethodById) {
            ok
            message

            paymentMethod {
                id
                active
                name
                useGateway
            }
        }
    }
`,U=o.J1`
    mutation CreatePaymentMethod($createPaymentMethodInput: CreatePaymentMethodInput!) {
        createPaymentMethod(createPaymentMethodInput: $createPaymentMethodInput) {
            ok
            message

            paymentMethod {
                id
                active
                name
                useGateway
            }
        }
    }
`,T=o.J1`
    mutation UpdatePaymentMethod($updatePaymentMethodInput: UpdatePaymentMethodInput!) {
        updatePaymentMethod(updatePaymentMethodInput: $updatePaymentMethodInput) {
            ok
            message

            paymentMethod {
                id
                active
                name
                useGateway
            }
        }
    }
`,O=o.J1`
    mutation RemovePaymentMethod($removePaymentMethodId: String!) {
        removePaymentMethod(id: $removePaymentMethodId) {
            ok
            message
        }
    }
`,D=o.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updatePaymentMethodStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var B=t(95416);let $=(()=>{class h{constructor(e){this._snackBar=e,this.apolloProvider=(0,p.WQX)(o.Ic),this.store=(0,p.WQX)(g.il),this._apollo=this.apolloProvider.use("BALANC")}createPaymentMethod(e){return this.store.select(I.xi).pipe((0,r.s)(1),(0,c.n)(a=>this._apollo.mutate({mutation:U,variables:{createPaymentMethodInput:e},errorPolicy:"all"}).pipe((0,d.M)(({errors:n,data:s})=>{if(n){let i="";n.forEach(m=>i+=`\n ${m.message}.`),this._snackBar.openFromComponent(P.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const u=structuredClone(a);u.push(s.createPaymentMethod.paymentMethod),this.store.dispatch((0,M.f)({paymentMethods:u}))}))))}getPaymentMethods(e=0,a=25,n="name",s="asc",u=""){return this._apollo.query({query:A,errorPolicy:"all",variables:{page:e,size:a,sort:n,order:s,search:u}}).pipe((0,d.M)(({errors:i,data:m})=>{if(i){let f="";i.forEach(S=>f+=`\n ${S.message}.`),this._snackBar.openFromComponent(P.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:f,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,M.f)({paymentMethods:m.findAllPaymentMethods.paymentMethods})),this.store.dispatch((0,v.Bp)({pagination:m.findAllPaymentMethods.pagination}))}))}getPaymentMethodById(e){return this._apollo.query({query:C,variables:{findPaymentMethodByIdId:e},errorPolicy:"all"}).pipe((0,d.M)(({errors:a,data:n})=>{if(a){let s="";a.forEach(u=>s+=`\n ${u.message}.`),this._snackBar.openFromComponent(P.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,M.Ye)({paymentMethod:n.findPaymentMethodById.paymentMethod}))}))}updatePaymentMethod(e){return this.store.select(I.xi).pipe((0,r.s)(1),(0,c.n)(a=>this._apollo.mutate({mutation:T,variables:{updatePaymentMethodInput:e},errorPolicy:"all"}).pipe((0,d.M)(({errors:n,data:s})=>{if(n){let m="";n.forEach(f=>m+=`\n ${f.message}.`),this._snackBar.openFromComponent(P.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const u=structuredClone(a);u[a.findIndex(m=>m.id===e.id)]=s.updatePaymentMethod.paymentMethod,this.store.dispatch((0,M.f)({paymentMethods:u}))}))))}updatePaymentMethodStatus(e){return this.store.select(I.xi).pipe((0,r.s)(1),(0,c.n)(a=>this._apollo.mutate({mutation:D,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,d.M)(({errors:n})=>{if(n){let i="";n.forEach(m=>i+=`\n ${m.message}.`),this._snackBar.openFromComponent(P.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=structuredClone(a);s[a.findIndex(i=>i.id===e.id)].active=e.active,this.store.dispatch((0,M.f)({paymentMethods:s}))}))))}removePaymentMethod(e){return this.store.select(I.xi).pipe((0,r.s)(1),(0,c.n)(a=>this._apollo.mutate({mutation:O,variables:{removePaymentMethodId:e},errorPolicy:"all"}).pipe((0,d.M)(({errors:n})=>{if(n){let i="";n.forEach(m=>i+=`\n ${m.message}.`),this._snackBar.openFromComponent(P.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=structuredClone(a),u=a.findIndex(i=>i.id===e);s.splice(u,1),this.store.dispatch((0,M.f)({paymentMethods:s}))}))))}static#t=this.\u0275fac=function(a){return new(a||h)(p.KVO(B.UG))};static#e=this.\u0275prov=p.jDH({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()}}]);