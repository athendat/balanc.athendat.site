(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[6362],{68824:(S,T,e)=>{"use strict";e.d(T,{f:()=>d});var t=e(2578),y=e(62288),h=e(54438);const m="application/vnd.openxmlformats-officedocument.spreadsheet.sheet;charset=UTF-8",g="text/plain;charset=utf-8";let d=(()=>{class C{constructor(){}exportAsExcelFile(o,P,M=[[]],U=[]){const D=y.Wp.json_to_sheet(o);let b={fill:{fgColor:{rgb:"27086f"}},font:{color:{rgb:"FFFFFF"}}};M[0].length>0&&(y.Wp.sheet_add_aoa(D,M),M[0].forEach((s,c)=>{let v=y.Wp.encode_cell({c,r:0});D[v].s=b})),U.length>0&&(D["!cols"]=U);const I=y.M9({Sheets:{data:D},SheetNames:["data"]},{bookType:"xlsx",type:"array"});this._saveAsFile(I,P,".xlsx",m)}exportAsCsvFile(o,P){const U={Sheets:{data:y.Wp.json_to_sheet(o)},SheetNames:["data"]},D=y.M9(U,{bookType:"csv",type:"array"});this._saveAsFile(D,P,".csv",m)}exportAsFacFile(o,P,M,U){const D="Factura_"+o.no,b=`Numero=${o.no}\nMC=CUBAN PESO\nOM=${o.currency.namev}\nFecha=${Number(o.billDate)}\nEntidad=${o.customer.code}\nConcepto=${o.concept}\nComercial=${o.commercial.name} ${o.commercial.lastname1} ${o.commercial.lastname2}\nCtaBancoMC=${M}\nCtaBancoOM=${U}\nForma=${o.paymentMethod.name}\nOperacion=${o.operationType.name}\nObservacion=${o.obs}\nMA=\nCtoArancel=\nPorcientoAra=0\nTalon=001\nContrato=\nVtaCadena=0\nNomHecho=${P.fullname}\nCargoHecho=${P.title}\nCIHecho=\nNomJA=\nCIJA=\nNomTra=\nChapa=\nLicTra=\nCITra=\nNomCliente=${o.customer.name}\nCargoCliente=\nCICliente=${o.customer.nit}\n[Propiedades]\n\n[Detalle]\n${this._versatInvoiceGenerator(o.productsInBill)}\n\n[PieFirma]\n        `;this._saveAsFile(b,D,".fac",g)}exportAsJsonFile(o){encodeURIComponent(o),this._saveAsFile(o,"data.json",".json",g)}_saveAsFile(o,P,M,U){const D=new Blob([o],{type:U});t.saveAs(D,P+"_export_"+(new Date).getTime()+M)}_versatInvoiceGenerator(o){let P="";return o.forEach(M=>{P+=`0002|002|993449|${M.uom}|1111111|0|0|0|0|0|${M.price}||0|0\n`}),P}static#t=this.\u0275fac=function(P){return new(P||C)};static#e=this.\u0275prov=h.jDH({token:C,factory:C.\u0275fac,providedIn:"root"})}return C})()},63425:(S,T,e)=>{"use strict";e.d(T,{B:()=>h,n:()=>y});var t=e(54438),l=e(21326);const y=(m,g)=>(0,t.WQX)(l.N).getUoms(),h=(m,g)=>(0,t.WQX)(l.N).findActiveUoms()},17085:(S,T,e)=>{"use strict";e.d(T,{Ns:()=>h});var t=e(59640);const l=m=>m.uoms,h=((0,t.Mz)(l,m=>m.uom),(0,t.Mz)(l,m=>m.uoms))},21326:(S,T,e)=>{"use strict";e.d(T,{N:()=>U});var t=e(54438),l=e(53473),y=e(96697),h=e(25558),m=e(88141),g=e(59640),i=e(44e3),f=e(98216),A=e(17085);const u=l.J1`
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
`,d=l.J1`
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
`,C=l.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateUomStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,a=l.J1`
    mutation RemoveUom($removeUomId: String!) {
        removeUom(id: $removeUomId) {
            ok
            message
        }
    }
`,o=l.J1`
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
`,P=l.J1`
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
`,M=l.J1`
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
`;let U=(()=>{class D{constructor(){this.apolloProvider=(0,t.WQX)(l.Ic),this.store=(0,t.WQX)(g.il),this._apollo=this.apolloProvider.use("BALANC")}createUom(n){return this.store.select(A.Ns).pipe((0,y.s)(1),(0,h.n)(I=>this._apollo.mutate({mutation:u,variables:{createUomInput:n},errorPolicy:"all"}).pipe((0,m.M)(({data:s})=>{const c=structuredClone(I);c.push(s.createUom.uom),this.store.dispatch((0,i.JR)({uoms:c}))}))))}getUoms(n=1,I=20,s="code",c="asc",_=""){return this._apollo.query({query:o,errorPolicy:"all",variables:{offset:I*(n-1),limit:I,sort:s,order:c,search:_}}).pipe((0,m.M)(({data:v})=>{this.store.dispatch((0,f.Bp)({pagination:v.findAllUoms.pagination})),this.store.dispatch((0,i.JR)({uoms:v.findAllUoms.uoms}))}))}findActiveUoms(n="",I=10){return this._apollo.query({query:P,variables:{search:n,size:I},errorPolicy:"all"}).pipe((0,m.M)(({data:s})=>{this.store.dispatch((0,i.JR)({uoms:s.findActiveUoms.uoms}))}))}getUomById(n){return this._apollo.query({query:M,variables:{findUomByIdId:n},errorPolicy:"all"}).pipe((0,m.M)(({data:I})=>{this.store.dispatch((0,i.qV)({uom:I.findUomById.uom}))}))}updateUom(n){return this.store.select(A.Ns).pipe((0,y.s)(1),(0,h.n)(I=>this._apollo.mutate({mutation:d,variables:{updateUomInput:n},errorPolicy:"all"}).pipe((0,m.M)(({data:s})=>{const c=structuredClone(I);c[I.findIndex(v=>v.id===n.id)]=s.updateUom.uom,this.store.dispatch((0,i.JR)({uoms:c}))}))))}updateUomStatus(n){return this.store.select(A.Ns).pipe((0,y.s)(1),(0,h.n)(I=>this._apollo.mutate({mutation:C,variables:{updateEntityStatusInput:n},errorPolicy:"all"}).pipe((0,m.M)(({})=>{const c=structuredClone(I);c[I.findIndex(v=>v.id===n.id)].active=n.active,this.store.dispatch((0,i.JR)({uoms:c}))}))))}removeUom(n){return this.store.select(A.Ns).pipe((0,y.s)(1),(0,h.n)(I=>this._apollo.mutate({mutation:a,variables:{removeUomId:n},errorPolicy:"all"}).pipe((0,m.M)(({errors:s})=>{if(s)return;const c=structuredClone(I),_=I.findIndex(v=>v.id===n);c.splice(_,1),this.store.dispatch((0,i.JR)({uoms:c}))}))))}static#t=this.\u0275fac=function(I){return new(I||D)};static#e=this.\u0275prov=t.jDH({token:D,factory:D.\u0275fac,providedIn:"root"})}return D})()},76856:(S,T,e)=>{"use strict";e.d(T,{FS:()=>h,O0:()=>g});var t=e(54438),l=e(32488),y=e(77005);const h=(i,f)=>(0,t.WQX)(l.W).getPurchases(),g=(i,f)=>(0,t.WQX)(l.W).getPurchases(0,25,"createdAt","asc","","",[],[],[y.WM.nueva])},35526:(S,T,e)=>{"use strict";e.d(T,{vY:()=>h});var t=e(59640);const l=m=>m.purchases,h=((0,t.Mz)(l,m=>m.purchase),(0,t.Mz)(l,m=>m.purchases))},32488:(S,T,e)=>{"use strict";e.d(T,{W:()=>b});var t=e(33446),l=e(96697),y=e(25558),h=e(88141),m=e(96354),g=e(35526),i=e(27883),f=e(53473);const A=f.J1`
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

`,u=f.J1`
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
`,d=f.J1`
    mutation RemovePurchase($removePurchaseId: String!) {
        removePurchase(id: $removePurchaseId)
    }
`,C=f.J1`
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
`,a=f.J1`
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
`,o=f.J1`
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
`;var P=e(98216),M=e(54438),U=e(95416),D=e(59640);let b=(()=>{class n{constructor(s,c,_){this.apolloProvider=s,this._snackBar=c,this.store=_,this._apollo=this.apolloProvider.use("BALANC")}createPurchase(s){return this.store.select(g.vY).pipe((0,l.s)(1),(0,y.n)(c=>this._apollo.mutate({mutation:A,variables:{createPurchaseInput:s},errorPolicy:"all"}).pipe((0,h.M)(({data:v})=>{if(v){const O=(0,t.A)(c);O.push(v.createdPurchase),this.store.dispatch((0,i.tk)({purchases:O}))}}))))}getPurchases(s=0,c=50,_="code",v="desc",O="",x=null,B=[],p=[],$=[],r=[],E=null){return this._apollo.query({query:C,errorPolicy:"all",variables:{page:s,size:c,sort:_,order:v,search:O,supplierId:x,vouchersId:B,paymentMethodsId:p,status:$,paymentStatus:r,voucherDate:E}}).pipe((0,h.M)(({data:R})=>{R&&(this.store.dispatch((0,i.tk)({purchases:R.findAllPurchases.purchases})),this.store.dispatch((0,P.Bp)({pagination:R.findAllPurchases.pagination})))}))}findPurchases(s="",c,_=10){return this._apollo.query({query:a,variables:{search:s,size:_,status:c},errorPolicy:"all"}).pipe((0,m.T)(({data:v})=>v?v.findPurchases:[]),(0,h.M)(v=>{v&&this.store.dispatch((0,i.tk)({purchases:v}))}))}getPurchaseById(s){return this._apollo.query({query:o,variables:{findPurchaseByIdId:s},errorPolicy:"all"}).pipe((0,h.M)(({data:_})=>{this.store.dispatch((0,i.yU)({purchase:_.purchase}))}))}updatePurchaseStatus(s,c,_){return this.store.select(g.vY).pipe((0,l.s)(1),(0,y.n)(v=>this._apollo.mutate({mutation:u,variables:{updatePurchaseStatusInput:{id:s,status:c,paymentStatus:_}},errorPolicy:"all"}).pipe((0,h.M)(({data:O})=>{const x=structuredClone(v);x[v.findIndex(p=>p.id===s)]=O.updatePurchaseStatus.purchase,this.store.dispatch((0,i.tk)({purchases:x}))}))))}removePurchase(s){return this.store.select(g.vY).pipe((0,l.s)(1),(0,y.n)(c=>this._apollo.mutate({mutation:d,variables:{removePurchaseId:s},errorPolicy:"all"}).pipe((0,h.M)(({})=>{const v=(0,t.A)(c),O=c.findIndex(x=>x.id===s);v.splice(O,1),this.store.dispatch((0,i.tk)({purchases:v}))}))))}static#t=this.\u0275fac=function(c){return new(c||n)(M.KVO(f.Ic),M.KVO(U.UG),M.KVO(D.il))};static#e=this.\u0275prov=M.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},77005:(S,T,e)=>{"use strict";e.d(T,{WM:()=>g,vf:()=>h});var t=e(67376);class h{constructor(f){delete f.ct,delete f.cut,delete f.rate,delete f.currency,delete f.currencyId,delete f.isPerishable;const A=f.cost;delete f.cost,f=t(f).omitBy(t.isNull).value(),Object.assign(this,f),this.quantity=Number(Number(f.quantity).toFixed(2)),this.price=Number(f.price.toFixed(2)),this.cud=Number(A.toFixed(2)),delete this.rateId}}var g=function(i){return i.nueva="nueva",i.recibida="recibida",i.rechazada="rechazada",i.cancelada="cancelada",i}(g||{})},99184:(S,T,e)=>{"use strict";e.d(T,{_:()=>b});var t=e(89417),l=e(88834),y=e(82765),h=e(75351),m=e(32102),g=e(99213),i=e(59042),f=e(21413),A=e(56977),u=e(70152),d=e(25558),C=e(53159),a=e(54438),o=e(69599),P=e(59640);function M(n,I){if(1&n){const s=a.RV6();a.j41(0,"div")(1,"mat-checkbox",8),a.bIt("change",function(_){const v=a.eBV(s),O=v.$implicit,x=v.$index,B=a.XpG(2);return a.Njj(B.onCheckboxChange(x,O,_.checked))}),a.EFF(2),a.k0s()()}if(2&n){const s=I.$implicit,c=I.$index,_=a.XpG(2);a.R7$(),a.Y8G("checked",_.selectedIndex===c),a.R7$(),a.SpI(" ",s.name," ")}}function U(n,I){if(1&n&&a.Z7z(0,M,3,2,"div",null,a.fX1),2&n){const s=a.XpG();a.Dyx(s.depots)}}function D(n,I){1&n&&(a.j41(0,"div",9),a.EFF(1," No se encontraron almacenes "),a.k0s())}let b=(()=>{class n{constructor(s,c,_,v,O){this.data=s,this._changeDetectorRef=c,this._dialogRef=_,this._depotsService=v,this.store=O,this.searchInputControl=new t.MJ(null),this.selectedIndex=-1,this._unsubscribeAll=new f.B}ngOnInit(){this.store.select(C.c_).pipe((0,A.Q)(this._unsubscribeAll)).subscribe(s=>{this.depots=s,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,A.Q)(this._unsubscribeAll),(0,u.B)(300),(0,d.n)(s=>this._depotsService.findActiveDepots(s.trim()))).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onCheckboxChange(s,c,_){this.selectedIndex!==s||_?(this.selectedIndex=s,this.selectedDepot=c):(this.selectedIndex=-1,this.selectedDepot=null),this._changeDetectorRef.markForCheck()}closeDialog(){this._dialogRef.close({depot:this.selectedDepot})}static#t=this.\u0275fac=function(c){return new(c||n)(a.rXU(h.Vh),a.rXU(a.gRc),a.rXU(h.CP),a.rXU(o.t),a.rXU(P.il))};static#e=this.\u0275cmp=a.VBU({type:n,selectors:[["select-depot-dialog"]],standalone:!0,features:[a.aNF],decls:12,vars:9,consts:[[1,"p-12","pb-2"],["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"grid","my-10","overflow-auto","max-h-100","sm:grid-cols-2"],[1,"flex","items-center","justify-center","w-full","px-8","py-4","sm:justify-end","bg-gray-50","dark:bg-black/10"],["mat-button","","mat-dialog-close","",1,"-ml-4",3,"color"],["mat-flat-button","",3,"click","disabled","color"],["color","primary",3,"change","checked"],[1,"w-full","p-10","text-2xl","font-medium","text-center","sm:col-span-2"]],template:function(c,_){1&c&&(a.j41(0,"div",0)(1,"mat-form-field",1),a.nrm(2,"mat-icon",2)(3,"input",3),a.k0s(),a.j41(4,"div",4),a.DNE(5,U,2,0)(6,D,2,0),a.k0s()(),a.j41(7,"div",5)(8,"button",6),a.EFF(9,"Cancelar"),a.k0s(),a.j41(10,"button",7),a.bIt("click",function(){return _.closeDialog()}),a.EFF(11,"Aceptar"),a.k0s()()),2&c&&(a.R7$(),a.Y8G("subscriptSizing","dynamic"),a.R7$(),a.Y8G("svgIcon","mat_solid:search"),a.R7$(),a.Y8G("formControl",_.searchInputControl)("autocomplete","off")("placeholder","Ingrese el nombre del almac\xe9n..."),a.R7$(2),a.vxM(5,_.depots.length>0?5:6),a.R7$(3),a.Y8G("color","warn"),a.R7$(2),a.Y8G("disabled",!_.selectedDepot)("color","primary"))},dependencies:[l.Hl,l.$z,y.g7,y.So,m.RG,m.rl,m.JW,g.m_,g.An,i.fS,i.fg,t.X1,t.me,t.BC,t.l_,h.tx],encapsulation:2})}return n})()},78357:(S,T,e)=>{"use strict";e.d(T,{i:()=>B});var t=e(54438),l=e(89417),y=e(59115),h=e(99213),m=e(88834),g=e(21413),i=e(56977),f=e(5864),A=e(82765),u=e(60177),d=e(25084),C=e(32102),a=e(59042),o=e(82798),P=e(60850),M=e(86600);const U=["bt"];function D(p,$){if(1&p&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"uppercase"),t.k0s()),2&p){const r=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,r.get("name").value))}}function b(p,$){if(1&p&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()),2&p){const r=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,r.get("name").value))}}function n(p,$){if(1&p&&(t.j41(0,"div",15)(1,"mat-checkbox",16),t.DNE(2,D,3,3,"span")(3,b,3,3,"span"),t.k0s()()),2&p){const r=$.$implicit,E=t.XpG(2);t.R7$(),t.Y8G("formControl",r.get("checked")),t.R7$(),t.vxM(2,E.useUpperCase?2:-1),t.R7$(),t.vxM(3,E.useUpperCase?-1:3)}}function I(p,$){if(1&p&&(t.j41(0,"div",9),t.Z7z(1,n,4,3,"div",15,t.fX1),t.k0s()),2&p){const r=t.XpG();t.R7$(),t.Dyx(r.formArray.controls)}}function s(p,$){if(1&p&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&p){const r=t.sdS(4),E=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",r)("formControl",E.dateControl)("max",E.maxDate),t.R7$(),t.Y8G("for",r)}}function c(p,$){if(1&p){const r=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const F=t.eBV(r).$implicit,R=t.XpG(2);return t.Njj(R.selectEntity(F))}),t.EFF(1),t.k0s()}if(2&p){const r=$.$implicit,E=t.XpG(2);t.Y8G("value",r[E.entityPropertyName]),t.R7$(),t.SpI(" ",r[E.entityPropertyName]," ")}}function _(p,$){if(1&p&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,c,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&p){const r=t.sdS(4),E=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",E.searchEntityControl)("matAutocomplete",r)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,E.entitiesFiltered))}}function v(p,$){if(1&p&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&p){const r=t.sdS(4),E=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",r)("formControl",E.dateControl)("max",E.maxDate),t.R7$(),t.Y8G("for",r)}}function O(p,$){if(1&p){const r=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const F=t.eBV(r).$implicit,R=t.XpG(2);return t.Njj(R.selectEntity(F))}),t.EFF(1),t.k0s()}if(2&p){const r=$.$implicit;t.Y8G("value",r.name),t.R7$(),t.SpI(" ",r.name," ")}}function x(p,$){if(1&p&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,O,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&p){const r=t.sdS(4),E=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",E.searchEntityControl)("matAutocomplete",r)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,E.entitiesFiltered))}}let B=(()=>{class p{constructor(){this.entityPropertyName="name",this.useUpperCase=!1,this.dataChange=new t.bkB,this.data=[],this.maxDate=new Date,this.dateControl=new l.MJ({disabled:!0}),this.formArray=new l.Yp([]),this._unsubscribeAll=new g.B,this._formBuilder=(0,t.WQX)(l.ok),this._changeDetectorRef=(0,t.WQX)(t.gRc)}get hasFilter(){return!f.H.IsNullOrEmpty(this.selectedFilter)}ngOnInit(){this.initializeFormArray(),this.dateControl.valueChanges.pipe((0,i.Q)(this._unsubscribeAll)).subscribe(r=>{this.dataChange.next(r),this.selectedFilter=r,this.menu.closeMenu()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}clearFilter(){switch(this.filterType){case"filterEntity":this.searchEntityControl.setValue(""),this.dataChange.next(null),this.selectedFilter=null;break;case"date":this.dateControl.setValue(null);break;case"multiSelect":case"multiSelectEntity":this.clearFormArray()}this.menu.closeMenu()}closeMenu(){this.menu.closeMenu()}selectEntity(r){this.dataChange.next(r),this.selectedFilter=r,this.menu.closeMenu()}initializeFormArray(){switch(this.filterType){case"multiSelect":this.formArray=this._formBuilder.array(this.data.map(r=>this._formBuilder.group({name:[r],checked:[!1]})));break;case"multiSelectEntity":this.formArray=this._formBuilder.array(this.data.map(r=>this._formBuilder.group({id:[r.id],name:[r[this.entityPropertyName]],checked:[!1]})))}this._changeDetectorRef.markForCheck(),this.formArraySubscription=this.formArray.valueChanges.pipe((0,i.Q)(this._unsubscribeAll)).subscribe(r=>{let E=[];switch(this.filterType){case"multiSelect":E=r.filter(F=>F.checked).map(F=>F.name);break;case"multiSelectEntity":for(const F of r.filter(R=>R.checked)){const R=this.data.find(j=>j.id===F.id);E.push(R)}}this.dataChange.next(E),this.selectedFilter=E})}clearFormArray(){this.formArraySubscription.unsubscribe(),this.selectedFilter=[],this.dataChange.next([]),this.initializeFormArray()}static#t=this.\u0275fac=function(E){return new(E||p)};static#e=this.\u0275cmp=t.VBU({type:p,selectors:[["table-filter"]],viewQuery:function(E,F){if(1&E&&t.GBs(U,7),2&E){let R;t.mGM(R=t.lsd())&&(F.menu=R.first)}},inputs:{entityPropertyName:"entityPropertyName",filterType:"filterType",useUpperCase:"useUpperCase",data:"data",entitiesFiltered:"entitiesFiltered",searchEntityControl:"searchEntityControl"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.aNF],decls:19,vars:6,consts:[["bt","matMenuTrigger"],["listStatusMenu","matMenu"],["dateEntity",""],["SearchEntity",""],["entityDate",""],["entitiesAutocomplete","matAutocomplete"],["mat-icon-button","","matTooltip","",1,"w-6","h-6","min-h-6","min-w-6",3,"color","matMenuTriggerFor"],[1,"icon-size-4",3,"svgIcon"],[3,"click"],[1,"w-full","px-4","py-4"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","mat-fuse-de","fuse-mat-rounded","max-w-64","min-w-64",3,"subscriptSizing"],[1,"flex","justify-end","w-full","p-2","pb-0","border-t-2"],["mat-flat-button","",3,"click"],["mat-button","","color","warn",3,"click"],[1,""],["color","primary",3,"formControl"],["matInput","","placeholder","Fecha",3,"matDatepicker","formControl","max"],["matIconSuffix","",3,"for"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],[3,"value"],[3,"click","value"]],template:function(E,F){if(1&E){const R=t.RV6();t.j41(0,"div")(1,"button",6,0),t.nrm(3,"mat-icon",7),t.k0s(),t.j41(4,"mat-menu",null,1)(6,"div",8),t.bIt("click",function(k){return t.eBV(R),t.Njj(k.stopPropagation())}),t.DNE(7,I,3,0,"div",9)(8,s,5,5,"mat-form-field",10)(9,_,8,7,"mat-form-field",11),t.j41(10,"div",12)(11,"button",13),t.bIt("click",function(){return t.eBV(R),t.Njj(F.closeMenu())}),t.EFF(12,"Cerrar"),t.k0s(),t.j41(13,"button",14),t.bIt("click",function(){return t.eBV(R),t.Njj(F.clearFilter())}),t.EFF(14,"Limpiar"),t.k0s()()()()(),t.DNE(15,v,5,5,"ng-template",null,2,t.C5r)(17,x,8,7,"ng-template",null,3,t.C5r)}if(2&E){const R=t.sdS(5);t.R7$(),t.Y8G("color",F.hasFilter?"primary":"default")("matMenuTriggerFor",R),t.R7$(2),t.Y8G("svgIcon","mat_solid:filter_list"),t.R7$(4),t.vxM(7,"multiSelect"===F.filterType||"multiSelectEntity"===F.filterType?7:-1),t.R7$(),t.vxM(8,"date"===F.filterType?8:-1),t.R7$(),t.vxM(9,"filterEntity"===F.filterType?9:-1)}},dependencies:[u.Jj,m.Hl,m.$z,m.iY,h.m_,h.An,y.Cn,y.kk,y.Cp,A.g7,A.So,u.Pc,u.PV,d.X6,d.Vh,d.bZ,d.bU,C.RG,C.rl,C.JW,C.yw,a.fS,a.fg,l.X1,l.me,l.BC,l.l_,P.jL,P.$3,M.wT,P.pN,o.Ve],encapsulation:2,changeDetection:0})}return p})()},2578:function(S,T){var e,l;void 0!==(l="function"==typeof(e=function(){"use strict";function h(u,d,C){var a=new XMLHttpRequest;a.open("GET",u),a.responseType="blob",a.onload=function(){A(a.response,d,C)},a.onerror=function(){console.error("could not download file")},a.send()}function m(u){var d=new XMLHttpRequest;d.open("HEAD",u,!1);try{d.send()}catch{}return 200<=d.status&&299>=d.status}function g(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(d)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,f=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),A=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(u,d,C){var a=i.URL||i.webkitURL,o=document.createElement("a");o.download=d=d||u.name||"download",o.rel="noopener","string"==typeof u?(o.href=u,o.origin===location.origin?g(o):m(o.href)?h(u,d,C):g(o,o.target="_blank")):(o.href=a.createObjectURL(u),setTimeout(function(){a.revokeObjectURL(o.href)},4e4),setTimeout(function(){g(o)},0))}:"msSaveOrOpenBlob"in navigator?function(u,d,C){if(d=d||u.name||"download","string"!=typeof u)navigator.msSaveOrOpenBlob(function y(u,d){return typeof d>"u"?d={autoBom:!1}:"object"!=typeof d&&(console.warn("Deprecated: Expected third argument to be a object"),d={autoBom:!d}),d.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\ufeff",u],{type:u.type}):u}(u,C),d);else if(m(u))h(u,d,C);else{var a=document.createElement("a");a.href=u,a.target="_blank",setTimeout(function(){g(a)})}}:function(u,d,C,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof u)return h(u,d,C);var o="application/octet-stream"===u.type,P=/constructor/i.test(i.HTMLElement)||i.safari,M=/CriOS\/[\d]+/.test(navigator.userAgent);if((M||o&&P||f)&&typeof FileReader<"u"){var U=new FileReader;U.onloadend=function(){var n=U.result;n=M?n:n.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=n:location=n,a=null},U.readAsDataURL(u)}else{var D=i.URL||i.webkitURL,b=D.createObjectURL(u);a?a.location=b:location.href=b,a=null,setTimeout(function(){D.revokeObjectURL(b)},4e4)}});i.saveAs=A.saveAs=A,S.exports=A})?e.apply(T,[]):e)&&(S.exports=l)}}]);