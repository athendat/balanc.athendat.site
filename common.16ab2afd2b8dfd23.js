"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8592],{86006:(L,f,e)=>{e.d(f,{M_:()=>d,u4:()=>n});var t=e(26306),s=e(19212),r=e(76459),o=e(64190);let n=(()=>{class m{constructor(h){this._customersService=h}resolve(h,p){return this._customersService.getCustomers()}static#t=this.\u0275fac=function(p){return new(p||m)(s.LFG(r.v))};static#e=this.\u0275prov=s.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})(),d=(()=>{class m{constructor(h,p){this._customersService=h,this._router=p}resolve(h,p){return this._customersService.findActiveCustomers().pipe((0,t.K)(a=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(p){return new(p||m)(s.LFG(r.v),s.LFG(o.F0))};static#e=this.\u0275prov=s.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()},33963:(L,f,e)=>{e.d(f,{p6:()=>o});var t=e(84221);const s=n=>n.customers,o=((0,t.P1)(s,n=>n.customer),(0,t.P1)(s,n=>n.customers))},76459:(L,f,e)=>{e.d(f,{v:()=>b});var t=e(69862),s=e(99397),r=e(37398),o=e(48180),n=e(94664),_=e(97214),d=e(33686),m=e(33963),v=e(20553),h=e(50967);const p=h.Ps`
    query FindActiveCustomers($search: String!, $size: Int!) {
        findActiveCustomers(search: $search, size: $size) {
            id
            active
            name
            code
            credit
        }
    }
`;var a=e(19212),P=e(84221);const y=v.N.API_URL;let b=(()=>{class A{constructor(u,i,I){this.apolloProvider=u,this._httpClient=i,this.store=I,this._apollo=this.apolloProvider.use("BALANC")}getCustomers(u=1,i=500,I="name",E="asc",c=""){const g=(new t.LE).append("offset",i*(u-1)).append("limit",i).append("sort",I).append("order",E).append("search",c);return this._httpClient.get(`${y}/customers/`,{params:g}).pipe((0,s.b)(({pagination:l,customers:x})=>{this.store.dispatch((0,_.Jr)({pagination:l})),this.store.dispatch((0,d.Pb)({customers:x}))}))}getCustomersByStatus(u){const i=(new t.LE).append("active",u);return this._httpClient.get(`${y}/customers/by-status`,{params:i})}getCustomerById(u){return this._httpClient.get(`${y}/customers/${u}`).pipe((0,s.b)(({customer:i})=>{this.store.dispatch((0,d.Xg)({customer:i}))}))}findActiveCustomers(u="",i=10){return this._apollo.query({query:p,variables:{search:u,size:i},errorPolicy:"all"}).pipe((0,r.U)(({data:I})=>I?I.findActiveCustomers:[]),(0,s.b)(I=>{I&&this.store.dispatch((0,d.Pb)({customers:I}))}))}createCustomer(u){return this.store.select(m.p6).pipe((0,o.q)(1),(0,n.w)(i=>this._httpClient.post(`${y}/customers/`,u).pipe((0,s.b)(I=>{this.store.dispatch((0,d.Pb)({customers:[I.customer,...i]}))}))))}updateCustomer(u){return this.store.select(m.p6).pipe((0,o.q)(1),(0,n.w)(i=>this._httpClient.patch(`${y}/customers`,u).pipe((0,s.b)(I=>{[...i][i.findIndex(g=>g.id===u.id)]=I.customer,this.store.dispatch((0,d.Pb)({customers:i}))}))))}deleteCustomer(u){return this.store.select(m.p6).pipe((0,o.q)(1),(0,n.w)(i=>this._httpClient.delete(`${y}/customers/${u}`).pipe((0,s.b)(I=>{const E=i.findIndex(c=>c.id===u);i.splice(E,1),this.store.dispatch((0,d.Pb)({customers:i}))}))))}static#t=this.\u0275fac=function(i){return new(i||A)(a.LFG(h._M),a.LFG(t.eN),a.LFG(P.yh))};static#e=this.\u0275prov=a.Yz7({token:A,factory:A.\u0275fac,providedIn:"root"})}return A})()},23605:(L,f,e)=>{e.d(f,{D1:()=>_,Nc:()=>m,r7:()=>d});var t=e(26306),s=e(58504),r=e(19212),o=e(43987),n=e(64190);let _=(()=>{class v{constructor(p,a){this._locationsService=p,this._router=a}resolve(p,a){const P=p.paramMap.get("locationId");if("new"!==P)return this._locationsService.getLocationById(P).pipe((0,t.K)(y=>{console.error(y);const b=a.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(b),(0,s._)(y)}))}static#t=this.\u0275fac=function(a){return new(a||v)(r.LFG(o._),r.LFG(n.F0))};static#e=this.\u0275prov=r.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})(),d=(()=>{class v{constructor(p){this._locationsService=p}resolve(p,a){return this._locationsService.getLocations()}static#t=this.\u0275fac=function(a){return new(a||v)(r.LFG(o._))};static#e=this.\u0275prov=r.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})(),m=(()=>{class v{constructor(p){this._locationsService=p}resolve(p,a){return this._locationsService.findActiveLocations()}static#t=this.\u0275fac=function(a){return new(a||v)(r.LFG(o._))};static#e=this.\u0275prov=r.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},84384:(L,f,e)=>{e.d(f,{FD:()=>r,Yu:()=>o});var t=e(84221);const s=n=>n.locations,r=(0,t.P1)(s,n=>n.location),o=(0,t.P1)(s,n=>n.locations)},43987:(L,f,e)=>{e.d(f,{_:()=>b});var t=e(99397),s=e(37398),r=e(26045),o=e(97214),n=e(50967);const _=n.Ps`
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
`,d=n.Ps`
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
`,m=n.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateLocationStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,v=n.Ps`
    mutation RemoveLocation($removeLocationId: String!) {
        removeLocation(id: $removeLocationId) {
            ok
            message
        }
    }
