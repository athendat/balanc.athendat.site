"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[6654],{99433:(U,S,s)=>{s.d(S,{w:()=>g});var f=s(54438),v=s(98300);const g=(d,y)=>(0,f.WQX)(v.d).getFuels()},56501:(U,S,s)=>{s.d(S,{UC:()=>d});var f=s(59640);const v=y=>y.fuels,d=((0,f.Mz)(v,y=>y.fuel),(0,f.Mz)(v,y=>y.fuels))},98300:(U,S,s)=>{s.d(S,{d:()=>x});var f=s(96697),v=s(25558),g=s(88141),d=s(31496),y=s(98216),C=s(56501),h=s(53473);const B=h.J1`
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
`,A=h.J1`
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
`,O=h.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateFuelStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,R=h.J1`
    mutation RemoveFuel($removeFuelId: String!) {
        removeFuel(id: $removeFuelId) {
            ok
            message
        }
    }
`,b=h.J1`
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
`,L=h.J1`
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
`;var E=s(94794),P=s(54438),$=s(95416),z=s(59640);let x=(()=>{class F{constructor(i,n,a){this.apolloProvider=i,this._snackBar=n,this.store=a,this._apollo=this.apolloProvider.use("BALANC")}createFuel(i){return this.store.select(C.UC).pipe((0,f.s)(1),(0,v.n)(n=>this._apollo.mutate({mutation:B,variables:{createFuelInput:i},errorPolicy:"all"}).pipe((0,g.M)(({errors:a,data:l})=>{if(a){let o="";a.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const c=structuredClone(n);c.push(l.createFuel.fuel),this.store.dispatch((0,d.IR)({fuels:c}))}))))}getFuels(i=1,n=20,a="code",l="asc",c=null){return this._apollo.query({query:b,errorPolicy:"all",variables:{offset:n*(i-1),limit:n,sort:a,order:l,search:c}}).pipe((0,g.M)(({errors:o,data:p})=>{if(o){let T="";o.forEach(M=>T+=`\n ${M.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:T,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,y.Bp)({pagination:p.findAllFuels.pagination})),this.store.dispatch((0,d.IR)({fuels:p.findAllFuels.fuels}))}))}getFuelById(i){return this._apollo.query({query:L,variables:{findFuelByIdId:i},errorPolicy:"all"}).pipe((0,g.M)(({errors:n,data:a})=>{if(n){let l="";n.forEach(c=>l+=`\n ${c.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,d.R3)({fuel:a.findFuelById.fuel}))}))}updateFuel(i){return this.store.select(C.UC).pipe((0,f.s)(1),(0,v.n)(n=>this._apollo.mutate({mutation:A,variables:{updateFuelInput:i},errorPolicy:"all"}).pipe((0,g.M)(({errors:a,data:l})=>{if(a){let p="";a.forEach(T=>p+=`\n ${T.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:p,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const c=structuredClone(n);c[n.findIndex(p=>p.id===i.id)]=l.updateFuel.fuel,this.store.dispatch((0,d.IR)({fuels:c}))}))))}updateFuelStatus(i){return this.store.select(C.UC).pipe((0,f.s)(1),(0,v.n)(n=>this._apollo.mutate({mutation:O,variables:{updateEntityStatusInput:i},errorPolicy:"all"}).pipe((0,g.M)(({errors:a})=>{if(a){let o="";a.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(n);l[n.findIndex(o=>o.id===i.id)].active=i.active,this.store.dispatch((0,d.IR)({fuels:l}))}))))}removeFuel(i){return this.store.select(C.UC).pipe((0,f.s)(1),(0,v.n)(n=>this._apollo.mutate({mutation:R,variables:{removeFuelId:i},errorPolicy:"all"}).pipe((0,g.M)(({errors:a})=>{if(a){let o="";a.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(n),c=n.findIndex(o=>o.id===i);l.splice(c,1),this.store.dispatch((0,d.IR)({fuels:l}))}))))}static#e=this.\u0275fac=function(n){return new(n||F)(P.KVO(h.Ic),P.KVO($.UG),P.KVO(z.il))};static#t=this.\u0275prov=P.jDH({token:F,factory:F.\u0275fac,providedIn:"root"})}return F})()},90225:(U,S,s)=>{s.d(S,{f:()=>g});var f=s(54438),v=s(86069);const g=(d,y)=>(0,f.WQX)(v.Q).getServiceTypes()},77581:(U,S,s)=>{s.d(S,{jr:()=>d});var f=s(59640);const v=y=>y.serviceTypes,d=((0,f.Mz)(v,y=>y.serviceType),(0,f.Mz)(v,y=>y.serviceTypes))},86069:(U,S,s)=>{s.d(S,{Q:()=>x});var f=s(96697),v=s(25558),g=s(88141),d=s(83888),y=s(98216),C=s(77581),h=s(53473);const B=h.J1`
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
`,A=h.J1`
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
`,O=h.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateServiceTypeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,R=h.J1`
    mutation RemoveServiceType($removeServiceTypeId: String!) {
        removeServiceType(id: $removeServiceTypeId) {
            ok
            message
        }
    }
`,b=h.J1`
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
`,L=h.J1`
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
`;var E=s(94794),P=s(54438),$=s(95416),z=s(59640);let x=(()=>{class F{constructor(i,n,a){this.apolloProvider=i,this._snackBar=n,this.store=a,this._apollo=this.apolloProvider.use("BALANC")}createServiceType(i){return this.store.select(C.jr).pipe((0,f.s)(1),(0,v.n)(n=>this._apollo.mutate({mutation:B,variables:{createServiceTypeInput:i},errorPolicy:"all"}).pipe((0,g.M)(({errors:a,data:l})=>{if(a){let o="";a.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const c=structuredClone(n);c.push(l.createServiceType.serviceType),this.store.dispatch((0,d.f0)({serviceTypes:c}))}))))}getServiceTypes(i=1,n=20,a="code",l="asc",c=null){return this._apollo.query({query:b,errorPolicy:"all",variables:{offset:n*(i-1),limit:n,sort:a,order:l,search:c}}).pipe((0,g.M)(({errors:o,data:p})=>{if(o){let T="";o.forEach(M=>T+=`\n ${M.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:T,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,y.Bp)({pagination:p.findAllServiceTypes.pagination})),this.store.dispatch((0,d.f0)({serviceTypes:p.findAllServiceTypes.serviceTypes}))}))}getServiceTypeById(i){return this._apollo.query({query:L,variables:{findServiceTypeByIdId:i},errorPolicy:"all"}).pipe((0,g.M)(({errors:n,data:a})=>{if(n){let l="";n.forEach(c=>l+=`\n ${c.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,d.KL)({serviceType:a.findServiceTypeById.serviceType}))}))}updateServiceType(i){return this.store.select(C.jr).pipe((0,f.s)(1),(0,v.n)(n=>this._apollo.mutate({mutation:A,variables:{updateServiceTypeInput:i},errorPolicy:"all"}).pipe((0,g.M)(({errors:a,data:l})=>{if(a){let p="";a.forEach(T=>p+=`\n ${T.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:p,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const c=structuredClone(n);c[n.findIndex(p=>p.id===i.id)]=l.updateServiceType.serviceType,this.store.dispatch((0,d.f0)({serviceTypes:c}))}))))}updateServiceTypeStatus(i){return this.store.select(C.jr).pipe((0,f.s)(1),(0,v.n)(n=>this._apollo.mutate({mutation:O,variables:{updateEntityStatusInput:i},errorPolicy:"all"}).pipe((0,g.M)(({errors:a})=>{if(a){let o="";a.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(n);l[n.findIndex(o=>o.id===i.id)].active=i.active,this.store.dispatch((0,d.f0)({serviceTypes:l}))}))))}removeServiceType(i){return this.store.select(C.jr).pipe((0,f.s)(1),(0,v.n)(n=>this._apollo.mutate({mutation:R,variables:{removeServiceTypeId:i},errorPolicy:"all"}).pipe((0,g.M)(({errors:a})=>{if(a){let o="";a.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(E.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(n),c=n.findIndex(o=>o.id===i);l.splice(c,1),this.store.dispatch((0,d.f0)({serviceTypes:l}))}))))}static#e=this.\u0275fac=function(n){return new(n||F)(P.KVO(h.Ic),P.KVO($.UG),P.KVO(z.il))};static#t=this.\u0275prov=P.jDH({token:F,factory:F.\u0275fac,providedIn:"root"})}return F})()},67398:(U,S,s)=>{s.d(S,{A:()=>Ae});const v=function f(e,t){for(var r=-1,m=null==e?0:e.length,u=Array(m);++r<m;)u[r]=t(e[r],r,e);return u};var g=s(71252),d=s(43744),y=s(45281),C=s(42661);const A=function B(e){return"symbol"==typeof e||(0,C.A)(e)&&"[object Symbol]"==(0,y.A)(e)};var O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,R=/^\w*$/;var E=s(72291);function $(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var m=arguments,u=t?t.apply(this,m):m[0],I=r.cache;if(I.has(u))return I.get(u);var D=e.apply(this,m);return r.cache=I.set(u,D)||I,D};return r.cache=new($.Cache||E.A),r}$.Cache=E.A;const z=$;var i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g;const l=function F(e){var t=z(e,function(m){return 500===r.size&&r.clear(),m}),r=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,function(r,m,u,I){t.push(u?I.replace(n,"$1"):m||r)}),t});var c=s(6944),p=c.A?c.A.prototype:void 0,T=p?p.toString:void 0;const W=function M(e){if("string"==typeof e)return e;if((0,d.A)(e))return v(e,M)+"";if(A(e))return T?T.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},k=function _(e){return null==e?"":W(e)},V=function Q(e,t){return(0,d.A)(e)?e:function b(e,t){if((0,d.A)(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!A(e))||R.test(e)||!O.test(e)||null!=t&&e in Object(t)}(e,t)?[e]:l(k(e))},G=function j(e){if("string"==typeof e||A(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},ne=function se(e,t){return t.length<2?e:function w(e,t){for(var r=0,m=(t=V(t,e)).length;null!=e&&r<m;)e=e[G(t[r++])];return r&&r==m?e:void 0}(e,function ee(e,t,r){var m=-1,u=e.length;t<0&&(t=-t>u?0:u+t),(r=r>u?u:r)<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var I=Array(u);++m<u;)I[m]=e[m+t];return I}(t,0,-1))},re=function oe(e,t){return t=V(t,e),null==(e=ne(e,t))||delete e[G(function X(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}(t))]};var ie=s(77517),ae=s(74294);const ce=function le(e){return(0,ae.A)(e)?void 0:e};var pe=s(70563),ue=s(66513),J=c.A?c.A.isConcatSpreadable:void 0;const me=function de(e){return(0,d.A)(e)||(0,ue.A)(e)||!!(J&&e&&e[J])},ve=function N(e,t,r,m,u){var I=-1,D=e.length;for(r||(r=me),u||(u=[]);++I<D;){var K=e[I];t>0&&r(K)?t>1?N(K,t-1,r,m,u):(0,pe.A)(u,K):m||(u[u.length]=K)}return u},ge=function fe(e){return null!=e&&e.length?ve(e,1):[]};var ye=s(90178),he=s(45974);var Te=s(57372);const Ae=function Ie(e){return(0,he.A)((0,ye.A)(e,void 0,ge),e+"")}(function(e,t){var r={};if(null==e)return r;var m=!1;t=v(t,function(I){return I=V(I,e),m||(m=I.length>1),I}),(0,ie.A)(e,(0,Te.A)(e),r),m&&(r=(0,g.A)(r,7,ce));for(var u=t.length;u--;)re(r,t[u]);return r})}}]);