(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2076],{25903:(W,I,t)=>{"use strict";function n(i,o){return i>=1e6?(i/1e6).toFixed(o)+"M":i>=1e3?(i/1e3).toFixed(o)+"K":i.toFixed(o)}t.d(I,{s:()=>n})},36646:(W,I,t)=>{"use strict";t.d(I,{AZ:()=>e,FD:()=>a,iL:()=>p});var n=t(54438),i=t(72797),o=t(27468);const e=(M,P)=>(0,n.WQX)(i.h).findAllCustomers(),p=(M,P)=>(0,n.WQX)(i.h).findActiveCustomers(),a=(M,P)=>{const y=(0,n.WQX)(i.h),m=M.params.customerId;return m&&"new"!==m?(0,o.p)([y.findCustomerById(m),y.getDomains()]):y.getDomains()}},43791:(W,I,t)=>{"use strict";t.d(I,{P:()=>V});var n=t(96354),i=t(88141),o=t(9348),e=t(98216),p=t(53473);const a=p.J1`
    mutation CreateCharge($createChargeInput: CreateChargeInput!) {
        createCharge(createChargeInput: $createChargeInput) {
            ok,
            message,

            charge {
                id,
                merchantId,
                name,
                description,
                salary,
                active,
            }
        }
    }
`,M=p.J1`
    query FindAllCharges($page: Int, $size: Int! $sort: String, $order: Order, $search: String ) {
        findAllCharges(page: $page, size: $size, sort: $sort, order: $order, search: $search ) {
            ok,
            message,

            pagination {
                length,
                size,
                page,
                lastPage,
                startIndex,
                endIndex
            },

            charges {
                id,
                merchantId,
                name,
                description,
                salary,
                active
            }
        }
    }
`,P=p.J1`
    query FindAllActiveCharges {
        findAllActiveCharges {
            id,
            name
        }
    }
`,y=p.J1`
    query FindChargeById($chargeId: String!) {
        findChargeById(id: $chargeId ) {
            ok,
            message,

            charge {
                id,
                merchantId,
                name,
                description,
                salary,
                active
            }
        }
    }
`,m=p.J1`
    mutation UpdateCharge($updateChargeInput: UpdateChargeInput!) {
        updateCharge(updateChargeInput: $updateChargeInput) {
            ok,
            message,

            charge {
                id,
                merchantId,
                name,
                description,
                salary,
                active
            }
        }
    }
`,S=p.J1`
    mutation UpdateChargeStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateChargeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,u=p.J1`
    mutation RemoveCharge($id: String!) {
        removeCharge(id: $id) {
            ok,
            message,

            pagination {
                length,
                size,
                page,
                lastPage,
                startIndex,
                endIndex
            },

            charges {
                id,
                merchantId,
                name,
                description,
                salary,
                active
            }
        }
    }
`;var c=t(54438),L=t(59640);let V=(()=>{class K{constructor(D,d){this.apolloProvider=D,this.store=d,this._apollo=this.apolloProvider.use("BALANC")}createCharge(D){return this._apollo.mutate({mutation:a,variables:{createChargeInput:D},errorPolicy:"all"}).pipe((0,n.T)(({data:d})=>d?d.createCharge:null),(0,i.M)(d=>{d&&(this.store.dispatch((0,o.Tn)({charge:d.charge})),this.store.dispatch((0,o.l1)({charge:d.charge})))}))}findAllCharges(D=0,d=10,U="name",A="desc",f=null){return this._apollo.query({query:M,variables:{page:D,size:d,sort:U,order:A,search:f},errorPolicy:"all"}).pipe((0,n.T)(({data:s})=>s?s.findAllCharges:null),(0,i.M)(s=>{s&&(this.store.dispatch((0,o._k)({charges:s.charges})),this.store.dispatch((0,e.Bp)({pagination:s.pagination})))}))}findAllActiveCharges(){return this._apollo.query({query:P,errorPolicy:"all"}).pipe((0,n.T)(({data:D})=>D?D.findAllActiveCharges:null),(0,i.M)(D=>{D&&this.store.dispatch((0,o._k)({charges:D}))}))}findChargeById(D){return this._apollo.query({query:y,variables:{chargeId:D},errorPolicy:"all"}).pipe((0,n.T)(({data:d})=>d?d.findChargeById:null),(0,i.M)(d=>{d&&this.store.dispatch((0,o.l1)({charge:d.charge}))}))}updateCharge(D){return this._apollo.mutate({mutation:m,variables:{updateChargeInput:D},errorPolicy:"all"}).pipe((0,n.T)(({data:d})=>d?d.updateCharge:null),(0,i.M)(d=>{d&&(this.store.dispatch((0,o.C_)({charge:d.charge})),this.store.dispatch((0,o.l1)({charge:d.charge})))}))}updateChargeStatus(D){return this._apollo.mutate({mutation:S,variables:{updateEntityStatusInput:D},errorPolicy:"all"}).pipe((0,n.T)(({data:d})=>d?d.updateChargeStatus:null),(0,i.M)(d=>{d&&this.store.dispatch((0,o.sg)(D))}))}removeCharge(D,d=0,U=10,A="name",f="desc",s=null){return this._apollo.mutate({mutation:u,variables:{id:D,page:d,size:U,sort:A,order:f,search:s},errorPolicy:"all"}).pipe((0,n.T)(({data:h})=>h?h.removeCharge:null),(0,i.M)(h=>{h&&(this.store.dispatch((0,o.LP)({id:D})),this.store.dispatch((0,e.Bp)({pagination:h.pagination})))}))}static#t=this.\u0275fac=function(d){return new(d||K)(c.KVO(p.Ic),c.KVO(L.il))};static#e=this.\u0275prov=c.jDH({token:K,factory:K.\u0275fac,providedIn:"root"})}return K})()},24121:(W,I,t)=>{"use strict";t.d(I,{$f:()=>e,FH:()=>p,y6:()=>o});var n=t(54438),i=t(49098);const o=(a,M)=>{const P=a.params.locationId;return P&&"new"!==P?(0,n.WQX)(i.O).getLocationById(P):{}},e=(a,M)=>(0,n.WQX)(i.O).getLocations(),p=(a,M)=>(0,n.WQX)(i.O).findActiveLocations()},90377:(W,I,t)=>{"use strict";t.d(I,{K:()=>o,_:()=>e});var n=t(54438),i=t(98872);const o=(p,a)=>(0,n.WQX)(i.n).getBanks(),e=(p,a)=>(0,n.WQX)(i.n).findActiveBanks()},79451:(W,I,t)=>{"use strict";t.d(I,{V7:()=>o});var n=t(54438),i=t(93868);const o=(a,M)=>(0,n.WQX)(i.M).getRootCategoryNodes()},86779:(W,I,t)=>{"use strict";t.d(I,{I:()=>o,g:()=>e});var n=t(54438),i=t(30242);const o=(p,a)=>(0,n.WQX)(i.L).findAllPaymentGateways(),e=(p,a)=>(0,n.WQX)(i.L).findAllActivePaymentGateways()},70672:(W,I,t)=>{"use strict";t.d(I,{Z:()=>n,h:()=>i});class n{}var i=function(o){return o.none="none",o.oauth="oauth",o.basic="basic",o}(i||{})},7561:(W,I,t)=>{"use strict";t.d(I,{Q:()=>o});var n=t(54438),i=t(86952);const o=(e,p)=>(0,n.WQX)(i.v).getVouchers()},21781:(W,I,t)=>{"use strict";t.d(I,{gQ:()=>e});var n=t(59640);const i=p=>p.vouchers,e=((0,n.Mz)(i,p=>p.voucher),(0,n.Mz)(i,p=>p.vouchers))},86952:(W,I,t)=>{"use strict";t.d(I,{v:()=>D});var n=t(96697),i=t(25558),o=t(88141),e=t(98216),p=t(48392),a=t(21781),M=t(94794),P=t(53473);const y=P.J1`
   query FindAllVouchers($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllVouchers(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            vouchers {
                id
                active
                name
            }
        }
    }
`,m=P.J1`
    query FindVoucherById($findVoucherById: String!) {
        findVoucherById(id: $findVoucherById) {
            ok
            message

            voucher {
                id
                active
                name
            }
        }
    }
`,S=P.J1`
    mutation CreateVoucher($createVoucherInput: CreateVoucherInput!) {
        createVoucher(createVoucherInput: $createVoucherInput) {
            ok
            message

            voucher {
                id
                active
                name
            }
        }
    }
`,u=P.J1`
    mutation UpdateVoucher($updateVoucherInput: UpdateVoucherInput!) {
        updateVoucher(updateVoucherInput: $updateVoucherInput) {
            ok
            message

            voucher {
                id
                active
                name
            }
        }
    }
`,c=P.J1`
    mutation RemoveVoucher($removeVoucherId: String!) {
        removeVoucher(id: $removeVoucherId) {
            ok
            message
        }
    }
`,L=P.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVoucherStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var V=t(54438),K=t(95416),Y=t(59640);let D=(()=>{class d{constructor(A,f,s){this.apolloProvider=A,this._snackBar=f,this.store=s,this._apollo=this.apolloProvider.use("BALANC")}createVoucher(A){return this.store.select(a.gQ).pipe((0,n.s)(1),(0,i.n)(f=>this._apollo.mutate({mutation:S,variables:{createVoucherInput:A},errorPolicy:"all"}).pipe((0,o.M)(({errors:s,data:h})=>{if(s){let x="";s.forEach(v=>x+=`\n ${v.message}.`),this._snackBar.openFromComponent(M.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:x,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const B=structuredClone(f);B.push(h.createVoucher.voucher),this.store.dispatch((0,p._6)({vouchers:B}))}))))}getVouchers(){return this._apollo.query({query:y,errorPolicy:"all"}).pipe((0,o.M)(({errors:A,data:f})=>{if(A){let s="";A.forEach(h=>s+=`\n ${h.message}.`),this._snackBar.openFromComponent(M.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,p._6)({vouchers:f.findAllVouchers.vouchers})),this.store.dispatch((0,e.Bp)({pagination:f.findAllVouchers.pagination}))}))}getVoucherById(A){return this._apollo.query({query:m,variables:{findVoucherByIdId:A},errorPolicy:"all"}).pipe((0,o.M)(({errors:f,data:s})=>{if(f){let h="";f.forEach(B=>h+=`\n ${B.message}.`),this._snackBar.openFromComponent(M.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,p.FN)({voucher:s.findOneVoucherById.voucher}))}))}updateVoucher(A){return this.store.select(a.gQ).pipe((0,n.s)(1),(0,i.n)(f=>this._apollo.mutate({mutation:u,variables:{updateVoucherInput:A},errorPolicy:"all"}).pipe((0,o.M)(({errors:s,data:h})=>{if(s){let v="";s.forEach(_=>v+=`\n ${_.message}.`),this._snackBar.openFromComponent(M.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:v,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const B=structuredClone(f);B[f.findIndex(v=>v.id===A.id)]=h.updateVoucher.voucher,this.store.dispatch((0,p._6)({vouchers:B}))}))))}updateVoucherStatus(A){return this.store.select(a.gQ).pipe((0,n.s)(1),(0,i.n)(f=>this._apollo.mutate({mutation:L,variables:{updateEntityStatusInput:A},errorPolicy:"all"}).pipe((0,o.M)(({errors:s})=>{if(s){let x="";s.forEach(v=>x+=`\n ${v.message}.`),this._snackBar.openFromComponent(M.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:x,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const h=structuredClone(f);h[f.findIndex(x=>x.id===A.id)].active=A.active,this.store.dispatch((0,p._6)({vouchers:h}))}))))}removeVoucher(A){return this.store.select(a.gQ).pipe((0,n.s)(1),(0,i.n)(f=>this._apollo.mutate({mutation:c,variables:{removeVoucherId:A},errorPolicy:"all"}).pipe((0,o.M)(({errors:s})=>{if(s){let x="";s.forEach(v=>x+=`\n ${v.message}.`),this._snackBar.openFromComponent(M.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:x,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const h=structuredClone(f),B=f.findIndex(x=>x.id===A);h.splice(B,1),this.store.dispatch((0,p._6)({vouchers:h}))}))))}static#t=this.\u0275fac=function(f){return new(f||d)(V.KVO(P.Ic),V.KVO(K.UG),V.KVO(Y.il))};static#e=this.\u0275prov=V.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},72824:(W,I,t)=>{"use strict";t.d(I,{g:()=>i});var n=t(54438);let i=(()=>{class o{transform(p){if(p)switch(p){case"quarterly":return"Trimestral";case"annually":return"Anual";default:return"Mensual"}return""}static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275pipe=n.EJ8({name:"subscriptionTitle",type:o,pure:!0,standalone:!0})}return o})()},34343:(W,I,t)=>{"use strict";t.d(I,{Er:()=>p,PL:()=>e,sB:()=>o});var n=t(59640);const i=a=>a.subscriptions,o=(0,n.Mz)(i,a=>a.subscription),e=(0,n.Mz)(i,a=>a.subscriptions),p=(0,n.Mz)(i,a=>a.subscriptionCardsData)},10729:(W,I,t)=>{"use strict";t.d(I,{k:()=>y});var n=t(21413),i=t(99213),o=t(31849),e=t(54438),p=t(51188),a=t(59640);function M(m,S){if(1&m){const u=e.RV6();e.j41(0,"fuse-card",18),e.bIt("click",function(){const L=e.eBV(u).$implicit,V=e.XpG(2);return e.Njj(V.navigate(L.link))}),e.j41(1,"div",19)(2,"div",20),e.EFF(3),e.k0s(),e.j41(4,"div",21),e.EFF(5),e.k0s()()()}if(2&m){const u=S.$implicit;e.R7$(3),e.JRh(u.title),e.R7$(2),e.JRh(u.subtitle)}}function P(m,S){if(1&m){const u=e.RV6();e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e.bIt("click",function(){e.eBV(u);const L=e.XpG();return e.Njj(L.navigate("/desktop"))}),e.EFF(7,"Inicio"),e.k0s()(),e.j41(8,"div",4),e.nrm(9,"mat-icon",6),e.j41(10,"a",7),e.EFF(11),e.k0s()()(),e.j41(12,"div",8)(13,"a",9),e.nrm(14,"mat-icon",6),e.j41(15,"span",10),e.EFF(16,"Regresar"),e.k0s()()()(),e.j41(17,"div",11)(18,"div",12),e.EFF(19),e.k0s()()()(),e.j41(20,"div",13)(21,"div",14)(22,"div",15)(23,"div",16),e.Z7z(24,M,6,2,"fuse-card",17,e.fX1),e.k0s()()()()()}if(2&m){const u=e.XpG();e.R7$(9),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(2),e.JRh(u.fuseNavigation.title),e.R7$(3),e.Y8G("svgIcon","mat_solid:chevron_left"),e.R7$(5),e.SpI(" ",u.fuseNavigation.title," "),e.R7$(5),e.Dyx(u.fuseNavigation.children)}}let y=(()=>{class m{constructor(u,c,L){this._changeDetectorRef=u,this._router=c,this.store=L,this._unsubscribeAll=new n.B}ngOnInit(){}navigate(u){this._router.navigateByUrl(u)}static#t=this.\u0275fac=function(c){return new(c||m)(e.rXU(e.gRc),e.rXU(p.Ix),e.rXU(a.il))};static#e=this.\u0275cmp=e.VBU({type:m,selectors:[["ath-content-menu"]],standalone:!0,features:[e.aNF],decls:1,vars:1,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","py-3","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","cursor-pointer","text-primary-500","hover:underline",3,"click"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],["routerLink","/desktop",1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"flex-auto","p-6","pt-0","sm:pt-0","sm:p-10"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full"],[1,"grid","grid-flow-row","grid-cols-1","mt-8","sm:grid-cols-2","lg:grid-cols-4","gap-y-12","sm:gap-x-4"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md",3,"click"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight"],[1,"text-md","text-secondary"]],template:function(c,L){1&c&&e.DNE(0,P,26,4,"div",0),2&c&&e.vxM(0,L.fuseNavigation?0:-1)},dependencies:[i.m_,i.An,o.$],encapsulation:2,changeDetection:0})}return m})()},46812:(W,I,t)=>{"use strict";t.d(I,{H_:()=>e,dX:()=>n});var n=function(u){return u.pendiente="pendiente",u.parcial="parcial",u.pagada="pagada",u.cancelado="cancelado",u.fallido="fallido",u.expirado="expirado",u.devuelto="devuelto",u.dPendiente="devoluci\xf3n pendiente",u.dFallida="devoluci\xf3n fallida",u}(n||{}),e=function(u){return u.total="total",u.partial="partial",u}(e||{})},21607:(W,I,t)=>{"use strict";t.d(I,{At:()=>e,G0:()=>a,ih:()=>p,tz:()=>o});class o{constructor(S,u,c,L,V,K){this.productId=S,this.name=u,this.uom=c,this.price=L,this.quantity=V,this.depotId=K}}class e{constructor(S,u,c){this.assistanceId=S,this.price=u,this.quantity=c}}var p=function(m){return m.nueva="nueva",m.recibida="recibida",m.cobrada="cobrada",m.rechazada="rechazada",m.cancelada="cancelada",m.facturada="facturada",m.entregada="entregada",m}(p||{});class a{constructor(S,u,c,L){this.nueva=S,this.recibida=u,this.rechazada=c,this.cancelada=L}}},41791:(W,I,t)=>{"use strict";t.d(I,{Nh:()=>e,oy:()=>o});var n=t(59640);const i=a=>a.gModules,o=(0,n.Mz)(i,a=>a.module),e=(0,n.Mz)(i,a=>a.modules);(0,n.Mz)(i,a=>({}))},71411:(W,I,t)=>{"use strict";t.d(I,{Q:()=>o});var n=t(54438),i=t(25910);let o=(()=>{class e{constructor(a){this._ratesService=a}resolve(a,M){return this._ratesService.getRates()}static#t=this.\u0275fac=function(M){return new(M||e)(n.KVO(i.f))};static#e=this.\u0275prov=n.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},3899:(W,I,t)=>{"use strict";t.d(I,{o:()=>o});const o=(0,t(59640).Mz)(e=>e.rates,e=>e.rates)},25910:(W,I,t)=>{"use strict";t.d(I,{f:()=>d});var n=t(54438),i=t(96697),o=t(25558),e=t(88141),p=t(96354),a=t(53473),M=t(59640),P=t(98216),y=t(28610),m=t(3899);const S=a.J1`
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
`,u=a.J1`
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
`,c=a.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRateStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,L=a.J1`
    mutation RemoveRate($removeRateId: String!) {
        removeRate(id: $removeRateId) {
            ok
            message
        }
    }
`,V=a.J1`
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
`,K=a.J1`
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
`,Y=a.J1`
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
`,D=a.J1`
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
`;let d=(()=>{class U{constructor(){this.apolloProvider=(0,n.WQX)(a.Ic),this.store=(0,n.WQX)(M.il),this._apollo=this.apolloProvider.use("BALANC")}createRate(f){return this.store.select(m.o).pipe((0,i.s)(1),(0,o.n)(s=>this._apollo.mutate({mutation:S,variables:{createRateInput:f},errorPolicy:"all"}).pipe((0,e.M)(({data:h})=>{const B=structuredClone(s);B.push(h.createRate.rate),this.store.dispatch((0,y.CD)({rates:B}))}))))}getRates(f=0,s=10,h="name",B="asc",x=""){return this._apollo.query({query:V,errorPolicy:"all",variables:{page:f,size:s,sort:h,order:B,search:x}}).pipe((0,e.M)(({data:v})=>{this.store.dispatch((0,P.Bp)({pagination:v.findAllRates.pagination})),this.store.dispatch((0,y.CD)({rates:v.findAllRates.rates}))}))}findActiveByBaseId(f){return this._apollo.query({query:K,variables:{currencyBaseId:f},errorPolicy:"all"}).pipe((0,p.T)(({data:s})=>s?s.findActiveByBaseId:[]),(0,e.M)(s=>{s&&this.store.dispatch((0,y.CD)({rates:s}))}))}getActiveRateByBaseIdForAthendatPlatform(f){return this._apollo.query({query:Y,variables:{currencyBaseId:f},errorPolicy:"all"}).pipe((0,p.T)(({data:s})=>s?s.getActiveRateByBaseIdForAthendatPlatform:null),(0,e.M)(s=>{s&&this.store.dispatch((0,y.r$)({rate:s}))}))}getRateById(f){return this._apollo.query({query:D,variables:{findRateByIdId:f},errorPolicy:"all"}).pipe((0,e.M)(({data:s})=>{this.store.dispatch((0,y.r$)({rate:s.findRateById.rate}))}))}updateRate(f){return this.store.select(m.o).pipe((0,i.s)(1),(0,o.n)(s=>this._apollo.mutate({mutation:u,variables:{updateRateInput:f},errorPolicy:"all"}).pipe((0,e.M)(({data:h})=>{const B=structuredClone(s);B[s.findIndex(v=>v.id===f.id)]=h.updateRate.rate,this.store.dispatch((0,y.CD)({rates:B}))}))))}updateRateStatus(f){return this.store.select(m.o).pipe((0,i.s)(1),(0,o.n)(s=>this._apollo.mutate({mutation:c,variables:{updateEntityStatusInput:f},errorPolicy:"all"}).pipe((0,e.M)(({})=>{const B=structuredClone(s);B[s.findIndex(v=>v.id===f.id)].active=f.active,this.store.dispatch((0,y.CD)({rates:B}))}))))}removeRate(f){return this.store.select(m.o).pipe((0,i.s)(1),(0,o.n)(s=>this._apollo.mutate({mutation:L,variables:{removeRateId:f},errorPolicy:"all"}).pipe((0,e.M)(({data:h})=>{if(h){const B=structuredClone(s),x=s.findIndex(v=>v.id===f);B.splice(x,1),this.store.dispatch((0,y.CD)({rates:B}))}}))))}static#t=this.\u0275fac=function(s){return new(s||U)};static#e=this.\u0275prov=n.jDH({token:U,factory:U.\u0275fac,providedIn:"root"})}return U})()},72831:(W,I,t)=>{"use strict";t.d(I,{Ad:()=>a,NH:()=>M,ed:()=>P});var n=t(18810),i=t(99437),o=t(54438),e=t(44312),p=t(51188);let a=(()=>{class y{constructor(S,u){this._rolesService=S,this._router=u}resolve(S,u){return this._rolesService.findAllRoles().pipe((0,i.W)(c=>this._router.navigateByUrl("/desktop")))}static#t=this.\u0275fac=function(u){return new(u||y)(o.KVO(e.W),o.KVO(p.Ix))};static#e=this.\u0275prov=o.jDH({token:y,factory:y.\u0275fac,providedIn:"root"})}return y})(),M=(()=>{class y{constructor(S,u){this._rolesService=S,this._router=u}resolve(S,u){const c=S.params.roleId;return"new"===c?null:this._rolesService.findRoleById(c).pipe((0,i.W)(L=>{const V=u.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(V),(0,n.$)(L)}))}static#t=this.\u0275fac=function(u){return new(u||y)(o.KVO(e.W),o.KVO(p.Ix))};static#e=this.\u0275prov=o.jDH({token:y,factory:y.\u0275fac,providedIn:"root"})}return y})(),P=(()=>{class y{constructor(S,u){this._rolesService=S,this._router=u}resolve(S,u){return this._rolesService.findAllActiveRoles().pipe((0,i.W)(c=>this._router.navigateByUrl("/desktop")))}static#t=this.\u0275fac=function(u){return new(u||y)(o.KVO(e.W),o.KVO(p.Ix))};static#e=this.\u0275prov=o.jDH({token:y,factory:y.\u0275fac,providedIn:"root"})}return y})()},15887:(W,I,t)=>{"use strict";t.d(I,{X7:()=>o,y3:()=>e});var n=t(59640);const i=p=>p.roles,o=(0,n.Mz)(i,p=>p.role),e=(0,n.Mz)(i,p=>p.roles)},44312:(W,I,t)=>{"use strict";t.d(I,{W:()=>V});var n=t(54438),i=t(96354),o=t(88141),e=t(53473),p=t(59640),a=t(49238),M=t(98216);const P=e.J1`
    query PaginatedRoles($page: Int, $size: Int, $sort: String, $order: Order, $search: String ) {
        paginatedRoles(page: $page, size: $size, sort: $sort, order: $order, search: $search ) {

        ok,
        message,

        pagination {
            length
            size
            page
        },

        items {
            id,
            name,
            description,
            active,
            permissionsId
            isCoreRole
        }
        }
    }
`,y=e.J1`
    query FindAllActiveRoles {
        findAllActiveRoles {
            id
            name
            description
            isCoreRole
        }
    }
`,m=e.J1`
    query FindRoleById($roleId: String!) {
        findRoleById(id: $roleId ) {
            ok
            message

            role {
                id
                name
                description
                permissionsId
            }
        }
    }
`,S=e.J1`
    mutation createRole($createRoleInput: CreateRoleInput!) {
        createRole(createRoleInput: $createRoleInput) {
            ok
            message

            role {
                id,
                name,
                description,
                active,
                permissionsId
            }
        }
    }
`,u=e.J1`
    mutation UpdateRole($updateRoleInput: UpdateRoleInput!) {
        updateRole(updateRoleInput: $updateRoleInput) {
            ok
            message

            role {
                id,
                name,
                description,
                active,
                permissionsId
            }
        }
    }
`,c=e.J1`
    mutation UpdateRoleStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRoleStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,L=e.J1`
    mutation paginatedRemoveRole($removeRoleById: String!,  $page: Int, $size: Int, $sort: String, $order: Order, $search: String ) {
        paginatedRemoveRole(id: $removeRoleById, page: $page, size: $size, sort: $sort, order: $order, search: $search ) {

            ok,
            message,

            pagination {
                length,
                size,
                page,
                lastPage,
                startIndex,
                endIndex,
            },

            items {
                id,
                name,

                description,
                active,
                permissionsId
            }
        }
    }
`;let V=(()=>{class K{constructor(){this.apolloProvider=(0,n.WQX)(e.Ic),this.store=(0,n.WQX)(p.il),this._apollo=this.apolloProvider.use("BALANC")}createRole(D){return this._apollo.mutate({mutation:S,variables:{createRoleInput:D},errorPolicy:"all"}).pipe((0,i.T)(({data:d})=>d?d.createRole:null),(0,o.M)(d=>{d&&this.store.dispatch((0,a.rd)({role:d.role}))}))}findAllRoles(D=0,d=500,U="createdAt",A="asc",f=""){return this._apollo.query({query:P,errorPolicy:"all",variables:{page:D,size:d,sort:U,order:A,search:f}}).pipe((0,o.M)(({data:s})=>{s&&(this.store.dispatch((0,M.Bp)({pagination:s.paginatedRoles.pagination})),this.store.dispatch((0,a.S0)({roles:s.paginatedRoles.items})))}))}findAllActiveRoles(){return this._apollo.query({query:y,errorPolicy:"all"}).pipe((0,i.T)(({data:D})=>D?D.findAllActiveRoles:null),(0,o.M)(D=>{D&&this.store.dispatch((0,a.S0)({roles:D}))}))}findRoleById(D){return this._apollo.query({query:m,variables:{roleId:D},errorPolicy:"all"}).pipe((0,i.T)(({data:d})=>d?d.findRoleById:null),(0,o.M)(d=>{d&&this.store.dispatch((0,a.L4)({role:d.role}))}))}updateRole(D){return this._apollo.mutate({mutation:u,variables:{updateRoleInput:D},errorPolicy:"all"}).pipe((0,i.T)(({data:d})=>d?d.updateRole:null),(0,o.M)(d=>{d&&this.store.dispatch((0,a.zD)({role:d.role}))}))}updateRoleStatus(D){return this._apollo.mutate({mutation:c,variables:{updateEntityStatusInput:D},errorPolicy:"all"}).pipe((0,i.T)(({data:d})=>d?d.updateRoleStatus:null),(0,o.M)(d=>{d&&this.store.dispatch((0,a.yp)(D))}))}removeRole(D,d=0,U=500,A="name",f="desc",s=null){return this._apollo.mutate({mutation:L,variables:{removeRoleById:D,page:d,size:U,sort:A,order:f,search:s},errorPolicy:"all"}).pipe((0,o.M)(({data:h})=>{h&&(this.store.dispatch((0,M.Bp)({pagination:h.paginatedRemoveRole.pagination})),this.store.dispatch((0,a.S0)({roles:h.paginatedRemoveRole.items})))}))}static#t=this.\u0275fac=function(d){return new(d||K)};static#e=this.\u0275prov=n.jDH({token:K,factory:K.\u0275fac,providedIn:"root"})}return K})()},76856:(W,I,t)=>{"use strict";t.d(I,{FS:()=>e,O0:()=>a});var n=t(54438),i=t(32488),o=t(77005);const e=(M,P)=>(0,n.WQX)(i.W).getPurchases(),a=(M,P)=>(0,n.WQX)(i.W).getPurchases(0,25,"createdAt","asc","","",[],[],[o.WM.nueva])},77005:(W,I,t)=>{"use strict";t.d(I,{WM:()=>a,vf:()=>e});var n=t(67376);class e{constructor(m){delete m.ct,delete m.cut,delete m.rate,delete m.currency,delete m.currencyId,delete m.isPerishable;const S=m.cost;delete m.cost,m=n(m).omitBy(n.isNull).value(),Object.assign(this,m),this.quantity=Number(Number(m.quantity).toFixed(2)),this.price=Number(m.price.toFixed(2)),this.cud=Number(S.toFixed(2)),delete this.rateId}}var a=function(y){return y.nueva="nueva",y.recibida="recibida",y.rechazada="rechazada",y.cancelada="cancelada",y}(a||{})},99184:(W,I,t)=>{"use strict";t.d(I,{_:()=>d});var n=t(89417),i=t(88834),o=t(82765),e=t(75351),p=t(32102),a=t(99213),M=t(59042),P=t(21413),y=t(56977),m=t(70152),S=t(25558),u=t(53159),c=t(54438),L=t(69599),V=t(59640);function K(U,A){if(1&U){const f=c.RV6();c.j41(0,"div")(1,"mat-checkbox",8),c.bIt("change",function(h){const B=c.eBV(f),x=B.$implicit,v=B.$index,_=c.XpG(2);return c.Njj(_.onCheckboxChange(v,x,h.checked))}),c.EFF(2),c.k0s()()}if(2&U){const f=A.$implicit,s=A.$index,h=c.XpG(2);c.R7$(),c.Y8G("checked",h.selectedIndex===s),c.R7$(),c.SpI(" ",f.name," ")}}function Y(U,A){if(1&U&&c.Z7z(0,K,3,2,"div",null,c.fX1),2&U){const f=c.XpG();c.Dyx(f.depots)}}function D(U,A){1&U&&(c.j41(0,"div",9),c.EFF(1," No se encontraron almacenes "),c.k0s())}let d=(()=>{class U{constructor(f,s,h,B,x){this.data=f,this._changeDetectorRef=s,this._dialogRef=h,this._depotsService=B,this.store=x,this.searchInputControl=new n.MJ(null),this.selectedIndex=-1,this._unsubscribeAll=new P.B}ngOnInit(){this.store.select(u.c_).pipe((0,y.Q)(this._unsubscribeAll)).subscribe(f=>{this.depots=f,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,y.Q)(this._unsubscribeAll),(0,m.B)(300),(0,S.n)(f=>this._depotsService.findActiveDepots(f.trim()))).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onCheckboxChange(f,s,h){this.selectedIndex!==f||h?(this.selectedIndex=f,this.selectedDepot=s):(this.selectedIndex=-1,this.selectedDepot=null),this._changeDetectorRef.markForCheck()}closeDialog(){this._dialogRef.close({depot:this.selectedDepot})}static#t=this.\u0275fac=function(s){return new(s||U)(c.rXU(e.Vh),c.rXU(c.gRc),c.rXU(e.CP),c.rXU(L.t),c.rXU(V.il))};static#e=this.\u0275cmp=c.VBU({type:U,selectors:[["select-depot-dialog"]],standalone:!0,features:[c.aNF],decls:12,vars:9,consts:[[1,"p-12","pb-2"],["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"grid","my-10","overflow-auto","max-h-100","sm:grid-cols-2"],[1,"flex","items-center","justify-center","w-full","px-8","py-4","sm:justify-end","bg-gray-50","dark:bg-black/10"],["mat-button","","mat-dialog-close","",1,"-ml-4",3,"color"],["mat-flat-button","",3,"click","disabled","color"],["color","primary",3,"change","checked"],[1,"w-full","p-10","text-2xl","font-medium","text-center","sm:col-span-2"]],template:function(s,h){1&s&&(c.j41(0,"div",0)(1,"mat-form-field",1),c.nrm(2,"mat-icon",2)(3,"input",3),c.k0s(),c.j41(4,"div",4),c.DNE(5,Y,2,0)(6,D,2,0),c.k0s()(),c.j41(7,"div",5)(8,"button",6),c.EFF(9,"Cancelar"),c.k0s(),c.j41(10,"button",7),c.bIt("click",function(){return h.closeDialog()}),c.EFF(11,"Aceptar"),c.k0s()()),2&s&&(c.R7$(),c.Y8G("subscriptSizing","dynamic"),c.R7$(),c.Y8G("svgIcon","mat_solid:search"),c.R7$(),c.Y8G("formControl",h.searchInputControl)("autocomplete","off")("placeholder","Ingrese el nombre del almac\xe9n..."),c.R7$(2),c.vxM(5,h.depots.length>0?5:6),c.R7$(3),c.Y8G("color","warn"),c.R7$(2),c.Y8G("disabled",!h.selectedDepot)("color","primary"))},dependencies:[i.Hl,i.$z,o.g7,o.So,p.RG,p.rl,p.JW,a.m_,a.An,M.fS,M.fg,n.X1,n.me,n.BC,n.l_,e.tx],encapsulation:2})}return U})()},52002:(W,I,t)=>{"use strict";t.d(I,{Yt:()=>n});class n{constructor(){this.tags=[]}}},67374:function(W){W.exports=function(){"use strict";var t=6e4,n=36e5,i="millisecond",o="second",e="minute",p="hour",a="day",M="week",P="month",y="quarter",m="year",S="date",u="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,V={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(v){var _=["th","st","nd","rd"],g=v%100;return"["+v+(_[(g-20)%10]||_[g]||_[0])+"]"}},K=function(v,_,g){var C=String(v);return!C||C.length>=_?v:""+Array(_+1-C.length).join(g)+v},Y={s:K,z:function(v){var _=-v.utcOffset(),g=Math.abs(_),C=Math.floor(g/60),E=g%60;return(_<=0?"+":"-")+K(C,2,"0")+":"+K(E,2,"0")},m:function v(_,g){if(_.date()<g.date())return-v(g,_);var C=12*(g.year()-_.year())+(g.month()-_.month()),E=_.clone().add(C,P),$=g-E<0,T=_.clone().add(C+($?-1:1),P);return+(-(C+(g-E)/($?E-T:T-E))||0)},a:function(v){return v<0?Math.ceil(v)||0:Math.floor(v)},p:function(v){return{M:P,y:m,w:M,d:a,D:S,h:p,m:e,s:o,ms:i,Q:y}[v]||String(v||"").toLowerCase().replace(/s$/,"")},u:function(v){return void 0===v}},D="en",d={};d[D]=V;var U="$isDayjsObject",A=function(v){return v instanceof B||!(!v||!v[U])},f=function v(_,g,C){var E;if(!_)return D;if("string"==typeof _){var $=_.toLowerCase();d[$]&&(E=$),g&&(d[$]=g,E=$);var T=_.split("-");if(!E&&T.length>1)return v(T[0])}else{var b=_.name;d[b]=_,E=b}return!C&&E&&(D=E),E||!C&&D},s=function(v,_){if(A(v))return v.clone();var g="object"==typeof _?_:{};return g.date=v,g.args=arguments,new B(g)},h=Y;h.l=f,h.i=A,h.w=function(v,_){return s(v,{locale:_.$L,utc:_.$u,x:_.$x,$offset:_.$offset})};var B=function(){function v(g){this.$L=f(g.locale,null,!0),this.parse(g),this.$x=this.$x||g.x||{},this[U]=!0}var _=v.prototype;return _.parse=function(g){this.$d=function(C){var E=C.date,$=C.utc;if(null===E)return new Date(NaN);if(h.u(E))return new Date;if(E instanceof Date)return new Date(E);if("string"==typeof E&&!/Z$/i.test(E)){var T=E.match(c);if(T){var b=T[2]-1||0,w=(T[7]||"0").substring(0,3);return $?new Date(Date.UTC(T[1],b,T[3]||1,T[4]||0,T[5]||0,T[6]||0,w)):new Date(T[1],b,T[3]||1,T[4]||0,T[5]||0,T[6]||0,w)}}return new Date(E)}(g),this.init()},_.init=function(){var g=this.$d;this.$y=g.getFullYear(),this.$M=g.getMonth(),this.$D=g.getDate(),this.$W=g.getDay(),this.$H=g.getHours(),this.$m=g.getMinutes(),this.$s=g.getSeconds(),this.$ms=g.getMilliseconds()},_.$utils=function(){return h},_.isValid=function(){return this.$d.toString()!==u},_.isSame=function(g,C){var E=s(g);return this.startOf(C)<=E&&E<=this.endOf(C)},_.isAfter=function(g,C){return s(g)<this.startOf(C)},_.isBefore=function(g,C){return this.endOf(C)<s(g)},_.$g=function(g,C,E){return h.u(g)?this[C]:this.set(E,g)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(g,C){var E=this,$=!!h.u(C)||C,T=h.p(g),b=function(Z,j){var G=h.w(E.$u?Date.UTC(E.$y,j,Z):new Date(E.$y,j,Z),E);return $?G:G.endOf(a)},w=function(Z,j){return h.w(E.toDate()[Z].apply(E.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(j)),E)},k=this.$W,z=this.$M,X=this.$D,tt="set"+(this.$u?"UTC":"");switch(T){case m:return $?b(1,0):b(31,11);case P:return $?b(1,z):b(0,z+1);case M:var Q=this.$locale().weekStart||0,et=(k<Q?k+7:k)-Q;return b($?X-et:X+(6-et),z);case a:case S:return w(tt+"Hours",0);case p:return w(tt+"Minutes",1);case e:return w(tt+"Seconds",2);case o:return w(tt+"Milliseconds",3);default:return this.clone()}},_.endOf=function(g){return this.startOf(g,!1)},_.$set=function(g,C){var E,$=h.p(g),T="set"+(this.$u?"UTC":""),b=(E={},E[a]=T+"Date",E[S]=T+"Date",E[P]=T+"Month",E[m]=T+"FullYear",E[p]=T+"Hours",E[e]=T+"Minutes",E[o]=T+"Seconds",E[i]=T+"Milliseconds",E)[$],w=$===a?this.$D+(C-this.$W):C;if($===P||$===m){var k=this.clone().set(S,1);k.$d[b](w),k.init(),this.$d=k.set(S,Math.min(this.$D,k.daysInMonth())).$d}else b&&this.$d[b](w);return this.init(),this},_.set=function(g,C){return this.clone().$set(g,C)},_.get=function(g){return this[h.p(g)]()},_.add=function(g,C){var E,$=this;g=Number(g);var T=h.p(C),b=function(z){var X=s($);return h.w(X.date(X.date()+Math.round(z*g)),$)};if(T===P)return this.set(P,this.$M+g);if(T===m)return this.set(m,this.$y+g);if(T===a)return b(1);if(T===M)return b(7);var w=(E={},E[e]=t,E[p]=n,E[o]=1e3,E)[T]||1,k=this.$d.getTime()+g*w;return h.w(k,this)},_.subtract=function(g,C){return this.add(-1*g,C)},_.format=function(g){var C=this,E=this.$locale();if(!this.isValid())return E.invalidDate||u;var $=g||"YYYY-MM-DDTHH:mm:ssZ",T=h.z(this),b=this.$H,w=this.$m,k=this.$M,z=E.weekdays,X=E.months,Q=function(j,G,rt,nt){return j&&(j[G]||j(C,$))||rt[G].slice(0,nt)},et=function(j){return h.s(b%12||12,j,"0")},Z=E.meridiem||function(j,G,rt){var nt=j<12?"AM":"PM";return rt?nt.toLowerCase():nt};return $.replace(L,function(j,G){return G||function(rt){switch(rt){case"YY":return String(C.$y).slice(-2);case"YYYY":return h.s(C.$y,4,"0");case"M":return k+1;case"MM":return h.s(k+1,2,"0");case"MMM":return Q(E.monthsShort,k,X,3);case"MMMM":return Q(X,k);case"D":return C.$D;case"DD":return h.s(C.$D,2,"0");case"d":return String(C.$W);case"dd":return Q(E.weekdaysMin,C.$W,z,2);case"ddd":return Q(E.weekdaysShort,C.$W,z,3);case"dddd":return z[C.$W];case"H":return String(b);case"HH":return h.s(b,2,"0");case"h":return et(1);case"hh":return et(2);case"a":return Z(b,w,!0);case"A":return Z(b,w,!1);case"m":return String(w);case"mm":return h.s(w,2,"0");case"s":return String(C.$s);case"ss":return h.s(C.$s,2,"0");case"SSS":return h.s(C.$ms,3,"0");case"Z":return T}return null}(j)||T.replace(":","")})},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(g,C,E){var $,T=this,b=h.p(C),w=s(g),k=(w.utcOffset()-this.utcOffset())*t,z=this-w,X=function(){return h.m(T,w)};switch(b){case m:$=X()/12;break;case P:$=X();break;case y:$=X()/3;break;case M:$=(z-k)/6048e5;break;case a:$=(z-k)/864e5;break;case p:$=z/n;break;case e:$=z/t;break;case o:$=z/1e3;break;default:$=z}return E?$:h.a($)},_.daysInMonth=function(){return this.endOf(P).$D},_.$locale=function(){return d[this.$L]},_.locale=function(g,C){if(!g)return this.$L;var E=this.clone(),$=f(g,C,!0);return $&&(E.$L=$),E},_.clone=function(){return h.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},v}(),x=B.prototype;return s.prototype=x,[["$ms",i],["$s",o],["$m",e],["$H",p],["$W",a],["$M",P],["$y",m],["$D",S]].forEach(function(v){x[v[1]]=function(_){return this.$g(_,v[0],v[1])}}),s.extend=function(v,_){return v.$i||(v(_,B,s),v.$i=!0),s},s.locale=f,s.isDayjs=A,s.unix=function(v){return s(1e3*v)},s.en=d[D],s.Ls=d,s.p={},s}()},77540:(W,I,t)=>{"use strict";t.d(I,{DP:()=>rt,eO:()=>it});var n=t(54438),i=t(7673),o=t(33726),e=t(31397),p=t(96354),a=t(88141),M=t(5964),P=t(23386);function m(r,l,R,O){const F=window&&!!window.document&&window.document.documentElement;let H=F&&l?window:R;if(r&&(H=r&&F&&"string"==typeof r?function S(r,l,R){return(R?window.document:l).querySelector(r)}(r,R.nativeElement,O):r,!H))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return H}function u(r){return r&&!r.firstChange}const L={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},V={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class K{constructor(l=!0){this.vertical=l,this.propsMap=l?L:V}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function U(r){return["Window","global"].some(R=>Object.prototype.toString.call(r).includes(R))}function A(r,l){return r?l.document.documentElement:null}function f(r,l){const R=function x({container:r,isWindow:l,axis:R}){const{offsetHeightKey:O,clientHeightKey:F}=B(R);return v(r,l,O,F)}(l);return l.isWindow?function s(r,l,R){const{axis:O,container:F,isWindow:H}=R,{offsetHeightKey:N,clientHeightKey:q}=B(O),ot=r+g(A(H,F),O,H),J=v(l.nativeElement,H,N,q),st=function _(r,l,R){const O=l.topKey();if(r.getBoundingClientRect)return r.getBoundingClientRect()[O]+g(r,l,R)}(l.nativeElement,O,H)+J;return{height:r,scrolled:ot,totalToScroll:st,isWindow:H}}(R,r,l):function h(r,l,R){const{axis:O,container:F}=R;return{height:r,scrolled:F[O.scrollTopKey()],totalToScroll:F[O.scrollHeightKey()],isWindow:!1}}(R,0,l)}function B(r){return{offsetHeightKey:r.offsetHeightKey(),clientHeightKey:r.clientHeightKey()}}function v(r,l,R,O){if(isNaN(r[R])){const F=A(l,r);return F?F[O]:0}return r[R]}function g(r,l,R){const O=l.pageYOffsetKey(),F=l.scrollTopKey(),H=l.offsetTopKey();return isNaN(window.pageYOffset)?A(R,r)[F]:r.ownerDocument?r.ownerDocument.defaultView[O]:r[H]}function C(r,l={down:0,up:0},R){let O,F;if(r.totalToScroll<=0)return!1;const H=r.isWindow?r.scrolled:r.height+r.scrolled;return R?(O=(r.totalToScroll-H)/r.totalToScroll,F=(l?.down?l.down:0)/10):(O=r.scrolled/(r.scrolled+(r.totalToScroll-H)),F=(l?.up?l.up:0)/10),O<=F}class tt{constructor(l){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},Object.assign(this,l)}updateScrollPosition(l){return this.lastScrollPosition=l}updateTotalToScroll(l){this.lastTotalToScroll!==l&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=l)}updateScroll(l,R){this.updateScrollPosition(l),this.updateTotalToScroll(R)}updateTriggeredFlag(l,R){R?this.triggered.down=l:this.triggered.up=l}isTriggeredScroll(l,R){return R?this.triggered.down===l:this.triggered.up===l}}const j={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function G(r){const{scrollDown:l,stats:{scrolled:R}}=r;return{type:l?j.DOWN:j.UP,payload:{currentScrollPosition:R}}}let rt=(()=>{class r{constructor(R,O){this.element=R,this.zone=O,this.scrolled=new n.bkB,this.scrolledUp=new n.bkB,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:R,infiniteScrollDisabled:O,infiniteScrollDistance:F}){const H=u(R),N=u(O),q=u(F),ot=!N&&!this.infiniteScrollDisabled||N&&!O.currentValue||q;(H||N||q)&&(this.destroyScroller(),ot&&this.setup())}setup(){(function c(){return typeof window<"u"})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=function Q(r){const{scrollContainer:l,scrollWindow:R,element:O,fromRoot:F}=r,H=function D({windowElement:r,axis:l}){return function d(r,l){const R=r.isWindow||l&&!l.nativeElement?l:l.nativeElement;return{...r,container:R}}({axis:l,isWindow:U(r)},r)}({axis:new K(!r.horizontal),windowElement:m(l,R,O,F)}),N=new tt({totalToScroll:f(O,H).totalToScroll}),ot={up:r.upDistance,down:r.downDistance};return function et(r){let l=(0,o.R)(r.container,"scroll");return r.throttle&&(l=l.pipe((0,P.c)(r.throttle,void 0,{leading:!0,trailing:!0}))),l}({container:H.container,throttle:r.throttle}).pipe((0,e.Z)(()=>(0,i.of)(f(O,H))),(0,p.T)(J=>function Z(r,l,R){const{scrollDown:O,fire:F}=function $(r,l,R){const O=function E(r,l){return r<l.scrolled}(r,l);return{fire:C(l,R,O),scrollDown:O}}(r,l,R);return{scrollDown:O,fire:F,stats:l}}(N.lastScrollPosition,J,ot)),(0,a.M)(({stats:J})=>N.updateScroll(J.scrolled,J.totalToScroll)),(0,M.p)(({fire:J,scrollDown:st,stats:{totalToScroll:at}})=>function Y(r,l,R){return!!(r&&l||!R&&l)}(r.alwaysCallback,J,N.isTriggeredScroll(at,st))),(0,a.M)(({scrollDown:J,stats:{totalToScroll:st}})=>{N.updateTriggeredFlag(st,J)}),(0,p.T)(G))}({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(R=>this.handleOnScroll(R))})}handleOnScroll({type:R,payload:O}){const F=R===j.DOWN?this.scrolled:this.scrolledUp;(function nt(r){return r.observed??r.observers.length>0})(F)&&this.zone.run(()=>F.emit(O))}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}static#t=this.\u0275fac=function(O){return new(O||r)(n.rXU(n.aKT),n.rXU(n.SKi))};static#e=this.\u0275dir=n.FsC({type:r,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[n.OA$]})}return r})(),it=(()=>{class r{static#t=this.\u0275fac=function(O){return new(O||r)};static#e=this.\u0275mod=n.$C({type:r});static#r=this.\u0275inj=n.G2t({})}return r})()}}]);