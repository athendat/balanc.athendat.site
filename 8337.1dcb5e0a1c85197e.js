"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8337],{38337:(Me,de,d)=>{d.r(de),d.d(de,{default:()=>ol});var J=d(64190),e=d(19212);let j=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales"]],standalone:!0,features:[e.jDz],decls:1,vars:0,template:function(a,i){1&a&&e._UZ(0,"router-outlet")},dependencies:[J.lC],encapsulation:2})}return o})();var v=d(96814),r=d(56223),w=d(21476),N=d(22939),S=d(13566),me=d(82599),A=d(17700),T=d(32296),g=d(64170),k=d(30617),U=d(24516),$=d(77988),Y=d(55940),V=d(78645),le=d(63019),m=d(59773),E=d(83620),P=d(94664),L=d(37398),O=d(48180),I=d(16676),Ee=d(36236),F=d(57069),C=d(84221),G=d(53374),z=d(29643),H=d(83604);const oe=o=>o.assistances,fe=((0,C.P1)(oe,o=>o.assistance),(0,C.P1)(oe,o=>o.assistances));var ae=d(56278),Ft=d(55497),pe=d(21510),D=d(42090),B=d(99397),_e=d(26530),Ae=d(97214),Z=d(50967);const qt=Z.Ps`
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
            }

        }
    }
`,kt=Z.Ps`
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
            }
        }
    }
`,wt=Z.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateAssistanceStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,Dt=Z.Ps`
    mutation RemoveAssistance($removeAssistanceId: String!) {
        removeAssistance(id: $removeAssistanceId) {
            ok
            message
        }
    }
`,Ut=Z.Ps`
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
            }
        }
    }
`,Pt=Z.Ps`
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
            }
        }
    }
`,Bt=Z.Ps`
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
            }
        }
    }
`,Nt=Z.Ps`
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
            }
        }
    }
`;let Ie=(()=>{class o{constructor(t,a){this.apolloProvider=t,this.store=a,this._apollo=this.apolloProvider.use("BALANC")}createAssistance(t){return this.store.select(fe).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:qt,variables:{createAssistanceInput:t},errorPolicy:"all"}).pipe((0,B.b)(({data:i})=>{const n=structuredClone(a);n.push(i.createAssistance.assistance),this.store.dispatch((0,_e.X0)({assistances:n}))}))))}getAssistances(t=1,a=20,i="no",n="asc",s=""){return this._apollo.query({query:Pt,errorPolicy:"all",variables:{offset:a*(t-1),limit:a,sort:i,order:n,search:s}}).pipe((0,B.b)(({data:c})=>{this.store.dispatch((0,Ae.Jr)({pagination:c.findAssistances.pagination})),this.store.dispatch((0,_e.X0)({assistances:c.findAssistances.assistances}))}))}getAssistancesActive(){return this._apollo.query({query:Ut,errorPolicy:"all"}).pipe((0,B.b)(({data:t})=>{this.store.dispatch((0,_e.X0)({assistances:t.findAssistancesActive.assistances}))}))}getAllAssistances(){return this._apollo.query({query:Bt,errorPolicy:"all"})}getAssistanceById(t){return this._apollo.query({query:Nt,variables:{assistanceId:t},errorPolicy:"all"}).pipe((0,B.b)(({data:a})=>{this.store.dispatch((0,_e.eK)({assistance:a.findAssistanceById.assistance}))}))}updateAssistance(t){return this.store.select(fe).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:kt,variables:{updateAssistanceInput:t},errorPolicy:"all"}).pipe((0,B.b)(({data:i})=>{const n=structuredClone(a);n[a.findIndex(c=>c.id===t.id)]=i.updateAssistance.assistance,this.store.dispatch((0,_e.X0)({assistances:n}))}))))}updateAssistanceStatus(t){return this.store.select(fe).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:wt,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,B.b)(()=>{const i=structuredClone(a);i[a.findIndex(s=>s.id===t.id)].active=t.active,this.store.dispatch((0,_e.X0)({assistances:i}))}))))}removeAssistance(t){return this.store.select(fe).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:Dt,variables:{assistanceId:t},errorPolicy:"all"}).pipe((0,B.b)(()=>{const i=structuredClone(a),n=a.findIndex(s=>s.id===t);i.splice(n,1),this.store.dispatch((0,_e.X0)({assistances:i}))}))))}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(Z._M),e.LFG(C.yh))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var K=d(98525),xe=d(23680);function Rt(o,l){1&o&&(e.TgZ(0,"h2",7),e._uU(1," Agregar servicio "),e.qZA())}function Jt(o,l){1&o&&(e.TgZ(0,"h2",7),e._uU(1," Editar servicio "),e.qZA())}function Mt(o,l){if(1&o&&(e.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"span",14),e._uU(8),e.qZA()()()()()()),2&o){const t=e.oxw();e.xp6(8),e.Oqu(t.data.assistance.description||"Sin nombre")}}function Et(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La descripci\xf3n del es obligatoria "),e.qZA())}function $t(o,l){if(1&o&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.iso," ")}}function Lt(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La moneda es obligatoria "),e.qZA())}function Qt(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El precio es obligatorio "),e.qZA())}function zt(o,l){if(1&o&&(e.TgZ(0,"div",15)(1,"div",16)(2,"form",17)(3,"mat-form-field",18)(4,"mat-label"),e._uU(5,"Descripci\xf3n"),e.qZA(),e._UZ(6,"input",19),e.TgZ(7,"mat-hint"),e._uU(8,"Ejemplo: Monte y desmonte de caja"),e.qZA(),e.YNc(9,Et,2,0,"mat-error"),e.qZA(),e.TgZ(10,"mat-form-field",20)(11,"mat-label"),e._uU(12,"Moneda"),e.qZA(),e.TgZ(13,"mat-select",21),e.SjG(14,$t,2,2,"mat-option",23,e.x6l),e.qZA(),e.YNc(16,Lt,2,0,"mat-error"),e.qZA(),e.TgZ(17,"mat-form-field",20)(18,"mat-label"),e._uU(19,"Precio"),e.qZA(),e._UZ(20,"input",22),e.YNc(21,Qt,2,0,"mat-error"),e.qZA()()()()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.assistanceForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","description")("placeholder","Ejemplo: Monte y desmonte de caja"),e.xp6(3),e.um2(9,t.assistanceForm.get("description").hasError("required")?9:-1),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0),e.xp6(),e.wJu(t.currencies),e.xp6(2),e.um2(16,t.assistanceForm.get("currencyId").hasError("required")?16:-1),e.xp6(4),e.Q6J("formControlName","price")("min",t.assistanceForm.get("price").value)("placeholder","0.00"),e.xp6(),e.um2(21,t.assistanceForm.get("price").hasError("required")?21:-1)}}function Ot(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.updateAssistance())}),e._uU(1," Actualizar "),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.assistanceForm.invalid)("matDialogClose","confirmed")}}function Gt(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createAssistance())}),e._uU(1," Agregar "),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.assistanceForm.invalid)("matDialogClose","confirmed")}}function jt(o,l){if(1&o&&(e.TgZ(0,"div",24)(1,"button",25),e._uU(2," Cancelar "),e.qZA(),e.YNc(3,Ot,2,3,"button",26)(4,Gt,2,3,"button",26),e.qZA()),2&o){const t=e.oxw();e.xp6(),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.um2(3,"edit"===t.data.dialogMode?3:-1),e.xp6(),e.um2(4,"add"===t.data.dialogMode?4:-1)}}let Vt=(()=>{class o{constructor(t){this.data=t,this.currencies=[],this.dialogMode="view",this.maxDate=new Date,this._assistancesService=(0,e.f3M)(Ie),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialogRef=(0,e.f3M)(A.so),this._formBuilder=(0,e.f3M)(r.qu),this._fuseConfirmationService=(0,e.f3M)(ae.R),this._snackBar=(0,e.f3M)(N.ux),this._unsubscribeAll=new V.x,this.store=(0,e.f3M)(C.yh),this.dialogMode=t.dialogMode,this.assistance=t.assistance}ngOnInit(){this.assistanceForm=this._formBuilder.group({id:new r.NI(null),description:new r.NI(null,[r.kI.required,r.kI.maxLength(1e5)]),price:new r.NI(0,[r.kI.required,r.kI.min(0)]),currencyId:new r.NI(null,[r.kI.required,r.kI.maxLength(100)])}),"edit"===this.dialogMode&&this.assistanceForm.patchValue(this.assistance),this.store.select(pe.zd).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createAssistance(){let t=this.assistanceForm.getRawValue();t=(0,Ft.Z)(t,["id"]),this._fuseConfirmationService.open({title:"Crear servicio de taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._assistancesService.createAssistance(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:n})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.createAssistance.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateAssistance(){const t=this.assistanceForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar servicio de taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._assistancesService.updateAssistance(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:n})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.updateAssistance.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(A.WI))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-assistance-dialog"]],standalone:!0,features:[e.jDz],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"grid","w-full","grid-cols-1","gap-5","mt-3","sm:grid-cols-2",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-dense","sm:col-span-2"],["matInput","","type","text","required","","maxlength","50",3,"formControlName","placeholder"],[1,"w-full","fuse-mat-dense"],[3,"formControlName","required"],["matInput","","type","number","required","",3,"formControlName","min","placeholder"],[3,"value"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Rt,2,0,"h2",2)(3,Jt,2,0,"h2",2),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,Mt,9,1,"div",4)(6,zt,22,12,"div",5),e.qZA(),e.YNc(7,jt,5,3,"div",6),e.qZA()),2&a&&(e.xp6(2),e.um2(2,"add"===i.data.dialogMode?2:-1),e.xp6(),e.um2(3,"edit"===i.data.dialogMode?3:-1),e.xp6(2),e.um2(5,"view"===i.data.dialogMode?5:-1),e.xp6(),e.um2(6,6),e.xp6(),e.um2(7,"view"!==i.data.dialogMode?7:-1))},dependencies:[T.ot,T.lW,A.ZT,g.lN,g.KE,g.hX,g.bx,g.TO,U.c,U.Nt,K.LD,K.gD,xe.ey,r.UX,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.Q7,r.nD,r.qQ,r.sg,r.u],encapsulation:2})}return o})();var $e=d(27627);function Yt(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-slide-toggle",40),e.NdJ("change",function(i){e.CHM(t);const n=e.oxw(),s=n.$implicit,c=n.$index,u=e.oxw(2);return e.KtG(u.updateRateStatus(i,s,c))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("checked",t.active)("color","primary")}}function Ht(o,l){1&o&&e._UZ(0,"mat-spinner",36),2&o&&e.Q6J("diameter",20)("color","primary")}function Kt(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",30)(1,"div",31),e._uU(2),e.qZA(),e.TgZ(3,"div",32),e._uU(4),e.qZA(),e.TgZ(5,"div",33),e._uU(6),e.qZA(),e.TgZ(7,"div",34),e._uU(8),e.ALo(9,"currency"),e.qZA(),e.TgZ(10,"div",27),e.YNc(11,Yt,1,2,"mat-slide-toggle",35)(12,Ht,1,2,"mat-spinner",36),e.qZA(),e.TgZ(13,"div",37)(14,"button",38),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.openDialog(n,"edit"))}),e._UZ(15,"mat-icon",39),e.qZA(),e.TgZ(16,"button",38),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.deleteAssistance(n))}),e._UZ(17,"mat-icon",39),e.qZA()()()}if(2&o){const t=l.$implicit,a=l.$index,i=e.oxw(2);e.xp6(2),e.hij(" ",a+1," "),e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",e.Dn7(9,8,t.price,t.currency.iso+" ","symbol")," "),e.xp6(3),e.um2(11,i.isSlideLoading&&i.selectedSlide===a?-1:11),e.xp6(),e.um2(12,i.isSlideLoading&&i.selectedSlide===a?12:-1),e.xp6(3),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}const Wt=o=>({"pointer-events-none":o}),Xt=()=>[5,10,25,100];function ei(o,l){if(1&o&&(e.TgZ(0,"div",24)(1,"div",25)(2,"div",26),e._uU(3," No "),e.qZA(),e.TgZ(4,"div",27),e._uU(5," C\xf3digo "),e.qZA(),e.TgZ(6,"div",28),e._uU(7," Descripci\xf3n "),e.qZA(),e.TgZ(8,"div",27),e._uU(9," Precio "),e.qZA(),e.TgZ(10,"div",27),e._uU(11," Estado "),e.qZA(),e.TgZ(12,"div",27),e._uU(13," Acciones "),e.qZA()(),e.SjG(14,Kt,18,12,"div",41,e.QCX().trackByFn),e._UZ(16,"mat-paginator",29),e.qZA()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(12),e.wJu(t.assistances),e.xp6(2),e.Q6J("ngClass",e.VKq(7,Wt,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(9,Xt))("showFirstLastButtons",!0)}}function ti(o,l){1&o&&(e.TgZ(0,"div",42),e._uU(1," \xa1No hay servicios creados para el negocio!"),e.qZA())}F.vfs=Ee.I.vfs;let ii=(()=>{class o{constructor(){this.assistance=null,this.assistances=[],this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.searchInputControl=new r.NI(""),this.selectedSlide=null,this.user=null,this._assistancesService=(0,e.f3M)(Ie),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialog=(0,e.f3M)(A.uw),this._fileSaverService=(0,e.f3M)($e.m),this._fuseConfirmationService=(0,e.f3M)(ae.R),this._snackBar=(0,e.f3M)(N.ux),this._unsubscribeAll=new V.x,this.store=(0,e.f3M)(C.yh)}ngOnInit(){this.store.select(G.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(z.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(fe).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.assistances=t,this._changeDetectorRef.markForCheck()}),this.store.select(H.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(300),(0,P.w)(t=>(this.isLoading=!0,this._assistancesService.getAssistances(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,L.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,le.T)(this._sort.sortChange,this._paginator.page).pipe((0,P.w)(()=>(this.isLoading=!0,this._assistancesService.getAssistances(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,L.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteAssistance(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la orden de trabajo: ${t.no}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._assistancesService.removeAssistance(t.id).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:n})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.removeAssistance.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}updateRateStatus(t,a,i){this.isSlideLoading=!0,this.selectedSlide=i,this._assistancesService.updateAssistanceStatus({id:a.id,active:t.checked}).subscribe(({data:n})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.updateAssistanceStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}openDialog(t,a){this._dialog.open(Vt,{data:{assistance:t,dialogMode:a},width:"90%",panelClass:"ath-dialog-panel",disableClose:!0})}printAssistancesList(t="open"){this._assistancesService.getAllAssistances().pipe((0,O.q)(1)).subscribe(({data:a})=>{let i={header:{text:"Listado de servicios",style:"header",marginTop:5},content:[{lineHeight:1.3,table:{headerRows:1,widths:[60,120,"*",120],body:[[{text:"No.",style:"table_header"},{text:"C\xf3digo",style:"table_header"},{text:"Descripci\xf3n",style:"table_header",alignment:"left"},{text:"Precio M\xednimo",style:"table_header"}],...a.findAllAssistances.assistances.map((n,s)=>[{style:"table_body",text:s+1,alignment:"center"},{style:"table_body",text:n.no,alignment:"center"},{style:"table_body",text:n.description,alignment:"left"},{style:"table_body",text:n.currency.iso+" "+n.price.toFixed(2),alignment:"right"}])]},layout:"lightHorizontalLines"}],footer:(n,s)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${this.user.fullname} | Esta informaci\xf3n es exclusiva de ${this.merchant.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${n.toString()}/${s} - Fecha de impresi\xf3n ${I().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"]},table_body:{fontSize:10}},pageOrientation:"landscape",pageSize:"LETTER",watermark:{text:this.merchant.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:"Listado de servicios",author:`${this.user.fullname}`,creationDate:I().toDate(),modDate:I().toDate(),producer:this.merchant.name}};switch(t){case t="download":F.createPdf(i).download();break;case t="open":F.createPdf(i).open();break;case t="print":F.createPdf(i).print()}})}exportAssistancesListToExcel(){this._assistancesService.getAllAssistances().pipe((0,O.q)(1)).subscribe(({data:t})=>{this._fileSaverService.exportAsExcelFile(t.findAllAssistances.assistances,"Listado de servicios")})}trackByFn(t,a){return a.id||t}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-assistances"]],viewQuery:function(a,i){if(1&a&&(e.Gf(w.NW,5),e.Gf(S.YE,5)),2&a){let n;e.iGM(n=e.CRH())&&(i._paginator=n.first),e.iGM(n=e.CRH())&&(i._sort=n.first)}},standalone:!0,features:[e.jDz],decls:42,vars:14,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"matMenuTriggerFor"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"xPosition"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-auto","sm:mb-18"],["class","grid"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","assistances-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,"text-center"],[1,"text-left"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","assistances-grid","md:px-8"],[1,"hidden","font-mono","sm:block"],[1,"hidden","font-mono","text-center","sm:block"],[1,"text-left","truncate"],[1,"font-mono","text-center"],[3,"checked","color"],[3,"diameter","color"],[1,"flex","flex-row","items-center","justify-start","gap-1"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[3,"checked","color","change"],["class","grid items-center gap-4 px-6 py-3 border-b assistances-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Servicios"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Servicios "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Reportes"),e.qZA()(),e.TgZ(26,"mat-menu",17,18)(28,"button",19),e.NdJ("click",function(){return i.printAssistancesList()}),e._UZ(29,"mat-icon",15),e._uU(30," Imprimir listado de servicios "),e.qZA(),e.TgZ(31,"button",19),e.NdJ("click",function(){return i.exportAssistancesListToExcel()}),e._UZ(32,"mat-icon",15),e._uU(33," Exportar listado de servicios "),e.qZA()(),e.TgZ(34,"button",20),e.NdJ("click",function(){return i.openDialog(i.assistance,"add")}),e._UZ(35,"mat-icon",15),e.TgZ(36,"span",16),e._uU(37,"Agregar"),e.qZA()()()(),e.TgZ(38,"div",21)(39,"div",22),e.YNc(40,ei,17,10,"div",23)(41,ti,2,0),e.qZA()()()),2&a){const n=e.MAs(27);e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(),e.Q6J("matMenuTriggerFor",n),e.xp6(),e.Q6J("svgIcon","mat_solid:expand_more"),e.xp6(3),e.Q6J("xPosition","before"),e.xp6(3),e.Q6J("svgIcon","mat_solid:description"),e.xp6(3),e.Q6J("svgIcon","mat_solid:description"),e.xp6(3),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.um2(40,i.assistances.length>0?40:41)}},dependencies:[v.H9,T.ot,T.lW,g.lN,g.KE,g.qo,k.Ps,k.Hw,U.c,U.Nt,w.TU,w.NW,S.JX,S.YE,S.nU,$.Tx,$.VK,$.OP,$.p6,me.rP,me.Rr,Y.Cq,Y.Ou,v.mk,r.UX,r.Fj,r.JJ,r.oH,J.rH],encapsulation:2,changeDetection:0})}return o})();var te=d(24630),ne=d(75986),q=d(38034),re=d(92596),R=d(22096),W=d(27921),ee=d(21631),se=d(64716),Se=d(33963),Le=d(90716),Fe=d(12936),ye=d(74595);const oi=Z.Ps`
    mutation CreatedOffer($createOfferInput: CreateOfferInput!) {
        createdOffer(createOfferInput: $createOfferInput) {
            id
            no
            createdAt
            currencyId
            products {
                productId
                name
                uom
                quantity
                price
            }
            status
            customerId
            total
            userId
            offerDate
        }
    }

`,ai=Z.Ps`
    mutation UpdateOffer($updateOfferInput: UpdateOfferInput!) {
        updatedOffer(updateOfferInput: $updateOfferInput) {
            id
            no
            createdAt
            currencyId
            products {
                productId
                name
                uom
                quantity
                price
            }
            status
            customerId
            total
            userId
            offerDate
        }
    }
`,ni=Z.Ps`
    mutation RemoveOffer($removeOfferId: String!) {
        removeOffer(id: $removeOfferId)
    }
`,ri=Z.Ps`
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
                    name
                    # brand
                    uom
                    quantity
                    price
                }
                total
                offerDate
            }
        }
    }
`,si=Z.Ps`
    query FindOfferById($findOfferById: String!) {
        offer(id: $findOfferById) {
            id
            no
            createdAt
            currencyId
            products
            status
            customerId
            total
            offerDate
        }
    }
`;let li=(()=>{class o{constructor(t,a){this.apolloProvider=t,this._snackBar=a,this._apollo=this.apolloProvider.use("BALANC")}createOffer(t){return this._apollo.mutate({mutation:oi,variables:{createOfferInput:t},errorPolicy:"all"}).pipe((0,B.b)(({})=>{}))}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(Z._M),e.LFG(N.ux))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ze=d(76459),Qe=d(88320),ze=d(66330),X=d(88458);class ci{constructor(l,t,a,i,n,s){this.productId=l,this.name=t,this.uom=a,this.price=i,this.quantity=n,this.depotId=s}}function di(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",42),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.selectCustomer(n))}),e._uU(1),e.qZA()}if(2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.name," ")}}function mi(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La fecha de la oferta es obligatoria "),e.qZA())}function pi(o,l){1&o&&(e.TgZ(0,"mat-option",26),e._uU(1," x1 "),e.qZA()),2&o&&e.Q6J("value",1)}function gi(o,l){if(1&o&&(e.TgZ(0,"mat-option",26),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.value),e.xp6(),e.hij(" x",t.value," ")}}function hi(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El multiplicador es obligatorio "),e.qZA())}function fi(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",42),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.selectedCurrencyIso=n.iso)}),e._uU(1),e.qZA()}if(2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.iso," ")}}function _i(o,l){if(1&o&&(e.TgZ(0,"span",43),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(),e.AsE(" (+ ",2===(null==t.bidForm.get("rates").value?null:t.bidForm.get("rates").value.length)?"otro":"otros"," ",t.bidForm.get("rates").value.length>2?t.bidForm.get("rates").value.length-1:"",") ")}}function bi(o,l){if(1&o&&(e.TgZ(0,"mat-option",26)(1,"span",44),e._uU(2),e.ALo(3,"number"),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA()()),2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(2),e.Oqu(e.xi3(3,3,t.value,"1.4-4")),e.xp6(3),e.hij(" ",t.name,"")}}function xi(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Las tasas de cambio son requeridas "),e.qZA())}function yi(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",45),e.NdJ("click",function(i){const s=e.CHM(t).$implicit;return e.oxw().addProductToOffer(s),e.KtG(i.stopPropagation())}),e.TgZ(1,"div",46),e.NdJ("click",function(i){const s=e.CHM(t).$implicit;return e.oxw().addProductToOffer(s),e.KtG(i.stopPropagation())}),e.TgZ(2,"span",47),e._UZ(3,"mat-checkbox",48),e._uU(4),e.qZA(),e.TgZ(5,"span",49),e._uU(6),e.qZA(),e.TgZ(7,"span",50),e._uU(8),e.qZA()()()}if(2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(3),e.Q6J("checked",t.checked),e.xp6(),e.hij(" ",t.name," "),e.xp6(2),e.Oqu(t.depot),e.xp6(2),e.AsE("",t.quantity," ",t.uom,"")}}const Ci=(o,l)=>l.id;function vi(o,l){1&o&&(e.TgZ(0,"mat-error",70),e._uU(1," Valor m\xednimo 0.1 "),e.qZA())}function Ai(o,l){if(1&o&&(e.TgZ(0,"mat-error",70),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(),e.hij(" Valor m\xe1ximo ",t.quantity," ")}}function Zi(o,l){1&o&&(e.TgZ(0,"mat-error",70),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}const Ti=o=>({"text-warn":o}),Ii=()=>["$"];function Si(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",56)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",57),e._uU(4),e.qZA(),e.TgZ(5,"div",58),e._uU(6),e.qZA(),e.TgZ(7,"div",54),e._uU(8),e.qZA(),e.TgZ(9,"div",59)(10,"div",60)(11,"button",61),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.decrementProductQty(n))}),e._UZ(12,"mat-icon",62),e.qZA(),e.TgZ(13,"mat-form-field",63),e._UZ(14,"input",64),e.qZA(),e.TgZ(15,"button",61),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.incrementProductQty(n))}),e._UZ(16,"mat-icon",62),e.qZA()(),e.YNc(17,vi,2,0,"mat-error",65)(18,Ai,2,1,"mat-error",65)(19,Zi,2,0,"mat-error",65),e.qZA(),e.TgZ(20,"div",66),e._uU(21),e.ALo(22,"number"),e.TgZ(23,"span",67),e._uU(24),e.qZA()(),e.TgZ(25,"div",66),e._uU(26),e.ALo(27,"currency"),e.qZA(),e.TgZ(28,"div",68)(29,"button",69),e.NdJ("click",function(){const n=e.CHM(t).$index,s=e.oxw(2);return e.KtG(s.removeProductToOffer(n))}),e._UZ(30,"mat-icon",62),e.qZA()()()}if(2&o){const t=l.$implicit,a=l.$index,i=e.oxw(2);e.xp6(2),e.hij(" ",a+1," "),e.xp6(),e.Q6J("matTooltip",t.get("name").value),e.xp6(),e.hij(" ",t.get("name").value," "),e.xp6(2),e.hij(" ",t.get("depot").value," "),e.xp6(2),e.AsE(" ",t.get("stock").value," ",t.get("uom").value," "),e.xp6(3),e.Q6J("disabled",t.get("quantity").value<=.1||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",.1)("max",t.get("stock").value)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").value>=t.get("stock").value||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(17,t.get("quantity").hasError("min")?17:-1),e.xp6(),e.um2(18,t.get("quantity").hasError("max")?18:-1),e.xp6(),e.um2(19,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?19:-1),e.xp6(2),e.hij(" ",e.xi3(22,22,t.get("price").value*i.bidForm.get("multiplier").value*(t.get("rate").value?t.get("rate").value:1),"1.2-2")," "),e.xp6(2),e.Q6J("ngClass",e.VKq(28,Ti,!t.get("rate").value)),e.xp6(),e.hij(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.xp6(2),e.hij(" ",e.xi3(27,25,t.get("quantity").value*t.get("price").value*i.bidForm.get("multiplier").value*(t.get("rate").value?t.get("rate").value:1),e.DdM(30,Ii))," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function Fi(o,l){if(1&o&&(e.TgZ(0,"div",51)(1,"div",52),e._UZ(2,"div"),e.TgZ(3,"div",53),e._uU(4," Producto "),e.qZA(),e.TgZ(5,"div",53),e._uU(6," Almac\xe9n "),e.qZA(),e.TgZ(7,"div",54),e._uU(8," Disponibilidad "),e.qZA(),e.TgZ(9,"div",54),e._uU(10," Cantidad "),e.qZA(),e.TgZ(11,"div",55),e._uU(12," Precio "),e.qZA(),e.TgZ(13,"div",55),e._uU(14," Total "),e.qZA(),e.TgZ(15,"div",54),e._uU(16," Quitar "),e.qZA()(),e.SjG(17,Si,31,31,"div",71,Ci),e.qZA()),2&o){const t=e.oxw();e.xp6(17),e.wJu(t.bidForm.get("products").controls)}}function qi(o,l){1&o&&(e.TgZ(0,"div",72),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}const ki=()=>({suppressScrollX:!0}),wi=()=>({suppressScrollY:!0});let Di=(()=>{class o{constructor(){this.audio=new Audio("./assets/sounds/caja.mp3"),this.currencies$=(0,R.of)([]),this.maxDate=new Date,this.multipliers$=(0,R.of)([]),this.rates=[],this.searchCustomerControl=new r.NI(null),this.searchProductControl=new r.NI(null),this.selectedCurrencyIso="",this.selectedCustomerName="",this.total=0,this._bidService=(0,e.f3M)(li),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._customersService=(0,e.f3M)(Ze.v),this._formBuilder=(0,e.f3M)(r.qu),this._fuseConfirmationService=(0,e.f3M)(ae.R),this._ratesService=(0,e.f3M)(ze.m),this._snackBar=(0,e.f3M)(N.ux),this._stocksService=(0,e.f3M)(Qe.T),this._unsubscribeAll=new V.x,this.store=(0,e.f3M)(C.yh)}ngOnInit(){this.bidForm=this._formBuilder.group({id:new r.NI,offerDate:new r.NI(new Date,[r.kI.required]),multiplier:new r.NI(1,[r.kI.required,r.kI.min(1)]),currencyId:new r.NI(null,[r.kI.required]),customerId:new r.NI("",[r.kI.required]),rates:new r.NI([],[r.kI.required]),observation:new r.NI("",[r.kI.maxLength(5e4)]),products:new r.Oe([])}),this.bidForm.get("products").valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._calculateOfferTotal()}),this.currencies$=this.store.select(pe.zd),this.multipliers$=this.store.select(Le.Af),this.customers$=this.store.select(Se.p6),this.productsInStock$=this.store.select(Fe.K2),this.ratesFiltered=this.bidForm.get("currencyId").valueChanges.pipe((0,W.O)(null),(0,ee.z)(t=>t?this._ratesService.findActiveByBaseId(t):(0,R.of)([]))),this.ratesFiltered.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.resetSelectedProductsRates()}),this.bidForm.get("rates").valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.resetSelectedProductsRates()}),this.bidForm.get("multiplier").valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this._calculateOfferTotal()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,E.b)(200),(0,W.O)(null),(0,ee.z)(t=>this._mapChecked(null!==t&&"string"==typeof t?this._stocksService.getProductsInStockAvailable(t,10):this.productsInStock$))),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,E.b)(200),(0,W.O)(null),(0,ee.z)(t=>null!==t&&"string"==typeof t&&t!==this.selectedCustomerName?this._customersService.findActiveCustomers(t.trim()):this.customers$))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}selectCustomer(t){this.bidForm.get("customerId").setValue(t.id),this.selectedCustomerName=t.name}addStockProduct(t){const a=this.bidForm.get("currencyId").value,i=structuredClone(this.bidForm.get("rates").value);let n=i.find(c=>c.currencyBaseId===a&&c.currencyRefId===t.currencyId);n||(n=i.find(c=>c.currencyRefId===a),n&&(n.value=1/n.value));const s=this._formBuilder.group({productId:new r.NI(t.productId,[r.kI.required]),currencyId:new r.NI(t.currencyId,[r.kI.required]),name:new r.NI(t.name,[r.kI.required]),price:new r.NI(t.price,[r.kI.required]),uom:new r.NI(t.uom,[r.kI.required]),depotId:new r.NI(t.depotId,[r.kI.required]),depot:new r.NI(t.depot,[r.kI.required]),currency:new r.NI(t.currency,[r.kI.required]),stock:new r.NI(t.quantity,[r.kI.required]),rateId:new r.NI(n?n.id:null,[r.kI.required]),rate:new r.NI(n?n.value:null,[r.kI.required]),quantity:new r.NI(1,[X.L.onlyNumbersPattern(),r.kI.required,r.kI.min(.1),r.kI.max(t.quantity)])});this.bidForm.get("products").push(s),this._changeDetectorRef.markForCheck()}removeStockProduct(t){this.bidForm.get("products").removeAt(t),this._changeDetectorRef.markForCheck()}addProductToOffer(t){const a=this.bidForm.get("products").getRawValue().findIndex(i=>i.productId===t.productId&&i.depotId===t.depotId);t.checked?(this.removeStockProduct(a),t.checked=!1):t.checked=!0,!(a>-1)&&this.addStockProduct(t)}incrementProductQty(t){const a=t.get("quantity").value;t.get("quantity").setValue(+a+1)}decrementProductQty(t){const a=t.get("quantity").value;t.get("quantity").setValue(+a-1)}removeProductToOffer(t){this.removeStockProduct(t),this.searchProductControl.reset()}createOffer(){const t=this.bidForm.getRawValue();delete t.id;const a=[];t.ratesId=t.products.map(n=>n.rateId).filter((n,s,c)=>c.indexOf(n)===s);for(const n of t.products)a.push(this._mapProductToOffer(n));t.products=a,t.subtotal=this.total,delete t.rates,this._fuseConfirmationService.open({title:"Generar oferta",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(n=>{"confirmed"===n&&this._bidService.createOffer(t).pipe((0,m.R)(this._unsubscribeAll),(0,se.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:s})=>{s&&(this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:"Factura registrada correctamente",type:"success",svgIcon:"mat_solid:done"}}),this.audio.play(),this.bidForm.get("products").clear(),this.searchProductControl.reset(),this.searchCustomerControl.reset(),this.bidForm.reset(),this.total=0,this.selectedCustomerName="")})})}_mapProductToOffer(t){const{productId:a,price:i,depotId:n,quantity:s}=t,c=this.bidForm.get("multiplier").value,u=new ci(a,"","",i*c*t.rate,Number(s),n);return delete u.name,delete u.uom,u}_calculateOfferTotal(){const t=this.bidForm.get("multiplier").value;this.total=this.bidForm.get("products").getRawValue().map(a=>a.quantity*a.price*t*(a.rate?a.rate:1)).reduce((a,i)=>a+i,0)}_mapChecked(t){return t.pipe((0,L.U)(a=>a.map(i=>this.bidForm.get("products").getRawValue().some(s=>s.productId===i.productId&&s.depotId===i.depotId)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}resetSelectedProductsRates(){const t=this.bidForm.get("currencyId").value,a=structuredClone(this.bidForm.get("rates").value);for(const i of this.bidForm.get("products").controls){let n=a.find(s=>s.currencyBaseId===t&&s.currencyRefId===i.value.currencyId);n||(n=a.find(s=>s.currencyRefId===t),n&&(n.value=1/n.value)),i.get("rate").setValue(n?n.value:null),i.get("rateId").setValue(n?n.id:null)}this._changeDetectorRef.markForCheck()}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-bid"]],standalone:!0,features:[e.jDz],decls:97,vars:59,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0",3,"fuseScrollbarOptions"],[1,"relative","flex","flex-col","px-6","py-8","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["mat-flat-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[1,"flex","flex-col","px-4","mt-4","mb-12","gap-y-8","sm:px-8"],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"grid","gap-4","p-10","sm:grid-cols-4","lg:grid-cols-7",3,"formGroup"],["bidNgForm","ngForm"],["appearance","fill",1,"w-full","md:col-span-2","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[1,"ath-autocomplete",3,"displayWith"],["customerAutocomplete","matAutocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["offerDate",""],[3,"formControlName","required"],[3,"value"],[3,"formControlName","required","placeholder"],[1,"w-full","fuse-mat-dense","lg:col-span-2"],["multiple","",3,"formControlName","required","placeholder"],["class","text-sm opacity-75"],[1,"w-full","sm:col-span-4","lg:col-span-7","fuse-mat-textarea"],["matInput","",3,"formControlName"],[1,"col-span-4","shadow","rounded-2xl","bg-card"],[1,"p-6"],["appearance","fill",1,"w-full","fuse-mat-dense",3,"subscriptSizing"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete",3,"displayWith","closed"],["productsAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","mt-2","mb-2","min-h-72",3,"fuseScrollbarOptions"],["class","grid"],[1,"flex","items-center","justify-center","w-full","gap-2","p-2","font-mono","text-3xl","font-semibold","leading-7","text-white","rounded-b-2xl","bg-gradient-to-r","from-primary-500","to-primary-700"],[3,"value","click"],[1,"text-sm","opacity-75"],[1,"w-18"],[1,"w-full",3,"value","click"],[1,"grid","w-full","grid-cols-6",3,"click"],[1,"flex","flex-row","items-center","col-span-5","truncate","md:col-span-3"],["color","primary",3,"checked"],[1,"items-center","hidden","col-span-2","md:flex"],[1,"flex","items-center","text-center"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left"],[1,"text-center"],[1,"text-right"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"truncate",3,"matTooltip"],[1,"truncate"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"font-mono","text-right"],[3,"ngClass"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"w-full","text-sm","text-center"],["class","grid items-center gap-4 px-6 py-3 border-b billing-products-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-30"],["class","w-full",3,"value"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Cotizaciones"),e.qZA()(),e.TgZ(15,"div",5),e._UZ(16,"mat-icon",6),e.TgZ(17,"a",7),e._uU(18,"Ofertar"),e.qZA()()(),e.TgZ(19,"div",8)(20,"h2",9),e._uU(21," Ofertar "),e.qZA()()(),e.TgZ(22,"div",10)(23,"button",11),e.NdJ("click",function(){return i.createOffer()}),e._uU(24," Generar Oferta "),e.qZA()()(),e.TgZ(25,"div",12)(26,"div",13)(27,"form",14,15)(29,"mat-form-field",16)(30,"mat-label"),e._uU(31,"Cliente"),e.qZA(),e._UZ(32,"mat-icon",17)(33,"input",18),e.TgZ(34,"mat-autocomplete",19,20),e.SjG(36,di,2,2,"mat-option",26,e.x6l),e.ALo(38,"async"),e.qZA()(),e.TgZ(39,"mat-form-field",21)(40,"mat-label"),e._uU(41,"Fecha de la oferta"),e.qZA(),e._UZ(42,"input",22),e.TgZ(43,"mat-hint"),e._uU(44,"DD/MM/YYYY"),e.qZA(),e._UZ(45,"mat-datepicker-toggle",23)(46,"mat-datepicker",null,24),e.YNc(48,mi,2,0,"mat-error"),e.qZA(),e.TgZ(49,"mat-form-field",21)(50,"mat-label"),e._uU(51,"Multiplicador"),e.qZA(),e.TgZ(52,"mat-select",25),e.YNc(53,pi,2,1,"mat-option",26),e.ALo(54,"async"),e.SjG(55,gi,2,2,"mat-option",26,e.x6l),e.ALo(57,"async"),e.qZA(),e.YNc(58,hi,2,0,"mat-error"),e.qZA(),e.TgZ(59,"mat-form-field",21)(60,"mat-label"),e._uU(61,"Moneda"),e.qZA(),e.TgZ(62,"mat-select",27),e.SjG(63,fi,2,2,"mat-option",26,e.x6l),e.ALo(65,"async"),e.qZA()(),e.TgZ(66,"mat-form-field",28)(67,"mat-label"),e._uU(68,"Tasa de Cambio"),e.qZA(),e.TgZ(69,"mat-select",29)(70,"mat-select-trigger"),e._uU(71),e.YNc(72,_i,2,2,"span",30),e.qZA(),e.SjG(73,bi,6,6,"mat-option",26,e.x6l),e.ALo(75,"async"),e.qZA(),e.YNc(76,xi,2,0,"mat-error"),e.qZA(),e.TgZ(77,"mat-form-field",31)(78,"mat-label"),e._uU(79,"Observaciones"),e.qZA(),e._UZ(80,"textarea",32),e.qZA()()(),e.TgZ(81,"div",33)(82,"div",34)(83,"mat-form-field",35),e._UZ(84,"mat-icon",17)(85,"input",36),e.TgZ(86,"mat-autocomplete",37,38),e.NdJ("closed",function(){return i.searchProductControl.reset()}),e.SjG(88,yi,9,6,"mat-option",73,e.x6l),e.ALo(90,"async"),e.qZA()(),e.TgZ(91,"div",39),e.YNc(92,Fi,19,0,"div",40)(93,qi,2,0),e.qZA()(),e.TgZ(94,"div",41),e._uU(95),e.ALo(96,"number"),e.qZA()()()()),2&a){const n=e.MAs(35),s=e.MAs(47),c=e.MAs(87);e.Q6J("fuseScrollbarOptions",e.DdM(57,ki)),e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("disabled",i.bidForm.pristine||i.bidForm.invalid||0===i.bidForm.get("products").controls.length),e.xp6(4),e.Q6J("formGroup",i.bidForm),e.xp6(5),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchCustomerControl)("matAutocomplete",n)("placeholder","Buscar cliente")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(38,42,i.customersFiltered)),e.xp6(6),e.Q6J("matDatepicker",s)("formControlName","offerDate")("max",i.maxDate)("required",!0),e.xp6(3),e.Q6J("for",s),e.xp6(3),e.um2(48,i.bidForm.get("offerDate").hasError("required")?48:-1),e.xp6(4),e.Q6J("formControlName","multiplier")("required",!0),e.xp6(),e.um2(53,0===e.lcZ(54,44,i.multipliers$).length?53:-1),e.xp6(2),e.wJu(e.lcZ(57,46,i.multipliers$)),e.xp6(3),e.um2(58,i.bidForm.get("multiplier").hasError("required")?58:-1),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0)("placeholder","Moneda"),e.xp6(),e.wJu(e.lcZ(65,48,i.currencies$)),e.xp6(6),e.Q6J("formControlName","rates")("required",!0)("placeholder","Tasa de cambio"),e.xp6(2),e.hij(" ",(null==i.bidForm.get("rates").value||null==i.bidForm.get("rates").value[0]?null:i.bidForm.get("rates").value[0].name)||""," "),e.xp6(),e.um2(72,((null==i.bidForm.get("rates").value?null:i.bidForm.get("rates").value.length)||0)>1?72:-1),e.xp6(),e.wJu(e.lcZ(75,50,i.ratesFiltered)),e.xp6(3),e.um2(76,i.bidForm.get("rates").hasError("required")?76:-1),e.xp6(4),e.Q6J("formControlName","observation"),e.xp6(3),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchProductControl)("matAutocomplete",c)("placeholder","Buscar productos"),e.xp6(),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(90,52,i.productsFiltered)),e.xp6(3),e.Q6J("fuseScrollbarOptions",e.DdM(58,wi)),e.xp6(),e.um2(92,i.bidForm.get("products").controls.length>0?92:93),e.xp6(3),e.AsE(" ",e.xi3(96,54,i.total,"1.2-2")," ",i.selectedCurrencyIso," ")}},dependencies:[v.Ov,v.H9,v.JJ,r.u5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,ye.H,te.Bb,te.XC,xe.ey,te.ZL,T.ot,T.lW,ne.p9,ne.oG,q.FA,q.Mq,q.hl,q.nW,g.lN,g.KE,g.hX,g.bx,g.TO,g.qo,g.R9,k.Ps,k.Hw,U.c,U.Nt,$.Tx,K.LD,K.gD,K.$L,re.AV,re.gM,v.mk,r.UX,r.oH,r.sg,r.u,J.rH],encapsulation:2,changeDetection:0})}return o})();var qe=d(6990),ot=d(7185),at=d(302),Oe=d(57482);const Ui=Z.Ps`
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
                # productsInBill {
                #     id
                #     name
                #     uom {
                #         abbr
                #     }
                #     price
                # }

                assistancesInBill {
                    id
                    description
                    price
                    # quantity
                }

                assistances {
                    assistanceId
                    quantity
                    price
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
`,Pi=Z.Ps`
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
                # productsInBill {
                #     id
                #     name
                #     uom {
                #         abbr
                #     }
                #     price
                # }

                assistances {
                    assistanceId
                    quantity
                    price
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
`,Bi=Z.Ps`
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
`,Ni=Z.Ps`
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
        # productsInBill {
        #     id
        #     name
        #     uom {
        #         abbr
        #     }
        #     price
        # }
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
`,Ri=Z.Ps`
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
            # productsInBill {
            #     id
            #     name
            #     uom {
            #         abbr
            #     }
            #     price
            # }
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
`,Ji=Z.Ps`
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
            # productsInBill {
            #     id
            #     name
            #     uom {
            #         abbr
            #     }
            #     price
            # }
            status
            customerId
            total
            userId
            billDate
        }
    }
`,Mi=Z.Ps`
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
`,Ei=Z.Ps`
    mutation RemoveBill($removeBillId: String!) {
        removeBill(id: $removeBillId)
    }
`,$i=Z.Ps`
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
`;let Li=(()=>{class o{constructor(t,a){this.apolloProvider=t,this._snackBar=a,this._apollo=this.apolloProvider.use("BALANC")}createBill(t){return this._apollo.mutate({mutation:Ri,variables:{createBillInput:t},errorPolicy:"all"})}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(Z._M),e.LFG(N.ux))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ce=d(47452),Q=d(55568);function Qi(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-checkbox",11),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.billProducts=i)}),e._uU(1,"Productos"),e.qZA(),e.TgZ(2,"mat-checkbox",11),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.billAssistances=i)}),e._uU(3,"Servicios"),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("ngModel",t.billProducts),e.xp6(2),e.Q6J("ngModel",t.billAssistances)}}function zi(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",37),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.selectCustomer(n))}),e._uU(1),e.qZA()}if(2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.name," ")}}function Oi(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La fecha de la factura es obligatoria "),e.qZA())}function Gi(o,l){1&o&&(e.TgZ(0,"mat-option",27),e._uU(1," x1 "),e.qZA()),2&o&&e.Q6J("value",1)}function ji(o,l){if(1&o&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.value),e.xp6(),e.hij(" x",t.value," ")}}function Vi(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El multiplicador es obligatorio "),e.qZA())}function Yi(o,l){if(1&o&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function Hi(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de comprobante es obligatorio "),e.qZA())}function Ki(o,l){if(1&o&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function Wi(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de operaci\xf3n es obligatorio "),e.qZA())}function Xi(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",37),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.selectedCurrencyIso=n.iso)}),e._uU(1),e.qZA()}if(2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.iso," ")}}function eo(o,l){if(1&o&&(e.TgZ(0,"span",38),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(),e.AsE(" (+ ",2===(null==t.billingForm.get("rates").value?null:t.billingForm.get("rates").value.length)?"otro":"otros"," ",t.billingForm.get("rates").value.length>2?t.billingForm.get("rates").value.length-1:"",") ")}}function to(o,l){if(1&o&&(e.TgZ(0,"mat-option",27)(1,"span",39),e._uU(2),e.ALo(3,"number"),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA()()),2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(2),e.Oqu(e.xi3(3,3,t.value,"1.4-4")),e.xp6(3),e.hij(" ",t.name,"")}}function io(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Las tasas de cambio son requeridas "),e.qZA())}function oo(o,l){if(1&o&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.AsE(" ",t.no," ",t.currency," ")}}function ao(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La cuenta bancaria es obligatorio "),e.qZA())}function no(o,l){if(1&o&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function ro(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",49),e.NdJ("click",function(i){const s=e.CHM(t).$implicit;return e.oxw(2).addProductToBill(s),e.KtG(i.stopPropagation())}),e.TgZ(1,"div",50),e.NdJ("click",function(i){const s=e.CHM(t).$implicit;return e.oxw(2).addProductToBill(s),e.KtG(i.stopPropagation())}),e.TgZ(2,"span",51),e._UZ(3,"mat-checkbox",52),e._uU(4),e.qZA(),e.TgZ(5,"span",53),e._uU(6),e.qZA(),e.TgZ(7,"span",54),e._uU(8),e.ALo(9,"number"),e.qZA()()()}if(2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(3),e.Q6J("checked",t.checked),e.xp6(),e.hij(" ",t.name," "),e.xp6(2),e.Oqu(t.depot),e.xp6(2),e.AsE("",e.xi3(9,6,t.quantity,"1.2-2")," ",t.uom,"")}}const nt=(o,l)=>l.id;function so(o,l){1&o&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 0.1 "),e.qZA())}function lo(o,l){if(1&o&&(e.TgZ(0,"mat-error",76),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(),e.hij(" Valor m\xe1ximo ",t.quantity," ")}}function co(o,l){1&o&&(e.TgZ(0,"mat-error",76),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}function uo(o,l){1&o&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 0 "),e.qZA())}function mo(o,l){1&o&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor requerido "),e.qZA())}const rt=o=>({"text-warn":o}),st=()=>["$"];function po(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",60)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",61),e._uU(4),e.qZA(),e.TgZ(5,"div",62),e._uU(6),e.qZA(),e.TgZ(7,"div",58),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"div",63)(11,"div",64)(12,"button",65),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.decrementProductQty(n))}),e._UZ(13,"mat-icon",66),e.qZA(),e.TgZ(14,"mat-form-field",67),e._UZ(15,"input",68),e.qZA(),e.TgZ(16,"button",65),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.incrementProductQty(n))}),e._UZ(17,"mat-icon",66),e.qZA()(),e.YNc(18,so,2,0,"mat-error",69)(19,lo,2,1,"mat-error",69)(20,co,2,0,"mat-error",69),e.qZA(),e.TgZ(21,"div",70)(22,"mat-form-field",67),e._UZ(23,"input",71),e.qZA(),e.YNc(24,uo,2,0,"mat-error",69)(25,mo,2,0,"mat-error",69),e.qZA(),e.TgZ(26,"div",72),e._uU(27),e.qZA(),e.TgZ(28,"div",73),e._uU(29),e.ALo(30,"currency"),e.qZA(),e.TgZ(31,"div",74)(32,"button",75),e.NdJ("click",function(){const n=e.CHM(t).$index,s=e.oxw(3);return e.KtG(s.removeProductToBill(n))}),e._UZ(33,"mat-icon",66),e.qZA()()()}if(2&o){const t=l.$implicit,a=l.$index,i=e.oxw(3);e.xp6(2),e.hij(" ",a+1," "),e.xp6(),e.Q6J("matTooltip",t.get("name").value),e.xp6(),e.hij(" ",t.get("name").value," "),e.xp6(2),e.hij(" ",t.get("depot").value," "),e.xp6(2),e.AsE(" ",e.xi3(9,27,t.get("stock").value,"1.2-2")," ",t.get("uom").value," "),e.xp6(4),e.Q6J("disabled",t.get("quantity").value<=.1||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",.1)("max",t.get("stock").value)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").value>=t.get("stock").value||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(18,t.get("quantity").hasError("min")?18:-1),e.xp6(),e.um2(19,t.get("quantity").hasError("max")?19:-1),e.xp6(),e.um2(20,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?20:-1),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",0)("max",9999999)("formControl",t.get("price")),e.xp6(),e.um2(24,t.get("price").hasError("min")?24:-1),e.xp6(),e.um2(25,t.get("price").hasError("required")?25:-1),e.xp6(),e.Q6J("ngClass",e.VKq(33,rt,!t.get("rate").value)),e.xp6(),e.hij(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.xp6(2),e.hij(" ",e.xi3(30,30,t.get("pt").value,e.DdM(35,st))," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function go(o,l){if(1&o&&(e.TgZ(0,"div",55)(1,"div",56),e._UZ(2,"div"),e.TgZ(3,"div",57),e._uU(4," Producto "),e.qZA(),e.TgZ(5,"div",57),e._uU(6," Almac\xe9n "),e.qZA(),e.TgZ(7,"div",58),e._uU(8," Disponibilidad "),e.qZA(),e.TgZ(9,"div",58),e._uU(10," Cantidad "),e.qZA(),e.TgZ(11,"div",58),e._uU(12," Precio "),e.qZA(),e.TgZ(13,"div",58),e._uU(14," Moneda "),e.qZA(),e.TgZ(15,"div",59),e._uU(16," Total "),e.qZA(),e.TgZ(17,"div",58),e._uU(18," Quitar "),e.qZA()(),e.SjG(19,po,34,36,"div",77,nt),e.qZA()),2&o){const t=e.oxw(2);e.xp6(19),e.wJu(t.billingForm.get("products").controls)}}function ho(o,l){1&o&&(e.TgZ(0,"div",78),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}const lt=()=>({suppressScrollY:!0}),ct=o=>({"cursor-pointer shadow":o});function fo(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",40)(1,"div",41)(2,"mat-form-field",42),e._UZ(3,"mat-icon",18)(4,"input",43),e.TgZ(5,"mat-autocomplete",44,45),e.NdJ("closed",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchProductControl.reset())}),e.SjG(7,ro,10,9,"mat-option",79,e.x6l),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",46),e.YNc(11,go,21,0,"div",47)(12,ho,2,0),e.qZA()(),e.TgZ(13,"div",48),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createBill())}),e._uU(14),e.ALo(15,"number"),e.qZA()()}if(2&o){const t=e.MAs(6),a=e.oxw();e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",a.searchProductControl)("matAutocomplete",t)("placeholder","Buscar existencia de productos en inventario"),e.xp6(),e.Q6J("displayWith",a.displayFn),e.xp6(2),e.wJu(e.lcZ(9,11,a.productsFiltered)),e.xp6(3),e.Q6J("fuseScrollbarOptions",e.DdM(16,lt)),e.xp6(),e.um2(11,a.billingForm.get("products").controls.length>0?11:12),e.xp6(2),e.Q6J("ngClass",e.VKq(17,ct,a.billingForm.valid&&a.billingForm.get("products").controls.length>0)),e.xp6(),e.AsE(" ",e.xi3(15,13,a.total-a.billingForm.get("discount").value+a.billingForm.get("surcharge").value,"1.2-2")," ",a.selectedCurrencyIso," ")}}function _o(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",49),e.NdJ("click",function(i){const s=e.CHM(t).$implicit;return e.oxw(2).addAssistanceToBill(s),e.KtG(i.stopPropagation())}),e.TgZ(1,"div",50),e.NdJ("click",function(i){const s=e.CHM(t).$implicit;return e.oxw(2).addAssistanceToBill(s),e.KtG(i.stopPropagation())}),e.TgZ(2,"span",51),e._UZ(3,"mat-checkbox",52),e._uU(4),e.qZA()()()}if(2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(3),e.Q6J("checked",t.checked),e.xp6(),e.hij(" ",t.description," ")}}function bo(o,l){1&o&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 1 "),e.qZA())}function xo(o,l){1&o&&(e.TgZ(0,"mat-error",76),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}function yo(o,l){1&o&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor m\xednimo 0 "),e.qZA())}function Co(o,l){1&o&&(e.TgZ(0,"mat-error",76),e._uU(1," Valor requerido "),e.qZA())}function vo(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",82)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",61),e._uU(4),e.qZA(),e.TgZ(5,"div",63)(6,"div",64)(7,"button",83),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.decrementAssistanceQty(n))}),e._UZ(8,"mat-icon",66),e.qZA(),e.TgZ(9,"mat-form-field",67),e._UZ(10,"input",84),e.qZA(),e.TgZ(11,"button",65),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.incrementAssistanceQty(n))}),e._UZ(12,"mat-icon",66),e.qZA()(),e.YNc(13,bo,2,0,"mat-error",69)(14,xo,2,0,"mat-error",69),e.qZA(),e.TgZ(15,"div",70)(16,"mat-form-field",67),e._UZ(17,"input",71),e.qZA(),e.YNc(18,yo,2,0,"mat-error",69)(19,Co,2,0,"mat-error",69),e.qZA(),e.TgZ(20,"div",72),e._uU(21),e.qZA(),e.TgZ(22,"div",73),e._uU(23),e.ALo(24,"currency"),e.qZA(),e.TgZ(25,"div",74)(26,"button",75),e.NdJ("click",function(){const n=e.CHM(t).$index,s=e.oxw(3);return e.KtG(s.removeAssistanceToBill(n))}),e._UZ(27,"mat-icon",66),e.qZA()()()}if(2&o){const t=l.$implicit,a=l.$index,i=e.oxw(3);e.xp6(2),e.hij(" ",a+1," "),e.xp6(),e.Q6J("matTooltip",t.get("description").value),e.xp6(),e.hij(" ",t.get("description").value," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",1)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(13,t.get("quantity").hasError("min")?13:-1),e.xp6(),e.um2(14,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?14:-1),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",0)("max",9999999)("formControl",t.get("price")),e.xp6(),e.um2(18,t.get("price").hasError("min")?18:-1),e.xp6(),e.um2(19,t.get("price").hasError("required")?19:-1),e.xp6(),e.Q6J("ngClass",e.VKq(24,rt,!t.get("rate").value)),e.xp6(),e.hij(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.xp6(2),e.hij(" ",e.xi3(24,21,t.get("pt").value,e.DdM(26,st))," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function Ao(o,l){if(1&o&&(e.TgZ(0,"div",55)(1,"div",81),e._UZ(2,"div"),e.TgZ(3,"div",57),e._uU(4," Servicio "),e.qZA(),e.TgZ(5,"div",58),e._uU(6," Cantidad "),e.qZA(),e.TgZ(7,"div",58),e._uU(8," Precio "),e.qZA(),e.TgZ(9,"div",58),e._uU(10," Moneda "),e.qZA(),e.TgZ(11,"div",59),e._uU(12," Total "),e.qZA(),e.TgZ(13,"div",58),e._uU(14," Quitar "),e.qZA()(),e.SjG(15,vo,28,27,"div",85,nt),e.qZA()),2&o){const t=e.oxw(2);e.xp6(15),e.wJu(t.billingForm.get("assistances").controls)}}function Zo(o,l){1&o&&(e.TgZ(0,"div",78),e._uU(1," \xa1No ha seleccionado ning\xfan servicio a\xfan! "),e.qZA())}function To(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",40)(1,"div",41)(2,"mat-form-field",42),e._UZ(3,"mat-icon",18)(4,"input",43),e.TgZ(5,"mat-autocomplete",44,80),e.NdJ("closed",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchAssistanceControl.reset())}),e.SjG(7,_o,5,3,"mat-option",79,e.x6l),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",46),e.YNc(11,Ao,17,0,"div",47)(12,Zo,2,0),e.qZA()(),e.TgZ(13,"div",48),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createBill())}),e._uU(14),e.ALo(15,"number"),e.qZA()()}if(2&o){const t=e.MAs(6),a=e.oxw();e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",a.searchAssistanceControl)("matAutocomplete",t)("placeholder","Buscar servicios en el cat\xe1logo del negocio"),e.xp6(),e.Q6J("displayWith",a.displayFnAssistance),e.xp6(2),e.wJu(e.lcZ(9,11,a.assistancesFiltered)),e.xp6(3),e.Q6J("fuseScrollbarOptions",e.DdM(16,lt)),e.xp6(),e.um2(11,a.billingForm.get("assistances").controls.length>0?11:12),e.xp6(2),e.Q6J("ngClass",e.VKq(17,ct,a.billingForm.valid)),e.xp6(),e.AsE(" ",e.xi3(15,13,a.total-a.billingForm.get("discount").value+a.billingForm.get("surcharge").value,"1.2-2")," ",a.selectedCurrencyIso," ")}}const Io=()=>({suppressScrollX:!0});let So=(()=>{class o{constructor(){this.assistances=[],this.assistances$=(0,R.of)([]),this.audio=new Audio("./assets/sounds/caja.mp3"),this.bankAccounts=[],this.billAssistances=!1,this.billProducts=!1,this.currencies=[],this.currencies$=(0,R.of)([]),this.employees$=(0,R.of)([]),this.maxDate=new Date,this.merchant=null,this.multipliers$=(0,R.of)([]),this.operationTypes$=(0,R.of)([]),this.paymentMethods$=(0,R.of)([]),this.previewsProductsFormData=[],this.previewsAssistancesFormData=[],this.productsInStock$=(0,R.of)([]),this.rates=[],this.searchAssistanceControl=new r.NI(""),this.searchCustomerControl=new r.NI(null),this.searchProductControl=new r.NI(null),this.selectedCurrencyIso="",this.selectedCustomerName="",this.stayHere=!1,this.total=0,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._formBuilder=(0,e.f3M)(r.qu),this._unsubscribeAll=new V.x,this._fuseConfirmationService=(0,e.f3M)(ae.R),this._billingService=(0,e.f3M)(Li),this._stocksService=(0,e.f3M)(Qe.T),this._customersService=(0,e.f3M)(Ze.v),this._ratesService=(0,e.f3M)(ze.m),this._router=(0,e.f3M)(J.F0),this._snackBar=(0,e.f3M)(N.ux),this.store=(0,e.f3M)(C.yh)}ngOnInit(){this.billingForm=this._formBuilder.group({id:new r.NI,billDate:new r.NI(new Date,[r.kI.required]),multiplier:new r.NI(1,[r.kI.required,r.kI.min(1)]),currencyId:new r.NI(null,[r.kI.required]),courierId:new r.NI(null),customerId:new r.NI("",[r.kI.required]),bankAccount:new r.NI(null,[r.kI.required]),operationTypeId:new r.NI(null,[r.kI.required]),paymentMethodId:new r.NI(null,[r.kI.required]),rates:new r.NI([],[r.kI.required]),surcharge:new r.NI(0,[r.kI.required,r.kI.min(0)]),discount:new r.NI(0,[r.kI.required,r.kI.min(0)]),observation:new r.NI("",[r.kI.maxLength(5e4)]),products:new r.Oe([]),assistances:new r.Oe([])}),this.store.select(z.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this.bankAccounts=t.bankAccounts,Q.W.IsNullOrEmpty(t.bankAccounts)||this.billingForm.get("bankAccount").setValue(t.bankAccounts[0]),this._changeDetectorRef.markForCheck()}),this.billingForm.get("products").valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.verificarCambios(t,this.previewsProductsFormData)&&this.calcAllProductPrice(this.billingForm.get("multiplier").value),this.previewsProductsFormData=[...t],this._calculateBillTotal(),this._changeDetectorRef.markForCheck()}),this.billingForm.get("assistances").valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.verificarCambios(t,this.previewsAssistancesFormData)&&this.calcAllAssistancePrice(this.billingForm.get("multiplier").value),this.previewsAssistancesFormData=[...t],this._calculateBillTotal(),this._changeDetectorRef.markForCheck()}),this.currencies$=this.store.select(pe.zd),this.currencies$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,Q.W.IsNullOrEmpty(t)||setTimeout(()=>{const a=t.find(i=>i.id===this.merchant.currencyId);this.billingForm.get("currencyId").setValue(a.id)},500),this._changeDetectorRef.markForCheck()}),this.employees$=this.store.select(Oe.ri),this.multipliers$=this.store.select(Le.Af),this.customers$=this.store.select(Se.p6),this.paymentMethods$=this.store.select(at.VS),this.paymentMethods$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{if(!Q.W.IsNullOrEmpty(t)){const a=t.find(i=>"Efectivo"===i.name);this.billingForm.get("paymentMethodId").setValue(a?a.id:t[0].id)}this._changeDetectorRef.markForCheck()}),this.operationTypes$=this.store.select(ot.pU),this.operationTypes$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{Q.W.IsNullOrEmpty(t)||this.billingForm.get("operationTypeId").setValue(t[0].id),this._changeDetectorRef.markForCheck()}),this.productsInStock$=this.store.select(Fe.K2),this.store.select(Fe.K2).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.productsInStock=t,t.length>0&&(this.billProducts=!0),this._changeDetectorRef.markForCheck()}),this.assistances$=this.store.select(fe),this.store.select(fe).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.assistances=t,t.length>0&&(this.billAssistances=!0),this._changeDetectorRef.markForCheck()}),this.ratesFiltered=this.billingForm.get("currencyId").valueChanges.pipe((0,W.O)(null),(0,ee.z)(t=>{if(t){const a=this.currencies.find(n=>n.id===t);this.selectedCurrencyIso=a.iso;const i=this.billingForm.get("bankAccount").getRawValue();return Q.W.IsNullOrEmpty(i)||a&&a.iso.toLocaleLowerCase()!==i.currency.toLocaleLowerCase()&&this.billingForm.get("bankAccount").setValue(null),a&&(this.bankAccounts=this.merchant.bankAccounts.filter(n=>n.currency.toLocaleLowerCase()===a.iso.toLocaleLowerCase())),this._ratesService.findActiveByBaseId(t)}return(0,R.of)([])})),this.ratesFiltered.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.rates=t,this.resetSelectedProductsRates(),this.updateSelectedRates()}),this.billingForm.get("rates").valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(500)).subscribe(t=>{this.resetSelectedProductsRates(),this.resetSelectedAssistancesRates()}),this.billingForm.get("multiplier").valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.calcAllProductPrice(t),this.calcAllAssistancePrice(t),this._calculateBillTotal()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,E.b)(200),(0,W.O)(null),(0,ee.z)(t=>this._mapChecked(null!==t&&"string"==typeof t?this._stocksService.getProductsInStockAvailable(t,10):this.productsInStock$))),this.assistancesFiltered=this.searchAssistanceControl.valueChanges.pipe((0,E.b)(200),(0,W.O)(null),(0,ee.z)(t=>{const a=this.assistances.filter(i=>i.description.includes(t));return this._mapCheckedAssistances(null!==t&&"string"==typeof t?(0,R.of)(a):this.assistances$)})),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,E.b)(200),(0,W.O)(null),(0,ee.z)(t=>null!==t&&"string"==typeof t&&t!==this.selectedCustomerName?this._customersService.findActiveCustomers(t.trim()):this.customers$))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}displayFnAssistance(t){return t&&t.description?t.description:""}selectCustomer(t){this.billingForm.get("customerId").setValue(t.id),this.selectedCustomerName=t.name}addStockProduct(t){const a=this.billingForm.get("currencyId").value,i=structuredClone(this.billingForm.get("rates").value);let n=i.find(u=>u.currencyBaseId===a&&u.currencyRefId===t.currencyId);!n&&a!==t.currencyId&&(n=i.find(u=>u.currencyRefId===a&&u.currencyRefId!==u.currencyBaseId),n&&(n.value=1/n.value));const s=this.billingForm.get("multiplier").value,c=this._formBuilder.group({productId:new r.NI(t.productId,[r.kI.required]),currencyId:new r.NI(t.currencyId,[r.kI.required]),name:new r.NI(t.name,[r.kI.required]),staticPrice:new r.NI(Number(((n?n.value:1)*t.price).toFixed(2)),[r.kI.required,r.kI.min(0),r.kI.max(99999999)]),price:new r.NI(Number(((n?n.value:1)*t.price).toFixed(2)),[r.kI.required,r.kI.min(0),r.kI.max(99999999)]),multiplier:new r.NI(s),pt:new r.NI(0),uom:new r.NI(t.uom,[r.kI.required]),depotId:new r.NI(t.depotId,[r.kI.required]),depot:new r.NI(t.depot,[r.kI.required]),currency:new r.NI(t.currency,[r.kI.required]),stock:new r.NI(t.quantity,[r.kI.required]),rateId:new r.NI(n?n.id:null,[r.kI.required]),rate:new r.NI(n?n.value:null,[r.kI.required]),quantity:new r.NI(1,[X.L.onlyNumbersPattern(),r.kI.required,r.kI.min(.1),r.kI.max(t.quantity)])});this.billingForm.get("products").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeStockProduct(t){this.billingForm.get("products").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addProductToBill(t){const a=this.billingForm.get("products").getRawValue().findIndex(i=>i.productId===t.productId&&i.depotId===t.depotId);t.checked?(this.removeStockProduct(a),t.checked=!1):t.checked=!0,!(a>-1)&&this.addStockProduct(t)}incrementProductQty(t){const a=t.get("quantity").value;t.get("quantity").setValue(+a+1)}decrementProductQty(t){const a=t.get("quantity").value;t.get("quantity").setValue(+a-1)}removeProductToBill(t){this.removeStockProduct(t),this.searchProductControl.reset()}addAssistance(t){const a=this.billingForm.get("currencyId").value,i=structuredClone(this.billingForm.get("rates").value);let n=i.find(u=>u.currencyBaseId===a&&u.currencyRefId===t.currencyId);!n&&a!==t.currencyId&&(n=i.find(u=>u.currencyRefId===a&&u.currencyRefId!==u.currencyBaseId),n&&(n.value=1/n.value));const s=this.billingForm.get("multiplier").value,c=this._formBuilder.group({assistanceId:new r.NI(t.id,[r.kI.required]),currencyId:new r.NI(t.currencyId,[r.kI.required]),description:new r.NI(t.description,[r.kI.required]),staticPrice:new r.NI(Number(((n?n.value:1)*t.price).toFixed(2)),[r.kI.required,r.kI.min(0),r.kI.max(99999999)]),price:new r.NI(Number(((n?n.value:1)*t.price).toFixed(2)),[r.kI.required,r.kI.min(0),r.kI.max(99999999)]),multiplier:new r.NI(s),quantity:new r.NI(1,[X.L.onlyNumbersPattern(),r.kI.required,r.kI.min(1)]),pt:new r.NI(0),currency:new r.NI(t.currency.iso,[r.kI.required]),rateId:new r.NI(n?n.id:null,[r.kI.required]),rate:new r.NI(n?n.value:null,[r.kI.required])});this.billingForm.get("assistances").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeAssistance(t){this.billingForm.get("assistances").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addAssistanceToBill(t){const a=this.billingForm.get("assistances").getRawValue().findIndex(i=>i.assistanceId===t.id);t.checked?(this.removeAssistance(a),t.checked=!1):t.checked=!0,!(a>-1)&&this.addAssistance(t)}incrementAssistanceQty(t){let a=t.get("quantity").value;t.get("quantity").setValue(++a)}decrementAssistanceQty(t){let a=t.get("quantity").value;t.get("quantity").setValue(--a)}removeAssistanceToBill(t){this.removeAssistance(t),this.searchAssistanceControl.reset()}createBill(){if(this.billingForm.invalid)return;if(0===this.billingForm.get("products").controls.length&&0===this.billingForm.get("assistances").controls.length)return void this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Alerta",message:"Debe agrear al menos un producto o servicio a la factura",type:"warning",svgIcon:"mat_solid:warning"}});const t=this.billingForm.getRawValue();delete t.id;const a=[],i=[];t.ratesId=t.products.map(s=>s.rateId).filter((s,c,u)=>u.indexOf(s)===c);for(const s of t.products)a.push(this._mapProductToBill(s));for(const s of t.assistances)i.push(this._mapAssistanceToBill(s));t.products=a,t.assistances=i,t.subtotal=this.total,delete t.rates,t.bankAccount=(0,qe.omit)(t.bankAccount,"_id"),this._fuseConfirmationService.open({title:"Generar factura",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(s=>{"confirmed"===s&&this._billingService.createBill(t).pipe((0,m.R)(this._unsubscribeAll),(0,se.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:c})=>{c&&(this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:"Factura registrada correctamente",type:"success",svgIcon:"mat_solid:done"}}),this.audio.play(),this.stayHere?this.restoreForm():this._router.navigateByUrl("/modules/sales/bills"))})})}restoreForm(){const t=this.billingForm.get("paymentMethodId").value,a=this.billingForm.get("operationTypeId").value,i=this.billingForm.get("multiplier").value;if(this.billingForm.get("products").clear(),this.searchCustomerControl.reset(),this.billingForm.reset(),this.total=0,this.selectedCustomerName="",this.searchProductControl.setValue(""),this.billingForm.get("paymentMethodId").setValue(t),this.billingForm.get("operationTypeId").setValue(a),this.billingForm.get("multiplier").setValue(i),this.billingForm.get("billDate").setValue(new Date),this.billingForm.get("observation").setValue(""),this.billingForm.get("surcharge").setValue(0),this.billingForm.get("discount").setValue(0),Q.W.IsNullOrEmpty(this.merchant.bankAccounts)||(this.bankAccounts=this.merchant.bankAccounts,this.billingForm.get("bankAccount").setValue(this.merchant.bankAccounts[0])),!Q.W.IsNullOrEmpty(this.currencies)){const n=this.currencies.find(s=>s.id===this.merchant.currencyId);this.billingForm.get("currencyId").setValue(n.id)}}_mapProductToBill(t){const{productId:a,price:i,depotId:n,quantity:s}=t,c=new Ce.vr(a,"","",Number(i.toFixed(2)),Number(Number(s).toFixed(4)),n);return delete c.name,delete c.uom,c}_mapAssistanceToBill(t){const{assistanceId:a,price:i,quantity:n}=t;return new Ce.JM(a,i,n)}_calculateBillTotal(){const t=this.billingForm.get("products").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,n)=>i+n,0),a=this.billingForm.get("assistances").getRawValue().map(i=>Number(i.quantity)*i.price).reduce((i,n)=>i+n,0);this.total=Number(t.toFixed(2))+Number(a.toFixed(2))}_mapChecked(t){return t.pipe((0,L.U)(a=>a.map(i=>this.billingForm.get("products").getRawValue().some(s=>s.productId===i.productId&&s.depotId===i.depotId)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}_mapCheckedAssistances(t){return t.pipe((0,L.U)(a=>a.map(i=>this.billingForm.get("assistances").getRawValue().some(s=>s.id===i.id)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}resetSelectedProductsRates(){const t=this.billingForm.get("currencyId").value,a=this.billingForm.get("multiplier").value;for(const i of this.billingForm.get("products").controls){const n=i.getRawValue(),s=structuredClone(this.billingForm.get("rates").value);let c=s.find(_=>_.currencyBaseId===t&&_.currencyRefId===n.currencyId);!c&&t!==n.currencyId&&(c=s.find(_=>_.currencyRefId===t&&_.currencyRefId!==_.currencyBaseId),c&&(c.value=1/c.value));let u=c?c.value:null;const f=i.get("price").value,h=i.get("staticPrice").value;let p=i.get("rate").value?i.get("rate").value:1;p&&u===p&&(p=1,u=1),i.patchValue({...n,price:(u?f*u:1*f/p)*a,staticPrice:u?h*u:1*h/p,multiplier:a,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}resetSelectedAssistancesRates(){const t=this.billingForm.get("currencyId").value,a=this.billingForm.get("multiplier").value;for(const i of this.billingForm.get("assistances").controls){const n=i.getRawValue(),s=structuredClone(this.billingForm.get("rates").value);let c=s.find(_=>_.currencyBaseId===t&&_.currencyRefId===n.currencyId);!c&&t!==n.currencyId&&(c=s.find(_=>_.currencyRefId===t&&_.currencyRefId!==_.currencyBaseId),c&&(c.value=1/c.value));let u=c?c.value:null;const f=i.get("price").value,h=i.get("staticPrice").value;let p=i.get("rate").value?i.get("rate").value:1;p&&u===p&&(p=1,u=1),i.patchValue({...n,price:(u?f*u:1*f/p)*a,staticPrice:u?h*u:1*h/p,multiplier:a,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}calcAllProductPrice(t){const a=this.billingForm.get("products").getRawValue();this.previewsProductsFormData=[...a];for(const i of this.billingForm.get("products").controls){const n=i.getRawValue();let s=n.price/n.multiplier!==n.staticPrice?n.price:n.staticPrice,c=Number((s*t).toFixed(2));t===n.multiplier&&(c=Number((+n.price).toFixed(2)),s=n.price/t),i.patchValue({...n,staticPrice:s,price:c,pt:c*Number(n.quantity),multiplier:t})}}calcAllAssistancePrice(t){const a=this.billingForm.get("assistances").getRawValue();this.previewsAssistancesFormData=[...a];for(const i of this.billingForm.get("assistances").controls){const n=i.getRawValue();let s=n.price/n.multiplier!==n.staticPrice?n.price:n.staticPrice,c=Number((s*t).toFixed(2));t===n.multiplier&&(c=Number((+n.price).toFixed(2)),s=n.price/t),i.patchValue({...n,staticPrice:s,price:c,pt:c*Number(n.quantity),multiplier:t})}}verificarCambios(t,a){for(let i=0;i<t.length;i++)if(t.length!==a.length||t[i].price!==a[i].price||Number(t[i].quantity)!==Number(a[i].quantity))return!0;return!1}updateSelectedRates(){const t=this.billingForm.get("currencyId").value,a=this.billingForm.get("products").getRawValue();let i=[];for(const s of a)i=[...this.rates.filter(f=>f.currencyBaseId===t&&f.currencyRefId===s.currencyId),...this.rates.filter(f=>f.currencyBaseId===s.currencyId&&f.currencyRefId===t&&f.currencyRefId!==f.currencyBaseId),...i];const n=i.reduce((s,c)=>(s.find(f=>f.id===c.id&&f.name===c.name)||s.push(c),s),[]);this.billingForm.get("rates").setValue(n)}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-billing"]],standalone:!0,features:[e.jDz],decls:127,vars:70,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0",3,"fuseScrollbarOptions"],[1,"relative","flex","flex-col","px-6","py-8","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["color","primary",3,"ngModel","ngModelChange"],["mat-flat-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[1,"flex","flex-col","px-4","mt-4","mb-12","gap-y-8","sm:px-8"],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"grid","gap-4","p-10","sm:grid-cols-4","lg:grid-cols-5",3,"formGroup"],["billNgForm","ngForm"],["appearance","fill",1,"w-full","md:col-span-2","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[1,"ath-autocomplete",3,"displayWith"],["customerAutocomplete","matAutocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["billDate",""],[3,"formControlName","required"],[3,"value"],[3,"formControlName","required","placeholder"],["multiple","",3,"formControlName","required","placeholder"],["class","text-sm opacity-75"],["matInput","","type","number","name","quantity",3,"min","max","formControlName"],[1,"flex","flex-col","gap-3","sm:flex-row","lg:flex-col","sm:col-span-2"],[3,"formControlName"],[1,"w-full","sm:col-span-4","lg:col-span-3","fuse-mat-textarea"],["matInput","",3,"formControlName","rows"],["class","col-span-4 shadow rounded-2xl bg-card"],[3,"value","click"],[1,"text-sm","opacity-75"],[1,"w-18"],[1,"col-span-4","shadow","rounded-2xl","bg-card"],[1,"p-6","pb-0"],["appearance","fill",1,"w-full","fuse-mat-dense",3,"subscriptSizing"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete",3,"displayWith","closed"],["productsAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-2","mt-2","min-h-72",3,"fuseScrollbarOptions"],["class","grid"],[1,"flex","items-center","justify-center","w-full","gap-2","p-2","font-mono","text-3xl","font-semibold","leading-7","text-white","rounded-b-2xl","bg-gradient-to-r","from-primary-500","to-primary-700",3,"ngClass","click"],[1,"w-full",3,"value","click"],[1,"grid","w-full","grid-cols-6",3,"click"],[1,"flex","flex-row","items-center","col-span-5","truncate","md:col-span-3"],["color","primary",3,"checked"],[1,"items-center","hidden","col-span-2","md:flex"],[1,"flex","items-center","text-center"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left"],[1,"text-center"],[1,"text-right"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"truncate",3,"matTooltip"],[1,"truncate"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"flex","flex-col","items-center","justify-center"],["matInput","","type","number",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],[1,"text-center",3,"ngClass"],[1,"font-mono","text-right"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"w-full","text-sm","text-center"],["class","grid items-center gap-4 px-6 py-3 border-b billing-products-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-30"],["class","w-full",3,"value"],["assistancesAutocomplete","matAutocomplete"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-assistances-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-assistances-grid","md:px-8"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","formControl"],["class","grid items-center gap-4 px-6 py-3 border-b billing-assistances-grid md:px-8"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Facturaci\xf3n"),e.qZA()(),e.TgZ(15,"div",5),e._UZ(16,"mat-icon",6),e.TgZ(17,"a",7),e._uU(18,"Facturar"),e.qZA()()(),e.TgZ(19,"div",8)(20,"h2",9),e._uU(21," Facturar "),e.qZA()()(),e.TgZ(22,"div",10),e.YNc(23,Qi,4,2),e.TgZ(24,"mat-checkbox",11),e.NdJ("ngModelChange",function(s){return i.stayHere=s}),e._uU(25,"Permanecer aqu\xed"),e.qZA(),e.TgZ(26,"button",12),e.NdJ("click",function(){return i.createBill()}),e._uU(27," Generar Factura "),e.qZA()()(),e.TgZ(28,"div",13)(29,"div",14)(30,"form",15,16)(32,"mat-form-field",17)(33,"mat-label"),e._uU(34,"Cliente"),e.qZA(),e._UZ(35,"mat-icon",18)(36,"input",19),e.TgZ(37,"mat-autocomplete",20,21),e.SjG(39,zi,2,2,"mat-option",27,e.x6l),e.ALo(41,"async"),e.qZA()(),e.TgZ(42,"mat-form-field",22)(43,"mat-label"),e._uU(44,"Fecha de la factura"),e.qZA(),e._UZ(45,"input",23),e.TgZ(46,"mat-hint"),e._uU(47,"DD/MM/YYYY"),e.qZA(),e._UZ(48,"mat-datepicker-toggle",24)(49,"mat-datepicker",null,25),e.YNc(51,Oi,2,0,"mat-error"),e.qZA(),e.TgZ(52,"mat-form-field",22)(53,"mat-label"),e._uU(54,"Multiplicador"),e.qZA(),e.TgZ(55,"mat-select",26),e.YNc(56,Gi,2,1,"mat-option",27),e.ALo(57,"async"),e.SjG(58,ji,2,2,"mat-option",27,e.x6l),e.ALo(60,"async"),e.qZA(),e.YNc(61,Vi,2,0,"mat-error"),e.qZA(),e.TgZ(62,"mat-form-field",22)(63,"mat-label"),e._uU(64,"M\xe9todo de pago"),e.qZA(),e.TgZ(65,"mat-select",26),e.SjG(66,Yi,2,2,"mat-option",27,e.x6l),e.ALo(68,"async"),e.qZA(),e.YNc(69,Hi,2,0,"mat-error"),e.qZA(),e.TgZ(70,"mat-form-field",22)(71,"mat-label"),e._uU(72,"Tipo de Operaci\xf3n"),e.qZA(),e.TgZ(73,"mat-select",26),e.SjG(74,Ki,2,2,"mat-option",27,e.x6l),e.ALo(76,"async"),e.qZA(),e.YNc(77,Wi,2,0,"mat-error"),e.qZA(),e.TgZ(78,"mat-form-field",22)(79,"mat-label"),e._uU(80,"Moneda"),e.qZA(),e.TgZ(81,"mat-select",28),e.SjG(82,Xi,2,2,"mat-option",27,e.x6l),e.ALo(84,"async"),e.qZA()(),e.TgZ(85,"mat-form-field",22)(86,"mat-label"),e._uU(87,"Tasa de Cambio"),e.qZA(),e.TgZ(88,"mat-select",29)(89,"mat-select-trigger"),e._uU(90),e.YNc(91,eo,2,2,"span",30),e.qZA(),e.SjG(92,to,6,6,"mat-option",27,e.x6l),e.ALo(94,"async"),e.qZA(),e.YNc(95,io,2,0,"mat-error"),e.qZA(),e.TgZ(96,"mat-form-field",22)(97,"mat-label"),e._uU(98,"Descuento"),e.qZA(),e._UZ(99,"input",31),e.qZA(),e.TgZ(100,"mat-form-field",22)(101,"mat-label"),e._uU(102,"Recargo"),e.qZA(),e._UZ(103,"input",31),e.qZA(),e.TgZ(104,"div",32)(105,"mat-form-field",22)(106,"mat-label"),e._uU(107,"Cuenta Bancaria"),e.qZA(),e.TgZ(108,"mat-select",26),e.SjG(109,oo,2,3,"mat-option",27,e.x6l),e.qZA(),e.TgZ(111,"mat-hint"),e._uU(112,"Cuentas Bancarias registradas en el negocio"),e.qZA(),e.YNc(113,ao,2,0,"mat-error"),e.qZA(),e.TgZ(114,"mat-form-field",22)(115,"mat-label"),e._uU(116,"Transportista"),e.qZA(),e.TgZ(117,"mat-select",33),e.SjG(118,no,2,2,"mat-option",27,e.x6l),e.ALo(120,"async"),e.qZA()()(),e.TgZ(121,"mat-form-field",34)(122,"mat-label"),e._uU(123,"Observaciones"),e.qZA(),e._UZ(124,"textarea",35),e.qZA()()(),e.YNc(125,fo,16,19,"div",36)(126,To,16,19,"div",36),e.qZA()()),2&a){const n=e.MAs(38),s=e.MAs(50);e.Q6J("fuseScrollbarOptions",e.DdM(69,Io)),e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.um2(23,i.assistances.length>0&&i.productsInStock.length>0?23:-1),e.xp6(),e.Q6J("ngModel",i.stayHere),e.xp6(2),e.Q6J("disabled",i.billingForm.invalid),e.xp6(4),e.Q6J("formGroup",i.billingForm),e.xp6(5),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchCustomerControl)("matAutocomplete",n)("placeholder","Buscar cliente")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(41,53,i.customersFiltered)),e.xp6(6),e.Q6J("matDatepicker",s)("formControlName","billDate")("max",i.maxDate)("required",!0),e.xp6(3),e.Q6J("for",s),e.xp6(3),e.um2(51,i.billingForm.get("billDate").hasError("required")?51:-1),e.xp6(4),e.Q6J("formControlName","multiplier")("required",!0),e.xp6(),e.um2(56,0===e.lcZ(57,55,i.multipliers$).length?56:-1),e.xp6(2),e.wJu(e.lcZ(60,57,i.multipliers$)),e.xp6(3),e.um2(61,i.billingForm.get("multiplier").hasError("required")?61:-1),e.xp6(4),e.Q6J("formControlName","paymentMethodId")("required",!0),e.xp6(),e.wJu(e.lcZ(68,59,i.paymentMethods$)),e.xp6(3),e.um2(69,i.billingForm.get("paymentMethodId").hasError("required")?69:-1),e.xp6(4),e.Q6J("formControlName","operationTypeId")("required",!0),e.xp6(),e.wJu(e.lcZ(76,61,i.operationTypes$)),e.xp6(3),e.um2(77,i.billingForm.get("operationTypeId").hasError("required")?77:-1),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0)("placeholder","Moneda"),e.xp6(),e.wJu(e.lcZ(84,63,i.currencies$)),e.xp6(6),e.Q6J("formControlName","rates")("required",!0)("placeholder","Tasa de cambio"),e.xp6(2),e.hij(" ",(null==i.billingForm.get("rates").value||null==i.billingForm.get("rates").value[0]?null:i.billingForm.get("rates").value[0].name)||""," "),e.xp6(),e.um2(91,((null==i.billingForm.get("rates").value?null:i.billingForm.get("rates").value.length)||0)>1?91:-1),e.xp6(),e.wJu(e.lcZ(94,65,i.ratesFiltered)),e.xp6(3),e.um2(95,i.billingForm.get("rates").hasError("required")?95:-1),e.xp6(4),e.Q6J("min",0)("max",i.total)("formControlName","discount"),e.xp6(4),e.Q6J("min",0)("max",99999)("formControlName","surcharge"),e.xp6(5),e.Q6J("formControlName","bankAccount")("required",!0),e.xp6(),e.wJu(i.bankAccounts),e.xp6(4),e.um2(113,i.billingForm.get("bankAccount").hasError("required")?113:-1),e.xp6(4),e.Q6J("formControlName","courierId"),e.xp6(),e.wJu(e.lcZ(120,67,i.employees$)),e.xp6(6),e.Q6J("formControlName","observation")("rows",4),e.xp6(),e.um2(125,i.billProducts?125:-1),e.xp6(),e.um2(126,i.billAssistances?126:-1)}},dependencies:[v.Ov,v.H9,v.JJ,r.u5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.Q7,r.qQ,r.Fd,r.On,ye.H,te.Bb,te.XC,xe.ey,te.ZL,T.ot,T.lW,ne.p9,ne.oG,q.FA,q.Mq,q.hl,q.nW,g.lN,g.KE,g.hX,g.bx,g.TO,g.qo,g.R9,k.Ps,k.Hw,U.c,U.Nt,$.Tx,K.LD,K.gD,K.$L,re.AV,re.gM,v.mk,r.UX,r.oH,r.sg,r.u,J.rH],encapsulation:2,changeDetection:0})}return o})();var be=d(86723);const ut=o=>o.bills,ke=((0,C.P1)(ut,o=>o.bill),(0,C.P1)(ut,o=>o.bills));let Fo=(()=>{class o{constructor(t){this._dialogRef=t,this.dateControl=new r.NI(null,[r.kI.required])}closeDialog(){this._dialogRef.close()}selectDate(){const t=new Date(this.dateControl.value);this._dialogRef.close(t)}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(A.so))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-bills-date-dialog-select"]],standalone:!0,features:[e.jDz],decls:19,vars:7,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","py-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],["appearance","fill"],["matInput","",3,"matDatepicker","formControl"],["matIconSuffix","",3,"for"],["dp",""],[1,"flex","items-center","px-6","py-4","space-x-3","justify-between","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3," Seleccione la fecha de las facturas que desea exportar "),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"mat-form-field",6),e._UZ(8,"input",7),e.TgZ(9,"mat-hint"),e._uU(10,"DD/MM/YYYY"),e.qZA(),e._UZ(11,"mat-datepicker-toggle",8)(12,"mat-datepicker",null,9),e.qZA()()()(),e.TgZ(14,"div",10)(15,"button",11),e._uU(16," Cancelar "),e.qZA(),e.TgZ(17,"button",12),e.NdJ("click",function(){return i.selectDate()}),e._uU(18," Aceptar "),e.qZA()()()),2&a){const n=e.MAs(13);e.xp6(8),e.Q6J("matDatepicker",n)("formControl",i.dateControl),e.xp6(3),e.Q6J("for",n),e.xp6(4),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("color","primary")("disabled",i.dateControl.invalid)("matDialogClose","confirmed")}},dependencies:[g.lN,g.KE,g.bx,g.R9,U.c,U.Nt,q.FA,q.Mq,q.hl,q.nW,A.Is,A.ZT,T.ot,T.lW,r.UX,r.Fj,r.JJ,r.oH],encapsulation:2})}return o})();var Ge=d(64610),we=d(62660);let je=(()=>{class o{constructor(t,a,i){this.apolloProvider=t,this._snackBar=a,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}getBills(t=0,a=50,i="no",n="desc",s="",c=null,u=[],f=[],h=[],p=null,_=null,y=null){return this._apollo.query({query:Ui,errorPolicy:"all",variables:{page:t,size:a,sort:i,order:n,search:s,customerId:c,currenciesId:u,status:f,paymentStatus:h,billDate:p,startDate:_,endDate:y}}).pipe((0,B.b)(({data:x})=>{x&&this.store.dispatch((0,be.Im)({bills:structuredClone(x).findAllBills.bills.map(b=>{const M=b.products.reduce((ce,ie)=>{const ue=ce.find(Je=>Je.productId===ie.productId);return ue?ue.quantity+=ie.quantity:ce.push({productId:ie.productId,price:ie.price,quantity:ie.quantity,product:ie.product}),ce},[]);return b.products=M,b})})),this.store.dispatch((0,Ae.Jr)({pagination:x.findAllBills.pagination}))}))}getBillsByDate(t){return this._apollo.query({query:Pi,errorPolicy:"all",variables:{date:t}}).pipe((0,B.b)(({errors:a})=>{if(a){let i="";a.forEach(n=>i+=`\n ${n.message}.`),this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getBillsByDateRangeAndStatus(t,a,i=null,n=null,s=null){return this._apollo.query({query:Bi,errorPolicy:"all",variables:{initDate:t,endDate:a,status:i,paymentStatus:n,clientId:s}})}getBillById(t){return this._apollo.query({query:Ni,variables:{findBillByIdId:t},errorPolicy:"all"}).pipe((0,B.b)(({errors:a,data:i})=>{if(a){let n="";a.forEach(s=>n+=`\n ${s.message}.`),this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:n,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,be.QG)({bill:i.bill}))}))}updateBill(t){return this.store.select(ke).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:Ji,variables:{updateBillInput:t},errorPolicy:"all"}).pipe((0,B.b)(({errors:i,data:n})=>{if(i){let u="";i.forEach(f=>u+=`\n ${f.message}.`),this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:u,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,we.Z)(a);s[a.findIndex(u=>u.id===t.id)]=n.updatedBill,this.store.dispatch((0,be.Im)({bills:s}))}))))}updateBillStatus(t,a,i){return this.store.select(ke).pipe((0,O.q)(1),(0,P.w)(n=>this._apollo.mutate({mutation:Mi,variables:{updateBillStatusInput:{id:t,status:a,paymentStatus:i}},errorPolicy:"all"}).pipe((0,B.b)(({data:s})=>{const c=structuredClone(n);c[n.findIndex(f=>f.id===t)]=s.updateBillStatus.bill,this.store.dispatch((0,be.Im)({bills:c}))}))))}removeBill(t){return this.store.select(ke).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:Ei,variables:{removeBillId:t},errorPolicy:"all"}).pipe((0,B.b)(({errors:i})=>{if(i){let c="";i.forEach(u=>c+=`\n ${u.message}.`),this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:c,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=(0,we.Z)(a),s=a.findIndex(c=>c.id===t);n.splice(s,1),this.store.dispatch((0,be.Im)({bills:n}))}))))}dispatchBill(t){return this._apollo.mutate({mutation:$i,variables:{billId:t},errorPolicy:"all"}).pipe((0,B.b)(({data:a})=>{a&&this.store.dispatch((0,be.QD)({bill:a.dispatchBill.bill}))}))}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(Z._M),e.LFG(N.ux),e.LFG(C.yh))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var De=d(48420);let dt=(()=>{class o{constructor(){F.vfs=Ee.I.vfs}generateBillsReport(t,a,i,n,s,c=0,u=0,f=new Ce.V_(0,0,0,0)){const h=`Facturas realizadas de ${I(t).format("DD/MM/yy")} - ${I(a).format("DD/MM/yy")}`,p={header:{text:h,style:"header",marginTop:5},content:[{lineHeight:1.3,table:{headerRows:1,widths:[20,80,60,"*",60,60,60,60,60],body:[[{text:"#",style:"table_header"},{text:"N\xba",style:"table_header"},{text:"Fecha",style:"table_header"},{text:"Cliente",style:"table_header",alignment:"left"},{text:"$",style:"table_header"},{text:"Importe",style:"table_header"},{text:"Estado",style:"table_header"},{text:"F. Cobro",style:"table_header"},{text:"Demora",style:"table_header"}],...s.map((_,y)=>[{style:"table_body",text:y+1},{style:"table_body",text:_.no},{style:"table_body",text:I(_.billDate).format("DD/MM/yy")},{style:"table_body",text:_.customer.fullname,alignment:"left"},{style:"table_body",text:_.currency.iso},{style:"table_body",text:_.total.toFixed(2),alignment:"right"},{style:"table_body",text:_.paymentStatus.toLocaleUpperCase()},{style:"table_body",text:"pendiente"===_.paymentStatus||void 0===_.collectedAt?"":I(_.collectedAt).format("DD/MM/yy")},{style:"table_body",text:"pendiente"===_.paymentStatus||void 0===_.collectedAt?I(_.billDate).fromNow(!0):I(_.collectedAt).from(I(_.billDate),!0)}]),[{text:"",style:"table_footer"},{text:"Total",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"CUP",style:"table_footer"},{text:c.toFixed(2),style:"table_footer",alignment:"right"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"}],[{text:"",style:"table_footer"},{text:"Total",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"USD",style:"table_footer"},{text:u.toFixed(2),style:"table_footer",alignment:"right"},{text:"",style:"table_footer"},{text:"",style:"table_footer"},{text:"",style:"table_footer"}]]},layout:{hLineWidth:(_,y)=>.7,vLineWidth:(_,y)=>0,hLineColor:(_,y)=>"#eeeeee"}}],footer:(_,y)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${n.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${_.toString()}/${y} - Fecha de impresi\xf3n ${I().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_footer:{fontSize:12,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_body:{fontSize:10,alignment:"center"}},pageOrientation:"landscape",pageSize:"LETTER",watermark:{text:n.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:h,author:i.fullname,creationDate:I().toDate(),modDate:I().toDate(),producer:n.name}};F.createPdf(p).open()}generateBillsCollectedByCustomersReport(t,a,i,n,s){const c=[],u=`Facturas Realizadas por Clientes en ${s[0].currency} de ${I(t).format("DD/MM/yy")} - ${I(a).format("DD/MM/yy")}`;s.forEach((h,p)=>{const _={lineHeight:1.3,marginTop:10,marginBotton:5,headerRows:1,table:{headerRows:1,widths:["*"],body:[[{text:`Cliente: ${h.customer}`,style:"table_header",alignment:"center"}]]},layout:{hLineWidth:(b,M)=>.7,vLineWidth:(b,M)=>0,hLineColor:(b,M)=>"#eeeeee"}},y=[{columns:[{text:"Total de facturas:",style:"customers_summary"},{text:"Cobradas:",style:"customers_summary"},{text:"Por cobrar:",style:"customers_summary"}]},{columns:[{text:h.totalBills,style:"customers_summary"},{text:h.totalCollected,style:"customers_summary"},{text:h.totalPending,style:"customers_summary"}]},{columns:[{text:`${h.currency} ${h.totalAmount.toFixed(2)}`,style:"customers_summary"},{text:`${h.currency} ${h.totalCollectedAmount.toFixed(2)}`,style:"customers_summary"},{text:`${h.currency} ${h.totalPendingAmount.toFixed(2)}`,style:"customers_summary"}]}],x={lineHeight:1.3,marginTop:10,headerRows:1,table:{headerRows:1,widths:[80,"*",100,80,80],body:[[{text:"Fecha",style:"table_header"},{text:"No. Factura",style:"table_header",alignment:"left"},{text:"Importe",style:"table_header",alignment:"right"},{text:"Estado",style:"table_header"},{text:"Estado de Pago",style:"table_header"}],...h.bills.map(b=>[{text:I(b.date).format("DD/MM/yy"),style:"table_body"},{text:b.no,style:"table_body",alignment:"left"},{text:b.total.toFixed(2),style:"table_body",alignment:"right"},{text:b.status.toLocaleUpperCase(),style:"table_body"},{text:b.paymentStatus.toLocaleUpperCase(),style:"table_body"}])]},layout:{hLineWidth:(b,M)=>.7,vLineWidth:(b,M)=>0,hLineColor:(b,M)=>"#eeeeee"}};c.push(_,y,x)});const f={header:{text:u,style:"header"},content:c,footer:(h,p)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${n.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${h.toString()}/${p} - Fecha de impresi\xf3n ${I().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:16,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},customer_name:{fontSize:14,bold:!0,marginTop:20,marginBottom:5,alignment:"center",fillColor:"#bbbbbb",fontFeatures:["c2sc","smcp"]},customers_summary:{fontSize:12,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},subheader:{fontSize:14,bold:!0,margin:[0,10,0,5]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_body:{alignment:"center",fontSize:10}},pageOrientation:"portrait",pageSize:"LETTER",pageMargins:[30,30],watermark:{text:n.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:u,author:i.fullname,creationDate:I().toDate(),modDate:I().toDate(),producer:n.name}};F.createPdf(f).open()}generateBillsByCustomersReport(t,a,i,n,s,c=null){const u=[],f=`Facturas ${c?"Cobradas":""} por Clientes en ${s[0].currency} de ${I(t).format("DD/MM/yy")} - ${I(a).format("DD/MM/yy")}`;s.forEach(p=>{const _={lineHeight:1.3,marginTop:10,marginBotton:5,headerRows:1,table:{headerRows:1,widths:["*"],body:[[{text:`Cliente: ${p.customer}`,style:"customer_header",alignment:"center"}]]},layout:{hLineWidth:(b,M)=>.7,vLineWidth:(b,M)=>0,hLineColor:(b,M)=>"#a1a1a1"}},y=[{columns:[{text:"Total de facturas:",style:"customers_summary"},{text:`Total ${c?"cobrado":"facturado"}:`,style:"customers_summary"}]},{columns:[{text:p.totalBills,style:"customers_summary"},{text:`${p.currency} ${p.totalAmount.toFixed(2)}`,style:"customers_summary"}]}],x={lineHeight:1.3,marginTop:10,headerRows:1,table:{headerRows:1,widths:[40,80,"*",c?50:100,80,80,c?80:0],body:[[{text:"No.",style:"table_header"},{text:"Fecha",style:"table_header"},{text:"No. Factura",style:"table_header",alignment:"left"},{text:"Importe",style:"table_header",alignment:"right"},{text:"Estado",style:"table_header"},{text:"Estado de Pago",style:"table_header"},{text:c?"F. Cobro":"",style:"table_header"}],...p.bills.map((b,M)=>[{text:M+1,style:"table_body"},{text:I(b.date).format("DD/MM/yy"),style:"table_body"},{text:b.no,style:"table_body",alignment:"left"},{text:b.total.toFixed(2),style:"table_body",alignment:"right"},{text:b.status.toLocaleUpperCase(),style:"table_body"},{text:b.paymentStatus.toLocaleUpperCase(),style:"table_body"},{text:c?I(b.collectedAt).format("DD/MM/yy"):"",style:"table_body"}])]},layout:{hLineWidth:(b,M)=>.7,vLineWidth:(b,M)=>0,hLineColor:(b,M)=>"#eeeeee"}};u.push(_,y,x)});const h={header:{text:f,style:"header"},content:u,footer:(p,_)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${n.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${p.toString()}/${_} - Fecha de impresi\xf3n ${I().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:16,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},customer_name:{fontSize:14,bold:!0,marginTop:20,marginBottom:5,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},customers_summary:{fontSize:12,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},subheader:{fontSize:14,bold:!0,margin:[0,10,0,5]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},customer_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#bbbbbb",fontFeatures:["c2sc","smcp"]},table_body:{alignment:"center",fontSize:10}},pageOrientation:"portrait",pageSize:"LETTER",pageMargins:[30,30],watermark:{text:n.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:f,author:i.fullname,creationDate:I().toDate(),modDate:I().toDate(),producer:n.name}};F.createPdf(h).open()}generateProductsBoughtByCustomerReport(t,a,i,n,s){const c=[],u=`Productos comprados por ${s.customer} de ${I(t).format("DD/MM/yy")} - ${I(a).format("DD/MM/yy")}`,f={lineHeight:1.3,marginTop:10,headerRows:1,table:{headerRows:1,widths:[20,"*",40,100,80,80],body:[[{text:"No.",style:"table_header"},{text:"Producto",style:"table_header",alignment:"left"},{text:"U",style:"table_header"},{text:"Cantidad",style:"table_header"},{text:"Precio",style:"table_header",alignment:"right"},{text:"Total",style:"table_header",alignment:"right"}],...s.products.map((p,_)=>[{text:_+1,style:"table_body"},{text:p.name,style:"table_body",alignment:"left"},{text:p.uom,style:"table_body"},{text:p.quantity,style:"table_body"},{text:p.price.toFixed(2),style:"table_body",alignment:"right"},{text:(p.quantity*p.price).toFixed(2),style:"table_body",alignment:"right"}])]},layout:{hLineWidth:(p,_)=>.7,vLineWidth:(p,_)=>0,hLineColor:(p,_)=>"#eeeeee"}};c.push(f);const h={header:{text:u,style:"header"},content:c,footer:(p,_)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${i.fullname} | Esta informaci\xf3n es exclusiva de ${n.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${p.toString()}/${_} - Fecha de impresi\xf3n ${I().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:16,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},customer_name:{fontSize:14,bold:!0,marginTop:20,marginBottom:5,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},customers_summary:{fontSize:12,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},subheader:{fontSize:14,bold:!0,margin:[0,10,0,5]},table_header:{fontSize:11,bold:!0,alignment:"center",fillColor:"#eeeeee",fontFeatures:["c2sc","smcp"]},table_body:{alignment:"center",fontSize:10}},pageOrientation:"portrait",pageSize:"LETTER",pageMargins:[30,30],watermark:{text:n.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:u,author:i.fullname,creationDate:I().toDate(),modDate:I().toDate(),producer:n.name}};F.createPdf(h).open()}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ve=function(o){return o.factura="factura",o.prefactura="prefactura",o.oferta="oferta",o}(Ve||{});const qo=["billDateFilter"],ko=["customerFilter"],wo=["currencyFilter"],Do=["statusFilter"],Uo=["paymentStatusFilter"];function Po(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-icon",34),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.range.reset())}),e.qZA()}}function Bo(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"button",55),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.clearTableFilters())}),e.TgZ(1,"span",56),e._uU(2," filter_list_off "),e.qZA()()}}function No(o,l){1&o&&e._UZ(0,"mat-icon",66),2&o&&e.Q6J("svgIcon","mat_solid:done")}function Ro(o,l){1&o&&e._UZ(0,"mat-icon",66),2&o&&e.Q6J("svgIcon","mat_solid:done")}function Jo(o,l){1&o&&e._UZ(0,"mat-icon",66),2&o&&e.Q6J("svgIcon","mat_solid:done")}function Mo(o,l){1&o&&e._UZ(0,"mat-icon",66),2&o&&e.Q6J("svgIcon","mat_solid:done")}const Eo=(o,l,t,a)=>({"bg-amber-50 text-amber-700":o,"text-red-700 bg-red-50":l,"text-orange-700 bg-orange-50":t,"text-green-700 bg-green-50":a}),$o=(o,l)=>({"text-blue-700 bg-blue-50":o,"text-green-700 bg-green-50":l});function Lo(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",57)(1,"div",58),e._uU(2),e.qZA(),e.TgZ(3,"div",59),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",26),e._uU(7),e.qZA(),e.TgZ(8,"div",60),e._uU(9),e.qZA(),e.TgZ(10,"div",61),e._uU(11),e.ALo(12,"number"),e.qZA(),e.TgZ(13,"div",62)(14,"span",63),e._uU(15),e.ALo(16,"uppercase"),e.qZA()(),e.TgZ(17,"div",62)(18,"span",63),e._uU(19),e.ALo(20,"uppercase"),e.qZA()(),e.TgZ(21,"div",64)(22,"button",65),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.generateBillDocument(n))}),e._UZ(23,"mat-icon",66),e.qZA(),e.TgZ(24,"button",67),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.dispatchBill(n.id))}),e._UZ(25,"mat-icon",66),e.qZA(),e.TgZ(26,"div")(27,"button",68),e._UZ(28,"mat-icon",66),e.qZA(),e.TgZ(29,"mat-menu",null,69)(31,"div",70),e._uU(32," Actualizar Estado "),e.qZA(),e.TgZ(33,"button",71),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.updateStatus(n.id,"entregada"))}),e.TgZ(34,"div",72),e.YNc(35,No,1,1,"mat-icon",73),e.qZA(),e.TgZ(36,"span",74),e._uU(37,"Entregada"),e.qZA()(),e.TgZ(38,"button",71),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.updateStatus(n.id,null,"cobrada"))}),e.TgZ(39,"div",72),e.YNc(40,Ro,1,1,"mat-icon",73),e.qZA(),e.TgZ(41,"span",74),e._uU(42,"Cobrada"),e.qZA()(),e.TgZ(43,"button",71),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.updateStatus(n.id,"cancelada"))}),e.TgZ(44,"div",72),e.YNc(45,Jo,1,1,"mat-icon",73),e.qZA(),e.TgZ(46,"span",74),e._uU(47,"Cancelada"),e.qZA()(),e.TgZ(48,"button",71),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.updateStatus(n.id,"rechazada"))}),e.TgZ(49,"div",72),e.YNc(50,Mo,1,1,"mat-icon",73),e.qZA(),e.TgZ(51,"span",74),e._uU(52,"Rechazada"),e.qZA()()()()()()}if(2&o){const t=l.$implicit,a=e.MAs(30);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",e.xi3(5,23,t.createdAt,"dd/MM/yyyy")," "),e.xp6(3),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(12,26,t.total,"1.2-2")," "),e.xp6(2),e.Q6J("ngClass",e.l5B(33,Eo,"nueva"===t.status,"cancelada"===t.status,"rechazada"===t.status,"entregada"===t.status)),e.xp6(2),e.hij(" ",e.lcZ(16,29,t.status)," "),e.xp6(2),e.Q6J("ngClass",e.WLB(38,$o,"pendiente"===t.paymentStatus,"cobrada"===t.paymentStatus)),e.xp6(2),e.hij(" ",e.lcZ(20,31,t.paymentStatus)," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:print"),e.xp6(),e.Q6J("disabled",t.isDispatched||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(),e.Q6J("svgIcon","mat_solid:logout"),e.xp6(2),e.Q6J("matMenuTriggerFor",a)("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(),e.Q6J("svgIcon","mat_solid:update"),e.xp6(5),e.Q6J("disabled",t.status.includes("entregada")||t.status.includes("cancelada")||t.status.includes("rechazada")||t.paymentStatus.includes("cobrada")),e.xp6(2),e.um2(35,t.status.includes("entregada")?35:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(2),e.um2(40,t.paymentStatus.includes("cobrada")?40:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("rechazada")||t.status.includes("cancelada")),e.xp6(2),e.um2(45,t.status.includes("cancelada")?45:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(2),e.um2(50,t.status.includes("rechazada")?50:-1)}}function Qo(o,l){if(1&o&&e.SjG(0,Lo,53,41,"div",75,e.QCX().trackByFn),2&o){const t=e.oxw();e.wJu(t)}}function zo(o,l){1&o&&(e.TgZ(0,"div",76),e._uU(1," \xa1No se ha registrado ninguna factura! "),e.qZA())}const Oo=()=>["nueva","entregada","cancelada","rechazada"],Go=()=>["pendiente","cobrada"],jo=o=>({"mr-4":o}),Vo=(o,l)=>({"pointer-events-none":o,hidden:l}),Yo=()=>[10,25,100];function Ho(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",35)(1,"div",36)(2,"div",37),e._uU(3," N\xfamero "),e.qZA(),e.TgZ(4,"div",38)(5,"span",39),e._uU(6,"Fecha"),e.qZA(),e.TgZ(7,"table-filter",40,41),e.NdJ("dataChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addDate(i))}),e.qZA()(),e.TgZ(9,"div",42)(10,"span"),e._uU(11,"Cliente"),e.qZA(),e.TgZ(12,"table-filter",43,44),e.NdJ("dataChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addCustomer(i))}),e.qZA()(),e.TgZ(14,"div",38)(15,"span"),e._uU(16,"Moneda"),e.qZA(),e.TgZ(17,"table-filter",45,46),e.NdJ("dataChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addCurrencies(i))}),e.ALo(19,"async"),e.qZA()(),e.TgZ(20,"div",47),e._uU(21," Importe "),e.qZA(),e.TgZ(22,"div",38)(23,"span",39),e._uU(24,"Estado"),e.qZA(),e.TgZ(25,"table-filter",48,49),e.NdJ("dataChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addStatus(i))}),e.qZA()(),e.TgZ(27,"div",38)(28,"span",50),e._uU(29,"E.Pago"),e.qZA(),e.TgZ(30,"table-filter",48,51),e.NdJ("dataChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addPaymentStatus(i))}),e.qZA()(),e.TgZ(32,"div",52)(33,"span"),e._uU(34,"Acciones"),e.qZA(),e.YNc(35,Bo,3,0,"button",53),e.qZA()(),e.YNc(36,Qo,2,0)(37,zo,2,0),e._UZ(38,"mat-paginator",54),e.qZA()}if(2&o){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(3),e.Q6J("mat-sort-header","billDate"),e.xp6(2),e.Q6J("filterType","date"),e.xp6(5),e.Q6J("filterType","filterEntity")("searchEntityControl",t.searchCustomersControl)("entitiesFiltered",t.customersFiltered),e.xp6(5),e.Q6J("filterType","multiSelectEntity")("entityPropertyName","iso")("useUpperCase",!0)("data",e.lcZ(19,26,t.currencies$)),e.xp6(3),e.Q6J("mat-sort-header","total"),e.xp6(3),e.Q6J("mat-sort-header","status"),e.xp6(2),e.Q6J("filterType","multiSelect")("data",e.DdM(28,Oo)),e.xp6(3),e.Q6J("mat-sort-header","paymentStatus"),e.xp6(2),e.Q6J("filterType","multiSelect")("data",e.DdM(29,Go)),e.xp6(2),e.Q6J("ngClass",e.VKq(30,jo,t.existTableFilter())),e.xp6(3),e.um2(35,t.existTableFilter()?35:-1),e.xp6(),e.um2(36,l.length>0?36:37),e.xp6(2),e.Q6J("ngClass",e.WLB(32,Vo,t.isLoading,t.pagination.length<10&&t.pagination.page<1))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(35,Yo))("showFirstLastButtons",!0)}}const Ko=()=>["/modules/sales/dashboard"],Wo=()=>["/modules/sales/billing"];let Xo=(()=>{class o{constructor(){this.bills$=(0,R.of)([]),this.currencies$=(0,R.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.merchantLogo=null,this.maxDate=new Date,this.range=new r.cw({start:new r.NI({disabled:!1,value:null},[X.L.futureDateValidator()]),end:new r.NI({disabled:!1,value:null},[X.L.futureDateValidator()])}),this.searchCustomersControl=new r.NI(null),this.searchInputControl=new r.NI,this.filterInputControl=new r.NI,this.selectedCustomer=null,this.selectedDate=null,this.selectedCurrenciesId=[],this.selectedStatus=[],this.selectedPaymentStatus=[],this.selectedSlide=null,this.user=null,this._billsService=(0,e.f3M)(je),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._customersService=(0,e.f3M)(Ze.v),this._dialog=(0,e.f3M)(A.uw),this._documentsService=(0,e.f3M)(De.S),this._fileSaverService=(0,e.f3M)($e.m),this._fuseConfirmationService=(0,e.f3M)(ae.R),this._salesReportsService=(0,e.f3M)(dt),this._snackBar=(0,e.f3M)(N.ux),this._unsubscribeAll=new V.x,this.store=(0,e.f3M)(C.yh)}ngOnInit(){this.store.select(G.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.currencies$=this.store.select(pe.zd),this.store.select(z.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.bills$=this.store.select(ke),this.customersFiltered=this.searchCustomersControl.valueChanges.pipe((0,E.b)(200),(0,W.O)(null),(0,se.x)(()=>{this.isLoading=!1}),(0,ee.z)(t=>null!==t&&"string"==typeof t&&(this.selectedCustomer&&t!==this.selectedCustomer.name||!this.selectedCustomer)?(this.isLoading=!0,this._customersService.findActiveCustomers(t.trim())):(0,R.of)())),this.store.select(H.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(300),(0,P.w)(t=>(this.isLoading=!0,this._billsService.getBills(0,25,"no","desc",t,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,L.U)(()=>{this.isLoading=!1})).subscribe(),this.filterInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(300),(0,P.w)(t=>(this.isLoading=!0,this._billsService.getBills(0,25,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,L.U)(()=>{this.isLoading=!1})).subscribe(),this.range.valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.billDateFilter.clearFilter(),this._billsService.getBills(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,null,t.start,t.end).pipe((0,m.R)(this._unsubscribeAll)).subscribe()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,le.T)(this._sort.sortChange,this._paginator.page).pipe((0,P.w)(()=>(this.isLoading=!0,this._billsService.getBills(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,L.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,be.Hl)())}resetCustomer(){this.selectedCustomer=null,this.searchInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCustomer(t){this.selectedCustomer=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addDate(t){this.selectedDate=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCurrencies(t){this.selectedCurrenciesId=t.map(a=>a.id),this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addStatus(t){this.selectedStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addPaymentStatus(t){this.selectedPaymentStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}dispatchBill(t){this._fuseConfirmationService.open({title:"Despachar factura",message:"\xbfEsta seguro que desea despachar esta factura?.",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._billsService.dispatchBill(t).pipe((0,m.R)(this._unsubscribeAll),(0,se.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:n})=>{n&&this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.dispatchBill.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill"}})})})}updateStatus(t,a=null,i=null){this._fuseConfirmationService.open({title:"Actualizar Estado de la Factura",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._billsService.updateBillStatus(t,a,i).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:c})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:c.updateBillStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}generateBillDocument(t){this._documentsService.generateBillDocument(t,Ve.factura,this.merchant,this.user)}generateBillsReport(t=null,a=null){const i=this.range.getRawValue();!i.start||!i.end||this._billsService.getBillsByDateRangeAndStatus(i.start,i.end,t,a,this.selectedCustomer?this.selectedCustomer.id:null).pipe((0,O.q)(1)).subscribe(({data:n})=>{this._salesReportsService.generateBillsReport(i.start,i.end,this.user,this.merchant,n.getBillsByDateRangeAndStatus.bills,this.getTotalCUP(n.getBillsByDateRangeAndStatus.bills),this.getTotalUSD(n.getBillsByDateRangeAndStatus.bills),this.generateBillsSummary(n.getBillsByDateRangeAndStatus.bills))})}exportVersat(t){this._fileSaverService.exportAsFacFile(t,this.user,this._getBankAccountMC(this.merchant),this._getBankAccountOM(this.merchant,t))}trackByFn(t,a){return t||a.id}exportBillsByDateToVersat(){this._dialog.open(Fo,{panelClass:"ath-dialog-panel",disableClose:!0,maxWidth:"500px"}).afterClosed().subscribe(a=>{this._billsService.getBillsByDate(a.toISOString()).pipe((0,O.q)(1)).subscribe(({data:i})=>{const s=(0,qe.groupBy)(i.findAllBillsByDate.bills,"paymentMethod.name");(0,qe.groupBy)(s,"operationType.name")})})}existTableFilter(){return this.statusFilter?.hasFilter||this.billDateFilter?.hasFilter||this.paymentStatusFilter?.hasFilter||this.currencyFilter?.hasFilter||this.customerFilter?.hasFilter}clearTableFilters(){this.statusFilter?.hasFilter&&this.statusFilter.clearFilter(),this.billDateFilter?.hasFilter&&this.billDateFilter.clearFilter(),this.paymentStatusFilter?.hasFilter&&this.paymentStatusFilter.clearFilter(),this.currencyFilter?.hasFilter&&this.currencyFilter.clearFilter(),this.customerFilter?.hasFilter&&this.customerFilter.clearFilter()}_getBankAccountMC(t){return t.bankAccounts.find(i=>"CUP"===i.currency).no}_getBankAccountOM(t,a){return t.bankAccounts.find(i=>i.currency===a.currency.iso).no}getTotalCUP(t){return t.filter(i=>"CUP"===i.currency.iso).reduce((i,n)=>i+(n.total||0),0)}getTotalUSD(t){return t.filter(i=>"USD"===i.currency.iso).reduce((i,n)=>i+(n.total||0),0)}generateBillsSummary(t){const a={nueva:0,recibida:0,rechazada:0,cancelada:0};return t.forEach(i=>{a[i.status||Ce.DK.nueva]++}),a}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-bills"]],viewQuery:function(a,i){if(1&a&&(e.Gf(w.NW,5),e.Gf(S.YE,5),e.Gf(qo,5),e.Gf(ko,5),e.Gf(wo,5),e.Gf(Do,5),e.Gf(Uo,5)),2&a){let n;e.iGM(n=e.CRH())&&(i._paginator=n.first),e.iGM(n=e.CRH())&&(i._sort=n.first),e.iGM(n=e.CRH())&&(i.billDateFilter=n.first),e.iGM(n=e.CRH())&&(i.customerFilter=n.first),e.iGM(n=e.CRH())&&(i.currencyFilter=n.first),e.iGM(n=e.CRH())&&(i.statusFilter=n.first),e.iGM(n=e.CRH())&&(i.paymentStatusFilter=n.first)}},standalone:!0,features:[e.jDz],decls:59,vars:25,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500",3,"routerLink"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","flex-wrap","items-center","w-full","gap-2","mt-6","md:fixed","right-8","shrink-0","lg:mt-0","lg:ml-4","lg:w-auto","sm:w-1/2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"sm:mx-4","min-w-64","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matPrefix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"disabled","matMenuTriggerFor"],["xPosition","before"],["reportsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","flex-auto"],[1,"z-10","flex","flex-col","flex-auto","bg-white","dark:bg-default"],["class","relative grid"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[1,"relative","grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","bills-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"",3,"mat-sort-header"],[1,"flex","items-center","justify-center"],[3,"mat-sort-header"],[3,"filterType","dataChange"],["billDateFilter",""],[1,"flex","items-center","justify-start"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange"],["customerFilter",""],[3,"filterType","entityPropertyName","useUpperCase","data","dataChange"],["currencyFilter",""],[1,"flex","justify-end",3,"mat-sort-header"],[3,"filterType","data","dataChange"],["statusFilter",""],["matTooltip","Estado del pago",3,"mat-sort-header"],["paymentStatusFilter",""],[1,"flex","items-center","justify-end","mr-10",3,"ngClass"],["color","warn","class","w-6 h-6 min-h-6 min-w-6","mat-icon-button","","matTooltip","Limpiar filtros"],[1,"border-b","first-letter:z-10","sm:inset-x-0","sm:sticky","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["color","warn","mat-icon-button","","matTooltip","Limpiar filtros",1,"w-6","h-6","min-h-6","min-w-6",3,"click"],[1,"material-icons","icon-size-4"],[1,"z-0","grid","items-center","gap-4","px-6","py-3","border-b","bills-grid","md:px-8"],[1,"font-mono"],[1,"font-mono","text-center"],[1,"text-center"],[1,"font-mono","text-right"],[1,"flex","items-center","justify-center","mr-4","text-center","truncate","delay-100","rounded-full","h-7","lock","dark:bg-white","dark:bg-opacity-5",3,"ngClass"],[1,"w-full","px-2","text-sm","font-medium","text-center"],[1,"flex","flex-row","justify-end","gap-2"],["mat-stroked-button","","matTooltip","Imprimir factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Despachar Factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["mat-stroked-button","","matTooltip","Actualizar estados",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"matMenuTriggerFor","disabled"],["listStatusMenu","matMenu"],[1,"w-full","p-2","text-lg","font-semibold","text-center","text-secondary"],["mat-menu-item","",1,"grid","w-full","grid-cols-4",3,"disabled","click"],[1,"col-span-1"],["class","icon-size-5",3,"svgIcon"],[1,"col-span-3","text-center"],["class","z-0 grid items-center gap-4 px-6 py-3 border-b bills-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",8),e._uU(14,"Facturaci\xf3n"),e.qZA()(),e.TgZ(15,"div",5),e._UZ(16,"mat-icon",6),e.TgZ(17,"a",8),e._uU(18,"Facturas"),e.qZA()()(),e.TgZ(19,"div",9)(20,"h2",10),e._uU(21," Registro de Facturas "),e.qZA()()(),e.TgZ(22,"div",11)(23,"mat-form-field",12),e._UZ(24,"mat-icon",13)(25,"input",14),e.qZA(),e.TgZ(26,"mat-form-field",15)(27,"mat-date-range-input",16),e._UZ(28,"input",17)(29,"input",18),e.qZA(),e._UZ(30,"mat-datepicker-toggle",19)(31,"mat-date-range-picker",20,21),e.YNc(33,Po,1,0,"mat-icon",22),e.qZA(),e.TgZ(34,"button",23),e._UZ(35,"mat-icon",24),e.TgZ(36,"span",25),e._uU(37,"Registrar"),e.qZA()(),e.TgZ(38,"div",26)(39,"button",27),e._UZ(40,"mat-icon",24),e.TgZ(41,"span",25),e._uU(42,"Reportes"),e.qZA()(),e.TgZ(43,"mat-menu",28,29)(45,"button",30),e.NdJ("click",function(){return i.generateBillsReport()}),e._uU(46,"Facturas realizadas"),e.qZA(),e.TgZ(47,"button",30),e.NdJ("click",function(){return i.generateBillsReport(null,"cobrada")}),e._uU(48,"Facturas cobradas"),e.qZA(),e.TgZ(49,"button",30),e.NdJ("click",function(){return i.generateBillsReport(null,"pendiente")}),e._uU(50,"Facturas por cobrar"),e.qZA(),e.TgZ(51,"button",30),e.NdJ("click",function(){return i.generateBillsReport("cancelada")}),e._uU(52,"Facturas canceladas"),e.qZA(),e.TgZ(53,"button",30),e.NdJ("click",function(){return i.generateBillsReport("rechazada")}),e._uU(54,"Facturas rechazadas"),e.qZA()()()()(),e.TgZ(55,"div",31)(56,"div",32),e.YNc(57,Ho,39,36,"div",33),e.ALo(58,"async"),e.qZA()()()),2&a){const n=e.MAs(32),s=e.MAs(44);let c;e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(),e.Q6J("routerLink",e.DdM(23,Ko)),e.xp6(3),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("formGroup",i.range)("rangePicker",n)("max",i.maxDate),e.xp6(3),e.Q6J("for",n),e.xp6(3),e.um2(33,i.range.get("start").value||i.range.get("end").value?33:-1),e.xp6(),e.Q6J("routerLink",e.DdM(24,Wo)),e.xp6(),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(4),e.Q6J("disabled",!i.range.get("start").value||!i.range.get("end").value||i.range.invalid)("matMenuTriggerFor",s),e.xp6(),e.Q6J("svgIcon","mat_solid:plagiarism"),e.xp6(17),e.um2(57,(c=e.lcZ(58,21,i.bills$))?57:-1,c)}},dependencies:[v.Ov,v.uU,v.JJ,T.ot,T.lW,T.RK,q.FA,q.nW,q.wx,q.zY,q.By,q._g,g.lN,g.KE,g.qo,g.R9,k.Ps,k.Hw,U.c,U.Nt,$.Tx,$.VK,$.OP,$.p6,w.TU,w.NW,S.JX,S.YE,S.nU,v.mk,r.UX,r.Fj,r.JJ,r.JL,r.oH,r.sg,r.u,J.rH,Ge.q,v.gd,ye.H],encapsulation:2,changeDetection:0})}return o})();var mt=d(86903),pt=d(66102);const gt=o=>o.salesDashboardStats,ea=(0,C.P1)(gt,o=>o.salesDashboardStats),ta=((0,C.P1)(gt,o=>o.salesDashboardStats.salesSummary),Z.Ps`
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
`),ia=Z.Ps`
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
`,oa=Z.Ps`
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
`,aa=Z.Ps`
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
`;let ht=(()=>{class o{constructor(t,a){this.apolloProvider=t,this.store=a,this._apollo=this.apolloProvider.use("BALANC")}getSalesDashboardStatsData(t,a){return this._apollo.query({query:ta,variables:{initDate:t,endDate:a},errorPolicy:"all"}).pipe((0,B.b)(({data:i})=>{this.store.dispatch((0,pt.TP)({salesDashboardStats:i.salesDashboardStats}))}))}getBillsByCustomersAndCurrency(t,a,i,n){return this._apollo.query({query:ia,variables:{initDate:t,endDate:a,currencyId:i,customerId:n},errorPolicy:"all"})}getProductsBoughtByCustomer(t,a,i){return this._apollo.query({query:oa,variables:{initDate:t,endDate:a,customerId:i},errorPolicy:"all"})}getBillsCollectedByCustomersAndCurrency(t,a,i="",n,s){return this._apollo.query({query:aa,errorPolicy:"all",variables:{initDate:t,endDate:a,paymentStatus:i,currencyId:n,customerId:s}})}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(Z._M),e.LFG(C.yh))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function ra(o,l){if(1&o&&(e.TgZ(0,"mat-option",12),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.iso," ")}}function sa(o,l){if(1&o&&(e.TgZ(0,"mat-option",12),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}let Ye=(()=>{class o{constructor(){this.currencyIdControl=new r.NI(""),this.customerIdControl=new r.NI(""),this.currencies=[],this.customers=[],this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialogRef=(0,e.f3M)(A.so),this._unsubscribeAll=new V.x,this.store=(0,e.f3M)(C.yh)}ngOnInit(){this.store.select(pe.zd).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()}),this.store.select(Se.p6).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.customers=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}selectFilters(){const t=this.currencyIdControl.getRawValue(),a=this.customerIdControl.getRawValue();this._dialogRef.close({currencyId:t,customerId:a})}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["lists-filter-selectors-dialog"]],standalone:!0,features:[e.jDz],decls:26,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col","gap-3"],[1,"w-full"],[3,"formControl"],["value",""],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","matDialogClose","click"],[3,"value"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3," Seleccionar Moneda "),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),e._uU(9,"Moneda"),e.qZA(),e.TgZ(10,"mat-select",7),e.SjG(11,ra,2,2,"mat-option",12,e.x6l),e.qZA()(),e.TgZ(13,"mat-form-field",6)(14,"mat-label"),e._uU(15,"Clientes"),e.qZA(),e.TgZ(16,"mat-select",7)(17,"mat-option",8),e._uU(18," Todos los Clientes "),e.qZA(),e.SjG(19,sa,2,2,"mat-option",12,e.x6l),e.qZA()()()()(),e.TgZ(21,"div",9)(22,"button",10),e._uU(23," Cancelar "),e.qZA(),e.TgZ(24,"button",11),e.NdJ("click",function(){return i.selectFilters()}),e._uU(25," Aceptar "),e.qZA()()()),2&a&&(e.xp6(10),e.Q6J("formControl",i.currencyIdControl),e.xp6(),e.wJu(i.currencies),e.xp6(5),e.Q6J("formControl",i.customerIdControl),e.xp6(3),e.wJu(i.customers),e.xp6(3),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("color","primary")("matDialogClose","confirmed"))},dependencies:[T.ot,T.lW,A.Is,A.ZT,g.lN,g.KE,g.hX,K.LD,K.gD,xe.ey,r.UX,r.JJ,r.oH],encapsulation:2,changeDetection:0})}return o})();var ft=d(95407);function la(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-icon",62),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.range.reset())}),e.qZA()}}function ca(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Fecha de inicio no v\xe1lida "),e.qZA())}function ua(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Fecha de final no v\xe1lida "),e.qZA())}let da=(()=>{class o{constructor(){this.billIndicators=null,this.chartSalesStats={},this.salesBalanceOptions={},this.billsByPaymentMethodDistribution={},this.initDate=new Date((new Date).getTime()-6048e5),this.billsMapping={"=1":"Factura",other:"Facturas"},this.endDate=new Date,this.merchant=null,this.range=null,this.salesDashboardStats=null,this.salesSummary=null,this.salesBalance=null,this.paymentMethodDistribution={categories:["Transferencia","Efectivo","Cheque","Mixta"],series:[{name:"Facturas",data:[12,20,1,5]}]},this.totalQuantity=0,this.totalQuantityAdded=0,this.rangeDays=0,this.user=null,this.maxDate=new Date,this._billsService=(0,e.f3M)(je),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialog=(0,e.f3M)(A.uw),this._router=(0,e.f3M)(J.F0),this._salesDashboardStatsService=(0,e.f3M)(ht),this._salesReportsService=(0,e.f3M)(dt),this._snackBar=(0,e.f3M)(N.ux),this._unsubscribeAll=new V.x,this.store=(0,e.f3M)(C.yh)}ngOnInit(){this.store.select(ea).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.salesSummary=t.salesSummary,this.totalQuantity=t.totalQuantity,this.totalQuantityAdded=t.totalQuantityAdded,this.billIndicators=t.billIndicators,this.salesBalance=t.salesBalance,this._prepareChartData(),this._prepareSalesBalanceChartData(),this._changeDetectorRef.markForCheck()}),this.store.select(z.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(G.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.range=new r.cw({start:new r.NI({disabled:!1,value:this.initDate},[X.L.futureDateValidator()]),end:new r.NI({disabled:!1,value:this.endDate},[X.L.futureDateValidator()])}),this.rangeDays=this.getDaysBetweenDates(),this.range.get("end").valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{const a=this.range.getRawValue();!a.start||!a.end||(this.rangeDays=this.getDaysBetweenDates(),t<=new Date&&this._salesDashboardStatsService.getSalesDashboardStatsData(a.start,a.end).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Datos actualizados correctamente.",title:"Confirmaci\xf3n",type:"success",appearance:"fill"}})}),this._changeDetectorRef.markForCheck())}),window.Apex={chart:{events:{mounted:(t,a)=>{this._fixSvgFill(t.el)},updated:(t,a)=>{this._fixSvgFill(t.el)}}}}}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,pt.qy)())}generateBillsReport(t=null){const a=this.range.getRawValue();!a.start||!a.end||this._billsService.getBillsByDateRangeAndStatus(a.start,a.end,t).pipe((0,O.q)(1)).subscribe(({data:i})=>{Q.W.IsNullOrEmpty(i.getBillsByDateRangeAndStatus.bills)?this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen facturas para el rango de fecha seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateBillsReport(a.start,a.end,this.user,this.merchant,i.getBillsByDateRangeAndStatus.bills,this.getTotalCUP(i.getBillsByDateRangeAndStatus.bills),this.getTotalUSD(i.getBillsByDateRangeAndStatus.bills),this.generateBillsSummary(i.getBillsByDateRangeAndStatus.bills))})}generateBillsCollectedByCustomerAndCurrencyReport(t){const{start:a,end:i}=this.range.getRawValue();!a||!i||this._dialog.open(Ye,{width:"200px",panelClass:"ath-dialog-panel",disableClose:!0}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(({currencyId:n,customerId:s})=>{Q.W.IsNullOrEmpty(n)&&Q.W.IsNullOrEmpty(s)||this._salesDashboardStatsService.getBillsCollectedByCustomersAndCurrency(a,i,t,n,s).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:c})=>{Q.W.IsNullOrEmpty(c.getBillsCollectedByCustomersAndCurrency.billsCollectedByCustomersAndCurrency)?this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen facturas cobradas, para la moneda y el rango de fecha seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateBillsByCustomersReport(a,i,this.user,this.merchant,c.getBillsCollectedByCustomersAndCurrency.billsCollectedByCustomersAndCurrency,t)})})}getDaysBetweenDates(){const t=this.range.getRawValue().start,a=this.range.getRawValue().end,i=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),n=Date.UTC(a.getFullYear(),a.getMonth(),a.getDate());return Math.floor((n-i)/864e5)}getTotalCUP(t){return t.filter(i=>"CUP"===i.currency.iso).reduce((i,n)=>i+(n.total||0),0)}getTotalUSD(t){return t.filter(i=>"USD"===i.currency.iso).reduce((i,n)=>i+(n.total||0),0)}generateBillsSummary(t){const a={nueva:0,recibida:0,rechazada:0,cancelada:0};return t.forEach(i=>{a[i.status||Ce.DK.nueva]++}),a}generateBillsByCustomersReport(){const{start:t,end:a}=this.range.getRawValue();this._dialog.open(Ye,{width:"200px",panelClass:"ath-dialog-panel",disableClose:!0}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(({currencyId:i,customerId:n})=>{Q.W.IsNullOrEmpty(i)&&Q.W.IsNullOrEmpty(n)||this._salesDashboardStatsService.getBillsByCustomersAndCurrency(t,a,i,n).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{Q.W.IsNullOrEmpty(s.getBillsByCustomersAndCurrency.billsByCustomersAndCurrency)?this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen facturas, para la moneda y el rango de fecha seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateBillsByCustomersReport(t,a,this.user,this.merchant,s.getBillsByCustomersAndCurrency.billsByCustomersAndCurrency)})})}generateProductsBoughtByCustomerReport(){const{start:t,end:a}=this.range.getRawValue();this._dialog.open(Ye,{width:"200px",panelClass:"ath-dialog-panel",disableClose:!0}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(({customerId:i})=>{Q.W.IsNullOrEmpty(i)?this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Debe seleccionar un cliente.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesDashboardStatsService.getProductsBoughtByCustomer(t,a,i).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:n})=>{Q.W.IsNullOrEmpty(n.getProductsBoughtByCustomer.productsBoughtByCustomer)?this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"No existen productos facturados para el cliente seleccionado.",title:"Sin datos",type:"warning",appearance:"fill"}}):this._salesReportsService.generateProductsBoughtByCustomerReport(t,a,this.user,this.merchant,n.getProductsBoughtByCustomer.productsBoughtByCustomer)})})}largeNumber(t,a){return function na(o,l){return o>=1e6?(o/1e6).toFixed(l)+"M":o>=1e3?(o/1e3).toFixed(l)+"K":o.toFixed(l)}(t,a)}trackByFn(t,a){return a.id||t}_fixSvgFill(t){const a=this._router.url;Array.from(t.querySelectorAll("*[fill]")).filter(i=>-1!==i.getAttribute("fill").indexOf("url(")).forEach(i=>{const n=i.getAttribute("fill");i.setAttribute("fill",`url(${a}${n.slice(n.indexOf("#"))}`)})}_prepareChartData(){this.chartSalesStats={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#f59e0b","#22c55e"],dataLabels:{enabled:!0,enabledOnSeries:[0],background:{borderWidth:0}},grid:{borderColor:"var(--fuse-border)"},labels:this.salesSummary.labels,legend:{show:!1},plotOptions:{bar:{columnWidth:"50%"}},series:[{name:"Total",type:"line",data:this.salesSummary.serie},{name:"Cobradas",type:"bar",data:this.salesSummary.collectedSerie}],states:{hover:{filter:{type:"darken",value:.75}}},stroke:{width:[3,0]},tooltip:{followCursor:!0,theme:"dark"},xaxis:{axisBorder:{show:!1},axisTicks:{color:"var(--fuse-border)"},labels:{style:{colors:"var(--fuse-text-secondary)"}},tooltip:{enabled:!1}},yaxis:{labels:{offsetX:-16,style:{colors:"var(--fuse-text-secondary)"}}}},this.billsByPaymentMethodDistribution={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"radar",sparkline:{enabled:!0}},colors:["#818CF8"],dataLabels:{enabled:!0,formatter:t=>`${t}`,textAnchor:"start",style:{fontSize:"13px",fontWeight:500},background:{borderWidth:0,padding:4},offsetY:-15},markers:{strokeColors:"#818CF8",strokeWidth:4},plotOptions:{radar:{polygons:{strokeColors:"var(--fuse-border)",connectorColors:"var(--fuse-border)"}}},series:this.paymentMethodDistribution.series,stroke:{width:2},tooltip:{theme:"dark",y:{formatter:t=>`${t}`}},xaxis:{labels:{show:!0,style:{fontSize:"14px",fontWeight:"600"}},categories:this.paymentMethodDistribution.categories},yaxis:{max:t=>parseInt((t+10).toFixed(0),10),tickAmount:7}}}_prepareSalesBalanceChartData(){this.salesBalanceOptions={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#A3BFFA","#667EEA"],fill:{colors:["#CED9FB","#AECDFD"],opacity:.5,type:"solid"},series:this.salesBalance.series,stroke:{curve:"straight",width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"dd/MM/yyyy"},y:{formatter:t=>t.toFixed(2)}},xaxis:{type:"datetime"}}}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-dashboard"]],standalone:!0,features:[e.jDz],decls:138,vars:70,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","p-6","mx-auto","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","leading-8","tracking-tight"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","items-center","ml-6"],[1,"min-w-72","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],["mat-stroked-button","",1,"hidden","mx-3","sm:inline-flex",3,"matMenuTriggerFor","disabled"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["xPosition","before"],["reportsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"sm:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"svgIcon"],["actionsMenu","matMenu"],["mat-menu-item",""],[1,"grid","w-full","grid-cols-1","gap-8","mt-8","xl:grid-cols-2"],[1,"grid","grid-cols-1","gap-8","mt-8","xl:grid-cols-2","sm:grid-flow-col","xl:grid-flow-row"],[1,"flex","flex-col","flex-auto","p-6","overflow-hidden","shadow","bg-card","rounded-2xl"],[1,"flex","items-start","justify-between"],[1,"text-lg","font-medium","leading-6","tracking-tight","truncate"],[1,"ml-2","-mt-2","-mr-3"],["mat-icon-button","","disabled",""],[1,"flex","flex-col","items-center","mt-2"],[1,"font-bold","leading-none","tracking-tight","text-7xl","sm:text-8xl","text-amber-500"],[1,"text-lg","font-medium","text-amber-600","dark:text-amber-500"],[1,"font-bold","leading-none","tracking-tight","text-blue-500","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-blue-600","dark:text-blue-500"],[1,"font-bold","leading-none","tracking-tight","text-green-500","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-green-600","dark:text-green-500"],[1,"font-bold","leading-none","tracking-tight","text-red-500","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-red-600","dark:text-red-500"],[1,"grid","w-full","grid-cols-1","gap-8","mt-8"],[1,"flex","flex-col","flex-auto","overflow-hidden","shadow","bg-card","rounded-2xl"],[1,"flex","flex-col","p-6","pb-4"],[1,"flex","items-center","justify-between"],[1,"flex","flex-col"],[1,"mr-4","text-lg","font-medium","leading-6","tracking-tight","truncate"],[1,"font-medium","text-secondary"],["mat-button","","disabled","",1,"h-6","px-2","rounded-full","min-h-6","bg-hover"],[1,"text-sm","font-medium","text-secondary"],[1,"flex","items-start","mt-6","mr-2"],[1,"flex","flex-col","ml-8","md:ml-16"],[1,"text-3xl","font-semibold","tracking-tighter","md:text-5xl"],[1,"text-sm","font-medium","leading-none","text-secondary"],[1,"flex","flex-col","flex-auto"],[1,"flex-auto","w-full","h-full",3,"chart","colors","fill","series","stroke","tooltip","xaxis"],[1,"grid","w-full","min-w-0","grid-cols-1","gap-6","mt-8","sm:grid-cols-2"],[1,"flex","flex-col","items-start","justify-between","sm:flex-row"],[1,"grid","w-full","grid-flow-row","grid-cols-1","gap-6","mt-8","sm:col-span-2","sm:mt-4"],[1,"flex","flex-col","flex-auto","w-full"],[1,"flex-auto","w-full","h-80",3,"chart","colors","dataLabels","grid","labels","legend","plotOptions","series","states","stroke","tooltip","xaxis","yaxis"],[1,"flex-auto","w-full","h-80",3,"chart","colors","dataLabels","markers","plotOptions","series","stroke","tooltip","xaxis","yaxis"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"h2",3),e._uU(5,"Panel de Ventas"),e.qZA(),e.TgZ(6,"div",4),e._uU(7,"Seguimiento del estados de tus ventas"),e.qZA()(),e.TgZ(8,"div",5)(9,"mat-form-field",6)(10,"mat-date-range-input",7),e._UZ(11,"input",8)(12,"input",9),e.qZA(),e._UZ(13,"mat-datepicker-toggle",10)(14,"mat-date-range-picker",11,12),e.YNc(16,la,1,0,"mat-icon",13)(17,ca,2,0,"mat-error")(18,ua,2,0,"mat-error"),e.qZA(),e.TgZ(19,"button",14),e._UZ(20,"mat-icon",15),e.TgZ(21,"span",16),e._uU(22,"Reportes"),e.qZA()(),e.TgZ(23,"mat-menu",17,18)(25,"button",19),e.NdJ("click",function(){return i.generateBillsReport()}),e._uU(26,"Facturas realizadas"),e.qZA(),e.TgZ(27,"button",19),e.NdJ("click",function(){return i.generateBillsByCustomersReport()}),e._uU(28,"Facturas por clientes"),e.qZA(),e.TgZ(29,"button",19),e.NdJ("click",function(){return i.generateBillsCollectedByCustomerAndCurrencyReport("cobrada")}),e._uU(30,"Facturas cobradas por clientes"),e.qZA(),e.TgZ(31,"button",19),e.NdJ("click",function(){return i.generateProductsBoughtByCustomerReport()}),e._uU(32,"Productos facturados por clientes"),e.qZA()(),e.TgZ(33,"div",20)(34,"button",21),e._UZ(35,"mat-icon",22),e.qZA(),e.TgZ(36,"mat-menu",null,23)(38,"button",24),e._uU(39,"Reportes"),e.qZA(),e.TgZ(40,"button",24),e._uU(41,"Exportar"),e.qZA()()()()(),e.TgZ(42,"div",25)(43,"div",26)(44,"div",27)(45,"div",28)(46,"div",29),e._uU(47,"Facturas realizadas"),e.qZA(),e.TgZ(48,"div",30)(49,"button",31),e._UZ(50,"mat-icon",15),e.qZA()()(),e.TgZ(51,"div",32)(52,"div",33),e._uU(53),e.qZA(),e.TgZ(54,"div",34),e._uU(55),e.ALo(56,"i18nPlural"),e.qZA()()(),e.TgZ(57,"div",27)(58,"div",28)(59,"div",29),e._uU(60,"Facturas entregadas"),e.qZA(),e.TgZ(61,"div",30)(62,"button",31),e._UZ(63,"mat-icon",15),e.qZA()()(),e.TgZ(64,"div",32)(65,"div",35),e._uU(66),e.qZA(),e.TgZ(67,"div",36),e._uU(68),e.ALo(69,"i18nPlural"),e.qZA()()(),e.TgZ(70,"div",27)(71,"div",28)(72,"div",29),e._uU(73,"Facturas Cobradas"),e.qZA(),e.TgZ(74,"div",30)(75,"button",31),e._UZ(76,"mat-icon",15),e.qZA()()(),e.TgZ(77,"div",32)(78,"div",37),e._uU(79),e.qZA(),e.TgZ(80,"div",38),e._uU(81),e.ALo(82,"i18nPlural"),e.qZA()()(),e.TgZ(83,"div",27)(84,"div",28)(85,"div",29),e._uU(86,"Facturas Cancelas"),e.qZA(),e.TgZ(87,"div",30)(88,"button",31),e._UZ(89,"mat-icon",15),e.qZA()()(),e.TgZ(90,"div",32)(91,"div",39),e._uU(92),e.qZA(),e.TgZ(93,"div",40),e._uU(94),e.ALo(95,"i18nPlural"),e.qZA()()()(),e.TgZ(96,"div",41)(97,"div",42)(98,"div",43)(99,"div",44)(100,"div",45)(101,"div",46),e._uU(102,"Balance de ventas"),e.qZA(),e.TgZ(103,"div",47),e._uU(104,"Comparaci\xf3n facturado vs cobrado"),e.qZA()(),e.TgZ(105,"div",16)(106,"button",48)(107,"span",49),e._uU(108),e.qZA()()()(),e.TgZ(109,"div",50)(110,"div",51)(111,"div",52),e._uU(112),e.qZA(),e.TgZ(113,"div",53),e._uU(114,"Importe facturado"),e.qZA()(),e.TgZ(115,"div",51)(116,"div",52),e._uU(117),e.qZA(),e.TgZ(118,"div",53),e._uU(119,"Importe cobrado"),e.qZA()()()(),e.TgZ(120,"div",54),e._UZ(121,"apx-chart",55),e.qZA()()()(),e.TgZ(122,"div",56)(123,"div",27)(124,"div",57)(125,"div",29),e._uU(126," Facturas por d\xeda de la semana "),e.qZA()(),e.TgZ(127,"div",58)(128,"div",59)(129,"div",47),e._uU(130,"Realizadas vs. Cobradas"),e.qZA(),e.TgZ(131,"div",54),e._UZ(132,"apx-chart",60),e.qZA()()()(),e.TgZ(133,"div",27)(134,"div",29),e._uU(135,"Facturas por M\xe9todo de Pago"),e.qZA(),e.TgZ(136,"div",54),e._UZ(137,"apx-chart",61),e.qZA()()()()()),2&a){const n=e.MAs(15),s=e.MAs(24),c=e.MAs(37);e.xp6(9),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("formGroup",i.range)("rangePicker",n)("max",i.maxDate),e.xp6(3),e.Q6J("for",n),e.xp6(3),e.um2(16,i.range.get("start").value||i.range.get("end").value?16:-1),e.xp6(),e.um2(17,i.range.controls.start.hasError("matStartDateInvalid")?17:-1),e.xp6(),e.um2(18,i.range.controls.end.hasError("matEndDateInvalid")?18:-1),e.xp6(),e.Q6J("matMenuTriggerFor",s)("disabled",i.range.invalid||!i.range.get("start").value||!i.range.get("end").value),e.xp6(),e.Q6J("svgIcon","mat_solid:plagiarism"),e.xp6(14),e.Q6J("matMenuTriggerFor",c),e.xp6(),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(15),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(3),e.hij(" ",i.largeNumber(i.billIndicators.totalBills,0)," "),e.xp6(2),e.hij(" ",e.xi3(56,58,i.billIndicators.totalBills,i.billsMapping)," "),e.xp6(8),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(3),e.hij(" ",i.largeNumber(i.billIndicators.totalBillsDelivered,0),""),e.xp6(2),e.hij(" ",e.xi3(69,61,i.billIndicators.totalBillsDelivered,i.billsMapping)," "),e.xp6(8),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(3),e.hij(" ",i.largeNumber(i.billIndicators.totalBillsCollected,0)," "),e.xp6(2),e.hij(" ",e.xi3(82,64,i.billIndicators.totalBillsCollected,i.billsMapping)," "),e.xp6(8),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(3),e.hij(" ",i.largeNumber(i.billIndicators.totalBillsCanceled,0)," "),e.xp6(2),e.hij(" ",e.xi3(95,67,i.billIndicators.totalBillsCanceled,i.billsMapping)," "),e.xp6(14),e.hij("",i.rangeDays," d\xedas"),e.xp6(4),e.hij("$ ",i.largeNumber(i.salesBalance.billed,2),""),e.xp6(5),e.hij("$ ",i.largeNumber(i.salesBalance.collected,2),""),e.xp6(4),e.Q6J("chart",i.salesBalanceOptions.chart)("colors",i.salesBalanceOptions.colors)("fill",i.salesBalanceOptions.fill)("series",i.salesBalanceOptions.series)("stroke",i.salesBalanceOptions.stroke)("tooltip",i.salesBalanceOptions.tooltip)("xaxis",i.salesBalanceOptions.xaxis),e.xp6(11),e.Q6J("chart",i.chartSalesStats.chart)("colors",i.chartSalesStats.colors)("dataLabels",i.chartSalesStats.dataLabels)("grid",i.chartSalesStats.grid)("labels",i.chartSalesStats.labels)("legend",i.chartSalesStats.legend)("plotOptions",i.chartSalesStats.plotOptions)("series",i.chartSalesStats.series)("states",i.chartSalesStats.states)("stroke",i.chartSalesStats.stroke)("tooltip",i.chartSalesStats.tooltip)("xaxis",i.chartSalesStats.xaxis)("yaxis",i.chartSalesStats.yaxis),e.xp6(5),e.Q6J("chart",i.billsByPaymentMethodDistribution.chart)("colors",i.billsByPaymentMethodDistribution.colors)("dataLabels",i.billsByPaymentMethodDistribution.dataLabels)("markers",i.billsByPaymentMethodDistribution.markers)("plotOptions",i.billsByPaymentMethodDistribution.plotOptions)("series",i.billsByPaymentMethodDistribution.series)("stroke",i.billsByPaymentMethodDistribution.stroke)("tooltip",i.billsByPaymentMethodDistribution.tooltip)("xaxis",i.billsByPaymentMethodDistribution.xaxis)("yaxis",i.billsByPaymentMethodDistribution.yaxis)}},dependencies:[v.Gx,T.ot,T.lW,T.RK,q.FA,ft.PQ,q.nW,q.wx,q.zY,q.By,q._g,g.lN,g.KE,g.TO,g.R9,k.Ps,k.Hw,$.Tx,$.VK,$.OP,$.p6,mt.X,mt.x,r.UX,r.Fj,r.JJ,r.JL,r.sg,r.u],encapsulation:2,changeDetection:0})}return o})();const _t=o=>o.offers,He=((0,C.P1)(_t,o=>o.offer),(0,C.P1)(_t,o=>o.offers));var Ue=d(6106);let bt=(()=>{class o{constructor(t,a){this.apolloProvider=t,this.store=a,this._apollo=this.apolloProvider.use("BALANC")}getOffers(t=1,a=50,i="no",n="desc",s=""){return this._apollo.query({query:ri,errorPolicy:"all",variables:{offset:a*(t-1),limit:a,sort:i,order:n,search:s}}).pipe((0,B.b)(({data:c})=>{this.store.dispatch((0,Ue.Zu)({offers:c.findAllOffers.offers})),this.store.dispatch((0,Ae.Jr)({pagination:c.findAllOffers.pagination}))}))}getOfferById(t){return this._apollo.query({query:si,variables:{findOfferByIdId:t},errorPolicy:"all"}).pipe((0,B.b)(({data:a})=>{this.store.dispatch((0,Ue.FK)({offer:a.offer}))}))}updateOffer(t){return this.store.select(He).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:ai,variables:{updateOfferInput:t},errorPolicy:"all"}).pipe((0,B.b)(({data:i})=>{const n=(0,we.Z)(a);n[a.findIndex(c=>c.id===t.id)]=i.updatedOffer,this.store.dispatch((0,Ue.Zu)({offers:n}))}))))}removeOffer(t){return this.store.select(He).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:ni,variables:{removeOfferId:t},errorPolicy:"all"}).pipe((0,B.b)(()=>{const i=(0,we.Z)(a),n=a.findIndex(s=>s.id===t);i.splice(n,1),this.store.dispatch((0,Ue.Zu)({offers:i}))}))))}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(Z._M),e.LFG(C.yh))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function ma(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",27),e._uU(2),e.qZA(),e.TgZ(3,"div",23),e._uU(4),e.qZA(),e.TgZ(5,"div",24),e._uU(6),e.qZA(),e.TgZ(7,"div",27),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"div",24),e._uU(11),e.qZA(),e.TgZ(12,"div",28)(13,"button",29),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(4);return e.KtG(s.generatePDF("open",n))}),e._UZ(14,"mat-icon",30),e.qZA(),e.TgZ(15,"button",31),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(4);return e.KtG(s.generatePDF("print",n))}),e._UZ(16,"mat-icon",30),e.qZA(),e.TgZ(17,"button",32),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(4);return e.KtG(s.generatePDF("download",n))}),e._UZ(18,"mat-icon",30),e.qZA()()()}if(2&o){const t=l.$implicit;e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(9,8,t.total,"1.2-2")," "),e.xp6(3),e.hij(" ",t.status," "),e.xp6(3),e.Q6J("svgIcon","mat_solid:visibility"),e.xp6(2),e.Q6J("svgIcon","mat_solid:print"),e.xp6(2),e.Q6J("svgIcon","mat_solid:download")}}function pa(o,l){1&o&&e.SjG(0,ma,19,11,"div",33,e.QCX().trackByFn),2&o&&e.wJu(l)}const ga=o=>({"pointer-events-none":o}),ha=()=>[5,10,25,100];function fa(o,l){if(1&o&&(e.TgZ(0,"div",20)(1,"div",21)(2,"div",22),e._uU(3," N\xfamero "),e.qZA(),e.TgZ(4,"div",23),e._uU(5," Cliente "),e.qZA(),e.TgZ(6,"div",24),e._uU(7," Moneda "),e.qZA(),e.TgZ(8,"div",22),e._uU(9," Importe "),e.qZA(),e.TgZ(10,"div",24),e._uU(11," Estado "),e.qZA(),e.TgZ(12,"div",24),e._uU(13," Acciones "),e.qZA()(),e.YNc(14,pa,2,0),e.ALo(15,"async"),e.qZA(),e._UZ(16,"mat-paginator",25)),2&o){const t=e.oxw(2);let a;e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(6),e.Q6J("mat-sort-header","total"),e.xp6(6),e.um2(14,(a=e.lcZ(15,9,t.offers$))?14:-1,a),e.xp6(2),e.Q6J("ngClass",e.VKq(11,ga,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(13,ha))("showFirstLastButtons",!0)}}function _a(o,l){1&o&&(e.TgZ(0,"div",34),e._uU(1," \xa1No se ha registrado ninguna oferta! "),e.qZA())}function ba(o,l){1&o&&e.YNc(0,fa,17,14)(1,_a,2,0),2&o&&e.um2(0,l.length>0?0:1)}const xa=()=>["/modules/sales/bid"];F.vfs=Ee.I.vfs;let ya=(()=>{class o{constructor(t,a,i,n,s){this._offersService=t,this._changeDetectorRef=a,this._fuseConfirmationService=i,this._snackBar=n,this.store=s,this.offers$=(0,R.of)([]),this.isLoading=!1,this.searchInputControl=new r.NI,this.isSlideLoading=!1,this.selectedSlide=null,this.user=null,this.merchant=null,this._unsubscribeAll=new V.x}ngOnInit(){this.store.select(G.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(z.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.offers$=this.store.select(He),this.store.select(H.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(300),(0,P.w)(t=>(this.isLoading=!0,this._offersService.getOffers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,L.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,le.T)(this._sort.sortChange,this._paginator.page).pipe((0,P.w)(()=>(this.isLoading=!0,this._offersService.getOffers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,L.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}generatePDF(t="open",a){let i={header:{text:a.no,fontSize:18,bold:!0,alignment:"right",fontFeatures:["c2sc","smcp"],marginTop:10,marginRight:40},content:[{table:{widths:["*","*"],body:[[{table:{body:[[{text:this.merchant.name,fontSize:18,bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:`${this.merchant.address}, municipio ${this.merchant.city}, provincia ${this.merchant.state}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`Tel.: ${this.merchant.phone}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`@: ${this.merchant.email}`,fontSize:10,fontFeatures:["c2sc"]}],[{text:`NIT: ${this.merchant.nit}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`Cotizado por: ${a.user.fullname}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`Moneda: ${this.merchant.currency.iso}`,fontSize:12,fontFeatures:["c2sc","smcp"]}]]},layout:"noBorders"},{table:{body:[[{text:a.customer.name,fontSize:18,alignment:"right",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:`${a.customer.address}, municipio ${a.customer.city}, provincia ${a.customer.state}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}],[{text:`NIT: ${a.customer.nit}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}]]},layout:"noBorders"}]]},layout:"noBorders"},{table:{headerRows:1,widths:[30,"*",60,60,60,60],body:[[{text:"Item",style:"table_header"},{text:"Producto",style:"table_header",alignment:"left"},{text:"Unidad",style:"table_header"},{text:"Cantidad",style:"table_header"},{text:"Precio",style:"table_header"},{text:"Total",style:"table_header"}],...a.products.map(n=>[{text:a.products.indexOf(n)+1,alignment:"center",style:"table_body"},{text:n.name,style:"table_body"},{text:n.uom,alignment:"center",style:"table_body"},{text:n.quantity,alignment:"center",style:"table_body"},{text:n.price.toFixed(2),alignment:"center",style:"table_body"},{text:(n.quantity*n.price).toFixed(2),alignment:"center",style:"table_body"}]),[{rowSpan:3,colSpan:4,text:""},"","","",{text:"Subtotal",style:"totals_name"},{text:a.total.toFixed(2),style:"totals_value"}],[{colSpan:4,text:""},"","","",{text:"Descuento",style:"totals_name"},{text:(0).toFixed(2),style:"totals_value"}],[{colSpan:4,text:""},"","","",{text:"Total",style:"totals_name"},{text:a.total.toFixed(2),style:"totals_value"}]]},layout:{hLineWidth:(n,s)=>.7,vLineWidth:(n,s)=>.7},marginTop:20}],footer:(n,s)=>({table:{widths:["*","*"],body:[[{text:`Oferta: ${a.no} generada para ${a.customer.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${n.toString()}/${s} - Fecha de impresi\xf3n ${I().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"],fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"]},totals_value:{alignment:"center",fontFeatures:["c2sc","smcp"]}},pageOrientation:"portrait",pageSize:"LETTER",watermark:{text:this.merchant.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:`Oferta: ${a.no}`,author:`${this.user.fullname}`,creationDate:I().toDate(),modDate:I().toDate(),producer:this.merchant.name}};switch(t){case t="download":F.createPdf(i).download();break;case t="open":F.createPdf(i).open();break;case t="print":F.createPdf(i).print()}}trackByFn(t,a){return t||a.id}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(bt),e.Y36(e.sBO),e.Y36(ae.R),e.Y36(N.ux),e.Y36(C.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-offers"]],viewQuery:function(a,i){if(1&a&&(e.Gf(w.NW,5),e.Gf(S.YE,5)),2&a){let n;e.iGM(n=e.CRH())&&(i._paginator=n.first),e.iGM(n=e.CRH())&&(i._sort=n.first)}},standalone:!0,features:[e.jDz],decls:31,vars:13,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","offers-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hiddem","sm:block",3,"mat-sort-header"],[1,"hiddem","sm:block"],[1,"text-center","hiddem","sm:block"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","offers-grid","md:px-8"],[1,"font-mono","hiddem","sm:block"],[1,"flex","flex-row","justify-center","gap-2"],["mat-stroked-button","","matTooltip","Ver oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Imprimir oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Descargar oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["class","grid items-center gap-4 px-6 py-3 border-b offers-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Ofertas"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Ofertas "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e._UZ(22,"div",14),e.TgZ(23,"button",15),e._UZ(24,"mat-icon",16),e.TgZ(25,"span",17),e._uU(26,"Crear oferta"),e.qZA()()()(),e.TgZ(27,"div",18)(28,"div",19),e.YNc(29,ba,2,1),e.ALo(30,"async"),e.qZA()()()),2&a){let n;e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.xp6(2),e.Q6J("routerLink",e.DdM(12,xa)),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.um2(29,(n=e.lcZ(30,10,i.offers$))?29:-1,n)}},dependencies:[v.Ov,v.JJ,T.ot,T.lW,g.lN,g.KE,g.qo,k.Ps,k.Hw,U.c,U.Nt,w.TU,w.NW,S.JX,S.YE,S.nU,v.mk,r.UX,r.Fj,r.JJ,r.oH,J.rH],encapsulation:2,changeDetection:0})}return o})();const Ca=Z.Ps`
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
`,va=Z.Ps`
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
                # productsInBill {
                #     id
                #     name
                #     uom {
                #         abbr
                #     }
                #     price
                # }

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
`,Aa=Z.Ps`
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
`,Za=Z.Ps`
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
`,Ta=Z.Ps`
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
`,Ia=Z.Ps`
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
`,Sa=Z.Ps`
    mutation RemovePrebill($removeBillId: String!) {
        removePrebill(id: $removeBillId) {
            ok
            message
        }
    }
`,Fa=Z.Ps`
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
`,qa=Z.Ps`
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
`;let ka=(()=>{class o{constructor(t,a){this.apolloProvider=t,this._snackBar=a,this._apollo=this.apolloProvider.use("BALANC")}createPrebill(t){return this._apollo.mutate({mutation:Za,variables:{createPrebillInput:t},errorPolicy:"all"}).pipe((0,B.b)(({errors:a})=>{if(a){let i="";a.forEach(n=>i+=`\n ${n.message}.`),this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(Z._M),e.LFG(N.ux))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function wa(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",45),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.selectCustomer(n))}),e._uU(1),e.qZA()}if(2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.name," ")}}function Da(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La fecha de la Prefactura es obligatoria "),e.qZA())}function Ua(o,l){1&o&&(e.TgZ(0,"mat-option",27),e._uU(1," x1 "),e.qZA()),2&o&&e.Q6J("value",1)}function Pa(o,l){if(1&o&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.value),e.xp6(),e.hij(" x",t.value," ")}}function Ba(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El multiplicador es obligatorio "),e.qZA())}function Na(o,l){if(1&o&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function Ra(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de comprobante es obligatorio "),e.qZA())}function Ja(o,l){if(1&o&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function Ma(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de operaci\xf3n es obligatorio "),e.qZA())}function Ea(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",45),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.selectedCurrencyIso=n.iso)}),e._uU(1),e.qZA()}if(2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.iso," ")}}function $a(o,l){if(1&o&&(e.TgZ(0,"span",46),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(),e.AsE(" (+ ",2===(null==t.prebillingForm.get("rates").value?null:t.prebillingForm.get("rates").value.length)?"otro":"otros"," ",t.prebillingForm.get("rates").value.length>2?t.prebillingForm.get("rates").value.length-1:"",") ")}}function La(o,l){if(1&o&&(e.TgZ(0,"mat-option",27)(1,"span",47),e._uU(2),e.ALo(3,"number"),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA()()),2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(2),e.Oqu(e.xi3(3,3,t.value,"1.4-4")),e.xp6(3),e.hij(" ",t.name,"")}}function Qa(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Las tasas de cambio son requeridas "),e.qZA())}function za(o,l){if(1&o&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.AsE(" ",t.no," ",t.currency," ")}}function Oa(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La cuenta bancaria es obligatorio "),e.qZA())}function Ga(o,l){if(1&o&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function ja(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",48),e.NdJ("click",function(i){const s=e.CHM(t).$implicit;return e.oxw().addProductToBill(s),e.KtG(i.stopPropagation())}),e.TgZ(1,"div",49),e.NdJ("click",function(i){const s=e.CHM(t).$implicit;return e.oxw().addProductToBill(s),e.KtG(i.stopPropagation())}),e.TgZ(2,"span",50),e._UZ(3,"mat-checkbox",51),e._uU(4),e.qZA(),e.TgZ(5,"span",52),e._uU(6),e.qZA(),e.TgZ(7,"span",53),e._uU(8),e.ALo(9,"number"),e.qZA()()()}if(2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(3),e.Q6J("checked",t.checked),e.xp6(),e.hij(" ",t.name," "),e.xp6(2),e.Oqu(t.depot),e.xp6(2),e.AsE("",e.xi3(9,6,t.quantity,"1.2-2")," ",t.uom,"")}}const Va=(o,l)=>l.id;function Ya(o,l){1&o&&(e.TgZ(0,"mat-error",75),e._uU(1," Valor m\xednimo 0.1 "),e.qZA())}function Ha(o,l){if(1&o&&(e.TgZ(0,"mat-error",75),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(),e.hij(" Valor m\xe1ximo ",t.quantity," ")}}function Ka(o,l){1&o&&(e.TgZ(0,"mat-error",75),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}function Wa(o,l){1&o&&(e.TgZ(0,"mat-error",75),e._uU(1," Valor m\xednimo 0 "),e.qZA())}function Xa(o,l){1&o&&(e.TgZ(0,"mat-error",75),e._uU(1," Valor requerido "),e.qZA())}const en=o=>({"text-warn":o}),tn=()=>["$"];function on(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",59)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",60),e._uU(4),e.qZA(),e.TgZ(5,"div",61),e._uU(6),e.qZA(),e.TgZ(7,"div",57),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"div",62)(11,"div",63)(12,"button",64),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.decrementProductQty(n))}),e._UZ(13,"mat-icon",65),e.qZA(),e.TgZ(14,"mat-form-field",66),e._UZ(15,"input",67),e.qZA(),e.TgZ(16,"button",64),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.incrementProductQty(n))}),e._UZ(17,"mat-icon",65),e.qZA()(),e.YNc(18,Ya,2,0,"mat-error",68)(19,Ha,2,1,"mat-error",68)(20,Ka,2,0,"mat-error",68),e.qZA(),e.TgZ(21,"div",69)(22,"mat-form-field",66),e._UZ(23,"input",70),e.qZA(),e.YNc(24,Wa,2,0,"mat-error",68)(25,Xa,2,0,"mat-error",68),e.qZA(),e.TgZ(26,"div",71),e._uU(27),e.qZA(),e.TgZ(28,"div",72),e._uU(29),e.ALo(30,"currency"),e.qZA(),e.TgZ(31,"div",73)(32,"button",74),e.NdJ("click",function(){const n=e.CHM(t).$index,s=e.oxw(2);return e.KtG(s.removeProductToBill(n))}),e._UZ(33,"mat-icon",65),e.qZA()()()}if(2&o){const t=l.$implicit,a=l.$index,i=e.oxw(2);e.xp6(2),e.hij(" ",a+1," "),e.xp6(),e.Q6J("matTooltip",t.get("name").value),e.xp6(),e.hij(" ",t.get("name").value," "),e.xp6(2),e.hij(" ",t.get("depot").value," "),e.xp6(2),e.AsE(" ",e.xi3(9,27,t.get("stock").value,"1.2-2")," ",t.get("uom").value," "),e.xp6(4),e.Q6J("disabled",t.get("quantity").value<=.1||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",.1)("max",t.get("stock").value)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").value>=t.get("stock").value||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(18,t.get("quantity").hasError("min")?18:-1),e.xp6(),e.um2(19,t.get("quantity").hasError("max")?19:-1),e.xp6(),e.um2(20,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?20:-1),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("min",0)("max",9999999)("formControl",t.get("price")),e.xp6(),e.um2(24,t.get("price").hasError("min")?24:-1),e.xp6(),e.um2(25,t.get("price").hasError("required")?25:-1),e.xp6(),e.Q6J("ngClass",e.VKq(33,en,!t.get("rate").value)),e.xp6(),e.hij(" ",t.get("rate").value?i.selectedCurrencyIso:t.get("currency").value," "),e.xp6(2),e.hij(" ",e.xi3(30,30,t.get("pt").value,e.DdM(35,tn))," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function an(o,l){if(1&o&&(e.TgZ(0,"div",54)(1,"div",55),e._UZ(2,"div"),e.TgZ(3,"div",56),e._uU(4," Producto "),e.qZA(),e.TgZ(5,"div",56),e._uU(6," Almac\xe9n "),e.qZA(),e.TgZ(7,"div",57),e._uU(8," Disponibilidad "),e.qZA(),e.TgZ(9,"div",57),e._uU(10," Cantidad "),e.qZA(),e.TgZ(11,"div",57),e._uU(12," Precio "),e.qZA(),e.TgZ(13,"div",57),e._uU(14," Moneda "),e.qZA(),e.TgZ(15,"div",58),e._uU(16," Total "),e.qZA(),e.TgZ(17,"div",57),e._uU(18," Quitar "),e.qZA()(),e.SjG(19,on,34,36,"div",76,Va),e.qZA()),2&o){const t=e.oxw();e.xp6(19),e.wJu(t.prebillingForm.get("products").controls)}}function nn(o,l){1&o&&(e.TgZ(0,"div",77),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}const rn=()=>({suppressScrollX:!0}),sn=()=>({suppressScrollY:!0}),ln=o=>({"cursor-pointer shadow":o});let cn=(()=>{class o{constructor(){this.audio=new Audio("./assets/sounds/caja.mp3"),this.bankAccounts=[],this.currencies=[],this.currencies$=(0,R.of)([]),this.employees$=(0,R.of)([]),this.maxDate=new Date,this.merchant=null,this.multipliers$=(0,R.of)([]),this.operationTypes$=(0,R.of)([]),this.paymentMethods$=(0,R.of)([]),this.previewsProductsFormData=[],this.rates=[],this.searchCustomerControl=new r.NI(null),this.searchProductControl=new r.NI(null),this.selectedCurrencyIso="",this.selectedCustomerName="",this.stayHere=!1,this.total=0,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._customersService=(0,e.f3M)(Ze.v),this._formBuilder=(0,e.f3M)(r.qu),this._fuseConfirmationService=(0,e.f3M)(ae.R),this._prebillingService=(0,e.f3M)(ka),this._ratesService=(0,e.f3M)(ze.m),this._snackBar=(0,e.f3M)(N.ux),this._stocksService=(0,e.f3M)(Qe.T),this._unsubscribeAll=new V.x,this.store=(0,e.f3M)(C.yh),this._router=(0,e.f3M)(J.F0)}ngOnInit(){this.prebillingForm=this._formBuilder.group({id:new r.NI,billDate:new r.NI(new Date,[r.kI.required]),multiplier:new r.NI(1,[r.kI.required,r.kI.min(1)]),currencyId:new r.NI(null,[r.kI.required]),courierId:new r.NI(null),customerId:new r.NI("",[r.kI.required]),bankAccount:new r.NI(null,[r.kI.required]),operationTypeId:new r.NI(null,[r.kI.required]),paymentMethodId:new r.NI(null,[r.kI.required]),rates:new r.NI([],[r.kI.required]),surcharge:new r.NI(0,[r.kI.required,r.kI.min(0)]),discount:new r.NI(0,[r.kI.required,r.kI.min(0)]),observation:new r.NI("",[r.kI.maxLength(5e4)]),products:new r.Oe([])}),this.store.select(z.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this.bankAccounts=t.bankAccounts,Q.W.IsNullOrEmpty(t.bankAccounts)||this.prebillingForm.get("bankAccount").setValue(t.bankAccounts[0]),this._changeDetectorRef.markForCheck()}),this.prebillingForm.get("products").valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.verificarCambios(t,this.previewsProductsFormData)&&this.calcAllProductPrice(this.prebillingForm.get("multiplier").value),this.previewsProductsFormData=[...t],this._calculateBillTotal(),this._changeDetectorRef.markForCheck()}),this.currencies$=this.store.select(pe.zd),this.currencies$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,Q.W.IsNullOrEmpty(t)||setTimeout(()=>{const a=t.find(i=>i.id===this.merchant.currencyId);this.prebillingForm.get("currencyId").setValue(a.id)},500),this._changeDetectorRef.markForCheck()}),this.employees$=this.store.select(Oe.ri),this.multipliers$=this.store.select(Le.Af),this.customers$=this.store.select(Se.p6),this.paymentMethods$=this.store.select(at.VS),this.paymentMethods$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{if(!Q.W.IsNullOrEmpty(t)){const a=t.find(i=>"Efectivo"===i.name);this.prebillingForm.get("paymentMethodId").setValue(a?a.id:t[0].id)}this._changeDetectorRef.markForCheck()}),this.operationTypes$=this.store.select(ot.pU),this.operationTypes$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{Q.W.IsNullOrEmpty(t)||this.prebillingForm.get("operationTypeId").setValue(t[0].id),this._changeDetectorRef.markForCheck()}),this.productsInStock$=this.store.select(Fe.K2),this.ratesFiltered=this.prebillingForm.get("currencyId").valueChanges.pipe((0,W.O)(null),(0,ee.z)(t=>{if(t){const a=this.currencies.find(n=>n.id===t);this.selectedCurrencyIso=a.iso;const i=this.prebillingForm.get("bankAccount").getRawValue();return Q.W.IsNullOrEmpty(i)||a&&a.iso.toLocaleLowerCase()!==i.currency.toLocaleLowerCase()&&this.prebillingForm.get("bankAccount").setValue(null),a&&(this.bankAccounts=this.merchant.bankAccounts.filter(n=>n.currency.toLocaleLowerCase()===a.iso.toLocaleLowerCase())),this._ratesService.findActiveByBaseId(t)}return(0,R.of)([])})),this.ratesFiltered.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.rates=t,this.resetSelectedProductsRates(),this.updateSelectedRates()}),this.prebillingForm.get("rates").valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(500)).subscribe(t=>{this.resetSelectedProductsRates()}),this.prebillingForm.get("multiplier").valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.calcAllProductPrice(t),this._calculateBillTotal()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,E.b)(200),(0,W.O)(null),(0,ee.z)(t=>this._mapChecked(null!==t&&"string"==typeof t?this._stocksService.getProductsInStockAvailable(t,10):this.productsInStock$))),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,E.b)(200),(0,W.O)(null),(0,ee.z)(t=>null!==t&&"string"==typeof t&&t!==this.selectedCustomerName?this._customersService.findActiveCustomers(t.trim()):this.customers$))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}selectCustomer(t){this.prebillingForm.get("customerId").setValue(t.id),this.selectedCustomerName=t.name}addStockProduct(t){const a=this.prebillingForm.get("currencyId").value,i=structuredClone(this.prebillingForm.get("rates").value);let n=i.find(u=>u.currencyBaseId===a&&u.currencyRefId===t.currencyId);!n&&a!==t.currencyId&&(n=i.find(u=>u.currencyRefId===a&&u.currencyRefId!==u.currencyBaseId),n&&(n.value=1/n.value));const s=this.prebillingForm.get("multiplier").value,c=this._formBuilder.group({productId:new r.NI(t.productId,[r.kI.required]),currencyId:new r.NI(t.currencyId,[r.kI.required]),name:new r.NI(t.name,[r.kI.required]),staticPrice:new r.NI(Number(((n?n.value:1)*t.price).toFixed(2)),[r.kI.required,r.kI.min(0),r.kI.max(99999999)]),price:new r.NI(Number(((n?n.value:1)*t.price).toFixed(2)),[r.kI.required,r.kI.min(0),r.kI.max(99999999)]),multiplier:new r.NI(s),pt:new r.NI(0),uom:new r.NI(t.uom,[r.kI.required]),depotId:new r.NI(t.depotId,[r.kI.required]),depot:new r.NI(t.depot,[r.kI.required]),currency:new r.NI(t.currency,[r.kI.required]),stock:new r.NI(t.quantity,[r.kI.required]),rateId:new r.NI(n?n.id:null,[r.kI.required]),rate:new r.NI(n?n.value:null,[r.kI.required]),quantity:new r.NI(1,[X.L.onlyNumbersPattern(),r.kI.required,r.kI.min(.1),r.kI.max(t.quantity)])});this.prebillingForm.get("products").push(c),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}removeStockProduct(t){this.prebillingForm.get("products").removeAt(t),this.updateSelectedRates(),this._changeDetectorRef.markForCheck()}addProductToBill(t){const a=this.prebillingForm.get("products").getRawValue().findIndex(i=>i.productId===t.productId&&i.depotId===t.depotId);t.checked?(this.removeStockProduct(a),t.checked=!1):t.checked=!0,!(a>-1)&&this.addStockProduct(t)}incrementProductQty(t){const a=t.get("quantity").value;t.get("quantity").setValue(+a+1)}decrementProductQty(t){const a=t.get("quantity").value;t.get("quantity").setValue(+a-1)}removeProductToBill(t){this.removeStockProduct(t),this.searchProductControl.reset()}createBill(){if(this.prebillingForm.invalid||0===this.prebillingForm.get("products").controls.length)return;const t=this.prebillingForm.getRawValue();delete t.id;const a=[];t.ratesId=t.products.map(n=>n.rateId).filter((n,s,c)=>c.indexOf(n)===s);for(const n of t.products)a.push(this._mapProductToBill(n));t.products=a,t.subtotal=this.total,delete t.rates,t.bankAccount=(0,qe.omit)(t.bankAccount,"_id"),this._fuseConfirmationService.open({title:"Generar factura",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(n=>{"confirmed"===n&&this._prebillingService.createPrebill(t).pipe((0,m.R)(this._unsubscribeAll),(0,se.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:s})=>{s&&(this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:s.createPrebill.message,type:"success",svgIcon:"mat_solid:done"}}),this.audio.play(),this.stayHere?this.restoreForm():this._router.navigateByUrl("/modules/sales/prebills"))})})}restoreForm(){const t=this.prebillingForm.get("paymentMethodId").value,a=this.prebillingForm.get("operationTypeId").value,i=this.prebillingForm.get("multiplier").value;if(this.prebillingForm.get("products").clear(),this.searchCustomerControl.reset(),this.prebillingForm.reset(),this.total=0,this.selectedCustomerName="",this.searchProductControl.setValue(""),this.prebillingForm.get("paymentMethodId").setValue(t),this.prebillingForm.get("operationTypeId").setValue(a),this.prebillingForm.get("multiplier").setValue(i),this.prebillingForm.get("billDate").setValue(new Date),this.prebillingForm.get("observation").setValue(""),this.prebillingForm.get("surcharge").setValue(0),this.prebillingForm.get("discount").setValue(0),Q.W.IsNullOrEmpty(this.merchant.bankAccounts)||(this.bankAccounts=this.merchant.bankAccounts,this.prebillingForm.get("bankAccount").setValue(this.merchant.bankAccounts[0])),!Q.W.IsNullOrEmpty(this.currencies)){const n=this.currencies.find(s=>s.id===this.merchant.currencyId);this.prebillingForm.get("currencyId").setValue(n.id)}}_mapProductToBill(t){const{productId:a,price:i,depotId:n,quantity:s}=t,c=new Ce.vr(a,"","",Number(i.toFixed(2)),Number(Number(s).toFixed(4)),n);return delete c.name,delete c.uom,c}_calculateBillTotal(){const t=this.prebillingForm.get("products").getRawValue().map(a=>Number(a.quantity)*a.price).reduce((a,i)=>a+i,0);this.total=Number(t.toFixed(2))}_mapChecked(t){return t.pipe((0,L.U)(a=>a.map(i=>this.prebillingForm.get("products").getRawValue().some(s=>s.productId===i.productId&&s.depotId===i.depotId)?{...structuredClone(i),checked:!0}:{...structuredClone(i),checked:!1})))}resetSelectedProductsRates(){const t=this.prebillingForm.get("currencyId").value,a=this.prebillingForm.get("multiplier").value;for(const i of this.prebillingForm.get("products").controls){const n=i.getRawValue(),s=structuredClone(this.prebillingForm.get("rates").value);let c=s.find(_=>_.currencyBaseId===t&&_.currencyRefId===n.currencyId);!c&&t!==n.currencyId&&(c=s.find(_=>_.currencyRefId===t&&_.currencyRefId!==_.currencyBaseId),c&&(c.value=1/c.value));let u=c?c.value:null;const f=i.get("price").value,h=i.get("staticPrice").value;let p=i.get("rate").value?i.get("rate").value:1;p&&u===p&&(p=1,u=1),i.patchValue({...n,price:(u?f*u:1*f/p)*a,staticPrice:u?h*u:1*h/p,multiplier:a,rate:c?c.value:null,rateId:c?c.id:null})}this._changeDetectorRef.markForCheck()}calcAllProductPrice(t){const a=this.prebillingForm.get("products").getRawValue();this.previewsProductsFormData=[...a];for(const i of this.prebillingForm.get("products").controls){const n=i.getRawValue();let s=n.price/n.multiplier!==n.staticPrice?n.price:n.staticPrice,c=Number((s*t).toFixed(2));t===n.multiplier&&(c=Number((+n.price).toFixed(2)),s=n.price/t),i.patchValue({...n,staticPrice:s,price:c,pt:c*Number(n.quantity),multiplier:t})}}verificarCambios(t,a){for(let i=0;i<t.length;i++)if(t.length!==a.length||t[i].price!==a[i].price||Number(t[i].quantity)!==Number(a[i].quantity))return!0;return!1}updateSelectedRates(){const t=this.prebillingForm.get("currencyId").value,a=this.prebillingForm.get("products").getRawValue();let i=[];for(const s of a)i=[...this.rates.filter(f=>f.currencyBaseId===t&&f.currencyRefId===s.currencyId),...this.rates.filter(f=>f.currencyBaseId===s.currencyId&&f.currencyRefId===t&&f.currencyRefId!==f.currencyBaseId),...i];const n=i.reduce((s,c)=>(s.find(f=>f.id===c.id&&f.name===c.name)||s.push(c),s),[]);this.prebillingForm.get("rates").setValue(n)}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-prebilling"]],standalone:!0,features:[e.jDz],decls:140,vars:84,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0",3,"fuseScrollbarOptions"],[1,"relative","flex","flex-col","px-6","py-8","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["color","primary",3,"ngModel","ngModelChange"],["mat-flat-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[1,"flex","flex-col","px-4","mt-4","mb-12","gap-y-8","sm:px-8"],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"grid","gap-4","p-10","sm:grid-cols-4","lg:grid-cols-5",3,"formGroup"],["billNgForm","ngForm"],["appearance","fill",1,"w-full","md:col-span-2","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[1,"ath-autocomplete",3,"displayWith"],["customerAutocomplete","matAutocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["billDate",""],[3,"formControlName","required"],[3,"value"],["placeholder","Moneda",3,"formControlName","required"],["multiple","","placeholder","Tasa de cambio",3,"formControlName","required"],["class","text-sm opacity-75"],["matInput","","type","number","name","quantity",3,"min","max","formControlName"],[1,"flex","flex-col","gap-3","sm:flex-row","lg:flex-col","sm:col-span-2"],[3,"formControlName"],[1,"w-full","sm:col-span-4","lg:col-span-3","fuse-mat-textarea"],["matInput","",3,"formControlName","rows"],[1,"col-span-4","shadow","rounded-2xl","bg-card"],[1,"p-6","pb-0"],["appearance","fill",1,"w-full","fuse-mat-dense",3,"subscriptSizing"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete",3,"displayWith","closed"],["productsAutocomplete","matAutocomplete"],["fuseScrollbar","",1,"flex","flex-col","flex-auto","pb-6","mt-2","min-h-72",3,"fuseScrollbarOptions"],["class","grid"],[1,"flex","items-center","justify-center","w-full","gap-2","p-2","font-mono","text-3xl","font-semibold","leading-7","text-white","rounded-b-2xl","bg-gradient-to-r","from-primary-500","to-primary-700",3,"ngClass","click"],[3,"value","click"],[1,"text-sm","opacity-75"],[1,"w-18"],[1,"w-full",3,"value","click"],[1,"grid","w-full","grid-cols-6",3,"click"],[1,"flex","flex-row","items-center","col-span-5","truncate","md:col-span-3"],["color","primary",3,"checked"],[1,"items-center","hidden","col-span-2","md:flex"],[1,"flex","items-center","text-center"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left"],[1,"text-center"],[1,"text-right"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"truncate",3,"matTooltip"],[1,"truncate"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"flex","flex-col","items-center","justify-center"],["matInput","","type","number",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],[1,"text-center",3,"ngClass"],[1,"font-mono","text-right"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"w-full","text-sm","text-center"],["class","grid items-center gap-4 px-6 py-3 border-b billing-products-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-30"],["class","w-full",3,"value"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Facturaci\xf3n"),e.qZA()(),e.TgZ(15,"div",5),e._UZ(16,"mat-icon",6),e.TgZ(17,"a",7),e._uU(18,"Prefacturar"),e.qZA()()(),e.TgZ(19,"div",8)(20,"h2",9),e._uU(21," Hacer Prefactura "),e.qZA()()(),e.TgZ(22,"div",10)(23,"mat-checkbox",11),e.NdJ("ngModelChange",function(s){return i.stayHere=s}),e._uU(24,"Permanecer aqu\xed"),e.qZA(),e.TgZ(25,"button",12),e.NdJ("click",function(){return i.createBill()}),e._uU(26," Generar Prefactura "),e.qZA()()(),e.TgZ(27,"div",13)(28,"div",14)(29,"form",15,16)(31,"mat-form-field",17)(32,"mat-label"),e._uU(33,"Cliente"),e.qZA(),e._UZ(34,"mat-icon",18)(35,"input",19),e.TgZ(36,"mat-autocomplete",20,21),e.SjG(38,wa,2,2,"mat-option",27,e.x6l),e.ALo(40,"async"),e.qZA()(),e.TgZ(41,"mat-form-field",22)(42,"mat-label"),e._uU(43,"Fecha de la Prefactura"),e.qZA(),e._UZ(44,"input",23),e.TgZ(45,"mat-hint"),e._uU(46,"DD/MM/YYYY"),e.qZA(),e._UZ(47,"mat-datepicker-toggle",24)(48,"mat-datepicker",null,25),e.YNc(50,Da,2,0,"mat-error"),e.qZA(),e.TgZ(51,"mat-form-field",22)(52,"mat-label"),e._uU(53,"Multiplicador"),e.qZA(),e.TgZ(54,"mat-select",26),e.YNc(55,Ua,2,1,"mat-option",27),e.ALo(56,"async"),e.SjG(57,Pa,2,2,"mat-option",27,e.x6l),e.ALo(59,"async"),e.qZA(),e.YNc(60,Ba,2,0,"mat-error"),e.qZA(),e.TgZ(61,"mat-form-field",22)(62,"mat-label"),e._uU(63,"M\xe9todo de pago"),e.qZA(),e.TgZ(64,"mat-select",26),e.SjG(65,Na,2,2,"mat-option",27,e.x6l),e.ALo(67,"async"),e.qZA(),e.YNc(68,Ra,2,0,"mat-error"),e.qZA(),e.TgZ(69,"mat-form-field",22)(70,"mat-label"),e._uU(71,"Tipo de Operaci\xf3n"),e.qZA(),e.TgZ(72,"mat-select",26),e.SjG(73,Ja,2,2,"mat-option",27,e.x6l),e.ALo(75,"async"),e.qZA(),e.YNc(76,Ma,2,0,"mat-error"),e.qZA(),e.TgZ(77,"mat-form-field",22)(78,"mat-label"),e._uU(79,"Moneda"),e.qZA(),e.TgZ(80,"mat-select",28),e.SjG(81,Ea,2,2,"mat-option",27,e.x6l),e.ALo(83,"async"),e.qZA()(),e.TgZ(84,"mat-form-field",22)(85,"mat-label"),e._uU(86,"Tasa de Cambio"),e.qZA(),e.TgZ(87,"mat-select",29)(88,"mat-select-trigger"),e._uU(89),e.YNc(90,$a,2,2,"span",30),e.qZA(),e.SjG(91,La,6,6,"mat-option",27,e.x6l),e.ALo(93,"async"),e.qZA(),e.YNc(94,Qa,2,0,"mat-error"),e.qZA(),e.TgZ(95,"mat-form-field",22)(96,"mat-label"),e._uU(97,"Descuento"),e.qZA(),e._UZ(98,"input",31),e.qZA(),e.TgZ(99,"mat-form-field",22)(100,"mat-label"),e._uU(101,"Recargo"),e.qZA(),e._UZ(102,"input",31),e.qZA(),e.TgZ(103,"div",32)(104,"mat-form-field",22)(105,"mat-label"),e._uU(106,"Cuenta Bancaria"),e.qZA(),e.TgZ(107,"mat-select",26),e.SjG(108,za,2,3,"mat-option",27,e.x6l),e.qZA(),e.TgZ(110,"mat-hint"),e._uU(111,"Cuentas Bancarias registradas en el negocio"),e.qZA(),e.YNc(112,Oa,2,0,"mat-error"),e.qZA(),e.TgZ(113,"mat-form-field",22)(114,"mat-label"),e._uU(115,"Transportista"),e.qZA(),e.TgZ(116,"mat-select",33),e.SjG(117,Ga,2,2,"mat-option",27,e.x6l),e.ALo(119,"async"),e.qZA()()(),e.TgZ(120,"mat-form-field",34)(121,"mat-label"),e._uU(122,"Observaciones"),e.qZA(),e._UZ(123,"textarea",35),e.qZA()()(),e.TgZ(124,"div",36)(125,"div",37)(126,"mat-form-field",38),e._UZ(127,"mat-icon",18)(128,"input",39),e.TgZ(129,"mat-autocomplete",40,41),e.NdJ("closed",function(){return i.searchProductControl.reset()}),e.SjG(131,ja,10,9,"mat-option",78,e.x6l),e.ALo(133,"async"),e.qZA()(),e.TgZ(134,"div",42),e.YNc(135,an,21,0,"div",43)(136,nn,2,0),e.qZA()(),e.TgZ(137,"div",44),e.NdJ("click",function(){return i.createBill()}),e._uU(138),e.ALo(139,"number"),e.qZA()()()()),2&a){const n=e.MAs(37),s=e.MAs(49),c=e.MAs(130);e.Q6J("fuseScrollbarOptions",e.DdM(80,rn)),e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("ngModel",i.stayHere),e.xp6(2),e.Q6J("disabled",i.prebillingForm.invalid||0===i.prebillingForm.get("products").controls.length),e.xp6(4),e.Q6J("formGroup",i.prebillingForm),e.xp6(5),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchCustomerControl)("matAutocomplete",n)("placeholder","Buscar cliente")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(40,59,i.customersFiltered)),e.xp6(6),e.Q6J("matDatepicker",s)("formControlName","billDate")("max",i.maxDate)("required",!0),e.xp6(3),e.Q6J("for",s),e.xp6(3),e.um2(50,i.prebillingForm.get("billDate").hasError("required")?50:-1),e.xp6(4),e.Q6J("formControlName","multiplier")("required",!0),e.xp6(),e.um2(55,0===e.lcZ(56,61,i.multipliers$).length?55:-1),e.xp6(2),e.wJu(e.lcZ(59,63,i.multipliers$)),e.xp6(3),e.um2(60,i.prebillingForm.get("multiplier").hasError("required")?60:-1),e.xp6(4),e.Q6J("formControlName","paymentMethodId")("required",!0),e.xp6(),e.wJu(e.lcZ(67,65,i.paymentMethods$)),e.xp6(3),e.um2(68,i.prebillingForm.get("paymentMethodId").hasError("required")?68:-1),e.xp6(4),e.Q6J("formControlName","operationTypeId")("required",!0),e.xp6(),e.wJu(e.lcZ(75,67,i.operationTypes$)),e.xp6(3),e.um2(76,i.prebillingForm.get("operationTypeId").hasError("required")?76:-1),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0),e.xp6(),e.wJu(e.lcZ(83,69,i.currencies$)),e.xp6(6),e.Q6J("formControlName","rates")("required",!0),e.xp6(2),e.hij(" ",(null==i.prebillingForm.get("rates").value||null==i.prebillingForm.get("rates").value[0]?null:i.prebillingForm.get("rates").value[0].name)||""," "),e.xp6(),e.um2(90,((null==i.prebillingForm.get("rates").value?null:i.prebillingForm.get("rates").value.length)||0)>1?90:-1),e.xp6(),e.wJu(e.lcZ(93,71,i.ratesFiltered)),e.xp6(3),e.um2(94,i.prebillingForm.get("rates").hasError("required")?94:-1),e.xp6(4),e.Q6J("min",0)("max",i.total)("formControlName","discount"),e.xp6(4),e.Q6J("min",0)("max",99999)("formControlName","surcharge"),e.xp6(5),e.Q6J("formControlName","bankAccount")("required",!0),e.xp6(),e.wJu(i.bankAccounts),e.xp6(4),e.um2(112,i.prebillingForm.get("bankAccount").hasError("required")?112:-1),e.xp6(4),e.Q6J("formControlName","courierId"),e.xp6(),e.wJu(e.lcZ(119,73,i.employees$)),e.xp6(6),e.Q6J("formControlName","observation")("rows",4),e.xp6(3),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchProductControl)("matAutocomplete",c)("placeholder","Buscar existencia de productos en inventario"),e.xp6(),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(133,75,i.productsFiltered)),e.xp6(3),e.Q6J("fuseScrollbarOptions",e.DdM(81,sn)),e.xp6(),e.um2(135,i.prebillingForm.get("products").controls.length>0?135:136),e.xp6(2),e.Q6J("ngClass",e.VKq(82,ln,i.prebillingForm.valid&&i.prebillingForm.get("products").controls.length>0)),e.xp6(),e.AsE(" ",e.xi3(139,77,i.total-i.prebillingForm.get("discount").value+i.prebillingForm.get("surcharge").value,"1.2-2")," ",i.selectedCurrencyIso," ")}},dependencies:[v.Ov,v.H9,v.JJ,r.u5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.Q7,r.qQ,r.Fd,r.On,ye.H,te.Bb,te.XC,xe.ey,te.ZL,T.ot,T.lW,ne.p9,ne.oG,q.FA,q.Mq,q.hl,q.nW,g.lN,g.KE,g.hX,g.bx,g.TO,g.qo,g.R9,k.Ps,k.Hw,U.c,U.Nt,$.Tx,K.LD,K.gD,K.$L,re.AV,re.gM,v.mk,r.UX,r.oH,r.sg,r.u,J.rH],encapsulation:2,changeDetection:0})}return o})();var un=d(69862),ge=d(63459);const xt=o=>o.prebills,Pe=((0,C.P1)(xt,o=>o.prebill),(0,C.P1)(xt,o=>o.prebills));let yt=(()=>{class o{constructor(t,a,i){this.apolloProvider=t,this._snackBar=a,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}getBills(t=0,a=50,i="no",n="desc",s="",c=null,u=[],f=[],h=[],p=null,_=null,y=null){return this._apollo.query({query:Ca,errorPolicy:"all",variables:{page:t,size:a,sort:i,order:n,search:s,status:f,paymentStatus:h,customerId:c,currenciesId:u,billDate:p,startDate:_,endDate:y}}).pipe((0,B.b)(({data:b})=>{b&&(this.store.dispatch((0,ge.dV)({prebills:structuredClone(b).findAllPrebills.prebills.map(M=>{const ce=M.products.reduce((ie,ue)=>{const Je=ie.find(al=>al.productId===ue.productId);return Je?Je.quantity+=ue.quantity:ie.push({productId:ue.productId,price:ue.price,quantity:ue.quantity,product:ue.product}),ie},[]);return M.products=ce,M})})),this.store.dispatch((0,Ae.Jr)({pagination:b.findAllPrebills.pagination})))}))}getBillsByDate(t){return this._apollo.query({query:va,errorPolicy:"all",variables:{date:t}}).pipe((0,B.b)(({errors:a})=>{if(a){let i="";a.forEach(n=>i+=`\n ${n.message}.`),this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getBillById(t){return this._apollo.query({query:Aa,variables:{findBillByIdId:t},errorPolicy:"all"}).pipe((0,B.b)(({errors:a,data:i})=>{if(a){let n="";a.forEach(s=>n+=`\n ${s.message}.`),this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:n,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ge.AU)({prebill:i.dispatchPrebill.prebill}))}))}updateBill(t){return this.store.select(Pe).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:Ta,variables:{updateBillInput:t},errorPolicy:"all"}).pipe((0,B.b)(({errors:i,data:n})=>{if(i){let u="";i.forEach(f=>u+=`\n ${f.message}.`),this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:u,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=structuredClone(a);s[a.findIndex(u=>u.id===t.id)]=n.updatedBill,this.store.dispatch((0,ge.dV)({prebills:s}))}))))}updateBillStatus(t,a,i){return this.store.select(Pe).pipe((0,O.q)(1),(0,P.w)(n=>this._apollo.mutate({mutation:Ia,variables:{updatePrebillStatusInput:{id:t,status:a,paymentStatus:i}},errorPolicy:"all"}).pipe((0,B.b)(({data:s})=>{const c=structuredClone(n);c[n.findIndex(f=>f.id===t)]=s.updatePrebillStatus.prebill,this.store.dispatch((0,ge.dV)({prebills:c}))}))))}removeBill(t){return this.store.select(Pe).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:Sa,variables:{removePrebillId:t},errorPolicy:"all"}).pipe((0,B.b)(({errors:i})=>{if(i){let c="";i.forEach(u=>c+=`\n ${u.message}.`),this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:c,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=structuredClone(a),s=a.findIndex(c=>c.id===t);n.splice(s,1),this.store.dispatch((0,ge.dV)({prebills:n}))}))))}dispatchPrebill(t){return this._apollo.mutate({mutation:Fa,variables:{billId:t},errorPolicy:"all"}).pipe((0,B.b)(({data:a})=>{a&&this.store.dispatch((0,ge.AG)({prebill:a.dispatchPrebill.prebill}))}))}generateBillFromPrebill(t){return this._apollo.mutate({mutation:qa,variables:{billId:t},errorPolicy:"all"}).pipe((0,B.b)(({data:a})=>{a&&this.store.dispatch((0,ge.AG)({prebill:a.generateBillFromPrebill.prebill}))}))}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(Z._M),e.LFG(N.ux),e.LFG(C.yh))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const dn=["billDateFilter"],mn=["customerFilter"],pn=["currencyFilter"],gn=["statusFilter"],hn=["paymentStatusFilter"];function fn(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-icon",28),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.range.reset())}),e.qZA()}}function _n(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Fecha de inicio no v\xe1lida "),e.qZA())}function bn(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Fecha de final no v\xe1lida "),e.qZA())}function xn(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"button",50),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.clearTableFilters())}),e.TgZ(1,"span",51),e._uU(2," filter_list_off "),e.qZA()()}}function yn(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(),e.hij(" ",t.no," ")}}function Cn(o,l){1&o&&e._UZ(0,"mat-icon",61),2&o&&e.Q6J("svgIcon","mat_solid:done")}function vn(o,l){1&o&&e._UZ(0,"mat-icon",61),2&o&&e.Q6J("svgIcon","mat_solid:done")}function An(o,l){1&o&&e._UZ(0,"mat-icon",61),2&o&&e.Q6J("svgIcon","mat_solid:done")}function Zn(o,l){1&o&&e._UZ(0,"mat-icon",61),2&o&&e.Q6J("svgIcon","mat_solid:done")}const Tn=(o,l,t,a)=>({"bg-amber-50 text-amber-700":o,"text-green-700 bg-green-50":l,"text-red-700 bg-red-50":t,"text-blue-700 bg-blue-50":a}),In=(o,l)=>({"text-blue-700 bg-blue-50":o,"text-green-700 bg-green-50":l});function Sn(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",52)(1,"div",53),e._uU(2),e.qZA(),e.TgZ(3,"div",53),e.YNc(4,yn,2,1,"span"),e.qZA(),e.TgZ(5,"div",54),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"div",32),e._uU(9),e.qZA(),e.TgZ(10,"div",55),e._uU(11),e.qZA(),e.TgZ(12,"div",56),e._uU(13),e.ALo(14,"number"),e.qZA(),e.TgZ(15,"div",57)(16,"span",58),e._uU(17),e.ALo(18,"uppercase"),e.qZA()(),e.TgZ(19,"div",57)(20,"span",58),e._uU(21),e.ALo(22,"uppercase"),e.qZA()(),e.TgZ(23,"div",59)(24,"button",60),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.generatePrebillDocument(n))}),e._UZ(25,"mat-icon",61),e.qZA(),e.TgZ(26,"button",62),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.dispatchPrebill(n.id))}),e._UZ(27,"mat-icon",61),e.qZA(),e.TgZ(28,"button",63),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.generateBillFromPrebill(n.id))}),e._UZ(29,"mat-icon",61),e.qZA(),e.TgZ(30,"div")(31,"button",64),e._UZ(32,"mat-icon",61),e.qZA(),e.TgZ(33,"mat-menu",null,65)(35,"div",66),e._uU(36," Actualizar Estado "),e.qZA(),e.TgZ(37,"button",67),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.updateStatus(n.id,"entregada"))}),e.TgZ(38,"div",68),e.YNc(39,Cn,1,1,"mat-icon",69),e.qZA(),e.TgZ(40,"span",70),e._uU(41,"Entregada"),e.qZA()(),e.TgZ(42,"button",67),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.updateStatus(n.id,null,"pagada"))}),e.TgZ(43,"div",68),e.YNc(44,vn,1,1,"mat-icon",69),e.qZA(),e.TgZ(45,"span",70),e._uU(46,"Cobrada"),e.qZA()(),e.TgZ(47,"button",67),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.updateStatus(n.id,"cancelada"))}),e.TgZ(48,"div",68),e.YNc(49,An,1,1,"mat-icon",69),e.qZA(),e.TgZ(50,"span",70),e._uU(51,"Cancelada"),e.qZA()(),e.TgZ(52,"button",67),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.updateStatus(n.id,"rechazada"))}),e.TgZ(53,"div",68),e.YNc(54,Zn,1,1,"mat-icon",69),e.qZA(),e.TgZ(55,"span",70),e._uU(56,"Rechazada"),e.qZA()()()()()()}if(2&o){const t=l.$implicit,a=e.MAs(34);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.um2(4,t.bill?4:-1),e.xp6(2),e.hij(" ",e.xi3(7,26,t.billDate,"dd/MM/yyyy")," "),e.xp6(3),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(14,29,t.total,"1.2-2")," "),e.xp6(2),e.Q6J("ngClass",e.l5B(36,Tn,"nueva"===t.status,"facturada"===t.status,"cancelada"===t.status,"entregada"===t.status)),e.xp6(2),e.hij(" ",e.lcZ(18,32,t.status)," "),e.xp6(2),e.Q6J("ngClass",e.WLB(41,In,"pendiente"===t.paymentStatus,"cobrada"===t.paymentStatus)),e.xp6(2),e.hij(" ",e.lcZ(22,34,t.paymentStatus)," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:print"),e.xp6(),e.Q6J("disabled",t.isDispatched||"facturada"===t.status||"cancelada"===t.status),e.xp6(),e.Q6J("svgIcon","mat_solid:logout"),e.xp6(),e.Q6J("disabled","facturada"===t.status||"cancelada"===t.status),e.xp6(),e.Q6J("svgIcon","mat_solid:request_page"),e.xp6(2),e.Q6J("matMenuTriggerFor",a)("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(),e.Q6J("svgIcon","mat_solid:update"),e.xp6(5),e.Q6J("disabled",t.status.includes("entregada")||t.status.includes("cancelada")||t.status.includes("rechazada")||t.paymentStatus.includes("cobrada")||t.status.includes("facturada")),e.xp6(2),e.um2(39,t.status.includes("entregada")?39:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")),e.xp6(2),e.um2(44,t.paymentStatus.includes("cobrada")?44:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("rechazada")||t.status.includes("cancelada")||t.status.includes("facturada")),e.xp6(2),e.um2(49,t.status.includes("cancelada")?49:-1),e.xp6(3),e.Q6J("disabled",t.paymentStatus.includes("cobrada")||t.status.includes("cancelada")||t.status.includes("rechazada")||t.status.includes("facturada")),e.xp6(2),e.um2(54,t.status.includes("rechazada")?54:-1)}}function Fn(o,l){if(1&o&&e.SjG(0,Sn,57,44,"div",71,e.QCX().trackByFn),2&o){const t=e.oxw();e.wJu(t)}}function qn(o,l){1&o&&(e.TgZ(0,"div",72),e._uU(1," \xa1No se ha registrado ninguna prefactura! "),e.qZA())}const kn=()=>["nueva","entregada","cancelada","rechazada"],wn=()=>["pendiente","cobrada"],Dn=o=>({"mr-4":o}),Un=(o,l)=>({"pointer-events-none":o,hidden:l}),Pn=()=>[10,25,100];function Bn(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",29)(1,"div",30)(2,"div",31),e._uU(3," N\xfamero "),e.qZA(),e.TgZ(4,"div",32),e._uU(5," N.Factura "),e.qZA(),e.TgZ(6,"div",33)(7,"span",34),e._uU(8,"Fecha"),e.qZA(),e.TgZ(9,"table-filter",35,36),e.NdJ("dataChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addDate(i))}),e.qZA()(),e.TgZ(11,"div",37)(12,"span"),e._uU(13,"Cliente"),e.qZA(),e.TgZ(14,"table-filter",38,39),e.NdJ("dataChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addCustomer(i))}),e.qZA()(),e.TgZ(16,"div",33)(17,"span"),e._uU(18,"Moneda"),e.qZA(),e.TgZ(19,"table-filter",40,41),e.NdJ("dataChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addCurrencies(i))}),e.ALo(21,"async"),e.qZA()(),e.TgZ(22,"div",42),e._uU(23," Importe "),e.qZA(),e.TgZ(24,"div",33)(25,"span",34),e._uU(26,"Estado"),e.qZA(),e.TgZ(27,"table-filter",43,44),e.NdJ("dataChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addStatus(i))}),e.qZA()(),e.TgZ(29,"div",33)(30,"span",45),e._uU(31,"E.Pago"),e.qZA(),e.TgZ(32,"table-filter",43,46),e.NdJ("dataChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addPaymentStatus(i))}),e.qZA()(),e.TgZ(34,"div",47)(35,"span"),e._uU(36,"Acciones"),e.qZA(),e.YNc(37,xn,3,0,"button",48),e.qZA()(),e.YNc(38,Fn,2,0)(39,qn,2,0),e._UZ(40,"mat-paginator",49),e.qZA()}if(2&o){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(5),e.Q6J("mat-sort-header","billDate"),e.xp6(2),e.Q6J("filterType","date"),e.xp6(5),e.Q6J("filterType","filterEntity")("searchEntityControl",t.searchCustomersControl)("entitiesFiltered",t.customersFiltered),e.xp6(5),e.Q6J("filterType","multiSelectEntity")("entityPropertyName","iso")("useUpperCase",!0)("data",e.lcZ(21,26,t.currencies$)),e.xp6(3),e.Q6J("mat-sort-header","total"),e.xp6(3),e.Q6J("mat-sort-header","status"),e.xp6(2),e.Q6J("filterType","multiSelect")("data",e.DdM(28,kn)),e.xp6(3),e.Q6J("mat-sort-header","paymentStatus"),e.xp6(2),e.Q6J("filterType","multiSelect")("data",e.DdM(29,wn)),e.xp6(2),e.Q6J("ngClass",e.VKq(30,Dn,t.existTableFilter())),e.xp6(3),e.um2(37,t.existTableFilter()?37:-1),e.xp6(),e.um2(38,l.length>0?38:39),e.xp6(2),e.Q6J("ngClass",e.WLB(32,Un,t.isLoading,t.pagination.length<10&&t.pagination.page<1))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(35,Pn))("showFirstLastButtons",!0)}}const Nn=()=>["/modules/sales/prebilling"];let Rn=(()=>{class o{constructor(){this.currencies$=(0,R.of)([]),this.filterInputControl=new r.NI,this.filterStatusInputControl=new r.NI(null),this.isLoading=!1,this.isSlideLoading=!1,this.maxDate=new Date,this.merchant=null,this.merchantLogo=null,this.prebills$=(0,R.of)([]),this.range=new r.cw({start:new r.NI({disabled:!1,value:null},[X.L.futureDateValidator()]),end:new r.NI({disabled:!1,value:null},[X.L.futureDateValidator()])}),this.searchCustomersControl=new r.NI(null),this.searchInputControl=new r.NI,this.selectedCurrenciesId=[],this.selectedCustomer=null,this.selectedDate=null,this.selectedPaymentStatus=[],this.selectedSlide=null,this.selectedStatus=[],this.user=null,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._documentsService=(0,e.f3M)(De.S),this._fuseConfirmationService=(0,e.f3M)(ae.R),this._httpClient=(0,e.f3M)(un.eN),this._prebillsService=(0,e.f3M)(yt),this._snackBar=(0,e.f3M)(N.ux),this._unsubscribeAll=new V.x,this._customersService=(0,e.f3M)(Ze.v),this.store=(0,e.f3M)(C.yh)}ngOnInit(){this.store.select(G.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.currencies$=this.store.select(pe.zd),this.store.select(z.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.prebills$=this.store.select(Pe),this.store.select(H.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(300),(0,P.w)(t=>(this.isLoading=!0,this._prebillsService.getBills(0,25,"no","desc",t,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,L.U)(()=>{this.isLoading=!1})).subscribe(),this.filterInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(300),(0,P.w)(t=>(this.isLoading=!0,this._prebillsService.getBills(0,25,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,L.U)(()=>{this.isLoading=!1})).subscribe(),this.customersFiltered=this.searchCustomersControl.valueChanges.pipe((0,E.b)(200),(0,W.O)(null),(0,se.x)(()=>{this.isLoading=!1}),(0,ee.z)(t=>null!==t&&"string"==typeof t&&(this.selectedCustomer&&t!==this.selectedCustomer.name||!this.selectedCustomer)?(this.isLoading=!0,this._customersService.findActiveCustomers(t.trim())):(0,R.of)())),this.range.valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.billDateFilter.clearFilter(),this._prebillsService.getBills(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,null,t.start,t.end).pipe((0,m.R)(this._unsubscribeAll)).subscribe()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,le.T)(this._sort.sortChange,this._paginator.page).pipe((0,P.w)(()=>(this.isLoading=!0,this._prebillsService.getBills(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value,this.selectedCustomer?this.selectedCustomer.id:null,this.selectedCurrenciesId,this.selectedStatus,this.selectedPaymentStatus,this.selectedDate,this.range.get("start").value,this.range.get("end").value))),(0,L.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,ge.lw)())}resetCustomer(){this.selectedCustomer=null,this.searchInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCustomer(t){this.selectedCustomer=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addDate(t){this.selectedDate=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCurrencies(t){this.selectedCurrenciesId=t.map(a=>a.id),this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addStatus(t){this.selectedStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addPaymentStatus(t){this.selectedPaymentStatus=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}dispatchPrebill(t){this._fuseConfirmationService.open({title:"Despachar factura",message:"\xbfEsta seguro que desea despachar esta prefactura?.",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._prebillsService.dispatchPrebill(t).pipe((0,m.R)(this._unsubscribeAll),(0,se.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:n})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.dispatchPrebill.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill"}})})})}generateBillFromPrebill(t){this._fuseConfirmationService.open({title:"Generar factura",message:"\xbfEsta seguro que desea generar esta factura?.",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._prebillsService.generateBillFromPrebill(t).pipe((0,m.R)(this._unsubscribeAll),(0,se.x)(()=>{this._changeDetectorRef.markForCheck()})).subscribe(({data:n})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.generateBillFromPrebill.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill"}})})})}updateStatus(t,a=null,i=null){this._fuseConfirmationService.open({title:"Cancelar PreFactura",message:"\xbfEsta seguro que desea cancelar esta prefactura?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._prebillsService.updateBillStatus(t,a,i).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:c})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:c.updateBillStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}generatePrebillDocument(t){this._documentsService.generateBillDocument(t,Ve.prefactura,this.merchant,this.user)}trackByFn(t,a){return t||a.id}existTableFilter(){return this.statusFilter?.hasFilter||this.billDateFilter?.hasFilter||this.currencyFilter?.hasFilter||this.customerFilter?.hasFilter||this.paymentStatusFilter?.hasFilter}clearTableFilters(){this.statusFilter?.hasFilter&&this.statusFilter.clearFilter(),this.billDateFilter?.hasFilter&&this.billDateFilter.clearFilter(),this.currencyFilter?.hasFilter&&this.currencyFilter.clearFilter(),this.customerFilter?.hasFilter&&this.customerFilter.clearFilter(),this.paymentStatusFilter?.hasFilter&&this.paymentStatusFilter.clearFilter()}_getBankAccountMC(t){return t.bankAccounts.find(i=>"CUP"===i.currency).no}_getBankAccountOM(t,a){return t.bankAccounts.find(i=>i.currency===a.currency.iso).no}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-prebills"]],viewQuery:function(a,i){if(1&a&&(e.Gf(w.NW,5),e.Gf(S.YE,5),e.Gf(dn,5),e.Gf(mn,5),e.Gf(pn,5),e.Gf(gn,5),e.Gf(hn,5)),2&a){let n;e.iGM(n=e.CRH())&&(i._paginator=n.first),e.iGM(n=e.CRH())&&(i._sort=n.first),e.iGM(n=e.CRH())&&(i.billDateFilter=n.first),e.iGM(n=e.CRH())&&(i.customerFilter=n.first),e.iGM(n=e.CRH())&&(i.currencyFilter=n.first),e.iGM(n=e.CRH())&&(i.statusFilter=n.first),e.iGM(n=e.CRH())&&(i.paymentStatusFilter=n.first)}},standalone:!0,features:[e.jDz],decls:44,vars:22,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","flex-wrap","items-center","w-full","gap-2","mt-6","lg:fixed","right-8","shrink-0","lg:mt-0","lg:ml-4","lg:w-auto","sm:w-1/2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"sm:mx-4","min-w-64","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matPrefix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto"],[1,"z-10","flex","flex-col","flex-auto","bg-white","dark:bg-default"],["class","relative grid"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[1,"relative","grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","pre-bills-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"",3,"mat-sort-header"],[1,""],[1,"flex","items-center","justify-center"],[3,"mat-sort-header"],[3,"filterType","dataChange"],["billDateFilter",""],[1,"flex","items-center","justify-start"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange"],["customerFilter",""],[3,"filterType","entityPropertyName","useUpperCase","data","dataChange"],["currencyFilter",""],[1,"flex","justify-end",3,"mat-sort-header"],[3,"filterType","data","dataChange"],["statusFilter",""],["matTooltip","Estado del pago",3,"mat-sort-header"],["paymentStatusFilter",""],[1,"flex","items-center","justify-end","mr-10",3,"ngClass"],["color","warn","class","w-6 h-6 min-h-6 min-w-6","mat-icon-button","","matTooltip","Limpiar filtros"],[1,"border-b","first-letter:z-10","sm:inset-x-0","sm:sticky","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["color","warn","mat-icon-button","","matTooltip","Limpiar filtros",1,"w-6","h-6","min-h-6","min-w-6",3,"click"],[1,"material-icons","icon-size-4"],[1,"z-0","grid","items-center","gap-4","px-6","py-3","border-b","pre-bills-grid","md:px-8"],[1,"font-mono"],[1,"font-mono","text-center"],[1,"text-center"],[1,"font-mono","text-right"],[1,"flex","items-center","justify-center","mr-4","text-center","truncate","delay-100","rounded-full","h-7","lock","dark:bg-white","dark:bg-opacity-5",3,"ngClass"],[1,"w-full","px-2","text-sm","font-medium","text-center"],[1,"flex","flex-row","justify-end","gap-2"],["mat-stroked-button","","matTooltip","Imprimir Prefactura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Despachar Prefactura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["mat-stroked-button","","matTooltip","Generar factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["mat-stroked-button","","matTooltip","Actualizar estados",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"matMenuTriggerFor","disabled"],["listStatusMenu","matMenu"],[1,"w-full","p-2","text-lg","font-semibold","text-center","text-secondary"],["mat-menu-item","",1,"grid","w-full","grid-cols-4",3,"disabled","click"],[1,"col-span-1"],["class","icon-size-5",3,"svgIcon"],[1,"col-span-3","text-center"],["class","z-0 grid items-center gap-4 px-6 py-3 border-b pre-bills-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Facturaci\xf3n"),e.qZA()(),e.TgZ(15,"div",5),e._UZ(16,"mat-icon",6),e.TgZ(17,"a",7),e._uU(18,"Prefacturas"),e.qZA()()(),e.TgZ(19,"div",8)(20,"h2",9),e._uU(21," Registro de Prefacturas "),e.qZA()()(),e.TgZ(22,"div",10)(23,"mat-form-field",11),e._UZ(24,"mat-icon",12)(25,"input",13),e.qZA(),e.TgZ(26,"mat-form-field",14)(27,"mat-date-range-input",15),e._UZ(28,"input",16)(29,"input",17),e.qZA(),e._UZ(30,"mat-datepicker-toggle",18)(31,"mat-date-range-picker",19,20),e.YNc(33,fn,1,0,"mat-icon",21)(34,_n,2,0,"mat-error")(35,bn,2,0,"mat-error"),e.qZA(),e.TgZ(36,"button",22),e._UZ(37,"mat-icon",23),e.TgZ(38,"span",24),e._uU(39,"Registrar"),e.qZA()()()(),e.TgZ(40,"div",25)(41,"div",26),e.YNc(42,Bn,41,36,"div",27),e.ALo(43,"async"),e.qZA()()()),2&a){const n=e.MAs(32);let s;e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("formGroup",i.range)("rangePicker",n)("max",i.maxDate),e.xp6(3),e.Q6J("for",n),e.xp6(3),e.um2(33,i.range.get("start").value||i.range.get("end").value?33:-1),e.xp6(),e.um2(34,i.range.controls.start.hasError("matStartDateInvalid")?34:-1),e.xp6(),e.um2(35,i.range.controls.end.hasError("matEndDateInvalid")?35:-1),e.xp6(),e.Q6J("routerLink",e.DdM(21,Nn)),e.xp6(),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(5),e.um2(42,(s=e.lcZ(43,19,i.prebills$))?42:-1,s)}},dependencies:[v.Ov,v.uU,v.JJ,T.ot,T.lW,T.RK,q.FA,q.nW,q.wx,q.zY,q.By,q._g,g.lN,g.KE,g.TO,g.qo,g.R9,k.Ps,k.Hw,U.c,U.Nt,$.Tx,$.VK,$.OP,$.p6,w.TU,w.NW,S.JX,S.YE,S.nU,v.mk,r.UX,r.Fj,r.JJ,r.JL,r.oH,r.sg,r.u,J.rH,Ge.q,v.gd,ye.H],encapsulation:2,changeDetection:0})}return o})();var Jn=d(62349),Ct=d(36028),Te=d(22557),Mn=d(83829),En=d(84384),$n=d(58695),Ln=d(9573),vt=d(43810),Qn=d(82824),zn=d(62637);function On(o,l){1&o&&(e.TgZ(0,"h2",6),e._uU(1,"Agregar Terminal"),e.qZA())}function Gn(o,l){1&o&&(e.TgZ(0,"h2",6),e._uU(1,"Editar terminal "),e.qZA())}function jn(o,l){1&o&&(e.TgZ(0,"h2",6),e._uU(1,"Detalles de la terminal "),e.qZA())}function Vn(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El nombre es requerido "),e.qZA())}function Yn(o,l){if(1&o&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function Hn(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La marca es requerida "),e.qZA())}function Kn(o,l){if(1&o&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function Wn(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El almac\xe9n de venta es obligatorio "),e.qZA())}function Xn(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El modelo es requerido "),e.qZA())}function er(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero de serie es requerido "),e.qZA())}function tr(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El PIN debe tener 4 d\xedgitos "),e.qZA())}function ir(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El PIN debe tener 4 d\xedgitos "),e.qZA())}function or(o,l){if(1&o&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function ar(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-chip",24),e.NdJ("removed",function(){const n=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.removeEmployee(n))}),e._uU(1),e._UZ(2,"mat-icon",25),e.qZA()}if(2&o){const t=l.$implicit;e.Q6J("removable",!0),e.xp6(),e.hij(" ",t.fullname," "),e.xp6(),e.Q6J("svgIcon","mat_solid:cancel")}}function nr(o,l){if(1&o&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.fullname," ")}}function rr(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El empleado es requerido "),e.qZA())}function sr(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"form",9)(3,"mat-form-field",10)(4,"mat-label"),e._uU(5,"Nombre del terminal"),e.qZA(),e._UZ(6,"input",11),e.YNc(7,Vn,2,0,"mat-error"),e.qZA(),e.TgZ(8,"mat-form-field",10)(9,"mat-label"),e._uU(10,"Marca"),e.qZA(),e.TgZ(11,"mat-select",12),e.SjG(12,Yn,2,2,"mat-option",23,e.x6l),e.TgZ(14,"mat-option",13),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createBrand())}),e._uU(15," Agregar marca "),e.qZA()(),e.YNc(16,Hn,2,0,"mat-error"),e.qZA(),e.TgZ(17,"mat-form-field",10)(18,"mat-label"),e._uU(19,"Almac\xe9n de venta"),e.qZA(),e.TgZ(20,"mat-select",12),e.SjG(21,Kn,2,2,"mat-option",23,e.x6l),e.qZA(),e.YNc(23,Wn,2,0,"mat-error"),e.qZA(),e.TgZ(24,"mat-form-field",10)(25,"mat-label"),e._uU(26,"Modelo"),e.qZA(),e._UZ(27,"input",14),e.YNc(28,Xn,2,0,"mat-error"),e.qZA(),e.TgZ(29,"mat-form-field",10)(30,"mat-label"),e._uU(31,"N\xfamero de serie"),e.qZA(),e._UZ(32,"input",14),e.YNc(33,er,2,0,"mat-error"),e.qZA(),e.TgZ(34,"mat-form-field",10)(35,"mat-label"),e._uU(36,"PIN"),e.qZA(),e._UZ(37,"input",15),e.YNc(38,tr,2,0,"mat-error")(39,ir,2,0,"mat-error"),e.TgZ(40,"mat-hint"),e._uU(41,"Solo 4 d\xedgitos"),e.qZA()(),e.TgZ(42,"div")(43,"mat-form-field",10)(44,"mat-label"),e._uU(45,"Ubicaci\xf3n"),e.qZA(),e.TgZ(46,"mat-select",12),e.SjG(47,or,2,2,"mat-option",23,e.x6l),e.ALo(49,"async"),e.qZA()()(),e.TgZ(50,"mat-form-field",16)(51,"mat-label"),e._uU(52,"Asignar a:"),e.qZA(),e.TgZ(53,"mat-chip-grid",17,18),e.SjG(55,ar,3,3,"mat-chip",26,e.x6l),e._UZ(57,"input",19,20),e.qZA(),e.TgZ(59,"mat-autocomplete",21,22),e.NdJ("optionSelected",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addEmployee(i.option.value))}),e.SjG(61,nr,2,2,"mat-option",23,e.x6l),e.ALo(63,"async"),e.qZA(),e.YNc(64,rr,2,0,"mat-error"),e.qZA()()()()}if(2&o){const t=e.MAs(54),a=e.MAs(60),i=e.oxw();e.xp6(2),e.Q6J("formGroup",i.terminalForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","name")("placeholder","Ejemplo: Caja 1"),e.xp6(),e.um2(7,i.terminalForm.controls.name.hasError("required")?7:-1),e.xp6(4),e.Q6J("formControlName","brandId")("required",!0),e.xp6(),e.wJu(i.brands),e.xp6(4),e.um2(16,i.terminalForm.controls.brandId.hasError("required")?16:-1),e.xp6(4),e.Q6J("formControlName","depotId")("required",!0),e.xp6(),e.wJu(i.depots),e.xp6(2),e.um2(23,i.terminalForm.controls.depotId.hasError("required")?23:-1),e.xp6(4),e.Q6J("formControlName","model")("placeholder","Modelo del terminal"),e.xp6(),e.um2(28,i.terminalForm.controls.model.hasError("required")?28:-1),e.xp6(4),e.Q6J("formControlName","sn")("placeholder","Serie del terminal"),e.xp6(),e.um2(33,i.terminalForm.controls.sn.hasError("required")?33:-1),e.xp6(4),e.Q6J("formControlName","pin")("placeholder","0000"),e.xp6(),e.um2(38,i.terminalForm.controls.pin.hasError("minlength")?38:-1),e.xp6(),e.um2(39,i.terminalForm.controls.pin.hasError("max")?39:-1),e.xp6(7),e.Q6J("formControlName","locationId")("required",!0),e.xp6(),e.wJu(e.lcZ(49,32,i.locations$)),e.xp6(6),e.Q6J("required",!0),e.xp6(2),e.wJu(i.terminalForm.get("employeesId").value),e.xp6(2),e.Q6J("formControl",i.employeeCtrl)("matAutocomplete",a)("placeholder","Buscar empleado")("matChipInputFor",t)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes)("matChipInputAddOnBlur",!0),e.xp6(2),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(63,34,i.filteredEmployees$)),e.xp6(3),e.um2(64,i.terminalForm.controls.employeesId.hasError("required")?64:-1)}}const At=o=>({"cursor-not-allowed":o});function lr(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.updateTerminal())}),e._uU(1," Actualizar "),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.terminalForm.invalid)("ngClass",e.VKq(3,At,t.terminalForm.invalid))}}function cr(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createTerminal())}),e._uU(1," Agregar "),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.terminalForm.invalid)("ngClass",e.VKq(3,At,t.terminalForm.invalid))}}function ur(o,l){if(1&o&&(e.TgZ(0,"div",27)(1,"button",28),e._uU(2," Cancelar "),e.qZA(),e.YNc(3,lr,2,5,"button",29)(4,cr,2,5,"button",29),e.qZA()),2&o){const t=e.oxw();e.xp6(),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.um2(3,"edit"===t.data.dialogMode?3:-1),e.xp6(),e.um2(4,"add"===t.data.dialogMode?4:-1)}}let dr=(()=>{class o{constructor(t){this.data=t,this.depots=[],this.dialogMode="view",this.employeeCtrl=new r.NI,this.employees$=(0,R.of)([]),this.filteredEmployees$=(0,R.of)([]),this.locations$=(0,R.of)([]),this.separatorKeysCodes=[Ct.K5,Ct.OC],this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialog=(0,e.f3M)(A.uw),this._dialogRef=(0,e.f3M)(A.so),this._employeesService=(0,e.f3M)(zn.M),this._formBuilder=(0,e.f3M)(r.qu),this._fuseConfirmationService=(0,e.f3M)(ae.R),this._snackBar=(0,e.f3M)(N.ux),this._terminalsService=(0,e.f3M)(vt.B),this._unsubscribeAll=new V.x,this.store=(0,e.f3M)(C.yh),this.dialogMode=t.dialogMode,this.terminal=t.terminal}ngOnInit(){this.terminalForm=this._formBuilder.group({id:new r.NI(null),brandId:new r.NI(null,[r.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),depotId:new r.NI(null,[r.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),model:new r.NI(null,[r.kI.minLength(1),r.kI.maxLength(255)]),sn:new r.NI(null,[r.kI.minLength(1),r.kI.maxLength(255)]),pin:new r.NI(null,[r.kI.minLength(4),r.kI.maxLength(4)]),locationId:new r.NI(null,[r.kI.maxLength(255)]),name:new r.NI(null,[r.kI.required,r.kI.maxLength(100)]),employeesId:new r.NI([])}),"edit"===this.dialogMode&&(this.terminalForm.patchValue(this.terminal),this.terminalForm.get("employeesId").setValue(structuredClone(this.terminal.employees))),this.store.select(Mn.gg).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.brands=t,this._changeDetectorRef.markForCheck()}),this.store.select($n.$I).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.depots=t,this._changeDetectorRef.markForCheck()}),this.locations$=this.store.select(En.Yu),this.employees$=this.store.select(Oe.ri),this.filteredEmployees$=this.employeeCtrl.valueChanges.pipe((0,E.b)(200),(0,W.O)(null),(0,ee.z)(t=>{const a=this.terminalForm.get("employeesId").value;return a?null!==t&&"string"==typeof t?this._employeesService.findActiveEmployees(t.trim()).pipe((0,L.U)(n=>n.filter(s=>!a.some(c=>c.id===s.id)))):this.employees$.pipe((0,L.U)(i=>i.filter(n=>!a.some(s=>s.id===n.id)))):this.employees$}))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addEmployee(t){const a=this.terminalForm.get("employeesId").value;a.push({id:t.id,fullname:t.fullname}),this.terminalForm.get("employeesId").setValue(a),this.employeeCtrl.setValue(null)}removeEmployee(t){const a=this.terminalForm.get("employeesId").value,i=a.indexOf(t);i>=0&&a.splice(i,1)}closeDialog(){this._dialogRef.close()}createTerminal(){const t=this.terminalForm.getRawValue();delete t.id,t.employeesId=t.employeesId.map(i=>i.id),this._fuseConfirmationService.open({title:"Crear Terminal",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._terminalsService.createTerminal(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:n})=>{n&&(this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e3,data:{message:n.createTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._dialogRef.close())})})}updateTerminal(){const t=this.terminalForm.getRawValue();t.employeesId=t.employeesId.map(i=>i.id),this._fuseConfirmationService.open({title:"Actualizar Terminal",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._terminalsService.updateTerminal(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:n})=>{n&&(this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e3,data:{message:n.updateTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._dialogRef.close())})})}createBrand(){this._dialog.open(Ln.C,{data:{brand:new Qn.H,dialogMode:"add"},panelClass:"ath-dialog-panel",disableClose:!0})}displayFn(t){return t&&t.fullname?t.fullname:""}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(A.WI))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-terminal-dialog"]],standalone:!0,features:[e.jDz],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","h-full","max-h-screen"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"w-full","overflow-hidden"],[1,"flex"],[1,"grid","w-full","gap-4","pt-4","mt-4","border-t","sm:grid-cols-2",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-dense"],["matInput","","type","text","maxlength","100",3,"formControlName","placeholder"],[3,"formControlName","required"],[3,"click"],["matInput","","type","text","maxlength","250",3,"formControlName","placeholder"],["matInput","","type","number","minlength","4","max","9999",3,"formControlName","placeholder"],[1,"w-full","fuse-mat-dense","sm:col-span-2"],[3,"required"],["chipGrid",""],["matInput","",3,"formControl","matAutocomplete","placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["employeeInput",""],[3,"displayWith","optionSelected"],["auto","matAutocomplete"],[3,"value"],[3,"removable","removed"],["matChipRemove","",3,"svgIcon"],[3,"removable"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","ngClass"],["mat-flat-button","",3,"color","disabled","ngClass","click"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,On,2,0,"h2",2)(3,Gn,2,0,"h2",2)(4,jn,2,0,"h2",2),e.qZA(),e.TgZ(5,"div",3),e.YNc(6,sr,65,36,"div",4),e.qZA(),e.YNc(7,ur,5,3,"div",5),e.qZA()),2&a&&(e.xp6(2),e.um2(2,"add"===i.data.dialogMode?2:-1),e.xp6(),e.um2(3,i.data.terminal.id&&"edit"===i.data.dialogMode?3:-1),e.xp6(),e.um2(4,i.data.terminal.id&&"view"===i.data.dialogMode?4:-1),e.xp6(2),e.um2(6,6),e.xp6(),e.um2(7,"view"!==i.data.dialogMode?7:-1))},dependencies:[v.Ov,te.Bb,te.XC,xe.ey,te.ZL,T.ot,T.lW,Te.Hi,Te.HS,Te.RA,Te.oH,Te.qH,A.Is,A.ZT,g.lN,g.KE,g.hX,g.bx,g.TO,k.Ps,k.Hw,U.c,U.Nt,K.LD,K.gD,v.mk,r.UX,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.Q7,r.wO,r.nD,r.Fd,r.oH,r.sg,r.u],encapsulation:2,changeDetection:0})}return o})();class mr{}function pr(o,l){if(1&o&&(e.TgZ(0,"span",33),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.xp6(),e.hij(" ",t.fullname," ")}}function gr(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-slide-toggle",34),e.NdJ("change",function(i){e.CHM(t);const n=e.oxw(),s=n.$implicit,c=n.$index,u=e.oxw(4);return e.KtG(u.updateTerminalStatus(i,s,c))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("checked",t.active)("color","primary")}}function hr(o,l){1&o&&e._UZ(0,"mat-spinner",29),2&o&&e.Q6J("diameter",20)("color","primary")}function fr(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",24)(1,"div",25),e._uU(2),e.qZA(),e.TgZ(3,"div",25),e._uU(4),e.qZA(),e.TgZ(5,"div",26),e.SjG(6,pr,2,1,"span",35,e.x6l),e.qZA(),e.TgZ(8,"div",25),e._uU(9),e.qZA(),e.TgZ(10,"div",27),e.YNc(11,gr,1,2,"mat-slide-toggle",28)(12,hr,1,2,"mat-spinner",29),e.qZA(),e.TgZ(13,"div",30)(14,"button",31),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(4);return e.KtG(s.updateTerminal(n))}),e._UZ(15,"mat-icon",32),e.qZA(),e.TgZ(16,"button",31),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(4);return e.KtG(s.deleteTerminal(n))}),e._UZ(17,"mat-icon",32),e.qZA()()()}if(2&o){const t=l.$implicit,a=l.$index,i=e.oxw(4);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.wJu(t.employees),e.xp6(3),e.hij(" ",t.brand.name," "),e.xp6(2),e.um2(11,i.isSlideLoading&&i.selectedSlide===a?-1:11),e.xp6(),e.um2(12,i.isSlideLoading&&i.selectedSlide===a?12:-1),e.xp6(3),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}function _r(o,l){1&o&&e.SjG(0,fr,18,7,"div",36,e.QCX().trackByFn),2&o&&e.wJu(l)}const br=o=>({"pointer-events-none":o}),xr=()=>[5,10,25,100];function yr(o,l){if(1&o&&(e.TgZ(0,"div",19)(1,"div",20)(2,"div",21),e._uU(3,"No."),e.qZA(),e.TgZ(4,"div",22),e._uU(5," Nombre "),e.qZA(),e.TgZ(6,"div",22),e._uU(7," Asignado a "),e.qZA(),e.TgZ(8,"div",22),e._uU(9," Marca "),e.qZA(),e.TgZ(10,"div",22),e._uU(11," Activo "),e.qZA(),e.TgZ(12,"div",22),e._uU(13," Detalles "),e.qZA()(),e.YNc(14,_r,2,0),e.ALo(15,"async"),e.qZA(),e._UZ(16,"mat-paginator",23)),2&o){const t=e.oxw(2);let a;e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(12),e.um2(14,(a=e.lcZ(15,8,t.terminals$))?14:-1,a),e.xp6(2),e.Q6J("ngClass",e.VKq(10,br,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(12,xr))("showFirstLastButtons",!0)}}function Cr(o,l){1&o&&(e.TgZ(0,"div",37),e._uU(1,"\xa1No se ha creado ninguna terminal!"),e.qZA())}function vr(o,l){1&o&&e.YNc(0,yr,17,13)(1,Cr,2,0),2&o&&e.um2(0,l.length>0?0:1)}let Ar=(()=>{class o{constructor(){this.flashMessage=null,this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.merchantInputControl=new r.NI,this.searchInputControl=new r.NI,this.selectedSlide=null,this.terminals=[],this.terminals$=(0,R.of)([]),this.user=null,this._unsubscribeAll=new V.x,this._terminalsService=(0,e.f3M)(vt.B),this._fuseConfirmationService=(0,e.f3M)(ae.R),this._changeDetectorRef=(0,e.f3M)(e.sBO),this._dialog=(0,e.f3M)(A.uw),this._snackBar=(0,e.f3M)(N.ux),this.store=(0,e.f3M)(C.yh)}ngOnInit(){this.store.select(G.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(z.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.terminals$=this.store.select(Jn.$Q),this.terminals$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.terminals=t,this._changeDetectorRef.markForCheck()}),this.store.select(H.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(300),(0,P.w)(t=>(this.isLoading=!0,this._terminalsService.getTerminals(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,L.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,le.T)(this._sort.sortChange,this._paginator.page).pipe((0,P.w)(()=>(this.isLoading=!0,this._terminalsService.getTerminals(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,L.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createTerminal(){this._openDialog(new mr,"add")}updateTerminal(t){this._openDialog(t,"edit")}updateTerminalStatus(t,a,i){this.isSlideLoading=!0,this.selectedSlide=i,this._terminalsService.updateTerminalStatus({id:a.id,active:t.checked}).subscribe(({data:n})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.updateTerminalStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}deleteTerminal(t){this._fuseConfirmationService.open({title:"Eliminar terminal",message:`\xbfEst\xe1s seguro de que deseas eliminar la terminal ${t.no}? Esta acci\xf3n no se puede deshacer.`,actions:{confirm:{label:"Eliminar",color:"warn"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._terminalsService.removeTerminal(t.id).subscribe(({data:n})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.removeTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}trackByFn(t,a){return t||a.id}_openDialog(t,a){this._dialog.open(dr,{data:{terminal:t,dialogMode:a},panelClass:"ath-dialog-panel",disableClose:!0})}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-terminals"]],viewQuery:function(a,i){if(1&a&&(e.Gf(w.NW,5),e.Gf(S.YE,5)),2&a){let n;e.iGM(n=e.CRH())&&(i._paginator=n.first),e.iGM(n=e.CRH())&&(i._sort=n.first)}},standalone:!0,features:[e.jDz],decls:30,vars:11,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-auto"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","terminals-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[3,"mat-sort-header"],[1,""],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","terminals-grid","md:px-8"],[1,"truncate"],[1,"flex","flex-wrap","gap-1"],[1,"hidden","lg:block"],[3,"checked","color"],[3,"diameter","color"],[1,"flex","flex-row","items-center","justify-center","gap-1"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"px-2","rounded-md","bg-hover"],[3,"checked","color","change"],["class","px-2 rounded-md bg-hover"],["class","grid items-center gap-4 px-6 py-3 border-b terminals-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Terminales"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Terminales "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e.NdJ("click",function(){return i.createTerminal()}),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Agregar"),e.qZA()()()(),e.TgZ(26,"div",17)(27,"div",18),e.YNc(28,vr,2,1),e.ALo(29,"async"),e.qZA()()()),2&a){let n;e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(7),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.xp6(2),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.um2(28,(n=e.lcZ(29,9,i.terminals$))?28:-1,n)}},dependencies:[v.Ov,T.ot,T.lW,g.lN,g.KE,g.qo,k.Ps,k.Hw,U.c,U.Nt,w.TU,w.NW,Y.Cq,Y.Ou,me.rP,me.Rr,S.JX,S.YE,S.nU,v.mk,r.UX,r.Fj,r.JJ,r.oH],encapsulation:2,changeDetection:0})}return o})();var Ke=d(53308),he=d(9427),We=d(31451);let Zr=(()=>{class o{constructor(t){this._assistancesService=t}resolve(t,a){return this._assistancesService.getAssistances()}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(Ie))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Tr=(()=>{class o{constructor(t){this._assistancesService=t}resolve(t,a){return this._assistancesService.getAssistancesActive()}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(Ie))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Ir=(()=>{class o{constructor(t){this._billsService=t}resolve(t,a){return this._billsService.getBills()}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(je))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Sr=d(7604),Xe=d(2019);let Fr=(()=>{class o{constructor(t){this._offersService=t}resolve(t,a){return this._offersService.getOffers()}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(bt))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Zt=d(52759),Tt=d(6514);let qr=(()=>{class o{constructor(t){this._prebillsService=t}resolve(t,a){return this._prebillsService.getBills()}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(yt))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),kr=(()=>{class o{constructor(t){this._salesDashboardStatsService=t}resolve(t,a){const i=new Date((new Date).getTime()-6048e5);return this._salesDashboardStatsService.getSalesDashboardStatsData(i,new Date)}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(ht))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var wr=d(85199),Dr=d(23605),It=d(15861);const Pr=(0,C.P1)(o=>o.sales,o=>o.sales);var et=d(94748),tt=d(76676);function Nr(o,l){1&o&&(e.TgZ(0,"mat-error",34),e._uU(1," Valor m\xednimo 0 "),e.qZA())}function Rr(o,l){if(1&o&&(e.TgZ(0,"mat-error",34),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(),e.hij(" Valor m\xe1ximo ",t.quantityPreviews," ")}}function Jr(o,l){1&o&&(e.TgZ(0,"mat-error",34),e._uU(1," Patr\xf3n no v\xe1lido "),e.qZA())}function Mr(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",24)(1,"div",25),e._uU(2),e.qZA(),e.TgZ(3,"div",26)(4,"div",27)(5,"button",28),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.decrementProductQty(n))}),e._UZ(6,"mat-icon",29),e.qZA(),e.TgZ(7,"mat-form-field",30)(8,"span",31),e._uU(9),e.qZA(),e._UZ(10,"input",32),e.qZA(),e.TgZ(11,"button",28),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.incrementProductQty(n))}),e._UZ(12,"mat-icon",29),e.qZA()(),e.YNc(13,Nr,2,0,"mat-error",33)(14,Rr,2,1,"mat-error",33)(15,Jr,2,0,"mat-error",33),e.qZA()()}if(2&o){const t=l.$implicit;e.xp6(),e.Q6J("matTooltip",t.get("name").value),e.xp6(),e.hij(" ",t.get("name").value," "),e.xp6(3),e.Q6J("disabled",t.get("quantity").value<=0||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(2),e.Oqu(t.get("uom").value),e.xp6(),e.Q6J("min",0)("max",t.get("quantityPreviews").value)("formControl",t.get("quantity")),e.xp6(),e.Q6J("disabled",t.get("quantity").value>=t.get("quantityPreviews").value||t.get("quantity").hasError("pattern")),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(),e.um2(13,t.get("quantity").hasError("min")?13:-1),e.xp6(),e.um2(14,t.get("quantity").hasError("max")?14:-1),e.xp6(),e.um2(15,t.get("quantity").hasError("pattern")&&!t.get("quantity").hasError("min")?15:-1)}}function Er(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," EL motivo del rechazo es obligatorio "),e.qZA())}function $r(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," EL motivo del rechazo debe contener entre 3 y 200 caracteres. "),e.qZA())}function Lr(o,l){1&o&&(e.TgZ(0,"span"),e._uU(1," Aceptar "),e.qZA())}function Qr(o,l){1&o&&e._UZ(0,"mat-progress-spinner",23),2&o&&e.Q6J("diameter",24)("mode","indeterminate")}const zr=o=>({"cursor-not-allowed":o});let Or=(()=>{class o{constructor(t){this.data=t,this.isLoading=!1,this.sale=null,this.totalAmount=0,this.checkOutControl=new r.NI(!0),this.salesProducts=[],this.products=[],this.receipts=[],this._changeDetectorRef=(0,e.f3M)(e.sBO),this._salesService=(0,e.f3M)(tt.M),this._dialogRef=(0,e.f3M)(A.so),this._formBuilder=(0,e.f3M)(r.qu),this._snackBar=(0,e.f3M)(N.ux),this._unsubscribeAll=new V.x,this.sale=t,this.products=this.sale.products.map(n=>({...n,type:"product"})),[...t.returns].map(n=>n.products).flat().forEach(n=>{const s=this.products.find(c=>c.productId===n.productId);s&&(s.quantity=s.quantity-n.quantity)}),this.salesProducts=[...this.products],this.receipts=this.sale.receipts.map(n=>({...n,type:"receipt"})),[...t.returns].map(n=>n.receipts).flat().forEach(n=>{const s=this.receipts.find(c=>c.productId===n.productId);s&&(s.quantity=s.quantity-n.quantity)}),this.products.push(...this.receipts),this.totalAmount=this.sale.products.reduce((n,s)=>n+s.quantity*s.price,0)}ngOnInit(){const t=this.salesProducts.map(i=>this.createProductFormGroup(i)),a=this.receipts.map(i=>this.createReceiptsFormGroup(i));t.push(...a),this.returnForm=this._formBuilder.group({saleId:[this.sale.id],products:new r.Oe(t),reason:["",[r.kI.required,r.kI.maxLength(1e3)]]}),this.returnForm.get("products").valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{this.totalAmount=i.reduce((n,s)=>n+Number(s.quantity)*s.price,0),this._changeDetectorRef.markForCheck()}),this.checkOutControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{i?(this.returnForm.get("products").controls.forEach((n,s)=>{const c=this.products.findIndex(u=>u.productId===n.get("productId").value);n.get("quantity").setValue(this.products[c].quantity)}),this.products=this.returnForm.get("products").getRawValue()):(this.products=this.returnForm.get("products").getRawValue(),this.returnForm.get("products").controls.forEach((n,s)=>{n.get("quantity").setValue(0)}))})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}returnSale(t){if("Enter"===t.key&&t.target instanceof HTMLTextAreaElement||this.returnForm.invalid)return;const a=this.returnForm.getRawValue();if(!a.products.some(u=>u.quantity>0))return;const n=a.products.filter(u=>u.quantity>0&&"product"===u.type).map(u=>({productId:u.productId,quantity:Number(u.quantity),price:u.price})),s=a.products.filter(u=>u.quantity>0&&"receipt"===u.type).map(u=>({productId:u.productId,quantity:Number(u.quantity),price:u.price}));this._salesService.returnSale({saleId:a.saleId,reason:a.reason,products:n,receipts:s}).pipe((0,m.R)(this._unsubscribeAll),(0,se.x)(()=>{this.isLoading=!1,this._changeDetectorRef.markForCheck()})).subscribe(({data:u})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:u.returnSale.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck(),this.closeDialog()})}incrementProductQty(t){const a=t.get("quantity").value;t.get("quantity").setValue(Number(a)+1);const i=this.products.findIndex(n=>n.productId===t.get("productId").value);this.products[i].quantity=Number(a)+1}decrementProductQty(t){const a=t.get("quantity").value;t.get("quantity").setValue(Number(a)-1);const i=this.products.findIndex(n=>n.productId===t.get("productId").value);this.products[i].quantity=Number(a)-1}closeDialog(){this._dialogRef.close()}trackByFn(t,a){return a.productId||t}createProductFormGroup(t){return this._formBuilder.group({productId:[t.productId,[r.kI.required]],name:[t.product.name],quantityPreviews:[t.quantity],quantity:[t.quantity,[X.L.onlyNumbersPattern(),r.kI.required,r.kI.min(0),r.kI.max(t.quantity)]],price:[t.price,[r.kI.required]],uom:[t.product.uom.abbr],type:["product"]})}createReceiptsFormGroup(t){return this._formBuilder.group({productId:[t.productId,[r.kI.required]],name:[t.receipt.name],quantityPreviews:[t.quantity],quantity:[t.quantity,[X.L.onlyNumbersPattern(),r.kI.required,r.kI.min(0),r.kI.max(t.quantity)]],price:[t.price,[r.kI.required]],uom:[t.receipt.uom.abbr],type:["receipt"]})}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(A.WI))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sale-return-dialog"]],standalone:!0,features:[e.jDz],decls:38,vars:22,consts:[[1,"h-full","ng-star-inserted",3,"keydown.enter"],[1,"relative","flex","flex-col","w-full","h-full"],[1,"flex","items-center","h-full"],[1,"block","w-full"],[1,"flex","flex-col","items-center","flex-auto","p-8","pb-4","sm:flex-row","sm:items-start","sm:pb-6"],[1,"flex","flex-col","items-center","mt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left","ng-star-inserted"],[1,"text-xl","font-medium","leading-6","ng-star-inserted"],[1,"text-secondary","ng-star-inserted"],[1,"flex","flex-col","gap-6","pb-6","pl-8","pr-8","mt-10","sm:mt-0","sm:pl-22",3,"formGroup","autocomplete"],[1,"flex","flex-col"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","grid-cols-2","gap-4","pr-6","pl-2","py-2","font-semibold","shadow","md:pr-8","md:pl-3","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["color","primary",3,"formControl"],[1,"font-medium"],[1,"flex","items-center","justify-end","mr-9","h-full"],[1,"overflow-auto","border-b",2,"max-height","40vh"],[1,"w-full","mat-fuse-dense","fuse-mat-textarea"],["matPrefix","","svgIcon","mat_solid:subject",1,"hidden","sm:flex","icon-size-5"],["matInput","",3,"formControlName","placeholder","minLength","maxLength","required"],["refundT",""],[1,"text-right"],[1,"flex","flex-wrap","justify-center","px-6","py-4","space-x-3","tems-center","bg-gray-50","dark:bg-black","dark:bg-opacity-10","ng-star-inserted"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","","mat-button","",3,"color","disabled","ngClass","click"],[3,"diameter","mode"],[1,"flex","items-center","justify-between","border-t","py-2","pr-3"],[1,"truncate",3,"matTooltip"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"disabled","click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded","max-w-22",3,"subscriptSizing"],["matSuffix",""],["matInput","","type","text","name","quantity",1,"font-mono","font-semibold","text-center",3,"min","max","formControl"],["class","w-full text-sm text-center"],[1,"w-full","text-sm","text-center"],["class","flex items-center justify-between border-t py-2 pr-3"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0),e.NdJ("keydown.enter",function(s){return i.returnSale(s)}),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e._uU(7,"Devoluci\xf3n"),e.qZA(),e.TgZ(8,"div",7),e._uU(9),e.qZA()()(),e.TgZ(10,"form",8)(11,"div",9)(12,"div",10)(13,"mat-checkbox",11)(14,"span",12),e._uU(15,"Productos*"),e.qZA()(),e.TgZ(16,"div",13)(17,"span"),e._uU(18,"Cantidades"),e.qZA()()(),e.TgZ(19,"div",14),e.SjG(20,Mr,16,14,"div",35,i.trackByFn),e.qZA()(),e.TgZ(22,"mat-form-field",15)(23,"mat-label"),e._uU(24,"Motivo"),e.qZA(),e._UZ(25,"mat-icon",16)(26,"textarea",17,18),e.TgZ(28,"mat-hint",19),e._uU(29),e.qZA(),e.YNc(30,Er,2,0,"mat-error")(31,$r,2,0,"mat-error"),e.qZA()()()(),e.TgZ(32,"div",20)(33,"button",21),e._uU(34,"Cancelar"),e.qZA(),e.TgZ(35,"button",22),e.NdJ("click",function(s){return i.returnSale(s)}),e.YNc(36,Lr,2,0,"span")(37,Qr,1,2,"mat-progress-spinner",23),e.qZA()()()()),2&a){const n=e.MAs(27);e.xp6(9),e.AsE("\xbfEsta seguro que desea efectuar la devoluci\xf3n de las cantidades de la venta # ",i.sale.no," por $",i.totalAmount," ? "),e.xp6(),e.Q6J("formGroup",i.returnForm)("autocomplete","off"),e.xp6(3),e.Q6J("formControl",i.checkOutControl),e.xp6(7),e.wJu(i.returnForm.get("products").controls),e.xp6(6),e.Q6J("formControlName","reason")("placeholder","Escriba el motivo del rechazo")("minLength",3)("maxLength",200)("required",!0),e.xp6(3),e.hij("Total de caracteres ",n.value.length," / 1000"),e.xp6(),e.um2(30,i.returnForm.get("reason").hasError("required")?30:-1),e.xp6(),e.um2(31,i.returnForm.get("reason").hasError("maxlength")||i.returnForm.get("reason").hasError("minlength")?31:-1),e.xp6(2),e.Q6J("matDialogClose",!0),e.xp6(2),e.Q6J("color","primary")("disabled",i.returnForm.invalid)("ngClass",e.VKq(20,zr,i.returnForm.invalid||i.isLoading))("disabled",i.returnForm.invalid||i.isLoading),e.xp6(),e.um2(36,i.isLoading?-1:36),e.xp6(),e.um2(37,i.isLoading?37:-1)}},dependencies:[T.ot,T.lW,ne.p9,ne.oG,A.Is,A.ZT,g.lN,g.KE,g.hX,g.bx,g.TO,g.qo,g.R9,k.Ps,k.Hw,U.c,U.Nt,Y.Cq,Y.Ou,re.AV,re.gM,v.mk,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.oH,r.sg,r.u],encapsulation:2,changeDetection:0})}return o})();function Gr(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El motivo es obligatorio "),e.qZA())}function jr(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El motivo debe contener entre 3 y 1000 caracteres. "),e.qZA())}const Vr=o=>({"cursor-not-allowed":o});let Yr=(()=>{class o{constructor(t,a){this.data=t,this._dialogRef=a,this.reasonControl=new r.NI("")}ngOnInit(){this.reasonControl.setValidators([r.kI.required,r.kI.minLength(3),r.kI.maxLength(1e3)])}accept(){this._dialogRef.close({reason:this.reasonControl.value})}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(A.WI),e.Y36(A.so))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-cancel-dialog"]],standalone:!0,features:[e.jDz],decls:25,vars:15,consts:[[1,"ng-star-inserted","h-full"],[1,"relative","flex","flex-col","w-full","h-full"],[1,"h-full","flex","items-center"],[1,"block","w-full"],[1,"flex","flex-col","sm:flex-row","flex-auto","items-center","sm:items-start","p-8","pb-4","sm:pb-6"],[1,"flex","flex-0","items-center","justify-center","w-10","h-10","sm:mr-4","rounded-full","text-blue-600","bg-blue-100","dark:bg-blue-300","ng-star-inserted"],["svgIcon","mat_solid:question_mark",1,"text-blue-600"],[1,"text-xl","font-medium","leading-6","ng-star-inserted"],[1,"text-sm","text-secondary","ng-star-inserted"],[1,"pr-8","pl-8","mt-10","sm:mt-0","sm:pl-22","pb-6",3,"autocomplete"],[1,"w-full","fuse-mat-textarea",3,"subscriptSizing"],["matPrefix","","svgIcon","mat_solid:edit_note",1,"hidden","sm:flex","icon-size-5"],["matInput","","required","",3,"formControl","placeholder"],[1,"flex","flex-wrap","tems-center","justify-center","md:justify-end","px-6","py-4","space-x-3","bg-gray-50","dark:bg-black","dark:bg-opacity-10","ng-star-inserted"],["mat-button","",3,"color","matDialogClose"],["mat-flat-button","","mat-button","",3,"color","disabled","ngClass","click"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"mat-icon",6),e.qZA(),e.TgZ(7,"div")(8,"div",7),e._uU(9),e.qZA(),e.TgZ(10,"div",8),e._uU(11),e.qZA()()(),e.TgZ(12,"form",9)(13,"mat-form-field",10)(14,"mat-label"),e._uU(15,"Motivo"),e.qZA(),e._UZ(16,"mat-icon",11)(17,"textarea",12),e.YNc(18,Gr,2,0,"mat-error")(19,jr,2,0,"mat-error"),e.qZA()()()(),e.TgZ(20,"div",13)(21,"button",14),e._uU(22,"Cancelar"),e.qZA(),e.TgZ(23,"button",15),e.NdJ("click",function(){return i.accept()}),e._uU(24," Aceptar "),e.qZA()()()()),2&a&&(e.xp6(9),e.Oqu(i.data.title),e.xp6(2),e.Oqu(i.data.message),e.xp6(),e.Q6J("autocomplete","off"),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(4),e.Q6J("formControl",i.reasonControl)("placeholder","Escriba el motivo"),e.xp6(),e.um2(18,i.reasonControl.hasError("required")?18:-1),e.xp6(),e.um2(19,i.reasonControl.hasError("maxlength")||i.reasonControl.hasError("minlength")?19:-1),e.xp6(2),e.Q6J("color","warn")("matDialogClose",!0),e.xp6(2),e.Q6J("color","primary")("disabled",i.reasonControl.invalid)("ngClass",e.VKq(13,Vr,i.reasonControl.invalid)))},dependencies:[T.ot,T.lW,ne.p9,A.Is,A.ZT,g.lN,g.KE,g.hX,g.TO,g.qo,k.Ps,k.Hw,U.c,U.Nt,Y.Cq,re.AV,v.mk,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.oH],encapsulation:2,data:{animation:et.L},changeDetection:0})}return o})();var Hr=d(70456),Kr=d(43987),St=d(90621);const Wr=["locationFilter"],Xr=["currencyFilter"];function es(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mat-icon",47),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.range.reset())}),e.qZA()}}function ts(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Fecha de inicio no v\xe1lida "),e.qZA())}function is(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Fecha de final no v\xe1lida "),e.qZA())}function os(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"table-filter",48,49),e.NdJ("dataChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.addLocation(i))}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("filterType","filterEntity")("searchEntityControl",t.searchLocationsControl)("entitiesFiltered",t.locationsFiltered)}}function as(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"button",50),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.clearTableFilters())}),e.TgZ(1,"span",51),e._uU(2," filter_list_off "),e.qZA()()}}function ns(o,l){1&o&&e._UZ(0,"mat-icon",62)}function rs(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,n=e.oxw(2);return e.KtG(n.return(i))}),e._UZ(1,"mat-icon",64),e.qZA(),e.TgZ(2,"button",65),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,n=e.oxw(2);return e.KtG(n.cancelSale(i))}),e._UZ(3,"mat-icon",66),e.qZA(),e.TgZ(4,"button",67),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,n=e.oxw(2);return e.KtG(n.printTicket(i))}),e._UZ(5,"mat-icon",68),e.qZA()}if(2&o){const t=e.oxw().$implicit,a=e.oxw(2);e.Q6J("disabled",a.isLoading||"devuelto"===t.paymentStatus||"cancelada"===t.status),e.xp6(2),e.Q6J("disabled",a.isLoading||"devuelto"===t.paymentStatus||"cancelada"===t.status),e.xp6(3),e.Q6J("svgIcon","mat_solid:receipt")}}function ss(o,l){1&o&&e._UZ(0,"mat-spinner",69),2&o&&e.Q6J("diameter",20)("color","primary")}function ls(o,l){1&o&&e.GkF(0)}const cs=o=>({$implicit:o});function us(o,l){if(1&o&&e.YNc(0,ls,1,0,"ng-container",70),2&o){const t=e.oxw(3),a=e.MAs(83);e.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",e.VKq(2,cs,t.paymentStatusData))}}const ds=(o,l,t,a,i,n,s)=>({"text-teal-800 bg-teal-100 dark:text-teal-50 dark:bg-teal-500":o,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":l,"text-blue-800 bg-blue-100 dark:text-white dark:bg-blue-500":t,"text-violet-800 bg-violet-100 dark:text-violet-50 dark:bg-violet-500":a,"text-violet-500 bg-violet-50 dark:text-violet-50 dark:bg-violet-300":i,"text-red-800 bg-red-100 dark:text-red-50 dark:bg-red-500":n,"text-amber-800 bg-amber-100 dark:text-black dark:bg-amber-500":s});function ms(o,l){if(1&o&&(e.TgZ(0,"div",52)(1,"div",53),e._uU(2),e.qZA(),e.TgZ(3,"div",54),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",55),e._uU(7),e.qZA(),e.TgZ(8,"div",34),e._uU(9),e.qZA(),e.TgZ(10,"div",56),e._uU(11),e.ALo(12,"number"),e.qZA(),e.TgZ(13,"div",34),e._uU(14),e.ALo(15,"uppercase"),e.qZA(),e.TgZ(16,"div",57)(17,"span",58),e._uU(18),e.ALo(19,"uppercase"),e.qZA()(),e.TgZ(20,"div",59),e.YNc(21,ns,1,0,"mat-icon",60)(22,rs,6,3)(23,ss,1,2,"mat-spinner",61),e.qZA()(),e.TgZ(24,"div",31),e.YNc(25,us,1,4,"ng-container"),e.qZA()),2&o){const t=l.$implicit,a=l.$index,i=e.oxw(2);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",e.xi3(5,12,t.createdAt,"dd/MM/YY hh:mm a")," "),e.xp6(3),e.hij(" ",null==t||null==t.location?null:t.location.name," "),e.xp6(2),e.hij(" ",null==t||null==t.currency?null:t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(12,15,t.total,"1.2-2")," "),e.xp6(3),e.hij(" ",e.lcZ(15,18,t.paymentMethod.name)," "),e.xp6(3),e.Q6J("ngClass",e.Hh0(22,ds,"parcial"===t.paymentStatus,"pagada"===t.paymentStatus,"pendiente"===t.paymentStatus,"devuelto"===t.paymentStatus,"devueltoParcial"===t.paymentStatus,"cancelada"===t.status,"dPendiente"===t.paymentStatus)),e.xp6(),e.hij(" ",e.lcZ(19,20,"cancelada"!==t.status?"devueltoParcial"===t.paymentStatus?"devuelto":t.paymentStatus:t.status)," "),e.xp6(3),e.um2(21,t.isPromotion?21:-1),e.xp6(),e.um2(22,t.isPromotion?-1:22),e.xp6(),e.um2(23,i.isMarkAsPayedLoading&&i.selectedSlide===a?23:-1),e.xp6(2),e.um2(25,(null==i.selectedSale?null:i.selectedSale.id)===t.id?25:-1)}}function ps(o,l){if(1&o&&e.SjG(0,ms,26,30,null,null,e.QCX().trackByFn),2&o){const t=e.oxw();e.wJu(t.sales)}}function gs(o,l){1&o&&(e.TgZ(0,"div",71),e._uU(1," \xa1No se ha encontrado ninguna venta! "),e.qZA())}function hs(o,l){if(1&o&&(e.TgZ(0,"div",76)(1,"div",34),e._uU(2),e.ALo(3,"uppercase"),e.qZA(),e.TgZ(4,"div",34),e._uU(5),e.qZA(),e.TgZ(6,"div",34),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"div",34),e._uU(10),e.ALo(11,"uppercase"),e.qZA(),e.TgZ(12,"div",75),e._uU(13),e.qZA()()),2&o){const t=l.$implicit;e.xp6(2),e.hij(" ",e.lcZ(3,5,t.paymentStatus)," "),e.xp6(3),e.hij(" ",t.amount," "),e.xp6(2),e.hij(" ",e.xi3(8,7,t.statusChangeAt,"dd/MM/yyyy HH:mm")," "),e.xp6(3),e.hij(" ",e.lcZ(11,10,t.type)," "),e.xp6(3),e.hij(" ",t.description," ")}}function fs(o,l){if(1&o&&(e.TgZ(0,"div",72)(1,"div",73)(2,"div",34),e._uU(3," Estado "),e.qZA(),e.TgZ(4,"div",34),e._uU(5," Monto "),e.qZA(),e.TgZ(6,"div",34),e._uU(7," Fecha "),e.qZA(),e.TgZ(8,"div",74),e._uU(9," T.Devoluci\xf3n "),e.qZA(),e.TgZ(10,"div",75),e._uU(11," Descripci\xf3n "),e.qZA()(),e.SjG(12,hs,14,12,"div",77,e.x6l),e.qZA()),2&o){const t=e.oxw();e.xp6(12),e.wJu(t.paymentStatusData)}}const _s=o=>({"pointer-events-none":o}),bs=()=>[10,25,50,100];function xs(o,l){if(1&o&&e._UZ(0,"mat-paginator",78),2&o){const t=e.oxw();e.Q6J("ngClass",e.VKq(6,_s,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(8,bs))("showFirstLastButtons",!0)}}const ys=()=>["Cajero"],Cs=o=>({"mr-4":o});let vs=(()=>{class o{constructor(){this.isMarkAsPayedLoading=!1,this.currencies$=(0,R.of)([]),this.maxDate=new Date,this.merchant=null,this.merchantControl=new r.p4(""),this.paymentStatusData=[],this.range=new r.cw({start:new r.NI({disabled:!1,value:null},[X.L.futureDateValidator()]),end:new r.NI({disabled:!1,value:null},[X.L.futureDateValidator()])}),this.searchLocationsControl=new r.NI(null),this.filterInputControl=new r.NI,this.searchInputControl=new r.NI(null),this.selectedSale=null,this.selectedSlide=null,this.user=null,this.selectedLocation=null,this.selectedCurrenciesId=[],this._changeDetectorRef=(0,e.f3M)(e.sBO),this._documentsService=(0,e.f3M)(De.S),this._fileSaverService=(0,e.f3M)($e.m),this._printerService=(0,e.f3M)(Hr.v),this._salesService=(0,e.f3M)(tt.M),this._dialog=(0,e.f3M)(A.uw),this._unsubscribeAll=new V.x,this._snackBar=(0,e.f3M)(N.ux),this._locationsService=(0,e.f3M)(Kr._),this.store=(0,e.f3M)(C.yh)}ngOnInit(){this.store.select(G.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.currencies$=this.store.select(pe.zd),this.store.select(z.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(Pr).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.sales=t,this._changeDetectorRef.markForCheck()}),this.store.select(H.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(300),(0,W.O)(null),(0,P.w)(t=>null!==t?(this.isLoading=!0,this._salesService.getSales(0,50,"createdAt","desc",t,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value)):(0,R.of)()),(0,L.U)(()=>{this.isLoading=!1})).subscribe(),this.range.get("end").valueChanges.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this._salesService.getSales(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,t).pipe((0,m.R)(this._unsubscribeAll)).subscribe()}),this.filterInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(300),(0,P.w)(t=>(this.isLoading=!0,this._salesService.getSales(0,this.pagination.size,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value))),(0,L.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,le.T)(this._sort.sortChange,this._paginator.page).pipe((0,P.w)(()=>(this.isLoading=!0,this._salesService.getSales(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value))),(0,L.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}resetLocation(){this.selectedLocation=null,this.searchInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addLocation(t){this.selectedLocation=t,this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}addCurrencies(t){this.selectedCurrenciesId=t.map(a=>a.id),this.filterInputControl.setValue(""),this._changeDetectorRef.markForCheck()}exportIPVProductos(){this._salesService.getSales(0,1e4,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{let a=structuredClone(t.data.findSales.sales);a.forEach(s=>{const c=s.returns.map(f=>f.products).flat(),u=s.returns.map(f=>f.receipts).flat();for(const f of s.products){const h=c.find(p=>p.productId===f.productId);h&&(s.total-=h.quantity*f.price,f.quantity-=h.quantity)}for(const f of s.receipts){const h=u.find(p=>p.productId===f.productId);h&&(s.total-=h.quantity*f.price,f.quantity-=h.quantity)}}),a=a.filter(s=>"cancelada"!==s.status&&!s.isPromotion);const i=a.reduce((s,c)=>(c.products.forEach(u=>{const f=s.find(h=>h.productId===u.productId);f?f.quantity+=u.quantity:s.push({productId:u.productId,quantity:u.quantity,price:u.price,productName:u.product?.name,locationName:c.location.name,saleUser:c.user})}),c.receipts.forEach(u=>{const f=s.find(h=>h.productId===u.productId);f?f.quantity+=u.quantity:s.push({productId:u.productId,quantity:u.quantity,price:u.price,productName:u.receipt?.name,saleUser:c.user,locationName:c.location.name})}),s),[]);i.forEach(s=>{const c=a.map(f=>f.products).flat().filter(f=>f.productId===s.productId),u=c.reduce((f,h)=>f+h.quantity,0);if(u>0){const f=c.reduce((h,p)=>h+p.price*p.quantity,0)/u;s.price=f}});const n=i.filter(s=>s.quantity*s.price>0).map(s=>({Producto:s?.productName,Cantidad:s.quantity,"Precio Promedio":s.price,Total:s.price*s.quantity,"Unidad Comercial":s.locationName,Cajero:s.saleUser.fullname}));this._fileSaverService.exportAsExcelFile(n,`IPV_${I(this.range.get("end").value).format("YYYYMMDD")}`,[["Producto","Cantidad","Precio Promedio","Total","Unidad Comercial","Cajero"]],[{wch:30},{wch:10},{wch:15},{wch:15},{wch:30},{wch:25}])})}exportIPVVentas(){this._salesService.getSales(0,1e4,"no","asc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{let a=structuredClone(t.data.findSales.sales);a.forEach(n=>{const s=n.returns.map(u=>u.products).flat(),c=n.returns.map(u=>u.receipts).flat();for(const u of n.products){const f=s.find(h=>h.productId===u.productId);f&&(n.total-=f.quantity*u.price,u.quantity-=f.quantity)}for(const u of n.receipts){const f=c.find(h=>h.productId===u.productId);f&&(n.total-=f.quantity*u.price,u.quantity-=f.quantity)}}),a=a.filter(n=>"cancelada"!==n.status&&!n.isPromotion);const i=a.filter(n=>n.total>0).map(n=>({Fecha:I(n.createdAt).format("DD/MM/YYYY HH:mm:ss"),No:n.no,Importe:n.total,Pago:n.paymentMethod.name,"Unidad Comercial":n.location.name,Cajero:n.user.fullname}));this._fileSaverService.exportAsExcelFile(i,`IPV_${I(this.range.get("end").value).format("YYYYMMDD")}`,[["Fecha","No","Importe","Pago","Unidad Comercial","Cajero"]],[{wch:20},{wch:20},{wch:10},{wch:15},{wch:30},{wch:25}])})}generateTicketDocument(t){var a=this;return(0,It.Z)(function*(){a._documentsService.generateTicketDocument(t,a.merchant,a.user)})()}generateIpvProducts(){this._salesService.getSales(0,1e4,"no","desc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{let a=structuredClone(t.data.findSales.sales),i=0;a.forEach(p=>{const _=p.returns.map(x=>x.products).flat(),y=p.returns.map(x=>x.receipts).flat();for(const x of p.products){const b=_.find(M=>M.productId===x.productId);b&&(p.total-=b.quantity*x.price,i+=b.quantity*x.price,x.quantity-=b.quantity)}for(const x of p.receipts){const b=y.find(M=>M.productId===x.productId);b&&(p.total-=b.quantity*x.price,i+=b.quantity*x.price,x.quantity-=b.quantity)}}),a=a.filter(p=>"cancelada"!==p.status&&!p.isPromotion);const n=a.reduce((p,_)=>(_.products.forEach(y=>{const x=p.find(b=>b.productId===y.productId);x?x.quantity+=y.quantity:p.push({productId:y.productId,quantity:y.quantity,price:y.price,productName:y.product?.name,saleUser:_.user})}),_.receipts.forEach(y=>{const x=p.find(b=>b.productId===y.productId);x?x.quantity+=y.quantity:p.push({productId:y.productId,quantity:y.quantity,price:y.price,productName:y.receipt?.name,saleUser:_.user})}),p),[]);n.forEach(p=>{const _=a.map(x=>x.products).flat().filter(x=>x.productId===p.productId),y=_.reduce((x,b)=>x+b.quantity,0);if(y>0){const x=_.reduce((b,M)=>b+M.price*M.quantity,0)/y;p.price=x}});let s=a.map(p=>p.location).flat().filter((p,_,y)=>y.findIndex(x=>x.id===p.id)===_);s.length>1&&(s=s.map(p=>{const x=a.map(b=>b.terminal).flat().filter((b,M,ce)=>ce.findIndex(ie=>ie.id===b.id)===M).find(b=>b.locationId===p.id).no.slice(-2);return p.name=`${p.name} (No\xb0T${x})`,p}));const c=a.filter(p=>"28b4562a-5d43-4246-92dc-c075e2b1d88c"===p.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===p.paymentMethod.id).reduce((p,_)=>p+(_.cashPaid-_.change),0)-i,u=a.filter(p=>"ea192625-2566-443b-b7cb-a011d10f08de"===p.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===p.paymentMethod.id).reduce((p,_)=>p+_.cardPaid,0),f=n.filter(p=>p.quantity*p.price>0).map(p=>({Producto:p?.productName,Cantidad:p.quantity,Precio:p.price,Cajero:p.saleUser.fullname})),h={start:this.range.get("start").value,end:this.range.get("end").value};this._documentsService.generateIpvProducts(f,h,this.merchant,s,this.user,c,u)})}generateIpvVentas(){this._salesService.getSales(0,1e4,"no","asc",this.searchInputControl.value,this.selectedLocation?.id,this.selectedCurrenciesId,this.range.get("start").value,this.range.get("end").value).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{let a=structuredClone(t.data.findSales.sales),i=0;a.forEach(h=>{const p=h.returns.map(y=>y.products).flat(),_=h.returns.map(y=>y.receipts).flat();for(const y of h.products){const x=p.find(b=>b.productId===y.productId);console.log(x),x&&(h.total-=x.quantity*y.price,i+=x.quantity*y.price,y.quantity-=x.quantity)}for(const y of h.receipts){const x=_.find(b=>b.productId===y.productId);x&&(h.total-=x.quantity*y.price,i+=x.quantity*y.price,y.quantity-=x.quantity)}}),a=a.filter(h=>"cancelada"!==h.status&&!h.isPromotion);let n=a.map(h=>h.location).flat().filter((h,p,_)=>_.findIndex(y=>y.id===h.id)===p);n.length>1&&(n=n.map(h=>{const y=a.map(x=>x.terminal).flat().filter((x,b,M)=>M.findIndex(ce=>ce.id===x.id)===b).find(x=>x.locationId===h.id).no.slice(-2);return h.name=`${h.name} (No\xb0T${y})`,h}));const s=a.filter(h=>"28b4562a-5d43-4246-92dc-c075e2b1d88c"===h.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===h.paymentMethod.id).reduce((h,p)=>h+(p.cashPaid-p.change),0)-i,c=a.filter(h=>"ea192625-2566-443b-b7cb-a011d10f08de"===h.paymentMethod.id||"542880cd-1e6f-4307-804e-051444741d67"===h.paymentMethod.id).reduce((h,p)=>h+p.cardPaid,0),u=a.filter(h=>h.total>0).map(h=>({Fecha:I(h.createdAt).format("DD/MM/YYYY hh:mm a"),No:h.no,Monto:h.total,Pago:h.paymentMethod.name,Cajero:h.user.fullname})),f={start:this.range.get("start").value,end:this.range.get("end").value};this._documentsService.generateIpvVentas(u,f,this.merchant,n,this.user,s,c)})}printTicket(t){let a=structuredClone(t);a.products=[...a.products,...a.receipts.map(i=>({...i,product:{name:i.receipt.name,uom:i.receipt.uom}}))],this._printerService.printSaleTicket(a).pipe((0,m.R)(this._unsubscribeAll)).subscribe()}return(t){this._dialog.open(Or,{data:t,panelClass:"ath-reject-dialog-panel",maxWidth:"600px"})}cancelSale(t){this._dialog.open(Yr,{data:{title:"Cancelar venta",message:"\xbfEst\xe1 seguro que desea cancelar la venta?"},panelClass:"ath-dialog-panel",maxWidth:"600px"}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{Q.W.IsNullOrEmpty(i.reason)||this._salesService.cancelSale(t.id,i.reason).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:n})=>{n&&this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.cancelSale.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})})})}trackByFn(t,a){return a.id||t}closeDetails(){this.selectedSale=null,this.paymentStatusData=[],this._changeDetectorRef.markForCheck()}displayFn(t){return(t&&t.name?t.name:"").trim()}existTableFilter(){return this.currencyFilter?.hasFilter||this.locationFilter?.hasFilter}clearTableFilters(){this.currencyFilter?.hasFilter&&this.currencyFilter.clearFilter(),this.locationFilter?.hasFilter&&this.locationFilter.clearFilter()}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-sales"]],viewQuery:function(a,i){if(1&a&&(e.Gf(w.NW,5),e.Gf(S.YE,5),e.Gf(Wr,5),e.Gf(Xr,5)),2&a){let n;e.iGM(n=e.CRH())&&(i._paginator=n.first),e.iGM(n=e.CRH())&&(i._sort=n.first),e.iGM(n=e.CRH())&&(i.locationFilter=n.first),e.iGM(n=e.CRH())&&(i.currencyFilter=n.first)}},standalone:!0,features:[e.jDz],decls:85,vars:37,consts:[["fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],["routerLink","/dashboard",1,"ml-1","text-primary-500","hover:underline"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"flex","flex-wrap","items-center","w-full","gap-2","mt-6","right-8","shrink-0","lg:mt-0","lg:ml-4","lg:w-auto","sm:w-1/2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"sm:mx-4","min-w-64","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matPrefix","",3,"for"],["disabled","false"],["picker",""],["class","cursor-pointer","svgIcon","mat_solid:cancel","matSuffix",""],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"disabled","matMenuTriggerFor"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],["xPosition","before"],["reportsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","flex-col","flex-auto"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","sales-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-card"],[1,"text-center",3,"mat-sort-header"],[1,"text-center"],[1,"flex","items-center","justify-start"],["matTooltip","Unidad Comercial"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange",4,"ngxPermissionsExcept"],[1,"flex","items-center","justify-center"],[3,"mat-sort-header"],[3,"filterType","entityPropertyName","useUpperCase","data","dataChange"],["currencyFilter",""],[1,"flex","justify-end",3,"mat-sort-header"],[1,"flex","items-center","justify-center",3,"ngClass"],["color","warn","class","w-6 h-6 min-h-6 min-w-6","mat-icon-button","","matTooltip","Limpiar filtros"],["rowPaymentStatusDataTemplate",""],["class","border-b first-letter:z-10 sm:inset-x-0 sm:sticky sm:bottom-0 sm:border-t sm:border-b-0 bg-gray-50 dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"],[3,"filterType","searchEntityControl","entitiesFiltered","dataChange"],["locationFilter",""],["color","warn","mat-icon-button","","matTooltip","Limpiar filtros",1,"w-6","h-6","min-h-6","min-w-6",3,"click"],[1,"material-icons","icon-size-4"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","sales-grid","md:px-8"],[1,"truncate"],[1,"text-center","truncate"],[1,"text-start","truncate"],[1,"text-right"],[1,"flex","justify-center"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold","uppercase",3,"ngClass"],[1,"flex","flex-row","justify-center","gap-2"],["class","icon-size-7","svgIcon","mat_solid:redeem","matTooltip","Venta por promoci\xf3n"],["class","self-center ml-2",3,"diameter","color"],["svgIcon","mat_solid:redeem","matTooltip","Venta por promoci\xf3n",1,"icon-size-7"],["matTooltip","Hacer devoluci\xf3n","mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["svgIcon","mat_solid:undo",1,"icon-size-5"],["matTooltip","Cancelar venta","mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["svgIcon","mat_solid:cancel",1,"icon-size-5"],["mat-stroked-button","","matTooltip","Imprimir Ticket",1,"hidden","px-2","leading-6","sm:flex","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"self-center","ml-2",3,"diameter","color"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","flex-col","w-full","overflow-hidden","border-b"],[1,"z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","subscription-sales-status-detail-table","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],["matTooltip","Tipo de devoluci\xf3n",1,"text-center"],[1,"text-left"],[1,"grid","items-center","w-full","gap-4","px-6","py-3","border-b","subscription-sales-status-detail-table","md:px-8"],["class","grid items-center w-full gap-4 px-6 py-3 border-b subscription-sales-status-detail-table md:px-8"],[1,"border-b","first-letter:z-10","sm:inset-x-0","sm:sticky","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-gray-900",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Ventas"),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",7),e._uU(15,"Registro de Ventas"),e.qZA()()(),e.TgZ(16,"div",8)(17,"a",9),e._UZ(18,"mat-icon",6),e.TgZ(19,"span",10),e._uU(20,"Regresar"),e.qZA()()()()(),e.TgZ(21,"div",11)(22,"mat-form-field",12),e._UZ(23,"mat-icon",13)(24,"input",14),e.qZA(),e.TgZ(25,"mat-form-field",15)(26,"mat-date-range-input",16),e._UZ(27,"input",17)(28,"input",18),e.qZA(),e._UZ(29,"mat-datepicker-toggle",19)(30,"mat-date-range-picker",20,21),e.YNc(32,es,1,0,"mat-icon",22)(33,ts,2,0,"mat-error")(34,is,2,0,"mat-error"),e.qZA(),e.TgZ(35,"div",23)(36,"button",24),e._UZ(37,"mat-icon",25),e.TgZ(38,"span",26),e._uU(39,"Reportes"),e.qZA()(),e.TgZ(40,"mat-menu",27,28)(42,"button",29),e.NdJ("click",function(){return i.exportIPVProductos()}),e._uU(43,"Exportar Productos Vendidos"),e.qZA(),e.TgZ(44,"button",29),e.NdJ("click",function(){return i.exportIPVVentas()}),e._uU(45,"Exportar Ventas"),e.qZA(),e.TgZ(46,"button",29),e.NdJ("click",function(){return i.generateIpvProducts()}),e._uU(47,"Productos Vendidos"),e.qZA(),e.TgZ(48,"button",29),e.NdJ("click",function(){return i.generateIpvVentas()}),e._uU(49,"Reporte de Ventas"),e.qZA()()()()(),e.TgZ(50,"div",30)(51,"div",30),e.ynx(52),e.TgZ(53,"div",31)(54,"div",32)(55,"div",33),e._uU(56," No "),e.qZA(),e.TgZ(57,"div",34),e._uU(58," Fecha "),e.qZA(),e.TgZ(59,"div",35)(60,"span",36),e._uU(61,"Unidad Comercial"),e.qZA(),e.YNc(62,os,2,3,"table-filter",37),e.qZA(),e.TgZ(63,"div",38)(64,"span",39),e._uU(65,"Moneda"),e.qZA(),e.TgZ(66,"table-filter",40,41),e.NdJ("dataChange",function(s){return i.addCurrencies(s)}),e.ALo(68,"async"),e.qZA()(),e.TgZ(69,"div",42)(70,"span"),e._uU(71," Importe"),e.qZA()(),e.TgZ(72,"div",34),e._uU(73," M\xe9todo de pago "),e.qZA(),e.TgZ(74,"div",34),e._uU(75," Estado "),e.qZA(),e.TgZ(76,"div",43)(77,"span"),e._uU(78,"Acciones"),e.qZA(),e.YNc(79,as,3,0,"button",44),e.qZA()(),e.YNc(80,ps,2,0)(81,gs,2,0),e.qZA(),e.BQk(),e.YNc(82,fs,14,0,"ng-template",null,45,e.W1O),e.qZA(),e.YNc(84,xs,1,9,"mat-paginator",46),e.qZA()()),2&a){const n=e.MAs(31),s=e.MAs(41);e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("routerLink","./.."),e.xp6(),e.Q6J("svgIcon","mat_solid:chevron_left"),e.xp6(4),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("formGroup",i.range)("rangePicker",n)("max",i.maxDate),e.xp6(3),e.Q6J("for",n),e.xp6(3),e.um2(32,i.range.get("start").value||i.range.get("end").value?32:-1),e.xp6(),e.um2(33,i.range.controls.start.hasError("matStartDateInvalid")?33:-1),e.xp6(),e.um2(34,i.range.controls.end.hasError("matEndDateInvalid")?34:-1),e.xp6(2),e.Q6J("disabled",!i.range.get("start").value||!i.range.get("end").value||i.range.invalid)("matMenuTriggerFor",s),e.xp6(),e.Q6J("svgIcon","mat_solid:plagiarism"),e.xp6(18),e.Q6J("mat-sort-header","no"),e.xp6(7),e.Q6J("ngxPermissionsExcept",e.DdM(34,ys)),e.xp6(2),e.Q6J("mat-sort-header","currencyId"),e.xp6(2),e.Q6J("filterType","multiSelectEntity")("entityPropertyName","iso")("useUpperCase",!0)("data",e.lcZ(68,32,i.currencies$)),e.xp6(3),e.Q6J("mat-sort-header","total"),e.xp6(7),e.Q6J("ngClass",e.VKq(35,Cs,i.existTableFilter())),e.xp6(3),e.um2(79,i.existTableFilter()?79:-1),e.xp6(),e.um2(80,i.sales.length>0?80:81),e.xp6(4),e.um2(84,i.sales.length>0?84:-1)}},dependencies:[v.Ov,v.uU,v.JJ,T.ot,T.lW,T.RK,q.FA,q.nW,q.wx,q.zY,q.By,q._g,g.lN,g.KE,g.TO,g.qo,g.R9,k.Ps,k.Hw,$.Tx,$.VK,$.OP,$.p6,w.TU,w.NW,S.JX,S.YE,S.nU,Y.Cq,Y.Ou,v.mk,J.rH,Ge.q,v.gd,r.UX,r.Fj,r.JJ,r.JL,r.oH,r.sg,r.u,U.c,U.Nt,St.VI,St.gE,ye.H],encapsulation:2,data:{animation:et.L},changeDetection:0})}return o})(),As=(()=>{class o{constructor(t){this._salesService=t}resolve(t,a){return this._salesService.getSales()}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(tt.M))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Zs=d(8382);const Be=(0,C.P1)(o=>o.collections,o=>o.collections);var Ne=d(55576);const Is=Z.Ps`
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
`,Ss=Z.Ps`
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
`,Fs=Z.Ps`
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
`,qs=Z.Ps`
    mutation RemoveCollection($removeCollectionId: String!) {
        removeCollection(id: $removeCollectionId) {
            ok
            message
        }
    }
`,ks=Z.Ps`
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
`;var ve=d(3980);let it=(()=>{class o{constructor(t,a){this.apolloProvider=t,this.store=a,this._apollo=this.apolloProvider.use("BALANC")}getCollections(t=0,a=50,i="no",n="desc",s="",c=I().subtract(30,"days").toDate(),u=new Date,f=""){return this._apollo.query({query:Is,errorPolicy:"all",variables:{page:t,size:a,sort:i,order:n,search:s,initDate:c,endDate:u,status:f}}).pipe((0,B.b)(({data:h})=>{this.store.dispatch((0,Ne.cv)({collections:h.findCollections.collections})),this.store.dispatch((0,Ae.Jr)({pagination:h.findCollections.pagination}))}))}getCollectionsByDate(t){return this._apollo.query({query:Ss,errorPolicy:"all",variables:{date:t}}).pipe((0,B.b)(({})=>{}))}updateCollection(t){return this.store.select(Be).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:Fs,variables:{updateCollectionInput:t},errorPolicy:"all"}).pipe((0,B.b)(({data:i})=>{const n=structuredClone(a);n[a.findIndex(c=>c.id===t.id)]=i.updatedCollection.collection,this.store.dispatch((0,Ne.cv)({collections:n}))}))))}removeCollection(t){return this.store.select(Be).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:qs,variables:{removeCollectionId:t},errorPolicy:"all"}).pipe((0,B.b)(()=>{const i=structuredClone(a),n=a.findIndex(s=>s.id===t);i.splice(n,1),this.store.dispatch((0,Ne.cv)({collections:i}))}))))}refundCollection(t){return this.store.select(Be).pipe((0,O.q)(1),(0,P.w)(a=>this._apollo.mutate({mutation:ks,variables:{refundPaymentOrderInput:t},errorPolicy:"all"}).pipe((0,B.b)(({})=>{const n=structuredClone(a);n[a.findIndex(c=>c.no===t.no)].paymentStatus=ve.bG.dPendiente,this.store.dispatch((0,Ne.cv)({collections:n}))}))))}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(Z._M),e.LFG(C.yh))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ws=d(87466);function Ds(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," EL importe a reembolsar es obligatorio "),e.qZA())}function Us(o,l){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(),e.hij(" El monto a reembolsar debe ser mayor que 0.01 y menor o igual que ",t.data.invoice.amount,". ")}}function Ps(o,l){if(1&o&&(e.TgZ(0,"mat-form-field",24)(1,"mat-label"),e._uU(2,"Importe"),e.qZA(),e._UZ(3,"mat-icon",25)(4,"input",26),e.YNc(5,Ds,2,0,"mat-error")(6,Us,2,1,"mat-error"),e.qZA()),2&o){const t=e.oxw();e.xp6(3),e.Q6J("svgIcon","mat_solid:attach_money"),e.xp6(),e.Q6J("placeholder",t.data.invoice.amount)("formControlName","amount")("min",.01)("max",t.data.invoice.amount),e.xp6(),e.um2(5,t.refundForm.get("amount").hasError("required")?5:-1),e.xp6(),e.um2(6,t.refundForm.get("amount").hasError("min")||t.refundForm.get("amount").hasError("max")?6:-1)}}function Bs(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," EL motivo del rechazo es obligatorio "),e.qZA())}function Ns(o,l){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," EL motivo del rechazo debe contener entre 3 y 200 caracteres. "),e.qZA())}function Rs(o,l){1&o&&(e.TgZ(0,"span"),e._uU(1," Aceptar "),e.qZA())}function Js(o,l){1&o&&e._UZ(0,"mat-progress-spinner",23),2&o&&e.Q6J("diameter",24)("mode","indeterminate")}const Ms=o=>({"cursor-not-allowed":o});let Es=(()=>{class o{constructor(t){this.data=t,this.isLoading=!1,this.refundType=ve.aw.total,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._collectionsService=(0,e.f3M)(it),this._dialogRef=(0,e.f3M)(A.so),this._formBuilder=(0,e.f3M)(r.qu),this._snackBar=(0,e.f3M)(N.ux),this._unsubscribeAll=new V.x}ngOnInit(){this.refundForm=this._formBuilder.group({amount:[this.data.invoice.amount,[r.kI.required,r.kI.min(.01),r.kI.max(this.data.invoice.amount)]],refundReason:["",[r.kI.required,r.kI.maxLength(1e3)]]})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}refundTypeChange(t){t.value===ve.aw.total&&this.refundForm.get("amount").setValue(this.data.invoice.amount)}refund(){const t={no:this.data.invoice.no,amount:this.refundForm.get("amount").value,description:this.refundForm.get("refundReason").value.trim(),refundType:this.refundType};this.refundType===ve.aw.total&&(t.amount=this.data.invoice.amount),this._collectionsService.refundCollection(t).pipe((0,m.R)(this._unsubscribeAll),(0,se.x)(()=>{this.isLoading=!1,this._changeDetectorRef.markForCheck()})).subscribe(({data:a})=>{this._snackBar.openFromComponent(D.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:a.refundCollectionsOrder.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck(),this._dialogRef.close()})}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(A.WI))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["collection-refund-dialog"]],standalone:!0,features:[e.jDz],decls:38,vars:23,consts:[[1,"h-full","ng-star-inserted"],[1,"relative","flex","flex-col","w-full","h-full"],[1,"flex","items-center","h-full"],[1,"block","w-full"],[1,"flex","flex-col","items-center","flex-auto","p-8","pb-4","sm:flex-row","sm:items-start","sm:pb-6"],[1,"flex","items-center","justify-center","w-10","h-10","text-blue-600","bg-blue-100","rounded-full","flex-0","sm:mr-4","dark:text-blue-50","dark:bg-blue-600","ng-star-inserted"],[3,"src"],[1,"flex","flex-col","items-center","mt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left","ng-star-inserted"],[1,"text-xl","font-medium","leading-6","ng-star-inserted"],[1,"text-secondary","ng-star-inserted"],["color","primary","aria-label","Select an option",1,"flex","flex-wrap","justify-around","gap-2","pl-8","pr-8","mt-4","mb-6","sm:mt-2","sm:mb-10","sm:pl-22",3,"ngModel","change","ngModelChange"],["value","total"],["value","partial"],[1,"pb-6","pl-8","pr-8","mt-10","sm:mt-0","sm:pl-22",3,"formGroup","autocomplete"],["class","w-full mat-fuse-dense"],[1,"w-full","mat-fuse-dense","fuse-mat-textarea"],["matPrefix","","svgIcon","mat_solid:subject",1,"hidden","sm:flex","icon-size-5"],["matInput","",3,"formControlName","placeholder","minLength","maxLength","required"],["refundT",""],[1,"text-right"],[1,"flex","flex-wrap","justify-center","px-6","py-4","space-x-3","tems-center","bg-gray-50","dark:bg-black","dark:bg-opacity-10","ng-star-inserted"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","","mat-button","",3,"color","disabled","ngClass","click"],[3,"diameter","mode"],[1,"w-full","mat-fuse-dense"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["type","number","required","","matInput","",3,"placeholder","formControlName","min","max"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"div",7)(8,"div",8),e._uU(9,"Reembolso"),e.qZA(),e.TgZ(10,"div",9),e._uU(11),e.qZA()()(),e.TgZ(12,"mat-radio-group",10),e.NdJ("change",function(s){return i.refundTypeChange(s)})("ngModelChange",function(s){return i.refundType=s}),e.TgZ(13,"mat-radio-button",11),e._uU(14,"Total"),e.qZA(),e.TgZ(15,"span"),e._uU(16,"......Tipo......"),e.qZA(),e.TgZ(17,"mat-radio-button",12),e._uU(18,"Parcial"),e.qZA()(),e.TgZ(19,"form",13)(20,"div"),e.YNc(21,Ps,7,7,"mat-form-field",14),e.TgZ(22,"mat-form-field",15)(23,"mat-label"),e._uU(24,"Motivo"),e.qZA(),e._UZ(25,"mat-icon",16)(26,"textarea",17,18),e.TgZ(28,"mat-hint",19),e._uU(29),e.qZA(),e.YNc(30,Bs,2,0,"mat-error")(31,Ns,2,0,"mat-error"),e.qZA()()()()(),e.TgZ(32,"div",20)(33,"button",21),e._uU(34,"Cancelar"),e.qZA(),e.TgZ(35,"button",22),e.NdJ("click",function(){return i.refund()}),e.YNc(36,Rs,2,0,"span")(37,Js,1,2,"mat-progress-spinner",23),e.qZA()()()()),2&a){const n=e.MAs(27);e.xp6(6),e.Q6J("src",i.data.invoice.paymentGateway.logo,e.LSH),e.xp6(5),e.hij("\xbfEsta seguro que desea efectuar el reembolso del pago a la factura # ",i.data.invoice.no," ?"),e.xp6(),e.Q6J("ngModel",i.refundType),e.xp6(7),e.Q6J("formGroup",i.refundForm)("autocomplete","off"),e.xp6(2),e.um2(21,"partial"===i.refundType?21:-1),e.xp6(5),e.Q6J("formControlName","refundReason")("placeholder","Escriba el motivo del rechazo")("minLength",3)("maxLength",200)("required",!0),e.xp6(3),e.hij("Total de caracteres ",n.value.length," / 1000"),e.xp6(),e.um2(30,i.refundForm.get("refundReason").hasError("required")?30:-1),e.xp6(),e.um2(31,i.refundForm.get("refundReason").hasError("maxlength")||i.refundForm.get("refundReason").hasError("minlength")?31:-1),e.xp6(2),e.Q6J("matDialogClose",!0),e.xp6(2),e.Q6J("color","primary")("disabled",i.refundForm.invalid)("ngClass",e.VKq(21,Ms,i.refundForm.invalid||i.isLoading))("disabled",i.refundForm.invalid||i.isLoading),e.xp6(),e.um2(36,i.isLoading?-1:36),e.xp6(),e.um2(37,i.isLoading?37:-1)}},dependencies:[r.u5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.Q7,r.qQ,r.Fd,r.On,T.ot,T.lW,ne.p9,A.Is,A.ZT,g.lN,g.KE,g.hX,g.bx,g.TO,g.qo,k.Ps,k.Hw,U.c,U.Nt,Y.Cq,Y.Ou,ws.U0,re.AV,v.mk,r.UX,r.sg,r.u],encapsulation:2,changeDetection:0})}return o})();function $s(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"uppercase"),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(),e.Oqu(e.lcZ(2,1,t.paymentGateway.name))}}function Ls(o,l){1&o&&e._UZ(0,"mat-spinner",30),2&o&&e.Q6J("diameter",20)("color","primary")}function Qs(o,l){1&o&&e.GkF(0)}const zs=o=>({$implicit:o});function Os(o,l){if(1&o&&e.YNc(0,Qs,1,0,"ng-container",31),2&o){const t=e.oxw(3),a=e.MAs(26);e.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",e.VKq(2,zs,t.paymentStatusData))}}const Gs=(o,l,t,a,i)=>({"text-teal-800 bg-teal-100 dark:text-teal-50 dark:bg-teal-500":o,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":l,"text-blue-800 bg-blue-100 dark:text-white dark:bg-blue-500":t,"text-violet-800 bg-violet-100 dark:text-violet-50 dark:bg-violet-500":a,"text-red-800 bg-red-100 dark:text-red-50 dark:bg-red-500":i});function js(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",19)(1,"div",20),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",18),e._uU(7),e.qZA(),e.TgZ(8,"div",18),e._uU(9),e.ALo(10,"number"),e.qZA(),e.TgZ(11,"div",18),e.YNc(12,$s,3,3,"span"),e.qZA(),e.TgZ(13,"div",22)(14,"span",23),e._uU(15),e.ALo(16,"uppercase"),e.qZA()(),e.TgZ(17,"div",24)(18,"button",25),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.generateTicketCollectionDocument(n))}),e._UZ(19,"mat-icon",26),e.qZA(),e.TgZ(20,"button",27),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.refund(n))}),e._UZ(21,"mat-icon",28),e.qZA(),e.YNc(22,Ls,1,2,"mat-spinner",29),e.qZA()(),e.TgZ(23,"div",15),e.YNc(24,Os,1,4,"ng-container"),e.qZA()}if(2&o){const t=l.$implicit,a=l.$index,i=e.oxw(2);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",e.xi3(5,11,t.createdAt,"dd/MM/YY hh:mm a")," "),e.xp6(3),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(10,14,t.total,"1.2-2")," "),e.xp6(3),e.um2(12,t.paymentGateway?12:-1),e.xp6(2),e.Q6J("ngClass",e.qbA(19,Gs,"parcial"===t.paymentStatus,"pagada"===t.paymentStatus,"pendiente"===t.paymentStatus,"devuelto"===t.paymentStatus,"cancelado"===t.paymentStatus)),e.xp6(),e.hij(" ",e.lcZ(16,17,t.paymentStatus)," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:visibility"),e.xp6(),e.Q6J("disabled",i.isLoading||"pagada"!==t.paymentStatus),e.xp6(2),e.um2(22,i.isMarkAsPayedLoading&&i.selectedSlide===a?22:-1),e.xp6(2),e.um2(24,(null==i.selectedCollection?null:i.selectedCollection.id)===t.id?24:-1)}}function Vs(o,l){if(1&o&&(e.TgZ(0,"div",15)(1,"div",16)(2,"div",17),e._uU(3," No "),e.qZA(),e.TgZ(4,"div",18),e._uU(5," Fecha "),e.qZA(),e.TgZ(6,"div",17),e._uU(7," Moneda "),e.qZA(),e.TgZ(8,"div",17),e._uU(9," Importe "),e.qZA(),e.TgZ(10,"div",18),e._uU(11," M\xe9todo de pago "),e.qZA(),e.TgZ(12,"div",18),e._uU(13," Estado "),e.qZA(),e.TgZ(14,"div",18),e._uU(15," Acciones "),e.qZA()(),e.SjG(16,js,25,25,null,null,e.QCX().trackByFn),e.qZA()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(4),e.Q6J("mat-sort-header","currencyId"),e.xp6(2),e.Q6J("mat-sort-header","total"),e.xp6(8),e.wJu(t.collections)}}function Ys(o,l){if(1&o&&(e.TgZ(0,"div",32),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(),e.hij(" ",t.searchInputControl.value?"\xa1No se han encontrado facturas!":"\xa1No se ha generado ninguna factura a una suscripci\xf3n a\xfan!","")}}function Hs(o,l){if(1&o&&(e.TgZ(0,"div",37)(1,"div",18),e._uU(2),e.ALo(3,"uppercase"),e.qZA(),e.TgZ(4,"div",18),e._uU(5),e.qZA(),e.TgZ(6,"div",18),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"div",18),e._uU(10),e.ALo(11,"uppercase"),e.qZA(),e.TgZ(12,"div",36),e._uU(13),e.qZA()()),2&o){const t=l.$implicit;e.xp6(2),e.hij(" ",e.lcZ(3,5,t.paymentStatus)," "),e.xp6(3),e.hij(" ",t.amount," "),e.xp6(2),e.hij(" ",e.xi3(8,7,t.statusChangeAt,"dd/MM/yyyy HH:mm")," "),e.xp6(3),e.hij(" ",e.lcZ(11,10,t.type)," "),e.xp6(3),e.hij(" ",t.description," ")}}function Ks(o,l){if(1&o&&(e.TgZ(0,"div",33)(1,"div",34)(2,"div",18),e._uU(3," Estado "),e.qZA(),e.TgZ(4,"div",18),e._uU(5," Monto "),e.qZA(),e.TgZ(6,"div",18),e._uU(7," Fecha "),e.qZA(),e.TgZ(8,"div",35),e._uU(9," T.Devoluci\xf3n "),e.qZA(),e.TgZ(10,"div",36),e._uU(11," Descripci\xf3n "),e.qZA()(),e.SjG(12,Hs,14,12,"div",38,e.x6l),e.qZA()),2&o){const t=e.oxw();e.xp6(12),e.wJu(t.paymentStatusData)}}const Ws=o=>({"pointer-events-none":o}),Xs=()=>[10,25,50,100];function el(o,l){if(1&o&&e._UZ(0,"mat-paginator",39),2&o){const t=e.oxw();e.Q6J("ngClass",e.VKq(6,Ws,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(8,Xs))("showFirstLastButtons",!0)}}let tl=(()=>{class o{constructor(){this.searchInputControl=new r.NI(null),this.isMarkAsPayedLoading=!1,this.selectedSlide=null,this.user=null,this.merchantControl=new r.p4,this.paymentStatusData=[],this.selectedCollection=null,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._collectionsService=(0,e.f3M)(it),this._documentsService=(0,e.f3M)(De.S),this._dialog=(0,e.f3M)(A.uw),this._unsubscribeAll=new V.x,this.store=(0,e.f3M)(C.yh)}ngOnInit(){this.store.select(Be).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.collections=t,this._changeDetectorRef.markForCheck()}),this.store.select(H.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.store.select(G.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(z.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.currentMerchant=t}),this.searchInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,E.b)(300),(0,W.O)(null),(0,P.w)(t=>null!==t?(this.isLoading=!0,this._collectionsService.getCollections(0,10,"createdAt","desc",t)):(0,R.of)()),(0,L.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,le.T)(this._sort.sortChange,this._paginator.page).pipe((0,P.w)(()=>(this.isLoading=!0,this._collectionsService.getCollections(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,L.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}refund(t){t.paymentGateway&&this._dialog.open(Es,{data:{invoice:{id:t.id,no:t.no,amount:t.total,paymentGateway:t.paymentGateway}},panelClass:"ath-reject-dialog-panel",maxWidth:"520px"})}generateTicketCollectionDocument(t){var a=this;return(0,It.Z)(function*(){a._documentsService.generateTicketCollectionDocument(t,a.currentMerchant,a.user)})()}trackByFn(t,a){return a.id||t}togglePaymentStatusData(t){this.paymentStatusData=[],t.paymentAt&&this.paymentStatusData.push({paymentStatus:ve.bG.pagada,amount:t.total,type:"",description:"",statusChangeAt:t.paymentAt});for(const a of t.refunds.map(i=>({paymentStatus:ve.bG.devuelto,amount:i.amount,type:i.type,description:i.description,statusChangeAt:i.refundedAt})))this.paymentStatusData.push(a);this.selectedCollection&&this.selectedCollection.id===t.id?this.closeDetails():(this.selectedCollection=t,this._changeDetectorRef.markForCheck())}closeDetails(){this.selectedCollection=null,this.paymentStatusData=[],this._changeDetectorRef.markForCheck()}showRefund(t){return!!(t.refunds.map(i=>i.amount).reduce((i,n)=>i+n,0)<t.total&&t.paymentAt)}displayFn(t){return(t&&t.name?t.name:"").trim()}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["sales-collections"]],viewQuery:function(a,i){if(1&a&&(e.Gf(w.NW,5),e.Gf(S.YE,5)),2&a){let n;e.iGM(n=e.CRH())&&(i._paginator=n.first),e.iGM(n=e.CRH())&&(i._sort=n.first)}},standalone:!0,features:[e.jDz],decls:28,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","overflow-x-auto","overflow-y-auto","bg-card","dark:bg-transparent","lg:overflow-x-hidden"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],["routerLink","/dashboard",1,"ml-1","text-primary-500","hover:underline"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"flex","flex-col","flex-auto"],["class","grid"],["rowPaymentStatusDataTemplate",""],["class","z-10 border-b sm:inset-x-0 sm:bottom-0 sm:border-t sm:border-b-0 bg-gray-50 dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","collections-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"text-center",3,"mat-sort-header"],[1,"text-center"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","collections-grid","md:px-8"],[1,"truncate"],[1,"text-center","truncate"],[1,"flex","justify-center"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold","uppercase",3,"ngClass"],[1,"flex","flex-row","justify-center","gap-2"],["mat-stroked-button","","matTooltip","Ver ticket",1,"hidden","px-2","leading-6","sm:flex","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["matTooltip","Hacer devoluci\xf3n","mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["svgIcon","mat_solid:undo",1,"icon-size-5"],["class","self-center ml-2",3,"diameter","color"],[1,"self-center","ml-2",3,"diameter","color"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"flex","flex-col","w-full","overflow-hidden","border-b"],[1,"z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","subscription-collections-status-detail-table","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],["matTooltip","Tipo de devoluci\xf3n",1,"text-center"],[1,"text-left"],[1,"grid","items-center","w-full","gap-4","px-6","py-3","border-b","subscription-collections-status-detail-table","md:px-8"],["class","grid items-center w-full gap-4 px-6 py-3 border-b subscription-collections-status-detail-table md:px-8"],[1,"z-10","border-b","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Ventas"),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",7),e._uU(15,"Cobros"),e.qZA()()(),e.TgZ(16,"div",8)(17,"a",9),e._UZ(18,"mat-icon",6),e.TgZ(19,"span",10),e._uU(20,"Regresar"),e.qZA()()()()()(),e.TgZ(21,"div",11)(22,"div",11),e.YNc(23,Vs,18,3,"div",12)(24,Ys,2,1)(25,Ks,14,0,"ng-template",null,13,e.W1O),e.qZA(),e.YNc(27,el,1,9,"mat-paginator",14),e.qZA()()),2&a&&(e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("routerLink","./.."),e.xp6(),e.Q6J("svgIcon","mat_solid:chevron_left"),e.xp6(5),e.um2(23,i.collections.length>0?23:24),e.xp6(4),e.um2(27,i.collections.length>0?27:-1))},dependencies:[v.uU,v.JJ,T.ot,T.lW,q.FA,ft.PQ,g.lN,k.Ps,k.Hw,U.c,$.Tx,w.TU,w.NW,S.JX,S.YE,S.nU,v.mk,r.UX,J.rH,v.gd,Y.Cq,Y.Ou],encapsulation:2,data:{animation:et.L},changeDetection:0})}return o})(),il=(()=>{class o{constructor(t){this._collectionsService=t}resolve(t,a){return this._collectionsService.getCollections()}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(it))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Re=d(86006);const ol=[{path:"",component:j,children:[{path:"dashboard",component:da,resolve:{salesDashboardStatsResolver:kr,currencies:he.Y,customers:Re.u4}},{path:"assistances",component:ii,resolve:{assistances:Zr,currencies:he.Y}},{path:"bid",component:Di,resolve:{currencies:he.Y,customers:Re.u4,multipliers:Xe.K,productsInStock:Ke.Rf}},{path:"billing",component:So,resolve:{assistances:Tr,currencies:he.g,customers:Re.M_,employees:We.HB,multipliers:Xe.K,operationTypes:Zt.Z,paymentMethods:Tt.p,productsInStock:Ke.Rf}},{path:"prebills",component:Rn,resolve:{prebills:qr,currencies:he.g}},{path:"prebilling",component:cn,resolve:{currencies:he.g,customers:Re.M_,multipliers:Xe.K,operationTypes:Zt.Z,paymentMethods:Tt.p,productsInStock:Ke.Rf,employees:We.HB}},{path:"bills",component:Xo,resolve:{bills:Ir,currencies:he.g}},{path:"collections",component:tl,resolve:{collections:il}},{path:"offers",component:ya,resolve:{offers:Fr}},{path:"terminals",component:Ar,resolve:{brands:Sr.J,depots:Zs.s6,employees:We.HB,terminals:wr.cX,locations:Dr.Nc}},{path:"list",component:vs,resolve:{sales:As,currencies:he.g}}]}]},8382:(Me,de,d)=>{d.d(de,{_u:()=>w,d2:()=>N,gD:()=>me,oF:()=>S,s6:()=>r});var J=d(19212),e=d(26306),j=d(39702),v=d(64190);let r=(()=>{class A{constructor(g){this._depotsService=g}resolve(g,k){return this._depotsService.getDepots()}static#e=this.\u0275fac=function(k){return new(k||A)(J.LFG(j.Y))};static#t=this.\u0275prov=J.Yz7({token:A,factory:A.\u0275fac,providedIn:"root"})}return A})(),w=(()=>{class A{constructor(g,k){this._depotsService=g,this._router=k}resolve(g,k){return this._depotsService.findActiveDepots().pipe((0,e.K)(U=>this._router.navigateByUrl("/dashboard")))}static#e=this.\u0275fac=function(k){return new(k||A)(J.LFG(j.Y),J.LFG(v.F0))};static#t=this.\u0275prov=J.Yz7({token:A,factory:A.\u0275fac,providedIn:"root"})}return A})();const N=(A,T)=>(0,J.f3M)(j.Y).findActiveAndRealDepots(),S=(A,T)=>(0,J.f3M)(j.Y).findDepotsForIncomes(),me=(A,T)=>{const g=A.params.periodId;return g?(0,J.f3M)(j.Y).findDepotByPeriodId(g):null}},58695:(Me,de,d)=>{d.d(de,{$I:()=>v,ae:()=>j});var J=d(84221);const e=w=>w.depots,j=(0,J.P1)(e,w=>w.depot),v=(0,J.P1)(e,w=>w.depots);(0,J.P1)(e,w=>w.ownDepots)},39702:(Me,de,d)=>{d.d(de,{Y:()=>O});var J=d(48180),e=d(94664),j=d(99397),v=d(37398),r=d(97214),w=d(58695),N=d(59668),S=d(50967);const me=S.Ps`
   query FindDepotsByManager {
        findDepotsByManager {
            ok
            message

            depots {
                id
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                name
                code
                codev
                static
            }
        }
    }
`,A=S.Ps`
   query FindAllDepots($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllDepots(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
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

            depots {
                id
                active
                name
                code
                codev
                static
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,T=S.Ps`
    query FindActiveDepots($search: String!, $size: Int!) {
    findActiveDepots(search: $search, size: $size) {
            id
            active
            name
            code
            codev
            static
            managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
        }
    }
`,g=S.Ps`
    query FindActiveAndRealDepots {
    findActiveAndRealDepots {
            ok
            message

            depots {
                id
                name

                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,k=S.Ps`
    query FindDepotsForIncomes {
    findDepotsForIncomes {
            ok
            message

            depots {
                id
                name
            }
        }
    }
`,U=S.Ps`
    query FindDepotByPeriodId($periodId: String!) {
    findDepotByPeriodId(periodId: $periodId) {
            ok
            message

            depot {
                id
                name
            }
        }
    }
`,$=S.Ps`
    query FindDepotById($findDepotById: String!) {
        findDepotById(id: $findDepotById) {
            ok
            message

            depot {
                id
                active
                name
                code
                codev
                static
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,Y=S.Ps`
    mutation CreateDepot($createDepotInput: CreateDepotInput!) {
        createDepot(createDepotInput: $createDepotInput) {
            ok
            message

            depot {
                id
                active
                name
                code
                codev
                static
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,V=S.Ps`
    mutation UpdateDepot($updateDepotInput: UpdateDepotInput!) {
        updateDepot(updateDepotInput: $updateDepotInput) {
            ok
            message

            depot {
                id
                active
                name
                code
                codev
                static
                managerId
                manager {
                    name
                    lastname1
                    lastname2
                    fullname
                }
            }
        }
    }
`,le=S.Ps`
    mutation RemoveDepot($removeDepotId: String!) {
        removeDepot(id: $removeDepotId) {
            ok
            message
        }
    }
`,m=S.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateDepotStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var E=d(19212),P=d(22939),L=d(84221);let O=(()=>{class I{constructor(F,C,G){this.apolloProvider=F,this._snackBar=C,this.store=G,this._apollo=this.apolloProvider.use("BALANC")}createDepot(F){return this.store.select(w.$I).pipe((0,J.q)(1),(0,e.w)(C=>this._apollo.mutate({mutation:Y,variables:{createDepotInput:F},errorPolicy:"all"}).pipe((0,j.b)(({data:G})=>{const z=structuredClone(C);z.push(G.createDepot.depot),this.store.dispatch((0,N.Us)({depots:z}))}))))}getDepots(F=0,C=50,G="code",z="asc",H=""){return this._apollo.query({query:A,errorPolicy:"all",variables:{page:F,size:C,sort:G,order:z,search:H}}).pipe((0,j.b)(({data:oe})=>{this.store.dispatch((0,N.Us)({depots:oe.findAllDepots.depots})),this.store.dispatch((0,r.Jr)({pagination:oe.findAllDepots.pagination}))}))}getDepotsByManager(){return this._apollo.query({query:me,errorPolicy:"all"}).pipe((0,j.b)(({data:F})=>{this.store.dispatch((0,N.qT)({ownDepots:F.findDepotsByManager.depots}))}))}findActiveDepots(F="",C=50){return this._apollo.query({query:T,variables:{search:F,size:C},errorPolicy:"all"}).pipe((0,v.U)(({data:G})=>(this.store.dispatch((0,N.Us)({depots:G.findActiveDepots})),G.findActiveDepots)))}findActiveAndRealDepots(){return this._apollo.query({query:g,errorPolicy:"all"}).pipe((0,j.b)(({data:F})=>{this.store.dispatch((0,N.Us)({depots:F.findActiveAndRealDepots.depots}))}))}findDepotsForIncomes(){return this._apollo.query({query:k,errorPolicy:"all"}).pipe((0,j.b)(({data:F})=>{this.store.dispatch((0,N.Us)({depots:F.findDepotsForIncomes.depots}))}))}findDepotByPeriodId(F){return this._apollo.query({query:U,errorPolicy:"all",variables:{periodId:F}}).pipe((0,j.b)(({data:C})=>{this.store.dispatch((0,N.IH)({depot:C.findDepotByPeriodId.depot}))}))}getDepotById(F){return this._apollo.query({query:$,variables:{findDepotByIdId:F},errorPolicy:"all"}).pipe((0,j.b)(({data:C})=>{this.store.dispatch((0,N.IH)({depot:C.createDepot.depot}))}))}updateDepot(F){return this.store.select(w.$I).pipe((0,J.q)(1),(0,e.w)(C=>this._apollo.mutate({mutation:V,variables:{updateDepotInput:F},errorPolicy:"all"}).pipe((0,j.b)(({data:G})=>{const z=structuredClone(C);z[C.findIndex(oe=>oe.id===F.id)]=G.updateDepot.depot,this.store.dispatch((0,N.Us)({depots:z}))}))))}updateDepotStatus(F){return this.store.select(w.$I).pipe((0,J.q)(1),(0,e.w)(C=>this._apollo.mutate({mutation:m,variables:{updateEntityStatusInput:F},errorPolicy:"all"}).pipe((0,j.b)(({})=>{const z=structuredClone(C);z[C.findIndex(oe=>oe.id===F.id)].active=F.active,this.store.dispatch((0,N.Us)({depots:z}))}))))}removeDepot(F){return this.store.select(w.$I).pipe((0,J.q)(1),(0,e.w)(C=>this._apollo.mutate({mutation:le,variables:{removeDepotId:F},errorPolicy:"all"}).pipe((0,j.b)(({})=>{const z=structuredClone(C),H=C.findIndex(oe=>oe.id===F);z.splice(H,1)}))))}static#e=this.\u0275fac=function(C){return new(C||I)(E.LFG(S._M),E.LFG(P.ux),E.LFG(L.yh))};static#t=this.\u0275prov=E.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})()}}]);