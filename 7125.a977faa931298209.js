(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[7125],{68824:(q,B,p)=>{"use strict";p.d(B,{f:()=>d});var $=p(2578),R=p(62288),n=p(17705);const b="application/vnd.openxmlformats-officedocument.spreadsheet.sheet;charset=UTF-8",W="text/plain;charset=utf-8";let d=(()=>{class h{constructor(){}exportAsExcelFile(u,w,j=[[]],O=[]){const F=R.Wp.json_to_sheet(u);let f={fill:{fgColor:{rgb:"27086f"}},font:{color:{rgb:"FFFFFF"}}};j[0].length>0&&(R.Wp.sheet_add_aoa(F,j),j[0].forEach((g,S)=>{let y=R.Wp.encode_cell({c:S,r:0});F[y].s=f})),O.length>0&&(F["!cols"]=O);const v=R.M9({Sheets:{data:F},SheetNames:["data"]},{bookType:"xlsx",type:"array"});this._saveAsFile(v,w,".xlsx",b)}exportAsCsvFile(u,w){const O={Sheets:{data:R.Wp.json_to_sheet(u)},SheetNames:["data"]},F=R.M9(O,{bookType:"csv",type:"array"});this._saveAsFile(F,w,".csv",b)}exportAsFacFile(u,w,j,O){const F="Factura_"+u.no,f=`Numero=${u.no}\nMC=CUBAN PESO\nOM=${u.currency.namev}\nFecha=${Number(u.billDate)}\nEntidad=${u.customer.code}\nConcepto=${u.concept}\nComercial=${u.commercial.name} ${u.commercial.lastname1} ${u.commercial.lastname2}\nCtaBancoMC=${j}\nCtaBancoOM=${O}\nForma=${u.paymentMethod.name}\nOperacion=${u.operationType.name}\nObservacion=${u.obs}\nMA=\nCtoArancel=\nPorcientoAra=0\nTalon=001\nContrato=\nVtaCadena=0\nNomHecho=${w.fullname}\nCargoHecho=${w.title}\nCIHecho=\nNomJA=\nCIJA=\nNomTra=\nChapa=\nLicTra=\nCITra=\nNomCliente=${u.customer.name}\nCargoCliente=\nCICliente=${u.customer.nit}\n[Propiedades]\n\n[Detalle]\n${this._versatInvoiceGenerator(u.productsInBill)}\n\n[PieFirma]\n        `;this._saveAsFile(f,F,".fac",W)}exportAsJsonFile(u){encodeURIComponent(u),this._saveAsFile(u,"data.json",".json",W)}_saveAsFile(u,w,j,O){const F=new Blob([u],{type:O});$.saveAs(F,w+"_export_"+(new Date).getTime()+j)}_versatInvoiceGenerator(u){let w="";return u.forEach(j=>{w+=`0002|002|993449|${j.uom}|1111111|0|0|0|0|0|${j.price}||0|0\n`}),w}static#e=this.\u0275fac=function(w){return new(w||h)};static#t=this.\u0275prov=n.jDH({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},56808:(q,B,p)=>{"use strict";p.d(B,{hQ:()=>R,wQ:()=>n});var $=p(59640);const e=b=>b.customers,R=(0,$.Mz)(e,b=>b.customer),n=(0,$.Mz)(e,b=>b.customers)},34413:(q,B,p)=>{"use strict";p.d(B,{MI:()=>P,wf:()=>W,zA:()=>C});var $=p(17705),e=p(18810),R=p(99437),n=p(62590),b=p(51188);let W=(()=>{class I{constructor(d,h){this._employeesService=d,this._router=h}resolve(d,h){return this._employeesService.findAllEmployees().pipe((0,R.W)(_=>this._router.navigateByUrl("/desktop")))}static#e=this.\u0275fac=function(h){return new(h||I)($.KVO(n.r),$.KVO(b.Ix))};static#t=this.\u0275prov=$.jDH({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})(),C=(()=>{class I{constructor(d,h){this._employeesService=d,this._router=h}resolve(d,h){const _=d.params.employeeId;return"new"===_?null:this._employeesService.findEmployeeById(_).pipe((0,R.W)(u=>{const w=h.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(w),(0,e.$)(u)}))}static#e=this.\u0275fac=function(h){return new(h||I)($.KVO(n.r),$.KVO(b.Ix))};static#t=this.\u0275prov=$.jDH({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})();const P=(I,k)=>(0,$.WQX)(n.r).findActiveEmployees()},49098:(q,B,p)=>{"use strict";p.d(B,{O:()=>w});var $=p(88141),e=p(96354),R=p(24984),n=p(98216),b=p(53473);const W=b.J1`
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
`,C=b.J1`
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
`,P=b.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateLocationStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,I=b.J1`
    mutation RemoveLocation($removeLocationId: String!) {
        removeLocation(id: $removeLocationId) {
            ok
            message
        }
    }
`,k=b.J1`
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
`,d=b.J1`
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
`,h=b.J1`
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
`;var _=p(17705),u=p(59640);let w=(()=>{class j{constructor(F,f){this.apolloProvider=F,this.store=f,this._apollo=this.apolloProvider.use("BALANC")}createLocation(F){return this._apollo.mutate({mutation:W,variables:{createLocationInput:F},errorPolicy:"all"}).pipe((0,$.M)(({data:f})=>{f&&(this.store.dispatch((0,R.yJ)({location:f.createLocation.location})),this.store.dispatch((0,R.Og)({location:f.createLocation.location})))}))}getLocations(F=0,f=25,T="name",v="asc",g=""){return this._apollo.query({query:k,errorPolicy:"all",variables:{page:F,size:f,sort:T,order:v,search:g}}).pipe((0,$.M)(({data:S})=>{S&&(this.store.dispatch((0,n.Bp)({pagination:S.findAllLocations.pagination})),this.store.dispatch((0,R.xu)({locations:S.findAllLocations.locations})))}))}findActiveLocations(F="",f=25){return this._apollo.query({query:d,variables:{search:F,size:f},errorPolicy:"all"}).pipe((0,e.T)(({data:T})=>T?T.findActiveLocations:[]),(0,$.M)(T=>{T&&this.store.dispatch((0,R.xu)({locations:T}))}))}getLocationById(F){return this._apollo.query({query:h,variables:{findLocationByIdId:F},errorPolicy:"all"}).pipe((0,$.M)(({data:f})=>{f&&this.store.dispatch((0,R.Og)({location:f.findLocationById.location}))}))}updateLocation(F){return this._apollo.mutate({mutation:C,variables:{updateLocationInput:F},errorPolicy:"all"}).pipe((0,$.M)(({data:f})=>{f&&(this.store.dispatch((0,R.Nt)({location:f.updateLocation.location})),this.store.dispatch((0,R.Og)({location:f.updateLocation.location})))}))}updateLocationStatus(F){return this._apollo.mutate({mutation:P,variables:{updateEntityStatusInput:F},errorPolicy:"all"}).pipe((0,$.M)(({data:f})=>{f&&this.store.dispatch((0,R.jr)({id:F.id,active:F.active}))}))}removeLocation(F){return this._apollo.mutate({mutation:I,variables:{removeLocationId:F},errorPolicy:"all"}).pipe((0,$.M)(({data:f})=>{f&&this.store.dispatch((0,R.q$)({id:F}))}))}static#e=this.\u0275fac=function(f){return new(f||j)(_.KVO(b.Ic),_.KVO(u.il))};static#t=this.\u0275prov=_.jDH({token:j,factory:j.\u0275fac,providedIn:"root"})}return j})()},21112:(q,B,p)=>{"use strict";p.r(B),p.d(B,{default:()=>is});var $=p(10729),e=p(17705);let R=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["app-workshop"]],standalone:!0,features:[e.aNF],decls:1,vars:0,template:function(o,s){1&o&&e.nrm(0,"ath-content-menu")},dependencies:[$.k],encapsulation:2})}return r})();var n=p(89417),b=p(96695),W=p(30450),C=p(2042),P=p(7673),I=p(21413),k=p(57786),d=p(56977),h=p(25558),_=p(96354),u=p(59640);const w=r=>r.workshops,O=((0,u.Mz)(w,r=>r.workshop),(0,u.Mz)(w,r=>r.workshops));var F=p(47413),f=p(75351),T=p(67398),v=p(94794),g=p(53719),S=p(88834),D=p(96697),y=p(88141),A=p(67376),te=p(36146),ne=p(98216),x=p(53473);const Be=x.J1`
    mutation CreateWorkshop($createWorkshopInput: CreateWorkshopInput!) {
        createWorkshop(createWorkshopInput: $createWorkshopInput) {

            ok
            message

            workshop {
                id
                active
                name
                slug
            }

        }
    }
`,Ne=x.J1`
    mutation UpdateWorkshop($updateWorkshopInput: UpdateWorkshopInput!) {
        updateWorkshop(updateWorkshopInput: $updateWorkshopInput) {
            ok
            message

            workshop {
                id
                active
                name
                slug
            }
        }
    }
`,ze=x.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateWorkshopStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,Le=x.J1`
    mutation RemoveWorkshop($removeWorkshopId: String!) {
        removeWorkshop(id: $removeWorkshopId) {
            ok
            message
        }
    }
`,Ue=x.J1`
    query FindAllWorkshops($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllWorkshops(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            workshops {
                id
                active
                name
                slug
            }
        }
    }
`,Ye=x.J1`
    query FindWorkshopById($findWorkshopByIdId: String!) {
        findWorkshopById(id: $findWorkshopByIdId) {
            ok
            message

            workshop {
                id
                active
                name
                slug
            }
        }
    }
`;var G=p(95416);let fe=(()=>{class r{constructor(t,o,s){this.apolloProvider=t,this._snackBar=o,this.store=s,this._apollo=this.apolloProvider.use("BALANC")}createWorkshop(t){return this.store.select(O).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:Be,variables:{createWorkshopInput:t},errorPolicy:"all"}).pipe((0,y.M)(({data:s})=>{const i=(0,A.cloneDeep)(o);i.push(s.createWorkshop.workshop),this.store.dispatch((0,te.ht)({workshops:i}))}))))}getWorkshops(t=1,o=20,s="code",i="asc",a=""){return this._apollo.query({query:Ue,errorPolicy:"all",variables:{offset:o*(t-1),limit:o,sort:s,order:i,search:a}}).pipe((0,y.M)(({data:l})=>{this.store.dispatch((0,ne.Bp)({pagination:l.findAllWorkshops.pagination})),this.store.dispatch((0,te.ht)({workshops:l.findAllWorkshops.workshops}))}))}getWorkshopById(t){return this._apollo.query({query:Ye,variables:{findWorkshopByIdId:t},errorPolicy:"all"}).pipe((0,y.M)(({data:o})=>{this.store.dispatch((0,te.if)({workshop:o.findWorkshopById.workshop}))}))}updateWorkshop(t){return this.store.select(O).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:Ne,variables:{updateWorkshopInput:t},errorPolicy:"all"}).pipe((0,y.M)(({data:s})=>{const i=(0,A.cloneDeep)(o);i[o.findIndex(l=>l.id===t.id)]=s.updateWorkshop.workshop,this.store.dispatch((0,te.ht)({workshops:i}))}))))}updateWorkshopStatus(t){return this.store.select(O).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:ze,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,y.M)(({})=>{const i=(0,A.cloneDeep)(o);i[o.findIndex(l=>l.id===t.id)].active=t.active,this.store.dispatch((0,te.ht)({workshops:i}))}))))}removeWorkshop(t){return this.store.select(O).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:Le,variables:{removeWorkshopId:t},errorPolicy:"all"}).pipe((0,y.M)(({})=>{const i=(0,A.cloneDeep)(o),a=o.findIndex(l=>l.id===t);i.splice(a,1),this.store.dispatch((0,te.ht)({workshops:i}))}))))}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(x.Ic),e.KVO(G.UG),e.KVO(u.il))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var z=p(46601);function Xe(r,c){1&r&&(e.j41(0,"h2",2),e.EFF(1," Agregar Taller "),e.k0s())}function Je(r,c){1&r&&(e.j41(0,"h2",2),e.EFF(1," Editar Taller "),e.k0s())}function Qe(r,c){if(1&r&&(e.j41(0,"div",4)(1,"div",7)(2,"div",8)(3,"div",9)(4,"div",10)(5,"h6",11),e.EFF(6,"Nombre"),e.k0s(),e.j41(7,"span",12),e.EFF(8),e.k0s()()()()()()),2&r){const t=e.XpG();e.R7$(8),e.JRh(t.data.workshop.name||"Sin nombre")}}function He(r,c){if(1&r&&(e.j41(0,"div",5)(1,"div",13)(2,"form",14)(3,"mat-form-field",15)(4,"mat-label"),e.EFF(5,"Nombre"),e.k0s(),e.nrm(6,"input",16),e.k0s()()()()),2&r){const t=e.XpG();e.R7$(2),e.Y8G("formGroup",t.workshopForm)("autocomplete","off"),e.R7$(4),e.Y8G("formControlName","name")("placeholder","Ejemplo: Taller de mec\xe1nica")}}function qe(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",19),e.bIt("click",function(){e.eBV(t);const s=e.XpG(2);return e.Njj(s.updateWorkshop())}),e.EFF(1," Actualizar "),e.k0s()}if(2&r){const t=e.XpG(2);e.Y8G("color","primary")("disabled",t.workshopForm.invalid)("matDialogClose","confirmed")}}function Ke(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",19),e.bIt("click",function(){e.eBV(t);const s=e.XpG(2);return e.Njj(s.createWorkshop())}),e.EFF(1," Agregar "),e.k0s()}if(2&r){const t=e.XpG(2);e.Y8G("color","primary")("disabled",t.workshopForm.invalid)("matDialogClose","confirmed")}}function Ze(r,c){if(1&r&&(e.j41(0,"div",6)(1,"button",17),e.EFF(2," Cancelar "),e.k0s(),e.DNE(3,qe,2,3,"button",18)(4,Ke,2,3,"button",18),e.k0s()),2&r){const t=e.XpG();e.R7$(),e.Y8G("matDialogClose","cancelled"),e.R7$(2),e.vxM("edit"===t.data.dialogMode?3:-1),e.R7$(),e.vxM("add"===t.data.dialogMode?4:-1)}}let et=(()=>{class r{constructor(t,o,s,i,a,l,m){this.data=t,this._workshopsService=o,this._changeDetectorRef=s,this._formBuilder=i,this._fuseConfirmationService=a,this._dialogRef=l,this._snackBar=m,this.dialogMode="view",this._unsubscribeAll=new I.B,this.dialogMode=t.dialogMode,this.workshop=t.workshop}ngOnInit(){this.workshopForm=this._formBuilder.group({id:new n.MJ(null),name:new n.MJ(null,[n.k0.maxLength(100)])}),"edit"===this.dialogMode&&this.workshopForm.patchValue(this.workshop)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createWorkshop(){let t=this.workshopForm.getRawValue();t=(0,T.A)(t,["id"]),this._fuseConfirmationService.open({title:"Crear taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._workshopsService.createWorkshop(t).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.createWorkshop.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateWorkshop(){const t=this.workshopForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._workshopsService.updateWorkshop(t).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.updateWorkshop.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(f.Vh),e.rXU(fe),e.rXU(e.gRc),e.rXU(n.ok),e.rXU(z.G),e.rXU(f.CP),e.rXU(G.UG))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["lists-workshop-dialog"]],standalone:!0,features:[e.aNF],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex-auto"],[1,"w-full","overflow-hidden"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black/10"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","gap-5","mt-3",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-no-subscript"],["matInput","","type","text","required","","maxlength","50",3,"formControlName","placeholder"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"click","color","disabled","matDialogClose"]],template:function(o,s){1&o&&(e.j41(0,"div",0)(1,"div",1),e.DNE(2,Xe,2,0,"h2",2)(3,Je,2,0,"h2",2),e.k0s(),e.j41(4,"div",3),e.DNE(5,Qe,9,1,"div",4)(6,He,7,4,"div",5),e.k0s(),e.DNE(7,Ze,5,3,"div",6),e.k0s()),2&o&&(e.R7$(2),e.vxM("add"===s.data.dialogMode?2:-1),e.R7$(),e.vxM("edit"===s.data.dialogMode?3:-1),e.R7$(2),e.vxM("view"===s.data.dialogMode?5:-1),e.R7$(),e.vxM(6),e.R7$(),e.vxM("view"!==s.data.dialogMode?7:-1))},dependencies:[f.hM,f.tx,n.X1,n.qT,n.me,n.BC,n.cb,n.YS,n.tU,n.j4,n.JD,g.RG,g.rl,g.nJ,S.Hl,S.$z],encapsulation:2})}return r})();class tt{}var M=p(99213),Q=p(59042),V=p(60177),K=p(9183);const ot=r=>({"pointer-events-none":r}),rt=()=>[5,10,25,100];function st(r,c){if(1&r){const t=e.RV6();e.j41(0,"mat-slide-toggle",30),e.bIt("change",function(s){e.eBV(t);const i=e.XpG(),a=i.$implicit,l=i.$index,m=e.XpG(4);return e.Njj(m.updateWorkshopStatus(s,a,l))}),e.k0s()}if(2&r){const t=e.XpG().$implicit;e.Y8G("checked",t.active)("color","primary")}}function it(r,c){1&r&&e.nrm(0,"mat-spinner",26),2&r&&e.Y8G("diameter",20)("color","primary")}function nt(r,c){if(1&r){const t=e.RV6();e.j41(0,"div",23)(1,"div",19),e.EFF(2),e.k0s(),e.j41(3,"div",24),e.EFF(4),e.k0s(),e.j41(5,"div",21),e.DNE(6,st,1,2,"mat-slide-toggle",25)(7,it,1,2,"mat-spinner",26),e.k0s(),e.j41(8,"div",27)(9,"button",28),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG(4);return e.Njj(i.openDialog(s,"edit"))}),e.nrm(10,"mat-icon",29),e.k0s(),e.j41(11,"button",28),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG(4);return e.Njj(i.deleteWorkshop(s))}),e.nrm(12,"mat-icon",29),e.k0s()()()}if(2&r){const t=c.$implicit,o=c.$index,s=e.XpG(4);e.R7$(2),e.SpI(" ",o+1," "),e.R7$(2),e.SpI(" ",t.name," "),e.R7$(2),e.vxM(s.isSlideLoading&&s.selectedSlide===o?-1:6),e.R7$(),e.vxM(s.isSlideLoading&&s.selectedSlide===o?7:-1),e.R7$(3),e.Y8G("svgIcon","mat_solid:edit"),e.R7$(2),e.Y8G("svgIcon","mat_solid:delete")}}function at(r,c){1&r&&e.Z7z(0,nt,13,6,"div",23,e.BUC().trackByFn,!0),2&r&&e.Dyx(c)}function ct(r,c){if(1&r&&(e.j41(0,"div",16)(1,"div",18),e.nrm(2,"div",19),e.j41(3,"div",20),e.EFF(4," Nombre "),e.k0s(),e.j41(5,"div",21),e.EFF(6," Activo "),e.k0s(),e.j41(7,"div",21),e.EFF(8," Acciones "),e.k0s()(),e.DNE(9,at,2,0),e.nI1(10,"async"),e.nrm(11,"mat-paginator",22),e.k0s()),2&r){let t;const o=e.XpG(2);e.R7$(3),e.Y8G("mat-sort-header","name"),e.R7$(6),e.vxM((t=e.bMT(10,8,o.workshops$))?9:-1,t),e.R7$(2),e.Y8G("ngClass",e.eq3(10,ot,o.isLoading))("length",o.pagination.length)("pageIndex",o.pagination.page)("pageSize",o.pagination.size)("pageSizeOptions",e.lJ4(12,rt))("showFirstLastButtons",!0)}}function lt(r,c){1&r&&(e.j41(0,"div",17),e.EFF(1," \xa1No hay talleres creados para el negocio!"),e.k0s())}function pt(r,c){1&r&&e.DNE(0,ct,12,13,"div",16)(1,lt,2,0,"div",17),2&r&&e.vxM(c.length>0?0:1)}let dt=(()=>{class r{constructor(t,o,s,i,a,l){this._workshopsService=t,this._changeDetectorRef=o,this._dialog=s,this._fuseConfirmationService=i,this._snackBar=a,this.store=l,this.workshop=new tt,this.workshops$=(0,P.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.searchInputControl=new n.MJ,this.selectedSlide=null,this._unsubscribeAll=new I.B}ngOnInit(){this.workshops$=this.store.select(O),this.store.select(F.Dz).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,k.h)(this._sort.sortChange,this._paginator.page).pipe((0,h.n)(()=>(this.isLoading=!0,this._workshopsService.getWorkshops(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,_.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteWorkshop(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la taller: ${t.name}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,d.Q)(this._unsubscribeAll)).subscribe(s=>{"confirmed"===s&&this._workshopsService.removeWorkshop(t.id).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.removeWorkshop.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}updateWorkshopStatus(t,o,s){this.isSlideLoading=!0,this.selectedSlide=s,this._workshopsService.updateWorkshopStatus({id:o.id,active:t.checked}).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.updateWorkshopStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}trackByFn(t,o){return o.id||t}openDialog(t,o){this._dialog.open(et,{data:{workshop:t,dialogMode:o},panelClass:"ath-dialog-panel"})}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(fe),e.rXU(e.gRc),e.rXU(f.bZ),e.rXU(z.G),e.rXU(G.UG),e.rXU(u.il))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["workshop-workshops"]],viewQuery:function(o,s){if(1&o&&(e.GBs(b.iy,5),e.GBs(C.B4,5)),2&o){let i;e.mGM(i=e.lsd())&&(s._paginator=i.first),e.mGM(i=e.lsd())&&(s._sort=i.first)}},standalone:!0,features:[e.aNF],decls:27,vars:6,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[1,"grid"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","overflow-x-auto","font-semibold","shadow","lists-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block"],[3,"mat-sort-header"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","overflow-auto","border-b","lists-grid","md:px-8"],[1,"truncate"],[3,"checked","color"],[3,"diameter","color"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[3,"change","checked","color"]],template:function(o,s){if(1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Taller"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",7),e.EFF(14,"Talleres"),e.k0s()()(),e.j41(15,"div",8)(16,"h2",9),e.EFF(17," Talleres "),e.k0s()()(),e.j41(18,"div",10)(19,"button",11),e.bIt("click",function(){return s.openDialog(s.workshop,"add")}),e.nrm(20,"mat-icon",12),e.j41(21,"span",13),e.EFF(22,"Agregar"),e.k0s()()()(),e.j41(23,"div",14)(24,"div",15),e.DNE(25,pt,2,1),e.nI1(26,"async"),e.k0s()()()),2&o){let i;e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(8),e.Y8G("svgIcon","mat_solid:add"),e.R7$(5),e.vxM((i=e.bMT(26,4,s.workshops$))?25:-1,i)}},dependencies:[V.Jj,S.Hl,S.$z,g.RG,M.m_,M.An,Q.fS,b.Ou,b.iy,K.D6,K.LG,W.mV,W.sG,C.NQ,C.B4,C.aE,V.YU,n.X1],encapsulation:2,changeDetection:0})}return r})();var N=p(51188);const Fe=r=>r.vehicles,mt=(0,u.Mz)(Fe,r=>r.vehicle),oe=(0,u.Mz)(Fe,r=>r.vehicles);class xe{}var ae=p(91062);const ut=x.J1`
    mutation CreateVehicle($createVehicleInput: CreateVehicleInput!) {
        createVehicle(createVehicleInput: $createVehicleInput) {

            ok
            message

            vehicle {
                id
                userId

                customerId
                customer {
                    name
                }

                brandId
                brand {
                    name
                }

                fuelId
                fuel{
                    name
                }

                registrationNumber
                vin
                engineNumber
                bodyNumber
                color
                battery
                carPlayer
            }

        }
    }
`,ht=x.J1`
    mutation UpdateVehicle($updateVehicleInput: UpdateVehicleInput!) {
        updateVehicle(updateVehicleInput: $updateVehicleInput) {
            ok
            message

            vehicle {
id
                userId

                customerId
                customer {
                    name
                }

                brandId
                brand {
                    name
                }

                fuelId
                fuel{
                    name
                }

                registrationNumber
                vin
                engineNumber
                bodyNumber
                color
                battery
                carPlayer
            }
        }
    }
`,ft=(x.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVehicleStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,x.J1`
    mutation RemoveVehicle($removeVehicleId: String!) {
        removeVehicle(id: $removeVehicleId) {
            ok
            message
        }
    }
`),_t=x.J1`
    query FindAllVehicles($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllVehicles(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            vehicles {
                id
                userId

                customerId
                customer {
                    name
                }

                brandId
                brand {
                    name
                }

                fuelId
                fuel{
                    name
                }

                registrationNumber
            }
        }
    }
`,vt=x.J1`
    query FindVehicleById($findVehicleByIdId: String!) {
        findVehicleById(id: $findVehicleByIdId) {
            ok
            message

            vehicle {
                id
                userId

                customerId
                customer {
                    name
                }

                brandId
                brand {
                    name
                }

                fuelId
                fuel{
                    name
                }

                registrationNumber
                vin
                engineNumber
                bodyNumber
                color
                battery
                carPlayer
            }
        }
    }
`;let ue=(()=>{class r{constructor(t,o,s){this.apolloProvider=t,this._snackBar=o,this.store=s,this._apollo=this.apolloProvider.use("BALANC")}createVehicle(t){return this.store.select(oe).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:ut,variables:{createVehicleInput:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s,data:i})=>{if(s){let l="";s.forEach(m=>l+=`\n ${m.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,A.cloneDeep)(o);a.push(i.createVehicle.vehicle),this.store.dispatch((0,ae._v)({vehicles:a}))}))))}getVehicles(t=1,o=20,s="code",i="asc",a=""){return this._apollo.query({query:_t,errorPolicy:"all",variables:{offset:o*(t-1),limit:o,sort:s,order:i,search:a}}).pipe((0,y.M)(({errors:l,data:m})=>{if(l){let E="";l.forEach(ee=>E+=`\n ${ee.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ne.Bp)({pagination:m.findAllVehicles.pagination})),this.store.dispatch((0,ae._v)({vehicles:m.findAllVehicles.vehicles}))}))}getVehicleById(t){return this._apollo.query({query:vt,variables:{findVehicleByIdId:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:o,data:s})=>{if(o){let i="";o.forEach(a=>i+=`\n ${a.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ae.R8)({vehicle:s.findVehicleById.vehicle}))}))}updateVehicle(t){return this.store.select(oe).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:ht,variables:{updateVehicleInput:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s,data:i})=>{if(s){let m="";s.forEach(E=>m+=`\n ${E.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,A.cloneDeep)(o);a[o.findIndex(m=>m.id===t.id)]=i.updateVehicle.vehicle,this.store.dispatch((0,ae._v)({vehicles:a}))}))))}removeVehicle(t){return this.store.select(oe).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:ft,variables:{removeVehicleId:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s})=>{if(s){let l="";s.forEach(m=>l+=`\n ${m.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,A.cloneDeep)(o),a=o.findIndex(l=>l.id===t);i.splice(a,1),this.store.dispatch((0,ae._v)({vehicles:i}))}))))}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(x.Ic),e.KVO(G.UG),e.KVO(u.il))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();const gt=()=>["new"],kt=r=>({"pointer-events-none":r}),bt=()=>[5,10,25,100],Ft=r=>[r];function xt(r,c){if(1&r){const t=e.RV6();e.j41(0,"div",26)(1,"div",22),e.EFF(2),e.k0s(),e.j41(3,"div",27),e.EFF(4),e.k0s(),e.j41(5,"div",24),e.EFF(6),e.k0s(),e.j41(7,"div",24),e.EFF(8),e.k0s(),e.j41(9,"div",24),e.EFF(10),e.k0s(),e.j41(11,"div",28)(12,"button",29),e.nrm(13,"mat-icon",30),e.k0s(),e.j41(14,"button",31),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG(4);return e.Njj(i.deleteVehicle(s))}),e.nrm(15,"mat-icon",30),e.k0s()()()}if(2&r){const t=c.$implicit,o=c.$index;e.R7$(2),e.SpI(" ",o+1," "),e.R7$(2),e.SpI(" ",t.registrationNumber," "),e.R7$(2),e.SpI(" ",t.customer.name," "),e.R7$(2),e.SpI(" ",t.brand.name," "),e.R7$(2),e.SpI(" ",t.fuel.name," "),e.R7$(2),e.Y8G("routerLink",e.eq3(8,Ft,t.id)),e.R7$(),e.Y8G("svgIcon","mat_solid:edit"),e.R7$(2),e.Y8G("svgIcon","mat_solid:delete")}}function Ct(r,c){1&r&&e.Z7z(0,xt,16,10,"div",26,e.BUC().trackByFn,!0),2&r&&e.Dyx(c)}function It(r,c){if(1&r&&(e.j41(0,"div",19)(1,"div",21),e.nrm(2,"div",22),e.j41(3,"div",23),e.EFF(4," Chapa "),e.k0s(),e.j41(5,"div",24),e.EFF(6," Cliente "),e.k0s(),e.j41(7,"div",24),e.EFF(8," Marca "),e.k0s(),e.j41(9,"div",24),e.EFF(10," Combustible "),e.k0s(),e.j41(11,"div",24),e.EFF(12," Acciones "),e.k0s()(),e.DNE(13,Ct,2,0),e.nI1(14,"async"),e.nrm(15,"mat-paginator",25),e.k0s()),2&r){let t;const o=e.XpG(2);e.R7$(3),e.Y8G("mat-sort-header","registrationNumber"),e.R7$(10),e.vxM((t=e.bMT(14,8,o.vehicles$))?13:-1,t),e.R7$(2),e.Y8G("ngClass",e.eq3(10,kt,o.isLoading))("length",o.pagination.length)("pageIndex",o.pagination.page)("pageSize",o.pagination.size)("pageSizeOptions",e.lJ4(12,bt))("showFirstLastButtons",!0)}}function yt(r,c){1&r&&(e.j41(0,"div",20),e.EFF(1," \xa1No hay veh\xedculos de clientes registrados!"),e.k0s())}function Et(r,c){1&r&&e.DNE(0,It,16,13,"div",19)(1,yt,2,0,"div",20),2&r&&e.vxM(c.length>0?0:1)}let St=(()=>{class r{constructor(t,o,s,i,a,l){this._vehiclesService=t,this._changeDetectorRef=o,this._dialog=s,this._fuseConfirmationService=i,this._snackBar=a,this.store=l,this.vehicle=new xe,this.vehicles$=(0,P.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.searchInputControl=new n.MJ,this.selectedSlide=null,this._unsubscribeAll=new I.B}ngOnInit(){this.vehicles$=this.store.select(oe),this.store.select(F.Dz).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,k.h)(this._sort.sortChange,this._paginator.page).pipe((0,h.n)(()=>(this.isLoading=!0,this._vehiclesService.getVehicles(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,_.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteVehicle(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la taller: ${t.registrationNumber}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,d.Q)(this._unsubscribeAll)).subscribe(s=>{"confirmed"===s&&this._vehiclesService.removeVehicle(t.id).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.removeVehicle.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}trackByFn(t,o){return o.id||t}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(ue),e.rXU(e.gRc),e.rXU(f.bZ),e.rXU(z.G),e.rXU(G.UG),e.rXU(u.il))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["vehicle-vehicles"]],viewQuery:function(o,s){if(1&o&&(e.GBs(b.iy,5),e.GBs(C.B4,5)),2&o){let i;e.mGM(i=e.lsd())&&(s._paginator=i.first),e.mGM(i=e.lsd())&&(s._sort=i.first)}},standalone:!0,features:[e.aNF],decls:30,vars:12,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-auto"],[1,"grid"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","vehicles-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block"],[3,"mat-sort-header"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","vehicles-grid","md:px-8"],[1,"truncate"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"]],template:function(o,s){if(1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Taller"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",7),e.EFF(14,"Veh\xedculos"),e.k0s()()(),e.j41(15,"div",8)(16,"h2",9),e.EFF(17," Veh\xedculos "),e.k0s()()(),e.j41(18,"div",10)(19,"mat-form-field",11),e.nrm(20,"mat-icon",12)(21,"input",13),e.k0s(),e.j41(22,"button",14),e.nrm(23,"mat-icon",15),e.j41(24,"span",16),e.EFF(25,"Agregar"),e.k0s()()()(),e.j41(26,"div",17)(27,"div",18),e.DNE(28,Et,2,1),e.nI1(29,"async"),e.k0s()()()),2&o){let i;e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(8),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",s.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.R7$(),e.Y8G("routerLink",e.lJ4(11,gt)),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(5),e.vxM((i=e.bMT(29,9,s.vehicles$))?28:-1,i)}},dependencies:[V.Jj,S.Hl,S.$z,g.RG,g.rl,g.JW,M.m_,M.An,Q.fS,Q.fg,b.Ou,b.iy,K.D6,W.mV,C.NQ,C.B4,C.aE,V.YU,n.X1,n.me,n.BC,n.l_,N.Wk],encapsulation:2,changeDetection:0})}return r})();var Y=p(60850),X=p(25084),H=p(82798),U=p(99172),$t=p(67943),Rt=p(56808),wt=p(56501),_e=p(65478),ce=p(86600);const Ce=r=>({"cursor-not-allowed":r});function Dt(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",35),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.createVehicle())}),e.nrm(1,"mat-icon",36),e.j41(2,"span",37),e.EFF(3,"Guardar"),e.k0s()()}if(2&r){const t=e.XpG();e.Y8G("disabled",t.vehicleForm.invalid)("ngClass",e.eq3(3,Ce,t.vehicleForm.invalid)),e.R7$(),e.Y8G("svgIcon","mat_solid:save")}}function jt(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",35),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.updateVehicle())}),e.nrm(1,"mat-icon",36),e.j41(2,"span",37),e.EFF(3,"Actualizar"),e.k0s()()}if(2&r){const t=e.XpG();e.Y8G("disabled",t.vehicleForm.invalid)("ngClass",e.eq3(3,Ce,t.vehicleForm.invalid)),e.R7$(),e.Y8G("svgIcon","mat_solid:refresh")}}function At(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El n\xfamero de registro (chapa) es obligatorio. "),e.k0s())}function Wt(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El n\xfamero de registro (chapa) debe tener 7 caracteres. "),e.k0s())}function Ot(r,c){if(1&r){const t=e.RV6();e.j41(0,"mat-option",38),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.selectCustomer(s))}),e.EFF(1),e.k0s()}if(2&r){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.name," ")}}function Tt(r,c){if(1&r){const t=e.RV6();e.j41(0,"mat-option",38),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.selectBrand(s))}),e.EFF(1),e.k0s()}if(2&r){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.name," ")}}function Vt(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El modelo no debe tener m\xe1s de 50 caracteres. "),e.k0s())}function Gt(r,c){if(1&r){const t=e.RV6();e.j41(0,"mat-option",38),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.selectFuel(s))}),e.EFF(1),e.k0s()}if(2&r){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.name," ")}}function Mt(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El n\xfamero vin debe tener 17 caracteres. "),e.k0s())}function Pt(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El n\xfamero del motor no debe tener m\xe1s de 50 caracteres. "),e.k0s())}function Bt(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El n\xfamero de la carrocer\xeda no debe tener m\xe1s de 50 caracteres. "),e.k0s())}function Nt(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El color no debe tener m\xe1s de 100 caracteres. "),e.k0s())}function zt(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El comentario sobre la bater\xeda no debe tener m\xe1s de 1000000 caracteres. "),e.k0s())}function Lt(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El comentario sobre la reproductora no debe tener m\xe1s de 1000000 caracteres. "),e.k0s())}let Ut=(()=>{class r{constructor(t,o,s,i,a,l){this._activatedRoute=t,this._changeDetectorRef=o,this._formBuilder=s,this._snackBar=i,this._router=a,this.store=l,this.brandSelected="",this.customers=[],this.customerSelected="",this.editMode=!1,this.fuelSelected="",this.isLoading=!1,this.isLoadingData=!0,this.searchBrandControl=new n.MJ(""),this.searchCustomerControl=new n.MJ(""),this.searchFuelControl=new n.MJ(""),this.selectedVehicle=new xe,this.vehicles$=(0,P.of)([]),this._unsubscribeAll=new I.B,this._fuseConfirmationService=(0,e.WQX)(z.G),this._vehiclesService=(0,e.WQX)(ue)}ngOnInit(){this.store.select(Rt.wQ).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.customers=t,this._changeDetectorRef.markForCheck()}),this.customersFiltered$=this.searchCustomerControl.valueChanges.pipe((0,U.Z)(""),(0,_.T)(t=>{const o="string"==typeof t?t:t?.name;return o?this._filterCustomers(o):this.customers.slice()})),this.store.select($t.DC).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.brands=t,this._changeDetectorRef.markForCheck()}),this.brandsFiltered$=this.searchBrandControl.valueChanges.pipe((0,U.Z)(""),(0,_.T)(t=>{const o="string"==typeof t?t:t?.name;return o?this._filterBrands(o):this.brands.slice()})),this.store.select(wt.UC).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.fuels=t,this._changeDetectorRef.markForCheck()}),this.fuelsFiltered$=this.searchFuelControl.valueChanges.pipe((0,U.Z)(""),(0,_.T)(t=>{const o="string"==typeof t?t:t?.name;return o?this._filterFuels(o):this.fuels.slice()})),this.vehicleForm=this._formBuilder.group({id:new n.MJ(null),customerId:new n.MJ(null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i),n.k0.maxLength(255)]),brandId:new n.MJ(null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i),n.k0.maxLength(255)]),model:new n.MJ(null,[n.k0.maxLength(50)]),fuelId:new n.MJ(null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i),n.k0.maxLength(255)]),registrationNumber:new n.MJ(null,[n.k0.required,n.k0.minLength(7),n.k0.maxLength(7)]),vin:new n.MJ(null,[n.k0.minLength(17),n.k0.maxLength(17)]),engineNumber:new n.MJ(null,[n.k0.maxLength(50)]),bodyNumber:new n.MJ(null,[n.k0.maxLength(50)]),color:new n.MJ(null,[n.k0.maxLength(100)]),battery:new n.MJ(null,[n.k0.maxLength(1e6)]),carPlayer:new n.MJ(null,[n.k0.maxLength(1e6)])}),this._activatedRoute.params.pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({vehicleId:t})=>{"new"!==t&&(this.editMode=!0,this.store.select(mt).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(o=>{this.selectedVehicle=o,this.isLoadingData=!1,this.vehicleForm.patchValue(o),this.isLoadingData=!1})),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createVehicle(){let t=this.vehicleForm.getRawValue();t=(0,A.omit)(t,["id","code"]),this._fuseConfirmationService.open({title:"Crear Veh\xedculo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._vehiclesService.createVehicle(t).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.createVehicle.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck(),this._router.navigateByUrl("/workshop/vehicles")}),this._changeDetectorRef.markForCheck()})}updateVehicle(){let t=this.vehicleForm.getRawValue();t=(0,A.omit)(t,["code"]),this._fuseConfirmationService.open({title:"Actualizar Veh\xedculo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._vehiclesService.updateVehicle(t).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.updateVehicle.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/vehicles")}),this._changeDetectorRef.markForCheck()})}selectBrand(t){this.vehicleForm.get("brandId").setValue(t.id)}selectCustomer(t){this.vehicleForm.get("customerId").setValue(t.id)}selectFuel(t){this.vehicleForm.get("fuelId").setValue(t.id)}displayFn(t){return t&&t.name?t.name:""}_filterBrands(t){const o=t.toLowerCase();return this.customers.filter(s=>s.name.toLowerCase().includes(o))}_filterCustomers(t){const o=t.toLowerCase();return this.customers.filter(s=>s.name.toLowerCase().includes(o))}_filterFuels(t){const o=t.toLowerCase();return this.customers.filter(s=>s.name.toLowerCase().includes(o))}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(N.nX),e.rXU(e.gRc),e.rXU(n.ok),e.rXU(G.UG),e.rXU(N.Ix),e.rXU(u.il))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["workshop-vehicle-details"]],standalone:!0,features:[e.aNF],decls:107,vars:50,consts:[["customerAutocomplete","matAutocomplete"],["brandAutocomplete","matAutocomplete"],["fuelAutocomplete","matAutocomplete"],["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","bg-card","dark:bg-transparent","overflow-y-auto"],[1,"z-20","flex","flex-col","p-6","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:py-8","sm:px-10","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],["routerLink","/workshop/vehicles",1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","ngClass"],[1,"flex","flex-auto"],[1,"flex","flex-col","w-full","divide-y","divide-dashed",3,"formGroup","autocomplete"],[1,"grid","grid-cols-1","p-10"],[1,"flex","flex-col"],[1,"text-xl","font-semibold"],[1,"flex","flex-col","p-6","mt-5","border","shadow-md","sm:flex-row","bg-card","rounded-2xl"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-5","w-full"],[1,"w-full","fuse-mat-dense"],["matInput","","type","text","minlength","7","maxlength","7","required","",3,"formControlName"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[3,"displayWith"],[3,"value"],["matInput","","type","text","maxlength","50",3,"formControlName"],["matInput","","type","text","minlength","17","maxlength","17",3,"formControlName"],["matInput","","type","text","maxlength","100",3,"formControlName"],[1,"w-full","fuse-mat-dense","sm:col-span-3"],["matInput","","cdkTextareaAutosize","","maxlength","1000000","rows","2",3,"formControlName"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click","disabled","ngClass"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"click","value"]],template:function(o,s){if(1&o&&(e.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"div")(4,"div",6)(5,"div")(6,"a",7),e.EFF(7,"Inicio"),e.k0s()(),e.j41(8,"div",8),e.nrm(9,"mat-icon",9),e.j41(10,"a",10),e.EFF(11,"Taller"),e.k0s()(),e.j41(12,"div",8),e.nrm(13,"mat-icon",9),e.j41(14,"a",11),e.EFF(15,"Veh\xedculos"),e.k0s()(),e.j41(16,"div",8),e.nrm(17,"mat-icon",9),e.j41(18,"a",10),e.EFF(19),e.k0s()()()(),e.j41(20,"div",12)(21,"h2",13),e.EFF(22),e.k0s()()(),e.j41(23,"div",14),e.DNE(24,Dt,4,5,"button",15)(25,jt,4,5,"button",15),e.k0s()(),e.j41(26,"div",16)(27,"form",17)(28,"div",18)(29,"div",19)(30,"span",20),e.EFF(31,"Generales"),e.k0s(),e.j41(32,"span"),e.EFF(33,"Ingrese la informaci\xf3n necesaria para describir e identificar el veh\xedculo"),e.k0s()(),e.j41(34,"div",21)(35,"div",22)(36,"mat-form-field",23)(37,"mat-label"),e.EFF(38,"Chapa"),e.k0s(),e.nrm(39,"input",24),e.DNE(40,At,2,0,"mat-error")(41,Wt,2,0,"mat-error"),e.k0s(),e.j41(42,"mat-form-field",25)(43,"mat-label"),e.EFF(44,"Cliente"),e.k0s(),e.nrm(45,"mat-icon",26)(46,"input",27),e.j41(47,"mat-autocomplete",28,0),e.Z7z(49,Ot,2,2,"mat-option",29,e.fX1),e.nI1(51,"async"),e.k0s()(),e.j41(52,"mat-form-field",25)(53,"mat-label"),e.EFF(54,"Marca"),e.k0s(),e.nrm(55,"mat-icon",26)(56,"input",27),e.j41(57,"mat-autocomplete",28,1),e.Z7z(59,Tt,2,2,"mat-option",29,e.fX1),e.nI1(61,"async"),e.k0s()(),e.j41(62,"mat-form-field",23)(63,"mat-label"),e.EFF(64,"Modelo"),e.k0s(),e.nrm(65,"input",30),e.DNE(66,Vt,2,0,"mat-error"),e.k0s(),e.j41(67,"mat-form-field",25)(68,"mat-label"),e.EFF(69,"Tipo de combustible"),e.k0s(),e.nrm(70,"mat-icon",26)(71,"input",27),e.j41(72,"mat-autocomplete",28,2),e.Z7z(74,Gt,2,2,"mat-option",29,e.fX1),e.nI1(76,"async"),e.k0s()(),e.j41(77,"mat-form-field",23)(78,"mat-label"),e.EFF(79,"VIN"),e.k0s(),e.nrm(80,"input",31),e.DNE(81,Mt,2,0,"mat-error"),e.k0s(),e.j41(82,"mat-form-field",23)(83,"mat-label"),e.EFF(84,"N\xfamero del motor"),e.k0s(),e.nrm(85,"input",30),e.DNE(86,Pt,2,0,"mat-error"),e.k0s(),e.j41(87,"mat-form-field",23)(88,"mat-label"),e.EFF(89,"N\xfamero de la carrocer\xeda"),e.k0s(),e.nrm(90,"input",30),e.DNE(91,Bt,2,0,"mat-error"),e.k0s(),e.j41(92,"mat-form-field",23)(93,"mat-label"),e.EFF(94,"Color"),e.k0s(),e.nrm(95,"input",32),e.DNE(96,Nt,2,0,"mat-error"),e.k0s(),e.j41(97,"mat-form-field",33)(98,"mat-label"),e.EFF(99,"Sobre la bater\xeda"),e.k0s(),e.nrm(100,"textarea",34),e.DNE(101,zt,2,0,"mat-error"),e.k0s(),e.j41(102,"mat-form-field",33)(103,"mat-label"),e.EFF(104,"Sobre la reproductora"),e.k0s(),e.nrm(105,"textarea",34),e.DNE(106,Lt,2,0,"mat-error"),e.k0s()()()()()()()),2&o){const i=e.sdS(48),a=e.sdS(58),l=e.sdS(73);e.R7$(9),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(2),e.SpI(" ",s.editMode?s.selectedVehicle.registrationNumber:"Nuevo"," "),e.R7$(3),e.SpI(" ",s.editMode?s.selectedVehicle.registrationNumber:"Nuevo"," "),e.R7$(2),e.vxM(s.editMode?-1:24),e.R7$(),e.vxM(s.editMode?25:-1),e.R7$(2),e.Y8G("formGroup",s.vehicleForm)("autocomplete","off"),e.R7$(12),e.Y8G("formControlName","registrationNumber"),e.R7$(),e.vxM(s.vehicleForm.get("registrationNumber").hasError("required")?40:-1),e.R7$(),e.vxM(s.vehicleForm.get("registrationNumber").hasError("minlength")?41:-1),e.R7$(4),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",s.searchCustomerControl)("matAutocomplete",i)("placeholder","Buscar cliente")("required",!0),e.R7$(),e.Y8G("displayWith",s.displayFn),e.R7$(2),e.Dyx(e.bMT(51,44,s.customersFiltered$)),e.R7$(6),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",s.searchBrandControl)("matAutocomplete",a)("placeholder","Buscar marca")("required",!0),e.R7$(),e.Y8G("displayWith",s.displayFn),e.R7$(2),e.Dyx(e.bMT(61,46,s.brandsFiltered$)),e.R7$(6),e.Y8G("formControlName","model"),e.R7$(),e.vxM(s.vehicleForm.get("model").hasError("maxlength")?66:-1),e.R7$(4),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",s.searchFuelControl)("matAutocomplete",l)("placeholder","Buscar combustible")("required",!0),e.R7$(),e.Y8G("displayWith",s.displayFn),e.R7$(2),e.Dyx(e.bMT(76,48,s.fuelsFiltered$)),e.R7$(6),e.Y8G("formControlName","vin"),e.R7$(),e.vxM(s.vehicleForm.get("vin").hasError("minlength")?81:-1),e.R7$(4),e.Y8G("formControlName","engineNumber"),e.R7$(),e.vxM(s.vehicleForm.get("engineNumber").hasError("maxlength")?86:-1),e.R7$(4),e.Y8G("formControlName","bodyNumber"),e.R7$(),e.vxM(s.vehicleForm.get("bodyNumber").hasError("maxlength")?91:-1),e.R7$(4),e.Y8G("formControlName","color"),e.R7$(),e.vxM(s.vehicleForm.get("color").hasError("maxlength")?96:-1),e.R7$(4),e.Y8G("formControlName","battery"),e.R7$(),e.vxM(s.vehicleForm.get("carPlayer").hasError("maxlength")?101:-1),e.R7$(4),e.Y8G("formControlName","carPlayer"),e.R7$(),e.vxM(s.vehicleForm.get("carPlayer").hasError("maxlength")?106:-1)}},dependencies:[V.Jj,n.YN,n.qT,n.me,n.BC,n.cb,n.YS,n.xh,n.tU,Y.jL,_e.uv,Y.$3,ce.wT,Y.pN,S.Hl,S.$z,X.X6,f.hM,g.RG,g.rl,g.nJ,g.TL,g.JW,M.m_,M.An,H.Ve,V.YU,n.X1,n.l_,n.j4,n.JD],encapsulation:2,changeDetection:0})}return r})();const Ie=r=>r.vehicleInspections,Yt=(0,u.Mz)(Ie,r=>r.vehicleInspection),le=(0,u.Mz)(Ie,r=>r.vehicleInspections);class ye{}var pe=p(32998);const Xt=x.J1`
    mutation CreateVehicleInspection($createVehicleInspectionInput: CreateVehicleInspectionInput!) {
        createVehicleInspection(createVehicleInspectionInput: $createVehicleInspectionInput) {

            ok
            message

            vehicleInspection {
                id
                userId
                no
                date
                locationId
                employeeId
                vehicleId
                tank_cover_fuel
                tank_cover_brake_fluid
                tank_cover_coolant_liquid
                tank_cover_windshield_water
                tank_cover_Oil
                radiator_cover
                oil_stick
                wheel_trim
                front_brushes
                tail_brush
                emblems
                inside_mirror
                outside_left_mirrors
                outside_right_mirrors
                cigar_lighter
                clock
                radio_player
                speakers
                bonnet_hydraulic_arm
                tailgate_hydraulic_arm
                rugs
                horn
                front_lights
                tail_lights
                third_stop
                cat
                wheel_wrench
                antenna
                air_conditioning
                engine_grill
                obs
            }

        }
    }
`,Jt=x.J1`
    mutation UpdateVehicleInspection($updateVehicleInspectionInput: UpdateVehicleInspectionInput!) {
        updateVehicleInspection(updateVehicleInspectionInput: $updateVehicleInspectionInput) {
            ok
            message

            vehicleInspection {
                id
                userId
                no
                date
                locationId
                employeeId
                vehicleId
                tank_cover_fuel
                tank_cover_brake_fluid
                tank_cover_coolant_liquid
                tank_cover_windshield_water
                tank_cover_Oil
                radiator_cover
                oil_stick
                wheel_trim
                front_brushes
                tail_brush
                emblems
                inside_mirror
                outside_left_mirrors
                outside_right_mirrors
                cigar_lighter
                clock
                radio_player
                speakers
                bonnet_hydraulic_arm
                tailgate_hydraulic_arm
                rugs
                horn
                front_lights
                tail_lights
                third_stop
                cat
                wheel_wrench
                antenna
                air_conditioning
                engine_grill
                obs
            }
        }
    }
`,Qt=(x.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVehicleInspectionStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,x.J1`
    mutation RemoveVehicleInspection($removeVehicleInspectionId: String!) {
        removeVehicleInspection(id: $removeVehicleInspectionId) {
            ok
            message
        }
    }
`),Ht=x.J1`
    query FindAllVehicleInspections($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllVehicleInspections(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            vehicleInspections {
                id
                no
                date

                locationId
                location {
                    name
                }

                employeeId
                employee {
                    fullname
                }

                vehicleId
                vehicle {
                    registrationNumber
                    customerId
                    customer {
                        id
                        name
                    }
                }
            }
        }
    }
`,qt=x.J1`
    query FindVehicleInspectionById($findVehicleInspectionByIdId: String!) {
        findVehicleInspectionById(id: $findVehicleInspectionByIdId) {
            ok
            message

            vehicleInspection {
                id
                userId
                no
                date
                locationId
                location {
                    name
                }

                employeeId
                employee {
                    fullname
                }

                vehicleId
                vehicle {
                    registrationNumber
                }

                tank_cover_fuel
                tank_cover_brake_fluid
                tank_cover_coolant_liquid
                tank_cover_windshield_water
                tank_cover_Oil
                radiator_cover
                oil_stick
                wheel_trim
                front_brushes
                tail_brush
                emblems
                inside_mirror
                outside_left_mirrors
                outside_right_mirrors
                cigar_lighter
                clock
                radio_player
                speakers
                bonnet_hydraulic_arm
                tailgate_hydraulic_arm
                rugs
                horn
                front_lights
                tail_lights
                third_stop
                cat
                wheel_wrench
                antenna
                air_conditioning
                engine_grill
                obs
            }
        }
    }
`;let he=(()=>{class r{constructor(t,o,s){this.apolloProvider=t,this._snackBar=o,this.store=s,this._apollo=this.apolloProvider.use("BALANC")}createVehicleInspection(t){return this.store.select(le).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:Xt,variables:{createVehicleInspectionInput:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s,data:i})=>{if(s){let l="";s.forEach(m=>l+=`\n ${m.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,A.cloneDeep)(o);a.push(i.createVehicleInspection.vehicleInspection),this.store.dispatch((0,pe.k3)({vehicleInspections:a}))}))))}getVehicleInspections(t=1,o=20,s="code",i="asc",a=""){return this._apollo.query({query:Ht,errorPolicy:"all",variables:{offset:o*(t-1),limit:o,sort:s,order:i,search:a}}).pipe((0,y.M)(({errors:l,data:m})=>{if(l){let E="";l.forEach(ee=>E+=`\n ${ee.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ne.Bp)({pagination:m.findAllVehicleInspections.pagination})),this.store.dispatch((0,pe.k3)({vehicleInspections:m.findAllVehicleInspections.vehicleInspections}))}))}getVehicleInspectionById(t){return this._apollo.query({query:qt,variables:{findVehicleInspectionByIdId:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:o,data:s})=>{if(o){let i="";o.forEach(a=>i+=`\n ${a.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,pe.$G)({vehicleInspection:s.findVehicleInspectionById.vehicleInspection}))}))}updateVehicleInspection(t){return this.store.select(le).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:Jt,variables:{updateVehicleInspectionInput:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s,data:i})=>{if(s){let m="";s.forEach(E=>m+=`\n ${E.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,A.cloneDeep)(o);a[o.findIndex(m=>m.id===t.id)]=i.updateVehicleInspection.vehicleInspection,this.store.dispatch((0,pe.k3)({vehicleInspections:a}))}))))}removeVehicleInspection(t){return this.store.select(le).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:Qt,variables:{removeVehicleInspectionId:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s})=>{if(s){let l="";s.forEach(m=>l+=`\n ${m.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,A.cloneDeep)(o),a=o.findIndex(l=>l.id===t);i.splice(a,1),this.store.dispatch((0,pe.k3)({vehicleInspections:i}))}))))}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(x.Ic),e.KVO(G.UG),e.KVO(u.il))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();const Kt=()=>["new"],Zt=r=>({"pointer-events-none":r}),eo=()=>[5,10,25,100],to=r=>[r];function oo(r,c){if(1&r){const t=e.RV6();e.j41(0,"div",25)(1,"div",26),e.EFF(2),e.k0s(),e.j41(3,"div",27),e.EFF(4),e.k0s(),e.j41(5,"div",23),e.EFF(6),e.k0s(),e.j41(7,"div",23),e.EFF(8),e.k0s(),e.j41(9,"div",28),e.EFF(10),e.nI1(11,"date"),e.k0s(),e.j41(12,"div",29)(13,"button",30),e.nrm(14,"mat-icon",31),e.k0s(),e.j41(15,"button",32),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG(4);return e.Njj(i.deleteVehicleInspection(s))}),e.nrm(16,"mat-icon",31),e.k0s()()()}if(2&r){const t=c.$implicit,o=c.$index;e.R7$(2),e.SpI(" ",o+1," "),e.R7$(2),e.SpI(" ",t.vehicle.registrationNumber," "),e.R7$(2),e.SpI(" ",t.vehicle.customer.name," "),e.R7$(2),e.SpI(" ",t.employee.fullname," "),e.R7$(2),e.SpI(" ",e.i5U(11,8,t.date,"dd/MM/yyyy")," "),e.R7$(3),e.Y8G("routerLink",e.eq3(11,to,t.id)),e.R7$(),e.Y8G("svgIcon","mat_solid:edit"),e.R7$(2),e.Y8G("svgIcon","mat_solid:delete")}}function ro(r,c){1&r&&e.Z7z(0,oo,17,13,"div",25,e.BUC().trackByFn,!0),2&r&&e.Dyx(c)}function so(r,c){if(1&r&&(e.j41(0,"div",19)(1,"div",21),e.nrm(2,"div",22),e.j41(3,"div"),e.EFF(4," Veh\xedculo "),e.k0s(),e.j41(5,"div",23),e.EFF(6," Cliente "),e.k0s(),e.j41(7,"div",23),e.EFF(8," Empleado "),e.k0s(),e.j41(9,"div",23),e.EFF(10," Fecha "),e.k0s(),e.j41(11,"div",23),e.EFF(12," Acciones "),e.k0s()(),e.DNE(13,ro,2,0),e.nI1(14,"async"),e.nrm(15,"mat-paginator",24),e.k0s()),2&r){let t;const o=e.XpG(2);e.R7$(13),e.vxM((t=e.bMT(14,7,o.vehicleInspections$))?13:-1,t),e.R7$(2),e.Y8G("ngClass",e.eq3(9,Zt,o.isLoading))("length",o.pagination.length)("pageIndex",o.pagination.page)("pageSize",o.pagination.size)("pageSizeOptions",e.lJ4(11,eo))("showFirstLastButtons",!0)}}function io(r,c){1&r&&(e.j41(0,"div",20),e.EFF(1," \xa1No se ha registrado ninguna inspecci\xf3n!"),e.k0s())}function no(r,c){1&r&&e.DNE(0,so,16,12,"div",19)(1,io,2,0,"div",20),2&r&&e.vxM(c.length>0?0:1)}let ao=(()=>{class r{constructor(t,o,s,i,a,l){this._vehicleInspectionsService=t,this._changeDetectorRef=o,this._dialog=s,this._fuseConfirmationService=i,this._snackBar=a,this.store=l,this.vehicleInspection=new ye,this.vehicleInspections$=(0,P.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.searchInputControl=new n.MJ,this.selectedSlide=null,this._unsubscribeAll=new I.B}ngOnInit(){this.vehicleInspections$=this.store.select(le),this.store.select(F.Dz).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,k.h)(this._sort.sortChange,this._paginator.page).pipe((0,h.n)(()=>(this.isLoading=!0,this._vehicleInspectionsService.getVehicleInspections(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,_.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteVehicleInspection(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la inspecci\xf3n: ${t.vehicle.registrationNumber}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,d.Q)(this._unsubscribeAll)).subscribe(s=>{"confirmed"===s&&this._vehicleInspectionsService.removeVehicleInspection(t.id).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.removeVehicleInspection.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}trackByFn(t,o){return o.id||t}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(he),e.rXU(e.gRc),e.rXU(f.bZ),e.rXU(z.G),e.rXU(G.UG),e.rXU(u.il))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["workshop-vehicle-inspections"]],viewQuery:function(o,s){if(1&o&&(e.GBs(b.iy,5),e.GBs(C.B4,5)),2&o){let i;e.mGM(i=e.lsd())&&(s._paginator=i.first),e.mGM(i=e.lsd())&&(s._sort=i.first)}},standalone:!0,features:[e.aNF],decls:30,vars:12,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-auto","sm:mb-18"],[1,"grid"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","inspections-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","inspections-grid","md:px-8"],[1,"hidden","font-mono","sm:block"],[1,"font-mono","truncate"],[1,"font-mono","text-center"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"]],template:function(o,s){if(1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Taller"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",7),e.EFF(14,"Inspecciones"),e.k0s()()(),e.j41(15,"div",8)(16,"h2",9),e.EFF(17," Inspecciones "),e.k0s()()(),e.j41(18,"div",10)(19,"mat-form-field",11),e.nrm(20,"mat-icon",12)(21,"input",13),e.k0s(),e.j41(22,"button",14),e.nrm(23,"mat-icon",15),e.j41(24,"span",16),e.EFF(25,"Agregar"),e.k0s()()()(),e.j41(26,"div",17)(27,"div",18),e.DNE(28,no,2,1),e.nI1(29,"async"),e.k0s()()()),2&o){let i;e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(8),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",s.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.R7$(),e.Y8G("routerLink",e.lJ4(11,Kt)),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(5),e.vxM((i=e.bMT(29,9,s.vehicleInspections$))?28:-1,i)}},dependencies:[V.Jj,V.vh,S.Hl,S.$z,g.RG,g.rl,g.JW,M.m_,M.An,Q.fS,Q.fg,b.Ou,b.iy,K.D6,W.mV,C.NQ,C.B4,V.YU,n.X1,n.me,n.BC,n.l_,N.Wk],encapsulation:2,changeDetection:0})}return r})();var Ee=p(29217);const Se=r=>({"cursor-not-allowed":r});function co(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",31),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.createVehicleInspection())}),e.nrm(1,"mat-icon",32),e.j41(2,"span",33),e.EFF(3,"Guardar"),e.k0s()()}if(2&r){const t=e.XpG();e.Y8G("disabled",t.inspectionForm.invalid)("ngClass",e.eq3(3,Se,t.inspectionForm.invalid)),e.R7$(),e.Y8G("svgIcon","mat_solid:save")}}function lo(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",31),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.updateVehicleInspection())}),e.nrm(1,"mat-icon",32),e.j41(2,"span",33),e.EFF(3,"Actualizar"),e.k0s()()}if(2&r){const t=e.XpG();e.Y8G("disabled",t.inspectionForm.invalid)("ngClass",e.eq3(3,Se,t.inspectionForm.invalid)),e.R7$(),e.Y8G("svgIcon","mat_solid:refresh")}}function po(r,c){if(1&r){const t=e.RV6();e.j41(0,"mat-option",34),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.selectEmployee(s))}),e.EFF(1),e.k0s()}if(2&r){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.fullname," ")}}function mo(r,c){if(1&r){const t=e.RV6();e.j41(0,"mat-option",34),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.selectVehicle(s))}),e.EFF(1),e.k0s()}if(2&r){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.registrationNumber," ")}}let uo=(()=>{class r{constructor(t,o,s,i,a,l,m,E){this._activatedRoute=t,this._changeDetectorRef=o,this._formBuilder=s,this._fuseConfirmationService=i,this._vehicleInspectionsService=a,this._snackBar=l,this._router=m,this.store=E,this.maxDate=new Date,this.editMode=!1,this.employees=[],this.employeeSelected="",this.inspections$=(0,P.of)([]),this.searchEmployeeControl=new n.MJ(""),this.searchInputControl=new n.MJ,this.searchVehicleControl=new n.MJ(""),this.selectedVehicleInspection=new ye,this.vehicleInspectionId=null,this.vehicles=[],this.vehicleSelected="",this._unsubscribeAll=new I.B}ngOnInit(){this.store.select(oe).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.vehicles=t,this._changeDetectorRef.markForCheck()}),this.vehiclesFiltered$=this.searchVehicleControl.valueChanges.pipe((0,U.Z)(""),(0,_.T)(t=>{const o="string"==typeof t?t:t?.registrationNumber;return o?this._filterVehicles(o):this.vehicles.slice()})),this.store.select(Ee.OB).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.employees=t,this._changeDetectorRef.markForCheck()}),this.employeesFiltered$=this.searchEmployeeControl.valueChanges.pipe((0,U.Z)(""),(0,_.T)(t=>{const o="string"==typeof t?t:t?.name;return o?this._filterEmployees(o):this.employees.slice()})),this.inspectionForm=this._formBuilder.group({id:[""],employeeId:[null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],vehicleId:[null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],date:[null,[n.k0.required]],tank_cover_fuel:[!1],tank_cover_brake_fluid:[!1],tank_cover_coolant_liquid:[!1],tank_cover_windshield_water:[!1],tank_cover_oil:[!1],radiator_cover:[!1],oil_stick:[!1],wheel_trim:[!1],front_brushes:[!1],tail_brush:[!1],emblems:[!1],inside_mirror:[!1],outside_left_mirrors:[!1],outside_right_mirrors:[!1],cigar_lighter:[!1],clock:[!1],radio_player:[!1],speakers:[!1],bonnet_hydraulic_arm:[!1],tailgate_hydraulic_arm:[!1],rugs:[!1],horn:[!1],front_lights:[!1],tail_lights:[!1],third_stop:[!1],cat:[!1],wheel_wrench:[!1],antenna:[!1],air_conditioning:[!1],engine_grill:[!1],obs:[null,[n.k0.maxLength(1e4)]]}),this._activatedRoute.params.pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({vehicleInspectionId:t})=>{this.vehicleInspectionId=t,"new"!==this.vehicleInspectionId&&(this.editMode=!0,this.store.select(Yt).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(o=>{this.selectedVehicleInspection=o,this.inspectionForm.patchValue(o),this.searchEmployeeControl.patchValue(o.employee),this.searchVehicleControl.patchValue(o.vehicle)})),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createVehicleInspection(){const t=this.inspectionForm.getRawValue();delete t.id,"generic"===t.type&&(delete t.stock,delete t.price),this._fuseConfirmationService.open({title:"Crear inspecci\xf3n",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._vehicleInspectionsService.createVehicleInspection(t).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:i.createVehicleInspection.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/vehicles-inspections")}),this._changeDetectorRef.markForCheck()})}updateVehicleInspection(){const t=this.inspectionForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Inspecci\xf3n",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._vehicleInspectionsService.updateVehicleInspection(t).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:i.updateVehicleInspection.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/vehicles-inspections")}),this._changeDetectorRef.markForCheck()})}selectEmployee(t){this.inspectionForm.get("employeeId").setValue(t.id)}selectVehicle(t){this.inspectionForm.get("vehicleId").setValue(t.id)}trackByFn(t,o){return o.id||t}displayFnEmployee(t){return t&&t.fullname?t.fullname:""}displayFnVehicle(t){return t&&t.registrationNumber?t.registrationNumber:""}_filterEmployees(t){const o=t.toLowerCase();return this.employees.filter(s=>s.name.toLowerCase().includes(o))}_filterVehicles(t){const o=t.toLowerCase();return this.vehicles.filter(s=>s.registrationNumber.toLowerCase().includes(o))}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(N.nX),e.rXU(e.gRc),e.rXU(n.ok),e.rXU(z.G),e.rXU(he),e.rXU(G.UG),e.rXU(N.Ix),e.rXU(u.il))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["workshop-vehicle-inspection-details"]],standalone:!0,features:[e.aNF],decls:127,vars:61,consts:[["employeeAutocomplete","matAutocomplete"],["vehicleAutocomplete","matAutocomplete"],["picker",""],["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","gap-5","p-3","overflow-y-auto","bg-cover","sm:absolute","sm:inset-0","dark:bg-transparent"],[1,"z-20","flex","flex-col","bg-transparent","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:px-5"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],["routerLink","/workshop/vehicles-inspections",1,"ml-1","text-primary-500"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","ngClass"],[1,"flex","flex-auto"],[1,"w-full",3,"formGroup","autocomplete"],[1,"flex","flex-col","gap-3","p-3","rounded-md","shadow-md","bg-card"],[1,"text-xl","font-semibold"],[1,"grid","grid-cols-1","gap-3","mt-5","sm:grid-cols-2","md:grid-cols-3"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[3,"displayWith"],[3,"value"],["matInput","",3,"formControlName","max","matDatepicker","placeholder"],["matIconSuffix","",3,"for"],[1,"col-span-3","mt-3","text-xl","font-semibold"],[1,"flex","flex-col","gap-3"],[3,"formControlName"],[1,"w-full","sm:col-span-3"],["matInput","","matTextareaAutosize","","maxlength","10000",3,"formControlName","rows"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click","disabled","ngClass"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"click","value"]],template:function(o,s){if(1&o&&(e.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"div")(4,"div",6)(5,"div")(6,"a",7),e.EFF(7,"Inicio"),e.k0s()(),e.j41(8,"div",8),e.nrm(9,"mat-icon",9),e.j41(10,"a",10),e.EFF(11,"Taller"),e.k0s()(),e.j41(12,"div",8),e.nrm(13,"mat-icon",9),e.j41(14,"a",11),e.EFF(15,"Inspecciones"),e.k0s()(),e.j41(16,"div",8),e.nrm(17,"mat-icon",9),e.j41(18,"a",10),e.EFF(19),e.k0s()()()()(),e.j41(20,"div",12),e.DNE(21,co,4,5,"button",13)(22,lo,4,5,"button",13),e.k0s()(),e.j41(23,"div",14)(24,"form",15)(25,"div",16)(26,"div",17),e.EFF(27," Informaci\xf3n de la inspecci\xf3n "),e.k0s(),e.j41(28,"div",18)(29,"mat-form-field",19)(30,"mat-label"),e.EFF(31,"Empleado"),e.k0s(),e.nrm(32,"mat-icon",20)(33,"input",21),e.j41(34,"mat-autocomplete",22,0),e.Z7z(36,po,2,2,"mat-option",23,e.fX1),e.nI1(38,"async"),e.k0s()(),e.j41(39,"mat-form-field",19)(40,"mat-label"),e.EFF(41,"Veh\xedculo"),e.k0s(),e.nrm(42,"mat-icon",20)(43,"input",21),e.j41(44,"mat-autocomplete",22,1),e.Z7z(46,mo,2,2,"mat-option",23,e.fX1),e.nI1(48,"async"),e.k0s()(),e.j41(49,"mat-form-field",19)(50,"mat-label"),e.EFF(51,"Fecha de la inspecci\xf3n"),e.k0s(),e.nrm(52,"input",24)(53,"mat-datepicker-toggle",25)(54,"mat-datepicker",null,2),e.k0s(),e.j41(56,"div",26),e.EFF(57," Inventario del veh\xedculo "),e.k0s(),e.j41(58,"div",27)(59,"mat-checkbox",28),e.EFF(60,"Tapa dep. combustible"),e.k0s(),e.j41(61,"mat-checkbox",28),e.EFF(62,"Tapa dep. L. Freno"),e.k0s(),e.j41(63,"mat-checkbox",28),e.EFF(64,"Tapa dep. L. Refrig."),e.k0s(),e.j41(65,"mat-checkbox",28),e.EFF(66,"Tapa dep. Parabrisas"),e.k0s(),e.j41(67,"mat-checkbox",28),e.EFF(68,"Tapa dep. Aceite"),e.k0s(),e.j41(69,"mat-checkbox",28),e.EFF(70,"Tapa radiador"),e.k0s(),e.j41(71,"mat-checkbox",28),e.EFF(72,"Varilla aceite"),e.k0s(),e.j41(73,"mat-checkbox",28),e.EFF(74,"Embellecedor ruedas"),e.k0s(),e.j41(75,"mat-checkbox",28),e.EFF(76,"Escobillas delanteras"),e.k0s(),e.j41(77,"mat-checkbox",28),e.EFF(78,"Escobilla trasera"),e.k0s()(),e.j41(79,"div",27)(80,"mat-checkbox",28),e.EFF(81,"Emblemas"),e.k0s(),e.j41(82,"mat-checkbox",28),e.EFF(83,"Retrovisor interior"),e.k0s(),e.j41(84,"mat-checkbox",28),e.EFF(85,"Retrovisores Ext Izq."),e.k0s(),e.j41(86,"mat-checkbox",28),e.EFF(87,"Retrovisores Ext Der."),e.k0s(),e.j41(88,"mat-checkbox",28),e.EFF(89,"Encendedor cigarros"),e.k0s(),e.j41(90,"mat-checkbox",28),e.EFF(91,"Reloj"),e.k0s(),e.j41(92,"mat-checkbox",28),e.EFF(93,"Radio Reproductora"),e.k0s(),e.j41(94,"mat-checkbox",28),e.EFF(95,"Parlantes"),e.k0s(),e.j41(96,"mat-checkbox",28),e.EFF(97,"Hidr\xe1ulicos Capot"),e.k0s(),e.j41(98,"mat-checkbox",28),e.EFF(99,"Hidr\xe1ulicos Port\xf3n Tras."),e.k0s()(),e.j41(100,"div",27)(101,"mat-checkbox",28),e.EFF(102,"Alfombras"),e.k0s(),e.j41(103,"mat-checkbox",28),e.EFF(104,"Claxon"),e.k0s(),e.j41(105,"mat-checkbox",28),e.EFF(106,"Luces Del."),e.k0s(),e.j41(107,"mat-checkbox",28),e.EFF(108,"Luces Tras."),e.k0s(),e.j41(109,"mat-checkbox",28),e.EFF(110,"3er stop"),e.k0s(),e.j41(111,"mat-checkbox",28),e.EFF(112,"Gato"),e.k0s(),e.j41(113,"mat-checkbox",28),e.EFF(114,"Llave Rueda"),e.k0s(),e.j41(115,"mat-checkbox",28),e.EFF(116,"Antena"),e.k0s(),e.j41(117,"mat-checkbox",28),e.EFF(118,"Aire Acondicionado"),e.k0s(),e.j41(119,"mat-checkbox",28),e.EFF(120,"Parrilla Motor"),e.k0s()(),e.j41(121,"div",26),e.EFF(122," Detalles resultantes en la inspecci\xf3n "),e.k0s(),e.j41(123,"mat-form-field",29)(124,"mat-label"),e.EFF(125,"Observaciones"),e.k0s(),e.nrm(126,"textarea",30),e.k0s()()()()()()),2&o){const i=e.sdS(35),a=e.sdS(45),l=e.sdS(55);e.R7$(9),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(2),e.JRh("new"===s.vehicleInspectionId?"Registrar Inspecci\xf3n":s.selectedVehicleInspection.vehicle.registrationNumber),e.R7$(2),e.vxM(s.editMode?-1:21),e.R7$(),e.vxM(s.editMode?22:-1),e.R7$(2),e.Y8G("formGroup",s.inspectionForm)("autocomplete","off"),e.R7$(8),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",s.searchEmployeeControl)("matAutocomplete",i)("placeholder","Buscar empleado")("required",!0),e.R7$(),e.Y8G("displayWith",s.displayFnEmployee),e.R7$(2),e.Dyx(e.bMT(38,57,s.employeesFiltered$)),e.R7$(6),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",s.searchVehicleControl)("matAutocomplete",a)("placeholder","Buscar veh\xedculo")("required",!0),e.R7$(),e.Y8G("displayWith",s.displayFnVehicle),e.R7$(2),e.Dyx(e.bMT(48,59,s.vehiclesFiltered$)),e.R7$(6),e.Y8G("formControlName","date")("max",s.maxDate)("matDatepicker",l)("placeholder","MM/DD/YYYY"),e.R7$(),e.Y8G("for",l),e.R7$(6),e.Y8G("formControlName","tank_cover_fuel"),e.R7$(2),e.Y8G("formControlName","tank_cover_brake_fluid"),e.R7$(2),e.Y8G("formControlName","tank_cover_coolant_liquid"),e.R7$(2),e.Y8G("formControlName","tank_cover_windshield_water"),e.R7$(2),e.Y8G("formControlName","tank_cover_oil"),e.R7$(2),e.Y8G("formControlName","radiator_cover"),e.R7$(2),e.Y8G("formControlName","oil_stick"),e.R7$(2),e.Y8G("formControlName","wheel_trim"),e.R7$(2),e.Y8G("formControlName","front_brushes"),e.R7$(2),e.Y8G("formControlName","tail_brush"),e.R7$(3),e.Y8G("formControlName","emblems"),e.R7$(2),e.Y8G("formControlName","inside_mirror"),e.R7$(2),e.Y8G("formControlName","outside_left_mirrors"),e.R7$(2),e.Y8G("formControlName","outside_right_mirrors"),e.R7$(2),e.Y8G("formControlName","cigar_lighter"),e.R7$(2),e.Y8G("formControlName","clock"),e.R7$(2),e.Y8G("formControlName","radio_player"),e.R7$(2),e.Y8G("formControlName","speakers"),e.R7$(2),e.Y8G("formControlName","bonnet_hydraulic_arm"),e.R7$(2),e.Y8G("formControlName","tailgate_hydraulic_arm"),e.R7$(3),e.Y8G("formControlName","rugs"),e.R7$(2),e.Y8G("formControlName","horn"),e.R7$(2),e.Y8G("formControlName","front_lights"),e.R7$(2),e.Y8G("formControlName","tail_lights"),e.R7$(2),e.Y8G("formControlName","third_stop"),e.R7$(2),e.Y8G("formControlName","cat"),e.R7$(2),e.Y8G("formControlName","wheel_wrench"),e.R7$(2),e.Y8G("formControlName","antenna"),e.R7$(2),e.Y8G("formControlName","air_conditioning"),e.R7$(2),e.Y8G("formControlName","engine_grill"),e.R7$(7),e.Y8G("formControlName","obs")("rows",2)}},dependencies:[V.Jj,n.YN,n.qT,n.me,n.BC,n.cb,n.YS,n.tU,Y.jL,_e.uv,Y.$3,ce.wT,Y.pN,S.Hl,S.$z,X.X6,X.Vh,X.bZ,X.bU,f.hM,g.RG,g.rl,g.nJ,g.JW,g.yw,M.m_,M.An,H.Ve,V.YU,n.X1,n.l_,n.j4,n.JD],encapsulation:2,changeDetection:0})}return r})();var de=p(59115),J=p(97586),$e=p(77235),L=p(82643),Re=p(63729);const we=r=>r.workshopOrders,ho=(0,u.Mz)(we,r=>r.workshopOrder),re=(0,u.Mz)(we,r=>r.workshopOrders);var De=p(70819),je=p(70152),fo=p(94425),_o=p(84713),vo=p(3899),Z=p(3177);const go=x.J1`
    mutation CreateWorkshopOrder($createWorkshopOrderInput: CreateWorkshopOrderInput!) {
        createWorkshopOrder(createWorkshopOrderInput: $createWorkshopOrderInput) {

            ok
            message

            workshopOrder {
                id
                status
                userId
                bossId
                locationId
                employeeId
                customerId
                serviceTypesId
                vehicleId
                inspectionId
                workshopId
                no
                products{
                    productId
                    quantity
                }
                comments
                obs
                estimatedTime
                initDate
                closeDate
            }

        }
    }
`,ko=x.J1`
    mutation UpdateWorkshopOrder($updateWorkshopOrderInput: UpdateWorkshopOrderInput!) {
        updateWorkshopOrder(updateWorkshopOrderInput: $updateWorkshopOrderInput) {
            ok
            message

            workshopOrder {
                id
                status
                userId
                bossId
                locationId
                employeeId
                customerId
                serviceTypesId
                vehicleId
                inspectionId
                workshopId
                no
                products {
                    productId
                    quantity
                }
                comments
                obs
                estimatedTime
                initDate
                closeDate
            }
        }
    }
`,bo=x.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateWorkshopOrderStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,Fo=x.J1`
    mutation CloseWorkshopOrder($closeWorkshopOrderInput: CloseWorkshopOrderInput!) {
        closeWorkshopOrder(closeWorkshopOrderInput: $closeWorkshopOrderInput) {
            ok
            message

            workshopOrder {
                id
                userId
                bossId
                status
                locationId

                employeeId
                employee {
                    fullname
                }

                customerId
                customer {
                    name
                    phoneNumber {
                        stateCode
                        phoneNumber
                    }
                }

                serviceTypesId
                serviceTypes {
                    name
                }

                vehicleId
                vehicle {
                    registrationNumber
                    brand {
                        name
                    }
                    fuel {
                        name
                    }
                }

                inspectionId
                inspection {
                    no
                    tank_cover_fuel
                    tank_cover_brake_fluid
                    tank_cover_coolant_liquid
                    tank_cover_windshield_water
                    tank_cover_Oil
                    radiator_cover
                    oil_stick
                    wheel_trim
                    front_brushes
                    tail_brush
                    emblems
                    inside_mirror
                    outside_left_mirrors
                    outside_right_mirrors
                    cigar_lighter
                    clock
                    radio_player
                    speakers
                    bonnet_hydraulic_arm
                    tailgate_hydraulic_arm
                    rugs
                    horn
                    front_lights
                    tail_lights
                    third_stop
                    cat
                    wheel_wrench
                    antenna
                    air_conditioning
                    engine_grill
                    obs
                }

                workshopId
                workshop {
                    name
                }

                products {
                    productId
                    quantity
                }
                productsInOrder {
                    id
                    name
                    uom {
                        abbr
                    }
                    price
                }


                services {
                    serviceId
                    quantity
                }
                servicesInOrder {
                    id
                    description
                    maxPrice
                    minPrice
                }

                no
                status
            }
        }
    }
`,xo=x.J1`
    mutation RemoveWorkshopOrder($removeWorkshopOrderId: String!) {
        removeWorkshopOrder(id: $removeWorkshopOrderId) {
            ok
            message
        }
    }
`,Co=x.J1`
    query FindAllWorkshopOrders($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllWorkshopOrders(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            workshopOrders {
                id
                userId
                bossId
                status
                locationId

                employeeId
                employee {
                    fullname
                }

                customerId
                customer {
                    name
                    phoneNumber {
                        stateCode
                        phoneNumber
                    }
                }

                serviceTypesId
                serviceTypes {
                    name
                }

                vehicleId
                vehicle {
                    registrationNumber
                    brand {
                        name
                    }
                    fuel {
                        name
                    }
                }

                inspectionId
                inspection {
                    no
                    tank_cover_fuel
                    tank_cover_brake_fluid
                    tank_cover_coolant_liquid
                    tank_cover_windshield_water
                    tank_cover_Oil
                    radiator_cover
                    oil_stick
                    wheel_trim
                    front_brushes
                    tail_brush
                    emblems
                    inside_mirror
                    outside_left_mirrors
                    outside_right_mirrors
                    cigar_lighter
                    clock
                    radio_player
                    speakers
                    bonnet_hydraulic_arm
                    tailgate_hydraulic_arm
                    rugs
                    horn
                    front_lights
                    tail_lights
                    third_stop
                    cat
                    wheel_wrench
                    antenna
                    air_conditioning
                    engine_grill
                    obs
                }

                workshopId
                workshop {
                    name
                }

                products {
                    productId
                    quantity
                }
                productsInOrder {
                    id
                    name
                    uom {
                        abbr
                    }
                    price
                }

                services {
                    serviceId
                    quantity
                }
                servicesInOrder {
                    id
                    description
                    maxPrice
                    minPrice
                }

                no
                status
            }
        }
    }
`,Io=x.J1`
    query FindWorkshopOrderById($findWorkshopOrderByIdId: String!) {
        findWorkshopOrderById(id: $findWorkshopOrderByIdId) {
            ok
            message

            workshopOrder {
                id
                userId
                bossId
                status
                locationId
                employeeId
                customerId

                serviceTypesId
                serviceTypes {
                    name
                }

                vehicleId
                vehicle {
                    id
                    customerId
                }

                inspectionId
                inspection {
                    id
                    no
                }

                workshopId
                no

                products {
                    productId
                    quantity
                }
                productsInOrder {
                    id
                    name
                    uom {
                        abbr
                    }
                    price
                }

                comments
                obs
                estimatedTime
                initDate
                closeDate
            }
        }
    }
`;let me=(()=>{class r{constructor(t,o,s){this.apolloProvider=t,this._snackBar=o,this.store=s,this._apollo=this.apolloProvider.use("BALANC")}createWorkshopOrder(t){return this.store.select(re).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:go,variables:{createWorkshopOrderInput:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s,data:i})=>{if(s){let l="";s.forEach(m=>l+=`\n ${m.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,A.cloneDeep)(o);a.push(i.createWorkshopOrder.workshopOrder),this.store.dispatch((0,Z.D2)({workshopOrders:a}))}))))}getWorkshopOrders(t=1,o=20,s="code",i="asc",a=""){return this._apollo.query({query:Co,errorPolicy:"all",variables:{offset:o*(t-1),limit:o,sort:s,order:i,search:a}}).pipe((0,y.M)(({errors:l,data:m})=>{if(l){let E="";l.forEach(ee=>E+=`\n ${ee.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ne.Bp)({pagination:m.findAllWorkshopOrders.pagination})),this.store.dispatch((0,Z.D2)({workshopOrders:m.findAllWorkshopOrders.workshopOrders}))}))}getWorkshopOrderById(t){return this._apollo.query({query:Io,variables:{findWorkshopOrderByIdId:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:o,data:s})=>{if(o){let i="";o.forEach(a=>i+=`\n ${a.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,Z.g0)({workshopOrder:s.findWorkshopOrderById.workshopOrder}))}))}updateWorkshopOrder(t){return this.store.select(re).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:ko,variables:{updateWorkshopOrderInput:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s,data:i})=>{if(s){let m="";s.forEach(E=>m+=`\n ${E.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,A.cloneDeep)(o);a[o.findIndex(m=>m.id===t.id)]=i.updateWorkshopOrder.workshopOrder,this.store.dispatch((0,Z.D2)({workshopOrders:a}))}))))}updateWorkshopOrderStatus(t){return this.store.select(re).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:bo,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s})=>{if(s){let l="";s.forEach(m=>l+=`\n ${m.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,A.cloneDeep)(o);i[o.findIndex(l=>l.id===t.id)].active=t.active,this.store.dispatch((0,Z.D2)({workshopOrders:i}))}))))}removeWorkshopOrder(t){return this.store.select(re).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:xo,variables:{removeWorkshopOrderId:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s})=>{if(s){let l="";s.forEach(m=>l+=`\n ${m.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,A.cloneDeep)(o),a=o.findIndex(l=>l.id===t);i.splice(a,1),this.store.dispatch((0,Z.D2)({workshopOrders:i}))}))))}closeWorkshopOrder(t){return this.store.select(re).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:Fo,variables:{closeWorkshopOrderInput:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s,data:i})=>{if(s){let m="";s.forEach(E=>m+=`\n ${E.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,A.cloneDeep)(o);a[o.findIndex(m=>m.id===t.workshopOrderId)]=i.closeWorkshopOrder.workshopOrder,this.store.dispatch((0,Z.D2)({workshopOrders:a}))}))))}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(x.Ic),e.KVO(G.UG),e.KVO(u.il))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var yo=p(98929);function Eo(r,c){if(1&r&&(e.j41(0,"mat-option",7),e.EFF(1),e.k0s()),2&r){const t=c.$implicit;e.Y8G("value",t.id),e.R7$(),e.JRh(t.name)}}function So(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," Debe seleccionar un m\xe9todo de pago. "),e.k0s())}function $o(r,c){if(1&r&&(e.j41(0,"mat-option",7),e.EFF(1),e.k0s()),2&r){const t=c.$implicit;e.Y8G("value",t.id),e.R7$(),e.JRh(t.name)}}function Ro(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," Debe seleccionar un tipo de operaci\xf3n. "),e.k0s())}function wo(r,c){if(1&r&&(e.j41(0,"mat-option",7),e.EFF(1),e.k0s()),2&r){const t=c.$implicit;e.Y8G("value",t.id),e.R7$(),e.Lme(" ",t.name," ",t.value," ")}}function Do(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," Debe seleccionar un tipo de cambio. "),e.k0s())}function jo(r,c){if(1&r&&(e.j41(0,"mat-option",7),e.EFF(1),e.k0s()),2&r){const t=c.$implicit;e.Y8G("value",t.value),e.R7$(),e.SpI("x",t.value,"")}}function Ao(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," Debe seleccionar un tipo de cambio. "),e.k0s())}function Wo(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," 'La suma del valor de los porcentajes en ambas monedas debe ser 1' "),e.k0s())}function Oo(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," 'La suma del valor de los porcentajes en ambas monedas debe ser 1' "),e.k0s())}let To=(()=>{class r{constructor(t,o,s,i,a,l){this.data=t,this._changeDetectorRef=o,this._formBuilder=s,this._dialogRef=i,this._snackBar=a,this.store=l,this.multipliers=[],this.operationTypes=[],this.paymentMethods=[],this.rates=[],this._unsubscribeAll=new I.B,this._fuseConfirmationService=(0,e.WQX)(z.G),this._workshopOrdersService=(0,e.WQX)(me),this.workshopOrder=t.workshopOrder}ngOnInit(){this.closeWorkshopOrderDataForm=this._formBuilder.group({workshopOrderId:new n.MJ(this.workshopOrder.id,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),paymentMethodId:new n.MJ(null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),operationTypeId:new n.MJ(null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),rateId:new n.MJ(null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),multiplier:new n.MJ(1,[n.k0.required,n.k0.min(1)]),currenciesPercents:this._formBuilder.group({cup:new n.MJ(1,[n.k0.required,n.k0.min(0),n.k0.max(1)]),usd:new n.MJ(0,[n.k0.required,n.k0.min(0),n.k0.max(1)])},{validators:this.validatePercentages("cup","usd")})}),this.store.select(yo.DC).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.multipliers=t,this._changeDetectorRef.markForCheck()}),this.store.select(fo.nK).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.operationTypes=t,this._changeDetectorRef.markForCheck()}),this.store.select(_o.xi).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.paymentMethods=t,this._changeDetectorRef.markForCheck()}),this.store.select(vo.o).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.rates=t,this._changeDetectorRef.markForCheck()}),this.closeWorkshopOrderDataForm.get("currenciesPercents.cup").valueChanges.pipe((0,je.B)(700)).subscribe(t=>{this.closeWorkshopOrderDataForm.get("currenciesPercents.usd").setValue(1-t),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}closeWorkshopOrder(){const t=this.closeWorkshopOrderDataForm.getRawValue();this._fuseConfirmationService.open({title:"Cerrar orden de trabajo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?\nSe crear\xe1 una factura inmediatamente.",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._workshopOrdersService.closeWorkshopOrder(t).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.closeWorkshopOrder.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}validatePercentages(t,o){return s=>{const i=s.get(t),a=s.get(o);if(!(i&&t&&a&&o&&(i.hasError("validPercentages")&&(delete i.errors.controlCup,i.updateValueAndValidity()),a.hasError("validPercentages")&&(delete a.errors.controlUsd,a.updateValueAndValidity()),i.value+a.value!==1)))return null;const l={validPercentages:"La suma del valor de los porcentajes en ambas monedas debe ser 1"};return i.setErrors(l),a.setErrors(l),l}}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(f.Vh),e.rXU(e.gRc),e.rXU(n.ok),e.rXU(f.CP),e.rXU(G.UG),e.rXU(u.il))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["workshop-order-close-dialog"]],standalone:!0,features:[e.aNF],decls:52,vars:23,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"w-full","p-8"],[1,"grid","w-full","grid-cols-1","gap-5","sm:grid-cols-2","md:grid-cols-3",3,"formGroup","autocomplete"],[1,"fuse-mat-dense"],[3,"formControlName"],[3,"value"],[1,"grid","grid-cols-1","gap-5","sm:grid-cols-2","sm:col-span-2",3,"formGroupName"],["matInput","","type","number","required","","min","0","max","1","step",".1",3,"formControlName","placeholder"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black/10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"click","color","disabled","matDialogClose"]],template:function(o,s){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"h2",2),e.EFF(3),e.k0s()(),e.j41(4,"div",3)(5,"form",4)(6,"mat-form-field",5)(7,"mat-label"),e.EFF(8,"M\xe9todo de pago"),e.k0s(),e.j41(9,"mat-select",6),e.Z7z(10,Eo,2,2,"mat-option",7,e.fX1),e.k0s(),e.DNE(12,So,2,0,"mat-error"),e.k0s(),e.j41(13,"mat-form-field",5)(14,"mat-label"),e.EFF(15,"Tipo de operaci\xf3n"),e.k0s(),e.j41(16,"mat-select",6),e.Z7z(17,$o,2,2,"mat-option",7,e.fX1),e.k0s(),e.DNE(19,Ro,2,0,"mat-error"),e.k0s(),e.j41(20,"mat-form-field",5)(21,"mat-label"),e.EFF(22,"Tipo de cambio"),e.k0s(),e.j41(23,"mat-select",6),e.Z7z(24,wo,2,3,"mat-option",7,e.fX1),e.k0s(),e.DNE(26,Do,2,0,"mat-error"),e.k0s(),e.j41(27,"mat-form-field",5)(28,"mat-label"),e.EFF(29,"Multiplicador"),e.k0s(),e.j41(30,"mat-select",6)(31,"mat-option",7),e.EFF(32,"x1"),e.k0s(),e.Z7z(33,jo,2,2,"mat-option",7,e.fX1),e.k0s(),e.DNE(35,Ao,2,0,"mat-error"),e.k0s(),e.j41(36,"form",8)(37,"mat-form-field",5)(38,"mat-label"),e.EFF(39,"Por ciento a facturar en CUP"),e.k0s(),e.nrm(40,"input",9),e.DNE(41,Wo,2,0,"mat-error"),e.k0s(),e.j41(42,"mat-form-field",5)(43,"mat-label"),e.EFF(44,"Por ciento a facturar en USD"),e.k0s(),e.nrm(45,"input",9),e.DNE(46,Oo,2,0,"mat-error"),e.k0s()()()(),e.j41(47,"div",10)(48,"button",11),e.EFF(49," Cancelar "),e.k0s(),e.j41(50,"button",12),e.bIt("click",function(){return s.closeWorkshopOrder()}),e.EFF(51," Agregar "),e.k0s()()()),2&o&&(e.R7$(3),e.SpI(" Cerrar orden de trabajo ",s.workshopOrder.no," "),e.R7$(2),e.Y8G("formGroup",s.closeWorkshopOrderDataForm)("autocomplete","off"),e.R7$(4),e.Y8G("formControlName","paymentMethodId"),e.R7$(),e.Dyx(s.paymentMethods),e.R7$(2),e.vxM(s.closeWorkshopOrderDataForm.get("paymentMethodId").hasError("required")?12:-1),e.R7$(4),e.Y8G("formControlName","operationTypeId"),e.R7$(),e.Dyx(s.operationTypes),e.R7$(2),e.vxM(s.closeWorkshopOrderDataForm.get("operationTypeId").hasError("required")?19:-1),e.R7$(4),e.Y8G("formControlName","rateId"),e.R7$(),e.Dyx(s.rates),e.R7$(2),e.vxM(s.closeWorkshopOrderDataForm.get("rateId").hasError("required")?26:-1),e.R7$(4),e.Y8G("formControlName","multiplier"),e.R7$(),e.Y8G("value",1),e.R7$(2),e.Dyx(s.multipliers),e.R7$(2),e.vxM(s.closeWorkshopOrderDataForm.get("multiplier").hasError("required")?35:-1),e.R7$(),e.Y8G("formGroupName","currenciesPercents"),e.R7$(4),e.Y8G("formControlName","cup")("placeholder","Ejemplo: 0.5"),e.R7$(),e.vxM(s.closeWorkshopOrderDataForm.get("currenciesPercents.cup").hasError("validPercentages")?41:-1),e.R7$(4),e.Y8G("formControlName","usd")("placeholder","Ejemplo: 0.5"),e.R7$(),e.vxM(s.closeWorkshopOrderDataForm.get("currenciesPercents.usd").hasError("validPercentages")?46:-1),e.R7$(2),e.Y8G("matDialogClose","cancelled"),e.R7$(2),e.Y8G("color","primary")("disabled",s.closeWorkshopOrderDataForm.invalid)("matDialogClose","confirmed"))},dependencies:[f.hM,f.tx,n.X1,n.qT,n.me,n.Q0,n.BC,n.cb,n.YS,n.VZ,n.zX,n.j4,n.JD,n.$R,g.RG,g.rl,g.nJ,g.TL,S.Hl,S.$z,H.Ve,H.VO,ce.wT],encapsulation:2})}return r})();class Ae{}class Vo{constructor(c,t){this.productId=c,this.quantity=t}}const Mo=()=>["new"],Po=r=>({"pointer-events-none":r}),Bo=()=>[5,10,25,100],No=(r,c)=>({"bg-yellow-600":r,"bg-emerald-600":c}),zo=r=>[r];function Lo(r,c){if(1&r&&(e.j41(0,"button",29),e.nrm(1,"mat-icon",28),e.k0s()),2&r){const t=e.XpG().$implicit;e.Y8G("routerLink",e.eq3(2,zo,t.id)),e.R7$(),e.Y8G("svgIcon","mat_solid:edit")}}function Uo(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",27),e.bIt("click",function(){e.eBV(t);const s=e.XpG().$implicit,i=e.XpG(2);return e.Njj(i.deleteWorkshopOrder(s))}),e.nrm(1,"mat-icon",28),e.k0s()}2&r&&(e.R7$(),e.Y8G("svgIcon","mat_solid:delete"))}function Yo(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",27),e.bIt("click",function(){e.eBV(t);const s=e.XpG().$implicit,i=e.XpG(2);return e.Njj(i.closeWorkshopOrderDialog(s))}),e.nrm(1,"mat-icon",28),e.k0s()}2&r&&(e.R7$(),e.Y8G("svgIcon","mat_solid:beenhere"))}function Xo(r,c){if(1&r){const t=e.RV6();e.j41(0,"div",22)(1,"div",24),e.EFF(2),e.k0s(),e.j41(3,"div",21),e.EFF(4),e.k0s(),e.j41(5,"div",21),e.EFF(6),e.k0s(),e.j41(7,"div",21),e.EFF(8),e.k0s(),e.j41(9,"div",21),e.EFF(10),e.k0s(),e.j41(11,"div",21),e.EFF(12),e.k0s(),e.j41(13,"div",21)(14,"span",25),e.EFF(15),e.k0s()(),e.j41(16,"div",26)(17,"button",27),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG(2);return e.Njj(i.printWorkshopOrder(s))}),e.nrm(18,"mat-icon",28),e.k0s(),e.DNE(19,Lo,2,4,"button",29)(20,Uo,2,1,"button",30)(21,Yo,2,1,"button",30),e.k0s()()}if(2&r){const t=c.$implicit;e.R7$(2),e.SpI(" ",t.no," "),e.R7$(2),e.SpI(" ",t.vehicle.registrationNumber," "),e.R7$(2),e.SpI(" ",t.customer.name," "),e.R7$(2),e.SpI(" ",t.employee.fullname," "),e.R7$(2),e.SpI(" ",t.inspection.no," "),e.R7$(2),e.SpI(" ",t.workshop.name," "),e.R7$(2),e.Y8G("ngClass",e.l_i(12,No,"open"===t.status,"close"===t.status)),e.R7$(),e.SpI(" ","open"===t.status?"ABIERTA":"CERRADA"," "),e.R7$(3),e.Y8G("svgIcon","mat_solid:print"),e.R7$(),e.vxM("open"===t.status?19:-1),e.R7$(),e.vxM("open"===t.status?20:-1),e.R7$(),e.vxM("open"===t.status?21:-1)}}function Jo(r,c){if(1&r&&(e.j41(0,"div",17)(1,"div",19)(2,"div",20),e.EFF(3," NO "),e.k0s(),e.j41(4,"div",21),e.EFF(5," Veh\xedculo "),e.k0s(),e.j41(6,"div",21),e.EFF(7," Cliente "),e.k0s(),e.j41(8,"div",21),e.EFF(9," Empleado "),e.k0s(),e.j41(10,"div",21),e.EFF(11," Inspecci\xf3n "),e.k0s(),e.j41(12,"div",21),e.EFF(13," Taller "),e.k0s(),e.j41(14,"div",21),e.EFF(15," Estado "),e.k0s(),e.j41(16,"div",21),e.EFF(17," Acciones "),e.k0s()(),e.Z7z(18,Xo,22,15,"div",22,e.BUC().trackByFn,!0),e.nrm(20,"mat-paginator",23),e.k0s()),2&r){const t=e.XpG();e.R7$(2),e.Y8G("mat-sort-header","no"),e.R7$(16),e.Dyx(t.workshopOrders),e.R7$(2),e.Y8G("ngClass",e.eq3(7,Po,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.lJ4(9,Bo))("showFirstLastButtons",!0)}}function Qo(r,c){1&r&&(e.j41(0,"div",18),e.EFF(1," \xa1No hay \xf3rdenes de trabajo creados para el negocio!"),e.k0s())}L.vfs=$e.b.vfs;let Ho=(()=>{class r{constructor(t,o,s,i){this._changeDetectorRef=t,this._dialog=o,this._snackBar=s,this.store=i,this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.searchInputControl=new n.MJ,this.selectedSlide=null,this.user=null,this.workshopOrder=new Ae,this.workshopOrders=[],this._unsubscribeAll=new I.B,this._workshopOrdersService=(0,e.WQX)(me),this._fuseConfirmationService=(0,e.WQX)(z.G)}ngOnInit(){this.store.select(Re.SW).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(De.Xb).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(re).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.workshopOrders=t,this._changeDetectorRef.markForCheck()}),this.store.select(F.Dz).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,k.h)(this._sort.sortChange,this._paginator.page).pipe((0,h.n)(()=>(this.isLoading=!0,this._workshopOrdersService.getWorkshopOrders(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,_.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteWorkshopOrder(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la orden de trabajo: ${t.no}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,d.Q)(this._unsubscribeAll)).subscribe(s=>{"confirmed"===s&&this._workshopOrdersService.removeWorkshopOrder(t.id).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.removeWorkshopOrder.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}generateOsPDF(t="open"){const o={content:[{table:{widths:["*","*","*"],headerRows:1,body:[[{text:"",border:[!0,!0,!1,!0]},{alignment:"center",text:"MODELO DE ORDEN DE TRABAJO",bold:!0,border:[!1,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{text:"No OT:",border:[!1,!0,!0,!0],bold:!0,fontFeatures:["c2sc","smcp"]}],[{alignment:"left",text:"DATOS DEL CLIENTE",bold:!0,border:[!0,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"DATOS DEL VEH\xcdCULO",bold:!0,border:[!1,!0,!0,!0],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{alignment:"left",text:"NOMBRE DE LA EMPRESA",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"MARCA",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"center",text:"SERVICIOS",bold:!0,fontFeatures:["c2sc","smcp"]}],[{rowSpan:2,text:""},{alignment:"left",text:"MODELO",bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"MEC\xc1NICA",bold:!0,fontFeatures:["c2sc","smcp"]}],[{},{alignment:"left",text:"MATR\xcdCULA",bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"CHAPISTER\xcdA",bold:!0,fontFeatures:["c2sc","smcp"]}],[{alignment:"left",text:"NOMBRE DEL CLIENTE",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"COLOR",bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"PINTURA",bold:!0,fontFeatures:["c2sc","smcp"]}],[{rowSpan:2,text:""},{alignment:"left",text:"BATER\xcdA",bold:!0,border:[!1,!1,!0,!1],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{},{alignment:"left",text:"REPRODUCTORA",bold:!0,border:[!1,!1,!0,!1],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{alignment:"left",text:"TEL\xc9FONO",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"COMBUSTIBLE",bold:!0,border:[!1,!1,!0,!0],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{alignment:"center",text:"INVENTARIO DEL VEH\xcdCULO",bold:!0,colSpan:3,fontFeatures:["c2sc","smcp"]},{},{}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:"Tapa dep. combustible",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Emblemas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Alfombras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. L. Freno",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Retrovisor interior",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Claxon",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. L. Refrig.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Retrovisores Ext Izq.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Luces Del.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. Parabrisas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Retrovisores Ext Der.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Luces Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. Aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Encendedor cigarros",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"3er stop",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa radiador",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Reloj",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Gato",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Varilla aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Radio Reproductora",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Llave Rueda",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Embellecedor ruedas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Parlantes",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Antena",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Escobillas delanteras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Hidr\xe1ulicos Capot",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Aire Acondicionado",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Escobilla trasera",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Hidr\xe1ulicos Port\xf3n Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Parrilla Motor",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Solicitud del cliente",colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{alignment:"center",text:"MATERIALES",bold:!0,colSpan:6,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"observaciones",colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:"elaborado",colSpan:4,border:[!0,!1,!1,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{},{},{},{text:"aprobado",colSpan:2,border:[!1,!1,!0,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{}]]}}],footer:(s,i)=>({table:{widths:["*","*"],body:[[{text:"MODELO DE ORDEN DE TRABAJO",bold:!0,fontSize:8},{text:`P\xe1gina ${s.toString()}/${i} - Fecha de impresi\xf3n ${J().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"],fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"]},totals_value:{alignment:"center",fontFeatures:["c2sc","smcp"]}},pageOrientation:"portrait",pageSize:"LETTER",info:{title:"MODELO DE ORDEN DE TRABAJO",author:`${this.user.name} ${this.user.lastname1} ${this.user.lastname2}`,creationDate:J().toDate(),modDate:J().toDate(),producer:this.merchant.name}};switch(t){case t="download":L.createPdf(o).download();break;case t="open":L.createPdf(o).open();break;case t="print":L.createPdf(o).print()}}printWorkshopOrder(t,o="open"){const s={content:[{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{colSpan:2,text:"",border:[!0,!0,!1,!0]},{text:""},{colSpan:2,alignment:"center",text:"MODELO DE ORDEN DE TRABAJO",bold:!0,border:[!1,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:2,color:"red",text:`No OT: ${t.no}`,border:[!1,!0,!0,!0],bold:!0,fontFeatures:["c2sc","smcp"]},{text:""}],[{colSpan:2,alignment:"left",text:"DATOS DEL CLIENTE",bold:!0,border:[!0,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:4,alignment:"left",text:"DATOS DEL VEH\xcdCULO",bold:!0,border:[!1,!0,!0,!0],fontFeatures:["c2sc","smcp"]},{text:""},{text:"",colSpan:2},{text:""}],[{colSpan:2,alignment:"left",text:"NOMBRE DE LA EMPRESA",bold:!0,fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:2,color:"red",alignment:"left",text:`MARCA: ${t.vehicle.brand.name}`,bold:!0,fontFeatures:["c2sc","smcp"],border:[!0,!0,!0,!1]},{text:""},{colSpan:2,alignment:"center",text:"SERVICIOS",bold:!0,fontFeatures:["c2sc","smcp"]},{text:""}],[{colSpan:2,color:"red",rowSpan:2,text:`${t.customer.name}`},{text:""},{colSpan:2,color:"red",alignment:"left",text:`MODELO: ${t.vehicle.model}`,bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{text:""},{alignment:"left",text:"MEC\xc1NICA",bold:!0,fontFeatures:["c2sc","smcp"]},{color:"red",alignment:"center",text:t.serviceTypes.findIndex(i=>"mec\xe1nica"===i.name.trim().toLocaleLowerCase())>-1?"X":""}],[{text:"",colSpan:2},{text:""},{colSpan:2,color:"red",alignment:"left",text:`MATR\xcdCULA: ${t.vehicle.registrationNumber}`,bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{text:""},{alignment:"left",text:"CHAPISTER\xcdA",bold:!0,fontFeatures:["c2sc","smcp"]},{color:"red",alignment:"center",text:t.serviceTypes.findIndex(i=>"chapister\xeda"===i.name.trim().toLocaleLowerCase())>-1?"X":""}],[{colSpan:2,alignment:"left",text:"NOMBRE DEL CLIENTE",bold:!0,fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:2,color:"red",alignment:"left",text:`COLOR: ${t.vehicle.color}`,bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{text:""},{alignment:"left",text:"PINTURA",bold:!0,fontFeatures:["c2sc","smcp"]},{color:"red",alignment:"center",text:t.serviceTypes.findIndex(i=>"pintura"===i.name.trim().toLocaleLowerCase())>-1?"X":""}],[{colSpan:2,color:"red",rowSpan:2,text:`${t.customer.name}`},{text:""},{colSpan:4,color:"red",alignment:"left",text:`BATER\xcdA: ${t.vehicle.battery}`,bold:!0,border:[!1,!1,!0,!1],fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""}],[{},{text:""},{color:"red",alignment:"left",text:`REPRODUCTORA: ${t.vehicle.carPlayer}`,bold:!0,border:[!1,!1,!0,!1],colSpan:4,fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""}],[{colSpan:2,color:"red",alignment:"left",text:"TEL\xc9FONO: workshopOrder.customer.phone",bold:!0,fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:4,color:"red",alignment:"left",text:`COMBUSTIBLE: ${t.vehicle.fuel.name}`,bold:!0,border:[!1,!1,!0,!0],fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""}],[{alignment:"center",text:"INVENTARIO DEL VEH\xcdCULO",bold:!0,colSpan:5,fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""},{},{text:""}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:"Tapa dep. combustible",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_fuel?"X":"",alignment:"center"},{text:"Emblemas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.emblems?"X":"",alignment:"center"},{text:"Alfombras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.rugs?"X":"",alignment:"center"}],[{text:"Tapa dep. L. Freno",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_brake_fluid?"X":"",alignment:"center"},{text:"Retrovisor interior",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.inside_mirror?"X":"",alignment:"center"},{text:"Claxon",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.horn?"X":"",alignment:"center"}],[{text:"Tapa dep. L. Refrig.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_coolant_liquid?"X":"",alignment:"center"},{text:"Retrovisores Ext Izq.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.outside_left_mirrors?"X":"",alignment:"center"},{text:"Luces Del.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.front_lights?"X":"",alignment:"center"}],[{text:"Tapa dep. Parabrisas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_windshield_water?"X":"",alignment:"center"},{text:"Retrovisores Ext Der.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.outside_right_mirrors?"X":"",alignment:"center"},{text:"Luces Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tail_lights?"X":"",alignment:"center"}],[{text:"Tapa dep. Aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_oil?"X":"",alignment:"center"},{text:"Encendedor cigarros",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.cigar_lighter?"X":"",alignment:"center"},{text:"3er stop",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.third_stop?"X":"",alignment:"center"}],[{text:"Tapa radiador",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.radiator_cover?"X":"",alignment:"center"},{text:"Reloj",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.clock?"X":"",alignment:"center"},{text:"Gato",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.cat?"X":"",alignment:"center"}],[{text:"Varilla aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.oil_stick?"X":"",alignment:"center"},{text:"Radio Reproductora",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.radio_player?"X":"",alignment:"center"},{text:"Llave Rueda",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.wheel_wrench?"X":"",alignment:"center"}],[{text:"Embellecedor ruedas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.wheel_trim?"X":"",alignment:"center"},{text:"Parlantes",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.speakers?"X":"",alignment:"center"},{text:"Antena",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.antenna?"X":"",alignment:"center"}],[{text:"Escobillas delanteras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tail_brush?"X":"",alignment:"center"},{text:"Hidr\xe1ulicos Capot",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.bonnet_hydraulic_arm?"X":"",alignment:"center"},{text:"Aire Acondicionado",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.air_conditioning?"X":"",alignment:"center"}],[{text:"Escobilla trasera",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tail_brush?"X":"",alignment:"center"},{text:"Hidr\xe1ulicos Port\xf3n Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tailgate_hydraulic_arm?"X":"",alignment:"center"},{text:"Parrilla Motor",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.engine_grill?"X":"",alignment:"center"}],[{color:"red",text:`Solicitud del cliente: ${t.comments}`,colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{alignment:"center",text:"MATERIALES",bold:!0,colSpan:6,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{colSpan:5,text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{},{},{},{},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],...t.productsInOrder.map(i=>[{color:"red",colSpan:5,text:i.name,bold:!0,fontFeatures:["c2sc","smcp"]},{},{},{},{},{color:"red",text:this._getProductQuantity(t.products,i.id),alignment:"center",bold:!0,fontFeatures:["c2sc","smcp"]}]),[{alignment:"center",text:"SERVICIOS",bold:!0,colSpan:6,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],...t.servicesInOrder.map(i=>[{color:"red",colSpan:6,text:i.description,bold:!0,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}]),[{color:"red",text:`observaciones: ${t.inspection.obs}`,colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{color:"red",text:`elaborado: ${t.employee.fullname}`,colSpan:4,border:[!0,!1,!1,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{},{},{},{text:"aprobado",colSpan:2,border:[!1,!1,!0,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{}]]}}],footer:(i,a)=>({table:{widths:["*","*"],body:[[{text:"MODELO DE ORDEN DE TRABAJO",bold:!0,fontSize:8},{text:`P\xe1gina ${i.toString()}/${a} - Fecha de impresi\xf3n ${J().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"],fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"]},totals_value:{alignment:"center",fontFeatures:["c2sc","smcp"]}},pageOrientation:"portrait",pageSize:"LETTER",info:{title:"MODELO DE ORDEN DE TRABAJO",author:`${this.user.name} ${this.user.lastname1} ${this.user.lastname2}`,creationDate:J().toDate(),modDate:J().toDate(),producer:this.merchant.name}};switch(o){case o="download":L.createPdf(s).download();break;case o="open":L.createPdf(s).open();break;case o="print":L.createPdf(s).print()}}trackByFn(t,o){return o.id||t}closeWorkshopOrderDialog(t){this._dialog.open(To,{data:{workshopOrder:t},panelClass:"ath-dialog-panel"})}_getProductQuantity(t,o){return t.find(s=>s.productId===o).quantity}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(e.gRc),e.rXU(f.bZ),e.rXU(G.UG),e.rXU(u.il))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["workshop-orders"]],viewQuery:function(o,s){if(1&o&&(e.GBs(b.iy,5),e.GBs(C.B4,5)),2&o){let i;e.mGM(i=e.lsd())&&(s._paginator=i.first),e.mGM(i=e.lsd())&&(s._sort=i.first)}},standalone:!0,features:[e.aNF],decls:31,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-auto","sm:mb-18"],[1,"grid"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","workshops-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[3,"mat-sort-header"],[1,"text-center"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","workshops-grid","md:px-8"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"truncate"],[1,"rounded-full","py-0.5","px-2.5",3,"ngClass"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7"]],template:function(o,s){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Taller"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",7),e.EFF(14,"\xd3rdenes de Trabajo"),e.k0s()()(),e.j41(15,"div",8)(16,"h2",9),e.EFF(17," \xd3rdenes de Trabajo "),e.k0s()()(),e.j41(18,"div",10)(19,"button",11),e.bIt("click",function(){return s.generateOsPDF()}),e.nrm(20,"mat-icon",12),e.j41(21,"span",13),e.EFF(22,"Descargar Modelo"),e.k0s()(),e.j41(23,"button",14),e.nrm(24,"mat-icon",12),e.j41(25,"span",13),e.EFF(26,"Agregar"),e.k0s()()()(),e.j41(27,"div",15)(28,"div",16),e.DNE(29,Jo,21,10,"div",17)(30,Qo,2,0,"div",18),e.k0s()()()),2&o&&(e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(8),e.Y8G("svgIcon","mat_solid:file_download"),e.R7$(3),e.Y8G("routerLink",e.lJ4(6,Mo)),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(5),e.vxM(s.workshopOrders.length>0?29:30))},dependencies:[S.Hl,S.$z,g.RG,M.m_,M.An,Q.fS,de.Cn,b.Ou,b.iy,K.D6,W.mV,C.NQ,C.B4,C.aE,V.YU,n.X1,N.Wk],encapsulation:2,changeDetection:0})}return r})();var qo=p(77581);const We=r=>r.workshopServices,se=((0,u.Mz)(We,r=>r.workshopService),(0,u.Mz)(We,r=>r.workshopServices));var Ko=p(13189),Oe=p(21607);const Te=r=>({"cursor-not-allowed":r});function Zo(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",40),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.createWorkshopOrder())}),e.nrm(1,"mat-icon",41),e.j41(2,"span",42),e.EFF(3,"Guardar"),e.k0s()()}if(2&r){const t=e.XpG();e.Y8G("disabled",t.workshopOrderForm.invalid)("ngClass",e.eq3(3,Te,t.workshopOrderForm.invalid)),e.R7$(),e.Y8G("svgIcon","mat_solid:save")}}function er(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",40),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.updateWorkshopOrder())}),e.nrm(1,"mat-icon",41),e.j41(2,"span",42),e.EFF(3,"Actualizar"),e.k0s()()}if(2&r){const t=e.XpG();e.Y8G("disabled",t.workshopOrderForm.invalid)("ngClass",e.eq3(3,Te,t.workshopOrderForm.invalid)),e.R7$(),e.Y8G("svgIcon","mat_solid:refresh")}}function tr(r,c){if(1&r){const t=e.RV6();e.j41(0,"mat-option",43),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.selectVehicleInspection(s))}),e.EFF(1),e.k0s()}if(2&r){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.no," ")}}function or(r,c){if(1&r&&(e.j41(0,"mat-option",26),e.EFF(1),e.k0s()),2&r){const t=c.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.name," ")}}function rr(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El taller del servicio es obligatorio "),e.k0s())}function sr(r,c){if(1&r&&(e.j41(0,"mat-option",26),e.EFF(1),e.k0s()),2&r){const t=c.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.name," ")}}function ir(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El tipo de servicio es obligatorio "),e.k0s())}function nr(r,c){if(1&r){const t=e.RV6();e.j41(0,"mat-option",43),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.addWorkshopServiceToOrder(s))}),e.EFF(1),e.k0s()}if(2&r){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.description," ")}}function ar(r,c){if(1&r){const t=e.RV6();e.j41(0,"div",47)(1,"div"),e.EFF(2),e.k0s(),e.j41(3,"div",48),e.EFF(4),e.k0s(),e.j41(5,"div",49),e.EFF(6),e.nI1(7,"number"),e.k0s(),e.j41(8,"div",49),e.EFF(9),e.nI1(10,"number"),e.k0s(),e.j41(11,"div",50)(12,"button",51),e.bIt("click",function(){const s=e.eBV(t).$index,i=e.XpG(2);return e.Njj(i.removeServiceToOrder(s))}),e.nrm(13,"mat-icon",52),e.k0s()()()}if(2&r){const t=c.$implicit,o=c.$index;e.R7$(2),e.SpI(" ",o+1," "),e.R7$(2),e.SpI(" ",t.description," "),e.R7$(2),e.SpI(" ",e.i5U(7,5,t.minPrice,"1.2-2")," "),e.R7$(3),e.SpI(" ",e.i5U(10,8,t.maxPrice,"1.2-2")," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:close")}}function cr(r,c){if(1&r&&(e.j41(0,"div",37)(1,"div",44),e.nrm(2,"div"),e.j41(3,"div",45),e.EFF(4," Descripci\xf3n "),e.k0s(),e.j41(5,"div",46),e.EFF(6," Precio M\xednimo "),e.k0s(),e.j41(7,"div",46),e.EFF(8," Precio M\xe1ximo "),e.k0s(),e.j41(9,"div",46),e.EFF(10," Quitar "),e.k0s()(),e.Z7z(11,ar,14,11,"div",47,e.BUC().trackByFn,!0),e.k0s()),2&r){const t=e.XpG();e.R7$(11),e.Dyx(t.orderServices)}}function lr(r,c){1&r&&(e.j41(0,"div",38),e.EFF(1," \xa1No ha seleccionado ning\xfan servicio a\xfan! "),e.k0s())}function pr(r,c){if(1&r){const t=e.RV6();e.j41(0,"mat-option",43),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.addProductToOrder(s))}),e.EFF(1),e.k0s()}if(2&r){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.name," ")}}function dr(r,c){if(1&r){const t=e.RV6();e.j41(0,"div",47)(1,"div"),e.EFF(2),e.k0s(),e.j41(3,"div",48),e.EFF(4),e.k0s(),e.j41(5,"div",46),e.EFF(6),e.k0s(),e.j41(7,"div",46)(8,"div",53)(9,"button",54),e.bIt("click",function(){const s=e.eBV(t),i=s.$implicit,a=s.$index,l=e.XpG(2);return e.Njj(l.decrementProductQty(a,i))}),e.nrm(10,"mat-icon",52),e.k0s(),e.j41(11,"mat-form-field",55)(12,"input",56),e.mxI("ngModelChange",function(s){const i=e.eBV(t).$implicit;return e.DH7(i.quantity,s)||(i.quantity=s),e.Njj(s)}),e.k0s()(),e.j41(13,"button",54),e.bIt("click",function(){const s=e.eBV(t),i=s.$implicit,a=s.$index,l=e.XpG(2);return e.Njj(l.incrementProductQty(a,i))}),e.nrm(14,"mat-icon",52),e.k0s()()(),e.j41(15,"div",49),e.EFF(16),e.nI1(17,"number"),e.k0s(),e.j41(18,"div",49),e.EFF(19),e.nI1(20,"number"),e.k0s(),e.j41(21,"div",50)(22,"button",51),e.bIt("click",function(){const s=e.eBV(t).$index,i=e.XpG(2);return e.Njj(i.removeProductToOrder(s))}),e.nrm(23,"mat-icon",52),e.k0s()()()}if(2&r){const t=c.$implicit,o=c.$index;e.R7$(2),e.SpI(" ",o+1," "),e.R7$(2),e.SpI(" ",t.name," "),e.R7$(2),e.SpI(" ",t.uom," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:remove"),e.R7$(2),e.R50("ngModel",t.quantity),e.R7$(2),e.Y8G("svgIcon","mat_solid:add"),e.R7$(2),e.SpI(" ",e.i5U(17,9,t.price,"1.2-2")," "),e.R7$(3),e.SpI(" ",e.i5U(20,12,t.quantity*t.price,"1.2-2")," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:close")}}function mr(r,c){if(1&r&&(e.j41(0,"div",37)(1,"div",44),e.nrm(2,"div"),e.j41(3,"div",45),e.EFF(4," Producto "),e.k0s(),e.j41(5,"div",46),e.EFF(6," Presentaci\xf3n "),e.k0s(),e.j41(7,"div",46),e.EFF(8," Cantidad "),e.k0s(),e.j41(9,"div",46),e.EFF(10," Precio "),e.k0s(),e.j41(11,"div",46),e.EFF(12," Total "),e.k0s(),e.j41(13,"div",46),e.EFF(14," Quitar "),e.k0s()(),e.Z7z(15,dr,24,15,"div",47,e.BUC().trackByFn,!0),e.k0s()),2&r){const t=e.XpG();e.R7$(15),e.Dyx(t.orderProducts)}}function ur(r,c){1&r&&(e.j41(0,"div",38),e.EFF(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.k0s())}let hr=(()=>{class r{constructor(t,o,s,i,a,l){this._activatedRoute=t,this._changeDetectorRef=o,this._formBuilder=s,this._snackBar=i,this._router=a,this.store=l,this.editMode=!1,this.employees=[],this.employeeSelected="",this.maxDate=new Date,this.orderProducts=[],this.orderServices=[],this.products=[],this.searchEmployeeControl=new n.MJ(""),this.searchInputControl=new n.MJ,this.searchProductControl=new n.MJ(""),this.searchVehicleControl=new n.MJ(""),this.searchVehicleInspectionControl=new n.MJ(""),this.searchWorkshopServiceControl=new n.MJ(""),this.selectedWorkshopOrder=new Ae,this.serviceTypes=[],this.total=0,this.vehicleInspections=[],this.vehicleInspectionSelected="",this.vehicles=[],this.vehicleSelected="",this.workshopOrderId=null,this.workshops=[],this.workshopServices=[],this._unsubscribeAll=new I.B,this._fuseConfirmationService=(0,e.WQX)(z.G),this._workshopOrdersService=(0,e.WQX)(me)}ngOnInit(){this.store.select(qo.jr).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.serviceTypes=t,this._changeDetectorRef.markForCheck()}),this.store.select(O).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.workshops=t,this._changeDetectorRef.markForCheck()}),this.store.select(se).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.workshopServices=t,this._changeDetectorRef.markForCheck()}),this.workshopServicesFiltered$=this.searchWorkshopServiceControl.valueChanges.pipe((0,U.Z)(""),(0,_.T)(t=>{const o="string"==typeof t?t:t?.description;return o?this._filterWorkshopServices(o):this.workshopServices.slice()})),this.store.select(oe).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.vehicles=t,this._changeDetectorRef.markForCheck()}),this.vehiclesFiltered$=this.searchVehicleControl.valueChanges.pipe((0,U.Z)(""),(0,_.T)(t=>{const o="string"==typeof t?t:t?.registrationNumber;return o?this._filterVehicles(o):this.vehicles.slice()})),this.store.select(le).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.vehicleInspections=t,this._changeDetectorRef.markForCheck()}),this.vehicleInspectionsFiltered$=this.searchVehicleInspectionControl.valueChanges.pipe((0,U.Z)(""),(0,_.T)(t=>{const o="string"==typeof t?t:t?.no;return o?this._filterVehicleInspections(o):this.vehicleInspections.slice()})),this.store.select(Ee.OB).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.employees=t,this._changeDetectorRef.markForCheck()}),this.employeesFiltered$=this.searchEmployeeControl.valueChanges.pipe((0,U.Z)(""),(0,_.T)(t=>{const o="string"==typeof t?t:t?.name;return o?this._filterEmployees(o):this.employees.slice()})),this.store.select(Ko.IP).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.products=t,this._changeDetectorRef.markForCheck()}),this.productsFiltered$=this.searchProductControl.valueChanges.pipe((0,U.Z)(""),(0,_.T)(t=>{const o="string"==typeof t?t:t?.name;return o?this._filterProducts(o):this.products.slice()})),this.workshopOrderForm=this._formBuilder.group({id:[""],customerId:[null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],employeeId:[null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],inspectionId:[null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],serviceTypesId:[[],[n.k0.required]],vehicleId:[null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],workshopId:[null,[n.k0.required,n.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],initDate:[null],closeDate:[null],products:[[]],services:[[]],comments:[null,[n.k0.maxLength(1e4)]]}),this._activatedRoute.params.pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({workshopOrderId:t})=>{this.workshopOrderId=t,"new"!==this.workshopOrderId&&(this.editMode=!0,this.store.select(ho).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(o=>{this.selectedWorkshopOrder=o,this.workshopOrderForm.patchValue(o),this.searchEmployeeControl.patchValue(o.employee),this.searchVehicleInspectionControl.patchValue(o.inspection),this.selectVehicleInspection(o.inspection),this.orderProducts=this._mapProductFromProductInOrder(o.productsInOrder,o.products)})),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createWorkshopOrder(){const t=this.workshopOrderForm.getRawValue();delete t.id;const o=[];for(const a of this.orderProducts)o.push(this._mapProductToWorkshopOrder(a));t.products=o;const s=[];if(this.orderServices.length>0)for(const a of this.orderServices)s.push({serviceId:a.id,quantity:1});t.services=s,this._fuseConfirmationService.open({title:"Crear orden de trabajo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(a=>{"confirmed"===a&&this._workshopOrdersService.createWorkshopOrder(t).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:l})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:l.createWorkshopOrder.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/workshop-orders")}),this._changeDetectorRef.markForCheck()})}updateWorkshopOrder(){const t=this.workshopOrderForm.getRawValue(),o=[];for(const a of this.orderProducts)o.push(this._mapProductToWorkshopOrder(a));t.products=o;const s=[];if(this.orderServices.length>0)for(const a of this.orderServices)s.push({serviceId:a.id,quantity:1});t.services=s,this._fuseConfirmationService.open({title:"Actualizar orden de trabajo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(a=>{"confirmed"===a&&this._workshopOrdersService.updateWorkshopOrder(t).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:l})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:l.updateWorkshopOrder.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/workshop-orders")}),this._changeDetectorRef.markForCheck()})}selectEmployee(t){this.workshopOrderForm.get("employeeId").setValue(t.id)}selectVehicle(t){this.workshopOrderForm.get("vehicleId").setValue(t.id)}selectVehicleInspection(t){this.workshopOrderForm.get("inspectionId").setValue(t.id),this.workshopOrderForm.get("employeeId").setValue(t.employeeId),this.editMode||this.workshopOrderForm.get("customerId").setValue(t.vehicle.customerId),this.workshopOrderForm.get("vehicleId").setValue(t.vehicleId),this._changeDetectorRef.markForCheck()}addWorkshopServiceToOrder(t){this.orderServices.findIndex(s=>s.id===t.id)>-1?this.searchWorkshopServiceControl.reset():(this.orderServices.push(t),this.searchWorkshopServiceControl.reset(),this._calculateOrderTotal())}addProductToOrder(t){if(this.orderProducts.findIndex(i=>i.productId===t.productId)>-1)return void this.searchProductControl.reset();const s=this._mapProductToOrder(t);this.orderProducts.push(s),this.searchProductControl.reset(),this._calculateOrderTotal()}incrementProductQty(t,o){const s=o;s.quantity++,this.orderProducts[t]=s,this._calculateOrderTotal()}decrementProductQty(t,o){const s=o;s.quantity--,this.orderProducts[t]=s,this._calculateOrderTotal()}removeProductToOrder(t){this.orderProducts.splice(t,1),this._calculateOrderTotal()}removeServiceToOrder(t){this.orderServices.splice(t,1),this._calculateOrderTotal()}trackByFn(t,o){return o.id||t}displayFnEmployee(t){return t&&t.fullname?t.fullname:""}displayFnVehicle(t){return t&&t.registrationNumber?t.registrationNumber:""}displayFnVehicleInspection(t){return t&&t.no?t.no:""}displayFnWorkshopService(t){return t&&t.description?t.description:""}displayFnProduct(t){return t&&t.name?t.name:""}_filterEmployees(t){const o=t.toLowerCase();return this.employees.filter(s=>s.name.toLowerCase().includes(o))}_filterVehicles(t){const o=t.toLowerCase();return this.vehicles.filter(s=>s.registrationNumber.toLowerCase().includes(o))}_filterVehicleInspections(t){const o=t.toLowerCase();return this.vehicleInspections.filter(s=>s.no.toLowerCase().includes(o))}_filterProducts(t){const o=t.toLowerCase();return this.products.filter(s=>s.name.toLowerCase().includes(o))}_filterWorkshopServices(t){const o=t.toLowerCase();return this.workshopServices.filter(s=>s.description.toLowerCase().includes(o))}_mapProductToOrder(t){const{productId:o,name:s,uom:i,price:a}=t;return new Oe.tz(o,s,i,a,1)}_mapProductFromProductInOrder(t,o){const s=[];for(const i of t)s.push(new Oe.tz(i.id,i.name,i.uom.abbr,i.price,this._getProductQuantity(o,i.id)));return s}_calculateOrderTotal(){const t=Number(this.orderProducts.reduce((s,i)=>i.price*i.quantity+s,0).toFixed(2));this.total=t+Number(()=>this.orderServices.reduce((s,i)=>i.maxPrice+s,0))}_mapProductToWorkshopOrder(t){const{productId:o,quantity:s}=t;return new Vo(o,s)}_getProductQuantity(t,o){return t.find(s=>s.productId===o).quantity}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(N.nX),e.rXU(e.gRc),e.rXU(n.ok),e.rXU(G.UG),e.rXU(N.Ix),e.rXU(u.il))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["workshop-order-details"]],standalone:!0,features:[e.aNF],decls:99,vars:48,consts:[["inspectionAutocomplete","matAutocomplete"],["initDatePicker",""],["closeDatePicker",""],["workshopServicesAutocomplete","matAutocomplete"],["productsAutocomplete","matAutocomplete"],["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","gap-5","p-3","overflow-y-auto","bg-cover","sm:absolute","sm:inset-0","dark:bg-transparent"],[1,"z-20","flex","flex-col","bg-transparent","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:px-5"],[1,"flex-1","min-w-0"],[1,"flex","items-center","overflow-hidden","font-medium","overflow-ellipsis"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],["routerLink","/workshop/workshop-orders",1,"ml-1","text-primary-500"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","ngClass"],[1,"flex","flex-auto"],[1,"flex","flex-col","w-full","gap-3","p-3","rounded-md","shadow-md","bg-card"],[1,"flex","flex-col","w-full","gap-3",3,"formGroup","autocomplete"],[1,"text-xl","font-semibold"],[1,"flex","flex-col","gap-3","mt-5"],[1,"grid","grid-cols-1","gap-3","mt-5","sm:grid-cols-2","md:grid-cols-5"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[3,"displayWith"],[3,"value"],["svgIcon","mat_solid:help","matTooltip","Taller donde se realizar\xe1 el servicio",1,"icon-size-4"],[3,"formControlName","required"],["multiple","",3,"formControlName","required"],["matInput","",3,"formControlName","matDatepicker","placeholder"],["matIconSuffix","",3,"for"],[1,"mt-3","text-xl","font-semibold"],[1,"w-full","fuse-mat-dense"],["matInput","","matTextareaAutosize","","maxlength","10000",3,"formControlName","rows"],["type","text","matInput","","autocomplete","off",3,"formControl","matAutocomplete","placeholder"],[1,"flex","flex-col","flex-auto","col-span-3","mt-2","overflow-hidden","sm:overflow-y-auto"],[1,"grid"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t"],[1,"flex","flex-col","flex-auto","col-span-3","mt-2","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click","disabled","ngClass"],[3,"svgIcon"],[1,"ml-2","mr-1","text-white"],[3,"click","value"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"hidden","text-left","sm:block"],[1,"hidden","text-center","sm:block"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"hidden","truncate","md:block"],[1,"hidden","font-mono","text-center","sm:block"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],[1,"fuse-mat-dense","fuse-mat-rounded"],["matInput","","type","text","pattern","^[0-9]+$","name","quantity",1,"font-mono","font-semibold","text-center",3,"ngModelChange","ngModel"]],template:function(o,s){if(1&o&&(e.j41(0,"div",5)(1,"div",6)(2,"div",7)(3,"div")(4,"div",8)(5,"div")(6,"a",9),e.EFF(7,"Inicio"),e.k0s()(),e.j41(8,"div",10),e.nrm(9,"mat-icon",11),e.j41(10,"a",12),e.EFF(11,"Taller"),e.k0s()(),e.j41(12,"div",10),e.nrm(13,"mat-icon",11),e.j41(14,"a",13),e.EFF(15,"\xd3rdenes de Servicios"),e.k0s()(),e.j41(16,"div",10),e.nrm(17,"mat-icon",11),e.j41(18,"a",12),e.EFF(19),e.k0s()()()()(),e.j41(20,"div",14),e.DNE(21,Zo,4,5,"button",15)(22,er,4,5,"button",15),e.k0s()(),e.j41(23,"div",16)(24,"div",17)(25,"form",18)(26,"div",19),e.EFF(27," Informaci\xf3n de la inspecci\xf3n "),e.k0s(),e.j41(28,"div",20)(29,"div",21)(30,"mat-form-field",22)(31,"mat-label"),e.EFF(32,"Inspecci\xf3n"),e.k0s(),e.nrm(33,"mat-icon",23)(34,"input",24),e.j41(35,"mat-autocomplete",25,0),e.Z7z(37,tr,2,2,"mat-option",26,e.fX1),e.nI1(39,"async"),e.k0s()(),e.j41(40,"mat-form-field",22)(41,"mat-label"),e.EFF(42,"Taller del servicio "),e.nrm(43,"mat-icon",27),e.k0s(),e.j41(44,"mat-select",28),e.Z7z(45,or,2,2,"mat-option",26,e.fX1),e.k0s(),e.DNE(47,rr,2,0,"mat-error"),e.k0s(),e.j41(48,"mat-form-field",22)(49,"mat-label"),e.EFF(50,"Tipo de servicio"),e.k0s(),e.j41(51,"mat-select",29),e.Z7z(52,sr,2,2,"mat-option",26,e.fX1),e.k0s(),e.DNE(54,ir,2,0,"mat-error"),e.k0s(),e.j41(55,"mat-form-field",22)(56,"mat-label"),e.EFF(57,"Fecha de inicio del servicio"),e.k0s(),e.nrm(58,"input",30)(59,"mat-datepicker-toggle",31)(60,"mat-datepicker",null,1),e.k0s(),e.j41(62,"mat-form-field",22)(63,"mat-label"),e.EFF(64,"Fecha de fin del servicio"),e.k0s(),e.nrm(65,"input",30)(66,"mat-datepicker-toggle",31)(67,"mat-datepicker",null,2),e.k0s()(),e.j41(69,"div",32),e.EFF(70," Comentarios del cliente en la solicitud "),e.k0s(),e.j41(71,"mat-form-field",33),e.nrm(72,"textarea",34),e.k0s(),e.j41(73,"div",19),e.EFF(74," Servicios a realizar "),e.k0s(),e.j41(75,"mat-form-field",22),e.nrm(76,"mat-icon",23)(77,"input",35),e.j41(78,"mat-autocomplete",25,3),e.Z7z(80,nr,2,2,"mat-option",26,e.fX1),e.nI1(82,"async"),e.k0s()(),e.j41(83,"div",36),e.DNE(84,cr,13,0,"div",37)(85,lr,2,0,"div",38),e.k0s(),e.j41(86,"div",32),e.EFF(87," Materiales necesarios "),e.k0s(),e.j41(88,"mat-form-field",22),e.nrm(89,"mat-icon",23)(90,"input",35),e.j41(91,"mat-autocomplete",25,4),e.Z7z(93,pr,2,2,"mat-option",26,e.fX1),e.nI1(95,"async"),e.k0s()()()(),e.j41(96,"div",39),e.DNE(97,mr,17,0,"div",37)(98,ur,2,0,"div",38),e.k0s()()()()),2&o){const i=e.sdS(36),a=e.sdS(61),l=e.sdS(68),m=e.sdS(79),E=e.sdS(92);e.R7$(9),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(2),e.SpI(" ","new"===s.workshopOrderId?"Registrar Inspecci\xf3n":s.selectedWorkshopOrder.no," "),e.R7$(2),e.vxM(s.editMode?-1:21),e.R7$(),e.vxM(s.editMode?22:-1),e.R7$(3),e.Y8G("formGroup",s.workshopOrderForm)("autocomplete","off"),e.R7$(8),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",s.searchVehicleInspectionControl)("matAutocomplete",i)("placeholder","Buscar inspecci\xf3n")("required",!0),e.R7$(),e.Y8G("displayWith",s.displayFnVehicleInspection),e.R7$(2),e.Dyx(e.bMT(39,42,s.vehicleInspectionsFiltered$)),e.R7$(7),e.Y8G("formControlName","workshopId")("required",!0),e.R7$(),e.Dyx(s.workshops),e.R7$(2),e.vxM(s.workshopOrderForm.get("workshopId").hasError("required")?47:-1),e.R7$(4),e.Y8G("formControlName","serviceTypesId")("required",!0),e.R7$(),e.Dyx(s.serviceTypes),e.R7$(2),e.vxM(s.workshopOrderForm.get("serviceTypesId").hasError("required")?54:-1),e.R7$(4),e.Y8G("formControlName","initDate")("matDatepicker",a)("placeholder","MM/DD/YYYY"),e.R7$(),e.Y8G("for",a),e.R7$(6),e.Y8G("formControlName","closeDate")("matDatepicker",l)("placeholder","MM/DD/YYYY"),e.R7$(),e.Y8G("for",l),e.R7$(6),e.Y8G("formControlName","comments")("rows",2),e.R7$(4),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",s.searchWorkshopServiceControl)("matAutocomplete",m)("placeholder","Buscar servicios de taller"),e.R7$(),e.Y8G("displayWith",s.displayFnWorkshopService),e.R7$(2),e.Dyx(e.bMT(82,44,s.workshopServicesFiltered$)),e.R7$(4),e.vxM(s.orderServices.length>0?84:85),e.R7$(5),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",s.searchProductControl)("matAutocomplete",E)("placeholder","Buscar productos"),e.R7$(),e.Y8G("displayWith",s.displayFnProduct),e.R7$(2),e.Dyx(e.bMT(95,46,s.productsFiltered$)),e.R7$(4),e.vxM(s.orderProducts.length>0?97:98)}},dependencies:[V.Jj,V.QX,n.YN,n.qT,n.me,n.BC,n.cb,n.YS,n.tU,n.R_,n.vS,M.m_,M.An,V.YU,Y.jL,_e.uv,Y.$3,ce.wT,Y.pN,X.X6,X.Vh,X.bZ,X.bU,f.hM,n.X1,n.l_,n.j4,n.JD,g.RG,g.rl,g.nJ,g.TL,g.JW,g.yw,S.Hl,S.$z,H.Ve,H.VO],encapsulation:2,changeDetection:0})}return r})();var fr=p(91401),ie=p(77978);const _r=x.J1`
    mutation CreateWorkshopService($createWorkshopServiceInput: CreateWorkshopServiceInput!) {
        createWorkshopService(createWorkshopServiceInput: $createWorkshopServiceInput) {

            ok
            message

            workshopService {
                id
                active
                no
                userId
                description
                minPrice
                maxPrice
                currencyId
                currency {
                    id
                    name
                    iso
                }
            }

        }
    }
`,vr=x.J1`
    mutation UpdateWorkshopService($updateWorkshopServiceInput: UpdateWorkshopServiceInput!) {
        updateWorkshopService(updateWorkshopServiceInput: $updateWorkshopServiceInput) {
            ok
            message

            workshopService {
                id
                active
                no
                userId
                description
                minPrice
                maxPrice
                currencyId
                currency {
                    id
                    name
                    iso
                }
            }
        }
    }
`,gr=x.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateWorkshopServiceStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,kr=x.J1`
    mutation RemoveWorkshopService($removeWorkshopServiceId: String!) {
        removeWorkshopService(id: $removeWorkshopServiceId) {
            ok
            message
        }
    }
`,br=x.J1`
    query FindWorkshopServices($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findWorkshopServices(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            workshopServices {
                id
                active
                no
                userId
                description
                minPrice
                maxPrice
                currencyId
                currency {
                    id
                    name
                    iso
                }
            }
        }
    }
`,Fr=x.J1`
    query FindAllWorkshopServices {
        findAllWorkshopServices {
            ok
            message

            workshopServices {
                no
                description
                minPrice
                maxPrice
                currency {
                    iso
                }
            }
        }
    }
`,xr=x.J1`
    query FindWorkshopServiceById($findWorkshopServiceByIdId: String!) {
        findWorkshopServiceById(id: $findWorkshopServiceByIdId) {
            ok
            message

            workshopService {
                id
                active
                no
                userId
                description
                minPrice
                maxPrice
                currencyId
                currency {
                    id
                    name
                    iso
                }
            }
        }
    }
`;let ve=(()=>{class r{constructor(t,o,s){this.apolloProvider=t,this._snackBar=o,this.store=s,this._apollo=this.apolloProvider.use("BALANC")}createWorkshopService(t){return this.store.select(se).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:_r,variables:{createWorkshopServiceInput:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s,data:i})=>{if(s){let l="";s.forEach(m=>l+=`\n ${m.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,A.cloneDeep)(o);a.push(i.createWorkshopService.workshopService),this.store.dispatch((0,ie.MU)({workshopServices:a}))}))))}getWorkshopServices(t=1,o=20,s="no",i="asc",a=""){return this._apollo.query({query:br,errorPolicy:"all",variables:{offset:o*(t-1),limit:o,sort:s,order:i,search:a}}).pipe((0,y.M)(({errors:l,data:m})=>{if(l){let E="";l.forEach(ee=>E+=`\n ${ee.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ne.Bp)({pagination:m.findWorkshopServices.pagination})),this.store.dispatch((0,ie.MU)({workshopServices:m.findWorkshopServices.workshopServices}))}))}getAllWorkshopServices(){return this._apollo.query({query:Fr,errorPolicy:"all"}).pipe((0,y.M)(({errors:t})=>{if(t){let o="";t.forEach(s=>o+=`\n ${s.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getWorkshopServiceById(t){return this._apollo.query({query:xr,variables:{findWorkshopServiceByIdId:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:o,data:s})=>{if(o){let i="";o.forEach(a=>i+=`\n ${a.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ie.ho)({workshopService:s.findWorkshopServiceById.workshopService}))}))}updateWorkshopService(t){return this.store.select(se).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:vr,variables:{updateWorkshopServiceInput:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s,data:i})=>{if(s){let m="";s.forEach(E=>m+=`\n ${E.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,A.cloneDeep)(o);a[o.findIndex(m=>m.id===t.id)]=i.updateWorkshopService.workshopService,this.store.dispatch((0,ie.MU)({workshopServices:a}))}))))}updateWorkshopServiceStatus(t){return this.store.select(se).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:gr,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s})=>{if(s){let l="";s.forEach(m=>l+=`\n ${m.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,A.cloneDeep)(o);i[o.findIndex(l=>l.id===t.id)].active=t.active,this.store.dispatch((0,ie.MU)({workshopServices:i}))}))))}removeWorkshopService(t){return this.store.select(se).pipe((0,D.s)(1),(0,h.n)(o=>this._apollo.mutate({mutation:kr,variables:{removeWorkshopServiceId:t},errorPolicy:"all"}).pipe((0,y.M)(({errors:s})=>{if(s){let l="";s.forEach(m=>l+=`\n ${m.message}.`),this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,A.cloneDeep)(o),a=o.findIndex(l=>l.id===t);i.splice(a,1),this.store.dispatch((0,ie.MU)({workshopServices:i}))}))))}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(x.Ic),e.KVO(G.UG),e.KVO(u.il))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Cr(r,c){1&r&&(e.j41(0,"h2",2),e.EFF(1," Agregar servicio de taller "),e.k0s())}function Ir(r,c){1&r&&(e.j41(0,"h2",2),e.EFF(1," Editar servicio de taller "),e.k0s())}function yr(r,c){if(1&r&&(e.j41(0,"div",4)(1,"div",7)(2,"div",8)(3,"div",9)(4,"div",10)(5,"h6",11),e.EFF(6,"Nombre"),e.k0s(),e.j41(7,"span",12),e.EFF(8),e.k0s()()()()()()),2&r){const t=e.XpG();e.R7$(8),e.JRh(t.data.workshopService.description||"Sin nombre")}}function Er(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," La descripci\xf3n del es obligatoria "),e.k0s())}function Sr(r,c){if(1&r&&(e.j41(0,"mat-option",19),e.EFF(1),e.k0s()),2&r){const t=c.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.iso," ")}}function $r(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," La moneda es obligatoria "),e.k0s())}function Rr(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El precio m\xednimo es obligatorio "),e.k0s())}function wr(r,c){1&r&&(e.j41(0,"mat-error"),e.EFF(1," El precio m\xe1ximo es obligatorio "),e.k0s())}function Dr(r,c){if(1&r&&(e.j41(0,"div",5)(1,"div",13)(2,"form",14)(3,"mat-form-field",15)(4,"mat-label"),e.EFF(5,"Descripci\xf3n"),e.k0s(),e.nrm(6,"input",16),e.j41(7,"mat-hint"),e.EFF(8,"Ejemplo: Monte y desmonte de caja"),e.k0s(),e.DNE(9,Er,2,0,"mat-error"),e.k0s(),e.j41(10,"mat-form-field",17)(11,"mat-label"),e.EFF(12,"Moneda"),e.k0s(),e.j41(13,"mat-select",18),e.Z7z(14,Sr,2,2,"mat-option",19,e.fX1),e.k0s(),e.DNE(16,$r,2,0,"mat-error"),e.k0s(),e.j41(17,"mat-form-field",17)(18,"mat-label"),e.EFF(19,"Precio M\xednimo"),e.k0s(),e.nrm(20,"input",20),e.DNE(21,Rr,2,0,"mat-error"),e.k0s(),e.j41(22,"mat-form-field",17)(23,"mat-label"),e.EFF(24,"Precio M\xe1ximo"),e.k0s(),e.nrm(25,"input",21),e.DNE(26,wr,2,0,"mat-error"),e.k0s()()()()),2&r){const t=e.XpG();e.R7$(2),e.Y8G("formGroup",t.workshopServiceForm)("autocomplete","off"),e.R7$(4),e.Y8G("formControlName","description")("placeholder","Ejemplo: Monte y desmonte de caja"),e.R7$(3),e.vxM(t.workshopServiceForm.get("description").hasError("required")?9:-1),e.R7$(4),e.Y8G("formControlName","currencyId")("required",!0),e.R7$(),e.Dyx(t.currencies),e.R7$(2),e.vxM(t.workshopServiceForm.get("currencyId").hasError("required")?16:-1),e.R7$(4),e.Y8G("formControlName","minPrice")("placeholder","0.00"),e.R7$(),e.vxM(t.workshopServiceForm.get("minPrice").hasError("required")?21:-1),e.R7$(4),e.Y8G("formControlName","maxPrice")("min",t.workshopServiceForm.get("minPrice").value)("placeholder","0.00"),e.R7$(),e.vxM(t.workshopServiceForm.get("maxPrice").hasError("required")?26:-1)}}function jr(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",24),e.bIt("click",function(){e.eBV(t);const s=e.XpG(2);return e.Njj(s.updateWorkshopService())}),e.EFF(1," Actualizar "),e.k0s()}if(2&r){const t=e.XpG(2);e.Y8G("color","primary")("disabled",t.workshopServiceForm.invalid)("matDialogClose","confirmed")}}function Ar(r,c){if(1&r){const t=e.RV6();e.j41(0,"button",24),e.bIt("click",function(){e.eBV(t);const s=e.XpG(2);return e.Njj(s.createWorkshopService())}),e.EFF(1," Agregar "),e.k0s()}if(2&r){const t=e.XpG(2);e.Y8G("color","primary")("disabled",t.workshopServiceForm.invalid)("matDialogClose","confirmed")}}function Wr(r,c){if(1&r&&(e.j41(0,"div",6)(1,"button",22),e.EFF(2," Cancelar "),e.k0s(),e.DNE(3,jr,2,3,"button",23)(4,Ar,2,3,"button",23),e.k0s()),2&r){const t=e.XpG();e.R7$(),e.Y8G("matDialogClose","cancelled"),e.R7$(2),e.vxM("edit"===t.data.dialogMode?3:-1),e.R7$(),e.vxM("add"===t.data.dialogMode?4:-1)}}let Or=(()=>{class r{constructor(t,o,s,i,a,l,m){this.data=t,this._changeDetectorRef=o,this._formBuilder=s,this._fuseConfirmationService=i,this._dialogRef=a,this._snackBar=l,this.store=m,this.currencies=[],this.maxDate=new Date,this.dialogMode="view",this._unsubscribeAll=new I.B,this._workshopServicesService=(0,e.WQX)(ve),this.dialogMode=t.dialogMode,this.workshopService=t.workshopService}ngOnInit(){this.workshopServiceForm=this._formBuilder.group({id:new n.MJ(null),description:new n.MJ(null,[n.k0.required,n.k0.maxLength(1e5)]),minPrice:new n.MJ(0,[n.k0.required,n.k0.min(0)]),maxPrice:new n.MJ(0,[n.k0.required]),currencyId:new n.MJ(null,[n.k0.required,n.k0.maxLength(100)])}),"edit"===this.dialogMode&&this.workshopServiceForm.patchValue(this.workshopService),this.store.select(fr.y$).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createWorkshopService(){let t=this.workshopServiceForm.getRawValue();t=(0,T.A)(t,["id"]),this._fuseConfirmationService.open({title:"Crear servicio de taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._workshopServicesService.createWorkshopService(t).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.createWorkshopService.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateWorkshopService(){const t=this.workshopServiceForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar servicio de taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._workshopServicesService.updateWorkshopService(t).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.updateWorkshopService.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(f.Vh),e.rXU(e.gRc),e.rXU(n.ok),e.rXU(z.G),e.rXU(f.CP),e.rXU(G.UG),e.rXU(u.il))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["workshop-service-dialog"]],standalone:!0,features:[e.aNF],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex-auto"],[1,"w-full","overflow-hidden"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black/10"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"flex","flex-col"],[1,"grid","w-full","grid-cols-1","gap-5","mt-3","sm:grid-cols-3",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-dense","sm:col-span-3"],["matInput","","type","text","required","","maxlength","50",3,"formControlName","placeholder"],[1,"w-full","fuse-mat-dense"],[3,"formControlName","required"],[3,"value"],["matInput","","type","number","required","","min","0",3,"formControlName","placeholder"],["matInput","","type","number","required","",3,"formControlName","min","placeholder"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"click","color","disabled","matDialogClose"]],template:function(o,s){1&o&&(e.j41(0,"div",0)(1,"div",1),e.DNE(2,Cr,2,0,"h2",2)(3,Ir,2,0,"h2",2),e.k0s(),e.j41(4,"div",3),e.DNE(5,yr,9,1,"div",4)(6,Dr,27,15,"div",5),e.k0s(),e.DNE(7,Wr,5,3,"div",6),e.k0s()),2&o&&(e.R7$(2),e.vxM("add"===s.data.dialogMode?2:-1),e.R7$(),e.vxM("edit"===s.data.dialogMode?3:-1),e.R7$(2),e.vxM("view"===s.data.dialogMode?5:-1),e.R7$(),e.vxM(6),e.R7$(),e.vxM("view"!==s.data.dialogMode?7:-1))},dependencies:[f.hM,f.tx,n.X1,n.qT,n.me,n.Q0,n.BC,n.cb,n.YS,n.tU,n.VZ,n.j4,n.JD,g.RG,g.rl,g.nJ,g.MV,g.TL,S.Hl,S.$z,H.Ve,H.VO,ce.wT],encapsulation:2})}return r})();var Tr=p(68824);class Vr{}const Gr=r=>({"pointer-events-none":r}),Mr=()=>[5,10,25,100];function Pr(r,c){if(1&r){const t=e.RV6();e.j41(0,"mat-slide-toggle",39),e.bIt("change",function(s){e.eBV(t);const i=e.XpG(),a=i.$implicit,l=i.$index,m=e.XpG(2);return e.Njj(m.updateRateStatus(s,a,l))}),e.k0s()}if(2&r){const t=e.XpG().$implicit;e.Y8G("checked",t.active)("color","primary")}}function Br(r,c){1&r&&e.nrm(0,"mat-spinner",35),2&r&&e.Y8G("diameter",20)("color","primary")}function Nr(r,c){if(1&r){const t=e.RV6();e.j41(0,"div",29)(1,"div",31),e.EFF(2),e.k0s(),e.j41(3,"div",32),e.EFF(4),e.k0s(),e.j41(5,"div",33),e.EFF(6),e.nI1(7,"currency"),e.k0s(),e.j41(8,"div",33),e.EFF(9),e.nI1(10,"currency"),e.k0s(),e.j41(11,"div",28),e.DNE(12,Pr,1,2,"mat-slide-toggle",34)(13,Br,1,2,"mat-spinner",35),e.k0s(),e.j41(14,"div",36)(15,"button",37),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG(2);return e.Njj(i.openDialog(s,"edit"))}),e.nrm(16,"mat-icon",38),e.k0s(),e.j41(17,"button",37),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG(2);return e.Njj(i.deleteWorkshopService(s))}),e.nrm(18,"mat-icon",38),e.k0s()()()}if(2&r){const t=c.$implicit,o=c.$index,s=e.XpG(2);e.R7$(2),e.SpI(" ",t.no," "),e.R7$(2),e.SpI(" ",t.description," "),e.R7$(2),e.SpI(" ",e.brH(7,8,t.minPrice,t.currency.iso+" ","symbol")," "),e.R7$(3),e.SpI(" ",e.brH(10,12,t.maxPrice,t.currency.iso+" ","symbol")," "),e.R7$(3),e.vxM(s.isSlideLoading&&s.selectedSlide===o?-1:12),e.R7$(),e.vxM(s.isSlideLoading&&s.selectedSlide===o?13:-1),e.R7$(3),e.Y8G("svgIcon","mat_solid:edit"),e.R7$(2),e.Y8G("svgIcon","mat_solid:delete")}}function zr(r,c){if(1&r&&(e.j41(0,"div",23)(1,"div",25)(2,"div",26),e.EFF(3," No "),e.k0s(),e.j41(4,"div",27),e.EFF(5," Descripci\xf3n "),e.k0s(),e.j41(6,"div",28),e.EFF(7," Precio M\xednimo "),e.k0s(),e.j41(8,"div",28),e.EFF(9," Precio M\xe1ximo "),e.k0s(),e.j41(10,"div",28),e.EFF(11," Estado "),e.k0s(),e.j41(12,"div",28),e.EFF(13," Acciones "),e.k0s()(),e.Z7z(14,Nr,19,16,"div",29,e.BUC().trackByFn,!0),e.nrm(16,"mat-paginator",30),e.k0s()),2&r){const t=e.XpG();e.R7$(2),e.Y8G("mat-sort-header","no"),e.R7$(12),e.Dyx(t.workshopServices),e.R7$(2),e.Y8G("ngClass",e.eq3(7,Gr,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.lJ4(9,Mr))("showFirstLastButtons",!0)}}function Lr(r,c){1&r&&(e.j41(0,"div",24),e.EFF(1," \xa1No hay servicios creados para el taller!"),e.k0s())}L.vfs=$e.b.vfs;let Ur=(()=>{class r{constructor(t,o,s,i){this._changeDetectorRef=t,this._dialog=o,this._snackBar=s,this.store=i,this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.searchInputControl=new n.MJ(""),this.selectedSlide=null,this.user=null,this.workshopService=new Vr,this.workshopServices=[],this._unsubscribeAll=new I.B,this._workshopServicesService=(0,e.WQX)(ve),this._fuseConfirmationService=(0,e.WQX)(z.G),this._fileSaverService=(0,e.WQX)(Tr.f)}ngOnInit(){this.store.select(Re.SW).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(De.Xb).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(se).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.workshopServices=t,this._changeDetectorRef.markForCheck()}),this.store.select(F.Dz).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,d.Q)(this._unsubscribeAll),(0,je.B)(300),(0,h.n)(t=>(this.isLoading=!0,this._workshopServicesService.getWorkshopServices(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,_.T)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,k.h)(this._sort.sortChange,this._paginator.page).pipe((0,h.n)(()=>(this.isLoading=!0,this._workshopServicesService.getWorkshopServices(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,_.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteWorkshopService(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la orden de trabajo: ${t.no}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,d.Q)(this._unsubscribeAll)).subscribe(s=>{"confirmed"===s&&this._workshopServicesService.removeWorkshopService(t.id).pipe((0,d.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.removeWorkshopService.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}updateRateStatus(t,o,s){this.isSlideLoading=!0,this.selectedSlide=s,this._workshopServicesService.updateWorkshopServiceStatus({id:o.id,active:t.checked}).subscribe(({data:i})=>{this._snackBar.openFromComponent(v.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:i.updateWorkshopServiceStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}openDialog(t,o){this._dialog.open(Or,{data:{workshopService:t,dialogMode:o},panelClass:"ath-dialog-panel"})}printWorkshopServicesList(t="open"){this._workshopServicesService.getAllWorkshopServices().pipe((0,D.s)(1)).subscribe(({data:o})=>{const s={header:{text:"Listado de servicios",style:"header",marginTop:5},content:[{lineHeight:1.3,table:{headerRows:1,widths:[60,"*",120,120],body:[[{text:"No.",style:"table_header"},{text:"Descripci\xf3n",style:"table_header",alignment:"left"},{text:"Precio M\xednimo",style:"table_header"},{text:"Precio M\xe1ximo",style:"table_header"}],...o.findAllWorkshopServices.workshopServices.map(i=>[{style:"table_body",text:i.no,alignment:"center"},{style:"table_body",text:i.description,alignment:"left"},{style:"table_body",text:i.currency.iso+" "+i.minPrice.toFixed(2),alignment:"right"},{style:"table_body",text:i.currency.iso+" "+i.maxPrice.toFixed(2),alignment:"right"}])]},layout:"lightHorizontalLines"}],footer:(i,a)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${this.user.name} ${this.user.lastname1} ${this.user.lastname2} | Esta informaci\xf3n es exclusiva de ${this.merchant.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${i.toString()}/${a} - Fecha de impresi\xf3n ${J().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"]},table_body:{fontSize:10}},pageOrientation:"landscape",pageSize:"LETTER",watermark:{text:this.merchant.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:"Listado de servicios",author:`${this.user.name} ${this.user.lastname1} ${this.user.lastname2}`,creationDate:J().toDate(),modDate:J().toDate(),producer:this.merchant.name}};switch(t){case t="download":L.createPdf(s).download();break;case t="open":L.createPdf(s).open();break;case t="print":L.createPdf(s).print()}})}exportWorkshopServicesListToExcel(){this._workshopServicesService.getAllWorkshopServices().pipe((0,D.s)(1)).subscribe(({data:t})=>{this._fileSaverService.exportAsExcelFile(t.findAllWorkshopServices.workshopServices,"Listado de servicios")})}trackByFn(t,o){return o.id||t}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(e.gRc),e.rXU(f.bZ),e.rXU(G.UG),e.rXU(u.il))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["workshop-services"]],viewQuery:function(o,s){if(1&o&&(e.GBs(b.iy,5),e.GBs(C.B4,5)),2&o){let i;e.mGM(i=e.lsd())&&(s._paginator=i.first),e.mGM(i=e.lsd())&&(s._sort=i.first)}},standalone:!0,features:[e.aNF],decls:42,vars:13,consts:[["itemMenu","matMenu"],[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"matMenuTriggerFor"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"xPosition"],["mat-menu-item","",3,"click"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-auto","sm:mb-18"],[1,"grid"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","workshops-services-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,"text-left"],[1,"text-center"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","workshops-services-grid","md:px-8"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"hidden","font-mono","sm:block"],[1,"text-left","truncate"],[1,"font-mono","text-center"],[3,"checked","color"],[3,"diameter","color"],[1,"flex","flex-row","items-center","justify-start","gap-1"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[3,"change","checked","color"]],template:function(o,s){if(1&o){const i=e.RV6();e.j41(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div")(5,"a",5),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",6),e.nrm(8,"mat-icon",7),e.j41(9,"a",8),e.EFF(10,"Taller"),e.k0s()(),e.j41(11,"div",6),e.nrm(12,"mat-icon",7),e.j41(13,"a",8),e.EFF(14,"Servicios"),e.k0s()()(),e.j41(15,"div",9)(16,"h2",10),e.EFF(17," Servicios "),e.k0s()()(),e.j41(18,"div",11)(19,"mat-form-field",12),e.nrm(20,"mat-icon",13)(21,"input",14),e.k0s(),e.j41(22,"button",15),e.nrm(23,"mat-icon",16),e.j41(24,"span",17),e.EFF(25,"Reportes"),e.k0s()(),e.j41(26,"mat-menu",18,0)(28,"button",19),e.bIt("click",function(){return e.eBV(i),e.Njj(s.printWorkshopServicesList())}),e.nrm(29,"mat-icon",16),e.EFF(30," Imprimir listado de servicios "),e.k0s(),e.j41(31,"button",19),e.bIt("click",function(){return e.eBV(i),e.Njj(s.exportWorkshopServicesListToExcel())}),e.nrm(32,"mat-icon",16),e.EFF(33," Exportar listado de servicios "),e.k0s()(),e.j41(34,"button",20),e.bIt("click",function(){return e.eBV(i),e.Njj(s.openDialog(s.workshopService,"add"))}),e.nrm(35,"mat-icon",16),e.j41(36,"span",17),e.EFF(37,"Agregar"),e.k0s()()()(),e.j41(38,"div",21)(39,"div",22),e.DNE(40,zr,17,10,"div",23)(41,Lr,2,0,"div",24),e.k0s()()()}if(2&o){const i=e.sdS(27);e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(8),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",s.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.R7$(),e.Y8G("matMenuTriggerFor",i),e.R7$(),e.Y8G("svgIcon","mat_solid:expand_more"),e.R7$(3),e.Y8G("xPosition","before"),e.R7$(3),e.Y8G("svgIcon","mat_solid:description"),e.R7$(3),e.Y8G("svgIcon","mat_solid:description"),e.R7$(3),e.Y8G("svgIcon","mat_solid:add"),e.R7$(5),e.vxM(s.workshopServices.length>0?40:41)}},dependencies:[V.oe,S.Hl,S.$z,g.RG,g.rl,g.JW,M.m_,M.An,Q.fS,Q.fg,de.Cn,de.kk,de.fb,de.Cp,b.Ou,b.iy,K.D6,K.LG,W.mV,W.sG,C.NQ,C.B4,C.aE,V.YU,n.X1,n.me,n.BC,n.l_],encapsulation:2,changeDetection:0})}return r})();var Yr=p(47399),Xr=p(23301),Jr=p(99433),Qr=p(57981),Hr=p(23285),qr=p(59013),Kr=p(71411),Zr=p(90225),ge=p(99437),ke=p(18810);let es=(()=>{class r{constructor(t,o){this._vehicleInspectionsService=t,this._router=o}resolve(t,o){const s=t.paramMap.get("vehicleInspectionId");if("new"!==s)return this._vehicleInspectionsService.getVehicleInspectionById(s).pipe((0,ge.W)(i=>{console.error(i);const a=o.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,ke.$)(i)}))}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(he),e.KVO(N.Ix))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Ve=(()=>{class r{constructor(t){this._vehicleInspectionsService=t}resolve(t,o){return this._vehicleInspectionsService.getVehicleInspections()}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(he))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),ts=(()=>{class r{constructor(t,o){this._vehiclesService=t,this._router=o}resolve(t,o){const s=t.paramMap.get("vehicleId");if("new"!==s)return this._vehiclesService.getVehicleById(s).pipe((0,ge.W)(i=>{console.error(i);const a=o.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,ke.$)(i)}))}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(ue),e.KVO(N.Ix))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),be=(()=>{class r{constructor(t){this._vehiclesService=t}resolve(t,o){return this._vehiclesService.getVehicles()}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(ue))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),os=(()=>{class r{constructor(t){this._workshopOrdersService=t}resolve(t,o){return this._workshopOrdersService.getWorkshopOrders()}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(me))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),rs=(()=>{class r{constructor(t,o){this._workshopOrdersService=t,this._router=o}resolve(t,o){const s=t.paramMap.get("workshopOrderId");if("new"!==s)return this._workshopOrdersService.getWorkshopOrderById(s).pipe((0,ge.W)(i=>{console.error(i);const a=o.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,ke.$)(i)}))}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(me),e.KVO(N.Ix))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Ge=(()=>{class r{constructor(t){this._workshopServicesService=t}resolve(t,o){return this._workshopServicesService.getWorkshopServices()}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(ve))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Me=(()=>{class r{constructor(t){this._workshopsService=t}resolve(t,o){return this._workshopsService.getWorkshops()}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(fe))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Pe=p(34413),ss=p(24121);const is=[{path:"",component:R},{path:"vehicles",component:St,resolve:{vehicles:be}},{path:"vehicles/:vehicleId",component:Ut,resolve:{brands:Yr.T,fuels:Jr.w,vehicle:ts}},{path:"vehicles-inspections",component:ao,resolve:{vehicles:Ve}},{path:"vehicles-inspections/:vehicleInspectionId",component:uo,resolve:{employees:Pe.wf,vehicles:be,locations:ss.FH,inspection:es}},{path:"workshops",component:dt,resolve:{workshops:Me}},{path:"workshop-orders",component:Ho,resolve:{multiplier:Qr.d,operationTypes:Hr.h,paymentMethods:qr.v,rates:Kr.Q,workshopOrders:os}},{path:"workshop-orders/:workshopOrderId",component:hr,resolve:{employees:Pe.wf,inspection:Ve,serviceTypes:Zr.f,vehicles:be,workshopOrder:rs,workshops:Me,workshopServices:Ge}},{path:"services",component:Ur,resolve:{currencies:Xr.p,workshopServices:Ge}}]},2578:function(q,B){var p,e;void 0!==(e="function"==typeof(p=function(){"use strict";function n(k,d,h){var _=new XMLHttpRequest;_.open("GET",k),_.responseType="blob",_.onload=function(){I(_.response,d,h)},_.onerror=function(){console.error("could not download file")},_.send()}function b(k){var d=new XMLHttpRequest;d.open("HEAD",k,!1);try{d.send()}catch{}return 200<=d.status&&299>=d.status}function W(k){try{k.dispatchEvent(new MouseEvent("click"))}catch{var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),k.dispatchEvent(d)}}var C="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,P=C.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),I=C.saveAs||("object"!=typeof window||window!==C?function(){}:"download"in HTMLAnchorElement.prototype&&!P?function(k,d,h){var _=C.URL||C.webkitURL,u=document.createElement("a");u.download=d=d||k.name||"download",u.rel="noopener","string"==typeof k?(u.href=k,u.origin===location.origin?W(u):b(u.href)?n(k,d,h):W(u,u.target="_blank")):(u.href=_.createObjectURL(k),setTimeout(function(){_.revokeObjectURL(u.href)},4e4),setTimeout(function(){W(u)},0))}:"msSaveOrOpenBlob"in navigator?function(k,d,h){if(d=d||k.name||"download","string"!=typeof k)navigator.msSaveOrOpenBlob(function R(k,d){return typeof d>"u"?d={autoBom:!1}:"object"!=typeof d&&(console.warn("Deprecated: Expected third argument to be a object"),d={autoBom:!d}),d.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(k.type)?new Blob(["\ufeff",k],{type:k.type}):k}(k,h),d);else if(b(k))n(k,d,h);else{var _=document.createElement("a");_.href=k,_.target="_blank",setTimeout(function(){W(_)})}}:function(k,d,h,_){if((_=_||open("","_blank"))&&(_.document.title=_.document.body.innerText="downloading..."),"string"==typeof k)return n(k,d,h);var u="application/octet-stream"===k.type,w=/constructor/i.test(C.HTMLElement)||C.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||u&&w||P)&&typeof FileReader<"u"){var O=new FileReader;O.onloadend=function(){var T=O.result;T=j?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),_?_.location.href=T:location=T,_=null},O.readAsDataURL(k)}else{var F=C.URL||C.webkitURL,f=F.createObjectURL(k);_?_.location=f:location.href=f,_=null,setTimeout(function(){F.revokeObjectURL(f)},4e4)}});C.saveAs=I.saveAs=I,q.exports=I})?p.apply(B,[]):p)&&(q.exports=e)}}]);