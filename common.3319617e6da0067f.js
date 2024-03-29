"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2076],{36646:(D,p,e)=>{e.d(p,{AZ:()=>n,FD:()=>s,iL:()=>o});var t=e(54438),r=e(72797);const n=(u,f)=>(0,t.WQX)(r.h).findAllCustomers(),o=(u,f)=>(0,t.WQX)(r.h).findAllActiveCustomers(),s=(u,f)=>{const M=u.params.customerId;return M&&"new"!==M?(0,t.WQX)(r.h).findCustomerById(M):{}}},72797:(D,p,e)=>{e.d(p,{h:()=>E});var t=e(84412),r=e(96354),n=e(88141),o=e(42409),s=e(98216),u=e(73512);const f=u.J1`
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
`,M=u.J1`
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
`,v=u.J1`
    query FindAllActiveCustomers {
        findAllActiveCustomers {
            id,
            name,
            merchantId,
        }
    }
`,x=u.J1`
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
`,C=u.J1`
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
`,i=u.J1`
    mutation UpdateCustomerStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCustomerStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,R=u.J1`
    mutation UpdateCustomerImage($imageProperty: String!, $updateEntityImageInput: UpdateEntityImageInput!) {
        updateCustomerImage(imageProperty: $imageProperty, updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,T=u.J1`
    mutation RemoveCustomer($customerId: String!) {
        removeCustomer(id: $customerId) {
            ok,
            message,
        }
    }
`,A=u.J1`
    query FindActiveCustomers($search: String!, $size: Int!) {
        findActiveCustomers(search: $search, size: $size) {
            id
            active
            name
            code
            credit
        }
    }
