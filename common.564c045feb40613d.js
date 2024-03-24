"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8592],{86006:(b,_,o)=>{o.d(_,{GO:()=>l,Q7:()=>u,lV:()=>e});var t=o(19212),r=o(76459);const l=(m,C)=>(0,t.f3M)(r.v).findAllCustomers(),e=(m,C)=>(0,t.f3M)(r.v).findAllActiveCustomers(),u=(m,C)=>{const h=m.params.customerId;return(0,t.f3M)(r.v).findCustomerById(h)}},76459:(b,_,o)=>{o.d(_,{v:()=>x});var t=o(65619),r=o(37398),l=o(99397),e=o(33686),u=o(97214),m=o(50967);const C=m.Ps`
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
`,h=m.Ps`
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
`,O=m.Ps`
    query FindAllActiveCustomers {
        findAllActiveCustomers {
            id,
            name,
            merchantId,
        }
    }
`,f=m.Ps`
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
`,E=m.Ps`
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
`,n=m.Ps`
    mutation UpdateCustomerStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCustomerStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,A=m.Ps`
    mutation UpdateCustomerImage($imageProperty: String!, $updateEntityImageInput: UpdateEntityImageInput!) {
        updateCustomerImage(imageProperty: $imageProperty, updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,M=m.Ps`
    mutation RemoveCustomer($customerId: String!) {
        removeCustomer(id: $customerId) {
            ok,
            message,
        }
    }
`,D=m.Ps`
    query FindActiveCustomers($search: String!, $size: Int!) {
        findActiveCustomers(search: $search, size: $size) {
            id
            active
            name
            code
            credit
        }
    }
