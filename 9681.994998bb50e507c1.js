(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9681],{68824:(x,S,e)=>{"use strict";e.d(S,{f:()=>n});var t=e(2578),v=e(62288),_=e(17705);const l="application/vnd.openxmlformats-officedocument.spreadsheet.sheet;charset=UTF-8",A="text/plain;charset=utf-8";let n=(()=>{class E{constructor(){}exportAsExcelFile(a,I,g=[[]],P=[]){const C=v.Wp.json_to_sheet(a);let b={fill:{fgColor:{rgb:"27086f"}},font:{color:{rgb:"FFFFFF"}}};g[0].length>0&&(v.Wp.sheet_add_aoa(C,g),g[0].forEach((R,i)=>{let y=v.Wp.encode_cell({c:i,r:0});C[y].s=b})),P.length>0&&(C["!cols"]=P);const h=v.M9({Sheets:{data:C},SheetNames:["data"]},{bookType:"xlsx",type:"array"});this._saveAsFile(h,I,".xlsx",l)}exportAsCsvFile(a,I){const P={Sheets:{data:v.Wp.json_to_sheet(a)},SheetNames:["data"]},C=v.M9(P,{bookType:"csv",type:"array"});this._saveAsFile(C,I,".csv",l)}exportAsFacFile(a,I,g,P){const C="Factura_"+a.no,b=`Numero=${a.no}\nMC=CUBAN PESO\nOM=${a.currency.namev}\nFecha=${Number(a.billDate)}\nEntidad=${a.customer.code}\nConcepto=${a.concept}\nComercial=${a.commercial.name} ${a.commercial.lastname1} ${a.commercial.lastname2}\nCtaBancoMC=${g}\nCtaBancoOM=${P}\nForma=${a.paymentMethod.name}\nOperacion=${a.operationType.name}\nObservacion=${a.obs}\nMA=\nCtoArancel=\nPorcientoAra=0\nTalon=001\nContrato=\nVtaCadena=0\nNomHecho=${I.fullname}\nCargoHecho=${I.title}\nCIHecho=\nNomJA=\nCIJA=\nNomTra=\nChapa=\nLicTra=\nCITra=\nNomCliente=${a.customer.name}\nCargoCliente=\nCICliente=${a.customer.nit}\n[Propiedades]\n\n[Detalle]\n${this._versatInvoiceGenerator(a.productsInBill)}\n\n[PieFirma]\n        `;this._saveAsFile(b,C,".fac",A)}exportAsJsonFile(a){encodeURIComponent(a),this._saveAsFile(a,"data.json",".json",A)}_saveAsFile(a,I,g,P){const C=new Blob([a],{type:P});t.saveAs(C,I+"_export_"+(new Date).getTime()+g)}_versatInvoiceGenerator(a){let I="";return a.forEach(g=>{I+=`0002|002|993449|${g.uom}|1111111|0|0|0|0|0|${g.price}||0|0\n`}),I}static#t=this.\u0275fac=function(I){return new(I||E)};static#e=this.\u0275prov=_.jDH({token:E,factory:E.\u0275fac,providedIn:"root"})}return E})()},63425:(x,S,e)=>{"use strict";e.d(S,{B:()=>_,n:()=>v});var t=e(17705),c=e(21326);const v=(l,A)=>(0,t.WQX)(c.N).getUoms(),_=(l,A)=>(0,t.WQX)(c.N).findActiveUoms()},17085:(x,S,e)=>{"use strict";e.d(S,{Ns:()=>_});var t=e(59640);const c=l=>l.uoms,_=((0,t.Mz)(c,l=>l.uom),(0,t.Mz)(c,l=>l.uoms))},21326:(x,S,e)=>{"use strict";e.d(S,{N:()=>P});var t=e(17705),c=e(53473),v=e(96697),_=e(25558),l=e(88141),A=e(59640),d=e(44e3),U=e(98216),D=e(17085);const r=c.J1`
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
`,n=c.J1`
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
`,E=c.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateUomStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,p=c.J1`
    mutation RemoveUom($removeUomId: String!) {
        removeUom(id: $removeUomId) {
            ok
            message
        }
    }
`,a=c.J1`
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
`,I=c.J1`
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
`,g=c.J1`
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
`;let P=(()=>{class C{constructor(){this.apolloProvider=(0,t.WQX)(c.Ic),this.store=(0,t.WQX)(A.il),this._apollo=this.apolloProvider.use("BALANC")}createUom(m){return this.store.select(D.Ns).pipe((0,v.s)(1),(0,_.n)(h=>this._apollo.mutate({mutation:r,variables:{createUomInput:m},errorPolicy:"all"}).pipe((0,l.M)(({data:R})=>{const i=structuredClone(h);i.push(R.createUom.uom),this.store.dispatch((0,d.JR)({uoms:i}))}))))}getUoms(m=1,h=20,R="code",i="asc",f=""){return this._apollo.query({query:a,errorPolicy:"all",variables:{offset:h*(m-1),limit:h,sort:R,order:i,search:f}}).pipe((0,l.M)(({data:y})=>{this.store.dispatch((0,U.Bp)({pagination:y.findAllUoms.pagination})),this.store.dispatch((0,d.JR)({uoms:y.findAllUoms.uoms}))}))}findActiveUoms(m="",h=10){return this._apollo.query({query:I,variables:{search:m,size:h},errorPolicy:"all"}).pipe((0,l.M)(({data:R})=>{this.store.dispatch((0,d.JR)({uoms:R.findActiveUoms.uoms}))}))}getUomById(m){return this._apollo.query({query:g,variables:{findUomByIdId:m},errorPolicy:"all"}).pipe((0,l.M)(({data:h})=>{this.store.dispatch((0,d.qV)({uom:h.findUomById.uom}))}))}updateUom(m){return this.store.select(D.Ns).pipe((0,v.s)(1),(0,_.n)(h=>this._apollo.mutate({mutation:n,variables:{updateUomInput:m},errorPolicy:"all"}).pipe((0,l.M)(({data:R})=>{const i=structuredClone(h);i[h.findIndex(y=>y.id===m.id)]=R.updateUom.uom,this.store.dispatch((0,d.JR)({uoms:i}))}))))}updateUomStatus(m){return this.store.select(D.Ns).pipe((0,v.s)(1),(0,_.n)(h=>this._apollo.mutate({mutation:E,variables:{updateEntityStatusInput:m},errorPolicy:"all"}).pipe((0,l.M)(({})=>{const i=structuredClone(h);i[h.findIndex(y=>y.id===m.id)].active=m.active,this.store.dispatch((0,d.JR)({uoms:i}))}))))}removeUom(m){return this.store.select(D.Ns).pipe((0,v.s)(1),(0,_.n)(h=>this._apollo.mutate({mutation:p,variables:{removeUomId:m},errorPolicy:"all"}).pipe((0,l.M)(({errors:R})=>{if(R)return;const i=structuredClone(h),f=h.findIndex(y=>y.id===m);i.splice(f,1),this.store.dispatch((0,d.JR)({uoms:i}))}))))}static#t=this.\u0275fac=function(h){return new(h||C)};static#e=this.\u0275prov=t.jDH({token:C,factory:C.\u0275fac,providedIn:"root"})}return C})()},35526:(x,S,e)=>{"use strict";e.d(S,{vY:()=>_});var t=e(59640);const c=l=>l.purchases,_=((0,t.Mz)(c,l=>l.purchase),(0,t.Mz)(c,l=>l.purchases))},32488:(x,S,e)=>{"use strict";e.d(S,{W:()=>m});var t=e(33446),c=e(96697),v=e(25558),_=e(88141),l=e(96354),A=e(35526),d=e(27883),U=e(53473);const D=U.J1`
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

`,r=U.J1`
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
`,n=U.J1`
    mutation RemovePurchase($removePurchaseId: String!) {
        removePurchase(id: $removePurchaseId)
    }
`,E=U.J1`
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
`,p=U.J1`
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
`,a=U.J1`
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
`,I=U.J1`
    query FetchStockPurchaseDetails($startDate: DateTime!, $endDate: DateTime!) {
        fetchStockPurchaseDetails(startDate: $startDate, endDate: $endDate) {
            ok
            message

            purchaseStockDetails {
                purchase {
                    id
                    code
                }

                details {
                    purchaseId
                    purchased
                    productId,
                    productName
                    priceAvg
                    cost
                    sold
                    returned
                    shrinkages
                    losses
                    revenue
                    profit
                }
            }

        }
    }
`;var g=e(98216),P=e(17705),C=e(95416),b=e(59640);let m=(()=>{class h{constructor(i,f,y){this.apolloProvider=i,this._snackBar=f,this.store=y,this._apollo=this.apolloProvider.use("BALANC")}createPurchase(i){return this.store.select(A.vY).pipe((0,c.s)(1),(0,v.n)(f=>this._apollo.mutate({mutation:D,variables:{createPurchaseInput:i},errorPolicy:"all"}).pipe((0,_.M)(({data:M})=>{if(M){const O=(0,t.A)(f);O.push(M.createdPurchase),this.store.dispatch((0,d.tk)({purchases:O}))}}))))}getPurchases(i=0,f=50,y="code",M="desc",O="",B=null,s=[],$=[],o=[],u=[],T=null){return this._apollo.query({query:E,errorPolicy:"all",variables:{page:i,size:f,sort:y,order:M,search:O,supplierId:B,vouchersId:s,paymentMethodsId:$,status:o,paymentStatus:u,voucherDate:T}}).pipe((0,_.M)(({data:k})=>{k&&(this.store.dispatch((0,d.tk)({purchases:k.findAllPurchases.purchases})),this.store.dispatch((0,g.Bp)({pagination:k.findAllPurchases.pagination})))}))}findPurchases(i="",f,y=10){return this._apollo.query({query:p,variables:{search:i,size:y,status:f},errorPolicy:"all"}).pipe((0,l.T)(({data:M})=>M?M.findPurchases:[]),(0,_.M)(M=>{M&&this.store.dispatch((0,d.tk)({purchases:M}))}))}getPurchaseById(i){return this._apollo.query({query:a,variables:{findPurchaseByIdId:i},errorPolicy:"all"}).pipe((0,_.M)(({data:y})=>{this.store.dispatch((0,d.yU)({purchase:y.purchase}))}))}updatePurchaseStatus(i,f,y){return this.store.select(A.vY).pipe((0,c.s)(1),(0,v.n)(M=>this._apollo.mutate({mutation:r,variables:{updatePurchaseStatusInput:{id:i,status:f,paymentStatus:y}},errorPolicy:"all"}).pipe((0,_.M)(({data:O})=>{const B=structuredClone(M);B[M.findIndex($=>$.id===i)]=O.updatePurchaseStatus.purchase,this.store.dispatch((0,d.tk)({purchases:B}))}))))}removePurchase(i){return this.store.select(A.vY).pipe((0,c.s)(1),(0,v.n)(f=>this._apollo.mutate({mutation:n,variables:{removePurchaseId:i},errorPolicy:"all"}).pipe((0,_.M)(({})=>{const M=(0,t.A)(f),O=f.findIndex(B=>B.id===i);M.splice(O,1),this.store.dispatch((0,d.tk)({purchases:M}))}))))}fetchStockPurchaseDetails(i,f){return this._apollo.query({query:I,variables:{startDate:i,endDate:f},errorPolicy:"all"}).pipe((0,l.T)(({data:y})=>y?y.fetchStockPurchaseDetails:null))}static#t=this.\u0275fac=function(f){return new(f||h)(P.KVO(U.Ic),P.KVO(C.UG),P.KVO(b.il))};static#e=this.\u0275prov=P.jDH({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},78357:(x,S,e)=>{"use strict";e.d(S,{i:()=>B});var t=e(17705),c=e(89417),v=e(59115),_=e(99213),l=e(88834),A=e(21413),d=e(56977),U=e(5864),D=e(82765),r=e(60177),n=e(25084),E=e(53719),p=e(59042),a=e(82798),I=e(60850),g=e(86600);const P=["bt"];function C(s,$){if(1&s&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"uppercase"),t.k0s()),2&s){const o=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,o.get("name").value))}}function b(s,$){if(1&s&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()),2&s){const o=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,o.get("name").value))}}function m(s,$){if(1&s&&(t.j41(0,"div",15)(1,"mat-checkbox",16),t.DNE(2,C,3,3,"span")(3,b,3,3,"span"),t.k0s()()),2&s){const o=$.$implicit,u=t.XpG(2);t.R7$(),t.Y8G("formControl",o.get("checked")),t.R7$(),t.vxM(u.useUpperCase?2:-1),t.R7$(),t.vxM(u.useUpperCase?-1:3)}}function h(s,$){if(1&s&&(t.j41(0,"div",9),t.Z7z(1,m,4,3,"div",15,t.fX1),t.k0s()),2&s){const o=t.XpG();t.R7$(),t.Dyx(o.formArray.controls)}}function R(s,$){if(1&s&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&s){const o=t.sdS(4),u=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",o)("formControl",u.dateControl)("max",u.maxDate),t.R7$(),t.Y8G("for",o)}}function i(s,$){if(1&s){const o=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const T=t.eBV(o).$implicit,F=t.XpG(2);return t.Njj(F.selectEntity(T))}),t.EFF(1),t.k0s()}if(2&s){const o=$.$implicit,u=t.XpG(2);t.Y8G("value",o[u.entityPropertyName]),t.R7$(),t.SpI(" ",o[u.entityPropertyName]," ")}}function f(s,$){if(1&s&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,i,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&s){const o=t.sdS(4),u=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",u.searchEntityControl)("matAutocomplete",o)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,u.entitiesFiltered))}}function y(s,$){if(1&s&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&s){const o=t.sdS(4),u=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",o)("formControl",u.dateControl)("max",u.maxDate),t.R7$(),t.Y8G("for",o)}}function M(s,$){if(1&s){const o=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const T=t.eBV(o).$implicit,F=t.XpG(2);return t.Njj(F.selectEntity(T))}),t.EFF(1),t.k0s()}if(2&s){const o=$.$implicit;t.Y8G("value",o.name),t.R7$(),t.SpI(" ",o.name," ")}}function O(s,$){if(1&s&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,M,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&s){const o=t.sdS(4),u=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",u.searchEntityControl)("matAutocomplete",o)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,u.entitiesFiltered))}}let B=(()=>{class s{constructor(){this.entityPropertyName="name",this.useUpperCase=!1,this.dataChange=new t.bkB,this.data=[],this.maxDate=new Date,this.dateControl=new c.MJ({disabled:!0}),this.formArray=new c.Yp([]),this._unsubscribeAll=new A.B,this._formBuilder=(0,t.WQX)(c.ok),this._changeDetectorRef=(0,t.WQX)(t.gRc)}get hasFilter(){return!U.H.IsNullOrEmpty(this.selectedFilter)}ngOnInit(){this.initializeFormArray(),this.dateControl.valueChanges.pipe((0,d.Q)(this._unsubscribeAll)).subscribe(o=>{this.dataChange.next(o),this.selectedFilter=o,this.menu.closeMenu()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}clearFilter(){switch(this.filterType){case"filterEntity":this.searchEntityControl.setValue(""),this.dataChange.next(null),this.selectedFilter=null;break;case"date":this.dateControl.setValue(null);break;case"multiSelect":case"multiSelectEntity":this.clearFormArray()}this.menu.closeMenu()}closeMenu(){this.menu.closeMenu()}selectEntity(o){this.dataChange.next(o),this.selectedFilter=o,this.menu.closeMenu()}initializeFormArray(){switch(this.filterType){case"multiSelect":this.formArray=this._formBuilder.array(this.data.map(o=>this._formBuilder.group({name:[o],checked:[!1]})));break;case"multiSelectEntity":this.formArray=this._formBuilder.array(this.data.map(o=>this._formBuilder.group({id:[o.id],name:[o[this.entityPropertyName]],checked:[!1]})))}this._changeDetectorRef.markForCheck(),this.formArraySubscription=this.formArray.valueChanges.pipe((0,d.Q)(this._unsubscribeAll)).subscribe(o=>{let u=[];switch(this.filterType){case"multiSelect":u=o.filter(T=>T.checked).map(T=>T.name);break;case"multiSelectEntity":for(const T of o.filter(F=>F.checked)){const F=this.data.find(k=>k.id===T.id);u.push(F)}}this.dataChange.next(u),this.selectedFilter=u})}clearFormArray(){this.formArraySubscription.unsubscribe(),this.selectedFilter=[],this.dataChange.next([]),this.initializeFormArray()}static#t=this.\u0275fac=function(u){return new(u||s)};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["table-filter"]],viewQuery:function(u,T){if(1&u&&t.GBs(P,7),2&u){let F;t.mGM(F=t.lsd())&&(T.menu=F.first)}},inputs:{entityPropertyName:"entityPropertyName",filterType:"filterType",useUpperCase:"useUpperCase",data:"data",entitiesFiltered:"entitiesFiltered",searchEntityControl:"searchEntityControl"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.aNF],decls:19,vars:6,consts:[["bt","matMenuTrigger"],["listStatusMenu","matMenu"],["dateEntity",""],["SearchEntity",""],["entityDate",""],["entitiesAutocomplete","matAutocomplete"],["mat-icon-button","","matTooltip","",1,"w-6","h-6","min-h-6","min-w-6",3,"color","matMenuTriggerFor"],[1,"icon-size-4",3,"svgIcon"],[3,"click"],[1,"w-full","px-4","py-4"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","mat-fuse-de","fuse-mat-rounded","max-w-64","min-w-64",3,"subscriptSizing"],[1,"flex","justify-end","w-full","p-2","pb-0","border-t-2"],["mat-flat-button","",3,"click"],["mat-button","","color","warn",3,"click"],[1,""],["color","primary",3,"formControl"],["matInput","","placeholder","Fecha",3,"matDatepicker","formControl","max"],["matIconSuffix","",3,"for"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],[3,"value"],[3,"click","value"]],template:function(u,T){if(1&u){const F=t.RV6();t.j41(0,"div")(1,"button",6,0),t.nrm(3,"mat-icon",7),t.k0s(),t.j41(4,"mat-menu",null,1)(6,"div",8),t.bIt("click",function(N){return t.eBV(F),t.Njj(N.stopPropagation())}),t.DNE(7,h,3,0,"div",9)(8,R,5,5,"mat-form-field",10)(9,f,8,7,"mat-form-field",11),t.j41(10,"div",12)(11,"button",13),t.bIt("click",function(){return t.eBV(F),t.Njj(T.closeMenu())}),t.EFF(12,"Cerrar"),t.k0s(),t.j41(13,"button",14),t.bIt("click",function(){return t.eBV(F),t.Njj(T.clearFilter())}),t.EFF(14,"Limpiar"),t.k0s()()()()(),t.DNE(15,y,5,5,"ng-template",null,2,t.C5r)(17,O,8,7,"ng-template",null,3,t.C5r)}if(2&u){const F=t.sdS(5);t.R7$(),t.Y8G("color",T.hasFilter?"primary":"default")("matMenuTriggerFor",F),t.R7$(2),t.Y8G("svgIcon","mat_solid:filter_list"),t.R7$(4),t.vxM("multiSelect"===T.filterType||"multiSelectEntity"===T.filterType?7:-1),t.R7$(),t.vxM("date"===T.filterType?8:-1),t.R7$(),t.vxM("filterEntity"===T.filterType?9:-1)}},dependencies:[r.Jj,l.Hl,l.$z,l.iY,_.m_,_.An,v.Cn,v.kk,v.Cp,D.g7,D.So,r.Pc,r.PV,n.X6,n.Vh,n.bZ,n.bU,E.RG,E.rl,E.JW,E.yw,p.fS,p.fg,c.X1,c.me,c.BC,c.l_,I.jL,I.$3,g.wT,I.pN,a.Ve],encapsulation:2,changeDetection:0})}return s})()},2578:function(x,S){var e,c;void 0!==(c="function"==typeof(e=function(){"use strict";function _(r,n,E){var p=new XMLHttpRequest;p.open("GET",r),p.responseType="blob",p.onload=function(){D(p.response,n,E)},p.onerror=function(){console.error("could not download file")},p.send()}function l(r){var n=new XMLHttpRequest;n.open("HEAD",r,!1);try{n.send()}catch{}return 200<=n.status&&299>=n.status}function A(r){try{r.dispatchEvent(new MouseEvent("click"))}catch{var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(n)}}var d="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,U=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),D=d.saveAs||("object"!=typeof window||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!U?function(r,n,E){var p=d.URL||d.webkitURL,a=document.createElement("a");a.download=n=n||r.name||"download",a.rel="noopener","string"==typeof r?(a.href=r,a.origin===location.origin?A(a):l(a.href)?_(r,n,E):A(a,a.target="_blank")):(a.href=p.createObjectURL(r),setTimeout(function(){p.revokeObjectURL(a.href)},4e4),setTimeout(function(){A(a)},0))}:"msSaveOrOpenBlob"in navigator?function(r,n,E){if(n=n||r.name||"download","string"!=typeof r)navigator.msSaveOrOpenBlob(function v(r,n){return typeof n>"u"?n={autoBom:!1}:"object"!=typeof n&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\ufeff",r],{type:r.type}):r}(r,E),n);else if(l(r))_(r,n,E);else{var p=document.createElement("a");p.href=r,p.target="_blank",setTimeout(function(){A(p)})}}:function(r,n,E,p){if((p=p||open("","_blank"))&&(p.document.title=p.document.body.innerText="downloading..."),"string"==typeof r)return _(r,n,E);var a="application/octet-stream"===r.type,I=/constructor/i.test(d.HTMLElement)||d.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||a&&I||U)&&typeof FileReader<"u"){var P=new FileReader;P.onloadend=function(){var m=P.result;m=g?m:m.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=m:location=m,p=null},P.readAsDataURL(r)}else{var C=d.URL||d.webkitURL,b=C.createObjectURL(r);p?p.location=b:location.href=b,p=null,setTimeout(function(){C.revokeObjectURL(b)},4e4)}});d.saveAs=D.saveAs=D,x.exports=D})?e.apply(S,[]):e)&&(x.exports=c)}}]);