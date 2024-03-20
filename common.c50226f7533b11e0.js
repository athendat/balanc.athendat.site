"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8592],{86006:(L,_,e)=>{e.d(_,{M_:()=>p,u4:()=>r});var t=e(26306),s=e(19212),n=e(76459),o=e(64190);let r=(()=>{class l{constructor(m){this._customersService=m}resolve(m,d){return this._customersService.getCustomers()}static#t=this.\u0275fac=function(d){return new(d||l)(s.LFG(n.v))};static#e=this.\u0275prov=s.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})(),p=(()=>{class l{constructor(m,d){this._customersService=m,this._router=d}resolve(m,d){return this._customersService.findActiveCustomers().pipe((0,t.K)(a=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(d){return new(d||l)(s.LFG(n.v),s.LFG(o.F0))};static#e=this.\u0275prov=s.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},33963:(L,_,e)=>{e.d(_,{p6:()=>o});var t=e(84221);const s=r=>r.customers,o=((0,t.P1)(s,r=>r.customer),(0,t.P1)(s,r=>r.customers))},76459:(L,_,e)=>{e.d(_,{v:()=>O});var t=e(69862),s=e(99397),n=e(37398),o=e(48180),r=e(94664),v=e(97214),p=e(33686),l=e(33963),f=e(20553),m=e(50967);const d=m.Ps`
    query FindActiveCustomers($search: String!, $size: Int!) {
        findActiveCustomers(search: $search, size: $size) {
            id
            active
            name
            code
            credit
        }
    }
`;var a=e(19212),x=e(84221);const P=f.N.API_URL;let O=(()=>{class M{constructor(h,i,I){this.apolloProvider=h,this._httpClient=i,this.store=I,this._apollo=this.apolloProvider.use("BALANC")}getCustomers(h=1,i=500,I="name",E="asc",c=""){const g=(new t.LE).append("offset",i*(h-1)).append("limit",i).append("sort",I).append("order",E).append("search",c);return this._httpClient.get(`${P}/customers/`,{params:g}).pipe((0,s.b)(({pagination:u,customers:y})=>{this.store.dispatch((0,v.Jr)({pagination:u})),this.store.dispatch((0,p.Pb)({customers:y}))}))}getCustomersByStatus(h){const i=(new t.LE).append("active",h);return this._httpClient.get(`${P}/customers/by-status`,{params:i})}getCustomerById(h){return this._httpClient.get(`${P}/customers/${h}`).pipe((0,s.b)(({customer:i})=>{this.store.dispatch((0,p.Xg)({customer:i}))}))}findActiveCustomers(h="",i=10){return this._apollo.query({query:d,variables:{search:h,size:i},errorPolicy:"all"}).pipe((0,n.U)(({data:I})=>I?I.findActiveCustomers:[]),(0,s.b)(I=>{I&&this.store.dispatch((0,p.Pb)({customers:I}))}))}createCustomer(h){return this.store.select(l.p6).pipe((0,o.q)(1),(0,r.w)(i=>this._httpClient.post(`${P}/customers/`,h).pipe((0,s.b)(I=>{this.store.dispatch((0,p.Pb)({customers:[I.customer,...i]}))}))))}updateCustomer(h){return this.store.select(l.p6).pipe((0,o.q)(1),(0,r.w)(i=>this._httpClient.patch(`${P}/customers`,h).pipe((0,s.b)(I=>{[...i][i.findIndex(g=>g.id===h.id)]=I.customer,this.store.dispatch((0,p.Pb)({customers:i}))}))))}deleteCustomer(h){return this.store.select(l.p6).pipe((0,o.q)(1),(0,r.w)(i=>this._httpClient.delete(`${P}/customers/${h}`).pipe((0,s.b)(I=>{const E=i.findIndex(c=>c.id===h);i.splice(E,1),this.store.dispatch((0,p.Pb)({customers:i}))}))))}static#t=this.\u0275fac=function(i){return new(i||M)(a.LFG(m._M),a.LFG(t.eN),a.LFG(x.yh))};static#e=this.\u0275prov=a.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"})}return M})()},23605:(L,_,e)=>{e.d(_,{D1:()=>v,Nc:()=>l,r7:()=>p});var t=e(26306),s=e(58504),n=e(19212),o=e(43987),r=e(64190);let v=(()=>{class f{constructor(d,a){this._locationsService=d,this._router=a}resolve(d,a){const x=d.paramMap.get("locationId");if("new"!==x)return this._locationsService.getLocationById(x).pipe((0,t.K)(P=>{console.error(P);const O=a.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(O),(0,s._)(P)}))}static#t=this.\u0275fac=function(a){return new(a||f)(n.LFG(o._),n.LFG(r.F0))};static#e=this.\u0275prov=n.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})(),p=(()=>{class f{constructor(d){this._locationsService=d}resolve(d,a){return this._locationsService.getLocations()}static#t=this.\u0275fac=function(a){return new(a||f)(n.LFG(o._))};static#e=this.\u0275prov=n.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})(),l=(()=>{class f{constructor(d){this._locationsService=d}resolve(d,a){return this._locationsService.findActiveLocations()}static#t=this.\u0275fac=function(a){return new(a||f)(n.LFG(o._))};static#e=this.\u0275prov=n.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})()},84384:(L,_,e)=>{e.d(_,{FD:()=>n,Yu:()=>o});var t=e(84221);const s=r=>r.locations,n=(0,t.P1)(s,r=>r.location),o=(0,t.P1)(s,r=>r.locations)},43987:(L,_,e)=>{e.d(_,{_:()=>O});var t=e(99397),s=e(37398),n=e(26045),o=e(97214),r=e(50967);const v=r.Ps`
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
`,p=r.Ps`
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
`,l=r.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateLocationStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,f=r.Ps`
    mutation RemoveLocation($removeLocationId: String!) {
        removeLocation(id: $removeLocationId) {
            ok
            message
        }
    }
