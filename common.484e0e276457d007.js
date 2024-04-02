"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2076],{24121:(D,_,e)=>{e.d(_,{$f:()=>o,FH:()=>r,y6:()=>i});var t=e(54438),a=e(49098);const i=(p,m)=>{const C=p.params.locationId;return C&&"new"!==C?(0,t.WQX)(a.O).getLocationById(C):{}},o=(p,m)=>(0,t.WQX)(a.O).getLocations(),r=(p,m)=>(0,t.WQX)(a.O).findActiveLocations()},11781:(D,_,e)=>{e.d(_,{BF:()=>o,UA:()=>i});var t=e(59640);const a=r=>r.locations,i=(0,t.Mz)(a,r=>r.location),o=(0,t.Mz)(a,r=>r.locations)},49098:(D,_,e)=>{e.d(_,{O:()=>T});var t=e(88141),a=e(96354),i=e(24984),o=e(98216),r=e(73512);const p=r.J1`
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
`,m=r.J1`
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
`,C=r.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateLocationStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,g=r.J1`
    mutation RemoveLocation($removeLocationId: String!) {
        removeLocation(id: $removeLocationId) {
            ok
            message
        }
    }
`,R=r.J1`
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
`,E=r.J1`
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
`,n=r.J1`
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
`;var b=e(54438),P=e(59640);let T=(()=>{class B{constructor(f,s){this.apolloProvider=f,this.store=s,this._apollo=this.apolloProvider.use("BALANC")}createLocation(f){return this._apollo.mutate({mutation:p,variables:{createLocationInput:f},errorPolicy:"all"}).pipe((0,t.M)(({data:s})=>{s&&(this.store.dispatch((0,i.yJ)({location:s.createLocation.location})),this.store.dispatch((0,i.Og)({location:s.createLocation.location})))}))}getLocations(f=0,s=25,$="name",A="asc",c=""){return this._apollo.query({query:R,errorPolicy:"all",variables:{page:f,size:s,sort:$,order:A,search:c}}).pipe((0,t.M)(({data:v})=>{v&&(this.store.dispatch((0,o.Bp)({pagination:v.findAllLocations.pagination})),this.store.dispatch((0,i.xu)({locations:v.findAllLocations.locations})))}))}findActiveLocations(f="",s=25){return this._apollo.query({query:E,variables:{search:f,size:s},errorPolicy:"all"}).pipe((0,a.T)(({data:$})=>$?$.findActiveLocations:[]),(0,t.M)($=>{$&&this.store.dispatch((0,i.xu)({locations:$}))}))}getLocationById(f){return this._apollo.query({query:n,variables:{findLocationByIdId:f},errorPolicy:"all"}).pipe((0,t.M)(({data:s})=>{s&&this.store.dispatch((0,i.Og)({location:s.findLocationById.location}))}))}updateLocation(f){return this._apollo.mutate({mutation:m,variables:{updateLocationInput:f},errorPolicy:"all"}).pipe((0,t.M)(({data:s})=>{s&&(this.store.dispatch((0,i.Nt)({location:s.updateLocation.location})),this.store.dispatch((0,i.Og)({location:s.updateLocation.location})))}))}updateLocationStatus(f){return this._apollo.mutate({mutation:C,variables:{updateEntityStatusInput:f},errorPolicy:"all"}).pipe((0,t.M)(({data:s})=>{s&&this.store.dispatch((0,i.jr)({id:f.id,active:f.active}))}))}removeLocation(f){return this._apollo.mutate({mutation:g,variables:{removeLocationId:f},errorPolicy:"all"}).pipe((0,t.M)(({data:s})=>{s&&this.store.dispatch((0,i.q$)({id:f}))}))}static#t=this.\u0275fac=function(s){return new(s||B)(b.KVO(r.Ic),b.KVO(P.il))};static#e=this.\u0275prov=b.jDH({token:B,factory:B.\u0275fac,providedIn:"root"})}return B})()},51973:(D,_,e)=>{e.d(_,{a:()=>A});var t=e(54438),a=e(89417),i=e(75351),o=e(21413),r=e(56977),p=e(67398),m=e(46601),C=e(36596),g=e(94794),R=e(95416),E=e(88834),n=e(59042),b=e(32102);function P(c,v){1&c&&(t.j41(0,"h2",7),t.EFF(1," Agregar Marca "),t.k0s())}function T(c,v){1&c&&(t.j41(0,"h2",7),t.EFF(1," Editar Marca "),t.k0s())}function B(c,v){if(1&c&&(t.j41(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),t.EFF(6,"Nombre"),t.k0s(),t.j41(7,"span",14),t.EFF(8),t.k0s()()()()()()),2&c){const l=t.XpG();t.R7$(8),t.JRh(l.data.brand.name||"Sin nombre")}}function S(c,v){if(1&c&&(t.j41(0,"div",15)(1,"div",16)(2,"form",17)(3,"div",18)(4,"mat-form-field",19)(5,"mat-label"),t.EFF(6,"Nombre"),t.k0s(),t.nrm(7,"input",20),t.k0s()()()()()),2&c){const l=t.XpG();t.R7$(2),t.Y8G("formGroup",l.brandForm)("autocomplete","off"),t.R7$(5),t.Y8G("formControlName","name")("placeholder","Nombre del Marca")}}function f(c,v){if(1&c){const l=t.RV6();t.j41(0,"button",24),t.bIt("click",function(){t.eBV(l);const I=t.XpG(2);return t.Njj(I.updateBrand())}),t.EFF(1," Actualizar "),t.k0s()}if(2&c){const l=t.XpG(2);t.Y8G("color","primary")("disabled",l.brandForm.invalid)("matDialogClose","confirmed")}}function s(c,v){if(1&c){const l=t.RV6();t.j41(0,"button",24),t.bIt("click",function(){t.eBV(l);const I=t.XpG(2);return t.Njj(I.createBrand())}),t.EFF(1," Agregar "),t.k0s()}if(2&c){const l=t.XpG(2);t.Y8G("color","primary")("disabled",l.brandForm.invalid)("matDialogClose","confirmed")}}function $(c,v){if(1&c&&(t.j41(0,"div",21)(1,"button",22),t.EFF(2," Cancelar "),t.k0s(),t.DNE(3,f,2,3,"button",23)(4,s,2,3,"button",23),t.k0s()),2&c){const l=t.XpG();t.R7$(),t.Y8G("matDialogClose","cancelled"),t.R7$(2),t.vxM(3,"edit"===l.data.dialogMode?3:-1),t.R7$(),t.vxM(4,"add"===l.data.dialogMode?4:-1)}}let A=(()=>{class c{constructor(l){this.data=l,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this._unsubscribeAll=new o.B,this._brandsService=(0,t.WQX)(C.m),this._fuseConfirmationService=(0,t.WQX)(m.G),this._changeDetectorRef=(0,t.WQX)(t.gRc),this._formBuilder=(0,t.WQX)(a.ok),this._dialogRef=(0,t.WQX)(i.CP),this._snackBar=(0,t.WQX)(R.UG),this.dialogMode=l.dialogMode,this.brand=l.brand}ngOnInit(){this.brandForm=this._formBuilder.group({id:[null],name:[null,[a.k0.required,a.k0.minLength(3),a.k0.maxLength(255)]],description:[null,[a.k0.minLength(3),a.k0.maxLength(255)]],logo:[null]}),"edit"===this.dialogMode&&this.brandForm.patchValue(this.brand)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createBrand(){let l=this.brandForm.getRawValue();l=(0,p.A)(l,["id"]),this._fuseConfirmationService.open({title:"Crear Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(I=>{"confirmed"===I&&this._brandsService.createBrand(l).pipe((0,r.Q)(this._unsubscribeAll)).subscribe(({data:O})=>{this._snackBar.openFromComponent(g.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:O.createBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateBrand(){const l=this.brandForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(I=>{"confirmed"===I&&this._brandsService.updateBrand(l).pipe((0,r.Q)(this._unsubscribeAll)).subscribe(({data:O})=>{this._snackBar.openFromComponent(g.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:O.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()}),this._changeDetectorRef.markForCheck()})}fileChangeEvent(l){this.imageChangedEvent=l}imageCropped(l){this.croppedImage=l.base64}imageLoaded(l){}cropperReady(){}loadImageFailed(){}static#t=this.\u0275fac=function(M){return new(M||c)(t.rXU(i.Vh))};static#e=this.\u0275cmp=t.VBU({type:c,selectors:[["lists-brand-dialog"]],standalone:!0,features:[t.aNF],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"py-5"],[1,"w-full"],["matInput","","type","text","required","","maxlength","250",3,"formControlName","placeholder"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(M,I){1&M&&(t.j41(0,"div",0)(1,"div",1),t.DNE(2,P,2,0,"h2",2)(3,T,2,0,"h2",2),t.k0s(),t.j41(4,"div",3),t.DNE(5,B,9,1,"div",4)(6,S,8,4,"div",5),t.k0s(),t.DNE(7,$,5,3,"div",6),t.k0s()),2&M&&(t.R7$(2),t.vxM(2,"add"===I.data.dialogMode?2:-1),t.R7$(),t.vxM(3,"edit"===I.data.dialogMode?3:-1),t.R7$(2),t.vxM(5,"view"===I.data.dialogMode?5:-1),t.R7$(),t.vxM(6,6),t.R7$(),t.vxM(7,"view"!==I.data.dialogMode?7:-1))},dependencies:[E.Hl,E.$z,i.tx,b.RG,b.rl,b.nJ,n.fS,n.fg,a.X1,a.qT,a.me,a.BC,a.cb,a.YS,a.tU,a.j4,a.JD],encapsulation:2})}return c})()},57084:(D,_,e)=>{e.d(_,{m:()=>t});class t{}},86779:(D,_,e)=>{e.d(_,{I:()=>i,g:()=>o});var t=e(54438),a=e(30242);const i=(r,p)=>(0,t.WQX)(a.L).findAllPaymentGateways(),o=(r,p)=>(0,t.WQX)(a.L).findAllActivePaymentGateways()},70672:(D,_,e)=>{e.d(_,{Z:()=>t,h:()=>a});class t{}var a=function(i){return i.none="none",i.oauth="oauth",i.basic="basic",i}(a||{})},7561:(D,_,e)=>{e.d(_,{Q:()=>i});var t=e(54438),a=e(86952);const i=(o,r)=>(0,t.WQX)(a.v).getVouchers()},21781:(D,_,e)=>{e.d(_,{gQ:()=>o});var t=e(59640);const a=r=>r.vouchers,o=((0,t.Mz)(a,r=>r.voucher),(0,t.Mz)(a,r=>r.vouchers))},86952:(D,_,e)=>{e.d(_,{v:()=>f});var t=e(96697),a=e(25558),i=e(88141),o=e(98216),r=e(48392),p=e(21781),m=e(94794),C=e(73512);const g=C.J1`
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
`,R=C.J1`
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
`,E=C.J1`
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
`,n=C.J1`
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
`,b=C.J1`
    mutation RemoveVoucher($removeVoucherId: String!) {
        removeVoucher(id: $removeVoucherId) {
            ok
            message
        }
    }
