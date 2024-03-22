"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8592],{23605:(P,m,o)=>{o.d(m,{D1:()=>u,Nc:()=>p,r7:()=>d});var t=o(26306),n=o(58504),i=o(19212),e=o(43987),r=o(64190);let u=(()=>{class _{constructor(l,a){this._locationsService=l,this._router=a}resolve(l,a){const y=l.paramMap.get("locationId");if("new"!==y)return this._locationsService.getLocationById(y).pipe((0,t.K)(L=>{console.error(L);const M=a.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(M),(0,n._)(L)}))}static#t=this.\u0275fac=function(a){return new(a||_)(i.LFG(e._),i.LFG(r.F0))};static#e=this.\u0275prov=i.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})(),d=(()=>{class _{constructor(l){this._locationsService=l}resolve(l,a){return this._locationsService.getLocations()}static#t=this.\u0275fac=function(a){return new(a||_)(i.LFG(e._))};static#e=this.\u0275prov=i.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})(),p=(()=>{class _{constructor(l){this._locationsService=l}resolve(l,a){return this._locationsService.findActiveLocations()}static#t=this.\u0275fac=function(a){return new(a||_)(i.LFG(e._))};static#e=this.\u0275prov=i.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},84384:(P,m,o)=>{o.d(m,{FD:()=>i,Yu:()=>e});var t=o(84221);const n=r=>r.locations,i=(0,t.P1)(n,r=>r.location),e=(0,t.P1)(n,r=>r.locations)},43987:(P,m,o)=>{o.d(m,{_:()=>M});var t=o(99397),n=o(37398),i=o(26045),e=o(97214),r=o(50967);const u=r.Ps`
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
`,d=r.Ps`
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
`,p=r.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateLocationStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,_=r.Ps`
    mutation RemoveLocation($removeLocationId: String!) {
        removeLocation(id: $removeLocationId) {
            ok
            message
        }
    }
