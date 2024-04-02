"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[6591],{76591:(cc,ot,f)=>{f.r(ot),f.d(ot,{default:()=>lc});var e=f(54438),v=f(60177),a=f(89417),V=f(96695),O=f(95416),A=f(2042),Re=f(30450),j=f(75351),I=f(88834),_=f(32102),R=f(99213),S=f(59042),w=f(59115),K=f(9183),H=f(51188),X=f(21413),me=f(57786),g=f(56977),G=f(70152),E=f(25558),N=f(96354),q=f(96697),x=f(97586),at=f(77235),ne=f(82643),$=f(59640),le=f(63729),oe=f(70819),pe=f(47413);const rt=s=>s.assistances,ie=((0,$.Mz)(rt,s=>s.assistance),(0,$.Mz)(rt,s=>s.assistances));var ae=f(46601),W=f(82798),Y=f(89079),ce=f(91401),D=f(94794),T=f(88141),he=f(51917),Fe=f(98216),F=f(73512);const Vt=F.J1`
    mutation CreateAssistance($createAssistanceInput: CreateAssistanceInput!) {
        createAssistance(createAssistanceInput: $createAssistanceInput) {

            ok
            message

            assistance {
                id
                active
                no
                userId
                description
                price
                currencyId
                currency {
                    id
                    name
                    iso
                }
                uomId
                uom {
                    id
                    name
                    abbr
                }
            }

        }
    }
`,qt=F.J1`
    mutation UpdateAssistance($updateAssistanceInput: UpdateAssistanceInput!) {
        updateAssistance(updateAssistanceInput: $updateAssistanceInput) {
            ok
            message

            assistance {
                id
                active
                no
                userId
                description
                price
                currencyId
                currency {
                    id
                    name
                    iso
                }
                uomId
                uom {
                    id
                    name
                    abbr
                }
            }
        }
    }
`,zt=F.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateAssistanceStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,Lt=F.J1`
    mutation RemoveAssistance($assistanceId: String!) {
        removeAssistance(id: $assistanceId) {
            ok
            message
        }
    }
`,Xt=F.J1`
    query FindAssistancesActive {
        findAssistancesActive {
            ok
            message

            assistances {
                id
                active
                no
                userId
                description
                price
                currencyId
                currency {
                    id
                    name
                    iso
                }
                uomId
                uom {
                    id
                    name
                    abbr
                }
            }
        }
    }
`,Qt=F.J1`
    query FindAssistances($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAssistances(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            assistances {
                id
                active
                no
                userId
                description
                price
                currencyId
                currency {
                    id
                    name
                    iso
                }
                uomId
                uom {
                    id
                    name
                    abbr
                }
            }
        }
    }
`,Ot=F.J1`
    query FindAllAssistances {
        findAllAssistances {
            ok
            message

            assistances {
                no
                description
                price
                currency {
                    iso
                }
                uomId
                uom {
                    id
                    name
                    abbr
                }
            }
        }
    }
`,Jt=F.J1`
    query FindAssistanceById($assistanceId: String!) {
        findAssistanceById(id: $assistanceId) {
            ok
            message

            assistance {
                id
                active
                no
                userId
                description
                price
                currencyId
                currency {
                    id
                    name
                    iso
                }
                uomId
                uom {
                    id
                    name
                    abbr
                }
            }
        }
    }
`;let $e=(()=>{class s{constructor(t,n){this.apolloProvider=t,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}createAssistance(t){return this.store.select(ie).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:Vt,variables:{createAssistanceInput:t},errorPolicy:"all"}).pipe((0,T.M)(({data:i})=>{const o=structuredClone(n);o.push(i.createAssistance.assistance),this.store.dispatch((0,he.Ab)({assistances:o}))}))))}getAssistances(t=1,n=20,i="no",o="asc",r=""){return this._apollo.query({query:Qt,errorPolicy:"all",variables:{offset:n*(t-1),limit:n,sort:i,order:o,search:r}}).pipe((0,T.M)(({data:c})=>{this.store.dispatch((0,Fe.Bp)({pagination:c.findAssistances.pagination})),this.store.dispatch((0,he.Ab)({assistances:c.findAssistances.assistances}))}))}getAssistancesActive(){return this._apollo.query({query:Xt,errorPolicy:"all"}).pipe((0,T.M)(({data:t})=>{this.store.dispatch((0,he.Ab)({assistances:t.findAssistancesActive.assistances}))}))}getAllAssistances(){return this._apollo.query({query:Ot,errorPolicy:"all"})}getAssistanceById(t){return this._apollo.query({query:Jt,variables:{assistanceId:t},errorPolicy:"all"}).pipe((0,T.M)(({data:n})=>{this.store.dispatch((0,he.Py)({assistance:n.findAssistanceById.assistance}))}))}updateAssistance(t){return this.store.select(ie).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:qt,variables:{updateAssistanceInput:t},errorPolicy:"all"}).pipe((0,T.M)(({data:i})=>{const o=structuredClone(n);o[n.findIndex(c=>c.id===t.id)]=i.updateAssistance.assistance,this.store.dispatch((0,he.Ab)({assistances:o}))}))))}updateAssistanceStatus(t){return this.store.select(ie).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:zt,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,T.M)(()=>{const i=structuredClone(n);i[n.findIndex(r=>r.id===t.id)].active=t.active,this.store.dispatch((0,he.Ab)({assistances:i}))}))))}removeAssistance(t){return this.store.select(ie).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:Lt,variables:{assistanceId:t},errorPolicy:"all"}).pipe((0,T.M)(({errors:i})=>{if(i)return;const o=structuredClone(n),r=n.findIndex(c=>c.id===t);o.splice(r,1),this.store.dispatch((0,he.Ab)({assistances:o}))}))))}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(F.Ic),e.KVO($.il))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Ut=f(17085),re=f(86600);function Wt(s,l){1&s&&(e.j41(0,"h2",7),e.EFF(1," Agregar servicio "),e.k0s())}function Zt(s,l){1&s&&(e.j41(0,"h2",7),e.EFF(1," Editar servicio "),e.k0s())}function Ht(s,l){if(1&s&&(e.j41(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),e.EFF(6,"Nombre"),e.k0s(),e.j41(7,"span",14),e.EFF(8),e.k0s()()()()()()),2&s){const t=e.XpG();e.R7$(8),e.JRh(t.data.assistance.description||"Sin nombre")}}const Kt=(s,l)=>l.id;function ei(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," La descripci\xf3n del es obligatoria "),e.k0s())}function ti(s,l){if(1&s&&(e.j41(0,"mat-option",23),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.iso," ")}}function ii(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," La moneda es obligatoria "),e.k0s())}function si(s,l){if(1&s&&(e.j41(0,"mat-option",23),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.abbr," ")}}function ni(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," La unidad de medida es obligatoria "),e.k0s())}function oi(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El precio es obligatorio "),e.k0s())}function ai(s,l){if(1&s&&(e.j41(0,"div",15)(1,"div",16)(2,"form",17)(3,"mat-form-field",18)(4,"mat-label"),e.EFF(5,"Descripci\xf3n"),e.k0s(),e.nrm(6,"input",19),e.j41(7,"mat-hint"),e.EFF(8,"Ejemplo: Monte y desmonte de caja"),e.k0s(),e.DNE(9,ei,2,0,"mat-error"),e.k0s(),e.j41(10,"mat-form-field",20)(11,"mat-label"),e.EFF(12,"Moneda"),e.k0s(),e.j41(13,"mat-select",21),e.Z7z(14,ti,2,2,"mat-option",23,e.fX1),e.k0s(),e.DNE(16,ii,2,0,"mat-error"),e.k0s(),e.j41(17,"mat-form-field",20)(18,"mat-label"),e.EFF(19,"Unidad de medida"),e.k0s(),e.j41(20,"mat-select",21),e.Z7z(21,si,2,2,"mat-option",23,Kt),e.k0s(),e.DNE(23,ni,2,0,"mat-error"),e.k0s(),e.j41(24,"mat-form-field",20)(25,"mat-label"),e.EFF(26,"Precio"),e.k0s(),e.nrm(27,"input",22),e.DNE(28,oi,2,0,"mat-error"),e.k0s()()()()),2&s){const t=e.XpG();e.R7$(2),e.Y8G("formGroup",t.assistanceForm)("autocomplete","off"),e.R7$(4),e.Y8G("formControlName","description")("placeholder","Ejemplo: Monte y desmonte de caja"),e.R7$(3),e.vxM(9,t.assistanceForm.get("description").hasError("required")?9:-1),e.R7$(4),e.Y8G("formControlName","currencyId")("required",!0),e.R7$(),e.Dyx(t.currencies),e.R7$(2),e.vxM(16,t.assistanceForm.get("currencyId").hasError("required")?16:-1),e.R7$(4),e.Y8G("formControlName","uomId")("required",!0),e.R7$(),e.Dyx(t.uoms),e.R7$(2),e.vxM(23,t.assistanceForm.get("uomId").hasError("required")?23:-1),e.R7$(4),e.Y8G("formControlName","price")("min",t.assistanceForm.get("price").value)("placeholder","0.00"),e.R7$(),e.vxM(28,t.assistanceForm.get("price").hasError("required")?28:-1)}}function ri(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",27),e.bIt("click",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.updateAssistance())}),e.EFF(1," Actualizar "),e.k0s()}if(2&s){const t=e.XpG(2);e.Y8G("color","primary")("disabled",t.assistanceForm.invalid)("matDialogClose","confirmed")}}function li(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",27),e.bIt("click",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.createAssistance())}),e.EFF(1," Agregar "),e.k0s()}if(2&s){const t=e.XpG(2);e.Y8G("color","primary")("disabled",t.assistanceForm.invalid)("matDialogClose","confirmed")}}function ci(s,l){if(1&s&&(e.j41(0,"div",24)(1,"button",25),e.EFF(2," Cancelar "),e.k0s(),e.DNE(3,ri,2,3,"button",26)(4,li,2,3,"button",26),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.Y8G("matDialogClose","cancelled"),e.R7$(2),e.vxM(3,"edit"===t.data.dialogMode?3:-1),e.R7$(),e.vxM(4,"add"===t.data.dialogMode?4:-1)}}let di=(()=>{class s{constructor(t){this.data=t,this.uoms=[],this.currencies=[],this.dialogMode="view",this.maxDate=new Date,this._assistancesService=(0,e.WQX)($e),this._changeDetectorRef=(0,e.WQX)(e.gRc),this._dialogRef=(0,e.WQX)(j.CP),this._destroyRef=(0,e.WQX)(e.abz),this._formBuilder=(0,e.WQX)(a.ok),this._fuseConfirmationService=(0,e.WQX)(ae.G),this._snackBar=(0,e.WQX)(O.UG),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il),this.dialogMode=t.dialogMode,this.assistance=t.assistance}ngOnInit(){this.assistanceForm=this._formBuilder.group({id:new a.MJ(null),description:new a.MJ(null,[a.k0.required,a.k0.maxLength(1e5)]),price:new a.MJ(0,[a.k0.required,a.k0.min(0)]),currencyId:new a.MJ(null,[a.k0.required,a.k0.maxLength(100)]),uomId:new a.MJ(null,[a.k0.required,a.k0.maxLength(100)])}),"edit"===this.dialogMode&&this.assistanceForm.patchValue(this.assistance),this.store.select(ce.y$).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()}),this.store.select(Ut.Ns).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.uoms=t,this._changeDetectorRef.markForCheck()})}closeDialog(){this._dialogRef.close()}createAssistance(){let t=this.assistanceForm.getRawValue();delete t.id,this._fuseConfirmationService.open({title:"Crear servicio",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._assistancesService.createAssistance(t).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:o})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.createAssistance.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateAssistance(){const t=this.assistanceForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar servicio de taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._assistancesService.updateAssistance(t).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:o})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.updateAssistance.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(j.Vh))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-assistance-dialog"]],standalone:!0,features:[e.aNF],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"grid","w-full","grid-cols-1","gap-5","mt-3","sm:grid-cols-3",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-dense","sm:col-span-3"],["matInput","","type","text","required","","maxlength","50",3,"formControlName","placeholder"],[1,"w-full","fuse-mat-dense"],[3,"formControlName","required"],["matInput","","type","number","required","",3,"formControlName","min","placeholder"],[3,"value"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1),e.DNE(2,Wt,2,0,"h2",2)(3,Zt,2,0,"h2",2),e.k0s(),e.j41(4,"div",3),e.DNE(5,Ht,9,1,"div",4)(6,ai,29,15,"div",5),e.k0s(),e.DNE(7,ci,5,3,"div",6),e.k0s()),2&n&&(e.R7$(2),e.vxM(2,"add"===i.data.dialogMode?2:-1),e.R7$(),e.vxM(3,"edit"===i.data.dialogMode?3:-1),e.R7$(2),e.vxM(5,"view"===i.data.dialogMode?5:-1),e.R7$(),e.vxM(6,6),e.R7$(),e.vxM(7,"view"!==i.data.dialogMode?7:-1))},dependencies:[I.Hl,I.$z,j.tx,_.RG,_.rl,_.nJ,_.MV,_.TL,S.fS,S.fg,W.Ve,W.VO,re.wT,a.X1,a.qT,a.me,a.Q0,a.BC,a.cb,a.YS,a.tU,a.VZ,a.j4,a.JD],encapsulation:2})}return s})();var Ve=f(68824);function ui(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-slide-toggle",40),e.bIt("change",function(i){e.eBV(t);const o=e.XpG(),r=o.$implicit,c=o.$index,d=e.XpG(2);return e.Njj(d.updateRateStatus(i,r,c))}),e.k0s()}if(2&s){const t=e.XpG().$implicit;e.Y8G("checked",t.active)("color","primary")}}function mi(s,l){1&s&&e.nrm(0,"mat-spinner",36),2&s&&e.Y8G("diameter",20)("color","primary")}function pi(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",30)(1,"div",31),e.EFF(2),e.k0s(),e.j41(3,"div",32),e.EFF(4),e.k0s(),e.j41(5,"div",33),e.EFF(6),e.k0s(),e.j41(7,"div",34),e.EFF(8),e.nI1(9,"currency"),e.k0s(),e.j41(10,"div",27),e.DNE(11,ui,1,2,"mat-slide-toggle",35)(12,mi,1,2,"mat-spinner",36),e.k0s(),e.j41(13,"div",37)(14,"button",38),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(2);return e.Njj(r.openDialog(o,"edit"))}),e.nrm(15,"mat-icon",39),e.k0s(),e.j41(16,"button",38),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(2);return e.Njj(r.deleteAssistance(o))}),e.nrm(17,"mat-icon",39),e.k0s()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.XpG(2);e.R7$(2),e.SpI(" ",n+1," "),e.R7$(2),e.SpI(" ",t.no," "),e.R7$(2),e.SpI(" ",t.description," "),e.R7$(2),e.SpI(" ",e.brH(9,8,t.price,t.currency.iso+" ","symbol")," "),e.R7$(3),e.vxM(11,i.isSlideLoading&&i.selectedSlide===n?-1:11),e.R7$(),e.vxM(12,i.isSlideLoading&&i.selectedSlide===n?12:-1),e.R7$(3),e.Y8G("svgIcon","mat_solid:edit"),e.R7$(2),e.Y8G("svgIcon","mat_solid:delete")}}const hi=s=>({"pointer-events-none":s}),fi=()=>[5,10,25,100];function gi(s,l){if(1&s&&(e.j41(0,"div",24)(1,"div",25)(2,"div",26),e.EFF(3," No "),e.k0s(),e.j41(4,"div",27),e.EFF(5," C\xf3digo "),e.k0s(),e.j41(6,"div",28),e.EFF(7," Descripci\xf3n "),e.k0s(),e.j41(8,"div",27),e.EFF(9," Precio "),e.k0s(),e.j41(10,"div",27),e.EFF(11," Estado "),e.k0s(),e.j41(12,"div",27),e.EFF(13," Acciones "),e.k0s()(),e.Z7z(14,pi,18,12,"div",41,e.BUC().trackByFn),e.nrm(16,"mat-paginator",29),e.k0s()),2&s){const t=e.XpG();e.R7$(2),e.Y8G("mat-sort-header","no"),e.R7$(12),e.Dyx(t.assistances),e.R7$(2),e.Y8G("ngClass",e.eq3(7,hi,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.lJ4(9,fi))("showFirstLastButtons",!0)}}function _i(s,l){1&s&&(e.j41(0,"div",42),e.EFF(1," \xa1No hay servicios creados para el negocio!"),e.k0s())}ne.vfs=at.b.vfs;let bi=(()=>{class s{constructor(){this.assistance=null,this.assistances=[],this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.searchInputControl=new a.MJ(""),this.selectedSlide=null,this.user=null,this._assistancesService=(0,e.WQX)($e),this._changeDetectorRef=(0,e.WQX)(e.gRc),this._dialog=(0,e.WQX)(j.bZ),this._fileSaverService=(0,e.WQX)(Ve.f),this._fuseConfirmationService=(0,e.WQX)(ae.G),this._snackBar=(0,e.WQX)(O.UG),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.store.select(le.SW).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(oe.Xb).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(ie).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.assistances=t,this._changeDetectorRef.markForCheck()}),this.store.select(pe.D).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(300),(0,E.n)(t=>(this.isLoading=!0,this._assistancesService.getAssistances(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,N.T)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,me.h)(this._sort.sortChange,this._paginator.page).pipe((0,E.n)(()=>(this.isLoading=!0,this._assistancesService.getAssistances(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,N.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteAssistance(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la orden de trabajo: ${t.no}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,g.Q)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._assistancesService.removeAssistance(t.id).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:o})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.removeAssistance.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}updateRateStatus(t,n,i){this.isSlideLoading=!0,this.selectedSlide=i,this._assistancesService.updateAssistanceStatus({id:n.id,active:t.checked}).subscribe(({data:o})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.updateAssistanceStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}openDialog(t,n){this._dialog.open(di,{data:{assistance:t,dialogMode:n},width:"90%",panelClass:"ath-dialog-panel",disableClose:!0})}printAssistancesList(t="open"){this._assistancesService.getAllAssistances().pipe((0,q.s)(1)).subscribe(({data:n})=>{let i={header:{text:"Listado de servicios",style:"header",marginTop:5},content:[{lineHeight:1.3,table:{headerRows:1,widths:[60,120,"*",120],body:[[{text:"No.",style:"table_header"},{text:"C\xf3digo",style:"table_header"},{text:"Descripci\xf3n",style:"table_header",alignment:"left"},{text:"Precio M\xednimo",style:"table_header"}],...n.findAllAssistances.assistances.map((o,r)=>[{style:"table_body",text:r+1,alignment:"center"},{style:"table_body",text:o.no,alignment:"center"},{style:"table_body",text:o.description,alignment:"left"},{style:"table_body",text:o.currency.iso+" "+o.price.toFixed(2),alignment:"right"}])]},layout:"lightHorizontalLines"}],footer:(o,r)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${this.user.fullname} | Esta informaci\xf3n es exclusiva de ${this.merchant.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${o.toString()}/${r} - Fecha de impresi\xf3n ${x().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"]},table_body:{fontSize:10}},pageOrientation:"landscape",pageSize:"LETTER",watermark:{text:this.merchant.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:"Listado de servicios",author:`${this.user.fullname}`,creationDate:x().toDate(),modDate:x().toDate(),producer:this.merchant.name}};switch(t){case t="download":ne.createPdf(i).download();break;case t="open":ne.createPdf(i).open();break;case t="print":ne.createPdf(i).print()}})}exportAssistancesListToExcel(){this._assistancesService.getAllAssistances().pipe((0,q.s)(1)).subscribe(({data:t})=>{this._fileSaverService.exportAsExcelFile(t.findAllAssistances.assistances,"Listado de servicios")})}trackByFn(t,n){return n.id||t}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-assistances"]],viewQuery:function(n,i){if(1&n&&(e.GBs(V.iy,5),e.GBs(A.B4,5)),2&n){let o;e.mGM(o=e.lsd())&&(i._paginator=o.first),e.mGM(o=e.lsd())&&(i._sort=o.first)}},standalone:!0,features:[e.aNF],decls:42,vars:14,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"matMenuTriggerFor"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"xPosition"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-auto","sm:mb-18"],["class","grid"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","assistances-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,"text-center"],[1,"text-left"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","assistances-grid","md:px-8"],[1,"hidden","font-mono","sm:block"],[1,"hidden","font-mono","text-center","sm:block"],[1,"text-left","truncate"],[1,"font-mono","text-center"],[3,"checked","color"],[3,"diameter","color"],[1,"flex","flex-row","items-center","justify-start","gap-1"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[3,"checked","color","change"],["class","grid items-center gap-4 px-6 py-3 border-b assistances-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Ventas"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",7),e.EFF(14,"Servicios"),e.k0s()()(),e.j41(15,"div",8)(16,"h2",9),e.EFF(17," Servicios "),e.k0s()()(),e.j41(18,"div",10)(19,"mat-form-field",11),e.nrm(20,"mat-icon",12)(21,"input",13),e.k0s(),e.j41(22,"button",14),e.nrm(23,"mat-icon",15),e.j41(24,"span",16),e.EFF(25,"Reportes"),e.k0s()(),e.j41(26,"mat-menu",17,18)(28,"button",19),e.bIt("click",function(){return i.printAssistancesList()}),e.nrm(29,"mat-icon",15),e.EFF(30," Imprimir listado de servicios "),e.k0s(),e.j41(31,"button",19),e.bIt("click",function(){return i.exportAssistancesListToExcel()}),e.nrm(32,"mat-icon",15),e.EFF(33," Exportar listado de servicios "),e.k0s()(),e.j41(34,"button",20),e.bIt("click",function(){return i.openDialog(i.assistance,"add")}),e.nrm(35,"mat-icon",15),e.j41(36,"span",16),e.EFF(37,"Agregar"),e.k0s()()()(),e.j41(38,"div",21)(39,"div",22),e.DNE(40,gi,17,10,"div",23)(41,_i,2,0),e.k0s()()()),2&n){const o=e.sdS(27);e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(7),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.R7$(),e.Y8G("matMenuTriggerFor",o),e.R7$(),e.Y8G("svgIcon","mat_solid:expand_more"),e.R7$(3),e.Y8G("xPosition","before"),e.R7$(3),e.Y8G("svgIcon","mat_solid:description"),e.R7$(3),e.Y8G("svgIcon","mat_solid:description"),e.R7$(3),e.Y8G("svgIcon","mat_solid:add"),e.R7$(5),e.vxM(40,i.assistances.length>0?40:41)}},dependencies:[v.oe,I.Hl,I.$z,_.RG,_.rl,_.JW,R.m_,R.An,S.fS,S.fg,V.Ou,V.iy,A.NQ,A.B4,A.aE,w.Cn,w.kk,w.fb,w.Cp,Re.mV,Re.sG,K.D6,K.LG,v.YU,a.X1,a.me,a.BC,a.l_,H.Wk],styles:[".assistances-grid[_ngcontent-%COMP%]{grid-template-columns:50px 100px 200px 100px 75px 75px}@media (min-width: 600px){.assistances-grid[_ngcontent-%COMP%]{grid-template-columns:20px 200px auto 200px 75px 75px 100px}}"],changeDetection:0})}return s})();var z=f(60850),te=f(82765),k=f(25084),J=f(14823),B=f(7673),L=f(99172),Q=f(31397),ee=f(70980),je=f(56808),qe=f(98929),_e=f(13189),be=f(64193);const yi=F.J1`
    mutation CreateOffer($createOfferInput: CreateOfferInput!) {
        createOffer(createOfferInput: $createOfferInput) {
            ok
            message

            offer {
                id
                no
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                createdAt
                currencyId
                currency {
                    iso
                }
                status
                customerId
                customer {
                    name
                    address
                    city
                    state
                    nit
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }
                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                total
                subtotal
                discount
                date
            }
        }
    }

`,Ci=F.J1`
    mutation UpdateOffer($updateOfferInput: UpdateOfferInput!) {
        updateOffer(updateOfferInput: $updateOfferInput) {
            ok
            message

            offer {
                id
                no
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                createdAt
                currencyId
                currency {
                    iso
                }
                status
                customerId
                customer {
                    name
                    address
                    city
                    state
                    nit
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }

                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                total
                subtotal
                discount
                date
            }
        }
    }
`,vi=F.J1`
    mutation RemoveOffer($removeOfferId: String!) {
        removeOffer(id: $removeOfferId) {
            ok
            message
        }
    }
`,Fi=F.J1`
    query FindAllOffers($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllOffers(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            offers {
                id
                no
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                createdAt
                currencyId
                currency {
                    iso
                }
                status
                customerId
                customer {
                    name
                    address
                    city
                    state
                    nit
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }
                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                total
                subtotal
                discount
                date
            }
        }
    }
`,xi=F.J1`
    query FindOfferById($findOfferById: String!) {
        offer(id: $findOfferById) {
            ok
            message

            offer {
                id
                no
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                createdAt
                currencyId
                currency {
                    iso
                }
                status
                customerId
                customer {
                    name
                    address
                    city
                    state
                    nit
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }
                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                total
                subtotal
                discount
                date
            }
        }
    }
`,ki=F.J1`
    mutation UpdateOfferStatus($updateOfferStatusInput: UpdateOfferStatusInput!) {
        updateOfferStatus(updateOfferStatusInput: $updateOfferStatusInput) {

            ok
            message

            offer {
                id
                no
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                createdAt
                currencyId
                currency {
                    iso
                }
                status
                customerId
                customer {
                    name
                    address
                    city
                    state
                    nit
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }

                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }

                total
                subtotal
                discount
                date
            }
        }
    }
`;var Ii=f(45312);let Si=(()=>{class s{constructor(t){this.apolloProvider=t,this._apollo=this.apolloProvider.use(Ii.c.GRAPHQL_PROVIDER)}createOffer(t){return this._apollo.mutate({mutation:yi,variables:{createOfferInput:t},errorPolicy:"all"})}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(F.Ic))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var ye=f(72797),ze=f(4840),Le=f(25910),U=f(55364);function Ri(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",36),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.selectCustomer(o))}),e.EFF(1),e.k0s()}if(2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.name," ")}}function $i(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," La fecha de la oferta es obligatoria "),e.k0s())}function ji(s,l){1&s&&(e.j41(0,"mat-option",27),e.EFF(1," x1 "),e.k0s()),2&s&&e.Y8G("value",1)}function Ei(s,l){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.value),e.R7$(),e.SpI(" x",t.value," ")}}function Di(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El multiplicador es obligatorio "),e.k0s())}function Ti(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",36),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.selectedCurrencyIso=o.iso)}),e.EFF(1),e.k0s()}if(2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.iso," ")}}function Bi(s,l){if(1&s&&(e.j41(0,"span",37),e.EFF(1),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.Lme(" (+ ",2===(null==t.bidForm.get("rates").value?null:t.bidForm.get("rates").value.length)?"otro":"otros"," ",t.bidForm.get("rates").value.length>2?t.bidForm.get("rates").value.length-1:"",") ")}}function Ai(s,l){if(1&s&&(e.j41(0,"mat-option",27)(1,"span",38),e.EFF(2),e.nI1(3,"number"),e.k0s(),e.j41(4,"span"),e.EFF(5),e.k0s()()),2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(2),e.JRh(e.i5U(3,3,t.value,"1.4-4")),e.R7$(3),e.SpI(" ",t.name,"")}}function wi(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," Las tasas de cambio son requeridas "),e.k0s())}function Gi(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",48),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addProductToOffer(r),e.Njj(i.stopPropagation())}),e.j41(1,"div",49),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addProductToOffer(r),e.Njj(i.stopPropagation())}),e.j41(2,"span",50),e.nrm(3,"mat-checkbox",51),e.EFF(4),e.k0s(),e.j41(5,"span",52),e.EFF(6),e.k0s(),e.j41(7,"span",53),e.EFF(8),e.k0s()()()}if(2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(3),e.Y8G("checked",t.checked),e.R7$(),e.SpI(" ",t.name," "),e.R7$(2),e.JRh(t.depot),e.R7$(2),e.Lme("",t.quantity," ",t.uom,"")}}const lt=(s,l)=>l.id;function Pi(s,l){1&s&&(e.j41(0,"mat-error",73),e.EFF(1," Valor m\xednimo 0.1 "),e.k0s())}function Mi(s,l){if(1&s&&(e.j41(0,"mat-error",73),e.EFF(1),e.k0s()),2&s){const t=e.XpG().$implicit;e.R7$(),e.SpI(" Valor m\xe1ximo ",t.quantity," ")}}function Ni(s,l){1&s&&(e.j41(0,"mat-error",73),e.EFF(1," Patr\xf3n no v\xe1lido "),e.k0s())}const ct=s=>({"text-warn":s}),dt=()=>["$"];function Yi(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",59)(1,"div"),e.EFF(2),e.k0s(),e.j41(3,"div",60),e.EFF(4),e.k0s(),e.j41(5,"div",61),e.EFF(6),e.k0s(),e.j41(7,"div",57),e.EFF(8),e.k0s(),e.j41(9,"div",62)(10,"div",63)(11,"button",64),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.decrementProductQty(o))}),e.nrm(12,"mat-icon",65),e.k0s(),e.j41(13,"mat-form-field",66),e.nrm(14,"input",67),e.k0s(),e.j41(15,"button",64),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.incrementProductQty(o))}),e.nrm(16,"mat-icon",65),e.k0s()(),e.DNE(17,Pi,2,0,"mat-error",68)(18,Mi,2,1,"mat-error",68)(19,Ni,2,0,"mat-error",68),e.k0s(),e.j41(20,"div",69),e.EFF(21),e.nI1(22,"number"),e.j41(23,"span",70),e.EFF(24),e.k0s()(),e.j41(25,"div",69),e.EFF(26),e.nI1(27,"currency"),e.k0s(),e.j41(28,"div",71)(29,"button",72),e.bIt("click",function(){const o=e.eBV(t).$index,r=e.XpG(3);return e.Njj(r.removeProductToOffer(o))}),e.nrm(30,"mat-icon",65),e.k0s()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.XpG(3);e.R7$(2),e.SpI(" ",n+1," "),e.R7$(),e.Y8G("matTooltip",t.get("name").value),e.R7$(),e.SpI(" ",t.get("name").value," "),e.R7$(2),e.SpI(" ",t.get("depot").value," "),e.R7$(2),e.Lme(" ",t.get("stock").value," ",t.get("uom").value," "),e.R7$(3),e.Y8G("disabled",t.get("quantity").value<=.1||t.get("quantity").hasError("pattern")),e.R7$(),e.Y8G("svgIcon","mat_solid:remove"),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("min",.1)("max",t.get("stock").value)("formControl",t.get("quantity")),e.R7$(),e.Y8G("disabled",t.get("quantity").value>=t.get("stock").value||t.get("quantity").hasError("pattern")),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(),e.vxM(17,t.get("quantity").hasError("min")?17:-1),e.R7$(),e.vxM(18,t.get("quantity").hasError("max")?18:-1),e.R7$(),e.vxM(19,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?19:-1),e.R7$(2),e.SpI(" ",e.i5U(22,22,t.get("price").value*i.bidForm.get("multiplier").value*(t.get("rate").value?t.get("rate").value:1),"1.2-2")," "),e.R7$(2),e.Y8G("ngClass",e.eq3(28,ct,!t.get("rate").value)),e.R7$(),e.SpI(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.R7$(2),e.SpI(" ",e.i5U(27,25,t.get("quantity").value*t.get("price").value*i.bidForm.get("multiplier").value*(t.get("rate").value?t.get("rate").value:1),e.lJ4(30,dt))," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:close")}}function Vi(s,l){if(1&s&&(e.j41(0,"div",54)(1,"div",55),e.nrm(2,"div"),e.j41(3,"div",56),e.EFF(4," Producto "),e.k0s(),e.j41(5,"div",56),e.EFF(6," Almac\xe9n "),e.k0s(),e.j41(7,"div",57),e.EFF(8," Disponibilidad "),e.k0s(),e.j41(9,"div",57),e.EFF(10," Cantidad "),e.k0s(),e.j41(11,"div",58),e.EFF(12," Precio "),e.k0s(),e.j41(13,"div",58),e.EFF(14," Total "),e.k0s(),e.j41(15,"div",57),e.EFF(16," Quitar "),e.k0s()(),e.Z7z(17,Yi,31,31,"div",74,lt),e.k0s()),2&s){const t=e.XpG(2);e.R7$(17),e.Dyx(t.bidForm.get("products").controls)}}function qi(s,l){1&s&&(e.j41(0,"div",75),e.EFF(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.k0s())}const zi=s=>({"cursor-not-allowed":s});function Li(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",76),e.bIt("click",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.createOffer())}),e.EFF(1),e.nI1(2,"number"),e.k0s()}if(2&s){const t=e.XpG(2);e.Y8G("ngClass",e.eq3(6,zi,t.bidForm.pristine||t.bidForm.invalid||0===t.bidForm.get("products").controls.length)),e.R7$(),e.Lme(" ",e.i5U(2,3,t.subtotal,"1.2-2")," ",t.selectedCurrencyIso," ")}}const ut=()=>({suppressScrollY:!0});function Xi(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",39)(1,"div",40)(2,"mat-form-field",41),e.nrm(3,"mat-icon",18)(4,"input",42),e.j41(5,"mat-autocomplete",43,44),e.bIt("closed",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.searchProductControl.reset())}),e.Z7z(7,Gi,9,6,"mat-option",77,e.fX1),e.nI1(9,"async"),e.k0s()(),e.j41(10,"div",45),e.DNE(11,Vi,19,0,"div",46)(12,qi,2,0),e.k0s()(),e.DNE(13,Li,3,8,"div",47),e.k0s()}if(2&s){const t=e.sdS(6),n=e.XpG();e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",n.searchProductControl)("matAutocomplete",t)("placeholder","Buscar productos"),e.R7$(),e.Y8G("displayWith",n.displayFn),e.R7$(2),e.Dyx(e.bMT(9,9,n.productsFiltered)),e.R7$(3),e.Y8G("fuseScrollbarOptions",e.lJ4(11,ut)),e.R7$(),e.vxM(11,n.bidForm.get("products").controls.length>0?11:12),e.R7$(2),e.vxM(13,n.bidAssistances?-1:13)}}function Qi(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",48),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addAssistance(r),e.Njj(i.stopPropagation())}),e.j41(1,"div",49),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addAssistance(r),e.Njj(i.stopPropagation())}),e.j41(2,"span",50),e.nrm(3,"mat-checkbox",51),e.EFF(4),e.k0s()()()}if(2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(3),e.Y8G("checked",t.checked),e.R7$(),e.SpI(" ",t.description," ")}}function Oi(s,l){1&s&&(e.j41(0,"mat-error",73),e.EFF(1," Valor m\xednimo 1 "),e.k0s())}function Ji(s,l){1&s&&(e.j41(0,"mat-error",73),e.EFF(1," Patr\xf3n no v\xe1lido "),e.k0s())}function Ui(s,l){1&s&&(e.j41(0,"mat-error",73),e.EFF(1," Valor m\xednimo 0 "),e.k0s())}function Wi(s,l){1&s&&(e.j41(0,"mat-error",73),e.EFF(1," Valor requerido "),e.k0s())}function Zi(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",83)(1,"div"),e.EFF(2),e.k0s(),e.j41(3,"div",60),e.EFF(4),e.k0s(),e.j41(5,"div",62)(6,"div",63)(7,"button",84),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.decrementAssistanceQty(o))}),e.nrm(8,"mat-icon",65),e.k0s(),e.j41(9,"mat-form-field",66),e.nrm(10,"input",85),e.k0s(),e.j41(11,"button",64),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.incrementAssistanceQty(o))}),e.nrm(12,"mat-icon",65),e.k0s()(),e.DNE(13,Oi,2,0,"mat-error",68)(14,Ji,2,0,"mat-error",68),e.k0s(),e.j41(15,"div",86)(16,"mat-form-field",66),e.nrm(17,"input",87),e.k0s(),e.DNE(18,Ui,2,0,"mat-error",68)(19,Wi,2,0,"mat-error",68),e.k0s(),e.j41(20,"div",88),e.EFF(21),e.k0s(),e.j41(22,"div",69),e.EFF(23),e.nI1(24,"currency"),e.k0s(),e.j41(25,"div",71)(26,"button",72),e.bIt("click",function(){const o=e.eBV(t).$index,r=e.XpG(3);return e.Njj(r.removeAssistanceToBid(o))}),e.nrm(27,"mat-icon",65),e.k0s()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.XpG(3);e.R7$(2),e.SpI(" ",n+1," "),e.R7$(),e.Y8G("matTooltip",t.get("description").value),e.R7$(),e.SpI(" ",t.get("description").value," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:remove"),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("min",1)("formControl",t.get("quantity")),e.R7$(),e.Y8G("disabled",t.get("quantity").hasError("pattern")),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(),e.vxM(13,t.get("quantity").hasError("min")?13:-1),e.R7$(),e.vxM(14,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?14:-1),e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("min",0)("max",9999999)("formControl",t.get("price")),e.R7$(),e.vxM(18,t.get("price").hasError("min")?18:-1),e.R7$(),e.vxM(19,t.get("price").hasError("required")?19:-1),e.R7$(),e.Y8G("ngClass",e.eq3(24,ct,!t.get("rate").value)),e.R7$(),e.SpI(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.R7$(2),e.SpI(" ",e.i5U(24,21,t.get("pt").value,e.lJ4(26,dt))," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:close")}}function Hi(s,l){if(1&s&&(e.j41(0,"div",54)(1,"div",82),e.nrm(2,"div"),e.j41(3,"div",56),e.EFF(4," Servicio "),e.k0s(),e.j41(5,"div",57),e.EFF(6," Cantidad "),e.k0s(),e.j41(7,"div",57),e.EFF(8," Precio "),e.k0s(),e.j41(9,"div",57),e.EFF(10," Moneda "),e.k0s(),e.j41(11,"div",58),e.EFF(12," Total "),e.k0s(),e.j41(13,"div",57),e.EFF(14," Quitar "),e.k0s()(),e.Z7z(15,Zi,28,27,"div",89,lt),e.k0s()),2&s){const t=e.XpG(2);e.R7$(15),e.Dyx(t.bidForm.get("assistances").controls)}}function Ki(s,l){1&s&&(e.j41(0,"div",75),e.EFF(1," \xa1No ha seleccionado ning\xfan servicio a\xfan! "),e.k0s())}const es=s=>({"cursor-pointer shadow":s});function ts(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",39)(1,"div",78)(2,"mat-form-field",41),e.nrm(3,"mat-icon",18)(4,"input",42),e.j41(5,"mat-autocomplete",43,79),e.bIt("closed",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.searchAssistanceControl.reset())}),e.Z7z(7,Qi,5,3,"mat-option",77,e.fX1),e.nI1(9,"async"),e.k0s()(),e.j41(10,"div",80),e.DNE(11,Hi,17,0,"div",46)(12,Ki,2,0),e.k0s()(),e.j41(13,"div",81),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.createOffer())}),e.EFF(14),e.nI1(15,"number"),e.k0s()()}if(2&s){const t=e.sdS(6),n=e.XpG();e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",n.searchAssistanceControl)("matAutocomplete",t)("placeholder","Buscar servicios en el cat\xe1logo del negocio"),e.R7$(),e.Y8G("displayWith",n.displayFnAssistance),e.R7$(2),e.Dyx(e.bMT(9,11,n.assistancesFiltered)),e.R7$(3),e.Y8G("fuseScrollbarOptions",e.lJ4(16,ut)),e.R7$(),e.vxM(11,n.bidForm.get("assistances").controls.length>0?11:12),e.R7$(2),e.Y8G("ngClass",e.eq3(17,es,n.bidForm.valid)),e.R7$(),e.Lme(" ",e.i5U(15,13,n.subtotal-n.subtotal*n.bidForm.get("discount").value,"1.2-2")," ",n.selectedCurrencyIso," ")}}const is=()=>({suppressScrollX:!0});let ss=(()=>{class s{constructor(){this.assistances=[],this.assistances$=(0,B.of)([]),this.audio=new Audio("./assets/sounds/caja.mp3"),this.bidAssistances=!1,this.bidProducts=!1,this.currencies$=(0,B.of)([]),this.maxDate=new Date,this.multipliers$=(0,B.of)([]),this.previewsAssistancesFormData=[],this.previewsProductsFormData=[],this.rates=[],this.searchAssistanceControl=new a.MJ(""),this.searchCustomerControl=new a.MJ(null),this.searchProductControl=new a.MJ(null),this.selectedCurrencyIso="",this.selectedCustomerName="",this.subtotal=0,this._bidService=(0,e.WQX)(Si),this._changeDetectorRef=(0,e.WQX)(e.gRc),this._customersService=(0,e.WQX)(ye.h),this._formBuilder=(0,e.WQX)(a.ok),this._fuseConfirmationService=(0,e.WQX)(ae.G),this._ratesService=(0,e.WQX)(Le.f),this._snackBar=(0,e.WQX)(O.UG),this._stocksService=(0,e.WQX)(ze.t),this._router=(0,e.WQX)(H.Ix),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.bidForm=this._formBuilder.group({id:new a.MJ,currencyId:new a.MJ(null,[a.k0.required]),customerId:new a.MJ("",[a.k0.required]),discount:new a.MJ(0,[a.k0.required,a.k0.min(0),a.k0.max(100)]),subtotal:new a.MJ(0,[a.k0.required,a.k0.min(0)]),multiplier:new a.MJ(1,[a.k0.required,a.k0.min(1)]),obs:new a.MJ("",[a.k0.maxLength(5e4)]),date:new a.MJ(new Date,[a.k0.required]),rates:new a.MJ([],[a.k0.required]),products:new a.Yp([]),assistances:new a.Yp([])}),this.bidForm.get("products").valueChanges.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(()=>{this._calculateOfferSubtotal()}),this.currencies$=this.store.select(ce.y$),this.multipliers$=this.store.select(qe.DC),this.customers$=this.store.select(je.wQ),this.productsInStock$=this.store.select(_e.IP),this.store.select(_e.IP).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.productsInStock=t,t.length>0&&(this.bidProducts=!0),this._changeDetectorRef.markForCheck()}),this.assistances$=this.store.select(ie),this.store.select(ie).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.assistances=t,t.length>0&&(this.bidAssistances=!0),this._changeDetectorRef.markForCheck()}),this.ratesFiltered=this.bidForm.get("currencyId").valueChanges.pipe((0,L.Z)(null),(0,Q.Z)(t=>t?this._ratesService.findActiveByBaseId(t):(0,B.of)([]))),this.ratesFiltered.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(500)).subscribe(t=>{this._resetSelectedProductsRates()}),this.bidForm.get("rates").valueChanges.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this._resetSelectedProductsRates(),this._resetSelectedAssistancesRates()}),this.bidForm.get("multiplier").valueChanges.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this._calcAllProductPrice(t),this._calcAllAssistancePrice(t),this._calculateOfferSubtotal()}),this.bidForm.get("assistances").valueChanges.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this._verifyChanges(t,this.previewsAssistancesFormData)&&this._calcAllAssistancePrice(this.bidForm.get("multiplier").value),this.previewsAssistancesFormData=[...t],this._calculateOfferTotal(),this._changeDetectorRef.markForCheck()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,Q.Z)(t=>this._mapChecked(null!==t&&"string"==typeof t?this._stocksService.getProductsInStockAvailable(t,10):this.productsInStock$))),this.assistancesFiltered=this.searchAssistanceControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,Q.Z)(t=>{const n=this.assistances.filter(i=>i.description.includes(t));return this._mapCheckedAssistances(null!==t&&"string"==typeof t?(0,B.of)(n):this.assistances$)})),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,Q.Z)(t=>null!==t&&"string"==typeof t&&t!==this.selectedCustomerName?this._customersService.findActiveCustomers(t.trim()):this.customers$))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}selectCustomer(t){this.bidForm.get("customerId").setValue(t.id),this.selectedCustomerName=t.name}addStockProduct(t){const n=this.bidForm.get("currencyId").value,i=structuredClone(this.bidForm.get("rates").value);let o=i.find(c=>c.currencyBaseId===n&&c.currencyRefId===t.currencyId);o||(o=i.find(c=>c.currencyRefId===n),o&&(o.value=1/o.value));const r=this._formBuilder.group({productId:new a.MJ(t.productId,[a.k0.required]),currencyId:new a.MJ(t.currencyId,[a.k0.required]),name:new a.MJ(t.name,[a.k0.required]),price:new a.MJ(t.price,[a.k0.required]),uom:new a.MJ(t.uom,[a.k0.required]),depotId:new a.MJ(t.depotId,[a.k0.required]),depot:new a.MJ(t.depot,[a.k0.required]),currency:new a.MJ(t.currency,[a.k0.required]),stock:new a.MJ(t.quantity,[a.k0.required]),rateId:new a.MJ(o?o.id:null,[a.k0.required]),rate:new a.MJ(o?o.value:null,[a.k0.required]),quantity:new a.MJ(1,[U.t.onlyNumbersPattern(),a.k0.required,a.k0.min(.1),a.k0.max(t.quantity)])});this.bidForm.get("products").push(r),this._changeDetectorRef.markForCheck()}removeStockProduct(t){this.bidForm.get("products").removeAt(t),this._changeDetectorRef.markForCheck()}addProductToOffer(t){const n=this.bidForm.get("products").getRawValue().findIndex(i=>i.productId===t.productId&&i.depotId===t.depotId);t.checked?(this.removeStockProduct(n),t.checked=!1):t.checked=!0,!(n>-1)&&(this.addStockProduct(t),this.updateSelectedRates())}incrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n+1)}decrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n-1)}removeProductToOffer(t){this.removeStockProduct(t),this.searchProductControl.reset(),this.updateSelectedRates()}createOffer(){if(this.bidForm.invalid||0===this.bidForm.get("products").controls.length&&0===this.bidForm.get("assistances").controls.length)return;const t=this.bidForm.getRawValue();delete t.id,t.ratesId=t.products.map(i=>i.rateId).filter((i,o,r)=>r.indexOf(i)===o),t.products=t.products.map(i=>({productId:i.productId,quantity:i.quantity,price:i.price})),t.assistances=t.assistances.map(i=>({assistanceId:i.assistanceId,quantity:i.quantity,price:i.price})),t.subtotal=Number(this.subtotal.toFixed(2)),t.total=Number((this.subtotal-t.discount/100*this.subtotal).toFixed(2)),delete t.rates,this._fuseConfirmationService.open({title:"Generar oferta",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,g.Q)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._bidService.createOffer(t).pipe((0,g.Q)(this._unsubscribeAll),(0,ee.j)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:o})=>{o&&(this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:o.createOffer.message,type:"success",svgIcon:"mat_solid:done"}}),this.audio.play(),this.bidForm.get("products").clear(),this.searchProductControl.reset(),this.searchCustomerControl.reset(),this.bidForm.reset(),this.subtotal=0,this.selectedCustomerName="",this._router.navigateByUrl("/modules/sales/offers"))})})}addAssistance(t){const n=this.bidForm.get("currencyId").value,i=structuredClone(this.bidForm.get("rates").value);let o=i.find(d=>d.currencyBaseId===n&&d.currencyRefId===t.currencyId);!o&&n!==t.currencyId&&(o=i.find(d=>d.currencyRefId===n&&d.currencyRefId!==d.currencyBaseId),o&&(o.value=1/o.value));const r=this.bidForm.get("multiplier").value,c=this._formBuilder.group({assistanceId:new a.MJ(t.id,[a.k0.required]),currencyId:new a.MJ(t.currencyId,[a.k0.required]),description:new a.MJ(t.description,[a.k0.required]),staticPrice:new a.MJ(Number(((o?o.value:1)*t.price).toFixed(2)),[a.k0.required,a.k0.min(0),a.k0.max(99999999)]),price:new a.MJ(Number(((o?o.value:1)*t.price).toFixed(2)),[a.k0.required,a.k0.min(0),a.k0.max(99999999)]),multiplier:new a.MJ(r),quantity:new a.MJ(1,[U.t.onlyNumbersPattern(),a.k0.required,a.k0.min(1)]),pt:new a.MJ(0),currency:new a.MJ(t.currency.iso,[a.k0.required]),uom:new a.MJ(t.uom.abbr,[a.k0.required]),rateId:new a.MJ(o?o.id:null,[a.k0.required]),rate:new a.MJ(o?o.value:null,[a.k0.required])});this.bidForm.get("assistances").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeAssistance(t){this.bidForm.get("assistances").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addAssistanceToBid(t){const n=this.bidForm.get("assistances").getRawValue().findIndex(i=>i.assistanceId===t.id);t.checked?(this.removeAssistance(n),t.checked=!1):t.checked=!0,!(n>-1)&&this.addAssistance(t)}incrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(++n)}decrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(--n)}removeAssistanceToBid(t){this.removeAssistance(t),this.searchAssistanceControl.reset()}displayFnAssistance(t){return t&&t.description?t.description:""}updateSelectedRates(){const t=this.bidForm.get("currencyId").value,n=this.bidForm.get("products").getRawValue(),i=this.bidForm.get("assistances").getRawValue();let o=[];for(const c of n)o=[...this.rates.filter(m=>m.currencyBaseId===t&&m.currencyRefId===c.currencyId),...this.rates.filter(m=>m.currencyBaseId===c.currencyId&&m.currencyRefId===t&&m.currencyRefId!==m.currencyBaseId),...o];for(const c of i)o=[...this.rates.filter(m=>m.currencyBaseId===t&&m.currencyRefId===c.currencyId),...this.rates.filter(m=>m.currencyBaseId===c.currencyId&&m.currencyRefId===t&&m.currencyRefId!==m.currencyBaseId),...o];const r=o.reduce((c,d)=>(c.find(m=>m.id===d.id&&m.name===d.name)||c.push(d),c),[]);this.bidForm.get("rates").setValue(r)}_verifyChanges(t,n){for(let i=0;i<t.length;i++)if(t.length!==n.length||t[i].price!==n[i].price||Number(t[i].quantity)!==Number(n[i].quantity))return!0;return!1}_resetSelectedAssistancesRates(){const t=this.bidForm.get("currencyId").value,n=this.bidForm.get("multiplier").value;for(const i of this.bidForm.get("assistances").controls){const o=i.getRawValue(),r=structuredClone(this.bidForm.get("rates").value);let c=r.find(h=>h.currencyBaseId===t&&h.currencyRefId===o.currencyId);!c&&t!==o.currencyId&&(c=r.find(h=>h.currencyRefId===t&&h.currencyRefId!==h.currencyBaseId),c&&(c.value=1/c.value));let d=c?c.value:null;const p=i.get("price").value,m=i.get("staticPrice").value;let u=i.get("rate").value?i.get("rate").value:1;u&&d===u&&(u=1,d=1),i.patchValue({...o,price:(d?p*d:1*p/u)*n,staticPrice:d?m*d:1*m/u,multiplier:n,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}_calculateOfferSubtotal(){const t=this.bidForm.get("multiplier").value;this.subtotal=this.bidForm.get("products").getRawValue().map(n=>n.quantity*n.price*t*(n.rate?n.rate:1)).reduce((n,i)=>n+i,0)}_calcAllProductPrice(t){const n=this.bidForm.get("products").getRawValue();this.previewsProductsFormData=[...n];for(const i of this.bidForm.get("products").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}_calcAllAssistancePrice(t){const n=this.bidForm.get("assistances").getRawValue();this.previewsAssistancesFormData=[...n];for(const i of this.bidForm.get("assistances").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}_calculateOfferTotal(){const t=this.bidForm.get("products").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0),n=this.bidForm.get("assistances").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0);this.subtotal=Number(t.toFixed(2))+Number(n.toFixed(2))}_mapChecked(t){return t.pipe((0,N.T)(n=>n.map(i=>this.bidForm.get("products").getRawValue().some(r=>r.productId===i.productId&&r.depotId===i.depotId)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_mapCheckedAssistances(t){return t.pipe((0,N.T)(n=>n.map(i=>this.bidForm.get("assistances").getRawValue().some(r=>r.id===i.id)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_resetSelectedProductsRates(){const t=this.bidForm.get("currencyId").value,n=structuredClone(this.bidForm.get("rates").value);for(const i of this.bidForm.get("products").controls){let o=n.find(r=>r.currencyBaseId===t&&r.currencyRefId===i.value.currencyId);o||(o=n.find(r=>r.currencyRefId===t),o&&(o.value=1/o.value)),i.get("rate").setValue(o?o.value:null),i.get("rateId").setValue(o?o.id:null)}this._changeDetectorRef.markForCheck()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-bid"]],standalone:!0,features:[e.aNF],decls:88,vars:50,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0",3,"fuseScrollbarOptions"],[1,"relative","flex","flex-col","px-6","py-8","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],["routerLink","/modules/sales/offers",1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["mat-flat-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[1,"flex","flex-col","px-4","mt-4","mb-12","gap-y-8","sm:px-8"],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"grid","gap-4","p-10","sm:grid-cols-4","lg:grid-cols-7",3,"formGroup"],["bidNgForm","ngForm"],["appearance","fill",1,"w-full","md:col-span-2","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[1,"ath-autocomplete",3,"displayWith"],["customerAutocomplete","matAutocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["date",""],[3,"formControlName","required"],[3,"value"],[3,"formControlName","required","placeholder"],["multiple","",3,"formControlName","required","placeholder"],["class","text-sm opacity-75"],["matInput","","type","number",3,"formControlName","min","max","required"],["matSuffix","",3,"svgIcon"],[1,"w-full","sm:col-span-4","lg:col-span-7","fuse-mat-textarea"],["matInput","",3,"formControlName"],["class","col-span-4 shadow rounded-2xl bg-card"],[3,"value","click"],[1,"text-sm","opacity-75"],[1,"w-18"],[1,"col-span-4","shadow","rounded-2xl","bg-card"],[1,"p-6"],["appearance","fill",1,"w-full","fuse-mat-dense",3,"subscriptSizing"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete",3,"displayWith","closed"],["productsAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","mt-2","mb-2","min-h-36",3,"fuseScrollbarOptions"],["class","grid"],["class","flex items-center justify-center w-full gap-2 p-2 font-mono text-3xl font-semibold leading-7 text-white cursor-pointer rounded-b-2xl bg-gradient-to-r from-primary-500 to-primary-700",3,"ngClass"],[1,"w-full",3,"value","click"],[1,"grid","w-full","grid-cols-6",3,"click"],[1,"flex","flex-row","items-center","col-span-5","truncate","md:col-span-3"],["color","primary",3,"checked"],[1,"items-center","hidden","col-span-2","md:flex"],[1,"flex","items-center","text-center"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left"],[1,"text-center"],[1,"text-right"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"truncate",3,"matTooltip"],[1,"truncate"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"font-mono","text-right"],[3,"ngClass"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"w-full","text-sm","text-center"],["class","grid items-center gap-4 px-6 py-3 border-b billing-products-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","items-center","justify-center","w-full","gap-2","p-2","font-mono","text-3xl","font-semibold","leading-7","text-white","cursor-pointer","rounded-b-2xl","bg-gradient-to-r","from-primary-500","to-primary-700",3,"ngClass","click"],["class","w-full",3,"value"],[1,"p-6","pb-0"],["assistancesAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-2","mt-2","min-h-24",3,"fuseScrollbarOptions"],[1,"flex","items-center","justify-center","w-full","gap-2","p-2","font-mono","text-3xl","font-semibold","leading-7","text-white","rounded-b-2xl","bg-gradient-to-r","from-primary-500","to-primary-700",3,"ngClass","click"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-assistances-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-assistances-grid","md:px-8"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","formControl"],[1,"flex","flex-col","items-center","justify-center"],["matInput","","type","number",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],[1,"text-center",3,"ngClass"],["class","grid items-center gap-4 px-6 py-3 border-b billing-assistances-grid md:px-8"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Ventas"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",8),e.EFF(14,"Cotizaciones"),e.k0s()(),e.j41(15,"div",5),e.nrm(16,"mat-icon",6),e.j41(17,"a",7),e.EFF(18,"Ofertar"),e.k0s()()(),e.j41(19,"div",9)(20,"h2",10),e.EFF(21," Ofertar "),e.k0s()()(),e.j41(22,"div",11)(23,"button",12),e.bIt("click",function(){return i.createOffer()}),e.EFF(24," Generar Oferta "),e.k0s()()(),e.j41(25,"div",13)(26,"div",14)(27,"form",15,16)(29,"mat-form-field",17)(30,"mat-label"),e.EFF(31,"Cliente"),e.k0s(),e.nrm(32,"mat-icon",18)(33,"input",19),e.j41(34,"mat-autocomplete",20,21),e.Z7z(36,Ri,2,2,"mat-option",27,e.fX1),e.nI1(38,"async"),e.k0s()(),e.j41(39,"mat-form-field",22)(40,"mat-label"),e.EFF(41,"Fecha de la oferta"),e.k0s(),e.nrm(42,"input",23),e.j41(43,"mat-hint"),e.EFF(44,"DD/MM/YYYY"),e.k0s(),e.nrm(45,"mat-datepicker-toggle",24)(46,"mat-datepicker",null,25),e.DNE(48,$i,2,0,"mat-error"),e.k0s(),e.j41(49,"mat-form-field",22)(50,"mat-label"),e.EFF(51,"Multiplicador"),e.k0s(),e.j41(52,"mat-select",26),e.DNE(53,ji,2,1,"mat-option",27),e.nI1(54,"async"),e.Z7z(55,Ei,2,2,"mat-option",27,e.fX1),e.nI1(57,"async"),e.k0s(),e.DNE(58,Di,2,0,"mat-error"),e.k0s(),e.j41(59,"mat-form-field",22)(60,"mat-label"),e.EFF(61,"Moneda"),e.k0s(),e.j41(62,"mat-select",28),e.Z7z(63,Ti,2,2,"mat-option",27,e.fX1),e.nI1(65,"async"),e.k0s()(),e.j41(66,"mat-form-field",22)(67,"mat-label"),e.EFF(68,"Tasa de Cambio"),e.k0s(),e.j41(69,"mat-select",29)(70,"mat-select-trigger"),e.EFF(71),e.DNE(72,Bi,2,2,"span",30),e.k0s(),e.Z7z(73,Ai,6,6,"mat-option",27,e.fX1),e.nI1(75,"async"),e.k0s(),e.DNE(76,wi,2,0,"mat-error"),e.k0s(),e.j41(77,"mat-form-field",22)(78,"mat-label"),e.EFF(79,"Descuento"),e.k0s(),e.nrm(80,"input",31)(81,"mat-icon",32),e.k0s(),e.j41(82,"mat-form-field",33)(83,"mat-label"),e.EFF(84,"Observaciones"),e.k0s(),e.nrm(85,"textarea",34),e.k0s()()(),e.DNE(86,Xi,14,12,"div",35)(87,ts,16,19,"div",35),e.k0s()()),2&n){const o=e.sdS(35),r=e.sdS(47);e.Y8G("fuseScrollbarOptions",e.lJ4(49,is)),e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(7),e.Y8G("disabled",i.bidForm.pristine||i.bidForm.invalid),e.R7$(4),e.Y8G("formGroup",i.bidForm),e.R7$(5),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",i.searchCustomerControl)("matAutocomplete",o)("placeholder","Buscar cliente")("required",!0),e.R7$(),e.Y8G("displayWith",i.displayFn),e.R7$(2),e.Dyx(e.bMT(38,39,i.customersFiltered)),e.R7$(6),e.Y8G("matDatepicker",r)("formControlName","date")("max",i.maxDate)("required",!0),e.R7$(3),e.Y8G("for",r),e.R7$(3),e.vxM(48,i.bidForm.get("date").hasError("required")?48:-1),e.R7$(4),e.Y8G("formControlName","multiplier")("required",!0),e.R7$(),e.vxM(53,0===e.bMT(54,41,i.multipliers$).length?53:-1),e.R7$(2),e.Dyx(e.bMT(57,43,i.multipliers$)),e.R7$(3),e.vxM(58,i.bidForm.get("multiplier").hasError("required")?58:-1),e.R7$(4),e.Y8G("formControlName","currencyId")("required",!0)("placeholder","Moneda"),e.R7$(),e.Dyx(e.bMT(65,45,i.currencies$)),e.R7$(6),e.Y8G("formControlName","rates")("required",!0)("placeholder","Tasa de cambio"),e.R7$(2),e.SpI(" ",(null==i.bidForm.get("rates").value||null==i.bidForm.get("rates").value[0]?null:i.bidForm.get("rates").value[0].name)||""," "),e.R7$(),e.vxM(72,((null==i.bidForm.get("rates").value?null:i.bidForm.get("rates").value.length)||0)>1?72:-1),e.R7$(),e.Dyx(e.bMT(75,47,i.ratesFiltered)),e.R7$(3),e.vxM(76,i.bidForm.get("rates").hasError("required")?76:-1),e.R7$(4),e.Y8G("formControlName","discount")("min",0)("max",100)("required",!0),e.R7$(),e.Y8G("svgIcon","mat_solid:percent"),e.R7$(4),e.Y8G("formControlName","obs"),e.R7$(),e.vxM(86,i.bidProducts?86:-1),e.R7$(),e.vxM(87,i.bidAssistances?87:-1)}},dependencies:[v.Jj,v.oe,v.QX,a.YN,a.qT,a.me,a.Q0,a.BC,a.cb,a.YS,a.VZ,a.zX,be.p,z.jL,z.$3,re.wT,z.pN,I.Hl,I.$z,te.g7,te.So,k.X6,k.Vh,k.bZ,k.bU,_.RG,_.rl,_.nJ,_.MV,_.TL,_.JW,_.yw,R.m_,R.An,S.fS,S.fg,w.Cn,W.Ve,W.VO,W.$2,J.uc,J.oV,v.YU,a.X1,a.l_,a.j4,a.JD,H.Wk],encapsulation:2,changeDetection:0})}return s})();var Xe=f(29217),mt=f(94425),Qe=f(84713);const ns=F.J1`
    query FindAllBills(
            $page: Int,
            $size: Int,
            $sort: String,
            $order: Order,
            $search: String,
            $customerId: String,
            $currenciesId: [String!],
            $status: [BillStatus!],
            $paymentStatus: [PaymentStatus!],
            $billDate: DateTime,
            $startDate: DateTime,
            $endDate: DateTime
        )
        {
        findAllBills(
            page: $page,
            size: $size,
            sort: $sort,
            order: $order,
            search: $search,
            customerId: $customerId,
            currenciesId: $currenciesId,
            status: $status,
            paymentStatus: $paymentStatus,
            billDate: $billDate,
            startDate: $startDate,
            endDate: $endDate
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

            bills {
                id
                no
                createdAt
                currencyId
                isDispatched
                currency {
                    iso
                    namev
                }
                currenciesPercents {
                    cup
                    usd
                }
                operationTypeId
                operationType {
                    name
                }
                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                ratesId
                rates {
                    name
                    value
                }

                status
                customerId
                customer {
                    name
                    code
                    address
                    city
                    state
                    phone
                    email
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                }

                surcharge
                discount
                observation
                subtotal
                total
                totalCup
                totalUsd

                billDate
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }

                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }

                vehicle {
                    brand {
                        name
                    }
                    model
                    registrationNumber
                }

                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`,os=F.J1`
    query FindAllBillsByDate($date: String!) {
        findAllBillsByDate(date: $date) {
            ok
            message

            bills {
                id
                no
                createdAt
                currencyId
                currency {
                    iso
                    namev
                }
                currenciesPercents {
                    cup
                    usd
                }

                operationTypeId
                operationType {
                    name
                }

                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                ratesId

                status
                customerId
                customer {
                    name
                    code
                    address
                    city
                    state
                    phone
                    email
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                }
                total
                totalCup
                totalUsd
                billDate
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                products {
                    productId
                    quantity
                    price
                }

                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }

                vehicle {
                    model
                    registrationNumber
                }

                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`,as=F.J1`
    query getBillsByDateRangeAndStatus(
        $initDate: DateTime,
        $endDate: DateTime,
        $status: BillStatus,
        $paymentStatus: PaymentStatus,
        $clientId: String) {
        getBillsByDateRangeAndStatus(
            initDate: $initDate,
            endDate: $endDate,
            status: $status,
            paymentStatus: $paymentStatus,
            clientId: $clientId
            ) {
            ok
            message

            bills {
                id
                no
                createdAt
                collectedAt
                currencyId
                currency {
                    iso
                }

                operationTypeId
                operationType {
                    name
                }

                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                ratesId

                status
                customerId
                customer {
                    name
                    lastname1
                    lastname2
                    fullname
                    code
                    address
                    city
                    state
                    phone
                    email
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                }
                total
                totalCup
                totalUsd
                billDate
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                products {
                    productId
                    quantity
                    price
                }

                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }

                vehicle {
                    model
                    registrationNumber
                }

                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`,rs=F.J1`
query FindBillById($findBillById: String!) {
    bill(id: $findBillById) {
        id
        no
        createdAt
        currencyId
        paymentMethodId
        paymentStatus
        products {
            productId
            quantity
            price
        }

        assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
        status
        customerId
        total
        billDate

        courierId
        courier {
                    id
                    name
                    fullname
                    idNumber
                }

        bankAccount {
                    no
                    currency
                    beneficiary
                }
    }
}
`,ls=F.J1`
    mutation CreatedBill($createBillInput: CreateBillInput!) {
        createdBill(createBillInput: $createBillInput) {
            id
            no
            createdAt
            currencyId
            paymentMethodId
            paymentStatus
            products {
                productId
                quantity
                price
            }

            assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
            status
            customerId
            total
            userId
            billDate

            courierId
            courier {
                    id
                    name
                    fullname
                    idNumber
                }

            bankAccount {
                    no
                    currency
                    beneficiary
                }
        }
    }
`,cs=F.J1`
    mutation UpdateBill($updateBillInput: UpdateBillInput!) {
        updatedBill(updateBillInput: $updateBillInput) {
            id
            no
            createdAt
            currencyId
            paymentMethodId
            paymentStatus
            products {
                productId
                quantity
                price
            }

            assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
            status
            customerId
            total
            userId
            billDate
        }
    }
`,ds=F.J1`
    mutation UpdateBillStatus($updateBillStatusInput: UpdateBillStatusInput!) {
        updateBillStatus(updateBillStatusInput: $updateBillStatusInput) {

            ok
            message

            bill {
                id
                no
                createdAt
                currencyId
                isDispatched
                currency {
                    iso
                    namev
                }
                currenciesPercents {
                    cup
                    usd
                }
                operationTypeId
                operationType {
                    name
                }
                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                ratesId
                rates {
                    name
                    value
                }

                status
                customerId
                customer {
                    name
                    code
                    address
                    city
                    state
                    phone
                    email
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                }

                surcharge
                discount
                observation
                subtotal
                total
                totalCup
                totalUsd

                billDate
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }

                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`,us=F.J1`
    mutation RemoveBill($removeBillId: String!) {
        removeBill(id: $removeBillId)
    }
`,ms=F.J1`
    mutation DispatchBill($billId: String!) {
        dispatchBill(id: $billId) {
            ok
            message

            bill {
                id
                no
                createdAt
                isDispatched
                currencyId
                currency {
                    iso
                    namev
                }
                currenciesPercents {
                    cup
                    usd
                }
                operationTypeId
                operationType {
                    name
                }
                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                ratesId
                rates {
                    name
                    value
                }

                status
                customerId
                customer {
                    name
                    code
                    address
                    city
                    state
                    phone
                    email
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                    fullname
                }

                surcharge
                discount
                observation
                subtotal
                total
                totalCup
                totalUsd

                billDate
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }

                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`;let ps=(()=>{class s{constructor(t,n){this.apolloProvider=t,this._snackBar=n,this._apollo=this.apolloProvider.use("BALANC")}createBill(t){return this._apollo.mutate({mutation:ls,variables:{createBillInput:t},errorPolicy:"all"})}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(F.Ic),e.KVO(O.UG))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var fe=f(21607),M=f(53328);const Oe=(s,l)=>l.id;function hs(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-checkbox",11),e.bIt("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.billProducts=i)}),e.EFF(1,"Productos"),e.k0s(),e.j41(2,"mat-checkbox",11),e.bIt("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.billAssistances=i)}),e.EFF(3,"Servicios"),e.k0s()}if(2&s){const t=e.XpG();e.Y8G("ngModel",t.billProducts),e.R7$(2),e.Y8G("ngModel",t.billAssistances)}}function fs(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",37),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.selectCustomer(o))}),e.EFF(1),e.k0s()}if(2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.name," ")}}function gs(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," La fecha de la factura es obligatoria "),e.k0s())}function _s(s,l){1&s&&(e.j41(0,"mat-option",27),e.EFF(1," x1 "),e.k0s()),2&s&&e.Y8G("value",1)}function bs(s,l){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.value),e.R7$(),e.SpI(" x",t.value," ")}}function ys(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El multiplicador es obligatorio "),e.k0s())}function Cs(s,l){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.name," ")}}function vs(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El tipo de comprobante es obligatorio "),e.k0s())}function Fs(s,l){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.name," ")}}function xs(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El tipo de operaci\xf3n es obligatorio "),e.k0s())}function ks(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",37),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.selectedCurrencyIso=o.iso)}),e.EFF(1),e.k0s()}if(2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.iso," ")}}function Is(s,l){if(1&s&&(e.j41(0,"span",38),e.EFF(1),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.Lme(" (+ ",2===(null==t.billingForm.get("rates").value?null:t.billingForm.get("rates").value.length)?"otro":"otros"," ",t.billingForm.get("rates").value.length>2?t.billingForm.get("rates").value.length-1:"",") ")}}function Ss(s,l){if(1&s&&(e.j41(0,"mat-option",27)(1,"span",39),e.EFF(2),e.nI1(3,"number"),e.k0s(),e.j41(4,"span"),e.EFF(5),e.k0s()()),2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(2),e.JRh(e.i5U(3,3,t.value,"1.4-4")),e.R7$(3),e.SpI(" ",t.name,"")}}function Rs(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," Las tasas de cambio son requeridas "),e.k0s())}function $s(s,l){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.Lme(" ",t.no," ",t.currency," ")}}function js(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," La cuenta bancaria es obligatorio "),e.k0s())}function Es(s,l){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.name," ")}}function Ds(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",49),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addProductToBill(r),e.Njj(i.stopPropagation())}),e.j41(1,"div",50),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addProductToBill(r),e.Njj(i.stopPropagation())}),e.j41(2,"span",51),e.nrm(3,"mat-checkbox",52),e.EFF(4),e.k0s(),e.j41(5,"span",53),e.EFF(6),e.k0s(),e.j41(7,"span",54),e.EFF(8),e.nI1(9,"number"),e.k0s()()()}if(2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(3),e.Y8G("checked",t.checked),e.R7$(),e.SpI(" ",t.name," "),e.R7$(2),e.JRh(t.depot),e.R7$(2),e.Lme("",e.i5U(9,6,t.quantity,"1.2-2")," ",t.uom,"")}}function Ts(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor m\xednimo 0.1 "),e.k0s())}function Bs(s,l){if(1&s&&(e.j41(0,"mat-error",76),e.EFF(1),e.k0s()),2&s){const t=e.XpG().$implicit;e.R7$(),e.SpI(" Valor m\xe1ximo ",t.quantity," ")}}function As(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Patr\xf3n no v\xe1lido "),e.k0s())}function ws(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor m\xednimo 0 "),e.k0s())}function Gs(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor requerido "),e.k0s())}const pt=s=>({"text-warn":s}),ht=()=>["$"];function Ps(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",60)(1,"div"),e.EFF(2),e.k0s(),e.j41(3,"div",61),e.EFF(4),e.k0s(),e.j41(5,"div",62),e.EFF(6),e.k0s(),e.j41(7,"div",58),e.EFF(8),e.nI1(9,"number"),e.k0s(),e.j41(10,"div",63)(11,"div",64)(12,"button",65),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.decrementProductQty(o))}),e.nrm(13,"mat-icon",66),e.k0s(),e.j41(14,"mat-form-field",67),e.nrm(15,"input",68),e.k0s(),e.j41(16,"button",65),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.incrementProductQty(o))}),e.nrm(17,"mat-icon",66),e.k0s()(),e.DNE(18,Ts,2,0,"mat-error",69)(19,Bs,2,1,"mat-error",69)(20,As,2,0,"mat-error",69),e.k0s(),e.j41(21,"div",70)(22,"mat-form-field",67),e.nrm(23,"input",71),e.k0s(),e.DNE(24,ws,2,0,"mat-error",69)(25,Gs,2,0,"mat-error",69),e.k0s(),e.j41(26,"div",72),e.EFF(27),e.k0s(),e.j41(28,"div",73),e.EFF(29),e.nI1(30,"currency"),e.k0s(),e.j41(31,"div",74)(32,"button",75),e.bIt("click",function(){const o=e.eBV(t).$index,r=e.XpG(3);return e.Njj(r.removeProductToBill(o))}),e.nrm(33,"mat-icon",66),e.k0s()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.XpG(3);e.R7$(2),e.SpI(" ",n+1," "),e.R7$(),e.Y8G("matTooltip",t.get("name").value),e.R7$(),e.SpI(" ",t.get("name").value," "),e.R7$(2),e.SpI(" ",t.get("depot").value," "),e.R7$(2),e.Lme(" ",e.i5U(9,27,t.get("stock").value,"1.2-2")," ",t.get("uom").value," "),e.R7$(4),e.Y8G("disabled",t.get("quantity").value<=.1||t.get("quantity").hasError("pattern")),e.R7$(),e.Y8G("svgIcon","mat_solid:remove"),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("min",.1)("max",t.get("stock").value)("formControl",t.get("quantity")),e.R7$(),e.Y8G("disabled",t.get("quantity").value>=t.get("stock").value||t.get("quantity").hasError("pattern")),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(),e.vxM(18,t.get("quantity").hasError("min")?18:-1),e.R7$(),e.vxM(19,t.get("quantity").hasError("max")?19:-1),e.R7$(),e.vxM(20,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?20:-1),e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("min",0)("max",9999999)("formControl",t.get("price")),e.R7$(),e.vxM(24,t.get("price").hasError("min")?24:-1),e.R7$(),e.vxM(25,t.get("price").hasError("required")?25:-1),e.R7$(),e.Y8G("ngClass",e.eq3(33,pt,!t.get("rate").value)),e.R7$(),e.SpI(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.R7$(2),e.SpI(" ",e.i5U(30,30,t.get("pt").value,e.lJ4(35,ht))," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:close")}}function Ms(s,l){if(1&s&&(e.j41(0,"div",55)(1,"div",56),e.nrm(2,"div"),e.j41(3,"div",57),e.EFF(4," Producto "),e.k0s(),e.j41(5,"div",57),e.EFF(6," Almac\xe9n "),e.k0s(),e.j41(7,"div",58),e.EFF(8," Disponibilidad "),e.k0s(),e.j41(9,"div",58),e.EFF(10," Cantidad "),e.k0s(),e.j41(11,"div",58),e.EFF(12," Precio "),e.k0s(),e.j41(13,"div",58),e.EFF(14," Moneda "),e.k0s(),e.j41(15,"div",59),e.EFF(16," Total "),e.k0s(),e.j41(17,"div",58),e.EFF(18," Quitar "),e.k0s()(),e.Z7z(19,Ps,34,36,"div",77,Oe),e.k0s()),2&s){const t=e.XpG(2);e.R7$(19),e.Dyx(t.billingForm.get("products").controls)}}function Ns(s,l){1&s&&(e.j41(0,"div",78),e.EFF(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.k0s())}const ft=s=>({"cursor-pointer shadow":s});function Ys(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",79),e.bIt("click",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.createBill())}),e.EFF(1),e.nI1(2,"number"),e.k0s()}if(2&s){const t=e.XpG(2);e.Y8G("ngClass",e.eq3(6,ft,t.billingForm.valid&&t.billingForm.get("products").controls.length>0)),e.R7$(),e.Lme(" ",e.i5U(2,3,t.total-t.billingForm.get("discount").value+t.billingForm.get("surcharge").value,"1.2-2")," ",t.selectedCurrencyIso," ")}}const gt=()=>({suppressScrollY:!0});function Vs(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",40)(1,"div",41)(2,"mat-form-field",42),e.nrm(3,"mat-icon",18)(4,"input",43),e.j41(5,"mat-autocomplete",44,45),e.bIt("closed",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.searchProductControl.reset())}),e.Z7z(7,Ds,10,9,"mat-option",80,e.fX1),e.nI1(9,"async"),e.k0s()(),e.j41(10,"div",46),e.DNE(11,Ms,21,0,"div",47)(12,Ns,2,0),e.k0s()(),e.DNE(13,Ys,3,8,"div",48),e.k0s()}if(2&s){const t=e.sdS(6),n=e.XpG();e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",n.searchProductControl)("matAutocomplete",t)("placeholder","Buscar existencia de productos en inventario"),e.R7$(),e.Y8G("displayWith",n.displayFn),e.R7$(2),e.Dyx(e.bMT(9,9,n.productsFiltered)),e.R7$(3),e.Y8G("fuseScrollbarOptions",e.lJ4(11,gt)),e.R7$(),e.vxM(11,n.billingForm.get("products").controls.length>0?11:12),e.R7$(2),e.vxM(13,n.billAssistances?-1:13)}}function qs(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",49),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addAssistanceToBill(r),e.Njj(i.stopPropagation())}),e.j41(1,"div",50),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addAssistanceToBill(r),e.Njj(i.stopPropagation())}),e.j41(2,"span",51),e.nrm(3,"mat-checkbox",52),e.EFF(4),e.k0s()()()}if(2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(3),e.Y8G("checked",t.checked),e.R7$(),e.SpI(" ",t.description," ")}}function zs(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor m\xednimo 1 "),e.k0s())}function Ls(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Patr\xf3n no v\xe1lido "),e.k0s())}function Xs(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor m\xednimo 0 "),e.k0s())}function Qs(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor requerido "),e.k0s())}function Os(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",83)(1,"div"),e.EFF(2),e.k0s(),e.j41(3,"div",61),e.EFF(4),e.k0s(),e.j41(5,"div",63)(6,"div",64)(7,"button",84),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.decrementAssistanceQty(o))}),e.nrm(8,"mat-icon",66),e.k0s(),e.j41(9,"mat-form-field",67),e.nrm(10,"input",85),e.k0s(),e.j41(11,"button",65),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.incrementAssistanceQty(o))}),e.nrm(12,"mat-icon",66),e.k0s()(),e.DNE(13,zs,2,0,"mat-error",69)(14,Ls,2,0,"mat-error",69),e.k0s(),e.j41(15,"div",70)(16,"mat-form-field",67),e.nrm(17,"input",71),e.k0s(),e.DNE(18,Xs,2,0,"mat-error",69)(19,Qs,2,0,"mat-error",69),e.k0s(),e.j41(20,"div",72),e.EFF(21),e.k0s(),e.j41(22,"div",73),e.EFF(23),e.nI1(24,"currency"),e.k0s(),e.j41(25,"div",74)(26,"button",75),e.bIt("click",function(){const o=e.eBV(t).$index,r=e.XpG(3);return e.Njj(r.removeAssistanceToBill(o))}),e.nrm(27,"mat-icon",66),e.k0s()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.XpG(3);e.R7$(2),e.SpI(" ",n+1," "),e.R7$(),e.Y8G("matTooltip",t.get("description").value),e.R7$(),e.SpI(" ",t.get("description").value," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:remove"),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("min",1)("formControl",t.get("quantity")),e.R7$(),e.Y8G("disabled",t.get("quantity").hasError("pattern")),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(),e.vxM(13,t.get("quantity").hasError("min")?13:-1),e.R7$(),e.vxM(14,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?14:-1),e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("min",0)("max",9999999)("formControl",t.get("price")),e.R7$(),e.vxM(18,t.get("price").hasError("min")?18:-1),e.R7$(),e.vxM(19,t.get("price").hasError("required")?19:-1),e.R7$(),e.Y8G("ngClass",e.eq3(24,pt,!t.get("rate").value)),e.R7$(),e.SpI(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.R7$(2),e.SpI(" ",e.i5U(24,21,t.get("pt").value,e.lJ4(26,ht))," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:close")}}function Js(s,l){if(1&s&&(e.j41(0,"div",55)(1,"div",82),e.nrm(2,"div"),e.j41(3,"div",57),e.EFF(4," Servicio "),e.k0s(),e.j41(5,"div",58),e.EFF(6," Cantidad "),e.k0s(),e.j41(7,"div",58),e.EFF(8," Precio "),e.k0s(),e.j41(9,"div",58),e.EFF(10," Moneda "),e.k0s(),e.j41(11,"div",59),e.EFF(12," Total "),e.k0s(),e.j41(13,"div",58),e.EFF(14," Quitar "),e.k0s()(),e.Z7z(15,Os,28,27,"div",86,Oe),e.k0s()),2&s){const t=e.XpG(2);e.R7$(15),e.Dyx(t.billingForm.get("assistances").controls)}}function Us(s,l){1&s&&(e.j41(0,"div",78),e.EFF(1," \xa1No ha seleccionado ning\xfan servicio a\xfan! "),e.k0s())}function Ws(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",40)(1,"div",41)(2,"mat-form-field",42),e.nrm(3,"mat-icon",18)(4,"input",43),e.j41(5,"mat-autocomplete",44,81),e.bIt("closed",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.searchAssistanceControl.reset())}),e.Z7z(7,qs,5,3,"mat-option",80,e.fX1),e.nI1(9,"async"),e.k0s()(),e.j41(10,"div",46),e.DNE(11,Js,17,0,"div",47)(12,Us,2,0),e.k0s()(),e.j41(13,"div",79),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.createBill())}),e.EFF(14),e.nI1(15,"number"),e.k0s()()}if(2&s){const t=e.sdS(6),n=e.XpG();e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",n.searchAssistanceControl)("matAutocomplete",t)("placeholder","Buscar servicios en el cat\xe1logo del negocio"),e.R7$(),e.Y8G("displayWith",n.displayFnAssistance),e.R7$(2),e.Dyx(e.bMT(9,11,n.assistancesFiltered)),e.R7$(3),e.Y8G("fuseScrollbarOptions",e.lJ4(16,gt)),e.R7$(),e.vxM(11,n.billingForm.get("assistances").controls.length>0?11:12),e.R7$(2),e.Y8G("ngClass",e.eq3(17,ft,n.billingForm.valid)),e.R7$(),e.Lme(" ",e.i5U(15,13,n.total-n.billingForm.get("discount").value+n.billingForm.get("surcharge").value,"1.2-2")," ",n.selectedCurrencyIso," ")}}const Zs=()=>({suppressScrollX:!0});let Hs=(()=>{class s{constructor(){this.assistances=[],this.assistances$=(0,B.of)([]),this.audio=new Audio("./assets/sounds/caja.mp3"),this.bankAccounts=[],this.billAssistances=!1,this.billProducts=!1,this.currencies=[],this.employees$=(0,B.of)([]),this.maxDate=new Date,this.merchant=null,this.multipliers$=(0,B.of)([]),this.operationTypes$=(0,B.of)([]),this.paymentMethods$=(0,B.of)([]),this.previewsAssistancesFormData=[],this.previewsProductsFormData=[],this.productsInStock$=(0,B.of)([]),this.rates=[],this.searchAssistanceControl=new a.MJ(""),this.searchCustomerControl=new a.MJ(null),this.searchProductControl=new a.MJ(null),this.selectedCurrencyIso="",this.selectedCustomerName="",this.stayHere=!1,this.total=0,this._billingService=(0,e.WQX)(ps),this._changeDetectorRef=(0,e.WQX)(e.gRc),this._customersService=(0,e.WQX)(ye.h),this._destroyRef=(0,e.WQX)(e.abz),this._formBuilder=(0,e.WQX)(a.ok),this._fuseConfirmationService=(0,e.WQX)(ae.G),this._ratesService=(0,e.WQX)(Le.f),this._router=(0,e.WQX)(H.Ix),this._snackBar=(0,e.WQX)(O.UG),this._stocksService=(0,e.WQX)(ze.t),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.billingForm=this._formBuilder.group({id:new a.MJ,billDate:new a.MJ(new Date,[a.k0.required]),multiplier:new a.MJ(1,[a.k0.required,a.k0.min(1)]),currencyId:new a.MJ(null,[a.k0.required]),courierId:new a.MJ(null),customerId:new a.MJ("",[a.k0.required]),bankAccount:new a.MJ(null,[a.k0.required]),operationTypeId:new a.MJ(null,[a.k0.required]),paymentMethodId:new a.MJ(null,[a.k0.required]),rates:new a.MJ([],[a.k0.required]),surcharge:new a.MJ(0,[a.k0.required,a.k0.min(0)]),discount:new a.MJ(0,[a.k0.required,a.k0.min(0)]),obs:new a.MJ("",[a.k0.maxLength(5e4)]),products:new a.Yp([]),assistances:new a.Yp([])}),this.store.select(oe.Xb).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.merchant=t,this.bankAccounts=t.bankAccounts,M.H.IsNullOrEmpty(t.bankAccounts)||this.billingForm.get("bankAccount").setValue(t.bankAccounts[0]),this._changeDetectorRef.markForCheck()}),this.billingForm.get("products").valueChanges.pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this._verifyChanges(t,this.previewsProductsFormData)&&this.calcAllProductPrice(this.billingForm.get("multiplier").value),this.previewsProductsFormData=[...t],this._calculateBillTotal(),this._changeDetectorRef.markForCheck()}),this.billingForm.get("assistances").valueChanges.pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this._verifyChanges(t,this.previewsAssistancesFormData)&&this.calcAllAssistancePrice(this.billingForm.get("multiplier").value),this.previewsAssistancesFormData=[...t],this._calculateBillTotal(),this._changeDetectorRef.markForCheck()}),this.store.select(ce.y$).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.currencies=t,M.H.IsNullOrEmpty(t)||setTimeout(()=>{const n=t.find(i=>i.id===this.merchant.currencyId);this.billingForm.get("currencyId").setValue(n.id)},500),this._changeDetectorRef.markForCheck()}),this.employees$=this.store.select(Xe.OB),this.multipliers$=this.store.select(qe.DC),this.customers$=this.store.select(je.wQ),this.paymentMethods$=this.store.select(Qe.xi),this.paymentMethods$.pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{if(!M.H.IsNullOrEmpty(t)){const n=t.find(i=>"Efectivo"===i.name);this.billingForm.get("paymentMethodId").setValue(n?n.id:t[0].id)}this._changeDetectorRef.markForCheck()}),this.operationTypes$=this.store.select(mt.nK),this.operationTypes$.pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{M.H.IsNullOrEmpty(t)||this.billingForm.get("operationTypeId").setValue(t[0].id),this._changeDetectorRef.markForCheck()}),this.productsInStock$=this.store.select(_e.IP),this.store.select(_e.IP).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.productsInStock=t,t.length>0&&(this.billProducts=!0),this._changeDetectorRef.markForCheck()}),this.assistances$=this.store.select(ie),this.store.select(ie).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.assistances=t,t.length>0&&(this.billAssistances=!0),this._changeDetectorRef.markForCheck()}),this.ratesFiltered=this.billingForm.get("currencyId").valueChanges.pipe((0,L.Z)(null),(0,Q.Z)(t=>{if(t){const n=this.currencies.find(o=>o.id===t);this.selectedCurrencyIso=n.iso;const i=this.billingForm.get("bankAccount").getRawValue();return M.H.IsNullOrEmpty(i)||n&&n.iso.toLocaleLowerCase()!==i.currency.toLocaleLowerCase()&&this.billingForm.get("bankAccount").setValue(null),n&&(this.bankAccounts=this.merchant.bankAccounts.filter(o=>o.currency.toLocaleLowerCase()===n.iso.toLocaleLowerCase())),this._ratesService.findActiveByBaseId(t)}return(0,B.of)([])})),this.ratesFiltered.pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.rates=t,this._resetSelectedProductsRates(),this._resetSelectedAssistancesRates(),this.updateSelectedRates()}),this.billingForm.get("rates").valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(500)).subscribe(t=>{this._resetSelectedProductsRates(),this._resetSelectedAssistancesRates()}),this.billingForm.get("multiplier").valueChanges.pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.calcAllProductPrice(t),this.calcAllAssistancePrice(t),this._calculateBillTotal()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,Q.Z)(t=>this._mapChecked(null!==t&&"string"==typeof t?this._stocksService.getProductsInStockAvailable(t,10):this.productsInStock$))),this.assistancesFiltered=this.searchAssistanceControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,Q.Z)(t=>{const n=this.assistances.filter(i=>i.description.includes(t));return this._mapCheckedAssistances(null!==t&&"string"==typeof t?(0,B.of)(n):this.assistances$)})),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,Q.Z)(t=>null!==t&&"string"==typeof t&&t!==this.selectedCustomerName?this._customersService.findActiveCustomers(t.trim()):this.customers$))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}displayFnAssistance(t){return t&&t.description?t.description:""}selectCustomer(t){this.billingForm.get("customerId").setValue(t.id),this.selectedCustomerName=t.name}addStockProduct(t){const n=this.billingForm.get("currencyId").value,i=structuredClone(this.billingForm.get("rates").value);let o=i.find(d=>d.currencyBaseId===n&&d.currencyRefId===t.currencyId);!o&&n!==t.currencyId&&(o=i.find(d=>d.currencyRefId===n&&d.currencyRefId!==d.currencyBaseId),o&&(o.value=1/o.value));const r=this.billingForm.get("multiplier").value,c=this._formBuilder.group({productId:new a.MJ(t.productId,[a.k0.required]),currencyId:new a.MJ(t.currencyId,[a.k0.required]),name:new a.MJ(t.name,[a.k0.required]),staticPrice:new a.MJ(Number(((o?o.value:1)*t.price).toFixed(2)),[a.k0.required,a.k0.min(0),a.k0.max(99999999)]),price:new a.MJ(Number(((o?o.value:1)*t.price).toFixed(2)),[a.k0.required,a.k0.min(0),a.k0.max(99999999)]),multiplier:new a.MJ(r),pt:new a.MJ(0),uom:new a.MJ(t.uom,[a.k0.required]),depotId:new a.MJ(t.depotId,[a.k0.required]),depot:new a.MJ(t.depot,[a.k0.required]),currency:new a.MJ(t.currency,[a.k0.required]),stock:new a.MJ(t.quantity,[a.k0.required]),rateId:new a.MJ(o?o.id:null,[a.k0.required]),rate:new a.MJ(o?o.value:null,[a.k0.required]),quantity:new a.MJ(1,[U.t.onlyNumbersPattern(),a.k0.required,a.k0.min(.1),a.k0.max(t.quantity)])});this.billingForm.get("products").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeStockProduct(t){this.billingForm.get("products").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addProductToBill(t){const n=this.billingForm.get("products").getRawValue().findIndex(i=>i.productId===t.productId&&i.depotId===t.depotId);t.checked?(this.removeStockProduct(n),t.checked=!1):t.checked=!0,!(n>-1)&&this.addStockProduct(t)}incrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n+1)}decrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n-1)}removeProductToBill(t){this.removeStockProduct(t),this.searchProductControl.reset()}addAssistance(t){const n=this.billingForm.get("currencyId").value,i=structuredClone(this.billingForm.get("rates").value);let o=i.find(d=>d.currencyBaseId===n&&d.currencyRefId===t.currencyId);!o&&n!==t.currencyId&&(o=i.find(d=>d.currencyRefId===n&&d.currencyRefId!==d.currencyBaseId),o&&(o.value=1/o.value));const r=this.billingForm.get("multiplier").value,c=this._formBuilder.group({assistanceId:new a.MJ(t.id,[a.k0.required]),currencyId:new a.MJ(t.currencyId,[a.k0.required]),description:new a.MJ(t.description,[a.k0.required]),staticPrice:new a.MJ(Number(((o?o.value:1)*t.price).toFixed(2)),[a.k0.required,a.k0.min(0),a.k0.max(99999999)]),price:new a.MJ(Number(((o?o.value:1)*t.price).toFixed(2)),[a.k0.required,a.k0.min(0),a.k0.max(99999999)]),multiplier:new a.MJ(r),quantity:new a.MJ(1,[U.t.onlyNumbersPattern(),a.k0.required,a.k0.min(1)]),pt:new a.MJ(0),currency:new a.MJ(t.currency.iso,[a.k0.required]),rateId:new a.MJ(o?o.id:null,[a.k0.required]),rate:new a.MJ(o?o.value:null,[a.k0.required])});this.billingForm.get("assistances").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeAssistance(t){this.billingForm.get("assistances").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addAssistanceToBill(t){const n=this.billingForm.get("assistances").getRawValue().findIndex(i=>i.assistanceId===t.id);t.checked?(this.removeAssistance(n),t.checked=!1):t.checked=!0,!(n>-1)&&this.addAssistance(t)}incrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(++n)}decrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(--n)}removeAssistanceToBill(t){this.removeAssistance(t),this.searchAssistanceControl.reset()}createBill(){if(this.billingForm.invalid)return;if(0===this.billingForm.get("products").controls.length&&0===this.billingForm.get("assistances").controls.length)return void this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Alerta",message:"Debe agrear al menos un producto o servicio a la factura",type:"warning",svgIcon:"mat_solid:warning"}});let t=this.billingForm.getRawValue();delete t.id;const n=[],i=[];t.ratesId=t.products.map(r=>r.rateId).filter((r,c,d)=>d.indexOf(r)===c);for(const r of t.products)n.push(this._mapProductToBill(r));for(const r of t.assistances)i.push(this._mapAssistanceToBill(r));t.products=n,t.assistances=i,t.subtotal=Number(this.total.toFixed(2)),delete t.rates,delete t.bankAccount._id,this._fuseConfirmationService.open({title:"Generar factura",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,Y.pQ)(this._destroyRef)).subscribe(r=>{"confirmed"===r&&this._billingService.createBill(t).pipe((0,g.Q)(this._unsubscribeAll),(0,ee.j)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:c})=>{c&&(this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:"Factura registrada correctamente",type:"success",svgIcon:"mat_solid:done"}}),this.audio.play(),this.stayHere?this.restoreForm():this._router.navigateByUrl("/modules/sales/bills"))})})}restoreForm(){const t=this.billingForm.get("paymentMethodId").value,n=this.billingForm.get("operationTypeId").value,i=this.billingForm.get("multiplier").value;if(this.billingForm.get("products").clear(),this.searchCustomerControl.reset(),this.billingForm.reset(),this.total=0,this.selectedCustomerName="",this.searchProductControl.setValue(""),this.billingForm.get("paymentMethodId").setValue(t),this.billingForm.get("operationTypeId").setValue(n),this.billingForm.get("multiplier").setValue(i),this.billingForm.get("billDate").setValue(new Date),this.billingForm.get("observation").setValue(""),this.billingForm.get("surcharge").setValue(0),this.billingForm.get("discount").setValue(0),M.H.IsNullOrEmpty(this.merchant.bankAccounts)||(this.bankAccounts=this.merchant.bankAccounts,this.billingForm.get("bankAccount").setValue(this.merchant.bankAccounts[0])),!M.H.IsNullOrEmpty(this.currencies)){const o=this.currencies.find(r=>r.id===this.merchant.currencyId);this.billingForm.get("currencyId").setValue(o.id)}}_mapProductToBill(t){const{productId:n,price:i,depotId:o,quantity:r}=t,c=new fe.tz(n,"","",Number(i.toFixed(2)),Number(Number(r).toFixed(4)),o);return delete c.name,delete c.uom,c}_mapAssistanceToBill(t){const{assistanceId:n,price:i,quantity:o}=t;return new fe.At(n,i,o)}_calculateBillTotal(){const t=this.billingForm.get("products").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0),n=this.billingForm.get("assistances").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0);this.total=Number(t.toFixed(2))+Number(n.toFixed(2))}_mapChecked(t){return t.pipe((0,N.T)(n=>n.map(i=>this.billingForm.get("products").getRawValue().some(r=>r.productId===i.productId&&r.depotId===i.depotId)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_mapCheckedAssistances(t){return t.pipe((0,N.T)(n=>n.map(i=>this.billingForm.get("assistances").getRawValue().some(r=>r.id===i.id)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_resetSelectedProductsRates(){const t=this.billingForm.get("currencyId").value,n=this.billingForm.get("multiplier").value;for(const i of this.billingForm.get("products").controls){const o=i.getRawValue(),r=structuredClone(this.billingForm.get("rates").value);let c=r.find(h=>h.currencyBaseId===t&&h.currencyRefId===o.currencyId);!c&&t!==o.currencyId&&(c=r.find(h=>h.currencyRefId===t&&h.currencyRefId!==h.currencyBaseId),c&&(c.value=1/c.value));let d=c?c.value:null;const p=i.get("price").value,m=i.get("staticPrice").value;let u=i.get("rate").value?i.get("rate").value:1;u&&d===u&&(u=1,d=1),i.patchValue({...o,price:(d?p*d:1*p/u)*n,staticPrice:d?m*d:1*m/u,multiplier:n,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}_resetSelectedAssistancesRates(){const t=this.billingForm.get("currencyId").value,n=this.billingForm.get("multiplier").value;for(const i of this.billingForm.get("assistances").controls){const o=i.getRawValue(),r=structuredClone(this.billingForm.get("rates").value);let c=r.find(h=>h.currencyBaseId===t&&h.currencyRefId===o.currencyId);!c&&t!==o.currencyId&&(c=r.find(h=>h.currencyRefId===t&&h.currencyRefId!==h.currencyBaseId),c&&(c.value=1/c.value));let d=c?c.value:null;const p=i.get("price").value,m=i.get("staticPrice").value;let u=i.get("rate").value?i.get("rate").value:1;u&&d===u&&(u=1,d=1),i.patchValue({...o,price:(d?p*d:1*p/u)*n,staticPrice:d?m*d:1*m/u,multiplier:n,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}calcAllProductPrice(t){const n=this.billingForm.get("products").getRawValue();this.previewsProductsFormData=[...n];for(const i of this.billingForm.get("products").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}calcAllAssistancePrice(t){const n=this.billingForm.get("assistances").getRawValue();this.previewsAssistancesFormData=[...n];for(const i of this.billingForm.get("assistances").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}_verifyChanges(t,n){for(let i=0;i<t.length;i++)if(t.length!==n.length||t[i].price!==n[i].price||Number(t[i].quantity)!==Number(n[i].quantity))return!0;return!1}updateSelectedRates(){const t=this.billingForm.get("currencyId").value,n=this.billingForm.get("products").getRawValue();let i=[];for(const r of n)i=[...this.rates.filter(p=>p.currencyBaseId===t&&p.currencyRefId===r.currencyId),...this.rates.filter(p=>p.currencyBaseId===r.currencyId&&p.currencyRefId===t&&p.currencyRefId!==p.currencyBaseId),...i];const o=i.reduce((r,c)=>(r.find(p=>p.id===c.id&&p.name===c.name)||r.push(c),r),[]);this.billingForm.get("rates").setValue(o)}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-billing"]],standalone:!0,features:[e.aNF],decls:126,vars:68,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0",3,"fuseScrollbarOptions"],[1,"relative","flex","flex-col","px-6","py-8","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["color","primary",3,"ngModel","ngModelChange"],["mat-flat-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[1,"flex","flex-col","px-4","mt-4","mb-12","gap-y-8","sm:px-8"],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"grid","gap-4","p-10","sm:grid-cols-4","lg:grid-cols-5",3,"formGroup"],["billNgForm","ngForm"],["appearance","fill",1,"w-full","md:col-span-2","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[1,"ath-autocomplete",3,"displayWith"],["customerAutocomplete","matAutocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["billDate",""],[3,"formControlName","required"],[3,"value"],[3,"formControlName","required","placeholder"],["multiple","",3,"formControlName","required","placeholder"],["class","text-sm opacity-75"],["matInput","","type","number","name","quantity",3,"min","max","formControlName"],[1,"flex","flex-col","gap-3","sm:flex-row","lg:flex-col","sm:col-span-2"],[3,"formControlName"],[1,"w-full","sm:col-span-4","lg:col-span-3","fuse-mat-textarea"],["matInput","",3,"formControlName","rows"],["class","col-span-4 shadow rounded-2xl bg-card"],[3,"value","click"],[1,"text-sm","opacity-75"],[1,"w-18"],[1,"col-span-4","shadow","rounded-2xl","bg-card"],[1,"p-6","pb-0"],["appearance","fill",1,"w-full","fuse-mat-dense",3,"subscriptSizing"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete",3,"displayWith","closed"],["productsAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-2","mt-2","min-h-36",3,"fuseScrollbarOptions"],["class","grid"],["class","flex items-center justify-center w-full gap-2 p-2 font-mono text-3xl font-semibold leading-7 text-white rounded-b-2xl bg-gradient-to-r from-primary-500 to-primary-700",3,"ngClass"],[1,"w-full",3,"value","click"],[1,"grid","w-full","grid-cols-6",3,"click"],[1,"flex","flex-row","items-center","col-span-5","truncate","md:col-span-3"],["color","primary",3,"checked"],[1,"items-center","hidden","col-span-2","md:flex"],[1,"flex","items-center","text-center"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left"],[1,"text-center"],[1,"text-right"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"truncate",3,"matTooltip"],[1,"truncate"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"flex","flex-col","items-center","justify-center"],["matInput","","type","number",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],[1,"text-center",3,"ngClass"],[1,"font-mono","text-right"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"w-full","text-sm","text-center"],["class","grid items-center gap-4 px-6 py-3 border-b billing-products-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","items-center","justify-center","w-full","gap-2","p-2","font-mono","text-3xl","font-semibold","leading-7","text-white","rounded-b-2xl","bg-gradient-to-r","from-primary-500","to-primary-700",3,"ngClass","click"],["class","w-full",3,"value"],["assistancesAutocomplete","matAutocomplete"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-assistances-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-assistances-grid","md:px-8"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","formControl"],["class","grid items-center gap-4 px-6 py-3 border-b billing-assistances-grid md:px-8"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Ventas"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",7),e.EFF(14,"Facturaci\xf3n"),e.k0s()(),e.j41(15,"div",5),e.nrm(16,"mat-icon",6),e.j41(17,"a",7),e.EFF(18,"Facturar"),e.k0s()()(),e.j41(19,"div",8)(20,"h2",9),e.EFF(21," Facturar "),e.k0s()()(),e.j41(22,"div",10),e.DNE(23,hs,4,2),e.j41(24,"mat-checkbox",11),e.bIt("ngModelChange",function(r){return i.stayHere=r}),e.EFF(25,"Permanecer aqu\xed"),e.k0s(),e.j41(26,"button",12),e.bIt("click",function(){return i.createBill()}),e.EFF(27," Generar Factura "),e.k0s()()(),e.j41(28,"div",13)(29,"div",14)(30,"form",15,16)(32,"mat-form-field",17)(33,"mat-label"),e.EFF(34,"Cliente"),e.k0s(),e.nrm(35,"mat-icon",18)(36,"input",19),e.j41(37,"mat-autocomplete",20,21),e.Z7z(39,fs,2,2,"mat-option",27,e.fX1),e.nI1(41,"async"),e.k0s()(),e.j41(42,"mat-form-field",22)(43,"mat-label"),e.EFF(44,"Fecha de la factura"),e.k0s(),e.nrm(45,"input",23),e.j41(46,"mat-hint"),e.EFF(47,"DD/MM/YYYY"),e.k0s(),e.nrm(48,"mat-datepicker-toggle",24)(49,"mat-datepicker",null,25),e.DNE(51,gs,2,0,"mat-error"),e.k0s(),e.j41(52,"mat-form-field",22)(53,"mat-label"),e.EFF(54,"Multiplicador"),e.k0s(),e.j41(55,"mat-select",26),e.DNE(56,_s,2,1,"mat-option",27),e.nI1(57,"async"),e.Z7z(58,bs,2,2,"mat-option",27,e.fX1),e.nI1(60,"async"),e.k0s(),e.DNE(61,ys,2,0,"mat-error"),e.k0s(),e.j41(62,"mat-form-field",22)(63,"mat-label"),e.EFF(64,"M\xe9todo de pago"),e.k0s(),e.j41(65,"mat-select",26),e.Z7z(66,Cs,2,2,"mat-option",27,e.fX1),e.nI1(68,"async"),e.k0s(),e.DNE(69,vs,2,0,"mat-error"),e.k0s(),e.j41(70,"mat-form-field",22)(71,"mat-label"),e.EFF(72,"Tipo de Operaci\xf3n"),e.k0s(),e.j41(73,"mat-select",26),e.Z7z(74,Fs,2,2,"mat-option",27,e.fX1),e.nI1(76,"async"),e.k0s(),e.DNE(77,xs,2,0,"mat-error"),e.k0s(),e.j41(78,"mat-form-field",22)(79,"mat-label"),e.EFF(80,"Moneda"),e.k0s(),e.j41(81,"mat-select",28),e.Z7z(82,ks,2,2,"mat-option",27,Oe),e.k0s()(),e.j41(84,"mat-form-field",22)(85,"mat-label"),e.EFF(86,"Tasa de Cambio"),e.k0s(),e.j41(87,"mat-select",29)(88,"mat-select-trigger"),e.EFF(89),e.DNE(90,Is,2,2,"span",30),e.k0s(),e.Z7z(91,Ss,6,6,"mat-option",27,e.fX1),e.nI1(93,"async"),e.k0s(),e.DNE(94,Rs,2,0,"mat-error"),e.k0s(),e.j41(95,"mat-form-field",22)(96,"mat-label"),e.EFF(97,"Descuento"),e.k0s(),e.nrm(98,"input",31),e.k0s(),e.j41(99,"mat-form-field",22)(100,"mat-label"),e.EFF(101,"Recargo"),e.k0s(),e.nrm(102,"input",31),e.k0s(),e.j41(103,"div",32)(104,"mat-form-field",22)(105,"mat-label"),e.EFF(106,"Cuenta Bancaria"),e.k0s(),e.j41(107,"mat-select",26),e.Z7z(108,$s,2,3,"mat-option",27,e.fX1),e.k0s(),e.j41(110,"mat-hint"),e.EFF(111,"Cuentas Bancarias registradas en el negocio"),e.k0s(),e.DNE(112,js,2,0,"mat-error"),e.k0s(),e.j41(113,"mat-form-field",22)(114,"mat-label"),e.EFF(115,"Transportista"),e.k0s(),e.j41(116,"mat-select",33),e.Z7z(117,Es,2,2,"mat-option",27,e.fX1),e.nI1(119,"async"),e.k0s()()(),e.j41(120,"mat-form-field",34)(121,"mat-label"),e.EFF(122,"Observaciones"),e.k0s(),e.nrm(123,"textarea",35),e.k0s()()(),e.DNE(124,Vs,14,12,"div",36)(125,Ws,16,19,"div",36),e.k0s()()),2&n){const o=e.sdS(38),r=e.sdS(50);e.Y8G("fuseScrollbarOptions",e.lJ4(67,Zs)),e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(7),e.vxM(23,i.assistances.length>0&&i.productsInStock.length>0?23:-1),e.R7$(),e.Y8G("ngModel",i.stayHere),e.R7$(2),e.Y8G("disabled",i.billingForm.invalid),e.R7$(4),e.Y8G("formGroup",i.billingForm),e.R7$(5),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",i.searchCustomerControl)("matAutocomplete",o)("placeholder","Buscar cliente")("required",!0),e.R7$(),e.Y8G("displayWith",i.displayFn),e.R7$(2),e.Dyx(e.bMT(41,53,i.customersFiltered)),e.R7$(6),e.Y8G("matDatepicker",r)("formControlName","billDate")("max",i.maxDate)("required",!0),e.R7$(3),e.Y8G("for",r),e.R7$(3),e.vxM(51,i.billingForm.get("billDate").hasError("required")?51:-1),e.R7$(4),e.Y8G("formControlName","multiplier")("required",!0),e.R7$(),e.vxM(56,0===e.bMT(57,55,i.multipliers$).length?56:-1),e.R7$(2),e.Dyx(e.bMT(60,57,i.multipliers$)),e.R7$(3),e.vxM(61,i.billingForm.get("multiplier").hasError("required")?61:-1),e.R7$(4),e.Y8G("formControlName","paymentMethodId")("required",!0),e.R7$(),e.Dyx(e.bMT(68,59,i.paymentMethods$)),e.R7$(3),e.vxM(69,i.billingForm.get("paymentMethodId").hasError("required")?69:-1),e.R7$(4),e.Y8G("formControlName","operationTypeId")("required",!0),e.R7$(),e.Dyx(e.bMT(76,61,i.operationTypes$)),e.R7$(3),e.vxM(77,i.billingForm.get("operationTypeId").hasError("required")?77:-1),e.R7$(4),e.Y8G("formControlName","currencyId")("required",!0)("placeholder","Moneda"),e.R7$(),e.Dyx(i.currencies),e.R7$(5),e.Y8G("formControlName","rates")("required",!0)("placeholder","Tasa de cambio"),e.R7$(2),e.SpI(" ",(null==i.billingForm.get("rates").value||null==i.billingForm.get("rates").value[0]?null:i.billingForm.get("rates").value[0].name)||""," "),e.R7$(),e.vxM(90,((null==i.billingForm.get("rates").value?null:i.billingForm.get("rates").value.length)||0)>1?90:-1),e.R7$(),e.Dyx(e.bMT(93,63,i.ratesFiltered)),e.R7$(3),e.vxM(94,i.billingForm.get("rates").hasError("required")?94:-1),e.R7$(4),e.Y8G("min",0)("max",i.total)("formControlName","discount"),e.R7$(4),e.Y8G("min",0)("max",99999)("formControlName","surcharge"),e.R7$(5),e.Y8G("formControlName","bankAccount")("required",!0),e.R7$(),e.Dyx(i.bankAccounts),e.R7$(4),e.vxM(112,i.billingForm.get("bankAccount").hasError("required")?112:-1),e.R7$(4),e.Y8G("formControlName","courierId"),e.R7$(),e.Dyx(e.bMT(119,65,i.employees$)),e.R7$(6),e.Y8G("formControlName","obs")("rows",4),e.R7$(),e.vxM(124,i.billProducts?124:-1),e.R7$(),e.vxM(125,i.billAssistances?125:-1)}},dependencies:[v.Jj,v.oe,v.QX,a.YN,a.qT,a.me,a.Q0,a.BC,a.cb,a.YS,a.VZ,a.zX,a.vS,be.p,z.jL,z.$3,re.wT,z.pN,I.Hl,I.$z,te.g7,te.So,k.X6,k.Vh,k.bZ,k.bU,_.RG,_.rl,_.nJ,_.MV,_.TL,_.JW,_.yw,R.m_,R.An,S.fS,S.fg,w.Cn,W.Ve,W.VO,W.$2,J.uc,J.oV,v.YU,a.X1,a.l_,a.j4,a.JD,H.Wk],encapsulation:2,changeDetection:0})}return s})();var _t=f(67376),ge=f(39409);const bt=s=>s.bills,Ee=((0,$.Mz)(bt,s=>s.bill),(0,$.Mz)(bt,s=>s.bills));let Ks=(()=>{class s{constructor(t){this._dialogRef=t,this.dateControl=new a.MJ(null,[a.k0.required])}closeDialog(){this._dialogRef.close()}selectDate(){const t=new Date(this.dateControl.value);this._dialogRef.close(t)}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(j.CP))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-bills-date-dialog-select"]],standalone:!0,features:[e.aNF],decls:19,vars:7,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","py-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],["appearance","fill"],["matInput","",3,"matDatepicker","formControl"],["matIconSuffix","",3,"for"],["dp",""],[1,"flex","items-center","px-6","py-4","space-x-3","justify-between","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"h2",2),e.EFF(3," Seleccione la fecha de las facturas que desea exportar "),e.k0s()(),e.j41(4,"div",3)(5,"div",4)(6,"div",5)(7,"mat-form-field",6),e.nrm(8,"input",7),e.j41(9,"mat-hint"),e.EFF(10,"DD/MM/YYYY"),e.k0s(),e.nrm(11,"mat-datepicker-toggle",8)(12,"mat-datepicker",null,9),e.k0s()()()(),e.j41(14,"div",10)(15,"button",11),e.EFF(16," Cancelar "),e.k0s(),e.j41(17,"button",12),e.bIt("click",function(){return i.selectDate()}),e.EFF(18," Aceptar "),e.k0s()()()),2&n){const o=e.sdS(13);e.R7$(8),e.Y8G("matDatepicker",o)("formControl",i.dateControl),e.R7$(3),e.Y8G("for",o),e.R7$(4),e.Y8G("matDialogClose","cancelled"),e.R7$(2),e.Y8G("color","primary")("disabled",i.dateControl.invalid)("matDialogClose","confirmed")}},dependencies:[_.RG,_.rl,_.MV,_.yw,S.fS,S.fg,k.X6,k.Vh,k.bZ,k.bU,j.hM,j.tx,I.Hl,I.$z,a.X1,a.me,a.BC,a.l_],encapsulation:2})}return s})();var Je=f(78357),De=f(33446);let Ue=(()=>{class s{constructor(t,n,i){this.apolloProvider=t,this._snackBar=n,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}getBills(t=0,n=50,i="no",o="desc",r="",c=null,d=[],p=[],m=[],u=null,h=null,b=null){return this._apollo.query({query:ns,errorPolicy:"all",variables:{page:t,size:n,sort:i,order:o,search:r,customerId:c,currenciesId:d,status:p,paymentStatus:m,billDate:u,startDate:h,endDate:b}}).pipe((0,T.M)(({data:y})=>{y&&this.store.dispatch((0,ge.zY)({bills:structuredClone(y).findAllBills.bills.map(C=>{const P=C.products.reduce((se,Z)=>{const Se=se.find(nt=>nt.productId===Z.productId);return Se?Se.quantity+=Z.quantity:se.push({productId:Z.productId,price:Z.price,quantity:Z.quantity,product:Z.product}),se},[]);return C.products=P,C})})),this.store.dispatch((0,Fe.Bp)({pagination:y.findAllBills.pagination}))}))}getBillsByDate(t){return this._apollo.query({query:os,errorPolicy:"all",variables:{date:t}}).pipe((0,T.M)(({errors:n})=>{if(n){let i="";n.forEach(o=>i+=`\n ${o.message}.`),this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getBillsByDateRangeAndStatus(t,n,i=null,o=null,r=null){return this._apollo.query({query:as,errorPolicy:"all",variables:{initDate:t,endDate:n,status:i,paymentStatus:o,clientId:r}})}getBillById(t){return this._apollo.query({query:rs,variables:{findBillByIdId:t},errorPolicy:"all"}).pipe((0,T.M)(({errors:n,data:i})=>{if(n){let o="";n.forEach(r=>o+=`\n ${r.message}.`),this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ge.ST)({bill:i.bill}))}))}updateBill(t){return this.store.select(Ee).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:cs,variables:{updateBillInput:t},errorPolicy:"all"}).pipe((0,T.M)(({errors:i,data:o})=>{if(i){let d="";i.forEach(p=>d+=`\n ${p.message}.`),this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,De.A)(n);r[n.findIndex(d=>d.id===t.id)]=o.updatedBill,this.store.dispatch((0,ge.zY)({bills:r}))}))))}updateBillStatus(t,n,i){return this.store.select(Ee).pipe((0,q.s)(1),(0,E.n)(o=>this._apollo.mutate({mutation:ds,variables:{updateBillStatusInput:{id:t,status:n,paymentStatus:i}},errorPolicy:"all"}).pipe((0,T.M)(({data:r})=>{const c=structuredClone(o);c[o.findIndex(p=>p.id===t)]=r.updateBillStatus.bill,this.store.dispatch((0,ge.zY)({bills:c}))}))))}removeBill(t){return this.store.select(Ee).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:us,variables:{removeBillId:t},errorPolicy:"all"}).pipe((0,T.M)(({errors:i})=>{if(i){let c="";i.forEach(d=>c+=`\n ${d.message}.`),this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:c,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const o=(0,De.A)(n),r=n.findIndex(c=>c.id===t);o.splice(r,1),this.store.dispatch((0,ge.zY)({bills:o}))}))))}dispatchBill(t){return this._apollo.mutate({mutation:ms,variables:{billId:t},errorPolicy:"all"}).pipe((0,T.M)(({data:n})=>{n&&this.store.dispatch((0,ge.Ns)({bill:n.dispatchBill.bill}))}))}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(F.Ic),e.KVO(O.UG),e.KVO($.il))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Ce=f(56730);let yt=(()=>{class s{constructor(){ne.vfs=at.b.vfs}generateSalesByPeriodReport(t,n,i,o=!0){if(o&&t.products.some(p=>null!==p.location&&p.location.name!==t.products[0].location?.name)){const p=t.products.reduce((u,h)=>{const b=h.product.id;return u[b]?u[b].push(h):u[b]=[h],u},{}),m=[...new Set(t.products.map(u=>u.location?.name))];t.products=Object.keys(p).map(u=>{const h=p[u];return{...h[0],location:{name:m.join(", ")},quantity:h.reduce((b,y)=>b+y.quantity,0),costAvg:h.reduce((b,y)=>b+y.costAvg,0)/h.length,priceAvg:h.reduce((b,y)=>b+y.priceAvg,0)/h.length,revenue:h.reduce((b,y)=>b+y.revenue,0),profit:h.reduce((b,y)=>b+y.profit,0)}})}let r=t.products.reduce((d,p)=>{const m=p.location?.name;return d[m]?d[m].push(p):d[m]=[p],d},{});const c={content:[{layout:{hLineWidth:(d,p)=>.5,vLineWidth:(d,p)=>0,hLineColor:(d,p)=>"#eeeeee"},table:{headerRows:1,widths:["20%","*","35%"],body:[[{text:"Documento",style:"table_header_simple",fontSize:8,bold:!0,alignment:"left"},{text:"Per\xedodo",style:"table_header_simple",fontSize:8,bold:!0,alignment:"center"},{text:"Beneficio",style:"table_header_simple",fontSize:8,bold:!0,alignment:"center"}],[{text:"Beneficio por productos vendidos",fontSize:10,bold:!0},{text:`${x(t.startAt).format("DD-MM-yyyy hh:mm a")} al ${x(t.endAt).format("DD-MM-yyyy hh:mm a")}`,fontSize:10,bold:!0,alignment:"center"},{text:t.profit.toFixed(2),fontSize:10,bold:!0,alignment:"center"}],[{text:"Total vendido",style:"table_header_simple",fontSize:8,bold:!0,alignment:"left"},{text:"Transferencia",style:"table_header_simple",fontSize:8,bold:!0,alignment:"center"},{text:"Efectivo",style:"table_header_simple",fontSize:8,bold:!0,alignment:"center"}],[{text:t.revenue.toFixed(2),fontSize:10,bold:!0,alignment:"left"},{text:t.cardPaid.toFixed(2),fontSize:10,alignment:"center"},{text:t.cashPaid.toFixed(2),fontSize:10,alignment:"center"}]]}},{table:{headerRows:1,widths:["*",42,55,60,100,100],body:[[{text:"Producto",style:"table_header",alignment:"left"},{text:"Cantidad",style:"table_header",alignment:"center"},{text:"Costo",style:"table_header",alignment:"right"},{text:"Precio",style:"table_header",alignment:"right"},{text:"Venta",style:"table_header",alignment:"right"},{text:"Beneficio",style:"table_header",alignment:"right",margin:[0,0,10,0]}],...Object.keys(r).map(d=>{const p=[];if(!r.hasOwnProperty(d))return p;!M.H.IsNullOrEmpty(d)&&"undefined"!==d&&p.push([{text:d.toUpperCase(),colSpan:6,alignment:"center",bold:!0,fontSize:10,fillColor:"whitesmoke"},{},{},{},{},{}]);const m=r[d].sort((u,h)=>u.product.name.localeCompare(h.name));return m.forEach(u=>{p.push([{text:u.product.name,alignment:"left",style:"table_body"},{text:u.quantity,alignment:"center",style:"table_body"},{text:u.costAvg?u.costAvg.toFixed(2):0,alignment:"right",style:"table_body"},{text:u.priceAvg.toFixed(2),alignment:"right",style:"table_body"},{text:u.revenue.toFixed(2),alignment:"right",style:"table_body"},{text:u.profit.toFixed(2),alignment:"right",margin:[0,0,10,0],style:"table_body"}])}),o||p.push([{text:"Subtotales",colSpan:4,style:"table_header",alignment:"left",margin:[10,0,0,0]},{text:"",style:"table_header"},{text:"",style:"table_header"},{text:"",style:"table_header"},{text:m.reduce((u,h)=>u+h.revenue,0).toFixed(2),style:"table_header",alignment:"right"},{text:m.reduce((u,h)=>u+h.profit,0).toFixed(2),style:"table_header",margin:[0,0,10,0],alignment:"right"}]),p}).flat(),[{text:"Totales",colSpan:4,style:"table_header",alignment:"left",margin:[10,0,0,0]},{text:"",style:"table_header"},{text:"",style:"table_header"},{text:"",style:"table_header"},{text:t.products.reduce((d,p)=>d+p.revenue,0).toFixed(2),style:"table_header",alignment:"right"},{text:t.products.reduce((d,p)=>d+p.profit,0).toFixed(2),style:"table_header",margin:[0,0,10,0],alignment:"right"}]]},layout:{hLineWidth:(d,p)=>.7,vLineWidth:(d,p)=>0,hLineColor:(d,p)=>"#eeeeee"},marginTop:20}],footer:(d,p)=>({stack:[d===p?{layout:{hLineWidth:(m,u)=>.7,vLineWidth:(m,u)=>0,hLineColor:(m,u)=>"#eeeeee"},table:{headerRows:1,widths:["*","*","*"],body:[[{style:"table_header_simple",text:"elabora",fontFeatures:["c2sc","smcp"],alignment:"left"},{style:"table_header_simple",text:"",fontFeatures:["c2sc","smcp"],alignment:"left"},{style:"table_header_simple",text:"revisa",fontFeatures:["c2sc","smcp"],alignment:"left"}],[{text:"Nombre y apellidos",bold:!0,fontSize:8,fontFeatures:["c2sc","smcp"]},{text:"",bold:!0,fontSize:8,fontFeatures:["c2sc","smcp"]},{text:"Nombre y apellidos",bold:!0,fontSize:8,fontFeatures:["c2sc","smcp"]}],[{style:"table_header_simple",text:i.employee.fullname,fontSize:10,alignment:"left",fontFeatures:["c2sc","smcp"]},{style:"table_header_simple",text:""},{style:"table_header_simple",text:""}],[{text:"Firma",bold:!0,fontSize:8,fontFeatures:["c2sc","smcp"]},{text:"",bold:!0,fontSize:8,fontFeatures:["c2sc","smcp"]},{text:"Firma",bold:!0,fontSize:8,fontFeatures:["c2sc","smcp"]}],[{style:"table_header_simple",text:" "},{style:"table_header_simple",text:" "},{style:"table_header_simple",text:" "}]]},margin:[40,0,40,0]}:null,{table:{widths:["*","*"],body:[[{text:"Reporte de Productos Vendidos",bold:!0,fontSize:8},{text:`P\xe1gina ${d.toString()}/${p} - Fecha de impresi\xf3n ${x().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:d===p?[40,15,40,0]:[40,145,40,0],layout:"noBorders",italics:!0}]}),defaultStyle:{fontSize:12},styles:{header:{fontSize:16,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header_simple:{fontSize:8,bold:!0,alignment:"center",fillColor:"#eeeeee"},table_header:{fontSize:10,margin:[0,2,0,2],bold:!0,alignment:"center",fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"],fontSize:10},totals_value:{alignment:"right",bold:!0,fontSize:11}},pageOrientation:"portrait",pageSize:"LETTER",pageMargins:[40,40,40,180],watermark:{text:n.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:"Reporte de Productos Vendidos",author:i.fullname,creationDate:x().toDate(),modDate:x().toDate(),producer:n.name}};ne.createPdf(c).open()}generateBillsReport(t,n,i,o,r,c=0,d=0,p=new fe.To(0,0,0,0)){const m=`Facturas realizadas de ${x(t).format("DD/MM/yy")} - ${x(n).format("DD/MM/yy")}`,u={header:{text:m,style:"header",marginTop:5},content:[{lineHeight:1.3,table:{headerRows:1,widths:[20,80,60,"*",60,60,60,60,60],body:[[{text:"#",style:"table_header"},{text:"N\xba",style:"table_header"},{text:"Fecha",style:"table_header"},{text:"Cliente",style:"table_header",alignment:"left"},{text:"$",style:"table_header"},{text:"Importe",style:"table_header"},{text:"Estado",style:"table_header"},{text:"F. Cobro",style:"table_header"},{text:"Demora",style:"table_header"}],...r.map((h,b)=>[{style:"table_body",text:b+1},{style:"table_body",text:h.no},{style:"table_body",text:x(h.billDate).format("DD/MM/yy")},{style:"table_body",text:"item.customer.fullname",alignment:"left"},{style:"table_body",text:h.currency.iso},{style:"table_body",text:h.total.toFixed(2),alignment:"right"},{style:"table_body",text:h.paymentStatus.toLocaleUpperCase()},{style:"table_body",text:"pendiente"===h.paymentStatus||void 0===h.collectedAt?"":x(h.collectedAt).format("DD/MM/yy")},{style:"table_body",text:"pendiente"===h.paymentStatus||void 0===h.collectedAt?x(h.billDate).fromNow(!0):x(h.collectedAt).from(x(h.billDate),!0)}]),[{text:"",style:"table_footer"},{text:"Total",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"CUP",style:"table_footer"},{text:c.toFixed(2),style:"table_footer",alignment:"right"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"}],[{text:"",style:"table_footer"},{text:"Total",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"USD",style:"table_footer"},{text:d.toFixed(2),style:"table_footer",alignment:"right"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"}]]},layout:{hLineWidth:(h,b)=>.7,vLineWidth:(h,b)=>0,hLineColor:(h,b)=>"#eeeeee"}}],footer:(h,b)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${o.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${h.toString()}/${b} - Fecha de impresi\xf3n ${x().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_footer:{fontSize:12,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_body:{fontSize:10,alignment:"center"}},pageOrientation:"landscape",pageSize:"LETTER",watermark:{text:o.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:m,author:i.fullname,creationDate:x().toDate(),modDate:x().toDate(),producer:o.name}};ne.createPdf(u).open()}generateBillsCollectedByCustomersReport(t,n,i,o,r){const c=[],d=`Facturas Realizadas por Clientes en ${r[0].currency} de ${x(t).format("DD/MM/yy")} - ${x(n).format("DD/MM/yy")}`;r.forEach((m,u)=>{const h={lineHeight:1.3,marginTop:10,marginBotton:5,headerRows:1,table:{headerRows:1,widths:["*"],body:[[{text:`Cliente: ${m.customer}`,style:"table_header",alignment:"center"}]]},layout:{hLineWidth:(C,P)=>.7,vLineWidth:(C,P)=>0,hLineColor:(C,P)=>"#eeeeee"}},b=[{columns:[{text:"Total de facturas:",style:"customers_summary"},{text:"Cobradas:",style:"customers_summary"},{text:"Por cobrar:",style:"customers_summary"}]},{columns:[{text:m.totalBills,style:"customers_summary"},{text:m.totalCollected,style:"customers_summary"},{text:m.totalPending,style:"customers_summary"}]},{columns:[{text:`${m.currency} ${m.totalAmount.toFixed(2)}`,style:"customers_summary"},{text:`${m.currency} ${m.totalCollectedAmount.toFixed(2)}`,style:"customers_summary"},{text:`${m.currency} ${m.totalPendingAmount.toFixed(2)}`,style:"customers_summary"}]}],y={lineHeight:1.3,marginTop:10,headerRows:1,table:{headerRows:1,widths:[80,"*",100,80,80],body:[[{text:"Fecha",style:"table_header"},{text:"No. Factura",style:"table_header",alignment:"left"},{text:"Importe",style:"table_header",alignment:"right"},{text:"Estado",style:"table_header"},{text:"Estado de Pago",style:"table_header"}],...m.bills.map(C=>[{text:x(C.date).format("DD/MM/yy"),style:"table_body"},{text:C.no,style:"table_body",alignment:"left"},{text:C.total.toFixed(2),style:"table_body",alignment:"right"},{text:C.status.toLocaleUpperCase(),style:"table_body"},{text:C.paymentStatus.toLocaleUpperCase(),style:"table_body"}])]},layout:{hLineWidth:(C,P)=>.7,vLineWidth:(C,P)=>0,hLineColor:(C,P)=>"#eeeeee"}};c.push(h,b,y)});const p={header:{text:d,style:"header"},content:c,footer:(m,u)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${o.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${m.toString()}/${u} - Fecha de impresi\xf3n ${x().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:16,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},customer_name:{fontSize:14,bold:!0,marginTop:20,marginBottom:5,alignment:"center",fillColor:"#bbbbbb",fontFeatures:["c2sc","smcp"]},customers_summary:{fontSize:12,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},subheader:{fontSize:14,bold:!0,margin:[0,10,0,5]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_body:{alignment:"center",fontSize:10}},pageOrientation:"portrait",pageSize:"LETTER",pageMargins:[30,30],watermark:{text:o.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:d,author:i.fullname,creationDate:x().toDate(),modDate:x().toDate(),producer:o.name}};ne.createPdf(p).open()}generateBillsByCustomersReport(t,n,i,o,r,c=null){const d=[],p=`Facturas ${c?"Cobradas":""} por Clientes en ${r[0].currency} de ${x(t).format("DD/MM/yy")} - ${x(n).format("DD/MM/yy")}`;r.forEach(u=>{const h={lineHeight:1.3,marginTop:10,marginBotton:5,headerRows:1,table:{headerRows:1,widths:["*"],body:[[{text:`Cliente: ${u.customer}`,style:"customer_header",alignment:"center"}]]},layout:{hLineWidth:(C,P)=>.7,vLineWidth:(C,P)=>0,hLineColor:(C,P)=>"#a1a1a1"}},b=[{columns:[{text:"Total de facturas:",style:"customers_summary"},{text:`Total ${c?"cobrado":"facturado"}:`,style:"customers_summary"}]},{columns:[{text:u.totalBills,style:"customers_summary"},{text:`${u.currency} ${u.totalAmount.toFixed(2)}`,style:"customers_summary"}]}],y={lineHeight:1.3,marginTop:10,headerRows:1,table:{headerRows:1,widths:[40,80,"*",c?50:100,80,80,c?80:0],body:[[{text:"No.",style:"table_header"},{text:"Fecha",style:"table_header"},{text:"No. Factura",style:"table_header",alignment:"left"},{text:"Importe",style:"table_header",alignment:"right"},{text:"Estado",style:"table_header"},{text:"Estado de Pago",style:"table_header"},{text:c?"F. Cobro":"",style:"table_header"}],...u.bills.map((C,P)=>[{text:P+1,style:"table_body"},{text:x(C.date).format("DD/MM/yy"),style:"table_body"},{text:C.no,style:"table_body",alignment:"left"},{text:C.total.toFixed(2),style:"table_body",alignment:"right"},{text:C.status.toLocaleUpperCase(),style:"table_body"},{text:C.paymentStatus.toLocaleUpperCase(),style:"table_body"},{text:c?x(C.collectedAt).format("DD/MM/yy"):"",style:"table_body"}])]},layout:{hLineWidth:(C,P)=>.7,vLineWidth:(C,P)=>0,hLineColor:(C,P)=>"#eeeeee"}};d.push(h,b,y)});const m={header:{text:p,style:"header"},content:d,footer:(u,h)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${o.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${u.toString()}/${h} - Fecha de impresi\xf3n ${x().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:16,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},customer_name:{fontSize:14,bold:!0,marginTop:20,marginBottom:5,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},customers_summary:{fontSize:12,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},subheader:{fontSize:14,bold:!0,margin:[0,10,0,5]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},customer_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#bbbbbb",fontFeatures:["c2sc","smcp"]},table_body:{alignment:"center",fontSize:10}},pageOrientation:"portrait",pageSize:"LETTER",pageMargins:[30,30],watermark:{text:o.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:p,author:i.fullname,creationDate:x().toDate(),modDate:x().toDate(),producer:o.name}};ne.createPdf(m).open()}generateProductsBoughtByCustomerReport(t,n,i,o,r){const c=[],d=`Productos comprados por ${r.customer} de ${x(t).format("DD/MM/yy")} - ${x(n).format("DD/MM/yy")}`,p={lineHeight:1.3,marginTop:10,headerRows:1,table:{headerRows:1,widths:[20,"*",40,100,80,80],body:[[{text:"No.",style:"table_header"},{text:"Producto",style:"table_header",alignment:"left"},{text:"U",style:"table_header"},{text:"Cantidad",style:"table_header"},{text:"Precio",style:"table_header",alignment:"right"},{text:"Total",style:"table_header",alignment:"right"}],...r.products.map((u,h)=>[{text:h+1,style:"table_body"},{text:u.name,style:"table_body",alignment:"left"},{text:u.uom,style:"table_body"},{text:u.quantity,style:"table_body"},{text:u.price.toFixed(2),style:"table_body",alignment:"right"},{text:(u.quantity*u.price).toFixed(2),style:"table_body",alignment:"right"}])]},layout:{hLineWidth:(u,h)=>.7,vLineWidth:(u,h)=>0,hLineColor:(u,h)=>"#eeeeee"}};c.push(p);const m={header:{text:d,style:"header"},content:c,footer:(u,h)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${o.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${u.toString()}/${h} - Fecha de impresi\xf3n ${x().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:16,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},customer_name:{fontSize:14,bold:!0,marginTop:20,marginBottom:5,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},customers_summary:{fontSize:12,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},subheader:{fontSize:14,bold:!0,margin:[0,10,0,5]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_body:{alignment:"center",fontSize:10}},pageOrientation:"portrait",pageSize:"LETTER",pageMargins:[30,30],watermark:{text:o.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:d,author:i.fullname,creationDate:x().toDate(),modDate:x().toDate(),producer:o.name}};ne.createPdf(m).open()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Te=function(s){return s.factura="factura",s.prefactura="prefactura",s.oferta="oferta",s}(Te||{});const en=["billDateFilter"],tn=["customerFilter"],sn=["currencyFilter"],nn=["statusFilter"],on=["paymentStatusFilter"];function an(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-icon",34),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.range.reset())}),e.k0s()}}function rn(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",55),e.bIt("click",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.clearTableFilters())}),e.j41(1,"span",56),e.EFF(2," filter_list_off "),e.k0s()()}}function ln(s,l){1&s&&e.nrm(0,"mat-icon",66),2&s&&e.Y8G("svgIcon","mat_solid:done")}function cn(s,l){1&s&&e.nrm(0,"mat-icon",66),2&s&&e.Y8G("svgIcon","mat_solid:done")}function dn(s,l){1&s&&e.nrm(0,"mat-icon",66),2&s&&e.Y8G("svgIcon","mat_solid:done")}function un(s,l){1&s&&e.nrm(0,"mat-icon",66),2&s&&e.Y8G("svgIcon","mat_solid:done")}const mn=(s,l,t,n)=>({"bg-amber-50 text-amber-700":s,"text-red-700 bg-red-50":l,"text-orange-700 bg-orange-50":t,"text-green-700 bg-green-50":n}),pn=(s,l)=>({"text-blue-700 bg-blue-50":s,"text-green-700 bg-green-50":l});function hn(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",57)(1,"div",58),e.EFF(2),e.k0s(),e.j41(3,"div",59),e.EFF(4),e.nI1(5,"date"),e.k0s(),e.j41(6,"div",26),e.EFF(7),e.k0s(),e.j41(8,"div",60),e.EFF(9),e.k0s(),e.j41(10,"div",61),e.EFF(11),e.nI1(12,"number"),e.k0s(),e.j41(13,"div",62)(14,"span",63),e.EFF(15),e.nI1(16,"uppercase"),e.k0s()(),e.j41(17,"div",62)(18,"span",63),e.EFF(19),e.nI1(20,"uppercase"),e.k0s()(),e.j41(21,"div",64)(22,"button",65),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.generateBillDocument(o))}),e.nrm(23,"mat-icon",66),e.k0s(),e.j41(24,"button",67),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.dispatchBill(o.id))}),e.nrm(25,"mat-icon",66),e.k0s(),e.j41(26,"div")(27,"button",68),e.nrm(28,"mat-icon",66),e.k0s(),e.j41(29,"mat-menu",null,69)(31,"div",70),e.EFF(32," Actualizar Estado "),e.k0s(),e.j41(33,"button",71),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.updateStatus(o.id,"entregada"))}),e.j41(34,"div",72),e.DNE(35,ln,1,1,"mat-icon",73),e.k0s(),e.j41(36,"span",74),e.EFF(37,"Entregada"),e.k0s()(),e.j41(38,"button",71),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.updateStatus(o.id,null,"cobrada"))}),e.j41(39,"div",72),e.DNE(40,cn,1,1,"mat-icon",73),e.k0s(),e.j41(41,"span",74),e.EFF(42,"Cobrada"),e.k0s()(),e.j41(43,"button",71),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.updateStatus(o.id,"cancelada"))}),e.j41(44,"div",72),e.DNE(45,dn,1,1,"mat-icon",73),e.k0s(),e.j41(46,"span",74),e.EFF(47,"Cancelada"),e.k0s()(),e.j41(48,"button",71),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.updateStatus(o.id,"rechazada"))}),e.j41(49,"div",72),e.DNE(50,un,1,1,"mat-icon",73),e.k0s(),e.j41(51,"span",74),e.EFF(52,"Rechazada"),e.k0s()()()()()()}if(2&s){const t=l.$implicit,n=e.sdS(30);e.R7$(2),e.SpI(" ",t.no," "),e.R7$(2),e.SpI(" ",e.i5U(5,23,t.createdAt,"dd/MM/yyyy")," "),e.R7$(3),e.SpI(" ",t.customer.name," "),e.R7$(2),e.SpI(" ",t.currency.iso," "),e.R7$(2),e.SpI(" ",e.i5U(12,26,t.total,"1.2-2")," "),e.R7$(2),e.Y8G("ngClass",e.ziG(33,mn,"nueva"===t.status,"cancelada"===t.status,"rechazada"===t.status,"entregada"===t.status)),e.R7$(2),e.SpI(" ",e.bMT(16,29,t.status)," "),e.R7$(2),e.Y8G("ngClass",e.l_i(38,pn,"pendiente"===t.paymentStatus,"cobrada"===t.paymentStatus)),e.R7$(2),e.SpI(" ",e.bMT(20,31,t.paymentStatus)," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:description"),e.R7$(),e.Y8G("disabled",0===t.products.length||t.isDispatched||t.status.includes("cancelada")||t.status.includes("rechazada")),e.R7$(),e.Y8G("svgIcon","mat_solid:logout"),e.R7$(2),e.Y8G("matMenuTriggerFor",n)("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.R7$(),e.Y8G("svgIcon","mat_solid:update"),e.R7$(5),e.Y8G("disabled",t.status.includes("entregada")||t.status.includes("cancelada")||t.status.includes("rechazada")||t.paymentStatus.includes("cobrada")),e.R7$(2),e.vxM(35,t.status.includes("entregada")?35:-1),e.R7$(3),e.Y8G("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.R7$(2),e.vxM(40,t.paymentStatus.includes("cobrada")?40:-1),e.R7$(3),e.Y8G("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("rechazada")||t.status.includes("cancelada")),e.R7$(2),e.vxM(45,t.status.includes("cancelada")?45:-1),e.R7$(3),e.Y8G("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.R7$(2),e.vxM(50,t.status.includes("rechazada")?50:-1)}}function fn(s,l){if(1&s&&e.Z7z(0,hn,53,41,"div",75,e.BUC().trackByFn),2&s){const t=e.XpG();e.Dyx(t)}}function gn(s,l){1&s&&(e.j41(0,"div",76),e.EFF(1," \xa1No se ha registrado ninguna factura! "),e.k0s())}const _n=()=>["nueva","entregada","cancelada","rechazada"],bn=()=>["pendiente","cobrada"],yn=s=>({"mr-4":s}),Cn=(s,l)=>({"pointer-events-none":s,hidden:l}),vn=()=>[10,25,100];function Fn(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",35)(1,"div",36)(2,"div",37),e.EFF(3," N\xfamero "),e.k0s(),e.j41(4,"div",38)(5,"span",39),e.EFF(6,"Fecha"),e.k0s(),e.j41(7,"table-filter",40,41),e.bIt("dataChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addDate(i))}),e.k0s()(),e.j41(9,"div",42)(10,"span"),e.EFF(11,"Cliente"),e.k0s(),e.j41(12,"table-filter",43,44),e.bIt("dataChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addCustomer(i))}),e.k0s()(),e.j41(14,"div",38)(15,"span"),e.EFF(16,"Moneda"),e.k0s(),e.j41(17,"table-filter",45,46),e.bIt("dataChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addCurrencies(i))}),e.nI1(19,"async"),e.k0s()(),e.j41(20,"div",47),e.EFF(21," Importe "),e.k0s(),e.j41(22,"div",38)(23,"span",39),e.EFF(24,"Estado"),e.k0s(),e.j41(25,"table-filter",48,49),e.bIt("dataChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addStatus(i))}),e.k0s()(),e.j41(27,"div",38)(28,"span",50),e.EFF(29,"E.Pago"),e.k0s(),e.j41(30,"table-filter",48,51),e.bIt("dataChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addPaymentStatus(i))}),e.k0s()(),e.j41(32,"div",52)(33,"span"),e.EFF(34,"Acciones"),e.k0s(),e.DNE(35,rn,3,0,"button",53),e.k0s()(),e.DNE(36,fn,2,0)(37,gn,2,0),e.nrm(38,"mat-paginator",54),e.k0s()}if(2&s){const t=e.XpG();e.R7$(2),e.Y8G("mat-sort-header","no"),e.R7$(3),e.Y8G("mat-sort-header","billDate"),e.R7$(2),e.Y8G("filterType","date"),e.R7$(5),e.Y8G("filterType","filterEntity")("searchEntityControl",t.searchCustomersControl)("entitiesFiltered",t.customersFiltered),e.R7$(5),e.Y8G("filterType","multiSelectEntity")("entityPropertyName","iso")("useUpperCase",!0)("data",e.bMT(19,26,t.currencies$)),e.R7$(3),e.Y8G("mat-sort-header","total"),e.R7$(3),e.Y8G("mat-sort-header","status"),e.R7$(2),e.Y8G("filterType","multiSelect")("data",e.lJ4(28,_n)),e.R7$(3),e.Y8G("mat-sort-header","paymentStatus"),e.R7$(2),e.Y8G("filterType","multiSelect")("data",e.lJ4(29,bn)),e.R7$(2),e.Y8G("ngClass",e.eq3(30,yn,t.existTableFilter())),e.R7$(3),e.vxM(35,t.existTableFilter()?35:-1),e.R7$(),e.vxM(36,l.length>0?36:37),e.R7$(2),e.Y8G("ngClass",e.l_i(32,Cn,t.isLoading,t.pagination.length<10&&t.pagination.page<1))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.lJ4(35,vn))("showFirstLastButtons",!0)}}const xn=()=>["/modules/sales/dashboard"],kn=()=>["/modules/sales/billing"];let In=(()=>{class s{constructor(){this.bills$=(0,B.of)([]),this.currencies$=(0,B.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.merchantLogo=null,this.maxDate=new Date,this.range=new a.gE({start:new a.MJ({disabled:!1,value:null},[U.t.futureDateValidator()]),end:new a.MJ({disabled:!1,value:null},[U.t.futureDateValidator()])}),this.searchCustomersControl=new a.MJ(null),this.searchInputControl=new a.MJ,this.filterInputControl=new a.MJ,this.selectedCustomer=null,this.selectedDate=null,this.selectedCurrenciesId=[],this.selectedStatus=[],this.selectedPaymentStatus=[],this.selectedSlide=null,this.user=null,this._billsService=(0,e.WQX)(Ue),this._changeDetectorRef=(0,e.WQX)(e.gRc),this._customersService=(0,e.WQX)(ye.h),this._dialog=(0,e.WQX)(j.bZ),this._documentsService=(0,e.WQX)(Ce.Q),this._fileSaverService=(0,e.WQX)(Ve.f),this._fuseConfirmationService=(0,e.WQX)(ae.G),this._salesReportsService=(0,e.WQX)(yt),this._snackBar=(0,e.WQX)(O.UG),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.store.select(le.SW).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.currencies$=this.store.select(ce.y$),this.store.select(oe.Xb).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.bills$=this.store.select(Ee),this.customersFiltered=this.searchCustomersControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,ee.j)(()=>{this.isLoading=!1}),(0,Q.Z)(t=>null!==t&&"string"==typeof t&&(this.selectedCustomer&&t!==this.selectedCustomer.name||!this.selectedCustomer)?(this.isLoading=!0,this._customersService.findActiveCustomers(t.trim())):(0,B.of)())),this.store.select(pe.D).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(300),(0,E.n)(t=>(this.isLoading=!0,this._billsService.getBills(0,25,"no","desc",t,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,N.T)(()=>{this.isLoading=!1})).subscribe(),this.filterInputControl.valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(300),(0,E.n)(t=>(this.isLoading=!0,this._billsService.getBills(0,25,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,N.T)(()=>{this.isLoading=!1})).subscribe(),this.range.valueChanges.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.billDateFilter.clearFilter(),this._billsService.getBills(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,null,t.start,t.end).pipe((0,g.Q)(this._unsubscribeAll)).subscribe()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,me.h)(this._sort.sortChange,this._paginator.page).pipe((0,E.n)(()=>(this.isLoading=!0,this._billsService.getBills(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,N.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,ge.gZ)())}resetCustomer(){this.selectedCustomer=null,this.searchInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCustomer(t){this.selectedCustomer=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addDate(t){this.selectedDate=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCurrencies(t){this.selectedCurrenciesId=t.map(n=>n.id),this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addStatus(t){this.selectedStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addPaymentStatus(t){this.selectedPaymentStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}dispatchBill(t){this._fuseConfirmationService.open({title:"Despachar factura",message:"\xbfEsta seguro que desea despachar esta factura?.",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._billsService.dispatchBill(t).pipe((0,g.Q)(this._unsubscribeAll),(0,ee.j)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:o})=>{o&&this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.dispatchBill.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}})})})}updateStatus(t,n=null,i=null){this._fuseConfirmationService.open({title:"Actualizar estado de la factura",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this._billsService.updateBillStatus(t,n,i).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:c})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:c.updateBillStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}generateBillDocument(t){this._documentsService.generateBillDocument(t,Te.factura,this.merchant,this.user)}generateBillsReport(t=null,n=null){const i=this.range.getRawValue();!i.start||!i.end||this._billsService.getBillsByDateRangeAndStatus(i.start,i.end,t,n,this.selectedCustomer?this.selectedCustomer.id:null).pipe((0,q.s)(1)).subscribe(({data:o})=>{this._salesReportsService.generateBillsReport(i.start,i.end,this.user,this.merchant,o.getBillsByDateRangeAndStatus.bills,this.getTotalCUP(o.getBillsByDateRangeAndStatus.bills),this.getTotalUSD(o.getBillsByDateRangeAndStatus.bills),this.generateBillsSummary(o.getBillsByDateRangeAndStatus.bills))})}exportVersat(t){this._fileSaverService.exportAsFacFile(t,this.user,this._getBankAccountMC(this.merchant),this._getBankAccountOM(this.merchant,t))}trackByFn(t,n){return t||n.id}exportBillsByDateToVersat(){this._dialog.open(Ks,{panelClass:"ath-dialog-panel",disableClose:!0,maxWidth:"500px"}).afterClosed().subscribe(n=>{this._billsService.getBillsByDate(n.toISOString()).pipe((0,q.s)(1)).subscribe(({data:i})=>{const r=(0,_t.groupBy)(i.findAllBillsByDate.bills,"paymentMethod.name");(0,_t.groupBy)(r,"operationType.name")})})}existTableFilter(){return this.statusFilter?.hasFilter||this.billDateFilter?.hasFilter||this.paymentStatusFilter?.hasFilter||this.currencyFilter?.hasFilter||this.customerFilter?.hasFilter}clearTableFilters(){this.statusFilter?.hasFilter&&this.statusFilter.clearFilter(),this.billDateFilter?.hasFilter&&this.billDateFilter.clearFilter(),this.paymentStatusFilter?.hasFilter&&this.paymentStatusFilter.clearFilter(),this.currencyFilter?.hasFilter&&this.currencyFilter.clearFilter(),this.customerFilter?.hasFilter&&this.customerFilter.clearFilter()}_getBankAccountMC(t){return t.bankAccounts.find(i=>"CUP"===i.currency).no}_getBankAccountOM(t,n){return t.bankAccounts.find(i=>i.currency===n.currency.iso).no}getTotalCUP(t){return t.filter(i=>"CUP"===i.currency.iso).reduce((i,o)=>i+(o.total||0),0)}getTotalUSD(t){return t.filter(i=>"USD"===i.currency.iso).reduce((i,o)=>i+(o.total||0),0)}generateBillsSummary(t){const n={nueva:0,recibida:0,rechazada:0,cancelada:0};return t.forEach(i=>{n[i.status||fe.ih.nueva]++}),n}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-bills"]],viewQuery:function(n,i){if(1&n&&(e.GBs(V.iy,5),e.GBs(A.B4,5),e.GBs(en,5),e.GBs(tn,5),e.GBs(sn,5),e.GBs(nn,5),e.GBs(on,5)),2&n){let o;e.mGM(o=e.lsd())&&(i._paginator=o.first),e.mGM(o=e.lsd())&&(i._sort=o.first),e.mGM(o=e.lsd())&&(i.billDateFilter=o.first),e.mGM(o=e.lsd())&&(i.customerFilter=o.first),e.mGM(o=e.lsd())&&(i.currencyFilter=o.first),e.mGM(o=e.lsd())&&(i.statusFilter=o.first),e.mGM(o=e.lsd())&&(i.paymentStatusFilter=o.first)}},standalone:!0,features:[e.aNF],decls:59,vars:25,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500",3,"routerLink"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","flex-wrap","items-center","w-full","gap-2","mt-6","md:fixed","right-8","shrink-0","lg:mt-0","lg:ml-4","lg:w-auto","sm:w-1/2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"sm:mx-4","min-w-64","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matPrefix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"disabled","matMenuTriggerFor"],["xPosition","before"],["reportsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","flex-auto"],[1,"z-10","flex","flex-col","flex-auto","bg-white","dark:bg-default"],["class","relative grid"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[1,"relative","grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","bills-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"",3,"mat-sort-header"],[1,"flex","items-center","justify-center"],[3,"mat-sort-header"],[3,"filterType","dataChange"],["billDateFilter",""],[1,"flex","items-center","justify-start"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange"],["customerFilter",""],[3,"filterType","entityPropertyName","useUpperCase","data","dataChange"],["currencyFilter",""],[1,"flex","justify-end",3,"mat-sort-header"],[3,"filterType","data","dataChange"],["statusFilter",""],["matTooltip","Estado del pago",3,"mat-sort-header"],["paymentStatusFilter",""],[1,"flex","items-center","justify-end","mr-10",3,"ngClass"],["color","warn","class","w-6 h-6 min-h-6 min-w-6","mat-icon-button","","matTooltip","Limpiar filtros"],[1,"border-b","first-letter:z-10","sm:inset-x-0","sm:sticky","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["color","warn","mat-icon-button","","matTooltip","Limpiar filtros",1,"w-6","h-6","min-h-6","min-w-6",3,"click"],[1,"material-icons","icon-size-4"],[1,"z-0","grid","items-center","gap-4","px-6","py-3","border-b","bills-grid","md:px-8"],[1,"font-mono"],[1,"font-mono","text-center"],[1,"text-center"],[1,"font-mono","text-right"],[1,"flex","items-center","justify-center","mr-4","text-center","truncate","delay-100","rounded-full","h-7","lock","dark:bg-white","dark:bg-opacity-5",3,"ngClass"],[1,"w-full","px-2","text-sm","font-medium","text-center"],[1,"flex","flex-row","justify-end","gap-2"],["mat-stroked-button","","matTooltip","Imprimir factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Despachar Factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["mat-stroked-button","","matTooltip","Actualizar estados",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"matMenuTriggerFor","disabled"],["listStatusMenu","matMenu"],[1,"w-full","p-2","text-lg","font-semibold","text-center","text-secondary"],["mat-menu-item","",1,"grid","w-full","grid-cols-4",3,"disabled","click"],[1,"col-span-1"],["class","icon-size-5",3,"svgIcon"],[1,"col-span-3","text-center"],["class","z-0 grid items-center gap-4 px-6 py-3 border-b bills-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Ventas"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",8),e.EFF(14,"Facturaci\xf3n"),e.k0s()(),e.j41(15,"div",5),e.nrm(16,"mat-icon",6),e.j41(17,"a",8),e.EFF(18,"Facturas"),e.k0s()()(),e.j41(19,"div",9)(20,"h2",10),e.EFF(21," Registro de Facturas "),e.k0s()()(),e.j41(22,"div",11)(23,"mat-form-field",12),e.nrm(24,"mat-icon",13)(25,"input",14),e.k0s(),e.j41(26,"mat-form-field",15)(27,"mat-date-range-input",16),e.nrm(28,"input",17)(29,"input",18),e.k0s(),e.nrm(30,"mat-datepicker-toggle",19)(31,"mat-date-range-picker",20,21),e.DNE(33,an,1,0,"mat-icon",22),e.k0s(),e.j41(34,"button",23),e.nrm(35,"mat-icon",24),e.j41(36,"span",25),e.EFF(37,"Registrar"),e.k0s()(),e.j41(38,"div",26)(39,"button",27),e.nrm(40,"mat-icon",24),e.j41(41,"span",25),e.EFF(42,"Reportes"),e.k0s()(),e.j41(43,"mat-menu",28,29)(45,"button",30),e.bIt("click",function(){return i.generateBillsReport()}),e.EFF(46,"Facturas realizadas"),e.k0s(),e.j41(47,"button",30),e.bIt("click",function(){return i.generateBillsReport(null,"cobrada")}),e.EFF(48,"Facturas cobradas"),e.k0s(),e.j41(49,"button",30),e.bIt("click",function(){return i.generateBillsReport(null,"pendiente")}),e.EFF(50,"Facturas por cobrar"),e.k0s(),e.j41(51,"button",30),e.bIt("click",function(){return i.generateBillsReport("cancelada")}),e.EFF(52,"Facturas canceladas"),e.k0s(),e.j41(53,"button",30),e.bIt("click",function(){return i.generateBillsReport("rechazada")}),e.EFF(54,"Facturas rechazadas"),e.k0s()()()()(),e.j41(55,"div",31)(56,"div",32),e.DNE(57,Fn,39,36,"div",33),e.nI1(58,"async"),e.k0s()()()),2&n){const o=e.sdS(32),r=e.sdS(44);let c;e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(),e.Y8G("routerLink",e.lJ4(23,xn)),e.R7$(3),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(7),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("formGroup",i.range)("rangePicker",o)("max",i.maxDate),e.R7$(3),e.Y8G("for",o),e.R7$(3),e.vxM(33,i.range.get("start").value||i.range.get("end").value?33:-1),e.R7$(),e.Y8G("routerLink",e.lJ4(24,kn)),e.R7$(),e.Y8G("svgIcon","mat_solid:edit"),e.R7$(4),e.Y8G("disabled",!i.range.get("start").value||!i.range.get("end").value||i.range.invalid)("matMenuTriggerFor",r),e.R7$(),e.Y8G("svgIcon","mat_solid:plagiarism"),e.R7$(17),e.vxM(57,(c=e.bMT(58,21,i.bills$))?57:-1,c)}},dependencies:[v.Jj,v.vh,v.QX,I.Hl,I.$z,I.iY,k.X6,k.bU,k.el,k.xR,k.IG,k.SG,_.RG,_.rl,_.JW,_.yw,R.m_,R.An,S.fS,S.fg,w.Cn,w.kk,w.fb,w.Cp,V.Ou,V.iy,A.NQ,A.B4,A.aE,v.YU,a.X1,a.me,a.BC,a.cb,a.l_,a.j4,a.JD,H.Wk,Je.i,v.Pc,be.p],encapsulation:2,changeDetection:0})}return s})();var Ct=f(10467);const Be=(0,$.Mz)(s=>s.collections,s=>s.collections);var We=f(87122),Ae=f(26325);const Rn=F.J1`
    query FindCollections(
        $page: Int
        $size: Int!
        $sort: String
        $order: Order
        $search: String
        $initDate: DateTime
        $endDate: DateTime
    ) {
        findCollections(
            page: $page
            size: $size
            sort: $sort
            order: $order
            search: $search
            initDate: $initDate
            endDate: $endDate
        ) {
            ok
            message

            pagination {
                length
                size
                page
            }

            collections {
                id
                merchantId
                userId
                no
                total

                paymentGatewayId
                paymentGateway {
                    name
                    logo
                }

                currencyId
                currency {
                    iso
                }

                createdAt
                paymentStatus
                qrCode

                # user {
                #     name
                #     lastname1
                #     lastname2
                #     fullname
                # }
                userId
            }
        }
    }
`,$n=F.J1`
    query FindAllCollectionsByDate($date: String!) {
        findAllCollectionsByDate(date: $date) {
            ok
            message

            collections {
                canceledAt
                createdAt
                currency {
                    iso
                }
                # expiredAt
                # failedAt
                id
                merchantId
                no
                paymentAt
                paymentGatewayId
                paymentStatus
                qrCode
                refundedAt

                refunds {
                    id
                    type
                    amount
                    description
                    refundedAt
                }

                total
                # user {
                #     name
                #     lastname1
                #     lastname2
                #     fullname
                # }
                userId
            }
        }
    }
`,jn=F.J1`
    mutation UpdateCollection($updateCollectionInput: UpdateCollectionInput!) {
        updateCollection(updateCollectionInput: $updateCollectionInput) {
            ok
            message

            collections {
                canceledAt
                createdAt
                currency {
                    iso
                }
                # expiredAt
                # failedAt
                id
                merchantId
                no
                paymentAt
                paymentGatewayId
                paymentStatus
                qrCode
                refundedAt

                refunds {
                    id
                    type
                    amount
                    description
                    refundedAt
                }

                total
                # user {
                #     name
                #     lastname1
                #     lastname2
                #     fullname
                # }
                userId
            }
        }
    }
`,En=F.J1`
    mutation RemoveCollection($removeCollectionId: String!) {
        removeCollection(id: $removeCollectionId) {
            ok
            message
        }
    }
`,Dn=F.J1`
    mutation RefundCollection($refundPaymentOrderInput: RefundPaymentOrderInput!) {
        refundCollectionsOrder(refundPaymentOrderInput: $refundPaymentOrderInput) {

            ok
            message

            collection {
                id
                merchantId
                userId
                no
                total

                paymentGatewayId
                paymentGateway {
                    name
                    logo
                }

                currencyId
                currency {
                    iso
                }

                createdAt
                paymentStatus
                qrCode

                # user {
                #     name
                #     lastname1
                #     lastname2
                #     fullname
                # }
                userId
            }
        }
    }
`;var ve=f(46812);let Ze=(()=>{class s{constructor(t,n){this.apolloProvider=t,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}getCollections(t=0,n=50,i="no",o="desc",r="",c=x().subtract(30,"days").toDate(),d=new Date,p=""){return this._apollo.query({query:Rn,errorPolicy:"all",variables:{page:t,size:n,sort:i,order:o,search:r,initDate:c,endDate:d,status:p}}).pipe((0,T.M)(({data:m})=>{this.store.dispatch((0,Ae.op)({collections:m.findCollections.collections})),this.store.dispatch((0,Fe.Bp)({pagination:m.findCollections.pagination}))}))}getCollectionsByDate(t){return this._apollo.query({query:$n,errorPolicy:"all",variables:{date:t}}).pipe((0,T.M)(({})=>{}))}updateCollection(t){return this.store.select(Be).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:jn,variables:{updateCollectionInput:t},errorPolicy:"all"}).pipe((0,T.M)(({data:i})=>{const o=structuredClone(n);o[n.findIndex(c=>c.id===t.id)]=i.updatedCollection.collection,this.store.dispatch((0,Ae.op)({collections:o}))}))))}removeCollection(t){return this.store.select(Be).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:En,variables:{removeCollectionId:t},errorPolicy:"all"}).pipe((0,T.M)(()=>{const i=structuredClone(n),o=n.findIndex(r=>r.id===t);i.splice(o,1),this.store.dispatch((0,Ae.op)({collections:i}))}))))}refundCollection(t){return this.store.select(Be).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:Dn,variables:{refundPaymentOrderInput:t},errorPolicy:"all"}).pipe((0,T.M)(({})=>{const o=structuredClone(n);o[n.findIndex(c=>c.no===t.no)].paymentStatus=ve.dX.dPendiente,this.store.dispatch((0,Ae.op)({collections:o}))}))))}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(F.Ic),e.KVO($.il))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Tn=f(5951);function Bn(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," EL importe a reembolsar es obligatorio "),e.k0s())}function An(s,l){if(1&s&&(e.j41(0,"mat-error"),e.EFF(1),e.k0s()),2&s){const t=e.XpG(2);e.R7$(),e.SpI(" El monto a reembolsar debe ser mayor que 0.01 y menor o igual que ",t.data.invoice.amount,". ")}}function wn(s,l){if(1&s&&(e.j41(0,"mat-form-field",24)(1,"mat-label"),e.EFF(2,"Importe"),e.k0s(),e.nrm(3,"mat-icon",25)(4,"input",26),e.DNE(5,Bn,2,0,"mat-error")(6,An,2,1,"mat-error"),e.k0s()),2&s){const t=e.XpG();e.R7$(3),e.Y8G("svgIcon","mat_solid:attach_money"),e.R7$(),e.Y8G("placeholder",t.data.invoice.amount)("formControlName","amount")("min",.01)("max",t.data.invoice.amount),e.R7$(),e.vxM(5,t.refundForm.get("amount").hasError("required")?5:-1),e.R7$(),e.vxM(6,t.refundForm.get("amount").hasError("min")||t.refundForm.get("amount").hasError("max")?6:-1)}}function Gn(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," EL motivo del rechazo es obligatorio "),e.k0s())}function Pn(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," EL motivo del rechazo debe contener entre 3 y 200 caracteres. "),e.k0s())}function Mn(s,l){1&s&&(e.j41(0,"span"),e.EFF(1," Aceptar "),e.k0s())}function Nn(s,l){1&s&&e.nrm(0,"mat-progress-spinner",23),2&s&&e.Y8G("diameter",24)("mode","indeterminate")}const Yn=s=>({"cursor-not-allowed":s});let Vn=(()=>{class s{constructor(t){this.data=t,this.isLoading=!1,this.refundType=ve.H_.total,this._changeDetectorRef=(0,e.WQX)(e.gRc),this._collectionsService=(0,e.WQX)(Ze),this._dialogRef=(0,e.WQX)(j.CP),this._formBuilder=(0,e.WQX)(a.ok),this._snackBar=(0,e.WQX)(O.UG),this._unsubscribeAll=new X.B}ngOnInit(){this.refundForm=this._formBuilder.group({amount:[this.data.invoice.amount,[a.k0.required,a.k0.min(.01),a.k0.max(this.data.invoice.amount)]],refundReason:["",[a.k0.required,a.k0.maxLength(1e3)]]})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}refundTypeChange(t){t.value===ve.H_.total&&this.refundForm.get("amount").setValue(this.data.invoice.amount)}refund(){const t={no:this.data.invoice.no,amount:this.refundForm.get("amount").value,description:this.refundForm.get("refundReason").value.trim(),refundType:this.refundType};this.refundType===ve.H_.total&&(t.amount=this.data.invoice.amount),this._collectionsService.refundCollection(t).pipe((0,g.Q)(this._unsubscribeAll),(0,ee.j)(()=>{this.isLoading=!1,this._changeDetectorRef.markForCheck()})).subscribe(({data:n})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.refundCollectionsOrder.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck(),this._dialogRef.close()})}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(j.Vh))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["collection-refund-dialog"]],standalone:!0,features:[e.aNF],decls:38,vars:23,consts:[[1,"h-full","ng-star-inserted"],[1,"relative","flex","flex-col","w-full","h-full"],[1,"flex","items-center","h-full"],[1,"block","w-full"],[1,"flex","flex-col","items-center","flex-auto","p-8","pb-4","sm:flex-row","sm:items-start","sm:pb-6"],[1,"flex","items-center","justify-center","w-10","h-10","text-blue-600","bg-blue-100","rounded-full","flex-0","sm:mr-4","dark:text-blue-50","dark:bg-blue-600","ng-star-inserted"],[3,"src"],[1,"flex","flex-col","items-center","mt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left","ng-star-inserted"],[1,"text-xl","font-medium","leading-6","ng-star-inserted"],[1,"text-secondary","ng-star-inserted"],["color","primary","aria-label","Select an option",1,"flex","flex-wrap","justify-around","gap-2","pl-8","pr-8","mt-4","mb-6","sm:mt-2","sm:mb-10","sm:pl-22",3,"ngModel","change","ngModelChange"],["value","total"],["value","partial"],[1,"pb-6","pl-8","pr-8","mt-10","sm:mt-0","sm:pl-22",3,"formGroup","autocomplete"],["class","w-full mat-fuse-dense"],[1,"w-full","mat-fuse-dense","fuse-mat-textarea"],["matPrefix","","svgIcon","mat_solid:subject",1,"hidden","sm:flex","icon-size-5"],["matInput","",3,"formControlName","placeholder","minLength","maxLength","required"],["refundT",""],[1,"text-right"],[1,"flex","flex-wrap","justify-center","px-6","py-4","space-x-3","tems-center","bg-gray-50","dark:bg-black","dark:bg-opacity-10","ng-star-inserted"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","","mat-button","",3,"color","disabled","ngClass","click"],[3,"diameter","mode"],[1,"w-full","mat-fuse-dense"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["type","number","required","","matInput","",3,"placeholder","formControlName","min","max"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e.nrm(6,"img",6),e.k0s(),e.j41(7,"div",7)(8,"div",8),e.EFF(9,"Reembolso"),e.k0s(),e.j41(10,"div",9),e.EFF(11),e.k0s()()(),e.j41(12,"mat-radio-group",10),e.bIt("change",function(r){return i.refundTypeChange(r)})("ngModelChange",function(r){return i.refundType=r}),e.j41(13,"mat-radio-button",11),e.EFF(14,"Total"),e.k0s(),e.j41(15,"span"),e.EFF(16,"......Tipo......"),e.k0s(),e.j41(17,"mat-radio-button",12),e.EFF(18,"Parcial"),e.k0s()(),e.j41(19,"form",13)(20,"div"),e.DNE(21,wn,7,7,"mat-form-field",14),e.j41(22,"mat-form-field",15)(23,"mat-label"),e.EFF(24,"Motivo"),e.k0s(),e.nrm(25,"mat-icon",16)(26,"textarea",17,18),e.j41(28,"mat-hint",19),e.EFF(29),e.k0s(),e.DNE(30,Gn,2,0,"mat-error")(31,Pn,2,0,"mat-error"),e.k0s()()()()(),e.j41(32,"div",20)(33,"button",21),e.EFF(34,"Cancelar"),e.k0s(),e.j41(35,"button",22),e.bIt("click",function(){return i.refund()}),e.DNE(36,Mn,2,0,"span")(37,Nn,1,2,"mat-progress-spinner",23),e.k0s()()()()),2&n){const o=e.sdS(27);e.R7$(6),e.Y8G("src",i.data.invoice.paymentGateway.logo,e.B4B),e.R7$(5),e.SpI("\xbfEsta seguro que desea efectuar el reembolso del pago a la factura # ",i.data.invoice.no," ?"),e.R7$(),e.Y8G("ngModel",i.refundType),e.R7$(7),e.Y8G("formGroup",i.refundForm)("autocomplete","off"),e.R7$(2),e.vxM(21,"partial"===i.refundType?21:-1),e.R7$(5),e.Y8G("formControlName","refundReason")("placeholder","Escriba el motivo del rechazo")("minLength",3)("maxLength",200)("required",!0),e.R7$(3),e.SpI("Total de caracteres ",o.value.length," / 1000"),e.R7$(),e.vxM(30,i.refundForm.get("refundReason").hasError("required")?30:-1),e.R7$(),e.vxM(31,i.refundForm.get("refundReason").hasError("maxlength")||i.refundForm.get("refundReason").hasError("minlength")?31:-1),e.R7$(2),e.Y8G("matDialogClose",!0),e.R7$(2),e.Y8G("color","primary")("disabled",i.refundForm.invalid)("ngClass",e.eq3(21,Yn,i.refundForm.invalid||i.isLoading))("disabled",i.refundForm.invalid||i.isLoading),e.R7$(),e.vxM(36,i.isLoading?-1:36),e.R7$(),e.vxM(37,i.isLoading?37:-1)}},dependencies:[a.YN,a.qT,a.me,a.Q0,a.BC,a.cb,a.YS,a.VZ,a.zX,a.vS,I.Hl,I.$z,te.g7,j.hM,j.tx,_.RG,_.rl,_.nJ,_.MV,_.TL,_.JW,R.m_,R.An,S.fS,S.fg,K.D6,K.LG,Tn._g,J.uc,v.YU,a.X1,a.j4,a.JD],encapsulation:2,changeDetection:0})}return s})();var qn=f(55542);function zn(s,l){if(1&s&&(e.j41(0,"span"),e.EFF(1),e.nI1(2,"uppercase"),e.k0s()),2&s){const t=e.XpG().$implicit;e.R7$(),e.JRh(e.bMT(2,1,t.paymentGateway.name))}}function Ln(s,l){1&s&&e.nrm(0,"mat-spinner",30),2&s&&e.Y8G("diameter",20)("color","primary")}function Xn(s,l){1&s&&e.eu8(0)}const Qn=s=>({$implicit:s});function On(s,l){if(1&s&&e.DNE(0,Xn,1,0,"ng-container",31),2&s){const t=e.XpG(3),n=e.sdS(26);e.Y8G("ngTemplateOutlet",n)("ngTemplateOutletContext",e.eq3(2,Qn,t.paymentStatusData))}}const Jn=(s,l,t,n,i)=>({"text-teal-800 bg-teal-100 dark:text-teal-50 dark:bg-teal-500":s,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":l,"text-blue-800 bg-blue-100 dark:text-white dark:bg-blue-500":t,"text-violet-800 bg-violet-100 dark:text-violet-50 dark:bg-violet-500":n,"text-red-800 bg-red-100 dark:text-red-50 dark:bg-red-500":i});function Un(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",19)(1,"div",20),e.EFF(2),e.k0s(),e.j41(3,"div",21),e.EFF(4),e.nI1(5,"date"),e.k0s(),e.j41(6,"div",18),e.EFF(7),e.k0s(),e.j41(8,"div",18),e.EFF(9),e.nI1(10,"number"),e.k0s(),e.j41(11,"div",18),e.DNE(12,zn,3,3,"span"),e.k0s(),e.j41(13,"div",22)(14,"span",23),e.EFF(15),e.nI1(16,"uppercase"),e.k0s()(),e.j41(17,"div",24)(18,"button",25),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(2);return e.Njj(r.generateTicketCollectionDocument(o))}),e.nrm(19,"mat-icon",26),e.k0s(),e.j41(20,"button",27),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(2);return e.Njj(r.refund(o))}),e.nrm(21,"mat-icon",28),e.k0s(),e.DNE(22,Ln,1,2,"mat-spinner",29),e.k0s()(),e.j41(23,"div",15),e.DNE(24,On,1,4,"ng-container"),e.k0s()}if(2&s){const t=l.$implicit,n=l.$index,i=e.XpG(2);e.R7$(2),e.SpI(" ",t.no," "),e.R7$(2),e.SpI(" ",e.i5U(5,11,t.createdAt,"dd/MM/YY hh:mm a")," "),e.R7$(3),e.SpI(" ",t.currency.iso," "),e.R7$(2),e.SpI(" ",e.i5U(10,14,t.total,"1.2-2")," "),e.R7$(3),e.vxM(12,t.paymentGateway?12:-1),e.R7$(2),e.Y8G("ngClass",e.s1E(19,Jn,"parcial"===t.paymentStatus,"pagada"===t.paymentStatus,"pendiente"===t.paymentStatus,"devuelto"===t.paymentStatus,"cancelado"===t.paymentStatus)),e.R7$(),e.SpI(" ",e.bMT(16,17,t.paymentStatus)," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:visibility"),e.R7$(),e.Y8G("disabled",i.isLoading||"pagada"!==t.paymentStatus),e.R7$(2),e.vxM(22,i.isMarkAsPayedLoading&&i.selectedSlide===n?22:-1),e.R7$(2),e.vxM(24,(null==i.selectedCollection?null:i.selectedCollection.id)===t.id?24:-1)}}function Wn(s,l){if(1&s&&(e.j41(0,"div",15)(1,"div",16)(2,"div",17),e.EFF(3," No "),e.k0s(),e.j41(4,"div",18),e.EFF(5," Fecha "),e.k0s(),e.j41(6,"div",17),e.EFF(7," Moneda "),e.k0s(),e.j41(8,"div",17),e.EFF(9," Importe "),e.k0s(),e.j41(10,"div",18),e.EFF(11," M\xe9todo de pago "),e.k0s(),e.j41(12,"div",18),e.EFF(13," Estado "),e.k0s(),e.j41(14,"div",18),e.EFF(15," Acciones "),e.k0s()(),e.Z7z(16,Un,25,25,null,null,e.BUC().trackByFn),e.k0s()),2&s){const t=e.XpG();e.R7$(2),e.Y8G("mat-sort-header","no"),e.R7$(4),e.Y8G("mat-sort-header","currencyId"),e.R7$(2),e.Y8G("mat-sort-header","total"),e.R7$(8),e.Dyx(t.collections)}}function Zn(s,l){if(1&s&&(e.j41(0,"div",32),e.EFF(1),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.SpI(" ",t.searchInputControl.value?"\xa1No se han encontrado facturas!":"\xa1No se ha generado ninguna factura a una suscripci\xf3n a\xfan!","")}}function Hn(s,l){if(1&s&&(e.j41(0,"div",37)(1,"div",18),e.EFF(2),e.nI1(3,"uppercase"),e.k0s(),e.j41(4,"div",18),e.EFF(5),e.k0s(),e.j41(6,"div",18),e.EFF(7),e.nI1(8,"date"),e.k0s(),e.j41(9,"div",18),e.EFF(10),e.nI1(11,"uppercase"),e.k0s(),e.j41(12,"div",36),e.EFF(13),e.k0s()()),2&s){const t=l.$implicit;e.R7$(2),e.SpI(" ",e.bMT(3,5,t.paymentStatus)," "),e.R7$(3),e.SpI(" ",t.amount," "),e.R7$(2),e.SpI(" ",e.i5U(8,7,t.statusChangeAt,"dd/MM/yyyy HH:mm")," "),e.R7$(3),e.SpI(" ",e.bMT(11,10,t.type)," "),e.R7$(3),e.SpI(" ",t.description," ")}}function Kn(s,l){if(1&s&&(e.j41(0,"div",33)(1,"div",34)(2,"div",18),e.EFF(3," Estado "),e.k0s(),e.j41(4,"div",18),e.EFF(5," Monto "),e.k0s(),e.j41(6,"div",18),e.EFF(7," Fecha "),e.k0s(),e.j41(8,"div",35),e.EFF(9," T.Devoluci\xf3n "),e.k0s(),e.j41(10,"div",36),e.EFF(11," Descripci\xf3n "),e.k0s()(),e.Z7z(12,Hn,14,12,"div",38,e.fX1),e.k0s()),2&s){const t=e.XpG();e.R7$(12),e.Dyx(t.paymentStatusData)}}const eo=s=>({"pointer-events-none":s}),to=()=>[10,25,50,100];function io(s,l){if(1&s&&e.nrm(0,"mat-paginator",39),2&s){const t=e.XpG();e.Y8G("ngClass",e.eq3(6,eo,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.lJ4(8,to))("showFirstLastButtons",!0)}}let so=(()=>{class s{constructor(){this.searchInputControl=new a.MJ(null),this.isMarkAsPayedLoading=!1,this.selectedSlide=null,this.user=null,this.merchantControl=new a.MJ,this.paymentStatusData=[],this.selectedCollection=null,this._changeDetectorRef=(0,e.WQX)(e.gRc),this._collectionsService=(0,e.WQX)(Ze),this._documentsService=(0,e.WQX)(Ce.Q),this._dialog=(0,e.WQX)(j.bZ),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.store.select(Be).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.collections=t,this._changeDetectorRef.markForCheck()}),this.store.select(pe.D).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.store.select(le.SW).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(oe.Xb).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.currentMerchant=t}),this.searchInputControl.valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(300),(0,L.Z)(null),(0,E.n)(t=>null!==t?(this.isLoading=!0,this._collectionsService.getCollections(0,10,"createdAt","desc",t)):(0,B.of)()),(0,N.T)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,me.h)(this._sort.sortChange,this._paginator.page).pipe((0,E.n)(()=>(this.isLoading=!0,this._collectionsService.getCollections(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,N.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}refund(t){t.paymentGateway&&this._dialog.open(Vn,{data:{invoice:{id:t.id,no:t.no,amount:t.total,paymentGateway:t.paymentGateway}},panelClass:"ath-reject-dialog-panel",maxWidth:"520px"})}generateTicketCollectionDocument(t){var n=this;return(0,Ct.A)(function*(){n._documentsService.generateTicketCollectionDocument(t,n.currentMerchant,n.user)})()}trackByFn(t,n){return n.id||t}togglePaymentStatusData(t){this.paymentStatusData=[],t.paymentAt&&this.paymentStatusData.push({paymentStatus:ve.dX.pagada,amount:t.total,type:"",description:"",statusChangeAt:t.paymentAt});for(const n of t.refunds.map(i=>({paymentStatus:ve.dX.devuelto,amount:i.amount,type:i.type,description:i.description,statusChangeAt:i.refundedAt})))this.paymentStatusData.push(n);this.selectedCollection&&this.selectedCollection.id===t.id?this.closeDetails():(this.selectedCollection=t,this._changeDetectorRef.markForCheck())}closeDetails(){this.selectedCollection=null,this.paymentStatusData=[],this._changeDetectorRef.markForCheck()}showRefund(t){return!!(t.refunds.map(i=>i.amount).reduce((i,o)=>i+o,0)<t.total&&t.paymentAt)}displayFn(t){return(t&&t.name?t.name:"").trim()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-collections"]],viewQuery:function(n,i){if(1&n&&(e.GBs(V.iy,5),e.GBs(A.B4,5)),2&n){let o;e.mGM(o=e.lsd())&&(i._paginator=o.first),e.mGM(o=e.lsd())&&(i._sort=o.first)}},standalone:!0,features:[e.aNF],decls:28,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","overflow-x-auto","overflow-y-auto","bg-card","dark:bg-transparent","lg:overflow-x-hidden"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],["routerLink","/dashboard",1,"ml-1","text-primary-500","hover:underline"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"flex","flex-col","flex-auto"],["class","grid"],["rowPaymentStatusDataTemplate",""],["class","z-10 border-b sm:inset-x-0 sm:bottom-0 sm:border-t sm:border-b-0 bg-gray-50 dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","collections-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"text-center",3,"mat-sort-header"],[1,"text-center"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","collections-grid","md:px-8"],[1,"truncate"],[1,"text-center","truncate"],[1,"flex","justify-center"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold","uppercase",3,"ngClass"],[1,"flex","flex-row","justify-center","gap-2"],["mat-stroked-button","","matTooltip","Ver ticket",1,"hidden","px-2","leading-6","sm:flex","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["matTooltip","Hacer devoluci\xf3n","mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["svgIcon","mat_solid:undo",1,"icon-size-5"],["class","self-center ml-2",3,"diameter","color"],[1,"self-center","ml-2",3,"diameter","color"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","flex-col","w-full","overflow-hidden","border-b"],[1,"z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","subscription-collections-status-detail-table","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],["matTooltip","Tipo de devoluci\xf3n",1,"text-center"],[1,"text-left"],[1,"grid","items-center","w-full","gap-4","px-6","py-3","border-b","subscription-collections-status-detail-table","md:px-8"],["class","grid items-center w-full gap-4 px-6 py-3 border-b subscription-collections-status-detail-table md:px-8"],[1,"z-10","border-b","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e.EFF(7,"Inicio"),e.k0s()(),e.j41(8,"div",4),e.nrm(9,"mat-icon",6),e.j41(10,"a",7),e.EFF(11,"Ventas"),e.k0s()(),e.j41(12,"div",4),e.nrm(13,"mat-icon",6),e.j41(14,"a",7),e.EFF(15,"Cobros"),e.k0s()()(),e.j41(16,"div",8)(17,"a",9),e.nrm(18,"mat-icon",6),e.j41(19,"span",10),e.EFF(20,"Regresar"),e.k0s()()()()()(),e.j41(21,"div",11)(22,"div",11),e.DNE(23,Wn,18,3,"div",12)(24,Zn,2,1)(25,Kn,14,0,"ng-template",null,13,e.C5r),e.k0s(),e.DNE(27,io,1,9,"mat-paginator",14),e.k0s()()),2&n&&(e.R7$(9),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("routerLink","./.."),e.R7$(),e.Y8G("svgIcon","mat_solid:chevron_left"),e.R7$(5),e.vxM(23,i.collections.length>0?23:24),e.R7$(4),e.vxM(27,i.collections.length>0?27:-1))},dependencies:[v.vh,v.QX,I.Hl,I.$z,k.X6,qn.uv,_.RG,R.m_,R.An,S.fS,w.Cn,V.Ou,V.iy,K.D6,K.LG,A.NQ,A.B4,A.aE,J.uc,J.oV,v.YU,a.X1,H.Wk,v.Pc],styles:[".collections-grid{grid-template-columns:55px auto}@media (min-width: 960px){.collections-grid{grid-template-columns:150px 200px 100px 150px 200px 150px 250px}}\n"],encapsulation:2,data:{animation:We.X},changeDetection:0})}return s})(),no=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales"]],standalone:!0,features:[e.aNF],decls:1,vars:0,template:function(n,i){1&n&&e.nrm(0,"router-outlet")},dependencies:[H.n3],encapsulation:2})}return s})();var vt=f(14160),Ft=f(98292);const xt=s=>s.salesDashboardStats,oo=(0,$.Mz)(xt,s=>s.salesDashboardStats);(0,$.Mz)(xt,s=>s.salesDashboardStats.salesSummary);var He=f(11781);const ao=F.J1`
    query GetSalesDashboardStats($initDate: DateTime, $endDate: DateTime) {
        salesDashboardStats(initDate: $initDate, endDate: $endDate) {
            totalQuantity
            totalQuantityAdded

            salesBalance {
                billed
                collected
                series {
                    name
                    data {
                        x
                        y
                    }
                }
            }

            billIndicators {
                totalBills
                totalBillsCreatedToday
                totalBillsDelivered
                totalBillsCollected
                totalBillsCanceled
            }

            salesSummary {
                labels
                serie
                newSerie
                collectedSerie
                partialSerie
                rejectedSerie
                receivedSerie
                canceledSerie
                new
                collected
                partial
                rejected
                received
                canceled
            }
        }
    }
`,ro=F.J1`
    query GetBillsByCustomersAndCurrency($initDate: DateTime, $endDate: DateTime, $currencyId: String! $customerId: String!) {
        getBillsByCustomersAndCurrency(initDate: $initDate, endDate: $endDate, currencyId: $currencyId, customerId: $customerId) {
            ok
            message

            billsByCustomersAndCurrency {
                _id
                customer
                totalBills
                totalAmount
                totalCollected
                totalCollectedAmount
                totalPending
                totalPendingAmount
                currency
                bills {
                    no
                    total
                    status
                    paymentStatus
                    date
                }
            }


        }
    }
`,lo=F.J1`
    query GetProductsBoughtByCustomer($initDate: DateTime, $endDate: DateTime, $customerId: String!) {
        getProductsBoughtByCustomer(initDate: $initDate, endDate: $endDate, customerId: $customerId) {
            ok
            message

            productsBoughtByCustomer {
                customer
                products {
                    name
                    price
                    quantity
                    uom
                }
            }


        }
    }
`,co=F.J1`
    query getBillsCollectedByCustomersAndCurrency($initDate: DateTime, $endDate: DateTime, $paymentStatus: PaymentStatus, $customerId: String!, $currencyId: String!) {
        getBillsCollectedByCustomersAndCurrency(initDate: $initDate, endDate: $endDate, paymentStatus: $paymentStatus, customerId: $customerId, currencyId: $currencyId) {
            ok
            message

            billsCollectedByCustomersAndCurrency {
                currency
                customer
                totalAmount
                totalBills

                bills {
                    no
                    total
                    status
                    paymentStatus
                    date
                    collectedAt
                }
            }


        }
    }
`;let kt=(()=>{class s{constructor(t,n){this.apolloProvider=t,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}getSalesDashboardStatsData(t,n){return this._apollo.query({query:ao,variables:{initDate:t,endDate:n},errorPolicy:"all"}).pipe((0,T.M)(({data:i})=>{this.store.dispatch((0,Ft.yr)({salesDashboardStats:i.salesDashboardStats}))}))}getBillsByCustomersAndCurrency(t,n,i,o){return this._apollo.query({query:ro,variables:{initDate:t,endDate:n,currencyId:i,customerId:o},errorPolicy:"all"})}getProductsBoughtByCustomer(t,n,i){return this._apollo.query({query:lo,variables:{initDate:t,endDate:n,customerId:i},errorPolicy:"all"})}getBillsCollectedByCustomersAndCurrency(t,n,i="",o,r){return this._apollo.query({query:co,errorPolicy:"all",variables:{initDate:t,endDate:n,paymentStatus:i,currencyId:o,customerId:r}})}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(F.Ic),e.KVO($.il))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var uo=f(62884),we=f(23083),mo=f(71365),Ge=f(96850),It=f(49098);function ho(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",6),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.addLocation(o))}),e.EFF(1),e.k0s()}if(2&s){const t=l.$implicit;e.Y8G("value",t.name),e.R7$(),e.SpI(" ",t.name," ")}}function fo(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-icon",7),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.resetLocation())}),e.k0s()}}const go=s=>({"fuse-mat-rounded":s});let _o=(()=>{class s{constructor(){this.rounded=!0,this.labelName="Almac\xe9n",this.selectedLocation=null,this.searchLocationsControl=new a.MJ(null),this.isLoading=!1,this.locationChange=new e.bkB,this._changeDetectorRef=(0,e.WQX)(e.gRc),this._locationsService=(0,e.WQX)(It.O),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.locations$=this.store.select(He.BF),this.locationsFiltered=this.searchLocationsControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,ee.j)(()=>{this.isLoading=!1}),(0,Q.Z)(t=>null!==t&&"string"==typeof t&&(this.selectedLocation&&t!==this.selectedLocation.name||!this.selectedLocation)?(this.isLoading=!0,this._locationsService.findActiveLocations(t.trim())):this.locations$))}ngAfterViewInit(){this.selectedLocation&&this.searchLocationsControl.setValue(this.selectedLocation.name,{emitEvent:!1})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addLocation(t){this.selectedLocation=t,this.locationChange.next(t),this._changeDetectorRef.markForCheck()}resetLocation(){this.selectedLocation=null,this.searchLocationsControl.setValue(""),this.locationChange.next(null),this._changeDetectorRef.markForCheck()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["autocomplete-locations"]],inputs:{rounded:"rounded",labelName:"labelName",selectedLocation:"selectedLocation"},outputs:{locationChange:"locationChange"},standalone:!0,features:[e.aNF],decls:11,vars:12,consts:[["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-no-subscript",3,"ngClass","subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],["locationsLocationsAutocomplete","matAutocomplete"],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],[3,"value","click"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[3,"value"]],template:function(n,i){if(1&n&&(e.j41(0,"mat-form-field",0),e.nrm(1,"mat-icon",1),e.j41(2,"mat-label"),e.EFF(3),e.k0s(),e.nrm(4,"input",2),e.j41(5,"mat-autocomplete",3,4),e.Z7z(7,ho,2,2,"mat-option",8,e.fX1),e.nI1(9,"async"),e.k0s(),e.DNE(10,fo,1,0,"mat-icon",5),e.k0s()),2&n){const o=e.sdS(6);e.Y8G("ngClass",e.eq3(10,go,i.rounded))("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(2),e.JRh(i.labelName),e.R7$(),e.Y8G("formControl",i.searchLocationsControl)("matAutocomplete",o)("placeholder","Filtre por Empleado"),e.R7$(3),e.Dyx(e.bMT(9,8,i.locationsFiltered)),e.R7$(3),e.vxM(10,i.selectedLocation?10:-1)}},dependencies:[z.jL,z.$3,re.wT,z.pN,R.m_,R.An,a.X1,a.me,a.BC,a.l_,_.RG,_.rl,_.nJ,_.JW,_.yw,v.YU,v.Jj,S.fS,S.fg],encapsulation:2,changeDetection:0})}return s})();function bo(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",6),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.addCustomer(o))}),e.EFF(1),e.k0s()}if(2&s){const t=l.$implicit;e.Y8G("value",t.name),e.R7$(),e.SpI(" ",t.fullname," ")}}function yo(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-icon",7),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.resetCustomer())}),e.k0s()}}const Co=s=>({"fuse-mat-rounded":s});let vo=(()=>{class s{constructor(){this.rounded=!0,this.labelName="Cliente",this.selectedCustomer=null,this.searchCustomersControl=new a.MJ(null),this.isLoading=!1,this.customerChange=new e.bkB,this._changeDetectorRef=(0,e.WQX)(e.gRc),this._customersService=(0,e.WQX)(ye.h),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.customers$=this.store.select(je.wQ),this.customersFiltered=this.searchCustomersControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,ee.j)(()=>{this.isLoading=!1}),(0,Q.Z)(t=>null!==t&&"string"==typeof t&&(this.selectedCustomer&&t!==this.selectedCustomer.name||!this.selectedCustomer)?(this.isLoading=!0,this._customersService.findActiveCustomers(t.trim())):this.customers$))}ngAfterViewInit(){this.selectedCustomer&&this.searchCustomersControl.setValue(this.selectedCustomer.name,{emitEvent:!1})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addCustomer(t){this.selectedCustomer=t,this.customerChange.next(t),this._changeDetectorRef.markForCheck()}resetCustomer(){this.selectedCustomer=null,this.searchCustomersControl.setValue(""),this.customerChange.next(null),this._changeDetectorRef.markForCheck()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["autocomplete-customers"]],inputs:{rounded:"rounded",labelName:"labelName",selectedCustomer:"selectedCustomer"},outputs:{customerChange:"customerChange"},standalone:!0,features:[e.aNF],decls:11,vars:12,consts:[["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-no-subscript",3,"ngClass","subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],["customersCustomersAutocomplete","matAutocomplete"],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],[3,"value","click"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[3,"value"]],template:function(n,i){if(1&n&&(e.j41(0,"mat-form-field",0),e.nrm(1,"mat-icon",1),e.j41(2,"mat-label"),e.EFF(3),e.k0s(),e.nrm(4,"input",2),e.j41(5,"mat-autocomplete",3,4),e.Z7z(7,bo,2,2,"mat-option",8,e.fX1),e.nI1(9,"async"),e.k0s(),e.DNE(10,yo,1,0,"mat-icon",5),e.k0s()),2&n){const o=e.sdS(6);e.Y8G("ngClass",e.eq3(10,Co,i.rounded))("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(2),e.JRh(i.labelName),e.R7$(),e.Y8G("formControl",i.searchCustomersControl)("matAutocomplete",o)("placeholder","Filtre por Cliente"),e.R7$(3),e.Dyx(e.bMT(9,8,i.customersFiltered)),e.R7$(3),e.vxM(10,i.selectedCustomer?10:-1)}},dependencies:[z.jL,z.$3,re.wT,z.pN,R.m_,R.An,a.X1,a.me,a.BC,a.l_,_.RG,_.rl,_.nJ,_.JW,_.yw,v.YU,v.Jj,S.fS,S.fg],encapsulation:2,changeDetection:0})}return s})();var St=f(53159),Fo=f(69599);function xo(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",6),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.addDepot(o))}),e.EFF(1),e.k0s()}if(2&s){const t=l.$implicit;e.Y8G("value",t.name),e.R7$(),e.SpI(" ",t.name," ")}}function ko(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-icon",7),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.resetDepot())}),e.k0s()}}const Io=s=>({"fuse-mat-rounded":s});let So=(()=>{class s{constructor(){this.rounded=!0,this.labelName="Almac\xe9n",this.selectedDepot=null,this.searchDepotsControl=new a.MJ(null),this.isLoading=!1,this.depotChange=new e.bkB,this._changeDetectorRef=(0,e.WQX)(e.gRc),this._depotsService=(0,e.WQX)(Fo.t),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.depots$=this.store.select(St.c_),this.depotsFiltered=this.searchDepotsControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,ee.j)(()=>{this.isLoading=!1}),(0,Q.Z)(t=>null!==t&&"string"==typeof t&&(this.selectedDepot&&t!==this.selectedDepot.name||!this.selectedDepot)?(this.isLoading=!0,this._depotsService.findActiveDepots(t.trim())):this.depots$))}ngAfterViewInit(){this.selectedDepot&&this.searchDepotsControl.setValue(this.selectedDepot.name,{emitEvent:!1})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addDepot(t){this.selectedDepot=t,this.depotChange.next(t),this._changeDetectorRef.markForCheck()}resetDepot(){this.selectedDepot=null,this.searchDepotsControl.setValue(""),this.depotChange.next(null),this._changeDetectorRef.markForCheck()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["autocomplete-depots"]],inputs:{rounded:"rounded",labelName:"labelName",selectedDepot:"selectedDepot"},outputs:{depotChange:"depotChange"},standalone:!0,features:[e.aNF],decls:11,vars:12,consts:[["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-no-subscript",3,"ngClass","subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],["depotsDepotsAutocomplete","matAutocomplete"],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],[3,"value","click"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[3,"value"]],template:function(n,i){if(1&n&&(e.j41(0,"mat-form-field",0),e.nrm(1,"mat-icon",1),e.j41(2,"mat-label"),e.EFF(3),e.k0s(),e.nrm(4,"input",2),e.j41(5,"mat-autocomplete",3,4),e.Z7z(7,xo,2,2,"mat-option",8,e.fX1),e.nI1(9,"async"),e.k0s(),e.DNE(10,ko,1,0,"mat-icon",5),e.k0s()),2&n){const o=e.sdS(6);e.Y8G("ngClass",e.eq3(10,Io,i.rounded))("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(2),e.JRh(i.labelName),e.R7$(),e.Y8G("formControl",i.searchDepotsControl)("matAutocomplete",o)("placeholder","Filtre por Empleado"),e.R7$(3),e.Dyx(e.bMT(9,8,i.depotsFiltered)),e.R7$(3),e.vxM(10,i.selectedDepot?10:-1)}},dependencies:[z.jL,z.$3,re.wT,z.pN,R.m_,R.An,a.X1,a.me,a.BC,a.l_,_.RG,_.rl,_.nJ,_.JW,_.yw,v.YU,v.Jj,S.fS,S.fg],encapsulation:2,changeDetection:0})}return s})();function Ro(s,l){if(1&s&&(e.j41(0,"mat-option",15),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.iso," ")}}function $o(s,l){if(1&s&&(e.j41(0,"mat-form-field",13)(1,"mat-label"),e.EFF(2,"Moneda"),e.k0s(),e.j41(3,"mat-select",14),e.Z7z(4,Ro,2,2,"mat-option",15,e.fX1),e.k0s()()),2&s){const t=e.XpG();e.R7$(3),e.Y8G("formControl",t.currencyIdControl),e.R7$(),e.Dyx(t.currencies)}}function jo(s,l){if(1&s){const t=e.RV6();e.j41(0,"autocomplete-depots",16),e.bIt("depotChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.selectDepot(i))}),e.k0s()}2&s&&e.Y8G("rounded",!1)}function Eo(s,l){if(1&s){const t=e.RV6();e.j41(0,"autocomplete-locations",17),e.bIt("locationChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.selectLocation(i))}),e.k0s()}2&s&&e.Y8G("rounded",!1)}function Do(s,l){if(1&s){const t=e.RV6();e.j41(0,"autocomplete-customers",18),e.bIt("locationChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.selectCustomer(i))}),e.k0s()}2&s&&e.Y8G("rounded",!1)}let Pe=(()=>{class s{constructor(t){this.data=t,this.currencyIdControl=new a.MJ(""),this.customerIdControl=new a.MJ(""),this.currencies=[],this.selectedDepot=null,this.selectedLocation=null,this.selectedCustomer=null,this.filterProperties=[],this._changeDetectorRef=(0,e.WQX)(e.gRc),this._dialogRef=(0,e.WQX)(j.CP),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il),this.filterProperties=t.filterProperties}ngOnInit(){this.store.select(ce.y$).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}selectDepot(t){this.selectedDepot=t}selectLocation(t){this.selectedLocation=t}selectCustomer(t){this.selectedCustomer=t}selectFilters(){const t=this.currencyIdControl.getRawValue();this._dialogRef.close({currencyId:t,customer:this.selectedCustomer,depot:this.selectedDepot,location:this.selectedLocation})}showField(t){return this.filterProperties.some(n=>n===t)}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(j.Vh))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["lists-filter-selectors-dialog"]],standalone:!0,features:[e.aNF],decls:16,vars:7,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","p-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col","gap-3"],["class","w-full fuse-mat-no-subscript "],["labelName","Almacenes",3,"rounded"],["labelName","Unidades Comerciales",3,"rounded"],["labelName","Clientes",3,"rounded"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","matDialogClose","click"],[1,"w-full","fuse-mat-no-subscript"],[3,"formControl"],[3,"value"],["labelName","Almacenes",3,"rounded","depotChange"],["labelName","Unidades Comerciales",3,"rounded","locationChange"],["labelName","Clientes",3,"rounded","locationChange"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"h2",2),e.EFF(3," Seleccionar "),e.k0s()(),e.j41(4,"div",3)(5,"div",4)(6,"div",5),e.DNE(7,$o,6,1,"mat-form-field",6)(8,jo,1,1,"autocomplete-depots",7)(9,Eo,1,1,"autocomplete-locations",8)(10,Do,1,1,"autocomplete-customers",9),e.k0s()()(),e.j41(11,"div",10)(12,"button",11),e.EFF(13," Cancelar "),e.k0s(),e.j41(14,"button",12),e.bIt("click",function(){return i.selectFilters()}),e.EFF(15," Aceptar "),e.k0s()()()),2&n&&(e.R7$(7),e.vxM(7,i.showField("currency")?7:-1),e.R7$(),e.vxM(8,i.showField("depot")?8:-1),e.R7$(),e.vxM(9,i.showField("location")?9:-1),e.R7$(),e.vxM(10,i.showField("customer")?10:-1),e.R7$(2),e.Y8G("matDialogClose","cancelled"),e.R7$(2),e.Y8G("color","primary")("matDialogClose","confirmed"))},dependencies:[I.Hl,I.$z,j.hM,j.tx,_.RG,_.rl,_.nJ,W.Ve,W.VO,re.wT,a.X1,a.BC,a.l_,So,_o,vo],encapsulation:2,changeDetection:0})}return s})();function To(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-icon",37),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.range.reset())}),e.k0s()}}function Bo(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," Fecha de inicio no v\xe1lida "),e.k0s())}function Ao(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," Fecha de final no v\xe1lida "),e.k0s())}function wo(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",21),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.generateSalesByPeriodReport(!0))}),e.EFF(1," Productos vendidos (Consolidado) "),e.k0s()}}function Go(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",21),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.selectedLocation=null)}),e.EFF(1),e.k0s()}2&s&&(e.R7$(),e.SpI(" ","Todas las Unidades Comerciales"," "))}function Po(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",21),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.selectedLocation=o)}),e.EFF(1),e.k0s()}if(2&s){const t=l.$implicit;e.R7$(),e.SpI(" ",t.name," ")}}function Mo(s,l){}function No(s,l){if(1&s&&(e.j41(0,"div",38)(1,"div",39)(2,"div",40)(3,"div",41)(4,"div",42)(5,"div",43),e.EFF(6,"Facturas realizadas"),e.k0s(),e.j41(7,"div",44)(8,"button",45),e.nrm(9,"mat-icon",17),e.k0s()()(),e.j41(10,"div",46)(11,"div",47),e.EFF(12),e.k0s(),e.j41(13,"div",48),e.EFF(14),e.nI1(15,"i18nPlural"),e.k0s()()(),e.j41(16,"div",41)(17,"div",42)(18,"div",43),e.EFF(19,"Facturas entregadas"),e.k0s(),e.j41(20,"div",44)(21,"button",45),e.nrm(22,"mat-icon",17),e.k0s()()(),e.j41(23,"div",46)(24,"div",49),e.EFF(25),e.k0s(),e.j41(26,"div",50),e.EFF(27),e.nI1(28,"i18nPlural"),e.k0s()()(),e.j41(29,"div",41)(30,"div",42)(31,"div",43),e.EFF(32,"Facturas Cobradas"),e.k0s(),e.j41(33,"div",44)(34,"button",45),e.nrm(35,"mat-icon",17),e.k0s()()(),e.j41(36,"div",46)(37,"div",51),e.EFF(38),e.k0s(),e.j41(39,"div",52),e.EFF(40),e.nI1(41,"i18nPlural"),e.k0s()()(),e.j41(42,"div",41)(43,"div",42)(44,"div",43),e.EFF(45,"Facturas Cancelas"),e.k0s(),e.j41(46,"div",44)(47,"button",45),e.nrm(48,"mat-icon",17),e.k0s()()(),e.j41(49,"div",46)(50,"div",53),e.EFF(51),e.k0s(),e.j41(52,"div",54),e.EFF(53),e.nI1(54,"i18nPlural"),e.k0s()()()(),e.j41(55,"div",55)(56,"div",56)(57,"div",57)(58,"div",58)(59,"div",59)(60,"div",60),e.EFF(61," Balance de ventas"),e.k0s(),e.j41(62,"div",61),e.EFF(63,"Comparaci\xf3n facturado vs cobrado "),e.k0s()(),e.j41(64,"div",18)(65,"button",62)(66,"span",63),e.EFF(67),e.k0s()()()(),e.j41(68,"div",64)(69,"div",65)(70,"div",66),e.EFF(71),e.k0s(),e.j41(72,"div",67),e.EFF(73,"Importe facturado"),e.k0s()(),e.j41(74,"div",65)(75,"div",66),e.EFF(76),e.k0s(),e.j41(77,"div",67),e.EFF(78,"Importe cobrado"),e.k0s()()()(),e.j41(79,"div",68),e.nrm(80,"apx-chart",69),e.k0s()()()(),e.j41(81,"div",70)(82,"div",41)(83,"div",71)(84,"div",43),e.EFF(85," Facturas por d\xeda de la semana "),e.k0s()(),e.j41(86,"div",72)(87,"div",73)(88,"div",61),e.EFF(89,"Realizadas vs. Cobradas"),e.k0s(),e.j41(90,"div",68),e.nrm(91,"apx-chart",74),e.k0s()()()(),e.j41(92,"div",41)(93,"div",43),e.EFF(94,"Facturas por M\xe9todo de Pago"),e.k0s(),e.j41(95,"div",68),e.nrm(96,"apx-chart",75),e.k0s()()()()),2&s){const t=e.XpG();e.R7$(9),e.Y8G("svgIcon","mat_solid:more_vert"),e.R7$(3),e.SpI(" ",t.largeNumber(t.billIndicators.totalBills,0)," "),e.R7$(2),e.SpI(" ",e.i5U(15,45,t.billIndicators.totalBills,t.billsMapping)," "),e.R7$(8),e.Y8G("svgIcon","mat_solid:more_vert"),e.R7$(3),e.SpI(" ",t.largeNumber(t.billIndicators.totalBillsDelivered,0),""),e.R7$(2),e.SpI(" ",e.i5U(28,48,t.billIndicators.totalBillsDelivered,t.billsMapping)," "),e.R7$(8),e.Y8G("svgIcon","mat_solid:more_vert"),e.R7$(3),e.SpI(" ",t.largeNumber(t.billIndicators.totalBillsCollected,0)," "),e.R7$(2),e.SpI(" ",e.i5U(41,51,t.billIndicators.totalBillsCollected,t.billsMapping)," "),e.R7$(8),e.Y8G("svgIcon","mat_solid:more_vert"),e.R7$(3),e.SpI(" ",t.largeNumber(t.billIndicators.totalBillsCanceled,0)," "),e.R7$(2),e.SpI(" ",e.i5U(54,54,t.billIndicators.totalBillsCanceled,t.billsMapping)," "),e.R7$(14),e.SpI("",t.rangeDays," d\xedas"),e.R7$(4),e.SpI("$ ",t.largeNumber(t.salesBalance.billed,2),""),e.R7$(5),e.SpI("$ ",t.largeNumber(t.salesBalance.collected,2),""),e.R7$(4),e.Y8G("chart",t.salesBalanceOptions.chart)("colors",t.salesBalanceOptions.colors)("fill",t.salesBalanceOptions.fill)("series",t.salesBalanceOptions.series)("stroke",t.salesBalanceOptions.stroke)("tooltip",t.salesBalanceOptions.tooltip)("xaxis",t.salesBalanceOptions.xaxis),e.R7$(11),e.Y8G("chart",t.chartSalesStats.chart)("colors",t.chartSalesStats.colors)("dataLabels",t.chartSalesStats.dataLabels)("grid",t.chartSalesStats.grid)("labels",t.chartSalesStats.labels)("legend",t.chartSalesStats.legend)("plotOptions",t.chartSalesStats.plotOptions)("series",t.chartSalesStats.series)("states",t.chartSalesStats.states)("stroke",t.chartSalesStats.stroke)("tooltip",t.chartSalesStats.tooltip)("xaxis",t.chartSalesStats.xaxis)("yaxis",t.chartSalesStats.yaxis),e.R7$(5),e.Y8G("chart",t.billsByPaymentMethodDistribution.chart)("colors",t.billsByPaymentMethodDistribution.colors)("dataLabels",t.billsByPaymentMethodDistribution.dataLabels)("markers",t.billsByPaymentMethodDistribution.markers)("plotOptions",t.billsByPaymentMethodDistribution.plotOptions)("series",t.billsByPaymentMethodDistribution.series)("stroke",t.billsByPaymentMethodDistribution.stroke)("tooltip",t.billsByPaymentMethodDistribution.tooltip)("xaxis",t.billsByPaymentMethodDistribution.xaxis)("yaxis",t.billsByPaymentMethodDistribution.yaxis)}}let Yo=(()=>{class s{constructor(){this.billIndicators=null,this.chartSalesStats={},this.salesBalanceOptions={},this.billsByPaymentMethodDistribution={},this.initDate=new Date((new Date).getTime()-6048e5),this.billsMapping={"=1":"Factura",other:"Facturas"},this.endDate=new Date,this.merchant=null,this.range=null,this.salesDashboardStats=null,this.salesSummary=null,this.salesBalance=null,this.paymentMethodDistribution={categories:["Transferencia","Efectivo","Cheque","Mixta"],series:[{name:"Facturas",data:[12,20,1,5]}]},this.totalQuantity=0,this.totalQuantityAdded=0,this.rangeDays=0,this.user=null,this.maxDate=new Date,this.selectedLocation=null,this.selectedTapIndex=0,this.locations$=(0,B.of)([]),this._billsService=(0,e.WQX)(Ue),this._changeDetectorRef=(0,e.WQX)(e.gRc),this._dialog=(0,e.WQX)(j.bZ),this._router=(0,e.WQX)(H.Ix),this._salesDashboardStatsService=(0,e.WQX)(kt),this._salesReportsService=(0,e.WQX)(yt),this._periodsService=(0,e.WQX)(uo.w),this._documentsService=(0,e.WQX)(Ce.Q),this._snackBar=(0,e.WQX)(O.UG),this._salesService=(0,e.WQX)(we.w),this._boxService=(0,e.WQX)(mo.R),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.locations$=this.store.select(He.BF),this.store.select(oo).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.salesSummary=t.salesSummary,this.totalQuantity=t.totalQuantity,this.totalQuantityAdded=t.totalQuantityAdded,this.billIndicators=t.billIndicators,this.salesBalance=t.salesBalance,this._prepareChartData(),this._prepareSalesBalanceChartData(),this._changeDetectorRef.markForCheck()}),this.store.select(oe.Xb).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(le.SW).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.range=new a.gE({start:new a.MJ({disabled:!1,value:this.initDate},[U.t.futureDateValidator()]),end:new a.MJ({disabled:!1,value:this.endDate},[U.t.futureDateValidator()])}),this.rangeDays=this.getDaysBetweenDates(),this.range.get("end").valueChanges.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{const n=this.range.getRawValue();!n.start||!n.end||(this.rangeDays=this.getDaysBetweenDates(),t<=new Date&&this._salesDashboardStatsService.getSalesDashboardStatsData(n.start,n.end).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Datos actualizados correctamente.",title:"Confirmaci\xf3n",type:"success",appearance:"fill"}})}),this._changeDetectorRef.markForCheck())}),window.Apex={chart:{events:{mounted:(t,n)=>{this._fixSvgFill(t.el)},updated:(t,n)=>{this._fixSvgFill(t.el)}}}}}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,Ft.z9)())}onTabChanged(t){this.selectedTapIndex=t}generateBillsReport(t=null){const n=this.range.getRawValue();!n.start||!n.end||this._billsService.getBillsByDateRangeAndStatus(n.start,n.end,t).pipe((0,q.s)(1)).subscribe(({data:i})=>{M.H.IsNullOrEmpty(i.getBillsByDateRangeAndStatus.bills)?this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen facturas para el rango de fecha seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateBillsReport(n.start,n.end,this.user,this.merchant,i.getBillsByDateRangeAndStatus.bills,this.getTotalCUP(i.getBillsByDateRangeAndStatus.bills),this.getTotalUSD(i.getBillsByDateRangeAndStatus.bills),this.generateBillsSummary(i.getBillsByDateRangeAndStatus.bills))})}generateBillsCollectedByCustomerAndCurrencyReport(t){const{start:n,end:i}=this.range.getRawValue();!n||!i||this._dialog.open(Pe,{data:{filterProperties:["customer","currency"]},width:"200px",panelClass:"ath-dialog-panel",disableClose:!0}).afterClosed().pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({currencyId:o,customerId:r})=>{M.H.IsNullOrEmpty(o)&&M.H.IsNullOrEmpty(r)||this._salesDashboardStatsService.getBillsCollectedByCustomersAndCurrency(n,i,t,o,r).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:c})=>{M.H.IsNullOrEmpty(c.getBillsCollectedByCustomersAndCurrency.billsCollectedByCustomersAndCurrency)?this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen facturas cobradas, para la moneda y el rango de fecha seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateBillsByCustomersReport(n,i,this.user,this.merchant,c.getBillsCollectedByCustomersAndCurrency.billsCollectedByCustomersAndCurrency,t)})})}getDaysBetweenDates(){const t=this.range.getRawValue().start,n=this.range.getRawValue().end,i=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),o=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate());return Math.floor((o-i)/864e5)}getTotalCUP(t){return t.filter(i=>"CUP"===i.currency.iso).reduce((i,o)=>i+(o.total||0),0)}getTotalUSD(t){return t.filter(i=>"USD"===i.currency.iso).reduce((i,o)=>i+(o.total||0),0)}generateBillsSummary(t){const n={nueva:0,recibida:0,rechazada:0,cancelada:0};return t.forEach(i=>{n[i.status||fe.ih.nueva]++}),n}generateBillsByCustomersReport(){const{start:t,end:n}=this.range.getRawValue();this._dialog.open(Pe,{data:{filterProperties:["customer","currency"]},width:"200px",panelClass:"ath-dialog-panel",disableClose:!0}).afterClosed().pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({currencyId:i,customerId:o})=>{M.H.IsNullOrEmpty(i)&&M.H.IsNullOrEmpty(o)||this._salesDashboardStatsService.getBillsByCustomersAndCurrency(t,n,i,o).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:r})=>{M.H.IsNullOrEmpty(r.getBillsByCustomersAndCurrency.billsByCustomersAndCurrency)?this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen facturas, para la moneda y el rango de fecha seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateBillsByCustomersReport(t,n,this.user,this.merchant,r.getBillsByCustomersAndCurrency.billsByCustomersAndCurrency)})})}generateProductsBoughtByCustomerReport(){const{start:t,end:n}=this.range.getRawValue();this._dialog.open(Pe,{data:{filterProperties:["customer","currency"]},width:"200px",panelClass:"ath-dialog-panel",disableClose:!0}).afterClosed().pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({customerId:i})=>{M.H.IsNullOrEmpty(i)?this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Debe seleccionar un cliente.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesDashboardStatsService.getProductsBoughtByCustomer(t,n,i).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:o})=>{M.H.IsNullOrEmpty(o.getProductsBoughtByCustomer.productsBoughtByCustomer)?this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen productos facturados para el cliente seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateProductsBoughtByCustomerReport(t,n,this.user,this.merchant,o.getProductsBoughtByCustomer.productsBoughtByCustomer)})})}getIpvByDateRange(){const{start:t,end:n}=this.range.getRawValue();!t||!n||this._dialog.open(Pe,{data:{filterProperties:["depot"]},width:"200px",panelClass:"ath-dialog-panel",disableClose:!0}).afterClosed().pipe((0,g.Q)(this._unsubscribeAll)).subscribe(i=>{M.H.IsNullOrEmpty(i.depot)||"cancelled"===i||this._periodsService.getIpvByDateRange(i.depot.id,t,n).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(o=>{this._documentsService.generatePeriodCloseDocument(o,this.merchant,this.user,null,this.range.getRawValue(),i.depot)})})}generateBoxesReport(){const{start:t,end:n}=this.range.getRawValue();!t||!n||this._boxService.getAllBoxes(this.selectedLocation?this.selectedLocation.id:null,t,n).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:i})=>{i&&this._documentsService.generateBoxesReport(i.getBoxes.boxes,this.range.getRawValue(),this.merchant,this.user)})}generateSalesByPeriodReport(t){const{start:n,end:i}=this.range.getRawValue();!n||!i||this._salesService.getSalesProductsGroupedByLocation(n,i,this.selectedLocation?this.selectedLocation.id:null).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(o=>{o&&this._salesReportsService.generateSalesByPeriodReport(o,this.merchant,this.user,t)})}largeNumber(t,n){return function po(s,l){return s>=1e6?(s/1e6).toFixed(l)+"M":s>=1e3?(s/1e3).toFixed(l)+"K":s.toFixed(l)}(t,n)}trackByFn(t,n){return n.id||t}_fixSvgFill(t){const n=this._router.url;Array.from(t.querySelectorAll("*[fill]")).filter(i=>-1!==i.getAttribute("fill").indexOf("url(")).forEach(i=>{const o=i.getAttribute("fill");i.setAttribute("fill",`url(${n}${o.slice(o.indexOf("#"))}`)})}_prepareChartData(){this.chartSalesStats={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#f59e0b","#22c55e"],dataLabels:{enabled:!0,enabledOnSeries:[0],background:{borderWidth:0}},grid:{borderColor:"var(--fuse-border)"},labels:this.salesSummary.labels,legend:{show:!1},plotOptions:{bar:{columnWidth:"50%"}},series:[{name:"Total",type:"line",data:this.salesSummary.serie},{name:"Cobradas",type:"bar",data:this.salesSummary.collectedSerie}],states:{hover:{filter:{type:"darken",value:.75}}},stroke:{width:[3,0]},tooltip:{followCursor:!0,theme:"dark"},xaxis:{axisBorder:{show:!1},axisTicks:{color:"var(--fuse-border)"},labels:{style:{colors:"var(--fuse-text-secondary)"}},tooltip:{enabled:!1}},yaxis:{labels:{offsetX:-16,style:{colors:"var(--fuse-text-secondary)"}}}},this.billsByPaymentMethodDistribution={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"radar",sparkline:{enabled:!0}},colors:["#818CF8"],dataLabels:{enabled:!0,formatter:t=>`${t}`,textAnchor:"start",style:{fontSize:"13px",fontWeight:500},background:{borderWidth:0,padding:4},offsetY:-15},markers:{strokeColors:"#818CF8",strokeWidth:4},plotOptions:{radar:{polygons:{strokeColors:"var(--fuse-border)",connectorColors:"var(--fuse-border)"}}},series:this.paymentMethodDistribution.series,stroke:{width:2},tooltip:{theme:"dark",y:{formatter:t=>`${t}`}},xaxis:{labels:{show:!0,style:{fontSize:"14px",fontWeight:"600"}},categories:this.paymentMethodDistribution.categories},yaxis:{max:t=>parseInt((t+10).toFixed(0),10),tickAmount:7}}}_prepareSalesBalanceChartData(){this.salesBalanceOptions={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#A3BFFA","#667EEA"],fill:{colors:["#CED9FB","#AECDFD"],opacity:.5,type:"solid"},series:this.salesBalance.series,stroke:{curve:"straight",width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"dd/MM/yyyy"},y:{formatter:t=>t.toFixed(2)}},xaxis:{type:"datetime"}}}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-dashboard"]],standalone:!0,features:[e.aNF],decls:64,vars:21,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","px-6","mx-auto","sm:px-8"],[1,"flex","flex-col","flex-auto","min-w-0","my-8","sm:flex-row","sm:items-center","sm:my-12"],[1,"flex","items-center","flex-auto","min-w-0"],[1,"text-3xl","font-semibold","leading-8","tracking-tight"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","items-center","mt-6","space-x-3","sm:mt-0","sm:ml-2"],[1,"min-w-72","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],["mat-stroked-button","",1,"hidden","mx-3","sm:inline-flex",3,"matMenuTriggerFor","disabled"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["xPosition","before"],["reportsMenu1","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item",""],["reportsMenu2","matMenu"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","overflow-hidden","border","border-b-0","cursor-pointer","rounded-t-xl","bg-default",3,"matMenuTriggerFor"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex","items-center","justify-center","pl-2"],[3,"xPosition"],["projectsMenu","matMenu"],[1,"flex-auto","pt-4","-mt-px","border-t","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],["mat-stretch-tabs","false",1,"w-full",3,"animationDuration","selectedIndexChange"],["label","Minorista",1,"max-w-screen-xl","p-6","md:p-8"],["matTabContent",""],["label","Mayorista",1,"p-6","md:p-8"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[1,"flex","flex-col","items-center","justify-center","w-full"],[1,"grid","w-full","max-w-screen-lg","grid-cols-1","gap-8","xl:grid-cols-2"],[1,"grid","grid-cols-1","gap-8","mt-8","xl:grid-cols-2","sm:grid-flow-col","xl:grid-flow-row"],[1,"flex","flex-col","flex-auto","p-6","overflow-hidden","shadow","bg-card","rounded-2xl"],[1,"flex","items-start","justify-between"],[1,"text-lg","font-medium","leading-6","tracking-tight","truncate"],[1,"ml-2","-mt-2","-mr-3"],["mat-icon-button","","disabled",""],[1,"flex","flex-col","items-center","mt-2"],[1,"font-bold","leading-none","tracking-tight","text-7xl","sm:text-8xl","text-amber-500"],[1,"text-lg","font-medium","text-amber-600","dark:text-amber-500"],[1,"font-bold","leading-none","tracking-tight","text-blue-500","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-blue-600","dark:text-blue-500"],[1,"font-bold","leading-none","tracking-tight","text-green-500","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-green-600","dark:text-green-500"],[1,"font-bold","leading-none","tracking-tight","text-red-500","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-red-600","dark:text-red-500"],[1,"grid","w-full","grid-cols-1","gap-8","mt-8"],[1,"flex","flex-col","flex-auto","overflow-hidden","shadow","bg-card","rounded-2xl"],[1,"flex","flex-col","p-6","pb-4"],[1,"flex","items-center","justify-between"],[1,"flex","flex-col"],[1,"mr-4","text-lg","font-medium","leading-6","tracking-tight","truncate"],[1,"font-medium","text-secondary"],["mat-button","","disabled","",1,"h-6","px-2","rounded-full","min-h-6","bg-hover"],[1,"text-sm","font-medium","text-secondary"],[1,"flex","items-start","mt-6","mr-2"],[1,"flex","flex-col","ml-8","md:ml-16"],[1,"text-3xl","font-semibold","tracking-tighter","md:text-5xl"],[1,"text-sm","font-medium","leading-none","text-secondary"],[1,"flex","flex-col","flex-auto"],[1,"flex-auto","w-full","h-full",3,"chart","colors","fill","series","stroke","tooltip","xaxis"],[1,"grid","w-full","max-w-screen-lg","min-w-0","grid-cols-1","gap-6","mt-8","sm:grid-cols-2"],[1,"flex","flex-col","items-start","justify-between","sm:flex-row"],[1,"grid","w-full","grid-flow-row","grid-cols-1","gap-6","mt-8","sm:col-span-2","sm:mt-4"],[1,"flex","flex-col","flex-auto","w-full"],[1,"flex-auto","w-full","h-80",3,"chart","colors","dataLabels","grid","labels","legend","plotOptions","series","states","stroke","tooltip","xaxis","yaxis"],[1,"flex-auto","w-full","h-80",3,"chart","colors","dataLabels","markers","plotOptions","series","stroke","tooltip","xaxis","yaxis"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div")(6,"h2",5),e.EFF(7,"Panel de Ventas"),e.k0s(),e.j41(8,"div",6),e.EFF(9,"Seguimiento del estados de tus ventas "),e.k0s()()(),e.j41(10,"div",7)(11,"mat-form-field",8)(12,"mat-date-range-input",9),e.nrm(13,"input",10)(14,"input",11),e.k0s(),e.nrm(15,"mat-datepicker-toggle",12)(16,"mat-date-range-picker",13,14),e.DNE(18,To,1,0,"mat-icon",15)(19,Bo,2,0,"mat-error")(20,Ao,2,0,"mat-error"),e.k0s(),e.j41(21,"button",16),e.nrm(22,"mat-icon",17),e.j41(23,"span",18),e.EFF(24,"Reportes"),e.k0s()(),e.j41(25,"mat-menu",19,20)(27,"button",21),e.bIt("click",function(){return i.getIpvByDateRange()}),e.EFF(28,"Ingreso por ventas (IPVs)"),e.k0s(),e.DNE(29,wo,2,0,"button",22),e.j41(30,"button",21),e.bIt("click",function(){return i.generateSalesByPeriodReport(!1)}),e.EFF(31),e.k0s(),e.j41(32,"button",21),e.bIt("click",function(){return i.generateBoxesReport()}),e.EFF(33,"Resumen de cajas"),e.k0s()(),e.j41(34,"mat-menu",19,23)(36,"button",21),e.bIt("click",function(){return i.generateBillsReport()}),e.EFF(37,"Facturas realizadas"),e.k0s(),e.j41(38,"button",21),e.bIt("click",function(){return i.generateBillsByCustomersReport()}),e.EFF(39,"Facturas por clientes"),e.k0s(),e.j41(40,"button",21),e.bIt("click",function(){return i.generateBillsCollectedByCustomerAndCurrencyReport("cobrada")}),e.EFF(41,"Facturas cobradas por clientes"),e.k0s(),e.j41(42,"button",21),e.bIt("click",function(){return i.generateProductsBoughtByCustomerReport()}),e.EFF(43,"Productos facturados por clientes"),e.k0s()()()(),e.j41(44,"div",24)(45,"div",25)(46,"div",26)(47,"div",27),e.EFF(48),e.k0s()(),e.j41(49,"div",28),e.nrm(50,"mat-icon",17),e.k0s()(),e.j41(51,"mat-menu",29,30),e.DNE(53,Go,2,1,"button",22),e.Z7z(54,Po,2,1,"button",22,e.fX1),e.nI1(56,"async"),e.k0s()()()(),e.j41(57,"div",31)(58,"div",32)(59,"mat-tab-group",33),e.bIt("selectedIndexChange",function(r){return i.onTabChanged(r)}),e.j41(60,"mat-tab",34),e.DNE(61,Mo,0,0,"ng-template",35),e.k0s(),e.j41(62,"mat-tab",36),e.DNE(63,No,97,57,"ng-template",35),e.k0s()()()()()),2&n){const o=e.sdS(17),r=e.sdS(26),c=e.sdS(35),d=e.sdS(52);e.R7$(11),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("formGroup",i.range)("rangePicker",o)("max",i.maxDate),e.R7$(3),e.Y8G("for",o),e.R7$(3),e.vxM(18,i.range.get("start").value||i.range.get("end").value?18:-1),e.R7$(),e.vxM(19,i.range.controls.start.hasError("matStartDateInvalid")?19:-1),e.R7$(),e.vxM(20,i.range.controls.end.hasError("matEndDateInvalid")?20:-1),e.R7$(),e.Y8G("matMenuTriggerFor",0===i.selectedTapIndex?r:c)("disabled",i.range.invalid||!i.range.get("start").value||!i.range.get("end").value),e.R7$(),e.Y8G("svgIcon","mat_solid:plagiarism"),e.R7$(7),e.vxM(29,i.selectedLocation?-1:29),e.R7$(2),e.SpI("Productos vendidos ",i.selectedLocation?"":"(Agrupado)"," "),e.R7$(13),e.Y8G("matMenuTriggerFor",d),e.R7$(4),e.SpI(" ",i.selectedLocation?i.selectedLocation.name:"Todas las Unidades Comerciales"," "),e.R7$(2),e.Y8G("svgIcon","mat_solid:expand_more"),e.R7$(),e.Y8G("xPosition","before"),e.R7$(2),e.vxM(53,i.selectedLocation?53:-1),e.R7$(),e.Dyx(e.bMT(56,19,i.locations$)),e.R7$(5),e.Y8G("animationDuration",0)}},dependencies:[v.Jj,v.jo,I.Hl,I.$z,I.iY,k.X6,k.bU,k.el,k.xR,k.IG,k.SG,_.RG,_.rl,_.TL,_.yw,R.m_,R.An,w.Cn,w.kk,w.fb,w.Cp,Ge.RI,Ge.$L,Ge.mq,Ge.T8,vt.J,vt.Q,a.X1,a.me,a.BC,a.cb,a.j4,a.JD],encapsulation:2,changeDetection:0})}return s})();const qo=(0,$.Mz)(s=>s.sales,s=>s.sales);function Lo(s,l){1&s&&(e.j41(0,"mat-error",34),e.EFF(1," Valor m\xednimo 0 "),e.k0s())}function Xo(s,l){if(1&s&&(e.j41(0,"mat-error",34),e.EFF(1),e.k0s()),2&s){const t=e.XpG().$implicit;e.R7$(),e.SpI(" Valor m\xe1ximo ",t.quantityPreviews," ")}}function Qo(s,l){1&s&&(e.j41(0,"mat-error",34),e.EFF(1," Patr\xf3n no v\xe1lido "),e.k0s())}function Oo(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",24)(1,"div",25),e.EFF(2),e.k0s(),e.j41(3,"div",26)(4,"div",27)(5,"button",28),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.decrementProductQty(o))}),e.nrm(6,"mat-icon",29),e.k0s(),e.j41(7,"mat-form-field",30)(8,"span",31),e.EFF(9),e.k0s(),e.nrm(10,"input",32),e.k0s(),e.j41(11,"button",28),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.incrementProductQty(o))}),e.nrm(12,"mat-icon",29),e.k0s()(),e.DNE(13,Lo,2,0,"mat-error",33)(14,Xo,2,1,"mat-error",33)(15,Qo,2,0,"mat-error",33),e.k0s()()}if(2&s){const t=l.$implicit;e.R7$(),e.Y8G("matTooltip",t.get("name").value),e.R7$(),e.SpI(" ",t.get("name").value," "),e.R7$(3),e.Y8G("disabled",t.get("quantity").value<=0||t.get("quantity").hasError("pattern")),e.R7$(),e.Y8G("svgIcon","mat_solid:remove"),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(2),e.JRh(t.get("uom").value),e.R7$(),e.Y8G("min",0)("max",t.get("quantityPreviews").value)("formControl",t.get("quantity")),e.R7$(),e.Y8G("disabled",t.get("quantity").value>=t.get("quantityPreviews").value||t.get("quantity").hasError("pattern")),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(),e.vxM(13,t.get("quantity").hasError("min")?13:-1),e.R7$(),e.vxM(14,t.get("quantity").hasError("max")?14:-1),e.R7$(),e.vxM(15,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?15:-1)}}function Jo(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," EL motivo del rechazo es obligatorio "),e.k0s())}function Uo(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," EL motivo del rechazo debe contener entre 3 y 200 caracteres. "),e.k0s())}function Wo(s,l){1&s&&(e.j41(0,"span"),e.EFF(1," Aceptar "),e.k0s())}function Zo(s,l){1&s&&e.nrm(0,"mat-progress-spinner",23),2&s&&e.Y8G("diameter",24)("mode","indeterminate")}const Ho=s=>({"cursor-not-allowed":s});let Ko=(()=>{class s{constructor(t){this.data=t,this.isLoading=!1,this.sale=null,this.totalAmount=0,this.checkOutControl=new a.MJ(!0),this.salesProducts=[],this.products=[],this.receipts=[],this._changeDetectorRef=(0,e.WQX)(e.gRc),this._salesService=(0,e.WQX)(we.w),this._dialogRef=(0,e.WQX)(j.CP),this._formBuilder=(0,e.WQX)(a.ok),this._snackBar=(0,e.WQX)(O.UG),this._unsubscribeAll=new X.B,this.sale=t,this.products=this.sale.products.map(o=>({...o,type:"product"})),[...t.returns].map(o=>o.products).flat().forEach(o=>{const r=this.products.find(c=>c.productId===o.productId);r&&(r.quantity=r.quantity-o.quantity)}),this.salesProducts=[...this.products],this.receipts=this.sale.receipts.map(o=>({...o,type:"receipt"})),[...t.returns].map(o=>o.receipts).flat().forEach(o=>{const r=this.receipts.find(c=>c.productId===o.productId);r&&(r.quantity=r.quantity-o.quantity)}),this.products.push(...this.receipts),this.totalAmount=this.sale.products.reduce((o,r)=>o+r.quantity*r.price,0)}ngOnInit(){const t=this.salesProducts.map(i=>this.createProductFormGroup(i)),n=this.receipts.map(i=>this.createReceiptsFormGroup(i));t.push(...n),this.returnForm=this._formBuilder.group({saleId:[this.sale.id],products:new a.Yp(t),reason:["",[a.k0.required,a.k0.maxLength(1e3)]]}),this.returnForm.get("products").valueChanges.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(i=>{this.totalAmount=i.reduce((o,r)=>o+Number(r.quantity)*r.price,0),this._changeDetectorRef.markForCheck()}),this.checkOutControl.valueChanges.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(i=>{i?(this.returnForm.get("products").controls.forEach((o,r)=>{const c=this.products.findIndex(d=>d.productId===o.get("productId").value);o.get("quantity").setValue(this.products[c].quantity)}),this.products=this.returnForm.get("products").getRawValue()):(this.products=this.returnForm.get("products").getRawValue(),this.returnForm.get("products").controls.forEach((o,r)=>{o.get("quantity").setValue(0)}))})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}returnSale(t){if("Enter"===t.key&&t.target instanceof HTMLTextAreaElement||this.returnForm.invalid)return;const n=this.returnForm.getRawValue();if(!n.products.some(d=>d.quantity>0))return;const o=n.products.filter(d=>d.quantity>0&&"product"===d.type).map(d=>({productId:d.productId,quantity:Number(d.quantity),price:d.price})),r=n.products.filter(d=>d.quantity>0&&"receipt"===d.type).map(d=>({productId:d.productId,quantity:Number(d.quantity),price:d.price}));this._salesService.returnSale({saleId:n.saleId,reason:n.reason,products:o,receipts:r}).pipe((0,g.Q)(this._unsubscribeAll),(0,ee.j)(()=>{this.isLoading=!1,this._changeDetectorRef.markForCheck()})).subscribe(({data:d})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:d.returnSale.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck(),this.closeDialog()})}incrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(Number(n)+1);const i=this.products.findIndex(o=>o.productId===t.get("productId").value);this.products[i].quantity=Number(n)+1}decrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(Number(n)-1);const i=this.products.findIndex(o=>o.productId===t.get("productId").value);this.products[i].quantity=Number(n)-1}closeDialog(){this._dialogRef.close()}trackByFn(t,n){return n.productId||t}createProductFormGroup(t){return this._formBuilder.group({productId:[t.productId,[a.k0.required]],name:[t.product.name],quantityPreviews:[t.quantity],quantity:[t.quantity,[U.t.onlyNumbersPattern(),a.k0.required,a.k0.min(0),a.k0.max(t.quantity)]],price:[t.price,[a.k0.required]],uom:[t.product.uom.abbr],type:["product"]})}createReceiptsFormGroup(t){return this._formBuilder.group({productId:[t.productId,[a.k0.required]],name:[t.receipt.name],quantityPreviews:[t.quantity],quantity:[t.quantity,[U.t.onlyNumbersPattern(),a.k0.required,a.k0.min(0),a.k0.max(t.quantity)]],price:[t.price,[a.k0.required]],uom:[t.receipt.uom.abbr],type:["receipt"]})}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(j.Vh))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sale-return-dialog"]],standalone:!0,features:[e.aNF],decls:38,vars:22,consts:[[1,"h-full","ng-star-inserted",3,"keydown.enter"],[1,"relative","flex","flex-col","w-full","h-full"],[1,"flex","items-center","h-full"],[1,"block","w-full"],[1,"flex","flex-col","items-center","flex-auto","p-8","pb-4","sm:flex-row","sm:items-start","sm:pb-6"],[1,"flex","flex-col","items-center","mt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left","ng-star-inserted"],[1,"text-xl","font-medium","leading-6","ng-star-inserted"],[1,"text-secondary","ng-star-inserted"],[1,"flex","flex-col","gap-6","pb-6","pl-8","pr-8","mt-10","sm:mt-0","sm:pl-22",3,"formGroup","autocomplete"],[1,"flex","flex-col"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","grid-cols-2","gap-4","pr-6","pl-2","py-2","font-semibold","shadow","md:pr-8","md:pl-3","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["color","primary",3,"formControl"],[1,"font-medium"],[1,"flex","items-center","justify-end","mr-9","h-full"],[1,"overflow-auto","border-b",2,"max-height","40vh"],[1,"w-full","mat-fuse-dense","fuse-mat-textarea"],["matPrefix","","svgIcon","mat_solid:subject",1,"hidden","sm:flex","icon-size-5"],["matInput","",3,"formControlName","placeholder","minLength","maxLength","required"],["refundT",""],[1,"text-right"],[1,"flex","flex-wrap","justify-center","px-6","py-4","space-x-3","tems-center","bg-gray-50","dark:bg-black","dark:bg-opacity-10","ng-star-inserted"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","","mat-button","",3,"color","disabled","ngClass","click"],[3,"diameter","mode"],[1,"flex","items-center","justify-between","border-t","py-2","pr-3"],[1,"truncate",3,"matTooltip"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded","max-w-22",3,"subscriptSizing"],["matSuffix",""],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"w-full","text-sm","text-center"],["class","flex items-center justify-between border-t py-2 pr-3"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0),e.bIt("keydown.enter",function(r){return i.returnSale(r)}),e.j41(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e.EFF(7,"Devoluci\xf3n"),e.k0s(),e.j41(8,"div",7),e.EFF(9),e.k0s()()(),e.j41(10,"form",8)(11,"div",9)(12,"div",10)(13,"mat-checkbox",11)(14,"span",12),e.EFF(15,"Productos*"),e.k0s()(),e.j41(16,"div",13)(17,"span"),e.EFF(18,"Cantidades"),e.k0s()()(),e.j41(19,"div",14),e.Z7z(20,Oo,16,14,"div",35,i.trackByFn),e.k0s()(),e.j41(22,"mat-form-field",15)(23,"mat-label"),e.EFF(24,"Motivo"),e.k0s(),e.nrm(25,"mat-icon",16)(26,"textarea",17,18),e.j41(28,"mat-hint",19),e.EFF(29),e.k0s(),e.DNE(30,Jo,2,0,"mat-error")(31,Uo,2,0,"mat-error"),e.k0s()()()(),e.j41(32,"div",20)(33,"button",21),e.EFF(34,"Cancelar"),e.k0s(),e.j41(35,"button",22),e.bIt("click",function(r){return i.returnSale(r)}),e.DNE(36,Wo,2,0,"span")(37,Zo,1,2,"mat-progress-spinner",23),e.k0s()()()()),2&n){const o=e.sdS(27);e.R7$(9),e.Lme("\xbfEsta seguro que desea efectuar la devoluci\xf3n de las cantidades de la venta # ",i.sale.no," por $",i.totalAmount," ? "),e.R7$(),e.Y8G("formGroup",i.returnForm)("autocomplete","off"),e.R7$(3),e.Y8G("formControl",i.checkOutControl),e.R7$(7),e.Dyx(i.returnForm.get("products").controls),e.R7$(6),e.Y8G("formControlName","reason")("placeholder","Escriba el motivo del rechazo")("minLength",3)("maxLength",200)("required",!0),e.R7$(3),e.SpI("Total de caracteres ",o.value.length," / 1000"),e.R7$(),e.vxM(30,i.returnForm.get("reason").hasError("required")?30:-1),e.R7$(),e.vxM(31,i.returnForm.get("reason").hasError("maxlength")||i.returnForm.get("reason").hasError("minlength")?31:-1),e.R7$(2),e.Y8G("matDialogClose",!0),e.R7$(2),e.Y8G("color","primary")("disabled",i.returnForm.invalid)("ngClass",e.eq3(20,Ho,i.returnForm.invalid||i.isLoading))("disabled",i.returnForm.invalid||i.isLoading),e.R7$(),e.vxM(36,i.isLoading?-1:36),e.R7$(),e.vxM(37,i.isLoading?37:-1)}},dependencies:[I.Hl,I.$z,te.g7,te.So,j.hM,j.tx,_.RG,_.rl,_.nJ,_.MV,_.TL,_.JW,_.yw,R.m_,R.An,S.fS,S.fg,K.D6,K.LG,J.uc,J.oV,v.YU,a.X1,a.qT,a.me,a.BC,a.cb,a.YS,a.l_,a.j4,a.JD],encapsulation:2,changeDetection:0})}return s})();function ea(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El motivo es obligatorio "),e.k0s())}function ta(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El motivo debe contener entre 3 y 1000 caracteres. "),e.k0s())}const ia=s=>({"cursor-not-allowed":s});let sa=(()=>{class s{constructor(t,n){this.data=t,this._dialogRef=n,this.reasonControl=new a.MJ("")}ngOnInit(){this.reasonControl.setValidators([a.k0.required,a.k0.minLength(3),a.k0.maxLength(1e3)])}accept(){this._dialogRef.close({reason:this.reasonControl.value})}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(j.Vh),e.rXU(j.CP))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-cancel-dialog"]],standalone:!0,features:[e.aNF],decls:25,vars:15,consts:[[1,"ng-star-inserted","h-full"],[1,"relative","flex","flex-col","w-full","h-full"],[1,"h-full","flex","items-center"],[1,"block","w-full"],[1,"flex","flex-col","sm:flex-row","flex-auto","items-center","sm:items-start","p-8","pb-4","sm:pb-6"],[1,"flex","flex-0","items-center","justify-center","w-10","h-10","sm:mr-4","rounded-full","text-blue-600","bg-blue-100","dark:bg-blue-300","ng-star-inserted"],["svgIcon","mat_solid:question_mark",1,"text-blue-600"],[1,"text-xl","font-medium","leading-6","ng-star-inserted"],[1,"text-sm","text-secondary","ng-star-inserted"],[1,"pr-8","pl-8","mt-10","sm:mt-0","sm:pl-22","pb-6",3,"autocomplete"],[1,"w-full","fuse-mat-textarea",3,"subscriptSizing"],["matPrefix","","svgIcon","mat_solid:edit_note",1,"hidden","sm:flex","icon-size-5"],["matInput","","required","",3,"formControl","placeholder"],[1,"flex","flex-wrap","tems-center","justify-center","md:justify-end","px-6","py-4","space-x-3","bg-gray-50","dark:bg-black","dark:bg-opacity-10","ng-star-inserted"],["mat-button","",3,"color","matDialogClose"],["mat-flat-button","","mat-button","",3,"color","disabled","ngClass","click"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e.nrm(6,"mat-icon",6),e.k0s(),e.j41(7,"div")(8,"div",7),e.EFF(9),e.k0s(),e.j41(10,"div",8),e.EFF(11),e.k0s()()(),e.j41(12,"form",9)(13,"mat-form-field",10)(14,"mat-label"),e.EFF(15,"Motivo"),e.k0s(),e.nrm(16,"mat-icon",11)(17,"textarea",12),e.DNE(18,ea,2,0,"mat-error")(19,ta,2,0,"mat-error"),e.k0s()()()(),e.j41(20,"div",13)(21,"button",14),e.EFF(22,"Cancelar"),e.k0s(),e.j41(23,"button",15),e.bIt("click",function(){return i.accept()}),e.EFF(24," Aceptar "),e.k0s()()()()),2&n&&(e.R7$(9),e.JRh(i.data.title),e.R7$(2),e.JRh(i.data.message),e.R7$(),e.Y8G("autocomplete","off"),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(4),e.Y8G("formControl",i.reasonControl)("placeholder","Escriba el motivo"),e.R7$(),e.vxM(18,i.reasonControl.hasError("required")?18:-1),e.R7$(),e.vxM(19,i.reasonControl.hasError("maxlength")||i.reasonControl.hasError("minlength")?19:-1),e.R7$(2),e.Y8G("color","warn")("matDialogClose",!0),e.R7$(2),e.Y8G("color","primary")("disabled",i.reasonControl.invalid)("ngClass",e.eq3(13,ia,i.reasonControl.invalid)))},dependencies:[I.Hl,I.$z,te.g7,j.hM,j.tx,_.RG,_.rl,_.nJ,_.TL,_.JW,R.m_,R.An,S.fS,S.fg,K.D6,J.uc,v.YU,a.X1,a.qT,a.me,a.BC,a.cb,a.YS,a.l_],encapsulation:2,data:{animation:We.X},changeDetection:0})}return s})();var na=f(66958),Rt=f(82341),oa=f(14715);const aa=["locationFilter"],ra=["currencyFilter"],la=["paymentMethodFilter"];function ca(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-icon",49),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.range.reset())}),e.k0s()}}function da(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1,"Fecha de inicio no v\xe1lida "),e.k0s())}function ua(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1,"Fecha de final no v\xe1lida "),e.k0s())}function ma(s,l){if(1&s){const t=e.RV6();e.j41(0,"table-filter",50,51),e.bIt("dataChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addLocation(i))}),e.k0s()}if(2&s){const t=e.XpG();e.Y8G("filterType","filterEntity")("searchEntityControl",t.searchLocationsControl)("entitiesFiltered",t.locationsFiltered)}}function pa(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",52),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.clearTableFilters())}),e.j41(1,"span",53),e.EFF(2," filter_list_off "),e.k0s()()}}function ha(s,l){1&s&&e.nrm(0,"mat-icon",64)}function fa(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",65),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.return(i))}),e.nrm(1,"mat-icon",66),e.k0s(),e.j41(2,"button",67),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.cancelSale(i))}),e.nrm(3,"mat-icon",68),e.k0s(),e.j41(4,"button",69),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.printTicket(i))}),e.nrm(5,"mat-icon",70),e.k0s()}if(2&s){const t=e.XpG().$implicit,n=e.XpG(2);e.Y8G("disabled",n.isLoading||"devuelto"===t.paymentStatus||"cancelada"===t.status),e.R7$(2),e.Y8G("disabled",n.isLoading||"devuelto"===t.paymentStatus||"cancelada"===t.status),e.R7$(3),e.Y8G("svgIcon","mat_solid:receipt")}}function ga(s,l){1&s&&e.nrm(0,"mat-spinner",71),2&s&&e.Y8G("diameter",20)("color","primary")}function _a(s,l){1&s&&e.eu8(0)}const ba=s=>({$implicit:s});function ya(s,l){if(1&s&&e.DNE(0,_a,1,0,"ng-container",72),2&s){const t=e.XpG(3),n=e.sdS(87);e.Y8G("ngTemplateOutlet",n)("ngTemplateOutletContext",e.eq3(2,ba,t.paymentStatusData))}}const Ca=(s,l,t,n,i,o,r)=>({"text-teal-800 bg-teal-100 dark:text-teal-50 dark:bg-teal-500":s,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":l,"text-blue-800 bg-blue-100 dark:text-white dark:bg-blue-500":t,"text-violet-800 bg-violet-100 dark:text-violet-50 dark:bg-violet-500":n,"text-violet-500 bg-violet-50 dark:text-violet-50 dark:bg-violet-300":i,"text-red-800 bg-red-100 dark:text-red-50 dark:bg-red-500":o,"text-amber-800 bg-amber-100 dark:text-black dark:bg-amber-500":r});function va(s,l){if(1&s&&(e.j41(0,"div",54)(1,"div",55),e.EFF(2),e.k0s(),e.j41(3,"div",56),e.EFF(4),e.nI1(5,"date"),e.k0s(),e.j41(6,"div",57),e.EFF(7),e.k0s(),e.j41(8,"div",34),e.EFF(9),e.k0s(),e.j41(10,"div",58),e.EFF(11),e.nI1(12,"number"),e.k0s(),e.j41(13,"div",34),e.EFF(14),e.nI1(15,"uppercase"),e.k0s(),e.j41(16,"div",59)(17,"span",60),e.EFF(18),e.nI1(19,"uppercase"),e.k0s()(),e.j41(20,"div",61),e.DNE(21,ha,1,0,"mat-icon",62)(22,fa,6,3)(23,ga,1,2,"mat-spinner",63),e.k0s()(),e.j41(24,"div",31),e.DNE(25,ya,1,4,"ng-container"),e.k0s()),2&s){const t=l.$implicit,n=l.$index,i=e.XpG(2);e.R7$(2),e.SpI(" ",t.no," "),e.R7$(2),e.SpI(" ",e.i5U(5,12,t.createdAt,"dd/MM/YY hh:mm a")," "),e.R7$(3),e.SpI(" ",null==t||null==t.location?null:t.location.name," "),e.R7$(2),e.SpI(" ",null==t||null==t.currency?null:t.currency.iso," "),e.R7$(2),e.SpI(" ",e.i5U(12,15,t.total,"1.2-2")," "),e.R7$(3),e.SpI(" ",e.bMT(15,18,t.paymentMethod.name)," "),e.R7$(3),e.Y8G("ngClass",e.sGs(22,Ca,"parcial"===t.paymentStatus,"pagada"===t.paymentStatus,"pendiente"===t.paymentStatus,"devuelto"===t.paymentStatus,"devueltoParcial"===t.paymentStatus,"cancelada"===t.status,"dPendiente"===t.paymentStatus)),e.R7$(),e.SpI(" ",e.bMT(19,20,"cancelada"!==t.status?"devueltoParcial"===t.paymentStatus?"devuelto":t.paymentStatus:t.status)," "),e.R7$(3),e.vxM(21,t.isPromotion?21:-1),e.R7$(),e.vxM(22,t.isPromotion?-1:22),e.R7$(),e.vxM(23,i.isMarkAsPayedLoading&&i.selectedSlide===n?23:-1),e.R7$(2),e.vxM(25,(null==i.selectedSale?null:i.selectedSale.id)===t.id?25:-1)}}function Fa(s,l){if(1&s&&e.Z7z(0,va,26,30,null,null,e.BUC().trackByFn),2&s){const t=e.XpG();e.Dyx(t.sales)}}function xa(s,l){1&s&&(e.j41(0,"div",73),e.EFF(1," \xa1No se ha encontrado ninguna venta! "),e.k0s())}function ka(s,l){if(1&s&&(e.j41(0,"div",78)(1,"div",34),e.EFF(2),e.nI1(3,"uppercase"),e.k0s(),e.j41(4,"div",34),e.EFF(5),e.k0s(),e.j41(6,"div",34),e.EFF(7),e.nI1(8,"date"),e.k0s(),e.j41(9,"div",34),e.EFF(10),e.nI1(11,"uppercase"),e.k0s(),e.j41(12,"div",77),e.EFF(13),e.k0s()()),2&s){const t=l.$implicit;e.R7$(2),e.SpI(" ",e.bMT(3,5,t.paymentStatus)," "),e.R7$(3),e.SpI(" ",t.amount," "),e.R7$(2),e.SpI(" ",e.i5U(8,7,t.statusChangeAt,"dd/MM/yyyy HH:mm")," "),e.R7$(3),e.SpI(" ",e.bMT(11,10,t.type)," "),e.R7$(3),e.SpI(" ",t.description," ")}}function Ia(s,l){if(1&s&&(e.j41(0,"div",74)(1,"div",75)(2,"div",34),e.EFF(3," Estado "),e.k0s(),e.j41(4,"div",34),e.EFF(5," Monto "),e.k0s(),e.j41(6,"div",34),e.EFF(7," Fecha "),e.k0s(),e.j41(8,"div",76),e.EFF(9," T.Devoluci\xf3n "),e.k0s(),e.j41(10,"div",77),e.EFF(11," Descripci\xf3n "),e.k0s()(),e.Z7z(12,ka,14,12,"div",79,e.fX1),e.k0s()),2&s){const t=e.XpG();e.R7$(12),e.Dyx(t.paymentStatusData)}}const Sa=s=>({"pointer-events-none":s}),Ra=()=>[10,25,50,100];function $a(s,l){if(1&s&&e.nrm(0,"mat-paginator",80),2&s){const t=e.XpG();e.Y8G("ngClass",e.eq3(6,Sa,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.lJ4(8,Ra))("showFirstLastButtons",!0)}}const ja=()=>["Cajero"],Ea=s=>({"mr-4":s});let Da=(()=>{class s{constructor(){this.isMarkAsPayedLoading=!1,this.currencies$=(0,B.of)([]),this.maxDate=new Date,this.merchant=null,this.posSettings=null,this.paymentMethods$=(0,B.of)([]),this.merchantControl=new a.hs(""),this.paymentStatusData=[],this.range=new a.gE({start:new a.MJ({disabled:!1,value:null},[U.t.futureDateValidator()]),end:new a.MJ({disabled:!1,value:null},[U.t.futureDateValidator()])}),this.searchLocationsControl=new a.MJ(null),this.filterInputControl=new a.MJ,this.searchInputControl=new a.MJ(null),this.selectedSale=null,this.selectedSlide=null,this.user=null,this.selectedLocation=null,this.selectedCurrenciesId=[],this.selectedPaymentMethodsId=[],this._changeDetectorRef=(0,e.WQX)(e.gRc),this._dialog=(0,e.WQX)(j.bZ),this._documentsService=(0,e.WQX)(Ce.Q),this._fileSaverService=(0,e.WQX)(Ve.f),this._locationsService=(0,e.WQX)(It.O),this._printerService=(0,e.WQX)(na.k),this._salesService=(0,e.WQX)(we.w),this._snackBar=(0,e.WQX)(O.UG),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.store.select(le.SW).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.paymentMethods$=this.store.select(Qe.xi),this.currencies$=this.store.select(ce.y$),this.store.select(oe.Xb).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(qo).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.sales=t,this._changeDetectorRef.markForCheck()}),this.store.select(pe.D).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(300),(0,L.Z)(null),(0,E.n)(t=>null!==t?(this.isLoading=!0,this._salesService.getSales(0,50,"createdAt","desc",t,this.selectedLocation?.id,this.selectedCurrenciesId,this.selectedPaymentMethodsId,this.range.get("start").value,this.range.get("end").value)):(0,B.of)()),(0,N.T)(()=>{this.isLoading=!1})).subscribe(),this.range.get("end").valueChanges.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this._salesService.getSales(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.selectedPaymentMethodsId,this.range.get("start").value,t).pipe((0,g.Q)(this._unsubscribeAll)).subscribe()}),this.filterInputControl.valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(300),(0,E.n)(t=>(this.isLoading=!0,this._salesService.getSales(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.selectedPaymentMethodsId,this.range.get("start").value,this.range.get("end").value))),(0,N.T)(()=>{this.isLoading=!1})).subscribe(),this.store.select(oa.J0).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{t&&(this.posSettings=t.getObjectType(),this._changeDetectorRef.markForCheck())})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,me.h)(this._sort.sortChange,this._paginator.page).pipe((0,E.n)(()=>(this.isLoading=!0,this._salesService.getSales(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.selectedPaymentMethodsId,this.range.get("start").value,this.range.get("end").value))),(0,N.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}resetLocation(){this.selectedLocation=null,this.searchInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addLocation(t){this.selectedLocation=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCurrencies(t){this.selectedCurrenciesId=t.map(n=>n.id),this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addPaymentMethod(t){this.selectedPaymentMethodsId=t.map(n=>n.id),this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}exportIPVProductos(){this._salesService.getSales(0,1e4,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{let n=structuredClone(t.data.findSales.sales);n.forEach(r=>{const c=r.returns.map(p=>p.products).flat(),d=r.returns.map(p=>p.receipts).flat();for(const p of r.products){const m=c.find(u=>u.productId===p.productId);m&&(r.total-=m.quantity*p.price,p.quantity-=m.quantity)}for(const p of r.receipts){const m=d.find(u=>u.productId===p.productId);m&&(r.total-=m.quantity*p.price,p.quantity-=m.quantity)}}),n=n.filter(r=>"cancelada"!==r.status&&!r.isPromotion);const i=n.reduce((r,c)=>(c.products.forEach(d=>{const p=r.find(m=>m.productId===d.productId);p?p.quantity+=d.quantity:r.push({productId:d.productId,quantity:d.quantity,price:d.price,productName:d.product?.name,locationName:c.location.name,saleUser:c.user})}),c.receipts.forEach(d=>{const p=r.find(m=>m.productId===d.productId);p?p.quantity+=d.quantity:r.push({productId:d.productId,quantity:d.quantity,price:d.price,productName:d.receipt?.name,saleUser:c.user,locationName:c.location.name})}),r),[]);i.forEach(r=>{const c=n.map(p=>p.products).flat().filter(p=>p.productId===r.productId),d=c.reduce((p,m)=>p+m.quantity,0);if(d>0){const p=c.reduce((m,u)=>m+u.price*u.quantity,0)/d;r.price=p}});const o=i.filter(r=>r.quantity*r.price>0).map(r=>({Producto:r?.productName,Cantidad:r.quantity,"Precio Promedio":r.price,Total:r.price*r.quantity,"Unidad Comercial":r.locationName,Cajero:r.saleUser.fullname}));this._fileSaverService.exportAsExcelFile(o,`IPV_${x(this.range.get("end").value).format("YYYYMMDD")}`,[["Producto","Cantidad","Precio Promedio","Total","Unidad Comercial","Cajero"]],[{wch:30},{wch:10},{wch:15},{wch:15},{wch:30},{wch:25}])})}exportIPVVentas(){this._salesService.getSales(0,1e4,"no","asc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{let n=structuredClone(t.data.findSales.sales);n.forEach(o=>{const r=o.returns.map(d=>d.products).flat(),c=o.returns.map(d=>d.receipts).flat();for(const d of o.products){const p=r.find(m=>m.productId===d.productId);p&&(o.total-=p.quantity*d.price,d.quantity-=p.quantity)}for(const d of o.receipts){const p=c.find(m=>m.productId===d.productId);p&&(o.total-=p.quantity*d.price,d.quantity-=p.quantity)}}),n=n.filter(o=>"cancelada"!==o.status&&!o.isPromotion);const i=n.filter(o=>o.total>0).map(o=>({Fecha:x(o.createdAt).format("DD/MM/YYYY HH:mm:ss"),No:o.no,Importe:o.total,Pago:o.paymentMethod.name,"Unidad Comercial":o.location.name,Cajero:o.user.fullname}));this._fileSaverService.exportAsExcelFile(i,`IPV_${x(this.range.get("end").value).format("YYYYMMDD")}`,[["Fecha","No","Importe","Pago","Unidad Comercial","Cajero"]],[{wch:20},{wch:20},{wch:10},{wch:15},{wch:30},{wch:25}])})}generateTicketDocument(t){var n=this;return(0,Ct.A)(function*(){n._documentsService.generateTicketDocument(t,n.merchant,n.user)})()}generateIpvProducts(){this._salesService.getSales(0,1e4,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{let n=structuredClone(t.data.findSales.sales),i=0;n.forEach(u=>{const h=u.returns.map(y=>y.products).flat(),b=u.returns.map(y=>y.receipts).flat();for(const y of u.products){const C=h.find(P=>P.productId===y.productId);C&&(u.total-=C.quantity*y.price,i+=C.quantity*y.price,y.quantity-=C.quantity)}for(const y of u.receipts){const C=b.find(P=>P.productId===y.productId);C&&(u.total-=C.quantity*y.price,i+=C.quantity*y.price,y.quantity-=C.quantity)}}),n=n.filter(u=>"cancelada"!==u.status&&!u.isPromotion);const o=n.reduce((u,h)=>(h.products.forEach(b=>{const y=u.find(C=>C.productId===b.productId);y?y.quantity+=b.quantity:u.push({productId:b.productId,quantity:b.quantity,price:b.price,productName:b.product?.name,saleUser:h.user})}),h.receipts.forEach(b=>{const y=u.find(C=>C.productId===b.productId);y?y.quantity+=b.quantity:u.push({productId:b.productId,quantity:b.quantity,price:b.price,productName:b.receipt?.name,saleUser:h.user})}),u),[]);o.forEach(u=>{const h=n.map(y=>y.products).flat().filter(y=>y.productId===u.productId),b=h.reduce((y,C)=>y+C.quantity,0);if(b>0){const y=h.reduce((C,P)=>C+P.price*P.quantity,0)/b;u.price=y}});let r=n.map(u=>u.location).flat().filter((u,h,b)=>b.findIndex(y=>y.id===u.id)===h);r.length>1&&(r=r.map(u=>{const y=n.map(C=>C.terminal).flat().filter((C,P,se)=>se.findIndex(Z=>Z.id===C.id)===P).find(C=>C.locationId===u.id).no.slice(-2);return u.name=`${u.name} (No\xb0T${y})`,u}));const c=n.filter(u=>"28b4562a-5d43-4246-92dc-c075e2b1d88c"===u.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===u.paymentMethod.id).reduce((u,h)=>u+(h.cashPaid-h.change),0)-i,d=n.filter(u=>"ea192625-2566-443b-b7cb-a011d10f08de"===u.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===u.paymentMethod.id).reduce((u,h)=>u+h.cardPaid,0),p=o.filter(u=>u.quantity*u.price>0).map(u=>({Producto:u?.productName,Cantidad:u.quantity,Precio:u.price,Cajero:u.saleUser.fullname})),m={start:this.range.get("start").value,end:this.range.get("end").value};this._documentsService.generateIpvProducts(p,m,this.merchant,r,this.user,c,d)})}generateIpvVentas(){this._salesService.getSales(0,1e4,"no","asc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{let n=structuredClone(t.data.findSales.sales),i=0;n.forEach(m=>{const u=m.returns.map(b=>b.products).flat(),h=m.returns.map(b=>b.receipts).flat();for(const b of m.products){const y=u.find(C=>C.productId===b.productId);console.log(y),y&&(m.total-=y.quantity*b.price,i+=y.quantity*b.price,b.quantity-=y.quantity)}for(const b of m.receipts){const y=h.find(C=>C.productId===b.productId);y&&(m.total-=y.quantity*b.price,i+=y.quantity*b.price,b.quantity-=y.quantity)}}),n=n.filter(m=>"cancelada"!==m.status&&!m.isPromotion);let o=n.map(m=>m.location).flat().filter((m,u,h)=>h.findIndex(b=>b.id===m.id)===u);o.length>1&&(o=o.map(m=>{const b=n.map(y=>y.terminal).flat().filter((y,C,P)=>P.findIndex(se=>se.id===y.id)===C).find(y=>y.locationId===m.id).no.slice(-2);return m.name=`${m.name} (No\xb0T${b})`,m}));const r=n.filter(m=>"28b4562a-5d43-4246-92dc-c075e2b1d88c"===m.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===m.paymentMethod.id).reduce((m,u)=>m+(u.cashPaid-u.change),0)-i,c=n.filter(m=>"ea192625-2566-443b-b7cb-a011d10f08de"===m.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===m.paymentMethod.id).reduce((m,u)=>m+u.cardPaid,0),d=n.filter(m=>m.total>0).map(m=>({Fecha:x(m.createdAt).format("DD/MM/YYYY hh:mm a"),No:m.no,Monto:m.total,Pago:m.paymentMethod.name,Cajero:m.user.fullname})),p={start:this.range.get("start").value,end:this.range.get("end").value};this._documentsService.generateIpvVentas(d,p,this.merchant,o,this.user,r,c)})}printTicket(t){let n=structuredClone(t);n.products=[...n.products,...n.receipts.map(i=>({...i,product:{name:i.receipt.name,uom:i.receipt.uom}}))],this._printerService.printSaleTicket(n,this.posSettings?.ticketFooter).pipe((0,g.Q)(this._unsubscribeAll)).subscribe()}return(t){this._dialog.open(Ko,{data:t,panelClass:"ath-reject-dialog-panel",maxWidth:"600px"})}cancelSale(t){this._dialog.open(sa,{data:{title:"Cancelar venta",message:"\xbfEst\xe1 seguro que desea cancelar la venta?"},panelClass:"ath-dialog-panel",maxWidth:"600px"}).afterClosed().pipe((0,g.Q)(this._unsubscribeAll)).subscribe(i=>{M.H.IsNullOrEmpty(i.reason)||this._salesService.cancelSale(t.id,i.reason).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:o})=>{o&&this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.cancelSale.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})})})}trackByFn(t,n){return n.id||t}closeDetails(){this.selectedSale=null,this.paymentStatusData=[],this._changeDetectorRef.markForCheck()}displayFn(t){return(t&&t.name?t.name:"").trim()}existTableFilter(){return this.currencyFilter?.hasFilter||this.locationFilter?.hasFilter||this.paymentMethodDateFilter?.hasFilter}clearTableFilters(){this.currencyFilter?.hasFilter&&this.currencyFilter.clearFilter(),this.locationFilter?.hasFilter&&this.locationFilter.clearFilter(),this.paymentMethodDateFilter?.hasFilter&&this.paymentMethodDateFilter.clearFilter()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-sales"]],viewQuery:function(n,i){if(1&n&&(e.GBs(V.iy,5),e.GBs(A.B4,5),e.GBs(aa,5),e.GBs(ra,5),e.GBs(la,5)),2&n){let o;e.mGM(o=e.lsd())&&(i._paginator=o.first),e.mGM(o=e.lsd())&&(i._sort=o.first),e.mGM(o=e.lsd())&&(i.locationFilter=o.first),e.mGM(o=e.lsd())&&(i.currencyFilter=o.first),e.mGM(o=e.lsd())&&(i.paymentMethodDateFilter=o.first)}},standalone:!0,features:[e.aNF],decls:89,vars:43,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],["routerLink","/dashboard",1,"ml-1","text-primary-500","hover:underline"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"flex","flex-wrap","items-center","w-full","gap-2","mt-6","right-8","shrink-0","lg:mt-0","lg:ml-4","lg:w-auto","sm:w-1/2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"sm:mx-4","min-w-64","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matPrefix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"disabled","matMenuTriggerFor"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],["xPosition","before"],["reportsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","flex-col","flex-auto"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","sales-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-card"],[1,"text-center",3,"mat-sort-header"],[1,"text-center"],[1,"flex","items-center","justify-start"],["matTooltip","Unidad Comercial"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange",4,"ngxPermissionsExcept"],[1,"flex","items-center","justify-center"],[3,"mat-sort-header"],[3,"filterType","entityPropertyName","useUpperCase","data","dataChange"],["currencyFilter",""],[1,"flex","justify-end",3,"mat-sort-header"],["matTooltip","M\xe9todo de pago"],["paymentMethodFilter",""],[1,"flex","items-center","justify-center",3,"ngClass"],["color","warn","class","w-6 h-6 min-h-6 min-w-6","mat-icon-button","","matTooltip","Limpiar filtros"],["rowPaymentStatusDataTemplate",""],["class","border-b first-letter:z-10 sm:inset-x-0 sm:sticky sm:bottom-0 sm:border-t sm:border-b-0 bg-gray-50 dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange"],["locationFilter",""],["color","warn","mat-icon-button","","matTooltip","Limpiar filtros",1,"w-6","h-6","min-h-6","min-w-6",3,"click"],[1,"material-icons","icon-size-4"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","sales-grid","md:px-8"],[1,"truncate"],[1,"text-center","truncate"],[1,"text-start","truncate"],[1,"text-right"],[1,"flex","justify-center"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold","uppercase",3,"ngClass"],[1,"flex","flex-row","justify-center","gap-2"],["class","icon-size-7","svgIcon","mat_solid:redeem","matTooltip","Venta por promoci\xf3n"],["class","self-center ml-2",3,"diameter","color"],["svgIcon","mat_solid:redeem","matTooltip","Venta por promoci\xf3n",1,"icon-size-7"],["matTooltip","Hacer devoluci\xf3n","mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["svgIcon","mat_solid:undo",1,"icon-size-5"],["matTooltip","Cancelar venta","mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["svgIcon","mat_solid:cancel",1,"icon-size-5"],["mat-stroked-button","","matTooltip","Imprimir Ticket",1,"hidden","px-2","leading-6","sm:flex","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"self-center","ml-2",3,"diameter","color"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","flex-col","w-full","overflow-hidden","border-b"],[1,"z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","subscription-sales-status-detail-table","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],["matTooltip","Tipo de devoluci\xf3n",1,"text-center"],[1,"text-left"],[1,"grid","items-center","w-full","gap-4","px-6","py-3","border-b","subscription-sales-status-detail-table","md:px-8"],["class","grid items-center w-full gap-4 px-6 py-3 border-b subscription-sales-status-detail-table md:px-8"],[1,"border-b","first-letter:z-10","sm:inset-x-0","sm:sticky","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e.EFF(7,"Inicio"),e.k0s()(),e.j41(8,"div",4),e.nrm(9,"mat-icon",6),e.j41(10,"a",7),e.EFF(11,"Ventas"),e.k0s()(),e.j41(12,"div",4),e.nrm(13,"mat-icon",6),e.j41(14,"a",7),e.EFF(15,"Registro de Ventas"),e.k0s()()(),e.j41(16,"div",8)(17,"a",9),e.nrm(18,"mat-icon",6),e.j41(19,"span",10),e.EFF(20,"Regresar"),e.k0s()()()()(),e.j41(21,"div",11)(22,"mat-form-field",12),e.nrm(23,"mat-icon",13)(24,"input",14),e.k0s(),e.j41(25,"mat-form-field",15)(26,"mat-date-range-input",16),e.nrm(27,"input",17)(28,"input",18),e.k0s(),e.nrm(29,"mat-datepicker-toggle",19)(30,"mat-date-range-picker",20,21),e.DNE(32,ca,1,0,"mat-icon",22)(33,da,2,0,"mat-error")(34,ua,2,0,"mat-error"),e.k0s(),e.j41(35,"div",23)(36,"button",24),e.nrm(37,"mat-icon",25),e.j41(38,"span",26),e.EFF(39,"Reportes"),e.k0s()(),e.j41(40,"mat-menu",27,28)(42,"button",29),e.bIt("click",function(){return i.exportIPVProductos()}),e.EFF(43,"Exportar Productos Vendidos"),e.k0s(),e.j41(44,"button",29),e.bIt("click",function(){return i.exportIPVVentas()}),e.EFF(45,"Exportar Ventas"),e.k0s(),e.j41(46,"button",29),e.bIt("click",function(){return i.generateIpvProducts()}),e.EFF(47,"Productos Vendidos"),e.k0s(),e.j41(48,"button",29),e.bIt("click",function(){return i.generateIpvVentas()}),e.EFF(49,"Reporte de Ventas"),e.k0s()()()()(),e.j41(50,"div",30)(51,"div",30),e.qex(52),e.j41(53,"div",31)(54,"div",32)(55,"div",33),e.EFF(56," No "),e.k0s(),e.j41(57,"div",34),e.EFF(58," Fecha "),e.k0s(),e.j41(59,"div",35)(60,"span",36),e.EFF(61,"Unidad Comercial"),e.k0s(),e.DNE(62,ma,2,3,"table-filter",37),e.k0s(),e.j41(63,"div",38)(64,"span",39),e.EFF(65,"Moneda"),e.k0s(),e.j41(66,"table-filter",40,41),e.bIt("dataChange",function(r){return i.addCurrencies(r)}),e.nI1(68,"async"),e.k0s()(),e.j41(69,"div",42)(70,"span"),e.EFF(71," Importe"),e.k0s()(),e.j41(72,"div",38)(73,"span",43),e.EFF(74,"M\xe9todo de pago"),e.k0s(),e.j41(75,"table-filter",40,44),e.bIt("dataChange",function(r){return i.addPaymentMethod(r)}),e.nI1(77,"async"),e.k0s()(),e.j41(78,"div",34),e.EFF(79," Estado "),e.k0s(),e.j41(80,"div",45)(81,"span"),e.EFF(82,"Acciones"),e.k0s(),e.DNE(83,pa,3,0,"button",46),e.k0s()(),e.DNE(84,Fa,2,0)(85,xa,2,0),e.k0s(),e.bVm(),e.DNE(86,Ia,14,0,"ng-template",null,47,e.C5r),e.k0s(),e.DNE(88,$a,1,9,"mat-paginator",48),e.k0s()()),2&n){const o=e.sdS(31),r=e.sdS(41);e.R7$(9),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("routerLink","./.."),e.R7$(),e.Y8G("svgIcon","mat_solid:chevron_left"),e.R7$(4),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("formGroup",i.range)("rangePicker",o)("max",i.maxDate),e.R7$(3),e.Y8G("for",o),e.R7$(3),e.vxM(32,i.range.get("start").value||i.range.get("end").value?32:-1),e.R7$(),e.vxM(33,i.range.controls.start.hasError("matStartDateInvalid")?33:-1),e.R7$(),e.vxM(34,i.range.controls.end.hasError("matEndDateInvalid")?34:-1),e.R7$(2),e.Y8G("disabled",!i.range.get("start").value||!i.range.get("end").value||i.range.invalid)("matMenuTriggerFor",r),e.R7$(),e.Y8G("svgIcon","mat_solid:plagiarism"),e.R7$(18),e.Y8G("mat-sort-header","no"),e.R7$(7),e.Y8G("ngxPermissionsExcept",e.lJ4(40,ja)),e.R7$(2),e.Y8G("mat-sort-header","currencyId"),e.R7$(2),e.Y8G("filterType","multiSelectEntity")("entityPropertyName","iso")("useUpperCase",!0)("data",e.bMT(68,36,i.currencies$)),e.R7$(3),e.Y8G("mat-sort-header","total"),e.R7$(6),e.Y8G("filterType","multiSelectEntity")("entityPropertyName","name")("useUpperCase",!1)("data",e.bMT(77,38,i.paymentMethods$)),e.R7$(5),e.Y8G("ngClass",e.eq3(41,Ea,i.existTableFilter())),e.R7$(3),e.vxM(83,i.existTableFilter()?83:-1),e.R7$(),e.vxM(84,i.sales.length>0?84:85),e.R7$(4),e.vxM(88,i.sales.length>0?88:-1)}},dependencies:[v.Jj,v.vh,v.QX,be.p,I.Hl,I.$z,I.iY,k.X6,k.bU,k.el,k.xR,k.IG,k.SG,_.RG,_.rl,_.TL,_.JW,_.yw,R.m_,R.An,S.fS,S.fg,w.Cn,w.kk,w.fb,w.Cp,V.Ou,V.iy,K.D6,K.LG,A.NQ,A.B4,A.aE,J.uc,J.oV,v.YU,Rt.Ov,Rt.f6,a.X1,a.me,a.BC,a.cb,a.l_,a.j4,a.JD,H.Wk,Je.i,v.Pc],encapsulation:2,data:{animation:We.X},changeDetection:0})}return s})();const $t=s=>s.offers,Me=((0,$.Mz)($t,s=>s.offer),(0,$.Mz)($t,s=>s.offers));var xe=f(67797);let jt=(()=>{class s{constructor(t,n){this.apolloProvider=t,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}getOffers(t=1,n=50,i="no",o="desc",r=""){return this._apollo.query({query:Fi,errorPolicy:"all",variables:{offset:n*(t-1),limit:n,sort:i,order:o,search:r}}).pipe((0,T.M)(({data:c})=>{this.store.dispatch((0,xe.qw)({offers:c.findAllOffers.offers})),this.store.dispatch((0,Fe.Bp)({pagination:c.findAllOffers.pagination}))}))}findOfferById(t){return this._apollo.query({query:xi,variables:{findOfferByIdId:t},errorPolicy:"all"}).pipe((0,T.M)(({data:n})=>{this.store.dispatch((0,xe.rU)({offer:n.findOfferById.offer}))}))}updateOffer(t){return this.store.select(Me).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:Ci,variables:{updateOfferInput:t},errorPolicy:"all"}).pipe((0,T.M)(({data:i})=>{const o=(0,De.A)(n);o[n.findIndex(c=>c.id===t.id)]=i.updateOffer.offer,this.store.dispatch((0,xe.qw)({offers:o}))}))))}updateOfferStatus(t,n){return this.store.select(Me).pipe((0,q.s)(1),(0,E.n)(i=>this._apollo.mutate({mutation:ki,variables:{updateOfferStatusInput:{id:t,status:n}},errorPolicy:"all"}).pipe((0,T.M)(({data:o})=>{const r=structuredClone(i);r[i.findIndex(d=>d.id===t)]=o.updateOfferStatus.offer,this.store.dispatch((0,xe.qw)({offers:r}))}))))}removeOffer(t){return this.store.select(Me).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:vi,variables:{removeOfferId:t},errorPolicy:"all"}).pipe((0,T.M)(()=>{const i=(0,De.A)(n),o=n.findIndex(r=>r.id===t);i.splice(o,1),this.store.dispatch((0,xe.qw)({offers:i}))}))))}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(F.Ic),e.KVO($.il))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();const Ta=(s,l)=>l.id;function Ba(s,l){1&s&&e.nrm(0,"mat-icon",32),2&s&&e.Y8G("svgIcon","mat_solid:done")}function Aa(s,l){1&s&&e.nrm(0,"mat-icon",32),2&s&&e.Y8G("svgIcon","mat_solid:done")}function wa(s,l){1&s&&e.nrm(0,"mat-icon",32),2&s&&e.Y8G("svgIcon","mat_solid:done")}const Ga=(s,l,t,n)=>({"bg-amber-50 text-amber-700":s,"text-red-700 bg-red-50":l,"text-orange-700 bg-orange-50":t,"text-green-700 bg-green-50":n});function Pa(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",26)(1,"div",27),e.EFF(2),e.k0s(),e.j41(3,"div",23),e.EFF(4),e.k0s(),e.j41(5,"div",24),e.EFF(6),e.k0s(),e.j41(7,"div",27),e.EFF(8),e.nI1(9,"number"),e.k0s(),e.j41(10,"div",28)(11,"span",29),e.EFF(12),e.nI1(13,"uppercase"),e.k0s()(),e.j41(14,"div",30)(15,"button",31),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(2);return e.Njj(r.generateOfferDocument(o))}),e.nrm(16,"mat-icon",32),e.k0s(),e.j41(17,"button",33),e.nrm(18,"mat-icon",16),e.k0s(),e.j41(19,"mat-menu",null,34)(21,"div",35),e.EFF(22," Actualizar Estado "),e.k0s(),e.j41(23,"button",36),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(2);return e.Njj(r.updateStatus(o.id,"aprobada"))}),e.j41(24,"div",37),e.DNE(25,Ba,1,1,"mat-icon",38),e.k0s(),e.j41(26,"span",39),e.EFF(27,"Aprobada"),e.k0s()(),e.j41(28,"button",36),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(2);return e.Njj(r.updateStatus(o.id,"rechazada"))}),e.j41(29,"div",37),e.DNE(30,Aa,1,1,"mat-icon",38),e.k0s(),e.j41(31,"span",39),e.EFF(32,"Rechazada"),e.k0s()(),e.j41(33,"button",36),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(2);return e.Njj(r.updateStatus(o.id,"cancelada"))}),e.j41(34,"div",37),e.DNE(35,wa,1,1,"mat-icon",38),e.k0s(),e.j41(36,"span",39),e.EFF(37,"Cancelada"),e.k0s()()(),e.j41(38,"button",40),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(2);return e.Njj(r.removeOffer(o.id))}),e.nrm(39,"mat-icon",32),e.k0s()()()}if(2&s){const t=l.$implicit,n=e.sdS(20);e.R7$(2),e.SpI(" ",t.no," "),e.R7$(2),e.SpI(" ",t.customer.name," "),e.R7$(2),e.SpI(" ",t.currency.iso," "),e.R7$(2),e.SpI(" ",e.i5U(9,16,t.total,"1.2-2")," "),e.R7$(2),e.Y8G("ngClass",e.ziG(21,Ga,"nueva"===t.status,"cancelada"===t.status,"rechazada"===t.status,"aprobada"===t.status)),e.R7$(2),e.SpI(" ",e.bMT(13,19,t.status)," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:description"),e.R7$(),e.Y8G("matMenuTriggerFor",n),e.R7$(),e.Y8G("svgIcon","mat_solid:update"),e.R7$(5),e.Y8G("disabled",t.status.includes("aprobada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.R7$(2),e.vxM(25,t.status.includes("aprobada")?25:-1),e.R7$(3),e.Y8G("disabled",t.status.includes("aprobada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.R7$(2),e.vxM(30,t.status.includes("aprobada")?30:-1),e.R7$(3),e.Y8G("disabled",t.status.includes("aprobada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.R7$(2),e.vxM(35,t.status.includes("aprobada")?35:-1),e.R7$(4),e.Y8G("svgIcon","mat_solid:delete")}}const Ma=s=>({"pointer-events-none":s}),Na=()=>[5,10,25,100];function Ya(s,l){if(1&s&&(e.j41(0,"div",20)(1,"div",21)(2,"div",22),e.EFF(3," N\xfamero "),e.k0s(),e.j41(4,"div",23),e.EFF(5," Cliente "),e.k0s(),e.j41(6,"div",24),e.EFF(7," Moneda "),e.k0s(),e.j41(8,"div",22),e.EFF(9," Importe "),e.k0s(),e.j41(10,"div",24),e.EFF(11," Estado "),e.k0s(),e.j41(12,"div",24),e.EFF(13," Acciones "),e.k0s()(),e.Z7z(14,Pa,40,26,"div",41,Ta),e.k0s(),e.nrm(16,"mat-paginator",25)),2&s){const t=e.XpG();e.R7$(2),e.Y8G("mat-sort-header","no"),e.R7$(6),e.Y8G("mat-sort-header","total"),e.R7$(6),e.Dyx(t.offers),e.R7$(2),e.Y8G("ngClass",e.eq3(8,Ma,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.lJ4(10,Na))("showFirstLastButtons",!0)}}function Va(s,l){1&s&&(e.j41(0,"div",42),e.EFF(1," \xa1No se ha registrado ninguna oferta! "),e.k0s())}const qa=()=>["/modules/sales/bid"];let za=(()=>{class s{constructor(){this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.offers=[],this.searchInputControl=new a.MJ,this.selectedSlide=null,this.user=null,this._changeDetectorRef=(0,e.WQX)(e.gRc),this._documentsService=(0,e.WQX)(Ce.Q),this._fuseConfirmationService=(0,e.WQX)(ae.G),this._offersService=(0,e.WQX)(jt),this._snackBar=(0,e.WQX)(O.UG),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.store.select(le.SW).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(oe.Xb).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(Me).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.offers=t,this._changeDetectorRef.markForCheck()}),this.store.select(pe.D).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(300),(0,E.n)(t=>(this.isLoading=!0,this._offersService.getOffers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,N.T)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,me.h)(this._sort.sortChange,this._paginator.page).pipe((0,E.n)(()=>(this.isLoading=!0,this._offersService.getOffers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,N.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}updateStatus(t,n){this._fuseConfirmationService.open({title:"Actualizar Estado de la Factura",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(o=>{"confirmed"===o&&this._offersService.updateOfferStatus(t,n).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:r})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.updateOfferStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}removeOffer(t){this._fuseConfirmationService.open({title:"Eliminar oferta",message:"\xbfEst\xe1s seguro de que deseas eliminar esta oferta?",actions:{confirm:{label:"S\xed",color:"warn"},cancel:{label:"No"}}}).afterClosed().subscribe(i=>{i&&this._offersService.removeOffer(t).subscribe(({data:o})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:3e3,data:{message:o.removeOffer.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})})})}generateOfferDocument(t){this._documentsService.generateOfferDocument(t,Te.oferta,this.merchant,this.user)}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-offers"]],viewQuery:function(n,i){if(1&n&&(e.GBs(V.iy,5),e.GBs(A.B4,5)),2&n){let o;e.mGM(o=e.lsd())&&(i._paginator=o.first),e.mGM(o=e.lsd())&&(i._sort=o.first)}},standalone:!0,features:[e.aNF],decls:31,vars:11,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","offers-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hiddem","sm:block",3,"mat-sort-header"],[1,"hiddem","sm:block"],[1,"text-center","hiddem","sm:block"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","offers-grid","md:px-8"],[1,"font-mono","hiddem","sm:block"],[1,"flex","items-center","justify-center","mr-4","text-center","truncate","delay-100","rounded-full","h-7","lock","dark:bg-white","dark:bg-opacity-5",3,"ngClass"],[1,"w-full","px-2","text-sm","font-medium","text-center"],[1,"flex","flex-row","justify-center","gap-2"],["mat-stroked-button","","matTooltip","Ver oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","aria-label","Menu de estados","matTooltip","Actualizar Estado",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"matMenuTriggerFor"],["listStatusMenu","matMenu"],[1,"w-full","p-2","text-lg","font-semibold","text-center","text-secondary"],["mat-menu-item","",1,"grid","w-full","grid-cols-4",3,"disabled","click"],[1,"col-span-1"],["class","icon-size-5",3,"svgIcon"],[1,"col-span-3","text-center"],["mat-stroked-button","","matTooltip","Descargar oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["class","grid items-center gap-4 px-6 py-3 border-b offers-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Ventas"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",7),e.EFF(14,"Ofertas"),e.k0s()()(),e.j41(15,"div",8)(16,"h2",9),e.EFF(17," Ofertas "),e.k0s()()(),e.j41(18,"div",10)(19,"mat-form-field",11),e.nrm(20,"mat-icon",12)(21,"input",13),e.k0s(),e.nrm(22,"div",14),e.j41(23,"button",15),e.nrm(24,"mat-icon",16),e.j41(25,"span",17),e.EFF(26,"Crear oferta"),e.k0s()()()(),e.j41(27,"div",18)(28,"div",19),e.DNE(29,Ya,17,11)(30,Va,2,0),e.k0s()()()),2&n&&(e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(7),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.R7$(2),e.Y8G("routerLink",e.lJ4(10,qa)),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(5),e.vxM(29,i.offers.length>0?29:30))},dependencies:[v.QX,I.Hl,I.$z,_.RG,_.rl,_.JW,R.m_,R.An,S.fS,S.fg,V.Ou,V.iy,A.NQ,A.B4,A.aE,w.Cn,w.kk,w.fb,w.Cp,v.YU,a.X1,a.me,a.BC,a.l_,H.Wk,v.Pc],styles:[".offers-grid{grid-template-columns:150px auto 150px 150px 150px 150px}\n"],encapsulation:2,changeDetection:0})}return s})();const La=F.J1`
    query FindAllPrebills(
        $page: Int,
        $size: Int,
        $sort: String,
        $order: Order,
        $search: String,
        $customerId: String,
        $currenciesId: [String!],
        $status: [PrebillStatus!],
        $paymentStatus: [PaymentStatus!],
        $billDate: DateTime,
        $startDate: DateTime,
        $endDate: DateTime
    ) {
        findAllPrebills(
            page: $page,
            size: $size,
            sort: $sort,
            order: $order,
            search: $search,
            customerId: $customerId,
            currenciesId: $currenciesId,
            status: $status,
            paymentStatus: $paymentStatus,
            billDate: $billDate,
            startDate: $startDate,
            endDate: $endDate
        ) {
            ok
            message

            pagination {
                length
                size
                page
                lastPage
                startIndex
                endIndex
            }

            prebills {
                id
                no
                createdAt
                currencyId
                isDispatched
                currency {
                    iso
                    namev
                }
                currenciesPercents {
                    cup
                    usd
                }
                operationTypeId
                operationType {
                    name
                }
                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                ratesId
                rates {
                    name
                    value
                }

                status
                status
                billId

                bill {
                    id
                    no
                }

                customerId
                customer {
                    name
                    code
                    address
                    city
                    state
                    phone
                    email
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                }

                surcharge
                discount
                obs
                subtotal
                total
                totalCup
                totalUsd

                billDate
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }
                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                vehicle {
                    brand {
                        name
                    }
                    model
                    registrationNumber
                }

                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`,Xa=F.J1`
    query FindAllPrebillsByDate($date: String!) {
        findAllPrebillsByDate(date: $date) {
            ok
            message

            prebills {
                id
                no
                createdAt
                currencyId
                currency {
                    iso
                    namev
                }
                currenciesPercents {
                    cup
                    usd
                }

                operationTypeId
                operationType {
                    name
                }

                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                ratesId

                status
                status
                billId

                bill {
                    id
                    no
                }

                customerId
                customer {
                    name
                    code
                    address
                    city
                    state
                    phone
                    email
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                }
                total
                totalCup
                totalUsd
                billDate
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                products {
                    productId
                    quantity
                    price
                }
                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }

                services {
                    serviceId
                    quantity
                }
                servicesInBill {
                    id
                    description
                    minPrice
                    maxPrice
                }

                vehicle {
                    model
                    registrationNumber
                }

                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`,Qa=F.J1`
    query FindBillById($findBillById: String!) {
        findBillById(id: $findBillById) {
            ok
            message

            prebill {
                id
                no
                createdAt
                currencyId
                paymentMethodId
                paymentStatus
                products {
                    productId
                    quantity
                    price
                }
                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                status
                status
                billId

                bill {
                    id
                    no
                }

                status
                status
                customerId
                total
                billDate

                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`,Oa=F.J1`
    mutation CreatePrebill($createPrebillInput: CreateBillInput!) {
        createPrebill(createPrebillInput: $createPrebillInput) {
            ok
            message

            prebill {
                id
                no
                createdAt
                currencyId
                paymentMethodId
                paymentStatus
                products {
                    productId
                    quantity
                    price
                }
                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                status
                status
                billId

                bill {
                    id
                    no
                }

                customerId
                total
                userId
                billDate

                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`,Ja=F.J1`
    mutation UpdatePrebill($updateBillInput: UpdateBillInput!) {
        updatePrebill(updateBillInput: $updateBillInput) {
            ok
            message

            prebill {
                id
                no
                createdAt
                currencyId
                paymentMethodId
                paymentStatus
                products {
                    productId
                    quantity
                    price
                }
                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                status
                status
                billId

                bill {
                    id
                    no
                }

                customerId
                total
                userId
                billDate

                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`,Ua=F.J1`
    mutation UpdatePrebillStatus(
        $updatePrebillStatusInput: UpdateBillStatusInput!
    ) {
        updatePrebillStatus(updatePrebillStatusInput: $updatePrebillStatusInput) {
            ok
            message

            prebill {
                id
                no
                createdAt
                currencyId
                isDispatched
                currency {
                    iso
                    namev
                }
                currenciesPercents {
                    cup
                    usd
                }
                operationTypeId
                operationType {
                    name
                }
                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                ratesId
                rates {
                    name
                    value
                }

                status
                status
                billId

                bill {
                    id
                    no
                }

                customerId
                customer {
                    name
                    code
                    address
                    city
                    state
                    phone
                    email
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                }

                surcharge
                discount
                obs
                subtotal
                total
                totalCup
                totalUsd

                billDate
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }
                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`,Wa=F.J1`
    mutation RemovePrebill($removeBillId: String!) {
        removePrebill(id: $removeBillId) {
            ok
            message
        }
    }
`,Za=F.J1`
    mutation DispatchPrebill($billId: String!) {
        dispatchPrebill(id: $billId) {
            ok
            message

            prebill {
                id
                no
                createdAt
                isDispatched
                currencyId
                currency {
                    iso
                    namev
                }
                currenciesPercents {
                    cup
                    usd
                }
                operationTypeId
                operationType {
                    name
                }
                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                ratesId
                rates {
                    name
                    value
                }

                status
                status
                billId

                bill {
                    id
                    no
                }

                customerId
                customer {
                    name
                    code
                    address
                    city
                    state
                    phone
                    email
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                }

                surcharge
                discount
                obs
                subtotal
                total
                totalCup
                totalUsd

                billDate
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }
                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`,Ha=F.J1`
    mutation GeneratePrebill($billId: String!) {
        generateBillFromPrebill(id: $billId) {
            ok
            message

            prebill {
                id
                no
                createdAt
                isDispatched
                currencyId
                currency {
                    iso
                    namev
                }
                currenciesPercents {
                    cup
                    usd
                }
                operationTypeId
                operationType {
                    name
                }
                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                ratesId
                rates {
                    name
                    value
                }

                status
                status
                billId

                bill {
                    id
                    no
                }

                customerId
                customer {
                    name
                    code
                    address
                    city
                    state
                    phone
                    email
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                }

                surcharge
                discount
                obs
                subtotal
                total
                totalCup
                totalUsd

                billDate
                user {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                products {
                    productId
                    quantity
                    price

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }
                assistances {
                    assistanceId
                    quantity
                    price

                    assistance {
                        description
                        uom {
                            name
                            abbr
                        }
                    }
                }
                courierId
                courier {
                    id
                    name
                    fullname
                    idNumber
                }

                bankAccount {
                    no
                    currency
                    beneficiary
                }
            }
        }
    }
`;let Ka=(()=>{class s{constructor(t,n){this.apolloProvider=t,this._snackBar=n,this._apollo=this.apolloProvider.use("BALANC")}createPrebill(t){return this._apollo.mutate({mutation:Oa,variables:{createPrebillInput:t},errorPolicy:"all"}).pipe((0,T.M)(({errors:n})=>{if(n){let i="";n.forEach(o=>i+=`\n ${o.message}.`),this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(F.Ic),e.KVO(O.UG))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();const ke=(s,l)=>l.id;function er(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-checkbox",11),e.bIt("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.billProducts=i)}),e.EFF(1,"Productos"),e.k0s(),e.j41(2,"mat-checkbox",11),e.bIt("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.billAssistances=i)}),e.EFF(3,"Servicios"),e.k0s()}if(2&s){const t=e.XpG();e.Y8G("ngModel",t.billProducts),e.R7$(2),e.Y8G("ngModel",t.billAssistances)}}function tr(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",37),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.selectCustomer(o))}),e.EFF(1),e.k0s()}if(2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.name," ")}}function ir(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," La fecha de la Prefactura es obligatoria "),e.k0s())}function sr(s,l){1&s&&(e.j41(0,"mat-option",27),e.EFF(1," x1 "),e.k0s()),2&s&&e.Y8G("value",1)}function nr(s,l){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.value),e.R7$(),e.SpI(" x",t.value," ")}}function or(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El multiplicador es obligatorio "),e.k0s())}function ar(s,l){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.name," ")}}function rr(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El tipo de comprobante es obligatorio "),e.k0s())}function lr(s,l){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.name," ")}}function cr(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El tipo de operaci\xf3n es obligatorio "),e.k0s())}function dr(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",37),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.selectedCurrencyIso=o.iso)}),e.EFF(1),e.k0s()}if(2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.iso," ")}}function ur(s,l){if(1&s&&(e.j41(0,"span",38),e.EFF(1),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.Lme(" (+ ",2===(null==t.prebillingForm.get("rates").value?null:t.prebillingForm.get("rates").value.length)?"otro":"otros"," ",t.prebillingForm.get("rates").value.length>2?t.prebillingForm.get("rates").value.length-1:"",") ")}}function mr(s,l){if(1&s&&(e.j41(0,"mat-option",27)(1,"span",39),e.EFF(2),e.nI1(3,"number"),e.k0s(),e.j41(4,"span"),e.EFF(5),e.k0s()()),2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(2),e.JRh(e.i5U(3,3,t.value,"1.4-4")),e.R7$(3),e.SpI(" ",t.name,"")}}function pr(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," Las tasas de cambio son requeridas "),e.k0s())}function hr(s,l){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.Lme(" ",t.no," ",t.currency," ")}}function fr(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," La cuenta bancaria es obligatorio "),e.k0s())}function gr(s,l){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.name," ")}}function _r(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",49),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addProductToBill(r),e.Njj(i.stopPropagation())}),e.j41(1,"div",50),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addProductToBill(r),e.Njj(i.stopPropagation())}),e.j41(2,"span",51),e.nrm(3,"mat-checkbox",52),e.EFF(4),e.k0s(),e.j41(5,"span",53),e.EFF(6),e.k0s(),e.j41(7,"span",54),e.EFF(8),e.nI1(9,"number"),e.k0s()()()}if(2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(3),e.Y8G("checked",t.checked),e.R7$(),e.SpI(" ",t.name," "),e.R7$(2),e.JRh(t.depot),e.R7$(2),e.Lme("",e.i5U(9,6,t.quantity,"1.2-2")," ",t.uom,"")}}function br(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor m\xednimo 0.1 "),e.k0s())}function yr(s,l){if(1&s&&(e.j41(0,"mat-error",76),e.EFF(1),e.k0s()),2&s){const t=e.XpG().$implicit;e.R7$(),e.SpI(" Valor m\xe1ximo ",t.quantity," ")}}function Cr(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Patr\xf3n no v\xe1lido "),e.k0s())}function vr(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor m\xednimo 0 "),e.k0s())}function Fr(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor requerido "),e.k0s())}const Et=s=>({"text-warn":s}),Dt=()=>["$"];function xr(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",60)(1,"div"),e.EFF(2),e.k0s(),e.j41(3,"div",61),e.EFF(4),e.k0s(),e.j41(5,"div",62),e.EFF(6),e.k0s(),e.j41(7,"div",58),e.EFF(8),e.nI1(9,"number"),e.k0s(),e.j41(10,"div",63)(11,"div",64)(12,"button",65),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.decrementProductQty(o))}),e.nrm(13,"mat-icon",66),e.k0s(),e.j41(14,"mat-form-field",67),e.nrm(15,"input",68),e.k0s(),e.j41(16,"button",65),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.incrementProductQty(o))}),e.nrm(17,"mat-icon",66),e.k0s()(),e.DNE(18,br,2,0,"mat-error",69)(19,yr,2,1,"mat-error",69)(20,Cr,2,0,"mat-error",69),e.k0s(),e.j41(21,"div",70)(22,"mat-form-field",67),e.nrm(23,"input",71),e.k0s(),e.DNE(24,vr,2,0,"mat-error",69)(25,Fr,2,0,"mat-error",69),e.k0s(),e.j41(26,"div",72),e.EFF(27),e.k0s(),e.j41(28,"div",73),e.EFF(29),e.nI1(30,"currency"),e.k0s(),e.j41(31,"div",74)(32,"button",75),e.bIt("click",function(){const o=e.eBV(t).$index,r=e.XpG(3);return e.Njj(r.removeProductToBill(o))}),e.nrm(33,"mat-icon",66),e.k0s()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.XpG(3);e.R7$(2),e.SpI(" ",n+1," "),e.R7$(),e.Y8G("matTooltip",t.get("name").value),e.R7$(),e.SpI(" ",t.get("name").value," "),e.R7$(2),e.SpI(" ",t.get("depot").value," "),e.R7$(2),e.Lme(" ",e.i5U(9,27,t.get("stock").value,"1.2-2")," ",t.get("uom").value," "),e.R7$(4),e.Y8G("disabled",t.get("quantity").value<=.1||t.get("quantity").hasError("pattern")),e.R7$(),e.Y8G("svgIcon","mat_solid:remove"),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("min",.1)("max",t.get("stock").value)("formControl",t.get("quantity")),e.R7$(),e.Y8G("disabled",t.get("quantity").value>=t.get("stock").value||t.get("quantity").hasError("pattern")),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(),e.vxM(18,t.get("quantity").hasError("min")?18:-1),e.R7$(),e.vxM(19,t.get("quantity").hasError("max")?19:-1),e.R7$(),e.vxM(20,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?20:-1),e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("min",0)("max",9999999)("formControl",t.get("price")),e.R7$(),e.vxM(24,t.get("price").hasError("min")?24:-1),e.R7$(),e.vxM(25,t.get("price").hasError("required")?25:-1),e.R7$(),e.Y8G("ngClass",e.eq3(33,Et,!t.get("rate").value)),e.R7$(),e.SpI(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.R7$(2),e.SpI(" ",e.i5U(30,30,t.get("pt").value,e.lJ4(35,Dt))," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:close")}}function kr(s,l){if(1&s&&(e.j41(0,"div",55)(1,"div",56),e.nrm(2,"div"),e.j41(3,"div",57),e.EFF(4," Producto "),e.k0s(),e.j41(5,"div",57),e.EFF(6," Almac\xe9n "),e.k0s(),e.j41(7,"div",58),e.EFF(8," Disponibilidad "),e.k0s(),e.j41(9,"div",58),e.EFF(10," Cantidad "),e.k0s(),e.j41(11,"div",58),e.EFF(12," Precio "),e.k0s(),e.j41(13,"div",58),e.EFF(14," Moneda "),e.k0s(),e.j41(15,"div",59),e.EFF(16," Total "),e.k0s(),e.j41(17,"div",58),e.EFF(18," Quitar "),e.k0s()(),e.Z7z(19,xr,34,36,"div",77,ke),e.k0s()),2&s){const t=e.XpG(2);e.R7$(19),e.Dyx(t.prebillingForm.get("products").controls)}}function Ir(s,l){1&s&&(e.j41(0,"div",78),e.EFF(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.k0s())}const Tt=s=>({"cursor-pointer shadow":s});function Sr(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",79),e.bIt("click",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.createPrebill())}),e.EFF(1),e.nI1(2,"number"),e.k0s()}if(2&s){const t=e.XpG(2);e.Y8G("ngClass",e.eq3(6,Tt,t.prebillingForm.valid&&t.prebillingForm.get("products").controls.length>0)),e.R7$(),e.Lme(" ",e.i5U(2,3,t.total-t.prebillingForm.get("discount").value+t.prebillingForm.get("surcharge").value,"1.2-2")," ",t.selectedCurrencyIso," ")}}const Bt=()=>({suppressScrollY:!0});function Rr(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",40)(1,"div",41)(2,"mat-form-field",42),e.nrm(3,"mat-icon",18)(4,"input",43),e.j41(5,"mat-autocomplete",44,45),e.bIt("closed",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.searchProductControl.reset())}),e.Z7z(7,_r,10,9,"mat-option",80,e.fX1),e.nI1(9,"async"),e.k0s()(),e.j41(10,"div",46),e.DNE(11,kr,21,0,"div",47)(12,Ir,2,0),e.k0s()(),e.DNE(13,Sr,3,8,"div",48),e.k0s()}if(2&s){const t=e.sdS(6),n=e.XpG();e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",n.searchProductControl)("matAutocomplete",t)("placeholder","Buscar existencia de productos en inventario"),e.R7$(),e.Y8G("displayWith",n.displayFn),e.R7$(2),e.Dyx(e.bMT(9,9,n.productsFiltered)),e.R7$(3),e.Y8G("fuseScrollbarOptions",e.lJ4(11,Bt)),e.R7$(),e.vxM(11,n.prebillingForm.get("products").controls.length>0?11:12),e.R7$(2),e.vxM(13,n.billAssistances?-1:13)}}function $r(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-option",49),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addAssistanceToBill(r),e.Njj(i.stopPropagation())}),e.j41(1,"div",50),e.bIt("click",function(i){const r=e.eBV(t).$implicit;return e.XpG(2).addAssistanceToBill(r),e.Njj(i.stopPropagation())}),e.j41(2,"span",51),e.nrm(3,"mat-checkbox",52),e.EFF(4),e.k0s()()()}if(2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(3),e.Y8G("checked",t.checked),e.R7$(),e.SpI(" ",t.description," ")}}function jr(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor m\xednimo 1 "),e.k0s())}function Er(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Patr\xf3n no v\xe1lido "),e.k0s())}function Dr(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor m\xednimo 0 "),e.k0s())}function Tr(s,l){1&s&&(e.j41(0,"mat-error",76),e.EFF(1," Valor requerido "),e.k0s())}function Br(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",84)(1,"div"),e.EFF(2),e.k0s(),e.j41(3,"div",61),e.EFF(4),e.k0s(),e.j41(5,"div",63)(6,"div",64)(7,"button",85),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.decrementAssistanceQty(o))}),e.nrm(8,"mat-icon",66),e.k0s(),e.j41(9,"mat-form-field",67),e.nrm(10,"input",86),e.k0s(),e.j41(11,"button",65),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.incrementAssistanceQty(o))}),e.nrm(12,"mat-icon",66),e.k0s()(),e.DNE(13,jr,2,0,"mat-error",69)(14,Er,2,0,"mat-error",69),e.k0s(),e.j41(15,"div",70)(16,"mat-form-field",67),e.nrm(17,"input",71),e.k0s(),e.DNE(18,Dr,2,0,"mat-error",69)(19,Tr,2,0,"mat-error",69),e.k0s(),e.j41(20,"div",72),e.EFF(21),e.k0s(),e.j41(22,"div",73),e.EFF(23),e.nI1(24,"currency"),e.k0s(),e.j41(25,"div",74)(26,"button",75),e.bIt("click",function(){const o=e.eBV(t).$index,r=e.XpG(3);return e.Njj(r.removeAssistanceToBill(o))}),e.nrm(27,"mat-icon",66),e.k0s()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.XpG(3);e.R7$(2),e.SpI(" ",n+1," "),e.R7$(),e.Y8G("matTooltip",t.get("description").value),e.R7$(),e.SpI(" ",t.get("description").value," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:remove"),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("min",1)("formControl",t.get("quantity")),e.R7$(),e.Y8G("disabled",t.get("quantity").hasError("pattern")),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(),e.vxM(13,t.get("quantity").hasError("min")?13:-1),e.R7$(),e.vxM(14,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?14:-1),e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("min",0)("max",9999999)("formControl",t.get("price")),e.R7$(),e.vxM(18,t.get("price").hasError("min")?18:-1),e.R7$(),e.vxM(19,t.get("price").hasError("required")?19:-1),e.R7$(),e.Y8G("ngClass",e.eq3(24,Et,!t.get("rate").value)),e.R7$(),e.SpI(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.R7$(2),e.SpI(" ",e.i5U(24,21,t.get("pt").value,e.lJ4(26,Dt))," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:close")}}function Ar(s,l){if(1&s&&(e.j41(0,"div",55)(1,"div",83),e.nrm(2,"div"),e.j41(3,"div",57),e.EFF(4," Servicio "),e.k0s(),e.j41(5,"div",58),e.EFF(6," Cantidad "),e.k0s(),e.j41(7,"div",58),e.EFF(8," Precio "),e.k0s(),e.j41(9,"div",58),e.EFF(10," Moneda "),e.k0s(),e.j41(11,"div",59),e.EFF(12," Total "),e.k0s(),e.j41(13,"div",58),e.EFF(14," Quitar "),e.k0s()(),e.Z7z(15,Br,28,27,"div",87,ke),e.k0s()),2&s){const t=e.XpG(2);e.R7$(15),e.Dyx(t.prebillingForm.get("assistances").controls)}}function wr(s,l){1&s&&(e.j41(0,"div",78),e.EFF(1," \xa1No ha seleccionado ning\xfan servicio a\xfan! "),e.k0s())}function Gr(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",40)(1,"div",41)(2,"mat-form-field",42),e.nrm(3,"mat-icon",18)(4,"input",43),e.j41(5,"mat-autocomplete",44,81),e.bIt("closed",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.searchAssistanceControl.reset())}),e.Z7z(7,$r,5,3,"mat-option",80,e.fX1),e.nI1(9,"async"),e.k0s()(),e.j41(10,"div",82),e.DNE(11,Ar,17,0,"div",47)(12,wr,2,0),e.k0s()(),e.j41(13,"div",79),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.createPrebill())}),e.EFF(14),e.nI1(15,"number"),e.k0s()()}if(2&s){const t=e.sdS(6),n=e.XpG();e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",n.searchAssistanceControl)("matAutocomplete",t)("placeholder","Buscar servicios en el cat\xe1logo del negocio"),e.R7$(),e.Y8G("displayWith",n.displayFnAssistance),e.R7$(2),e.Dyx(e.bMT(9,11,n.assistancesFiltered)),e.R7$(3),e.Y8G("fuseScrollbarOptions",e.lJ4(16,Bt)),e.R7$(),e.vxM(11,n.prebillingForm.get("assistances").controls.length>0?11:12),e.R7$(2),e.Y8G("ngClass",e.eq3(17,Tt,n.prebillingForm.valid)),e.R7$(),e.Lme(" ",e.i5U(15,13,n.total-n.prebillingForm.get("discount").value+n.prebillingForm.get("surcharge").value,"1.2-2")," ",n.selectedCurrencyIso," ")}}const Pr=()=>({suppressScrollX:!0});let Mr=(()=>{class s{constructor(){this.assistances=[],this.assistances$=(0,B.of)([]),this.audio=new Audio("./assets/sounds/caja.mp3"),this.bankAccounts=[],this.billAssistances=!1,this.billProducts=!1,this.currencies=[],this.employees$=(0,B.of)([]),this.maxDate=new Date,this.merchant=null,this.multipliers$=(0,B.of)([]),this.operationTypes=[],this.paymentMethods=[],this.previewsAssistancesFormData=[],this.previewsProductsFormData=[],this.productsInStock=[],this.rates=[],this.searchAssistanceControl=new a.MJ(""),this.searchCustomerControl=new a.MJ(null),this.searchProductControl=new a.MJ(null),this.selectedCurrencyIso="",this.selectedCustomerName="",this.stayHere=!1,this.total=0,this._changeDetectorRef=(0,e.WQX)(e.gRc),this._customersService=(0,e.WQX)(ye.h),this._destroyRef=(0,e.WQX)(e.abz),this._formBuilder=(0,e.WQX)(a.ok),this._fuseConfirmationService=(0,e.WQX)(ae.G),this._prebillingService=(0,e.WQX)(Ka),this._ratesService=(0,e.WQX)(Le.f),this._router=(0,e.WQX)(H.Ix),this._snackBar=(0,e.WQX)(O.UG),this._stocksService=(0,e.WQX)(ze.t),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il)}ngOnInit(){this.prebillingForm=this._formBuilder.group({id:new a.MJ,billDate:new a.MJ(new Date,[a.k0.required]),multiplier:new a.MJ(1,[a.k0.required,a.k0.min(1)]),currencyId:new a.MJ(null,[a.k0.required]),courierId:new a.MJ(null),customerId:new a.MJ("",[a.k0.required]),bankAccount:new a.MJ(null,[a.k0.required]),operationTypeId:new a.MJ(null,[a.k0.required]),paymentMethodId:new a.MJ(null,[a.k0.required]),rates:new a.MJ([],[a.k0.required]),surcharge:new a.MJ(0,[a.k0.required,a.k0.min(0)]),discount:new a.MJ(0,[a.k0.required,a.k0.min(0)]),obs:new a.MJ("",[a.k0.maxLength(5e4)]),products:new a.Yp([]),assistances:new a.Yp([])}),this.store.select(oe.Xb).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.merchant=t,this.bankAccounts=t.bankAccounts,M.H.IsNullOrEmpty(t.bankAccounts)||this.prebillingForm.get("bankAccount").setValue(t.bankAccounts[0]),this._changeDetectorRef.markForCheck()}),this.prebillingForm.get("products").valueChanges.pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this._verifyChanges(t,this.previewsProductsFormData)&&this.calcAllProductPrice(this.prebillingForm.get("multiplier").value),this.previewsProductsFormData=[...t],this._calculateBillTotal(),this._changeDetectorRef.markForCheck()}),this.prebillingForm.get("assistances").valueChanges.pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this._verifyChanges(t,this.previewsAssistancesFormData)&&this._calcAllAssistancePrice(this.prebillingForm.get("multiplier").value),this.previewsAssistancesFormData=[...t],this._calculateBillTotal(),this._changeDetectorRef.markForCheck()}),this.store.select(ce.y$).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.currencies=t,M.H.IsNullOrEmpty(t)||setTimeout(()=>{const n=t.find(i=>i.id===this.merchant.currencyId);this.prebillingForm.get("currencyId").setValue(n.id)},500),this._changeDetectorRef.markForCheck()}),this.employees$=this.store.select(Xe.OB),this.multipliers$=this.store.select(qe.DC),this.customers$=this.store.select(je.wQ),this.store.select(Qe.xi).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{if(this.paymentMethods=t,!M.H.IsNullOrEmpty(t)){const n=t.find(i=>"Efectivo"===i.name);this.prebillingForm.get("paymentMethodId").setValue(n?n.id:t[0].id)}this._changeDetectorRef.markForCheck()}),this.store.select(mt.nK).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.operationTypes=t,M.H.IsNullOrEmpty(t)||this.prebillingForm.get("operationTypeId").setValue(t[0].id),this._changeDetectorRef.markForCheck()}),this.productsInStock$=this.store.select(_e.IP),this.store.select(_e.IP).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.productsInStock=t,t.length>0&&(this.billProducts=!0),this._changeDetectorRef.markForCheck()}),this.assistances$=this.store.select(ie),this.store.select(ie).pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.assistances=t,t.length>0&&(this.billAssistances=!0),this._changeDetectorRef.markForCheck()}),this.ratesFiltered=this.prebillingForm.get("currencyId").valueChanges.pipe((0,L.Z)(null),(0,Q.Z)(t=>{if(t){const n=this.currencies.find(o=>o.id===t);this.selectedCurrencyIso=n.iso;const i=this.prebillingForm.get("bankAccount").getRawValue();return M.H.IsNullOrEmpty(i)||n&&n.iso.toLocaleLowerCase()!==i.currency.toLocaleLowerCase()&&this.prebillingForm.get("bankAccount").setValue(null),n&&(this.bankAccounts=this.merchant.bankAccounts.filter(o=>o.currency.toLocaleLowerCase()===n.iso.toLocaleLowerCase())),this._ratesService.findActiveByBaseId(t)}return(0,B.of)([])})),this.ratesFiltered.pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.rates=t,this._resetSelectedProductsRates(),this._resetSelectedAssistancesRates(),this.updateSelectedRates()}),this.prebillingForm.get("rates").valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(500)).subscribe(t=>{this._resetSelectedProductsRates(),this._resetSelectedAssistancesRates()}),this.prebillingForm.get("multiplier").valueChanges.pipe((0,Y.pQ)(this._destroyRef)).subscribe(t=>{this.calcAllProductPrice(t),this._calculateBillTotal()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,Q.Z)(t=>this._mapChecked(null!==t&&"string"==typeof t?this._stocksService.getProductsInStockAvailable(t,10):this.productsInStock$))),this.assistancesFiltered=this.searchAssistanceControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,Q.Z)(t=>{const n=this.assistances.filter(i=>i.description.includes(t));return this._mapCheckedAssistances(null!==t&&"string"==typeof t?(0,B.of)(n):this.assistances$)})),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,Q.Z)(t=>null!==t&&"string"==typeof t&&t!==this.selectedCustomerName?this._customersService.findActiveCustomers(t.trim()):this.customers$))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}displayFnAssistance(t){return t&&t.description?t.description:""}selectCustomer(t){this.prebillingForm.get("customerId").setValue(t.id),this.selectedCustomerName=t.name}addStockProduct(t){const n=this.prebillingForm.get("currencyId").value,i=structuredClone(this.prebillingForm.get("rates").value);let o=i.find(d=>d.currencyBaseId===n&&d.currencyRefId===t.currencyId);!o&&n!==t.currencyId&&(o=i.find(d=>d.currencyRefId===n&&d.currencyRefId!==d.currencyBaseId),o&&(o.value=1/o.value));const r=this.prebillingForm.get("multiplier").value,c=this._formBuilder.group({productId:new a.MJ(t.productId,[a.k0.required]),currencyId:new a.MJ(t.currencyId,[a.k0.required]),name:new a.MJ(t.name,[a.k0.required]),staticPrice:new a.MJ(Number(((o?o.value:1)*t.price).toFixed(2)),[a.k0.required,a.k0.min(0),a.k0.max(99999999)]),price:new a.MJ(Number(((o?o.value:1)*t.price).toFixed(2)),[a.k0.required,a.k0.min(0),a.k0.max(99999999)]),multiplier:new a.MJ(r),pt:new a.MJ(0),uom:new a.MJ(t.uom,[a.k0.required]),depotId:new a.MJ(t.depotId,[a.k0.required]),depot:new a.MJ(t.depot,[a.k0.required]),currency:new a.MJ(t.currency,[a.k0.required]),stock:new a.MJ(t.quantity,[a.k0.required]),rateId:new a.MJ(o?o.id:null,[a.k0.required]),rate:new a.MJ(o?o.value:null,[a.k0.required]),quantity:new a.MJ(1,[U.t.onlyNumbersPattern(),a.k0.required,a.k0.min(.1),a.k0.max(t.quantity)])});this.prebillingForm.get("products").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeStockProduct(t){this.prebillingForm.get("products").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addProductToBill(t){const n=this.prebillingForm.get("products").getRawValue().findIndex(i=>i.productId===t.productId&&i.depotId===t.depotId);t.checked?(this.removeStockProduct(n),t.checked=!1):t.checked=!0,!(n>-1)&&this.addStockProduct(t)}incrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n+1)}decrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n-1)}removeProductToBill(t){this.removeStockProduct(t),this.searchProductControl.reset()}addAssistance(t){const n=this.prebillingForm.get("currencyId").value,i=structuredClone(this.prebillingForm.get("rates").value);let o=i.find(d=>d.currencyBaseId===n&&d.currencyRefId===t.currencyId);!o&&n!==t.currencyId&&(o=i.find(d=>d.currencyRefId===n&&d.currencyRefId!==d.currencyBaseId),o&&(o.value=1/o.value));const r=this.prebillingForm.get("multiplier").value,c=this._formBuilder.group({assistanceId:new a.MJ(t.id,[a.k0.required]),currencyId:new a.MJ(t.currencyId,[a.k0.required]),description:new a.MJ(t.description,[a.k0.required]),staticPrice:new a.MJ(Number(((o?o.value:1)*t.price).toFixed(2)),[a.k0.required,a.k0.min(0),a.k0.max(99999999)]),price:new a.MJ(Number(((o?o.value:1)*t.price).toFixed(2)),[a.k0.required,a.k0.min(0),a.k0.max(99999999)]),multiplier:new a.MJ(r),quantity:new a.MJ(1,[U.t.onlyNumbersPattern(),a.k0.required,a.k0.min(1)]),pt:new a.MJ(0),currency:new a.MJ(t.currency.iso,[a.k0.required]),rateId:new a.MJ(o?o.id:null,[a.k0.required]),rate:new a.MJ(o?o.value:null,[a.k0.required])});this.prebillingForm.get("assistances").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeAssistance(t){this.prebillingForm.get("assistances").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addAssistanceToBill(t){const n=this.prebillingForm.get("assistances").getRawValue().findIndex(i=>i.assistanceId===t.id);t.checked?(this.removeAssistance(n),t.checked=!1):t.checked=!0,!(n>-1)&&this.addAssistance(t)}incrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(++n)}decrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(--n)}removeAssistanceToBill(t){this.removeAssistance(t),this.searchAssistanceControl.reset()}createPrebill(){if(this.prebillingForm.invalid)return;const t=this.prebillingForm.getRawValue();delete t.id;const n=[],i=[];t.ratesId=t.products.map(r=>r.rateId).filter((r,c,d)=>d.indexOf(r)===c);for(const r of t.products)n.push(this._mapProductToBill(r));for(const r of t.assistances)i.push(this._mapAssistanceToBill(r));t.products=n,t.assistances=i,t.subtotal=this.total,delete t.rates,delete t.bankAccount._id,this._fuseConfirmationService.open({title:"Generar prefactura",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,Y.pQ)(this._destroyRef)).subscribe(r=>{"confirmed"===r&&this._prebillingService.createPrebill(t).pipe((0,g.Q)(this._unsubscribeAll),(0,ee.j)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:c})=>{c&&(this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:c.createPrebill.message,type:"success",svgIcon:"mat_solid:done"}}),this.audio.play(),this.stayHere?this.restoreForm():this._router.navigateByUrl("/modules/sales/prebills"))})})}restoreForm(){const t=this.prebillingForm.get("paymentMethodId").value,n=this.prebillingForm.get("operationTypeId").value,i=this.prebillingForm.get("multiplier").value;if(this.prebillingForm.get("products").clear(),this.searchCustomerControl.reset(),this.prebillingForm.reset(),this.total=0,this.selectedCustomerName="",this.searchProductControl.setValue(""),this.prebillingForm.get("paymentMethodId").setValue(t),this.prebillingForm.get("operationTypeId").setValue(n),this.prebillingForm.get("multiplier").setValue(i),this.prebillingForm.get("billDate").setValue(new Date),this.prebillingForm.get("observation").setValue(""),this.prebillingForm.get("surcharge").setValue(0),this.prebillingForm.get("discount").setValue(0),M.H.IsNullOrEmpty(this.merchant.bankAccounts)||(this.bankAccounts=this.merchant.bankAccounts,this.prebillingForm.get("bankAccount").setValue(this.merchant.bankAccounts[0])),!M.H.IsNullOrEmpty(this.currencies)){const o=this.currencies.find(r=>r.id===this.merchant.currencyId);this.prebillingForm.get("currencyId").setValue(o.id)}}_mapProductToBill(t){const{productId:n,price:i,depotId:o,quantity:r}=t,c=new fe.tz(n,"","",Number(i.toFixed(2)),Number(Number(r).toFixed(4)),o);return delete c.name,delete c.uom,c}_calculateBillTotal(){const t=this.prebillingForm.get("products").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0),n=this.prebillingForm.get("assistances").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0);this.total=Number(t.toFixed(2))+Number(n.toFixed(2))}_mapChecked(t){return t.pipe((0,N.T)(n=>n.map(i=>this.prebillingForm.get("products").getRawValue().some(r=>r.productId===i.productId&&r.depotId===i.depotId)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_mapCheckedAssistances(t){return t.pipe((0,N.T)(n=>n.map(i=>this.prebillingForm.get("assistances").getRawValue().some(r=>r.id===i.id)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_mapAssistanceToBill(t){const{assistanceId:n,price:i,quantity:o}=t;return new fe.At(n,i,o)}_resetSelectedProductsRates(){const t=this.prebillingForm.get("currencyId").value,n=this.prebillingForm.get("multiplier").value;for(const i of this.prebillingForm.get("products").controls){const o=i.getRawValue(),r=structuredClone(this.prebillingForm.get("rates").value);let c=r.find(h=>h.currencyBaseId===t&&h.currencyRefId===o.currencyId);!c&&t!==o.currencyId&&(c=r.find(h=>h.currencyRefId===t&&h.currencyRefId!==h.currencyBaseId),c&&(c.value=1/c.value));let d=c?c.value:null;const p=i.get("price").value,m=i.get("staticPrice").value;let u=i.get("rate").value?i.get("rate").value:1;u&&d===u&&(u=1,d=1),i.patchValue({...o,price:(d?p*d:1*p/u)*n,staticPrice:d?m*d:1*m/u,multiplier:n,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}_calcAllAssistancePrice(t){const n=this.prebillingForm.get("assistances").getRawValue();this.previewsAssistancesFormData=[...n];for(const i of this.prebillingForm.get("assistances").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}calcAllProductPrice(t){const n=this.prebillingForm.get("products").getRawValue();this.previewsProductsFormData=[...n];for(const i of this.prebillingForm.get("products").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}_verifyChanges(t,n){for(let i=0;i<t.length;i++)if(t.length!==n.length||t[i].price!==n[i].price||Number(t[i].quantity)!==Number(n[i].quantity))return!0;return!1}updateSelectedRates(){const t=this.prebillingForm.get("currencyId").value,n=this.prebillingForm.get("products").getRawValue();let i=[];for(const r of n)i=[...this.rates.filter(p=>p.currencyBaseId===t&&p.currencyRefId===r.currencyId),...this.rates.filter(p=>p.currencyBaseId===r.currencyId&&p.currencyRefId===t&&p.currencyRefId!==p.currencyBaseId),...i];const o=i.reduce((r,c)=>(r.find(p=>p.id===c.id&&p.name===c.name)||r.push(c),r),[]);this.prebillingForm.get("rates").setValue(o)}_resetSelectedAssistancesRates(){const t=this.prebillingForm.get("currencyId").value,n=this.prebillingForm.get("multiplier").value;for(const i of this.prebillingForm.get("assistances").controls){const o=i.getRawValue(),r=structuredClone(this.prebillingForm.get("rates").value);let c=r.find(h=>h.currencyBaseId===t&&h.currencyRefId===o.currencyId);!c&&t!==o.currencyId&&(c=r.find(h=>h.currencyRefId===t&&h.currencyRefId!==h.currencyBaseId),c&&(c.value=1/c.value));let d=c?c.value:null;const p=i.get("price").value,m=i.get("staticPrice").value;let u=i.get("rate").value?i.get("rate").value:1;u&&d===u&&(u=1,d=1),i.patchValue({...o,price:(d?p*d:1*p/u)*n,staticPrice:d?m*d:1*m/u,multiplier:n,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-prebilling"]],standalone:!0,features:[e.aNF],decls:124,vars:62,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0",3,"fuseScrollbarOptions"],[1,"relative","flex","flex-col","px-6","py-8","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["color","primary",3,"ngModel","ngModelChange"],["mat-flat-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[1,"flex","flex-col","px-4","mt-4","mb-12","gap-y-8","sm:px-8"],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"grid","gap-4","p-10","sm:grid-cols-4","lg:grid-cols-5",3,"formGroup"],["billNgForm","ngForm"],["appearance","fill",1,"w-full","md:col-span-2","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[1,"ath-autocomplete",3,"displayWith"],["customerAutocomplete","matAutocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["billDate",""],[3,"formControlName","required"],[3,"value"],["placeholder","Moneda",3,"formControlName","required"],["multiple","","placeholder","Tasa de cambio",3,"formControlName","required"],["class","text-sm opacity-75"],["matInput","","type","number","name","quantity",3,"min","max","formControlName"],[1,"flex","flex-col","gap-3","sm:flex-row","lg:flex-col","sm:col-span-2"],[3,"formControlName"],[1,"w-full","sm:col-span-4","lg:col-span-3","fuse-mat-textarea"],["matInput","",3,"formControlName","rows"],["class","col-span-4 shadow rounded-2xl bg-card"],[3,"value","click"],[1,"text-sm","opacity-75"],[1,"w-18"],[1,"col-span-4","shadow","rounded-2xl","bg-card"],[1,"p-6","pb-0"],["appearance","fill",1,"w-full","fuse-mat-dense",3,"subscriptSizing"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete",3,"displayWith","closed"],["productsAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-6","mt-2","min-h-36",3,"fuseScrollbarOptions"],["class","grid"],["class","flex items-center justify-center w-full gap-2 p-2 font-mono text-3xl font-semibold leading-7 text-white rounded-b-2xl bg-gradient-to-r from-primary-500 to-primary-700",3,"ngClass"],[1,"w-full",3,"value","click"],[1,"grid","w-full","grid-cols-6",3,"click"],[1,"flex","flex-row","items-center","col-span-5","truncate","md:col-span-3"],["color","primary",3,"checked"],[1,"items-center","hidden","col-span-2","md:flex"],[1,"flex","items-center","text-center"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left"],[1,"text-center"],[1,"text-right"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"truncate",3,"matTooltip"],[1,"truncate"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"flex","flex-col","items-center","justify-center"],["matInput","","type","number",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],[1,"text-center",3,"ngClass"],[1,"font-mono","text-right"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"w-full","text-sm","text-center"],["class","grid items-center gap-4 px-6 py-3 border-b billing-products-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","items-center","justify-center","w-full","gap-2","p-2","font-mono","text-3xl","font-semibold","leading-7","text-white","rounded-b-2xl","bg-gradient-to-r","from-primary-500","to-primary-700",3,"ngClass","click"],["class","w-full",3,"value"],["assistancesAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-2","mt-2","min-h-36",3,"fuseScrollbarOptions"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-assistances-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-assistances-grid","md:px-8"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","formControl"],["class","grid items-center gap-4 px-6 py-3 border-b billing-assistances-grid md:px-8"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Ventas"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",7),e.EFF(14,"Facturaci\xf3n"),e.k0s()(),e.j41(15,"div",5),e.nrm(16,"mat-icon",6),e.j41(17,"a",7),e.EFF(18,"Prefacturar"),e.k0s()()(),e.j41(19,"div",8)(20,"h2",9),e.EFF(21," Hacer Prefactura "),e.k0s()()(),e.j41(22,"div",10),e.DNE(23,er,4,2),e.j41(24,"mat-checkbox",11),e.bIt("ngModelChange",function(r){return i.stayHere=r}),e.EFF(25,"Permanecer aqu\xed"),e.k0s(),e.j41(26,"button",12),e.bIt("click",function(){return i.createPrebill()}),e.EFF(27," Generar Prefactura "),e.k0s()()(),e.j41(28,"div",13)(29,"div",14)(30,"form",15,16)(32,"mat-form-field",17)(33,"mat-label"),e.EFF(34,"Cliente"),e.k0s(),e.nrm(35,"mat-icon",18)(36,"input",19),e.j41(37,"mat-autocomplete",20,21),e.Z7z(39,tr,2,2,"mat-option",27,e.fX1),e.nI1(41,"async"),e.k0s()(),e.j41(42,"mat-form-field",22)(43,"mat-label"),e.EFF(44,"Fecha de la Prefactura"),e.k0s(),e.nrm(45,"input",23),e.j41(46,"mat-hint"),e.EFF(47,"DD/MM/YYYY"),e.k0s(),e.nrm(48,"mat-datepicker-toggle",24)(49,"mat-datepicker",null,25),e.DNE(51,ir,2,0,"mat-error"),e.k0s(),e.j41(52,"mat-form-field",22)(53,"mat-label"),e.EFF(54,"Multiplicador"),e.k0s(),e.j41(55,"mat-select",26),e.DNE(56,sr,2,1,"mat-option",27),e.nI1(57,"async"),e.Z7z(58,nr,2,2,"mat-option",27,e.fX1),e.nI1(60,"async"),e.k0s(),e.DNE(61,or,2,0,"mat-error"),e.k0s(),e.j41(62,"mat-form-field",22)(63,"mat-label"),e.EFF(64,"M\xe9todo de pago"),e.k0s(),e.j41(65,"mat-select",26),e.Z7z(66,ar,2,2,"mat-option",27,ke),e.k0s(),e.DNE(68,rr,2,0,"mat-error"),e.k0s(),e.j41(69,"mat-form-field",22)(70,"mat-label"),e.EFF(71,"Tipo de Operaci\xf3n"),e.k0s(),e.j41(72,"mat-select",26),e.Z7z(73,lr,2,2,"mat-option",27,ke),e.k0s(),e.DNE(75,cr,2,0,"mat-error"),e.k0s(),e.j41(76,"mat-form-field",22)(77,"mat-label"),e.EFF(78,"Moneda"),e.k0s(),e.j41(79,"mat-select",28),e.Z7z(80,dr,2,2,"mat-option",27,ke),e.k0s()(),e.j41(82,"mat-form-field",22)(83,"mat-label"),e.EFF(84,"Tasa de Cambio"),e.k0s(),e.j41(85,"mat-select",29)(86,"mat-select-trigger"),e.EFF(87),e.DNE(88,ur,2,2,"span",30),e.k0s(),e.Z7z(89,mr,6,6,"mat-option",27,e.fX1),e.nI1(91,"async"),e.k0s(),e.DNE(92,pr,2,0,"mat-error"),e.k0s(),e.j41(93,"mat-form-field",22)(94,"mat-label"),e.EFF(95,"Descuento"),e.k0s(),e.nrm(96,"input",31),e.k0s(),e.j41(97,"mat-form-field",22)(98,"mat-label"),e.EFF(99,"Recargo"),e.k0s(),e.nrm(100,"input",31),e.k0s(),e.j41(101,"div",32)(102,"mat-form-field",22)(103,"mat-label"),e.EFF(104,"Cuenta Bancaria"),e.k0s(),e.j41(105,"mat-select",26),e.Z7z(106,hr,2,3,"mat-option",27,e.fX1),e.k0s(),e.j41(108,"mat-hint"),e.EFF(109,"Cuentas Bancarias registradas en el negocio"),e.k0s(),e.DNE(110,fr,2,0,"mat-error"),e.k0s(),e.j41(111,"mat-form-field",22)(112,"mat-label"),e.EFF(113,"Transportista"),e.k0s(),e.j41(114,"mat-select",33),e.Z7z(115,gr,2,2,"mat-option",27,e.fX1),e.nI1(117,"async"),e.k0s()()(),e.j41(118,"mat-form-field",34)(119,"mat-label"),e.EFF(120,"Observaciones"),e.k0s(),e.nrm(121,"textarea",35),e.k0s()()(),e.DNE(122,Rr,14,12,"div",36)(123,Gr,16,19,"div",36),e.k0s()()),2&n){const o=e.sdS(38),r=e.sdS(50);e.Y8G("fuseScrollbarOptions",e.lJ4(61,Pr)),e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(7),e.vxM(23,i.assistances.length>0&&i.productsInStock.length>0?23:-1),e.R7$(),e.Y8G("ngModel",i.stayHere),e.R7$(2),e.Y8G("disabled",i.prebillingForm.invalid||0===i.prebillingForm.get("products").controls.length),e.R7$(4),e.Y8G("formGroup",i.prebillingForm),e.R7$(5),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",i.searchCustomerControl)("matAutocomplete",o)("placeholder","Buscar cliente")("required",!0),e.R7$(),e.Y8G("displayWith",i.displayFn),e.R7$(2),e.Dyx(e.bMT(41,51,i.customersFiltered)),e.R7$(6),e.Y8G("matDatepicker",r)("formControlName","billDate")("max",i.maxDate)("required",!0),e.R7$(3),e.Y8G("for",r),e.R7$(3),e.vxM(51,i.prebillingForm.get("billDate").hasError("required")?51:-1),e.R7$(4),e.Y8G("formControlName","multiplier")("required",!0),e.R7$(),e.vxM(56,0===e.bMT(57,53,i.multipliers$).length?56:-1),e.R7$(2),e.Dyx(e.bMT(60,55,i.multipliers$)),e.R7$(3),e.vxM(61,i.prebillingForm.get("multiplier").hasError("required")?61:-1),e.R7$(4),e.Y8G("formControlName","paymentMethodId")("required",!0),e.R7$(),e.Dyx(i.paymentMethods),e.R7$(2),e.vxM(68,i.prebillingForm.get("paymentMethodId").hasError("required")?68:-1),e.R7$(4),e.Y8G("formControlName","operationTypeId")("required",!0),e.R7$(),e.Dyx(i.operationTypes),e.R7$(2),e.vxM(75,i.prebillingForm.get("operationTypeId").hasError("required")?75:-1),e.R7$(4),e.Y8G("formControlName","currencyId")("required",!0),e.R7$(),e.Dyx(i.currencies),e.R7$(5),e.Y8G("formControlName","rates")("required",!0),e.R7$(2),e.SpI(" ",(null==i.prebillingForm.get("rates").value||null==i.prebillingForm.get("rates").value[0]?null:i.prebillingForm.get("rates").value[0].name)||""," "),e.R7$(),e.vxM(88,((null==i.prebillingForm.get("rates").value?null:i.prebillingForm.get("rates").value.length)||0)>1?88:-1),e.R7$(),e.Dyx(e.bMT(91,57,i.ratesFiltered)),e.R7$(3),e.vxM(92,i.prebillingForm.get("rates").hasError("required")?92:-1),e.R7$(4),e.Y8G("min",0)("max",i.total)("formControlName","discount"),e.R7$(4),e.Y8G("min",0)("max",99999)("formControlName","surcharge"),e.R7$(5),e.Y8G("formControlName","bankAccount")("required",!0),e.R7$(),e.Dyx(i.bankAccounts),e.R7$(4),e.vxM(110,i.prebillingForm.get("bankAccount").hasError("required")?110:-1),e.R7$(4),e.Y8G("formControlName","courierId"),e.R7$(),e.Dyx(e.bMT(117,59,i.employees$)),e.R7$(6),e.Y8G("formControlName","observation")("rows",4),e.R7$(),e.vxM(122,i.billProducts?122:-1),e.R7$(),e.vxM(123,i.billAssistances?123:-1)}},dependencies:[v.Jj,v.oe,v.QX,a.YN,a.qT,a.me,a.Q0,a.BC,a.cb,a.YS,a.VZ,a.zX,a.vS,be.p,z.jL,z.$3,re.wT,z.pN,I.Hl,I.$z,te.g7,te.So,k.X6,k.Vh,k.bZ,k.bU,_.RG,_.rl,_.nJ,_.MV,_.TL,_.JW,_.yw,R.m_,R.An,S.fS,S.fg,w.Cn,W.Ve,W.VO,W.$2,J.uc,J.oV,v.YU,a.X1,a.l_,a.j4,a.JD,H.Wk],encapsulation:2,changeDetection:0})}return s})();var de=f(70877);const At=s=>s.prebills,Ne=((0,$.Mz)(At,s=>s.prebill),(0,$.Mz)(At,s=>s.prebills));let wt=(()=>{class s{constructor(t,n){this.apolloProvider=t,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}getPrebills(t=0,n=50,i="no",o="desc",r="",c=null,d=[],p=[],m=[],u=null,h=null,b=null){return this._apollo.query({query:La,errorPolicy:"all",variables:{page:t,size:n,sort:i,order:o,search:r,status:p,paymentStatus:m,customerId:c,currenciesId:d,billDate:u,startDate:h,endDate:b}}).pipe((0,T.M)(({data:y})=>{y&&(this.store.dispatch((0,de.S9)({prebills:structuredClone(y).findAllPrebills.prebills.map(C=>{const P=C.products.reduce((se,Z)=>{const Se=se.find(nt=>nt.productId===Z.productId);return Se?Se.quantity+=Z.quantity:se.push({productId:Z.productId,price:Z.price,quantity:Z.quantity,product:Z.product}),se},[]);return C.products=P,C})})),this.store.dispatch((0,Fe.Bp)({pagination:y.findAllPrebills.pagination})))}))}getPrebillsByDate(t){return this._apollo.query({query:Xa,errorPolicy:"all",variables:{date:t}})}getPrebillById(t){return this._apollo.query({query:Qa,variables:{findBillByIdId:t},errorPolicy:"all"}).pipe((0,T.M)(({data:n})=>{this.store.dispatch((0,de.PZ)({prebill:n.dispatchPrebill.prebill}))}))}updateBill(t){return this.store.select(Ne).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:Ja,variables:{updateBillInput:t},errorPolicy:"all"}).pipe((0,T.M)(({data:i})=>{const o=structuredClone(n);o[n.findIndex(c=>c.id===t.id)]=i.updatedBill,this.store.dispatch((0,de.S9)({prebills:o}))}))))}updatePrebillStatus(t,n,i){return this.store.select(Ne).pipe((0,q.s)(1),(0,E.n)(o=>this._apollo.mutate({mutation:Ua,variables:{updatePrebillStatusInput:{id:t,status:n,paymentStatus:i}},errorPolicy:"all"}).pipe((0,T.M)(({data:r})=>{const c=structuredClone(o);c[o.findIndex(p=>p.id===t)]=r.updatePrebillStatus.prebill,this.store.dispatch((0,de.S9)({prebills:c}))}))))}removeBill(t){return this.store.select(Ne).pipe((0,q.s)(1),(0,E.n)(n=>this._apollo.mutate({mutation:Wa,variables:{removePrebillId:t},errorPolicy:"all"}).pipe((0,T.M)(({errors:i})=>{if(i)return;const o=structuredClone(n),r=n.findIndex(c=>c.id===t);o.splice(r,1),this.store.dispatch((0,de.S9)({prebills:o}))}))))}dispatchPrebill(t){return this._apollo.mutate({mutation:Za,variables:{billId:t},errorPolicy:"all"}).pipe((0,T.M)(({data:n})=>{n&&this.store.dispatch((0,de.Al)({prebill:n.dispatchPrebill.prebill}))}))}generateBillFromPrebill(t){return this._apollo.mutate({mutation:Ha,variables:{billId:t},errorPolicy:"all"}).pipe((0,T.M)(({data:n})=>{n&&this.store.dispatch((0,de.Al)({prebill:n.generateBillFromPrebill.prebill}))}))}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(F.Ic),e.KVO($.il))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();const Nr=["billDateFilter"],Yr=["customerFilter"],Vr=["currencyFilter"],qr=["statusFilter"],zr=["paymentStatusFilter"];function Lr(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-icon",28),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.range.reset())}),e.k0s()}}function Xr(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1,"Fecha de inicio no v\xe1lida "),e.k0s())}function Qr(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1,"Fecha de final no v\xe1lida "),e.k0s())}function Or(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",50),e.bIt("click",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.clearTableFilters())}),e.j41(1,"span",51),e.EFF(2," filter_list_off "),e.k0s()()}}const Jr=(s,l)=>l.id;function Ur(s,l){if(1&s&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&s){const t=e.XpG().$implicit;e.R7$(),e.SpI(" ",t.bill.no," ")}}function Wr(s,l){1&s&&e.nrm(0,"mat-icon",61),2&s&&e.Y8G("svgIcon","mat_solid:done")}function Zr(s,l){1&s&&e.nrm(0,"mat-icon",61),2&s&&e.Y8G("svgIcon","mat_solid:done")}function Hr(s,l){1&s&&e.nrm(0,"mat-icon",61),2&s&&e.Y8G("svgIcon","mat_solid:done")}function Kr(s,l){1&s&&e.nrm(0,"mat-icon",61),2&s&&e.Y8G("svgIcon","mat_solid:done")}const el=(s,l,t,n)=>({"bg-amber-50 text-amber-700":s,"text-green-700 bg-green-50":l,"text-red-700 bg-red-50":t,"text-blue-700 bg-blue-50":n}),tl=(s,l)=>({"text-blue-700 bg-blue-50":s,"text-green-700 bg-green-50":l});function il(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",52)(1,"div",53),e.EFF(2),e.k0s(),e.j41(3,"div",53),e.DNE(4,Ur,2,1,"span"),e.k0s(),e.j41(5,"div",54),e.EFF(6),e.nI1(7,"date"),e.k0s(),e.j41(8,"div",32),e.EFF(9),e.k0s(),e.j41(10,"div",55),e.EFF(11),e.k0s(),e.j41(12,"div",56),e.EFF(13),e.nI1(14,"number"),e.k0s(),e.j41(15,"div",57)(16,"span",58),e.EFF(17),e.nI1(18,"uppercase"),e.k0s()(),e.j41(19,"div",57)(20,"span",58),e.EFF(21),e.nI1(22,"uppercase"),e.k0s()(),e.j41(23,"div",59)(24,"button",60),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.generatePrebillDocument(o))}),e.nrm(25,"mat-icon",61),e.k0s(),e.j41(26,"button",62),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.dispatchPrebill(o.id))}),e.nrm(27,"mat-icon",61),e.k0s(),e.j41(28,"button",63),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.generateBillFromPrebill(o.id))}),e.nrm(29,"mat-icon",61),e.k0s(),e.j41(30,"div")(31,"button",64),e.nrm(32,"mat-icon",61),e.k0s(),e.j41(33,"mat-menu",null,65)(35,"div",66),e.EFF(36," Actualizar Estado "),e.k0s(),e.j41(37,"button",67),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.updatePrebillStatus(o.id,"entregada"))}),e.j41(38,"div",68),e.DNE(39,Wr,1,1,"mat-icon",69),e.k0s(),e.j41(40,"span",70),e.EFF(41,"Entregada"),e.k0s()(),e.j41(42,"button",67),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.updatePrebillStatus(o.id,null,"cobrada"))}),e.j41(43,"div",68),e.DNE(44,Zr,1,1,"mat-icon",69),e.k0s(),e.j41(45,"span",70),e.EFF(46,"Cobrada"),e.k0s()(),e.j41(47,"button",67),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.updatePrebillStatus(o.id,"cancelada"))}),e.j41(48,"div",68),e.DNE(49,Hr,1,1,"mat-icon",69),e.k0s(),e.j41(50,"span",70),e.EFF(51,"Cancelada"),e.k0s()(),e.j41(52,"button",67),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.updatePrebillStatus(o.id,"rechazada"))}),e.j41(53,"div",68),e.DNE(54,Kr,1,1,"mat-icon",69),e.k0s(),e.j41(55,"span",70),e.EFF(56,"Rechazada"),e.k0s()()()()()()}if(2&s){const t=l.$implicit,n=e.sdS(34);e.R7$(2),e.SpI(" ",t.no," "),e.R7$(2),e.vxM(4,t.bill?4:-1),e.R7$(2),e.SpI(" ",e.i5U(7,26,t.billDate,"dd/MM/yyyy")," "),e.R7$(3),e.SpI(" ",t.customer.name," "),e.R7$(2),e.SpI(" ",t.currency.iso," "),e.R7$(2),e.SpI(" ",e.i5U(14,29,t.total,"1.2-2")," "),e.R7$(2),e.Y8G("ngClass",e.ziG(36,el,"nueva"===t.status,"facturada"===t.status,"cancelada"===t.status,"entregada"===t.status)),e.R7$(2),e.SpI(" ",e.bMT(18,32,t.status)," "),e.R7$(2),e.Y8G("ngClass",e.l_i(41,tl,"pendiente"===t.paymentStatus,"cobrada"===t.paymentStatus)),e.R7$(2),e.SpI(" ",e.bMT(22,34,t.paymentStatus)," "),e.R7$(4),e.Y8G("svgIcon","mat_solid:print"),e.R7$(),e.Y8G("disabled",0===t.products.length||t.isDispatched||"facturada"===t.status||"cancelada"===t.status),e.R7$(),e.Y8G("svgIcon","mat_solid:logout"),e.R7$(),e.Y8G("disabled","facturada"===t.status||"cancelada"===t.status),e.R7$(),e.Y8G("svgIcon","mat_solid:request_page"),e.R7$(2),e.Y8G("matMenuTriggerFor",n)("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.R7$(),e.Y8G("svgIcon","mat_solid:update"),e.R7$(5),e.Y8G("disabled",t.status.includes("entregada")||t.status.includes("cancelada")||t.status.includes("rechazada")||t.paymentStatus.includes("cobrada")||t.status.includes("facturada")),e.R7$(2),e.vxM(39,t.status.includes("entregada")?39:-1),e.R7$(3),e.Y8G("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.R7$(2),e.vxM(44,t.paymentStatus.includes("cobrada")?44:-1),e.R7$(3),e.Y8G("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("rechazada")||t.status.includes("cancelada")||t.status.includes("facturada")),e.R7$(2),e.vxM(49,t.status.includes("cancelada")?49:-1),e.R7$(3),e.Y8G("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")||t.status.includes("facturada")),e.R7$(2),e.vxM(54,t.status.includes("rechazada")?54:-1)}}function sl(s,l){if(1&s&&e.Z7z(0,il,57,44,"div",71,Jr),2&s){const t=e.XpG();e.Dyx(t)}}function nl(s,l){1&s&&(e.j41(0,"div",72),e.EFF(1," \xa1No se ha registrado ninguna prefactura! "),e.k0s())}const ol=()=>["nueva","entregada","cancelada","rechazada"],al=()=>["pendiente","cobrada"],rl=s=>({"mr-4":s}),ll=(s,l)=>({"pointer-events-none":s,hidden:l}),cl=()=>[10,25,100];function dl(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",29)(1,"div",30)(2,"div",31),e.EFF(3," N\xfamero "),e.k0s(),e.j41(4,"div",32),e.EFF(5," N.Factura "),e.k0s(),e.j41(6,"div",33)(7,"span",34),e.EFF(8,"Fecha"),e.k0s(),e.j41(9,"table-filter",35,36),e.bIt("dataChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addDate(i))}),e.k0s()(),e.j41(11,"div",37)(12,"span"),e.EFF(13,"Cliente"),e.k0s(),e.j41(14,"table-filter",38,39),e.bIt("dataChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addCustomer(i))}),e.k0s()(),e.j41(16,"div",33)(17,"span"),e.EFF(18,"Moneda"),e.k0s(),e.j41(19,"table-filter",40,41),e.bIt("dataChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addCurrencies(i))}),e.nI1(21,"async"),e.k0s()(),e.j41(22,"div",42),e.EFF(23," Importe "),e.k0s(),e.j41(24,"div",33)(25,"span",34),e.EFF(26,"Estado"),e.k0s(),e.j41(27,"table-filter",43,44),e.bIt("dataChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addStatus(i))}),e.k0s()(),e.j41(29,"div",33)(30,"span",45),e.EFF(31,"E.Pago"),e.k0s(),e.j41(32,"table-filter",43,46),e.bIt("dataChange",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addPaymentStatus(i))}),e.k0s()(),e.j41(34,"div",47)(35,"span"),e.EFF(36,"Acciones"),e.k0s(),e.DNE(37,Or,3,0,"button",48),e.k0s()(),e.DNE(38,sl,2,0)(39,nl,2,0),e.nrm(40,"mat-paginator",49),e.k0s()}if(2&s){const t=e.XpG();e.R7$(2),e.Y8G("mat-sort-header","no"),e.R7$(5),e.Y8G("mat-sort-header","billDate"),e.R7$(2),e.Y8G("filterType","date"),e.R7$(5),e.Y8G("filterType","filterEntity")("searchEntityControl",t.searchCustomersControl)("entitiesFiltered",t.customersFiltered),e.R7$(5),e.Y8G("filterType","multiSelectEntity")("entityPropertyName","iso")("useUpperCase",!0)("data",e.bMT(21,26,t.currencies$)),e.R7$(3),e.Y8G("mat-sort-header","total"),e.R7$(3),e.Y8G("mat-sort-header","status"),e.R7$(2),e.Y8G("filterType","multiSelect")("data",e.lJ4(28,ol)),e.R7$(3),e.Y8G("mat-sort-header","paymentStatus"),e.R7$(2),e.Y8G("filterType","multiSelect")("data",e.lJ4(29,al)),e.R7$(2),e.Y8G("ngClass",e.eq3(30,rl,t.existTableFilter())),e.R7$(3),e.vxM(37,t.existTableFilter()?37:-1),e.R7$(),e.vxM(38,l.length>0?38:39),e.R7$(2),e.Y8G("ngClass",e.l_i(32,ll,t.isLoading,t.pagination.length<10&&t.pagination.page<1))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.lJ4(35,cl))("showFirstLastButtons",!0)}}const ul=()=>["/modules/sales/prebilling"];let ml=(()=>{class s{constructor(){this.currencies$=(0,B.of)([]),this.filterInputControl=new a.MJ,this.filterStatusInputControl=new a.MJ(null),this.isLoading=!1,this.isSlideLoading=!1,this.maxDate=new Date,this.merchant=null,this.merchantLogo=null,this.prebills$=(0,B.of)([]),this.range=new a.gE({start:new a.MJ({disabled:!1,value:null},[U.t.futureDateValidator()]),end:new a.MJ({disabled:!1,value:null},[U.t.futureDateValidator()])}),this.searchCustomersControl=new a.MJ(null),this.searchInputControl=new a.MJ,this.selectedCurrenciesId=[],this.selectedCustomer=null,this.selectedDate=null,this.selectedPaymentStatus=[],this.selectedSlide=null,this.selectedStatus=[],this.user=null,this._changeDetectorRef=(0,e.WQX)(e.gRc),this._documentsService=(0,e.WQX)(Ce.Q),this._fuseConfirmationService=(0,e.WQX)(ae.G),this._prebillsService=(0,e.WQX)(wt),this._snackBar=(0,e.WQX)(O.UG),this._unsubscribeAll=new X.B,this._customersService=(0,e.WQX)(ye.h),this.store=(0,e.WQX)($.il)}ngOnInit(){this.store.select(le.SW).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.currencies$=this.store.select(ce.y$),this.store.select(oe.Xb).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.prebills$=this.store.select(Ne),this.store.select(pe.D).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(300),(0,E.n)(t=>(this.isLoading=!0,this._prebillsService.getPrebills(0,25,"no","desc",t,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,N.T)(()=>{this.isLoading=!1})).subscribe(),this.filterInputControl.valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(300),(0,E.n)(t=>(this.isLoading=!0,this._prebillsService.getPrebills(0,25,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,N.T)(()=>{this.isLoading=!1})).subscribe(),this.customersFiltered=this.searchCustomersControl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,ee.j)(()=>{this.isLoading=!1}),(0,Q.Z)(t=>null!==t&&"string"==typeof t&&(this.selectedCustomer&&t!==this.selectedCustomer.name||!this.selectedCustomer)?(this.isLoading=!0,this._customersService.findActiveCustomers(t.trim())):(0,B.of)())),this.range.valueChanges.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.billDateFilter.clearFilter(),this._prebillsService.getPrebills(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,null,t.start,t.end).pipe((0,g.Q)(this._unsubscribeAll)).subscribe()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,me.h)(this._sort.sortChange,this._paginator.page).pipe((0,E.n)(()=>(this.isLoading=!0,this._prebillsService.getPrebills(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,N.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,de.Jx)())}resetCustomer(){this.selectedCustomer=null,this.searchInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCustomer(t){this.selectedCustomer=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addDate(t){this.selectedDate=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCurrencies(t){this.selectedCurrenciesId=t.map(n=>n.id),this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addStatus(t){this.selectedStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addPaymentStatus(t){this.selectedPaymentStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}dispatchPrebill(t){this._fuseConfirmationService.open({title:"Despachar factura",message:"\xbfEsta seguro que desea despachar esta prefactura?.",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._prebillsService.dispatchPrebill(t).pipe((0,g.Q)(this._unsubscribeAll),(0,ee.j)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:o})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.dispatchPrebill.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill"}})})})}generateBillFromPrebill(t){this._fuseConfirmationService.open({title:"Generar factura",message:"\xbfEsta seguro que desea generar esta factura?.",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,g.Q)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._prebillsService.generateBillFromPrebill(t).pipe((0,g.Q)(this._unsubscribeAll),(0,ee.j)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:o})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.generateBillFromPrebill.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}})})})}updatePrebillStatus(t,n=null,i=null){this._fuseConfirmationService.open({title:"Actualizar estado de la prefactura",message:"\xbfEsta seguro que desea actualizar esta prefactura?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this._prebillsService.updatePrebillStatus(t,n,i).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:c})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:c.updatePrebillStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}generatePrebillDocument(t){this._documentsService.generateBillDocument(t,Te.prefactura,this.merchant,this.user)}existTableFilter(){return this.statusFilter?.hasFilter||this.billDateFilter?.hasFilter||this.currencyFilter?.hasFilter||this.customerFilter?.hasFilter||this.paymentStatusFilter?.hasFilter}clearTableFilters(){this.statusFilter?.hasFilter&&this.statusFilter.clearFilter(),this.billDateFilter?.hasFilter&&this.billDateFilter.clearFilter(),this.currencyFilter?.hasFilter&&this.currencyFilter.clearFilter(),this.customerFilter?.hasFilter&&this.customerFilter.clearFilter(),this.paymentStatusFilter?.hasFilter&&this.paymentStatusFilter.clearFilter()}_getBankAccountMC(t){return t.bankAccounts.find(i=>"CUP"===i.currency).no}_getBankAccountOM(t,n){return t.bankAccounts.find(i=>i.currency===n.currency.iso).no}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-prebills"]],viewQuery:function(n,i){if(1&n&&(e.GBs(V.iy,5),e.GBs(A.B4,5),e.GBs(Nr,5),e.GBs(Yr,5),e.GBs(Vr,5),e.GBs(qr,5),e.GBs(zr,5)),2&n){let o;e.mGM(o=e.lsd())&&(i._paginator=o.first),e.mGM(o=e.lsd())&&(i._sort=o.first),e.mGM(o=e.lsd())&&(i.billDateFilter=o.first),e.mGM(o=e.lsd())&&(i.customerFilter=o.first),e.mGM(o=e.lsd())&&(i.currencyFilter=o.first),e.mGM(o=e.lsd())&&(i.statusFilter=o.first),e.mGM(o=e.lsd())&&(i.paymentStatusFilter=o.first)}},standalone:!0,features:[e.aNF],decls:44,vars:22,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","flex-wrap","items-center","w-full","gap-2","mt-6","lg:fixed","right-8","shrink-0","lg:mt-0","lg:ml-4","lg:w-auto","sm:w-1/2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"sm:mx-4","min-w-64","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matPrefix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto"],[1,"z-10","flex","flex-col","flex-auto","bg-white","dark:bg-default"],["class","relative grid"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[1,"relative","grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","pre-bills-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"",3,"mat-sort-header"],[1,""],[1,"flex","items-center","justify-center"],[3,"mat-sort-header"],[3,"filterType","dataChange"],["billDateFilter",""],[1,"flex","items-center","justify-start"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange"],["customerFilter",""],[3,"filterType","entityPropertyName","useUpperCase","data","dataChange"],["currencyFilter",""],[1,"flex","justify-end",3,"mat-sort-header"],[3,"filterType","data","dataChange"],["statusFilter",""],["matTooltip","Estado del pago",3,"mat-sort-header"],["paymentStatusFilter",""],[1,"flex","items-center","justify-end","mr-10",3,"ngClass"],["color","warn","class","w-6 h-6 min-h-6 min-w-6","mat-icon-button","","matTooltip","Limpiar filtros"],[1,"border-b","first-letter:z-10","sm:inset-x-0","sm:sticky","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["color","warn","mat-icon-button","","matTooltip","Limpiar filtros",1,"w-6","h-6","min-h-6","min-w-6",3,"click"],[1,"material-icons","icon-size-4"],[1,"z-0","grid","items-center","gap-4","px-6","py-3","border-b","pre-bills-grid","md:px-8"],[1,"font-mono"],[1,"font-mono","text-center"],[1,"text-center"],[1,"font-mono","text-right"],[1,"flex","items-center","justify-center","mr-4","text-center","truncate","delay-100","rounded-full","h-7","lock","dark:bg-white","dark:bg-opacity-5",3,"ngClass"],[1,"w-full","px-2","text-sm","font-medium","text-center"],[1,"flex","flex-row","justify-end","gap-2"],["mat-stroked-button","","matTooltip","Imprimir Prefactura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Despachar Prefactura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["mat-stroked-button","","matTooltip","Generar factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["mat-stroked-button","","matTooltip","Actualizar estados",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"matMenuTriggerFor","disabled"],["listStatusMenu","matMenu"],[1,"w-full","p-2","text-lg","font-semibold","text-center","text-secondary"],["mat-menu-item","",1,"grid","w-full","grid-cols-4",3,"disabled","click"],[1,"col-span-1"],["class","icon-size-5",3,"svgIcon"],[1,"col-span-3","text-center"],["class","z-0 grid items-center gap-4 px-6 py-3 border-b pre-bills-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Ventas"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",7),e.EFF(14,"Facturaci\xf3n"),e.k0s()(),e.j41(15,"div",5),e.nrm(16,"mat-icon",6),e.j41(17,"a",7),e.EFF(18,"Prefacturas"),e.k0s()()(),e.j41(19,"div",8)(20,"h2",9),e.EFF(21," Registro de Prefacturas "),e.k0s()()(),e.j41(22,"div",10)(23,"mat-form-field",11),e.nrm(24,"mat-icon",12)(25,"input",13),e.k0s(),e.j41(26,"mat-form-field",14)(27,"mat-date-range-input",15),e.nrm(28,"input",16)(29,"input",17),e.k0s(),e.nrm(30,"mat-datepicker-toggle",18)(31,"mat-date-range-picker",19,20),e.DNE(33,Lr,1,0,"mat-icon",21)(34,Xr,2,0,"mat-error")(35,Qr,2,0,"mat-error"),e.k0s(),e.j41(36,"button",22),e.nrm(37,"mat-icon",23),e.j41(38,"span",24),e.EFF(39,"Registrar"),e.k0s()()()(),e.j41(40,"div",25)(41,"div",26),e.DNE(42,dl,41,36,"div",27),e.nI1(43,"async"),e.k0s()()()),2&n){const o=e.sdS(32);let r;e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(7),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("formGroup",i.range)("rangePicker",o)("max",i.maxDate),e.R7$(3),e.Y8G("for",o),e.R7$(3),e.vxM(33,i.range.get("start").value||i.range.get("end").value?33:-1),e.R7$(),e.vxM(34,i.range.controls.start.hasError("matStartDateInvalid")?34:-1),e.R7$(),e.vxM(35,i.range.controls.end.hasError("matEndDateInvalid")?35:-1),e.R7$(),e.Y8G("routerLink",e.lJ4(21,ul)),e.R7$(),e.Y8G("svgIcon","mat_solid:edit"),e.R7$(5),e.vxM(42,(r=e.bMT(43,19,i.prebills$))?42:-1,r)}},dependencies:[v.Jj,v.vh,v.QX,be.p,I.Hl,I.$z,I.iY,k.X6,k.bU,k.el,k.xR,k.IG,k.SG,_.RG,_.rl,_.TL,_.JW,_.yw,R.m_,R.An,S.fS,S.fg,w.Cn,w.kk,w.fb,w.Cp,V.Ou,V.iy,A.NQ,A.B4,A.aE,J.uc,J.oV,v.YU,a.X1,a.me,a.BC,a.cb,a.l_,a.j4,a.JD,H.Wk,Je.i,v.Pc],styles:[".pre-bills-grid{grid-template-columns:100px 100px 100px 250px 50px 100px 100px 100px 170px}@media (min-width: 960px){.pre-bills-grid{grid-template-columns:100px 100px 80px 250px 50px 100px 100px 100px 170px}}@media (min-width: 1280px){.pre-bills-grid{grid-template-columns:10% 100px 80px auto 50px 10% 10% 10% 170px}}\n"],encapsulation:2,changeDetection:0})}return s})();var pl=f(86800),Gt=f(67336),Ie=f(36471),hl=f(67943),fl=f(51973),Pt=f(74892),gl=f(57084),_l=f(62590);function bl(s,l){1&s&&(e.j41(0,"h2",6),e.EFF(1,"Agregar Terminal"),e.k0s())}function yl(s,l){1&s&&(e.j41(0,"h2",6),e.EFF(1,"Editar terminal "),e.k0s())}function Cl(s,l){1&s&&(e.j41(0,"h2",6),e.EFF(1,"Detalles de la terminal "),e.k0s())}function vl(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El nombre es requerido "),e.k0s())}function Fl(s,l){if(1&s&&(e.j41(0,"mat-option",25),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.name," ")}}function xl(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," La marca es requerida "),e.k0s())}function kl(s,l){if(1&s&&(e.j41(0,"mat-option",25),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.name," ")}}function Il(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El almac\xe9n de venta es obligatorio "),e.k0s())}function Sl(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El modelo es requerido "),e.k0s())}function Rl(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El n\xfamero de serie es requerido "),e.k0s())}function $l(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El PIN debe tener 4 d\xedgitos "),e.k0s())}function jl(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El PIN debe tener 4 d\xedgitos "),e.k0s())}function El(s,l){if(1&s&&(e.j41(0,"mat-option",25),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.name," ")}}function Dl(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-chip",26),e.bIt("removed",function(){const o=e.eBV(t).$implicit,r=e.XpG(2);return e.Njj(r.removeEmployee(o))}),e.EFF(1),e.nrm(2,"mat-icon",27),e.k0s()}if(2&s){const t=l.$implicit;e.Y8G("removable",!0),e.R7$(),e.SpI(" ",t.fullname," "),e.R7$(),e.Y8G("svgIcon","mat_solid:cancel")}}function Tl(s,l){if(1&s&&(e.j41(0,"mat-option",25),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t.fullname," ")}}function Bl(s,l){1&s&&(e.j41(0,"mat-error"),e.EFF(1," El empleado es requerido "),e.k0s())}function Al(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",7)(1,"div",8)(2,"form",9)(3,"mat-form-field",10)(4,"mat-label"),e.EFF(5,"Nombre del terminal"),e.k0s(),e.nrm(6,"input",11),e.DNE(7,vl,2,0,"mat-error"),e.k0s(),e.j41(8,"mat-form-field",10)(9,"mat-label"),e.EFF(10,"Marca"),e.k0s(),e.j41(11,"mat-select",12),e.Z7z(12,Fl,2,2,"mat-option",25,e.fX1),e.j41(14,"mat-option",13),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.createBrand())}),e.EFF(15," Agregar marca "),e.k0s()(),e.DNE(16,xl,2,0,"mat-error"),e.k0s(),e.j41(17,"mat-form-field",10)(18,"mat-label"),e.EFF(19,"Almac\xe9n de venta"),e.k0s(),e.j41(20,"mat-select",12),e.Z7z(21,kl,2,2,"mat-option",25,e.fX1),e.k0s(),e.DNE(23,Il,2,0,"mat-error"),e.k0s(),e.j41(24,"mat-form-field",10)(25,"mat-label"),e.EFF(26,"Modelo"),e.k0s(),e.nrm(27,"input",14),e.DNE(28,Sl,2,0,"mat-error"),e.k0s(),e.j41(29,"mat-form-field",10)(30,"mat-label"),e.EFF(31,"N\xfamero de serie"),e.k0s(),e.nrm(32,"input",14),e.DNE(33,Rl,2,0,"mat-error"),e.k0s(),e.j41(34,"mat-form-field",10)(35,"mat-label"),e.EFF(36,"PIN"),e.k0s(),e.nrm(37,"input",15),e.DNE(38,$l,2,0,"mat-error")(39,jl,2,0,"mat-error"),e.j41(40,"mat-hint"),e.EFF(41,"Solo 4 d\xedgitos"),e.k0s()(),e.j41(42,"div")(43,"mat-form-field",10)(44,"mat-label"),e.EFF(45,"Ubicaci\xf3n"),e.k0s(),e.j41(46,"mat-select",12),e.Z7z(47,El,2,2,"mat-option",25,e.fX1),e.nI1(49,"async"),e.k0s()()(),e.j41(50,"div",16)(51,"mat-checkbox",17),e.EFF(52," \xbfTiene impresora? "),e.k0s(),e.j41(53,"mat-checkbox",17),e.EFF(54," \xbfTiene caja de efectivo? "),e.k0s()(),e.j41(55,"mat-form-field",18)(56,"mat-label"),e.EFF(57,"Asignar a:"),e.k0s(),e.j41(58,"mat-chip-grid",19,20),e.Z7z(60,Dl,3,3,"mat-chip",28,e.fX1),e.nrm(62,"input",21,22),e.k0s(),e.j41(64,"mat-autocomplete",23,24),e.bIt("optionSelected",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.addEmployee(i.option.value))}),e.Z7z(66,Tl,2,2,"mat-option",25,e.fX1),e.nI1(68,"async"),e.k0s(),e.DNE(69,Bl,2,0,"mat-error"),e.k0s()()()()}if(2&s){const t=e.sdS(59),n=e.sdS(65),i=e.XpG();e.R7$(2),e.Y8G("formGroup",i.terminalForm)("autocomplete","off"),e.R7$(4),e.Y8G("formControlName","name")("placeholder","Ejemplo: Caja 1"),e.R7$(),e.vxM(7,i.terminalForm.controls.name.hasError("required")?7:-1),e.R7$(4),e.Y8G("formControlName","brandId")("required",!0),e.R7$(),e.Dyx(i.brands),e.R7$(4),e.vxM(16,i.terminalForm.controls.brandId.hasError("required")?16:-1),e.R7$(4),e.Y8G("formControlName","depotId")("required",!0),e.R7$(),e.Dyx(i.depots),e.R7$(2),e.vxM(23,i.terminalForm.controls.depotId.hasError("required")?23:-1),e.R7$(4),e.Y8G("formControlName","model")("placeholder","Modelo del terminal"),e.R7$(),e.vxM(28,i.terminalForm.controls.model.hasError("required")?28:-1),e.R7$(4),e.Y8G("formControlName","sn")("placeholder","Serie del terminal"),e.R7$(),e.vxM(33,i.terminalForm.controls.sn.hasError("required")?33:-1),e.R7$(4),e.Y8G("formControlName","pin")("placeholder","0000"),e.R7$(),e.vxM(38,i.terminalForm.controls.pin.hasError("minlength")?38:-1),e.R7$(),e.vxM(39,i.terminalForm.controls.pin.hasError("max")?39:-1),e.R7$(7),e.Y8G("formControlName","locationId")("required",!0),e.R7$(),e.Dyx(e.bMT(49,34,i.locations$)),e.R7$(4),e.Y8G("formControlName","havePrinter"),e.R7$(2),e.Y8G("formControlName","haveDrawer"),e.R7$(5),e.Y8G("required",!0),e.R7$(2),e.Dyx(i.terminalForm.get("employeesId").value),e.R7$(2),e.Y8G("formControl",i.employeeCtrl)("matAutocomplete",n)("placeholder","Buscar empleado")("matChipInputFor",t)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes)("matChipInputAddOnBlur",!0),e.R7$(2),e.Y8G("displayWith",i.displayFn),e.R7$(2),e.Dyx(e.bMT(68,36,i.filteredEmployees$)),e.R7$(3),e.vxM(69,i.terminalForm.controls.employeesId.hasError("required")?69:-1)}}const Mt=s=>({"cursor-not-allowed":s});function wl(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",32),e.bIt("click",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.updateTerminal())}),e.EFF(1," Actualizar "),e.k0s()}if(2&s){const t=e.XpG(2);e.Y8G("color","primary")("disabled",t.terminalForm.invalid)("ngClass",e.eq3(3,Mt,t.terminalForm.invalid))}}function Gl(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",32),e.bIt("click",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.createTerminal())}),e.EFF(1," Agregar "),e.k0s()}if(2&s){const t=e.XpG(2);e.Y8G("color","primary")("disabled",t.terminalForm.invalid)("ngClass",e.eq3(3,Mt,t.terminalForm.invalid))}}function Pl(s,l){if(1&s&&(e.j41(0,"div",29)(1,"button",30),e.EFF(2," Cancelar "),e.k0s(),e.DNE(3,wl,2,5,"button",31)(4,Gl,2,5,"button",31),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.Y8G("matDialogClose","cancelled"),e.R7$(2),e.vxM(3,"edit"===t.data.dialogMode?3:-1),e.R7$(),e.vxM(4,"add"===t.data.dialogMode?4:-1)}}let Ml=(()=>{class s{constructor(t){this.data=t,this.depots=[],this.dialogMode="view",this.employeeCtrl=new a.MJ,this.employees$=(0,B.of)([]),this.filteredEmployees$=(0,B.of)([]),this.locations$=(0,B.of)([]),this.separatorKeysCodes=[Gt.Fm,Gt.KE],this._changeDetectorRef=(0,e.WQX)(e.gRc),this._dialog=(0,e.WQX)(j.bZ),this._dialogRef=(0,e.WQX)(j.CP),this._employeesService=(0,e.WQX)(_l.r),this._formBuilder=(0,e.WQX)(a.ok),this._fuseConfirmationService=(0,e.WQX)(ae.G),this._snackBar=(0,e.WQX)(O.UG),this._terminalsService=(0,e.WQX)(Pt.T),this._unsubscribeAll=new X.B,this.store=(0,e.WQX)($.il),this.dialogMode=t.dialogMode,this.terminal=t.terminal}ngOnInit(){this.terminalForm=this._formBuilder.group({id:new a.MJ(null),brandId:new a.MJ(null,[a.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),depotId:new a.MJ(null,[a.k0.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),model:new a.MJ(null,[a.k0.minLength(1),a.k0.maxLength(255)]),sn:new a.MJ(null,[a.k0.minLength(1),a.k0.maxLength(255)]),pin:new a.MJ(null,[a.k0.minLength(4),a.k0.maxLength(4)]),locationId:new a.MJ(null,[a.k0.maxLength(255)]),name:new a.MJ(null,[a.k0.required,a.k0.maxLength(100)]),employeesId:new a.MJ([]),havePrinter:new a.MJ(!1,[a.k0.required]),haveDrawer:new a.MJ(!1,[a.k0.required])}),"edit"===this.dialogMode&&(this.terminalForm.patchValue(this.terminal),this.terminalForm.get("employeesId").setValue(structuredClone(this.terminal.employees))),this.store.select(hl.DC).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.brands=t,this._changeDetectorRef.markForCheck()}),this.store.select(St.c_).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.depots=t,this._changeDetectorRef.markForCheck()}),this.locations$=this.store.select(He.BF),this.employees$=this.store.select(Xe.OB),this.filteredEmployees$=this.employeeCtrl.valueChanges.pipe((0,G.B)(200),(0,L.Z)(null),(0,Q.Z)(t=>{const n=this.terminalForm.get("employeesId").value;return n?null!==t&&"string"==typeof t?this._employeesService.findActiveEmployees(t.trim()).pipe((0,N.T)(o=>o.filter(r=>!n.some(c=>c.id===r.id)))):this.employees$.pipe((0,N.T)(i=>i.filter(o=>!n.some(r=>r.id===o.id)))):this.employees$}))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addEmployee(t){const n=this.terminalForm.get("employeesId").value;n.push({id:t.id,fullname:t.fullname}),this.terminalForm.get("employeesId").setValue(n),this.employeeCtrl.setValue(null)}removeEmployee(t){const n=this.terminalForm.get("employeesId").value,i=n.indexOf(t);i>=0&&n.splice(i,1)}closeDialog(){this._dialogRef.close()}createTerminal(){const t=this.terminalForm.getRawValue();delete t.id,t.employeesId=t.employeesId.map(i=>i.id),this._fuseConfirmationService.open({title:"Crear Terminal",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,g.Q)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._terminalsService.createTerminal(t).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:o})=>{o&&(this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e3,data:{message:o.createTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._dialogRef.close())})})}updateTerminal(){const t=this.terminalForm.getRawValue();t.employeesId=t.employeesId.map(i=>i.id),this._fuseConfirmationService.open({title:"Actualizar Terminal",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._terminalsService.updateTerminal(t).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(({data:o})=>{o&&(this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e3,data:{message:o.updateTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._dialogRef.close())})})}createBrand(){this._dialog.open(fl.a,{data:{brand:new gl.m,dialogMode:"add"},panelClass:"ath-dialog-panel",disableClose:!0})}displayFn(t){return t&&t.fullname?t.fullname:""}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(j.Vh))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-terminal-dialog"]],standalone:!0,features:[e.aNF],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","h-full","max-h-screen"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"w-full","overflow-hidden"],[1,"flex"],[1,"grid","w-full","gap-4","pt-4","mt-4","border-t","sm:grid-cols-2",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","","type","text","maxlength","100",3,"formControlName","placeholder"],[3,"formControlName","required"],[3,"click"],["matInput","","type","text","maxlength","250",3,"formControlName","placeholder"],["matInput","","type","number","minlength","4","max","9999",3,"formControlName","placeholder"],[1,"flex","flex-col"],[1,"w-full",3,"formControlName"],[1,"w-full","fuse-mat-dense","sm:col-span-2"],[3,"required"],["chipGrid",""],["matInput","",3,"formControl","matAutocomplete","placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["employeeInput",""],[3,"displayWith","optionSelected"],["auto","matAutocomplete"],[3,"value"],[3,"removable","removed"],["matChipRemove","",3,"svgIcon"],[3,"removable"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","ngClass"],["mat-flat-button","",3,"color","disabled","ngClass","click"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1),e.DNE(2,bl,2,0,"h2",2)(3,yl,2,0,"h2",2)(4,Cl,2,0,"h2",2),e.k0s(),e.j41(5,"div",3),e.DNE(6,Al,70,38,"div",4),e.k0s(),e.DNE(7,Pl,5,3,"div",5),e.k0s()),2&n&&(e.R7$(2),e.vxM(2,"add"===i.data.dialogMode?2:-1),e.R7$(),e.vxM(3,i.data.terminal.id&&"edit"===i.data.dialogMode?3:-1),e.R7$(),e.vxM(4,i.data.terminal.id&&"view"===i.data.dialogMode?4:-1),e.R7$(2),e.vxM(6,6),e.R7$(),e.vxM(7,"view"!==i.data.dialogMode?7:-1))},dependencies:[v.Jj,z.jL,z.$3,re.wT,z.pN,I.Hl,I.$z,te.g7,te.So,Ie.YN,Ie.Jl,Ie.HW,Ie.D7,Ie.Zv,j.hM,j.tx,_.RG,_.rl,_.nJ,_.MV,_.TL,R.m_,R.An,S.fS,S.fg,W.Ve,W.VO,v.YU,a.X1,a.qT,a.me,a.Q0,a.BC,a.cb,a.YS,a.xh,a.tU,a.zX,a.l_,a.j4,a.JD],encapsulation:2,changeDetection:0})}return s})();class Nl{}function Yl(s,l){if(1&s&&(e.j41(0,"span",33),e.EFF(1),e.k0s()),2&s){const t=l.$implicit;e.R7$(),e.SpI(" ",t.fullname," ")}}function Vl(s,l){if(1&s){const t=e.RV6();e.j41(0,"mat-slide-toggle",34),e.bIt("change",function(i){e.eBV(t);const o=e.XpG(),r=o.$implicit,c=o.$index,d=e.XpG(4);return e.Njj(d.updateTerminalStatus(i,r,c))}),e.k0s()}if(2&s){const t=e.XpG().$implicit;e.Y8G("checked",t.active)("color","primary")}}function ql(s,l){1&s&&e.nrm(0,"mat-spinner",29),2&s&&e.Y8G("diameter",20)("color","primary")}function zl(s,l){if(1&s){const t=e.RV6();e.j41(0,"div",24)(1,"div",25),e.EFF(2),e.k0s(),e.j41(3,"div",25),e.EFF(4),e.k0s(),e.j41(5,"div",26),e.Z7z(6,Yl,2,1,"span",35,e.fX1),e.k0s(),e.j41(8,"div",25),e.EFF(9),e.k0s(),e.j41(10,"div",27),e.DNE(11,Vl,1,2,"mat-slide-toggle",28)(12,ql,1,2,"mat-spinner",29),e.k0s(),e.j41(13,"div",30)(14,"button",31),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(4);return e.Njj(r.updateTerminal(o))}),e.nrm(15,"mat-icon",32),e.k0s(),e.j41(16,"button",31),e.bIt("click",function(){const o=e.eBV(t).$implicit,r=e.XpG(4);return e.Njj(r.deleteTerminal(o))}),e.nrm(17,"mat-icon",32),e.k0s()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.XpG(4);e.R7$(2),e.SpI(" ",t.no," "),e.R7$(2),e.SpI(" ",t.name," "),e.R7$(2),e.Dyx(t.employees),e.R7$(3),e.SpI(" ",t.brand.name," "),e.R7$(2),e.vxM(11,i.isSlideLoading&&i.selectedSlide===n?-1:11),e.R7$(),e.vxM(12,i.isSlideLoading&&i.selectedSlide===n?12:-1),e.R7$(3),e.Y8G("svgIcon","mat_solid:edit"),e.R7$(2),e.Y8G("svgIcon","mat_solid:delete")}}function Ll(s,l){1&s&&e.Z7z(0,zl,18,7,"div",36,e.BUC().trackByFn),2&s&&e.Dyx(l)}const Xl=s=>({"pointer-events-none":s}),Ql=()=>[5,10,25,100];function Ol(s,l){if(1&s&&(e.j41(0,"div",19)(1,"div",20)(2,"div",21),e.EFF(3,"No."),e.k0s(),e.j41(4,"div",22),e.EFF(5," Nombre "),e.k0s(),e.j41(6,"div",22),e.EFF(7," Asignado a "),e.k0s(),e.j41(8,"div",22),e.EFF(9," Marca "),e.k0s(),e.j41(10,"div",22),e.EFF(11," Activo "),e.k0s(),e.j41(12,"div",22),e.EFF(13," Detalles "),e.k0s()(),e.DNE(14,Ll,2,0),e.nI1(15,"async"),e.k0s(),e.nrm(16,"mat-paginator",23)),2&s){const t=e.XpG(2);let n;e.R7$(2),e.Y8G("mat-sort-header","no"),e.R7$(12),e.vxM(14,(n=e.bMT(15,8,t.terminals$))?14:-1,n),e.R7$(2),e.Y8G("ngClass",e.eq3(10,Xl,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.lJ4(12,Ql))("showFirstLastButtons",!0)}}function Jl(s,l){1&s&&(e.j41(0,"div",37),e.EFF(1,"\xa1No se ha creado ninguna terminal!"),e.k0s())}function Ul(s,l){1&s&&e.DNE(0,Ol,17,13)(1,Jl,2,0),2&s&&e.vxM(0,l.length>0?0:1)}let Wl=(()=>{class s{constructor(){this.flashMessage=null,this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.merchantInputControl=new a.MJ,this.searchInputControl=new a.MJ,this.selectedSlide=null,this.terminals=[],this.terminals$=(0,B.of)([]),this.user=null,this._unsubscribeAll=new X.B,this._terminalsService=(0,e.WQX)(Pt.T),this._fuseConfirmationService=(0,e.WQX)(ae.G),this._changeDetectorRef=(0,e.WQX)(e.gRc),this._dialog=(0,e.WQX)(j.bZ),this._snackBar=(0,e.WQX)(O.UG),this.store=(0,e.WQX)($.il)}ngOnInit(){this.store.select(le.SW).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(oe.Xb).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.terminals$=this.store.select(pl.Ye),this.terminals$.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.terminals=t,this._changeDetectorRef.markForCheck()}),this.store.select(pe.D).pipe((0,g.Q)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.Q)(this._unsubscribeAll),(0,G.B)(300),(0,E.n)(t=>(this.isLoading=!0,this._terminalsService.getTerminals(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,N.T)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,me.h)(this._sort.sortChange,this._paginator.page).pipe((0,E.n)(()=>(this.isLoading=!0,this._terminalsService.getTerminals(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,N.T)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createTerminal(){this._openDialog(new Nl,"add")}updateTerminal(t){this._openDialog(t,"edit")}updateTerminalStatus(t,n,i){this.isSlideLoading=!0,this.selectedSlide=i,this._terminalsService.updateTerminalStatus({id:n.id,active:t.checked}).subscribe(({data:o})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.updateTerminalStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}deleteTerminal(t){this._fuseConfirmationService.open({title:"Eliminar terminal",message:`\xbfEst\xe1s seguro de que deseas eliminar la terminal ${t.no}? Esta acci\xf3n no se puede deshacer.`,actions:{confirm:{label:"Eliminar",color:"warn"}}}).afterClosed().pipe((0,g.Q)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._terminalsService.removeTerminal(t.id).subscribe(({data:o})=>{this._snackBar.openFromComponent(D.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.removeTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}trackByFn(t,n){return t||n.id}_openDialog(t,n){this._dialog.open(Ml,{data:{terminal:t,dialogMode:n},panelClass:"ath-dialog-panel",disableClose:!0})}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["sales-terminals"]],viewQuery:function(n,i){if(1&n&&(e.GBs(V.iy,5),e.GBs(A.B4,5)),2&n){let o;e.mGM(o=e.lsd())&&(i._paginator=o.first),e.mGM(o=e.lsd())&&(i._sort=o.first)}},standalone:!0,features:[e.aNF],decls:30,vars:11,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-auto"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","terminals-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[3,"mat-sort-header"],[1,""],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","terminals-grid","md:px-8"],[1,"truncate"],[1,"flex","flex-wrap","gap-1"],[1,"hidden","lg:block"],[3,"checked","color"],[3,"diameter","color"],[1,"flex","flex-row","items-center","justify-center","gap-1"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"px-2","rounded-md","bg-hover"],[3,"checked","color","change"],["class","px-2 rounded-md bg-hover"],["class","grid items-center gap-4 px-6 py-3 border-b terminals-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,i){if(1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Ventas"),e.k0s()(),e.j41(11,"div",5),e.nrm(12,"mat-icon",6),e.j41(13,"a",7),e.EFF(14,"Terminales"),e.k0s()()(),e.j41(15,"div",8)(16,"h2",9),e.EFF(17," Terminales "),e.k0s()()(),e.j41(18,"div",10)(19,"mat-form-field",11),e.nrm(20,"mat-icon",12)(21,"input",13),e.k0s(),e.j41(22,"button",14),e.bIt("click",function(){return i.createTerminal()}),e.nrm(23,"mat-icon",15),e.j41(24,"span",16),e.EFF(25,"Agregar"),e.k0s()()()(),e.j41(26,"div",17)(27,"div",18),e.DNE(28,Ul,2,1),e.nI1(29,"async"),e.k0s()()()),2&n){let o;e.R7$(8),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(7),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.R7$(2),e.Y8G("svgIcon","mat_solid:add"),e.R7$(5),e.vxM(28,(o=e.bMT(29,9,i.terminals$))?28:-1,o)}},dependencies:[v.Jj,I.Hl,I.$z,_.RG,_.rl,_.JW,R.m_,R.An,S.fS,S.fg,V.Ou,V.iy,K.D6,K.LG,Re.mV,Re.sG,A.NQ,A.B4,A.aE,v.YU,a.X1,a.me,a.BC,a.l_],encapsulation:2,changeDetection:0})}return s})();var ue=f(23301),Ke=f(34413),Nt=f(24121),Zl=f(63425);const et=(s,l)=>(0,e.WQX)($e).getAssistancesActive();var ec=f(47399),Ye=f(36646),ic=f(16551),tt=f(57981),Yt=f(23285),it=f(59013),st=f(43801);let oc=(()=>{class s{constructor(t){this._salesDashboardStatsService=t}resolve(t,n){const i=new Date((new Date).getTime()-6048e5);return this._salesDashboardStatsService.getSalesDashboardStatsData(i,new Date)}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(kt))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var rc=f(40382);const lc=[{path:"",component:no,children:[{path:"dashboard",component:Yo,resolve:{salesDashboardStatsResolver:oc,currencies:ue.I,customers:Ye.AZ,locations:Nt.FH}},{path:"assistances",component:bi,resolve:{assistances:(s,l)=>(0,e.WQX)($e).getAssistances(),currencies:ue.I,uoms:Zl.B}},{path:"bid",component:ss,resolve:{assistances:et,currencies:ue.I,customers:Ye.iL,multipliers:tt.d,productsInStock:st.N4}},{path:"billing",component:Hs,resolve:{assistances:et,currencies:ue.I,customers:Ye.iL,employees:Ke.MI,multipliers:tt.d,operationTypes:Yt.h,paymentMethods:it.v,productsInStock:st.N4}},{path:"prebills",component:ml,resolve:{prebills:(s,l)=>(0,e.WQX)(wt).getPrebills(),currencies:ue.I}},{path:"prebilling",component:Mr,resolve:{assistances:et,currencies:ue.I,customers:Ye.iL,employees:Ke.MI,multipliers:tt.d,operationTypes:Yt.h,paymentMethods:it.v,productsInStock:st.N4}},{path:"bills",component:In,resolve:{bills:(s,l)=>(0,e.WQX)(Ue).getBills(),currencies:ue.I}},{path:"collections",component:so,resolve:{collections:(s,l)=>(0,e.WQX)(Ze).getCollections()}},{path:"offers",component:za,resolve:{offers:(s,l)=>(0,e.WQX)(jt).getOffers()}},{path:"terminals",component:Wl,resolve:{brands:ec.l,depots:ic.ug,employees:Ke.MI,terminals:rc.YJ,locations:Nt.FH}},{path:"list",component:Da,resolve:{sales:(s,l)=>(0,e.WQX)(we.w).getSales(),currencies:ue.I,paymentMethods:it.v}}]}]}}]);