`;o(20553);var U=o(19212),R=o(69862),F=o(84221);let x=(()=>{class c{constructor(a,i,s){this._httpClient=a,this.apolloProvider=i,this.store=s,this._domains=new t.X(null),this._apollo=this.apolloProvider.use("BALANC")}get domains$(){return this._domains.asObservable()}createCustomer(a){return this._apollo.mutate({mutation:C,variables:{createCustomerInput:a},errorPolicy:"all"}).pipe((0,r.U)(({data:i})=>i?i.createCustomer:null),(0,l.b)(i=>{i&&(this.store.dispatch((0,e.wK)({customer:i.customer})),this.store.dispatch((0,e.Xg)({customer:i.customer})))}))}findAllCustomers(a=0,i=10,s="name",y="asc",L=null,p=!1){return this._apollo.query({query:h,variables:{page:a,size:i,sort:s,order:y,search:L},errorPolicy:"all"}).pipe((0,r.U)(({data:T})=>T?T.findAllCustomers:null),(0,l.b)(T=>{T&&(this.store.dispatch(p?(0,e.AT)({customers:T.customers}):(0,e.Pb)({customers:T.customers})),this.store.dispatch((0,u.Jr)({pagination:T.pagination})))}))}findAllActiveCustomers(){return this._apollo.query({query:O,errorPolicy:"all"}).pipe((0,r.U)(({data:a})=>a?a.findAllActiveCustomers:null),(0,l.b)(a=>{a&&this.store.dispatch((0,e.Pb)({customers:a}))}))}findActiveCustomers(a="",i=10){return this._apollo.query({query:D,variables:{search:a,size:i},errorPolicy:"all"}).pipe((0,r.U)(({data:s})=>s?s.findActiveCustomers:[]),(0,l.b)(s=>{s&&this.store.dispatch((0,e.Pb)({customers:s}))}))}findCustomerById(a){return this._apollo.query({query:f,variables:{customerId:a},errorPolicy:"all"}).pipe((0,l.b)(({data:i})=>{this.store.dispatch((0,e.Xg)({customer:i.findCustomerById.customer}))}))}updateCustomer(a){return this._apollo.mutate({mutation:E,variables:{updateCustomerInput:a},errorPolicy:"all"}).pipe((0,r.U)(({data:i})=>i?i.updateCustomer:null),(0,l.b)(i=>{i&&(this.store.dispatch((0,e.uG)({customer:i.customer})),this.store.dispatch((0,e.Xg)({customer:i.customer})))}))}updateCustomerStatus(a){return this._apollo.mutate({mutation:n,variables:{updateEntityStatusInput:a},errorPolicy:"all"}).pipe((0,l.b)(()=>{this.store.dispatch((0,e.gm)(a))}))}updateCustomerImage(a,i){return this._apollo.mutate({mutation:A,variables:{imageProperty:a,updateEntityImageInput:i},errorPolicy:"all"}).pipe((0,r.U)(({data:s})=>s?s.updateCustomerImage:null),(0,l.b)(s=>{s&&this.store.dispatch((0,e.Pl)({...i,imageProperty:a}))}))}removeCustomer(a){return this._apollo.mutate({mutation:M,variables:{customerId:a},errorPolicy:"all"}).pipe((0,l.b)(()=>{this.store.dispatch((0,e.PX)({id:a}))}))}getDomains(){return this._httpClient.get("assets/data/domains.json").pipe((0,r.U)(a=>a.sort((i,s)=>i.name.toLowerCase()<s.name.toLowerCase()?-1:i.name.toLowerCase()>s.name.toLowerCase()?1:void 0)),(0,l.b)(a=>{this._domains.next(a)}))}getDomainFiltered(a){return this._httpClient.get("assets/data/domains.json").pipe((0,r.U)(i=>i.filter(s=>s.name===a)))}static#t=this.\u0275fac=function(i){return new(i||c)(U.LFG(R.eN),U.LFG(m._M),U.LFG(F.yh))};static#e=this.\u0275prov=U.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},84384:(b,_,o)=>{o.d(_,{FD:()=>l,Yu:()=>e});var t=o(84221);const r=u=>u.locations,l=(0,t.P1)(r,u=>u.location),e=(0,t.P1)(r,u=>u.locations)},9573:(b,_,o)=>{o.d(_,{C:()=>x});var t=o(19212),r=o(56223),l=o(17700),e=o(78645),u=o(59773),m=o(55497),C=o(56278),h=o(47641),O=o(42090),f=o(32296),E=o(24516),n=o(64170),A=o(22939);function M(c,v){1&c&&(t.TgZ(0,"h2",7),t._uU(1," Agregar Marca "),t.qZA())}function D(c,v){1&c&&(t.TgZ(0,"h2",7),t._uU(1," Editar Marca "),t.qZA())}function B(c,v){if(1&c&&(t.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"span",14),t._uU(8),t.qZA()()()()()()),2&c){const a=t.oxw();t.xp6(8),t.Oqu(a.data.brand.name||"Sin nombre")}}function U(c,v){if(1&c&&(t.TgZ(0,"div",15)(1,"div",16)(2,"form",17)(3,"div",18)(4,"mat-form-field",19)(5,"mat-label"),t._uU(6,"Nombre"),t.qZA(),t._UZ(7,"input",20),t.qZA()()()()()),2&c){const a=t.oxw();t.xp6(2),t.Q6J("formGroup",a.brandForm)("autocomplete","off"),t.xp6(5),t.Q6J("formControlName","name")("placeholder","Nombre del Marca")}}function R(c,v){if(1&c){const a=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(a);const s=t.oxw(2);return t.KtG(s.updateBrand())}),t._uU(1," Actualizar "),t.qZA()}if(2&c){const a=t.oxw(2);t.Q6J("color","primary")("disabled",a.brandForm.invalid)("matDialogClose","confirmed")}}function F(c,v){if(1&c){const a=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(a);const s=t.oxw(2);return t.KtG(s.createBrand())}),t._uU(1," Agregar "),t.qZA()}if(2&c){const a=t.oxw(2);t.Q6J("color","primary")("disabled",a.brandForm.invalid)("matDialogClose","confirmed")}}function Z(c,v){if(1&c&&(t.TgZ(0,"div",21)(1,"button",22),t._uU(2," Cancelar "),t.qZA(),t.YNc(3,R,2,3,"button",23)(4,F,2,3,"button",23),t.qZA()),2&c){const a=t.oxw();t.xp6(),t.Q6J("matDialogClose","cancelled"),t.xp6(2),t.um2(3,"edit"===a.data.dialogMode?3:-1),t.xp6(),t.um2(4,"add"===a.data.dialogMode?4:-1)}}let x=(()=>{class c{constructor(a,i,s,y,L){this.data=a,this._changeDetectorRef=i,this._formBuilder=s,this._dialogRef=y,this._snackBar=L,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this._unsubscribeAll=new e.x,this._brandsService=(0,t.f3M)(h.G),this._fuseConfirmationService=(0,t.f3M)(C.R),this.dialogMode=a.dialogMode,this.brand=a.brand}ngOnInit(){this.brandForm=this._formBuilder.group({id:[null],name:[null,[r.kI.required,r.kI.minLength(3),r.kI.maxLength(255)]],description:[null,[r.kI.minLength(3),r.kI.maxLength(255)]],logo:[null]}),"edit"===this.dialogMode&&this.brandForm.patchValue(this.brand)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createBrand(){let a=this.brandForm.getRawValue();a=(0,m.Z)(a,["id"]),this._fuseConfirmationService.open({title:"Crear Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._brandsService.createBrand(a).pipe((0,u.R)(this._unsubscribeAll)).subscribe(({data:y})=>{this._snackBar.openFromComponent(O.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:y.createBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateBrand(){const a=this.brandForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._brandsService.updateBrand(a).pipe((0,u.R)(this._unsubscribeAll)).subscribe(({data:y})=>{this._snackBar.openFromComponent(O.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:y.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()}),this._changeDetectorRef.markForCheck()})}fileChangeEvent(a){this.imageChangedEvent=a}imageCropped(a){this.croppedImage=a.base64}imageLoaded(a){}cropperReady(){}loadImageFailed(){}static#t=this.\u0275fac=function(i){return new(i||c)(t.Y36(l.WI),t.Y36(t.sBO),t.Y36(r.qu),t.Y36(l.so),t.Y36(A.ux))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["lists-brand-dialog"]],standalone:!0,features:[t.jDz],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"py-5"],[1,"w-full"],["matInput","","type","text","required","","maxlength","250",3,"formControlName","placeholder"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,M,2,0,"h2",2)(3,D,2,0,"h2",2),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,B,9,1,"div",4)(6,U,8,4,"div",5),t.qZA(),t.YNc(7,Z,5,3,"div",6),t.qZA()),2&i&&(t.xp6(2),t.um2(2,"add"===s.data.dialogMode?2:-1),t.xp6(),t.um2(3,"edit"===s.data.dialogMode?3:-1),t.xp6(2),t.um2(5,"view"===s.data.dialogMode?5:-1),t.xp6(),t.um2(6,6),t.xp6(),t.um2(7,"view"!==s.data.dialogMode?7:-1))},dependencies:[f.ot,f.lW,l.ZT,n.lN,n.KE,n.hX,E.c,E.Nt,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.nD,r.sg,r.u],encapsulation:2})}return c})()},82824:(b,_,o)=>{o.d(_,{H:()=>t});class t{}},77201:(b,_,o)=>{o.d(_,{C:()=>m,a:()=>C});var t=o(26306),r=o(19212),l=o(88527),e=o(64190),u=o(84221);let m=(()=>{class h{constructor(f,E,n){this._paymentGatewaysService=f,this._router=E,this.store=n}resolve(f,E){return this._paymentGatewaysService.findAllPaymentGateways().pipe((0,t.K)(n=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(E){return new(E||h)(r.LFG(l.T),r.LFG(e.F0),r.LFG(u.yh))};static#e=this.\u0275prov=r.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})(),C=(()=>{class h{constructor(f,E,n){this._paymentGatewaysService=f,this._router=E,this.store=n}resolve(f,E){return this._paymentGatewaysService.findAllActivePaymentGateways().pipe((0,t.K)(n=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(E){return new(E||h)(r.LFG(l.T),r.LFG(e.F0),r.LFG(u.yh))};static#e=this.\u0275prov=r.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},14643:(b,_,o)=>{o.d(_,{G:()=>r,H:()=>t});class t{}var r=function(l){return l.none="none",l.oauth="oauth",l.basic="basic",l}(r||{})},24554:(b,_,o)=>{o.d(_,{p:()=>l});var t=o(19212),r=o(28490);let l=(()=>{class e{constructor(m){this._vouchersService=m}resolve(m,C){return this._vouchersService.getVouchers()}static#t=this.\u0275fac=function(C){return new(C||e)(t.LFG(r.S))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},23435:(b,_,o)=>{o.d(_,{a:()=>e});var t=o(84221);const r=u=>u.vouchers,e=((0,t.P1)(r,u=>u.voucher),(0,t.P1)(r,u=>u.vouchers))},28490:(b,_,o)=>{o.d(_,{S:()=>R});var t=o(48180),r=o(94664),l=o(99397),e=o(97214),u=o(79909),m=o(23435),C=o(42090),h=o(50967);const O=h.Ps`
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
`,f=h.Ps`
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
`,E=h.Ps`
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
`,n=h.Ps`
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
`,A=h.Ps`
    mutation RemoveVoucher($removeVoucherId: String!) {
        removeVoucher(id: $removeVoucherId) {
            ok
            message
        }
    }