`,m=r.Ps`
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
`,d=r.Ps`
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
`;var x=e(19212),P=e(84221);let O=(()=>{class M{constructor(h,i){this.apolloProvider=h,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createLocation(h){return this._apollo.mutate({mutation:v,variables:{createLocationInput:h},errorPolicy:"all"}).pipe((0,t.b)(({data:i})=>{i&&(this.store.dispatch((0,n.ob)({location:i.createLocation.location})),this.store.dispatch((0,n.l6)({location:i.createLocation.location})))}))}getLocations(h=0,i=25,I="name",E="asc",c=""){return this._apollo.query({query:m,errorPolicy:"all",variables:{page:h,size:i,sort:I,order:E,search:c}}).pipe((0,t.b)(({data:g})=>{g&&(this.store.dispatch((0,o.Jr)({pagination:g.findAllLocations.pagination})),this.store.dispatch((0,n.vB)({locations:g.findAllLocations.locations})))}))}findActiveLocations(h="",i=25){return this._apollo.query({query:d,variables:{search:h,size:i},errorPolicy:"all"}).pipe((0,s.U)(({data:I})=>I?I.findActiveLocations:[]),(0,t.b)(I=>{I&&this.store.dispatch((0,n.vB)({locations:I}))}))}getLocationById(h){return this._apollo.query({query:a,variables:{findLocationByIdId:h},errorPolicy:"all"}).pipe((0,t.b)(({data:i})=>{i&&this.store.dispatch((0,n.l6)({location:i.findLocationById.location}))}))}updateLocation(h){return this._apollo.mutate({mutation:p,variables:{updateLocationInput:h},errorPolicy:"all"}).pipe((0,t.b)(({data:i})=>{i&&(this.store.dispatch((0,n.YF)({location:i.updateLocation.location})),this.store.dispatch((0,n.l6)({location:i.updateLocation.location})))}))}updateLocationStatus(h){return this._apollo.mutate({mutation:l,variables:{updateEntityStatusInput:h},errorPolicy:"all"}).pipe((0,t.b)(({data:i})=>{i&&this.store.dispatch((0,n.TC)({id:h.id,active:h.active}))}))}removeLocation(h){return this._apollo.mutate({mutation:f,variables:{removeLocationId:h},errorPolicy:"all"}).pipe((0,t.b)(({data:i})=>{i&&this.store.dispatch((0,n.Mv)({id:h}))}))}static#t=this.\u0275fac=function(i){return new(i||M)(x.LFG(r._M),x.LFG(P.yh))};static#e=this.\u0275prov=x.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"})}return M})()},9573:(L,_,e)=>{e.d(_,{C:()=>E});var t=e(19212),s=e(56223),n=e(17700),o=e(78645),r=e(59773),v=e(55497),p=e(56278),l=e(47641),f=e(42090),m=e(32296),d=e(24516),a=e(64170),x=e(22939);function P(c,g){1&c&&(t.TgZ(0,"h2",7),t._uU(1," Agregar Marca "),t.qZA())}function O(c,g){1&c&&(t.TgZ(0,"h2",7),t._uU(1," Editar Marca "),t.qZA())}function M(c,g){if(1&c&&(t.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"span",14),t._uU(8),t.qZA()()()()()()),2&c){const u=t.oxw();t.xp6(8),t.Oqu(u.data.brand.name||"Sin nombre")}}function D(c,g){if(1&c&&(t.TgZ(0,"div",15)(1,"div",16)(2,"form",17)(3,"div",18)(4,"mat-form-field",19)(5,"mat-label"),t._uU(6,"Nombre"),t.qZA(),t._UZ(7,"input",20),t.qZA()()()()()),2&c){const u=t.oxw();t.xp6(2),t.Q6J("formGroup",u.brandForm)("autocomplete","off"),t.xp6(5),t.Q6J("formControlName","name")("placeholder","Nombre del Marca")}}function h(c,g){if(1&c){const u=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(u);const C=t.oxw(2);return t.KtG(C.updateBrand())}),t._uU(1," Actualizar "),t.qZA()}if(2&c){const u=t.oxw(2);t.Q6J("color","primary")("disabled",u.brandForm.invalid)("matDialogClose","confirmed")}}function i(c,g){if(1&c){const u=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(u);const C=t.oxw(2);return t.KtG(C.createBrand())}),t._uU(1," Agregar "),t.qZA()}if(2&c){const u=t.oxw(2);t.Q6J("color","primary")("disabled",u.brandForm.invalid)("matDialogClose","confirmed")}}function I(c,g){if(1&c&&(t.TgZ(0,"div",21)(1,"button",22),t._uU(2," Cancelar "),t.qZA(),t.YNc(3,h,2,3,"button",23)(4,i,2,3,"button",23),t.qZA()),2&c){const u=t.oxw();t.xp6(),t.Q6J("matDialogClose","cancelled"),t.xp6(2),t.um2(3,"edit"===u.data.dialogMode?3:-1),t.xp6(),t.um2(4,"add"===u.data.dialogMode?4:-1)}}let E=(()=>{class c{constructor(u,y,C,A,b){this.data=u,this._changeDetectorRef=y,this._formBuilder=C,this._dialogRef=A,this._snackBar=b,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this._unsubscribeAll=new o.x,this._brandsService=(0,t.f3M)(l.G),this._fuseConfirmationService=(0,t.f3M)(p.R),this.dialogMode=u.dialogMode,this.brand=u.brand}ngOnInit(){this.brandForm=this._formBuilder.group({id:[null],name:[null,[s.kI.required,s.kI.minLength(3),s.kI.maxLength(255)]],description:[null,[s.kI.minLength(3),s.kI.maxLength(255)]],logo:[null]}),"edit"===this.dialogMode&&this.brandForm.patchValue(this.brand)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createBrand(){let u=this.brandForm.getRawValue();u=(0,v.Z)(u,["id"]),this._fuseConfirmationService.open({title:"Crear Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(C=>{"confirmed"===C&&this._brandsService.createBrand(u).pipe((0,r.R)(this._unsubscribeAll)).subscribe(({data:A})=>{this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:A.createBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateBrand(){const u=this.brandForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(C=>{"confirmed"===C&&this._brandsService.updateBrand(u).pipe((0,r.R)(this._unsubscribeAll)).subscribe(({data:A})=>{this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:A.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()}),this._changeDetectorRef.markForCheck()})}fileChangeEvent(u){this.imageChangedEvent=u}imageCropped(u){this.croppedImage=u.base64}imageLoaded(u){}cropperReady(){}loadImageFailed(){}static#t=this.\u0275fac=function(y){return new(y||c)(t.Y36(n.WI),t.Y36(t.sBO),t.Y36(s.qu),t.Y36(n.so),t.Y36(x.ux))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["lists-brand-dialog"]],standalone:!0,features:[t.jDz],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"py-5"],[1,"w-full"],["matInput","","type","text","required","","maxlength","250",3,"formControlName","placeholder"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(y,C){1&y&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,P,2,0,"h2",2)(3,O,2,0,"h2",2),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,M,9,1,"div",4)(6,D,8,4,"div",5),t.qZA(),t.YNc(7,I,5,3,"div",6),t.qZA()),2&y&&(t.xp6(2),t.um2(2,"add"===C.data.dialogMode?2:-1),t.xp6(),t.um2(3,"edit"===C.data.dialogMode?3:-1),t.xp6(2),t.um2(5,"view"===C.data.dialogMode?5:-1),t.xp6(),t.um2(6,6),t.xp6(),t.um2(7,"view"!==C.data.dialogMode?7:-1))},dependencies:[m.ot,m.lW,n.ZT,a.lN,a.KE,a.hX,d.c,d.Nt,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.nD,s.sg,s.u],encapsulation:2})}return c})()},82824:(L,_,e)=>{e.d(_,{H:()=>t});class t{}},77201:(L,_,e)=>{e.d(_,{C:()=>v,a:()=>p});var t=e(26306),s=e(19212),n=e(88527),o=e(64190),r=e(84221);let v=(()=>{class l{constructor(m,d,a){this._paymentGatewaysService=m,this._router=d,this.store=a}resolve(m,d){return this._paymentGatewaysService.findAllPaymentGateways().pipe((0,t.K)(a=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(d){return new(d||l)(s.LFG(n.T),s.LFG(o.F0),s.LFG(r.yh))};static#e=this.\u0275prov=s.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})(),p=(()=>{class l{constructor(m,d,a){this._paymentGatewaysService=m,this._router=d,this.store=a}resolve(m,d){return this._paymentGatewaysService.findAllActivePaymentGateways().pipe((0,t.K)(a=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(d){return new(d||l)(s.LFG(n.T),s.LFG(o.F0),s.LFG(r.yh))};static#e=this.\u0275prov=s.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},14643:(L,_,e)=>{e.d(_,{G:()=>s,H:()=>t});class t{}var s=function(n){return n.none="none",n.oauth="oauth",n.basic="basic",n}(s||{})},24554:(L,_,e)=>{e.d(_,{p:()=>n});var t=e(19212),s=e(28490);let n=(()=>{class o{constructor(v){this._vouchersService=v}resolve(v,p){return this._vouchersService.getVouchers()}static#t=this.\u0275fac=function(p){return new(p||o)(t.LFG(s.S))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},23435:(L,_,e)=>{e.d(_,{a:()=>o});var t=e(84221);const s=r=>r.vouchers,o=((0,t.P1)(s,r=>r.voucher),(0,t.P1)(s,r=>r.vouchers))},28490:(L,_,e)=>{e.d(_,{S:()=>h});var t=e(48180),s=e(94664),n=e(99397),o=e(97214),r=e(79909),v=e(23435),p=e(42090),l=e(50967);const f=l.Ps`
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
`,m=l.Ps`
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
`,d=l.Ps`
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
`,a=l.Ps`
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
`,x=l.Ps`
    mutation RemoveVoucher($removeVoucherId: String!) {
        removeVoucher(id: $removeVoucherId) {
            ok
            message
        }
    }
