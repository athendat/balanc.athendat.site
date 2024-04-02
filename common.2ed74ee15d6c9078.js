(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2076],{24121:(P,M,e)=>{"use strict";e.d(M,{$f:()=>n,FH:()=>u,y6:()=>s});var t=e(54438),i=e(49098);const s=(E,y)=>{const b=E.params.locationId;return b&&"new"!==b?(0,t.WQX)(i.O).getLocationById(b):{}},n=(E,y)=>(0,t.WQX)(i.O).getLocations(),u=(E,y)=>(0,t.WQX)(i.O).findActiveLocations()},11781:(P,M,e)=>{"use strict";e.d(M,{BF:()=>n,UA:()=>s});var t=e(59640);const i=u=>u.locations,s=(0,t.Mz)(i,u=>u.location),n=(0,t.Mz)(i,u=>u.locations)},49098:(P,M,e)=>{"use strict";e.d(M,{O:()=>S});var t=e(88141),i=e(96354),s=e(24984),n=e(98216),u=e(73512);const E=u.J1`
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
`,y=u.J1`
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
`,b=u.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateLocationStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,R=u.J1`
    mutation RemoveLocation($removeLocationId: String!) {
        removeLocation(id: $removeLocationId) {
            ok
            message
        }
    }
`,A=u.J1`
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
`,$=u.J1`
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
`,l=u.J1`
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
`;var x=e(54438),k=e(59640);let S=(()=>{class L{constructor(I,m){this.apolloProvider=I,this.store=m,this._apollo=this.apolloProvider.use("BALANC")}createLocation(I){return this._apollo.mutate({mutation:E,variables:{createLocationInput:I},errorPolicy:"all"}).pipe((0,t.M)(({data:m})=>{m&&(this.store.dispatch((0,s.yJ)({location:m.createLocation.location})),this.store.dispatch((0,s.Og)({location:m.createLocation.location})))}))}getLocations(I=0,m=25,U="name",O="asc",g=""){return this._apollo.query({query:A,errorPolicy:"all",variables:{page:I,size:m,sort:U,order:O,search:g}}).pipe((0,t.M)(({data:v})=>{v&&(this.store.dispatch((0,n.Bp)({pagination:v.findAllLocations.pagination})),this.store.dispatch((0,s.xu)({locations:v.findAllLocations.locations})))}))}findActiveLocations(I="",m=25){return this._apollo.query({query:$,variables:{search:I,size:m},errorPolicy:"all"}).pipe((0,i.T)(({data:U})=>U?U.findActiveLocations:[]),(0,t.M)(U=>{U&&this.store.dispatch((0,s.xu)({locations:U}))}))}getLocationById(I){return this._apollo.query({query:l,variables:{findLocationByIdId:I},errorPolicy:"all"}).pipe((0,t.M)(({data:m})=>{m&&this.store.dispatch((0,s.Og)({location:m.findLocationById.location}))}))}updateLocation(I){return this._apollo.mutate({mutation:y,variables:{updateLocationInput:I},errorPolicy:"all"}).pipe((0,t.M)(({data:m})=>{m&&(this.store.dispatch((0,s.Nt)({location:m.updateLocation.location})),this.store.dispatch((0,s.Og)({location:m.updateLocation.location})))}))}updateLocationStatus(I){return this._apollo.mutate({mutation:b,variables:{updateEntityStatusInput:I},errorPolicy:"all"}).pipe((0,t.M)(({data:m})=>{m&&this.store.dispatch((0,s.jr)({id:I.id,active:I.active}))}))}removeLocation(I){return this._apollo.mutate({mutation:R,variables:{removeLocationId:I},errorPolicy:"all"}).pipe((0,t.M)(({data:m})=>{m&&this.store.dispatch((0,s.q$)({id:I}))}))}static#t=this.\u0275fac=function(m){return new(m||L)(x.KVO(u.Ic),x.KVO(k.il))};static#e=this.\u0275prov=x.jDH({token:L,factory:L.\u0275fac,providedIn:"root"})}return L})()},51973:(P,M,e)=>{"use strict";e.d(M,{a:()=>O});var t=e(54438),i=e(89417),s=e(75351),n=e(21413),u=e(56977),E=e(67398),y=e(46601),b=e(36596),R=e(94794),A=e(95416),$=e(88834),l=e(59042),x=e(32102);function k(g,v){1&g&&(t.j41(0,"h2",2),t.EFF(1," Agregar Marca "),t.k0s())}function S(g,v){1&g&&(t.j41(0,"h2",2),t.EFF(1," Editar Marca "),t.k0s())}function L(g,v){if(1&g&&(t.j41(0,"div",4)(1,"div",7)(2,"div",8)(3,"div",9)(4,"div",10)(5,"h6",11),t.EFF(6,"Nombre"),t.k0s(),t.j41(7,"span",12),t.EFF(8),t.k0s()()()()()()),2&g){const c=t.XpG();t.R7$(8),t.JRh(c.data.brand.name||"Sin nombre")}}function W(g,v){if(1&g&&(t.j41(0,"div",5)(1,"div",13)(2,"form",14)(3,"div",15)(4,"mat-form-field",16)(5,"mat-label"),t.EFF(6,"Nombre"),t.k0s(),t.nrm(7,"input",17),t.k0s()()()()()),2&g){const c=t.XpG();t.R7$(2),t.Y8G("formGroup",c.brandForm)("autocomplete","off"),t.R7$(5),t.Y8G("formControlName","name")("placeholder","Nombre del Marca")}}function I(g,v){if(1&g){const c=t.RV6();t.j41(0,"button",20),t.bIt("click",function(){t.eBV(c);const D=t.XpG(2);return t.Njj(D.updateBrand())}),t.EFF(1," Actualizar "),t.k0s()}if(2&g){const c=t.XpG(2);t.Y8G("color","primary")("disabled",c.brandForm.invalid)("matDialogClose","confirmed")}}function m(g,v){if(1&g){const c=t.RV6();t.j41(0,"button",20),t.bIt("click",function(){t.eBV(c);const D=t.XpG(2);return t.Njj(D.createBrand())}),t.EFF(1," Agregar "),t.k0s()}if(2&g){const c=t.XpG(2);t.Y8G("color","primary")("disabled",c.brandForm.invalid)("matDialogClose","confirmed")}}function U(g,v){if(1&g&&(t.j41(0,"div",6)(1,"button",18),t.EFF(2," Cancelar "),t.k0s(),t.DNE(3,I,2,3,"button",19)(4,m,2,3,"button",19),t.k0s()),2&g){const c=t.XpG();t.R7$(),t.Y8G("matDialogClose","cancelled"),t.R7$(2),t.vxM(3,"edit"===c.data.dialogMode?3:-1),t.R7$(),t.vxM(4,"add"===c.data.dialogMode?4:-1)}}let O=(()=>{class g{constructor(c){this.data=c,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this._unsubscribeAll=new n.B,this._brandsService=(0,t.WQX)(b.m),this._fuseConfirmationService=(0,t.WQX)(y.G),this._changeDetectorRef=(0,t.WQX)(t.gRc),this._formBuilder=(0,t.WQX)(i.ok),this._dialogRef=(0,t.WQX)(s.CP),this._snackBar=(0,t.WQX)(A.UG),this.dialogMode=c.dialogMode,this.brand=c.brand}ngOnInit(){this.brandForm=this._formBuilder.group({id:[null],name:[null,[i.k0.required,i.k0.minLength(3),i.k0.maxLength(255)]],description:[null,[i.k0.minLength(3),i.k0.maxLength(255)]],logo:[null]}),"edit"===this.dialogMode&&this.brandForm.patchValue(this.brand)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createBrand(){let c=this.brandForm.getRawValue();c=(0,E.A)(c,["id"]),this._fuseConfirmationService.open({title:"Crear Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(D=>{"confirmed"===D&&this._brandsService.createBrand(c).pipe((0,u.Q)(this._unsubscribeAll)).subscribe(({data:_})=>{this._snackBar.openFromComponent(R.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:_.createBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateBrand(){const c=this.brandForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(D=>{"confirmed"===D&&this._brandsService.updateBrand(c).pipe((0,u.Q)(this._unsubscribeAll)).subscribe(({data:_})=>{this._snackBar.openFromComponent(R.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:_.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()}),this._changeDetectorRef.markForCheck()})}fileChangeEvent(c){this.imageChangedEvent=c}imageCropped(c){this.croppedImage=c.base64}imageLoaded(c){}cropperReady(){}loadImageFailed(){}static#t=this.\u0275fac=function(B){return new(B||g)(t.rXU(s.Vh))};static#e=this.\u0275cmp=t.VBU({type:g,selectors:[["lists-brand-dialog"]],standalone:!0,features:[t.aNF],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex-auto"],[1,"w-full","overflow-hidden"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"py-5"],[1,"w-full"],["matInput","","type","text","required","","maxlength","250",3,"formControlName","placeholder"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"click","color","disabled","matDialogClose"]],template:function(B,D){1&B&&(t.j41(0,"div",0)(1,"div",1),t.DNE(2,k,2,0,"h2",2)(3,S,2,0,"h2",2),t.k0s(),t.j41(4,"div",3),t.DNE(5,L,9,1,"div",4)(6,W,8,4,"div",5),t.k0s(),t.DNE(7,U,5,3,"div",6),t.k0s()),2&B&&(t.R7$(2),t.vxM(2,"add"===D.data.dialogMode?2:-1),t.R7$(),t.vxM(3,"edit"===D.data.dialogMode?3:-1),t.R7$(2),t.vxM(5,"view"===D.data.dialogMode?5:-1),t.R7$(),t.vxM(6,6),t.R7$(),t.vxM(7,"view"!==D.data.dialogMode?7:-1))},dependencies:[$.Hl,$.$z,s.tx,x.RG,x.rl,x.nJ,l.fS,l.fg,i.X1,i.qT,i.me,i.BC,i.cb,i.YS,i.tU,i.j4,i.JD],encapsulation:2})}return g})()},57084:(P,M,e)=>{"use strict";e.d(M,{m:()=>t});class t{}},86779:(P,M,e)=>{"use strict";e.d(M,{I:()=>s,g:()=>n});var t=e(54438),i=e(30242);const s=(u,E)=>(0,t.WQX)(i.L).findAllPaymentGateways(),n=(u,E)=>(0,t.WQX)(i.L).findAllActivePaymentGateways()},70672:(P,M,e)=>{"use strict";e.d(M,{Z:()=>t,h:()=>i});class t{}var i=function(s){return s.none="none",s.oauth="oauth",s.basic="basic",s}(i||{})},7561:(P,M,e)=>{"use strict";e.d(M,{Q:()=>s});var t=e(54438),i=e(86952);const s=(n,u)=>(0,t.WQX)(i.v).getVouchers()},21781:(P,M,e)=>{"use strict";e.d(M,{gQ:()=>n});var t=e(59640);const i=u=>u.vouchers,n=((0,t.Mz)(i,u=>u.voucher),(0,t.Mz)(i,u=>u.vouchers))},86952:(P,M,e)=>{"use strict";e.d(M,{v:()=>I});var t=e(96697),i=e(25558),s=e(88141),n=e(98216),u=e(48392),E=e(21781),y=e(94794),b=e(73512);const R=b.J1`
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
`,A=b.J1`
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
`,$=b.J1`
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
`,l=b.J1`
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
`,x=b.J1`
    mutation RemoveVoucher($removeVoucherId: String!) {
        removeVoucher(id: $removeVoucherId) {
            ok
            message
        }
    }
`,k=b.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVoucherStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var S=e(54438),L=e(95416),W=e(59640);let I=(()=>{class m{constructor(O,g,v){this.apolloProvider=O,this._snackBar=g,this.store=v,this._apollo=this.apolloProvider.use("BALANC")}createVoucher(O){return this.store.select(E.gQ).pipe((0,t.s)(1),(0,i.n)(g=>this._apollo.mutate({mutation:$,variables:{createVoucherInput:O},errorPolicy:"all"}).pipe((0,s.M)(({errors:v,data:c})=>{if(v){let D="";v.forEach(_=>D+=`\n ${_.message}.`),this._snackBar.openFromComponent(y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:D,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const B=structuredClone(g);B.push(c.createVoucher.voucher),this.store.dispatch((0,u._6)({vouchers:B}))}))))}getVouchers(){return this._apollo.query({query:R,errorPolicy:"all"}).pipe((0,s.M)(({errors:O,data:g})=>{if(O){let v="";O.forEach(c=>v+=`\n ${c.message}.`),this._snackBar.openFromComponent(y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:v,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,u._6)({vouchers:g.findAllVouchers.vouchers})),this.store.dispatch((0,n.Bp)({pagination:g.findAllVouchers.pagination}))}))}getVoucherById(O){return this._apollo.query({query:A,variables:{findVoucherByIdId:O},errorPolicy:"all"}).pipe((0,s.M)(({errors:g,data:v})=>{if(g){let c="";g.forEach(B=>c+=`\n ${B.message}.`),this._snackBar.openFromComponent(y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:c,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,u.FN)({voucher:v.findOneVoucherById.voucher}))}))}updateVoucher(O){return this.store.select(E.gQ).pipe((0,t.s)(1),(0,i.n)(g=>this._apollo.mutate({mutation:l,variables:{updateVoucherInput:O},errorPolicy:"all"}).pipe((0,s.M)(({errors:v,data:c})=>{if(v){let _="";v.forEach(p=>_+=`\n ${p.message}.`),this._snackBar.openFromComponent(y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:_,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const B=structuredClone(g);B[g.findIndex(_=>_.id===O.id)]=c.updateVoucher.voucher,this.store.dispatch((0,u._6)({vouchers:B}))}))))}updateVoucherStatus(O){return this.store.select(E.gQ).pipe((0,t.s)(1),(0,i.n)(g=>this._apollo.mutate({mutation:k,variables:{updateEntityStatusInput:O},errorPolicy:"all"}).pipe((0,s.M)(({errors:v})=>{if(v){let D="";v.forEach(_=>D+=`\n ${_.message}.`),this._snackBar.openFromComponent(y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:D,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const c=structuredClone(g);c[g.findIndex(D=>D.id===O.id)].active=O.active,this.store.dispatch((0,u._6)({vouchers:c}))}))))}removeVoucher(O){return this.store.select(E.gQ).pipe((0,t.s)(1),(0,i.n)(g=>this._apollo.mutate({mutation:x,variables:{removeVoucherId:O},errorPolicy:"all"}).pipe((0,s.M)(({errors:v})=>{if(v){let D="";v.forEach(_=>D+=`\n ${_.message}.`),this._snackBar.openFromComponent(y.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:D,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const c=structuredClone(g),B=g.findIndex(D=>D.id===O);c.splice(B,1),this.store.dispatch((0,u._6)({vouchers:c}))}))))}static#t=this.\u0275fac=function(g){return new(g||m)(S.KVO(b.Ic),S.KVO(L.UG),S.KVO(W.il))};static#e=this.\u0275prov=S.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()},72824:(P,M,e)=>{"use strict";e.d(M,{g:()=>i});var t=e(54438);let i=(()=>{class s{transform(u){if(u)switch(u){case"quarterly":return"Trimestral";case"annually":return"Anual";default:return"Mensual"}return""}static#t=this.\u0275fac=function(E){return new(E||s)};static#e=this.\u0275pipe=t.EJ8({name:"subscriptionTitle",type:s,pure:!0,standalone:!0})}return s})()},34343:(P,M,e)=>{"use strict";e.d(M,{Er:()=>u,PL:()=>n,sB:()=>s});var t=e(59640);const i=E=>E.subscriptions,s=(0,t.Mz)(i,E=>E.subscription),n=(0,t.Mz)(i,E=>E.subscriptions),u=(0,t.Mz)(i,E=>E.subscriptionCardsData)},10729:(P,M,e)=>{"use strict";e.d(M,{k:()=>R});var t=e(21413),i=e(99213),s=e(31849),n=e(54438),u=e(51188),E=e(59640);function y(A,$){if(1&A){const l=n.RV6();n.j41(0,"fuse-card",18),n.bIt("click",function(){const k=n.eBV(l).$implicit,S=n.XpG(2);return n.Njj(S.navigate(k.link))}),n.j41(1,"div",19)(2,"div",20),n.EFF(3),n.k0s(),n.j41(4,"div",21),n.EFF(5),n.k0s()()()}if(2&A){const l=$.$implicit;n.R7$(3),n.JRh(l.title),n.R7$(2),n.JRh(l.subtitle)}}function b(A,$){if(1&A){const l=n.RV6();n.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),n.bIt("click",function(){n.eBV(l);const k=n.XpG();return n.Njj(k.navigate("/dashboard"))}),n.EFF(7,"Inicio"),n.k0s()(),n.j41(8,"div",4),n.nrm(9,"mat-icon",6),n.j41(10,"a",7),n.EFF(11),n.k0s()()(),n.j41(12,"div",8)(13,"a",9),n.nrm(14,"mat-icon",6),n.j41(15,"span",10),n.EFF(16,"Regresar"),n.k0s()()()(),n.j41(17,"div",11)(18,"div",12),n.EFF(19),n.k0s()()()(),n.j41(20,"div",13)(21,"div",14)(22,"div",15)(23,"div",16),n.Z7z(24,y,6,2,"fuse-card",17,n.fX1),n.k0s()()()()()}if(2&A){const l=n.XpG();n.R7$(9),n.Y8G("svgIcon","mat_solid:chevron_right"),n.R7$(2),n.JRh(l.fuseNavigation.title),n.R7$(3),n.Y8G("svgIcon","mat_solid:chevron_left"),n.R7$(5),n.SpI(" ",l.fuseNavigation.title," "),n.R7$(5),n.Dyx(l.fuseNavigation.children)}}let R=(()=>{class A{constructor(l,x,k){this._changeDetectorRef=l,this._router=x,this.store=k,this._unsubscribeAll=new t.B}ngOnInit(){}navigate(l){this._router.navigateByUrl(l)}static#t=this.\u0275fac=function(x){return new(x||A)(n.rXU(n.gRc),n.rXU(u.Ix),n.rXU(E.il))};static#e=this.\u0275cmp=n.VBU({type:A,selectors:[["ath-content-menu"]],standalone:!0,features:[n.aNF],decls:1,vars:1,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","py-3","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","cursor-pointer","text-primary-500","hover:underline",3,"click"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],["routerLink","/dashboard",1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"flex-auto","p-6","pt-0","sm:pt-0","sm:p-10"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full"],[1,"grid","grid-flow-row","grid-cols-1","mt-8","sm:grid-cols-2","lg:grid-cols-4","gap-y-12","sm:gap-x-4"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md",3,"click"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight"],[1,"text-md","text-secondary"]],template:function(x,k){1&x&&n.DNE(0,b,26,4,"div",0),2&x&&n.vxM(0,k.fuseNavigation?0:-1)},dependencies:[i.m_,i.An,s.$],encapsulation:2,changeDetection:0})}return A})()},46812:(P,M,e)=>{"use strict";e.d(M,{H_:()=>n,dX:()=>t});var t=function(l){return l.pendiente="pendiente",l.parcial="parcial",l.pagada="pagada",l.cancelado="cancelado",l.fallido="fallido",l.expirado="expirado",l.devuelto="devuelto",l.dPendiente="devoluci\xf3n pendiente",l.dFallida="devoluci\xf3n fallida",l}(t||{}),n=function(l){return l.total="total",l.partial="partial",l}(n||{})},21607:(P,M,e)=>{"use strict";e.d(M,{At:()=>n,G0:()=>E,ih:()=>u,tz:()=>s});class s{constructor(b,R,A,$,l,x){this.productId=b,this.name=R,this.uom=A,this.price=$,this.quantity=l,this.depotId=x}}class n{constructor(b,R,A){this.assistanceId=b,this.price=R,this.quantity=A}}var u=function(y){return y.nueva="nueva",y.recibida="recibida",y.cobrada="cobrada",y.rechazada="rechazada",y.cancelada="cancelada",y.facturada="facturada",y.entregada="entregada",y}(u||{});class E{constructor(b,R,A,$){this.nueva=b,this.recibida=R,this.rechazada=A,this.cancelada=$}}},41791:(P,M,e)=>{"use strict";e.d(M,{Nh:()=>n,oy:()=>s});var t=e(59640);const i=y=>y.gModules,s=(0,t.Mz)(i,y=>y.module),n=(0,t.Mz)(i,y=>y.modules);(0,t.Mz)(i,y=>({})),(0,t.Mz)(i,y=>({}))},71411:(P,M,e)=>{"use strict";e.d(M,{Q:()=>s});var t=e(54438),i=e(25910);let s=(()=>{class n{constructor(E){this._ratesService=E}resolve(E,y){return this._ratesService.getRates()}static#t=this.\u0275fac=function(y){return new(y||n)(t.KVO(i.f))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},72831:(P,M,e)=>{"use strict";e.d(M,{Ad:()=>E,NH:()=>y,ed:()=>b});var t=e(18810),i=e(99437),s=e(54438),n=e(44312),u=e(51188);let E=(()=>{class R{constructor($,l){this._rolesService=$,this._router=l}resolve($,l){return this._rolesService.findAllRoles().pipe((0,i.W)(x=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(l){return new(l||R)(s.KVO(n.W),s.KVO(u.Ix))};static#e=this.\u0275prov=s.jDH({token:R,factory:R.\u0275fac,providedIn:"root"})}return R})(),y=(()=>{class R{constructor($,l){this._rolesService=$,this._router=l}resolve($,l){const x=$.params.roleId;return"new"===x?null:this._rolesService.findRoleById(x).pipe((0,i.W)(k=>{const S=l.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(S),(0,t.$)(k)}))}static#t=this.\u0275fac=function(l){return new(l||R)(s.KVO(n.W),s.KVO(u.Ix))};static#e=this.\u0275prov=s.jDH({token:R,factory:R.\u0275fac,providedIn:"root"})}return R})(),b=(()=>{class R{constructor($,l){this._rolesService=$,this._router=l}resolve($,l){return this._rolesService.findAllActiveRoles().pipe((0,i.W)(x=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(l){return new(l||R)(s.KVO(n.W),s.KVO(u.Ix))};static#e=this.\u0275prov=s.jDH({token:R,factory:R.\u0275fac,providedIn:"root"})}return R})()},15887:(P,M,e)=>{"use strict";e.d(M,{X7:()=>s,y3:()=>n});var t=e(59640);const i=u=>u.roles,s=(0,t.Mz)(i,u=>u.role),n=(0,t.Mz)(i,u=>u.roles)},44312:(P,M,e)=>{"use strict";e.d(M,{W:()=>S});var t=e(54438),i=e(96354),s=e(88141),n=e(73512),u=e(59640),E=e(49238),y=e(98216);const b=n.J1`
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
`,R=n.J1`
    query FindAllActiveRoles {
        findAllActiveRoles {
            id
            name
            description
            isCoreRole
        }
    }
`,A=n.J1`
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
`,$=n.J1`
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
`,l=n.J1`
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
`,x=n.J1`
    mutation UpdateRoleStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRoleStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,k=n.J1`
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
`;let S=(()=>{class L{constructor(){this.apolloProvider=(0,t.WQX)(n.Ic),this.store=(0,t.WQX)(u.il),this._apollo=this.apolloProvider.use("BALANC")}createRole(I){return this._apollo.mutate({mutation:$,variables:{createRoleInput:I},errorPolicy:"all"}).pipe((0,i.T)(({data:m})=>m?m.createRole:null),(0,s.M)(m=>{m&&this.store.dispatch((0,E.rd)({role:m.role}))}))}findAllRoles(I=0,m=500,U="createdAt",O="asc",g=""){return this._apollo.query({query:b,errorPolicy:"all",variables:{page:I,size:m,sort:U,order:O,search:g}}).pipe((0,s.M)(({data:v})=>{v&&(this.store.dispatch((0,y.Bp)({pagination:v.paginatedRoles.pagination})),this.store.dispatch((0,E.S0)({roles:v.paginatedRoles.items})))}))}findAllActiveRoles(){return this._apollo.query({query:R,errorPolicy:"all"}).pipe((0,i.T)(({data:I})=>I?I.findAllActiveRoles:null),(0,s.M)(I=>{I&&this.store.dispatch((0,E.S0)({roles:I}))}))}findRoleById(I){return this._apollo.query({query:A,variables:{roleId:I},errorPolicy:"all"}).pipe((0,i.T)(({data:m})=>m?m.findRoleById:null),(0,s.M)(m=>{m&&this.store.dispatch((0,E.L4)({role:m.role}))}))}updateRole(I){return this._apollo.mutate({mutation:l,variables:{updateRoleInput:I},errorPolicy:"all"}).pipe((0,i.T)(({data:m})=>m?m.updateRole:null),(0,s.M)(m=>{m&&this.store.dispatch((0,E.zD)({role:m.role}))}))}updateRoleStatus(I){return this._apollo.mutate({mutation:x,variables:{updateEntityStatusInput:I},errorPolicy:"all"}).pipe((0,i.T)(({data:m})=>m?m.updateRoleStatus:null),(0,s.M)(m=>{m&&this.store.dispatch((0,E.yp)(I))}))}removeRole(I,m=0,U=500,O="name",g="desc",v=null){return this._apollo.mutate({mutation:k,variables:{removeRoleById:I,page:m,size:U,sort:O,order:g,search:v},errorPolicy:"all"}).pipe((0,s.M)(({data:c})=>{c&&(this.store.dispatch((0,y.Bp)({pagination:c.paginatedRemoveRole.pagination})),this.store.dispatch((0,E.S0)({roles:c.paginatedRemoveRole.items})))}))}static#t=this.\u0275fac=function(m){return new(m||L)};static#e=this.\u0275prov=t.jDH({token:L,factory:L.\u0275fac,providedIn:"root"})}return L})()},52002:(P,M,e)=>{"use strict";e.d(M,{Yt:()=>t});class t{constructor(){this.tags=[]}}},89654:(P,M,e)=>{"use strict";e.d(M,{n:()=>d});var t=e(54438),i=e(89417),s=e(21413),n=e(56977),u=e(99172),E=e(96354),y=e(70152),b=e(32102),R=e(59042),A=e(88834),$=e(99213),l=e(60850),x=e(82798),k=e(14823),S=e(60177),L=e(96817),W=e(73512);let I=(()=>{class r{constructor(h){this.apolloProvider=h,this._apollo=this.apolloProvider.use("BALANC")}getCardType(h){return this._apollo.query({query:L.LU,variables:{cardNumber:h},errorPolicy:"all"})}static#t=this.\u0275fac=function(F){return new(F||r)(t.KVO(W.Ic))};static#e=this.\u0275prov=t.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var m=e(86600);const U=["bankAccountNgForm"];function O(r,C){1&r&&(t.j41(0,"mat-label"),t.EFF(1,"N\xfamero de Cuenta"),t.k0s())}function g(r,C){if(1&r&&t.nrm(0,"img",5),2&r){const h=t.XpG();t.Y8G("src",h.cardImage,t.B4B)}}function v(r,C){1&r&&(t.j41(0,"mat-error"),t.EFF(1," El n\xfamero de cuenta es obligatorio "),t.k0s())}function c(r,C){1&r&&(t.j41(0,"mat-label"),t.EFF(1,"Banco"),t.k0s())}function B(r,C){if(1&r&&(t.j41(0,"mat-option",7),t.EFF(1),t.k0s()),2&r){const h=C.$implicit;t.Y8G("value",h),t.R7$(),t.JRh(h)}}function D(r,C){1&r&&(t.j41(0,"mat-label"),t.EFF(1,"Moneda"),t.k0s())}function _(r,C){if(1&r&&(t.j41(0,"mat-option",7),t.EFF(1),t.k0s()),2&r){const h=C.$implicit;t.Y8G("value",h.iso),t.R7$(),t.SpI(" ",h.iso," ")}}function p(r,C){1&r&&(t.j41(0,"mat-label"),t.EFF(1,"Beneficiario"),t.k0s())}function a(r,C){1&r&&(t.j41(0,"mat-error"),t.EFF(1," El beneficiario no presenta un formato v\xe1lido "),t.k0s())}function f(r,C){1&r&&(t.j41(0,"mat-error"),t.EFF(1," El beneficiario es obligatorio "),t.k0s())}function o(r,C){if(1&r){const h=t.RV6();t.j41(0,"div",10)(1,"button",11),t.bIt("click",function(){t.eBV(h);const T=t.XpG();return t.Njj(T.removeBankAccount(T.index))}),t.nrm(2,"mat-icon",12),t.k0s()()}2&r&&(t.R7$(2),t.Y8G("svgIcon","mat_solid:delete"))}let d=(()=>{class r{constructor(h,F){this._changeDetectorRef=h,this._cardTypesService=F,this.currencies=[],this.remove=new t.bkB,this.cardImage=null,this.cubanBanks=["Metropolitano (BMP)","Popular de Ahorro (BPA)","Cr\xe9dito y Comercio (BANDEC)"],this._unsubscribeAll=new s.B}ngOnInit(){this.bankAccountForm.get("cardType").value&&this.fillFormData(this.bankAccountForm.get("cardType").value),this.filteredBanks=this.bankAccountForm.get("bank").valueChanges.pipe((0,n.Q)(this._unsubscribeAll),(0,u.Z)(""),(0,E.T)(h=>h?this.cubanBanks.filter(F=>F.toLowerCase().includes(h.toLowerCase())):[])),this.bankAccountForm.get("no").valueChanges.pipe((0,y.B)(600),(0,n.Q)(this._unsubscribeAll)).subscribe(h=>{h.length>5&&h.length<11&&this._cardTypesService.getCardType(h).subscribe(({})=>{}),h||(this.bankAccountForm.get("bank").enable(),this.bankAccountForm.get("currency").enable(),this.bankAccountForm.get("cardType").setValue(""),this.cardImage=null),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}removeBankAccount(h){this.remove.next(h)}clearForm(){this.bankAccountNgForm.resetForm()}fillFormData(h){h?(this.bankAccountForm.get("bank").setValue(h.name),this.bankAccountForm.get("currency").setValue(h.currency),this.bankAccountForm.get("bank").disable(),this.bankAccountForm.get("currency").disable(),("BMPU"===h.bank||"BMPUW"===h.bank)&&(this.cardImage="assets/images/cards/banmet.webp"),("BPAU"===h.bank||"BPAUW"===h.bank)&&(this.cardImage="assets/images/cards/bpa.webp"),("BANU"===h.bank||"BANW"===h.bank)&&(this.cardImage="assets/images/cards/bandec.webp"),"AIS"===h.name&&(this.cardImage="assets/images/cards/ais.webp"),"MN"===h.currency&&this.bankAccountForm.get("currency").setValue("CUP"),"USD"===h.currency&&this.bankAccountForm.get("currency").setValue("USD"),this.bankAccountForm.get("cardType").setValue(h._id)):(this.bankAccountForm.get("bank").enable(),this.bankAccountForm.get("currency").enable(),this.bankAccountForm.get("cardType").setValue(""),this.cardImage=null)}static#t=this.\u0275fac=function(F){return new(F||r)(t.rXU(t.gRc),t.rXU(I))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["bank-account"]],viewQuery:function(F,T){if(1&F&&t.GBs(U,5),2&F){let j;t.mGM(j=t.lsd())&&(T.bankAccountNgForm=j.first)}},inputs:{currencies:"currencies",bankAccountForm:"bankAccountForm",first:"first",last:"last",index:"index"},outputs:{remove:"remove"},standalone:!0,features:[t.aNF],decls:29,vars:33,consts:[["auto","matAutocomplete"],[1,"grid","grid-cols-1","gap-3","md:grid-cols-2",3,"formGroup"],[1,"flex-auto","mat-fuse-dense"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","",3,"type","minlength","maxlength","formControlName","placeholder","spellcheck"],["matSuffix","",1,"w-12","h-8",3,"src"],["maxlength","255","matInput","",3,"type","formControlName","matAutocomplete","placeholder","spellcheck"],[3,"value"],["required","",3,"formControlName","placeholder"],["maxlength","255","matInput","",3,"type","formControlName","placeholder","spellcheck"],[1,"flex","items-center","w-10","pl-2"],["mat-icon-button","","matTooltip","Eliminar cuenta",1,"w-8","h-8","min-h-8",3,"click"],[1,"icon-size-5",3,"svgIcon"]],template:function(F,T){if(1&F&&(t.j41(0,"form",1)(1,"mat-form-field",2),t.DNE(2,O,2,0,"mat-label"),t.nrm(3,"mat-icon",3)(4,"input",4),t.DNE(5,g,1,1,"img",5)(6,v,2,0,"mat-error"),t.k0s(),t.j41(7,"mat-form-field",2),t.DNE(8,c,2,0,"mat-label"),t.nrm(9,"mat-icon",3)(10,"input",6),t.j41(11,"mat-autocomplete",null,0),t.Z7z(13,B,2,2,"mat-option",7,t.fX1),t.nI1(15,"async"),t.k0s()(),t.j41(16,"mat-form-field",2),t.DNE(17,D,2,0,"mat-label"),t.nrm(18,"mat-icon",3),t.j41(19,"mat-select",8),t.Z7z(20,_,2,2,"mat-option",7,t.fX1),t.k0s()(),t.j41(22,"mat-form-field",2),t.DNE(23,p,2,0,"mat-label"),t.nrm(24,"mat-icon",3)(25,"input",9),t.DNE(26,a,2,0,"mat-error")(27,f,2,0,"mat-error"),t.k0s(),t.DNE(28,o,3,1,"div",10),t.k0s()),2&F){const j=t.sdS(12);t.Y8G("formGroup",T.bankAccountForm),t.R7$(2),t.vxM(2,T.first?2:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:credit_card"),t.R7$(),t.Y8G("type","text")("minlength",16)("maxlength",24)("formControlName","no")("placeholder","Ejemplo: 1234567890123456")("spellcheck",!1),t.R7$(),t.vxM(5,T.cardImage?5:-1),t.R7$(),t.vxM(6,T.bankAccountForm.get("no").hasError("required")?6:-1),t.R7$(2),t.vxM(8,T.first?8:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:account_balance"),t.R7$(),t.Y8G("type","text")("formControlName","bank")("matAutocomplete",j)("placeholder","Ejemplo: Banco Financiero")("spellcheck",!1),t.R7$(3),t.Dyx(t.bMT(15,31,T.filteredBanks)),t.R7$(4),t.vxM(17,T.first?17:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:monetization_on"),t.R7$(),t.Y8G("formControlName","currency")("placeholder","Ejemplo: USD"),t.R7$(),t.Dyx(T.currencies),t.R7$(3),t.vxM(23,T.first?23:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:business"),t.R7$(),t.Y8G("type","text")("formControlName","beneficiary")("placeholder","Ejemplo: Empresa SRL")("spellcheck",!1),t.R7$(),t.vxM(26,T.bankAccountForm.get("beneficiary").hasError("pattern")?26:-1),t.R7$(),t.vxM(27,T.bankAccountForm.get("beneficiary").hasError("required")?27:-1),t.R7$(),t.vxM(28,T.first&&T.last?-1:28)}},dependencies:[S.Jj,l.jL,l.$3,m.wT,l.pN,A.Hl,A.iY,b.RG,b.rl,b.nJ,b.TL,b.JW,b.yw,$.m_,$.An,R.fS,R.fg,x.Ve,x.VO,k.uc,k.oV,i.X1,i.qT,i.me,i.BC,i.cb,i.YS,i.xh,i.tU,i.j4,i.JD],encapsulation:2,changeDetection:0})}return r})()},78357:(P,M,e)=>{"use strict";e.d(M,{i:()=>p});var t=e(54438),i=e(89417),s=e(59115),n=e(99213),u=e(88834),E=e(21413),y=e(56977),b=e(53328),R=e(82765),A=e(60177),$=e(25084),l=e(32102),x=e(59042),k=e(82798),S=e(60850),L=e(86600);const W=["bt"];function I(a,f){if(1&a&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"uppercase"),t.k0s()),2&a){const o=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,o.get("name").value))}}function m(a,f){if(1&a&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()),2&a){const o=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,o.get("name").value))}}function U(a,f){if(1&a&&(t.j41(0,"div",15)(1,"mat-checkbox",16),t.DNE(2,I,3,3,"span")(3,m,3,3,"span"),t.k0s()()),2&a){const o=f.$implicit,d=t.XpG(2);t.R7$(),t.Y8G("formControl",o.get("checked")),t.R7$(),t.vxM(2,d.useUpperCase?2:-1),t.R7$(),t.vxM(3,d.useUpperCase?-1:3)}}function O(a,f){if(1&a&&(t.j41(0,"div",9),t.Z7z(1,U,4,3,"div",15,t.fX1),t.k0s()),2&a){const o=t.XpG();t.R7$(),t.Dyx(o.formArray.controls)}}function g(a,f){if(1&a&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&a){const o=t.sdS(4),d=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",o)("formControl",d.dateControl)("max",d.maxDate),t.R7$(),t.Y8G("for",o)}}function v(a,f){if(1&a){const o=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const r=t.eBV(o).$implicit,C=t.XpG(2);return t.Njj(C.selectEntity(r))}),t.EFF(1),t.k0s()}if(2&a){const o=f.$implicit;t.Y8G("value",o.name),t.R7$(),t.SpI(" ",o.name," ")}}function c(a,f){if(1&a&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,v,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&a){const o=t.sdS(4),d=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",d.searchEntityControl)("matAutocomplete",o)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,d.entitiesFiltered))}}function B(a,f){if(1&a&&(t.j41(0,"mat-form-field",10),t.nrm(1,"input",17)(2,"mat-datepicker-toggle",18)(3,"mat-datepicker",null,4),t.k0s()),2&a){const o=t.sdS(4),d=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",o)("formControl",d.dateControl)("max",d.maxDate),t.R7$(),t.Y8G("for",o)}}function D(a,f){if(1&a){const o=t.RV6();t.j41(0,"mat-option",23),t.bIt("click",function(){const r=t.eBV(o).$implicit,C=t.XpG(2);return t.Njj(C.selectEntity(r))}),t.EFF(1),t.k0s()}if(2&a){const o=f.$implicit;t.Y8G("value",o.name),t.R7$(),t.SpI(" ",o.name," ")}}function _(a,f){if(1&a&&(t.j41(0,"mat-form-field",11),t.nrm(1,"mat-icon",19)(2,"input",20),t.j41(3,"mat-autocomplete",21,5),t.Z7z(5,D,2,2,"mat-option",22,t.fX1),t.nI1(7,"async"),t.k0s()()),2&a){const o=t.sdS(4),d=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",d.searchEntityControl)("matAutocomplete",o)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,d.entitiesFiltered))}}let p=(()=>{class a{constructor(){this.useUpperCase=!1,this.dataChange=new t.bkB,this.entityPropertyName="name",this.data=[],this.maxDate=new Date,this.dateControl=new i.MJ({disabled:!0}),this.formArray=new i.Yp([]),this._unsubscribeAll=new E.B,this._formBuilder=(0,t.WQX)(i.ok),this._changeDetectorRef=(0,t.WQX)(t.gRc)}get hasFilter(){return!b.H.IsNullOrEmpty(this.selectedFilter)}ngOnInit(){this.initializeFormArray(),this.dateControl.valueChanges.pipe((0,y.Q)(this._unsubscribeAll)).subscribe(o=>{this.dataChange.next(o),this.selectedFilter=o,this.menu.closeMenu()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}clearFilter(){switch(this.filterType){case"filterEntity":this.searchEntityControl.setValue(""),this.dataChange.next(null),this.selectedFilter=null;break;case"date":this.dateControl.setValue(null);break;case"multiSelect":case"multiSelectEntity":this.clearFormArray()}this.menu.closeMenu()}closeMenu(){this.menu.closeMenu()}selectEntity(o){this.dataChange.next(o),this.selectedFilter=o,this.menu.closeMenu()}initializeFormArray(){switch(this.filterType){case"multiSelect":this.formArray=this._formBuilder.array(this.data.map(o=>this._formBuilder.group({name:[o],checked:[!1]})));break;case"multiSelectEntity":this.formArray=this._formBuilder.array(this.data.map(o=>this._formBuilder.group({id:[o.id],name:[o[this.entityPropertyName]],checked:[!1]})))}this._changeDetectorRef.markForCheck(),this.formArraySubscription=this.formArray.valueChanges.pipe((0,y.Q)(this._unsubscribeAll)).subscribe(o=>{let d=[];switch(this.filterType){case"multiSelect":d=o.filter(r=>r.checked).map(r=>r.name);break;case"multiSelectEntity":for(const r of o.filter(C=>C.checked)){const C=this.data.find(h=>h.id===r.id);d.push(C)}}this.dataChange.next(d),this.selectedFilter=d})}clearFormArray(){this.formArraySubscription.unsubscribe(),this.selectedFilter=[],this.dataChange.next([]),this.initializeFormArray()}static#t=this.\u0275fac=function(d){return new(d||a)};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["table-filter"]],viewQuery:function(d,r){if(1&d&&t.GBs(W,7),2&d){let C;t.mGM(C=t.lsd())&&(r.menu=C.first)}},inputs:{filterType:"filterType",useUpperCase:"useUpperCase",entityPropertyName:"entityPropertyName",data:"data",entitiesFiltered:"entitiesFiltered",searchEntityControl:"searchEntityControl"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.aNF],decls:19,vars:6,consts:[["bt","matMenuTrigger"],["listStatusMenu","matMenu"],["dateEntity",""],["SearchEntity",""],["entityDate",""],["entitiesAutocomplete","matAutocomplete"],["mat-icon-button","","matTooltip","",1,"w-6","h-6","min-h-6","min-w-6",3,"color","matMenuTriggerFor"],[1,"icon-size-4",3,"svgIcon"],[3,"click"],[1,"w-full","px-4","py-4"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","mat-fuse-de","fuse-mat-rounded","max-w-64","min-w-64",3,"subscriptSizing"],[1,"flex","justify-end","w-full","p-2","pb-0","border-t-2"],["mat-flat-button","",3,"click"],["mat-button","","color","warn",3,"click"],[1,""],["color","primary",3,"formControl"],["matInput","","placeholder","Fecha",3,"matDatepicker","formControl","max"],["matIconSuffix","",3,"for"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],[3,"value"],[3,"click","value"]],template:function(d,r){if(1&d){const C=t.RV6();t.j41(0,"div")(1,"button",6,0),t.nrm(3,"mat-icon",7),t.k0s(),t.j41(4,"mat-menu",null,1)(6,"div",8),t.bIt("click",function(F){return t.eBV(C),t.Njj(F.stopPropagation())}),t.DNE(7,O,3,0,"div",9)(8,g,5,5,"mat-form-field",10)(9,c,8,7,"mat-form-field",11),t.j41(10,"div",12)(11,"button",13),t.bIt("click",function(){return t.eBV(C),t.Njj(r.closeMenu())}),t.EFF(12,"Cerrar"),t.k0s(),t.j41(13,"button",14),t.bIt("click",function(){return t.eBV(C),t.Njj(r.clearFilter())}),t.EFF(14,"Limpiar"),t.k0s()()()()(),t.DNE(15,B,5,5,"ng-template",null,2,t.C5r)(17,_,8,7,"ng-template",null,3,t.C5r)}if(2&d){const C=t.sdS(5);t.R7$(),t.Y8G("color",r.hasFilter?"primary":"default")("matMenuTriggerFor",C),t.R7$(2),t.Y8G("svgIcon","mat_solid:filter_list"),t.R7$(4),t.vxM(7,"multiSelect"===r.filterType||"multiSelectEntity"===r.filterType?7:-1),t.R7$(),t.vxM(8,"date"===r.filterType?8:-1),t.R7$(),t.vxM(9,"filterEntity"===r.filterType?9:-1)}},dependencies:[A.Jj,u.Hl,u.$z,u.iY,n.m_,n.An,s.Cn,s.kk,s.Cp,R.g7,R.So,A.Pc,A.PV,$.X6,$.Vh,$.bZ,$.bU,l.RG,l.rl,l.JW,l.yw,x.fS,x.fg,i.X1,i.me,i.BC,i.l_,S.jL,S.$3,L.wT,S.pN,k.Ve],encapsulation:2,changeDetection:0})}return a})()},67374:function(P){P.exports=function(){"use strict";var e=6e4,t=36e5,i="millisecond",s="second",n="minute",u="hour",E="day",y="week",b="month",R="quarter",A="year",$="date",l="Invalid Date",x=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,k=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(_){var p=["th","st","nd","rd"],a=_%100;return"["+_+(p[(a-20)%10]||p[a]||p[0])+"]"}},L=function(_,p,a){var f=String(_);return!f||f.length>=p?_:""+Array(p+1-f.length).join(a)+_},W={s:L,z:function(_){var p=-_.utcOffset(),a=Math.abs(p),f=Math.floor(a/60),o=a%60;return(p<=0?"+":"-")+L(f,2,"0")+":"+L(o,2,"0")},m:function _(p,a){if(p.date()<a.date())return-_(a,p);var f=12*(a.year()-p.year())+(a.month()-p.month()),o=p.clone().add(f,b),d=a-o<0,r=p.clone().add(f+(d?-1:1),b);return+(-(f+(a-o)/(d?o-r:r-o))||0)},a:function(_){return _<0?Math.ceil(_)||0:Math.floor(_)},p:function(_){return{M:b,y:A,w:y,d:E,D:$,h:u,m:n,s,ms:i,Q:R}[_]||String(_||"").toLowerCase().replace(/s$/,"")},u:function(_){return void 0===_}},I="en",m={};m[I]=S;var U="$isDayjsObject",O=function(_){return _ instanceof B||!(!_||!_[U])},g=function _(p,a,f){var o;if(!p)return I;if("string"==typeof p){var d=p.toLowerCase();m[d]&&(o=d),a&&(m[d]=a,o=d);var r=p.split("-");if(!o&&r.length>1)return _(r[0])}else{var C=p.name;m[C]=p,o=C}return!f&&o&&(I=o),o||!f&&I},v=function(_,p){if(O(_))return _.clone();var a="object"==typeof p?p:{};return a.date=_,a.args=arguments,new B(a)},c=W;c.l=g,c.i=O,c.w=function(_,p){return v(_,{locale:p.$L,utc:p.$u,x:p.$x,$offset:p.$offset})};var B=function(){function _(a){this.$L=g(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[U]=!0}var p=_.prototype;return p.parse=function(a){this.$d=function(f){var o=f.date,d=f.utc;if(null===o)return new Date(NaN);if(c.u(o))return new Date;if(o instanceof Date)return new Date(o);if("string"==typeof o&&!/Z$/i.test(o)){var r=o.match(x);if(r){var C=r[2]-1||0,h=(r[7]||"0").substring(0,3);return d?new Date(Date.UTC(r[1],C,r[3]||1,r[4]||0,r[5]||0,r[6]||0,h)):new Date(r[1],C,r[3]||1,r[4]||0,r[5]||0,r[6]||0,h)}}return new Date(o)}(a),this.init()},p.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},p.$utils=function(){return c},p.isValid=function(){return this.$d.toString()!==l},p.isSame=function(a,f){var o=v(a);return this.startOf(f)<=o&&o<=this.endOf(f)},p.isAfter=function(a,f){return v(a)<this.startOf(f)},p.isBefore=function(a,f){return this.endOf(f)<v(a)},p.$g=function(a,f,o){return c.u(a)?this[f]:this.set(o,a)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(a,f){var o=this,d=!!c.u(f)||f,r=c.p(a),C=function(z,V){var N=c.w(o.$u?Date.UTC(o.$y,V,z):new Date(o.$y,V,z),o);return d?N:N.endOf(E)},h=function(z,V){return c.w(o.toDate()[z].apply(o.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(V)),o)},F=this.$W,T=this.$M,j=this.$D,K="set"+(this.$u?"UTC":"");switch(r){case A:return d?C(1,0):C(31,11);case b:return d?C(1,T):C(0,T+1);case y:var G=this.$locale().weekStart||0,Y=(F<G?F+7:F)-G;return C(d?j-Y:j+(6-Y),T);case E:case $:return h(K+"Hours",0);case u:return h(K+"Minutes",1);case n:return h(K+"Seconds",2);case s:return h(K+"Milliseconds",3);default:return this.clone()}},p.endOf=function(a){return this.startOf(a,!1)},p.$set=function(a,f){var o,d=c.p(a),r="set"+(this.$u?"UTC":""),C=(o={},o[E]=r+"Date",o[$]=r+"Date",o[b]=r+"Month",o[A]=r+"FullYear",o[u]=r+"Hours",o[n]=r+"Minutes",o[s]=r+"Seconds",o[i]=r+"Milliseconds",o)[d],h=d===E?this.$D+(f-this.$W):f;if(d===b||d===A){var F=this.clone().set($,1);F.$d[C](h),F.init(),this.$d=F.set($,Math.min(this.$D,F.daysInMonth())).$d}else C&&this.$d[C](h);return this.init(),this},p.set=function(a,f){return this.clone().$set(a,f)},p.get=function(a){return this[c.p(a)]()},p.add=function(a,f){var o,d=this;a=Number(a);var r=c.p(f),C=function(T){var j=v(d);return c.w(j.date(j.date()+Math.round(T*a)),d)};if(r===b)return this.set(b,this.$M+a);if(r===A)return this.set(A,this.$y+a);if(r===E)return C(1);if(r===y)return C(7);var h=(o={},o[n]=e,o[u]=t,o[s]=1e3,o)[r]||1,F=this.$d.getTime()+a*h;return c.w(F,this)},p.subtract=function(a,f){return this.add(-1*a,f)},p.format=function(a){var f=this,o=this.$locale();if(!this.isValid())return o.invalidDate||l;var d=a||"YYYY-MM-DDTHH:mm:ssZ",r=c.z(this),C=this.$H,h=this.$m,F=this.$M,T=o.weekdays,j=o.months,G=function(V,N,X,w){return V&&(V[N]||V(f,d))||X[N].slice(0,w)},Y=function(V){return c.s(C%12||12,V,"0")},z=o.meridiem||function(V,N,X){var w=V<12?"AM":"PM";return X?w.toLowerCase():w};return d.replace(k,function(V,N){return N||function(X){switch(X){case"YY":return String(f.$y).slice(-2);case"YYYY":return c.s(f.$y,4,"0");case"M":return F+1;case"MM":return c.s(F+1,2,"0");case"MMM":return G(o.monthsShort,F,j,3);case"MMMM":return G(j,F);case"D":return f.$D;case"DD":return c.s(f.$D,2,"0");case"d":return String(f.$W);case"dd":return G(o.weekdaysMin,f.$W,T,2);case"ddd":return G(o.weekdaysShort,f.$W,T,3);case"dddd":return T[f.$W];case"H":return String(C);case"HH":return c.s(C,2,"0");case"h":return Y(1);case"hh":return Y(2);case"a":return z(C,h,!0);case"A":return z(C,h,!1);case"m":return String(h);case"mm":return c.s(h,2,"0");case"s":return String(f.$s);case"ss":return c.s(f.$s,2,"0");case"SSS":return c.s(f.$ms,3,"0");case"Z":return r}return null}(V)||r.replace(":","")})},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(a,f,o){var d,r=this,C=c.p(f),h=v(a),F=(h.utcOffset()-this.utcOffset())*e,T=this-h,j=function(){return c.m(r,h)};switch(C){case A:d=j()/12;break;case b:d=j();break;case R:d=j()/3;break;case y:d=(T-F)/6048e5;break;case E:d=(T-F)/864e5;break;case u:d=T/t;break;case n:d=T/e;break;case s:d=T/1e3;break;default:d=T}return o?d:c.a(d)},p.daysInMonth=function(){return this.endOf(b).$D},p.$locale=function(){return m[this.$L]},p.locale=function(a,f){if(!a)return this.$L;var o=this.clone(),d=g(a,f,!0);return d&&(o.$L=d),o},p.clone=function(){return c.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},_}(),D=B.prototype;return v.prototype=D,[["$ms",i],["$s",s],["$m",n],["$H",u],["$W",E],["$M",b],["$y",A],["$D",$]].forEach(function(_){D[_[1]]=function(p){return this.$g(p,_[0],_[1])}}),v.extend=function(_,p){return _.$i||(_(p,B,v),_.$i=!0),v},v.locale=g,v.isDayjs=O,v.unix=function(_){return v(1e3*_)},v.en=m[I],v.Ls=m,v.p={},v}()}}]);