`,h=n.Ps`
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
`,p=n.Ps`
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
`,a=n.Ps`
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
`;var P=e(19212),y=e(84221);let b=(()=>{class A{constructor(u,i){this.apolloProvider=u,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createLocation(u){return this._apollo.mutate({mutation:_,variables:{createLocationInput:u},errorPolicy:"all"}).pipe((0,t.b)(({data:i})=>{i&&(this.store.dispatch((0,r.ob)({location:i.createLocation.location})),this.store.dispatch((0,r.l6)({location:i.createLocation.location})))}))}getLocations(u=0,i=25,I="name",E="asc",c=""){return this._apollo.query({query:h,errorPolicy:"all",variables:{page:u,size:i,sort:I,order:E,search:c}}).pipe((0,t.b)(({data:g})=>{g&&(this.store.dispatch((0,o.Jr)({pagination:g.findAllLocations.pagination})),this.store.dispatch((0,r.vB)({locations:g.findAllLocations.locations})))}))}findActiveLocations(u="",i=25){return this._apollo.query({query:p,variables:{search:u,size:i},errorPolicy:"all"}).pipe((0,s.U)(({data:I})=>I?I.findActiveLocations:[]),(0,t.b)(I=>{I&&this.store.dispatch((0,r.vB)({locations:I}))}))}getLocationById(u){return this._apollo.query({query:a,variables:{findLocationByIdId:u},errorPolicy:"all"}).pipe((0,t.b)(({data:i})=>{i&&this.store.dispatch((0,r.l6)({location:i.findLocationById.location}))}))}updateLocation(u){return this._apollo.mutate({mutation:d,variables:{updateLocationInput:u},errorPolicy:"all"}).pipe((0,t.b)(({data:i})=>{i&&(this.store.dispatch((0,r.YF)({location:i.updateLocation.location})),this.store.dispatch((0,r.l6)({location:i.updateLocation.location})))}))}updateLocationStatus(u){return this._apollo.mutate({mutation:m,variables:{updateEntityStatusInput:u},errorPolicy:"all"}).pipe((0,t.b)(({data:i})=>{i&&this.store.dispatch((0,r.TC)({id:u.id,active:u.active}))}))}removeLocation(u){return this._apollo.mutate({mutation:v,variables:{removeLocationId:u},errorPolicy:"all"}).pipe((0,t.b)(({data:i})=>{i&&this.store.dispatch((0,r.Mv)({id:u}))}))}static#t=this.\u0275fac=function(i){return new(i||A)(P.LFG(n._M),P.LFG(y.yh))};static#e=this.\u0275prov=P.Yz7({token:A,factory:A.\u0275fac,providedIn:"root"})}return A})()},9573:(L,f,e)=>{e.d(f,{C:()=>E});var t=e(19212),s=e(56223),r=e(17700),o=e(78645),n=e(59773),_=e(55497),d=e(56278),m=e(47641),v=e(42090),h=e(32296),p=e(24516),a=e(64170),P=e(22939);function y(c,g){1&c&&(t.TgZ(0,"h2",7),t._uU(1," Agregar Marca "),t.qZA())}function b(c,g){1&c&&(t.TgZ(0,"h2",7),t._uU(1," Editar Marca "),t.qZA())}function A(c,g){if(1&c&&(t.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"span",14),t._uU(8),t.qZA()()()()()()),2&c){const l=t.oxw();t.xp6(8),t.Oqu(l.data.brand.name||"Sin nombre")}}function O(c,g){if(1&c&&(t.TgZ(0,"div",15)(1,"div",16)(2,"form",17)(3,"div",18)(4,"mat-form-field",19)(5,"mat-label"),t._uU(6,"Nombre"),t.qZA(),t._UZ(7,"input",20),t.qZA()()()()()),2&c){const l=t.oxw();t.xp6(2),t.Q6J("formGroup",l.brandForm)("autocomplete","off"),t.xp6(5),t.Q6J("formControlName","name")("placeholder","Nombre del Marca")}}function u(c,g){if(1&c){const l=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(l);const C=t.oxw(2);return t.KtG(C.updateBrand())}),t._uU(1," Actualizar "),t.qZA()}if(2&c){const l=t.oxw(2);t.Q6J("color","primary")("disabled",l.brandForm.invalid)("matDialogClose","confirmed")}}function i(c,g){if(1&c){const l=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(l);const C=t.oxw(2);return t.KtG(C.createBrand())}),t._uU(1," Agregar "),t.qZA()}if(2&c){const l=t.oxw(2);t.Q6J("color","primary")("disabled",l.brandForm.invalid)("matDialogClose","confirmed")}}function I(c,g){if(1&c&&(t.TgZ(0,"div",21)(1,"button",22),t._uU(2," Cancelar "),t.qZA(),t.YNc(3,u,2,3,"button",23)(4,i,2,3,"button",23),t.qZA()),2&c){const l=t.oxw();t.xp6(),t.Q6J("matDialogClose","cancelled"),t.xp6(2),t.um2(3,"edit"===l.data.dialogMode?3:-1),t.xp6(),t.um2(4,"add"===l.data.dialogMode?4:-1)}}let E=(()=>{class c{constructor(l,x,C,M,T){this.data=l,this._changeDetectorRef=x,this._formBuilder=C,this._dialogRef=M,this._snackBar=T,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this._unsubscribeAll=new o.x,this._brandsService=(0,t.f3M)(m.G),this._fuseConfirmationService=(0,t.f3M)(d.R),this.dialogMode=l.dialogMode,this.brand=l.brand}ngOnInit(){this.brandForm=this._formBuilder.group({id:[null],name:[null,[s.kI.required,s.kI.minLength(3),s.kI.maxLength(255)]],description:[null,[s.kI.minLength(3),s.kI.maxLength(255)]],logo:[null]}),"edit"===this.dialogMode&&this.brandForm.patchValue(this.brand)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createBrand(){let l=this.brandForm.getRawValue();l=(0,_.Z)(l,["id"]),this._fuseConfirmationService.open({title:"Crear Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(C=>{"confirmed"===C&&this._brandsService.createBrand(l).pipe((0,n.R)(this._unsubscribeAll)).subscribe(({data:M})=>{this._snackBar.openFromComponent(v.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:M.createBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateBrand(){const l=this.brandForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(C=>{"confirmed"===C&&this._brandsService.updateBrand(l).pipe((0,n.R)(this._unsubscribeAll)).subscribe(({data:M})=>{this._snackBar.openFromComponent(v.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:M.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()}),this._changeDetectorRef.markForCheck()})}fileChangeEvent(l){this.imageChangedEvent=l}imageCropped(l){this.croppedImage=l.base64}imageLoaded(l){}cropperReady(){}loadImageFailed(){}static#t=this.\u0275fac=function(x){return new(x||c)(t.Y36(r.WI),t.Y36(t.sBO),t.Y36(s.qu),t.Y36(r.so),t.Y36(P.ux))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["lists-brand-dialog"]],standalone:!0,features:[t.jDz],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"py-5"],[1,"w-full"],["matInput","","type","text","required","","maxlength","250",3,"formControlName","placeholder"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(x,C){1&x&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,y,2,0,"h2",2)(3,b,2,0,"h2",2),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,A,9,1,"div",4)(6,O,8,4,"div",5),t.qZA(),t.YNc(7,I,5,3,"div",6),t.qZA()),2&x&&(t.xp6(2),t.um2(2,"add"===C.data.dialogMode?2:-1),t.xp6(),t.um2(3,"edit"===C.data.dialogMode?3:-1),t.xp6(2),t.um2(5,"view"===C.data.dialogMode?5:-1),t.xp6(),t.um2(6,6),t.xp6(),t.um2(7,"view"!==C.data.dialogMode?7:-1))},dependencies:[h.ot,h.lW,r.ZT,a.lN,a.KE,a.hX,p.c,p.Nt,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.nD,s.sg,s.u],encapsulation:2})}return c})()},82824:(L,f,e)=>{e.d(f,{H:()=>t});class t{}},24554:(L,f,e)=>{e.d(f,{p:()=>r});var t=e(19212),s=e(28490);let r=(()=>{class o{constructor(_){this._vouchersService=_}resolve(_,d){return this._vouchersService.getVouchers()}static#t=this.\u0275fac=function(d){return new(d||o)(t.LFG(s.S))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},23435:(L,f,e)=>{e.d(f,{a:()=>o});var t=e(84221);const s=n=>n.vouchers,o=((0,t.P1)(s,n=>n.voucher),(0,t.P1)(s,n=>n.vouchers))},28490:(L,f,e)=>{e.d(f,{S:()=>u});var t=e(48180),s=e(94664),r=e(99397),o=e(97214),n=e(79909),_=e(23435),d=e(42090),m=e(50967);const v=m.Ps`
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
`,h=m.Ps`
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
`,p=m.Ps`
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
`,a=m.Ps`
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
`,P=m.Ps`
    mutation RemoveVoucher($removeVoucherId: String!) {
        removeVoucher(id: $removeVoucherId) {
            ok
            message
        }
    }