`,f=r.Ps`
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
`,l=r.Ps`
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
`,a=r.Ps`
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
`;var y=o(19212),L=o(84221);let M=(()=>{class b{constructor(E,v){this.apolloProvider=E,this.store=v,this._apollo=this.apolloProvider.use("BALANC")}createLocation(E){return this._apollo.mutate({mutation:u,variables:{createLocationInput:E},errorPolicy:"all"}).pipe((0,t.b)(({data:v})=>{v&&(this.store.dispatch((0,i.ob)({location:v.createLocation.location})),this.store.dispatch((0,i.l6)({location:v.createLocation.location})))}))}getLocations(E=0,v=25,O="name",x="asc",c=""){return this._apollo.query({query:f,errorPolicy:"all",variables:{page:E,size:v,sort:O,order:x,search:c}}).pipe((0,t.b)(({data:g})=>{g&&(this.store.dispatch((0,e.Jr)({pagination:g.findAllLocations.pagination})),this.store.dispatch((0,i.vB)({locations:g.findAllLocations.locations})))}))}findActiveLocations(E="",v=25){return this._apollo.query({query:l,variables:{search:E,size:v},errorPolicy:"all"}).pipe((0,n.U)(({data:O})=>O?O.findActiveLocations:[]),(0,t.b)(O=>{O&&this.store.dispatch((0,i.vB)({locations:O}))}))}getLocationById(E){return this._apollo.query({query:a,variables:{findLocationByIdId:E},errorPolicy:"all"}).pipe((0,t.b)(({data:v})=>{v&&this.store.dispatch((0,i.l6)({location:v.findLocationById.location}))}))}updateLocation(E){return this._apollo.mutate({mutation:d,variables:{updateLocationInput:E},errorPolicy:"all"}).pipe((0,t.b)(({data:v})=>{v&&(this.store.dispatch((0,i.YF)({location:v.updateLocation.location})),this.store.dispatch((0,i.l6)({location:v.updateLocation.location})))}))}updateLocationStatus(E){return this._apollo.mutate({mutation:p,variables:{updateEntityStatusInput:E},errorPolicy:"all"}).pipe((0,t.b)(({data:v})=>{v&&this.store.dispatch((0,i.TC)({id:E.id,active:E.active}))}))}removeLocation(E){return this._apollo.mutate({mutation:_,variables:{removeLocationId:E},errorPolicy:"all"}).pipe((0,t.b)(({data:v})=>{v&&this.store.dispatch((0,i.Mv)({id:E}))}))}static#t=this.\u0275fac=function(v){return new(v||b)(y.LFG(r._M),y.LFG(L.yh))};static#e=this.\u0275prov=y.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"})}return b})()},9573:(P,m,o)=>{o.d(m,{C:()=>x});var t=o(19212),n=o(56223),i=o(17700),e=o(78645),r=o(59773),u=o(55497),d=o(56278),p=o(47641),_=o(42090),f=o(32296),l=o(24516),a=o(64170),y=o(22939);function L(c,g){1&c&&(t.TgZ(0,"h2",7),t._uU(1," Agregar Marca "),t.qZA())}function M(c,g){1&c&&(t.TgZ(0,"h2",7),t._uU(1," Editar Marca "),t.qZA())}function b(c,g){if(1&c&&(t.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"span",14),t._uU(8),t.qZA()()()()()()),2&c){const s=t.oxw();t.xp6(8),t.Oqu(s.data.brand.name||"Sin nombre")}}function A(c,g){if(1&c&&(t.TgZ(0,"div",15)(1,"div",16)(2,"form",17)(3,"div",18)(4,"mat-form-field",19)(5,"mat-label"),t._uU(6,"Nombre"),t.qZA(),t._UZ(7,"input",20),t.qZA()()()()()),2&c){const s=t.oxw();t.xp6(2),t.Q6J("formGroup",s.brandForm)("autocomplete","off"),t.xp6(5),t.Q6J("formControlName","name")("placeholder","Nombre del Marca")}}function E(c,g){if(1&c){const s=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(s);const h=t.oxw(2);return t.KtG(h.updateBrand())}),t._uU(1," Actualizar "),t.qZA()}if(2&c){const s=t.oxw(2);t.Q6J("color","primary")("disabled",s.brandForm.invalid)("matDialogClose","confirmed")}}function v(c,g){if(1&c){const s=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(s);const h=t.oxw(2);return t.KtG(h.createBrand())}),t._uU(1," Agregar "),t.qZA()}if(2&c){const s=t.oxw(2);t.Q6J("color","primary")("disabled",s.brandForm.invalid)("matDialogClose","confirmed")}}function O(c,g){if(1&c&&(t.TgZ(0,"div",21)(1,"button",22),t._uU(2," Cancelar "),t.qZA(),t.YNc(3,E,2,3,"button",23)(4,v,2,3,"button",23),t.qZA()),2&c){const s=t.oxw();t.xp6(),t.Q6J("matDialogClose","cancelled"),t.xp6(2),t.um2(3,"edit"===s.data.dialogMode?3:-1),t.xp6(),t.um2(4,"add"===s.data.dialogMode?4:-1)}}let x=(()=>{class c{constructor(s,C,h,I,D){this.data=s,this._changeDetectorRef=C,this._formBuilder=h,this._dialogRef=I,this._snackBar=D,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this._unsubscribeAll=new e.x,this._brandsService=(0,t.f3M)(p.G),this._fuseConfirmationService=(0,t.f3M)(d.R),this.dialogMode=s.dialogMode,this.brand=s.brand}ngOnInit(){this.brandForm=this._formBuilder.group({id:[null],name:[null,[n.kI.required,n.kI.minLength(3),n.kI.maxLength(255)]],description:[null,[n.kI.minLength(3),n.kI.maxLength(255)]],logo:[null]}),"edit"===this.dialogMode&&this.brandForm.patchValue(this.brand)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createBrand(){let s=this.brandForm.getRawValue();s=(0,u.Z)(s,["id"]),this._fuseConfirmationService.open({title:"Crear Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(h=>{"confirmed"===h&&this._brandsService.createBrand(s).pipe((0,r.R)(this._unsubscribeAll)).subscribe(({data:I})=>{this._snackBar.openFromComponent(_.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:I.createBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateBrand(){const s=this.brandForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(h=>{"confirmed"===h&&this._brandsService.updateBrand(s).pipe((0,r.R)(this._unsubscribeAll)).subscribe(({data:I})=>{this._snackBar.openFromComponent(_.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:I.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()}),this._changeDetectorRef.markForCheck()})}fileChangeEvent(s){this.imageChangedEvent=s}imageCropped(s){this.croppedImage=s.base64}imageLoaded(s){}cropperReady(){}loadImageFailed(){}static#t=this.\u0275fac=function(C){return new(C||c)(t.Y36(i.WI),t.Y36(t.sBO),t.Y36(n.qu),t.Y36(i.so),t.Y36(y.ux))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["lists-brand-dialog"]],standalone:!0,features:[t.jDz],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"py-5"],[1,"w-full"],["matInput","","type","text","required","","maxlength","250",3,"formControlName","placeholder"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(C,h){1&C&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,L,2,0,"h2",2)(3,M,2,0,"h2",2),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,b,9,1,"div",4)(6,A,8,4,"div",5),t.qZA(),t.YNc(7,O,5,3,"div",6),t.qZA()),2&C&&(t.xp6(2),t.um2(2,"add"===h.data.dialogMode?2:-1),t.xp6(),t.um2(3,"edit"===h.data.dialogMode?3:-1),t.xp6(2),t.um2(5,"view"===h.data.dialogMode?5:-1),t.xp6(),t.um2(6,6),t.xp6(),t.um2(7,"view"!==h.data.dialogMode?7:-1))},dependencies:[f.ot,f.lW,i.ZT,a.lN,a.KE,a.hX,l.c,l.Nt,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.nD,n.sg,n.u],encapsulation:2})}return c})()},82824:(P,m,o)=>{o.d(m,{H:()=>t});class t{}},77201:(P,m,o)=>{o.d(m,{C:()=>u,a:()=>d});var t=o(26306),n=o(19212),i=o(88527),e=o(64190),r=o(84221);let u=(()=>{class p{constructor(f,l,a){this._paymentGatewaysService=f,this._router=l,this.store=a}resolve(f,l){return this._paymentGatewaysService.findAllPaymentGateways().pipe((0,t.K)(a=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(l){return new(l||p)(n.LFG(i.T),n.LFG(e.F0),n.LFG(r.yh))};static#e=this.\u0275prov=n.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})(),d=(()=>{class p{constructor(f,l,a){this._paymentGatewaysService=f,this._router=l,this.store=a}resolve(f,l){return this._paymentGatewaysService.findAllActivePaymentGateways().pipe((0,t.K)(a=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(l){return new(l||p)(n.LFG(i.T),n.LFG(e.F0),n.LFG(r.yh))};static#e=this.\u0275prov=n.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},14643:(P,m,o)=>{o.d(m,{G:()=>n,H:()=>t});class t{}var n=function(i){return i.none="none",i.oauth="oauth",i.basic="basic",i}(n||{})},24554:(P,m,o)=>{o.d(m,{p:()=>i});var t=o(19212),n=o(28490);let i=(()=>{class e{constructor(u){this._vouchersService=u}resolve(u,d){return this._vouchersService.getVouchers()}static#t=this.\u0275fac=function(d){return new(d||e)(t.LFG(n.S))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},23435:(P,m,o)=>{o.d(m,{a:()=>e});var t=o(84221);const n=r=>r.vouchers,e=((0,t.P1)(n,r=>r.voucher),(0,t.P1)(n,r=>r.vouchers))},28490:(P,m,o)=>{o.d(m,{S:()=>E});var t=o(48180),n=o(94664),i=o(99397),e=o(97214),r=o(79909),u=o(23435),d=o(42090),p=o(50967);const _=p.Ps`
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
`,f=p.Ps`
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
`,l=p.Ps`
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
`,a=p.Ps`
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
`,y=p.Ps`
    mutation RemoveVoucher($removeVoucherId: String!) {
        removeVoucher(id: $removeVoucherId) {
            ok
            message
        }
    }
