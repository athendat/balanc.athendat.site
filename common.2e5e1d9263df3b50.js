(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2076],{36646:(B,M,e)=>{"use strict";e.d(M,{AZ:()=>s,FD:()=>l,iL:()=>o});var t=e(54438),a=e(72797);const s=(m,b)=>(0,t.WQX)(a.h).findAllCustomers(),o=(m,b)=>(0,t.WQX)(a.h).findAllActiveCustomers(),l=(m,b)=>{const A=m.params.customerId;return A&&"new"!==A?(0,t.WQX)(a.h).findCustomerById(A):{}}},56808:(B,M,e)=>{"use strict";e.d(M,{hQ:()=>s,wQ:()=>o});var t=e(59640);const a=l=>l.customers,s=(0,t.Mz)(a,l=>l.customer),o=(0,t.Mz)(a,l=>l.customers)},72797:(B,M,e)=>{"use strict";e.d(M,{h:()=>O});var t=e(84412),a=e(96354),s=e(88141),o=e(42409),l=e(98216),m=e(73512);const b=m.J1`
    mutation CreateCustomer($createCustomerInput: CreateCustomerInput!) {
        createCustomer(createCustomerInput: $createCustomerInput) {
            ok,
            message,

            customer {
                id,
                merchantId,
                logoUrl,
                type,
                name,
                domain
            }
        }
    }
`,A=m.J1`
    query FindAllCustomers($page: Int, $size: Int! $sort: String, $order: Order, $search: String ) {
        findAllCustomers(page: $page, size: $size, sort: $sort, order: $order, search: $search ) {
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

            customers {
                id,
                merchantId,
                active,
                logoUrl,
                type,
                name,
                domain,
                code
                email
                phone


                bankAccounts {
                    no,
                    currency
                },
            }
        }
    }
`,D=m.J1`
    query FindAllActiveCustomers {
        findAllActiveCustomers {
            id,
            name,
            merchantId,
        }
    }
`,F=m.J1`
    query FindCustomerById($customerId: String!) {
        findCustomerById(id: $customerId ) {
            ok,
            message,

            customer {
                id,
                userId,
                merchantId,
                commercialId,
                active,
                name,

                domain,
                address,
                city,
                state,
                country,
                zip,

                email
                phone

                nit,
                reupp,

                type,

                bankAccounts {
                    bank,
                    beneficiary,
                    no,
                    currency,

                    cardType {
                        _id,
                        name,
                        bank,
                        currency,
                        type
                    }
                },

                description,
                website,
                logoUrl,
                coverUrl,
            }
        }
    }
`,R=m.J1`
    mutation UpdateCustomer($updateCustomerInput: UpdateCustomerInput!) {
        updateCustomer(updateCustomerInput: $updateCustomerInput) {
            ok,
            message,

            customer {
                id,
                merchantId,
                logoUrl,
                type,
                name,
                domain
            }
        }
    }
`,u=m.J1`
    mutation UpdateCustomerStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCustomerStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,T=m.J1`
    mutation UpdateCustomerImage($imageProperty: String!, $updateEntityImageInput: UpdateEntityImageInput!) {
        updateCustomerImage(imageProperty: $imageProperty, updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,k=m.J1`
    mutation RemoveCustomer($customerId: String!) {
        removeCustomer(id: $customerId) {
            ok,
            message,
        }
    }
`,S=m.J1`
    query FindActiveCustomers($search: String!, $size: Int!) {
        findActiveCustomers(search: $search, size: $size) {
            id
            active
            name
            lastname1
            lastname2
            fullname
            code
            credit
        }
    }
`;e(45312);var j=e(54438),$=e(21626),p=e(59640);let O=(()=>{class v{constructor(n,C,E){this._httpClient=n,this.apolloProvider=C,this.store=E,this._domains=new t.t(null),this._apollo=this.apolloProvider.use("BALANC")}get domains$(){return this._domains.asObservable()}createCustomer(n){return this._apollo.mutate({mutation:b,variables:{createCustomerInput:n},errorPolicy:"all"}).pipe((0,a.T)(({data:C})=>C?C.createCustomer:null),(0,s.M)(C=>{C&&(this.store.dispatch((0,o.ff)({customer:C.customer})),this.store.dispatch((0,o.hv)({customer:C.customer})))}))}findAllCustomers(n=0,C=10,E="name",g="asc",f=null,i=!1){return this._apollo.query({query:A,variables:{page:n,size:C,sort:E,order:g,search:f},errorPolicy:"all"}).pipe((0,a.T)(({data:d})=>d?d.findAllCustomers:null),(0,s.M)(d=>{d&&(this.store.dispatch(i?(0,o.Yi)({customers:d.customers}):(0,o.GM)({customers:d.customers})),this.store.dispatch((0,l.Bp)({pagination:d.pagination})))}))}findAllActiveCustomers(){return this._apollo.query({query:D,errorPolicy:"all"}).pipe((0,a.T)(({data:n})=>n?n.findAllActiveCustomers:null),(0,s.M)(n=>{n&&this.store.dispatch((0,o.GM)({customers:n}))}))}findActiveCustomers(n="",C=10){return this._apollo.query({query:S,variables:{search:n,size:C},errorPolicy:"all"}).pipe((0,a.T)(({data:E})=>E?E.findActiveCustomers:[]),(0,s.M)(E=>{E&&this.store.dispatch((0,o.GM)({customers:E}))}))}findCustomerById(n){return this._apollo.query({query:F,variables:{customerId:n},errorPolicy:"all"}).pipe((0,s.M)(({data:C})=>{this.store.dispatch((0,o.hv)({customer:C.findCustomerById.customer}))}))}updateCustomer(n){return this._apollo.mutate({mutation:R,variables:{updateCustomerInput:n},errorPolicy:"all"}).pipe((0,a.T)(({data:C})=>C?C.updateCustomer:null),(0,s.M)(C=>{C&&(this.store.dispatch((0,o.Gk)({customer:C.customer})),this.store.dispatch((0,o.hv)({customer:C.customer})))}))}updateCustomerStatus(n){return this._apollo.mutate({mutation:u,variables:{updateEntityStatusInput:n},errorPolicy:"all"}).pipe((0,s.M)(()=>{this.store.dispatch((0,o.uz)(n))}))}updateCustomerImage(n,C){return this._apollo.mutate({mutation:T,variables:{imageProperty:n,updateEntityImageInput:C},errorPolicy:"all"}).pipe((0,a.T)(({data:E})=>E?E.updateCustomerImage:null),(0,s.M)(E=>{E&&this.store.dispatch((0,o.pw)({...C,imageProperty:n}))}))}removeCustomer(n){return this._apollo.mutate({mutation:k,variables:{customerId:n},errorPolicy:"all"}).pipe((0,s.M)(()=>{this.store.dispatch((0,o.Be)({id:n}))}))}getDomains(){return this._httpClient.get("assets/data/domains.json").pipe((0,a.T)(n=>n.sort((C,E)=>C.name.toLowerCase()<E.name.toLowerCase()?-1:C.name.toLowerCase()>E.name.toLowerCase()?1:void 0)),(0,s.M)(n=>{this._domains.next(n)}))}getDomainFiltered(n){return this._httpClient.get("assets/data/domains.json").pipe((0,a.T)(C=>C.filter(E=>E.name===n)))}static#t=this.\u0275fac=function(C){return new(C||v)(j.KVO($.Qq),j.KVO(m.Ic),j.KVO(p.il))};static#e=this.\u0275prov=j.jDH({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},24121:(B,M,e)=>{"use strict";e.d(M,{$f:()=>o,FH:()=>l,y6:()=>s});var t=e(54438),a=e(49098);const s=(m,b)=>{const A=m.params.locationId;return A&&"new"!==A?(0,t.WQX)(a.O).getLocationById(A):{}},o=(m,b)=>(0,t.WQX)(a.O).getLocations(),l=(m,b)=>(0,t.WQX)(a.O).findActiveLocations()},11781:(B,M,e)=>{"use strict";e.d(M,{BF:()=>o,UA:()=>s});var t=e(59640);const a=l=>l.locations,s=(0,t.Mz)(a,l=>l.location),o=(0,t.Mz)(a,l=>l.locations)},49098:(B,M,e)=>{"use strict";e.d(M,{O:()=>S});var t=e(88141),a=e(96354),s=e(24984),o=e(98216),l=e(73512);const m=l.J1`
    mutation CreateLocation($createLocationInput: CreateLocationInput!) {
        createLocation(createLocationInput: $createLocationInput) {

            ok
            message

            location {
                id
                active
                managerId
                # manager {
                #     name
                # }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }

        }
    }
`,b=l.J1`
    mutation UpdateLocation($updateLocationInput: UpdateLocationInput!) {
        updateLocation(updateLocationInput: $updateLocationInput) {
            ok
            message

            location {
                id
                active
                managerId
                # manager {
                #     name
                # }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }
        }
    }
`,A=l.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateLocationStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,D=l.J1`
    mutation RemoveLocation($removeLocationId: String!) {
        removeLocation(id: $removeLocationId) {
            ok
            message
        }
    }
`,F=l.J1`
    query FindAllLocations($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllLocations(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length,
                size,
                page,
                lastPage,
                startIndex,
                endIndex
            },

            locations {
                id
                active
                managerId
                manager {
                    id
                    name
                    lastname1
                    lastname2
                    fullname
                }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }
        }
    }
`,R=l.J1`
    query findActiveLocations($search: String!, $size: Int!) {
        findActiveLocations(search: $search, size: $size) {
            id
            active
            managerId
            name
            slug
            phone
            address
            country
            state
            city
            zip
        }
    }
`,u=l.J1`
    query FindLocationById($findLocationByIdId: String!) {
        findLocationById(id: $findLocationByIdId) {
            ok
            message

            location {
                id
                active
                managerId
                # manager {
                #     name
                # }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }
        }
    }
`;var T=e(54438),k=e(59640);let S=(()=>{class L{constructor($,p){this.apolloProvider=$,this.store=p,this._apollo=this.apolloProvider.use("BALANC")}createLocation($){return this._apollo.mutate({mutation:m,variables:{createLocationInput:$},errorPolicy:"all"}).pipe((0,t.M)(({data:p})=>{p&&(this.store.dispatch((0,s.yJ)({location:p.createLocation.location})),this.store.dispatch((0,s.Og)({location:p.createLocation.location})))}))}getLocations($=0,p=25,U="name",O="asc",v=""){return this._apollo.query({query:F,errorPolicy:"all",variables:{page:$,size:p,sort:U,order:O,search:v}}).pipe((0,t.M)(({data:y})=>{y&&(this.store.dispatch((0,o.Bp)({pagination:y.findAllLocations.pagination})),this.store.dispatch((0,s.xu)({locations:y.findAllLocations.locations})))}))}findActiveLocations($="",p=25){return this._apollo.query({query:R,variables:{search:$,size:p},errorPolicy:"all"}).pipe((0,a.T)(({data:U})=>U?U.findActiveLocations:[]),(0,t.M)(U=>{U&&this.store.dispatch((0,s.xu)({locations:U}))}))}getLocationById($){return this._apollo.query({query:u,variables:{findLocationByIdId:$},errorPolicy:"all"}).pipe((0,t.M)(({data:p})=>{p&&this.store.dispatch((0,s.Og)({location:p.findLocationById.location}))}))}updateLocation($){return this._apollo.mutate({mutation:b,variables:{updateLocationInput:$},errorPolicy:"all"}).pipe((0,t.M)(({data:p})=>{p&&(this.store.dispatch((0,s.Nt)({location:p.updateLocation.location})),this.store.dispatch((0,s.Og)({location:p.updateLocation.location})))}))}updateLocationStatus($){return this._apollo.mutate({mutation:A,variables:{updateEntityStatusInput:$},errorPolicy:"all"}).pipe((0,t.M)(({data:p})=>{p&&this.store.dispatch((0,s.jr)({id:$.id,active:$.active}))}))}removeLocation($){return this._apollo.mutate({mutation:D,variables:{removeLocationId:$},errorPolicy:"all"}).pipe((0,t.M)(({data:p})=>{p&&this.store.dispatch((0,s.q$)({id:$}))}))}static#t=this.\u0275fac=function(p){return new(p||L)(T.KVO(l.Ic),T.KVO(k.il))};static#e=this.\u0275prov=T.jDH({token:L,factory:L.\u0275fac,providedIn:"root"})}return L})()},51973:(B,M,e)=>{"use strict";e.d(M,{a:()=>O});var t=e(54438),a=e(89417),s=e(75351),o=e(21413),l=e(56977),m=e(67398),b=e(46601),A=e(36596),D=e(94794),F=e(95416),R=e(88834),u=e(59042),T=e(32102);function k(v,y){1&v&&(t.j41(0,"h2",2),t.EFF(1," Agregar Marca "),t.k0s())}function S(v,y){1&v&&(t.j41(0,"h2",2),t.EFF(1," Editar Marca "),t.k0s())}function L(v,y){if(1&v&&(t.j41(0,"div",4)(1,"div",7)(2,"div",8)(3,"div",9)(4,"div",10)(5,"h6",11),t.EFF(6,"Nombre"),t.k0s(),t.j41(7,"span",12),t.EFF(8),t.k0s()()()()()()),2&v){const n=t.XpG();t.R7$(8),t.JRh(n.data.brand.name||"Sin nombre")}}function j(v,y){if(1&v&&(t.j41(0,"div",5)(1,"div",13)(2,"form",14)(3,"div",15)(4,"mat-form-field",16)(5,"mat-label"),t.EFF(6,"Nombre"),t.k0s(),t.nrm(7,"input",17),t.k0s()()()()()),2&v){const n=t.XpG();t.R7$(2),t.Y8G("formGroup",n.brandForm)("autocomplete","off"),t.R7$(5),t.Y8G("formControlName","name")("placeholder","Nombre del Marca")}}function $(v,y){if(1&v){const n=t.RV6();t.j41(0,"button",20),t.bIt("click",function(){t.eBV(n);const E=t.XpG(2);return t.Njj(E.updateBrand())}),t.EFF(1," Actualizar "),t.k0s()}if(2&v){const n=t.XpG(2);t.Y8G("color","primary")("disabled",n.brandForm.invalid)("matDialogClose","confirmed")}}function p(v,y){if(1&v){const n=t.RV6();t.j41(0,"button",20),t.bIt("click",function(){t.eBV(n);const E=t.XpG(2);return t.Njj(E.createBrand())}),t.EFF(1," Agregar "),t.k0s()}if(2&v){const n=t.XpG(2);t.Y8G("color","primary")("disabled",n.brandForm.invalid)("matDialogClose","confirmed")}}function U(v,y){if(1&v&&(t.j41(0,"div",6)(1,"button",18),t.EFF(2," Cancelar "),t.k0s(),t.DNE(3,$,2,3,"button",19)(4,p,2,3,"button",19),t.k0s()),2&v){const n=t.XpG();t.R7$(),t.Y8G("matDialogClose","cancelled"),t.R7$(2),t.vxM(3,"edit"===n.data.dialogMode?3:-1),t.R7$(),t.vxM(4,"add"===n.data.dialogMode?4:-1)}}let O=(()=>{class v{constructor(n){this.data=n,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this._unsubscribeAll=new o.B,this._brandsService=(0,t.WQX)(A.m),this._fuseConfirmationService=(0,t.WQX)(b.G),this._changeDetectorRef=(0,t.WQX)(t.gRc),this._formBuilder=(0,t.WQX)(a.ok),this._dialogRef=(0,t.WQX)(s.CP),this._snackBar=(0,t.WQX)(F.UG),this.dialogMode=n.dialogMode,this.brand=n.brand}ngOnInit(){this.brandForm=this._formBuilder.group({id:[null],name:[null,[a.k0.required,a.k0.minLength(3),a.k0.maxLength(255)]],description:[null,[a.k0.minLength(3),a.k0.maxLength(255)]],logo:[null]}),"edit"===this.dialogMode&&this.brandForm.patchValue(this.brand)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createBrand(){let n=this.brandForm.getRawValue();n=(0,m.A)(n,["id"]),this._fuseConfirmationService.open({title:"Crear Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(E=>{"confirmed"===E&&this._brandsService.createBrand(n).pipe((0,l.Q)(this._unsubscribeAll)).subscribe(({data:g})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:g.createBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateBrand(){const n=this.brandForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(E=>{"confirmed"===E&&this._brandsService.updateBrand(n).pipe((0,l.Q)(this._unsubscribeAll)).subscribe(({data:g})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:g.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()}),this._changeDetectorRef.markForCheck()})}fileChangeEvent(n){this.imageChangedEvent=n}imageCropped(n){this.croppedImage=n.base64}imageLoaded(n){}cropperReady(){}loadImageFailed(){}static#t=this.\u0275fac=function(C){return new(C||v)(t.rXU(s.Vh))};static#e=this.\u0275cmp=t.VBU({type:v,selectors:[["lists-brand-dialog"]],standalone:!0,features:[t.aNF],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex-auto"],[1,"w-full","overflow-hidden"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"py-5"],[1,"w-full"],["matInput","","type","text","required","","maxlength","250",3,"formControlName","placeholder"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"click","color","disabled","matDialogClose"]],template:function(C,E){1&C&&(t.j41(0,"div",0)(1,"div",1),t.DNE(2,k,2,0,"h2",2)(3,S,2,0,"h2",2),t.k0s(),t.j41(4,"div",3),t.DNE(5,L,9,1,"div",4)(6,j,8,4,"div",5),t.k0s(),t.DNE(7,U,5,3,"div",6),t.k0s()),2&C&&(t.R7$(2),t.vxM(2,"add"===E.data.dialogMode?2:-1),t.R7$(),t.vxM(3,"edit"===E.data.dialogMode?3:-1),t.R7$(2),t.vxM(5,"view"===E.data.dialogMode?5:-1),t.R7$(),t.vxM(6,6),t.R7$(),t.vxM(7,"view"!==E.data.dialogMode?7:-1))},dependencies:[R.Hl,R.$z,s.tx,T.RG,T.rl,T.nJ,u.fS,u.fg,a.X1,a.qT,a.me,a.BC,a.cb,a.YS,a.tU,a.j4,a.JD],encapsulation:2})}return v})()},57084:(B,M,e)=>{"use strict";e.d(M,{m:()=>t});class t{}},86779:(B,M,e)=>{"use strict";e.d(M,{I:()=>s,g:()=>o});var t=e(54438),a=e(30242);const s=(l,m)=>(0,t.WQX)(a.L).findAllPaymentGateways(),o=(l,m)=>(0,t.WQX)(a.L).findAllActivePaymentGateways()},70672:(B,M,e)=>{"use strict";e.d(M,{Z:()=>t,h:()=>a});class t{}var a=function(s){return s.none="none",s.oauth="oauth",s.basic="basic",s}(a||{})},7561:(B,M,e)=>{"use strict";e.d(M,{Q:()=>s});var t=e(54438),a=e(86952);const s=(o,l)=>(0,t.WQX)(a.v).getVouchers()},21781:(B,M,e)=>{"use strict";e.d(M,{gQ:()=>o});var t=e(59640);const a=l=>l.vouchers,o=((0,t.Mz)(a,l=>l.voucher),(0,t.Mz)(a,l=>l.vouchers))},86952:(B,M,e)=>{"use strict";e.d(M,{v:()=>$});var t=e(96697),a=e(25558),s=e(88141),o=e(98216),l=e(48392),m=e(21781),b=e(94794),A=e(73512);const D=A.J1`
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
`,F=A.J1`
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
`,R=A.J1`
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
`,u=A.J1`
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
`,T=A.J1`
    mutation RemoveVoucher($removeVoucherId: String!) {
        removeVoucher(id: $removeVoucherId) {
            ok
            message
        }
    }
`,k=A.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVoucherStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var S=e(54438),L=e(95416),j=e(59640);let $=(()=>{class p{constructor(O,v,y){this.apolloProvider=O,this._snackBar=v,this.store=y,this._apollo=this.apolloProvider.use("BALANC")}createVoucher(O){return this.store.select(m.gQ).pipe((0,t.s)(1),(0,a.n)(v=>this._apollo.mutate({mutation:R,variables:{createVoucherInput:O},errorPolicy:"all"}).pipe((0,s.M)(({errors:y,data:n})=>{if(y){let E="";y.forEach(g=>E+=`\n ${g.message}.`),this._snackBar.openFromComponent(b.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const C=structuredClone(v);C.push(n.createVoucher.voucher),this.store.dispatch((0,l._6)({vouchers:C}))}))))}getVouchers(){return this._apollo.query({query:D,errorPolicy:"all"}).pipe((0,s.M)(({errors:O,data:v})=>{if(O){let y="";O.forEach(n=>y+=`\n ${n.message}.`),this._snackBar.openFromComponent(b.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:y,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,l._6)({vouchers:v.findAllVouchers.vouchers})),this.store.dispatch((0,o.Bp)({pagination:v.findAllVouchers.pagination}))}))}getVoucherById(O){return this._apollo.query({query:F,variables:{findVoucherByIdId:O},errorPolicy:"all"}).pipe((0,s.M)(({errors:v,data:y})=>{if(v){let n="";v.forEach(C=>n+=`\n ${C.message}.`),this._snackBar.openFromComponent(b.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:n,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,l.FN)({voucher:y.findOneVoucherById.voucher}))}))}updateVoucher(O){return this.store.select(m.gQ).pipe((0,t.s)(1),(0,a.n)(v=>this._apollo.mutate({mutation:u,variables:{updateVoucherInput:O},errorPolicy:"all"}).pipe((0,s.M)(({errors:y,data:n})=>{if(y){let g="";y.forEach(f=>g+=`\n ${f.message}.`),this._snackBar.openFromComponent(b.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:g,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const C=structuredClone(v);C[v.findIndex(g=>g.id===O.id)]=n.updateVoucher.voucher,this.store.dispatch((0,l._6)({vouchers:C}))}))))}updateVoucherStatus(O){return this.store.select(m.gQ).pipe((0,t.s)(1),(0,a.n)(v=>this._apollo.mutate({mutation:k,variables:{updateEntityStatusInput:O},errorPolicy:"all"}).pipe((0,s.M)(({errors:y})=>{if(y){let E="";y.forEach(g=>E+=`\n ${g.message}.`),this._snackBar.openFromComponent(b.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=structuredClone(v);n[v.findIndex(E=>E.id===O.id)].active=O.active,this.store.dispatch((0,l._6)({vouchers:n}))}))))}removeVoucher(O){return this.store.select(m.gQ).pipe((0,t.s)(1),(0,a.n)(v=>this._apollo.mutate({mutation:T,variables:{removeVoucherId:O},errorPolicy:"all"}).pipe((0,s.M)(({errors:y})=>{if(y){let E="";y.forEach(g=>E+=`\n ${g.message}.`),this._snackBar.openFromComponent(b.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=structuredClone(v),C=v.findIndex(E=>E.id===O);n.splice(C,1),this.store.dispatch((0,l._6)({vouchers:n}))}))))}static#t=this.\u0275fac=function(v){return new(v||p)(S.KVO(A.Ic),S.KVO(L.UG),S.KVO(j.il))};static#e=this.\u0275prov=S.jDH({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},72824:(B,M,e)=>{"use strict";e.d(M,{g:()=>a});var t=e(54438);let a=(()=>{class s{transform(l){if(l)switch(l){case"quarterly":return"Trimestral";case"annually":return"Anual";default:return"Mensual"}return""}static#t=this.\u0275fac=function(m){return new(m||s)};static#e=this.\u0275pipe=t.EJ8({name:"subscriptionTitle",type:s,pure:!0,standalone:!0})}return s})()},34343:(B,M,e)=>{"use strict";e.d(M,{Er:()=>l,PL:()=>o,sB:()=>s});var t=e(59640);const a=m=>m.subscriptions,s=(0,t.Mz)(a,m=>m.subscription),o=(0,t.Mz)(a,m=>m.subscriptions),l=(0,t.Mz)(a,m=>m.subscriptionCardsData)},10729:(B,M,e)=>{"use strict";e.d(M,{k:()=>D});var t=e(21413),a=e(99213),s=e(31849),o=e(54438),l=e(51188),m=e(59640);function b(F,R){if(1&F){const u=o.RV6();o.j41(0,"fuse-card",18),o.bIt("click",function(){const k=o.eBV(u).$implicit,S=o.XpG(2);return o.Njj(S.navigate(k.link))}),o.j41(1,"div",19)(2,"div",20),o.EFF(3),o.k0s(),o.j41(4,"div",21),o.EFF(5),o.k0s()()()}if(2&F){const u=R.$implicit;o.R7$(3),o.JRh(u.title),o.R7$(2),o.JRh(u.subtitle)}}function A(F,R){if(1&F){const u=o.RV6();o.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),o.bIt("click",function(){o.eBV(u);const k=o.XpG();return o.Njj(k.navigate("/dashboard"))}),o.EFF(7,"Inicio"),o.k0s()(),o.j41(8,"div",4),o.nrm(9,"mat-icon",6),o.j41(10,"a",7),o.EFF(11),o.k0s()()(),o.j41(12,"div",8)(13,"a",9),o.nrm(14,"mat-icon",6),o.j41(15,"span",10),o.EFF(16,"Regresar"),o.k0s()()()(),o.j41(17,"div",11)(18,"div",12),o.EFF(19),o.k0s()()()(),o.j41(20,"div",13)(21,"div",14)(22,"div",15)(23,"div",16),o.Z7z(24,b,6,2,"fuse-card",17,o.fX1),o.k0s()()()()()}if(2&F){const u=o.XpG();o.R7$(9),o.Y8G("svgIcon","mat_solid:chevron_right"),o.R7$(2),o.JRh(u.fuseNavigation.title),o.R7$(3),o.Y8G("svgIcon","mat_solid:chevron_left"),o.R7$(5),o.SpI(" ",u.fuseNavigation.title," "),o.R7$(5),o.Dyx(u.fuseNavigation.children)}}let D=(()=>{class F{constructor(u,T,k){this._changeDetectorRef=u,this._router=T,this.store=k,this._unsubscribeAll=new t.B}ngOnInit(){}navigate(u){this._router.navigateByUrl(u)}static#t=this.\u0275fac=function(T){return new(T||F)(o.rXU(o.gRc),o.rXU(l.Ix),o.rXU(m.il))};static#e=this.\u0275cmp=o.VBU({type:F,selectors:[["ath-content-menu"]],standalone:!0,features:[o.aNF],decls:1,vars:1,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","py-3","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","cursor-pointer","text-primary-500","hover:underline",3,"click"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],["routerLink","/dashboard",1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"flex-auto","p-6","pt-0","sm:pt-0","sm:p-10"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full"],[1,"grid","grid-flow-row","grid-cols-1","mt-8","sm:grid-cols-2","lg:grid-cols-4","gap-y-12","sm:gap-x-4"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md",3,"click"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight"],[1,"text-md","text-secondary"]],template:function(T,k){1&T&&o.DNE(0,A,26,4,"div",0),2&T&&o.vxM(0,k.fuseNavigation?0:-1)},dependencies:[a.m_,a.An,s.$],encapsulation:2,changeDetection:0})}return F})()},46812:(B,M,e)=>{"use strict";e.d(M,{H_:()=>o,dX:()=>t});var t=function(u){return u.pendiente="pendiente",u.parcial="parcial",u.pagada="pagada",u.cancelado="cancelado",u.fallido="fallido",u.expirado="expirado",u.devuelto="devuelto",u.dPendiente="devoluci\xf3n pendiente",u.dFallida="devoluci\xf3n fallida",u}(t||{}),o=function(u){return u.total="total",u.partial="partial",u}(o||{})},21607:(B,M,e)=>{"use strict";e.d(M,{At:()=>o,G0:()=>m,ih:()=>l,tz:()=>s});class s{constructor(A,D,F,R,u,T){this.productId=A,this.name=D,this.uom=F,this.price=R,this.quantity=u,this.depotId=T}}class o{constructor(A,D,F){this.assistanceId=A,this.price=D,this.quantity=F}}var l=function(b){return b.nueva="nueva",b.recibida="recibida",b.cobrada="cobrada",b.rechazada="rechazada",b.cancelada="cancelada",b.facturada="facturada",b.entregada="entregada",b}(l||{});class m{constructor(A,D,F,R){this.nueva=A,this.recibida=D,this.rechazada=F,this.cancelada=R}}},41791:(B,M,e)=>{"use strict";e.d(M,{Nh:()=>o,oy:()=>s});var t=e(59640);const a=m=>m.gModules,s=(0,t.Mz)(a,m=>m.module),o=(0,t.Mz)(a,m=>m.modules);(0,t.Mz)(a,m=>({}))},71411:(B,M,e)=>{"use strict";e.d(M,{Q:()=>s});var t=e(54438),a=e(25910);let s=(()=>{class o{constructor(m){this._ratesService=m}resolve(m,b){return this._ratesService.getRates()}static#t=this.\u0275fac=function(b){return new(b||o)(t.KVO(a.f))};static#e=this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},72831:(B,M,e)=>{"use strict";e.d(M,{Ad:()=>m,NH:()=>b,ed:()=>A});var t=e(18810),a=e(99437),s=e(54438),o=e(44312),l=e(51188);let m=(()=>{class D{constructor(R,u){this._rolesService=R,this._router=u}resolve(R,u){return this._rolesService.findAllRoles().pipe((0,a.W)(T=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(u){return new(u||D)(s.KVO(o.W),s.KVO(l.Ix))};static#e=this.\u0275prov=s.jDH({token:D,factory:D.\u0275fac,providedIn:"root"})}return D})(),b=(()=>{class D{constructor(R,u){this._rolesService=R,this._router=u}resolve(R,u){const T=R.params.roleId;return"new"===T?null:this._rolesService.findRoleById(T).pipe((0,a.W)(k=>{const S=u.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(S),(0,t.$)(k)}))}static#t=this.\u0275fac=function(u){return new(u||D)(s.KVO(o.W),s.KVO(l.Ix))};static#e=this.\u0275prov=s.jDH({token:D,factory:D.\u0275fac,providedIn:"root"})}return D})(),A=(()=>{class D{constructor(R,u){this._rolesService=R,this._router=u}resolve(R,u){return this._rolesService.findAllActiveRoles().pipe((0,a.W)(T=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(u){return new(u||D)(s.KVO(o.W),s.KVO(l.Ix))};static#e=this.\u0275prov=s.jDH({token:D,factory:D.\u0275fac,providedIn:"root"})}return D})()},15887:(B,M,e)=>{"use strict";e.d(M,{X7:()=>s,y3:()=>o});var t=e(59640);const a=l=>l.roles,s=(0,t.Mz)(a,l=>l.role),o=(0,t.Mz)(a,l=>l.roles)},44312:(B,M,e)=>{"use strict";e.d(M,{W:()=>S});var t=e(54438),a=e(96354),s=e(88141),o=e(73512),l=e(59640),m=e(49238),b=e(98216);const A=o.J1`
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
`,D=o.J1`
    query FindAllActiveRoles {
        findAllActiveRoles {
            id
            name
            description
            isCoreRole
        }
    }
`,F=o.J1`
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
`,R=o.J1`
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
`,u=o.J1`
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
`,T=o.J1`
    mutation UpdateRoleStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRoleStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,k=o.J1`
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
`;let S=(()=>{class L{constructor(){this.apolloProvider=(0,t.WQX)(o.Ic),this.store=(0,t.WQX)(l.il),this._apollo=this.apolloProvider.use("BALANC")}createRole($){return this._apollo.mutate({mutation:R,variables:{createRoleInput:$},errorPolicy:"all"}).pipe((0,a.T)(({data:p})=>p?p.createRole:null),(0,s.M)(p=>{p&&this.store.dispatch((0,m.rd)({role:p.role}))}))}findAllRoles($=0,p=500,U="createdAt",O="asc",v=""){return this._apollo.query({query:A,errorPolicy:"all",variables:{page:$,size:p,sort:U,order:O,search:v}}).pipe((0,s.M)(({data:y})=>{y&&(this.store.dispatch((0,b.Bp)({pagination:y.paginatedRoles.pagination})),this.store.dispatch((0,m.S0)({roles:y.paginatedRoles.items})))}))}findAllActiveRoles(){return this._apollo.query({query:D,errorPolicy:"all"}).pipe((0,a.T)(({data:$})=>$?$.findAllActiveRoles:null),(0,s.M)($=>{$&&this.store.dispatch((0,m.S0)({roles:$}))}))}findRoleById($){return this._apollo.query({query:F,variables:{roleId:$},errorPolicy:"all"}).pipe((0,a.T)(({data:p})=>p?p.findRoleById:null),(0,s.M)(p=>{p&&this.store.dispatch((0,m.L4)({role:p.role}))}))}updateRole($){return this._apollo.mutate({mutation:u,variables:{updateRoleInput:$},errorPolicy:"all"}).pipe((0,a.T)(({data:p})=>p?p.updateRole:null),(0,s.M)(p=>{p&&this.store.dispatch((0,m.zD)({role:p.role}))}))}updateRoleStatus($){return this._apollo.mutate({mutation:T,variables:{updateEntityStatusInput:$},errorPolicy:"all"}).pipe((0,a.T)(({data:p})=>p?p.updateRoleStatus:null),(0,s.M)(p=>{p&&this.store.dispatch((0,m.yp)($))}))}removeRole($,p=0,U=500,O="name",v="desc",y=null){return this._apollo.mutate({mutation:k,variables:{removeRoleById:$,page:p,size:U,sort:O,order:v,search:y},errorPolicy:"all"}).pipe((0,s.M)(({data:n})=>{n&&(this.store.dispatch((0,b.Bp)({pagination:n.paginatedRemoveRole.pagination})),this.store.dispatch((0,m.S0)({roles:n.paginatedRemoveRole.items})))}))}static#t=this.\u0275fac=function(p){return new(p||L)};static#e=this.\u0275prov=t.jDH({token:L,factory:L.\u0275fac,providedIn:"root"})}return L})()},52002:(B,M,e)=>{"use strict";e.d(M,{Yt:()=>t});class t{constructor(){this.tags=[]}}},89654:(B,M,e)=>{"use strict";e.d(M,{n:()=>h});var t=e(54438),a=e(89417),s=e(21413),o=e(56977),l=e(99172),m=e(96354),b=e(70152),A=e(32102),D=e(59042),F=e(88834),R=e(99213),u=e(60850),T=e(82798),k=e(14823),S=e(60177),L=e(96817),j=e(73512);let $=(()=>{class c{constructor(_){this.apolloProvider=_,this._apollo=this.apolloProvider.use("BALANC")}getCardType(_){return this._apollo.query({query:L.LU,variables:{cardNumber:_},errorPolicy:"all"})}static#t=this.\u0275fac=function(x){return new(x||c)(t.KVO(j.Ic))};static#e=this.\u0275prov=t.jDH({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var p=e(86600);const U=["bankAccountNgForm"];function O(c,I){1&c&&(t.j41(0,"mat-label"),t.EFF(1,"N\xfamero de Cuenta"),t.k0s())}function v(c,I){if(1&c&&t.nrm(0,"img",5),2&c){const _=t.XpG();t.Y8G("src",_.cardImage,t.B4B)}}function y(c,I){1&c&&(t.j41(0,"mat-error"),t.EFF(1," El n\xfamero de cuenta es obligatorio "),t.k0s())}function n(c,I){1&c&&(t.j41(0,"mat-label"),t.EFF(1,"Banco"),t.k0s())}function C(c,I){if(1&c&&(t.j41(0,"mat-option",7),t.EFF(1),t.k0s()),2&c){const _=I.$implicit;t.Y8G("value",_),t.R7$(),t.JRh(_)}}function E(c,I){1&c&&(t.j41(0,"mat-label"),t.EFF(1,"Moneda"),t.k0s())}function g(c,I){if(1&c&&(t.j41(0,"mat-option",7),t.EFF(1),t.k0s()),2&c){const _=I.$implicit;t.Y8G("value",_.iso),t.R7$(),t.SpI(" ",_.iso," ")}}function f(c,I){1&c&&(t.j41(0,"mat-label"),t.EFF(1,"Beneficiario"),t.k0s())}function i(c,I){1&c&&(t.j41(0,"mat-error"),t.EFF(1," El beneficiario no presenta un formato v\xe1lido "),t.k0s())}function d(c,I){1&c&&(t.j41(0,"mat-error"),t.EFF(1," El beneficiario es obligatorio "),t.k0s())}function r(c,I){if(1&c){const _=t.RV6();t.j41(0,"div",10)(1,"button",11),t.bIt("click",function(){t.eBV(_);const P=t.XpG();return t.Njj(P.removeBankAccount(P.index))}),t.nrm(2,"mat-icon",12),t.k0s()()}2&c&&(t.R7$(2),t.Y8G("svgIcon","mat_solid:delete"))}let h=(()=>{class c{constructor(_,x){this._changeDetectorRef=_,this._cardTypesService=x,this.currencies=[],this.remove=new t.bkB,this.cardImage=null,this.cubanBanks=["Metropolitano (BMP)","Popular de Ahorro (BPA)","Cr\xe9dito y Comercio (BANDEC)"],this._unsubscribeAll=new s.B}ngOnInit(){this.bankAccountForm.get("cardType").value&&this.fillFormData(this.bankAccountForm.get("cardType").value),this.filteredBanks=this.bankAccountForm.get("bank").valueChanges.pipe((0,o.Q)(this._unsubscribeAll),(0,l.Z)(""),(0,m.T)(_=>_?this.cubanBanks.filter(x=>x.toLowerCase().includes(_.toLowerCase())):[])),this.bankAccountForm.get("no").valueChanges.pipe((0,b.B)(600),(0,o.Q)(this._unsubscribeAll)).subscribe(_=>{_.length>5&&_.length<11&&this._cardTypesService.getCardType(_).subscribe(({})=>{}),_||(this.bankAccountForm.get("bank").enable(),this.bankAccountForm.get("currency").enable(),this.bankAccountForm.get("cardType").setValue(""),this.cardImage=null),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}removeBankAccount(_){this.remove.next(_)}clearForm(){this.bankAccountNgForm.resetForm()}fillFormData(_){_?(this.bankAccountForm.get("bank").setValue(_.name),this.bankAccountForm.get("currency").setValue(_.currency),this.bankAccountForm.get("bank").disable(),this.bankAccountForm.get("currency").disable(),("BMPU"===_.bank||"BMPUW"===_.bank)&&(this.cardImage="assets/images/cards/banmet.webp"),("BPAU"===_.bank||"BPAUW"===_.bank)&&(this.cardImage="assets/images/cards/bpa.webp"),("BANU"===_.bank||"BANW"===_.bank)&&(this.cardImage="assets/images/cards/bandec.webp"),"AIS"===_.name&&(this.cardImage="assets/images/cards/ais.webp"),"MN"===_.currency&&this.bankAccountForm.get("currency").setValue("CUP"),"USD"===_.currency&&this.bankAccountForm.get("currency").setValue("USD"),this.bankAccountForm.get("cardType").setValue(_._id)):(this.bankAccountForm.get("bank").enable(),this.bankAccountForm.get("currency").enable(),this.bankAccountForm.get("cardType").setValue(""),this.cardImage=null)}static#t=this.\u0275fac=function(x){return new(x||c)(t.rXU(t.gRc),t.rXU($))};static#e=this.\u0275cmp=t.VBU({type:c,selectors:[["bank-account"]],viewQuery:function(x,P){if(1&x&&t.GBs(U,5),2&x){let V;t.mGM(V=t.lsd())&&(P.bankAccountNgForm=V.first)}},inputs:{currencies:"currencies",bankAccountForm:"bankAccountForm",first:"first",last:"last",index:"index"},outputs:{remove:"remove"},standalone:!0,features:[t.aNF],decls:29,vars:33,consts:[["auto","matAutocomplete"],[1,"grid","grid-cols-1","gap-3","md:grid-cols-2",3,"formGroup"],[1,"flex-auto","mat-fuse-dense"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","",3,"type","minlength","maxlength","formControlName","placeholder","spellcheck"],["matSuffix","",1,"w-12","h-8",3,"src"],["maxlength","255","matInput","",3,"type","formControlName","matAutocomplete","placeholder","spellcheck"],[3,"value"],["required","",3,"formControlName","placeholder"],["maxlength","255","matInput","",3,"type","formControlName","placeholder","spellcheck"],[1,"flex","items-center","w-10","pl-2"],["mat-icon-button","","matTooltip","Eliminar cuenta",1,"w-8","h-8","min-h-8",3,"click"],[1,"icon-size-5",3,"svgIcon"]],template:function(x,P){if(1&x&&(t.j41(0,"form",1)(1,"mat-form-field",2),t.DNE(2,O,2,0,"mat-label"),t.nrm(3,"mat-icon",3)(4,"input",4),t.DNE(5,v,1,1,"img",5)(6,y,2,0,"mat-error"),t.k0s(),t.j41(7,"mat-form-field",2),t.DNE(8,n,2,0,"mat-label"),t.nrm(9,"mat-icon",3)(10,"input",6),t.j41(11,"mat-autocomplete",null,0),t.Z7z(13,C,2,2,"mat-option",7,t.fX1),t.nI1(15,"async"),t.k0s()(),t.j41(16,"mat-form-field",2),t.DNE(17,E,2,0,"mat-label"),t.nrm(18,"mat-icon",3),t.j41(19,"mat-select",8),t.Z7z(20,g,2,2,"mat-option",7,t.fX1),t.k0s()(),t.j41(22,"mat-form-field",2),t.DNE(23,f,2,0,"mat-label"),t.nrm(24,"mat-icon",3)(25,"input",9),t.DNE(26,i,2,0,"mat-error")(27,d,2,0,"mat-error"),t.k0s(),t.DNE(28,r,3,1,"div",10),t.k0s()),2&x){const V=t.sdS(12);t.Y8G("formGroup",P.bankAccountForm),t.R7$(2),t.vxM(2,P.first?2:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:credit_card"),t.R7$(),t.Y8G("type","text")("minlength",16)("maxlength",24)("formControlName","no")("placeholder","Ejemplo: 1234567890123456")("spellcheck",!1),t.R7$(),t.vxM(5,P.cardImage?5:-1),t.R7$(),t.vxM(6,P.bankAccountForm.get("no").hasError("required")?6:-1),t.R7$(2),t.vxM(8,P.first?8:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:account_balance"),t.R7$(),t.Y8G("type","text")("formControlName","bank")("matAutocomplete",V)("placeholder","Ejemplo: Banco Financiero")("spellcheck",!1),t.R7$(3),t.Dyx(t.bMT(15,31,P.filteredBanks)),t.R7$(4),t.vxM(17,P.first?17:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:monetization_on"),t.R7$(),t.Y8G("formControlName","currency")("placeholder","Ejemplo: USD"),t.R7$(),t.Dyx(P.currencies),t.R7$(3),t.vxM(23,P.first?23:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:business"),t.R7$(),t.Y8G("type","text")("formControlName","beneficiary")("placeholder","Ejemplo: Empresa SRL")("spellcheck",!1),t.R7$(),t.vxM(26,P.bankAccountForm.get("beneficiary").hasError("pattern")?26:-1),t.R7$(),t.vxM(27,P.bankAccountForm.get("beneficiary").hasError("required")?27:-1),t.R7$(),t.vxM(28,P.first&&P.last?-1:28)}},dependencies:[S.Jj,u.jL,u.$3,p.wT,u.pN,F.Hl,F.iY,A.RG,A.rl,A.nJ,A.TL,A.JW,A.yw,R.m_,R.An,D.fS,D.fg,T.Ve,T.VO,k.uc,k.oV,a.X1,a.qT,a.me,a.BC,a.cb,a.YS,a.xh,a.tU,a.j4,a.JD],encapsulation:2,changeDetection:0})}return c})()},78357:(B,M,e)=>{"use strict";e.d(M,{i:()=>f});var t=e(54438),a=e(89417),s=e(59115),o=e(99213),l=e(88834),m=e(21413),b=e(56977),A=e(53328),D=e(82765),F=e(60177),R=e(25084),u=e(32102),T=e(59042),k=e(82798),S=e(60850),L=e(86600);const j=["bt"];function $(i,d){if(1&i&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"uppercase"),t.k0s()),2&i){const r=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,r.get("name").value))}}function p(i,d){if(1&i&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()),2&i){const r=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,r.get("name").value))}}function U(i,d){if(1&i&&(t.j41(0,"div",15)(1,"mat-checkbox",16),t.DNE(2,$,3,3,"span")(3,p,3,3,"span"),t.k0s()()),2&i){const r=d.$implicit,h=t.XpG(2);t.R7$(),t.Y8G("formControl",r.get("checked")),t.R7$(),t.vxM(2,h.useUpperCase?2:-1),t.R7$(),t.vxM(3,h.useUpperCase?-1:3)}}function O(i,d){if(1&i&&(t.j41(0,"div",9),t.Z7z(1,U,4,3,"div",15,t.fX1),t.k0s()),2&i){const r=t.XpG();t.R7$(),t.Dyx(r.formArray.controls)}}function v(i,d){if(1&i&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&i){const r=t.sdS(4),h=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",r)("formControl",h.dateControl)("max",h.maxDate),t.R7$(),t.Y8G("for",r)}}function y(i,d){if(1&i){const r=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const c=t.eBV(r).$implicit,I=t.XpG(2);return t.Njj(I.selectEntity(c))}),t.EFF(1),t.k0s()}if(2&i){const r=d.$implicit;t.Y8G("value",r.name),t.R7$(),t.SpI(" ",r.name," ")}}function n(i,d){if(1&i&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,y,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&i){const r=t.sdS(4),h=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",h.searchEntityControl)("matAutocomplete",r)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,h.entitiesFiltered))}}function C(i,d){if(1&i&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&i){const r=t.sdS(4),h=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",r)("formControl",h.dateControl)("max",h.maxDate),t.R7$(),t.Y8G("for",r)}}function E(i,d){if(1&i){const r=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const c=t.eBV(r).$implicit,I=t.XpG(2);return t.Njj(I.selectEntity(c))}),t.EFF(1),t.k0s()}if(2&i){const r=d.$implicit;t.Y8G("value",r.name),t.R7$(),t.SpI(" ",r.name," ")}}function g(i,d){if(1&i&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,E,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&i){const r=t.sdS(4),h=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",h.searchEntityControl)("matAutocomplete",r)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,h.entitiesFiltered))}}let f=(()=>{class i{constructor(){this.useUpperCase=!1,this.dataChange=new t.bkB,this.entityPropertyName="name",this.data=[],this.maxDate=new Date,this.dateControl=new a.MJ({disabled:!0}),this.formArray=new a.Yp([]),this._unsubscribeAll=new m.B,this._formBuilder=(0,t.WQX)(a.ok),this._changeDetectorRef=(0,t.WQX)(t.gRc)}get hasFilter(){return!A.H.IsNullOrEmpty(this.selectedFilter)}ngOnInit(){this.initializeFormArray(),this.dateControl.valueChanges.pipe((0,b.Q)(this._unsubscribeAll)).subscribe(r=>{this.dataChange.next(r),this.selectedFilter=r,this.menu.closeMenu()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}clearFilter(){switch(this.filterType){case"filterEntity":this.searchEntityControl.setValue(""),this.dataChange.next(null),this.selectedFilter=null;break;case"date":this.dateControl.setValue(null);break;case"multiSelect":case"multiSelectEntity":this.clearFormArray()}this.menu.closeMenu()}closeMenu(){this.menu.closeMenu()}selectEntity(r){this.dataChange.next(r),this.selectedFilter=r,this.menu.closeMenu()}initializeFormArray(){switch(this.filterType){case"multiSelect":this.formArray=this._formBuilder.array(this.data.map(r=>this._formBuilder.group({name:[r],checked:[!1]})));break;case"multiSelectEntity":this.formArray=this._formBuilder.array(this.data.map(r=>this._formBuilder.group({id:[r.id],name:[r[this.entityPropertyName]],checked:[!1]})))}this._changeDetectorRef.markForCheck(),this.formArraySubscription=this.formArray.valueChanges.pipe((0,b.Q)(this._unsubscribeAll)).subscribe(r=>{let h=[];switch(this.filterType){case"multiSelect":h=r.filter(c=>c.checked).map(c=>c.name);break;case"multiSelectEntity":for(const c of r.filter(I=>I.checked)){const I=this.data.find(_=>_.id===c.id);h.push(I)}}this.dataChange.next(h),this.selectedFilter=h})}clearFormArray(){this.formArraySubscription.unsubscribe(),this.selectedFilter=[],this.dataChange.next([]),this.initializeFormArray()}static#t=this.\u0275fac=function(h){return new(h||i)};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["table-filter"]],viewQuery:function(h,c){if(1&h&&t.GBs(j,7),2&h){let I;t.mGM(I=t.lsd())&&(c.menu=I.first)}},inputs:{filterType:"filterType",useUpperCase:"useUpperCase",entityPropertyName:"entityPropertyName",data:"data",entitiesFiltered:"entitiesFiltered",searchEntityControl:"searchEntityControl"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.aNF],decls:19,vars:6,consts:[["bt","matMenuTrigger"],["listStatusMenu","matMenu"],["dateEntity",""],["SearchEntity",""],["entityDate",""],["entitiesAutocomplete","matAutocomplete"],["mat-icon-button","","matTooltip","",1,"w-6","h-6","min-h-6","min-w-6",3,"color","matMenuTriggerFor"],[1,"icon-size-4",3,"svgIcon"],[3,"click"],[1,"w-full","px-4","py-4"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","mat-fuse-de","fuse-mat-rounded","max-w-64","min-w-64",3,"subscriptSizing"],[1,"flex","justify-end","w-full","p-2","pb-0","border-t-2"],["mat-flat-button","",3,"click"],["mat-button","","color","warn",3,"click"],[1,""],["color","primary",3,"formControl"],["matInput","","placeholder","Fecha",3,"matDatepicker","formControl","max"],["matIconSuffix","",3,"for"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],[3,"value"],[3,"click","value"]],template:function(h,c){if(1&h){const I=t.RV6();t.j41(0,"div")(1,"button",6,0),t.nrm(3,"mat-icon",7),t.k0s(),t.j41(4,"mat-menu",null,1)(6,"div",8),t.bIt("click",function(x){return t.eBV(I),t.Njj(x.stopPropagation())}),t.DNE(7,O,3,0,"div",9)(8,v,5,5,"mat-form-field",10)(9,n,8,7,"mat-form-field",11),t.j41(10,"div",12)(11,"button",13),t.bIt("click",function(){return t.eBV(I),t.Njj(c.closeMenu())}),t.EFF(12,"Cerrar"),t.k0s(),t.j41(13,"button",14),t.bIt("click",function(){return t.eBV(I),t.Njj(c.clearFilter())}),t.EFF(14,"Limpiar"),t.k0s()()()()(),t.DNE(15,C,5,5,"ng-template",null,2,t.C5r)(17,g,8,7,"ng-template",null,3,t.C5r)}if(2&h){const I=t.sdS(5);t.R7$(),t.Y8G("color",c.hasFilter?"primary":"default")("matMenuTriggerFor",I),t.R7$(2),t.Y8G("svgIcon","mat_solid:filter_list"),t.R7$(4),t.vxM(7,"multiSelect"===c.filterType||"multiSelectEntity"===c.filterType?7:-1),t.R7$(),t.vxM(8,"date"===c.filterType?8:-1),t.R7$(),t.vxM(9,"filterEntity"===c.filterType?9:-1)}},dependencies:[F.Jj,l.Hl,l.$z,l.iY,o.m_,o.An,s.Cn,s.kk,s.Cp,D.g7,D.So,F.Pc,F.PV,R.X6,R.Vh,R.bZ,R.bU,u.RG,u.rl,u.JW,u.yw,T.fS,T.fg,a.X1,a.me,a.BC,a.l_,S.jL,S.$3,L.wT,S.pN,k.Ve],encapsulation:2,changeDetection:0})}return i})()},67374:function(B){B.exports=function(){"use strict";var e=6e4,t=36e5,a="millisecond",s="second",o="minute",l="hour",m="day",b="week",A="month",D="quarter",F="year",R="date",u="Invalid Date",T=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,k=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(g){var f=["th","st","nd","rd"],i=g%100;return"["+g+(f[(i-20)%10]||f[i]||f[0])+"]"}},L=function(g,f,i){var d=String(g);return!d||d.length>=f?g:""+Array(f+1-d.length).join(i)+g},j={s:L,z:function(g){var f=-g.utcOffset(),i=Math.abs(f),d=Math.floor(i/60),r=i%60;return(f<=0?"+":"-")+L(d,2,"0")+":"+L(r,2,"0")},m:function g(f,i){if(f.date()<i.date())return-g(i,f);var d=12*(i.year()-f.year())+(i.month()-f.month()),r=f.clone().add(d,A),h=i-r<0,c=f.clone().add(d+(h?-1:1),A);return+(-(d+(i-r)/(h?r-c:c-r))||0)},a:function(g){return g<0?Math.ceil(g)||0:Math.floor(g)},p:function(g){return{M:A,y:F,w:b,d:m,D:R,h:l,m:o,s,ms:a,Q:D}[g]||String(g||"").toLowerCase().replace(/s$/,"")},u:function(g){return void 0===g}},$="en",p={};p[$]=S;var U="$isDayjsObject",O=function(g){return g instanceof C||!(!g||!g[U])},v=function g(f,i,d){var r;if(!f)return $;if("string"==typeof f){var h=f.toLowerCase();p[h]&&(r=h),i&&(p[h]=i,r=h);var c=f.split("-");if(!r&&c.length>1)return g(c[0])}else{var I=f.name;p[I]=f,r=I}return!d&&r&&($=r),r||!d&&$},y=function(g,f){if(O(g))return g.clone();var i="object"==typeof f?f:{};return i.date=g,i.args=arguments,new C(i)},n=j;n.l=v,n.i=O,n.w=function(g,f){return y(g,{locale:f.$L,utc:f.$u,x:f.$x,$offset:f.$offset})};var C=function(){function g(i){this.$L=v(i.locale,null,!0),this.parse(i),this.$x=this.$x||i.x||{},this[U]=!0}var f=g.prototype;return f.parse=function(i){this.$d=function(d){var r=d.date,h=d.utc;if(null===r)return new Date(NaN);if(n.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var c=r.match(T);if(c){var I=c[2]-1||0,_=(c[7]||"0").substring(0,3);return h?new Date(Date.UTC(c[1],I,c[3]||1,c[4]||0,c[5]||0,c[6]||0,_)):new Date(c[1],I,c[3]||1,c[4]||0,c[5]||0,c[6]||0,_)}}return new Date(r)}(i),this.init()},f.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},f.$utils=function(){return n},f.isValid=function(){return this.$d.toString()!==u},f.isSame=function(i,d){var r=y(i);return this.startOf(d)<=r&&r<=this.endOf(d)},f.isAfter=function(i,d){return y(i)<this.startOf(d)},f.isBefore=function(i,d){return this.endOf(d)<y(i)},f.$g=function(i,d,r){return n.u(i)?this[d]:this.set(r,i)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(i,d){var r=this,h=!!n.u(d)||d,c=n.p(i),I=function(z,W){var G=n.w(r.$u?Date.UTC(r.$y,W,z):new Date(r.$y,W,z),r);return h?G:G.endOf(m)},_=function(z,W){return n.w(r.toDate()[z].apply(r.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(W)),r)},x=this.$W,P=this.$M,V=this.$D,K="set"+(this.$u?"UTC":"");switch(c){case F:return h?I(1,0):I(31,11);case A:return h?I(1,P):I(0,P+1);case b:var N=this.$locale().weekStart||0,Y=(x<N?x+7:x)-N;return I(h?V-Y:V+(6-Y),P);case m:case R:return _(K+"Hours",0);case l:return _(K+"Minutes",1);case o:return _(K+"Seconds",2);case s:return _(K+"Milliseconds",3);default:return this.clone()}},f.endOf=function(i){return this.startOf(i,!1)},f.$set=function(i,d){var r,h=n.p(i),c="set"+(this.$u?"UTC":""),I=(r={},r[m]=c+"Date",r[R]=c+"Date",r[A]=c+"Month",r[F]=c+"FullYear",r[l]=c+"Hours",r[o]=c+"Minutes",r[s]=c+"Seconds",r[a]=c+"Milliseconds",r)[h],_=h===m?this.$D+(d-this.$W):d;if(h===A||h===F){var x=this.clone().set(R,1);x.$d[I](_),x.init(),this.$d=x.set(R,Math.min(this.$D,x.daysInMonth())).$d}else I&&this.$d[I](_);return this.init(),this},f.set=function(i,d){return this.clone().$set(i,d)},f.get=function(i){return this[n.p(i)]()},f.add=function(i,d){var r,h=this;i=Number(i);var c=n.p(d),I=function(P){var V=y(h);return n.w(V.date(V.date()+Math.round(P*i)),h)};if(c===A)return this.set(A,this.$M+i);if(c===F)return this.set(F,this.$y+i);if(c===m)return I(1);if(c===b)return I(7);var _=(r={},r[o]=e,r[l]=t,r[s]=1e3,r)[c]||1,x=this.$d.getTime()+i*_;return n.w(x,this)},f.subtract=function(i,d){return this.add(-1*i,d)},f.format=function(i){var d=this,r=this.$locale();if(!this.isValid())return r.invalidDate||u;var h=i||"YYYY-MM-DDTHH:mm:ssZ",c=n.z(this),I=this.$H,_=this.$m,x=this.$M,P=r.weekdays,V=r.months,N=function(W,G,X,w){return W&&(W[G]||W(d,h))||X[G].slice(0,w)},Y=function(W){return n.s(I%12||12,W,"0")},z=r.meridiem||function(W,G,X){var w=W<12?"AM":"PM";return X?w.toLowerCase():w};return h.replace(k,function(W,G){return G||function(X){switch(X){case"YY":return String(d.$y).slice(-2);case"YYYY":return n.s(d.$y,4,"0");case"M":return x+1;case"MM":return n.s(x+1,2,"0");case"MMM":return N(r.monthsShort,x,V,3);case"MMMM":return N(V,x);case"D":return d.$D;case"DD":return n.s(d.$D,2,"0");case"d":return String(d.$W);case"dd":return N(r.weekdaysMin,d.$W,P,2);case"ddd":return N(r.weekdaysShort,d.$W,P,3);case"dddd":return P[d.$W];case"H":return String(I);case"HH":return n.s(I,2,"0");case"h":return Y(1);case"hh":return Y(2);case"a":return z(I,_,!0);case"A":return z(I,_,!1);case"m":return String(_);case"mm":return n.s(_,2,"0");case"s":return String(d.$s);case"ss":return n.s(d.$s,2,"0");case"SSS":return n.s(d.$ms,3,"0");case"Z":return c}return null}(W)||c.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(i,d,r){var h,c=this,I=n.p(d),_=y(i),x=(_.utcOffset()-this.utcOffset())*e,P=this-_,V=function(){return n.m(c,_)};switch(I){case F:h=V()/12;break;case A:h=V();break;case D:h=V()/3;break;case b:h=(P-x)/6048e5;break;case m:h=(P-x)/864e5;break;case l:h=P/t;break;case o:h=P/e;break;case s:h=P/1e3;break;default:h=P}return r?h:n.a(h)},f.daysInMonth=function(){return this.endOf(A).$D},f.$locale=function(){return p[this.$L]},f.locale=function(i,d){if(!i)return this.$L;var r=this.clone(),h=v(i,d,!0);return h&&(r.$L=h),r},f.clone=function(){return n.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},g}(),E=C.prototype;return y.prototype=E,[["$ms",a],["$s",s],["$m",o],["$H",l],["$W",m],["$M",A],["$y",F],["$D",R]].forEach(function(g){E[g[1]]=function(f){return this.$g(f,g[0],g[1])}}),y.extend=function(g,f){return g.$i||(g(f,C,y),g.$i=!0),y},y.locale=v,y.isDayjs=O,y.unix=function(g){return y(1e3*g)},y.en=p[$],y.Ls=p,y.p={},y}()}}]);