`,y=m.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVoucherStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var b=e(19212),A=e(22939),O=e(84221);let u=(()=>{class i{constructor(E,c,g){this.apolloProvider=E,this._snackBar=c,this.store=g,this._apollo=this.apolloProvider.use("BALANC")}createVoucher(E){return this.store.select(_.a).pipe((0,t.q)(1),(0,s.w)(c=>this._apollo.mutate({mutation:p,variables:{createVoucherInput:E},errorPolicy:"all"}).pipe((0,r.b)(({errors:g,data:l})=>{if(g){let C="";g.forEach(M=>C+=`\n ${M.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:C,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const x=structuredClone(c);x.push(l.createVoucher.voucher),this.store.dispatch((0,n.Mo)({vouchers:x}))}))))}getVouchers(){return this._apollo.query({query:v,errorPolicy:"all"}).pipe((0,r.b)(({errors:E,data:c})=>{if(E){let g="";E.forEach(l=>g+=`\n ${l.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:g,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,n.Mo)({vouchers:c.findAllVouchers.vouchers})),this.store.dispatch((0,o.Jr)({pagination:c.findAllVouchers.pagination}))}))}getVoucherById(E){return this._apollo.query({query:h,variables:{findVoucherByIdId:E},errorPolicy:"all"}).pipe((0,r.b)(({errors:c,data:g})=>{if(c){let l="";c.forEach(x=>l+=`\n ${x.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,n.zC)({voucher:g.findOneVoucherById.voucher}))}))}updateVoucher(E){return this.store.select(_.a).pipe((0,t.q)(1),(0,s.w)(c=>this._apollo.mutate({mutation:a,variables:{updateVoucherInput:E},errorPolicy:"all"}).pipe((0,r.b)(({errors:g,data:l})=>{if(g){let M="";g.forEach(T=>M+=`\n ${T.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:M,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const x=structuredClone(c);x[c.findIndex(M=>M.id===E.id)]=l.updateVoucher.voucher,this.store.dispatch((0,n.Mo)({vouchers:x}))}))))}updateVoucherStatus(E){return this.store.select(_.a).pipe((0,t.q)(1),(0,s.w)(c=>this._apollo.mutate({mutation:y,variables:{updateEntityStatusInput:E},errorPolicy:"all"}).pipe((0,r.b)(({errors:g})=>{if(g){let C="";g.forEach(M=>C+=`\n ${M.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:C,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(c);l[c.findIndex(C=>C.id===E.id)].active=E.active,this.store.dispatch((0,n.Mo)({vouchers:l}))}))))}removeVoucher(E){return this.store.select(_.a).pipe((0,t.q)(1),(0,s.w)(c=>this._apollo.mutate({mutation:P,variables:{removeVoucherId:E},errorPolicy:"all"}).pipe((0,r.b)(({errors:g})=>{if(g){let C="";g.forEach(M=>C+=`\n ${M.message}.`),this._snackBar.openFromComponent(d.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:C,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(c),x=c.findIndex(C=>C.id===E);l.splice(x,1),this.store.dispatch((0,n.Mo)({vouchers:l}))}))))}static#t=this.\u0275fac=function(c){return new(c||i)(b.LFG(m._M),b.LFG(A.ux),b.LFG(O.yh))};static#e=this.\u0275prov=b.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},68740:(L,f,e)=>{e.d(f,{c:()=>s});var t=e(19212);let s=(()=>{class r{transform(n){if(n)switch(n){case"quarterly":return"Trimestral";case"annually":return"Anual";default:return"Mensual"}return""}static#t=this.\u0275fac=function(_){return new(_||r)};static#e=this.\u0275pipe=t.Yjl({name:"subscriptionTitle",type:r,pure:!0,standalone:!0})}return r})()},34805:(L,f,e)=>{e.d(f,{El:()=>n,P7:()=>r,qf:()=>o});var t=e(84221);const s=_=>_.subscriptions,r=(0,t.P1)(s,_=>_.subscription),o=(0,t.P1)(s,_=>_.subscriptions),n=(0,t.P1)(s,_=>_.subscriptionCardsData)},84154:(L,f,e)=>{e.d(f,{p:()=>v});var t=e(78645),s=e(30617),r=e(41784),o=e(19212),n=e(64190),_=e(84221);function d(h,p){if(1&h){const a=o.EpF();o.TgZ(0,"fuse-card",18),o.NdJ("click",function(){const b=o.CHM(a).$implicit,A=o.oxw(2);return o.KtG(A.navigate(b.link))}),o.TgZ(1,"div",19)(2,"div",20),o._uU(3),o.qZA(),o.TgZ(4,"div",21),o._uU(5),o.qZA()()()}if(2&h){const a=p.$implicit;o.xp6(3),o.Oqu(a.title),o.xp6(2),o.Oqu(a.subtitle)}}function m(h,p){if(1&h){const a=o.EpF();o.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div")(4,"div",4)(5,"div",5)(6,"a",6),o.NdJ("click",function(){o.CHM(a);const y=o.oxw();return o.KtG(y.navigate("/dashboard"))}),o._uU(7,"Inicio"),o.qZA()(),o.TgZ(8,"div",5),o._UZ(9,"mat-icon",7),o.TgZ(10,"a",8),o._uU(11),o.qZA()()(),o.TgZ(12,"div",9)(13,"a",10),o._UZ(14,"mat-icon",7),o.TgZ(15,"span",11),o._uU(16,"Regresar"),o.qZA()()()(),o.TgZ(17,"div",12)(18,"div",13),o._uU(19),o.qZA()()()(),o.TgZ(20,"div",14)(21,"div",15)(22,"div",16)(23,"div",17),o.SjG(24,d,6,2,"fuse-card",22,o.x6l),o.qZA()()()()()}if(2&h){const a=o.oxw();o.xp6(9),o.Q6J("svgIcon","mat_solid:chevron_right"),o.xp6(2),o.Oqu(a.fuseNavigation.title),o.xp6(3),o.Q6J("svgIcon","mat_solid:chevron_left"),o.xp6(5),o.hij(" ",a.fuseNavigation.title," "),o.xp6(5),o.wJu(a.fuseNavigation.children)}}let v=(()=>{class h{constructor(a,P,y){this._changeDetectorRef=a,this._router=P,this.store=y,this._unsubscribeAll=new t.x}ngOnInit(){}navigate(a){this._router.navigateByUrl(a)}static#t=this.\u0275fac=function(P){return new(P||h)(o.Y36(o.sBO),o.Y36(n.F0),o.Y36(_.yh))};static#e=this.\u0275cmp=o.Xpm({type:h,selectors:[["ath-content-menu"]],standalone:!0,features:[o.jDz],decls:1,vars:1,consts:[["class","absolute inset-0 flex flex-col min-w-0 overflow-y-auto","cdkScrollable",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","py-3","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","cursor-pointer","text-primary-500","hover:underline",3,"click"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],["routerLink","/dashboard",1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"flex-auto","p-6","pt-0","sm:pt-0","sm:p-10"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full"],[1,"grid","grid-flow-row","grid-cols-1","mt-8","sm:grid-cols-2","lg:grid-cols-4","gap-y-12","sm:gap-x-4"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md",3,"click"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight"],[1,"text-md","text-secondary"],["class","flex items-center justify-between w-full p-6 cursor-pointer max-w-80 filter-info hover:shadow-md"]],template:function(P,y){1&P&&o.YNc(0,m,26,4,"div",0),2&P&&o.um2(0,y.fuseNavigation?0:-1)},dependencies:[s.Ps,s.Hw,r.y],encapsulation:2,changeDetection:0})}return h})()},3980:(L,f,e)=>{e.d(f,{aw:()=>o,bG:()=>t});var t=function(a){return a.pendiente="pendiente",a.parcial="parcial",a.pagada="pagada",a.cancelado="cancelado",a.fallido="fallido",a.expirado="expirado",a.devuelto="devuelto",a.dPendiente="devoluci\xf3n pendiente",a.dFallida="devoluci\xf3n fallida",a}(t||{}),o=function(a){return a.total="total",a.partial="partial",a}(o||{})},47452:(L,f,e)=>{e.d(f,{DK:()=>n,JM:()=>o,V_:()=>_,vr:()=>r});class r{constructor(m,v,h,p,a,P){this.productId=m,this.name=v,this.uom=h,this.price=p,this.quantity=a,this.depotId=P}}class o{constructor(m,v,h){this.assistanceId=m,this.price=v,this.quantity=h}}var n=function(d){return d.nueva="nueva",d.recibida="recibida",d.cobrada="cobrada",d.rechazada="rechazada",d.cancelada="cancelada",d.facturada="facturada",d.entregada="entregada",d}(n||{});class _{constructor(m,v,h,p){this.nueva=m,this.recibida=v,this.rechazada=h,this.cancelada=p}}},78896:(L,f,e)=>{e.d(f,{L:()=>r});var t=e(19212),s=e(66330);let r=(()=>{class o{constructor(_){this._ratesService=_}resolve(_,d){return this._ratesService.getRates()}static#t=this.\u0275fac=function(d){return new(d||o)(t.LFG(s.m))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},57222:(L,f,e)=>{e.d(f,{xs:()=>t});class t{constructor(){this.tags=[]}}}}]);