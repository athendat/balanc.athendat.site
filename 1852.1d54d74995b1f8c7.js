"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[1852],{51973:(I,v,e)=>{e.d(v,{a:()=>m});var t=e(54438),o=e(89417),g=e(75351),_=e(95416),l=e(88834),C=e(59042),f=e(32102),D=e(99213),E=e(30450),B=e(21413),h=e(56977),x=e(46601),U=e(94794),y=e(36596),P=e(98049);function R(a,d){1&a&&(t.j41(0,"h2",3),t.EFF(1," Agregar Marca "),t.k0s())}function F(a,d){1&a&&(t.j41(0,"h2",3),t.EFF(1," Editar Marca "),t.k0s())}function b(a,d){if(1&a){const i=t.RV6();t.j41(0,"div")(1,"input",21,0),t.bIt("change",function(n){t.eBV(i);const u=t.XpG();return t.Njj(u.openCropperDialog(n))}),t.k0s(),t.j41(3,"label",22),t.nrm(4,"mat-icon",23),t.k0s()()}2&a&&(t.R7$(),t.Y8G("multiple",!1)("accept","image/png, image/webp, image/jpeg, image/png"),t.R7$(3),t.Y8G("svgIcon","mat_solid:photo_camera"))}function k(a,d){if(1&a){const i=t.RV6();t.j41(0,"div")(1,"button",24),t.bIt("click",function(){t.eBV(i);const n=t.XpG();return t.Njj(n.removeImage())}),t.nrm(2,"mat-icon",25),t.k0s()()}2&a&&(t.R7$(2),t.Y8G("svgIcon","mat_solid:delete"))}function r(a,d){if(1&a&&t.nrm(0,"img",17),2&a){const i=t.XpG();t.Y8G("src",i.brandForm.get("logo").value,t.B4B)}}function s(a,d){if(1&a){const i=t.RV6();t.j41(0,"button",26),t.bIt("click",function(){t.eBV(i);const n=t.XpG();return t.Njj(n.updateBrand())}),t.EFF(1," Actualizar "),t.k0s()}if(2&a){const i=t.XpG();t.Y8G("color","primary")("disabled",i.brandForm.invalid)}}function p(a,d){if(1&a){const i=t.RV6();t.j41(0,"button",26),t.bIt("click",function(){t.eBV(i);const n=t.XpG();return t.Njj(n.createBrand())}),t.EFF(1," Agregar "),t.k0s()}if(2&a){const i=t.XpG();t.Y8G("color","primary")("disabled",i.brandForm.invalid)}}let m=(()=>{class a{#o;#e;#n;#r;#s;#a;#i;#t;constructor(i){this.data=i,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this.#o=(0,t.WQX)(y.m),this.#e=(0,t.WQX)(t.gRc),this.#n=(0,t.WQX)(g.CP),this.#r=(0,t.WQX)(o.ok),this.#s=(0,t.WQX)(x.G),this.#a=(0,t.WQX)(P.M),this.#i=(0,t.WQX)(_.UG),this.#t=new B.B,this.dialogMode=i.dialogMode,this.brand=i.brand}ngOnInit(){this.brandForm=this.#r.group({id:[null],name:[null,[o.k0.required,o.k0.minLength(3),o.k0.maxLength(255)]],description:[null,[o.k0.minLength(3),o.k0.maxLength(255)]],active:[],logo:[null]}),"edit"===this.dialogMode&&this.brandForm.patchValue(this.brand)}ngOnDestroy(){this.#t.next(null),this.#t.complete()}closeDialog(){this.#n.close()}createBrand(){const i=this.brandForm.getRawValue();delete i.id,this.#s.open({title:"Crear Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,h.Q)(this.#t)).subscribe(n=>{"confirmed"===n&&this.#o.createBrand(i).pipe((0,h.Q)(this.#t)).subscribe(({data:u})=>{u&&this.#i.openFromComponent(U.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:u.createBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#e.markForCheck(),this.#n.close()})})}updateBrand(){const i=this.brandForm.getRawValue();delete i.slug,this.#s.open({title:"Actualizar Marca",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this.#o.updateBrand(i).pipe((0,h.Q)(this.#t)).subscribe(({data:u})=>{u&&(this.#i.openFromComponent(U.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:u.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#e.markForCheck(),this.#n.close())}),this.#e.markForCheck()})}openCropperDialog(i){if(0===i.target.files.length)return;const c=i.target.files[0];this.#a.validMaxMBSize(c,2)&&this.#a.validImageType(c)&&this.#a.openCropperDialog(i,!1).pipe((0,h.Q)(this.#t)).subscribe(n=>{n&&this.#a.uploadImage("List",c).pipe((0,h.Q)(this.#t)).subscribe(u=>{if(this.brandForm.get("logo").setValue(u.imageUrl),this.brand.logo=u.imageUrl,"edit"===this.dialogMode){const M=this.brand;delete M.slug,this.#o.updateBrand(M).pipe((0,h.Q)(this.#t)).subscribe(({data:O})=>{O&&(this.#i.openFromComponent(U.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:O.updateBrand.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#e.markForCheck())})}else this.#e.markForCheck()},u=>{console.warn(u)})})}removeImage(){const i=this.brandForm.get("logo").value;this.#s.open({title:"Cuidado",message:"\xbfEst\xe1 seguro que desea eliminar la imagen?",icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,h.Q)(this.#t)).subscribe(n=>{"confirmed"===n&&this.#a.removeImage(i).pipe((0,h.Q)(this.#t)).subscribe(u=>{if(this.brandForm.get("logo").setValue(null),this.brand.logo=null,"edit"===this.dialogMode){const M=this.brand;delete M.slug,this.#o.updateBrand(M).pipe((0,h.Q)(this.#t)).subscribe(O=>{this.#i.openFromComponent(U.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:u.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.#e.markForCheck()})}})})}static#l=this.\u0275fac=function(c){return new(c||a)(t.rXU(g.Vh))};static#m=this.\u0275cmp=t.VBU({type:a,selectors:[["lists-brand-dialog"]],standalone:!0,features:[t.aNF],decls:35,vars:16,consts:[["thumbnailFileInput",""],[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"py-5"],[1,"w-full","fuse-mat-no-subscript"],["matInput","","type","text","required","","maxlength","250",3,"formControlName","placeholder"],["matInput","","matTextareaAutosize","","maxlength","250",3,"formControlName"],[1,"flex","flex-col","mt-4"],[1,"mb-4","font-medium"],[3,"formControlName","color"],[1,"relative","flex","items-center","justify-center","w-32","h-32","mt-8","overflow-hidden","bg-gray-200","rounded-md","dark:bg-gray-600","ring-4","ring-bg-card"],[1,"absolute","inset-0","z-20","flex","items-center","justify-center"],[1,"object-contain","w-full","h-full",3,"src"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black/10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled"],["id","thumbnail-file-input","type","file",1,"absolute","invisible","w-0","h-0","opacity-0","pointer-events-none",3,"change","multiple","accept"],["for","thumbnail-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-hover"],[1,"text-white",3,"svgIcon"],["mat-icon-button","",3,"click"],[1,"text-red-700",3,"svgIcon"],["mat-flat-button","",3,"click","color","disabled"]],template:function(c,n){1&c&&(t.j41(0,"div",1)(1,"div",2),t.DNE(2,R,2,0,"h2",3)(3,F,2,0,"h2",3),t.k0s(),t.j41(4,"div",4)(5,"div",5)(6,"div",6)(7,"form",7)(8,"div",8)(9,"mat-form-field",9)(10,"mat-label"),t.EFF(11,"Nombre"),t.k0s(),t.nrm(12,"input",10),t.k0s()(),t.j41(13,"div",8)(14,"mat-form-field",9)(15,"mat-label"),t.EFF(16,"Descripci\xf3n"),t.k0s(),t.j41(17,"textarea",11),t.EFF(18,"                    "),t.k0s()()(),t.j41(19,"div",12)(20,"span",13),t.EFF(21,"Estado"),t.k0s(),t.j41(22,"mat-slide-toggle",14),t.EFF(23),t.k0s()(),t.j41(24,"div",15)(25,"div",16),t.DNE(26,b,5,3,"div")(27,k,3,1,"div"),t.k0s(),t.DNE(28,r,1,1,"img",17),t.k0s()()()()(),t.j41(29,"div",18),t.qex(30),t.j41(31,"button",19),t.EFF(32," Cancelar "),t.k0s(),t.bVm(),t.DNE(33,s,2,2,"button",20)(34,p,2,2,"button",20),t.k0s()()),2&c&&(t.R7$(2),t.vxM(2,"add"===n.data.dialogMode?2:-1),t.R7$(),t.vxM(3,"edit"===n.data.dialogMode?3:-1),t.R7$(4),t.Y8G("formGroup",n.brandForm)("autocomplete","off"),t.R7$(5),t.Y8G("formControlName","name")("placeholder","Nombre del Marca"),t.R7$(5),t.Y8G("formControlName","description"),t.R7$(5),t.Y8G("formControlName","active")("color","primary"),t.R7$(),t.SpI(" ",!0===n.brandForm.get("active").value?"Activo":"Inactivo"," "),t.R7$(3),t.vxM(26,n.brandForm.get("logo").value?-1:26),t.R7$(),t.vxM(27,n.brandForm.get("logo").value?27:-1),t.R7$(),t.vxM(28,n.brandForm.get("logo").value?28:-1),t.R7$(3),t.Y8G("matDialogClose","cancelled"),t.R7$(2),t.vxM(33,"edit"===n.data.dialogMode?33:-1),t.R7$(),t.vxM(34,"add"===n.data.dialogMode?34:-1))},dependencies:[l.Hl,l.$z,l.iY,g.tx,f.RG,f.rl,f.nJ,C.fS,C.fg,o.X1,o.qT,o.me,o.BC,o.cb,o.YS,o.tU,o.j4,o.JD,E.sG,D.m_,D.An],encapsulation:2})}return a})()},57084:(I,v,e)=>{e.d(v,{m:()=>t});class t{}},63425:(I,v,e)=>{e.d(v,{B:()=>_,n:()=>g});var t=e(54438),o=e(21326);const g=(l,C)=>(0,t.WQX)(o.N).getUoms(),_=(l,C)=>(0,t.WQX)(o.N).findActiveUoms()},17085:(I,v,e)=>{e.d(v,{Ns:()=>_});var t=e(59640);const o=l=>l.uoms,_=((0,t.Mz)(o,l=>l.uom),(0,t.Mz)(o,l=>l.uoms))},21326:(I,v,e)=>{e.d(v,{N:()=>F});var t=e(54438),o=e(53473),g=e(96697),_=e(25558),l=e(88141),C=e(59640),f=e(44e3),D=e(98216),E=e(17085);const B=o.J1`
    mutation CreateUom($createUomInput: CreateUomInput!) {
        createUom(createUomInput: $createUomInput) {

            ok
            message

            uom {
                id
                active
                name
                abbr
                type
            }

        }
    }
`,h=o.J1`
    mutation UpdateUom($updateUomInput: UpdateUomInput!) {
        updateUom(updateUomInput: $updateUomInput) {
            ok
            message

            uom {
                id
                active
                name
                abbr
                type
            }
        }
    }
`,x=o.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateUomStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,U=o.J1`
    mutation RemoveUom($removeUomId: String!) {
        removeUom(id: $removeUomId) {
            ok
            message
        }
    }
`,y=o.J1`
    query FindAllUoms($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllUoms(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            uoms {
                id
                active
                name
                abbr
                type
            }
        }
    }
`,P=o.J1`
    query FindActiveUoms {
        findActiveUoms {
            ok
            message

            uoms {
                id
                name
                abbr
            }
        }
    }
`,R=o.J1`
    query FindUomById($findUomByIdId: String!) {
        findUomById(id: $findUomByIdId) {
            ok
            message

            uom {
                id
                active
                name
                abbr
                type
            }
        }
    }
`;let F=(()=>{class b{constructor(){this.apolloProvider=(0,t.WQX)(o.Ic),this.store=(0,t.WQX)(C.il),this._apollo=this.apolloProvider.use("BALANC")}createUom(r){return this.store.select(E.Ns).pipe((0,g.s)(1),(0,_.n)(s=>this._apollo.mutate({mutation:B,variables:{createUomInput:r},errorPolicy:"all"}).pipe((0,l.M)(({data:p})=>{const m=structuredClone(s);m.push(p.createUom.uom),this.store.dispatch((0,f.JR)({uoms:m}))}))))}getUoms(r=1,s=20,p="code",m="asc",a=""){return this._apollo.query({query:y,errorPolicy:"all",variables:{offset:s*(r-1),limit:s,sort:p,order:m,search:a}}).pipe((0,l.M)(({data:d})=>{this.store.dispatch((0,D.Bp)({pagination:d.findAllUoms.pagination})),this.store.dispatch((0,f.JR)({uoms:d.findAllUoms.uoms}))}))}findActiveUoms(r="",s=10){return this._apollo.query({query:P,variables:{search:r,size:s},errorPolicy:"all"}).pipe((0,l.M)(({data:p})=>{this.store.dispatch((0,f.JR)({uoms:p.findActiveUoms.uoms}))}))}getUomById(r){return this._apollo.query({query:R,variables:{findUomByIdId:r},errorPolicy:"all"}).pipe((0,l.M)(({data:s})=>{this.store.dispatch((0,f.qV)({uom:s.findUomById.uom}))}))}updateUom(r){return this.store.select(E.Ns).pipe((0,g.s)(1),(0,_.n)(s=>this._apollo.mutate({mutation:h,variables:{updateUomInput:r},errorPolicy:"all"}).pipe((0,l.M)(({data:p})=>{const m=structuredClone(s);m[s.findIndex(d=>d.id===r.id)]=p.updateUom.uom,this.store.dispatch((0,f.JR)({uoms:m}))}))))}updateUomStatus(r){return this.store.select(E.Ns).pipe((0,g.s)(1),(0,_.n)(s=>this._apollo.mutate({mutation:x,variables:{updateEntityStatusInput:r},errorPolicy:"all"}).pipe((0,l.M)(({})=>{const m=structuredClone(s);m[s.findIndex(d=>d.id===r.id)].active=r.active,this.store.dispatch((0,f.JR)({uoms:m}))}))))}removeUom(r){return this.store.select(E.Ns).pipe((0,g.s)(1),(0,_.n)(s=>this._apollo.mutate({mutation:U,variables:{removeUomId:r},errorPolicy:"all"}).pipe((0,l.M)(({errors:p})=>{if(p)return;const m=structuredClone(s),a=s.findIndex(d=>d.id===r);m.splice(a,1),this.store.dispatch((0,f.JR)({uoms:m}))}))))}static#o=this.\u0275fac=function(s){return new(s||b)};static#e=this.\u0275prov=t.jDH({token:b,factory:b.\u0275fac,providedIn:"root"})}return b})()}}]);