`;e(45312);var $=e(54438),I=e(21626),_=e(59640);let E=(()=>{class l{constructor(a,c,d){this._httpClient=a,this.apolloProvider=c,this.store=d,this._domains=new t.t(null),this._apollo=this.apolloProvider.use("BALANC")}get domains$(){return this._domains.asObservable()}createCustomer(a){return this._apollo.mutate({mutation:f,variables:{createCustomerInput:a},errorPolicy:"all"}).pipe((0,r.T)(({data:c})=>c?c.createCustomer:null),(0,n.M)(c=>{c&&(this.store.dispatch((0,o.ff)({customer:c.customer})),this.store.dispatch((0,o.hv)({customer:c.customer})))}))}findAllCustomers(a=0,c=10,d="name",b="asc",k=null,h=!1){return this._apollo.query({query:M,variables:{page:a,size:c,sort:d,order:b,search:k},errorPolicy:"all"}).pipe((0,r.T)(({data:P})=>P?P.findAllCustomers:null),(0,n.M)(P=>{P&&(this.store.dispatch(h?(0,o.Yi)({customers:P.customers}):(0,o.GM)({customers:P.customers})),this.store.dispatch((0,s.Bp)({pagination:P.pagination})))}))}findAllActiveCustomers(){return this._apollo.query({query:v,errorPolicy:"all"}).pipe((0,r.T)(({data:a})=>a?a.findAllActiveCustomers:null),(0,n.M)(a=>{a&&this.store.dispatch((0,o.GM)({customers:a}))}))}findActiveCustomers(a="",c=10){return this._apollo.query({query:A,variables:{search:a,size:c},errorPolicy:"all"}).pipe((0,r.T)(({data:d})=>d?d.findActiveCustomers:[]),(0,n.M)(d=>{d&&this.store.dispatch((0,o.GM)({customers:d}))}))}findCustomerById(a){return this._apollo.query({query:x,variables:{customerId:a},errorPolicy:"all"}).pipe((0,n.M)(({data:c})=>{this.store.dispatch((0,o.hv)({customer:c.findCustomerById.customer}))}))}updateCustomer(a){return this._apollo.mutate({mutation:C,variables:{updateCustomerInput:a},errorPolicy:"all"}).pipe((0,r.T)(({data:c})=>c?c.updateCustomer:null),(0,n.M)(c=>{c&&(this.store.dispatch((0,o.Gk)({customer:c.customer})),this.store.dispatch((0,o.hv)({customer:c.customer})))}))}updateCustomerStatus(a){return this._apollo.mutate({mutation:i,variables:{updateEntityStatusInput:a},errorPolicy:"all"}).pipe((0,n.M)(()=>{this.store.dispatch((0,o.uz)(a))}))}updateCustomerImage(a,c){return this._apollo.mutate({mutation:R,variables:{imageProperty:a,updateEntityImageInput:c},errorPolicy:"all"}).pipe((0,r.T)(({data:d})=>d?d.updateCustomerImage:null),(0,n.M)(d=>{d&&this.store.dispatch((0,o.pw)({...c,imageProperty:a}))}))}removeCustomer(a){return this._apollo.mutate({mutation:T,variables:{customerId:a},errorPolicy:"all"}).pipe((0,n.M)(()=>{this.store.dispatch((0,o.Be)({id:a}))}))}getDomains(){return this._httpClient.get("assets/data/domains.json").pipe((0,r.T)(a=>a.sort((c,d)=>c.name.toLowerCase()<d.name.toLowerCase()?-1:c.name.toLowerCase()>d.name.toLowerCase()?1:void 0)),(0,n.M)(a=>{this._domains.next(a)}))}getDomainFiltered(a){return this._httpClient.get("assets/data/domains.json").pipe((0,r.T)(c=>c.filter(d=>d.name===a)))}static#t=this.\u0275fac=function(c){return new(c||l)($.KVO(I.Qq),$.KVO(u.Ic),$.KVO(_.il))};static#e=this.\u0275prov=$.jDH({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},11781:(D,p,e)=>{e.d(p,{BF:()=>o,UA:()=>n});var t=e(59640);const r=s=>s.locations,n=(0,t.Mz)(r,s=>s.location),o=(0,t.Mz)(r,s=>s.locations)},51973:(D,p,e)=>{e.d(p,{a:()=>E});var t=e(54438),r=e(89417),n=e(75351),o=e(21413),s=e(56977),u=e(67398),f=e(46601),M=e(36596),v=e(94794),x=e(95416),C=e(88834),i=e(59042),R=e(32102);function T(l,g){1&l&&(t.j41(0,"h2",7),t.EFF(1," Agregar Marca "),t.k0s())}function A(l,g){1&l&&(t.j41(0,"h2",7),t.EFF(1," Editar Marca "),t.k0s())}function F(l,g){if(1&l&&(t.j41(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),t.EFF(6,"Nombre"),t.k0s(),t.j41(7,"span",14),t.EFF(8),t.k0s()()()()()()),2&l){const a=t.XpG();t.R7$(8),t.JRh(a.data.brand.name||"Sin nombre")}}function $(l,g){if(1&l&&(t.j41(0,"div",15)(1,"div",16)(2,"form",17)(3,"div",18)(4,"mat-form-field",19)(5,"mat-label"),t.EFF(6,"Nombre"),t.k0s(),t.nrm(7,"input",20),t.k0s()()()()()),2&l){const a=t.XpG();t.R7$(2),t.Y8G("formGroup",a.brandForm)("autocomplete","off"),t.R7$(5),t.Y8G("formControlName","name")("placeholder","Nombre del Marca")}}function I(l,g){if(1&l){const a=t.RV6();t.j41(0,"button",24),t.bIt("click",function(){t.eBV(a);const d=t.XpG(2);return t.Njj(d.updateBrand())}),t.EFF(1," Actualizar "),t.k0s()}if(2&l){const a=t.XpG(2);t.Y8G("color","primary")("disabled",a.brandForm.invalid)("matDialogClose","confirmed")}}function _(l,g){if(1&l){const a=t.RV6();t.j41(0,"button",24),t.bIt("click",function(){t.eBV(a);const d=t.XpG(2);return t.Njj(d.createBrand())}),t.EFF(1," Agregar "),t.k0s()}if(2&l){const a=t.XpG(2);t.Y8G("color","primary")("disabled",a.brandForm.invalid)("matDialogClose","confirmed")}}function U(l,g){if(1&l&&(t.j41(0,"div",21)(1,"button",22),t.EFF(2," Cancelar "),t.k0s(),t.DNE(3,I,2,3,"button",23)(4,_,2,3,"button",23),t.k0s()),2&l){const a=t.XpG();t.R7$(),t.Y8G("matDialogClose","cancelled"),t.R7$(2),t.vxM(3,"edit"===a.data.dialogMode?3:-1),t.R7$(),t.vxM(4,"add"===a.data.dialogMode?4:-1)}}let E=(()=>{class l{constructor(a){this.data=a,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this._unsubscribeAll=new o.B,this._brandsService=(0,t.WQX)(M.m),this._fuseConfirmationService=(0,t.WQX)(f.G),this._changeDetectorRef=(0,t.WQX)(t.gRc),this._formBuilder=(0,t.WQX)(r.ok),this._dialogRef=(0,t.WQX)(n.CP),this._snackBar=(0,t.WQX)(x.UG),this.dialogMode=a.dialogMode,this.brand=a.brand}ngOnInit(){this.brandForm=this._formBuilder.group({id:[null],name:[null,[r.k0.required,r.k0.minLength(3),r.k0.maxLength(255)]],description:[null,[r.k0.minLength(3),r.k0.maxLength(255)]],logo:[null]}),"edit"===this.dialogMode&&this.brandForm.patchValue(this.brand)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createBrand(){let a=this.brandForm.getRawValue();a=(0,u.A)(a,["id"]),this._fuseConfirmationService.open({title:"Crear Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(d=>{"confirmed"===d&&this._brandsService.createBrand(a).pipe((0,s.Q)(this._unsubscribeAll)).subscribe(({data:b})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:b.createBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateBrand(){const a=this.brandForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(d=>{"confirmed"===d&&this._brandsService.updateBrand(a).pipe((0,s.Q)(this._unsubscribeAll)).subscribe(({data:b})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:b.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()}),this._changeDetectorRef.markForCheck()})}fileChangeEvent(a){this.imageChangedEvent=a}imageCropped(a){this.croppedImage=a.base64}imageLoaded(a){}cropperReady(){}loadImageFailed(){}static#t=this.\u0275fac=function(c){return new(c||l)(t.rXU(n.Vh))};static#e=this.\u0275cmp=t.VBU({type:l,selectors:[["lists-brand-dialog"]],standalone:!0,features:[t.aNF],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"py-5"],[1,"w-full"],["matInput","","type","text","required","","maxlength","250",3,"formControlName","placeholder"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(c,d){1&c&&(t.j41(0,"div",0)(1,"div",1),t.DNE(2,T,2,0,"h2",2)(3,A,2,0,"h2",2),t.k0s(),t.j41(4,"div",3),t.DNE(5,F,9,1,"div",4)(6,$,8,4,"div",5),t.k0s(),t.DNE(7,U,5,3,"div",6),t.k0s()),2&c&&(t.R7$(2),t.vxM(2,"add"===d.data.dialogMode?2:-1),t.R7$(),t.vxM(3,"edit"===d.data.dialogMode?3:-1),t.R7$(2),t.vxM(5,"view"===d.data.dialogMode?5:-1),t.R7$(),t.vxM(6,6),t.R7$(),t.vxM(7,"view"!==d.data.dialogMode?7:-1))},dependencies:[C.Hl,C.$z,n.tx,R.RG,R.rl,R.nJ,i.fS,i.fg,r.X1,r.qT,r.me,r.BC,r.cb,r.YS,r.tU,r.j4,r.JD],encapsulation:2})}return l})()},57084:(D,p,e)=>{e.d(p,{m:()=>t});class t{}},86779:(D,p,e)=>{e.d(p,{I:()=>n,g:()=>o});var t=e(54438),r=e(30242);const n=(s,u)=>(0,t.WQX)(r.L).findAllPaymentGateways(),o=(s,u)=>(0,t.WQX)(r.L).findAllActivePaymentGateways()},70672:(D,p,e)=>{e.d(p,{Z:()=>t,h:()=>r});class t{}var r=function(n){return n.none="none",n.oauth="oauth",n.basic="basic",n}(r||{})},7561:(D,p,e)=>{e.d(p,{Q:()=>n});var t=e(54438),r=e(86952);const n=(o,s)=>(0,t.WQX)(r.v).getVouchers()},21781:(D,p,e)=>{e.d(p,{gQ:()=>o});var t=e(59640);const r=s=>s.vouchers,o=((0,t.Mz)(r,s=>s.voucher),(0,t.Mz)(r,s=>s.vouchers))},86952:(D,p,e)=>{e.d(p,{v:()=>I});var t=e(96697),r=e(25558),n=e(88141),o=e(98216),s=e(48392),u=e(21781),f=e(94794),M=e(73512);const v=M.J1`
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
`,x=M.J1`
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
`,C=M.J1`
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
`,i=M.J1`
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
`,R=M.J1`
    mutation RemoveVoucher($removeVoucherId: String!) {
        removeVoucher(id: $removeVoucherId) {
            ok
            message
        }
    }
