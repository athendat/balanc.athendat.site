"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[1152],{51973:(v,p,i)=>{i.d(p,{a:()=>O});var t=i(54438),n=i(89417),u=i(75351),C=i(95416),_=i(88834),h=i(59042),g=i(32102),b=i(99213),E=i(30450),D=i(21413),l=i(56977),x=i(46601),d=i(94794),M=i(36596),B=i(98049);function F(a,m){1&a&&(t.j41(0,"h2",3),t.EFF(1," Agregar Marca "),t.k0s())}function k(a,m){1&a&&(t.j41(0,"h2",3),t.EFF(1," Editar Marca "),t.k0s())}function R(a,m){if(1&a){const e=t.RV6();t.j41(0,"div")(1,"input",21,0),t.bIt("change",function(o){t.eBV(e);const r=t.XpG();return t.Njj(r.openCropperDialog(o))}),t.k0s(),t.j41(3,"label",22),t.nrm(4,"mat-icon",23),t.k0s()()}2&a&&(t.R7$(),t.Y8G("multiple",!1)("accept","image/png, image/webp, image/jpeg, image/png"),t.R7$(3),t.Y8G("svgIcon","mat_solid:photo_camera"))}function I(a,m){if(1&a){const e=t.RV6();t.j41(0,"div")(1,"button",24),t.bIt("click",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.removeImage())}),t.nrm(2,"mat-icon",25),t.k0s()()}2&a&&(t.R7$(2),t.Y8G("svgIcon","mat_solid:delete"))}function P(a,m){if(1&a&&t.nrm(0,"img",17),2&a){const e=t.XpG();t.Y8G("src",e.brandForm.get("logo").value,t.B4B)}}function j(a,m){if(1&a){const e=t.RV6();t.j41(0,"button",26),t.bIt("click",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.updateBrand())}),t.EFF(1," Actualizar "),t.k0s()}if(2&a){const e=t.XpG();t.Y8G("color","primary")("disabled",e.brandForm.invalid)}}function L(a,m){if(1&a){const e=t.RV6();t.j41(0,"button",26),t.bIt("click",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.createBrand())}),t.EFF(1," Agregar "),t.k0s()}if(2&a){const e=t.XpG();t.Y8G("color","primary")("disabled",e.brandForm.invalid)}}let O=(()=>{class a{#a;#e;#n;#r;#s;#o;#i;#t;constructor(e){this.data=e,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this.#a=(0,t.WQX)(M.m),this.#e=(0,t.WQX)(t.gRc),this.#n=(0,t.WQX)(u.CP),this.#r=(0,t.WQX)(n.ok),this.#s=(0,t.WQX)(x.G),this.#o=(0,t.WQX)(B.M),this.#i=(0,t.WQX)(C.UG),this.#t=new D.B,this.dialogMode=e.dialogMode,this.brand=e.brand}ngOnInit(){this.brandForm=this.#r.group({id:[null],name:[null,[n.k0.required,n.k0.minLength(3),n.k0.maxLength(255)]],description:[null,[n.k0.minLength(3),n.k0.maxLength(255)]],active:[],logo:[null]}),"edit"===this.dialogMode&&this.brandForm.patchValue(this.brand)}ngOnDestroy(){this.#t.next(null),this.#t.complete()}closeDialog(){this.#n.close()}createBrand(){const e=this.brandForm.getRawValue();delete e.id,this.#s.open({title:"Crear Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,l.Q)(this.#t)).subscribe(o=>{"confirmed"===o&&this.#a.createBrand(e).pipe((0,l.Q)(this.#t)).subscribe(({data:r})=>{r&&this.#i.openFromComponent(d.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.createBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#e.markForCheck(),this.#n.close()})})}updateBrand(){const e=this.brandForm.getRawValue();delete e.slug,this.#s.open({title:"Actualizar Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(o=>{"confirmed"===o&&this.#a.updateBrand(e).pipe((0,l.Q)(this.#t)).subscribe(({data:r})=>{r&&(this.#i.openFromComponent(d.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#e.markForCheck(),this.#n.close())}),this.#e.markForCheck()})}openCropperDialog(e){if(0===e.target.files.length)return;const s=e.target.files[0];this.#o.validMaxMBSize(s,2)&&this.#o.validImageType(s)&&this.#o.openCropperDialog(e,!1).pipe((0,l.Q)(this.#t)).subscribe(o=>{o&&this.#o.uploadImage("List",s).pipe((0,l.Q)(this.#t)).subscribe(r=>{if(this.brandForm.get("logo").setValue(r.imageUrl),this.brand.logo=r.imageUrl,"edit"===this.dialogMode){const c=this.brand;delete c.slug,this.#a.updateBrand(c).pipe((0,l.Q)(this.#t)).subscribe(({data:f})=>{f&&(this.#i.openFromComponent(d.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:f.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#e.markForCheck())})}else this.#e.markForCheck()},r=>{console.warn(r)})})}removeImage(){const e=this.brandForm.get("logo").value;this.#s.open({title:"Cuidado",message:"\xbfEst\xe1 seguro que desea eliminar la imagen?",icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,l.Q)(this.#t)).subscribe(o=>{"confirmed"===o&&this.#o.removeImage(e).pipe((0,l.Q)(this.#t)).subscribe(r=>{if(this.brandForm.get("logo").setValue(null),this.brand.logo=null,"edit"===this.dialogMode){const c=this.brand;delete c.slug,this.#a.updateBrand(c).pipe((0,l.Q)(this.#t)).subscribe(f=>{this.#i.openFromComponent(d.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#e.markForCheck()})}})})}static#l=this.\u0275fac=function(s){return new(s||a)(t.rXU(u.Vh))};static#m=this.\u0275cmp=t.VBU({type:a,selectors:[["lists-brand-dialog"]],standalone:!0,features:[t.aNF],decls:35,vars:16,consts:[["thumbnailFileInput",""],[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"py-5"],[1,"w-full","fuse-mat-no-subscript"],["matInput","","type","text","required","","maxlength","250",3,"formControlName","placeholder"],["matInput","","matTextareaAutosize","","maxlength","250",3,"formControlName"],[1,"flex","flex-col","mt-4"],[1,"mb-4","font-medium"],[3,"formControlName","color"],[1,"relative","flex","items-center","justify-center","w-32","h-32","mt-8","overflow-hidden","bg-gray-200","rounded-md","dark:bg-gray-600","ring-4","ring-bg-card"],[1,"absolute","inset-0","z-20","flex","items-center","justify-center"],[1,"object-contain","w-full","h-full",3,"src"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black/10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled"],["id","thumbnail-file-input","type","file",1,"absolute","invisible","w-0","h-0","opacity-0","pointer-events-none",3,"change","multiple","accept"],["for","thumbnail-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-hover"],[1,"text-white",3,"svgIcon"],["mat-icon-button","",3,"click"],[1,"text-red-700",3,"svgIcon"],["mat-flat-button","",3,"click","color","disabled"]],template:function(s,o){1&s&&(t.j41(0,"div",1)(1,"div",2),t.DNE(2,F,2,0,"h2",3)(3,k,2,0,"h2",3),t.k0s(),t.j41(4,"div",4)(5,"div",5)(6,"div",6)(7,"form",7)(8,"div",8)(9,"mat-form-field",9)(10,"mat-label"),t.EFF(11,"Nombre"),t.k0s(),t.nrm(12,"input",10),t.k0s()(),t.j41(13,"div",8)(14,"mat-form-field",9)(15,"mat-label"),t.EFF(16,"Descripci\xf3n"),t.k0s(),t.j41(17,"textarea",11),t.EFF(18,"                    "),t.k0s()()(),t.j41(19,"div",12)(20,"span",13),t.EFF(21,"Estado"),t.k0s(),t.j41(22,"mat-slide-toggle",14),t.EFF(23),t.k0s()(),t.j41(24,"div",15)(25,"div",16),t.DNE(26,R,5,3,"div")(27,I,3,1,"div"),t.k0s(),t.DNE(28,P,1,1,"img",17),t.k0s()()()()(),t.j41(29,"div",18),t.qex(30),t.j41(31,"button",19),t.EFF(32," Cancelar "),t.k0s(),t.bVm(),t.DNE(33,j,2,2,"button",20)(34,L,2,2,"button",20),t.k0s()()),2&s&&(t.R7$(2),t.vxM(2,"add"===o.data.dialogMode?2:-1),t.R7$(),t.vxM(3,"edit"===o.data.dialogMode?3:-1),t.R7$(4),t.Y8G("formGroup",o.brandForm)("autocomplete","off"),t.R7$(5),t.Y8G("formControlName","name")("placeholder","Nombre del Marca"),t.R7$(5),t.Y8G("formControlName","description"),t.R7$(5),t.Y8G("formControlName","active")("color","primary"),t.R7$(),t.SpI(" ",!0===o.brandForm.get("active").value?"Activo":"Inactivo"," "),t.R7$(3),t.vxM(26,o.brandForm.get("logo").value?-1:26),t.R7$(),t.vxM(27,o.brandForm.get("logo").value?27:-1),t.R7$(),t.vxM(28,o.brandForm.get("logo").value?28:-1),t.R7$(3),t.Y8G("matDialogClose","cancelled"),t.R7$(2),t.vxM(33,"edit"===o.data.dialogMode?33:-1),t.R7$(),t.vxM(34,"add"===o.data.dialogMode?34:-1))},dependencies:[_.Hl,_.$z,_.iY,u.tx,g.RG,g.rl,g.nJ,h.fS,h.fg,n.X1,n.qT,n.me,n.BC,n.cb,n.YS,n.tU,n.j4,n.JD,E.sG,b.m_,b.An],encapsulation:2})}return a})()},57084:(v,p,i)=>{i.d(p,{m:()=>t});class t{}}}]);