`,L=p.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVoucherStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var M=o(19212),b=o(22939),A=o(84221);let E=(()=>{class v{constructor(x,c,g){this.apolloProvider=x,this._snackBar=c,this.store=g,this._apollo=this.apolloProvider.use("BALANC")}createVoucher(x){return this.store.select(u.a).pipe((0,t.q)(1),(0,n.w)(c=>this._apollo.mutate({mutation:l,variables:{createVoucherInput:x},errorPolicy:"all"}).pipe((0,i.b)(({errors:g,data:s})=>{if(g){let h="";g.forEach(I=>h+=`\n ${I.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const C=structuredClone(c);C.push(s.createVoucher.voucher),this.store.dispatch((0,r.Mo)({vouchers:C}))}))))}getVouchers(){return this._apollo.query({query:_,errorPolicy:"all"}).pipe((0,i.b)(({errors:x,data:c})=>{if(x){let g="";x.forEach(s=>g+=`\n ${s.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:g,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,r.Mo)({vouchers:c.findAllVouchers.vouchers})),this.store.dispatch((0,e.Jr)({pagination:c.findAllVouchers.pagination}))}))}getVoucherById(x){return this._apollo.query({query:f,variables:{findVoucherByIdId:x},errorPolicy:"all"}).pipe((0,i.b)(({errors:c,data:g})=>{if(c){let s="";c.forEach(C=>s+=`\n ${C.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,r.zC)({voucher:g.findOneVoucherById.voucher}))}))}updateVoucher(x){return this.store.select(u.a).pipe((0,t.q)(1),(0,n.w)(c=>this._apollo.mutate({mutation:a,variables:{updateVoucherInput:x},errorPolicy:"all"}).pipe((0,i.b)(({errors:g,data:s})=>{if(g){let I="";g.forEach(D=>I+=`\n ${D.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:I,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const C=structuredClone(c);C[c.findIndex(I=>I.id===x.id)]=s.updateVoucher.voucher,this.store.dispatch((0,r.Mo)({vouchers:C}))}))))}updateVoucherStatus(x){return this.store.select(u.a).pipe((0,t.q)(1),(0,n.w)(c=>this._apollo.mutate({mutation:L,variables:{updateEntityStatusInput:x},errorPolicy:"all"}).pipe((0,i.b)(({errors:g})=>{if(g){let h="";g.forEach(I=>h+=`\n ${I.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=structuredClone(c);s[c.findIndex(h=>h.id===x.id)].active=x.active,this.store.dispatch((0,r.Mo)({vouchers:s}))}))))}removeVoucher(x){return this.store.select(u.a).pipe((0,t.q)(1),(0,n.w)(c=>this._apollo.mutate({mutation:y,variables:{removeVoucherId:x},errorPolicy:"all"}).pipe((0,i.b)(({errors:g})=>{if(g){let h="";g.forEach(I=>h+=`\n ${I.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=structuredClone(c),C=c.findIndex(h=>h.id===x);s.splice(C,1),this.store.dispatch((0,r.Mo)({vouchers:s}))}))))}static#t=this.\u0275fac=function(c){return new(c||v)(M.LFG(p._M),M.LFG(b.ux),M.LFG(A.yh))};static#e=this.\u0275prov=M.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},68740:(P,m,o)=>{o.d(m,{c:()=>n});var t=o(19212);let n=(()=>{class i{transform(r){if(r)switch(r){case"quarterly":return"Trimestral";case"annually":return"Anual";default:return"Mensual"}return""}static#t=this.\u0275fac=function(u){return new(u||i)};static#e=this.\u0275pipe=t.Yjl({name:"subscriptionTitle",type:i,pure:!0,standalone:!0})}return i})()},34805:(P,m,o)=>{o.d(m,{El:()=>r,P7:()=>i,qf:()=>e});var t=o(84221);const n=u=>u.subscriptions,i=(0,t.P1)(n,u=>u.subscription),e=(0,t.P1)(n,u=>u.subscriptions),r=(0,t.P1)(n,u=>u.subscriptionCardsData)},84154:(P,m,o)=>{o.d(m,{p:()=>_});var t=o(78645),n=o(30617),i=o(41784),e=o(19212),r=o(64190),u=o(84221);function d(f,l){if(1&f){const a=e.EpF();e.TgZ(0,"fuse-card",18),e.NdJ("click",function(){const M=e.CHM(a).$implicit,b=e.oxw(2);return e.KtG(b.navigate(M.link))}),e.TgZ(1,"div",19)(2,"div",20),e._uU(3),e.qZA(),e.TgZ(4,"div",21),e._uU(5),e.qZA()()()}if(2&f){const a=l.$implicit;e.xp6(3),e.Oqu(a.title),e.xp6(2),e.Oqu(a.subtitle)}}function p(f,l){if(1&f){const a=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div")(4,"div",4)(5,"div",5)(6,"a",6),e.NdJ("click",function(){e.CHM(a);const L=e.oxw();return e.KtG(L.navigate("/dashboard"))}),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",5),e._UZ(9,"mat-icon",7),e.TgZ(10,"a",8),e._uU(11),e.qZA()()(),e.TgZ(12,"div",9)(13,"a",10),e._UZ(14,"mat-icon",7),e.TgZ(15,"span",11),e._uU(16,"Regresar"),e.qZA()()()(),e.TgZ(17,"div",12)(18,"div",13),e._uU(19),e.qZA()()()(),e.TgZ(20,"div",14)(21,"div",15)(22,"div",16)(23,"div",17),e.SjG(24,d,6,2,"fuse-card",22,e.x6l),e.qZA()()()()()}if(2&f){const a=e.oxw();e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(2),e.Oqu(a.fuseNavigation.title),e.xp6(3),e.Q6J("svgIcon","mat_solid:chevron_left"),e.xp6(5),e.hij(" ",a.fuseNavigation.title," "),e.xp6(5),e.wJu(a.fuseNavigation.children)}}let _=(()=>{class f{constructor(a,y,L){this._changeDetectorRef=a,this._router=y,this.store=L,this._unsubscribeAll=new t.x}ngOnInit(){}navigate(a){this._router.navigateByUrl(a)}static#t=this.\u0275fac=function(y){return new(y||f)(e.Y36(e.sBO),e.Y36(r.F0),e.Y36(u.yh))};static#e=this.\u0275cmp=e.Xpm({type:f,selectors:[["ath-content-menu"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","absolute inset-0 flex flex-col min-w-0 overflow-y-auto","cdkScrollable",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","py-3","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","cursor-pointer","text-primary-500","hover:underline",3,"click"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],["routerLink","/dashboard",1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"flex-auto","p-6","pt-0","sm:pt-0","sm:p-10"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full"],[1,"grid","grid-flow-row","grid-cols-1","mt-8","sm:grid-cols-2","lg:grid-cols-4","gap-y-12","sm:gap-x-4"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md",3,"click"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight"],[1,"text-md","text-secondary"],["class","flex items-center justify-between w-full p-6 cursor-pointer max-w-80 filter-info hover:shadow-md"]],template:function(y,L){1&y&&e.YNc(0,p,26,4,"div",0),2&y&&e.um2(0,L.fuseNavigation?0:-1)},dependencies:[n.Ps,n.Hw,i.y],encapsulation:2,changeDetection:0})}return f})()},3980:(P,m,o)=>{o.d(m,{aw:()=>e,bG:()=>t});var t=function(a){return a.pendiente="pendiente",a.parcial="parcial",a.pagada="pagada",a.cancelado="cancelado",a.fallido="fallido",a.expirado="expirado",a.devuelto="devuelto",a.dPendiente="devoluci\xf3n pendiente",a.dFallida="devoluci\xf3n fallida",a}(t||{}),e=function(a){return a.total="total",a.partial="partial",a}(e||{})},47452:(P,m,o)=>{o.d(m,{DK:()=>r,JM:()=>e,V_:()=>u,vr:()=>i});class i{constructor(p,_,f,l,a,y){this.productId=p,this.name=_,this.uom=f,this.price=l,this.quantity=a,this.depotId=y}}class e{constructor(p,_,f){this.assistanceId=p,this.price=_,this.quantity=f}}var r=function(d){return d.nueva="nueva",d.recibida="recibida",d.cobrada="cobrada",d.rechazada="rechazada",d.cancelada="cancelada",d.facturada="facturada",d.entregada="entregada",d}(r||{});class u{constructor(p,_,f,l){this.nueva=p,this.recibida=_,this.rechazada=f,this.cancelada=l}}},78896:(P,m,o)=>{o.d(m,{L:()=>i});var t=o(19212),n=o(66330);let i=(()=>{class e{constructor(u){this._ratesService=u}resolve(u,d){return this._ratesService.getRates()}static#t=this.\u0275fac=function(d){return new(d||e)(t.LFG(n.m))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},57222:(P,m,o)=>{o.d(m,{xs:()=>t});class t{constructor(){this.tags=[]}}}}]);