`,P=l.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVoucherStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var O=e(19212),M=e(22939),D=e(84221);let h=(()=>{class i{constructor(E,c,g){this.apolloProvider=E,this._snackBar=c,this.store=g,this._apollo=this.apolloProvider.use("BALANC")}createVoucher(E){return this.store.select(v.a).pipe((0,t.q)(1),(0,s.w)(c=>this._apollo.mutate({mutation:d,variables:{createVoucherInput:E},errorPolicy:"all"}).pipe((0,n.b)(({errors:g,data:u})=>{if(g){let C="";g.forEach(A=>C+=`\n ${A.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:C,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const y=structuredClone(c);y.push(u.createVoucher.voucher),this.store.dispatch((0,r.Mo)({vouchers:y}))}))))}getVouchers(){return this._apollo.query({query:f,errorPolicy:"all"}).pipe((0,n.b)(({errors:E,data:c})=>{if(E){let g="";E.forEach(u=>g+=`\n ${u.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:g,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,r.Mo)({vouchers:c.findAllVouchers.vouchers})),this.store.dispatch((0,o.Jr)({pagination:c.findAllVouchers.pagination}))}))}getVoucherById(E){return this._apollo.query({query:m,variables:{findVoucherByIdId:E},errorPolicy:"all"}).pipe((0,n.b)(({errors:c,data:g})=>{if(c){let u="";c.forEach(y=>u+=`\n ${y.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:u,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,r.zC)({voucher:g.findOneVoucherById.voucher}))}))}updateVoucher(E){return this.store.select(v.a).pipe((0,t.q)(1),(0,s.w)(c=>this._apollo.mutate({mutation:a,variables:{updateVoucherInput:E},errorPolicy:"all"}).pipe((0,n.b)(({errors:g,data:u})=>{if(g){let A="";g.forEach(b=>A+=`\n ${b.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:A,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const y=structuredClone(c);y[c.findIndex(A=>A.id===E.id)]=u.updateVoucher.voucher,this.store.dispatch((0,r.Mo)({vouchers:y}))}))))}updateVoucherStatus(E){return this.store.select(v.a).pipe((0,t.q)(1),(0,s.w)(c=>this._apollo.mutate({mutation:P,variables:{updateEntityStatusInput:E},errorPolicy:"all"}).pipe((0,n.b)(({errors:g})=>{if(g){let C="";g.forEach(A=>C+=`\n ${A.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:C,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const u=structuredClone(c);u[c.findIndex(C=>C.id===E.id)].active=E.active,this.store.dispatch((0,r.Mo)({vouchers:u}))}))))}removeVoucher(E){return this.store.select(v.a).pipe((0,t.q)(1),(0,s.w)(c=>this._apollo.mutate({mutation:x,variables:{removeVoucherId:E},errorPolicy:"all"}).pipe((0,n.b)(({errors:g})=>{if(g){let C="";g.forEach(A=>C+=`\n ${A.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:C,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const u=structuredClone(c),y=c.findIndex(C=>C.id===E);u.splice(y,1),this.store.dispatch((0,r.Mo)({vouchers:u}))}))))}static#t=this.\u0275fac=function(c){return new(c||i)(O.LFG(l._M),O.LFG(M.ux),O.LFG(D.yh))};static#e=this.\u0275prov=O.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},68740:(L,_,e)=>{e.d(_,{c:()=>s});var t=e(19212);let s=(()=>{class n{transform(r){if(r)switch(r){case"quarterly":return"Trimestral";case"annually":return"Anual";default:return"Mensual"}return""}static#t=this.\u0275fac=function(v){return new(v||n)};static#e=this.\u0275pipe=t.Yjl({name:"subscriptionTitle",type:n,pure:!0,standalone:!0})}return n})()},34805:(L,_,e)=>{e.d(_,{El:()=>r,P7:()=>n,qf:()=>o});var t=e(84221);const s=v=>v.subscriptions,n=(0,t.P1)(s,v=>v.subscription),o=(0,t.P1)(s,v=>v.subscriptions),r=(0,t.P1)(s,v=>v.subscriptionCardsData)},84154:(L,_,e)=>{e.d(_,{p:()=>f});var t=e(78645),s=e(30617),n=e(41784),o=e(19212),r=e(64190),v=e(84221);function p(m,d){if(1&m){const a=o.EpF();o.TgZ(0,"fuse-card",18),o.NdJ("click",function(){const O=o.CHM(a).$implicit,M=o.oxw(2);return o.KtG(M.navigate(O.link))}),o.TgZ(1,"div",19)(2,"div",20),o._uU(3),o.qZA(),o.TgZ(4,"div",21),o._uU(5),o.qZA()()()}if(2&m){const a=d.$implicit;o.xp6(3),o.Oqu(a.title),o.xp6(2),o.Oqu(a.subtitle)}}function l(m,d){if(1&m){const a=o.EpF();o.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div")(4,"div",4)(5,"div",5)(6,"a",6),o.NdJ("click",function(){o.CHM(a);const P=o.oxw();return o.KtG(P.navigate("/dashboard"))}),o._uU(7,"Inicio"),o.qZA()(),o.TgZ(8,"div",5),o._UZ(9,"mat-icon",7),o.TgZ(10,"a",8),o._uU(11),o.qZA()()(),o.TgZ(12,"div",9)(13,"a",10),o._UZ(14,"mat-icon",7),o.TgZ(15,"span",11),o._uU(16,"Regresar"),o.qZA()()()(),o.TgZ(17,"div",12)(18,"div",13),o._uU(19),o.qZA()()()(),o.TgZ(20,"div",14)(21,"div",15)(22,"div",16)(23,"div",17),o.SjG(24,p,6,2,"fuse-card",22,o.x6l),o.qZA()()()()()}if(2&m){const a=o.oxw();o.xp6(9),o.Q6J("svgIcon","mat_solid:chevron_right"),o.xp6(2),o.Oqu(a.fuseNavigation.title),o.xp6(3),o.Q6J("svgIcon","mat_solid:chevron_left"),o.xp6(5),o.hij(" ",a.fuseNavigation.title," "),o.xp6(5),o.wJu(a.fuseNavigation.children)}}let f=(()=>{class m{constructor(a,x,P){this._changeDetectorRef=a,this._router=x,this.store=P,this._unsubscribeAll=new t.x}ngOnInit(){}navigate(a){this._router.navigateByUrl(a)}static#t=this.\u0275fac=function(x){return new(x||m)(o.Y36(o.sBO),o.Y36(r.F0),o.Y36(v.yh))};static#e=this.\u0275cmp=o.Xpm({type:m,selectors:[["ath-content-menu"]],standalone:!0,features:[o.jDz],decls:1,vars:1,consts:[["class","absolute inset-0 flex flex-col min-w-0 overflow-y-auto","cdkScrollable",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","py-3","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","cursor-pointer","text-primary-500","hover:underline",3,"click"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],["routerLink","/dashboard",1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"flex-auto","p-6","pt-0","sm:pt-0","sm:p-10"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full"],[1,"grid","grid-flow-row","grid-cols-1","mt-8","sm:grid-cols-2","lg:grid-cols-4","gap-y-12","sm:gap-x-4"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md",3,"click"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight"],[1,"text-md","text-secondary"],["class","flex items-center justify-between w-full p-6 cursor-pointer max-w-80 filter-info hover:shadow-md"]],template:function(x,P){1&x&&o.YNc(0,l,26,4,"div",0),2&x&&o.um2(0,P.fuseNavigation?0:-1)},dependencies:[s.Ps,s.Hw,n.y],encapsulation:2,changeDetection:0})}return m})()},3980:(L,_,e)=>{e.d(_,{aw:()=>o,bG:()=>t});var t=function(a){return a.pendiente="pendiente",a.parcial="parcial",a.pagada="pagada",a.cancelado="cancelado",a.fallido="fallido",a.expirado="expirado",a.devuelto="devuelto",a.dPendiente="devoluci\xf3n pendiente",a.dFallida="devoluci\xf3n fallida",a}(t||{}),o=function(a){return a.total="total",a.partial="partial",a}(o||{})},47452:(L,_,e)=>{e.d(_,{DK:()=>r,JM:()=>o,V_:()=>v,vr:()=>n});class n{constructor(l,f,m,d,a,x){this.productId=l,this.name=f,this.uom=m,this.price=d,this.quantity=a,this.depotId=x}}class o{constructor(l,f,m){this.assistanceId=l,this.price=f,this.quantity=m}}var r=function(p){return p.nueva="nueva",p.recibida="recibida",p.cobrada="cobrada",p.rechazada="rechazada",p.cancelada="cancelada",p.facturada="facturada",p.entregada="entregada",p}(r||{});class v{constructor(l,f,m,d){this.nueva=l,this.recibida=f,this.rechazada=m,this.cancelada=d}}},78896:(L,_,e)=>{e.d(_,{L:()=>n});var t=e(19212),s=e(66330);let n=(()=>{class o{constructor(v){this._ratesService=v}resolve(v,p){return this._ratesService.getRates()}static#t=this.\u0275fac=function(p){return new(p||o)(t.LFG(s.m))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},57222:(L,_,e)=>{e.d(_,{xs:()=>t});class t{constructor(){this.tags=[]}}}}]);