`,P=C.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVoucherStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var T=e(54438),B=e(95416),S=e(59640);let f=(()=>{class s{constructor(A,c,v){this.apolloProvider=A,this._snackBar=c,this.store=v,this._apollo=this.apolloProvider.use("BALANC")}createVoucher(A){return this.store.select(p.gQ).pipe((0,t.s)(1),(0,a.n)(c=>this._apollo.mutate({mutation:E,variables:{createVoucherInput:A},errorPolicy:"all"}).pipe((0,i.M)(({errors:v,data:l})=>{if(v){let I="";v.forEach(O=>I+=`\n ${O.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:I,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const M=structuredClone(c);M.push(l.createVoucher.voucher),this.store.dispatch((0,r._6)({vouchers:M}))}))))}getVouchers(){return this._apollo.query({query:g,errorPolicy:"all"}).pipe((0,i.M)(({errors:A,data:c})=>{if(A){let v="";A.forEach(l=>v+=`\n ${l.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:v,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,r._6)({vouchers:c.findAllVouchers.vouchers})),this.store.dispatch((0,o.Bp)({pagination:c.findAllVouchers.pagination}))}))}getVoucherById(A){return this._apollo.query({query:R,variables:{findVoucherByIdId:A},errorPolicy:"all"}).pipe((0,i.M)(({errors:c,data:v})=>{if(c){let l="";c.forEach(M=>l+=`\n ${M.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,r.FN)({voucher:v.findOneVoucherById.voucher}))}))}updateVoucher(A){return this.store.select(p.gQ).pipe((0,t.s)(1),(0,a.n)(c=>this._apollo.mutate({mutation:n,variables:{updateVoucherInput:A},errorPolicy:"all"}).pipe((0,i.M)(({errors:v,data:l})=>{if(v){let O="";v.forEach(V=>O+=`\n ${V.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:O,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const M=structuredClone(c);M[c.findIndex(O=>O.id===A.id)]=l.updateVoucher.voucher,this.store.dispatch((0,r._6)({vouchers:M}))}))))}updateVoucherStatus(A){return this.store.select(p.gQ).pipe((0,t.s)(1),(0,a.n)(c=>this._apollo.mutate({mutation:P,variables:{updateEntityStatusInput:A},errorPolicy:"all"}).pipe((0,i.M)(({errors:v})=>{if(v){let I="";v.forEach(O=>I+=`\n ${O.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:I,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(c);l[c.findIndex(I=>I.id===A.id)].active=A.active,this.store.dispatch((0,r._6)({vouchers:l}))}))))}removeVoucher(A){return this.store.select(p.gQ).pipe((0,t.s)(1),(0,a.n)(c=>this._apollo.mutate({mutation:b,variables:{removeVoucherId:A},errorPolicy:"all"}).pipe((0,i.M)(({errors:v})=>{if(v){let I="";v.forEach(O=>I+=`\n ${O.message}.`),this._snackBar.openFromComponent(m.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:I,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(c),M=c.findIndex(I=>I.id===A);l.splice(M,1),this.store.dispatch((0,r._6)({vouchers:l}))}))))}static#t=this.\u0275fac=function(c){return new(c||s)(T.KVO(C.Ic),T.KVO(B.UG),T.KVO(S.il))};static#e=this.\u0275prov=T.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},72824:(D,_,e)=>{e.d(_,{g:()=>a});var t=e(54438);let a=(()=>{class i{transform(r){if(r)switch(r){case"quarterly":return"Trimestral";case"annually":return"Anual";default:return"Mensual"}return""}static#t=this.\u0275fac=function(p){return new(p||i)};static#e=this.\u0275pipe=t.EJ8({name:"subscriptionTitle",type:i,pure:!0,standalone:!0})}return i})()},34343:(D,_,e)=>{e.d(_,{Er:()=>r,PL:()=>o,sB:()=>i});var t=e(59640);const a=p=>p.subscriptions,i=(0,t.Mz)(a,p=>p.subscription),o=(0,t.Mz)(a,p=>p.subscriptions),r=(0,t.Mz)(a,p=>p.subscriptionCardsData)},10729:(D,_,e)=>{e.d(_,{k:()=>g});var t=e(21413),a=e(99213),i=e(31849),o=e(54438),r=e(51188),p=e(59640);function m(R,E){if(1&R){const n=o.RV6();o.j41(0,"fuse-card",18),o.bIt("click",function(){const T=o.eBV(n).$implicit,B=o.XpG(2);return o.Njj(B.navigate(T.link))}),o.j41(1,"div",19)(2,"div",20),o.EFF(3),o.k0s(),o.j41(4,"div",21),o.EFF(5),o.k0s()()()}if(2&R){const n=E.$implicit;o.R7$(3),o.JRh(n.title),o.R7$(2),o.JRh(n.subtitle)}}function C(R,E){if(1&R){const n=o.RV6();o.j41(0,"div",1)(1,"div",2)(2,"div",3)(3,"div")(4,"div",4)(5,"div",5)(6,"a",6),o.bIt("click",function(){o.eBV(n);const P=o.XpG();return o.Njj(P.navigate("/dashboard"))}),o.EFF(7,"Inicio"),o.k0s()(),o.j41(8,"div",5),o.nrm(9,"mat-icon",7),o.j41(10,"a",8),o.EFF(11),o.k0s()()(),o.j41(12,"div",9)(13,"a",10),o.nrm(14,"mat-icon",7),o.j41(15,"span",11),o.EFF(16,"Regresar"),o.k0s()()()(),o.j41(17,"div",12)(18,"div",13),o.EFF(19),o.k0s()()()(),o.j41(20,"div",14)(21,"div",15)(22,"div",16)(23,"div",17),o.Z7z(24,m,6,2,"fuse-card",22,o.fX1),o.k0s()()()()()}if(2&R){const n=o.XpG();o.R7$(9),o.Y8G("svgIcon","mat_solid:chevron_right"),o.R7$(2),o.JRh(n.fuseNavigation.title),o.R7$(3),o.Y8G("svgIcon","mat_solid:chevron_left"),o.R7$(5),o.SpI(" ",n.fuseNavigation.title," "),o.R7$(5),o.Dyx(n.fuseNavigation.children)}}let g=(()=>{class R{constructor(n,b,P){this._changeDetectorRef=n,this._router=b,this.store=P,this._unsubscribeAll=new t.B}ngOnInit(){}navigate(n){this._router.navigateByUrl(n)}static#t=this.\u0275fac=function(b){return new(b||R)(o.rXU(o.gRc),o.rXU(r.Ix),o.rXU(p.il))};static#e=this.\u0275cmp=o.VBU({type:R,selectors:[["ath-content-menu"]],standalone:!0,features:[o.aNF],decls:1,vars:1,consts:[["class","absolute inset-0 flex flex-col min-w-0 overflow-y-auto","cdkScrollable",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","py-3","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","cursor-pointer","text-primary-500","hover:underline",3,"click"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],["routerLink","/dashboard",1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"flex-auto","p-6","pt-0","sm:pt-0","sm:p-10"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full"],[1,"grid","grid-flow-row","grid-cols-1","mt-8","sm:grid-cols-2","lg:grid-cols-4","gap-y-12","sm:gap-x-4"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md",3,"click"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight"],[1,"text-md","text-secondary"],["class","flex items-center justify-between w-full p-6 cursor-pointer max-w-80 filter-info hover:shadow-md"]],template:function(b,P){1&b&&o.DNE(0,C,26,4,"div",0),2&b&&o.vxM(0,P.fuseNavigation?0:-1)},dependencies:[a.m_,a.An,i.$],encapsulation:2,changeDetection:0})}return R})()},46812:(D,_,e)=>{e.d(_,{H_:()=>o,dX:()=>t});var t=function(n){return n.pendiente="pendiente",n.parcial="parcial",n.pagada="pagada",n.cancelado="cancelado",n.fallido="fallido",n.expirado="expirado",n.devuelto="devuelto",n.dPendiente="devoluci\xf3n pendiente",n.dFallida="devoluci\xf3n fallida",n}(t||{}),o=function(n){return n.total="total",n.partial="partial",n}(o||{})},21607:(D,_,e)=>{e.d(_,{At:()=>o,To:()=>p,ih:()=>r,tz:()=>i});class i{constructor(C,g,R,E,n,b){this.productId=C,this.name=g,this.uom=R,this.price=E,this.quantity=n,this.depotId=b}}class o{constructor(C,g,R){this.assistanceId=C,this.price=g,this.quantity=R}}var r=function(m){return m.nueva="nueva",m.recibida="recibida",m.cobrada="cobrada",m.rechazada="rechazada",m.cancelada="cancelada",m.facturada="facturada",m.entregada="entregada",m}(r||{});class p{constructor(C,g,R,E){this.nueva=C,this.recibida=g,this.rechazada=R,this.cancelada=E}}},41791:(D,_,e)=>{e.d(_,{Nh:()=>o,oy:()=>i});var t=e(59640);const a=m=>m.gModules,i=(0,t.Mz)(a,m=>m.module),o=(0,t.Mz)(a,m=>m.modules);(0,t.Mz)(a,m=>({})),(0,t.Mz)(a,m=>({}))},71411:(D,_,e)=>{e.d(_,{Q:()=>i});var t=e(54438),a=e(25910);let i=(()=>{class o{constructor(p){this._ratesService=p}resolve(p,m){return this._ratesService.getRates()}static#t=this.\u0275fac=function(m){return new(m||o)(t.KVO(a.f))};static#e=this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},72831:(D,_,e)=>{e.d(_,{Ad:()=>p,NH:()=>m,ed:()=>C});var t=e(18810),a=e(99437),i=e(54438),o=e(44312),r=e(51188);let p=(()=>{class g{constructor(E,n){this._rolesService=E,this._router=n}resolve(E,n){return this._rolesService.findAllRoles().pipe((0,a.W)(b=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(n){return new(n||g)(i.KVO(o.W),i.KVO(r.Ix))};static#e=this.\u0275prov=i.jDH({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})(),m=(()=>{class g{constructor(E,n){this._rolesService=E,this._router=n}resolve(E,n){const b=E.params.roleId;return"new"===b?null:this._rolesService.findRoleById(b).pipe((0,a.W)(P=>{const T=n.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(T),(0,t.$)(P)}))}static#t=this.\u0275fac=function(n){return new(n||g)(i.KVO(o.W),i.KVO(r.Ix))};static#e=this.\u0275prov=i.jDH({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})(),C=(()=>{class g{constructor(E,n){this._rolesService=E,this._router=n}resolve(E,n){return this._rolesService.findAllActiveRoles().pipe((0,a.W)(b=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(n){return new(n||g)(i.KVO(o.W),i.KVO(r.Ix))};static#e=this.\u0275prov=i.jDH({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},15887:(D,_,e)=>{e.d(_,{X7:()=>i,y3:()=>o});var t=e(59640);const a=r=>r.roles,i=(0,t.Mz)(a,r=>r.role),o=(0,t.Mz)(a,r=>r.roles)},44312:(D,_,e)=>{e.d(_,{W:()=>T});var t=e(54438),a=e(96354),i=e(88141),o=e(73512),r=e(59640),p=e(49238),m=e(98216);const C=o.J1`
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
`,g=o.J1`
    query FindAllActiveRoles {
        findAllActiveRoles {
            id
            name
            description
            isCoreRole
        }
    }
`,R=o.J1`
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
`,E=o.J1`
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
`,n=o.J1`
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
`,b=o.J1`
    mutation UpdateRoleStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRoleStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,P=o.J1`
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
`;let T=(()=>{class B{constructor(){this.apolloProvider=(0,t.WQX)(o.Ic),this.store=(0,t.WQX)(r.il),this._apollo=this.apolloProvider.use("BALANC")}createRole(f){return this._apollo.mutate({mutation:E,variables:{createRoleInput:f},errorPolicy:"all"}).pipe((0,a.T)(({data:s})=>s?s.createRole:null),(0,i.M)(s=>{s&&this.store.dispatch((0,p.rd)({role:s.role}))}))}findAllRoles(f=0,s=500,$="createdAt",A="asc",c=""){return this._apollo.query({query:C,errorPolicy:"all",variables:{page:f,size:s,sort:$,order:A,search:c}}).pipe((0,i.M)(({data:v})=>{v&&(this.store.dispatch((0,m.Bp)({pagination:v.paginatedRoles.pagination})),this.store.dispatch((0,p.S0)({roles:v.paginatedRoles.items})))}))}findAllActiveRoles(){return this._apollo.query({query:g,errorPolicy:"all"}).pipe((0,a.T)(({data:f})=>f?f.findAllActiveRoles:null),(0,i.M)(f=>{f&&this.store.dispatch((0,p.S0)({roles:f}))}))}findRoleById(f){return this._apollo.query({query:R,variables:{roleId:f},errorPolicy:"all"}).pipe((0,a.T)(({data:s})=>s?s.findRoleById:null),(0,i.M)(s=>{s&&this.store.dispatch((0,p.L4)({role:s.role}))}))}updateRole(f){return this._apollo.mutate({mutation:n,variables:{updateRoleInput:f},errorPolicy:"all"}).pipe((0,a.T)(({data:s})=>s?s.updateRole:null),(0,i.M)(s=>{s&&this.store.dispatch((0,p.zD)({role:s.role}))}))}updateRoleStatus(f){return this._apollo.mutate({mutation:b,variables:{updateEntityStatusInput:f},errorPolicy:"all"}).pipe((0,a.T)(({data:s})=>s?s.updateRoleStatus:null),(0,i.M)(s=>{s&&this.store.dispatch((0,p.yp)(f))}))}removeRole(f,s=0,$=500,A="name",c="desc",v=null){return this._apollo.mutate({mutation:P,variables:{removeRoleById:f,page:s,size:$,sort:A,order:c,search:v},errorPolicy:"all"}).pipe((0,i.M)(({data:l})=>{l&&(this.store.dispatch((0,m.Bp)({pagination:l.paginatedRemoveRole.pagination})),this.store.dispatch((0,p.S0)({roles:l.paginatedRemoveRole.items})))}))}static#t=this.\u0275fac=function(s){return new(s||B)};static#e=this.\u0275prov=t.jDH({token:B,factory:B.\u0275fac,providedIn:"root"})}return B})()},52002:(D,_,e)=>{e.d(_,{Yt:()=>t});class t{constructor(){this.tags=[]}}},89654:(D,_,e)=>{e.d(_,{n:()=>F});var t=e(54438),a=e(89417),i=e(21413),o=e(56977),r=e(99172),p=e(96354),m=e(70152),C=e(32102),g=e(59042),R=e(88834),E=e(99213),n=e(60850),b=e(82798),P=e(14823),T=e(60177),B=e(96817),S=e(73512);let f=(()=>{class u{constructor(d){this.apolloProvider=d,this._apollo=this.apolloProvider.use("BALANC")}getCardType(d){return this._apollo.query({query:B.LU,variables:{cardNumber:d},errorPolicy:"all"})}static#t=this.\u0275fac=function(L){return new(L||u)(t.KVO(S.Ic))};static#e=this.\u0275prov=t.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})();var s=e(86600);const $=["bankAccountNgForm"];function A(u,x){1&u&&(t.j41(0,"mat-label"),t.EFF(1,"N\xfamero de Cuenta"),t.k0s())}function c(u,x){if(1&u&&t.nrm(0,"img",10),2&u){const d=t.XpG();t.Y8G("src",d.cardImage,t.B4B)}}function v(u,x){1&u&&(t.j41(0,"mat-error"),t.EFF(1," El n\xfamero de cuenta es obligatorio "),t.k0s())}function l(u,x){1&u&&(t.j41(0,"mat-label"),t.EFF(1,"Banco"),t.k0s())}function M(u,x){if(1&u&&(t.j41(0,"mat-option",11),t.EFF(1),t.k0s()),2&u){const d=x.$implicit;t.Y8G("value",d),t.R7$(),t.JRh(d)}}function I(u,x){1&u&&(t.j41(0,"mat-label"),t.EFF(1,"Moneda"),t.k0s())}function O(u,x){if(1&u&&(t.j41(0,"mat-option",11),t.EFF(1),t.k0s()),2&u){const d=x.$implicit;t.Y8G("value",d.iso),t.R7$(),t.SpI(" ",d.iso," ")}}function V(u,x){1&u&&(t.j41(0,"mat-label"),t.EFF(1,"Beneficiario"),t.k0s())}function y(u,x){1&u&&(t.j41(0,"mat-error"),t.EFF(1," El beneficiario no presenta un formato v\xe1lido "),t.k0s())}function U(u,x){1&u&&(t.j41(0,"mat-error"),t.EFF(1," El beneficiario es obligatorio "),t.k0s())}function h(u,x){if(1&u){const d=t.RV6();t.j41(0,"div",12)(1,"button",13),t.bIt("click",function(){t.eBV(d);const k=t.XpG();return t.Njj(k.removeBankAccount(k.index))}),t.nrm(2,"mat-icon",14),t.k0s()()}2&u&&(t.R7$(2),t.Y8G("svgIcon","mat_solid:delete"))}let F=(()=>{class u{constructor(d,L){this._changeDetectorRef=d,this._cardTypesService=L,this.currencies=[],this.remove=new t.bkB,this.cardImage=null,this.cubanBanks=["Metropolitano (BMP)","Popular de Ahorro (BPA)","Cr\xe9dito y Comercio (BANDEC)"],this._unsubscribeAll=new i.B}ngOnInit(){this.bankAccountForm.get("cardType").value&&this.fillFormData(this.bankAccountForm.get("cardType").value),this.filteredBanks=this.bankAccountForm.get("bank").valueChanges.pipe((0,o.Q)(this._unsubscribeAll),(0,r.Z)(""),(0,p.T)(d=>d?this.cubanBanks.filter(L=>L.toLowerCase().includes(d.toLowerCase())):[])),this.bankAccountForm.get("no").valueChanges.pipe((0,m.B)(600),(0,o.Q)(this._unsubscribeAll)).subscribe(d=>{d.length>5&&d.length<11&&this._cardTypesService.getCardType(d).subscribe(({})=>{}),d||(this.bankAccountForm.get("bank").enable(),this.bankAccountForm.get("currency").enable(),this.bankAccountForm.get("cardType").setValue(""),this.cardImage=null),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}removeBankAccount(d){this.remove.next(d)}clearForm(){this.bankAccountNgForm.resetForm()}fillFormData(d){d?(this.bankAccountForm.get("bank").setValue(d.name),this.bankAccountForm.get("currency").setValue(d.currency),this.bankAccountForm.get("bank").disable(),this.bankAccountForm.get("currency").disable(),("BMPU"===d.bank||"BMPUW"===d.bank)&&(this.cardImage="assets/images/cards/banmet.webp"),("BPAU"===d.bank||"BPAUW"===d.bank)&&(this.cardImage="assets/images/cards/bpa.webp"),("BANU"===d.bank||"BANW"===d.bank)&&(this.cardImage="assets/images/cards/bandec.webp"),"AIS"===d.name&&(this.cardImage="assets/images/cards/ais.webp"),"MN"===d.currency&&this.bankAccountForm.get("currency").setValue("CUP"),"USD"===d.currency&&this.bankAccountForm.get("currency").setValue("USD"),this.bankAccountForm.get("cardType").setValue(d._id)):(this.bankAccountForm.get("bank").enable(),this.bankAccountForm.get("currency").enable(),this.bankAccountForm.get("cardType").setValue(""),this.cardImage=null)}static#t=this.\u0275fac=function(L){return new(L||u)(t.rXU(t.gRc),t.rXU(f))};static#e=this.\u0275cmp=t.VBU({type:u,selectors:[["bank-account"]],viewQuery:function(L,k){if(1&L&&t.GBs($,5),2&L){let j;t.mGM(j=t.lsd())&&(k.bankAccountNgForm=j.first)}},inputs:{currencies:"currencies",bankAccountForm:"bankAccountForm",first:"first",last:"last",index:"index"},outputs:{remove:"remove"},standalone:!0,features:[t.aNF],decls:29,vars:33,consts:[[1,"grid","grid-cols-1","gap-3","md:grid-cols-2",3,"formGroup"],[1,"flex-auto","mat-fuse-dense"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","",3,"type","minlength","maxlength","formControlName","placeholder","spellcheck"],["class","w-12 h-8","matSuffix","",3,"src"],["maxlength","255","matInput","",3,"type","formControlName","matAutocomplete","placeholder","spellcheck"],["auto","matAutocomplete"],["required","",3,"formControlName","placeholder"],["maxlength","255","matInput","",3,"type","formControlName","placeholder","spellcheck"],["class","flex items-center w-10 pl-2"],["matSuffix","",1,"w-12","h-8",3,"src"],[3,"value"],[1,"flex","items-center","w-10","pl-2"],["mat-icon-button","","matTooltip","Eliminar cuenta",1,"w-8","h-8","min-h-8",3,"click"],[1,"icon-size-5",3,"svgIcon"]],template:function(L,k){if(1&L&&(t.j41(0,"form",0)(1,"mat-form-field",1),t.DNE(2,A,2,0,"mat-label"),t.nrm(3,"mat-icon",2)(4,"input",3),t.DNE(5,c,1,1,"img",4)(6,v,2,0,"mat-error"),t.k0s(),t.j41(7,"mat-form-field",1),t.DNE(8,l,2,0,"mat-label"),t.nrm(9,"mat-icon",2)(10,"input",5),t.j41(11,"mat-autocomplete",null,6),t.Z7z(13,M,2,2,"mat-option",11,t.fX1),t.nI1(15,"async"),t.k0s()(),t.j41(16,"mat-form-field",1),t.DNE(17,I,2,0,"mat-label"),t.nrm(18,"mat-icon",2),t.j41(19,"mat-select",7),t.Z7z(20,O,2,2,"mat-option",11,t.fX1),t.k0s()(),t.j41(22,"mat-form-field",1),t.DNE(23,V,2,0,"mat-label"),t.nrm(24,"mat-icon",2)(25,"input",8),t.DNE(26,y,2,0,"mat-error")(27,U,2,0,"mat-error"),t.k0s(),t.DNE(28,h,3,1,"div",9),t.k0s()),2&L){const j=t.sdS(12);t.Y8G("formGroup",k.bankAccountForm),t.R7$(2),t.vxM(2,k.first?2:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:credit_card"),t.R7$(),t.Y8G("type","text")("minlength",16)("maxlength",24)("formControlName","no")("placeholder","Ejemplo: 1234567890123456")("spellcheck",!1),t.R7$(),t.vxM(5,k.cardImage?5:-1),t.R7$(),t.vxM(6,k.bankAccountForm.get("no").hasError("required")?6:-1),t.R7$(2),t.vxM(8,k.first?8:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:account_balance"),t.R7$(),t.Y8G("type","text")("formControlName","bank")("matAutocomplete",j)("placeholder","Ejemplo: Banco Financiero")("spellcheck",!1),t.R7$(3),t.Dyx(t.bMT(15,31,k.filteredBanks)),t.R7$(4),t.vxM(17,k.first?17:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:monetization_on"),t.R7$(),t.Y8G("formControlName","currency")("placeholder","Ejemplo: USD"),t.R7$(),t.Dyx(k.currencies),t.R7$(3),t.vxM(23,k.first?23:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:business"),t.R7$(),t.Y8G("type","text")("formControlName","beneficiary")("placeholder","Ejemplo: Empresa SRL")("spellcheck",!1),t.R7$(),t.vxM(26,k.bankAccountForm.get("beneficiary").hasError("pattern")?26:-1),t.R7$(),t.vxM(27,k.bankAccountForm.get("beneficiary").hasError("required")?27:-1),t.R7$(),t.vxM(28,k.first&&k.last?-1:28)}},dependencies:[T.Jj,n.jL,n.$3,s.wT,n.pN,R.Hl,R.iY,C.RG,C.rl,C.nJ,C.TL,C.JW,C.yw,E.m_,E.An,g.fS,g.fg,b.Ve,b.VO,P.uc,P.oV,a.X1,a.qT,a.me,a.BC,a.cb,a.YS,a.xh,a.tU,a.j4,a.JD],encapsulation:2,changeDetection:0})}return u})()},78357:(D,_,e)=>{e.d(_,{i:()=>V});var t=e(54438),a=e(89417),i=e(59115),o=e(99213),r=e(88834),p=e(21413),m=e(56977),C=e(53328),g=e(82765),R=e(60177),E=e(25084),n=e(32102),b=e(59042),P=e(82798),T=e(60850),B=e(86600);const S=["bt"];function f(y,U){if(1&y&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"uppercase"),t.k0s()),2&y){const h=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,h.get("name").value))}}function s(y,U){if(1&y&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()),2&y){const h=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,h.get("name").value))}}function $(y,U){if(1&y&&(t.j41(0,"div",14)(1,"mat-checkbox",15),t.DNE(2,f,3,3,"span")(3,s,3,3,"span"),t.k0s()()),2&y){const h=U.$implicit,F=t.XpG(2);t.R7$(),t.Y8G("formControl",h.get("checked")),t.R7$(),t.vxM(2,F.useUpperCase?2:-1),t.R7$(),t.vxM(3,F.useUpperCase?-1:3)}}function A(y,U){if(1&y&&(t.j41(0,"div",13),t.Z7z(1,$,4,3,"div",16,t.fX1),t.k0s()),2&y){const h=t.XpG();t.R7$(),t.Dyx(h.formArray.controls)}}function c(y,U){if(1&y&&(t.j41(0,"mat-form-field",17),t.nrm(1,"input",18)(2,"mat-datepicker-toggle",19)(3,"mat-datepicker",null,20),t.k0s()),2&y){const h=t.sdS(4),F=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",h)("formControl",F.dateControl)("max",F.maxDate),t.R7$(),t.Y8G("for",h)}}function v(y,U){if(1&y){const h=t.RV6();t.j41(0,"mat-option",26),t.bIt("click",function(){const x=t.eBV(h).$implicit,d=t.XpG(2);return t.Njj(d.selectEntity(x))}),t.EFF(1),t.k0s()}if(2&y){const h=U.$implicit;t.Y8G("value",h.name),t.R7$(),t.SpI(" ",h.name," ")}}function l(y,U){if(1&y&&(t.j41(0,"mat-form-field",21),t.nrm(1,"mat-icon",22)(2,"input",23),t.j41(3,"mat-autocomplete",24,25),t.Z7z(5,v,2,2,"mat-option",27,t.fX1),t.nI1(7,"async"),t.k0s()()),2&y){const h=t.sdS(4),F=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",F.searchEntityControl)("matAutocomplete",h)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,F.entitiesFiltered))}}function M(y,U){if(1&y&&(t.j41(0,"mat-form-field",17),t.nrm(1,"input",18)(2,"mat-datepicker-toggle",19)(3,"mat-datepicker",null,20),t.k0s()),2&y){const h=t.sdS(4),F=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",h)("formControl",F.dateControl)("max",F.maxDate),t.R7$(),t.Y8G("for",h)}}function I(y,U){if(1&y){const h=t.RV6();t.j41(0,"mat-option",26),t.bIt("click",function(){const x=t.eBV(h).$implicit,d=t.XpG(2);return t.Njj(d.selectEntity(x))}),t.EFF(1),t.k0s()}if(2&y){const h=U.$implicit;t.Y8G("value",h.name),t.R7$(),t.SpI(" ",h.name," ")}}function O(y,U){if(1&y&&(t.j41(0,"mat-form-field",21),t.nrm(1,"mat-icon",22)(2,"input",23),t.j41(3,"mat-autocomplete",24,25),t.Z7z(5,I,2,2,"mat-option",27,t.fX1),t.nI1(7,"async"),t.k0s()()),2&y){const h=t.sdS(4),F=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",F.searchEntityControl)("matAutocomplete",h)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,F.entitiesFiltered))}}let V=(()=>{class y{constructor(){this.useUpperCase=!1,this.dataChange=new t.bkB,this.entityPropertyName="name",this.data=[],this.maxDate=new Date,this.dateControl=new a.MJ({disabled:!0}),this.formArray=new a.Yp([]),this._unsubscribeAll=new p.B,this._formBuilder=(0,t.WQX)(a.ok),this._changeDetectorRef=(0,t.WQX)(t.gRc)}get hasFilter(){return!C.H.IsNullOrEmpty(this.selectedFilter)}ngOnInit(){this.initializeFormArray(),this.dateControl.valueChanges.pipe((0,m.Q)(this._unsubscribeAll)).subscribe(h=>{this.dataChange.next(h),this.selectedFilter=h,this.menu.closeMenu()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}clearFilter(){switch(this.filterType){case"filterEntity":this.searchEntityControl.setValue(""),this.dataChange.next(null),this.selectedFilter=null;break;case"date":this.dateControl.setValue(null);break;case"multiSelect":case"multiSelectEntity":this.clearFormArray()}this.menu.closeMenu()}closeMenu(){this.menu.closeMenu()}selectEntity(h){this.dataChange.next(h),this.selectedFilter=h,this.menu.closeMenu()}initializeFormArray(){switch(this.filterType){case"multiSelect":this.formArray=this._formBuilder.array(this.data.map(h=>this._formBuilder.group({name:[h],checked:[!1]})));break;case"multiSelectEntity":this.formArray=this._formBuilder.array(this.data.map(h=>this._formBuilder.group({id:[h.id],name:[h[this.entityPropertyName]],checked:[!1]})))}this._changeDetectorRef.markForCheck(),this.formArraySubscription=this.formArray.valueChanges.pipe((0,m.Q)(this._unsubscribeAll)).subscribe(h=>{let F=[];switch(this.filterType){case"multiSelect":F=h.filter(u=>u.checked).map(u=>u.name);break;case"multiSelectEntity":for(const u of h.filter(x=>x.checked)){const x=this.data.find(d=>d.id===u.id);F.push(x)}}this.dataChange.next(F),this.selectedFilter=F})}clearFormArray(){this.formArraySubscription.unsubscribe(),this.selectedFilter=[],this.dataChange.next([]),this.initializeFormArray()}static#t=this.\u0275fac=function(F){return new(F||y)};static#e=this.\u0275cmp=t.VBU({type:y,selectors:[["table-filter"]],viewQuery:function(F,u){if(1&F&&t.GBs(S,7),2&F){let x;t.mGM(x=t.lsd())&&(u.menu=x.first)}},inputs:{filterType:"filterType",useUpperCase:"useUpperCase",entityPropertyName:"entityPropertyName",data:"data",entitiesFiltered:"entitiesFiltered",searchEntityControl:"searchEntityControl"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.aNF],decls:19,vars:6,consts:[["mat-icon-button","","matTooltip","",1,"w-6","h-6","min-h-6","min-w-6",3,"color","matMenuTriggerFor"],["bt","matMenuTrigger"],[1,"icon-size-4",3,"svgIcon"],["listStatusMenu","matMenu"],[3,"click"],["class","w-full px-4 py-4"],["class","w-full px-4 pt-4 pb-6 fuse-mat-dense fuse-mat-rounded","appearance","fill",3,"subscriptSizing"],["class","w-full px-4 pt-4 pb-6 fuse-mat-dense mat-fuse-de fuse-mat-rounded max-w-64 min-w-64","appearance","fill",3,"subscriptSizing"],[1,"flex","justify-end","w-full","p-2","pb-0","border-t-2"],["mat-flat-button","",3,"click"],["mat-button","","color","warn",3,"click"],["dateEntity",""],["SearchEntity",""],[1,"w-full","px-4","py-4"],[1,""],["color","primary",3,"formControl"],["class",""],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","placeholder","Fecha",3,"matDatepicker","formControl","max"],["matIconSuffix","",3,"for"],["entityDate",""],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","mat-fuse-de","fuse-mat-rounded","max-w-64","min-w-64",3,"subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],["entitiesAutocomplete","matAutocomplete"],[3,"value","click"],[3,"value"]],template:function(F,u){if(1&F&&(t.j41(0,"div")(1,"button",0,1),t.nrm(3,"mat-icon",2),t.k0s(),t.j41(4,"mat-menu",null,3)(6,"div",4),t.bIt("click",function(d){return d.stopPropagation()}),t.DNE(7,A,3,0,"div",5)(8,c,5,5,"mat-form-field",6)(9,l,8,7,"mat-form-field",7),t.j41(10,"div",8)(11,"button",9),t.bIt("click",function(){return u.closeMenu()}),t.EFF(12,"Cerrar"),t.k0s(),t.j41(13,"button",10),t.bIt("click",function(){return u.clearFilter()}),t.EFF(14,"Limpiar"),t.k0s()()()()(),t.DNE(15,M,5,5,"ng-template",null,11,t.C5r)(17,O,8,7,"ng-template",null,12,t.C5r)),2&F){const x=t.sdS(5);t.R7$(),t.Y8G("color",u.hasFilter?"primary":"default")("matMenuTriggerFor",x),t.R7$(2),t.Y8G("svgIcon","mat_solid:filter_list"),t.R7$(4),t.vxM(7,"multiSelect"===u.filterType||"multiSelectEntity"===u.filterType?7:-1),t.R7$(),t.vxM(8,"date"===u.filterType?8:-1),t.R7$(),t.vxM(9,"filterEntity"===u.filterType?9:-1)}},dependencies:[R.Jj,r.Hl,r.$z,r.iY,o.m_,o.An,i.Cn,i.kk,i.Cp,g.g7,g.So,R.Pc,R.PV,E.X6,E.Vh,E.bZ,E.bU,n.RG,n.rl,n.JW,n.yw,b.fS,b.fg,a.X1,a.me,a.BC,a.l_,T.jL,T.$3,B.wT,T.pN,P.Ve],encapsulation:2,changeDetection:0})}return y})()}}]);