`,M=h.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVoucherStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var D=o(19212),B=o(22939),U=o(84221);let R=(()=>{class F{constructor(x,c,v){this.apolloProvider=x,this._snackBar=c,this.store=v,this._apollo=this.apolloProvider.use("BALANC")}createVoucher(x){return this.store.select(m.a).pipe((0,t.q)(1),(0,r.w)(c=>this._apollo.mutate({mutation:E,variables:{createVoucherInput:x},errorPolicy:"all"}).pipe((0,l.b)(({errors:v,data:a})=>{if(v){let s="";v.forEach(y=>s+=`\n ${y.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=structuredClone(c);i.push(a.createVoucher.voucher),this.store.dispatch((0,u.Mo)({vouchers:i}))}))))}getVouchers(){return this._apollo.query({query:O,errorPolicy:"all"}).pipe((0,l.b)(({errors:x,data:c})=>{if(x){let v="";x.forEach(a=>v+=`\n ${a.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:v,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,u.Mo)({vouchers:c.findAllVouchers.vouchers})),this.store.dispatch((0,e.Jr)({pagination:c.findAllVouchers.pagination}))}))}getVoucherById(x){return this._apollo.query({query:f,variables:{findVoucherByIdId:x},errorPolicy:"all"}).pipe((0,l.b)(({errors:c,data:v})=>{if(c){let a="";c.forEach(i=>a+=`\n ${i.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,u.zC)({voucher:v.findOneVoucherById.voucher}))}))}updateVoucher(x){return this.store.select(m.a).pipe((0,t.q)(1),(0,r.w)(c=>this._apollo.mutate({mutation:n,variables:{updateVoucherInput:x},errorPolicy:"all"}).pipe((0,l.b)(({errors:v,data:a})=>{if(v){let y="";v.forEach(L=>y+=`\n ${L.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:y,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=structuredClone(c);i[c.findIndex(y=>y.id===x.id)]=a.updateVoucher.voucher,this.store.dispatch((0,u.Mo)({vouchers:i}))}))))}updateVoucherStatus(x){return this.store.select(m.a).pipe((0,t.q)(1),(0,r.w)(c=>this._apollo.mutate({mutation:M,variables:{updateEntityStatusInput:x},errorPolicy:"all"}).pipe((0,l.b)(({errors:v})=>{if(v){let s="";v.forEach(y=>s+=`\n ${y.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=structuredClone(c);a[c.findIndex(s=>s.id===x.id)].active=x.active,this.store.dispatch((0,u.Mo)({vouchers:a}))}))))}removeVoucher(x){return this.store.select(m.a).pipe((0,t.q)(1),(0,r.w)(c=>this._apollo.mutate({mutation:A,variables:{removeVoucherId:x},errorPolicy:"all"}).pipe((0,l.b)(({errors:v})=>{if(v){let s="";v.forEach(y=>s+=`\n ${y.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=structuredClone(c),i=c.findIndex(s=>s.id===x);a.splice(i,1),this.store.dispatch((0,u.Mo)({vouchers:a}))}))))}static#t=this.\u0275fac=function(c){return new(c||F)(D.LFG(h._M),D.LFG(B.ux),D.LFG(U.yh))};static#e=this.\u0275prov=D.Yz7({token:F,factory:F.\u0275fac,providedIn:"root"})}return F})()},68740:(b,_,o)=>{o.d(_,{c:()=>r});var t=o(19212);let r=(()=>{class l{transform(u){if(u)switch(u){case"quarterly":return"Trimestral";case"annually":return"Anual";default:return"Mensual"}return""}static#t=this.\u0275fac=function(m){return new(m||l)};static#e=this.\u0275pipe=t.Yjl({name:"subscriptionTitle",type:l,pure:!0,standalone:!0})}return l})()},34805:(b,_,o)=>{o.d(_,{El:()=>u,P7:()=>l,qf:()=>e});var t=o(84221);const r=m=>m.subscriptions,l=(0,t.P1)(r,m=>m.subscription),e=(0,t.P1)(r,m=>m.subscriptions),u=(0,t.P1)(r,m=>m.subscriptionCardsData)},84154:(b,_,o)=>{o.d(_,{p:()=>O});var t=o(78645),r=o(30617),l=o(41784),e=o(19212),u=o(64190),m=o(84221);function C(f,E){if(1&f){const n=e.EpF();e.TgZ(0,"fuse-card",18),e.NdJ("click",function(){const D=e.CHM(n).$implicit,B=e.oxw(2);return e.KtG(B.navigate(D.link))}),e.TgZ(1,"div",19)(2,"div",20),e._uU(3),e.qZA(),e.TgZ(4,"div",21),e._uU(5),e.qZA()()()}if(2&f){const n=E.$implicit;e.xp6(3),e.Oqu(n.title),e.xp6(2),e.Oqu(n.subtitle)}}function h(f,E){if(1&f){const n=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div")(4,"div",4)(5,"div",5)(6,"a",6),e.NdJ("click",function(){e.CHM(n);const M=e.oxw();return e.KtG(M.navigate("/dashboard"))}),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",5),e._UZ(9,"mat-icon",7),e.TgZ(10,"a",8),e._uU(11),e.qZA()()(),e.TgZ(12,"div",9)(13,"a",10),e._UZ(14,"mat-icon",7),e.TgZ(15,"span",11),e._uU(16,"Regresar"),e.qZA()()()(),e.TgZ(17,"div",12)(18,"div",13),e._uU(19),e.qZA()()()(),e.TgZ(20,"div",14)(21,"div",15)(22,"div",16)(23,"div",17),e.SjG(24,C,6,2,"fuse-card",22,e.x6l),e.qZA()()()()()}if(2&f){const n=e.oxw();e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(2),e.Oqu(n.fuseNavigation.title),e.xp6(3),e.Q6J("svgIcon","mat_solid:chevron_left"),e.xp6(5),e.hij(" ",n.fuseNavigation.title," "),e.xp6(5),e.wJu(n.fuseNavigation.children)}}let O=(()=>{class f{constructor(n,A,M){this._changeDetectorRef=n,this._router=A,this.store=M,this._unsubscribeAll=new t.x}ngOnInit(){}navigate(n){this._router.navigateByUrl(n)}static#t=this.\u0275fac=function(A){return new(A||f)(e.Y36(e.sBO),e.Y36(u.F0),e.Y36(m.yh))};static#e=this.\u0275cmp=e.Xpm({type:f,selectors:[["ath-content-menu"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","absolute inset-0 flex flex-col min-w-0 overflow-y-auto","cdkScrollable",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","py-3","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","cursor-pointer","text-primary-500","hover:underline",3,"click"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],["routerLink","/dashboard",1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"flex-auto","p-6","pt-0","sm:pt-0","sm:p-10"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full"],[1,"grid","grid-flow-row","grid-cols-1","mt-8","sm:grid-cols-2","lg:grid-cols-4","gap-y-12","sm:gap-x-4"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md",3,"click"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight"],[1,"text-md","text-secondary"],["class","flex items-center justify-between w-full p-6 cursor-pointer max-w-80 filter-info hover:shadow-md"]],template:function(A,M){1&A&&e.YNc(0,h,26,4,"div",0),2&A&&e.um2(0,M.fuseNavigation?0:-1)},dependencies:[r.Ps,r.Hw,l.y],encapsulation:2,changeDetection:0})}return f})()},3980:(b,_,o)=>{o.d(_,{aw:()=>e,bG:()=>t});var t=function(n){return n.pendiente="pendiente",n.parcial="parcial",n.pagada="pagada",n.cancelado="cancelado",n.fallido="fallido",n.expirado="expirado",n.devuelto="devuelto",n.dPendiente="devoluci\xf3n pendiente",n.dFallida="devoluci\xf3n fallida",n}(t||{}),e=function(n){return n.total="total",n.partial="partial",n}(e||{})},78896:(b,_,o)=>{o.d(_,{L:()=>l});var t=o(19212),r=o(66330);let l=(()=>{class e{constructor(m){this._ratesService=m}resolve(m,C){return this._ratesService.getRates()}static#t=this.\u0275fac=function(C){return new(C||e)(t.LFG(r.m))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},57222:(b,_,o)=>{o.d(_,{xs:()=>t});class t{constructor(){this.tags=[]}}},64610:(b,_,o)=>{o.d(_,{q:()=>L});var t=o(19212),r=o(56223),l=o(77988),e=o(30617),u=o(32296),m=o(78645),C=o(59773),h=o(55568),O=o(75986),f=o(96814),E=o(38034),n=o(64170),A=o(24516),M=o(98525),D=o(24630),B=o(23680);const U=["bt"];function R(p,T){if(1&p&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"uppercase"),t.qZA()),2&p){const d=t.oxw().$implicit;t.xp6(),t.Oqu(t.lcZ(2,1,d.get("name").value))}}function F(p,T){if(1&p&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&p){const d=t.oxw().$implicit;t.xp6(),t.Oqu(t.lcZ(2,1,d.get("name").value))}}function Z(p,T){if(1&p&&(t.TgZ(0,"div",14)(1,"mat-checkbox",15),t.YNc(2,R,3,3,"span")(3,F,3,3,"span"),t.qZA()()),2&p){const d=T.$implicit,g=t.oxw(2);t.xp6(),t.Q6J("formControl",d.get("checked")),t.xp6(),t.um2(2,g.useUpperCase?2:-1),t.xp6(),t.um2(3,g.useUpperCase?-1:3)}}function x(p,T){if(1&p&&(t.TgZ(0,"div",13),t.SjG(1,Z,4,3,"div",16,t.x6l),t.qZA()),2&p){const d=t.oxw();t.xp6(),t.wJu(d.formArray.controls)}}function c(p,T){if(1&p&&(t.TgZ(0,"mat-form-field",17),t._UZ(1,"input",18)(2,"mat-datepicker-toggle",19)(3,"mat-datepicker",null,20),t.qZA()),2&p){const d=t.MAs(4),g=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("matDatepicker",d)("formControl",g.dateControl)("max",g.maxDate),t.xp6(),t.Q6J("for",d)}}function v(p,T){if(1&p){const d=t.EpF();t.TgZ(0,"mat-option",26),t.NdJ("click",function(){const I=t.CHM(d).$implicit,S=t.oxw(2);return t.KtG(S.selectEntity(I))}),t._uU(1),t.qZA()}if(2&p){const d=T.$implicit;t.Q6J("value",d.name),t.xp6(),t.hij(" ",d.name," ")}}function a(p,T){if(1&p&&(t.TgZ(0,"mat-form-field",21),t._UZ(1,"mat-icon",22)(2,"input",23),t.TgZ(3,"mat-autocomplete",24,25),t.SjG(5,v,2,2,"mat-option",27,t.x6l),t.ALo(7,"async"),t.qZA()()),2&p){const d=t.MAs(4),g=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("svgIcon","mat_solid:search"),t.xp6(),t.Q6J("formControl",g.searchEntityControl)("matAutocomplete",d)("placeholder","Buscar..."),t.xp6(3),t.wJu(t.lcZ(7,5,g.entitiesFiltered))}}function i(p,T){if(1&p&&(t.TgZ(0,"mat-form-field",17),t._UZ(1,"input",18)(2,"mat-datepicker-toggle",19)(3,"mat-datepicker",null,20),t.qZA()),2&p){const d=t.MAs(4),g=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("matDatepicker",d)("formControl",g.dateControl)("max",g.maxDate),t.xp6(),t.Q6J("for",d)}}function s(p,T){if(1&p){const d=t.EpF();t.TgZ(0,"mat-option",26),t.NdJ("click",function(){const I=t.CHM(d).$implicit,S=t.oxw(2);return t.KtG(S.selectEntity(I))}),t._uU(1),t.qZA()}if(2&p){const d=T.$implicit;t.Q6J("value",d.name),t.xp6(),t.hij(" ",d.name," ")}}function y(p,T){if(1&p&&(t.TgZ(0,"mat-form-field",21),t._UZ(1,"mat-icon",22)(2,"input",23),t.TgZ(3,"mat-autocomplete",24,25),t.SjG(5,s,2,2,"mat-option",27,t.x6l),t.ALo(7,"async"),t.qZA()()),2&p){const d=t.MAs(4),g=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("svgIcon","mat_solid:search"),t.xp6(),t.Q6J("formControl",g.searchEntityControl)("matAutocomplete",d)("placeholder","Buscar..."),t.xp6(3),t.wJu(t.lcZ(7,5,g.entitiesFiltered))}}let L=(()=>{class p{constructor(){this.useUpperCase=!1,this.dataChange=new t.vpe,this.entityPropertyName="name",this.data=[],this.maxDate=new Date,this.dateControl=new r.NI({disabled:!0}),this.formArray=new r.Oe([]),this._unsubscribeAll=new m.x,this._formBuilder=(0,t.f3M)(r.qu),this._changeDetectorRef=(0,t.f3M)(t.sBO)}get hasFilter(){return!h.W.IsNullOrEmpty(this.selectedFilter)}ngOnInit(){this.initializeFormArray(),this.dateControl.valueChanges.pipe((0,C.R)(this._unsubscribeAll)).subscribe(d=>{this.dataChange.next(d),this.selectedFilter=d,this.menu.closeMenu()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}clearFilter(){switch(this.filterType){case"filterEntity":this.searchEntityControl.setValue(""),this.dataChange.next(null),this.selectedFilter=null;break;case"date":this.dateControl.setValue(null);break;case"multiSelect":case"multiSelectEntity":this.clearFormArray()}this.menu.closeMenu()}closeMenu(){this.menu.closeMenu()}selectEntity(d){this.dataChange.next(d),this.selectedFilter=d,this.menu.closeMenu()}initializeFormArray(){switch(this.filterType){case"multiSelect":this.formArray=this._formBuilder.array(this.data.map(d=>this._formBuilder.group({name:[d],checked:[!1]})));break;case"multiSelectEntity":this.formArray=this._formBuilder.array(this.data.map(d=>this._formBuilder.group({id:[d.id],name:[d[this.entityPropertyName]],checked:[!1]})))}this._changeDetectorRef.markForCheck(),this.formArraySubscription=this.formArray.valueChanges.pipe((0,C.R)(this._unsubscribeAll)).subscribe(d=>{let g=[];switch(this.filterType){case"multiSelect":g=d.filter(P=>P.checked).map(P=>P.name);break;case"multiSelectEntity":for(const P of d.filter(I=>I.checked)){const I=this.data.find(S=>S.id===P.id);g.push(I)}}this.dataChange.next(g),this.selectedFilter=g})}clearFormArray(){this.formArraySubscription.unsubscribe(),this.selectedFilter=[],this.dataChange.next([]),this.initializeFormArray()}static#t=this.\u0275fac=function(g){return new(g||p)};static#e=this.\u0275cmp=t.Xpm({type:p,selectors:[["table-filter"]],viewQuery:function(g,P){if(1&g&&t.Gf(U,7),2&g){let I;t.iGM(I=t.CRH())&&(P.menu=I.first)}},inputs:{filterType:"filterType",useUpperCase:"useUpperCase",entityPropertyName:"entityPropertyName",data:"data",entitiesFiltered:"entitiesFiltered",searchEntityControl:"searchEntityControl"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.jDz],decls:19,vars:6,consts:[["mat-icon-button","","matTooltip","",1,"w-6","h-6","min-h-6","min-w-6",3,"color","matMenuTriggerFor"],["bt","matMenuTrigger"],[1,"icon-size-4",3,"svgIcon"],["listStatusMenu","matMenu"],[3,"click"],["class","w-full px-4 py-4"],["class","w-full px-4 pt-4 pb-6 fuse-mat-dense fuse-mat-rounded","appearance","fill",3,"subscriptSizing"],["class","w-full px-4 pt-4 pb-6 fuse-mat-dense mat-fuse-de fuse-mat-rounded max-w-64 min-w-64","appearance","fill",3,"subscriptSizing"],[1,"flex","justify-end","w-full","p-2","pb-0","border-t-2"],["mat-flat-button","",3,"click"],["mat-button","","color","warn",3,"click"],["dateEntity",""],["SearchEntity",""],[1,"w-full","px-4","py-4"],[1,""],["color","primary",3,"formControl"],["class",""],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","placeholder","Fecha",3,"matDatepicker","formControl","max"],["matIconSuffix","",3,"for"],["entityDate",""],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","mat-fuse-de","fuse-mat-rounded","max-w-64","min-w-64",3,"subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],["entitiesAutocomplete","matAutocomplete"],[3,"value","click"],[3,"value"]],template:function(g,P){if(1&g&&(t.TgZ(0,"div")(1,"button",0,1),t._UZ(3,"mat-icon",2),t.qZA(),t.TgZ(4,"mat-menu",null,3)(6,"div",4),t.NdJ("click",function(S){return S.stopPropagation()}),t.YNc(7,x,3,0,"div",5)(8,c,5,5,"mat-form-field",6)(9,a,8,7,"mat-form-field",7),t.TgZ(10,"div",8)(11,"button",9),t.NdJ("click",function(){return P.closeMenu()}),t._uU(12,"Cerrar"),t.qZA(),t.TgZ(13,"button",10),t.NdJ("click",function(){return P.clearFilter()}),t._uU(14,"Limpiar"),t.qZA()()()()(),t.YNc(15,i,5,5,"ng-template",null,11,t.W1O)(17,y,8,7,"ng-template",null,12,t.W1O)),2&g){const I=t.MAs(5);t.xp6(),t.Q6J("color",P.hasFilter?"primary":"default")("matMenuTriggerFor",I),t.xp6(2),t.Q6J("svgIcon","mat_solid:filter_list"),t.xp6(4),t.um2(7,"multiSelect"===P.filterType||"multiSelectEntity"===P.filterType?7:-1),t.xp6(),t.um2(8,"date"===P.filterType?8:-1),t.xp6(),t.um2(9,"filterEntity"===P.filterType?9:-1)}},dependencies:[f.Ov,u.ot,u.lW,u.RK,e.Ps,e.Hw,l.Tx,l.VK,l.p6,O.p9,O.oG,f.gd,f.rS,E.FA,E.Mq,E.hl,E.nW,n.lN,n.KE,n.qo,n.R9,A.c,A.Nt,r.UX,r.Fj,r.JJ,r.oH,D.Bb,D.XC,B.ey,D.ZL,M.LD],encapsulation:2,changeDetection:0})}return p})()}}]);