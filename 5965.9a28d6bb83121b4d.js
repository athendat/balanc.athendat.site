"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5965],{76856:(E,I,t)=>{t.d(I,{FS:()=>d,O0:()=>m});var u=t(54438),l=t(32488),_=t(77005);const d=(n,r)=>(0,u.WQX)(l.W).getPurchases(),m=(n,r)=>(0,u.WQX)(l.W).getPurchases(0,25,"createdAt","asc","","",[],[],[_.WM.nueva])},35526:(E,I,t)=>{t.d(I,{vY:()=>d});var u=t(59640);const l=h=>h.purchases,d=((0,u.Mz)(l,h=>h.purchase),(0,u.Mz)(l,h=>h.purchases))},32488:(E,I,t)=>{t.d(I,{W:()=>$});var u=t(33446),l=t(96697),_=t(25558),d=t(88141),h=t(96354),m=t(35526),n=t(27883),r=t(73512);const v=r.J1`
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

`,f=r.J1`
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
`,M=r.J1`
    mutation RemovePurchase($removePurchaseId: String!) {
        removePurchase(id: $removePurchaseId)
    }
`,C=r.J1`
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
`,e=r.J1`
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
`,S=r.J1`
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
`;var A=t(98216),D=t(54438),O=t(95416),R=t(59640);let $=(()=>{class i{constructor(s,a,o){this.apolloProvider=s,this._snackBar=a,this.store=o,this._apollo=this.apolloProvider.use("BALANC")}createPurchase(s){return this.store.select(m.vY).pipe((0,l.s)(1),(0,_.n)(a=>this._apollo.mutate({mutation:v,variables:{createPurchaseInput:s},errorPolicy:"all"}).pipe((0,d.M)(({data:c})=>{if(c){const p=(0,u.A)(a);p.push(c.createdPurchase),this.store.dispatch((0,n.tk)({purchases:p}))}}))))}getPurchases(s=0,a=50,o="code",c="desc",p="",P=null,y=[],T=[],x=[],B=[],b=null){return this._apollo.query({query:C,errorPolicy:"all",variables:{page:s,size:a,sort:o,order:c,search:p,supplierId:P,vouchersId:y,paymentMethodsId:T,status:x,paymentStatus:B,voucherDate:b}}).pipe((0,d.M)(({data:U})=>{U&&(this.store.dispatch((0,n.tk)({purchases:U.findAllPurchases.purchases})),this.store.dispatch((0,A.Bp)({pagination:U.findAllPurchases.pagination})))}))}findPurchases(s="",a,o=10){return this._apollo.query({query:e,variables:{search:s,size:o,status:a},errorPolicy:"all"}).pipe((0,h.T)(({data:c})=>c?c.findPurchases:[]),(0,d.M)(c=>{c&&this.store.dispatch((0,n.tk)({purchases:c}))}))}getPurchaseById(s){return this._apollo.query({query:S,variables:{findPurchaseByIdId:s},errorPolicy:"all"}).pipe((0,d.M)(({data:o})=>{this.store.dispatch((0,n.yU)({purchase:o.purchase}))}))}updatePurchaseStatus(s,a,o){return this.store.select(m.vY).pipe((0,l.s)(1),(0,_.n)(c=>this._apollo.mutate({mutation:f,variables:{updatePurchaseStatusInput:{id:s,status:a,paymentStatus:o}},errorPolicy:"all"}).pipe((0,d.M)(({data:p})=>{const P=structuredClone(c);P[c.findIndex(T=>T.id===s)]=p.updatePurchaseStatus.purchase,this.store.dispatch((0,n.tk)({purchases:P}))}))))}removePurchase(s){return this.store.select(m.vY).pipe((0,l.s)(1),(0,_.n)(a=>this._apollo.mutate({mutation:M,variables:{removePurchaseId:s},errorPolicy:"all"}).pipe((0,d.M)(({})=>{const c=(0,u.A)(a),p=a.findIndex(P=>P.id===s);c.splice(p,1),this.store.dispatch((0,n.tk)({purchases:c}))}))))}static#e=this.\u0275fac=function(a){return new(a||i)(D.KVO(r.Ic),D.KVO(O.UG),D.KVO(R.il))};static#t=this.\u0275prov=D.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},77005:(E,I,t)=>{t.d(I,{WM:()=>m,vf:()=>d});var u=t(67376);class d{constructor(r){delete r.ct,delete r.cut,delete r.rate,delete r.currency,delete r.currencyId;const v=r.cost;delete r.cost,r=u(r).omitBy(u.isNull).value(),Object.assign(this,r),this.quantity=Number(Number(r.quantity).toFixed(2)),this.price=Number(r.price.toFixed(2)),this.cud=Number(v.toFixed(2)),delete this.rateId}}var m=function(n){return n.nueva="nueva",n.recibida="recibida",n.rechazada="rechazada",n.cancelada="cancelada",n}(m||{})},99184:(E,I,t)=>{t.d(I,{_:()=>$});var u=t(89417),l=t(88834),_=t(82765),d=t(75351),h=t(32102),m=t(99213),n=t(59042),r=t(21413),v=t(56977),f=t(70152),M=t(25558),C=t(53159),e=t(54438),S=t(69599),A=t(59640);function D(i,g){if(1&i){const s=e.RV6();e.j41(0,"div")(1,"mat-checkbox",8),e.bIt("change",function(o){const c=e.eBV(s),p=c.$implicit,P=c.$index,y=e.XpG(2);return e.Njj(y.onCheckboxChange(P,p,o.checked))}),e.EFF(2),e.k0s()()}if(2&i){const s=g.$implicit,a=g.$index,o=e.XpG(2);e.R7$(),e.Y8G("checked",o.selectedIndex===a),e.R7$(),e.SpI(" ",s.name," ")}}function O(i,g){if(1&i&&e.Z7z(0,D,3,2,"div",null,e.fX1),2&i){const s=e.XpG();e.Dyx(s.depots)}}function R(i,g){1&i&&(e.j41(0,"div",9),e.EFF(1," No se encontraron almacenes "),e.k0s())}let $=(()=>{class i{constructor(s,a,o,c,p){this.data=s,this._changeDetectorRef=a,this._dialogRef=o,this._depotsService=c,this.store=p,this.searchInputControl=new u.MJ(null),this.selectedIndex=-1,this._unsubscribeAll=new r.B}ngOnInit(){this.store.select(C.c_).pipe((0,v.Q)(this._unsubscribeAll)).subscribe(s=>{this.depots=s,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,v.Q)(this._unsubscribeAll),(0,f.B)(300),(0,M.n)(s=>this._depotsService.findActiveDepots(s.trim()))).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onCheckboxChange(s,a,o){this.selectedIndex!==s||o?(this.selectedIndex=s,this.selectedDepot=a):(this.selectedIndex=-1,this.selectedDepot=null),this._changeDetectorRef.markForCheck()}closeDialog(){this._dialogRef.close({depot:this.selectedDepot})}static#e=this.\u0275fac=function(a){return new(a||i)(e.rXU(d.Vh),e.rXU(e.gRc),e.rXU(d.CP),e.rXU(S.t),e.rXU(A.il))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["select-depot-dialog"]],standalone:!0,features:[e.aNF],decls:12,vars:9,consts:[[1,"p-12","pb-2"],["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"grid","my-10","overflow-auto","max-h-100","sm:grid-cols-2"],[1,"flex","items-center","justify-center","w-full","px-8","py-4","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-button","","mat-dialog-close","",1,"-ml-4",3,"color"],["mat-flat-button","",3,"click","disabled","color"],["color","primary",3,"change","checked"],[1,"w-full","p-10","text-2xl","font-medium","text-center","sm:col-span-2"]],template:function(a,o){1&a&&(e.j41(0,"div",0)(1,"mat-form-field",1),e.nrm(2,"mat-icon",2)(3,"input",3),e.k0s(),e.j41(4,"div",4),e.DNE(5,O,2,0)(6,R,2,0),e.k0s()(),e.j41(7,"div",5)(8,"button",6),e.EFF(9,"Cancelar"),e.k0s(),e.j41(10,"button",7),e.bIt("click",function(){return o.closeDialog()}),e.EFF(11,"Aceptar"),e.k0s()()),2&a&&(e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",o.searchInputControl)("autocomplete","off")("placeholder","Ingrese el nombre del almac\xe9n..."),e.R7$(2),e.vxM(5,o.depots.length>0?5:6),e.R7$(3),e.Y8G("color","warn"),e.R7$(2),e.Y8G("disabled",!o.selectedDepot)("color","primary"))},dependencies:[l.Hl,l.$z,_.g7,_.So,h.RG,h.rl,h.JW,m.m_,m.An,n.fS,n.fg,u.X1,u.me,u.BC,u.l_,d.tx],encapsulation:2})}return i})()}}]);