"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8967],{98967:(Jl,tt,p)=>{p.r(tt),p.d(tt,{default:()=>Bl});var Y=p(64190),e=p(19212);let Jt=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales"]],standalone:!0,features:[e.jDz],decls:1,vars:0,template:function(n,i){1&n&&e._UZ(0,"router-outlet")},dependencies:[Y.lC],encapsulation:2})}return s})();var v=p(96814),a=p(56223),Q=p(21476),$=p(22939),P=p(13566),Se=p(82599),F=p(17700),A=p(32296),f=p(64170),D=p(30617),w=p(24516),N=p(77988),K=p(55940),O=p(78645),ue=p(63019),g=p(59773),J=p(83620),I=p(94664),R=p(37398),L=p(48180),T=p(16676),it=p(36236),ae=p(57069),k=p(84221),re=p(53374),ie=p(29643),me=p(83604);const st=s=>s.assistances,ee=((0,k.P1)(st,s=>s.assistance),(0,k.P1)(st,s=>s.assistances));var se=p(56278),j=p(98525),M=p(71993),le=p(21510),S=p(42090),q=p(99397),pe=p(26530),Ce=p(97214),y=p(50967);const Rt=y.Ps`
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
`,Mt=y.Ps`
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
`,Et=y.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateAssistanceStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,Qt=y.Ps`
    mutation RemoveAssistance($assistanceId: String!) {
        removeAssistance(id: $assistanceId) {
            ok
            message
        }
    }
`,Lt=y.Ps`
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
`,$t=y.Ps`
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
`,zt=y.Ps`
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
`,Ot=y.Ps`
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
`;let qe=(()=>{class s{constructor(t,n){this.apolloProvider=t,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}createAssistance(t){return this.store.select(ee).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:Rt,variables:{createAssistanceInput:t},errorPolicy:"all"}).pipe((0,q.b)(({data:i})=>{const o=structuredClone(n);o.push(i.createAssistance.assistance),this.store.dispatch((0,pe.X0)({assistances:o}))}))))}getAssistances(t=1,n=20,i="no",o="asc",r=""){return this._apollo.query({query:$t,errorPolicy:"all",variables:{offset:n*(t-1),limit:n,sort:i,order:o,search:r}}).pipe((0,q.b)(({data:c})=>{this.store.dispatch((0,Ce.Jr)({pagination:c.findAssistances.pagination})),this.store.dispatch((0,pe.X0)({assistances:c.findAssistances.assistances}))}))}getAssistancesActive(){return this._apollo.query({query:Lt,errorPolicy:"all"}).pipe((0,q.b)(({data:t})=>{this.store.dispatch((0,pe.X0)({assistances:t.findAssistancesActive.assistances}))}))}getAllAssistances(){return this._apollo.query({query:zt,errorPolicy:"all"})}getAssistanceById(t){return this._apollo.query({query:Ot,variables:{assistanceId:t},errorPolicy:"all"}).pipe((0,q.b)(({data:n})=>{this.store.dispatch((0,pe.eK)({assistance:n.findAssistanceById.assistance}))}))}updateAssistance(t){return this.store.select(ee).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:Mt,variables:{updateAssistanceInput:t},errorPolicy:"all"}).pipe((0,q.b)(({data:i})=>{const o=structuredClone(n);o[n.findIndex(c=>c.id===t.id)]=i.updateAssistance.assistance,this.store.dispatch((0,pe.X0)({assistances:o}))}))))}updateAssistanceStatus(t){return this.store.select(ee).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:Et,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,q.b)(()=>{const i=structuredClone(n);i[n.findIndex(r=>r.id===t.id)].active=t.active,this.store.dispatch((0,pe.X0)({assistances:i}))}))))}removeAssistance(t){return this.store.select(ee).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:Qt,variables:{assistanceId:t},errorPolicy:"all"}).pipe((0,q.b)(({errors:i})=>{if(i)return;const o=structuredClone(n),r=n.findIndex(c=>c.id===t);o.splice(r,1),this.store.dispatch((0,pe.X0)({assistances:o}))}))))}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(y._M),e.LFG(k.yh))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Gt=p(33355),he=p(23680);function jt(s,l){1&s&&(e.TgZ(0,"h2",7),e._uU(1," Agregar servicio "),e.qZA())}function Vt(s,l){1&s&&(e.TgZ(0,"h2",7),e._uU(1," Editar servicio "),e.qZA())}function Ht(s,l){if(1&s&&(e.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"span",14),e._uU(8),e.qZA()()()()()()),2&s){const t=e.oxw();e.xp6(8),e.Oqu(t.data.assistance.description||"Sin nombre")}}const Yt=(s,l)=>l.id;function Kt(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," La descripci\xf3n del es obligatoria "),e.qZA())}function Wt(s,l){if(1&s&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.iso," ")}}function Xt(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," La moneda es obligatoria "),e.qZA())}function ei(s,l){if(1&s&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.abbr," ")}}function ti(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," La unidad de medida es obligatoria "),e.qZA())}function ii(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El precio es obligatorio "),e.qZA())}function si(s,l){if(1&s&&(e.TgZ(0,"div",15)(1,"div",16)(2,"form",17)(3,"mat-form-field",18)(4,"mat-label"),e._uU(5,"Descripci\xf3n"),e.qZA(),e._UZ(6,"input",19),e.TgZ(7,"mat-hint"),e._uU(8,"Ejemplo: Monte y desmonte de caja"),e.qZA(),e.YNc(9,Kt,2,0,"mat-error"),e.qZA(),e.TgZ(10,"mat-form-field",20)(11,"mat-label"),e._uU(12,"Moneda"),e.qZA(),e.TgZ(13,"mat-select",21),e.SjG(14,Wt,2,2,"mat-option",23,e.x6l),e.qZA(),e.YNc(16,Xt,2,0,"mat-error"),e.qZA(),e.TgZ(17,"mat-form-field",20)(18,"mat-label"),e._uU(19,"Unidad de medida"),e.qZA(),e.TgZ(20,"mat-select",21),e.SjG(21,ei,2,2,"mat-option",23,Yt),e.qZA(),e.YNc(23,ti,2,0,"mat-error"),e.qZA(),e.TgZ(24,"mat-form-field",20)(25,"mat-label"),e._uU(26,"Precio"),e.qZA(),e._UZ(27,"input",22),e.YNc(28,ii,2,0,"mat-error"),e.qZA()()()()),2&s){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.assistanceForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","description")("placeholder","Ejemplo: Monte y desmonte de caja"),e.xp6(3),e.um2(9,t.assistanceForm.get("description").hasError("required")?9:-1),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0),e.xp6(),e.wJu(t.currencies),e.xp6(2),e.um2(16,t.assistanceForm.get("currencyId").hasError("required")?16:-1),e.xp6(4),e.Q6J("formControlName","uomId")("required",!0),e.xp6(),e.wJu(t.uoms),e.xp6(2),e.um2(23,t.assistanceForm.get("uomId").hasError("required")?23:-1),e.xp6(4),e.Q6J("formControlName","price")("min",t.assistanceForm.get("price").value)("placeholder","0.00"),e.xp6(),e.um2(28,t.assistanceForm.get("price").hasError("required")?28:-1)}}function ni(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.updateAssistance())}),e._uU(1," Actualizar "),e.qZA()}if(2&s){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.assistanceForm.invalid)("matDialogClose","confirmed")}}function oi(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createAssistance())}),e._uU(1," Agregar "),e.qZA()}if(2&s){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.assistanceForm.invalid)("matDialogClose","confirmed")}}function ai(s,l){if(1&s&&(e.TgZ(0,"div",24)(1,"button",25),e._uU(2," Cancelar "),e.qZA(),e.YNc(3,ni,2,3,"button",26)(4,oi,2,3,"button",26),e.qZA()),2&s){const t=e.oxw();e.xp6(),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.um2(3,"edit"===t.data.dialogMode?3:-1),e.xp6(),e.um2(4,"add"===t.data.dialogMode?4:-1)}}let ri=(()=>{class s{constructor(t){this.data=t,this.uoms=[],this.currencies=[],this.dialogMode="view",this.maxDate=new Date,this._assistancesService=(0,e.f3M)(qe),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialogRef=(0,e.f3M)(F.so),this._destroyRef=(0,e.f3M)(e.ktI),this._formBuilder=(0,e.f3M)(a.qu),this._fuseConfirmationService=(0,e.f3M)(se.R),this._snackBar=(0,e.f3M)($.ux),this._unsubscribeAll=new O.x,this.store=(0,e.f3M)(k.yh),this.dialogMode=t.dialogMode,this.assistance=t.assistance}ngOnInit(){this.assistanceForm=this._formBuilder.group({id:new a.NI(null),description:new a.NI(null,[a.kI.required,a.kI.maxLength(1e5)]),price:new a.NI(0,[a.kI.required,a.kI.min(0)]),currencyId:new a.NI(null,[a.kI.required,a.kI.maxLength(100)]),uomId:new a.NI(null,[a.kI.required,a.kI.maxLength(100)])}),"edit"===this.dialogMode&&this.assistanceForm.patchValue(this.assistance),this.store.select(le.zd).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()}),this.store.select(Gt.av).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.uoms=t,this._changeDetectorRef.markForCheck()})}closeDialog(){this._dialogRef.close()}createAssistance(){let t=this.assistanceForm.getRawValue();delete t.id,this._fuseConfirmationService.open({title:"Crear servicio",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._assistancesService.createAssistance(t).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:o})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.createAssistance.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateAssistance(){const t=this.assistanceForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar servicio de taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._assistancesService.updateAssistance(t).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:o})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.updateAssistance.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(F.WI))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-assistance-dialog"]],standalone:!0,features:[e.jDz],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"grid","w-full","grid-cols-1","gap-5","mt-3","sm:grid-cols-3",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-dense","sm:col-span-3"],["matInput","","type","text","required","","maxlength","50",3,"formControlName","placeholder"],[1,"w-full","fuse-mat-dense"],[3,"formControlName","required"],["matInput","","type","number","required","",3,"formControlName","min","placeholder"],[3,"value"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,jt,2,0,"h2",2)(3,Vt,2,0,"h2",2),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,Ht,9,1,"div",4)(6,si,29,15,"div",5),e.qZA(),e.YNc(7,ai,5,3,"div",6),e.qZA()),2&n&&(e.xp6(2),e.um2(2,"add"===i.data.dialogMode?2:-1),e.xp6(),e.um2(3,"edit"===i.data.dialogMode?3:-1),e.xp6(2),e.um2(5,"view"===i.data.dialogMode?5:-1),e.xp6(),e.um2(6,6),e.xp6(),e.um2(7,"view"!==i.data.dialogMode?7:-1))},dependencies:[A.ot,A.lW,F.ZT,f.lN,f.KE,f.hX,f.bx,f.TO,w.c,w.Nt,j.LD,j.gD,he.ey,a.UX,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.Q7,a.nD,a.qQ,a.sg,a.u],encapsulation:2})}return s})();var Re=p(27627);function li(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-slide-toggle",40),e.NdJ("change",function(i){e.CHM(t);const o=e.oxw(),r=o.$implicit,c=o.$index,d=e.oxw(2);return e.KtG(d.updateRateStatus(i,r,c))}),e.qZA()}if(2&s){const t=e.oxw().$implicit;e.Q6J("checked",t.active)("color","primary")}}function ci(s,l){1&s&&e._UZ(0,"mat-spinner",36),2&s&&e.Q6J("diameter",20)("color","primary")}function di(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",30)(1,"div",31),e._uU(2),e.qZA(),e.TgZ(3,"div",32),e._uU(4),e.qZA(),e.TgZ(5,"div",33),e._uU(6),e.qZA(),e.TgZ(7,"div",34),e._uU(8),e.ALo(9,"currency"),e.qZA(),e.TgZ(10,"div",27),e.YNc(11,li,1,2,"mat-slide-toggle",35)(12,ci,1,2,"mat-spinner",36),e.qZA(),e.TgZ(13,"div",37)(14,"button",38),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.openDialog(o,"edit"))}),e._UZ(15,"mat-icon",39),e.qZA(),e.TgZ(16,"button",38),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.deleteAssistance(o))}),e._UZ(17,"mat-icon",39),e.qZA()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.oxw(2);e.xp6(2),e.hij(" ",n+1," "),e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",e.Dn7(9,8,t.price,t.currency.iso+" ","symbol")," "),e.xp6(3),e.um2(11,i.isSlideLoading&&i.selectedSlide===n?-1:11),e.xp6(),e.um2(12,i.isSlideLoading&&i.selectedSlide===n?12:-1),e.xp6(3),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}const ui=s=>({"pointer-events-none":s}),mi=()=>[5,10,25,100];function pi(s,l){if(1&s&&(e.TgZ(0,"div",24)(1,"div",25)(2,"div",26),e._uU(3," No "),e.qZA(),e.TgZ(4,"div",27),e._uU(5," C\xf3digo "),e.qZA(),e.TgZ(6,"div",28),e._uU(7," Descripci\xf3n "),e.qZA(),e.TgZ(8,"div",27),e._uU(9," Precio "),e.qZA(),e.TgZ(10,"div",27),e._uU(11," Estado "),e.qZA(),e.TgZ(12,"div",27),e._uU(13," Acciones "),e.qZA()(),e.SjG(14,di,18,12,"div",41,e.QCX().trackByFn),e._UZ(16,"mat-paginator",29),e.qZA()),2&s){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(12),e.wJu(t.assistances),e.xp6(2),e.Q6J("ngClass",e.VKq(7,ui,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(9,mi))("showFirstLastButtons",!0)}}function gi(s,l){1&s&&(e.TgZ(0,"div",42),e._uU(1," \xa1No hay servicios creados para el negocio!"),e.qZA())}ae.vfs=it.I.vfs;let _i=(()=>{class s{constructor(){this.assistance=null,this.assistances=[],this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.searchInputControl=new a.NI(""),this.selectedSlide=null,this.user=null,this._assistancesService=(0,e.f3M)(qe),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialog=(0,e.f3M)(F.uw),this._fileSaverService=(0,e.f3M)(Re.m),this._fuseConfirmationService=(0,e.f3M)(se.R),this._snackBar=(0,e.f3M)($.ux),this._unsubscribeAll=new O.x,this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.store.select(re.rk).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(ie.Qs).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(ee).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.assistances=t,this._changeDetectorRef.markForCheck()}),this.store.select(me.B).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(300),(0,I.w)(t=>(this.isLoading=!0,this._assistancesService.getAssistances(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,R.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,ue.T)(this._sort.sortChange,this._paginator.page).pipe((0,I.w)(()=>(this.isLoading=!0,this._assistancesService.getAssistances(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,R.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteAssistance(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la orden de trabajo: ${t.no}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,g.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._assistancesService.removeAssistance(t.id).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:o})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.removeAssistance.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}updateRateStatus(t,n,i){this.isSlideLoading=!0,this.selectedSlide=i,this._assistancesService.updateAssistanceStatus({id:n.id,active:t.checked}).subscribe(({data:o})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.updateAssistanceStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}openDialog(t,n){this._dialog.open(ri,{data:{assistance:t,dialogMode:n},width:"90%",panelClass:"ath-dialog-panel",disableClose:!0})}printAssistancesList(t="open"){this._assistancesService.getAllAssistances().pipe((0,L.q)(1)).subscribe(({data:n})=>{let i={header:{text:"Listado de servicios",style:"header",marginTop:5},content:[{lineHeight:1.3,table:{headerRows:1,widths:[60,120,"*",120],body:[[{text:"No.",style:"table_header"},{text:"C\xf3digo",style:"table_header"},{text:"Descripci\xf3n",style:"table_header",alignment:"left"},{text:"Precio M\xednimo",style:"table_header"}],...n.findAllAssistances.assistances.map((o,r)=>[{style:"table_body",text:r+1,alignment:"center"},{style:"table_body",text:o.no,alignment:"center"},{style:"table_body",text:o.description,alignment:"left"},{style:"table_body",text:o.currency.iso+" "+o.price.toFixed(2),alignment:"right"}])]},layout:"lightHorizontalLines"}],footer:(o,r)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${this.user.fullname} | Esta informaci\xf3n es exclusiva de ${this.merchant.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${o.toString()}/${r} - Fecha de impresi\xf3n ${T().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"]},table_body:{fontSize:10}},pageOrientation:"landscape",pageSize:"LETTER",watermark:{text:this.merchant.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:"Listado de servicios",author:`${this.user.fullname}`,creationDate:T().toDate(),modDate:T().toDate(),producer:this.merchant.name}};switch(t){case t="download":ae.createPdf(i).download();break;case t="open":ae.createPdf(i).open();break;case t="print":ae.createPdf(i).print()}})}exportAssistancesListToExcel(){this._assistancesService.getAllAssistances().pipe((0,L.q)(1)).subscribe(({data:t})=>{this._fileSaverService.exportAsExcelFile(t.findAllAssistances.assistances,"Listado de servicios")})}trackByFn(t,n){return n.id||t}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-assistances"]],viewQuery:function(n,i){if(1&n&&(e.Gf(Q.NW,5),e.Gf(P.YE,5)),2&n){let o;e.iGM(o=e.CRH())&&(i._paginator=o.first),e.iGM(o=e.CRH())&&(i._sort=o.first)}},standalone:!0,features:[e.jDz],decls:42,vars:14,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"matMenuTriggerFor"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"xPosition"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-auto","sm:mb-18"],["class","grid"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","assistances-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,"text-center"],[1,"text-left"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","assistances-grid","md:px-8"],[1,"hidden","font-mono","sm:block"],[1,"hidden","font-mono","text-center","sm:block"],[1,"text-left","truncate"],[1,"font-mono","text-center"],[3,"checked","color"],[3,"diameter","color"],[1,"flex","flex-row","items-center","justify-start","gap-1"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[3,"checked","color","change"],["class","grid items-center gap-4 px-6 py-3 border-b assistances-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Servicios"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Servicios "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Reportes"),e.qZA()(),e.TgZ(26,"mat-menu",17,18)(28,"button",19),e.NdJ("click",function(){return i.printAssistancesList()}),e._UZ(29,"mat-icon",15),e._uU(30," Imprimir listado de servicios "),e.qZA(),e.TgZ(31,"button",19),e.NdJ("click",function(){return i.exportAssistancesListToExcel()}),e._UZ(32,"mat-icon",15),e._uU(33," Exportar listado de servicios "),e.qZA()(),e.TgZ(34,"button",20),e.NdJ("click",function(){return i.openDialog(i.assistance,"add")}),e._UZ(35,"mat-icon",15),e.TgZ(36,"span",16),e._uU(37,"Agregar"),e.qZA()()()(),e.TgZ(38,"div",21)(39,"div",22),e.YNc(40,pi,17,10,"div",23)(41,gi,2,0),e.qZA()()()),2&n){const o=e.MAs(27);e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(),e.Q6J("matMenuTriggerFor",o),e.xp6(),e.Q6J("svgIcon","mat_solid:expand_more"),e.xp6(3),e.Q6J("xPosition","before"),e.xp6(3),e.Q6J("svgIcon","mat_solid:description"),e.xp6(3),e.Q6J("svgIcon","mat_solid:description"),e.xp6(3),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.um2(40,i.assistances.length>0?40:41)}},dependencies:[v.H9,A.ot,A.lW,f.lN,f.KE,f.qo,D.Ps,D.Hw,w.c,w.Nt,Q.TU,Q.NW,P.JX,P.YE,P.nU,N.Tx,N.VK,N.OP,N.p6,Se.rP,Se.Rr,K.Cq,K.Ou,v.mk,a.UX,a.Fj,a.JJ,a.oH,Y.rH],styles:[".assistances-grid[_ngcontent-%COMP%]{grid-template-columns:50px 100px 200px 100px 75px 75px}@media (min-width: 600px){.assistances-grid[_ngcontent-%COMP%]{grid-template-columns:20px 200px auto 200px 75px 75px 100px}}"],changeDetection:0})}return s})();var W=p(24630),ne=p(75986),Z=p(38034),X=p(92596),U=p(22096),z=p(27921),V=p(21631),oe=p(64716),Fe=p(33963),Me=p(90716),fe=p(12936),be=p(74595);const hi=y.Ps`
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

`,fi=y.Ps`
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
`,bi=y.Ps`
    mutation RemoveOffer($removeOfferId: String!) {
        removeOffer(id: $removeOfferId) {
            ok
            message
        }
    }
`,xi=y.Ps`
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
`,Ci=y.Ps`
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
`,yi=y.Ps`
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
`;var vi=p(20553);let Zi=(()=>{class s{constructor(t){this.apolloProvider=t,this._apollo=this.apolloProvider.use(vi.N.GRAPHQL_PROVIDER)}createOffer(t){return this._apollo.mutate({mutation:hi,variables:{createOfferInput:t},errorPolicy:"all"})}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(y._M))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var ye=p(76459),Ee=p(88320),Qe=p(66330),G=p(88458);function Ai(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",36),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.selectCustomer(o))}),e._uU(1),e.qZA()}if(2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.name," ")}}function Ti(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," La fecha de la oferta es obligatoria "),e.qZA())}function Ii(s,l){1&s&&(e.TgZ(0,"mat-option",27),e._uU(1," x1 "),e.qZA()),2&s&&e.Q6J("value",1)}function Si(s,l){if(1&s&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.value),e.xp6(),e.hij(" x",t.value," ")}}function qi(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El multiplicador es obligatorio "),e.qZA())}function Fi(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",36),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.selectedCurrencyIso=o.iso)}),e._uU(1),e.qZA()}if(2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.iso," ")}}function ki(s,l){if(1&s&&(e.TgZ(0,"span",37),e._uU(1),e.qZA()),2&s){const t=e.oxw();e.xp6(),e.AsE(" (+ ",2===(null==t.bidForm.get("rates").value?null:t.bidForm.get("rates").value.length)?"otro":"otros"," ",t.bidForm.get("rates").value.length>2?t.bidForm.get("rates").value.length-1:"",") ")}}function wi(s,l){if(1&s&&(e.TgZ(0,"mat-option",27)(1,"span",38),e._uU(2),e.ALo(3,"number"),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA()()),2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(2),e.Oqu(e.xi3(3,3,t.value,"1.4-4")),e.xp6(3),e.hij(" ",t.name,"")}}function Ui(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," Las tasas de cambio son requeridas "),e.qZA())}function Di(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",48),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addProductToOffer(r),e.KtG(i.stopPropagation())}),e.TgZ(1,"div",49),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addProductToOffer(r),e.KtG(i.stopPropagation())}),e.TgZ(2,"span",50),e._UZ(3,"mat-checkbox",51),e._uU(4),e.qZA(),e.TgZ(5,"span",52),e._uU(6),e.qZA(),e.TgZ(7,"span",53),e._uU(8),e.qZA()()()}if(2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(3),e.Q6J("checked",t.checked),e.xp6(),e.hij(" ",t.name," "),e.xp6(2),e.Oqu(t.depot),e.xp6(2),e.AsE("",t.quantity," ",t.uom,"")}}const nt=(s,l)=>l.id;function Pi(s,l){1&s&&(e.TgZ(0,"mat-error",73),e._uU(1," Valor m\xednimo 0.1 "),e.qZA())}function Ni(s,l){if(1&s&&(e.TgZ(0,"mat-error",73),e._uU(1),e.qZA()),2&s){const t=e.oxw().$implicit;e.xp6(),e.hij(" Valor m\xe1ximo ",t.quantity," ")}}function Bi(s,l){1&s&&(e.TgZ(0,"mat-error",73),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}const ot=s=>({"text-warn":s}),at=()=>["$"];function Ji(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",59)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",60),e._uU(4),e.qZA(),e.TgZ(5,"div",61),e._uU(6),e.qZA(),e.TgZ(7,"div",57),e._uU(8),e.qZA(),e.TgZ(9,"div",62)(10,"div",63)(11,"button",64),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.decrementProductQty(o))}),e._UZ(12,"mat-icon",65),e.qZA(),e.TgZ(13,"mat-form-field",66),e._UZ(14,"input",67),e.qZA(),e.TgZ(15,"button",64),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.incrementProductQty(o))}),e._UZ(16,"mat-icon",65),e.qZA()(),e.YNc(17,Pi,2,0,"mat-error",68)(18,Ni,2,1,"mat-error",68)(19,Bi,2,0,"mat-error",68),e.qZA(),e.TgZ(20,"div",69),e._uU(21),e.ALo(22,"number"),e.TgZ(23,"span",70),e._uU(24),e.qZA()(),e.TgZ(25,"div",69),e._uU(26),e.ALo(27,"currency"),e.qZA(),e.TgZ(28,"div",71)(29,"button",72),e.NdJ("click",function(){const o=e.CHM(t).$index,r=e.oxw(3);return e.KtG(r.removeProductToOffer(o))}),e._UZ(30,"mat-icon",65),e.qZA()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.oxw(3);e.xp6(2),e.hij(" ",n+1," "),e.xp6(),e.Q6J("matTooltip",t.get("name").value),e.xp6(),e.hij(" ",t.get("name").value," "),e.xp6(2),e.hij(" ",t.get("depot").value," "),e.xp6(2),e.AsE(" ",t.get("stock").value," ",t.get("uom").value," "),e.xp6(3),e.Q6J("disabled",t.get("quantity").value<=.1||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",.1)("max",t.get("stock").value)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").value>=t.get("stock").value||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(17,t.get("quantity").hasError("min")?17:-1),e.xp6(),e.um2(18,t.get("quantity").hasError("max")?18:-1),e.xp6(),e.um2(19,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?19:-1),e.xp6(2),e.hij(" ",e.xi3(22,22,t.get("price").value*i.bidForm.get("multiplier").value*(t.get("rate").value?t.get("rate").value:1),"1.2-2")," "),e.xp6(2),e.Q6J("ngClass",e.VKq(28,ot,!t.get("rate").value)),e.xp6(),e.hij(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.xp6(2),e.hij(" ",e.xi3(27,25,t.get("quantity").value*t.get("price").value*i.bidForm.get("multiplier").value*(t.get("rate").value?t.get("rate").value:1),e.DdM(30,at))," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function Ri(s,l){if(1&s&&(e.TgZ(0,"div",54)(1,"div",55),e._UZ(2,"div"),e.TgZ(3,"div",56),e._uU(4," Producto "),e.qZA(),e.TgZ(5,"div",56),e._uU(6," Almac\xe9n "),e.qZA(),e.TgZ(7,"div",57),e._uU(8," Disponibilidad "),e.qZA(),e.TgZ(9,"div",57),e._uU(10," Cantidad "),e.qZA(),e.TgZ(11,"div",58),e._uU(12," Precio "),e.qZA(),e.TgZ(13,"div",58),e._uU(14," Total "),e.qZA(),e.TgZ(15,"div",57),e._uU(16," Quitar "),e.qZA()(),e.SjG(17,Ji,31,31,"div",74,nt),e.qZA()),2&s){const t=e.oxw(2);e.xp6(17),e.wJu(t.bidForm.get("products").controls)}}function Mi(s,l){1&s&&(e.TgZ(0,"div",75),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}const Ei=s=>({"cursor-not-allowed":s});function Qi(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",76),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createOffer())}),e._uU(1),e.ALo(2,"number"),e.qZA()}if(2&s){const t=e.oxw(2);e.Q6J("ngClass",e.VKq(6,Ei,t.bidForm.pristine||t.bidForm.invalid||0===t.bidForm.get("products").controls.length)),e.xp6(),e.AsE(" ",e.xi3(2,3,t.subtotal,"1.2-2")," ",t.selectedCurrencyIso," ")}}const rt=()=>({suppressScrollY:!0});function Li(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",39)(1,"div",40)(2,"mat-form-field",41),e._UZ(3,"mat-icon",18)(4,"input",42),e.TgZ(5,"mat-autocomplete",43,44),e.NdJ("closed",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchProductControl.reset())}),e.SjG(7,Di,9,6,"mat-option",77,e.x6l),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",45),e.YNc(11,Ri,19,0,"div",46)(12,Mi,2,0),e.qZA()(),e.YNc(13,Qi,3,8,"div",47),e.qZA()}if(2&s){const t=e.MAs(6),n=e.oxw();e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",n.searchProductControl)("matAutocomplete",t)("placeholder","Buscar productos"),e.xp6(),e.Q6J("displayWith",n.displayFn),e.xp6(2),e.wJu(e.lcZ(9,9,n.productsFiltered)),e.xp6(3),e.Q6J("fuseScrollbarOptions",e.DdM(11,rt)),e.xp6(),e.um2(11,n.bidForm.get("products").controls.length>0?11:12),e.xp6(2),e.um2(13,n.bidAssistances?-1:13)}}function $i(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",48),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addAssistance(r),e.KtG(i.stopPropagation())}),e.TgZ(1,"div",49),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addAssistance(r),e.KtG(i.stopPropagation())}),e.TgZ(2,"span",50),e._UZ(3,"mat-checkbox",51),e._uU(4),e.qZA()()()}if(2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(3),e.Q6J("checked",t.checked),e.xp6(),e.hij(" ",t.description," ")}}function zi(s,l){1&s&&(e.TgZ(0,"mat-error",73),e._uU(1," Valor m\xednimo 1 "),e.qZA())}function Oi(s,l){1&s&&(e.TgZ(0,"mat-error",73),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}function Gi(s,l){1&s&&(e.TgZ(0,"mat-error",73),e._uU(1," Valor m\xednimo 0 "),e.qZA())}function ji(s,l){1&s&&(e.TgZ(0,"mat-error",73),e._uU(1," Valor requerido "),e.qZA())}function Vi(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",83)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",60),e._uU(4),e.qZA(),e.TgZ(5,"div",62)(6,"div",63)(7,"button",84),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.decrementAssistanceQty(o))}),e._UZ(8,"mat-icon",65),e.qZA(),e.TgZ(9,"mat-form-field",66),e._UZ(10,"input",85),e.qZA(),e.TgZ(11,"button",64),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.incrementAssistanceQty(o))}),e._UZ(12,"mat-icon",65),e.qZA()(),e.YNc(13,zi,2,0,"mat-error",68)(14,Oi,2,0,"mat-error",68),e.qZA(),e.TgZ(15,"div",86)(16,"mat-form-field",66),e._UZ(17,"input",87),e.qZA(),e.YNc(18,Gi,2,0,"mat-error",68)(19,ji,2,0,"mat-error",68),e.qZA(),e.TgZ(20,"div",88),e._uU(21),e.qZA(),e.TgZ(22,"div",69),e._uU(23),e.ALo(24,"currency"),e.qZA(),e.TgZ(25,"div",71)(26,"button",72),e.NdJ("click",function(){const o=e.CHM(t).$index,r=e.oxw(3);return e.KtG(r.removeAssistanceToBid(o))}),e._UZ(27,"mat-icon",65),e.qZA()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.oxw(3);e.xp6(2),e.hij(" ",n+1," "),e.xp6(),e.Q6J("matTooltip",t.get("description").value),e.xp6(),e.hij(" ",t.get("description").value," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",1)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(13,t.get("quantity").hasError("min")?13:-1),e.xp6(),e.um2(14,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?14:-1),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",0)("max",9999999)("formControl",t.get("price")),e.xp6(),e.um2(18,t.get("price").hasError("min")?18:-1),e.xp6(),e.um2(19,t.get("price").hasError("required")?19:-1),e.xp6(),e.Q6J("ngClass",e.VKq(24,ot,!t.get("rate").value)),e.xp6(),e.hij(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.xp6(2),e.hij(" ",e.xi3(24,21,t.get("pt").value,e.DdM(26,at))," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function Hi(s,l){if(1&s&&(e.TgZ(0,"div",54)(1,"div",82),e._UZ(2,"div"),e.TgZ(3,"div",56),e._uU(4," Servicio "),e.qZA(),e.TgZ(5,"div",57),e._uU(6," Cantidad "),e.qZA(),e.TgZ(7,"div",57),e._uU(8," Precio "),e.qZA(),e.TgZ(9,"div",57),e._uU(10," Moneda "),e.qZA(),e.TgZ(11,"div",58),e._uU(12," Total "),e.qZA(),e.TgZ(13,"div",57),e._uU(14," Quitar "),e.qZA()(),e.SjG(15,Vi,28,27,"div",89,nt),e.qZA()),2&s){const t=e.oxw(2);e.xp6(15),e.wJu(t.bidForm.get("assistances").controls)}}function Yi(s,l){1&s&&(e.TgZ(0,"div",75),e._uU(1," \xa1No ha seleccionado ning\xfan servicio a\xfan! "),e.qZA())}const Ki=s=>({"cursor-pointer shadow":s});function Wi(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",39)(1,"div",78)(2,"mat-form-field",41),e._UZ(3,"mat-icon",18)(4,"input",42),e.TgZ(5,"mat-autocomplete",43,79),e.NdJ("closed",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchAssistanceControl.reset())}),e.SjG(7,$i,5,3,"mat-option",77,e.x6l),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",80),e.YNc(11,Hi,17,0,"div",46)(12,Yi,2,0),e.qZA()(),e.TgZ(13,"div",81),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createOffer())}),e._uU(14),e.ALo(15,"number"),e.qZA()()}if(2&s){const t=e.MAs(6),n=e.oxw();e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",n.searchAssistanceControl)("matAutocomplete",t)("placeholder","Buscar servicios en el cat\xe1logo del negocio"),e.xp6(),e.Q6J("displayWith",n.displayFnAssistance),e.xp6(2),e.wJu(e.lcZ(9,11,n.assistancesFiltered)),e.xp6(3),e.Q6J("fuseScrollbarOptions",e.DdM(16,rt)),e.xp6(),e.um2(11,n.bidForm.get("assistances").controls.length>0?11:12),e.xp6(2),e.Q6J("ngClass",e.VKq(17,Ki,n.bidForm.valid)),e.xp6(),e.AsE(" ",e.xi3(15,13,n.subtotal-n.subtotal*n.bidForm.get("discount").value,"1.2-2")," ",n.selectedCurrencyIso," ")}}const Xi=()=>({suppressScrollX:!0});let es=(()=>{class s{constructor(){this.assistances=[],this.assistances$=(0,U.of)([]),this.audio=new Audio("./assets/sounds/caja.mp3"),this.bidAssistances=!1,this.bidProducts=!1,this.currencies$=(0,U.of)([]),this.maxDate=new Date,this.multipliers$=(0,U.of)([]),this.previewsAssistancesFormData=[],this.previewsProductsFormData=[],this.rates=[],this.searchAssistanceControl=new a.NI(""),this.searchCustomerControl=new a.NI(null),this.searchProductControl=new a.NI(null),this.selectedCurrencyIso="",this.selectedCustomerName="",this.subtotal=0,this._bidService=(0,e.f3M)(Zi),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._customersService=(0,e.f3M)(ye.v),this._formBuilder=(0,e.f3M)(a.qu),this._fuseConfirmationService=(0,e.f3M)(se.R),this._ratesService=(0,e.f3M)(Qe.m),this._snackBar=(0,e.f3M)($.ux),this._stocksService=(0,e.f3M)(Ee.T),this._router=(0,e.f3M)(Y.F0),this._unsubscribeAll=new O.x,this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.bidForm=this._formBuilder.group({id:new a.NI,currencyId:new a.NI(null,[a.kI.required]),customerId:new a.NI("",[a.kI.required]),discount:new a.NI(0,[a.kI.required,a.kI.min(0),a.kI.max(100)]),subtotal:new a.NI(0,[a.kI.required,a.kI.min(0)]),multiplier:new a.NI(1,[a.kI.required,a.kI.min(1)]),obs:new a.NI("",[a.kI.maxLength(5e4)]),date:new a.NI(new Date,[a.kI.required]),rates:new a.NI([],[a.kI.required]),products:new a.Oe([]),assistances:new a.Oe([])}),this.bidForm.get("products").valueChanges.pipe((0,g.R)(this._unsubscribeAll)).subscribe(()=>{this._calculateOfferSubtotal()}),this.currencies$=this.store.select(le.zd),this.multipliers$=this.store.select(Me.Af),this.customers$=this.store.select(Fe.p6),this.productsInStock$=this.store.select(fe.K2),this.store.select(fe.K2).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.productsInStock=t,t.length>0&&(this.bidProducts=!0),this._changeDetectorRef.markForCheck()}),this.assistances$=this.store.select(ee),this.store.select(ee).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.assistances=t,t.length>0&&(this.bidAssistances=!0),this._changeDetectorRef.markForCheck()}),this.ratesFiltered=this.bidForm.get("currencyId").valueChanges.pipe((0,z.O)(null),(0,V.z)(t=>t?this._ratesService.findActiveByBaseId(t):(0,U.of)([]))),this.ratesFiltered.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(500)).subscribe(t=>{this._resetSelectedProductsRates()}),this.bidForm.get("rates").valueChanges.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this._resetSelectedProductsRates(),this._resetSelectedAssistancesRates()}),this.bidForm.get("multiplier").valueChanges.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this._calcAllProductPrice(t),this._calcAllAssistancePrice(t),this._calculateOfferSubtotal()}),this.bidForm.get("assistances").valueChanges.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this._verifyChanges(t,this.previewsAssistancesFormData)&&this._calcAllAssistancePrice(this.bidForm.get("multiplier").value),this.previewsAssistancesFormData=[...t],this._calculateOfferTotal(),this._changeDetectorRef.markForCheck()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,V.z)(t=>this._mapChecked(null!==t&&"string"==typeof t?this._stocksService.getProductsInStockAvailable(t,10):this.productsInStock$))),this.assistancesFiltered=this.searchAssistanceControl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,V.z)(t=>{const n=this.assistances.filter(i=>i.description.includes(t));return this._mapCheckedAssistances(null!==t&&"string"==typeof t?(0,U.of)(n):this.assistances$)})),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,V.z)(t=>null!==t&&"string"==typeof t&&t!==this.selectedCustomerName?this._customersService.findActiveCustomers(t.trim()):this.customers$))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}selectCustomer(t){this.bidForm.get("customerId").setValue(t.id),this.selectedCustomerName=t.name}addStockProduct(t){const n=this.bidForm.get("currencyId").value,i=structuredClone(this.bidForm.get("rates").value);let o=i.find(c=>c.currencyBaseId===n&&c.currencyRefId===t.currencyId);o||(o=i.find(c=>c.currencyRefId===n),o&&(o.value=1/o.value));const r=this._formBuilder.group({productId:new a.NI(t.productId,[a.kI.required]),currencyId:new a.NI(t.currencyId,[a.kI.required]),name:new a.NI(t.name,[a.kI.required]),price:new a.NI(t.price,[a.kI.required]),uom:new a.NI(t.uom,[a.kI.required]),depotId:new a.NI(t.depotId,[a.kI.required]),depot:new a.NI(t.depot,[a.kI.required]),currency:new a.NI(t.currency,[a.kI.required]),stock:new a.NI(t.quantity,[a.kI.required]),rateId:new a.NI(o?o.id:null,[a.kI.required]),rate:new a.NI(o?o.value:null,[a.kI.required]),quantity:new a.NI(1,[G.L.onlyNumbersPattern(),a.kI.required,a.kI.min(.1),a.kI.max(t.quantity)])});this.bidForm.get("products").push(r),this._changeDetectorRef.markForCheck()}removeStockProduct(t){this.bidForm.get("products").removeAt(t),this._changeDetectorRef.markForCheck()}addProductToOffer(t){const n=this.bidForm.get("products").getRawValue().findIndex(i=>i.productId===t.productId&&i.depotId===t.depotId);t.checked?(this.removeStockProduct(n),t.checked=!1):t.checked=!0,!(n>-1)&&(this.addStockProduct(t),this.updateSelectedRates())}incrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n+1)}decrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n-1)}removeProductToOffer(t){this.removeStockProduct(t),this.searchProductControl.reset(),this.updateSelectedRates()}createOffer(){if(this.bidForm.invalid||0===this.bidForm.get("products").controls.length&&0===this.bidForm.get("assistances").controls.length)return;const t=this.bidForm.getRawValue();delete t.id,t.ratesId=t.products.map(i=>i.rateId).filter((i,o,r)=>r.indexOf(i)===o),t.products=t.products.map(i=>({productId:i.productId,quantity:i.quantity,price:i.price})),t.assistances=t.assistances.map(i=>({assistanceId:i.assistanceId,quantity:i.quantity,price:i.price})),t.subtotal=Number(this.subtotal.toFixed(2)),t.total=Number((this.subtotal-t.discount/100*this.subtotal).toFixed(2)),delete t.rates,this._fuseConfirmationService.open({title:"Generar oferta",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,g.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._bidService.createOffer(t).pipe((0,g.R)(this._unsubscribeAll),(0,oe.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:o})=>{o&&(this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:o.createOffer.message,type:"success",svgIcon:"mat_solid:done"}}),this.audio.play(),this.bidForm.get("products").clear(),this.searchProductControl.reset(),this.searchCustomerControl.reset(),this.bidForm.reset(),this.subtotal=0,this.selectedCustomerName="",this._router.navigateByUrl("/modules/sales/offers"))})})}addAssistance(t){const n=this.bidForm.get("currencyId").value,i=structuredClone(this.bidForm.get("rates").value);let o=i.find(d=>d.currencyBaseId===n&&d.currencyRefId===t.currencyId);!o&&n!==t.currencyId&&(o=i.find(d=>d.currencyRefId===n&&d.currencyRefId!==d.currencyBaseId),o&&(o.value=1/o.value));const r=this.bidForm.get("multiplier").value,c=this._formBuilder.group({assistanceId:new a.NI(t.id,[a.kI.required]),currencyId:new a.NI(t.currencyId,[a.kI.required]),description:new a.NI(t.description,[a.kI.required]),staticPrice:new a.NI(Number(((o?o.value:1)*t.price).toFixed(2)),[a.kI.required,a.kI.min(0),a.kI.max(99999999)]),price:new a.NI(Number(((o?o.value:1)*t.price).toFixed(2)),[a.kI.required,a.kI.min(0),a.kI.max(99999999)]),multiplier:new a.NI(r),quantity:new a.NI(1,[G.L.onlyNumbersPattern(),a.kI.required,a.kI.min(1)]),pt:new a.NI(0),currency:new a.NI(t.currency.iso,[a.kI.required]),uom:new a.NI(t.uom.abbr,[a.kI.required]),rateId:new a.NI(o?o.id:null,[a.kI.required]),rate:new a.NI(o?o.value:null,[a.kI.required])});this.bidForm.get("assistances").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeAssistance(t){this.bidForm.get("assistances").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addAssistanceToBid(t){const n=this.bidForm.get("assistances").getRawValue().findIndex(i=>i.assistanceId===t.id);t.checked?(this.removeAssistance(n),t.checked=!1):t.checked=!0,!(n>-1)&&this.addAssistance(t)}incrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(++n)}decrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(--n)}removeAssistanceToBid(t){this.removeAssistance(t),this.searchAssistanceControl.reset()}displayFnAssistance(t){return t&&t.description?t.description:""}updateSelectedRates(){const t=this.bidForm.get("currencyId").value,n=this.bidForm.get("products").getRawValue(),i=this.bidForm.get("assistances").getRawValue();let o=[];for(const c of n)o=[...this.rates.filter(m=>m.currencyBaseId===t&&m.currencyRefId===c.currencyId),...this.rates.filter(m=>m.currencyBaseId===c.currencyId&&m.currencyRefId===t&&m.currencyRefId!==m.currencyBaseId),...o];for(const c of i)o=[...this.rates.filter(m=>m.currencyBaseId===t&&m.currencyRefId===c.currencyId),...this.rates.filter(m=>m.currencyBaseId===c.currencyId&&m.currencyRefId===t&&m.currencyRefId!==m.currencyBaseId),...o];const r=o.reduce((c,d)=>(c.find(m=>m.id===d.id&&m.name===d.name)||c.push(d),c),[]);this.bidForm.get("rates").setValue(r)}_verifyChanges(t,n){for(let i=0;i<t.length;i++)if(t.length!==n.length||t[i].price!==n[i].price||Number(t[i].quantity)!==Number(n[i].quantity))return!0;return!1}_resetSelectedAssistancesRates(){const t=this.bidForm.get("currencyId").value,n=this.bidForm.get("multiplier").value;for(const i of this.bidForm.get("assistances").controls){const o=i.getRawValue(),r=structuredClone(this.bidForm.get("rates").value);let c=r.find(h=>h.currencyBaseId===t&&h.currencyRefId===o.currencyId);!c&&t!==o.currencyId&&(c=r.find(h=>h.currencyRefId===t&&h.currencyRefId!==h.currencyBaseId),c&&(c.value=1/c.value));let d=c?c.value:null;const _=i.get("price").value,m=i.get("staticPrice").value;let u=i.get("rate").value?i.get("rate").value:1;u&&d===u&&(u=1,d=1),i.patchValue({...o,price:(d?_*d:1*_/u)*n,staticPrice:d?m*d:1*m/u,multiplier:n,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}_calculateOfferSubtotal(){const t=this.bidForm.get("multiplier").value;this.subtotal=this.bidForm.get("products").getRawValue().map(n=>n.quantity*n.price*t*(n.rate?n.rate:1)).reduce((n,i)=>n+i,0)}_calcAllProductPrice(t){const n=this.bidForm.get("products").getRawValue();this.previewsProductsFormData=[...n];for(const i of this.bidForm.get("products").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}_calcAllAssistancePrice(t){const n=this.bidForm.get("assistances").getRawValue();this.previewsAssistancesFormData=[...n];for(const i of this.bidForm.get("assistances").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}_calculateOfferTotal(){const t=this.bidForm.get("products").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0),n=this.bidForm.get("assistances").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0);this.subtotal=Number(t.toFixed(2))+Number(n.toFixed(2))}_mapChecked(t){return t.pipe((0,R.U)(n=>n.map(i=>this.bidForm.get("products").getRawValue().some(r=>r.productId===i.productId&&r.depotId===i.depotId)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_mapCheckedAssistances(t){return t.pipe((0,R.U)(n=>n.map(i=>this.bidForm.get("assistances").getRawValue().some(r=>r.id===i.id)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_resetSelectedProductsRates(){const t=this.bidForm.get("currencyId").value,n=structuredClone(this.bidForm.get("rates").value);for(const i of this.bidForm.get("products").controls){let o=n.find(r=>r.currencyBaseId===t&&r.currencyRefId===i.value.currencyId);o||(o=n.find(r=>r.currencyRefId===t),o&&(o.value=1/o.value)),i.get("rate").setValue(o?o.value:null),i.get("rateId").setValue(o?o.id:null)}this._changeDetectorRef.markForCheck()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-bid"]],standalone:!0,features:[e.jDz],decls:88,vars:50,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0",3,"fuseScrollbarOptions"],[1,"relative","flex","flex-col","px-6","py-8","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],["routerLink","/modules/sales/offers",1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["mat-flat-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[1,"flex","flex-col","px-4","mt-4","mb-12","gap-y-8","sm:px-8"],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"grid","gap-4","p-10","sm:grid-cols-4","lg:grid-cols-7",3,"formGroup"],["bidNgForm","ngForm"],["appearance","fill",1,"w-full","md:col-span-2","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[1,"ath-autocomplete",3,"displayWith"],["customerAutocomplete","matAutocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["date",""],[3,"formControlName","required"],[3,"value"],[3,"formControlName","required","placeholder"],["multiple","",3,"formControlName","required","placeholder"],["class","text-sm opacity-75"],["matInput","","type","number",3,"formControlName","min","max","required"],["matSuffix","",3,"svgIcon"],[1,"w-full","sm:col-span-4","lg:col-span-7","fuse-mat-textarea"],["matInput","",3,"formControlName"],["class","col-span-4 shadow rounded-2xl bg-card"],[3,"value","click"],[1,"text-sm","opacity-75"],[1,"w-18"],[1,"col-span-4","shadow","rounded-2xl","bg-card"],[1,"p-6"],["appearance","fill",1,"w-full","fuse-mat-dense",3,"subscriptSizing"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete",3,"displayWith","closed"],["productsAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","mt-2","mb-2","min-h-36",3,"fuseScrollbarOptions"],["class","grid"],["class","flex items-center justify-center w-full gap-2 p-2 font-mono text-3xl font-semibold leading-7 text-white cursor-pointer rounded-b-2xl bg-gradient-to-r from-primary-500 to-primary-700",3,"ngClass"],[1,"w-full",3,"value","click"],[1,"grid","w-full","grid-cols-6",3,"click"],[1,"flex","flex-row","items-center","col-span-5","truncate","md:col-span-3"],["color","primary",3,"checked"],[1,"items-center","hidden","col-span-2","md:flex"],[1,"flex","items-center","text-center"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left"],[1,"text-center"],[1,"text-right"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"truncate",3,"matTooltip"],[1,"truncate"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"font-mono","text-right"],[3,"ngClass"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"w-full","text-sm","text-center"],["class","grid items-center gap-4 px-6 py-3 border-b billing-products-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","items-center","justify-center","w-full","gap-2","p-2","font-mono","text-3xl","font-semibold","leading-7","text-white","cursor-pointer","rounded-b-2xl","bg-gradient-to-r","from-primary-500","to-primary-700",3,"ngClass","click"],["class","w-full",3,"value"],[1,"p-6","pb-0"],["assistancesAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-2","mt-2","min-h-24",3,"fuseScrollbarOptions"],[1,"flex","items-center","justify-center","w-full","gap-2","p-2","font-mono","text-3xl","font-semibold","leading-7","text-white","rounded-b-2xl","bg-gradient-to-r","from-primary-500","to-primary-700",3,"ngClass","click"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-assistances-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-assistances-grid","md:px-8"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","formControl"],[1,"flex","flex-col","items-center","justify-center"],["matInput","","type","number",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],[1,"text-center",3,"ngClass"],["class","grid items-center gap-4 px-6 py-3 border-b billing-assistances-grid md:px-8"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",8),e._uU(14,"Cotizaciones"),e.qZA()(),e.TgZ(15,"div",5),e._UZ(16,"mat-icon",6),e.TgZ(17,"a",7),e._uU(18,"Ofertar"),e.qZA()()(),e.TgZ(19,"div",9)(20,"h2",10),e._uU(21," Ofertar "),e.qZA()()(),e.TgZ(22,"div",11)(23,"button",12),e.NdJ("click",function(){return i.createOffer()}),e._uU(24," Generar Oferta "),e.qZA()()(),e.TgZ(25,"div",13)(26,"div",14)(27,"form",15,16)(29,"mat-form-field",17)(30,"mat-label"),e._uU(31,"Cliente"),e.qZA(),e._UZ(32,"mat-icon",18)(33,"input",19),e.TgZ(34,"mat-autocomplete",20,21),e.SjG(36,Ai,2,2,"mat-option",27,e.x6l),e.ALo(38,"async"),e.qZA()(),e.TgZ(39,"mat-form-field",22)(40,"mat-label"),e._uU(41,"Fecha de la oferta"),e.qZA(),e._UZ(42,"input",23),e.TgZ(43,"mat-hint"),e._uU(44,"DD/MM/YYYY"),e.qZA(),e._UZ(45,"mat-datepicker-toggle",24)(46,"mat-datepicker",null,25),e.YNc(48,Ti,2,0,"mat-error"),e.qZA(),e.TgZ(49,"mat-form-field",22)(50,"mat-label"),e._uU(51,"Multiplicador"),e.qZA(),e.TgZ(52,"mat-select",26),e.YNc(53,Ii,2,1,"mat-option",27),e.ALo(54,"async"),e.SjG(55,Si,2,2,"mat-option",27,e.x6l),e.ALo(57,"async"),e.qZA(),e.YNc(58,qi,2,0,"mat-error"),e.qZA(),e.TgZ(59,"mat-form-field",22)(60,"mat-label"),e._uU(61,"Moneda"),e.qZA(),e.TgZ(62,"mat-select",28),e.SjG(63,Fi,2,2,"mat-option",27,e.x6l),e.ALo(65,"async"),e.qZA()(),e.TgZ(66,"mat-form-field",22)(67,"mat-label"),e._uU(68,"Tasa de Cambio"),e.qZA(),e.TgZ(69,"mat-select",29)(70,"mat-select-trigger"),e._uU(71),e.YNc(72,ki,2,2,"span",30),e.qZA(),e.SjG(73,wi,6,6,"mat-option",27,e.x6l),e.ALo(75,"async"),e.qZA(),e.YNc(76,Ui,2,0,"mat-error"),e.qZA(),e.TgZ(77,"mat-form-field",22)(78,"mat-label"),e._uU(79,"Descuento"),e.qZA(),e._UZ(80,"input",31)(81,"mat-icon",32),e.qZA(),e.TgZ(82,"mat-form-field",33)(83,"mat-label"),e._uU(84,"Observaciones"),e.qZA(),e._UZ(85,"textarea",34),e.qZA()()(),e.YNc(86,Li,14,12,"div",35)(87,Wi,16,19,"div",35),e.qZA()()),2&n){const o=e.MAs(35),r=e.MAs(47);e.Q6J("fuseScrollbarOptions",e.DdM(49,Xi)),e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("disabled",i.bidForm.pristine||i.bidForm.invalid),e.xp6(4),e.Q6J("formGroup",i.bidForm),e.xp6(5),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchCustomerControl)("matAutocomplete",o)("placeholder","Buscar cliente")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(38,39,i.customersFiltered)),e.xp6(6),e.Q6J("matDatepicker",r)("formControlName","date")("max",i.maxDate)("required",!0),e.xp6(3),e.Q6J("for",r),e.xp6(3),e.um2(48,i.bidForm.get("date").hasError("required")?48:-1),e.xp6(4),e.Q6J("formControlName","multiplier")("required",!0),e.xp6(),e.um2(53,0===e.lcZ(54,41,i.multipliers$).length?53:-1),e.xp6(2),e.wJu(e.lcZ(57,43,i.multipliers$)),e.xp6(3),e.um2(58,i.bidForm.get("multiplier").hasError("required")?58:-1),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0)("placeholder","Moneda"),e.xp6(),e.wJu(e.lcZ(65,45,i.currencies$)),e.xp6(6),e.Q6J("formControlName","rates")("required",!0)("placeholder","Tasa de cambio"),e.xp6(2),e.hij(" ",(null==i.bidForm.get("rates").value||null==i.bidForm.get("rates").value[0]?null:i.bidForm.get("rates").value[0].name)||""," "),e.xp6(),e.um2(72,((null==i.bidForm.get("rates").value?null:i.bidForm.get("rates").value.length)||0)>1?72:-1),e.xp6(),e.wJu(e.lcZ(75,47,i.ratesFiltered)),e.xp6(3),e.um2(76,i.bidForm.get("rates").hasError("required")?76:-1),e.xp6(4),e.Q6J("formControlName","discount")("min",0)("max",100)("required",!0),e.xp6(),e.Q6J("svgIcon","mat_solid:percent"),e.xp6(4),e.Q6J("formControlName","obs"),e.xp6(),e.um2(86,i.bidProducts?86:-1),e.xp6(),e.um2(87,i.bidAssistances?87:-1)}},dependencies:[v.Ov,v.H9,v.JJ,a.u5,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.Q7,a.qQ,a.Fd,be.H,W.Bb,W.XC,he.ey,W.ZL,A.ot,A.lW,ne.p9,ne.oG,Z.FA,Z.Mq,Z.hl,Z.nW,f.lN,f.KE,f.hX,f.bx,f.TO,f.qo,f.R9,D.Ps,D.Hw,w.c,w.Nt,N.Tx,j.LD,j.gD,j.$L,X.AV,X.gM,v.mk,a.UX,a.oH,a.sg,a.u,Y.rH],encapsulation:2,changeDetection:0})}return s})();var Le=p(57482),lt=p(7185),ct=p(302);const ts=y.Ps`
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
`,is=y.Ps`
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
`,ss=y.Ps`
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
`,ns=y.Ps`
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
`,os=y.Ps`
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
`,as=y.Ps`
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
`,rs=y.Ps`
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
`,ls=y.Ps`
    mutation RemoveBill($removeBillId: String!) {
        removeBill(id: $removeBillId)
    }
`,cs=y.Ps`
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
`;let ds=(()=>{class s{constructor(t,n){this.apolloProvider=t,this._snackBar=n,this._apollo=this.apolloProvider.use("BALANC")}createBill(t){return this._apollo.mutate({mutation:os,variables:{createBillInput:t},errorPolicy:"all"})}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(y._M),e.LFG($.ux))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var ge=p(47452),E=p(55568);const $e=(s,l)=>l.id;function us(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-checkbox",11),e.NdJ("ngModelChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.billProducts=i)}),e._uU(1,"Productos"),e.qZA(),e.TgZ(2,"mat-checkbox",11),e.NdJ("ngModelChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.billAssistances=i)}),e._uU(3,"Servicios"),e.qZA()}if(2&s){const t=e.oxw();e.Q6J("ngModel",t.billProducts),e.xp6(2),e.Q6J("ngModel",t.billAssistances)}}function ms(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",37),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.selectCustomer(o))}),e._uU(1),e.qZA()}if(2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.name," ")}}function ps(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," La fecha de la factura es obligatoria "),e.qZA())}function gs(s,l){1&s&&(e.TgZ(0,"mat-option",27),e._uU(1," x1 "),e.qZA()),2&s&&e.Q6J("value",1)}function _s(s,l){if(1&s&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.value),e.xp6(),e.hij(" x",t.value," ")}}function hs(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El multiplicador es obligatorio "),e.qZA())}function fs(s,l){if(1&s&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function bs(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de comprobante es obligatorio "),e.qZA())}function xs(s,l){if(1&s&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function Cs(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de operaci\xf3n es obligatorio "),e.qZA())}function ys(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",37),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.selectedCurrencyIso=o.iso)}),e._uU(1),e.qZA()}if(2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.iso," ")}}function vs(s,l){if(1&s&&(e.TgZ(0,"span",38),e._uU(1),e.qZA()),2&s){const t=e.oxw();e.xp6(),e.AsE(" (+ ",2===(null==t.billingForm.get("rates").value?null:t.billingForm.get("rates").value.length)?"otro":"otros"," ",t.billingForm.get("rates").value.length>2?t.billingForm.get("rates").value.length-1:"",") ")}}function Zs(s,l){if(1&s&&(e.TgZ(0,"mat-option",27)(1,"span",39),e._uU(2),e.ALo(3,"number"),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA()()),2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(2),e.Oqu(e.xi3(3,3,t.value,"1.4-4")),e.xp6(3),e.hij(" ",t.name,"")}}function As(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," Las tasas de cambio son requeridas "),e.qZA())}function Ts(s,l){if(1&s&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.AsE(" ",t.no," ",t.currency," ")}}function Is(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," La cuenta bancaria es obligatorio "),e.qZA())}function Ss(s,l){if(1&s&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function qs(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",49),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addProductToBill(r),e.KtG(i.stopPropagation())}),e.TgZ(1,"div",50),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addProductToBill(r),e.KtG(i.stopPropagation())}),e.TgZ(2,"span",51),e._UZ(3,"mat-checkbox",52),e._uU(4),e.qZA(),e.TgZ(5,"span",53),e._uU(6),e.qZA(),e.TgZ(7,"span",54),e._uU(8),e.ALo(9,"number"),e.qZA()()()}if(2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(3),e.Q6J("checked",t.checked),e.xp6(),e.hij(" ",t.name," "),e.xp6(2),e.Oqu(t.depot),e.xp6(2),e.AsE("",e.xi3(9,6,t.quantity,"1.2-2")," ",t.uom,"")}}function Fs(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 0.1 "),e.qZA())}function ks(s,l){if(1&s&&(e.TgZ(0,"mat-error",76),e._uU(1),e.qZA()),2&s){const t=e.oxw().$implicit;e.xp6(),e.hij(" Valor m\xe1ximo ",t.quantity," ")}}function ws(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}function Us(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 0 "),e.qZA())}function Ds(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor requerido "),e.qZA())}const dt=s=>({"text-warn":s}),ut=()=>["$"];function Ps(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",60)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",61),e._uU(4),e.qZA(),e.TgZ(5,"div",62),e._uU(6),e.qZA(),e.TgZ(7,"div",58),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"div",63)(11,"div",64)(12,"button",65),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.decrementProductQty(o))}),e._UZ(13,"mat-icon",66),e.qZA(),e.TgZ(14,"mat-form-field",67),e._UZ(15,"input",68),e.qZA(),e.TgZ(16,"button",65),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.incrementProductQty(o))}),e._UZ(17,"mat-icon",66),e.qZA()(),e.YNc(18,Fs,2,0,"mat-error",69)(19,ks,2,1,"mat-error",69)(20,ws,2,0,"mat-error",69),e.qZA(),e.TgZ(21,"div",70)(22,"mat-form-field",67),e._UZ(23,"input",71),e.qZA(),e.YNc(24,Us,2,0,"mat-error",69)(25,Ds,2,0,"mat-error",69),e.qZA(),e.TgZ(26,"div",72),e._uU(27),e.qZA(),e.TgZ(28,"div",73),e._uU(29),e.ALo(30,"currency"),e.qZA(),e.TgZ(31,"div",74)(32,"button",75),e.NdJ("click",function(){const o=e.CHM(t).$index,r=e.oxw(3);return e.KtG(r.removeProductToBill(o))}),e._UZ(33,"mat-icon",66),e.qZA()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.oxw(3);e.xp6(2),e.hij(" ",n+1," "),e.xp6(),e.Q6J("matTooltip",t.get("name").value),e.xp6(),e.hij(" ",t.get("name").value," "),e.xp6(2),e.hij(" ",t.get("depot").value," "),e.xp6(2),e.AsE(" ",e.xi3(9,27,t.get("stock").value,"1.2-2")," ",t.get("uom").value," "),e.xp6(4),e.Q6J("disabled",t.get("quantity").value<=.1||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",.1)("max",t.get("stock").value)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").value>=t.get("stock").value||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(18,t.get("quantity").hasError("min")?18:-1),e.xp6(),e.um2(19,t.get("quantity").hasError("max")?19:-1),e.xp6(),e.um2(20,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?20:-1),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",0)("max",9999999)("formControl",t.get("price")),e.xp6(),e.um2(24,t.get("price").hasError("min")?24:-1),e.xp6(),e.um2(25,t.get("price").hasError("required")?25:-1),e.xp6(),e.Q6J("ngClass",e.VKq(33,dt,!t.get("rate").value)),e.xp6(),e.hij(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.xp6(2),e.hij(" ",e.xi3(30,30,t.get("pt").value,e.DdM(35,ut))," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function Ns(s,l){if(1&s&&(e.TgZ(0,"div",55)(1,"div",56),e._UZ(2,"div"),e.TgZ(3,"div",57),e._uU(4," Producto "),e.qZA(),e.TgZ(5,"div",57),e._uU(6," Almac\xe9n "),e.qZA(),e.TgZ(7,"div",58),e._uU(8," Disponibilidad "),e.qZA(),e.TgZ(9,"div",58),e._uU(10," Cantidad "),e.qZA(),e.TgZ(11,"div",58),e._uU(12," Precio "),e.qZA(),e.TgZ(13,"div",58),e._uU(14," Moneda "),e.qZA(),e.TgZ(15,"div",59),e._uU(16," Total "),e.qZA(),e.TgZ(17,"div",58),e._uU(18," Quitar "),e.qZA()(),e.SjG(19,Ps,34,36,"div",77,$e),e.qZA()),2&s){const t=e.oxw(2);e.xp6(19),e.wJu(t.billingForm.get("products").controls)}}function Bs(s,l){1&s&&(e.TgZ(0,"div",78),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}const mt=s=>({"cursor-pointer shadow":s});function Js(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",79),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createBill())}),e._uU(1),e.ALo(2,"number"),e.qZA()}if(2&s){const t=e.oxw(2);e.Q6J("ngClass",e.VKq(6,mt,t.billingForm.valid&&t.billingForm.get("products").controls.length>0)),e.xp6(),e.AsE(" ",e.xi3(2,3,t.total-t.billingForm.get("discount").value+t.billingForm.get("surcharge").value,"1.2-2")," ",t.selectedCurrencyIso," ")}}const pt=()=>({suppressScrollY:!0});function Rs(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",40)(1,"div",41)(2,"mat-form-field",42),e._UZ(3,"mat-icon",18)(4,"input",43),e.TgZ(5,"mat-autocomplete",44,45),e.NdJ("closed",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchProductControl.reset())}),e.SjG(7,qs,10,9,"mat-option",80,e.x6l),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",46),e.YNc(11,Ns,21,0,"div",47)(12,Bs,2,0),e.qZA()(),e.YNc(13,Js,3,8,"div",48),e.qZA()}if(2&s){const t=e.MAs(6),n=e.oxw();e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",n.searchProductControl)("matAutocomplete",t)("placeholder","Buscar existencia de productos en inventario"),e.xp6(),e.Q6J("displayWith",n.displayFn),e.xp6(2),e.wJu(e.lcZ(9,9,n.productsFiltered)),e.xp6(3),e.Q6J("fuseScrollbarOptions",e.DdM(11,pt)),e.xp6(),e.um2(11,n.billingForm.get("products").controls.length>0?11:12),e.xp6(2),e.um2(13,n.billAssistances?-1:13)}}function Ms(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",49),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addAssistanceToBill(r),e.KtG(i.stopPropagation())}),e.TgZ(1,"div",50),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addAssistanceToBill(r),e.KtG(i.stopPropagation())}),e.TgZ(2,"span",51),e._UZ(3,"mat-checkbox",52),e._uU(4),e.qZA()()()}if(2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(3),e.Q6J("checked",t.checked),e.xp6(),e.hij(" ",t.description," ")}}function Es(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 1 "),e.qZA())}function Qs(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}function Ls(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 0 "),e.qZA())}function $s(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor requerido "),e.qZA())}function zs(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",83)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",61),e._uU(4),e.qZA(),e.TgZ(5,"div",63)(6,"div",64)(7,"button",84),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.decrementAssistanceQty(o))}),e._UZ(8,"mat-icon",66),e.qZA(),e.TgZ(9,"mat-form-field",67),e._UZ(10,"input",85),e.qZA(),e.TgZ(11,"button",65),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.incrementAssistanceQty(o))}),e._UZ(12,"mat-icon",66),e.qZA()(),e.YNc(13,Es,2,0,"mat-error",69)(14,Qs,2,0,"mat-error",69),e.qZA(),e.TgZ(15,"div",70)(16,"mat-form-field",67),e._UZ(17,"input",71),e.qZA(),e.YNc(18,Ls,2,0,"mat-error",69)(19,$s,2,0,"mat-error",69),e.qZA(),e.TgZ(20,"div",72),e._uU(21),e.qZA(),e.TgZ(22,"div",73),e._uU(23),e.ALo(24,"currency"),e.qZA(),e.TgZ(25,"div",74)(26,"button",75),e.NdJ("click",function(){const o=e.CHM(t).$index,r=e.oxw(3);return e.KtG(r.removeAssistanceToBill(o))}),e._UZ(27,"mat-icon",66),e.qZA()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.oxw(3);e.xp6(2),e.hij(" ",n+1," "),e.xp6(),e.Q6J("matTooltip",t.get("description").value),e.xp6(),e.hij(" ",t.get("description").value," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",1)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(13,t.get("quantity").hasError("min")?13:-1),e.xp6(),e.um2(14,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?14:-1),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",0)("max",9999999)("formControl",t.get("price")),e.xp6(),e.um2(18,t.get("price").hasError("min")?18:-1),e.xp6(),e.um2(19,t.get("price").hasError("required")?19:-1),e.xp6(),e.Q6J("ngClass",e.VKq(24,dt,!t.get("rate").value)),e.xp6(),e.hij(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.xp6(2),e.hij(" ",e.xi3(24,21,t.get("pt").value,e.DdM(26,ut))," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function Os(s,l){if(1&s&&(e.TgZ(0,"div",55)(1,"div",82),e._UZ(2,"div"),e.TgZ(3,"div",57),e._uU(4," Servicio "),e.qZA(),e.TgZ(5,"div",58),e._uU(6," Cantidad "),e.qZA(),e.TgZ(7,"div",58),e._uU(8," Precio "),e.qZA(),e.TgZ(9,"div",58),e._uU(10," Moneda "),e.qZA(),e.TgZ(11,"div",59),e._uU(12," Total "),e.qZA(),e.TgZ(13,"div",58),e._uU(14," Quitar "),e.qZA()(),e.SjG(15,zs,28,27,"div",86,$e),e.qZA()),2&s){const t=e.oxw(2);e.xp6(15),e.wJu(t.billingForm.get("assistances").controls)}}function Gs(s,l){1&s&&(e.TgZ(0,"div",78),e._uU(1," \xa1No ha seleccionado ning\xfan servicio a\xfan! "),e.qZA())}function js(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",40)(1,"div",41)(2,"mat-form-field",42),e._UZ(3,"mat-icon",18)(4,"input",43),e.TgZ(5,"mat-autocomplete",44,81),e.NdJ("closed",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchAssistanceControl.reset())}),e.SjG(7,Ms,5,3,"mat-option",80,e.x6l),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",46),e.YNc(11,Os,17,0,"div",47)(12,Gs,2,0),e.qZA()(),e.TgZ(13,"div",79),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createBill())}),e._uU(14),e.ALo(15,"number"),e.qZA()()}if(2&s){const t=e.MAs(6),n=e.oxw();e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",n.searchAssistanceControl)("matAutocomplete",t)("placeholder","Buscar servicios en el cat\xe1logo del negocio"),e.xp6(),e.Q6J("displayWith",n.displayFnAssistance),e.xp6(2),e.wJu(e.lcZ(9,11,n.assistancesFiltered)),e.xp6(3),e.Q6J("fuseScrollbarOptions",e.DdM(16,pt)),e.xp6(),e.um2(11,n.billingForm.get("assistances").controls.length>0?11:12),e.xp6(2),e.Q6J("ngClass",e.VKq(17,mt,n.billingForm.valid)),e.xp6(),e.AsE(" ",e.xi3(15,13,n.total-n.billingForm.get("discount").value+n.billingForm.get("surcharge").value,"1.2-2")," ",n.selectedCurrencyIso," ")}}const Vs=()=>({suppressScrollX:!0});let Hs=(()=>{class s{constructor(){this.assistances=[],this.assistances$=(0,U.of)([]),this.audio=new Audio("./assets/sounds/caja.mp3"),this.bankAccounts=[],this.billAssistances=!1,this.billProducts=!1,this.currencies=[],this.employees$=(0,U.of)([]),this.maxDate=new Date,this.merchant=null,this.multipliers$=(0,U.of)([]),this.operationTypes$=(0,U.of)([]),this.paymentMethods$=(0,U.of)([]),this.previewsAssistancesFormData=[],this.previewsProductsFormData=[],this.productsInStock$=(0,U.of)([]),this.rates=[],this.searchAssistanceControl=new a.NI(""),this.searchCustomerControl=new a.NI(null),this.searchProductControl=new a.NI(null),this.selectedCurrencyIso="",this.selectedCustomerName="",this.stayHere=!1,this.total=0,this._billingService=(0,e.f3M)(ds),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._customersService=(0,e.f3M)(ye.v),this._destroyRef=(0,e.f3M)(e.ktI),this._formBuilder=(0,e.f3M)(a.qu),this._fuseConfirmationService=(0,e.f3M)(se.R),this._ratesService=(0,e.f3M)(Qe.m),this._router=(0,e.f3M)(Y.F0),this._snackBar=(0,e.f3M)($.ux),this._stocksService=(0,e.f3M)(Ee.T),this._unsubscribeAll=new O.x,this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.billingForm=this._formBuilder.group({id:new a.NI,billDate:new a.NI(new Date,[a.kI.required]),multiplier:new a.NI(1,[a.kI.required,a.kI.min(1)]),currencyId:new a.NI(null,[a.kI.required]),courierId:new a.NI(null),customerId:new a.NI("",[a.kI.required]),bankAccount:new a.NI(null,[a.kI.required]),operationTypeId:new a.NI(null,[a.kI.required]),paymentMethodId:new a.NI(null,[a.kI.required]),rates:new a.NI([],[a.kI.required]),surcharge:new a.NI(0,[a.kI.required,a.kI.min(0)]),discount:new a.NI(0,[a.kI.required,a.kI.min(0)]),obs:new a.NI("",[a.kI.maxLength(5e4)]),products:new a.Oe([]),assistances:new a.Oe([])}),this.store.select(ie.Qs).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.merchant=t,this.bankAccounts=t.bankAccounts,E.W.IsNullOrEmpty(t.bankAccounts)||this.billingForm.get("bankAccount").setValue(t.bankAccounts[0]),this._changeDetectorRef.markForCheck()}),this.billingForm.get("products").valueChanges.pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this._verifyChanges(t,this.previewsProductsFormData)&&this.calcAllProductPrice(this.billingForm.get("multiplier").value),this.previewsProductsFormData=[...t],this._calculateBillTotal(),this._changeDetectorRef.markForCheck()}),this.billingForm.get("assistances").valueChanges.pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this._verifyChanges(t,this.previewsAssistancesFormData)&&this.calcAllAssistancePrice(this.billingForm.get("multiplier").value),this.previewsAssistancesFormData=[...t],this._calculateBillTotal(),this._changeDetectorRef.markForCheck()}),this.store.select(le.zd).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.currencies=t,E.W.IsNullOrEmpty(t)||setTimeout(()=>{const n=t.find(i=>i.id===this.merchant.currencyId);this.billingForm.get("currencyId").setValue(n.id)},500),this._changeDetectorRef.markForCheck()}),this.employees$=this.store.select(Le.ri),this.multipliers$=this.store.select(Me.Af),this.customers$=this.store.select(Fe.p6),this.paymentMethods$=this.store.select(ct.VS),this.paymentMethods$.pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{if(!E.W.IsNullOrEmpty(t)){const n=t.find(i=>"Efectivo"===i.name);this.billingForm.get("paymentMethodId").setValue(n?n.id:t[0].id)}this._changeDetectorRef.markForCheck()}),this.operationTypes$=this.store.select(lt.pU),this.operationTypes$.pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{E.W.IsNullOrEmpty(t)||this.billingForm.get("operationTypeId").setValue(t[0].id),this._changeDetectorRef.markForCheck()}),this.productsInStock$=this.store.select(fe.K2),this.store.select(fe.K2).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.productsInStock=t,t.length>0&&(this.billProducts=!0),this._changeDetectorRef.markForCheck()}),this.assistances$=this.store.select(ee),this.store.select(ee).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.assistances=t,t.length>0&&(this.billAssistances=!0),this._changeDetectorRef.markForCheck()}),this.ratesFiltered=this.billingForm.get("currencyId").valueChanges.pipe((0,z.O)(null),(0,V.z)(t=>{if(t){const n=this.currencies.find(o=>o.id===t);this.selectedCurrencyIso=n.iso;const i=this.billingForm.get("bankAccount").getRawValue();return E.W.IsNullOrEmpty(i)||n&&n.iso.toLocaleLowerCase()!==i.currency.toLocaleLowerCase()&&this.billingForm.get("bankAccount").setValue(null),n&&(this.bankAccounts=this.merchant.bankAccounts.filter(o=>o.currency.toLocaleLowerCase()===n.iso.toLocaleLowerCase())),this._ratesService.findActiveByBaseId(t)}return(0,U.of)([])})),this.ratesFiltered.pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.rates=t,this._resetSelectedProductsRates(),this._resetSelectedAssistancesRates(),this.updateSelectedRates()}),this.billingForm.get("rates").valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(500)).subscribe(t=>{this._resetSelectedProductsRates(),this._resetSelectedAssistancesRates()}),this.billingForm.get("multiplier").valueChanges.pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.calcAllProductPrice(t),this.calcAllAssistancePrice(t),this._calculateBillTotal()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,V.z)(t=>this._mapChecked(null!==t&&"string"==typeof t?this._stocksService.getProductsInStockAvailable(t,10):this.productsInStock$))),this.assistancesFiltered=this.searchAssistanceControl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,V.z)(t=>{const n=this.assistances.filter(i=>i.description.includes(t));return this._mapCheckedAssistances(null!==t&&"string"==typeof t?(0,U.of)(n):this.assistances$)})),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,V.z)(t=>null!==t&&"string"==typeof t&&t!==this.selectedCustomerName?this._customersService.findActiveCustomers(t.trim()):this.customers$))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}displayFnAssistance(t){return t&&t.description?t.description:""}selectCustomer(t){this.billingForm.get("customerId").setValue(t.id),this.selectedCustomerName=t.name}addStockProduct(t){const n=this.billingForm.get("currencyId").value,i=structuredClone(this.billingForm.get("rates").value);let o=i.find(d=>d.currencyBaseId===n&&d.currencyRefId===t.currencyId);!o&&n!==t.currencyId&&(o=i.find(d=>d.currencyRefId===n&&d.currencyRefId!==d.currencyBaseId),o&&(o.value=1/o.value));const r=this.billingForm.get("multiplier").value,c=this._formBuilder.group({productId:new a.NI(t.productId,[a.kI.required]),currencyId:new a.NI(t.currencyId,[a.kI.required]),name:new a.NI(t.name,[a.kI.required]),staticPrice:new a.NI(Number(((o?o.value:1)*t.price).toFixed(2)),[a.kI.required,a.kI.min(0),a.kI.max(99999999)]),price:new a.NI(Number(((o?o.value:1)*t.price).toFixed(2)),[a.kI.required,a.kI.min(0),a.kI.max(99999999)]),multiplier:new a.NI(r),pt:new a.NI(0),uom:new a.NI(t.uom,[a.kI.required]),depotId:new a.NI(t.depotId,[a.kI.required]),depot:new a.NI(t.depot,[a.kI.required]),currency:new a.NI(t.currency,[a.kI.required]),stock:new a.NI(t.quantity,[a.kI.required]),rateId:new a.NI(o?o.id:null,[a.kI.required]),rate:new a.NI(o?o.value:null,[a.kI.required]),quantity:new a.NI(1,[G.L.onlyNumbersPattern(),a.kI.required,a.kI.min(.1),a.kI.max(t.quantity)])});this.billingForm.get("products").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeStockProduct(t){this.billingForm.get("products").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addProductToBill(t){const n=this.billingForm.get("products").getRawValue().findIndex(i=>i.productId===t.productId&&i.depotId===t.depotId);t.checked?(this.removeStockProduct(n),t.checked=!1):t.checked=!0,!(n>-1)&&this.addStockProduct(t)}incrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n+1)}decrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n-1)}removeProductToBill(t){this.removeStockProduct(t),this.searchProductControl.reset()}addAssistance(t){const n=this.billingForm.get("currencyId").value,i=structuredClone(this.billingForm.get("rates").value);let o=i.find(d=>d.currencyBaseId===n&&d.currencyRefId===t.currencyId);!o&&n!==t.currencyId&&(o=i.find(d=>d.currencyRefId===n&&d.currencyRefId!==d.currencyBaseId),o&&(o.value=1/o.value));const r=this.billingForm.get("multiplier").value,c=this._formBuilder.group({assistanceId:new a.NI(t.id,[a.kI.required]),currencyId:new a.NI(t.currencyId,[a.kI.required]),description:new a.NI(t.description,[a.kI.required]),staticPrice:new a.NI(Number(((o?o.value:1)*t.price).toFixed(2)),[a.kI.required,a.kI.min(0),a.kI.max(99999999)]),price:new a.NI(Number(((o?o.value:1)*t.price).toFixed(2)),[a.kI.required,a.kI.min(0),a.kI.max(99999999)]),multiplier:new a.NI(r),quantity:new a.NI(1,[G.L.onlyNumbersPattern(),a.kI.required,a.kI.min(1)]),pt:new a.NI(0),currency:new a.NI(t.currency.iso,[a.kI.required]),rateId:new a.NI(o?o.id:null,[a.kI.required]),rate:new a.NI(o?o.value:null,[a.kI.required])});this.billingForm.get("assistances").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeAssistance(t){this.billingForm.get("assistances").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addAssistanceToBill(t){const n=this.billingForm.get("assistances").getRawValue().findIndex(i=>i.assistanceId===t.id);t.checked?(this.removeAssistance(n),t.checked=!1):t.checked=!0,!(n>-1)&&this.addAssistance(t)}incrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(++n)}decrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(--n)}removeAssistanceToBill(t){this.removeAssistance(t),this.searchAssistanceControl.reset()}createBill(){if(this.billingForm.invalid)return;if(0===this.billingForm.get("products").controls.length&&0===this.billingForm.get("assistances").controls.length)return void this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Alerta",message:"Debe agrear al menos un producto o servicio a la factura",type:"warning",svgIcon:"mat_solid:warning"}});let t=this.billingForm.getRawValue();delete t.id;const n=[],i=[];t.ratesId=t.products.map(r=>r.rateId).filter((r,c,d)=>d.indexOf(r)===c);for(const r of t.products)n.push(this._mapProductToBill(r));for(const r of t.assistances)i.push(this._mapAssistanceToBill(r));t.products=n,t.assistances=i,t.subtotal=Number(this.total.toFixed(2)),delete t.rates,delete t.bankAccount._id,this._fuseConfirmationService.open({title:"Generar factura",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,M.sL)(this._destroyRef)).subscribe(r=>{"confirmed"===r&&this._billingService.createBill(t).pipe((0,g.R)(this._unsubscribeAll),(0,oe.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:c})=>{c&&(this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:"Factura registrada correctamente",type:"success",svgIcon:"mat_solid:done"}}),this.audio.play(),this.stayHere?this.restoreForm():this._router.navigateByUrl("/modules/sales/bills"))})})}restoreForm(){const t=this.billingForm.get("paymentMethodId").value,n=this.billingForm.get("operationTypeId").value,i=this.billingForm.get("multiplier").value;if(this.billingForm.get("products").clear(),this.searchCustomerControl.reset(),this.billingForm.reset(),this.total=0,this.selectedCustomerName="",this.searchProductControl.setValue(""),this.billingForm.get("paymentMethodId").setValue(t),this.billingForm.get("operationTypeId").setValue(n),this.billingForm.get("multiplier").setValue(i),this.billingForm.get("billDate").setValue(new Date),this.billingForm.get("observation").setValue(""),this.billingForm.get("surcharge").setValue(0),this.billingForm.get("discount").setValue(0),E.W.IsNullOrEmpty(this.merchant.bankAccounts)||(this.bankAccounts=this.merchant.bankAccounts,this.billingForm.get("bankAccount").setValue(this.merchant.bankAccounts[0])),!E.W.IsNullOrEmpty(this.currencies)){const o=this.currencies.find(r=>r.id===this.merchant.currencyId);this.billingForm.get("currencyId").setValue(o.id)}}_mapProductToBill(t){const{productId:n,price:i,depotId:o,quantity:r}=t,c=new ge.vr(n,"","",Number(i.toFixed(2)),Number(Number(r).toFixed(4)),o);return delete c.name,delete c.uom,c}_mapAssistanceToBill(t){const{assistanceId:n,price:i,quantity:o}=t;return new ge.JM(n,i,o)}_calculateBillTotal(){const t=this.billingForm.get("products").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0),n=this.billingForm.get("assistances").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0);this.total=Number(t.toFixed(2))+Number(n.toFixed(2))}_mapChecked(t){return t.pipe((0,R.U)(n=>n.map(i=>this.billingForm.get("products").getRawValue().some(r=>r.productId===i.productId&&r.depotId===i.depotId)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_mapCheckedAssistances(t){return t.pipe((0,R.U)(n=>n.map(i=>this.billingForm.get("assistances").getRawValue().some(r=>r.id===i.id)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_resetSelectedProductsRates(){const t=this.billingForm.get("currencyId").value,n=this.billingForm.get("multiplier").value;for(const i of this.billingForm.get("products").controls){const o=i.getRawValue(),r=structuredClone(this.billingForm.get("rates").value);let c=r.find(h=>h.currencyBaseId===t&&h.currencyRefId===o.currencyId);!c&&t!==o.currencyId&&(c=r.find(h=>h.currencyRefId===t&&h.currencyRefId!==h.currencyBaseId),c&&(c.value=1/c.value));let d=c?c.value:null;const _=i.get("price").value,m=i.get("staticPrice").value;let u=i.get("rate").value?i.get("rate").value:1;u&&d===u&&(u=1,d=1),i.patchValue({...o,price:(d?_*d:1*_/u)*n,staticPrice:d?m*d:1*m/u,multiplier:n,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}_resetSelectedAssistancesRates(){const t=this.billingForm.get("currencyId").value,n=this.billingForm.get("multiplier").value;for(const i of this.billingForm.get("assistances").controls){const o=i.getRawValue(),r=structuredClone(this.billingForm.get("rates").value);let c=r.find(h=>h.currencyBaseId===t&&h.currencyRefId===o.currencyId);!c&&t!==o.currencyId&&(c=r.find(h=>h.currencyRefId===t&&h.currencyRefId!==h.currencyBaseId),c&&(c.value=1/c.value));let d=c?c.value:null;const _=i.get("price").value,m=i.get("staticPrice").value;let u=i.get("rate").value?i.get("rate").value:1;u&&d===u&&(u=1,d=1),i.patchValue({...o,price:(d?_*d:1*_/u)*n,staticPrice:d?m*d:1*m/u,multiplier:n,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}calcAllProductPrice(t){const n=this.billingForm.get("products").getRawValue();this.previewsProductsFormData=[...n];for(const i of this.billingForm.get("products").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}calcAllAssistancePrice(t){const n=this.billingForm.get("assistances").getRawValue();this.previewsAssistancesFormData=[...n];for(const i of this.billingForm.get("assistances").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}_verifyChanges(t,n){for(let i=0;i<t.length;i++)if(t.length!==n.length||t[i].price!==n[i].price||Number(t[i].quantity)!==Number(n[i].quantity))return!0;return!1}updateSelectedRates(){const t=this.billingForm.get("currencyId").value,n=this.billingForm.get("products").getRawValue();let i=[];for(const r of n)i=[...this.rates.filter(_=>_.currencyBaseId===t&&_.currencyRefId===r.currencyId),...this.rates.filter(_=>_.currencyBaseId===r.currencyId&&_.currencyRefId===t&&_.currencyRefId!==_.currencyBaseId),...i];const o=i.reduce((r,c)=>(r.find(_=>_.id===c.id&&_.name===c.name)||r.push(c),r),[]);this.billingForm.get("rates").setValue(o)}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-billing"]],standalone:!0,features:[e.jDz],decls:126,vars:68,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0",3,"fuseScrollbarOptions"],[1,"relative","flex","flex-col","px-6","py-8","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["color","primary",3,"ngModel","ngModelChange"],["mat-flat-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[1,"flex","flex-col","px-4","mt-4","mb-12","gap-y-8","sm:px-8"],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"grid","gap-4","p-10","sm:grid-cols-4","lg:grid-cols-5",3,"formGroup"],["billNgForm","ngForm"],["appearance","fill",1,"w-full","md:col-span-2","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[1,"ath-autocomplete",3,"displayWith"],["customerAutocomplete","matAutocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["billDate",""],[3,"formControlName","required"],[3,"value"],[3,"formControlName","required","placeholder"],["multiple","",3,"formControlName","required","placeholder"],["class","text-sm opacity-75"],["matInput","","type","number","name","quantity",3,"min","max","formControlName"],[1,"flex","flex-col","gap-3","sm:flex-row","lg:flex-col","sm:col-span-2"],[3,"formControlName"],[1,"w-full","sm:col-span-4","lg:col-span-3","fuse-mat-textarea"],["matInput","",3,"formControlName","rows"],["class","col-span-4 shadow rounded-2xl bg-card"],[3,"value","click"],[1,"text-sm","opacity-75"],[1,"w-18"],[1,"col-span-4","shadow","rounded-2xl","bg-card"],[1,"p-6","pb-0"],["appearance","fill",1,"w-full","fuse-mat-dense",3,"subscriptSizing"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete",3,"displayWith","closed"],["productsAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-2","mt-2","min-h-36",3,"fuseScrollbarOptions"],["class","grid"],["class","flex items-center justify-center w-full gap-2 p-2 font-mono text-3xl font-semibold leading-7 text-white rounded-b-2xl bg-gradient-to-r from-primary-500 to-primary-700",3,"ngClass"],[1,"w-full",3,"value","click"],[1,"grid","w-full","grid-cols-6",3,"click"],[1,"flex","flex-row","items-center","col-span-5","truncate","md:col-span-3"],["color","primary",3,"checked"],[1,"items-center","hidden","col-span-2","md:flex"],[1,"flex","items-center","text-center"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left"],[1,"text-center"],[1,"text-right"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"truncate",3,"matTooltip"],[1,"truncate"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"flex","flex-col","items-center","justify-center"],["matInput","","type","number",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],[1,"text-center",3,"ngClass"],[1,"font-mono","text-right"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"w-full","text-sm","text-center"],["class","grid items-center gap-4 px-6 py-3 border-b billing-products-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","items-center","justify-center","w-full","gap-2","p-2","font-mono","text-3xl","font-semibold","leading-7","text-white","rounded-b-2xl","bg-gradient-to-r","from-primary-500","to-primary-700",3,"ngClass","click"],["class","w-full",3,"value"],["assistancesAutocomplete","matAutocomplete"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-assistances-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-assistances-grid","md:px-8"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","formControl"],["class","grid items-center gap-4 px-6 py-3 border-b billing-assistances-grid md:px-8"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Facturaci\xf3n"),e.qZA()(),e.TgZ(15,"div",5),e._UZ(16,"mat-icon",6),e.TgZ(17,"a",7),e._uU(18,"Facturar"),e.qZA()()(),e.TgZ(19,"div",8)(20,"h2",9),e._uU(21," Facturar "),e.qZA()()(),e.TgZ(22,"div",10),e.YNc(23,us,4,2),e.TgZ(24,"mat-checkbox",11),e.NdJ("ngModelChange",function(r){return i.stayHere=r}),e._uU(25,"Permanecer aqu\xed"),e.qZA(),e.TgZ(26,"button",12),e.NdJ("click",function(){return i.createBill()}),e._uU(27," Generar Factura "),e.qZA()()(),e.TgZ(28,"div",13)(29,"div",14)(30,"form",15,16)(32,"mat-form-field",17)(33,"mat-label"),e._uU(34,"Cliente"),e.qZA(),e._UZ(35,"mat-icon",18)(36,"input",19),e.TgZ(37,"mat-autocomplete",20,21),e.SjG(39,ms,2,2,"mat-option",27,e.x6l),e.ALo(41,"async"),e.qZA()(),e.TgZ(42,"mat-form-field",22)(43,"mat-label"),e._uU(44,"Fecha de la factura"),e.qZA(),e._UZ(45,"input",23),e.TgZ(46,"mat-hint"),e._uU(47,"DD/MM/YYYY"),e.qZA(),e._UZ(48,"mat-datepicker-toggle",24)(49,"mat-datepicker",null,25),e.YNc(51,ps,2,0,"mat-error"),e.qZA(),e.TgZ(52,"mat-form-field",22)(53,"mat-label"),e._uU(54,"Multiplicador"),e.qZA(),e.TgZ(55,"mat-select",26),e.YNc(56,gs,2,1,"mat-option",27),e.ALo(57,"async"),e.SjG(58,_s,2,2,"mat-option",27,e.x6l),e.ALo(60,"async"),e.qZA(),e.YNc(61,hs,2,0,"mat-error"),e.qZA(),e.TgZ(62,"mat-form-field",22)(63,"mat-label"),e._uU(64,"M\xe9todo de pago"),e.qZA(),e.TgZ(65,"mat-select",26),e.SjG(66,fs,2,2,"mat-option",27,e.x6l),e.ALo(68,"async"),e.qZA(),e.YNc(69,bs,2,0,"mat-error"),e.qZA(),e.TgZ(70,"mat-form-field",22)(71,"mat-label"),e._uU(72,"Tipo de Operaci\xf3n"),e.qZA(),e.TgZ(73,"mat-select",26),e.SjG(74,xs,2,2,"mat-option",27,e.x6l),e.ALo(76,"async"),e.qZA(),e.YNc(77,Cs,2,0,"mat-error"),e.qZA(),e.TgZ(78,"mat-form-field",22)(79,"mat-label"),e._uU(80,"Moneda"),e.qZA(),e.TgZ(81,"mat-select",28),e.SjG(82,ys,2,2,"mat-option",27,$e),e.qZA()(),e.TgZ(84,"mat-form-field",22)(85,"mat-label"),e._uU(86,"Tasa de Cambio"),e.qZA(),e.TgZ(87,"mat-select",29)(88,"mat-select-trigger"),e._uU(89),e.YNc(90,vs,2,2,"span",30),e.qZA(),e.SjG(91,Zs,6,6,"mat-option",27,e.x6l),e.ALo(93,"async"),e.qZA(),e.YNc(94,As,2,0,"mat-error"),e.qZA(),e.TgZ(95,"mat-form-field",22)(96,"mat-label"),e._uU(97,"Descuento"),e.qZA(),e._UZ(98,"input",31),e.qZA(),e.TgZ(99,"mat-form-field",22)(100,"mat-label"),e._uU(101,"Recargo"),e.qZA(),e._UZ(102,"input",31),e.qZA(),e.TgZ(103,"div",32)(104,"mat-form-field",22)(105,"mat-label"),e._uU(106,"Cuenta Bancaria"),e.qZA(),e.TgZ(107,"mat-select",26),e.SjG(108,Ts,2,3,"mat-option",27,e.x6l),e.qZA(),e.TgZ(110,"mat-hint"),e._uU(111,"Cuentas Bancarias registradas en el negocio"),e.qZA(),e.YNc(112,Is,2,0,"mat-error"),e.qZA(),e.TgZ(113,"mat-form-field",22)(114,"mat-label"),e._uU(115,"Transportista"),e.qZA(),e.TgZ(116,"mat-select",33),e.SjG(117,Ss,2,2,"mat-option",27,e.x6l),e.ALo(119,"async"),e.qZA()()(),e.TgZ(120,"mat-form-field",34)(121,"mat-label"),e._uU(122,"Observaciones"),e.qZA(),e._UZ(123,"textarea",35),e.qZA()()(),e.YNc(124,Rs,14,12,"div",36)(125,js,16,19,"div",36),e.qZA()()),2&n){const o=e.MAs(38),r=e.MAs(50);e.Q6J("fuseScrollbarOptions",e.DdM(67,Vs)),e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.um2(23,i.assistances.length>0&&i.productsInStock.length>0?23:-1),e.xp6(),e.Q6J("ngModel",i.stayHere),e.xp6(2),e.Q6J("disabled",i.billingForm.invalid),e.xp6(4),e.Q6J("formGroup",i.billingForm),e.xp6(5),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchCustomerControl)("matAutocomplete",o)("placeholder","Buscar cliente")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(41,53,i.customersFiltered)),e.xp6(6),e.Q6J("matDatepicker",r)("formControlName","billDate")("max",i.maxDate)("required",!0),e.xp6(3),e.Q6J("for",r),e.xp6(3),e.um2(51,i.billingForm.get("billDate").hasError("required")?51:-1),e.xp6(4),e.Q6J("formControlName","multiplier")("required",!0),e.xp6(),e.um2(56,0===e.lcZ(57,55,i.multipliers$).length?56:-1),e.xp6(2),e.wJu(e.lcZ(60,57,i.multipliers$)),e.xp6(3),e.um2(61,i.billingForm.get("multiplier").hasError("required")?61:-1),e.xp6(4),e.Q6J("formControlName","paymentMethodId")("required",!0),e.xp6(),e.wJu(e.lcZ(68,59,i.paymentMethods$)),e.xp6(3),e.um2(69,i.billingForm.get("paymentMethodId").hasError("required")?69:-1),e.xp6(4),e.Q6J("formControlName","operationTypeId")("required",!0),e.xp6(),e.wJu(e.lcZ(76,61,i.operationTypes$)),e.xp6(3),e.um2(77,i.billingForm.get("operationTypeId").hasError("required")?77:-1),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0)("placeholder","Moneda"),e.xp6(),e.wJu(i.currencies),e.xp6(5),e.Q6J("formControlName","rates")("required",!0)("placeholder","Tasa de cambio"),e.xp6(2),e.hij(" ",(null==i.billingForm.get("rates").value||null==i.billingForm.get("rates").value[0]?null:i.billingForm.get("rates").value[0].name)||""," "),e.xp6(),e.um2(90,((null==i.billingForm.get("rates").value?null:i.billingForm.get("rates").value.length)||0)>1?90:-1),e.xp6(),e.wJu(e.lcZ(93,63,i.ratesFiltered)),e.xp6(3),e.um2(94,i.billingForm.get("rates").hasError("required")?94:-1),e.xp6(4),e.Q6J("min",0)("max",i.total)("formControlName","discount"),e.xp6(4),e.Q6J("min",0)("max",99999)("formControlName","surcharge"),e.xp6(5),e.Q6J("formControlName","bankAccount")("required",!0),e.xp6(),e.wJu(i.bankAccounts),e.xp6(4),e.um2(112,i.billingForm.get("bankAccount").hasError("required")?112:-1),e.xp6(4),e.Q6J("formControlName","courierId"),e.xp6(),e.wJu(e.lcZ(119,65,i.employees$)),e.xp6(6),e.Q6J("formControlName","obs")("rows",4),e.xp6(),e.um2(124,i.billProducts?124:-1),e.xp6(),e.um2(125,i.billAssistances?125:-1)}},dependencies:[v.Ov,v.H9,v.JJ,a.u5,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.Q7,a.qQ,a.Fd,a.On,be.H,W.Bb,W.XC,he.ey,W.ZL,A.ot,A.lW,ne.p9,ne.oG,Z.FA,Z.Mq,Z.hl,Z.nW,f.lN,f.KE,f.hX,f.bx,f.TO,f.qo,f.R9,D.Ps,D.Hw,w.c,w.Nt,N.Tx,j.LD,j.gD,j.$L,X.AV,X.gM,v.mk,a.UX,a.oH,a.sg,a.u,Y.rH],encapsulation:2,changeDetection:0})}return s})();var gt=p(6990),_e=p(86723);const _t=s=>s.bills,ke=((0,k.P1)(_t,s=>s.bill),(0,k.P1)(_t,s=>s.bills));let Ys=(()=>{class s{constructor(t){this._dialogRef=t,this.dateControl=new a.NI(null,[a.kI.required])}closeDialog(){this._dialogRef.close()}selectDate(){const t=new Date(this.dateControl.value);this._dialogRef.close(t)}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(F.so))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-bills-date-dialog-select"]],standalone:!0,features:[e.jDz],decls:19,vars:7,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","py-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],["appearance","fill"],["matInput","",3,"matDatepicker","formControl"],["matIconSuffix","",3,"for"],["dp",""],[1,"flex","items-center","px-6","py-4","space-x-3","justify-between","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3," Seleccione la fecha de las facturas que desea exportar "),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"mat-form-field",6),e._UZ(8,"input",7),e.TgZ(9,"mat-hint"),e._uU(10,"DD/MM/YYYY"),e.qZA(),e._UZ(11,"mat-datepicker-toggle",8)(12,"mat-datepicker",null,9),e.qZA()()()(),e.TgZ(14,"div",10)(15,"button",11),e._uU(16," Cancelar "),e.qZA(),e.TgZ(17,"button",12),e.NdJ("click",function(){return i.selectDate()}),e._uU(18," Aceptar "),e.qZA()()()),2&n){const o=e.MAs(13);e.xp6(8),e.Q6J("matDatepicker",o)("formControl",i.dateControl),e.xp6(3),e.Q6J("for",o),e.xp6(4),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("color","primary")("disabled",i.dateControl.invalid)("matDialogClose","confirmed")}},dependencies:[f.lN,f.KE,f.bx,f.R9,w.c,w.Nt,Z.FA,Z.Mq,Z.hl,Z.nW,F.Is,F.ZT,A.ot,A.lW,a.UX,a.Fj,a.JJ,a.oH],encapsulation:2})}return s})();var ze=p(64610),we=p(62660);let Oe=(()=>{class s{constructor(t,n,i){this.apolloProvider=t,this._snackBar=n,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}getBills(t=0,n=50,i="no",o="desc",r="",c=null,d=[],_=[],m=[],u=null,h=null,C=null){return this._apollo.query({query:ts,errorPolicy:"all",variables:{page:t,size:n,sort:i,order:o,search:r,customerId:c,currenciesId:d,status:_,paymentStatus:m,billDate:u,startDate:h,endDate:C}}).pipe((0,q.b)(({data:x})=>{x&&this.store.dispatch((0,_e.Im)({bills:structuredClone(x).findAllBills.bills.map(b=>{const B=b.products.reduce((te,H)=>{const Ie=te.find(et=>et.productId===H.productId);return Ie?Ie.quantity+=H.quantity:te.push({productId:H.productId,price:H.price,quantity:H.quantity,product:H.product}),te},[]);return b.products=B,b})})),this.store.dispatch((0,Ce.Jr)({pagination:x.findAllBills.pagination}))}))}getBillsByDate(t){return this._apollo.query({query:is,errorPolicy:"all",variables:{date:t}}).pipe((0,q.b)(({errors:n})=>{if(n){let i="";n.forEach(o=>i+=`\n ${o.message}.`),this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getBillsByDateRangeAndStatus(t,n,i=null,o=null,r=null){return this._apollo.query({query:ss,errorPolicy:"all",variables:{initDate:t,endDate:n,status:i,paymentStatus:o,clientId:r}})}getBillById(t){return this._apollo.query({query:ns,variables:{findBillByIdId:t},errorPolicy:"all"}).pipe((0,q.b)(({errors:n,data:i})=>{if(n){let o="";n.forEach(r=>o+=`\n ${r.message}.`),this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,_e.QG)({bill:i.bill}))}))}updateBill(t){return this.store.select(ke).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:as,variables:{updateBillInput:t},errorPolicy:"all"}).pipe((0,q.b)(({errors:i,data:o})=>{if(i){let d="";i.forEach(_=>d+=`\n ${_.message}.`),this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,we.Z)(n);r[n.findIndex(d=>d.id===t.id)]=o.updatedBill,this.store.dispatch((0,_e.Im)({bills:r}))}))))}updateBillStatus(t,n,i){return this.store.select(ke).pipe((0,L.q)(1),(0,I.w)(o=>this._apollo.mutate({mutation:rs,variables:{updateBillStatusInput:{id:t,status:n,paymentStatus:i}},errorPolicy:"all"}).pipe((0,q.b)(({data:r})=>{const c=structuredClone(o);c[o.findIndex(_=>_.id===t)]=r.updateBillStatus.bill,this.store.dispatch((0,_e.Im)({bills:c}))}))))}removeBill(t){return this.store.select(ke).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:ls,variables:{removeBillId:t},errorPolicy:"all"}).pipe((0,q.b)(({errors:i})=>{if(i){let c="";i.forEach(d=>c+=`\n ${d.message}.`),this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:c,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const o=(0,we.Z)(n),r=n.findIndex(c=>c.id===t);o.splice(r,1),this.store.dispatch((0,_e.Im)({bills:o}))}))))}dispatchBill(t){return this._apollo.mutate({mutation:cs,variables:{billId:t},errorPolicy:"all"}).pipe((0,q.b)(({data:n})=>{n&&this.store.dispatch((0,_e.QD)({bill:n.dispatchBill.bill}))}))}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(y._M),e.LFG($.ux),e.LFG(k.yh))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var ve=p(57270);let ht=(()=>{class s{constructor(){ae.vfs=it.I.vfs}generateBillsReport(t,n,i,o,r,c=0,d=0,_=new ge.V_(0,0,0,0)){const m=`Facturas realizadas de ${T(t).format("DD/MM/yy")} - ${T(n).format("DD/MM/yy")}`,u={header:{text:m,style:"header",marginTop:5},content:[{lineHeight:1.3,table:{headerRows:1,widths:[20,80,60,"*",60,60,60,60,60],body:[[{text:"#",style:"table_header"},{text:"N\xba",style:"table_header"},{text:"Fecha",style:"table_header"},{text:"Cliente",style:"table_header",alignment:"left"},{text:"$",style:"table_header"},{text:"Importe",style:"table_header"},{text:"Estado",style:"table_header"},{text:"F. Cobro",style:"table_header"},{text:"Demora",style:"table_header"}],...r.map((h,C)=>[{style:"table_body",text:C+1},{style:"table_body",text:h.no},{style:"table_body",text:T(h.billDate).format("DD/MM/yy")},{style:"table_body",text:"item.customer.fullname",alignment:"left"},{style:"table_body",text:h.currency.iso},{style:"table_body",text:h.total.toFixed(2),alignment:"right"},{style:"table_body",text:h.paymentStatus.toLocaleUpperCase()},{style:"table_body",text:"pendiente"===h.paymentStatus||void 0===h.collectedAt?"":T(h.collectedAt).format("DD/MM/yy")},{style:"table_body",text:"pendiente"===h.paymentStatus||void 0===h.collectedAt?T(h.billDate).fromNow(!0):T(h.collectedAt).from(T(h.billDate),!0)}]),[{text:"",style:"table_footer"},{text:"Total",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"CUP",style:"table_footer"},{text:c.toFixed(2),style:"table_footer",alignment:"right"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"}],[{text:"",style:"table_footer"},{text:"Total",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"USD",style:"table_footer"},{text:d.toFixed(2),style:"table_footer",alignment:"right"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"}]]},layout:{hLineWidth:(h,C)=>.7,vLineWidth:(h,C)=>0,hLineColor:(h,C)=>"#eeeeee"}}],footer:(h,C)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${o.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${h.toString()}/${C} - Fecha de impresi\xf3n ${T().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_footer:{fontSize:12,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_body:{fontSize:10,alignment:"center"}},pageOrientation:"landscape",pageSize:"LETTER",watermark:{text:o.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:m,author:i.fullname,creationDate:T().toDate(),modDate:T().toDate(),producer:o.name}};ae.createPdf(u).open()}generateBillsCollectedByCustomersReport(t,n,i,o,r){const c=[],d=`Facturas Realizadas por Clientes en ${r[0].currency} de ${T(t).format("DD/MM/yy")} - ${T(n).format("DD/MM/yy")}`;r.forEach((m,u)=>{const h={lineHeight:1.3,marginTop:10,marginBotton:5,headerRows:1,table:{headerRows:1,widths:["*"],body:[[{text:`Cliente: ${m.customer}`,style:"table_header",alignment:"center"}]]},layout:{hLineWidth:(b,B)=>.7,vLineWidth:(b,B)=>0,hLineColor:(b,B)=>"#eeeeee"}},C=[{columns:[{text:"Total de facturas:",style:"customers_summary"},{text:"Cobradas:",style:"customers_summary"},{text:"Por cobrar:",style:"customers_summary"}]},{columns:[{text:m.totalBills,style:"customers_summary"},{text:m.totalCollected,style:"customers_summary"},{text:m.totalPending,style:"customers_summary"}]},{columns:[{text:`${m.currency} ${m.totalAmount.toFixed(2)}`,style:"customers_summary"},{text:`${m.currency} ${m.totalCollectedAmount.toFixed(2)}`,style:"customers_summary"},{text:`${m.currency} ${m.totalPendingAmount.toFixed(2)}`,style:"customers_summary"}]}],x={lineHeight:1.3,marginTop:10,headerRows:1,table:{headerRows:1,widths:[80,"*",100,80,80],body:[[{text:"Fecha",style:"table_header"},{text:"No. Factura",style:"table_header",alignment:"left"},{text:"Importe",style:"table_header",alignment:"right"},{text:"Estado",style:"table_header"},{text:"Estado de Pago",style:"table_header"}],...m.bills.map(b=>[{text:T(b.date).format("DD/MM/yy"),style:"table_body"},{text:b.no,style:"table_body",alignment:"left"},{text:b.total.toFixed(2),style:"table_body",alignment:"right"},{text:b.status.toLocaleUpperCase(),style:"table_body"},{text:b.paymentStatus.toLocaleUpperCase(),style:"table_body"}])]},layout:{hLineWidth:(b,B)=>.7,vLineWidth:(b,B)=>0,hLineColor:(b,B)=>"#eeeeee"}};c.push(h,C,x)});const _={header:{text:d,style:"header"},content:c,footer:(m,u)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${o.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${m.toString()}/${u} - Fecha de impresi\xf3n ${T().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:16,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},customer_name:{fontSize:14,bold:!0,marginTop:20,marginBottom:5,alignment:"center",fillColor:"#bbbbbb",fontFeatures:["c2sc","smcp"]},customers_summary:{fontSize:12,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},subheader:{fontSize:14,bold:!0,margin:[0,10,0,5]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_body:{alignment:"center",fontSize:10}},pageOrientation:"portrait",pageSize:"LETTER",pageMargins:[30,30],watermark:{text:o.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:d,author:i.fullname,creationDate:T().toDate(),modDate:T().toDate(),producer:o.name}};ae.createPdf(_).open()}generateBillsByCustomersReport(t,n,i,o,r,c=null){const d=[],_=`Facturas ${c?"Cobradas":""} por Clientes en ${r[0].currency} de ${T(t).format("DD/MM/yy")} - ${T(n).format("DD/MM/yy")}`;r.forEach(u=>{const h={lineHeight:1.3,marginTop:10,marginBotton:5,headerRows:1,table:{headerRows:1,widths:["*"],body:[[{text:`Cliente: ${u.customer}`,style:"customer_header",alignment:"center"}]]},layout:{hLineWidth:(b,B)=>.7,vLineWidth:(b,B)=>0,hLineColor:(b,B)=>"#a1a1a1"}},C=[{columns:[{text:"Total de facturas:",style:"customers_summary"},{text:`Total ${c?"cobrado":"facturado"}:`,style:"customers_summary"}]},{columns:[{text:u.totalBills,style:"customers_summary"},{text:`${u.currency} ${u.totalAmount.toFixed(2)}`,style:"customers_summary"}]}],x={lineHeight:1.3,marginTop:10,headerRows:1,table:{headerRows:1,widths:[40,80,"*",c?50:100,80,80,c?80:0],body:[[{text:"No.",style:"table_header"},{text:"Fecha",style:"table_header"},{text:"No. Factura",style:"table_header",alignment:"left"},{text:"Importe",style:"table_header",alignment:"right"},{text:"Estado",style:"table_header"},{text:"Estado de Pago",style:"table_header"},{text:c?"F. Cobro":"",style:"table_header"}],...u.bills.map((b,B)=>[{text:B+1,style:"table_body"},{text:T(b.date).format("DD/MM/yy"),style:"table_body"},{text:b.no,style:"table_body",alignment:"left"},{text:b.total.toFixed(2),style:"table_body",alignment:"right"},{text:b.status.toLocaleUpperCase(),style:"table_body"},{text:b.paymentStatus.toLocaleUpperCase(),style:"table_body"},{text:c?T(b.collectedAt).format("DD/MM/yy"):"",style:"table_body"}])]},layout:{hLineWidth:(b,B)=>.7,vLineWidth:(b,B)=>0,hLineColor:(b,B)=>"#eeeeee"}};d.push(h,C,x)});const m={header:{text:_,style:"header"},content:d,footer:(u,h)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${o.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${u.toString()}/${h} - Fecha de impresi\xf3n ${T().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:16,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},customer_name:{fontSize:14,bold:!0,marginTop:20,marginBottom:5,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},customers_summary:{fontSize:12,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},subheader:{fontSize:14,bold:!0,margin:[0,10,0,5]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},customer_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#bbbbbb",fontFeatures:["c2sc","smcp"]},table_body:{alignment:"center",fontSize:10}},pageOrientation:"portrait",pageSize:"LETTER",pageMargins:[30,30],watermark:{text:o.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:_,author:i.fullname,creationDate:T().toDate(),modDate:T().toDate(),producer:o.name}};ae.createPdf(m).open()}generateProductsBoughtByCustomerReport(t,n,i,o,r){const c=[],d=`Productos comprados por ${r.customer} de ${T(t).format("DD/MM/yy")} - ${T(n).format("DD/MM/yy")}`,_={lineHeight:1.3,marginTop:10,headerRows:1,table:{headerRows:1,widths:[20,"*",40,100,80,80],body:[[{text:"No.",style:"table_header"},{text:"Producto",style:"table_header",alignment:"left"},{text:"U",style:"table_header"},{text:"Cantidad",style:"table_header"},{text:"Precio",style:"table_header",alignment:"right"},{text:"Total",style:"table_header",alignment:"right"}],...r.products.map((u,h)=>[{text:h+1,style:"table_body"},{text:u.name,style:"table_body",alignment:"left"},{text:u.uom,style:"table_body"},{text:u.quantity,style:"table_body"},{text:u.price.toFixed(2),style:"table_body",alignment:"right"},{text:(u.quantity*u.price).toFixed(2),style:"table_body",alignment:"right"}])]},layout:{hLineWidth:(u,h)=>.7,vLineWidth:(u,h)=>0,hLineColor:(u,h)=>"#eeeeee"}};c.push(_);const m={header:{text:d,style:"header"},content:c,footer:(u,h)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${o.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${u.toString()}/${h} - Fecha de impresi\xf3n ${T().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:16,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},customer_name:{fontSize:14,bold:!0,marginTop:20,marginBottom:5,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},customers_summary:{fontSize:12,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},subheader:{fontSize:14,bold:!0,margin:[0,10,0,5]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_body:{alignment:"center",fontSize:10}},pageOrientation:"portrait",pageSize:"LETTER",pageMargins:[30,30],watermark:{text:o.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:d,author:i.fullname,creationDate:T().toDate(),modDate:T().toDate(),producer:o.name}};ae.createPdf(m).open()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Ue=function(s){return s.factura="factura",s.prefactura="prefactura",s.oferta="oferta",s}(Ue||{});const Ks=["billDateFilter"],Ws=["customerFilter"],Xs=["currencyFilter"],en=["statusFilter"],tn=["paymentStatusFilter"];function sn(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-icon",34),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.range.reset())}),e.qZA()}}function nn(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",55),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.clearTableFilters())}),e.TgZ(1,"span",56),e._uU(2," filter_list_off "),e.qZA()()}}function on(s,l){1&s&&e._UZ(0,"mat-icon",66),2&s&&e.Q6J("svgIcon","mat_solid:done")}function an(s,l){1&s&&e._UZ(0,"mat-icon",66),2&s&&e.Q6J("svgIcon","mat_solid:done")}function rn(s,l){1&s&&e._UZ(0,"mat-icon",66),2&s&&e.Q6J("svgIcon","mat_solid:done")}function ln(s,l){1&s&&e._UZ(0,"mat-icon",66),2&s&&e.Q6J("svgIcon","mat_solid:done")}const cn=(s,l,t,n)=>({"bg-amber-50 text-amber-700":s,"text-red-700 bg-red-50":l,"text-orange-700 bg-orange-50":t,"text-green-700 bg-green-50":n}),dn=(s,l)=>({"text-blue-700 bg-blue-50":s,"text-green-700 bg-green-50":l});function un(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",57)(1,"div",58),e._uU(2),e.qZA(),e.TgZ(3,"div",59),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",26),e._uU(7),e.qZA(),e.TgZ(8,"div",60),e._uU(9),e.qZA(),e.TgZ(10,"div",61),e._uU(11),e.ALo(12,"number"),e.qZA(),e.TgZ(13,"div",62)(14,"span",63),e._uU(15),e.ALo(16,"uppercase"),e.qZA()(),e.TgZ(17,"div",62)(18,"span",63),e._uU(19),e.ALo(20,"uppercase"),e.qZA()(),e.TgZ(21,"div",64)(22,"button",65),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.generateBillDocument(o))}),e._UZ(23,"mat-icon",66),e.qZA(),e.TgZ(24,"button",67),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.dispatchBill(o.id))}),e._UZ(25,"mat-icon",66),e.qZA(),e.TgZ(26,"div")(27,"button",68),e._UZ(28,"mat-icon",66),e.qZA(),e.TgZ(29,"mat-menu",null,69)(31,"div",70),e._uU(32," Actualizar Estado "),e.qZA(),e.TgZ(33,"button",71),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.updateStatus(o.id,"entregada"))}),e.TgZ(34,"div",72),e.YNc(35,on,1,1,"mat-icon",73),e.qZA(),e.TgZ(36,"span",74),e._uU(37,"Entregada"),e.qZA()(),e.TgZ(38,"button",71),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.updateStatus(o.id,null,"cobrada"))}),e.TgZ(39,"div",72),e.YNc(40,an,1,1,"mat-icon",73),e.qZA(),e.TgZ(41,"span",74),e._uU(42,"Cobrada"),e.qZA()(),e.TgZ(43,"button",71),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.updateStatus(o.id,"cancelada"))}),e.TgZ(44,"div",72),e.YNc(45,rn,1,1,"mat-icon",73),e.qZA(),e.TgZ(46,"span",74),e._uU(47,"Cancelada"),e.qZA()(),e.TgZ(48,"button",71),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.updateStatus(o.id,"rechazada"))}),e.TgZ(49,"div",72),e.YNc(50,ln,1,1,"mat-icon",73),e.qZA(),e.TgZ(51,"span",74),e._uU(52,"Rechazada"),e.qZA()()()()()()}if(2&s){const t=l.$implicit,n=e.MAs(30);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",e.xi3(5,23,t.createdAt,"dd/MM/yyyy")," "),e.xp6(3),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(12,26,t.total,"1.2-2")," "),e.xp6(2),e.Q6J("ngClass",e.l5B(33,cn,"nueva"===t.status,"cancelada"===t.status,"rechazada"===t.status,"entregada"===t.status)),e.xp6(2),e.hij(" ",e.lcZ(16,29,t.status)," "),e.xp6(2),e.Q6J("ngClass",e.WLB(38,dn,"pendiente"===t.paymentStatus,"cobrada"===t.paymentStatus)),e.xp6(2),e.hij(" ",e.lcZ(20,31,t.paymentStatus)," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:description"),e.xp6(),e.Q6J("disabled",0===t.products.length||t.isDispatched||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(),e.Q6J("svgIcon","mat_solid:logout"),e.xp6(2),e.Q6J("matMenuTriggerFor",n)("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(),e.Q6J("svgIcon","mat_solid:update"),e.xp6(5),e.Q6J("disabled",t.status.includes("entregada")||t.status.includes("cancelada")||t.status.includes("rechazada")||t.paymentStatus.includes("cobrada")),e.xp6(2),e.um2(35,t.status.includes("entregada")?35:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(2),e.um2(40,t.paymentStatus.includes("cobrada")?40:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("rechazada")||t.status.includes("cancelada")),e.xp6(2),e.um2(45,t.status.includes("cancelada")?45:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(2),e.um2(50,t.status.includes("rechazada")?50:-1)}}function mn(s,l){if(1&s&&e.SjG(0,un,53,41,"div",75,e.QCX().trackByFn),2&s){const t=e.oxw();e.wJu(t)}}function pn(s,l){1&s&&(e.TgZ(0,"div",76),e._uU(1," \xa1No se ha registrado ninguna factura! "),e.qZA())}const gn=()=>["nueva","entregada","cancelada","rechazada"],_n=()=>["pendiente","cobrada"],hn=s=>({"mr-4":s}),fn=(s,l)=>({"pointer-events-none":s,hidden:l}),bn=()=>[10,25,100];function xn(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",35)(1,"div",36)(2,"div",37),e._uU(3," N\xfamero "),e.qZA(),e.TgZ(4,"div",38)(5,"span",39),e._uU(6,"Fecha"),e.qZA(),e.TgZ(7,"table-filter",40,41),e.NdJ("dataChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addDate(i))}),e.qZA()(),e.TgZ(9,"div",42)(10,"span"),e._uU(11,"Cliente"),e.qZA(),e.TgZ(12,"table-filter",43,44),e.NdJ("dataChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addCustomer(i))}),e.qZA()(),e.TgZ(14,"div",38)(15,"span"),e._uU(16,"Moneda"),e.qZA(),e.TgZ(17,"table-filter",45,46),e.NdJ("dataChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addCurrencies(i))}),e.ALo(19,"async"),e.qZA()(),e.TgZ(20,"div",47),e._uU(21," Importe "),e.qZA(),e.TgZ(22,"div",38)(23,"span",39),e._uU(24,"Estado"),e.qZA(),e.TgZ(25,"table-filter",48,49),e.NdJ("dataChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addStatus(i))}),e.qZA()(),e.TgZ(27,"div",38)(28,"span",50),e._uU(29,"E.Pago"),e.qZA(),e.TgZ(30,"table-filter",48,51),e.NdJ("dataChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addPaymentStatus(i))}),e.qZA()(),e.TgZ(32,"div",52)(33,"span"),e._uU(34,"Acciones"),e.qZA(),e.YNc(35,nn,3,0,"button",53),e.qZA()(),e.YNc(36,mn,2,0)(37,pn,2,0),e._UZ(38,"mat-paginator",54),e.qZA()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(3),e.Q6J("mat-sort-header","billDate"),e.xp6(2),e.Q6J("filterType","date"),e.xp6(5),e.Q6J("filterType","filterEntity")("searchEntityControl",t.searchCustomersControl)("entitiesFiltered",t.customersFiltered),e.xp6(5),e.Q6J("filterType","multiSelectEntity")("entityPropertyName","iso")("useUpperCase",!0)("data",e.lcZ(19,26,t.currencies$)),e.xp6(3),e.Q6J("mat-sort-header","total"),e.xp6(3),e.Q6J("mat-sort-header","status"),e.xp6(2),e.Q6J("filterType","multiSelect")("data",e.DdM(28,gn)),e.xp6(3),e.Q6J("mat-sort-header","paymentStatus"),e.xp6(2),e.Q6J("filterType","multiSelect")("data",e.DdM(29,_n)),e.xp6(2),e.Q6J("ngClass",e.VKq(30,hn,t.existTableFilter())),e.xp6(3),e.um2(35,t.existTableFilter()?35:-1),e.xp6(),e.um2(36,l.length>0?36:37),e.xp6(2),e.Q6J("ngClass",e.WLB(32,fn,t.isLoading,t.pagination.length<10&&t.pagination.page<1))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(35,bn))("showFirstLastButtons",!0)}}const Cn=()=>["/modules/sales/dashboard"],yn=()=>["/modules/sales/billing"];let vn=(()=>{class s{constructor(){this.bills$=(0,U.of)([]),this.currencies$=(0,U.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.merchantLogo=null,this.maxDate=new Date,this.range=new a.cw({start:new a.NI({disabled:!1,value:null},[G.L.futureDateValidator()]),end:new a.NI({disabled:!1,value:null},[G.L.futureDateValidator()])}),this.searchCustomersControl=new a.NI(null),this.searchInputControl=new a.NI,this.filterInputControl=new a.NI,this.selectedCustomer=null,this.selectedDate=null,this.selectedCurrenciesId=[],this.selectedStatus=[],this.selectedPaymentStatus=[],this.selectedSlide=null,this.user=null,this._billsService=(0,e.f3M)(Oe),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._customersService=(0,e.f3M)(ye.v),this._dialog=(0,e.f3M)(F.uw),this._documentsService=(0,e.f3M)(ve.S),this._fileSaverService=(0,e.f3M)(Re.m),this._fuseConfirmationService=(0,e.f3M)(se.R),this._salesReportsService=(0,e.f3M)(ht),this._snackBar=(0,e.f3M)($.ux),this._unsubscribeAll=new O.x,this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.store.select(re.rk).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.currencies$=this.store.select(le.zd),this.store.select(ie.Qs).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.bills$=this.store.select(ke),this.customersFiltered=this.searchCustomersControl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,oe.x)(()=>{this.isLoading=!1}),(0,V.z)(t=>null!==t&&"string"==typeof t&&(this.selectedCustomer&&t!==this.selectedCustomer.name||!this.selectedCustomer)?(this.isLoading=!0,this._customersService.findActiveCustomers(t.trim())):(0,U.of)())),this.store.select(me.B).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(300),(0,I.w)(t=>(this.isLoading=!0,this._billsService.getBills(0,25,"no","desc",t,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,R.U)(()=>{this.isLoading=!1})).subscribe(),this.filterInputControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(300),(0,I.w)(t=>(this.isLoading=!0,this._billsService.getBills(0,25,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,R.U)(()=>{this.isLoading=!1})).subscribe(),this.range.valueChanges.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.billDateFilter.clearFilter(),this._billsService.getBills(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,null,t.start,t.end).pipe((0,g.R)(this._unsubscribeAll)).subscribe()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,ue.T)(this._sort.sortChange,this._paginator.page).pipe((0,I.w)(()=>(this.isLoading=!0,this._billsService.getBills(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,R.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,_e.Hl)())}resetCustomer(){this.selectedCustomer=null,this.searchInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCustomer(t){this.selectedCustomer=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addDate(t){this.selectedDate=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCurrencies(t){this.selectedCurrenciesId=t.map(n=>n.id),this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addStatus(t){this.selectedStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addPaymentStatus(t){this.selectedPaymentStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}dispatchBill(t){this._fuseConfirmationService.open({title:"Despachar factura",message:"\xbfEsta seguro que desea despachar esta factura?.",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._billsService.dispatchBill(t).pipe((0,g.R)(this._unsubscribeAll),(0,oe.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:o})=>{o&&this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.dispatchBill.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}})})})}updateStatus(t,n=null,i=null){this._fuseConfirmationService.open({title:"Actualizar estado de la factura",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this._billsService.updateBillStatus(t,n,i).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:c})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:c.updateBillStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}generateBillDocument(t){this._documentsService.generateBillDocument(t,Ue.factura,this.merchant,this.user)}generateBillsReport(t=null,n=null){const i=this.range.getRawValue();!i.start||!i.end||this._billsService.getBillsByDateRangeAndStatus(i.start,i.end,t,n,this.selectedCustomer?this.selectedCustomer.id:null).pipe((0,L.q)(1)).subscribe(({data:o})=>{this._salesReportsService.generateBillsReport(i.start,i.end,this.user,this.merchant,o.getBillsByDateRangeAndStatus.bills,this.getTotalCUP(o.getBillsByDateRangeAndStatus.bills),this.getTotalUSD(o.getBillsByDateRangeAndStatus.bills),this.generateBillsSummary(o.getBillsByDateRangeAndStatus.bills))})}exportVersat(t){this._fileSaverService.exportAsFacFile(t,this.user,this._getBankAccountMC(this.merchant),this._getBankAccountOM(this.merchant,t))}trackByFn(t,n){return t||n.id}exportBillsByDateToVersat(){this._dialog.open(Ys,{panelClass:"ath-dialog-panel",disableClose:!0,maxWidth:"500px"}).afterClosed().subscribe(n=>{this._billsService.getBillsByDate(n.toISOString()).pipe((0,L.q)(1)).subscribe(({data:i})=>{const r=(0,gt.groupBy)(i.findAllBillsByDate.bills,"paymentMethod.name");(0,gt.groupBy)(r,"operationType.name")})})}existTableFilter(){return this.statusFilter?.hasFilter||this.billDateFilter?.hasFilter||this.paymentStatusFilter?.hasFilter||this.currencyFilter?.hasFilter||this.customerFilter?.hasFilter}clearTableFilters(){this.statusFilter?.hasFilter&&this.statusFilter.clearFilter(),this.billDateFilter?.hasFilter&&this.billDateFilter.clearFilter(),this.paymentStatusFilter?.hasFilter&&this.paymentStatusFilter.clearFilter(),this.currencyFilter?.hasFilter&&this.currencyFilter.clearFilter(),this.customerFilter?.hasFilter&&this.customerFilter.clearFilter()}_getBankAccountMC(t){return t.bankAccounts.find(i=>"CUP"===i.currency).no}_getBankAccountOM(t,n){return t.bankAccounts.find(i=>i.currency===n.currency.iso).no}getTotalCUP(t){return t.filter(i=>"CUP"===i.currency.iso).reduce((i,o)=>i+(o.total||0),0)}getTotalUSD(t){return t.filter(i=>"USD"===i.currency.iso).reduce((i,o)=>i+(o.total||0),0)}generateBillsSummary(t){const n={nueva:0,recibida:0,rechazada:0,cancelada:0};return t.forEach(i=>{n[i.status||ge.DK.nueva]++}),n}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-bills"]],viewQuery:function(n,i){if(1&n&&(e.Gf(Q.NW,5),e.Gf(P.YE,5),e.Gf(Ks,5),e.Gf(Ws,5),e.Gf(Xs,5),e.Gf(en,5),e.Gf(tn,5)),2&n){let o;e.iGM(o=e.CRH())&&(i._paginator=o.first),e.iGM(o=e.CRH())&&(i._sort=o.first),e.iGM(o=e.CRH())&&(i.billDateFilter=o.first),e.iGM(o=e.CRH())&&(i.customerFilter=o.first),e.iGM(o=e.CRH())&&(i.currencyFilter=o.first),e.iGM(o=e.CRH())&&(i.statusFilter=o.first),e.iGM(o=e.CRH())&&(i.paymentStatusFilter=o.first)}},standalone:!0,features:[e.jDz],decls:59,vars:25,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500",3,"routerLink"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","flex-wrap","items-center","w-full","gap-2","mt-6","md:fixed","right-8","shrink-0","lg:mt-0","lg:ml-4","lg:w-auto","sm:w-1/2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"sm:mx-4","min-w-64","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matPrefix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"disabled","matMenuTriggerFor"],["xPosition","before"],["reportsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","flex-auto"],[1,"z-10","flex","flex-col","flex-auto","bg-white","dark:bg-default"],["class","relative grid"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[1,"relative","grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","bills-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"",3,"mat-sort-header"],[1,"flex","items-center","justify-center"],[3,"mat-sort-header"],[3,"filterType","dataChange"],["billDateFilter",""],[1,"flex","items-center","justify-start"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange"],["customerFilter",""],[3,"filterType","entityPropertyName","useUpperCase","data","dataChange"],["currencyFilter",""],[1,"flex","justify-end",3,"mat-sort-header"],[3,"filterType","data","dataChange"],["statusFilter",""],["matTooltip","Estado del pago",3,"mat-sort-header"],["paymentStatusFilter",""],[1,"flex","items-center","justify-end","mr-10",3,"ngClass"],["color","warn","class","w-6 h-6 min-h-6 min-w-6","mat-icon-button","","matTooltip","Limpiar filtros"],[1,"border-b","first-letter:z-10","sm:inset-x-0","sm:sticky","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["color","warn","mat-icon-button","","matTooltip","Limpiar filtros",1,"w-6","h-6","min-h-6","min-w-6",3,"click"],[1,"material-icons","icon-size-4"],[1,"z-0","grid","items-center","gap-4","px-6","py-3","border-b","bills-grid","md:px-8"],[1,"font-mono"],[1,"font-mono","text-center"],[1,"text-center"],[1,"font-mono","text-right"],[1,"flex","items-center","justify-center","mr-4","text-center","truncate","delay-100","rounded-full","h-7","lock","dark:bg-white","dark:bg-opacity-5",3,"ngClass"],[1,"w-full","px-2","text-sm","font-medium","text-center"],[1,"flex","flex-row","justify-end","gap-2"],["mat-stroked-button","","matTooltip","Imprimir factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Despachar Factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["mat-stroked-button","","matTooltip","Actualizar estados",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"matMenuTriggerFor","disabled"],["listStatusMenu","matMenu"],[1,"w-full","p-2","text-lg","font-semibold","text-center","text-secondary"],["mat-menu-item","",1,"grid","w-full","grid-cols-4",3,"disabled","click"],[1,"col-span-1"],["class","icon-size-5",3,"svgIcon"],[1,"col-span-3","text-center"],["class","z-0 grid items-center gap-4 px-6 py-3 border-b bills-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",8),e._uU(14,"Facturaci\xf3n"),e.qZA()(),e.TgZ(15,"div",5),e._UZ(16,"mat-icon",6),e.TgZ(17,"a",8),e._uU(18,"Facturas"),e.qZA()()(),e.TgZ(19,"div",9)(20,"h2",10),e._uU(21," Registro de Facturas "),e.qZA()()(),e.TgZ(22,"div",11)(23,"mat-form-field",12),e._UZ(24,"mat-icon",13)(25,"input",14),e.qZA(),e.TgZ(26,"mat-form-field",15)(27,"mat-date-range-input",16),e._UZ(28,"input",17)(29,"input",18),e.qZA(),e._UZ(30,"mat-datepicker-toggle",19)(31,"mat-date-range-picker",20,21),e.YNc(33,sn,1,0,"mat-icon",22),e.qZA(),e.TgZ(34,"button",23),e._UZ(35,"mat-icon",24),e.TgZ(36,"span",25),e._uU(37,"Registrar"),e.qZA()(),e.TgZ(38,"div",26)(39,"button",27),e._UZ(40,"mat-icon",24),e.TgZ(41,"span",25),e._uU(42,"Reportes"),e.qZA()(),e.TgZ(43,"mat-menu",28,29)(45,"button",30),e.NdJ("click",function(){return i.generateBillsReport()}),e._uU(46,"Facturas realizadas"),e.qZA(),e.TgZ(47,"button",30),e.NdJ("click",function(){return i.generateBillsReport(null,"cobrada")}),e._uU(48,"Facturas cobradas"),e.qZA(),e.TgZ(49,"button",30),e.NdJ("click",function(){return i.generateBillsReport(null,"pendiente")}),e._uU(50,"Facturas por cobrar"),e.qZA(),e.TgZ(51,"button",30),e.NdJ("click",function(){return i.generateBillsReport("cancelada")}),e._uU(52,"Facturas canceladas"),e.qZA(),e.TgZ(53,"button",30),e.NdJ("click",function(){return i.generateBillsReport("rechazada")}),e._uU(54,"Facturas rechazadas"),e.qZA()()()()(),e.TgZ(55,"div",31)(56,"div",32),e.YNc(57,xn,39,36,"div",33),e.ALo(58,"async"),e.qZA()()()),2&n){const o=e.MAs(32),r=e.MAs(44);let c;e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(),e.Q6J("routerLink",e.DdM(23,Cn)),e.xp6(3),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("formGroup",i.range)("rangePicker",o)("max",i.maxDate),e.xp6(3),e.Q6J("for",o),e.xp6(3),e.um2(33,i.range.get("start").value||i.range.get("end").value?33:-1),e.xp6(),e.Q6J("routerLink",e.DdM(24,yn)),e.xp6(),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(4),e.Q6J("disabled",!i.range.get("start").value||!i.range.get("end").value||i.range.invalid)("matMenuTriggerFor",r),e.xp6(),e.Q6J("svgIcon","mat_solid:plagiarism"),e.xp6(17),e.um2(57,(c=e.lcZ(58,21,i.bills$))?57:-1,c)}},dependencies:[v.Ov,v.uU,v.JJ,A.ot,A.lW,A.RK,Z.FA,Z.nW,Z.wx,Z.zY,Z.By,Z._g,f.lN,f.KE,f.qo,f.R9,D.Ps,D.Hw,w.c,w.Nt,N.Tx,N.VK,N.OP,N.p6,Q.TU,Q.NW,P.JX,P.YE,P.nU,v.mk,a.UX,a.Fj,a.JJ,a.JL,a.oH,a.sg,a.u,Y.rH,ze.q,v.gd,be.H],encapsulation:2,changeDetection:0})}return s})();var ft=p(86903),bt=p(66102);const xt=s=>s.salesDashboardStats,Zn=(0,k.P1)(xt,s=>s.salesDashboardStats),An=((0,k.P1)(xt,s=>s.salesDashboardStats.salesSummary),y.Ps`
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
`),Tn=y.Ps`
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
`,In=y.Ps`
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
`,Sn=y.Ps`
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
`;let Ct=(()=>{class s{constructor(t,n){this.apolloProvider=t,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}getSalesDashboardStatsData(t,n){return this._apollo.query({query:An,variables:{initDate:t,endDate:n},errorPolicy:"all"}).pipe((0,q.b)(({data:i})=>{this.store.dispatch((0,bt.TP)({salesDashboardStats:i.salesDashboardStats}))}))}getBillsByCustomersAndCurrency(t,n,i,o){return this._apollo.query({query:Tn,variables:{initDate:t,endDate:n,currencyId:i,customerId:o},errorPolicy:"all"})}getProductsBoughtByCustomer(t,n,i){return this._apollo.query({query:In,variables:{initDate:t,endDate:n,customerId:i},errorPolicy:"all"})}getBillsCollectedByCustomersAndCurrency(t,n,i="",o,r){return this._apollo.query({query:Sn,errorPolicy:"all",variables:{initDate:t,endDate:n,paymentStatus:i,currencyId:o,customerId:r}})}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(y._M),e.LFG(k.yh))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function Fn(s,l){if(1&s&&(e.TgZ(0,"mat-option",12),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.iso," ")}}function kn(s,l){if(1&s&&(e.TgZ(0,"mat-option",12),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}let Ge=(()=>{class s{constructor(){this.currencyIdControl=new a.NI(""),this.customerIdControl=new a.NI(""),this.currencies=[],this.customers=[],this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialogRef=(0,e.f3M)(F.so),this._unsubscribeAll=new O.x,this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.store.select(le.zd).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()}),this.store.select(Fe.p6).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.customers=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}selectFilters(){const t=this.currencyIdControl.getRawValue(),n=this.customerIdControl.getRawValue();this._dialogRef.close({currencyId:t,customerId:n})}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["lists-filter-selectors-dialog"]],standalone:!0,features:[e.jDz],decls:26,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col","gap-3"],[1,"w-full"],[3,"formControl"],["value",""],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","matDialogClose","click"],[3,"value"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3," Seleccionar Moneda "),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),e._uU(9,"Moneda"),e.qZA(),e.TgZ(10,"mat-select",7),e.SjG(11,Fn,2,2,"mat-option",12,e.x6l),e.qZA()(),e.TgZ(13,"mat-form-field",6)(14,"mat-label"),e._uU(15,"Clientes"),e.qZA(),e.TgZ(16,"mat-select",7)(17,"mat-option",8),e._uU(18," Todos los Clientes "),e.qZA(),e.SjG(19,kn,2,2,"mat-option",12,e.x6l),e.qZA()()()()(),e.TgZ(21,"div",9)(22,"button",10),e._uU(23," Cancelar "),e.qZA(),e.TgZ(24,"button",11),e.NdJ("click",function(){return i.selectFilters()}),e._uU(25," Aceptar "),e.qZA()()()),2&n&&(e.xp6(10),e.Q6J("formControl",i.currencyIdControl),e.xp6(),e.wJu(i.currencies),e.xp6(5),e.Q6J("formControl",i.customerIdControl),e.xp6(3),e.wJu(i.customers),e.xp6(3),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("color","primary")("matDialogClose","confirmed"))},dependencies:[A.ot,A.lW,F.Is,F.ZT,f.lN,f.KE,f.hX,j.LD,j.gD,he.ey,a.UX,a.JJ,a.oH],encapsulation:2,changeDetection:0})}return s})();var yt=p(95407);function wn(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-icon",62),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.range.reset())}),e.qZA()}}function Un(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," Fecha de inicio no v\xe1lida "),e.qZA())}function Dn(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," Fecha de final no v\xe1lida "),e.qZA())}let Pn=(()=>{class s{constructor(){this.billIndicators=null,this.chartSalesStats={},this.salesBalanceOptions={},this.billsByPaymentMethodDistribution={},this.initDate=new Date((new Date).getTime()-6048e5),this.billsMapping={"=1":"Factura",other:"Facturas"},this.endDate=new Date,this.merchant=null,this.range=null,this.salesDashboardStats=null,this.salesSummary=null,this.salesBalance=null,this.paymentMethodDistribution={categories:["Transferencia","Efectivo","Cheque","Mixta"],series:[{name:"Facturas",data:[12,20,1,5]}]},this.totalQuantity=0,this.totalQuantityAdded=0,this.rangeDays=0,this.user=null,this.maxDate=new Date,this._billsService=(0,e.f3M)(Oe),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialog=(0,e.f3M)(F.uw),this._router=(0,e.f3M)(Y.F0),this._salesDashboardStatsService=(0,e.f3M)(Ct),this._salesReportsService=(0,e.f3M)(ht),this._snackBar=(0,e.f3M)($.ux),this._unsubscribeAll=new O.x,this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.store.select(Zn).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.salesSummary=t.salesSummary,this.totalQuantity=t.totalQuantity,this.totalQuantityAdded=t.totalQuantityAdded,this.billIndicators=t.billIndicators,this.salesBalance=t.salesBalance,this._prepareChartData(),this._prepareSalesBalanceChartData(),this._changeDetectorRef.markForCheck()}),this.store.select(ie.Qs).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(re.rk).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.range=new a.cw({start:new a.NI({disabled:!1,value:this.initDate},[G.L.futureDateValidator()]),end:new a.NI({disabled:!1,value:this.endDate},[G.L.futureDateValidator()])}),this.rangeDays=this.getDaysBetweenDates(),this.range.get("end").valueChanges.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{const n=this.range.getRawValue();!n.start||!n.end||(this.rangeDays=this.getDaysBetweenDates(),t<=new Date&&this._salesDashboardStatsService.getSalesDashboardStatsData(n.start,n.end).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Datos actualizados correctamente.",title:"Confirmaci\xf3n",type:"success",appearance:"fill"}})}),this._changeDetectorRef.markForCheck())}),window.Apex={chart:{events:{mounted:(t,n)=>{this._fixSvgFill(t.el)},updated:(t,n)=>{this._fixSvgFill(t.el)}}}}}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,bt.qy)())}generateBillsReport(t=null){const n=this.range.getRawValue();!n.start||!n.end||this._billsService.getBillsByDateRangeAndStatus(n.start,n.end,t).pipe((0,L.q)(1)).subscribe(({data:i})=>{E.W.IsNullOrEmpty(i.getBillsByDateRangeAndStatus.bills)?this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen facturas para el rango de fecha seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateBillsReport(n.start,n.end,this.user,this.merchant,i.getBillsByDateRangeAndStatus.bills,this.getTotalCUP(i.getBillsByDateRangeAndStatus.bills),this.getTotalUSD(i.getBillsByDateRangeAndStatus.bills),this.generateBillsSummary(i.getBillsByDateRangeAndStatus.bills))})}generateBillsCollectedByCustomerAndCurrencyReport(t){const{start:n,end:i}=this.range.getRawValue();!n||!i||this._dialog.open(Ge,{width:"200px",panelClass:"ath-dialog-panel",disableClose:!0}).afterClosed().pipe((0,g.R)(this._unsubscribeAll)).subscribe(({currencyId:o,customerId:r})=>{E.W.IsNullOrEmpty(o)&&E.W.IsNullOrEmpty(r)||this._salesDashboardStatsService.getBillsCollectedByCustomersAndCurrency(n,i,t,o,r).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:c})=>{E.W.IsNullOrEmpty(c.getBillsCollectedByCustomersAndCurrency.billsCollectedByCustomersAndCurrency)?this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen facturas cobradas, para la moneda y el rango de fecha seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateBillsByCustomersReport(n,i,this.user,this.merchant,c.getBillsCollectedByCustomersAndCurrency.billsCollectedByCustomersAndCurrency,t)})})}getDaysBetweenDates(){const t=this.range.getRawValue().start,n=this.range.getRawValue().end,i=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),o=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate());return Math.floor((o-i)/864e5)}getTotalCUP(t){return t.filter(i=>"CUP"===i.currency.iso).reduce((i,o)=>i+(o.total||0),0)}getTotalUSD(t){return t.filter(i=>"USD"===i.currency.iso).reduce((i,o)=>i+(o.total||0),0)}generateBillsSummary(t){const n={nueva:0,recibida:0,rechazada:0,cancelada:0};return t.forEach(i=>{n[i.status||ge.DK.nueva]++}),n}generateBillsByCustomersReport(){const{start:t,end:n}=this.range.getRawValue();this._dialog.open(Ge,{width:"200px",panelClass:"ath-dialog-panel",disableClose:!0}).afterClosed().pipe((0,g.R)(this._unsubscribeAll)).subscribe(({currencyId:i,customerId:o})=>{E.W.IsNullOrEmpty(i)&&E.W.IsNullOrEmpty(o)||this._salesDashboardStatsService.getBillsByCustomersAndCurrency(t,n,i,o).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:r})=>{E.W.IsNullOrEmpty(r.getBillsByCustomersAndCurrency.billsByCustomersAndCurrency)?this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen facturas, para la moneda y el rango de fecha seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateBillsByCustomersReport(t,n,this.user,this.merchant,r.getBillsByCustomersAndCurrency.billsByCustomersAndCurrency)})})}generateProductsBoughtByCustomerReport(){const{start:t,end:n}=this.range.getRawValue();this._dialog.open(Ge,{width:"200px",panelClass:"ath-dialog-panel",disableClose:!0}).afterClosed().pipe((0,g.R)(this._unsubscribeAll)).subscribe(({customerId:i})=>{E.W.IsNullOrEmpty(i)?this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Debe seleccionar un cliente.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesDashboardStatsService.getProductsBoughtByCustomer(t,n,i).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:o})=>{E.W.IsNullOrEmpty(o.getProductsBoughtByCustomer.productsBoughtByCustomer)?this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen productos facturados para el cliente seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateProductsBoughtByCustomerReport(t,n,this.user,this.merchant,o.getProductsBoughtByCustomer.productsBoughtByCustomer)})})}largeNumber(t,n){return function qn(s,l){return s>=1e6?(s/1e6).toFixed(l)+"M":s>=1e3?(s/1e3).toFixed(l)+"K":s.toFixed(l)}(t,n)}trackByFn(t,n){return n.id||t}_fixSvgFill(t){const n=this._router.url;Array.from(t.querySelectorAll("*[fill]")).filter(i=>-1!==i.getAttribute("fill").indexOf("url(")).forEach(i=>{const o=i.getAttribute("fill");i.setAttribute("fill",`url(${n}${o.slice(o.indexOf("#"))}`)})}_prepareChartData(){this.chartSalesStats={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#f59e0b","#22c55e"],dataLabels:{enabled:!0,enabledOnSeries:[0],background:{borderWidth:0}},grid:{borderColor:"var(--fuse-border)"},labels:this.salesSummary.labels,legend:{show:!1},plotOptions:{bar:{columnWidth:"50%"}},series:[{name:"Total",type:"line",data:this.salesSummary.serie},{name:"Cobradas",type:"bar",data:this.salesSummary.collectedSerie}],states:{hover:{filter:{type:"darken",value:.75}}},stroke:{width:[3,0]},tooltip:{followCursor:!0,theme:"dark"},xaxis:{axisBorder:{show:!1},axisTicks:{color:"var(--fuse-border)"},labels:{style:{colors:"var(--fuse-text-secondary)"}},tooltip:{enabled:!1}},yaxis:{labels:{offsetX:-16,style:{colors:"var(--fuse-text-secondary)"}}}},this.billsByPaymentMethodDistribution={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"radar",sparkline:{enabled:!0}},colors:["#818CF8"],dataLabels:{enabled:!0,formatter:t=>`${t}`,textAnchor:"start",style:{fontSize:"13px",fontWeight:500},background:{borderWidth:0,padding:4},offsetY:-15},markers:{strokeColors:"#818CF8",strokeWidth:4},plotOptions:{radar:{polygons:{strokeColors:"var(--fuse-border)",connectorColors:"var(--fuse-border)"}}},series:this.paymentMethodDistribution.series,stroke:{width:2},tooltip:{theme:"dark",y:{formatter:t=>`${t}`}},xaxis:{labels:{show:!0,style:{fontSize:"14px",fontWeight:"600"}},categories:this.paymentMethodDistribution.categories},yaxis:{max:t=>parseInt((t+10).toFixed(0),10),tickAmount:7}}}_prepareSalesBalanceChartData(){this.salesBalanceOptions={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#A3BFFA","#667EEA"],fill:{colors:["#CED9FB","#AECDFD"],opacity:.5,type:"solid"},series:this.salesBalance.series,stroke:{curve:"straight",width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"dd/MM/yyyy"},y:{formatter:t=>t.toFixed(2)}},xaxis:{type:"datetime"}}}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-dashboard"]],standalone:!0,features:[e.jDz],decls:138,vars:70,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","p-6","mx-auto","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","leading-8","tracking-tight"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","items-center","ml-6"],[1,"min-w-72","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],["mat-stroked-button","",1,"hidden","mx-3","sm:inline-flex",3,"matMenuTriggerFor","disabled"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["xPosition","before"],["reportsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"sm:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"svgIcon"],["actionsMenu","matMenu"],["mat-menu-item",""],[1,"grid","w-full","grid-cols-1","gap-8","mt-8","xl:grid-cols-2"],[1,"grid","grid-cols-1","gap-8","mt-8","xl:grid-cols-2","sm:grid-flow-col","xl:grid-flow-row"],[1,"flex","flex-col","flex-auto","p-6","overflow-hidden","shadow","bg-card","rounded-2xl"],[1,"flex","items-start","justify-between"],[1,"text-lg","font-medium","leading-6","tracking-tight","truncate"],[1,"ml-2","-mt-2","-mr-3"],["mat-icon-button","","disabled",""],[1,"flex","flex-col","items-center","mt-2"],[1,"font-bold","leading-none","tracking-tight","text-7xl","sm:text-8xl","text-amber-500"],[1,"text-lg","font-medium","text-amber-600","dark:text-amber-500"],[1,"font-bold","leading-none","tracking-tight","text-blue-500","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-blue-600","dark:text-blue-500"],[1,"font-bold","leading-none","tracking-tight","text-green-500","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-green-600","dark:text-green-500"],[1,"font-bold","leading-none","tracking-tight","text-red-500","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-red-600","dark:text-red-500"],[1,"grid","w-full","grid-cols-1","gap-8","mt-8"],[1,"flex","flex-col","flex-auto","overflow-hidden","shadow","bg-card","rounded-2xl"],[1,"flex","flex-col","p-6","pb-4"],[1,"flex","items-center","justify-between"],[1,"flex","flex-col"],[1,"mr-4","text-lg","font-medium","leading-6","tracking-tight","truncate"],[1,"font-medium","text-secondary"],["mat-button","","disabled","",1,"h-6","px-2","rounded-full","min-h-6","bg-hover"],[1,"text-sm","font-medium","text-secondary"],[1,"flex","items-start","mt-6","mr-2"],[1,"flex","flex-col","ml-8","md:ml-16"],[1,"text-3xl","font-semibold","tracking-tighter","md:text-5xl"],[1,"text-sm","font-medium","leading-none","text-secondary"],[1,"flex","flex-col","flex-auto"],[1,"flex-auto","w-full","h-full",3,"chart","colors","fill","series","stroke","tooltip","xaxis"],[1,"grid","w-full","min-w-0","grid-cols-1","gap-6","mt-8","sm:grid-cols-2"],[1,"flex","flex-col","items-start","justify-between","sm:flex-row"],[1,"grid","w-full","grid-flow-row","grid-cols-1","gap-6","mt-8","sm:col-span-2","sm:mt-4"],[1,"flex","flex-col","flex-auto","w-full"],[1,"flex-auto","w-full","h-80",3,"chart","colors","dataLabels","grid","labels","legend","plotOptions","series","states","stroke","tooltip","xaxis","yaxis"],[1,"flex-auto","w-full","h-80",3,"chart","colors","dataLabels","markers","plotOptions","series","stroke","tooltip","xaxis","yaxis"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"h2",3),e._uU(5,"Panel de Ventas"),e.qZA(),e.TgZ(6,"div",4),e._uU(7,"Seguimiento del estados de tus ventas"),e.qZA()(),e.TgZ(8,"div",5)(9,"mat-form-field",6)(10,"mat-date-range-input",7),e._UZ(11,"input",8)(12,"input",9),e.qZA(),e._UZ(13,"mat-datepicker-toggle",10)(14,"mat-date-range-picker",11,12),e.YNc(16,wn,1,0,"mat-icon",13)(17,Un,2,0,"mat-error")(18,Dn,2,0,"mat-error"),e.qZA(),e.TgZ(19,"button",14),e._UZ(20,"mat-icon",15),e.TgZ(21,"span",16),e._uU(22,"Reportes"),e.qZA()(),e.TgZ(23,"mat-menu",17,18)(25,"button",19),e.NdJ("click",function(){return i.generateBillsReport()}),e._uU(26,"Facturas realizadas"),e.qZA(),e.TgZ(27,"button",19),e.NdJ("click",function(){return i.generateBillsByCustomersReport()}),e._uU(28,"Facturas por clientes"),e.qZA(),e.TgZ(29,"button",19),e.NdJ("click",function(){return i.generateBillsCollectedByCustomerAndCurrencyReport("cobrada")}),e._uU(30,"Facturas cobradas por clientes"),e.qZA(),e.TgZ(31,"button",19),e.NdJ("click",function(){return i.generateProductsBoughtByCustomerReport()}),e._uU(32,"Productos facturados por clientes"),e.qZA()(),e.TgZ(33,"div",20)(34,"button",21),e._UZ(35,"mat-icon",22),e.qZA(),e.TgZ(36,"mat-menu",null,23)(38,"button",24),e._uU(39,"Reportes"),e.qZA(),e.TgZ(40,"button",24),e._uU(41,"Exportar"),e.qZA()()()()(),e.TgZ(42,"div",25)(43,"div",26)(44,"div",27)(45,"div",28)(46,"div",29),e._uU(47,"Facturas realizadas"),e.qZA(),e.TgZ(48,"div",30)(49,"button",31),e._UZ(50,"mat-icon",15),e.qZA()()(),e.TgZ(51,"div",32)(52,"div",33),e._uU(53),e.qZA(),e.TgZ(54,"div",34),e._uU(55),e.ALo(56,"i18nPlural"),e.qZA()()(),e.TgZ(57,"div",27)(58,"div",28)(59,"div",29),e._uU(60,"Facturas entregadas"),e.qZA(),e.TgZ(61,"div",30)(62,"button",31),e._UZ(63,"mat-icon",15),e.qZA()()(),e.TgZ(64,"div",32)(65,"div",35),e._uU(66),e.qZA(),e.TgZ(67,"div",36),e._uU(68),e.ALo(69,"i18nPlural"),e.qZA()()(),e.TgZ(70,"div",27)(71,"div",28)(72,"div",29),e._uU(73,"Facturas Cobradas"),e.qZA(),e.TgZ(74,"div",30)(75,"button",31),e._UZ(76,"mat-icon",15),e.qZA()()(),e.TgZ(77,"div",32)(78,"div",37),e._uU(79),e.qZA(),e.TgZ(80,"div",38),e._uU(81),e.ALo(82,"i18nPlural"),e.qZA()()(),e.TgZ(83,"div",27)(84,"div",28)(85,"div",29),e._uU(86,"Facturas Cancelas"),e.qZA(),e.TgZ(87,"div",30)(88,"button",31),e._UZ(89,"mat-icon",15),e.qZA()()(),e.TgZ(90,"div",32)(91,"div",39),e._uU(92),e.qZA(),e.TgZ(93,"div",40),e._uU(94),e.ALo(95,"i18nPlural"),e.qZA()()()(),e.TgZ(96,"div",41)(97,"div",42)(98,"div",43)(99,"div",44)(100,"div",45)(101,"div",46),e._uU(102,"Balance de ventas"),e.qZA(),e.TgZ(103,"div",47),e._uU(104,"Comparaci\xf3n facturado vs cobrado"),e.qZA()(),e.TgZ(105,"div",16)(106,"button",48)(107,"span",49),e._uU(108),e.qZA()()()(),e.TgZ(109,"div",50)(110,"div",51)(111,"div",52),e._uU(112),e.qZA(),e.TgZ(113,"div",53),e._uU(114,"Importe facturado"),e.qZA()(),e.TgZ(115,"div",51)(116,"div",52),e._uU(117),e.qZA(),e.TgZ(118,"div",53),e._uU(119,"Importe cobrado"),e.qZA()()()(),e.TgZ(120,"div",54),e._UZ(121,"apx-chart",55),e.qZA()()()(),e.TgZ(122,"div",56)(123,"div",27)(124,"div",57)(125,"div",29),e._uU(126," Facturas por d\xeda de la semana "),e.qZA()(),e.TgZ(127,"div",58)(128,"div",59)(129,"div",47),e._uU(130,"Realizadas vs. Cobradas"),e.qZA(),e.TgZ(131,"div",54),e._UZ(132,"apx-chart",60),e.qZA()()()(),e.TgZ(133,"div",27)(134,"div",29),e._uU(135,"Facturas por M\xe9todo de Pago"),e.qZA(),e.TgZ(136,"div",54),e._UZ(137,"apx-chart",61),e.qZA()()()()()),2&n){const o=e.MAs(15),r=e.MAs(24),c=e.MAs(37);e.xp6(9),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("formGroup",i.range)("rangePicker",o)("max",i.maxDate),e.xp6(3),e.Q6J("for",o),e.xp6(3),e.um2(16,i.range.get("start").value||i.range.get("end").value?16:-1),e.xp6(),e.um2(17,i.range.controls.start.hasError("matStartDateInvalid")?17:-1),e.xp6(),e.um2(18,i.range.controls.end.hasError("matEndDateInvalid")?18:-1),e.xp6(),e.Q6J("matMenuTriggerFor",r)("disabled",i.range.invalid||!i.range.get("start").value||!i.range.get("end").value),e.xp6(),e.Q6J("svgIcon","mat_solid:plagiarism"),e.xp6(14),e.Q6J("matMenuTriggerFor",c),e.xp6(),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(15),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(3),e.hij(" ",i.largeNumber(i.billIndicators.totalBills,0)," "),e.xp6(2),e.hij(" ",e.xi3(56,58,i.billIndicators.totalBills,i.billsMapping)," "),e.xp6(8),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(3),e.hij(" ",i.largeNumber(i.billIndicators.totalBillsDelivered,0),""),e.xp6(2),e.hij(" ",e.xi3(69,61,i.billIndicators.totalBillsDelivered,i.billsMapping)," "),e.xp6(8),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(3),e.hij(" ",i.largeNumber(i.billIndicators.totalBillsCollected,0)," "),e.xp6(2),e.hij(" ",e.xi3(82,64,i.billIndicators.totalBillsCollected,i.billsMapping)," "),e.xp6(8),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(3),e.hij(" ",i.largeNumber(i.billIndicators.totalBillsCanceled,0)," "),e.xp6(2),e.hij(" ",e.xi3(95,67,i.billIndicators.totalBillsCanceled,i.billsMapping)," "),e.xp6(14),e.hij("",i.rangeDays," d\xedas"),e.xp6(4),e.hij("$ ",i.largeNumber(i.salesBalance.billed,2),""),e.xp6(5),e.hij("$ ",i.largeNumber(i.salesBalance.collected,2),""),e.xp6(4),e.Q6J("chart",i.salesBalanceOptions.chart)("colors",i.salesBalanceOptions.colors)("fill",i.salesBalanceOptions.fill)("series",i.salesBalanceOptions.series)("stroke",i.salesBalanceOptions.stroke)("tooltip",i.salesBalanceOptions.tooltip)("xaxis",i.salesBalanceOptions.xaxis),e.xp6(11),e.Q6J("chart",i.chartSalesStats.chart)("colors",i.chartSalesStats.colors)("dataLabels",i.chartSalesStats.dataLabels)("grid",i.chartSalesStats.grid)("labels",i.chartSalesStats.labels)("legend",i.chartSalesStats.legend)("plotOptions",i.chartSalesStats.plotOptions)("series",i.chartSalesStats.series)("states",i.chartSalesStats.states)("stroke",i.chartSalesStats.stroke)("tooltip",i.chartSalesStats.tooltip)("xaxis",i.chartSalesStats.xaxis)("yaxis",i.chartSalesStats.yaxis),e.xp6(5),e.Q6J("chart",i.billsByPaymentMethodDistribution.chart)("colors",i.billsByPaymentMethodDistribution.colors)("dataLabels",i.billsByPaymentMethodDistribution.dataLabels)("markers",i.billsByPaymentMethodDistribution.markers)("plotOptions",i.billsByPaymentMethodDistribution.plotOptions)("series",i.billsByPaymentMethodDistribution.series)("stroke",i.billsByPaymentMethodDistribution.stroke)("tooltip",i.billsByPaymentMethodDistribution.tooltip)("xaxis",i.billsByPaymentMethodDistribution.xaxis)("yaxis",i.billsByPaymentMethodDistribution.yaxis)}},dependencies:[v.Gx,A.ot,A.lW,A.RK,Z.FA,yt.PQ,Z.nW,Z.wx,Z.zY,Z.By,Z._g,f.lN,f.KE,f.TO,f.R9,D.Ps,D.Hw,N.Tx,N.VK,N.OP,N.p6,ft.X,ft.x,a.UX,a.Fj,a.JJ,a.JL,a.sg,a.u],encapsulation:2,changeDetection:0})}return s})();const vt=s=>s.offers,De=((0,k.P1)(vt,s=>s.offer),(0,k.P1)(vt,s=>s.offers));var Ze=p(6106);let Zt=(()=>{class s{constructor(t,n){this.apolloProvider=t,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}getOffers(t=1,n=50,i="no",o="desc",r=""){return this._apollo.query({query:xi,errorPolicy:"all",variables:{offset:n*(t-1),limit:n,sort:i,order:o,search:r}}).pipe((0,q.b)(({data:c})=>{this.store.dispatch((0,Ze.Zu)({offers:c.findAllOffers.offers})),this.store.dispatch((0,Ce.Jr)({pagination:c.findAllOffers.pagination}))}))}findOfferById(t){return this._apollo.query({query:Ci,variables:{findOfferByIdId:t},errorPolicy:"all"}).pipe((0,q.b)(({data:n})=>{this.store.dispatch((0,Ze.FK)({offer:n.findOfferById.offer}))}))}updateOffer(t){return this.store.select(De).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:fi,variables:{updateOfferInput:t},errorPolicy:"all"}).pipe((0,q.b)(({data:i})=>{const o=(0,we.Z)(n);o[n.findIndex(c=>c.id===t.id)]=i.updateOffer.offer,this.store.dispatch((0,Ze.Zu)({offers:o}))}))))}updateOfferStatus(t,n){return this.store.select(De).pipe((0,L.q)(1),(0,I.w)(i=>this._apollo.mutate({mutation:yi,variables:{updateOfferStatusInput:{id:t,status:n}},errorPolicy:"all"}).pipe((0,q.b)(({data:o})=>{const r=structuredClone(i);r[i.findIndex(d=>d.id===t)]=o.updateOfferStatus.offer,this.store.dispatch((0,Ze.Zu)({offers:r}))}))))}removeOffer(t){return this.store.select(De).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:bi,variables:{removeOfferId:t},errorPolicy:"all"}).pipe((0,q.b)(()=>{const i=(0,we.Z)(n),o=n.findIndex(r=>r.id===t);i.splice(o,1),this.store.dispatch((0,Ze.Zu)({offers:i}))}))))}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(y._M),e.LFG(k.yh))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();const Nn=(s,l)=>l.id;function Bn(s,l){1&s&&e._UZ(0,"mat-icon",32),2&s&&e.Q6J("svgIcon","mat_solid:done")}function Jn(s,l){1&s&&e._UZ(0,"mat-icon",32),2&s&&e.Q6J("svgIcon","mat_solid:done")}function Rn(s,l){1&s&&e._UZ(0,"mat-icon",32),2&s&&e.Q6J("svgIcon","mat_solid:done")}const Mn=(s,l,t,n)=>({"bg-amber-50 text-amber-700":s,"text-red-700 bg-red-50":l,"text-orange-700 bg-orange-50":t,"text-green-700 bg-green-50":n});function En(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",27),e._uU(2),e.qZA(),e.TgZ(3,"div",23),e._uU(4),e.qZA(),e.TgZ(5,"div",24),e._uU(6),e.qZA(),e.TgZ(7,"div",27),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"div",28)(11,"span",29),e._uU(12),e.ALo(13,"uppercase"),e.qZA()(),e.TgZ(14,"div",30)(15,"button",31),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.generateOfferDocument(o))}),e._UZ(16,"mat-icon",32),e.qZA(),e.TgZ(17,"button",33),e._UZ(18,"mat-icon",16),e.qZA(),e.TgZ(19,"mat-menu",null,34)(21,"div",35),e._uU(22," Actualizar Estado "),e.qZA(),e.TgZ(23,"button",36),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.updateStatus(o.id,"aprobada"))}),e.TgZ(24,"div",37),e.YNc(25,Bn,1,1,"mat-icon",38),e.qZA(),e.TgZ(26,"span",39),e._uU(27,"Aprobada"),e.qZA()(),e.TgZ(28,"button",36),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.updateStatus(o.id,"rechazada"))}),e.TgZ(29,"div",37),e.YNc(30,Jn,1,1,"mat-icon",38),e.qZA(),e.TgZ(31,"span",39),e._uU(32,"Rechazada"),e.qZA()(),e.TgZ(33,"button",36),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.updateStatus(o.id,"cancelada"))}),e.TgZ(34,"div",37),e.YNc(35,Rn,1,1,"mat-icon",38),e.qZA(),e.TgZ(36,"span",39),e._uU(37,"Cancelada"),e.qZA()()(),e.TgZ(38,"button",40),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.removeOffer(o.id))}),e._UZ(39,"mat-icon",32),e.qZA()()()}if(2&s){const t=l.$implicit,n=e.MAs(20);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(9,16,t.total,"1.2-2")," "),e.xp6(2),e.Q6J("ngClass",e.l5B(21,Mn,"nueva"===t.status,"cancelada"===t.status,"rechazada"===t.status,"aprobada"===t.status)),e.xp6(2),e.hij(" ",e.lcZ(13,19,t.status)," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:description"),e.xp6(),e.Q6J("matMenuTriggerFor",n),e.xp6(),e.Q6J("svgIcon","mat_solid:update"),e.xp6(5),e.Q6J("disabled",t.status.includes("aprobada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(2),e.um2(25,t.status.includes("aprobada")?25:-1),e.xp6(3),e.Q6J("disabled",t.status.includes("aprobada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(2),e.um2(30,t.status.includes("aprobada")?30:-1),e.xp6(3),e.Q6J("disabled",t.status.includes("aprobada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(2),e.um2(35,t.status.includes("aprobada")?35:-1),e.xp6(4),e.Q6J("svgIcon","mat_solid:delete")}}const Qn=s=>({"pointer-events-none":s}),Ln=()=>[5,10,25,100];function $n(s,l){if(1&s&&(e.TgZ(0,"div",20)(1,"div",21)(2,"div",22),e._uU(3," N\xfamero "),e.qZA(),e.TgZ(4,"div",23),e._uU(5," Cliente "),e.qZA(),e.TgZ(6,"div",24),e._uU(7," Moneda "),e.qZA(),e.TgZ(8,"div",22),e._uU(9," Importe "),e.qZA(),e.TgZ(10,"div",24),e._uU(11," Estado "),e.qZA(),e.TgZ(12,"div",24),e._uU(13," Acciones "),e.qZA()(),e.SjG(14,En,40,26,"div",41,Nn),e.qZA(),e._UZ(16,"mat-paginator",25)),2&s){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(6),e.Q6J("mat-sort-header","total"),e.xp6(6),e.wJu(t.offers),e.xp6(2),e.Q6J("ngClass",e.VKq(8,Qn,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(10,Ln))("showFirstLastButtons",!0)}}function zn(s,l){1&s&&(e.TgZ(0,"div",42),e._uU(1," \xa1No se ha registrado ninguna oferta! "),e.qZA())}const On=()=>["/modules/sales/bid"];let Gn=(()=>{class s{constructor(){this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.offers=[],this.searchInputControl=new a.NI,this.selectedSlide=null,this.user=null,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._documentsService=(0,e.f3M)(ve.S),this._fuseConfirmationService=(0,e.f3M)(se.R),this._offersService=(0,e.f3M)(Zt),this._snackBar=(0,e.f3M)($.ux),this._unsubscribeAll=new O.x,this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.store.select(re.rk).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(ie.Qs).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(De).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.offers=t,this._changeDetectorRef.markForCheck()}),this.store.select(me.B).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(300),(0,I.w)(t=>(this.isLoading=!0,this._offersService.getOffers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,R.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,ue.T)(this._sort.sortChange,this._paginator.page).pipe((0,I.w)(()=>(this.isLoading=!0,this._offersService.getOffers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,R.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}updateStatus(t,n){this._fuseConfirmationService.open({title:"Actualizar Estado de la Factura",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(o=>{"confirmed"===o&&this._offersService.updateOfferStatus(t,n).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:r})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.updateOfferStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}removeOffer(t){this._fuseConfirmationService.open({title:"Eliminar oferta",message:"\xbfEst\xe1s seguro de que deseas eliminar esta oferta?",actions:{confirm:{label:"S\xed",color:"warn"},cancel:{label:"No"}}}).afterClosed().subscribe(i=>{i&&this._offersService.removeOffer(t).subscribe(({data:o})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:3e3,data:{message:o.removeOffer.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})})})}generateOfferDocument(t){this._documentsService.generateOfferDocument(t,Ue.oferta,this.merchant,this.user)}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-offers"]],viewQuery:function(n,i){if(1&n&&(e.Gf(Q.NW,5),e.Gf(P.YE,5)),2&n){let o;e.iGM(o=e.CRH())&&(i._paginator=o.first),e.iGM(o=e.CRH())&&(i._sort=o.first)}},standalone:!0,features:[e.jDz],decls:31,vars:11,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","offers-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hiddem","sm:block",3,"mat-sort-header"],[1,"hiddem","sm:block"],[1,"text-center","hiddem","sm:block"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","offers-grid","md:px-8"],[1,"font-mono","hiddem","sm:block"],[1,"flex","items-center","justify-center","mr-4","text-center","truncate","delay-100","rounded-full","h-7","lock","dark:bg-white","dark:bg-opacity-5",3,"ngClass"],[1,"w-full","px-2","text-sm","font-medium","text-center"],[1,"flex","flex-row","justify-center","gap-2"],["mat-stroked-button","","matTooltip","Ver oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","aria-label","Menu de estados","matTooltip","Actualizar Estado",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"matMenuTriggerFor"],["listStatusMenu","matMenu"],[1,"w-full","p-2","text-lg","font-semibold","text-center","text-secondary"],["mat-menu-item","",1,"grid","w-full","grid-cols-4",3,"disabled","click"],[1,"col-span-1"],["class","icon-size-5",3,"svgIcon"],[1,"col-span-3","text-center"],["mat-stroked-button","","matTooltip","Descargar oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["class","grid items-center gap-4 px-6 py-3 border-b offers-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Ofertas"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Ofertas "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e._UZ(22,"div",14),e.TgZ(23,"button",15),e._UZ(24,"mat-icon",16),e.TgZ(25,"span",17),e._uU(26,"Crear oferta"),e.qZA()()()(),e.TgZ(27,"div",18)(28,"div",19),e.YNc(29,$n,17,11)(30,zn,2,0),e.qZA()()()),2&n&&(e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.xp6(2),e.Q6J("routerLink",e.DdM(10,On)),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.um2(29,i.offers.length>0?29:30))},dependencies:[v.JJ,A.ot,A.lW,f.lN,f.KE,f.qo,D.Ps,D.Hw,w.c,w.Nt,Q.TU,Q.NW,P.JX,P.YE,P.nU,N.Tx,N.VK,N.OP,N.p6,v.mk,a.UX,a.Fj,a.JJ,a.oH,Y.rH,v.gd],styles:[".offers-grid{grid-template-columns:150px auto 150px 150px 150px 150px}\n"],encapsulation:2,changeDetection:0})}return s})();const jn=y.Ps`
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
`,Vn=y.Ps`
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
`,Hn=y.Ps`
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
`,Yn=y.Ps`
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
`,Kn=y.Ps`
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
`,Wn=y.Ps`
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
`,Xn=y.Ps`
    mutation RemovePrebill($removeBillId: String!) {
        removePrebill(id: $removeBillId) {
            ok
            message
        }
    }
`,eo=y.Ps`
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
`,to=y.Ps`
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
`;let io=(()=>{class s{constructor(t,n){this.apolloProvider=t,this._snackBar=n,this._apollo=this.apolloProvider.use("BALANC")}createPrebill(t){return this._apollo.mutate({mutation:Yn,variables:{createPrebillInput:t},errorPolicy:"all"}).pipe((0,q.b)(({errors:n})=>{if(n){let i="";n.forEach(o=>i+=`\n ${o.message}.`),this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(y._M),e.LFG($.ux))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();const Ae=(s,l)=>l.id;function so(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-checkbox",11),e.NdJ("ngModelChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.billProducts=i)}),e._uU(1,"Productos"),e.qZA(),e.TgZ(2,"mat-checkbox",11),e.NdJ("ngModelChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.billAssistances=i)}),e._uU(3,"Servicios"),e.qZA()}if(2&s){const t=e.oxw();e.Q6J("ngModel",t.billProducts),e.xp6(2),e.Q6J("ngModel",t.billAssistances)}}function no(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",37),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.selectCustomer(o))}),e._uU(1),e.qZA()}if(2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.name," ")}}function oo(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," La fecha de la Prefactura es obligatoria "),e.qZA())}function ao(s,l){1&s&&(e.TgZ(0,"mat-option",27),e._uU(1," x1 "),e.qZA()),2&s&&e.Q6J("value",1)}function ro(s,l){if(1&s&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.value),e.xp6(),e.hij(" x",t.value," ")}}function lo(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El multiplicador es obligatorio "),e.qZA())}function co(s,l){if(1&s&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function uo(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de comprobante es obligatorio "),e.qZA())}function mo(s,l){if(1&s&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function po(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de operaci\xf3n es obligatorio "),e.qZA())}function go(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",37),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.selectedCurrencyIso=o.iso)}),e._uU(1),e.qZA()}if(2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.iso," ")}}function _o(s,l){if(1&s&&(e.TgZ(0,"span",38),e._uU(1),e.qZA()),2&s){const t=e.oxw();e.xp6(),e.AsE(" (+ ",2===(null==t.prebillingForm.get("rates").value?null:t.prebillingForm.get("rates").value.length)?"otro":"otros"," ",t.prebillingForm.get("rates").value.length>2?t.prebillingForm.get("rates").value.length-1:"",") ")}}function ho(s,l){if(1&s&&(e.TgZ(0,"mat-option",27)(1,"span",39),e._uU(2),e.ALo(3,"number"),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA()()),2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(2),e.Oqu(e.xi3(3,3,t.value,"1.4-4")),e.xp6(3),e.hij(" ",t.name,"")}}function fo(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," Las tasas de cambio son requeridas "),e.qZA())}function bo(s,l){if(1&s&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.AsE(" ",t.no," ",t.currency," ")}}function xo(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," La cuenta bancaria es obligatorio "),e.qZA())}function Co(s,l){if(1&s&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function yo(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",49),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addProductToBill(r),e.KtG(i.stopPropagation())}),e.TgZ(1,"div",50),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addProductToBill(r),e.KtG(i.stopPropagation())}),e.TgZ(2,"span",51),e._UZ(3,"mat-checkbox",52),e._uU(4),e.qZA(),e.TgZ(5,"span",53),e._uU(6),e.qZA(),e.TgZ(7,"span",54),e._uU(8),e.ALo(9,"number"),e.qZA()()()}if(2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(3),e.Q6J("checked",t.checked),e.xp6(),e.hij(" ",t.name," "),e.xp6(2),e.Oqu(t.depot),e.xp6(2),e.AsE("",e.xi3(9,6,t.quantity,"1.2-2")," ",t.uom,"")}}function vo(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 0.1 "),e.qZA())}function Zo(s,l){if(1&s&&(e.TgZ(0,"mat-error",76),e._uU(1),e.qZA()),2&s){const t=e.oxw().$implicit;e.xp6(),e.hij(" Valor m\xe1ximo ",t.quantity," ")}}function Ao(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}function To(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 0 "),e.qZA())}function Io(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor requerido "),e.qZA())}const At=s=>({"text-warn":s}),Tt=()=>["$"];function So(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",60)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",61),e._uU(4),e.qZA(),e.TgZ(5,"div",62),e._uU(6),e.qZA(),e.TgZ(7,"div",58),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"div",63)(11,"div",64)(12,"button",65),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.decrementProductQty(o))}),e._UZ(13,"mat-icon",66),e.qZA(),e.TgZ(14,"mat-form-field",67),e._UZ(15,"input",68),e.qZA(),e.TgZ(16,"button",65),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.incrementProductQty(o))}),e._UZ(17,"mat-icon",66),e.qZA()(),e.YNc(18,vo,2,0,"mat-error",69)(19,Zo,2,1,"mat-error",69)(20,Ao,2,0,"mat-error",69),e.qZA(),e.TgZ(21,"div",70)(22,"mat-form-field",67),e._UZ(23,"input",71),e.qZA(),e.YNc(24,To,2,0,"mat-error",69)(25,Io,2,0,"mat-error",69),e.qZA(),e.TgZ(26,"div",72),e._uU(27),e.qZA(),e.TgZ(28,"div",73),e._uU(29),e.ALo(30,"currency"),e.qZA(),e.TgZ(31,"div",74)(32,"button",75),e.NdJ("click",function(){const o=e.CHM(t).$index,r=e.oxw(3);return e.KtG(r.removeProductToBill(o))}),e._UZ(33,"mat-icon",66),e.qZA()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.oxw(3);e.xp6(2),e.hij(" ",n+1," "),e.xp6(),e.Q6J("matTooltip",t.get("name").value),e.xp6(),e.hij(" ",t.get("name").value," "),e.xp6(2),e.hij(" ",t.get("depot").value," "),e.xp6(2),e.AsE(" ",e.xi3(9,27,t.get("stock").value,"1.2-2")," ",t.get("uom").value," "),e.xp6(4),e.Q6J("disabled",t.get("quantity").value<=.1||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",.1)("max",t.get("stock").value)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").value>=t.get("stock").value||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(18,t.get("quantity").hasError("min")?18:-1),e.xp6(),e.um2(19,t.get("quantity").hasError("max")?19:-1),e.xp6(),e.um2(20,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?20:-1),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",0)("max",9999999)("formControl",t.get("price")),e.xp6(),e.um2(24,t.get("price").hasError("min")?24:-1),e.xp6(),e.um2(25,t.get("price").hasError("required")?25:-1),e.xp6(),e.Q6J("ngClass",e.VKq(33,At,!t.get("rate").value)),e.xp6(),e.hij(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.xp6(2),e.hij(" ",e.xi3(30,30,t.get("pt").value,e.DdM(35,Tt))," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function qo(s,l){if(1&s&&(e.TgZ(0,"div",55)(1,"div",56),e._UZ(2,"div"),e.TgZ(3,"div",57),e._uU(4," Producto "),e.qZA(),e.TgZ(5,"div",57),e._uU(6," Almac\xe9n "),e.qZA(),e.TgZ(7,"div",58),e._uU(8," Disponibilidad "),e.qZA(),e.TgZ(9,"div",58),e._uU(10," Cantidad "),e.qZA(),e.TgZ(11,"div",58),e._uU(12," Precio "),e.qZA(),e.TgZ(13,"div",58),e._uU(14," Moneda "),e.qZA(),e.TgZ(15,"div",59),e._uU(16," Total "),e.qZA(),e.TgZ(17,"div",58),e._uU(18," Quitar "),e.qZA()(),e.SjG(19,So,34,36,"div",77,Ae),e.qZA()),2&s){const t=e.oxw(2);e.xp6(19),e.wJu(t.prebillingForm.get("products").controls)}}function Fo(s,l){1&s&&(e.TgZ(0,"div",78),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}const It=s=>({"cursor-pointer shadow":s});function ko(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",79),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createPrebill())}),e._uU(1),e.ALo(2,"number"),e.qZA()}if(2&s){const t=e.oxw(2);e.Q6J("ngClass",e.VKq(6,It,t.prebillingForm.valid&&t.prebillingForm.get("products").controls.length>0)),e.xp6(),e.AsE(" ",e.xi3(2,3,t.total-t.prebillingForm.get("discount").value+t.prebillingForm.get("surcharge").value,"1.2-2")," ",t.selectedCurrencyIso," ")}}const St=()=>({suppressScrollY:!0});function wo(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",40)(1,"div",41)(2,"mat-form-field",42),e._UZ(3,"mat-icon",18)(4,"input",43),e.TgZ(5,"mat-autocomplete",44,45),e.NdJ("closed",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchProductControl.reset())}),e.SjG(7,yo,10,9,"mat-option",80,e.x6l),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",46),e.YNc(11,qo,21,0,"div",47)(12,Fo,2,0),e.qZA()(),e.YNc(13,ko,3,8,"div",48),e.qZA()}if(2&s){const t=e.MAs(6),n=e.oxw();e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",n.searchProductControl)("matAutocomplete",t)("placeholder","Buscar existencia de productos en inventario"),e.xp6(),e.Q6J("displayWith",n.displayFn),e.xp6(2),e.wJu(e.lcZ(9,9,n.productsFiltered)),e.xp6(3),e.Q6J("fuseScrollbarOptions",e.DdM(11,St)),e.xp6(),e.um2(11,n.prebillingForm.get("products").controls.length>0?11:12),e.xp6(2),e.um2(13,n.billAssistances?-1:13)}}function Uo(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-option",49),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addAssistanceToBill(r),e.KtG(i.stopPropagation())}),e.TgZ(1,"div",50),e.NdJ("click",function(i){const r=e.CHM(t).$implicit;return e.oxw(2).addAssistanceToBill(r),e.KtG(i.stopPropagation())}),e.TgZ(2,"span",51),e._UZ(3,"mat-checkbox",52),e._uU(4),e.qZA()()()}if(2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(3),e.Q6J("checked",t.checked),e.xp6(),e.hij(" ",t.description," ")}}function Do(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 1 "),e.qZA())}function Po(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}function No(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 0 "),e.qZA())}function Bo(s,l){1&s&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor requerido "),e.qZA())}function Jo(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",84)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",61),e._uU(4),e.qZA(),e.TgZ(5,"div",63)(6,"div",64)(7,"button",85),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.decrementAssistanceQty(o))}),e._UZ(8,"mat-icon",66),e.qZA(),e.TgZ(9,"mat-form-field",67),e._UZ(10,"input",86),e.qZA(),e.TgZ(11,"button",65),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.incrementAssistanceQty(o))}),e._UZ(12,"mat-icon",66),e.qZA()(),e.YNc(13,Do,2,0,"mat-error",69)(14,Po,2,0,"mat-error",69),e.qZA(),e.TgZ(15,"div",70)(16,"mat-form-field",67),e._UZ(17,"input",71),e.qZA(),e.YNc(18,No,2,0,"mat-error",69)(19,Bo,2,0,"mat-error",69),e.qZA(),e.TgZ(20,"div",72),e._uU(21),e.qZA(),e.TgZ(22,"div",73),e._uU(23),e.ALo(24,"currency"),e.qZA(),e.TgZ(25,"div",74)(26,"button",75),e.NdJ("click",function(){const o=e.CHM(t).$index,r=e.oxw(3);return e.KtG(r.removeAssistanceToBill(o))}),e._UZ(27,"mat-icon",66),e.qZA()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.oxw(3);e.xp6(2),e.hij(" ",n+1," "),e.xp6(),e.Q6J("matTooltip",t.get("description").value),e.xp6(),e.hij(" ",t.get("description").value," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",1)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(13,t.get("quantity").hasError("min")?13:-1),e.xp6(),e.um2(14,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?14:-1),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",0)("max",9999999)("formControl",t.get("price")),e.xp6(),e.um2(18,t.get("price").hasError("min")?18:-1),e.xp6(),e.um2(19,t.get("price").hasError("required")?19:-1),e.xp6(),e.Q6J("ngClass",e.VKq(24,At,!t.get("rate").value)),e.xp6(),e.hij(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.xp6(2),e.hij(" ",e.xi3(24,21,t.get("pt").value,e.DdM(26,Tt))," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function Ro(s,l){if(1&s&&(e.TgZ(0,"div",55)(1,"div",83),e._UZ(2,"div"),e.TgZ(3,"div",57),e._uU(4," Servicio "),e.qZA(),e.TgZ(5,"div",58),e._uU(6," Cantidad "),e.qZA(),e.TgZ(7,"div",58),e._uU(8," Precio "),e.qZA(),e.TgZ(9,"div",58),e._uU(10," Moneda "),e.qZA(),e.TgZ(11,"div",59),e._uU(12," Total "),e.qZA(),e.TgZ(13,"div",58),e._uU(14," Quitar "),e.qZA()(),e.SjG(15,Jo,28,27,"div",87,Ae),e.qZA()),2&s){const t=e.oxw(2);e.xp6(15),e.wJu(t.prebillingForm.get("assistances").controls)}}function Mo(s,l){1&s&&(e.TgZ(0,"div",78),e._uU(1," \xa1No ha seleccionado ning\xfan servicio a\xfan! "),e.qZA())}function Eo(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",40)(1,"div",41)(2,"mat-form-field",42),e._UZ(3,"mat-icon",18)(4,"input",43),e.TgZ(5,"mat-autocomplete",44,81),e.NdJ("closed",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchAssistanceControl.reset())}),e.SjG(7,Uo,5,3,"mat-option",80,e.x6l),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",82),e.YNc(11,Ro,17,0,"div",47)(12,Mo,2,0),e.qZA()(),e.TgZ(13,"div",79),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createPrebill())}),e._uU(14),e.ALo(15,"number"),e.qZA()()}if(2&s){const t=e.MAs(6),n=e.oxw();e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",n.searchAssistanceControl)("matAutocomplete",t)("placeholder","Buscar servicios en el cat\xe1logo del negocio"),e.xp6(),e.Q6J("displayWith",n.displayFnAssistance),e.xp6(2),e.wJu(e.lcZ(9,11,n.assistancesFiltered)),e.xp6(3),e.Q6J("fuseScrollbarOptions",e.DdM(16,St)),e.xp6(),e.um2(11,n.prebillingForm.get("assistances").controls.length>0?11:12),e.xp6(2),e.Q6J("ngClass",e.VKq(17,It,n.prebillingForm.valid)),e.xp6(),e.AsE(" ",e.xi3(15,13,n.total-n.prebillingForm.get("discount").value+n.prebillingForm.get("surcharge").value,"1.2-2")," ",n.selectedCurrencyIso," ")}}const Qo=()=>({suppressScrollX:!0});let Lo=(()=>{class s{constructor(){this.assistances=[],this.assistances$=(0,U.of)([]),this.audio=new Audio("./assets/sounds/caja.mp3"),this.bankAccounts=[],this.billAssistances=!1,this.billProducts=!1,this.currencies=[],this.employees$=(0,U.of)([]),this.maxDate=new Date,this.merchant=null,this.multipliers$=(0,U.of)([]),this.operationTypes=[],this.paymentMethods=[],this.previewsAssistancesFormData=[],this.previewsProductsFormData=[],this.productsInStock=[],this.rates=[],this.searchAssistanceControl=new a.NI(""),this.searchCustomerControl=new a.NI(null),this.searchProductControl=new a.NI(null),this.selectedCurrencyIso="",this.selectedCustomerName="",this.stayHere=!1,this.total=0,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._customersService=(0,e.f3M)(ye.v),this._destroyRef=(0,e.f3M)(e.ktI),this._formBuilder=(0,e.f3M)(a.qu),this._fuseConfirmationService=(0,e.f3M)(se.R),this._prebillingService=(0,e.f3M)(io),this._ratesService=(0,e.f3M)(Qe.m),this._router=(0,e.f3M)(Y.F0),this._snackBar=(0,e.f3M)($.ux),this._stocksService=(0,e.f3M)(Ee.T),this._unsubscribeAll=new O.x,this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.prebillingForm=this._formBuilder.group({id:new a.NI,billDate:new a.NI(new Date,[a.kI.required]),multiplier:new a.NI(1,[a.kI.required,a.kI.min(1)]),currencyId:new a.NI(null,[a.kI.required]),courierId:new a.NI(null),customerId:new a.NI("",[a.kI.required]),bankAccount:new a.NI(null,[a.kI.required]),operationTypeId:new a.NI(null,[a.kI.required]),paymentMethodId:new a.NI(null,[a.kI.required]),rates:new a.NI([],[a.kI.required]),surcharge:new a.NI(0,[a.kI.required,a.kI.min(0)]),discount:new a.NI(0,[a.kI.required,a.kI.min(0)]),obs:new a.NI("",[a.kI.maxLength(5e4)]),products:new a.Oe([]),assistances:new a.Oe([])}),this.store.select(ie.Qs).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.merchant=t,this.bankAccounts=t.bankAccounts,E.W.IsNullOrEmpty(t.bankAccounts)||this.prebillingForm.get("bankAccount").setValue(t.bankAccounts[0]),this._changeDetectorRef.markForCheck()}),this.prebillingForm.get("products").valueChanges.pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this._verifyChanges(t,this.previewsProductsFormData)&&this.calcAllProductPrice(this.prebillingForm.get("multiplier").value),this.previewsProductsFormData=[...t],this._calculateBillTotal(),this._changeDetectorRef.markForCheck()}),this.prebillingForm.get("assistances").valueChanges.pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this._verifyChanges(t,this.previewsAssistancesFormData)&&this._calcAllAssistancePrice(this.prebillingForm.get("multiplier").value),this.previewsAssistancesFormData=[...t],this._calculateBillTotal(),this._changeDetectorRef.markForCheck()}),this.store.select(le.zd).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.currencies=t,E.W.IsNullOrEmpty(t)||setTimeout(()=>{const n=t.find(i=>i.id===this.merchant.currencyId);this.prebillingForm.get("currencyId").setValue(n.id)},500),this._changeDetectorRef.markForCheck()}),this.employees$=this.store.select(Le.ri),this.multipliers$=this.store.select(Me.Af),this.customers$=this.store.select(Fe.p6),this.store.select(ct.VS).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{if(this.paymentMethods=t,!E.W.IsNullOrEmpty(t)){const n=t.find(i=>"Efectivo"===i.name);this.prebillingForm.get("paymentMethodId").setValue(n?n.id:t[0].id)}this._changeDetectorRef.markForCheck()}),this.store.select(lt.pU).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.operationTypes=t,E.W.IsNullOrEmpty(t)||this.prebillingForm.get("operationTypeId").setValue(t[0].id),this._changeDetectorRef.markForCheck()}),this.productsInStock$=this.store.select(fe.K2),this.store.select(fe.K2).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.productsInStock=t,t.length>0&&(this.billProducts=!0),this._changeDetectorRef.markForCheck()}),this.assistances$=this.store.select(ee),this.store.select(ee).pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.assistances=t,t.length>0&&(this.billAssistances=!0),this._changeDetectorRef.markForCheck()}),this.ratesFiltered=this.prebillingForm.get("currencyId").valueChanges.pipe((0,z.O)(null),(0,V.z)(t=>{if(t){const n=this.currencies.find(o=>o.id===t);this.selectedCurrencyIso=n.iso;const i=this.prebillingForm.get("bankAccount").getRawValue();return E.W.IsNullOrEmpty(i)||n&&n.iso.toLocaleLowerCase()!==i.currency.toLocaleLowerCase()&&this.prebillingForm.get("bankAccount").setValue(null),n&&(this.bankAccounts=this.merchant.bankAccounts.filter(o=>o.currency.toLocaleLowerCase()===n.iso.toLocaleLowerCase())),this._ratesService.findActiveByBaseId(t)}return(0,U.of)([])})),this.ratesFiltered.pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.rates=t,this._resetSelectedProductsRates(),this._resetSelectedAssistancesRates(),this.updateSelectedRates()}),this.prebillingForm.get("rates").valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(500)).subscribe(t=>{this._resetSelectedProductsRates(),this._resetSelectedAssistancesRates()}),this.prebillingForm.get("multiplier").valueChanges.pipe((0,M.sL)(this._destroyRef)).subscribe(t=>{this.calcAllProductPrice(t),this._calculateBillTotal()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,V.z)(t=>this._mapChecked(null!==t&&"string"==typeof t?this._stocksService.getProductsInStockAvailable(t,10):this.productsInStock$))),this.assistancesFiltered=this.searchAssistanceControl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,V.z)(t=>{const n=this.assistances.filter(i=>i.description.includes(t));return this._mapCheckedAssistances(null!==t&&"string"==typeof t?(0,U.of)(n):this.assistances$)})),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,V.z)(t=>null!==t&&"string"==typeof t&&t!==this.selectedCustomerName?this._customersService.findActiveCustomers(t.trim()):this.customers$))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}displayFnAssistance(t){return t&&t.description?t.description:""}selectCustomer(t){this.prebillingForm.get("customerId").setValue(t.id),this.selectedCustomerName=t.name}addStockProduct(t){const n=this.prebillingForm.get("currencyId").value,i=structuredClone(this.prebillingForm.get("rates").value);let o=i.find(d=>d.currencyBaseId===n&&d.currencyRefId===t.currencyId);!o&&n!==t.currencyId&&(o=i.find(d=>d.currencyRefId===n&&d.currencyRefId!==d.currencyBaseId),o&&(o.value=1/o.value));const r=this.prebillingForm.get("multiplier").value,c=this._formBuilder.group({productId:new a.NI(t.productId,[a.kI.required]),currencyId:new a.NI(t.currencyId,[a.kI.required]),name:new a.NI(t.name,[a.kI.required]),staticPrice:new a.NI(Number(((o?o.value:1)*t.price).toFixed(2)),[a.kI.required,a.kI.min(0),a.kI.max(99999999)]),price:new a.NI(Number(((o?o.value:1)*t.price).toFixed(2)),[a.kI.required,a.kI.min(0),a.kI.max(99999999)]),multiplier:new a.NI(r),pt:new a.NI(0),uom:new a.NI(t.uom,[a.kI.required]),depotId:new a.NI(t.depotId,[a.kI.required]),depot:new a.NI(t.depot,[a.kI.required]),currency:new a.NI(t.currency,[a.kI.required]),stock:new a.NI(t.quantity,[a.kI.required]),rateId:new a.NI(o?o.id:null,[a.kI.required]),rate:new a.NI(o?o.value:null,[a.kI.required]),quantity:new a.NI(1,[G.L.onlyNumbersPattern(),a.kI.required,a.kI.min(.1),a.kI.max(t.quantity)])});this.prebillingForm.get("products").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeStockProduct(t){this.prebillingForm.get("products").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addProductToBill(t){const n=this.prebillingForm.get("products").getRawValue().findIndex(i=>i.productId===t.productId&&i.depotId===t.depotId);t.checked?(this.removeStockProduct(n),t.checked=!1):t.checked=!0,!(n>-1)&&this.addStockProduct(t)}incrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n+1)}decrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(+n-1)}removeProductToBill(t){this.removeStockProduct(t),this.searchProductControl.reset()}addAssistance(t){const n=this.prebillingForm.get("currencyId").value,i=structuredClone(this.prebillingForm.get("rates").value);let o=i.find(d=>d.currencyBaseId===n&&d.currencyRefId===t.currencyId);!o&&n!==t.currencyId&&(o=i.find(d=>d.currencyRefId===n&&d.currencyRefId!==d.currencyBaseId),o&&(o.value=1/o.value));const r=this.prebillingForm.get("multiplier").value,c=this._formBuilder.group({assistanceId:new a.NI(t.id,[a.kI.required]),currencyId:new a.NI(t.currencyId,[a.kI.required]),description:new a.NI(t.description,[a.kI.required]),staticPrice:new a.NI(Number(((o?o.value:1)*t.price).toFixed(2)),[a.kI.required,a.kI.min(0),a.kI.max(99999999)]),price:new a.NI(Number(((o?o.value:1)*t.price).toFixed(2)),[a.kI.required,a.kI.min(0),a.kI.max(99999999)]),multiplier:new a.NI(r),quantity:new a.NI(1,[G.L.onlyNumbersPattern(),a.kI.required,a.kI.min(1)]),pt:new a.NI(0),currency:new a.NI(t.currency.iso,[a.kI.required]),rateId:new a.NI(o?o.id:null,[a.kI.required]),rate:new a.NI(o?o.value:null,[a.kI.required])});this.prebillingForm.get("assistances").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeAssistance(t){this.prebillingForm.get("assistances").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addAssistanceToBill(t){const n=this.prebillingForm.get("assistances").getRawValue().findIndex(i=>i.assistanceId===t.id);t.checked?(this.removeAssistance(n),t.checked=!1):t.checked=!0,!(n>-1)&&this.addAssistance(t)}incrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(++n)}decrementAssistanceQty(t){let n=t.get("quantity").value;t.get("quantity").setValue(--n)}removeAssistanceToBill(t){this.removeAssistance(t),this.searchAssistanceControl.reset()}createPrebill(){if(this.prebillingForm.invalid)return;const t=this.prebillingForm.getRawValue();delete t.id;const n=[],i=[];t.ratesId=t.products.map(r=>r.rateId).filter((r,c,d)=>d.indexOf(r)===c);for(const r of t.products)n.push(this._mapProductToBill(r));for(const r of t.assistances)i.push(this._mapAssistanceToBill(r));t.products=n,t.assistances=i,t.subtotal=this.total,delete t.rates,delete t.bankAccount._id,this._fuseConfirmationService.open({title:"Generar prefactura",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,M.sL)(this._destroyRef)).subscribe(r=>{"confirmed"===r&&this._prebillingService.createPrebill(t).pipe((0,g.R)(this._unsubscribeAll),(0,oe.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:c})=>{c&&(this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:c.createPrebill.message,type:"success",svgIcon:"mat_solid:done"}}),this.audio.play(),this.stayHere?this.restoreForm():this._router.navigateByUrl("/modules/sales/prebills"))})})}restoreForm(){const t=this.prebillingForm.get("paymentMethodId").value,n=this.prebillingForm.get("operationTypeId").value,i=this.prebillingForm.get("multiplier").value;if(this.prebillingForm.get("products").clear(),this.searchCustomerControl.reset(),this.prebillingForm.reset(),this.total=0,this.selectedCustomerName="",this.searchProductControl.setValue(""),this.prebillingForm.get("paymentMethodId").setValue(t),this.prebillingForm.get("operationTypeId").setValue(n),this.prebillingForm.get("multiplier").setValue(i),this.prebillingForm.get("billDate").setValue(new Date),this.prebillingForm.get("observation").setValue(""),this.prebillingForm.get("surcharge").setValue(0),this.prebillingForm.get("discount").setValue(0),E.W.IsNullOrEmpty(this.merchant.bankAccounts)||(this.bankAccounts=this.merchant.bankAccounts,this.prebillingForm.get("bankAccount").setValue(this.merchant.bankAccounts[0])),!E.W.IsNullOrEmpty(this.currencies)){const o=this.currencies.find(r=>r.id===this.merchant.currencyId);this.prebillingForm.get("currencyId").setValue(o.id)}}_mapProductToBill(t){const{productId:n,price:i,depotId:o,quantity:r}=t,c=new ge.vr(n,"","",Number(i.toFixed(2)),Number(Number(r).toFixed(4)),o);return delete c.name,delete c.uom,c}_calculateBillTotal(){const t=this.prebillingForm.get("products").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0),n=this.prebillingForm.get("assistances").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,o)=>i+o,0);this.total=Number(t.toFixed(2))+Number(n.toFixed(2))}_mapChecked(t){return t.pipe((0,R.U)(n=>n.map(i=>this.prebillingForm.get("products").getRawValue().some(r=>r.productId===i.productId&&r.depotId===i.depotId)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_mapCheckedAssistances(t){return t.pipe((0,R.U)(n=>n.map(i=>this.prebillingForm.get("assistances").getRawValue().some(r=>r.id===i.id)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_mapAssistanceToBill(t){const{assistanceId:n,price:i,quantity:o}=t;return new ge.JM(n,i,o)}_resetSelectedProductsRates(){const t=this.prebillingForm.get("currencyId").value,n=this.prebillingForm.get("multiplier").value;for(const i of this.prebillingForm.get("products").controls){const o=i.getRawValue(),r=structuredClone(this.prebillingForm.get("rates").value);let c=r.find(h=>h.currencyBaseId===t&&h.currencyRefId===o.currencyId);!c&&t!==o.currencyId&&(c=r.find(h=>h.currencyRefId===t&&h.currencyRefId!==h.currencyBaseId),c&&(c.value=1/c.value));let d=c?c.value:null;const _=i.get("price").value,m=i.get("staticPrice").value;let u=i.get("rate").value?i.get("rate").value:1;u&&d===u&&(u=1,d=1),i.patchValue({...o,price:(d?_*d:1*_/u)*n,staticPrice:d?m*d:1*m/u,multiplier:n,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}_calcAllAssistancePrice(t){const n=this.prebillingForm.get("assistances").getRawValue();this.previewsAssistancesFormData=[...n];for(const i of this.prebillingForm.get("assistances").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}calcAllProductPrice(t){const n=this.prebillingForm.get("products").getRawValue();this.previewsProductsFormData=[...n];for(const i of this.prebillingForm.get("products").controls){const o=i.getRawValue();let r=o.price/o.multiplier!==o.staticPrice?o.price:o.staticPrice,c=Number((r*t).toFixed(2));t===o.multiplier&&(c=Number((+o.price).toFixed(2)),r=o.price/t),i.patchValue({...o,staticPrice:r,price:c,pt:c*Number(o.quantity),multiplier:t})}}_verifyChanges(t,n){for(let i=0;i<t.length;i++)if(t.length!==n.length||t[i].price!==n[i].price||Number(t[i].quantity)!==Number(n[i].quantity))return!0;return!1}updateSelectedRates(){const t=this.prebillingForm.get("currencyId").value,n=this.prebillingForm.get("products").getRawValue();let i=[];for(const r of n)i=[...this.rates.filter(_=>_.currencyBaseId===t&&_.currencyRefId===r.currencyId),...this.rates.filter(_=>_.currencyBaseId===r.currencyId&&_.currencyRefId===t&&_.currencyRefId!==_.currencyBaseId),...i];const o=i.reduce((r,c)=>(r.find(_=>_.id===c.id&&_.name===c.name)||r.push(c),r),[]);this.prebillingForm.get("rates").setValue(o)}_resetSelectedAssistancesRates(){const t=this.prebillingForm.get("currencyId").value,n=this.prebillingForm.get("multiplier").value;for(const i of this.prebillingForm.get("assistances").controls){const o=i.getRawValue(),r=structuredClone(this.prebillingForm.get("rates").value);let c=r.find(h=>h.currencyBaseId===t&&h.currencyRefId===o.currencyId);!c&&t!==o.currencyId&&(c=r.find(h=>h.currencyRefId===t&&h.currencyRefId!==h.currencyBaseId),c&&(c.value=1/c.value));let d=c?c.value:null;const _=i.get("price").value,m=i.get("staticPrice").value;let u=i.get("rate").value?i.get("rate").value:1;u&&d===u&&(u=1,d=1),i.patchValue({...o,price:(d?_*d:1*_/u)*n,staticPrice:d?m*d:1*m/u,multiplier:n,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-prebilling"]],standalone:!0,features:[e.jDz],decls:124,vars:62,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0",3,"fuseScrollbarOptions"],[1,"relative","flex","flex-col","px-6","py-8","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["color","primary",3,"ngModel","ngModelChange"],["mat-flat-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[1,"flex","flex-col","px-4","mt-4","mb-12","gap-y-8","sm:px-8"],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"grid","gap-4","p-10","sm:grid-cols-4","lg:grid-cols-5",3,"formGroup"],["billNgForm","ngForm"],["appearance","fill",1,"w-full","md:col-span-2","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[1,"ath-autocomplete",3,"displayWith"],["customerAutocomplete","matAutocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["billDate",""],[3,"formControlName","required"],[3,"value"],["placeholder","Moneda",3,"formControlName","required"],["multiple","","placeholder","Tasa de cambio",3,"formControlName","required"],["class","text-sm opacity-75"],["matInput","","type","number","name","quantity",3,"min","max","formControlName"],[1,"flex","flex-col","gap-3","sm:flex-row","lg:flex-col","sm:col-span-2"],[3,"formControlName"],[1,"w-full","sm:col-span-4","lg:col-span-3","fuse-mat-textarea"],["matInput","",3,"formControlName","rows"],["class","col-span-4 shadow rounded-2xl bg-card"],[3,"value","click"],[1,"text-sm","opacity-75"],[1,"w-18"],[1,"col-span-4","shadow","rounded-2xl","bg-card"],[1,"p-6","pb-0"],["appearance","fill",1,"w-full","fuse-mat-dense",3,"subscriptSizing"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete",3,"displayWith","closed"],["productsAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-6","mt-2","min-h-36",3,"fuseScrollbarOptions"],["class","grid"],["class","flex items-center justify-center w-full gap-2 p-2 font-mono text-3xl font-semibold leading-7 text-white rounded-b-2xl bg-gradient-to-r from-primary-500 to-primary-700",3,"ngClass"],[1,"w-full",3,"value","click"],[1,"grid","w-full","grid-cols-6",3,"click"],[1,"flex","flex-row","items-center","col-span-5","truncate","md:col-span-3"],["color","primary",3,"checked"],[1,"items-center","hidden","col-span-2","md:flex"],[1,"flex","items-center","text-center"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left"],[1,"text-center"],[1,"text-right"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"truncate",3,"matTooltip"],[1,"truncate"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"flex","flex-col","items-center","justify-center"],["matInput","","type","number",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],[1,"text-center",3,"ngClass"],[1,"font-mono","text-right"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"w-full","text-sm","text-center"],["class","grid items-center gap-4 px-6 py-3 border-b billing-products-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","items-center","justify-center","w-full","gap-2","p-2","font-mono","text-3xl","font-semibold","leading-7","text-white","rounded-b-2xl","bg-gradient-to-r","from-primary-500","to-primary-700",3,"ngClass","click"],["class","w-full",3,"value"],["assistancesAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-2","mt-2","min-h-36",3,"fuseScrollbarOptions"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-assistances-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-assistances-grid","md:px-8"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","formControl"],["class","grid items-center gap-4 px-6 py-3 border-b billing-assistances-grid md:px-8"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Facturaci\xf3n"),e.qZA()(),e.TgZ(15,"div",5),e._UZ(16,"mat-icon",6),e.TgZ(17,"a",7),e._uU(18,"Prefacturar"),e.qZA()()(),e.TgZ(19,"div",8)(20,"h2",9),e._uU(21," Hacer Prefactura "),e.qZA()()(),e.TgZ(22,"div",10),e.YNc(23,so,4,2),e.TgZ(24,"mat-checkbox",11),e.NdJ("ngModelChange",function(r){return i.stayHere=r}),e._uU(25,"Permanecer aqu\xed"),e.qZA(),e.TgZ(26,"button",12),e.NdJ("click",function(){return i.createPrebill()}),e._uU(27," Generar Prefactura "),e.qZA()()(),e.TgZ(28,"div",13)(29,"div",14)(30,"form",15,16)(32,"mat-form-field",17)(33,"mat-label"),e._uU(34,"Cliente"),e.qZA(),e._UZ(35,"mat-icon",18)(36,"input",19),e.TgZ(37,"mat-autocomplete",20,21),e.SjG(39,no,2,2,"mat-option",27,e.x6l),e.ALo(41,"async"),e.qZA()(),e.TgZ(42,"mat-form-field",22)(43,"mat-label"),e._uU(44,"Fecha de la Prefactura"),e.qZA(),e._UZ(45,"input",23),e.TgZ(46,"mat-hint"),e._uU(47,"DD/MM/YYYY"),e.qZA(),e._UZ(48,"mat-datepicker-toggle",24)(49,"mat-datepicker",null,25),e.YNc(51,oo,2,0,"mat-error"),e.qZA(),e.TgZ(52,"mat-form-field",22)(53,"mat-label"),e._uU(54,"Multiplicador"),e.qZA(),e.TgZ(55,"mat-select",26),e.YNc(56,ao,2,1,"mat-option",27),e.ALo(57,"async"),e.SjG(58,ro,2,2,"mat-option",27,e.x6l),e.ALo(60,"async"),e.qZA(),e.YNc(61,lo,2,0,"mat-error"),e.qZA(),e.TgZ(62,"mat-form-field",22)(63,"mat-label"),e._uU(64,"M\xe9todo de pago"),e.qZA(),e.TgZ(65,"mat-select",26),e.SjG(66,co,2,2,"mat-option",27,Ae),e.qZA(),e.YNc(68,uo,2,0,"mat-error"),e.qZA(),e.TgZ(69,"mat-form-field",22)(70,"mat-label"),e._uU(71,"Tipo de Operaci\xf3n"),e.qZA(),e.TgZ(72,"mat-select",26),e.SjG(73,mo,2,2,"mat-option",27,Ae),e.qZA(),e.YNc(75,po,2,0,"mat-error"),e.qZA(),e.TgZ(76,"mat-form-field",22)(77,"mat-label"),e._uU(78,"Moneda"),e.qZA(),e.TgZ(79,"mat-select",28),e.SjG(80,go,2,2,"mat-option",27,Ae),e.qZA()(),e.TgZ(82,"mat-form-field",22)(83,"mat-label"),e._uU(84,"Tasa de Cambio"),e.qZA(),e.TgZ(85,"mat-select",29)(86,"mat-select-trigger"),e._uU(87),e.YNc(88,_o,2,2,"span",30),e.qZA(),e.SjG(89,ho,6,6,"mat-option",27,e.x6l),e.ALo(91,"async"),e.qZA(),e.YNc(92,fo,2,0,"mat-error"),e.qZA(),e.TgZ(93,"mat-form-field",22)(94,"mat-label"),e._uU(95,"Descuento"),e.qZA(),e._UZ(96,"input",31),e.qZA(),e.TgZ(97,"mat-form-field",22)(98,"mat-label"),e._uU(99,"Recargo"),e.qZA(),e._UZ(100,"input",31),e.qZA(),e.TgZ(101,"div",32)(102,"mat-form-field",22)(103,"mat-label"),e._uU(104,"Cuenta Bancaria"),e.qZA(),e.TgZ(105,"mat-select",26),e.SjG(106,bo,2,3,"mat-option",27,e.x6l),e.qZA(),e.TgZ(108,"mat-hint"),e._uU(109,"Cuentas Bancarias registradas en el negocio"),e.qZA(),e.YNc(110,xo,2,0,"mat-error"),e.qZA(),e.TgZ(111,"mat-form-field",22)(112,"mat-label"),e._uU(113,"Transportista"),e.qZA(),e.TgZ(114,"mat-select",33),e.SjG(115,Co,2,2,"mat-option",27,e.x6l),e.ALo(117,"async"),e.qZA()()(),e.TgZ(118,"mat-form-field",34)(119,"mat-label"),e._uU(120,"Observaciones"),e.qZA(),e._UZ(121,"textarea",35),e.qZA()()(),e.YNc(122,wo,14,12,"div",36)(123,Eo,16,19,"div",36),e.qZA()()),2&n){const o=e.MAs(38),r=e.MAs(50);e.Q6J("fuseScrollbarOptions",e.DdM(61,Qo)),e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.um2(23,i.assistances.length>0&&i.productsInStock.length>0?23:-1),e.xp6(),e.Q6J("ngModel",i.stayHere),e.xp6(2),e.Q6J("disabled",i.prebillingForm.invalid||0===i.prebillingForm.get("products").controls.length),e.xp6(4),e.Q6J("formGroup",i.prebillingForm),e.xp6(5),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchCustomerControl)("matAutocomplete",o)("placeholder","Buscar cliente")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(41,51,i.customersFiltered)),e.xp6(6),e.Q6J("matDatepicker",r)("formControlName","billDate")("max",i.maxDate)("required",!0),e.xp6(3),e.Q6J("for",r),e.xp6(3),e.um2(51,i.prebillingForm.get("billDate").hasError("required")?51:-1),e.xp6(4),e.Q6J("formControlName","multiplier")("required",!0),e.xp6(),e.um2(56,0===e.lcZ(57,53,i.multipliers$).length?56:-1),e.xp6(2),e.wJu(e.lcZ(60,55,i.multipliers$)),e.xp6(3),e.um2(61,i.prebillingForm.get("multiplier").hasError("required")?61:-1),e.xp6(4),e.Q6J("formControlName","paymentMethodId")("required",!0),e.xp6(),e.wJu(i.paymentMethods),e.xp6(2),e.um2(68,i.prebillingForm.get("paymentMethodId").hasError("required")?68:-1),e.xp6(4),e.Q6J("formControlName","operationTypeId")("required",!0),e.xp6(),e.wJu(i.operationTypes),e.xp6(2),e.um2(75,i.prebillingForm.get("operationTypeId").hasError("required")?75:-1),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0),e.xp6(),e.wJu(i.currencies),e.xp6(5),e.Q6J("formControlName","rates")("required",!0),e.xp6(2),e.hij(" ",(null==i.prebillingForm.get("rates").value||null==i.prebillingForm.get("rates").value[0]?null:i.prebillingForm.get("rates").value[0].name)||""," "),e.xp6(),e.um2(88,((null==i.prebillingForm.get("rates").value?null:i.prebillingForm.get("rates").value.length)||0)>1?88:-1),e.xp6(),e.wJu(e.lcZ(91,57,i.ratesFiltered)),e.xp6(3),e.um2(92,i.prebillingForm.get("rates").hasError("required")?92:-1),e.xp6(4),e.Q6J("min",0)("max",i.total)("formControlName","discount"),e.xp6(4),e.Q6J("min",0)("max",99999)("formControlName","surcharge"),e.xp6(5),e.Q6J("formControlName","bankAccount")("required",!0),e.xp6(),e.wJu(i.bankAccounts),e.xp6(4),e.um2(110,i.prebillingForm.get("bankAccount").hasError("required")?110:-1),e.xp6(4),e.Q6J("formControlName","courierId"),e.xp6(),e.wJu(e.lcZ(117,59,i.employees$)),e.xp6(6),e.Q6J("formControlName","observation")("rows",4),e.xp6(),e.um2(122,i.billProducts?122:-1),e.xp6(),e.um2(123,i.billAssistances?123:-1)}},dependencies:[v.Ov,v.H9,v.JJ,a.u5,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.Q7,a.qQ,a.Fd,a.On,be.H,W.Bb,W.XC,he.ey,W.ZL,A.ot,A.lW,ne.p9,ne.oG,Z.FA,Z.Mq,Z.hl,Z.nW,f.lN,f.KE,f.hX,f.bx,f.TO,f.qo,f.R9,D.Ps,D.Hw,w.c,w.Nt,N.Tx,j.LD,j.gD,j.$L,X.AV,X.gM,v.mk,a.UX,a.oH,a.sg,a.u,Y.rH],encapsulation:2,changeDetection:0})}return s})();var ce=p(63459);const qt=s=>s.prebills,Pe=((0,k.P1)(qt,s=>s.prebill),(0,k.P1)(qt,s=>s.prebills));let Ft=(()=>{class s{constructor(t,n){this.apolloProvider=t,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}getPrebills(t=0,n=50,i="no",o="desc",r="",c=null,d=[],_=[],m=[],u=null,h=null,C=null){return this._apollo.query({query:jn,errorPolicy:"all",variables:{page:t,size:n,sort:i,order:o,search:r,status:_,paymentStatus:m,customerId:c,currenciesId:d,billDate:u,startDate:h,endDate:C}}).pipe((0,q.b)(({data:x})=>{x&&(this.store.dispatch((0,ce.dV)({prebills:structuredClone(x).findAllPrebills.prebills.map(b=>{const B=b.products.reduce((te,H)=>{const Ie=te.find(et=>et.productId===H.productId);return Ie?Ie.quantity+=H.quantity:te.push({productId:H.productId,price:H.price,quantity:H.quantity,product:H.product}),te},[]);return b.products=B,b})})),this.store.dispatch((0,Ce.Jr)({pagination:x.findAllPrebills.pagination})))}))}getPrebillsByDate(t){return this._apollo.query({query:Vn,errorPolicy:"all",variables:{date:t}})}getPrebillById(t){return this._apollo.query({query:Hn,variables:{findBillByIdId:t},errorPolicy:"all"}).pipe((0,q.b)(({data:n})=>{this.store.dispatch((0,ce.AU)({prebill:n.dispatchPrebill.prebill}))}))}updateBill(t){return this.store.select(Pe).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:Kn,variables:{updateBillInput:t},errorPolicy:"all"}).pipe((0,q.b)(({data:i})=>{const o=structuredClone(n);o[n.findIndex(c=>c.id===t.id)]=i.updatedBill,this.store.dispatch((0,ce.dV)({prebills:o}))}))))}updatePrebillStatus(t,n,i){return this.store.select(Pe).pipe((0,L.q)(1),(0,I.w)(o=>this._apollo.mutate({mutation:Wn,variables:{updatePrebillStatusInput:{id:t,status:n,paymentStatus:i}},errorPolicy:"all"}).pipe((0,q.b)(({data:r})=>{const c=structuredClone(o);c[o.findIndex(_=>_.id===t)]=r.updatePrebillStatus.prebill,this.store.dispatch((0,ce.dV)({prebills:c}))}))))}removeBill(t){return this.store.select(Pe).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:Xn,variables:{removePrebillId:t},errorPolicy:"all"}).pipe((0,q.b)(({errors:i})=>{if(i)return;const o=structuredClone(n),r=n.findIndex(c=>c.id===t);o.splice(r,1),this.store.dispatch((0,ce.dV)({prebills:o}))}))))}dispatchPrebill(t){return this._apollo.mutate({mutation:eo,variables:{billId:t},errorPolicy:"all"}).pipe((0,q.b)(({data:n})=>{n&&this.store.dispatch((0,ce.AG)({prebill:n.dispatchPrebill.prebill}))}))}generateBillFromPrebill(t){return this._apollo.mutate({mutation:to,variables:{billId:t},errorPolicy:"all"}).pipe((0,q.b)(({data:n})=>{n&&this.store.dispatch((0,ce.AG)({prebill:n.generateBillFromPrebill.prebill}))}))}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(y._M),e.LFG(k.yh))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();const $o=["billDateFilter"],zo=["customerFilter"],Oo=["currencyFilter"],Go=["statusFilter"],jo=["paymentStatusFilter"];function Vo(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-icon",28),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.range.reset())}),e.qZA()}}function Ho(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1,"Fecha de inicio no v\xe1lida "),e.qZA())}function Yo(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1,"Fecha de final no v\xe1lida "),e.qZA())}function Ko(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",50),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.clearTableFilters())}),e.TgZ(1,"span",51),e._uU(2," filter_list_off "),e.qZA()()}}const Wo=(s,l)=>l.id;function Xo(s,l){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&s){const t=e.oxw().$implicit;e.xp6(),e.hij(" ",t.bill.no," ")}}function ea(s,l){1&s&&e._UZ(0,"mat-icon",61),2&s&&e.Q6J("svgIcon","mat_solid:done")}function ta(s,l){1&s&&e._UZ(0,"mat-icon",61),2&s&&e.Q6J("svgIcon","mat_solid:done")}function ia(s,l){1&s&&e._UZ(0,"mat-icon",61),2&s&&e.Q6J("svgIcon","mat_solid:done")}function sa(s,l){1&s&&e._UZ(0,"mat-icon",61),2&s&&e.Q6J("svgIcon","mat_solid:done")}const na=(s,l,t,n)=>({"bg-amber-50 text-amber-700":s,"text-green-700 bg-green-50":l,"text-red-700 bg-red-50":t,"text-blue-700 bg-blue-50":n}),oa=(s,l)=>({"text-blue-700 bg-blue-50":s,"text-green-700 bg-green-50":l});function aa(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",52)(1,"div",53),e._uU(2),e.qZA(),e.TgZ(3,"div",53),e.YNc(4,Xo,2,1,"span"),e.qZA(),e.TgZ(5,"div",54),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"div",32),e._uU(9),e.qZA(),e.TgZ(10,"div",55),e._uU(11),e.qZA(),e.TgZ(12,"div",56),e._uU(13),e.ALo(14,"number"),e.qZA(),e.TgZ(15,"div",57)(16,"span",58),e._uU(17),e.ALo(18,"uppercase"),e.qZA()(),e.TgZ(19,"div",57)(20,"span",58),e._uU(21),e.ALo(22,"uppercase"),e.qZA()(),e.TgZ(23,"div",59)(24,"button",60),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.generatePrebillDocument(o))}),e._UZ(25,"mat-icon",61),e.qZA(),e.TgZ(26,"button",62),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.dispatchPrebill(o.id))}),e._UZ(27,"mat-icon",61),e.qZA(),e.TgZ(28,"button",63),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.generateBillFromPrebill(o.id))}),e._UZ(29,"mat-icon",61),e.qZA(),e.TgZ(30,"div")(31,"button",64),e._UZ(32,"mat-icon",61),e.qZA(),e.TgZ(33,"mat-menu",null,65)(35,"div",66),e._uU(36," Actualizar Estado "),e.qZA(),e.TgZ(37,"button",67),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.updatePrebillStatus(o.id,"entregada"))}),e.TgZ(38,"div",68),e.YNc(39,ea,1,1,"mat-icon",69),e.qZA(),e.TgZ(40,"span",70),e._uU(41,"Entregada"),e.qZA()(),e.TgZ(42,"button",67),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.updatePrebillStatus(o.id,null,"cobrada"))}),e.TgZ(43,"div",68),e.YNc(44,ta,1,1,"mat-icon",69),e.qZA(),e.TgZ(45,"span",70),e._uU(46,"Cobrada"),e.qZA()(),e.TgZ(47,"button",67),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.updatePrebillStatus(o.id,"cancelada"))}),e.TgZ(48,"div",68),e.YNc(49,ia,1,1,"mat-icon",69),e.qZA(),e.TgZ(50,"span",70),e._uU(51,"Cancelada"),e.qZA()(),e.TgZ(52,"button",67),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.updatePrebillStatus(o.id,"rechazada"))}),e.TgZ(53,"div",68),e.YNc(54,sa,1,1,"mat-icon",69),e.qZA(),e.TgZ(55,"span",70),e._uU(56,"Rechazada"),e.qZA()()()()()()}if(2&s){const t=l.$implicit,n=e.MAs(34);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.um2(4,t.bill?4:-1),e.xp6(2),e.hij(" ",e.xi3(7,26,t.billDate,"dd/MM/yyyy")," "),e.xp6(3),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(14,29,t.total,"1.2-2")," "),e.xp6(2),e.Q6J("ngClass",e.l5B(36,na,"nueva"===t.status,"facturada"===t.status,"cancelada"===t.status,"entregada"===t.status)),e.xp6(2),e.hij(" ",e.lcZ(18,32,t.status)," "),e.xp6(2),e.Q6J("ngClass",e.WLB(41,oa,"pendiente"===t.paymentStatus,"cobrada"===t.paymentStatus)),e.xp6(2),e.hij(" ",e.lcZ(22,34,t.paymentStatus)," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:print"),e.xp6(),e.Q6J("disabled",0===t.products.length||t.isDispatched||"facturada"===t.status||"cancelada"===t.status),e.xp6(),e.Q6J("svgIcon","mat_solid:logout"),e.xp6(),e.Q6J("disabled","facturada"===t.status||"cancelada"===t.status),e.xp6(),e.Q6J("svgIcon","mat_solid:request_page"),e.xp6(2),e.Q6J("matMenuTriggerFor",n)("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(),e.Q6J("svgIcon","mat_solid:update"),e.xp6(5),e.Q6J("disabled",t.status.includes("entregada")||t.status.includes("cancelada")||t.status.includes("rechazada")||t.paymentStatus.includes("cobrada")||t.status.includes("facturada")),e.xp6(2),e.um2(39,t.status.includes("entregada")?39:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(2),e.um2(44,t.paymentStatus.includes("cobrada")?44:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("rechazada")||t.status.includes("cancelada")||t.status.includes("facturada")),e.xp6(2),e.um2(49,t.status.includes("cancelada")?49:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")||t.status.includes("facturada")),e.xp6(2),e.um2(54,t.status.includes("rechazada")?54:-1)}}function ra(s,l){if(1&s&&e.SjG(0,aa,57,44,"div",71,Wo),2&s){const t=e.oxw();e.wJu(t)}}function la(s,l){1&s&&(e.TgZ(0,"div",72),e._uU(1," \xa1No se ha registrado ninguna prefactura! "),e.qZA())}const ca=()=>["nueva","entregada","cancelada","rechazada"],da=()=>["pendiente","cobrada"],ua=s=>({"mr-4":s}),ma=(s,l)=>({"pointer-events-none":s,hidden:l}),pa=()=>[10,25,100];function ga(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",29)(1,"div",30)(2,"div",31),e._uU(3," N\xfamero "),e.qZA(),e.TgZ(4,"div",32),e._uU(5," N.Factura "),e.qZA(),e.TgZ(6,"div",33)(7,"span",34),e._uU(8,"Fecha"),e.qZA(),e.TgZ(9,"table-filter",35,36),e.NdJ("dataChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addDate(i))}),e.qZA()(),e.TgZ(11,"div",37)(12,"span"),e._uU(13,"Cliente"),e.qZA(),e.TgZ(14,"table-filter",38,39),e.NdJ("dataChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addCustomer(i))}),e.qZA()(),e.TgZ(16,"div",33)(17,"span"),e._uU(18,"Moneda"),e.qZA(),e.TgZ(19,"table-filter",40,41),e.NdJ("dataChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addCurrencies(i))}),e.ALo(21,"async"),e.qZA()(),e.TgZ(22,"div",42),e._uU(23," Importe "),e.qZA(),e.TgZ(24,"div",33)(25,"span",34),e._uU(26,"Estado"),e.qZA(),e.TgZ(27,"table-filter",43,44),e.NdJ("dataChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addStatus(i))}),e.qZA()(),e.TgZ(29,"div",33)(30,"span",45),e._uU(31,"E.Pago"),e.qZA(),e.TgZ(32,"table-filter",43,46),e.NdJ("dataChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addPaymentStatus(i))}),e.qZA()(),e.TgZ(34,"div",47)(35,"span"),e._uU(36,"Acciones"),e.qZA(),e.YNc(37,Ko,3,0,"button",48),e.qZA()(),e.YNc(38,ra,2,0)(39,la,2,0),e._UZ(40,"mat-paginator",49),e.qZA()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(5),e.Q6J("mat-sort-header","billDate"),e.xp6(2),e.Q6J("filterType","date"),e.xp6(5),e.Q6J("filterType","filterEntity")("searchEntityControl",t.searchCustomersControl)("entitiesFiltered",t.customersFiltered),e.xp6(5),e.Q6J("filterType","multiSelectEntity")("entityPropertyName","iso")("useUpperCase",!0)("data",e.lcZ(21,26,t.currencies$)),e.xp6(3),e.Q6J("mat-sort-header","total"),e.xp6(3),e.Q6J("mat-sort-header","status"),e.xp6(2),e.Q6J("filterType","multiSelect")("data",e.DdM(28,ca)),e.xp6(3),e.Q6J("mat-sort-header","paymentStatus"),e.xp6(2),e.Q6J("filterType","multiSelect")("data",e.DdM(29,da)),e.xp6(2),e.Q6J("ngClass",e.VKq(30,ua,t.existTableFilter())),e.xp6(3),e.um2(37,t.existTableFilter()?37:-1),e.xp6(),e.um2(38,l.length>0?38:39),e.xp6(2),e.Q6J("ngClass",e.WLB(32,ma,t.isLoading,t.pagination.length<10&&t.pagination.page<1))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(35,pa))("showFirstLastButtons",!0)}}const _a=()=>["/modules/sales/prebilling"];let ha=(()=>{class s{constructor(){this.currencies$=(0,U.of)([]),this.filterInputControl=new a.NI,this.filterStatusInputControl=new a.NI(null),this.isLoading=!1,this.isSlideLoading=!1,this.maxDate=new Date,this.merchant=null,this.merchantLogo=null,this.prebills$=(0,U.of)([]),this.range=new a.cw({start:new a.NI({disabled:!1,value:null},[G.L.futureDateValidator()]),end:new a.NI({disabled:!1,value:null},[G.L.futureDateValidator()])}),this.searchCustomersControl=new a.NI(null),this.searchInputControl=new a.NI,this.selectedCurrenciesId=[],this.selectedCustomer=null,this.selectedDate=null,this.selectedPaymentStatus=[],this.selectedSlide=null,this.selectedStatus=[],this.user=null,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._documentsService=(0,e.f3M)(ve.S),this._fuseConfirmationService=(0,e.f3M)(se.R),this._prebillsService=(0,e.f3M)(Ft),this._snackBar=(0,e.f3M)($.ux),this._unsubscribeAll=new O.x,this._customersService=(0,e.f3M)(ye.v),this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.store.select(re.rk).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.currencies$=this.store.select(le.zd),this.store.select(ie.Qs).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.prebills$=this.store.select(Pe),this.store.select(me.B).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(300),(0,I.w)(t=>(this.isLoading=!0,this._prebillsService.getPrebills(0,25,"no","desc",t,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,R.U)(()=>{this.isLoading=!1})).subscribe(),this.filterInputControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(300),(0,I.w)(t=>(this.isLoading=!0,this._prebillsService.getPrebills(0,25,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,R.U)(()=>{this.isLoading=!1})).subscribe(),this.customersFiltered=this.searchCustomersControl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,oe.x)(()=>{this.isLoading=!1}),(0,V.z)(t=>null!==t&&"string"==typeof t&&(this.selectedCustomer&&t!==this.selectedCustomer.name||!this.selectedCustomer)?(this.isLoading=!0,this._customersService.findActiveCustomers(t.trim())):(0,U.of)())),this.range.valueChanges.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.billDateFilter.clearFilter(),this._prebillsService.getPrebills(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,null,t.start,t.end).pipe((0,g.R)(this._unsubscribeAll)).subscribe()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,ue.T)(this._sort.sortChange,this._paginator.page).pipe((0,I.w)(()=>(this.isLoading=!0,this._prebillsService.getPrebills(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,R.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,ce.lw)())}resetCustomer(){this.selectedCustomer=null,this.searchInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCustomer(t){this.selectedCustomer=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addDate(t){this.selectedDate=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCurrencies(t){this.selectedCurrenciesId=t.map(n=>n.id),this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addStatus(t){this.selectedStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addPaymentStatus(t){this.selectedPaymentStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}dispatchPrebill(t){this._fuseConfirmationService.open({title:"Despachar factura",message:"\xbfEsta seguro que desea despachar esta prefactura?.",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._prebillsService.dispatchPrebill(t).pipe((0,g.R)(this._unsubscribeAll),(0,oe.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:o})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.dispatchPrebill.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill"}})})})}generateBillFromPrebill(t){this._fuseConfirmationService.open({title:"Generar factura",message:"\xbfEsta seguro que desea generar esta factura?.",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,g.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._prebillsService.generateBillFromPrebill(t).pipe((0,g.R)(this._unsubscribeAll),(0,oe.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:o})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.generateBillFromPrebill.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}})})})}updatePrebillStatus(t,n=null,i=null){this._fuseConfirmationService.open({title:"Actualizar estado de la prefactura",message:"\xbfEsta seguro que desea actualizar esta prefactura?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this._prebillsService.updatePrebillStatus(t,n,i).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:c})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:c.updatePrebillStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}generatePrebillDocument(t){this._documentsService.generateBillDocument(t,Ue.prefactura,this.merchant,this.user)}existTableFilter(){return this.statusFilter?.hasFilter||this.billDateFilter?.hasFilter||this.currencyFilter?.hasFilter||this.customerFilter?.hasFilter||this.paymentStatusFilter?.hasFilter}clearTableFilters(){this.statusFilter?.hasFilter&&this.statusFilter.clearFilter(),this.billDateFilter?.hasFilter&&this.billDateFilter.clearFilter(),this.currencyFilter?.hasFilter&&this.currencyFilter.clearFilter(),this.customerFilter?.hasFilter&&this.customerFilter.clearFilter(),this.paymentStatusFilter?.hasFilter&&this.paymentStatusFilter.clearFilter()}_getBankAccountMC(t){return t.bankAccounts.find(i=>"CUP"===i.currency).no}_getBankAccountOM(t,n){return t.bankAccounts.find(i=>i.currency===n.currency.iso).no}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-prebills"]],viewQuery:function(n,i){if(1&n&&(e.Gf(Q.NW,5),e.Gf(P.YE,5),e.Gf($o,5),e.Gf(zo,5),e.Gf(Oo,5),e.Gf(Go,5),e.Gf(jo,5)),2&n){let o;e.iGM(o=e.CRH())&&(i._paginator=o.first),e.iGM(o=e.CRH())&&(i._sort=o.first),e.iGM(o=e.CRH())&&(i.billDateFilter=o.first),e.iGM(o=e.CRH())&&(i.customerFilter=o.first),e.iGM(o=e.CRH())&&(i.currencyFilter=o.first),e.iGM(o=e.CRH())&&(i.statusFilter=o.first),e.iGM(o=e.CRH())&&(i.paymentStatusFilter=o.first)}},standalone:!0,features:[e.jDz],decls:44,vars:22,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","flex-wrap","items-center","w-full","gap-2","mt-6","lg:fixed","right-8","shrink-0","lg:mt-0","lg:ml-4","lg:w-auto","sm:w-1/2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"sm:mx-4","min-w-64","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matPrefix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto"],[1,"z-10","flex","flex-col","flex-auto","bg-white","dark:bg-default"],["class","relative grid"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[1,"relative","grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","pre-bills-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"",3,"mat-sort-header"],[1,""],[1,"flex","items-center","justify-center"],[3,"mat-sort-header"],[3,"filterType","dataChange"],["billDateFilter",""],[1,"flex","items-center","justify-start"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange"],["customerFilter",""],[3,"filterType","entityPropertyName","useUpperCase","data","dataChange"],["currencyFilter",""],[1,"flex","justify-end",3,"mat-sort-header"],[3,"filterType","data","dataChange"],["statusFilter",""],["matTooltip","Estado del pago",3,"mat-sort-header"],["paymentStatusFilter",""],[1,"flex","items-center","justify-end","mr-10",3,"ngClass"],["color","warn","class","w-6 h-6 min-h-6 min-w-6","mat-icon-button","","matTooltip","Limpiar filtros"],[1,"border-b","first-letter:z-10","sm:inset-x-0","sm:sticky","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["color","warn","mat-icon-button","","matTooltip","Limpiar filtros",1,"w-6","h-6","min-h-6","min-w-6",3,"click"],[1,"material-icons","icon-size-4"],[1,"z-0","grid","items-center","gap-4","px-6","py-3","border-b","pre-bills-grid","md:px-8"],[1,"font-mono"],[1,"font-mono","text-center"],[1,"text-center"],[1,"font-mono","text-right"],[1,"flex","items-center","justify-center","mr-4","text-center","truncate","delay-100","rounded-full","h-7","lock","dark:bg-white","dark:bg-opacity-5",3,"ngClass"],[1,"w-full","px-2","text-sm","font-medium","text-center"],[1,"flex","flex-row","justify-end","gap-2"],["mat-stroked-button","","matTooltip","Imprimir Prefactura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Despachar Prefactura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["mat-stroked-button","","matTooltip","Generar factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["mat-stroked-button","","matTooltip","Actualizar estados",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"matMenuTriggerFor","disabled"],["listStatusMenu","matMenu"],[1,"w-full","p-2","text-lg","font-semibold","text-center","text-secondary"],["mat-menu-item","",1,"grid","w-full","grid-cols-4",3,"disabled","click"],[1,"col-span-1"],["class","icon-size-5",3,"svgIcon"],[1,"col-span-3","text-center"],["class","z-0 grid items-center gap-4 px-6 py-3 border-b pre-bills-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Facturaci\xf3n"),e.qZA()(),e.TgZ(15,"div",5),e._UZ(16,"mat-icon",6),e.TgZ(17,"a",7),e._uU(18,"Prefacturas"),e.qZA()()(),e.TgZ(19,"div",8)(20,"h2",9),e._uU(21," Registro de Prefacturas "),e.qZA()()(),e.TgZ(22,"div",10)(23,"mat-form-field",11),e._UZ(24,"mat-icon",12)(25,"input",13),e.qZA(),e.TgZ(26,"mat-form-field",14)(27,"mat-date-range-input",15),e._UZ(28,"input",16)(29,"input",17),e.qZA(),e._UZ(30,"mat-datepicker-toggle",18)(31,"mat-date-range-picker",19,20),e.YNc(33,Vo,1,0,"mat-icon",21)(34,Ho,2,0,"mat-error")(35,Yo,2,0,"mat-error"),e.qZA(),e.TgZ(36,"button",22),e._UZ(37,"mat-icon",23),e.TgZ(38,"span",24),e._uU(39,"Registrar"),e.qZA()()()(),e.TgZ(40,"div",25)(41,"div",26),e.YNc(42,ga,41,36,"div",27),e.ALo(43,"async"),e.qZA()()()),2&n){const o=e.MAs(32);let r;e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("formGroup",i.range)("rangePicker",o)("max",i.maxDate),e.xp6(3),e.Q6J("for",o),e.xp6(3),e.um2(33,i.range.get("start").value||i.range.get("end").value?33:-1),e.xp6(),e.um2(34,i.range.controls.start.hasError("matStartDateInvalid")?34:-1),e.xp6(),e.um2(35,i.range.controls.end.hasError("matEndDateInvalid")?35:-1),e.xp6(),e.Q6J("routerLink",e.DdM(21,_a)),e.xp6(),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(5),e.um2(42,(r=e.lcZ(43,19,i.prebills$))?42:-1,r)}},dependencies:[v.Ov,v.uU,v.JJ,be.H,A.ot,A.lW,A.RK,Z.FA,Z.nW,Z.wx,Z.zY,Z.By,Z._g,f.lN,f.KE,f.TO,f.qo,f.R9,D.Ps,D.Hw,w.c,w.Nt,N.Tx,N.VK,N.OP,N.p6,Q.TU,Q.NW,P.JX,P.YE,P.nU,X.AV,X.gM,v.mk,a.UX,a.Fj,a.JJ,a.JL,a.oH,a.sg,a.u,Y.rH,ze.q,v.gd],styles:[".pre-bills-grid{grid-template-columns:100px 100px 100px 250px 50px 100px 100px 100px 170px}@media (min-width: 960px){.pre-bills-grid{grid-template-columns:100px 100px 80px 250px 50px 100px 100px 100px 170px}}@media (min-width: 1280px){.pre-bills-grid{grid-template-columns:10% 100px 80px auto 50px 10% 10% 10% 170px}}\n"],encapsulation:2,changeDetection:0})}return s})();var fa=p(62349),kt=p(36028),Te=p(22557),ba=p(83829),xa=p(84384),Ca=p(58695),ya=p(9573),wt=p(43810),va=p(82824),Za=p(62637);function Aa(s,l){1&s&&(e.TgZ(0,"h2",6),e._uU(1,"Agregar Terminal"),e.qZA())}function Ta(s,l){1&s&&(e.TgZ(0,"h2",6),e._uU(1,"Editar terminal "),e.qZA())}function Ia(s,l){1&s&&(e.TgZ(0,"h2",6),e._uU(1,"Detalles de la terminal "),e.qZA())}function Sa(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El nombre es requerido "),e.qZA())}function qa(s,l){if(1&s&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function Fa(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," La marca es requerida "),e.qZA())}function ka(s,l){if(1&s&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function wa(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El almac\xe9n de venta es obligatorio "),e.qZA())}function Ua(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El modelo es requerido "),e.qZA())}function Da(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero de serie es requerido "),e.qZA())}function Pa(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El PIN debe tener 4 d\xedgitos "),e.qZA())}function Na(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El PIN debe tener 4 d\xedgitos "),e.qZA())}function Ba(s,l){if(1&s&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function Ja(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-chip",24),e.NdJ("removed",function(){const o=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.removeEmployee(o))}),e._uU(1),e._UZ(2,"mat-icon",25),e.qZA()}if(2&s){const t=l.$implicit;e.Q6J("removable",!0),e.xp6(),e.hij(" ",t.fullname," "),e.xp6(),e.Q6J("svgIcon","mat_solid:cancel")}}function Ra(s,l){if(1&s&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.fullname," ")}}function Ma(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El empleado es requerido "),e.qZA())}function Ea(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"form",9)(3,"mat-form-field",10)(4,"mat-label"),e._uU(5,"Nombre del terminal"),e.qZA(),e._UZ(6,"input",11),e.YNc(7,Sa,2,0,"mat-error"),e.qZA(),e.TgZ(8,"mat-form-field",10)(9,"mat-label"),e._uU(10,"Marca"),e.qZA(),e.TgZ(11,"mat-select",12),e.SjG(12,qa,2,2,"mat-option",23,e.x6l),e.TgZ(14,"mat-option",13),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createBrand())}),e._uU(15," Agregar marca "),e.qZA()(),e.YNc(16,Fa,2,0,"mat-error"),e.qZA(),e.TgZ(17,"mat-form-field",10)(18,"mat-label"),e._uU(19,"Almac\xe9n de venta"),e.qZA(),e.TgZ(20,"mat-select",12),e.SjG(21,ka,2,2,"mat-option",23,e.x6l),e.qZA(),e.YNc(23,wa,2,0,"mat-error"),e.qZA(),e.TgZ(24,"mat-form-field",10)(25,"mat-label"),e._uU(26,"Modelo"),e.qZA(),e._UZ(27,"input",14),e.YNc(28,Ua,2,0,"mat-error"),e.qZA(),e.TgZ(29,"mat-form-field",10)(30,"mat-label"),e._uU(31,"N\xfamero de serie"),e.qZA(),e._UZ(32,"input",14),e.YNc(33,Da,2,0,"mat-error"),e.qZA(),e.TgZ(34,"mat-form-field",10)(35,"mat-label"),e._uU(36,"PIN"),e.qZA(),e._UZ(37,"input",15),e.YNc(38,Pa,2,0,"mat-error")(39,Na,2,0,"mat-error"),e.TgZ(40,"mat-hint"),e._uU(41,"Solo 4 d\xedgitos"),e.qZA()(),e.TgZ(42,"div")(43,"mat-form-field",10)(44,"mat-label"),e._uU(45,"Ubicaci\xf3n"),e.qZA(),e.TgZ(46,"mat-select",12),e.SjG(47,Ba,2,2,"mat-option",23,e.x6l),e.ALo(49,"async"),e.qZA()()(),e.TgZ(50,"mat-form-field",16)(51,"mat-label"),e._uU(52,"Asignar a:"),e.qZA(),e.TgZ(53,"mat-chip-grid",17,18),e.SjG(55,Ja,3,3,"mat-chip",26,e.x6l),e._UZ(57,"input",19,20),e.qZA(),e.TgZ(59,"mat-autocomplete",21,22),e.NdJ("optionSelected",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addEmployee(i.option.value))}),e.SjG(61,Ra,2,2,"mat-option",23,e.x6l),e.ALo(63,"async"),e.qZA(),e.YNc(64,Ma,2,0,"mat-error"),e.qZA()()()()}if(2&s){const t=e.MAs(54),n=e.MAs(60),i=e.oxw();e.xp6(2),e.Q6J("formGroup",i.terminalForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","name")("placeholder","Ejemplo: Caja 1"),e.xp6(),e.um2(7,i.terminalForm.controls.name.hasError("required")?7:-1),e.xp6(4),e.Q6J("formControlName","brandId")("required",!0),e.xp6(),e.wJu(i.brands),e.xp6(4),e.um2(16,i.terminalForm.controls.brandId.hasError("required")?16:-1),e.xp6(4),e.Q6J("formControlName","depotId")("required",!0),e.xp6(),e.wJu(i.depots),e.xp6(2),e.um2(23,i.terminalForm.controls.depotId.hasError("required")?23:-1),e.xp6(4),e.Q6J("formControlName","model")("placeholder","Modelo del terminal"),e.xp6(),e.um2(28,i.terminalForm.controls.model.hasError("required")?28:-1),e.xp6(4),e.Q6J("formControlName","sn")("placeholder","Serie del terminal"),e.xp6(),e.um2(33,i.terminalForm.controls.sn.hasError("required")?33:-1),e.xp6(4),e.Q6J("formControlName","pin")("placeholder","0000"),e.xp6(),e.um2(38,i.terminalForm.controls.pin.hasError("minlength")?38:-1),e.xp6(),e.um2(39,i.terminalForm.controls.pin.hasError("max")?39:-1),e.xp6(7),e.Q6J("formControlName","locationId")("required",!0),e.xp6(),e.wJu(e.lcZ(49,32,i.locations$)),e.xp6(6),e.Q6J("required",!0),e.xp6(2),e.wJu(i.terminalForm.get("employeesId").value),e.xp6(2),e.Q6J("formControl",i.employeeCtrl)("matAutocomplete",n)("placeholder","Buscar empleado")("matChipInputFor",t)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes)("matChipInputAddOnBlur",!0),e.xp6(2),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(63,34,i.filteredEmployees$)),e.xp6(3),e.um2(64,i.terminalForm.controls.employeesId.hasError("required")?64:-1)}}const Ut=s=>({"cursor-not-allowed":s});function Qa(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.updateTerminal())}),e._uU(1," Actualizar "),e.qZA()}if(2&s){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.terminalForm.invalid)("ngClass",e.VKq(3,Ut,t.terminalForm.invalid))}}function La(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createTerminal())}),e._uU(1," Agregar "),e.qZA()}if(2&s){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.terminalForm.invalid)("ngClass",e.VKq(3,Ut,t.terminalForm.invalid))}}function $a(s,l){if(1&s&&(e.TgZ(0,"div",27)(1,"button",28),e._uU(2," Cancelar "),e.qZA(),e.YNc(3,Qa,2,5,"button",29)(4,La,2,5,"button",29),e.qZA()),2&s){const t=e.oxw();e.xp6(),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.um2(3,"edit"===t.data.dialogMode?3:-1),e.xp6(),e.um2(4,"add"===t.data.dialogMode?4:-1)}}let za=(()=>{class s{constructor(t){this.data=t,this.depots=[],this.dialogMode="view",this.employeeCtrl=new a.NI,this.employees$=(0,U.of)([]),this.filteredEmployees$=(0,U.of)([]),this.locations$=(0,U.of)([]),this.separatorKeysCodes=[kt.K5,kt.OC],this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialog=(0,e.f3M)(F.uw),this._dialogRef=(0,e.f3M)(F.so),this._employeesService=(0,e.f3M)(Za.M),this._formBuilder=(0,e.f3M)(a.qu),this._fuseConfirmationService=(0,e.f3M)(se.R),this._snackBar=(0,e.f3M)($.ux),this._terminalsService=(0,e.f3M)(wt.B),this._unsubscribeAll=new O.x,this.store=(0,e.f3M)(k.yh),this.dialogMode=t.dialogMode,this.terminal=t.terminal}ngOnInit(){this.terminalForm=this._formBuilder.group({id:new a.NI(null),brandId:new a.NI(null,[a.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),depotId:new a.NI(null,[a.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),model:new a.NI(null,[a.kI.minLength(1),a.kI.maxLength(255)]),sn:new a.NI(null,[a.kI.minLength(1),a.kI.maxLength(255)]),pin:new a.NI(null,[a.kI.minLength(4),a.kI.maxLength(4)]),locationId:new a.NI(null,[a.kI.maxLength(255)]),name:new a.NI(null,[a.kI.required,a.kI.maxLength(100)]),employeesId:new a.NI([])}),"edit"===this.dialogMode&&(this.terminalForm.patchValue(this.terminal),this.terminalForm.get("employeesId").setValue(structuredClone(this.terminal.employees))),this.store.select(ba.gg).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.brands=t,this._changeDetectorRef.markForCheck()}),this.store.select(Ca.$I).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.depots=t,this._changeDetectorRef.markForCheck()}),this.locations$=this.store.select(xa.Yu),this.employees$=this.store.select(Le.ri),this.filteredEmployees$=this.employeeCtrl.valueChanges.pipe((0,J.b)(200),(0,z.O)(null),(0,V.z)(t=>{const n=this.terminalForm.get("employeesId").value;return n?null!==t&&"string"==typeof t?this._employeesService.findActiveEmployees(t.trim()).pipe((0,R.U)(o=>o.filter(r=>!n.some(c=>c.id===r.id)))):this.employees$.pipe((0,R.U)(i=>i.filter(o=>!n.some(r=>r.id===o.id)))):this.employees$}))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addEmployee(t){const n=this.terminalForm.get("employeesId").value;n.push({id:t.id,fullname:t.fullname}),this.terminalForm.get("employeesId").setValue(n),this.employeeCtrl.setValue(null)}removeEmployee(t){const n=this.terminalForm.get("employeesId").value,i=n.indexOf(t);i>=0&&n.splice(i,1)}closeDialog(){this._dialogRef.close()}createTerminal(){const t=this.terminalForm.getRawValue();delete t.id,t.employeesId=t.employeesId.map(i=>i.id),this._fuseConfirmationService.open({title:"Crear Terminal",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,g.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._terminalsService.createTerminal(t).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:o})=>{o&&(this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e3,data:{message:o.createTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._dialogRef.close())})})}updateTerminal(){const t=this.terminalForm.getRawValue();t.employeesId=t.employeesId.map(i=>i.id),this._fuseConfirmationService.open({title:"Actualizar Terminal",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._terminalsService.updateTerminal(t).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:o})=>{o&&(this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e3,data:{message:o.updateTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._dialogRef.close())})})}createBrand(){this._dialog.open(ya.C,{data:{brand:new va.H,dialogMode:"add"},panelClass:"ath-dialog-panel",disableClose:!0})}displayFn(t){return t&&t.fullname?t.fullname:""}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(F.WI))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-terminal-dialog"]],standalone:!0,features:[e.jDz],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","h-full","max-h-screen"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"w-full","overflow-hidden"],[1,"flex"],[1,"grid","w-full","gap-4","pt-4","mt-4","border-t","sm:grid-cols-2",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","","type","text","maxlength","100",3,"formControlName","placeholder"],[3,"formControlName","required"],[3,"click"],["matInput","","type","text","maxlength","250",3,"formControlName","placeholder"],["matInput","","type","number","minlength","4","max","9999",3,"formControlName","placeholder"],[1,"w-full","fuse-mat-dense","sm:col-span-2"],[3,"required"],["chipGrid",""],["matInput","",3,"formControl","matAutocomplete","placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["employeeInput",""],[3,"displayWith","optionSelected"],["auto","matAutocomplete"],[3,"value"],[3,"removable","removed"],["matChipRemove","",3,"svgIcon"],[3,"removable"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","ngClass"],["mat-flat-button","",3,"color","disabled","ngClass","click"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Aa,2,0,"h2",2)(3,Ta,2,0,"h2",2)(4,Ia,2,0,"h2",2),e.qZA(),e.TgZ(5,"div",3),e.YNc(6,Ea,65,36,"div",4),e.qZA(),e.YNc(7,$a,5,3,"div",5),e.qZA()),2&n&&(e.xp6(2),e.um2(2,"add"===i.data.dialogMode?2:-1),e.xp6(),e.um2(3,i.data.terminal.id&&"edit"===i.data.dialogMode?3:-1),e.xp6(),e.um2(4,i.data.terminal.id&&"view"===i.data.dialogMode?4:-1),e.xp6(2),e.um2(6,6),e.xp6(),e.um2(7,"view"!==i.data.dialogMode?7:-1))},dependencies:[v.Ov,W.Bb,W.XC,he.ey,W.ZL,A.ot,A.lW,Te.Hi,Te.HS,Te.RA,Te.oH,Te.qH,F.Is,F.ZT,f.lN,f.KE,f.hX,f.bx,f.TO,D.Ps,D.Hw,w.c,w.Nt,j.LD,j.gD,v.mk,a.UX,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.Q7,a.wO,a.nD,a.Fd,a.oH,a.sg,a.u],encapsulation:2,changeDetection:0})}return s})();class Oa{}function Ga(s,l){if(1&s&&(e.TgZ(0,"span",33),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.xp6(),e.hij(" ",t.fullname," ")}}function ja(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-slide-toggle",34),e.NdJ("change",function(i){e.CHM(t);const o=e.oxw(),r=o.$implicit,c=o.$index,d=e.oxw(4);return e.KtG(d.updateTerminalStatus(i,r,c))}),e.qZA()}if(2&s){const t=e.oxw().$implicit;e.Q6J("checked",t.active)("color","primary")}}function Va(s,l){1&s&&e._UZ(0,"mat-spinner",29),2&s&&e.Q6J("diameter",20)("color","primary")}function Ha(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",24)(1,"div",25),e._uU(2),e.qZA(),e.TgZ(3,"div",25),e._uU(4),e.qZA(),e.TgZ(5,"div",26),e.SjG(6,Ga,2,1,"span",35,e.x6l),e.qZA(),e.TgZ(8,"div",25),e._uU(9),e.qZA(),e.TgZ(10,"div",27),e.YNc(11,ja,1,2,"mat-slide-toggle",28)(12,Va,1,2,"mat-spinner",29),e.qZA(),e.TgZ(13,"div",30)(14,"button",31),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(4);return e.KtG(r.updateTerminal(o))}),e._UZ(15,"mat-icon",32),e.qZA(),e.TgZ(16,"button",31),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(4);return e.KtG(r.deleteTerminal(o))}),e._UZ(17,"mat-icon",32),e.qZA()()()}if(2&s){const t=l.$implicit,n=l.$index,i=e.oxw(4);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.wJu(t.employees),e.xp6(3),e.hij(" ",t.brand.name," "),e.xp6(2),e.um2(11,i.isSlideLoading&&i.selectedSlide===n?-1:11),e.xp6(),e.um2(12,i.isSlideLoading&&i.selectedSlide===n?12:-1),e.xp6(3),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}function Ya(s,l){1&s&&e.SjG(0,Ha,18,7,"div",36,e.QCX().trackByFn),2&s&&e.wJu(l)}const Ka=s=>({"pointer-events-none":s}),Wa=()=>[5,10,25,100];function Xa(s,l){if(1&s&&(e.TgZ(0,"div",19)(1,"div",20)(2,"div",21),e._uU(3,"No."),e.qZA(),e.TgZ(4,"div",22),e._uU(5," Nombre "),e.qZA(),e.TgZ(6,"div",22),e._uU(7," Asignado a "),e.qZA(),e.TgZ(8,"div",22),e._uU(9," Marca "),e.qZA(),e.TgZ(10,"div",22),e._uU(11," Activo "),e.qZA(),e.TgZ(12,"div",22),e._uU(13," Detalles "),e.qZA()(),e.YNc(14,Ya,2,0),e.ALo(15,"async"),e.qZA(),e._UZ(16,"mat-paginator",23)),2&s){const t=e.oxw(2);let n;e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(12),e.um2(14,(n=e.lcZ(15,8,t.terminals$))?14:-1,n),e.xp6(2),e.Q6J("ngClass",e.VKq(10,Ka,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(12,Wa))("showFirstLastButtons",!0)}}function er(s,l){1&s&&(e.TgZ(0,"div",37),e._uU(1,"\xa1No se ha creado ninguna terminal!"),e.qZA())}function tr(s,l){1&s&&e.YNc(0,Xa,17,13)(1,er,2,0),2&s&&e.um2(0,l.length>0?0:1)}let ir=(()=>{class s{constructor(){this.flashMessage=null,this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.merchantInputControl=new a.NI,this.searchInputControl=new a.NI,this.selectedSlide=null,this.terminals=[],this.terminals$=(0,U.of)([]),this.user=null,this._unsubscribeAll=new O.x,this._terminalsService=(0,e.f3M)(wt.B),this._fuseConfirmationService=(0,e.f3M)(se.R),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialog=(0,e.f3M)(F.uw),this._snackBar=(0,e.f3M)($.ux),this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.store.select(re.rk).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(ie.Qs).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.terminals$=this.store.select(fa.$Q),this.terminals$.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.terminals=t,this._changeDetectorRef.markForCheck()}),this.store.select(me.B).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(300),(0,I.w)(t=>(this.isLoading=!0,this._terminalsService.getTerminals(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,R.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,ue.T)(this._sort.sortChange,this._paginator.page).pipe((0,I.w)(()=>(this.isLoading=!0,this._terminalsService.getTerminals(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,R.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createTerminal(){this._openDialog(new Oa,"add")}updateTerminal(t){this._openDialog(t,"edit")}updateTerminalStatus(t,n,i){this.isSlideLoading=!0,this.selectedSlide=i,this._terminalsService.updateTerminalStatus({id:n.id,active:t.checked}).subscribe(({data:o})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.updateTerminalStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}deleteTerminal(t){this._fuseConfirmationService.open({title:"Eliminar terminal",message:`\xbfEst\xe1s seguro de que deseas eliminar la terminal ${t.no}? Esta acci\xf3n no se puede deshacer.`,actions:{confirm:{label:"Eliminar",color:"warn"}}}).afterClosed().pipe((0,g.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._terminalsService.removeTerminal(t.id).subscribe(({data:o})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.removeTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}trackByFn(t,n){return t||n.id}_openDialog(t,n){this._dialog.open(za,{data:{terminal:t,dialogMode:n},panelClass:"ath-dialog-panel",disableClose:!0})}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-terminals"]],viewQuery:function(n,i){if(1&n&&(e.Gf(Q.NW,5),e.Gf(P.YE,5)),2&n){let o;e.iGM(o=e.CRH())&&(i._paginator=o.first),e.iGM(o=e.CRH())&&(i._sort=o.first)}},standalone:!0,features:[e.jDz],decls:30,vars:11,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-auto"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","terminals-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[3,"mat-sort-header"],[1,""],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","terminals-grid","md:px-8"],[1,"truncate"],[1,"flex","flex-wrap","gap-1"],[1,"hidden","lg:block"],[3,"checked","color"],[3,"diameter","color"],[1,"flex","flex-row","items-center","justify-center","gap-1"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"px-2","rounded-md","bg-hover"],[3,"checked","color","change"],["class","px-2 rounded-md bg-hover"],["class","grid items-center gap-4 px-6 py-3 border-b terminals-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Terminales"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Terminales "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e.NdJ("click",function(){return i.createTerminal()}),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Agregar"),e.qZA()()()(),e.TgZ(26,"div",17)(27,"div",18),e.YNc(28,tr,2,1),e.ALo(29,"async"),e.qZA()()()),2&n){let o;e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.xp6(2),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.um2(28,(o=e.lcZ(29,9,i.terminals$))?28:-1,o)}},dependencies:[v.Ov,A.ot,A.lW,f.lN,f.KE,f.qo,D.Ps,D.Hw,w.c,w.Nt,Q.TU,Q.NW,K.Cq,K.Ou,Se.rP,Se.Rr,P.JX,P.YE,P.nU,v.mk,a.UX,a.Fj,a.JJ,a.oH],encapsulation:2,changeDetection:0})}return s})();var je=p(53308),de=p(9427),Ve=p(31451);const He=(s,l)=>(0,e.f3M)(qe).getAssistancesActive();var or=p(7604),Ye=p(2019),Dt=p(52759),Pt=p(6514);let lr=(()=>{class s{constructor(t){this._salesDashboardStatsService=t}resolve(t,n){const i=new Date((new Date).getTime()-6048e5);return this._salesDashboardStatsService.getSalesDashboardStatsData(i,new Date)}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(Ct))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var cr=p(85199),dr=p(23605),Nt=p(15861);const mr=(0,k.P1)(s=>s.sales,s=>s.sales);var Ke=p(94748),We=p(76676);function gr(s,l){1&s&&(e.TgZ(0,"mat-error",34),e._uU(1," Valor m\xednimo 0 "),e.qZA())}function _r(s,l){if(1&s&&(e.TgZ(0,"mat-error",34),e._uU(1),e.qZA()),2&s){const t=e.oxw().$implicit;e.xp6(),e.hij(" Valor m\xe1ximo ",t.quantityPreviews," ")}}function hr(s,l){1&s&&(e.TgZ(0,"mat-error",34),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}function fr(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",24)(1,"div",25),e._uU(2),e.qZA(),e.TgZ(3,"div",26)(4,"div",27)(5,"button",28),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.decrementProductQty(o))}),e._UZ(6,"mat-icon",29),e.qZA(),e.TgZ(7,"mat-form-field",30)(8,"span",31),e._uU(9),e.qZA(),e._UZ(10,"input",32),e.qZA(),e.TgZ(11,"button",28),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.incrementProductQty(o))}),e._UZ(12,"mat-icon",29),e.qZA()(),e.YNc(13,gr,2,0,"mat-error",33)(14,_r,2,1,"mat-error",33)(15,hr,2,0,"mat-error",33),e.qZA()()}if(2&s){const t=l.$implicit;e.xp6(),e.Q6J("matTooltip",t.get("name").value),e.xp6(),e.hij(" ",t.get("name").value," "),e.xp6(3),e.Q6J("disabled",t.get("quantity").value<=0||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(2),e.Oqu(t.get("uom").value),e.xp6(),e.Q6J("min",0)("max",t.get("quantityPreviews").value)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").value>=t.get("quantityPreviews").value||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(13,t.get("quantity").hasError("min")?13:-1),e.xp6(),e.um2(14,t.get("quantity").hasError("max")?14:-1),e.xp6(),e.um2(15,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?15:-1)}}function br(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," EL motivo del rechazo es obligatorio "),e.qZA())}function xr(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," EL motivo del rechazo debe contener entre 3 y 200 caracteres. "),e.qZA())}function Cr(s,l){1&s&&(e.TgZ(0,"span"),e._uU(1," Aceptar "),e.qZA())}function yr(s,l){1&s&&e._UZ(0,"mat-progress-spinner",23),2&s&&e.Q6J("diameter",24)("mode","indeterminate")}const vr=s=>({"cursor-not-allowed":s});let Zr=(()=>{class s{constructor(t){this.data=t,this.isLoading=!1,this.sale=null,this.totalAmount=0,this.checkOutControl=new a.NI(!0),this.salesProducts=[],this.products=[],this.receipts=[],this._changeDetectorRef=(0,e.f3M)(e.sBO),this._salesService=(0,e.f3M)(We.M),this._dialogRef=(0,e.f3M)(F.so),this._formBuilder=(0,e.f3M)(a.qu),this._snackBar=(0,e.f3M)($.ux),this._unsubscribeAll=new O.x,this.sale=t,this.products=this.sale.products.map(o=>({...o,type:"product"})),[...t.returns].map(o=>o.products).flat().forEach(o=>{const r=this.products.find(c=>c.productId===o.productId);r&&(r.quantity=r.quantity-o.quantity)}),this.salesProducts=[...this.products],this.receipts=this.sale.receipts.map(o=>({...o,type:"receipt"})),[...t.returns].map(o=>o.receipts).flat().forEach(o=>{const r=this.receipts.find(c=>c.productId===o.productId);r&&(r.quantity=r.quantity-o.quantity)}),this.products.push(...this.receipts),this.totalAmount=this.sale.products.reduce((o,r)=>o+r.quantity*r.price,0)}ngOnInit(){const t=this.salesProducts.map(i=>this.createProductFormGroup(i)),n=this.receipts.map(i=>this.createReceiptsFormGroup(i));t.push(...n),this.returnForm=this._formBuilder.group({saleId:[this.sale.id],products:new a.Oe(t),reason:["",[a.kI.required,a.kI.maxLength(1e3)]]}),this.returnForm.get("products").valueChanges.pipe((0,g.R)(this._unsubscribeAll)).subscribe(i=>{this.totalAmount=i.reduce((o,r)=>o+Number(r.quantity)*r.price,0),this._changeDetectorRef.markForCheck()}),this.checkOutControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll)).subscribe(i=>{i?(this.returnForm.get("products").controls.forEach((o,r)=>{const c=this.products.findIndex(d=>d.productId===o.get("productId").value);o.get("quantity").setValue(this.products[c].quantity)}),this.products=this.returnForm.get("products").getRawValue()):(this.products=this.returnForm.get("products").getRawValue(),this.returnForm.get("products").controls.forEach((o,r)=>{o.get("quantity").setValue(0)}))})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}returnSale(t){if("Enter"===t.key&&t.target instanceof HTMLTextAreaElement||this.returnForm.invalid)return;const n=this.returnForm.getRawValue();if(!n.products.some(d=>d.quantity>0))return;const o=n.products.filter(d=>d.quantity>0&&"product"===d.type).map(d=>({productId:d.productId,quantity:Number(d.quantity),price:d.price})),r=n.products.filter(d=>d.quantity>0&&"receipt"===d.type).map(d=>({productId:d.productId,quantity:Number(d.quantity),price:d.price}));this._salesService.returnSale({saleId:n.saleId,reason:n.reason,products:o,receipts:r}).pipe((0,g.R)(this._unsubscribeAll),(0,oe.x)(()=>{this.isLoading=!1,this._changeDetectorRef.markForCheck()})).subscribe(({data:d})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:d.returnSale.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck(),this.closeDialog()})}incrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(Number(n)+1);const i=this.products.findIndex(o=>o.productId===t.get("productId").value);this.products[i].quantity=Number(n)+1}decrementProductQty(t){const n=t.get("quantity").value;t.get("quantity").setValue(Number(n)-1);const i=this.products.findIndex(o=>o.productId===t.get("productId").value);this.products[i].quantity=Number(n)-1}closeDialog(){this._dialogRef.close()}trackByFn(t,n){return n.productId||t}createProductFormGroup(t){return this._formBuilder.group({productId:[t.productId,[a.kI.required]],name:[t.product.name],quantityPreviews:[t.quantity],quantity:[t.quantity,[G.L.onlyNumbersPattern(),a.kI.required,a.kI.min(0),a.kI.max(t.quantity)]],price:[t.price,[a.kI.required]],uom:[t.product.uom.abbr],type:["product"]})}createReceiptsFormGroup(t){return this._formBuilder.group({productId:[t.productId,[a.kI.required]],name:[t.receipt.name],quantityPreviews:[t.quantity],quantity:[t.quantity,[G.L.onlyNumbersPattern(),a.kI.required,a.kI.min(0),a.kI.max(t.quantity)]],price:[t.price,[a.kI.required]],uom:[t.receipt.uom.abbr],type:["receipt"]})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(F.WI))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sale-return-dialog"]],standalone:!0,features:[e.jDz],decls:38,vars:22,consts:[[1,"h-full","ng-star-inserted",3,"keydown.enter"],[1,"relative","flex","flex-col","w-full","h-full"],[1,"flex","items-center","h-full"],[1,"block","w-full"],[1,"flex","flex-col","items-center","flex-auto","p-8","pb-4","sm:flex-row","sm:items-start","sm:pb-6"],[1,"flex","flex-col","items-center","mt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left","ng-star-inserted"],[1,"text-xl","font-medium","leading-6","ng-star-inserted"],[1,"text-secondary","ng-star-inserted"],[1,"flex","flex-col","gap-6","pb-6","pl-8","pr-8","mt-10","sm:mt-0","sm:pl-22",3,"formGroup","autocomplete"],[1,"flex","flex-col"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","grid-cols-2","gap-4","pr-6","pl-2","py-2","font-semibold","shadow","md:pr-8","md:pl-3","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["color","primary",3,"formControl"],[1,"font-medium"],[1,"flex","items-center","justify-end","mr-9","h-full"],[1,"overflow-auto","border-b",2,"max-height","40vh"],[1,"w-full","mat-fuse-dense","fuse-mat-textarea"],["matPrefix","","svgIcon","mat_solid:subject",1,"hidden","sm:flex","icon-size-5"],["matInput","",3,"formControlName","placeholder","minLength","maxLength","required"],["refundT",""],[1,"text-right"],[1,"flex","flex-wrap","justify-center","px-6","py-4","space-x-3","tems-center","bg-gray-50","dark:bg-black","dark:bg-opacity-10","ng-star-inserted"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","","mat-button","",3,"color","disabled","ngClass","click"],[3,"diameter","mode"],[1,"flex","items-center","justify-between","border-t","py-2","pr-3"],[1,"truncate",3,"matTooltip"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded","max-w-22",3,"subscriptSizing"],["matSuffix",""],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"w-full","text-sm","text-center"],["class","flex items-center justify-between border-t py-2 pr-3"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0),e.NdJ("keydown.enter",function(r){return i.returnSale(r)}),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e._uU(7,"Devoluci\xf3n"),e.qZA(),e.TgZ(8,"div",7),e._uU(9),e.qZA()()(),e.TgZ(10,"form",8)(11,"div",9)(12,"div",10)(13,"mat-checkbox",11)(14,"span",12),e._uU(15,"Productos*"),e.qZA()(),e.TgZ(16,"div",13)(17,"span"),e._uU(18,"Cantidades"),e.qZA()()(),e.TgZ(19,"div",14),e.SjG(20,fr,16,14,"div",35,i.trackByFn),e.qZA()(),e.TgZ(22,"mat-form-field",15)(23,"mat-label"),e._uU(24,"Motivo"),e.qZA(),e._UZ(25,"mat-icon",16)(26,"textarea",17,18),e.TgZ(28,"mat-hint",19),e._uU(29),e.qZA(),e.YNc(30,br,2,0,"mat-error")(31,xr,2,0,"mat-error"),e.qZA()()()(),e.TgZ(32,"div",20)(33,"button",21),e._uU(34,"Cancelar"),e.qZA(),e.TgZ(35,"button",22),e.NdJ("click",function(r){return i.returnSale(r)}),e.YNc(36,Cr,2,0,"span")(37,yr,1,2,"mat-progress-spinner",23),e.qZA()()()()),2&n){const o=e.MAs(27);e.xp6(9),e.AsE("\xbfEsta seguro que desea efectuar la devoluci\xf3n de las cantidades de la venta # ",i.sale.no," por $",i.totalAmount," ? "),e.xp6(),e.Q6J("formGroup",i.returnForm)("autocomplete","off"),e.xp6(3),e.Q6J("formControl",i.checkOutControl),e.xp6(7),e.wJu(i.returnForm.get("products").controls),e.xp6(6),e.Q6J("formControlName","reason")("placeholder","Escriba el motivo del rechazo")("minLength",3)("maxLength",200)("required",!0),e.xp6(3),e.hij("Total de caracteres ",o.value.length," / 1000"),e.xp6(),e.um2(30,i.returnForm.get("reason").hasError("required")?30:-1),e.xp6(),e.um2(31,i.returnForm.get("reason").hasError("maxlength")||i.returnForm.get("reason").hasError("minlength")?31:-1),e.xp6(2),e.Q6J("matDialogClose",!0),e.xp6(2),e.Q6J("color","primary")("disabled",i.returnForm.invalid)("ngClass",e.VKq(20,vr,i.returnForm.invalid||i.isLoading))("disabled",i.returnForm.invalid||i.isLoading),e.xp6(),e.um2(36,i.isLoading?-1:36),e.xp6(),e.um2(37,i.isLoading?37:-1)}},dependencies:[A.ot,A.lW,ne.p9,ne.oG,F.Is,F.ZT,f.lN,f.KE,f.hX,f.bx,f.TO,f.qo,f.R9,D.Ps,D.Hw,w.c,w.Nt,K.Cq,K.Ou,X.AV,X.gM,v.mk,a.UX,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.oH,a.sg,a.u],encapsulation:2,changeDetection:0})}return s})();function Ar(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El motivo es obligatorio "),e.qZA())}function Tr(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," El motivo debe contener entre 3 y 1000 caracteres. "),e.qZA())}const Ir=s=>({"cursor-not-allowed":s});let Sr=(()=>{class s{constructor(t,n){this.data=t,this._dialogRef=n,this.reasonControl=new a.NI("")}ngOnInit(){this.reasonControl.setValidators([a.kI.required,a.kI.minLength(3),a.kI.maxLength(1e3)])}accept(){this._dialogRef.close({reason:this.reasonControl.value})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(F.WI),e.Y36(F.so))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-cancel-dialog"]],standalone:!0,features:[e.jDz],decls:25,vars:15,consts:[[1,"ng-star-inserted","h-full"],[1,"relative","flex","flex-col","w-full","h-full"],[1,"h-full","flex","items-center"],[1,"block","w-full"],[1,"flex","flex-col","sm:flex-row","flex-auto","items-center","sm:items-start","p-8","pb-4","sm:pb-6"],[1,"flex","flex-0","items-center","justify-center","w-10","h-10","sm:mr-4","rounded-full","text-blue-600","bg-blue-100","dark:bg-blue-300","ng-star-inserted"],["svgIcon","mat_solid:question_mark",1,"text-blue-600"],[1,"text-xl","font-medium","leading-6","ng-star-inserted"],[1,"text-sm","text-secondary","ng-star-inserted"],[1,"pr-8","pl-8","mt-10","sm:mt-0","sm:pl-22","pb-6",3,"autocomplete"],[1,"w-full","fuse-mat-textarea",3,"subscriptSizing"],["matPrefix","","svgIcon","mat_solid:edit_note",1,"hidden","sm:flex","icon-size-5"],["matInput","","required","",3,"formControl","placeholder"],[1,"flex","flex-wrap","tems-center","justify-center","md:justify-end","px-6","py-4","space-x-3","bg-gray-50","dark:bg-black","dark:bg-opacity-10","ng-star-inserted"],["mat-button","",3,"color","matDialogClose"],["mat-flat-button","","mat-button","",3,"color","disabled","ngClass","click"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"mat-icon",6),e.qZA(),e.TgZ(7,"div")(8,"div",7),e._uU(9),e.qZA(),e.TgZ(10,"div",8),e._uU(11),e.qZA()()(),e.TgZ(12,"form",9)(13,"mat-form-field",10)(14,"mat-label"),e._uU(15,"Motivo"),e.qZA(),e._UZ(16,"mat-icon",11)(17,"textarea",12),e.YNc(18,Ar,2,0,"mat-error")(19,Tr,2,0,"mat-error"),e.qZA()()()(),e.TgZ(20,"div",13)(21,"button",14),e._uU(22,"Cancelar"),e.qZA(),e.TgZ(23,"button",15),e.NdJ("click",function(){return i.accept()}),e._uU(24," Aceptar "),e.qZA()()()()),2&n&&(e.xp6(9),e.Oqu(i.data.title),e.xp6(2),e.Oqu(i.data.message),e.xp6(),e.Q6J("autocomplete","off"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(4),e.Q6J("formControl",i.reasonControl)("placeholder","Escriba el motivo"),e.xp6(),e.um2(18,i.reasonControl.hasError("required")?18:-1),e.xp6(),e.um2(19,i.reasonControl.hasError("maxlength")||i.reasonControl.hasError("minlength")?19:-1),e.xp6(2),e.Q6J("color","warn")("matDialogClose",!0),e.xp6(2),e.Q6J("color","primary")("disabled",i.reasonControl.invalid)("ngClass",e.VKq(13,Ir,i.reasonControl.invalid)))},dependencies:[A.ot,A.lW,ne.p9,F.Is,F.ZT,f.lN,f.KE,f.hX,f.TO,f.qo,D.Ps,D.Hw,w.c,w.Nt,K.Cq,X.AV,v.mk,a.UX,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.oH],encapsulation:2,data:{animation:Ke.L},changeDetection:0})}return s})();var qr=p(70456),Fr=p(43987),Bt=p(90621);const kr=["locationFilter"],wr=["currencyFilter"];function Ur(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"mat-icon",47),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.range.reset())}),e.qZA()}}function Dr(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1,"Fecha de inicio no v\xe1lida "),e.qZA())}function Pr(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1,"Fecha de final no v\xe1lida "),e.qZA())}function Nr(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"table-filter",48,49),e.NdJ("dataChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.addLocation(i))}),e.qZA()}if(2&s){const t=e.oxw();e.Q6J("filterType","filterEntity")("searchEntityControl",t.searchLocationsControl)("entitiesFiltered",t.locationsFiltered)}}function Br(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",50),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.clearTableFilters())}),e.TgZ(1,"span",51),e._uU(2," filter_list_off "),e.qZA()()}}function Jr(s,l){1&s&&e._UZ(0,"mat-icon",62)}function Rr(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,o=e.oxw(2);return e.KtG(o.return(i))}),e._UZ(1,"mat-icon",64),e.qZA(),e.TgZ(2,"button",65),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,o=e.oxw(2);return e.KtG(o.cancelSale(i))}),e._UZ(3,"mat-icon",66),e.qZA(),e.TgZ(4,"button",67),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,o=e.oxw(2);return e.KtG(o.printTicket(i))}),e._UZ(5,"mat-icon",68),e.qZA()}if(2&s){const t=e.oxw().$implicit,n=e.oxw(2);e.Q6J("disabled",n.isLoading||"devuelto"===t.paymentStatus||"cancelada"===t.status),e.xp6(2),e.Q6J("disabled",n.isLoading||"devuelto"===t.paymentStatus||"cancelada"===t.status),e.xp6(3),e.Q6J("svgIcon","mat_solid:receipt")}}function Mr(s,l){1&s&&e._UZ(0,"mat-spinner",69),2&s&&e.Q6J("diameter",20)("color","primary")}function Er(s,l){1&s&&e.GkF(0)}const Qr=s=>({$implicit:s});function Lr(s,l){if(1&s&&e.YNc(0,Er,1,0,"ng-container",70),2&s){const t=e.oxw(3),n=e.MAs(83);e.Q6J("ngTemplateOutlet",n)("ngTemplateOutletContext",e.VKq(2,Qr,t.paymentStatusData))}}const $r=(s,l,t,n,i,o,r)=>({"text-teal-800 bg-teal-100 dark:text-teal-50 dark:bg-teal-500":s,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":l,"text-blue-800 bg-blue-100 dark:text-white dark:bg-blue-500":t,"text-violet-800 bg-violet-100 dark:text-violet-50 dark:bg-violet-500":n,"text-violet-500 bg-violet-50 dark:text-violet-50 dark:bg-violet-300":i,"text-red-800 bg-red-100 dark:text-red-50 dark:bg-red-500":o,"text-amber-800 bg-amber-100 dark:text-black dark:bg-amber-500":r});function zr(s,l){if(1&s&&(e.TgZ(0,"div",52)(1,"div",53),e._uU(2),e.qZA(),e.TgZ(3,"div",54),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",55),e._uU(7),e.qZA(),e.TgZ(8,"div",34),e._uU(9),e.qZA(),e.TgZ(10,"div",56),e._uU(11),e.ALo(12,"number"),e.qZA(),e.TgZ(13,"div",34),e._uU(14),e.ALo(15,"uppercase"),e.qZA(),e.TgZ(16,"div",57)(17,"span",58),e._uU(18),e.ALo(19,"uppercase"),e.qZA()(),e.TgZ(20,"div",59),e.YNc(21,Jr,1,0,"mat-icon",60)(22,Rr,6,3)(23,Mr,1,2,"mat-spinner",61),e.qZA()(),e.TgZ(24,"div",31),e.YNc(25,Lr,1,4,"ng-container"),e.qZA()),2&s){const t=l.$implicit,n=l.$index,i=e.oxw(2);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",e.xi3(5,12,t.createdAt,"dd/MM/YY hh:mm a")," "),e.xp6(3),e.hij(" ",null==t||null==t.location?null:t.location.name," "),e.xp6(2),e.hij(" ",null==t||null==t.currency?null:t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(12,15,t.total,"1.2-2")," "),e.xp6(3),e.hij(" ",e.lcZ(15,18,t.paymentMethod.name)," "),e.xp6(3),e.Q6J("ngClass",e.Hh0(22,$r,"parcial"===t.paymentStatus,"pagada"===t.paymentStatus,"pendiente"===t.paymentStatus,"devuelto"===t.paymentStatus,"devueltoParcial"===t.paymentStatus,"cancelada"===t.status,"dPendiente"===t.paymentStatus)),e.xp6(),e.hij(" ",e.lcZ(19,20,"cancelada"!==t.status?"devueltoParcial"===t.paymentStatus?"devuelto":t.paymentStatus:t.status)," "),e.xp6(3),e.um2(21,t.isPromotion?21:-1),e.xp6(),e.um2(22,t.isPromotion?-1:22),e.xp6(),e.um2(23,i.isMarkAsPayedLoading&&i.selectedSlide===n?23:-1),e.xp6(2),e.um2(25,(null==i.selectedSale?null:i.selectedSale.id)===t.id?25:-1)}}function Or(s,l){if(1&s&&e.SjG(0,zr,26,30,null,null,e.QCX().trackByFn),2&s){const t=e.oxw();e.wJu(t.sales)}}function Gr(s,l){1&s&&(e.TgZ(0,"div",71),e._uU(1," \xa1No se ha encontrado ninguna venta! "),e.qZA())}function jr(s,l){if(1&s&&(e.TgZ(0,"div",76)(1,"div",34),e._uU(2),e.ALo(3,"uppercase"),e.qZA(),e.TgZ(4,"div",34),e._uU(5),e.qZA(),e.TgZ(6,"div",34),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"div",34),e._uU(10),e.ALo(11,"uppercase"),e.qZA(),e.TgZ(12,"div",75),e._uU(13),e.qZA()()),2&s){const t=l.$implicit;e.xp6(2),e.hij(" ",e.lcZ(3,5,t.paymentStatus)," "),e.xp6(3),e.hij(" ",t.amount," "),e.xp6(2),e.hij(" ",e.xi3(8,7,t.statusChangeAt,"dd/MM/yyyy HH:mm")," "),e.xp6(3),e.hij(" ",e.lcZ(11,10,t.type)," "),e.xp6(3),e.hij(" ",t.description," ")}}function Vr(s,l){if(1&s&&(e.TgZ(0,"div",72)(1,"div",73)(2,"div",34),e._uU(3," Estado "),e.qZA(),e.TgZ(4,"div",34),e._uU(5," Monto "),e.qZA(),e.TgZ(6,"div",34),e._uU(7," Fecha "),e.qZA(),e.TgZ(8,"div",74),e._uU(9," T.Devoluci\xf3n "),e.qZA(),e.TgZ(10,"div",75),e._uU(11," Descripci\xf3n "),e.qZA()(),e.SjG(12,jr,14,12,"div",77,e.x6l),e.qZA()),2&s){const t=e.oxw();e.xp6(12),e.wJu(t.paymentStatusData)}}const Hr=s=>({"pointer-events-none":s}),Yr=()=>[10,25,50,100];function Kr(s,l){if(1&s&&e._UZ(0,"mat-paginator",78),2&s){const t=e.oxw();e.Q6J("ngClass",e.VKq(6,Hr,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(8,Yr))("showFirstLastButtons",!0)}}const Wr=()=>["Cajero"],Xr=s=>({"mr-4":s});let el=(()=>{class s{constructor(){this.isMarkAsPayedLoading=!1,this.currencies$=(0,U.of)([]),this.maxDate=new Date,this.merchant=null,this.merchantControl=new a.p4(""),this.paymentStatusData=[],this.range=new a.cw({start:new a.NI({disabled:!1,value:null},[G.L.futureDateValidator()]),end:new a.NI({disabled:!1,value:null},[G.L.futureDateValidator()])}),this.searchLocationsControl=new a.NI(null),this.filterInputControl=new a.NI,this.searchInputControl=new a.NI(null),this.selectedSale=null,this.selectedSlide=null,this.user=null,this.selectedLocation=null,this.selectedCurrenciesId=[],this._changeDetectorRef=(0,e.f3M)(e.sBO),this._documentsService=(0,e.f3M)(ve.S),this._fileSaverService=(0,e.f3M)(Re.m),this._printerService=(0,e.f3M)(qr.v),this._salesService=(0,e.f3M)(We.M),this._dialog=(0,e.f3M)(F.uw),this._unsubscribeAll=new O.x,this._snackBar=(0,e.f3M)($.ux),this._locationsService=(0,e.f3M)(Fr._),this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.store.select(re.rk).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.currencies$=this.store.select(le.zd),this.store.select(ie.Qs).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(mr).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.sales=t,this._changeDetectorRef.markForCheck()}),this.store.select(me.B).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(300),(0,z.O)(null),(0,I.w)(t=>null!==t?(this.isLoading=!0,this._salesService.getSales(0,50,"createdAt","desc",t,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value)):(0,U.of)()),(0,R.U)(()=>{this.isLoading=!1})).subscribe(),this.range.get("end").valueChanges.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this._salesService.getSales(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,t).pipe((0,g.R)(this._unsubscribeAll)).subscribe()}),this.filterInputControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(300),(0,I.w)(t=>(this.isLoading=!0,this._salesService.getSales(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value))),(0,R.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,ue.T)(this._sort.sortChange,this._paginator.page).pipe((0,I.w)(()=>(this.isLoading=!0,this._salesService.getSales(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value))),(0,R.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}resetLocation(){this.selectedLocation=null,this.searchInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addLocation(t){this.selectedLocation=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCurrencies(t){this.selectedCurrenciesId=t.map(n=>n.id),this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}exportIPVProductos(){this._salesService.getSales(0,1e4,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{let n=structuredClone(t.data.findSales.sales);n.forEach(r=>{const c=r.returns.map(_=>_.products).flat(),d=r.returns.map(_=>_.receipts).flat();for(const _ of r.products){const m=c.find(u=>u.productId===_.productId);m&&(r.total-=m.quantity*_.price,_.quantity-=m.quantity)}for(const _ of r.receipts){const m=d.find(u=>u.productId===_.productId);m&&(r.total-=m.quantity*_.price,_.quantity-=m.quantity)}}),n=n.filter(r=>"cancelada"!==r.status&&!r.isPromotion);const i=n.reduce((r,c)=>(c.products.forEach(d=>{const _=r.find(m=>m.productId===d.productId);_?_.quantity+=d.quantity:r.push({productId:d.productId,quantity:d.quantity,price:d.price,productName:d.product?.name,locationName:c.location.name,saleUser:c.user})}),c.receipts.forEach(d=>{const _=r.find(m=>m.productId===d.productId);_?_.quantity+=d.quantity:r.push({productId:d.productId,quantity:d.quantity,price:d.price,productName:d.receipt?.name,saleUser:c.user,locationName:c.location.name})}),r),[]);i.forEach(r=>{const c=n.map(_=>_.products).flat().filter(_=>_.productId===r.productId),d=c.reduce((_,m)=>_+m.quantity,0);if(d>0){const _=c.reduce((m,u)=>m+u.price*u.quantity,0)/d;r.price=_}});const o=i.filter(r=>r.quantity*r.price>0).map(r=>({Producto:r?.productName,Cantidad:r.quantity,"Precio Promedio":r.price,Total:r.price*r.quantity,"Unidad Comercial":r.locationName,Cajero:r.saleUser.fullname}));this._fileSaverService.exportAsExcelFile(o,`IPV_${T(this.range.get("end").value).format("YYYYMMDD")}`,[["Producto","Cantidad","Precio Promedio","Total","Unidad Comercial","Cajero"]],[{wch:30},{wch:10},{wch:15},{wch:15},{wch:30},{wch:25}])})}exportIPVVentas(){this._salesService.getSales(0,1e4,"no","asc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{let n=structuredClone(t.data.findSales.sales);n.forEach(o=>{const r=o.returns.map(d=>d.products).flat(),c=o.returns.map(d=>d.receipts).flat();for(const d of o.products){const _=r.find(m=>m.productId===d.productId);_&&(o.total-=_.quantity*d.price,d.quantity-=_.quantity)}for(const d of o.receipts){const _=c.find(m=>m.productId===d.productId);_&&(o.total-=_.quantity*d.price,d.quantity-=_.quantity)}}),n=n.filter(o=>"cancelada"!==o.status&&!o.isPromotion);const i=n.filter(o=>o.total>0).map(o=>({Fecha:T(o.createdAt).format("DD/MM/YYYY HH:mm:ss"),No:o.no,Importe:o.total,Pago:o.paymentMethod.name,"Unidad Comercial":o.location.name,Cajero:o.user.fullname}));this._fileSaverService.exportAsExcelFile(i,`IPV_${T(this.range.get("end").value).format("YYYYMMDD")}`,[["Fecha","No","Importe","Pago","Unidad Comercial","Cajero"]],[{wch:20},{wch:20},{wch:10},{wch:15},{wch:30},{wch:25}])})}generateTicketDocument(t){var n=this;return(0,Nt.Z)(function*(){n._documentsService.generateTicketDocument(t,n.merchant,n.user)})()}generateIpvProducts(){this._salesService.getSales(0,1e4,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{let n=structuredClone(t.data.findSales.sales),i=0;n.forEach(u=>{const h=u.returns.map(x=>x.products).flat(),C=u.returns.map(x=>x.receipts).flat();for(const x of u.products){const b=h.find(B=>B.productId===x.productId);b&&(u.total-=b.quantity*x.price,i+=b.quantity*x.price,x.quantity-=b.quantity)}for(const x of u.receipts){const b=C.find(B=>B.productId===x.productId);b&&(u.total-=b.quantity*x.price,i+=b.quantity*x.price,x.quantity-=b.quantity)}}),n=n.filter(u=>"cancelada"!==u.status&&!u.isPromotion);const o=n.reduce((u,h)=>(h.products.forEach(C=>{const x=u.find(b=>b.productId===C.productId);x?x.quantity+=C.quantity:u.push({productId:C.productId,quantity:C.quantity,price:C.price,productName:C.product?.name,saleUser:h.user})}),h.receipts.forEach(C=>{const x=u.find(b=>b.productId===C.productId);x?x.quantity+=C.quantity:u.push({productId:C.productId,quantity:C.quantity,price:C.price,productName:C.receipt?.name,saleUser:h.user})}),u),[]);o.forEach(u=>{const h=n.map(x=>x.products).flat().filter(x=>x.productId===u.productId),C=h.reduce((x,b)=>x+b.quantity,0);if(C>0){const x=h.reduce((b,B)=>b+B.price*B.quantity,0)/C;u.price=x}});let r=n.map(u=>u.location).flat().filter((u,h,C)=>C.findIndex(x=>x.id===u.id)===h);r.length>1&&(r=r.map(u=>{const x=n.map(b=>b.terminal).flat().filter((b,B,te)=>te.findIndex(H=>H.id===b.id)===B).find(b=>b.locationId===u.id).no.slice(-2);return u.name=`${u.name} (No\xb0T${x})`,u}));const c=n.filter(u=>"28b4562a-5d43-4246-92dc-c075e2b1d88c"===u.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===u.paymentMethod.id).reduce((u,h)=>u+(h.cashPaid-h.change),0)-i,d=n.filter(u=>"ea192625-2566-443b-b7cb-a011d10f08de"===u.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===u.paymentMethod.id).reduce((u,h)=>u+h.cardPaid,0),_=o.filter(u=>u.quantity*u.price>0).map(u=>({Producto:u?.productName,Cantidad:u.quantity,Precio:u.price,Cajero:u.saleUser.fullname})),m={start:this.range.get("start").value,end:this.range.get("end").value};this._documentsService.generateIpvProducts(_,m,this.merchant,r,this.user,c,d)})}generateIpvVentas(){this._salesService.getSales(0,1e4,"no","asc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{let n=structuredClone(t.data.findSales.sales),i=0;n.forEach(m=>{const u=m.returns.map(C=>C.products).flat(),h=m.returns.map(C=>C.receipts).flat();for(const C of m.products){const x=u.find(b=>b.productId===C.productId);console.log(x),x&&(m.total-=x.quantity*C.price,i+=x.quantity*C.price,C.quantity-=x.quantity)}for(const C of m.receipts){const x=h.find(b=>b.productId===C.productId);x&&(m.total-=x.quantity*C.price,i+=x.quantity*C.price,C.quantity-=x.quantity)}}),n=n.filter(m=>"cancelada"!==m.status&&!m.isPromotion);let o=n.map(m=>m.location).flat().filter((m,u,h)=>h.findIndex(C=>C.id===m.id)===u);o.length>1&&(o=o.map(m=>{const C=n.map(x=>x.terminal).flat().filter((x,b,B)=>B.findIndex(te=>te.id===x.id)===b).find(x=>x.locationId===m.id).no.slice(-2);return m.name=`${m.name} (No\xb0T${C})`,m}));const r=n.filter(m=>"28b4562a-5d43-4246-92dc-c075e2b1d88c"===m.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===m.paymentMethod.id).reduce((m,u)=>m+(u.cashPaid-u.change),0)-i,c=n.filter(m=>"ea192625-2566-443b-b7cb-a011d10f08de"===m.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===m.paymentMethod.id).reduce((m,u)=>m+u.cardPaid,0),d=n.filter(m=>m.total>0).map(m=>({Fecha:T(m.createdAt).format("DD/MM/YYYY hh:mm a"),No:m.no,Monto:m.total,Pago:m.paymentMethod.name,Cajero:m.user.fullname})),_={start:this.range.get("start").value,end:this.range.get("end").value};this._documentsService.generateIpvVentas(d,_,this.merchant,o,this.user,r,c)})}printTicket(t){let n=structuredClone(t);n.products=[...n.products,...n.receipts.map(i=>({...i,product:{name:i.receipt.name,uom:i.receipt.uom}}))],this._printerService.printSaleTicket(n).pipe((0,g.R)(this._unsubscribeAll)).subscribe()}return(t){this._dialog.open(Zr,{data:t,panelClass:"ath-reject-dialog-panel",maxWidth:"600px"})}cancelSale(t){this._dialog.open(Sr,{data:{title:"Cancelar venta",message:"\xbfEst\xe1 seguro que desea cancelar la venta?"},panelClass:"ath-dialog-panel",maxWidth:"600px"}).afterClosed().pipe((0,g.R)(this._unsubscribeAll)).subscribe(i=>{E.W.IsNullOrEmpty(i.reason)||this._salesService.cancelSale(t.id,i.reason).pipe((0,g.R)(this._unsubscribeAll)).subscribe(({data:o})=>{o&&this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.cancelSale.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})})})}trackByFn(t,n){return n.id||t}closeDetails(){this.selectedSale=null,this.paymentStatusData=[],this._changeDetectorRef.markForCheck()}displayFn(t){return(t&&t.name?t.name:"").trim()}existTableFilter(){return this.currencyFilter?.hasFilter||this.locationFilter?.hasFilter}clearTableFilters(){this.currencyFilter?.hasFilter&&this.currencyFilter.clearFilter(),this.locationFilter?.hasFilter&&this.locationFilter.clearFilter()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-sales"]],viewQuery:function(n,i){if(1&n&&(e.Gf(Q.NW,5),e.Gf(P.YE,5),e.Gf(kr,5),e.Gf(wr,5)),2&n){let o;e.iGM(o=e.CRH())&&(i._paginator=o.first),e.iGM(o=e.CRH())&&(i._sort=o.first),e.iGM(o=e.CRH())&&(i.locationFilter=o.first),e.iGM(o=e.CRH())&&(i.currencyFilter=o.first)}},standalone:!0,features:[e.jDz],decls:85,vars:37,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],["routerLink","/dashboard",1,"ml-1","text-primary-500","hover:underline"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"flex","flex-wrap","items-center","w-full","gap-2","mt-6","right-8","shrink-0","lg:mt-0","lg:ml-4","lg:w-auto","sm:w-1/2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"sm:mx-4","min-w-64","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matPrefix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"disabled","matMenuTriggerFor"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],["xPosition","before"],["reportsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","flex-col","flex-auto"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","sales-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-card"],[1,"text-center",3,"mat-sort-header"],[1,"text-center"],[1,"flex","items-center","justify-start"],["matTooltip","Unidad Comercial"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange",4,"ngxPermissionsExcept"],[1,"flex","items-center","justify-center"],[3,"mat-sort-header"],[3,"filterType","entityPropertyName","useUpperCase","data","dataChange"],["currencyFilter",""],[1,"flex","justify-end",3,"mat-sort-header"],[1,"flex","items-center","justify-center",3,"ngClass"],["color","warn","class","w-6 h-6 min-h-6 min-w-6","mat-icon-button","","matTooltip","Limpiar filtros"],["rowPaymentStatusDataTemplate",""],["class","border-b first-letter:z-10 sm:inset-x-0 sm:sticky sm:bottom-0 sm:border-t sm:border-b-0 bg-gray-50 dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange"],["locationFilter",""],["color","warn","mat-icon-button","","matTooltip","Limpiar filtros",1,"w-6","h-6","min-h-6","min-w-6",3,"click"],[1,"material-icons","icon-size-4"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","sales-grid","md:px-8"],[1,"truncate"],[1,"text-center","truncate"],[1,"text-start","truncate"],[1,"text-right"],[1,"flex","justify-center"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold","uppercase",3,"ngClass"],[1,"flex","flex-row","justify-center","gap-2"],["class","icon-size-7","svgIcon","mat_solid:redeem","matTooltip","Venta por promoci\xf3n"],["class","self-center ml-2",3,"diameter","color"],["svgIcon","mat_solid:redeem","matTooltip","Venta por promoci\xf3n",1,"icon-size-7"],["matTooltip","Hacer devoluci\xf3n","mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["svgIcon","mat_solid:undo",1,"icon-size-5"],["matTooltip","Cancelar venta","mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["svgIcon","mat_solid:cancel",1,"icon-size-5"],["mat-stroked-button","","matTooltip","Imprimir Ticket",1,"hidden","px-2","leading-6","sm:flex","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"self-center","ml-2",3,"diameter","color"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","flex-col","w-full","overflow-hidden","border-b"],[1,"z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","subscription-sales-status-detail-table","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],["matTooltip","Tipo de devoluci\xf3n",1,"text-center"],[1,"text-left"],[1,"grid","items-center","w-full","gap-4","px-6","py-3","border-b","subscription-sales-status-detail-table","md:px-8"],["class","grid items-center w-full gap-4 px-6 py-3 border-b subscription-sales-status-detail-table md:px-8"],[1,"border-b","first-letter:z-10","sm:inset-x-0","sm:sticky","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Ventas"),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",7),e._uU(15,"Registro de Ventas"),e.qZA()()(),e.TgZ(16,"div",8)(17,"a",9),e._UZ(18,"mat-icon",6),e.TgZ(19,"span",10),e._uU(20,"Regresar"),e.qZA()()()()(),e.TgZ(21,"div",11)(22,"mat-form-field",12),e._UZ(23,"mat-icon",13)(24,"input",14),e.qZA(),e.TgZ(25,"mat-form-field",15)(26,"mat-date-range-input",16),e._UZ(27,"input",17)(28,"input",18),e.qZA(),e._UZ(29,"mat-datepicker-toggle",19)(30,"mat-date-range-picker",20,21),e.YNc(32,Ur,1,0,"mat-icon",22)(33,Dr,2,0,"mat-error")(34,Pr,2,0,"mat-error"),e.qZA(),e.TgZ(35,"div",23)(36,"button",24),e._UZ(37,"mat-icon",25),e.TgZ(38,"span",26),e._uU(39,"Reportes"),e.qZA()(),e.TgZ(40,"mat-menu",27,28)(42,"button",29),e.NdJ("click",function(){return i.exportIPVProductos()}),e._uU(43,"Exportar Productos Vendidos"),e.qZA(),e.TgZ(44,"button",29),e.NdJ("click",function(){return i.exportIPVVentas()}),e._uU(45,"Exportar Ventas"),e.qZA(),e.TgZ(46,"button",29),e.NdJ("click",function(){return i.generateIpvProducts()}),e._uU(47,"Productos Vendidos"),e.qZA(),e.TgZ(48,"button",29),e.NdJ("click",function(){return i.generateIpvVentas()}),e._uU(49,"Reporte de Ventas"),e.qZA()()()()(),e.TgZ(50,"div",30)(51,"div",30),e.ynx(52),e.TgZ(53,"div",31)(54,"div",32)(55,"div",33),e._uU(56," No "),e.qZA(),e.TgZ(57,"div",34),e._uU(58," Fecha "),e.qZA(),e.TgZ(59,"div",35)(60,"span",36),e._uU(61,"Unidad Comercial"),e.qZA(),e.YNc(62,Nr,2,3,"table-filter",37),e.qZA(),e.TgZ(63,"div",38)(64,"span",39),e._uU(65,"Moneda"),e.qZA(),e.TgZ(66,"table-filter",40,41),e.NdJ("dataChange",function(r){return i.addCurrencies(r)}),e.ALo(68,"async"),e.qZA()(),e.TgZ(69,"div",42)(70,"span"),e._uU(71," Importe"),e.qZA()(),e.TgZ(72,"div",34),e._uU(73," M\xe9todo de pago "),e.qZA(),e.TgZ(74,"div",34),e._uU(75," Estado "),e.qZA(),e.TgZ(76,"div",43)(77,"span"),e._uU(78,"Acciones"),e.qZA(),e.YNc(79,Br,3,0,"button",44),e.qZA()(),e.YNc(80,Or,2,0)(81,Gr,2,0),e.qZA(),e.BQk(),e.YNc(82,Vr,14,0,"ng-template",null,45,e.W1O),e.qZA(),e.YNc(84,Kr,1,9,"mat-paginator",46),e.qZA()()),2&n){const o=e.MAs(31),r=e.MAs(41);e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("routerLink","./.."),e.xp6(),e.Q6J("svgIcon","mat_solid:chevron_left"),e.xp6(4),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("formGroup",i.range)("rangePicker",o)("max",i.maxDate),e.xp6(3),e.Q6J("for",o),e.xp6(3),e.um2(32,i.range.get("start").value||i.range.get("end").value?32:-1),e.xp6(),e.um2(33,i.range.controls.start.hasError("matStartDateInvalid")?33:-1),e.xp6(),e.um2(34,i.range.controls.end.hasError("matEndDateInvalid")?34:-1),e.xp6(2),e.Q6J("disabled",!i.range.get("start").value||!i.range.get("end").value||i.range.invalid)("matMenuTriggerFor",r),e.xp6(),e.Q6J("svgIcon","mat_solid:plagiarism"),e.xp6(18),e.Q6J("mat-sort-header","no"),e.xp6(7),e.Q6J("ngxPermissionsExcept",e.DdM(34,Wr)),e.xp6(2),e.Q6J("mat-sort-header","currencyId"),e.xp6(2),e.Q6J("filterType","multiSelectEntity")("entityPropertyName","iso")("useUpperCase",!0)("data",e.lcZ(68,32,i.currencies$)),e.xp6(3),e.Q6J("mat-sort-header","total"),e.xp6(7),e.Q6J("ngClass",e.VKq(35,Xr,i.existTableFilter())),e.xp6(3),e.um2(79,i.existTableFilter()?79:-1),e.xp6(),e.um2(80,i.sales.length>0?80:81),e.xp6(4),e.um2(84,i.sales.length>0?84:-1)}},dependencies:[v.Ov,v.uU,v.JJ,A.ot,A.lW,A.RK,Z.FA,Z.nW,Z.wx,Z.zY,Z.By,Z._g,f.lN,f.KE,f.TO,f.qo,f.R9,D.Ps,D.Hw,N.Tx,N.VK,N.OP,N.p6,Q.TU,Q.NW,P.JX,P.YE,P.nU,K.Cq,K.Ou,v.mk,Y.rH,ze.q,v.gd,a.UX,a.Fj,a.JJ,a.JL,a.oH,a.sg,a.u,w.c,w.Nt,Bt.VI,Bt.gE,be.H],encapsulation:2,data:{animation:Ke.L},changeDetection:0})}return s})(),tl=(()=>{class s{constructor(t){this._salesService=t}resolve(t,n){return this._salesService.getSales()}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(We.M))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var il=p(8382);const Ne=(0,k.P1)(s=>s.collections,s=>s.collections);var Be=p(55576);const nl=y.Ps`
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
`,ol=y.Ps`
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
`,al=y.Ps`
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
`,rl=y.Ps`
    mutation RemoveCollection($removeCollectionId: String!) {
        removeCollection(id: $removeCollectionId) {
            ok
            message
        }
    }
`,ll=y.Ps`
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
`;var xe=p(3980);let Xe=(()=>{class s{constructor(t,n){this.apolloProvider=t,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}getCollections(t=0,n=50,i="no",o="desc",r="",c=T().subtract(30,"days").toDate(),d=new Date,_=""){return this._apollo.query({query:nl,errorPolicy:"all",variables:{page:t,size:n,sort:i,order:o,search:r,initDate:c,endDate:d,status:_}}).pipe((0,q.b)(({data:m})=>{this.store.dispatch((0,Be.cv)({collections:m.findCollections.collections})),this.store.dispatch((0,Ce.Jr)({pagination:m.findCollections.pagination}))}))}getCollectionsByDate(t){return this._apollo.query({query:ol,errorPolicy:"all",variables:{date:t}}).pipe((0,q.b)(({})=>{}))}updateCollection(t){return this.store.select(Ne).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:al,variables:{updateCollectionInput:t},errorPolicy:"all"}).pipe((0,q.b)(({data:i})=>{const o=structuredClone(n);o[n.findIndex(c=>c.id===t.id)]=i.updatedCollection.collection,this.store.dispatch((0,Be.cv)({collections:o}))}))))}removeCollection(t){return this.store.select(Ne).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:rl,variables:{removeCollectionId:t},errorPolicy:"all"}).pipe((0,q.b)(()=>{const i=structuredClone(n),o=n.findIndex(r=>r.id===t);i.splice(o,1),this.store.dispatch((0,Be.cv)({collections:i}))}))))}refundCollection(t){return this.store.select(Ne).pipe((0,L.q)(1),(0,I.w)(n=>this._apollo.mutate({mutation:ll,variables:{refundPaymentOrderInput:t},errorPolicy:"all"}).pipe((0,q.b)(({})=>{const o=structuredClone(n);o[n.findIndex(c=>c.no===t.no)].paymentStatus=xe.bG.dPendiente,this.store.dispatch((0,Be.cv)({collections:o}))}))))}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(y._M),e.LFG(k.yh))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var cl=p(87466);function dl(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," EL importe a reembolsar es obligatorio "),e.qZA())}function ul(s,l){if(1&s&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(),e.hij(" El monto a reembolsar debe ser mayor que 0.01 y menor o igual que ",t.data.invoice.amount,". ")}}function ml(s,l){if(1&s&&(e.TgZ(0,"mat-form-field",24)(1,"mat-label"),e._uU(2,"Importe"),e.qZA(),e._UZ(3,"mat-icon",25)(4,"input",26),e.YNc(5,dl,2,0,"mat-error")(6,ul,2,1,"mat-error"),e.qZA()),2&s){const t=e.oxw();e.xp6(3),e.Q6J("svgIcon","mat_solid:attach_money"),e.xp6(),e.Q6J("placeholder",t.data.invoice.amount)("formControlName","amount")("min",.01)("max",t.data.invoice.amount),e.xp6(),e.um2(5,t.refundForm.get("amount").hasError("required")?5:-1),e.xp6(),e.um2(6,t.refundForm.get("amount").hasError("min")||t.refundForm.get("amount").hasError("max")?6:-1)}}function pl(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," EL motivo del rechazo es obligatorio "),e.qZA())}function gl(s,l){1&s&&(e.TgZ(0,"mat-error"),e._uU(1," EL motivo del rechazo debe contener entre 3 y 200 caracteres. "),e.qZA())}function _l(s,l){1&s&&(e.TgZ(0,"span"),e._uU(1," Aceptar "),e.qZA())}function hl(s,l){1&s&&e._UZ(0,"mat-progress-spinner",23),2&s&&e.Q6J("diameter",24)("mode","indeterminate")}const fl=s=>({"cursor-not-allowed":s});let bl=(()=>{class s{constructor(t){this.data=t,this.isLoading=!1,this.refundType=xe.aw.total,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._collectionsService=(0,e.f3M)(Xe),this._dialogRef=(0,e.f3M)(F.so),this._formBuilder=(0,e.f3M)(a.qu),this._snackBar=(0,e.f3M)($.ux),this._unsubscribeAll=new O.x}ngOnInit(){this.refundForm=this._formBuilder.group({amount:[this.data.invoice.amount,[a.kI.required,a.kI.min(.01),a.kI.max(this.data.invoice.amount)]],refundReason:["",[a.kI.required,a.kI.maxLength(1e3)]]})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}refundTypeChange(t){t.value===xe.aw.total&&this.refundForm.get("amount").setValue(this.data.invoice.amount)}refund(){const t={no:this.data.invoice.no,amount:this.refundForm.get("amount").value,description:this.refundForm.get("refundReason").value.trim(),refundType:this.refundType};this.refundType===xe.aw.total&&(t.amount=this.data.invoice.amount),this._collectionsService.refundCollection(t).pipe((0,g.R)(this._unsubscribeAll),(0,oe.x)(()=>{this.isLoading=!1,this._changeDetectorRef.markForCheck()})).subscribe(({data:n})=>{this._snackBar.openFromComponent(S.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.refundCollectionsOrder.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck(),this._dialogRef.close()})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(F.WI))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["collection-refund-dialog"]],standalone:!0,features:[e.jDz],decls:38,vars:23,consts:[[1,"h-full","ng-star-inserted"],[1,"relative","flex","flex-col","w-full","h-full"],[1,"flex","items-center","h-full"],[1,"block","w-full"],[1,"flex","flex-col","items-center","flex-auto","p-8","pb-4","sm:flex-row","sm:items-start","sm:pb-6"],[1,"flex","items-center","justify-center","w-10","h-10","text-blue-600","bg-blue-100","rounded-full","flex-0","sm:mr-4","dark:text-blue-50","dark:bg-blue-600","ng-star-inserted"],[3,"src"],[1,"flex","flex-col","items-center","mt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left","ng-star-inserted"],[1,"text-xl","font-medium","leading-6","ng-star-inserted"],[1,"text-secondary","ng-star-inserted"],["color","primary","aria-label","Select an option",1,"flex","flex-wrap","justify-around","gap-2","pl-8","pr-8","mt-4","mb-6","sm:mt-2","sm:mb-10","sm:pl-22",3,"ngModel","change","ngModelChange"],["value","total"],["value","partial"],[1,"pb-6","pl-8","pr-8","mt-10","sm:mt-0","sm:pl-22",3,"formGroup","autocomplete"],["class","w-full mat-fuse-dense"],[1,"w-full","mat-fuse-dense","fuse-mat-textarea"],["matPrefix","","svgIcon","mat_solid:subject",1,"hidden","sm:flex","icon-size-5"],["matInput","",3,"formControlName","placeholder","minLength","maxLength","required"],["refundT",""],[1,"text-right"],[1,"flex","flex-wrap","justify-center","px-6","py-4","space-x-3","tems-center","bg-gray-50","dark:bg-black","dark:bg-opacity-10","ng-star-inserted"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","","mat-button","",3,"color","disabled","ngClass","click"],[3,"diameter","mode"],[1,"w-full","mat-fuse-dense"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["type","number","required","","matInput","",3,"placeholder","formControlName","min","max"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"div",7)(8,"div",8),e._uU(9,"Reembolso"),e.qZA(),e.TgZ(10,"div",9),e._uU(11),e.qZA()()(),e.TgZ(12,"mat-radio-group",10),e.NdJ("change",function(r){return i.refundTypeChange(r)})("ngModelChange",function(r){return i.refundType=r}),e.TgZ(13,"mat-radio-button",11),e._uU(14,"Total"),e.qZA(),e.TgZ(15,"span"),e._uU(16,"......Tipo......"),e.qZA(),e.TgZ(17,"mat-radio-button",12),e._uU(18,"Parcial"),e.qZA()(),e.TgZ(19,"form",13)(20,"div"),e.YNc(21,ml,7,7,"mat-form-field",14),e.TgZ(22,"mat-form-field",15)(23,"mat-label"),e._uU(24,"Motivo"),e.qZA(),e._UZ(25,"mat-icon",16)(26,"textarea",17,18),e.TgZ(28,"mat-hint",19),e._uU(29),e.qZA(),e.YNc(30,pl,2,0,"mat-error")(31,gl,2,0,"mat-error"),e.qZA()()()()(),e.TgZ(32,"div",20)(33,"button",21),e._uU(34,"Cancelar"),e.qZA(),e.TgZ(35,"button",22),e.NdJ("click",function(){return i.refund()}),e.YNc(36,_l,2,0,"span")(37,hl,1,2,"mat-progress-spinner",23),e.qZA()()()()),2&n){const o=e.MAs(27);e.xp6(6),e.Q6J("src",i.data.invoice.paymentGateway.logo,e.LSH),e.xp6(5),e.hij("\xbfEsta seguro que desea efectuar el reembolso del pago a la factura # ",i.data.invoice.no," ?"),e.xp6(),e.Q6J("ngModel",i.refundType),e.xp6(7),e.Q6J("formGroup",i.refundForm)("autocomplete","off"),e.xp6(2),e.um2(21,"partial"===i.refundType?21:-1),e.xp6(5),e.Q6J("formControlName","refundReason")("placeholder","Escriba el motivo del rechazo")("minLength",3)("maxLength",200)("required",!0),e.xp6(3),e.hij("Total de caracteres ",o.value.length," / 1000"),e.xp6(),e.um2(30,i.refundForm.get("refundReason").hasError("required")?30:-1),e.xp6(),e.um2(31,i.refundForm.get("refundReason").hasError("maxlength")||i.refundForm.get("refundReason").hasError("minlength")?31:-1),e.xp6(2),e.Q6J("matDialogClose",!0),e.xp6(2),e.Q6J("color","primary")("disabled",i.refundForm.invalid)("ngClass",e.VKq(21,fl,i.refundForm.invalid||i.isLoading))("disabled",i.refundForm.invalid||i.isLoading),e.xp6(),e.um2(36,i.isLoading?-1:36),e.xp6(),e.um2(37,i.isLoading?37:-1)}},dependencies:[a.u5,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.Q7,a.qQ,a.Fd,a.On,A.ot,A.lW,ne.p9,F.Is,F.ZT,f.lN,f.KE,f.hX,f.bx,f.TO,f.qo,D.Ps,D.Hw,w.c,w.Nt,K.Cq,K.Ou,cl.U0,X.AV,v.mk,a.UX,a.sg,a.u],encapsulation:2,changeDetection:0})}return s})();function xl(s,l){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"uppercase"),e.qZA()),2&s){const t=e.oxw().$implicit;e.xp6(),e.Oqu(e.lcZ(2,1,t.paymentGateway.name))}}function Cl(s,l){1&s&&e._UZ(0,"mat-spinner",30),2&s&&e.Q6J("diameter",20)("color","primary")}function yl(s,l){1&s&&e.GkF(0)}const vl=s=>({$implicit:s});function Zl(s,l){if(1&s&&e.YNc(0,yl,1,0,"ng-container",31),2&s){const t=e.oxw(3),n=e.MAs(26);e.Q6J("ngTemplateOutlet",n)("ngTemplateOutletContext",e.VKq(2,vl,t.paymentStatusData))}}const Al=(s,l,t,n,i)=>({"text-teal-800 bg-teal-100 dark:text-teal-50 dark:bg-teal-500":s,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":l,"text-blue-800 bg-blue-100 dark:text-white dark:bg-blue-500":t,"text-violet-800 bg-violet-100 dark:text-violet-50 dark:bg-violet-500":n,"text-red-800 bg-red-100 dark:text-red-50 dark:bg-red-500":i});function Tl(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",19)(1,"div",20),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",18),e._uU(7),e.qZA(),e.TgZ(8,"div",18),e._uU(9),e.ALo(10,"number"),e.qZA(),e.TgZ(11,"div",18),e.YNc(12,xl,3,3,"span"),e.qZA(),e.TgZ(13,"div",22)(14,"span",23),e._uU(15),e.ALo(16,"uppercase"),e.qZA()(),e.TgZ(17,"div",24)(18,"button",25),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.generateTicketCollectionDocument(o))}),e._UZ(19,"mat-icon",26),e.qZA(),e.TgZ(20,"button",27),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.refund(o))}),e._UZ(21,"mat-icon",28),e.qZA(),e.YNc(22,Cl,1,2,"mat-spinner",29),e.qZA()(),e.TgZ(23,"div",15),e.YNc(24,Zl,1,4,"ng-container"),e.qZA()}if(2&s){const t=l.$implicit,n=l.$index,i=e.oxw(2);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",e.xi3(5,11,t.createdAt,"dd/MM/YY hh:mm a")," "),e.xp6(3),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(10,14,t.total,"1.2-2")," "),e.xp6(3),e.um2(12,t.paymentGateway?12:-1),e.xp6(2),e.Q6J("ngClass",e.qbA(19,Al,"parcial"===t.paymentStatus,"pagada"===t.paymentStatus,"pendiente"===t.paymentStatus,"devuelto"===t.paymentStatus,"cancelado"===t.paymentStatus)),e.xp6(),e.hij(" ",e.lcZ(16,17,t.paymentStatus)," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:visibility"),e.xp6(),e.Q6J("disabled",i.isLoading||"pagada"!==t.paymentStatus),e.xp6(2),e.um2(22,i.isMarkAsPayedLoading&&i.selectedSlide===n?22:-1),e.xp6(2),e.um2(24,(null==i.selectedCollection?null:i.selectedCollection.id)===t.id?24:-1)}}function Il(s,l){if(1&s&&(e.TgZ(0,"div",15)(1,"div",16)(2,"div",17),e._uU(3," No "),e.qZA(),e.TgZ(4,"div",18),e._uU(5," Fecha "),e.qZA(),e.TgZ(6,"div",17),e._uU(7," Moneda "),e.qZA(),e.TgZ(8,"div",17),e._uU(9," Importe "),e.qZA(),e.TgZ(10,"div",18),e._uU(11," M\xe9todo de pago "),e.qZA(),e.TgZ(12,"div",18),e._uU(13," Estado "),e.qZA(),e.TgZ(14,"div",18),e._uU(15," Acciones "),e.qZA()(),e.SjG(16,Tl,25,25,null,null,e.QCX().trackByFn),e.qZA()),2&s){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(4),e.Q6J("mat-sort-header","currencyId"),e.xp6(2),e.Q6J("mat-sort-header","total"),e.xp6(8),e.wJu(t.collections)}}function Sl(s,l){if(1&s&&(e.TgZ(0,"div",32),e._uU(1),e.qZA()),2&s){const t=e.oxw();e.xp6(),e.hij(" ",t.searchInputControl.value?"\xa1No se han encontrado facturas!":"\xa1No se ha generado ninguna factura a una suscripci\xf3n a\xfan!","")}}function ql(s,l){if(1&s&&(e.TgZ(0,"div",37)(1,"div",18),e._uU(2),e.ALo(3,"uppercase"),e.qZA(),e.TgZ(4,"div",18),e._uU(5),e.qZA(),e.TgZ(6,"div",18),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"div",18),e._uU(10),e.ALo(11,"uppercase"),e.qZA(),e.TgZ(12,"div",36),e._uU(13),e.qZA()()),2&s){const t=l.$implicit;e.xp6(2),e.hij(" ",e.lcZ(3,5,t.paymentStatus)," "),e.xp6(3),e.hij(" ",t.amount," "),e.xp6(2),e.hij(" ",e.xi3(8,7,t.statusChangeAt,"dd/MM/yyyy HH:mm")," "),e.xp6(3),e.hij(" ",e.lcZ(11,10,t.type)," "),e.xp6(3),e.hij(" ",t.description," ")}}function Fl(s,l){if(1&s&&(e.TgZ(0,"div",33)(1,"div",34)(2,"div",18),e._uU(3," Estado "),e.qZA(),e.TgZ(4,"div",18),e._uU(5," Monto "),e.qZA(),e.TgZ(6,"div",18),e._uU(7," Fecha "),e.qZA(),e.TgZ(8,"div",35),e._uU(9," T.Devoluci\xf3n "),e.qZA(),e.TgZ(10,"div",36),e._uU(11," Descripci\xf3n "),e.qZA()(),e.SjG(12,ql,14,12,"div",38,e.x6l),e.qZA()),2&s){const t=e.oxw();e.xp6(12),e.wJu(t.paymentStatusData)}}const kl=s=>({"pointer-events-none":s}),wl=()=>[10,25,50,100];function Ul(s,l){if(1&s&&e._UZ(0,"mat-paginator",39),2&s){const t=e.oxw();e.Q6J("ngClass",e.VKq(6,kl,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(8,wl))("showFirstLastButtons",!0)}}let Dl=(()=>{class s{constructor(){this.searchInputControl=new a.NI(null),this.isMarkAsPayedLoading=!1,this.selectedSlide=null,this.user=null,this.merchantControl=new a.p4,this.paymentStatusData=[],this.selectedCollection=null,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._collectionsService=(0,e.f3M)(Xe),this._documentsService=(0,e.f3M)(ve.S),this._dialog=(0,e.f3M)(F.uw),this._unsubscribeAll=new O.x,this.store=(0,e.f3M)(k.yh)}ngOnInit(){this.store.select(Ne).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.collections=t,this._changeDetectorRef.markForCheck()}),this.store.select(me.B).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.store.select(re.rk).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(ie.Qs).pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.currentMerchant=t}),this.searchInputControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,J.b)(300),(0,z.O)(null),(0,I.w)(t=>null!==t?(this.isLoading=!0,this._collectionsService.getCollections(0,10,"createdAt","desc",t)):(0,U.of)()),(0,R.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,ue.T)(this._sort.sortChange,this._paginator.page).pipe((0,I.w)(()=>(this.isLoading=!0,this._collectionsService.getCollections(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,R.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}refund(t){t.paymentGateway&&this._dialog.open(bl,{data:{invoice:{id:t.id,no:t.no,amount:t.total,paymentGateway:t.paymentGateway}},panelClass:"ath-reject-dialog-panel",maxWidth:"520px"})}generateTicketCollectionDocument(t){var n=this;return(0,Nt.Z)(function*(){n._documentsService.generateTicketCollectionDocument(t,n.currentMerchant,n.user)})()}trackByFn(t,n){return n.id||t}togglePaymentStatusData(t){this.paymentStatusData=[],t.paymentAt&&this.paymentStatusData.push({paymentStatus:xe.bG.pagada,amount:t.total,type:"",description:"",statusChangeAt:t.paymentAt});for(const n of t.refunds.map(i=>({paymentStatus:xe.bG.devuelto,amount:i.amount,type:i.type,description:i.description,statusChangeAt:i.refundedAt})))this.paymentStatusData.push(n);this.selectedCollection&&this.selectedCollection.id===t.id?this.closeDetails():(this.selectedCollection=t,this._changeDetectorRef.markForCheck())}closeDetails(){this.selectedCollection=null,this.paymentStatusData=[],this._changeDetectorRef.markForCheck()}showRefund(t){return!!(t.refunds.map(i=>i.amount).reduce((i,o)=>i+o,0)<t.total&&t.paymentAt)}displayFn(t){return(t&&t.name?t.name:"").trim()}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["sales-collections"]],viewQuery:function(n,i){if(1&n&&(e.Gf(Q.NW,5),e.Gf(P.YE,5)),2&n){let o;e.iGM(o=e.CRH())&&(i._paginator=o.first),e.iGM(o=e.CRH())&&(i._sort=o.first)}},standalone:!0,features:[e.jDz],decls:28,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","overflow-x-auto","overflow-y-auto","bg-card","dark:bg-transparent","lg:overflow-x-hidden"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],["routerLink","/dashboard",1,"ml-1","text-primary-500","hover:underline"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"flex","flex-col","flex-auto"],["class","grid"],["rowPaymentStatusDataTemplate",""],["class","z-10 border-b sm:inset-x-0 sm:bottom-0 sm:border-t sm:border-b-0 bg-gray-50 dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","collections-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"text-center",3,"mat-sort-header"],[1,"text-center"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","collections-grid","md:px-8"],[1,"truncate"],[1,"text-center","truncate"],[1,"flex","justify-center"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold","uppercase",3,"ngClass"],[1,"flex","flex-row","justify-center","gap-2"],["mat-stroked-button","","matTooltip","Ver ticket",1,"hidden","px-2","leading-6","sm:flex","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["matTooltip","Hacer devoluci\xf3n","mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["svgIcon","mat_solid:undo",1,"icon-size-5"],["class","self-center ml-2",3,"diameter","color"],[1,"self-center","ml-2",3,"diameter","color"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","flex-col","w-full","overflow-hidden","border-b"],[1,"z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","subscription-collections-status-detail-table","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],["matTooltip","Tipo de devoluci\xf3n",1,"text-center"],[1,"text-left"],[1,"grid","items-center","w-full","gap-4","px-6","py-3","border-b","subscription-collections-status-detail-table","md:px-8"],["class","grid items-center w-full gap-4 px-6 py-3 border-b subscription-collections-status-detail-table md:px-8"],[1,"z-10","border-b","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Ventas"),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",7),e._uU(15,"Cobros"),e.qZA()()(),e.TgZ(16,"div",8)(17,"a",9),e._UZ(18,"mat-icon",6),e.TgZ(19,"span",10),e._uU(20,"Regresar"),e.qZA()()()()()(),e.TgZ(21,"div",11)(22,"div",11),e.YNc(23,Il,18,3,"div",12)(24,Sl,2,1)(25,Fl,14,0,"ng-template",null,13,e.W1O),e.qZA(),e.YNc(27,Ul,1,9,"mat-paginator",14),e.qZA()()),2&n&&(e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("routerLink","./.."),e.xp6(),e.Q6J("svgIcon","mat_solid:chevron_left"),e.xp6(5),e.um2(23,i.collections.length>0?23:24),e.xp6(4),e.um2(27,i.collections.length>0?27:-1))},dependencies:[v.uU,v.JJ,A.ot,A.lW,Z.FA,yt.PQ,f.lN,D.Ps,D.Hw,w.c,N.Tx,Q.TU,Q.NW,P.JX,P.YE,P.nU,v.mk,a.UX,Y.rH,v.gd,K.Cq,K.Ou],encapsulation:2,data:{animation:Ke.L},changeDetection:0})}return s})(),Pl=(()=>{class s{constructor(t){this._collectionsService=t}resolve(t,n){return this._collectionsService.getCollections()}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(Xe))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Je=p(86006),Nl=p(85194);const Bl=[{path:"",component:Jt,children:[{path:"dashboard",component:Pn,resolve:{salesDashboardStatsResolver:lr,currencies:de.t,customers:Je.GO}},{path:"assistances",component:_i,resolve:{assistances:(s,l)=>(0,e.f3M)(qe).getAssistances(),currencies:de.t,uoms:Nl.y}},{path:"bid",component:es,resolve:{assistances:He,currencies:de.t,customers:Je.lV,multipliers:Ye.e,productsInStock:je.gz}},{path:"billing",component:Hs,resolve:{assistances:He,currencies:de.t,customers:Je.lV,employees:Ve.pO,multipliers:Ye.e,operationTypes:Dt.q,paymentMethods:Pt.u,productsInStock:je.gz}},{path:"prebills",component:ha,resolve:{prebills:(s,l)=>(0,e.f3M)(Ft).getPrebills(),currencies:de.t}},{path:"prebilling",component:Lo,resolve:{assistances:He,currencies:de.t,customers:Je.lV,employees:Ve.pO,multipliers:Ye.e,operationTypes:Dt.q,paymentMethods:Pt.u,productsInStock:je.gz}},{path:"bills",component:vn,resolve:{bills:(s,l)=>(0,e.f3M)(Oe).getBills(),currencies:de.t}},{path:"collections",component:Dl,resolve:{collections:Pl}},{path:"offers",component:Gn,resolve:{offers:(s,l)=>(0,e.f3M)(Zt).getOffers()}},{path:"terminals",component:ir,resolve:{brands:or.A,depots:il.s6,employees:Ve.pO,terminals:cr.cX,locations:dr.Nc}},{path:"list",component:el,resolve:{sales:tl,currencies:de.t}}]}]}}]);