`,T=M.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVoucherStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var A=e(54438),F=e(95416),$=e(59640);let I=(()=>{class _{constructor(E,l,g){this.apolloProvider=E,this._snackBar=l,this.store=g,this._apollo=this.apolloProvider.use("BALANC")}createVoucher(E){return this.store.select(u.gQ).pipe((0,t.s)(1),(0,r.n)(l=>this._apollo.mutate({mutation:C,variables:{createVoucherInput:E},errorPolicy:"all"}).pipe((0,n.M)(({errors:g,data:a})=>{if(g){let d="";g.forEach(b=>d+=`\n ${b.message}.`),this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const c=structuredClone(l);c.push(a.createVoucher.voucher),this.store.dispatch((0,s._6)({vouchers:c}))}))))}getVouchers(){return this._apollo.query({query:v,errorPolicy:"all"}).pipe((0,n.M)(({errors:E,data:l})=>{if(E){let g="";E.forEach(a=>g+=`\n ${a.message}.`),this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:g,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,s._6)({vouchers:l.findAllVouchers.vouchers})),this.store.dispatch((0,o.Bp)({pagination:l.findAllVouchers.pagination}))}))}getVoucherById(E){return this._apollo.query({query:x,variables:{findVoucherByIdId:E},errorPolicy:"all"}).pipe((0,n.M)(({errors:l,data:g})=>{if(l){let a="";l.forEach(c=>a+=`\n ${c.message}.`),this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,s.FN)({voucher:g.findOneVoucherById.voucher}))}))}updateVoucher(E){return this.store.select(u.gQ).pipe((0,t.s)(1),(0,r.n)(l=>this._apollo.mutate({mutation:i,variables:{updateVoucherInput:E},errorPolicy:"all"}).pipe((0,n.M)(({errors:g,data:a})=>{if(g){let b="";g.forEach(k=>b+=`\n ${k.message}.`),this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:b,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const c=structuredClone(l);c[l.findIndex(b=>b.id===E.id)]=a.updateVoucher.voucher,this.store.dispatch((0,s._6)({vouchers:c}))}))))}updateVoucherStatus(E){return this.store.select(u.gQ).pipe((0,t.s)(1),(0,r.n)(l=>this._apollo.mutate({mutation:T,variables:{updateEntityStatusInput:E},errorPolicy:"all"}).pipe((0,n.M)(({errors:g})=>{if(g){let d="";g.forEach(b=>d+=`\n ${b.message}.`),this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=structuredClone(l);a[l.findIndex(d=>d.id===E.id)].active=E.active,this.store.dispatch((0,s._6)({vouchers:a}))}))))}removeVoucher(E){return this.store.select(u.gQ).pipe((0,t.s)(1),(0,r.n)(l=>this._apollo.mutate({mutation:R,variables:{removeVoucherId:E},errorPolicy:"all"}).pipe((0,n.M)(({errors:g})=>{if(g){let d="";g.forEach(b=>d+=`\n ${b.message}.`),this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=structuredClone(l),c=l.findIndex(d=>d.id===E);a.splice(c,1),this.store.dispatch((0,s._6)({vouchers:a}))}))))}static#t=this.\u0275fac=function(l){return new(l||_)(A.KVO(M.Ic),A.KVO(F.UG),A.KVO($.il))};static#e=this.\u0275prov=A.jDH({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},72824:(D,p,e)=>{e.d(p,{g:()=>r});var t=e(54438);let r=(()=>{class n{transform(s){if(s)switch(s){case"quarterly":return"Trimestral";case"annually":return"Anual";default:return"Mensual"}return""}static#t=this.\u0275fac=function(u){return new(u||n)};static#e=this.\u0275pipe=t.EJ8({name:"subscriptionTitle",type:n,pure:!0,standalone:!0})}return n})()},34343:(D,p,e)=>{e.d(p,{Er:()=>s,PL:()=>o,sB:()=>n});var t=e(59640);const r=u=>u.subscriptions,n=(0,t.Mz)(r,u=>u.subscription),o=(0,t.Mz)(r,u=>u.subscriptions),s=(0,t.Mz)(r,u=>u.subscriptionCardsData)},10729:(D,p,e)=>{e.d(p,{k:()=>v});var t=e(21413),r=e(99213),n=e(31849),o=e(54438),s=e(51188),u=e(59640);function f(x,C){if(1&x){const i=o.RV6();o.j41(0,"fuse-card",18),o.bIt("click",function(){const A=o.eBV(i).$implicit,F=o.XpG(2);return o.Njj(F.navigate(A.link))}),o.j41(1,"div",19)(2,"div",20),o.EFF(3),o.k0s(),o.j41(4,"div",21),o.EFF(5),o.k0s()()()}if(2&x){const i=C.$implicit;o.R7$(3),o.JRh(i.title),o.R7$(2),o.JRh(i.subtitle)}}function M(x,C){if(1&x){const i=o.RV6();o.j41(0,"div",1)(1,"div",2)(2,"div",3)(3,"div")(4,"div",4)(5,"div",5)(6,"a",6),o.bIt("click",function(){o.eBV(i);const T=o.XpG();return o.Njj(T.navigate("/dashboard"))}),o.EFF(7,"Inicio"),o.k0s()(),o.j41(8,"div",5),o.nrm(9,"mat-icon",7),o.j41(10,"a",8),o.EFF(11),o.k0s()()(),o.j41(12,"div",9)(13,"a",10),o.nrm(14,"mat-icon",7),o.j41(15,"span",11),o.EFF(16,"Regresar"),o.k0s()()()(),o.j41(17,"div",12)(18,"div",13),o.EFF(19),o.k0s()()()(),o.j41(20,"div",14)(21,"div",15)(22,"div",16)(23,"div",17),o.Z7z(24,f,6,2,"fuse-card",22,o.fX1),o.k0s()()()()()}if(2&x){const i=o.XpG();o.R7$(9),o.Y8G("svgIcon","mat_solid:chevron_right"),o.R7$(2),o.JRh(i.fuseNavigation.title),o.R7$(3),o.Y8G("svgIcon","mat_solid:chevron_left"),o.R7$(5),o.SpI(" ",i.fuseNavigation.title," "),o.R7$(5),o.Dyx(i.fuseNavigation.children)}}let v=(()=>{class x{constructor(i,R,T){this._changeDetectorRef=i,this._router=R,this.store=T,this._unsubscribeAll=new t.B}ngOnInit(){}navigate(i){this._router.navigateByUrl(i)}static#t=this.\u0275fac=function(R){return new(R||x)(o.rXU(o.gRc),o.rXU(s.Ix),o.rXU(u.il))};static#e=this.\u0275cmp=o.VBU({type:x,selectors:[["ath-content-menu"]],standalone:!0,features:[o.aNF],decls:1,vars:1,consts:[["class","absolute inset-0 flex flex-col min-w-0 overflow-y-auto","cdkScrollable",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","py-3","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","cursor-pointer","text-primary-500","hover:underline",3,"click"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],["routerLink","/dashboard",1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"flex-auto","p-6","pt-0","sm:pt-0","sm:p-10"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full"],[1,"grid","grid-flow-row","grid-cols-1","mt-8","sm:grid-cols-2","lg:grid-cols-4","gap-y-12","sm:gap-x-4"],[1,"flex","items-center","justify-between","w-full","p-6","cursor-pointer","max-w-80","filter-info","hover:shadow-md",3,"click"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight"],[1,"text-md","text-secondary"],["class","flex items-center justify-between w-full p-6 cursor-pointer max-w-80 filter-info hover:shadow-md"]],template:function(R,T){1&R&&o.DNE(0,M,26,4,"div",0),2&R&&o.vxM(0,T.fuseNavigation?0:-1)},dependencies:[r.m_,r.An,n.$],encapsulation:2,changeDetection:0})}return x})()},46812:(D,p,e)=>{e.d(p,{H_:()=>o,dX:()=>t});var t=function(i){return i.pendiente="pendiente",i.parcial="parcial",i.pagada="pagada",i.cancelado="cancelado",i.fallido="fallido",i.expirado="expirado",i.devuelto="devuelto",i.dPendiente="devoluci\xf3n pendiente",i.dFallida="devoluci\xf3n fallida",i}(t||{}),o=function(i){return i.total="total",i.partial="partial",i}(o||{})},41791:(D,p,e)=>{e.d(p,{Nh:()=>o,oy:()=>n});var t=e(59640);const r=f=>f.gModules,n=(0,t.Mz)(r,f=>f.module),o=(0,t.Mz)(r,f=>f.modules);(0,t.Mz)(r,f=>({})),(0,t.Mz)(r,f=>({}))},71411:(D,p,e)=>{e.d(p,{Q:()=>n});var t=e(54438),r=e(25910);let n=(()=>{class o{constructor(u){this._ratesService=u}resolve(u,f){return this._ratesService.getRates()}static#t=this.\u0275fac=function(f){return new(f||o)(t.KVO(r.f))};static#e=this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},72831:(D,p,e)=>{e.d(p,{Ad:()=>u,NH:()=>f,ed:()=>M});var t=e(18810),r=e(99437),n=e(54438),o=e(44312),s=e(51188);let u=(()=>{class v{constructor(C,i){this._rolesService=C,this._router=i}resolve(C,i){return this._rolesService.findAllRoles().pipe((0,r.W)(R=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(i){return new(i||v)(n.KVO(o.W),n.KVO(s.Ix))};static#e=this.\u0275prov=n.jDH({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})(),f=(()=>{class v{constructor(C,i){this._rolesService=C,this._router=i}resolve(C,i){const R=C.params.roleId;return"new"===R?null:this._rolesService.findRoleById(R).pipe((0,r.W)(T=>{const A=i.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(A),(0,t.$)(T)}))}static#t=this.\u0275fac=function(i){return new(i||v)(n.KVO(o.W),n.KVO(s.Ix))};static#e=this.\u0275prov=n.jDH({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})(),M=(()=>{class v{constructor(C,i){this._rolesService=C,this._router=i}resolve(C,i){return this._rolesService.findAllActiveRoles().pipe((0,r.W)(R=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(i){return new(i||v)(n.KVO(o.W),n.KVO(s.Ix))};static#e=this.\u0275prov=n.jDH({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},15887:(D,p,e)=>{e.d(p,{X7:()=>n,y3:()=>o});var t=e(59640);const r=s=>s.roles,n=(0,t.Mz)(r,s=>s.role),o=(0,t.Mz)(r,s=>s.roles)},44312:(D,p,e)=>{e.d(p,{W:()=>A});var t=e(54438),r=e(96354),n=e(88141),o=e(73512),s=e(59640),u=e(49238),f=e(98216);const M=o.J1`
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
`,v=o.J1`
    query FindAllActiveRoles {
        findAllActiveRoles {
            id
            name
            description
            isCoreRole
        }
    }
