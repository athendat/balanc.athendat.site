"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[6186],{85194:(D,_,t)=>{t.d(_,{d:()=>P});var c=t(19212),u=t(61942);let P=(()=>{class d{constructor(g){this._uomService=g}resolve(g,a){return this._uomService.getUoms()}static#t=this.\u0275fac=function(a){return new(a||d)(c.LFG(u.c))};static#e=this.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},33355:(D,_,t)=>{t.d(_,{av:()=>d});var c=t(84221);const u=l=>l.uoms,d=((0,c.P1)(u,l=>l.uom),(0,c.P1)(u,l=>l.uoms))},61942:(D,_,t)=>{t.d(_,{c:()=>$});var c=t(19212),u=t(50967),P=t(48180),d=t(94664),l=t(99397),g=t(84221),a=t(46053),p=t(97214),v=t(33355);const y=u.Ps`
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
`,C=u.Ps`
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
`,M=u.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateUomStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,e=u.Ps`
    mutation RemoveUom($removeUomId: String!) {
        removeUom(id: $removeUomId) {
            ok
            message
        }
    }
`,S=u.Ps`
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
`,A=u.Ps`
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
`;var f=t(42090),b=t(22939);let $=(()=>{class U{constructor(h){this._snackBar=h,this.apolloProvider=(0,c.f3M)(u._M),this.store=(0,c.f3M)(g.yh),this._apollo=this.apolloProvider.use("BALANC")}createUom(h){return this.store.select(v.av).pipe((0,P.q)(1),(0,d.w)(s=>this._apollo.mutate({mutation:y,variables:{createUomInput:h},errorPolicy:"all"}).pipe((0,l.b)(({errors:o,data:r})=>{if(o){let i="";o.forEach(m=>i+=`\n ${m.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=structuredClone(s);n.push(r.createUom.uom),this.store.dispatch((0,a.u8)({uoms:n}))}))))}getUoms(h=1,s=20,o="code",r="asc",n=""){return this._apollo.query({query:S,errorPolicy:"all",variables:{offset:s*(h-1),limit:s,sort:o,order:r,search:n}}).pipe((0,l.b)(({errors:i,data:m})=>{if(i){let E="";i.forEach(O=>E+=`\n ${O.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,p.Jr)({pagination:m.findAllUoms.pagination})),this.store.dispatch((0,a.u8)({uoms:m.findAllUoms.uoms}))}))}getUomById(h){return this._apollo.query({query:A,variables:{findUomByIdId:h},errorPolicy:"all"}).pipe((0,l.b)(({errors:s,data:o})=>{if(s){let r="";s.forEach(n=>r+=`\n ${n.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,a.sh)({uom:o.findUomById.uom}))}))}updateUom(h){return this.store.select(v.av).pipe((0,P.q)(1),(0,d.w)(s=>this._apollo.mutate({mutation:C,variables:{updateUomInput:h},errorPolicy:"all"}).pipe((0,l.b)(({errors:o,data:r})=>{if(o){let m="";o.forEach(E=>m+=`\n ${E.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=structuredClone(s);n[s.findIndex(m=>m.id===h.id)]=r.updateUom.uom,this.store.dispatch((0,a.u8)({uoms:n}))}))))}updateUomStatus(h){return this.store.select(v.av).pipe((0,P.q)(1),(0,d.w)(s=>this._apollo.mutate({mutation:M,variables:{updateEntityStatusInput:h},errorPolicy:"all"}).pipe((0,l.b)(({errors:o})=>{if(o){let i="";o.forEach(m=>i+=`\n ${m.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=structuredClone(s);r[s.findIndex(i=>i.id===h.id)].active=h.active,this.store.dispatch((0,a.u8)({uoms:r}))}))))}removeUom(h){return this.store.select(v.av).pipe((0,P.q)(1),(0,d.w)(s=>this._apollo.mutate({mutation:e,variables:{removeUomId:h},errorPolicy:"all"}).pipe((0,l.b)(({errors:o})=>{if(o){let i="";o.forEach(m=>i+=`\n ${m.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=structuredClone(s),n=s.findIndex(i=>i.id===h);r.splice(n,1),this.store.dispatch((0,a.u8)({uoms:r}))}))))}static#t=this.\u0275fac=function(s){return new(s||U)(c.LFG(b.ux))};static#e=this.\u0275prov=c.Yz7({token:U,factory:U.\u0275fac,providedIn:"root"})}return U})()},21189:(D,_,t)=>{t.d(_,{N6:()=>g,lN:()=>d});var c=t(98246),u=t(19212),P=t(15608);let d=(()=>{class a{constructor(v){this._purchasesService=v}resolve(v,y){return this._purchasesService.getPurchases()}static#t=this.\u0275fac=function(y){return new(y||a)(u.LFG(P.F))};static#e=this.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),g=(()=>{class a{constructor(v){this._purchasesService=v}resolve(v,y){return this._purchasesService.getPurchases(0,25,"createdAt","asc","","",[],[],[c.L0.nueva])}static#t=this.\u0275fac=function(y){return new(y||a)(u.LFG(P.F))};static#e=this.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},58578:(D,_,t)=>{t.d(_,{pk:()=>d});var c=t(84221);const u=l=>l.purchases,d=((0,c.P1)(u,l=>l.purchase),(0,c.P1)(u,l=>l.purchases))},15608:(D,_,t)=>{t.d(_,{F:()=>U});var c=t(62660),u=t(48180),P=t(94664),d=t(99397),l=t(37398),g=t(58578),a=t(7027),p=t(50967);const v=p.Ps`
    mutation CreatedPurchase($createPurchaseInput: CreatePurchaseInput!) {
        createdPurchase(createPurchaseInput: $createPurchaseInput) {
            code
            createdAt
            currencyId
            id
            paymentMethodId
            products {
                productId
                cud
                cui
                quantity
            }
            status
            paymentStatus
            supplierId
            total
            userId
            voucherDate
            voucherNo
            voucherTypeId
            ratesId
        }
    }

`,y=p.Ps`
    mutation UpdatePurchaseStatus($updatePurchaseStatusInput: UpdatePurchaseStatusInput!) {
        updatePurchaseStatus(updatePurchaseStatusInput: $updatePurchaseStatusInput) {

            ok
            message

            purchase {
                id
                code
                createdAt
                currencyId
                paymentMethodId
                products {
                    productId
                    cud
                    cui
                    quantity

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }
                status
                paymentStatus
                supplierId
                total
                userId
                voucherDate
                voucherNo
                voucherTypeId
                ratesId

                currency {
                    id
                    iso
                }
                paymentMethod {
                    id
                    name
                }

                supplier {
                    id
                    name
                }

                voucher {
                    id
                    name
                }
            }
        }
    }
`,C=p.Ps`
    mutation RemovePurchase($removePurchaseId: String!) {
        removePurchase(id: $removePurchaseId)
    }
`,M=p.Ps`
    query FindAllPurchases(
        $page: Int,
        $size: Int,
        $sort: String,
        $order: Order,
        $search: String,
        $supplierId: String,
        $vouchersId: [String!],
        $paymentMethodsId: [String!],
        $status: [PurchaseStatus!],
        $paymentStatus: [PaymentStatus!],
        $voucherDate: DateTime,
        ) {
        findAllPurchases(
            page: $page,
            size: $size,
            sort: $sort,
            order: $order,
            search: $search,
            supplierId:$supplierId,
            vouchersId:$vouchersId,
            paymentMethodsId:$paymentMethodsId,
            status: $status,
            paymentStatus: $paymentStatus,
            voucherDate:$voucherDate,
            ) {
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

            purchases {
                id
                code
                createdAt
                currencyId
                paymentMethodId
                products {
                    productId
                    cud
                    cui
                    quantity

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }
                status
                paymentStatus
                supplierId
                total
                userId
                voucherDate
                voucherNo
                voucherTypeId
                ratesId

                currency {
                    id
                    iso
                }
                paymentMethod {
                    id
                    name
                }

                supplier {
                    id
                    name
                    phone
                    email
                }

                voucher {
                    id
                    name
                }

                indirectCost {
                    fobCosts
                    freight
                    insurance
                    customsDuties
                    customsServices
                    transportation
                    unloading
                    otherCosts
                }
            }
        }
    }
`,e=p.Ps`
    query FindPurchases($search: String!, $size: Int!, $status: PurchaseStatus ) {
        findPurchases(search: $search, size: $size, status: $status) {
            id
            code
            createdAt
            currencyId
            paymentMethodId
            products {
                productId
                cud
                cui
                quantity

                product {
                    name
                    uom {
                        name
                        abbr
                    }
                }
            }

            status
            paymentStatus
            supplierId
            total
            userId
            voucherDate
            voucherTypeId
            ratesId

            currency {
                id
                iso
            }
            paymentMethod {
                id
                name
            }

            supplier {
                id
                name
            }

            voucher {
                id
                name
            }
        }
    }
`,S=p.Ps`
    query FindPurchaseById($findPurchaseById: String!) {
        purchase(id: $findPurchaseById) {
            id
            code
            createdAt
            currencyId
            paymentMethodId
            products {
                productId
                cud
                cui
                quantity

                product {
                    name
                    uom {
                        name
                        abbr
                    }
                }
            }
            status
            paymentStatus
            supplierId
            total
            userId
            voucherDate
            voucherNo
            voucherTypeId
            ratesId

            currency {
                id
                iso
            }
            paymentMethod {
                id
                name
            }

            supplier {
                id
                name
            }

            voucher {
                id
                name
            }
        }
    }
`;var A=t(97214),f=t(19212),b=t(22939),$=t(84221);let U=(()=>{class I{constructor(s,o,r){this.apolloProvider=s,this._snackBar=o,this.store=r,this._apollo=this.apolloProvider.use("BALANC")}createPurchase(s){return this.store.select(g.pk).pipe((0,u.q)(1),(0,P.w)(o=>this._apollo.mutate({mutation:v,variables:{createPurchaseInput:s},errorPolicy:"all"}).pipe((0,d.b)(({data:n})=>{if(n){const i=(0,c.Z)(o);i.push(n.createdPurchase),this.store.dispatch((0,a.Lb)({purchases:i}))}}))))}getPurchases(s=0,o=50,r="code",n="desc",i="",m=null,E=[],O=[],x=[],R=[],B=null){return this._apollo.query({query:M,errorPolicy:"all",variables:{page:s,size:o,sort:r,order:n,search:i,supplierId:m,vouchersId:E,paymentMethodsId:O,status:x,paymentStatus:R,voucherDate:B}}).pipe((0,d.b)(({data:T})=>{T&&(this.store.dispatch((0,a.Lb)({purchases:T.findAllPurchases.purchases})),this.store.dispatch((0,A.Jr)({pagination:T.findAllPurchases.pagination})))}))}findPurchases(s="",o,r=10){return this._apollo.query({query:e,variables:{search:s,size:r,status:o},errorPolicy:"all"}).pipe((0,l.U)(({data:n})=>n?n.findPurchases:[]),(0,d.b)(n=>{n&&this.store.dispatch((0,a.Lb)({purchases:n}))}))}getPurchaseById(s){return this._apollo.query({query:S,variables:{findPurchaseByIdId:s},errorPolicy:"all"}).pipe((0,d.b)(({data:r})=>{this.store.dispatch((0,a.tN)({purchase:r.purchase}))}))}updatePurchaseStatus(s,o,r){return this.store.select(g.pk).pipe((0,u.q)(1),(0,P.w)(n=>this._apollo.mutate({mutation:y,variables:{updatePurchaseStatusInput:{id:s,status:o,paymentStatus:r}},errorPolicy:"all"}).pipe((0,d.b)(({data:i})=>{const m=structuredClone(n);m[n.findIndex(O=>O.id===s)]=i.updatePurchaseStatus.purchase,this.store.dispatch((0,a.Lb)({purchases:m}))}))))}removePurchase(s){return this.store.select(g.pk).pipe((0,u.q)(1),(0,P.w)(o=>this._apollo.mutate({mutation:C,variables:{removePurchaseId:s},errorPolicy:"all"}).pipe((0,d.b)(({})=>{const n=(0,c.Z)(o),i=o.findIndex(m=>m.id===s);n.splice(i,1),this.store.dispatch((0,a.Lb)({purchases:n}))}))))}static#t=this.\u0275fac=function(o){return new(o||I)(f.LFG(p._M),f.LFG(b.ux),f.LFG($.yh))};static#e=this.\u0275prov=f.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})()},98246:(D,_,t)=>{t.d(_,{Jw:()=>d,L0:()=>g});var c=t(6990);class d{constructor(p){delete p.ct,delete p.cut,delete p.rate,delete p.currency,delete p.currencyId;const v=p.cost;delete p.cost,p=c(p).omitBy(c.isNull).value(),Object.assign(this,p),this.quantity=Number(Number(p.quantity).toFixed(2)),this.price=Number(p.price.toFixed(2)),this.cud=Number(v.toFixed(2)),delete this.rateId}}var g=function(a){return a.nueva="nueva",a.recibida="recibida",a.rechazada="rechazada",a.cancelada="cancelada",a}(g||{})},44565:(D,_,t)=>{t.d(_,{v:()=>U});var c=t(56223),u=t(32296),P=t(75986),d=t(17700),l=t(64170),g=t(30617),a=t(24516),p=t(78645),v=t(59773),y=t(83620),C=t(94664),M=t(58695),e=t(19212),S=t(39702),A=t(84221);function f(I,h){if(1&I){const s=e.EpF();e.TgZ(0,"div")(1,"mat-checkbox",8),e.NdJ("change",function(r){const n=e.CHM(s),i=n.$index,m=n.$implicit,E=e.oxw(2);return e.KtG(E.onCheckboxChange(i,m,r.checked))}),e._uU(2),e.qZA()()}if(2&I){const s=h.$implicit,o=h.$index,r=e.oxw(2);e.xp6(),e.Q6J("checked",r.selectedIndex===o),e.xp6(),e.hij(" ",s.name," ")}}function b(I,h){if(1&I&&e.SjG(0,f,3,2,"div",null,e.x6l),2&I){const s=e.oxw();e.wJu(s.depots)}}function $(I,h){1&I&&(e.TgZ(0,"div",9),e._uU(1," No se encontraron almacenes "),e.qZA())}let U=(()=>{class I{constructor(s,o,r,n,i){this.data=s,this._changeDetectorRef=o,this._dialogRef=r,this._depotsService=n,this.store=i,this.searchInputControl=new c.NI(null),this.selectedIndex=-1,this._unsubscribeAll=new p.x}ngOnInit(){this.store.select(M.$I).pipe((0,v.R)(this._unsubscribeAll)).subscribe(s=>{this.depots=s,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,v.R)(this._unsubscribeAll),(0,y.b)(300),(0,C.w)(s=>this._depotsService.findActiveDepots(s.trim()))).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onCheckboxChange(s,o,r){this.selectedIndex!==s||r?(this.selectedIndex=s,this.selectedDepot=o):(this.selectedIndex=-1,this.selectedDepot=null),this._changeDetectorRef.markForCheck()}closeDialog(){this._dialogRef.close({depot:this.selectedDepot})}static#t=this.\u0275fac=function(o){return new(o||I)(e.Y36(d.WI),e.Y36(e.sBO),e.Y36(d.so),e.Y36(S.Y),e.Y36(A.yh))};static#e=this.\u0275cmp=e.Xpm({type:I,selectors:[["select-depot-dialog"]],standalone:!0,features:[e.jDz],decls:12,vars:9,consts:[[1,"p-12","pb-2"],["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"grid","my-10","overflow-auto","max-h-100","sm:grid-cols-2"],[1,"flex","items-center","justify-center","w-full","px-8","py-4","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-button","","mat-dialog-close","",1,"-ml-4",3,"color"],["mat-flat-button","",3,"disabled","color","click"],["color","primary",3,"checked","change"],[1,"w-full","p-10","text-2xl","font-medium","text-center","sm:col-span-2"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"mat-form-field",1),e._UZ(2,"mat-icon",2)(3,"input",3),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,b,2,0)(6,$,2,0),e.qZA()(),e.TgZ(7,"div",5)(8,"button",6),e._uU(9,"Cancelar"),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return r.closeDialog()}),e._uU(11,"Aceptar"),e.qZA()()),2&o&&(e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",r.searchInputControl)("autocomplete","off")("placeholder","Ingrese el nombre del almac\xe9n..."),e.xp6(2),e.um2(5,r.depots.length>0?5:6),e.xp6(3),e.Q6J("color","warn"),e.xp6(2),e.Q6J("disabled",!r.selectedDepot)("color","primary"))},dependencies:[u.ot,u.lW,P.p9,P.oG,l.lN,l.KE,l.qo,g.Ps,g.Hw,a.c,a.Nt,c.UX,c.Fj,c.JJ,c.oH],encapsulation:2})}return I})()}}]);