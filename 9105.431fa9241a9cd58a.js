"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9105],{97801:(Q,A,s)=>{s.d(A,{NB:()=>y,RW:()=>_,xQ:()=>w});var R=s(58504),x=s(26306),m=s(19212),g=s(48851),h=s(64190);let _=(()=>{class d{constructor(a,p){this._rolesService=a,this._router=p}resolve(a,p){return this._rolesService.findAllRoles().pipe((0,x.K)(Z=>this._router.navigateByUrl("/dashboard")))}static#e=this.\u0275fac=function(p){return new(p||d)(m.LFG(g.N),m.LFG(h.F0))};static#t=this.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})(),y=(()=>{class d{constructor(a,p){this._rolesService=a,this._router=p}resolve(a,p){const Z=a.params.roleId;return"new"===Z?null:this._rolesService.findRoleById(Z).pipe((0,x.K)(U=>{const E=p.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(E),(0,R._)(U)}))}static#e=this.\u0275fac=function(p){return new(p||d)(m.LFG(g.N),m.LFG(h.F0))};static#t=this.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})(),w=(()=>{class d{constructor(a,p){this._rolesService=a,this._router=p}resolve(a,p){return this._rolesService.findAllActiveRoles().pipe((0,x.K)(Z=>this._router.navigateByUrl("/dashboard")))}static#e=this.\u0275fac=function(p){return new(p||d)(m.LFG(g.N),m.LFG(h.F0))};static#t=this.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},89105:(Q,A,s)=>{s.r(A),s.d(A,{default:()=>Ue});var R=s(97801),x=s(15861),m=s(96814),g=s(32296),h=s(64170),_=s(30617),y=s(24516),w=s(21476),d=s(82599),k=s(13566),a=s(56223),p=s(64190),Z=s(78645),U=s(22096),E=s(63019),f=s(59773),$=s(83620),u=s(94664),l=s(37398),F=s(90621),D=s(94748),J=s(83604),T=s(60129),I=s(42090);class K{clear(){this.id=null,this.name="",this.permissions=[],this.isCoreRole=!1,this.checked=!1,this.active=!1}}var e=s(19212),z=s(56278),B=s(48851),O=s(22939),Y=s(84221);const j=()=>["new"];function H(o,c){if(1&o&&(e.TgZ(0,"div",18)(1,"mat-form-field",19),e._UZ(2,"mat-icon",20)(3,"input",21),e.qZA(),e.TgZ(4,"button",22),e._UZ(5,"mat-icon",23),e.TgZ(6,"span",24),e._uU(7,"Nuevo"),e.qZA()()()),2&o){const t=e.oxw();e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",t.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.xp6(),e.Q6J("routerLink",e.DdM(7,j)),e.xp6(),e.Q6J("svgIcon","mat_solid:add")}}const V=(o,c)=>c.id;function W(o,c){1&o&&e._UZ(0,"div")}function X(o,c){1&o&&(e.TgZ(0,"span"),e._uU(1,"Activo"),e.qZA())}function ee(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"mat-slide-toggle",40),e.NdJ("change",function(n){e.CHM(t);const r=e.oxw(2),v=r.$implicit,b=r.$index,P=e.oxw(2);return e.KtG(P.updateRoleStatus(n,v,b))}),e.qZA()}if(2&o){const t=e.oxw(2).$implicit;e.Q6J("checked",t.active)("color","primary")}}function te(o,c){1&o&&e._UZ(0,"mat-spinner",39),2&o&&e.Q6J("diameter",20)("color","primary")}function oe(o,c){if(1&o&&(e.TgZ(0,"div",37),e.YNc(1,ee,1,2,"mat-slide-toggle",38)(2,te,1,2,"mat-spinner",39),e.qZA()),2&o){const t=e.oxw().$index,i=e.oxw(2);e.xp6(),e.um2(1,i.isLoading&&i.selectedSlide===t?-1:1),e.xp6(),e.um2(2,i.isLoading&&i.selectedSlide===t?2:-1)}}function ie(o,c){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",44),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2).$implicit,r=e.oxw(2);return e.KtG(r.deleteRole(n))}),e._UZ(2,"mat-icon",43),e.qZA(),e.BQk()}2&o&&(e.xp6(2),e.Q6J("svgIcon","mat_solid:delete"))}const ne=o=>[o],S=()=>["Super Administrador"];function se(o,c){if(1&o&&(e.TgZ(0,"div",41)(1,"button",42),e._UZ(2,"mat-icon",43),e.qZA(),e.YNc(3,ie,3,1,"ng-container",30),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(),e.Q6J("routerLink",e.VKq(3,ne,t.id)),e.xp6(),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(),e.Q6J("ngxPermissionsExcept",e.DdM(5,S))}}function re(o,c){if(1&o&&(e.TgZ(0,"div",32)(1,"div",33),e._uU(2),e.qZA(),e.TgZ(3,"div",34),e._uU(4),e.qZA(),e.YNc(5,oe,3,2,"div",35)(6,se,4,6,"div",36),e.qZA()),2&o){const t=c.$implicit;e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",t.description," "),e.xp6(),e.Q6J("ngxPermissionsExcept",e.DdM(4,S)),e.xp6(),e.um2(6,t.isCoreRole?-1:6)}}function ae(o,c){if(1&o&&(e.TgZ(0,"div",25)(1,"div",26)(2,"div",27),e._uU(3," Nombre "),e.qZA(),e.TgZ(4,"div"),e._uU(5,"Descripci\xf3n"),e.qZA(),e.TgZ(6,"div",28),e.YNc(7,W,1,0,"div",29)(8,X,2,0,"span",30),e.qZA(),e.TgZ(9,"div",31),e._uU(10,"Acci\xf3n"),e.qZA()(),e.SjG(11,re,7,5,"div",45,V),e.qZA()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","name"),e.xp6(4),e.Q6J("mat-sort-header","active"),e.xp6(),e.Q6J("ngxPermissionsOnly",e.DdM(4,S)),e.xp6(),e.Q6J("ngxPermissionsExcept",e.DdM(5,S)),e.xp6(3),e.wJu(t.roles)}}function le(o,c){1&o&&(e.TgZ(0,"div",46),e._uU(1," \xa1A\xfan ha creado ning\xfan rol a\xfan! "),e.qZA())}const ce=o=>({"pointer-events-none":o}),me=()=>[10,25,50,100];function de(o,c){if(1&o&&e._UZ(0,"mat-paginator",47),2&o){const t=e.oxw();e.Q6J("ngClass",e.VKq(6,ce,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(8,me))("showFirstLastButtons",!0)}}let pe=(()=>{class o{constructor(t,i,n,r,v){this._changeDetectorRef=t,this._fuseConfirmationService=i,this._roleService=n,this._snackBar=r,this.store=v,this.emptyRole=new K,this.isLoading=!1,this.selectedSlide=null,this.searchInputControl=new a.NI,this._unsubscribeAll=new Z.x,this.emptyRole.clear()}ngOnInit(){this.store.select(T.g$).pipe((0,f.R)(this._unsubscribeAll)).subscribe(t=>{this.roles=t,this._changeDetectorRef.markForCheck()}),this.store.select(J.B).pipe((0,f.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,f.R)(this._unsubscribeAll),(0,$.b)(300),(0,u.w)(t=>t?(this.isLoading=!0,this._roleService.findAllRoles(0,10,"name","asc",t)):(0,U.of)([])),(0,l.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this.waitForPaginatorLoad().then(()=>{this._sort&&this._paginator&&(this._sort.sort({id:"name",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,f.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,E.T)(this._sort.sortChange,this._paginator.page).pipe((0,u.w)(()=>(this.isLoading=!0,this._roleService.findAllRoles(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,l.U)(()=>{this.isLoading=!1})).subscribe())})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}updateRoleStatus(t,i,n){this.isLoading=!0,this.selectedSlide=n,this._roleService.updateRoleStatus({id:i.id,active:t.checked}).pipe((0,f.R)(this._unsubscribeAll)).subscribe(r=>{r&&(this._snackBar.openFromComponent(I.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isLoading=!1,this.selectedSlide=-1,this._changeDetectorRef.markForCheck())})}deleteRole(t){this._fuseConfirmationService.open({title:"Eliminar rol",message:`\xbfEst\xe1 seguro que desea eliminar el m\xf3dulo ${t.name}? Perder\xe1 el acceso a todos los datos asociados al mismo.`,icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this._roleService.removeRole(t.id,this.pagination.page,this.pagination.size,"name","desc").pipe((0,f.R)(this._unsubscribeAll)).subscribe(({data:r})=>{r&&this._snackBar.openFromComponent(I.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.paginatedRemoveRole.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}trackByFn(t,i){return t||i.id}waitForPaginatorLoad(){var t=this;return(0,x.Z)(function*(){for(;!t._paginator||void 0===t._paginator;)yield new Promise(i=>{setTimeout(i,200)});return t._paginator})()}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(e.sBO),e.Y36(z.R),e.Y36(B.N),e.Y36(O.ux),e.Y36(Y.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["ath-roles"]],viewQuery:function(i,n){if(1&i&&(e.Gf(w.NW,5),e.Gf(k.YE,5)),2&i){let r;e.iGM(r=e.CRH())&&(n._paginator=r.first),e.iGM(r=e.CRH())&&(n._sort=r.first)}},standalone:!0,features:[e.jDz],decls:27,vars:8,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","overflow-x-auto","overflow-y-auto","bg-card","dark:bg-transparent","lg:overflow-x-hidden"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"whitespace-nowrap","text-primary-500",3,"routerLink"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight"],["class","flex flex-wrap items-center mt-2 sm:mt-0 shrink-0 md:ml-4",4,"ngxPermissionsExcept"],[1,"flex","flex-col","flex-auto"],[1,"flex","flex-col","justify-between","flex-auto"],["class","grid"],["class","z-10 border-b sm:inset-x-0 sm:bottom-0 sm:border-t sm:border-b-0 bg-gray-50 dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"flex","flex-wrap","items-center","mt-2","sm:mt-0","shrink-0","md:ml-4"],[1,"mt-4","mr-4","sm:mt-0","fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"mt-4","text-white","sm:mt-0","bg-gradient-to-r","from-primary-500","to-primary-600","hover:to-primary-900","hover:shadow-lg",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","roles-table","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,"flex","items-center","justify-center",3,"mat-sort-header"],[4,"ngxPermissionsOnly"],[4,"ngxPermissionsExcept"],[1,"pr-6","text-right"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","roles-table","md:px-8"],[1,"flex","truncate"],[1,"truncate"],["class","flex justify-center mr-4 text-center",4,"ngxPermissionsExcept"],["class","flex flex-row justify-end gap-2"],[1,"flex","justify-center","mr-4","text-center"],[3,"checked","color"],[3,"diameter","color"],[3,"checked","color","change"],[1,"flex","flex-row","justify-end","gap-2"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["class","grid items-center gap-4 px-6 py-3 border-b roles-table md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"z-10","border-b","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div")(6,"a",4),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",5),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Roles"),e.qZA()()(),e.TgZ(12,"div",8)(13,"a",9),e._UZ(14,"mat-icon",6),e.TgZ(15,"span",10),e._uU(16,"Regresar"),e.qZA()()()(),e.TgZ(17,"div",11)(18,"div",12),e._uU(19," Gesti\xf3n de Roles "),e.qZA()()(),e.YNc(20,H,8,8,"div",13),e.qZA(),e.TgZ(21,"div",14)(22,"div",15),e.YNc(23,ae,13,6,"div",16)(24,le,2,0),e.ynx(25),e.YNc(26,de,1,9,"mat-paginator",17),e.BQk(),e.qZA()()()),2&i&&(e.xp6(6),e.Q6J("routerLink","/dashboard"),e.xp6(3),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("routerLink","./.."),e.xp6(),e.Q6J("svgIcon","mat_solid:chevron_left"),e.xp6(6),e.Q6J("ngxPermissionsExcept",e.DdM(7,S)),e.xp6(3),e.um2(23,n.roles.length>0?23:24),e.xp6(3),e.um2(26,n.pagination.length>0?26:-1))},dependencies:[g.ot,g.lW,h.lN,h.KE,h.qo,_.Ps,_.Hw,y.c,y.Nt,w.TU,w.NW,d.rP,d.Rr,k.JX,k.YE,k.nU,m.mk,F.VI,F.gE,a.UX,a.Fj,a.JJ,a.oH,p.rH],encapsulation:2,data:{animation:D.L},changeDetection:0})}return o})();var ue=s(27921),he=s(99397),ge=s(53374),M=s(3305),G=s(92596),q=s(75986),fe=s(95407);function xe(o,c){1&o&&(e.TgZ(0,"a",42),e._uU(1,"Nuevo"),e.qZA())}function _e(o,c){if(1&o&&(e.TgZ(0,"a",42),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(),e.Oqu(t.selectedRole.name)}}function ve(o,c){1&o&&(e.TgZ(0,"div",43),e._uU(1," Nuevo Rol "),e.qZA())}function be(o,c){if(1&o&&(e.TgZ(0,"div",43),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(),e.hij(" Informaci\xf3n de ",t.selectedRole.name," ")}}const L=o=>({"cursor-not-allowed":o});function Re(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.createRole())}),e._UZ(1,"mat-icon",45),e.TgZ(2,"span",46),e._uU(3,"Guardar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.roleForm.invalid)("ngClass",e.VKq(3,L,t.roleForm.invalid)),e.xp6(),e.Q6J("svgIcon","mat_solid:save")}}function Ce(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.updateRole())}),e._UZ(1,"mat-icon",45),e.TgZ(2,"span",46),e._uU(3,"Actualizar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.roleForm.invalid)("ngClass",e.VKq(3,L,t.roleForm.invalid)),e.xp6(),e.Q6J("svgIcon","mat_solid:refresh")}}function ye(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El nombre del rol es obligatorio. "),e.qZA())}function Ze(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El nombre rol debe contener entre 3 y 255 caracteres. "),e.qZA())}function Ae(o,c){1&o&&(e.TgZ(0,"span"),e._uU(1,"Leer"),e.qZA())}function Te(o,c){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(),e.Oqu(t.name)}}function Ie(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"li")(1,"mat-checkbox",54),e.NdJ("ngModelChange",function(n){const v=e.CHM(t).$implicit;return e.KtG(v.checked=n)})("ngModelChange",function(){e.CHM(t);const n=e.oxw().$index,r=e.oxw();return e.KtG(r.updateAsComplete(n))}),e.YNc(2,Ae,2,0,"span")(3,Te,2,1,"span"),e.qZA()()}if(2&o){const t=c.$implicit,i=e.oxw(),n=i.$index,r=i.$implicit,v=e.MAs(3),b=e.oxw();e.xp6(),e.Q6J("ngModel",t.checked)("disabled",(v.indeterminate&&b.someCompleteExceptRead(n)||r.checked)&&t.id===t.parentId),e.xp6(),e.um2(2,t.id===t.parentId?2:-1),e.xp6(),e.um2(3,t.id!==t.parentId?3:-1)}}function we(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"section",47)(1,"span",48)(2,"mat-checkbox",49,50),e.NdJ("change",function(n){const v=e.CHM(t).$index,b=e.oxw();return e.KtG(b.setAll(n.checked,v))}),e.TgZ(4,"span",51),e._uU(5),e.qZA()()(),e.TgZ(6,"span",52)(7,"ul",53),e.SjG(8,Ie,4,4,"li",null,e.x6l),e.qZA()()()}if(2&o){const t=c.$implicit,i=c.$index,n=e.oxw();e.xp6(),e.Q6J("matTooltip",t.name),e.xp6(),e.Q6J("checked",t.checked)("indeterminate",n.someComplete(i)),e.xp6(3),e.hij(" ",t.name,""),e.xp6(3),e.wJu(t.permissions)}}function ke(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.createRole())}),e._UZ(1,"mat-icon",45),e.TgZ(2,"span",46),e._uU(3,"Guardar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.roleForm.invalid)("ngClass",e.VKq(3,L,t.roleForm.invalid)),e.xp6(),e.Q6J("svgIcon","mat_solid:save")}}function Fe(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.updateRole())}),e._UZ(1,"mat-icon",45),e.TgZ(2,"span",46),e._uU(3,"Actualizar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.roleForm.invalid)("ngClass",e.VKq(3,L,t.roleForm.invalid)),e.xp6(),e.Q6J("svgIcon","mat_solid:refresh")}}const Ue=[{path:"",component:pe,resolve:{roles:R.RW}},{path:":roleId",component:(()=>{class o{constructor(t,i,n,r,v,b,P,C){this._activatedRoute=t,this._changeDetectorRef=i,this._formBuilder=n,this._fuseConfirmationService=r,this._router=v,this._snackBar=b,this._roleService=P,this.store=C,this.searchInputControl=new a.NI(null),this.windowsMode="new",this._unsubscribeAll=new Z.x}ngOnInit(){this.store.select(ge.rk).pipe((0,f.R)(this._unsubscribeAll)).subscribe(t=>{this.authUser=t}),this.store.select(T.oM).pipe((0,f.R)(this._unsubscribeAll)).subscribe(t=>{this.selectedRole=t}),this.roleForm=this._formBuilder.group({id:[""],name:["",[a.kI.required,a.kI.minLength(3),a.kI.maxLength(255)]],description:["",[a.kI.maxLength(1e3)]]}),this._activatedRoute.params.pipe((0,f.R)(this._unsubscribeAll)).subscribe(({roleId:t})=>{"new"!==t&&(this.windowsMode="edit"),this._fillRoleData()}),this.searchInputControl.valueChanges.pipe((0,f.R)(this._unsubscribeAll),(0,$.b)(100),(0,ue.O)(null),(0,he.b)(t=>{this.filteredPermissions=null!==t?this.permissions.filter(i=>i.name.toLowerCase().includes(t.toLowerCase())):this.permissions,this._changeDetectorRef.markForCheck()})).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createRole(){const t=this.buildRole();delete t.id,this._fuseConfirmationService.open({title:"Crear Rol",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this._roleService.createRole(t).pipe((0,f.R)(this._unsubscribeAll)).subscribe(r=>{r&&(this._snackBar.openFromComponent(I.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/settings/roles"))},r=>{console.log(r)})})}updateRole(){const t=this.buildRole();this._fuseConfirmationService.open({title:"Actualizar Rol",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this._roleService.updateRole(t).pipe((0,f.R)(this._unsubscribeAll)).subscribe(r=>{r&&(this._snackBar.openFromComponent(I.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.message,title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/settings/roles"))},r=>{console.log(r)})})}updateAsComplete(t){if(this.filteredPermissions[t].checked=null!=this.filteredPermissions[t].permissions&&this.filteredPermissions[t].permissions.every(i=>i.checked),this.someComplete(t)){const i=this.filteredPermissions[t].permissions.findIndex(n=>n.id===n.parentId);-1!==i&&(this.filteredPermissions[t].permissions[i].checked=!0)}}someComplete(t){return null!=this.filteredPermissions[t].permissions&&this.filteredPermissions[t].permissions.filter(i=>i.checked).length>0&&!this.filteredPermissions[t].checked}someCompleteExceptRead(t){return null!=this.filteredPermissions[t].permissions&&this.filteredPermissions[t].permissions.filter(i=>i.checked&&i.id!==i.parentId).length>0&&!this.filteredPermissions[t].checked}setAll(t,i){this.filteredPermissions[i].checked=t,null!=this.filteredPermissions[i].permissions&&this.filteredPermissions[i].permissions.forEach(n=>n.checked=t)}trackByFn(t,i){return i.id||t}_fillRoleData(){"new"!==this.windowsMode&&this.roleForm.patchValue(this.selectedRole),this._setRolePermissionsData(),this._changeDetectorRef.markForCheck()}_setRolePermissionsData(){const t=this.authUser.role.permissions.filter(i=>i.id===i.parentId).reduce((i,{id:n,parentId:r,name:v})=>{if(!i.some(b=>b.parentId===r)){let b=this.selectedRole.permissionsId;"new"===this.windowsMode&&(b=[]);const P=this.authUser.role.permissions.filter(C=>C.parentId===r).map(C=>({...C,checked:b.some(N=>N===C.id)})).sort((C,N)=>C.id-N.id);i.push({id:n,parentId:r,name:v,checked:P.every(C=>C.checked),permissions:P})}return i},[]);this.permissions=t}buildRole(){const t=this.roleForm.getRawValue();let i=[];return this.filteredPermissions.forEach(n=>{i=i.concat(n.permissions)}),t.permissionsId=i.filter(n=>n.checked).map(n=>n.id),t}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(p.gz),e.Y36(e.sBO),e.Y36(a.qu),e.Y36(z.R),e.Y36(p.F0),e.Y36(O.ux),e.Y36(B.N),e.Y36(Y.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["role-detail"]],standalone:!0,features:[e.jDz],decls:71,vars:40,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],["routerLink","/dashboard",1,"ml-1","text-primary-500","hover:underline"],[1,"icon-size-5","text-secondary",3,"svgIcon"],["routerLink","/settings/roles",1,"ml-1","text-primary-500","hover:underline"],["class","ml-1 text-primary-500"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"mt-2"],["class","mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-3xl"],[1,"flex","items-center","flex-shrink-0","mt-6","sm:mt-0","sm:ml-4"],["class","ml-4 text-white bg-primary-500 hover:bg-primary-700 hover:shadow-lg","mat-raised-button","",3,"disabled","ngClass"],[1,"flex-auto","p-4","sm:p-6"],[1,"flex","flex-col","flex-auto","min-w-0"],["multi","",1,"w-full","bg-transparent"],[2,"border-top-left-radius","0.5rem !important","border-top-right-radius","0.5rem !important",3,"expanded"],[3,"collapsedHeight"],[1,"flex","items-center"],[1,"text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"grid","w-full","px-2","py-6","border-t-2","sm:py-8","sm:px-4","gap-y-3","gap-x-6","sm:grid-cols-3",3,"formGroup","autocomplete"],[1,"sm:col-span-1"],[1,"w-full"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","","required","",3,"type","formControlName","minlength","maxlength","placeholder"],[1,"w-full","sm:col-span-2","fuse-mat-textarea"],["matInput","","matTextareaAutosize","","matTextareaAutosize","",3,"formControlName","rows","spellcheck","maxlength"],["desc",""],[1,"text-right"],["mPermissionPanel",""],[1,"flex","items-center","justify-evenly"],[1,"hidden","text-2xl","font-extrabold","leading-tight","tracking-tight","sm:block","sm:text-2xl"],[1,"sm:ml-10","fuse-mat-dense","fuse-mat-bold","fuse-mat-rounded","min-w-50",3,"subscriptSizing","click"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","","placeholder","Buscar subm\xf3dulos",3,"formControl","autocomplete"],[1,"w-full","py-6","border-t-2","sm:py-10","sm:px-4"],[1,"flex","flex-wrap","justify-start","gap-y-1","gap-x-1","sm:gap-4"],[1,"flex","flex-col","flex-wrap","justify-end","px-6","pb-10","sm:flex-row","flex-0","sm:items-center","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex","items-center","flex-shrink-0","mt-6","text-right","sm:mt-0","sm:ml-4"],[1,"ml-1","text-primary-500"],[1,"mt-2","text-3xl","font-extrabold","leading-tight","tracking-tight","sm:text-3xl"],["mat-raised-button","",1,"ml-4","text-white","bg-primary-500","hover:bg-primary-700","hover:shadow-lg",3,"disabled","ngClass","click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"sm:py-5","sm:px-4","py-3","px-1.5","w-[49%]","sm:w-52","shadow-sm","truncate","bg-gray-100","dark:dark","rounded-md"],[1,"block","w-full","truncate",3,"matTooltip"],["color","primary",1,"sm:mx-2",3,"checked","indeterminate","change"],["checkP",""],[1,"font-bold","whitespace-normal","sm:line-clamp-1"],[1,""],[1,"ml-3","list-none","sm:ml-8"],["color","primary",3,"ngModel","disabled","ngModelChange"],["class","sm:py-5 sm:px-4 py-3 px-1.5 w-[49%] sm:w-52 shadow-sm truncate bg-gray-100 dark:dark rounded-md"]],template:function(i,n){if(1&i){const r=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Roles"),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"mat-icon",6),e.YNc(14,xe,2,0,"a",8)(15,_e,2,1,"a",8),e.qZA()(),e.TgZ(16,"div",9)(17,"a",10),e._UZ(18,"mat-icon",6),e.TgZ(19,"span",11),e._uU(20,"Regresar"),e.qZA()()()(),e.TgZ(21,"div",12),e.YNc(22,ve,2,0,"div",13)(23,be,2,1,"div",13),e.qZA()(),e.TgZ(24,"div",14),e.YNc(25,Re,4,5,"button",15)(26,Ce,4,5,"button",15),e.qZA()(),e.TgZ(27,"div",16)(28,"div",17)(29,"mat-accordion",18)(30,"mat-expansion-panel",19)(31,"mat-expansion-panel-header",20)(32,"mat-panel-title",21)(33,"div",22),e._uU(34," Informaci\xf3n General "),e.qZA()()(),e.TgZ(35,"form",23)(36,"div",24)(37,"mat-form-field",25)(38,"mat-label"),e._uU(39,"Nombre"),e.qZA(),e._UZ(40,"mat-icon",26)(41,"input",27),e.YNc(42,ye,2,0,"mat-error")(43,Ze,2,0,"mat-error"),e.qZA()(),e.TgZ(44,"mat-form-field",28)(45,"mat-label"),e._uU(46,"Descripci\xf3n"),e.qZA(),e._UZ(47,"mat-icon",26)(48,"textarea",29,30),e.TgZ(50,"mat-hint",31),e._uU(51),e.qZA()()()(),e.TgZ(52,"mat-expansion-panel",19,32)(54,"mat-expansion-panel-header",20)(55,"mat-panel-title",21)(56,"div",22)(57,"div",33)(58,"div",34),e._uU(59," Subm\xf3dulos y Permisos "),e.qZA(),e.TgZ(60,"mat-form-field",35),e.NdJ("click",function(){e.CHM(r);const b=e.MAs(53);return e.KtG(b.expanded=!1)}),e._UZ(61,"mat-icon",36)(62,"input",37),e.qZA()()()()(),e.TgZ(63,"div",38)(64,"div",39),e.SjG(65,we,10,4,"section",55,e.x6l),e.qZA()()()()()(),e.TgZ(67,"div",40)(68,"div",41),e.YNc(69,ke,4,5,"button",15)(70,Fe,4,5,"button",15),e.qZA()()()}if(2&i){const r=e.MAs(49);e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(),e.um2(14,"edit"!==n.windowsMode?14:-1),e.xp6(),e.um2(15,"edit"===n.windowsMode?15:-1),e.xp6(2),e.Q6J("routerLink","./.."),e.xp6(),e.Q6J("svgIcon","mat_solid:chevron_left"),e.xp6(4),e.um2(22,"edit"!==n.windowsMode?22:-1),e.xp6(),e.um2(23,"edit"===n.windowsMode?23:-1),e.xp6(2),e.um2(25,"new"===n.windowsMode?25:-1),e.xp6(),e.um2(26,"new"!==n.windowsMode?26:-1),e.xp6(4),e.Udp("border-bottom-left-radius","new"!==n.windowsMode?"0.5rem !important":""),e.Q6J("expanded",!0),e.xp6(),e.Q6J("collapsedHeight","56px"),e.xp6(4),e.Q6J("formGroup",n.roleForm)("autocomplete","off"),e.xp6(5),e.Q6J("svgIcon","mat_solid:notes"),e.xp6(),e.Q6J("type","text")("formControlName","name")("minlength",3)("maxlength",255)("placeholder","Nombre del rol"),e.xp6(),e.um2(42,n.roleForm.get("name").hasError("required")?42:-1),e.xp6(),e.um2(43,n.roleForm.get("name").hasError("maxlength")||n.roleForm.get("name").hasError("minlength")?43:-1),e.xp6(4),e.Q6J("svgIcon","mat_solid:notes"),e.xp6(),e.Q6J("formControlName","description")("rows",3)("spellcheck",!1)("maxlength",1e3),e.xp6(3),e.hij("Total de caracteres ",r.value.length," / 1000"),e.xp6(),e.Udp("border-bottom-left-radius","new"!==n.windowsMode?"0.5rem !important":""),e.Q6J("expanded",!0),e.xp6(2),e.Q6J("collapsedHeight","56px"),e.xp6(6),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",n.searchInputControl)("autocomplete","off"),e.xp6(3),e.wJu(n.filteredPermissions),e.xp6(4),e.um2(69,"new"===n.windowsMode?69:-1),e.xp6(),e.um2(70,"new"!==n.windowsMode?70:-1)}},dependencies:[a.u5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.wO,a.nD,a.On,g.ot,g.lW,q.p9,q.oG,M.To,M.pp,M.ib,M.yz,M.yK,h.lN,h.KE,h.hX,h.bx,h.TO,h.qo,_.Ps,_.Hw,y.c,y.Nt,G.AV,G.gM,fe.PQ,m.mk,a.UX,a.oH,a.sg,a.u,p.rH],encapsulation:2,changeDetection:0})}return o})(),resolve:{role:R.NB}}]},60129:(Q,A,s)=>{s.d(A,{g$:()=>g,oM:()=>m});var R=s(84221);const x=h=>h.roles,m=(0,R.P1)(x,h=>h.role),g=(0,R.P1)(x,h=>h.roles)},48851:(Q,A,s)=>{s.d(A,{N:()=>E});var R=s(19212),x=s(37398),m=s(99397),g=s(50967),h=s(84221),_=s(32193),y=s(97214);const w=g.Ps`
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
`,d=g.Ps`
    query FindAllActiveRoles {
        findAllActiveRoles {
            id
            name
            description
            isCoreRole
        }
    }
`,k=g.Ps`
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
`,a=g.Ps`
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
`,p=g.Ps`
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
`,Z=g.Ps`
    mutation UpdateRoleStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRoleStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,U=g.Ps`
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
`;let E=(()=>{class f{constructor(){this.apolloProvider=(0,R.f3M)(g._M),this.store=(0,R.f3M)(h.yh),this._apollo=this.apolloProvider.use("BALANC")}createRole(u){return this._apollo.mutate({mutation:a,variables:{createRoleInput:u},errorPolicy:"all"}).pipe((0,x.U)(({data:l})=>l?l.createRole:null),(0,m.b)(l=>{l&&this.store.dispatch((0,_.fA)({role:l.role}))}))}findAllRoles(u=0,l=500,F="createdAt",D="asc",J=""){return this._apollo.query({query:w,errorPolicy:"all",variables:{page:u,size:l,sort:F,order:D,search:J}}).pipe((0,m.b)(({data:T})=>{T&&(this.store.dispatch((0,y.Jr)({pagination:T.paginatedRoles.pagination})),this.store.dispatch((0,_.Lk)({roles:T.paginatedRoles.items})))}))}findAllActiveRoles(){return this._apollo.query({query:d,errorPolicy:"all"}).pipe((0,x.U)(({data:u})=>u?u.findAllActiveRoles:null),(0,m.b)(u=>{u&&this.store.dispatch((0,_.Lk)({roles:u}))}))}findRoleById(u){return this._apollo.query({query:k,variables:{roleId:u},errorPolicy:"all"}).pipe((0,x.U)(({data:l})=>l?l.findRoleById:null),(0,m.b)(l=>{l&&this.store.dispatch((0,_.gD)({role:l.role}))}))}updateRole(u){return this._apollo.mutate({mutation:p,variables:{updateRoleInput:u},errorPolicy:"all"}).pipe((0,x.U)(({data:l})=>l?l.updateRole:null),(0,m.b)(l=>{l&&this.store.dispatch((0,_.ul)({role:l.role}))}))}updateRoleStatus(u){return this._apollo.mutate({mutation:Z,variables:{updateEntityStatusInput:u},errorPolicy:"all"}).pipe((0,x.U)(({data:l})=>l?l.updateRoleStatus:null),(0,m.b)(l=>{l&&this.store.dispatch((0,_.cq)(u))}))}removeRole(u,l=0,F=500,D="name",J="desc",T=null){return this._apollo.mutate({mutation:U,variables:{removeRoleById:u,page:l,size:F,sort:D,order:J,search:T},errorPolicy:"all"}).pipe((0,m.b)(({data:I})=>{I&&(this.store.dispatch((0,y.Jr)({pagination:I.paginatedRemoveRole.pagination})),this.store.dispatch((0,_.Lk)({roles:I.paginatedRemoveRole.items})))}))}static#e=this.\u0275fac=function(l){return new(l||f)};static#t=this.\u0275prov=R.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})()}}]);