`,x=o.J1`
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
`,C=o.J1`
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
`,i=o.J1`
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
`,R=o.J1`
    mutation UpdateRoleStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRoleStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,T=o.J1`
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
`;let A=(()=>{class F{constructor(){this.apolloProvider=(0,t.WQX)(o.Ic),this.store=(0,t.WQX)(s.il),this._apollo=this.apolloProvider.use("BALANC")}createRole(I){return this._apollo.mutate({mutation:C,variables:{createRoleInput:I},errorPolicy:"all"}).pipe((0,r.T)(({data:_})=>_?_.createRole:null),(0,n.M)(_=>{_&&this.store.dispatch((0,u.rd)({role:_.role}))}))}findAllRoles(I=0,_=500,U="createdAt",E="asc",l=""){return this._apollo.query({query:M,errorPolicy:"all",variables:{page:I,size:_,sort:U,order:E,search:l}}).pipe((0,n.M)(({data:g})=>{g&&(this.store.dispatch((0,f.Bp)({pagination:g.paginatedRoles.pagination})),this.store.dispatch((0,u.S0)({roles:g.paginatedRoles.items})))}))}findAllActiveRoles(){return this._apollo.query({query:v,errorPolicy:"all"}).pipe((0,r.T)(({data:I})=>I?I.findAllActiveRoles:null),(0,n.M)(I=>{I&&this.store.dispatch((0,u.S0)({roles:I}))}))}findRoleById(I){return this._apollo.query({query:x,variables:{roleId:I},errorPolicy:"all"}).pipe((0,r.T)(({data:_})=>_?_.findRoleById:null),(0,n.M)(_=>{_&&this.store.dispatch((0,u.L4)({role:_.role}))}))}updateRole(I){return this._apollo.mutate({mutation:i,variables:{updateRoleInput:I},errorPolicy:"all"}).pipe((0,r.T)(({data:_})=>_?_.updateRole:null),(0,n.M)(_=>{_&&this.store.dispatch((0,u.zD)({role:_.role}))}))}updateRoleStatus(I){return this._apollo.mutate({mutation:R,variables:{updateEntityStatusInput:I},errorPolicy:"all"}).pipe((0,r.T)(({data:_})=>_?_.updateRoleStatus:null),(0,n.M)(_=>{_&&this.store.dispatch((0,u.yp)(I))}))}removeRole(I,_=0,U=500,E="name",l="desc",g=null){return this._apollo.mutate({mutation:T,variables:{removeRoleById:I,page:_,size:U,sort:E,order:l,search:g},errorPolicy:"all"}).pipe((0,n.M)(({data:a})=>{a&&(this.store.dispatch((0,f.Bp)({pagination:a.paginatedRemoveRole.pagination})),this.store.dispatch((0,u.S0)({roles:a.paginatedRemoveRole.items})))}))}static#t=this.\u0275fac=function(_){return new(_||F)};static#e=this.\u0275prov=t.jDH({token:F,factory:F.\u0275fac,providedIn:"root"})}return F})()},52002:(D,p,e)=>{e.d(p,{Yt:()=>t});class t{constructor(){this.tags=[]}}},78357:(D,p,e)=>{e.d(p,{i:()=>k});var t=e(54438),r=e(89417),n=e(59115),o=e(99213),s=e(88834),u=e(21413),f=e(56977),M=e(53328),v=e(82765),x=e(60177),C=e(25084),i=e(32102),R=e(59042),T=e(82798),A=e(60850),F=e(86600);const $=["bt"];function I(h,P){if(1&h&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"uppercase"),t.k0s()),2&h){const m=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,m.get("name").value))}}function _(h,P){if(1&h&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()),2&h){const m=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,m.get("name").value))}}function U(h,P){if(1&h&&(t.j41(0,"div",14)(1,"mat-checkbox",15),t.DNE(2,I,3,3,"span")(3,_,3,3,"span"),t.k0s()()),2&h){const m=P.$implicit,y=t.XpG(2);t.R7$(),t.Y8G("formControl",m.get("checked")),t.R7$(),t.vxM(2,y.useUpperCase?2:-1),t.R7$(),t.vxM(3,y.useUpperCase?-1:3)}}function E(h,P){if(1&h&&(t.j41(0,"div",13),t.Z7z(1,U,4,3,"div",16,t.fX1),t.k0s()),2&h){const m=t.XpG();t.R7$(),t.Dyx(m.formArray.controls)}}function l(h,P){if(1&h&&(t.j41(0,"mat-form-field",17),t.nrm(1,"input",18)(2,"mat-datepicker-toggle",19)(3,"mat-datepicker",null,20),t.k0s()),2&h){const m=t.sdS(4),y=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",m)("formControl",y.dateControl)("max",y.maxDate),t.R7$(),t.Y8G("for",m)}}function g(h,P){if(1&h){const m=t.RV6();t.j41(0,"mat-option",26),t.bIt("click",function(){const B=t.eBV(m).$implicit,S=t.XpG(2);return t.Njj(S.selectEntity(B))}),t.EFF(1),t.k0s()}if(2&h){const m=P.$implicit;t.Y8G("value",m.name),t.R7$(),t.SpI(" ",m.name," ")}}function a(h,P){if(1&h&&(t.j41(0,"mat-form-field",21),t.nrm(1,"mat-icon",22)(2,"input",23),t.j41(3,"mat-autocomplete",24,25),t.Z7z(5,g,2,2,"mat-option",27,t.fX1),t.nI1(7,"async"),t.k0s()()),2&h){const m=t.sdS(4),y=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",y.searchEntityControl)("matAutocomplete",m)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,y.entitiesFiltered))}}function c(h,P){if(1&h&&(t.j41(0,"mat-form-field",17),t.nrm(1,"input",18)(2,"mat-datepicker-toggle",19)(3,"mat-datepicker",null,20),t.k0s()),2&h){const m=t.sdS(4),y=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("matDatepicker",m)("formControl",y.dateControl)("max",y.maxDate),t.R7$(),t.Y8G("for",m)}}function d(h,P){if(1&h){const m=t.RV6();t.j41(0,"mat-option",26),t.bIt("click",function(){const B=t.eBV(m).$implicit,S=t.XpG(2);return t.Njj(S.selectEntity(B))}),t.EFF(1),t.k0s()}if(2&h){const m=P.$implicit;t.Y8G("value",m.name),t.R7$(),t.SpI(" ",m.name," ")}}function b(h,P){if(1&h&&(t.j41(0,"mat-form-field",21),t.nrm(1,"mat-icon",22)(2,"input",23),t.j41(3,"mat-autocomplete",24,25),t.Z7z(5,d,2,2,"mat-option",27,t.fX1),t.nI1(7,"async"),t.k0s()()),2&h){const m=t.sdS(4),y=t.XpG();t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(),t.Y8G("formControl",y.searchEntityControl)("matAutocomplete",m)("placeholder","Buscar..."),t.R7$(3),t.Dyx(t.bMT(7,5,y.entitiesFiltered))}}let k=(()=>{class h{constructor(){this.useUpperCase=!1,this.dataChange=new t.bkB,this.entityPropertyName="name",this.data=[],this.maxDate=new Date,this.dateControl=new r.MJ({disabled:!0}),this.formArray=new r.Yp([]),this._unsubscribeAll=new u.B,this._formBuilder=(0,t.WQX)(r.ok),this._changeDetectorRef=(0,t.WQX)(t.gRc)}get hasFilter(){return!M.H.IsNullOrEmpty(this.selectedFilter)}ngOnInit(){this.initializeFormArray(),this.dateControl.valueChanges.pipe((0,f.Q)(this._unsubscribeAll)).subscribe(m=>{this.dataChange.next(m),this.selectedFilter=m,this.menu.closeMenu()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}clearFilter(){switch(this.filterType){case"filterEntity":this.searchEntityControl.setValue(""),this.dataChange.next(null),this.selectedFilter=null;break;case"date":this.dateControl.setValue(null);break;case"multiSelect":case"multiSelectEntity":this.clearFormArray()}this.menu.closeMenu()}closeMenu(){this.menu.closeMenu()}selectEntity(m){this.dataChange.next(m),this.selectedFilter=m,this.menu.closeMenu()}initializeFormArray(){switch(this.filterType){case"multiSelect":this.formArray=this._formBuilder.array(this.data.map(m=>this._formBuilder.group({name:[m],checked:[!1]})));break;case"multiSelectEntity":this.formArray=this._formBuilder.array(this.data.map(m=>this._formBuilder.group({id:[m.id],name:[m[this.entityPropertyName]],checked:[!1]})))}this._changeDetectorRef.markForCheck(),this.formArraySubscription=this.formArray.valueChanges.pipe((0,f.Q)(this._unsubscribeAll)).subscribe(m=>{let y=[];switch(this.filterType){case"multiSelect":y=m.filter(O=>O.checked).map(O=>O.name);break;case"multiSelectEntity":for(const O of m.filter(B=>B.checked)){const B=this.data.find(S=>S.id===O.id);y.push(B)}}this.dataChange.next(y),this.selectedFilter=y})}clearFormArray(){this.formArraySubscription.unsubscribe(),this.selectedFilter=[],this.dataChange.next([]),this.initializeFormArray()}static#t=this.\u0275fac=function(y){return new(y||h)};static#e=this.\u0275cmp=t.VBU({type:h,selectors:[["table-filter"]],viewQuery:function(y,O){if(1&y&&t.GBs($,7),2&y){let B;t.mGM(B=t.lsd())&&(O.menu=B.first)}},inputs:{filterType:"filterType",useUpperCase:"useUpperCase",entityPropertyName:"entityPropertyName",data:"data",entitiesFiltered:"entitiesFiltered",searchEntityControl:"searchEntityControl"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.aNF],decls:19,vars:6,consts:[["mat-icon-button","","matTooltip","",1,"w-6","h-6","min-h-6","min-w-6",3,"color","matMenuTriggerFor"],["bt","matMenuTrigger"],[1,"icon-size-4",3,"svgIcon"],["listStatusMenu","matMenu"],[3,"click"],["class","w-full px-4 py-4"],["class","w-full px-4 pt-4 pb-6 fuse-mat-dense fuse-mat-rounded","appearance","fill",3,"subscriptSizing"],["class","w-full px-4 pt-4 pb-6 fuse-mat-dense mat-fuse-de fuse-mat-rounded max-w-64 min-w-64","appearance","fill",3,"subscriptSizing"],[1,"flex","justify-end","w-full","p-2","pb-0","border-t-2"],["mat-flat-button","",3,"click"],["mat-button","","color","warn",3,"click"],["dateEntity",""],["SearchEntity",""],[1,"w-full","px-4","py-4"],[1,""],["color","primary",3,"formControl"],["class",""],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","placeholder","Fecha",3,"matDatepicker","formControl","max"],["matIconSuffix","",3,"for"],["entityDate",""],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","mat-fuse-de","fuse-mat-rounded","max-w-64","min-w-64",3,"subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],["entitiesAutocomplete","matAutocomplete"],[3,"value","click"],[3,"value"]],template:function(y,O){if(1&y&&(t.j41(0,"div")(1,"button",0,1),t.nrm(3,"mat-icon",2),t.k0s(),t.j41(4,"mat-menu",null,3)(6,"div",4),t.bIt("click",function(S){return S.stopPropagation()}),t.DNE(7,E,3,0,"div",5)(8,l,5,5,"mat-form-field",6)(9,a,8,7,"mat-form-field",7),t.j41(10,"div",8)(11,"button",9),t.bIt("click",function(){return O.closeMenu()}),t.EFF(12,"Cerrar"),t.k0s(),t.j41(13,"button",10),t.bIt("click",function(){return O.clearFilter()}),t.EFF(14,"Limpiar"),t.k0s()()()()(),t.DNE(15,c,5,5,"ng-template",null,11,t.C5r)(17,b,8,7,"ng-template",null,12,t.C5r)),2&y){const B=t.sdS(5);t.R7$(),t.Y8G("color",O.hasFilter?"primary":"default")("matMenuTriggerFor",B),t.R7$(2),t.Y8G("svgIcon","mat_solid:filter_list"),t.R7$(4),t.vxM(7,"multiSelect"===O.filterType||"multiSelectEntity"===O.filterType?7:-1),t.R7$(),t.vxM(8,"date"===O.filterType?8:-1),t.R7$(),t.vxM(9,"filterEntity"===O.filterType?9:-1)}},dependencies:[x.Jj,s.Hl,s.$z,s.iY,o.m_,o.An,n.Cn,n.kk,n.Cp,v.g7,v.So,x.Pc,x.PV,C.X6,C.Vh,C.bZ,C.bU,i.RG,i.rl,i.JW,i.yw,R.fS,R.fg,r.X1,r.me,r.BC,r.l_,A.jL,A.$3,F.wT,A.pN,T.Ve],encapsulation:2,changeDetection:0})}return h})()}}]);