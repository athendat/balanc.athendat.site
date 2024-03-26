"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[4415],{21189:(D,_,t)=>{t.d(_,{Oh:()=>m,qT:()=>d});var u=t(19212),l=t(15608),P=t(98246);const d=(n,r)=>(0,u.f3M)(l.F).getPurchases(),m=(n,r)=>(0,u.f3M)(l.F).getPurchases(0,25,"createdAt","asc","","",[],[],[P.L0.nueva])},58578:(D,_,t)=>{t.d(_,{pk:()=>d});var u=t(84221);const l=h=>h.purchases,d=((0,u.P1)(l,h=>h.purchase),(0,u.P1)(l,h=>h.purchases))},15608:(D,_,t)=>{t.d(_,{F:()=>T});var u=t(62660),l=t(48180),P=t(94664),d=t(99397),h=t(37398),m=t(58578),n=t(7027),r=t(50967);const v=r.Ps`
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

`,f=r.Ps`
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
`,C=r.Ps`
    mutation RemovePurchase($removePurchaseId: String!) {
        removePurchase(id: $removePurchaseId)
    }
`,M=r.Ps`
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
`,e=r.Ps`
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
`,A=r.Ps`
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
`;var x=t(97214),g=t(19212),S=t(22939),O=t(84221);let T=(()=>{class i{constructor(s,a,o){this.apolloProvider=s,this._snackBar=a,this.store=o,this._apollo=this.apolloProvider.use("BALANC")}createPurchase(s){return this.store.select(m.pk).pipe((0,l.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:v,variables:{createPurchaseInput:s},errorPolicy:"all"}).pipe((0,d.b)(({data:c})=>{if(c){const p=(0,u.Z)(a);p.push(c.createdPurchase),this.store.dispatch((0,n.Lb)({purchases:p}))}}))))}getPurchases(s=0,a=50,o="code",c="desc",p="",I=null,y=[],b=[],$=[],R=[],L=null){return this._apollo.query({query:M,errorPolicy:"all",variables:{page:s,size:a,sort:o,order:c,search:p,supplierId:I,vouchersId:y,paymentMethodsId:b,status:$,paymentStatus:R,voucherDate:L}}).pipe((0,d.b)(({data:U})=>{U&&(this.store.dispatch((0,n.Lb)({purchases:U.findAllPurchases.purchases})),this.store.dispatch((0,x.Jr)({pagination:U.findAllPurchases.pagination})))}))}findPurchases(s="",a,o=10){return this._apollo.query({query:e,variables:{search:s,size:o,status:a},errorPolicy:"all"}).pipe((0,h.U)(({data:c})=>c?c.findPurchases:[]),(0,d.b)(c=>{c&&this.store.dispatch((0,n.Lb)({purchases:c}))}))}getPurchaseById(s){return this._apollo.query({query:A,variables:{findPurchaseByIdId:s},errorPolicy:"all"}).pipe((0,d.b)(({data:o})=>{this.store.dispatch((0,n.tN)({purchase:o.purchase}))}))}updatePurchaseStatus(s,a,o){return this.store.select(m.pk).pipe((0,l.q)(1),(0,P.w)(c=>this._apollo.mutate({mutation:f,variables:{updatePurchaseStatusInput:{id:s,status:a,paymentStatus:o}},errorPolicy:"all"}).pipe((0,d.b)(({data:p})=>{const I=structuredClone(c);I[c.findIndex(b=>b.id===s)]=p.updatePurchaseStatus.purchase,this.store.dispatch((0,n.Lb)({purchases:I}))}))))}removePurchase(s){return this.store.select(m.pk).pipe((0,l.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:C,variables:{removePurchaseId:s},errorPolicy:"all"}).pipe((0,d.b)(({})=>{const c=(0,u.Z)(a),p=a.findIndex(I=>I.id===s);c.splice(p,1),this.store.dispatch((0,n.Lb)({purchases:c}))}))))}static#e=this.\u0275fac=function(a){return new(a||i)(g.LFG(r._M),g.LFG(S.ux),g.LFG(O.yh))};static#t=this.\u0275prov=g.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},98246:(D,_,t)=>{t.d(_,{Jw:()=>d,L0:()=>m});var u=t(6990);class d{constructor(r){delete r.ct,delete r.cut,delete r.rate,delete r.currency,delete r.currencyId;const v=r.cost;delete r.cost,r=u(r).omitBy(u.isNull).value(),Object.assign(this,r),this.quantity=Number(Number(r.quantity).toFixed(2)),this.price=Number(r.price.toFixed(2)),this.cud=Number(v.toFixed(2)),delete this.rateId}}var m=function(n){return n.nueva="nueva",n.recibida="recibida",n.rechazada="rechazada",n.cancelada="cancelada",n}(m||{})},44565:(D,_,t)=>{t.d(_,{v:()=>T});var u=t(56223),l=t(32296),P=t(75986),d=t(17700),h=t(64170),m=t(30617),n=t(24516),r=t(78645),v=t(59773),f=t(83620),C=t(94664),M=t(58695),e=t(19212),A=t(39702),x=t(84221);function g(i,E){if(1&i){const s=e.EpF();e.TgZ(0,"div")(1,"mat-checkbox",8),e.NdJ("change",function(o){const c=e.CHM(s),p=c.$index,I=c.$implicit,y=e.oxw(2);return e.KtG(y.onCheckboxChange(p,I,o.checked))}),e._uU(2),e.qZA()()}if(2&i){const s=E.$implicit,a=E.$index,o=e.oxw(2);e.xp6(),e.Q6J("checked",o.selectedIndex===a),e.xp6(),e.hij(" ",s.name," ")}}function S(i,E){if(1&i&&e.SjG(0,g,3,2,"div",null,e.x6l),2&i){const s=e.oxw();e.wJu(s.depots)}}function O(i,E){1&i&&(e.TgZ(0,"div",9),e._uU(1," No se encontraron almacenes "),e.qZA())}let T=(()=>{class i{constructor(s,a,o,c,p){this.data=s,this._changeDetectorRef=a,this._dialogRef=o,this._depotsService=c,this.store=p,this.searchInputControl=new u.NI(null),this.selectedIndex=-1,this._unsubscribeAll=new r.x}ngOnInit(){this.store.select(M.$I).pipe((0,v.R)(this._unsubscribeAll)).subscribe(s=>{this.depots=s,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,v.R)(this._unsubscribeAll),(0,f.b)(300),(0,C.w)(s=>this._depotsService.findActiveDepots(s.trim()))).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onCheckboxChange(s,a,o){this.selectedIndex!==s||o?(this.selectedIndex=s,this.selectedDepot=a):(this.selectedIndex=-1,this.selectedDepot=null),this._changeDetectorRef.markForCheck()}closeDialog(){this._dialogRef.close({depot:this.selectedDepot})}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(d.WI),e.Y36(e.sBO),e.Y36(d.so),e.Y36(A.Y),e.Y36(x.yh))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["select-depot-dialog"]],standalone:!0,features:[e.jDz],decls:12,vars:9,consts:[[1,"p-12","pb-2"],["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"grid","my-10","overflow-auto","max-h-100","sm:grid-cols-2"],[1,"flex","items-center","justify-center","w-full","px-8","py-4","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-button","","mat-dialog-close","",1,"-ml-4",3,"color"],["mat-flat-button","",3,"disabled","color","click"],["color","primary",3,"checked","change"],[1,"w-full","p-10","text-2xl","font-medium","text-center","sm:col-span-2"]],template:function(a,o){1&a&&(e.TgZ(0,"div",0)(1,"mat-form-field",1),e._UZ(2,"mat-icon",2)(3,"input",3),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,S,2,0)(6,O,2,0),e.qZA()(),e.TgZ(7,"div",5)(8,"button",6),e._uU(9,"Cancelar"),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return o.closeDialog()}),e._uU(11,"Aceptar"),e.qZA()()),2&a&&(e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",o.searchInputControl)("autocomplete","off")("placeholder","Ingrese el nombre del almac\xe9n..."),e.xp6(2),e.um2(5,o.depots.length>0?5:6),e.xp6(3),e.Q6J("color","warn"),e.xp6(2),e.Q6J("disabled",!o.selectedDepot)("color","primary"))},dependencies:[l.ot,l.lW,P.p9,P.oG,h.lN,h.KE,h.qo,m.Ps,m.Hw,n.c,n.Nt,u.UX,u.Fj,u.JJ,u.oH],encapsulation:2})}return i})()}}]);