"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[402],{41784:(ue,L,p)=>{p.d(L,{y:()=>w});var P=p(42495),e=p(94748),x=p(19212);function n(Z,m){1&Z&&(x.TgZ(0,"div",0),x.Hsn(1),x.qZA(),x.TgZ(2,"div",1),x.Hsn(3,1),x.qZA())}function F(Z,m){1&Z&&(x.TgZ(0,"div",3),x.Hsn(1,3),x.qZA()),2&Z&&x.Q6J("@expandCollapse",void 0)}function S(Z,m){if(1&Z&&(x.Hsn(0,2),x.YNc(1,F,2,1,"div",2)),2&Z){const _=x.oxw();x.xp6(),x.um2(1,_.expanded?1:-1)}}const A=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],$=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];let w=(()=>{class Z{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(_){"expanded"in _&&(this.expanded=(0,P.Ig)(_.expanded.currentValue)),"flippable"in _&&(this.flippable=(0,P.Ig)(_.flippable.currentValue))}static#e=this.\u0275fac=function(y){return new(y||Z)};static#t=this.\u0275cmp=x.Xpm({type:Z,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(y,b){2&y&&x.Tol(b.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],standalone:!0,features:[x.TTD,x.jDz],ngContentSelectors:$,decls:2,vars:2,consts:[[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion"],[1,"fuse-card-expansion"]],template:function(y,b){1&y&&(x.F$t(A),x.YNc(0,n,4,0)(1,S,2,1)),2&y&&(x.um2(0,b.flippable?0:-1),x.xp6(),x.um2(1,b.flippable?-1:1))},styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:e.L}})}return Z})()},10959:(ue,L,p)=>{p.d(L,{I:()=>x});const x=(0,p(84221).P1)(n=>n.rates,n=>n.rates)},66330:(ue,L,p)=>{p.d(L,{m:()=>T});var P=p(19212),e=p(48180),x=p(94664),n=p(99397),F=p(37398),S=p(50967),A=p(84221),$=p(97214),w=p(65413),Z=p(10959);const m=S.Ps`
    mutation CreateRate($createRateInput: CreateRateInput!) {
        createRate(createRateInput: $createRateInput) {

            ok
            message

            rate {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }

        }
    }
`,_=S.Ps`
    mutation UpdateRate($updateRateInput: UpdateRateInput!) {
        updateRate(updateRateInput: $updateRateInput) {
            ok
            message

            rate {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }
        }
    }
`,y=S.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRateStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,b=S.Ps`
    mutation RemoveRate($removeRateId: String!) {
        removeRate(id: $removeRateId) {
            ok
            message
        }
    }
`,pe=S.Ps`
    query FindAllRates($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllRates(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
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

            rates {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }
        }
    }
`,be=S.Ps`
    query FindActiveByBaseId($currencyBaseId: String!) {
        findActiveByBaseId(currencyBaseId: $currencyBaseId) {
            id
            active
            date
            name
            value
            currencyRefId

            currencyRef {
                id
                iso
            }

            currencyBaseId

            currencyBase {
                id
                iso
            }
        }
    }
`,B=S.Ps`
    query FindActiveRateByBaseIdForAthendatPlatform($currencyBaseId: String!) {
        getActiveRateByBaseIdForAthendatPlatform(currencyBaseId: $currencyBaseId) {
            id
            active
            date
            name
            value
            currencyRefId

            currencyRef {
                id
                iso
            }

            currencyBaseId

            currencyBase {
                id
                iso
            }
        }
    }
`,j=S.Ps`
    query FindRateById($findRateByIdId: String!) {
        findRateById(id: $findRateByIdId) {
            ok
            message

            rate {
                id
                active
                userId
                date
                name
                value

                currencyRefId
                currencyRef {
                    id
                    name
                    iso
                }

                currencyBaseId
                currencyBase {
                    id
                    name
                    iso
                }
            }
        }
    }
`;let T=(()=>{class Q{constructor(){this.apolloProvider=(0,P.f3M)(S._M),this.store=(0,P.f3M)(A.yh),this._apollo=this.apolloProvider.use("BALANC")}createRate(u){return this.store.select(Z.I).pipe((0,e.q)(1),(0,x.w)(h=>this._apollo.mutate({mutation:m,variables:{createRateInput:u},errorPolicy:"all"}).pipe((0,n.b)(({data:k})=>{const f=structuredClone(h);f.push(k.createRate.rate),this.store.dispatch((0,w.jM)({rates:f}))}))))}getRates(u=0,h=10,k="name",f="asc",C=""){return this._apollo.query({query:pe,errorPolicy:"all",variables:{page:u,size:h,sort:k,order:f,search:C}}).pipe((0,n.b)(({data:W})=>{this.store.dispatch((0,$.Jr)({pagination:W.findAllRates.pagination})),this.store.dispatch((0,w.jM)({rates:W.findAllRates.rates}))}))}findActiveByBaseId(u){return this._apollo.query({query:be,variables:{currencyBaseId:u},errorPolicy:"all"}).pipe((0,F.U)(({data:h})=>h?h.findActiveByBaseId:[]),(0,n.b)(h=>{h&&this.store.dispatch((0,w.jM)({rates:h}))}))}getActiveRateByBaseIdForAthendatPlatform(u){return this._apollo.query({query:B,variables:{currencyBaseId:u},errorPolicy:"all"}).pipe((0,F.U)(({data:h})=>h?h.getActiveRateByBaseIdForAthendatPlatform:null),(0,n.b)(h=>{h&&this.store.dispatch((0,w.FY)({rate:h}))}))}getRateById(u){return this._apollo.query({query:j,variables:{findRateByIdId:u},errorPolicy:"all"}).pipe((0,n.b)(({data:h})=>{this.store.dispatch((0,w.FY)({rate:h.findRateById.rate}))}))}updateRate(u){return this.store.select(Z.I).pipe((0,e.q)(1),(0,x.w)(h=>this._apollo.mutate({mutation:_,variables:{updateRateInput:u},errorPolicy:"all"}).pipe((0,n.b)(({data:k})=>{const f=structuredClone(h);f[h.findIndex(W=>W.id===u.id)]=k.updateRate.rate,this.store.dispatch((0,w.jM)({rates:f}))}))))}updateRateStatus(u){return this.store.select(Z.I).pipe((0,e.q)(1),(0,x.w)(h=>this._apollo.mutate({mutation:y,variables:{updateEntityStatusInput:u},errorPolicy:"all"}).pipe((0,n.b)(({})=>{const f=structuredClone(h);f[h.findIndex(W=>W.id===u.id)].active=u.active,this.store.dispatch((0,w.jM)({rates:f}))}))))}removeRate(u){return this.store.select(Z.I).pipe((0,e.q)(1),(0,x.w)(h=>this._apollo.mutate({mutation:b,variables:{removeRateId:u},errorPolicy:"all"}).pipe((0,n.b)(({data:k})=>{if(k){const f=structuredClone(h),C=h.findIndex(W=>W.id===u);f.splice(C,1),this.store.dispatch((0,w.jM)({rates:f}))}}))))}static#e=this.\u0275fac=function(h){return new(h||Q)};static#t=this.\u0275prov=P.Yz7({token:Q,factory:Q.\u0275fac,providedIn:"root"})}return Q})()},51578:(ue,L,p)=>{p.r(L),p.d(L,{default:()=>si});var P=p(84154),e=p(19212);let x=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-workshop"]],standalone:!0,features:[e.jDz],decls:1,vars:0,template:function(r,i){1&r&&e._UZ(0,"ath-content-menu")},dependencies:[P.p],encapsulation:2})}return o})();var n=p(56223),F=p(21476),S=p(82599),A=p(13566),$=p(22096),w=p(78645),Z=p(63019),m=p(59773),_=p(94664),y=p(37398),b=p(84221);const pe=o=>o.workshops,B=((0,b.P1)(pe,o=>o.workshop),(0,b.P1)(pe,o=>o.workshops));var j=p(83604),T=p(17700),Q=p(55497),g=p(42090),u=p(64170),h=p(32296),k=p(48180),f=p(99397),C=p(6990),W=p(97523),re=p(97214),v=p(50967);const Ve=v.Ps`
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
`,Je=v.Ps`
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
`,ze=v.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateWorkshopStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,Le=v.Ps`
    mutation RemoveWorkshop($removeWorkshopId: String!) {
        removeWorkshop(id: $removeWorkshopId) {
            ok
            message
        }
    }
`,Be=v.Ps`
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
`,Qe=v.Ps`
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
`;var q=p(22939);let he=(()=>{class o{constructor(t,r,i){this.apolloProvider=t,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createWorkshop(t){return this.store.select(B).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:Ve,variables:{createWorkshopInput:t},errorPolicy:"all"}).pipe((0,f.b)(({data:i})=>{const s=(0,C.cloneDeep)(r);s.push(i.createWorkshop.workshop),this.store.dispatch((0,W.aA)({workshops:s}))}))))}getWorkshops(t=1,r=20,i="code",s="asc",a=""){return this._apollo.query({query:Be,errorPolicy:"all",variables:{offset:r*(t-1),limit:r,sort:i,order:s,search:a}}).pipe((0,f.b)(({data:l})=>{this.store.dispatch((0,re.Jr)({pagination:l.findAllWorkshops.pagination})),this.store.dispatch((0,W.aA)({workshops:l.findAllWorkshops.workshops}))}))}getWorkshopById(t){return this._apollo.query({query:Qe,variables:{findWorkshopByIdId:t},errorPolicy:"all"}).pipe((0,f.b)(({data:r})=>{this.store.dispatch((0,W.Md)({workshop:r.findWorkshopById.workshop}))}))}updateWorkshop(t){return this.store.select(B).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:Je,variables:{updateWorkshopInput:t},errorPolicy:"all"}).pipe((0,f.b)(({data:i})=>{const s=(0,C.cloneDeep)(r);s[r.findIndex(l=>l.id===t.id)]=i.updateWorkshop.workshop,this.store.dispatch((0,W.aA)({workshops:s}))}))))}updateWorkshopStatus(t){return this.store.select(B).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:ze,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,f.b)(({})=>{const s=(0,C.cloneDeep)(r);s[r.findIndex(l=>l.id===t.id)].active=t.active,this.store.dispatch((0,W.aA)({workshops:s}))}))))}removeWorkshop(t){return this.store.select(B).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:Le,variables:{removeWorkshopId:t},errorPolicy:"all"}).pipe((0,f.b)(({})=>{const s=(0,C.cloneDeep)(r),a=r.findIndex(l=>l.id===t);s.splice(a,1),this.store.dispatch((0,W.aA)({workshops:s}))}))))}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(v._M),e.LFG(q.ux),e.LFG(b.yh))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var O=p(56278);function Me(o,c){1&o&&(e.TgZ(0,"h2",7),e._uU(1," Agregar Taller "),e.qZA())}function Ye(o,c){1&o&&(e.TgZ(0,"h2",7),e._uU(1," Editar Taller "),e.qZA())}function je(o,c){if(1&o&&(e.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"span",14),e._uU(8),e.qZA()()()()()()),2&o){const t=e.oxw();e.xp6(8),e.Oqu(t.data.workshop.name||"Sin nombre")}}function Ge(o,c){if(1&o&&(e.TgZ(0,"div",15)(1,"div",16)(2,"form",17)(3,"mat-form-field",18)(4,"mat-label"),e._uU(5,"Nombre"),e.qZA(),e._UZ(6,"input",19),e.qZA()()()()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.workshopForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","name")("placeholder","Ejemplo: Taller de mec\xe1nica")}}function He(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.updateWorkshop())}),e._uU(1," Actualizar "),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.workshopForm.invalid)("matDialogClose","confirmed")}}function Ke(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createWorkshop())}),e._uU(1," Agregar "),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.workshopForm.invalid)("matDialogClose","confirmed")}}function Xe(o,c){if(1&o&&(e.TgZ(0,"div",20)(1,"button",21),e._uU(2," Cancelar "),e.qZA(),e.YNc(3,He,2,3,"button",22)(4,Ke,2,3,"button",22),e.qZA()),2&o){const t=e.oxw();e.xp6(),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.um2(3,"edit"===t.data.dialogMode?3:-1),e.xp6(),e.um2(4,"add"===t.data.dialogMode?4:-1)}}let et=(()=>{class o{constructor(t,r,i,s,a,l,d){this.data=t,this._workshopsService=r,this._changeDetectorRef=i,this._formBuilder=s,this._fuseConfirmationService=a,this._dialogRef=l,this._snackBar=d,this.dialogMode="view",this._unsubscribeAll=new w.x,this.dialogMode=t.dialogMode,this.workshop=t.workshop}ngOnInit(){this.workshopForm=this._formBuilder.group({id:new n.NI(null),name:new n.NI(null,[n.kI.maxLength(100)])}),"edit"===this.dialogMode&&this.workshopForm.patchValue(this.workshop)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createWorkshop(){let t=this.workshopForm.getRawValue();t=(0,Q.Z)(t,["id"]),this._fuseConfirmationService.open({title:"Crear taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._workshopsService.createWorkshop(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.createWorkshop.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateWorkshop(){const t=this.workshopForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._workshopsService.updateWorkshop(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.updateWorkshop.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(T.WI),e.Y36(he),e.Y36(e.sBO),e.Y36(n.qu),e.Y36(O.R),e.Y36(T.so),e.Y36(q.ux))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["lists-workshop-dialog"]],standalone:!0,features:[e.jDz],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","gap-5","mt-3",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-no-subscript"],["matInput","","type","text","required","","maxlength","50",3,"formControlName","placeholder"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Me,2,0,"h2",2)(3,Ye,2,0,"h2",2),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,je,9,1,"div",4)(6,Ge,7,4,"div",5),e.qZA(),e.YNc(7,Xe,5,3,"div",6),e.qZA()),2&r&&(e.xp6(2),e.um2(2,"add"===i.data.dialogMode?2:-1),e.xp6(),e.um2(3,"edit"===i.data.dialogMode?3:-1),e.xp6(2),e.um2(5,"view"===i.data.dialogMode?5:-1),e.xp6(),e.um2(6,6),e.xp6(),e.um2(7,"view"!==i.data.dialogMode?7:-1))},dependencies:[T.Is,T.ZT,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.nD,n.sg,n.u,u.lN,u.KE,u.hX,h.ot,h.lW],encapsulation:2})}return o})();class tt{}var U=p(30617),M=p(24516),E=p(96814),G=p(55940);function ot(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"mat-slide-toggle",30),e.NdJ("change",function(i){e.CHM(t);const s=e.oxw(),a=s.$implicit,l=s.$index,d=e.oxw(4);return e.KtG(d.updateWorkshopStatus(i,a,l))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("checked",t.active)("color","primary")}}function rt(o,c){1&o&&e._UZ(0,"mat-spinner",26),2&o&&e.Q6J("diameter",20)("color","primary")}function it(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",23)(1,"div",19),e._uU(2),e.qZA(),e.TgZ(3,"div",24),e._uU(4),e.qZA(),e.TgZ(5,"div",21),e.YNc(6,ot,1,2,"mat-slide-toggle",25)(7,rt,1,2,"mat-spinner",26),e.qZA(),e.TgZ(8,"div",27)(9,"button",28),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(4);return e.KtG(a.openDialog(s,"edit"))}),e._UZ(10,"mat-icon",29),e.qZA(),e.TgZ(11,"button",28),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(4);return e.KtG(a.deleteWorkshop(s))}),e._UZ(12,"mat-icon",29),e.qZA()()()}if(2&o){const t=c.$implicit,r=c.$index,i=e.oxw(4);e.xp6(2),e.hij(" ",r+1," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.um2(6,i.isSlideLoading&&i.selectedSlide===r?-1:6),e.xp6(),e.um2(7,i.isSlideLoading&&i.selectedSlide===r?7:-1),e.xp6(3),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}function st(o,c){1&o&&e.SjG(0,it,13,6,"div",31,e.QCX().trackByFn),2&o&&e.wJu(c)}const nt=o=>({"pointer-events-none":o}),at=()=>[5,10,25,100];function ct(o,c){if(1&o&&(e.TgZ(0,"div",17)(1,"div",18),e._UZ(2,"div",19),e.TgZ(3,"div",20),e._uU(4," Nombre "),e.qZA(),e.TgZ(5,"div",21),e._uU(6," Activo "),e.qZA(),e.TgZ(7,"div",21),e._uU(8," Acciones "),e.qZA()(),e.YNc(9,st,2,0),e.ALo(10,"async"),e._UZ(11,"mat-paginator",22),e.qZA()),2&o){const t=e.oxw(2);let r;e.xp6(3),e.Q6J("mat-sort-header","name"),e.xp6(6),e.um2(9,(r=e.lcZ(10,8,t.workshops$))?9:-1,r),e.xp6(2),e.Q6J("ngClass",e.VKq(10,nt,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(12,at))("showFirstLastButtons",!0)}}function lt(o,c){1&o&&(e.TgZ(0,"div",32),e._uU(1," \xa1No hay talleres creados para el negocio!"),e.qZA())}function pt(o,c){1&o&&e.YNc(0,ct,12,13,"div",16)(1,lt,2,0),2&o&&e.um2(0,c.length>0?0:1)}let dt=(()=>{class o{constructor(t,r,i,s,a,l){this._workshopsService=t,this._changeDetectorRef=r,this._dialog=i,this._fuseConfirmationService=s,this._snackBar=a,this.store=l,this.workshop=new tt,this.workshops$=(0,$.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.searchInputControl=new n.NI,this.selectedSlide=null,this._unsubscribeAll=new w.x}ngOnInit(){this.workshops$=this.store.select(B),this.store.select(j.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,Z.T)(this._sort.sortChange,this._paginator.page).pipe((0,_.w)(()=>(this.isLoading=!0,this._workshopsService.getWorkshops(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,y.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteWorkshop(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la taller: ${t.name}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._workshopsService.removeWorkshop(t.id).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeWorkshop.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}updateWorkshopStatus(t,r,i){this.isSlideLoading=!0,this.selectedSlide=i,this._workshopsService.updateWorkshopStatus({id:r.id,active:t.checked}).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.updateWorkshopStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}trackByFn(t,r){return r.id||t}openDialog(t,r){this._dialog.open(et,{data:{workshop:t,dialogMode:r},panelClass:"ath-dialog-panel"})}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(he),e.Y36(e.sBO),e.Y36(T.uw),e.Y36(O.R),e.Y36(q.ux),e.Y36(b.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-workshops"]],viewQuery:function(r,i){if(1&r&&(e.Gf(F.NW,5),e.Gf(A.YE,5)),2&r){let s;e.iGM(s=e.CRH())&&(i._paginator=s.first),e.iGM(s=e.CRH())&&(i._sort=s.first)}},standalone:!0,features:[e.jDz],decls:27,vars:6,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["class","grid"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","overflow-x-auto","font-semibold","shadow","lists-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block"],[3,"mat-sort-header"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","overflow-auto","border-b","lists-grid","md:px-8"],[1,"truncate"],[3,"checked","color"],[3,"diameter","color"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[3,"checked","color","change"],["class","grid items-center gap-4 px-6 py-3 overflow-auto border-b lists-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Taller"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Talleres"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Talleres "),e.qZA()()(),e.TgZ(18,"div",10)(19,"button",11),e.NdJ("click",function(){return i.openDialog(i.workshop,"add")}),e._UZ(20,"mat-icon",12),e.TgZ(21,"span",13),e._uU(22,"Agregar"),e.qZA()()()(),e.TgZ(23,"div",14)(24,"div",15),e.YNc(25,pt,2,1),e.ALo(26,"async"),e.qZA()()()),2&r){let s;e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.um2(25,(s=e.lcZ(26,4,i.workshops$))?25:-1,s)}},dependencies:[E.Ov,h.ot,h.lW,u.lN,U.Ps,U.Hw,M.c,F.TU,F.NW,G.Cq,G.Ou,S.rP,S.Rr,A.JX,A.YE,A.nU,E.mk,n.UX],encapsulation:2,changeDetection:0})}return o})();var D=p(64190);const ke=o=>o.vehicles,mt=(0,b.P1)(ke,o=>o.vehicle),X=(0,b.P1)(ke,o=>o.vehicles);class Ce{}var ie=p(66977);const ut=v.Ps`
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
`,ht=v.Ps`
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
`,ft=(v.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVehicleStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,v.Ps`
    mutation RemoveVehicle($removeVehicleId: String!) {
        removeVehicle(id: $removeVehicleId) {
            ok
            message
        }
    }
`),gt=v.Ps`
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
`,_t=v.Ps`
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
`;let de=(()=>{class o{constructor(t,r,i){this.apolloProvider=t,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createVehicle(t){return this.store.select(X).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:ut,variables:{createVehicleInput:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i,data:s})=>{if(i){let l="";i.forEach(d=>l+=`\n ${d.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,C.cloneDeep)(r);a.push(s.createVehicle.vehicle),this.store.dispatch((0,ie.ln)({vehicles:a}))}))))}getVehicles(t=1,r=20,i="code",s="asc",a=""){return this._apollo.query({query:gt,errorPolicy:"all",variables:{offset:r*(t-1),limit:r,sort:i,order:s,search:a}}).pipe((0,f.b)(({errors:l,data:d})=>{if(l){let I="";l.forEach(K=>I+=`\n ${K.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:I,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,re.Jr)({pagination:d.findAllVehicles.pagination})),this.store.dispatch((0,ie.ln)({vehicles:d.findAllVehicles.vehicles}))}))}getVehicleById(t){return this._apollo.query({query:_t,variables:{findVehicleByIdId:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:r,data:i})=>{if(r){let s="";r.forEach(a=>s+=`\n ${a.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ie.QD)({vehicle:i.findVehicleById.vehicle}))}))}updateVehicle(t){return this.store.select(X).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:ht,variables:{updateVehicleInput:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i,data:s})=>{if(i){let d="";i.forEach(I=>d+=`\n ${I.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,C.cloneDeep)(r);a[r.findIndex(d=>d.id===t.id)]=s.updateVehicle.vehicle,this.store.dispatch((0,ie.ln)({vehicles:a}))}))))}removeVehicle(t){return this.store.select(X).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:ft,variables:{removeVehicleId:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i})=>{if(i){let l="";i.forEach(d=>l+=`\n ${d.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,C.cloneDeep)(r),a=r.findIndex(l=>l.id===t);s.splice(a,1),this.store.dispatch((0,ie.ln)({vehicles:s}))}))))}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(v._M),e.LFG(q.ux),e.LFG(b.yh))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const vt=o=>[o];function xt(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",22),e._uU(2),e.qZA(),e.TgZ(3,"div",27),e._uU(4),e.qZA(),e.TgZ(5,"div",24),e._uU(6),e.qZA(),e.TgZ(7,"div",24),e._uU(8),e.qZA(),e.TgZ(9,"div",24),e._uU(10),e.qZA(),e.TgZ(11,"div",28)(12,"button",29),e._UZ(13,"mat-icon",30),e.qZA(),e.TgZ(14,"button",31),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(4);return e.KtG(a.deleteVehicle(s))}),e._UZ(15,"mat-icon",30),e.qZA()()()}if(2&o){const t=c.$implicit,r=c.$index;e.xp6(2),e.hij(" ",r+1," "),e.xp6(2),e.hij(" ",t.registrationNumber," "),e.xp6(2),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.brand.name," "),e.xp6(2),e.hij(" ",t.fuel.name," "),e.xp6(2),e.Q6J("routerLink",e.VKq(8,vt,t.id)),e.xp6(),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}function bt(o,c){1&o&&e.SjG(0,xt,16,10,"div",32,e.QCX().trackByFn),2&o&&e.wJu(c)}const kt=o=>({"pointer-events-none":o}),Ct=()=>[5,10,25,100];function It(o,c){if(1&o&&(e.TgZ(0,"div",20)(1,"div",21),e._UZ(2,"div",22),e.TgZ(3,"div",23),e._uU(4," Chapa "),e.qZA(),e.TgZ(5,"div",24),e._uU(6," Cliente "),e.qZA(),e.TgZ(7,"div",24),e._uU(8," Marca "),e.qZA(),e.TgZ(9,"div",24),e._uU(10," Combustible "),e.qZA(),e.TgZ(11,"div",24),e._uU(12," Acciones "),e.qZA()(),e.YNc(13,bt,2,0),e.ALo(14,"async"),e._UZ(15,"mat-paginator",25),e.qZA()),2&o){const t=e.oxw(2);let r;e.xp6(3),e.Q6J("mat-sort-header","registrationNumber"),e.xp6(10),e.um2(13,(r=e.lcZ(14,8,t.vehicles$))?13:-1,r),e.xp6(2),e.Q6J("ngClass",e.VKq(10,kt,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(12,Ct))("showFirstLastButtons",!0)}}function yt(o,c){1&o&&(e.TgZ(0,"div",33),e._uU(1," \xa1No hay veh\xedculos de clientes registrados!"),e.qZA())}function At(o,c){1&o&&e.YNc(0,It,16,13,"div",19)(1,yt,2,0),2&o&&e.um2(0,c.length>0?0:1)}const Zt=()=>["new"];let wt=(()=>{class o{constructor(t,r,i,s,a,l){this._vehiclesService=t,this._changeDetectorRef=r,this._dialog=i,this._fuseConfirmationService=s,this._snackBar=a,this.store=l,this.vehicle=new Ce,this.vehicles$=(0,$.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.searchInputControl=new n.NI,this.selectedSlide=null,this._unsubscribeAll=new w.x}ngOnInit(){this.vehicles$=this.store.select(X),this.store.select(j.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,Z.T)(this._sort.sortChange,this._paginator.page).pipe((0,_.w)(()=>(this.isLoading=!0,this._vehiclesService.getVehicles(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,y.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteVehicle(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la taller: ${t.registrationNumber}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._vehiclesService.removeVehicle(t.id).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeVehicle.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}trackByFn(t,r){return r.id||t}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(de),e.Y36(e.sBO),e.Y36(T.uw),e.Y36(O.R),e.Y36(q.ux),e.Y36(b.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["vehicle-vehicles"]],viewQuery:function(r,i){if(1&r&&(e.Gf(F.NW,5),e.Gf(A.YE,5)),2&r){let s;e.iGM(s=e.CRH())&&(i._paginator=s.first),e.iGM(s=e.CRH())&&(i._sort=s.first)}},standalone:!0,features:[e.jDz],decls:30,vars:12,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-auto"],["class","grid"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","vehicles-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block"],[3,"mat-sort-header"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","vehicles-grid","md:px-8"],[1,"truncate"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["class","grid items-center gap-4 px-6 py-3 border-b vehicles-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Taller"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Veh\xedculos"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Veh\xedculos "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Agregar"),e.qZA()()()(),e.TgZ(26,"div",17)(27,"div",18),e.YNc(28,At,2,1),e.ALo(29,"async"),e.qZA()()()),2&r){let s;e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(),e.Q6J("routerLink",e.DdM(11,Zt)),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.um2(28,(s=e.lcZ(29,9,i.vehicles$))?28:-1,s)}},dependencies:[E.Ov,h.ot,h.lW,u.lN,u.KE,u.qo,U.Ps,U.Hw,M.c,M.Nt,F.TU,F.NW,G.Cq,S.rP,A.JX,A.YE,A.nU,E.mk,n.UX,n.Fj,n.JJ,n.oH,D.rH],encapsulation:2,changeDetection:0})}return o})();var V=p(24630),J=p(38034),Y=p(98525),N=p(27921),Tt=p(83829),Ft=p(33963),St=p(6918),fe=p(95407),se=p(23680);const Ie=o=>({"cursor-not-allowed":o});function Et(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createVehicle())}),e._UZ(1,"mat-icon",35),e.TgZ(2,"span",36),e._uU(3,"Guardar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.vehicleForm.invalid)("ngClass",e.VKq(3,Ie,t.vehicleForm.invalid)),e.xp6(),e.Q6J("svgIcon","mat_solid:save")}}function qt(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.updateVehicle())}),e._UZ(1,"mat-icon",35),e.TgZ(2,"span",36),e._uU(3,"Actualizar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.vehicleForm.invalid)("ngClass",e.VKq(3,Ie,t.vehicleForm.invalid)),e.xp6(),e.Q6J("svgIcon","mat_solid:refresh")}}function Ut(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero de registro (chapa) es obligatorio. "),e.qZA())}function Wt(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero de registro (chapa) debe tener 7 caracteres. "),e.qZA())}function Dt(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",37),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectCustomer(s))}),e._uU(1),e.qZA()}if(2&o){const t=c.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.name," ")}}function Ot(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",37),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectBrand(s))}),e._uU(1),e.qZA()}if(2&o){const t=c.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.name," ")}}function Rt(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El modelo no debe tener m\xe1s de 50 caracteres. "),e.qZA())}function Pt(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",37),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectFuel(s))}),e._uU(1),e.qZA()}if(2&o){const t=c.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.name," ")}}function Nt(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero vin debe tener 17 caracteres. "),e.qZA())}function $t(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero del motor no debe tener m\xe1s de 50 caracteres. "),e.qZA())}function Vt(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero de la carrocer\xeda no debe tener m\xe1s de 50 caracteres. "),e.qZA())}function Jt(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El color no debe tener m\xe1s de 100 caracteres. "),e.qZA())}function zt(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El comentario sobre la bater\xeda no debe tener m\xe1s de 1000000 caracteres. "),e.qZA())}function Lt(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El comentario sobre la reproductora no debe tener m\xe1s de 1000000 caracteres. "),e.qZA())}let Bt=(()=>{class o{constructor(t,r,i,s,a,l){this._activatedRoute=t,this._changeDetectorRef=r,this._formBuilder=i,this._snackBar=s,this._router=a,this.store=l,this.brandSelected="",this.customers=[],this.customerSelected="",this.editMode=!1,this.fuelSelected="",this.isLoading=!1,this.isLoadingData=!0,this.searchBrandControl=new n.NI(""),this.searchCustomerControl=new n.NI(""),this.searchFuelControl=new n.NI(""),this.selectedVehicle=new Ce,this.vehicles$=(0,$.of)([]),this._unsubscribeAll=new w.x,this._fuseConfirmationService=(0,e.f3M)(O.R),this._vehiclesService=(0,e.f3M)(de)}ngOnInit(){this.store.select(Ft.p6).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.customers=t,this._changeDetectorRef.markForCheck()}),this.customersFiltered$=this.searchCustomerControl.valueChanges.pipe((0,N.O)(""),(0,y.U)(t=>{const r="string"==typeof t?t:t?.name;return r?this._filterCustomers(r):this.customers.slice()})),this.store.select(Tt.gg).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.brands=t,this._changeDetectorRef.markForCheck()}),this.brandsFiltered$=this.searchBrandControl.valueChanges.pipe((0,N.O)(""),(0,y.U)(t=>{const r="string"==typeof t?t:t?.name;return r?this._filterBrands(r):this.brands.slice()})),this.store.select(St.zt).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.fuels=t,this._changeDetectorRef.markForCheck()}),this.fuelsFiltered$=this.searchFuelControl.valueChanges.pipe((0,N.O)(""),(0,y.U)(t=>{const r="string"==typeof t?t:t?.name;return r?this._filterFuels(r):this.fuels.slice()})),this.vehicleForm=this._formBuilder.group({id:new n.NI(null),customerId:new n.NI(null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i),n.kI.maxLength(255)]),brandId:new n.NI(null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i),n.kI.maxLength(255)]),model:new n.NI(null,[n.kI.maxLength(50)]),fuelId:new n.NI(null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i),n.kI.maxLength(255)]),registrationNumber:new n.NI(null,[n.kI.required,n.kI.minLength(7),n.kI.maxLength(7)]),vin:new n.NI(null,[n.kI.minLength(17),n.kI.maxLength(17)]),engineNumber:new n.NI(null,[n.kI.maxLength(50)]),bodyNumber:new n.NI(null,[n.kI.maxLength(50)]),color:new n.NI(null,[n.kI.maxLength(100)]),battery:new n.NI(null,[n.kI.maxLength(1e6)]),carPlayer:new n.NI(null,[n.kI.maxLength(1e6)])}),this._activatedRoute.params.pipe((0,m.R)(this._unsubscribeAll)).subscribe(({vehicleId:t})=>{"new"!==t&&(this.editMode=!0,this.store.select(mt).pipe((0,m.R)(this._unsubscribeAll)).subscribe(r=>{this.selectedVehicle=r,this.isLoadingData=!1,this.vehicleForm.patchValue(r),this.isLoadingData=!1})),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createVehicle(){let t=this.vehicleForm.getRawValue();t=(0,C.omit)(t,["id","code"]),this._fuseConfirmationService.open({title:"Crear Veh\xedculo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._vehiclesService.createVehicle(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.createVehicle.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck(),this._router.navigateByUrl("/workshop/vehicles")}),this._changeDetectorRef.markForCheck()})}updateVehicle(){let t=this.vehicleForm.getRawValue();t=(0,C.omit)(t,["code"]),this._fuseConfirmationService.open({title:"Actualizar Veh\xedculo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._vehiclesService.updateVehicle(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.updateVehicle.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/vehicles")}),this._changeDetectorRef.markForCheck()})}selectBrand(t){this.vehicleForm.get("brandId").setValue(t.id)}selectCustomer(t){this.vehicleForm.get("customerId").setValue(t.id)}selectFuel(t){this.vehicleForm.get("fuelId").setValue(t.id)}displayFn(t){return t&&t.name?t.name:""}_filterBrands(t){const r=t.toLowerCase();return this.customers.filter(i=>i.name.toLowerCase().includes(r))}_filterCustomers(t){const r=t.toLowerCase();return this.customers.filter(i=>i.name.toLowerCase().includes(r))}_filterFuels(t){const r=t.toLowerCase();return this.customers.filter(i=>i.name.toLowerCase().includes(r))}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(D.gz),e.Y36(e.sBO),e.Y36(n.qu),e.Y36(q.ux),e.Y36(D.F0),e.Y36(b.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-vehicle-details"]],standalone:!0,features:[e.jDz],decls:107,vars:50,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","bg-card","dark:bg-transparent","overflow-y-auto"],[1,"z-20","flex","flex-col","p-6","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:py-8","sm:px-10","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],["routerLink","/workshop/vehicles",1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],["class","ml-4","mat-raised-button","","class","text-white bg-gradient-to-r from-primary-500 to-primary-700",3,"disabled","ngClass"],[1,"flex","flex-auto"],[1,"flex","flex-col","w-full","divide-y","divide-dashed",3,"formGroup","autocomplete"],[1,"grid","grid-cols-1","p-10"],[1,"flex","flex-col"],[1,"text-xl","font-semibold"],[1,"flex","flex-col","p-6","mt-5","border","shadow-md","sm:flex-row","bg-card","rounded-2xl"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-5","w-full"],[1,"w-full","fuse-mat-dense"],["matInput","","type","text","minlength","7","maxlength","7","required","",3,"formControlName"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[3,"displayWith"],["customerAutocomplete","matAutocomplete"],["brandAutocomplete","matAutocomplete"],["matInput","","type","text","maxlength","50",3,"formControlName"],["fuelAutocomplete","matAutocomplete"],["matInput","","type","text","minlength","17","maxlength","17",3,"formControlName"],["matInput","","type","text","maxlength","100",3,"formControlName"],[1,"w-full","fuse-mat-dense","sm:col-span-3"],["matInput","","cdkTextareaAutosize","","maxlength","1000000","rows","2",3,"formControlName"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","ngClass","click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"value","click"],[3,"value"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div")(6,"a",4),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",5),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Taller"),e.qZA()(),e.TgZ(12,"div",5),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",8),e._uU(15,"Veh\xedculos"),e.qZA()(),e.TgZ(16,"div",5),e._UZ(17,"mat-icon",6),e.TgZ(18,"a",7),e._uU(19),e.qZA()()()(),e.TgZ(20,"div",9)(21,"h2",10),e._uU(22),e.qZA()()(),e.TgZ(23,"div",11),e.YNc(24,Et,4,5,"button",12)(25,qt,4,5,"button",12),e.qZA()(),e.TgZ(26,"div",13)(27,"form",14)(28,"div",15)(29,"div",16)(30,"span",17),e._uU(31,"Generales"),e.qZA(),e.TgZ(32,"span"),e._uU(33,"Ingrese la informaci\xf3n necesaria para describir e identificar el veh\xedculo"),e.qZA()(),e.TgZ(34,"div",18)(35,"div",19)(36,"mat-form-field",20)(37,"mat-label"),e._uU(38,"Chapa"),e.qZA(),e._UZ(39,"input",21),e.YNc(40,Ut,2,0,"mat-error")(41,Wt,2,0,"mat-error"),e.qZA(),e.TgZ(42,"mat-form-field",22)(43,"mat-label"),e._uU(44,"Cliente"),e.qZA(),e._UZ(45,"mat-icon",23)(46,"input",24),e.TgZ(47,"mat-autocomplete",25,26),e.SjG(49,Dt,2,2,"mat-option",38,e.x6l),e.ALo(51,"async"),e.qZA()(),e.TgZ(52,"mat-form-field",22)(53,"mat-label"),e._uU(54,"Marca"),e.qZA(),e._UZ(55,"mat-icon",23)(56,"input",24),e.TgZ(57,"mat-autocomplete",25,27),e.SjG(59,Ot,2,2,"mat-option",38,e.x6l),e.ALo(61,"async"),e.qZA()(),e.TgZ(62,"mat-form-field",20)(63,"mat-label"),e._uU(64,"Modelo"),e.qZA(),e._UZ(65,"input",28),e.YNc(66,Rt,2,0,"mat-error"),e.qZA(),e.TgZ(67,"mat-form-field",22)(68,"mat-label"),e._uU(69,"Tipo de combustible"),e.qZA(),e._UZ(70,"mat-icon",23)(71,"input",24),e.TgZ(72,"mat-autocomplete",25,29),e.SjG(74,Pt,2,2,"mat-option",38,e.x6l),e.ALo(76,"async"),e.qZA()(),e.TgZ(77,"mat-form-field",20)(78,"mat-label"),e._uU(79,"VIN"),e.qZA(),e._UZ(80,"input",30),e.YNc(81,Nt,2,0,"mat-error"),e.qZA(),e.TgZ(82,"mat-form-field",20)(83,"mat-label"),e._uU(84,"N\xfamero del motor"),e.qZA(),e._UZ(85,"input",28),e.YNc(86,$t,2,0,"mat-error"),e.qZA(),e.TgZ(87,"mat-form-field",20)(88,"mat-label"),e._uU(89,"N\xfamero de la carrocer\xeda"),e.qZA(),e._UZ(90,"input",28),e.YNc(91,Vt,2,0,"mat-error"),e.qZA(),e.TgZ(92,"mat-form-field",20)(93,"mat-label"),e._uU(94,"Color"),e.qZA(),e._UZ(95,"input",31),e.YNc(96,Jt,2,0,"mat-error"),e.qZA(),e.TgZ(97,"mat-form-field",32)(98,"mat-label"),e._uU(99,"Sobre la bater\xeda"),e.qZA(),e._UZ(100,"textarea",33),e.YNc(101,zt,2,0,"mat-error"),e.qZA(),e.TgZ(102,"mat-form-field",32)(103,"mat-label"),e._uU(104,"Sobre la reproductora"),e.qZA(),e._UZ(105,"textarea",33),e.YNc(106,Lt,2,0,"mat-error"),e.qZA()()()()()()()),2&r){const s=e.MAs(48),a=e.MAs(58),l=e.MAs(73);e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(2),e.hij(" ",i.editMode?i.selectedVehicle.registrationNumber:"Nuevo"," "),e.xp6(3),e.hij(" ",i.editMode?i.selectedVehicle.registrationNumber:"Nuevo"," "),e.xp6(2),e.um2(24,i.editMode?-1:24),e.xp6(),e.um2(25,i.editMode?25:-1),e.xp6(2),e.Q6J("formGroup",i.vehicleForm)("autocomplete","off"),e.xp6(12),e.Q6J("formControlName","registrationNumber"),e.xp6(),e.um2(40,i.vehicleForm.get("registrationNumber").hasError("required")?40:-1),e.xp6(),e.um2(41,i.vehicleForm.get("registrationNumber").hasError("minlength")?41:-1),e.xp6(4),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchCustomerControl)("matAutocomplete",s)("placeholder","Buscar cliente")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(51,44,i.customersFiltered$)),e.xp6(6),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchBrandControl)("matAutocomplete",a)("placeholder","Buscar marca")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(61,46,i.brandsFiltered$)),e.xp6(6),e.Q6J("formControlName","model"),e.xp6(),e.um2(66,i.vehicleForm.get("model").hasError("maxlength")?66:-1),e.xp6(4),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchFuelControl)("matAutocomplete",l)("placeholder","Buscar combustible")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.wJu(e.lcZ(76,48,i.fuelsFiltered$)),e.xp6(6),e.Q6J("formControlName","vin"),e.xp6(),e.um2(81,i.vehicleForm.get("vin").hasError("minlength")?81:-1),e.xp6(4),e.Q6J("formControlName","engineNumber"),e.xp6(),e.um2(86,i.vehicleForm.get("engineNumber").hasError("maxlength")?86:-1),e.xp6(4),e.Q6J("formControlName","bodyNumber"),e.xp6(),e.um2(91,i.vehicleForm.get("bodyNumber").hasError("maxlength")?91:-1),e.xp6(4),e.Q6J("formControlName","color"),e.xp6(),e.um2(96,i.vehicleForm.get("color").hasError("maxlength")?96:-1),e.xp6(4),e.Q6J("formControlName","battery"),e.xp6(),e.um2(101,i.vehicleForm.get("carPlayer").hasError("maxlength")?101:-1),e.xp6(4),e.Q6J("formControlName","carPlayer"),e.xp6(),e.um2(106,i.vehicleForm.get("carPlayer").hasError("maxlength")?106:-1)}},dependencies:[E.Ov,n.u5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.wO,n.nD,V.Bb,fe.PQ,V.XC,se.ey,V.ZL,h.ot,h.lW,J.FA,T.Is,u.lN,u.KE,u.hX,u.TO,u.qo,U.Ps,U.Hw,Y.LD,E.mk,n.UX,n.oH,n.sg,n.u],encapsulation:2,changeDetection:0})}return o})();const ye=o=>o.vehicleInspections,Qt=(0,b.P1)(ye,o=>o.vehicleInspection),ne=(0,b.P1)(ye,o=>o.vehicleInspections);class Ae{}var ae=p(34886);const Mt=v.Ps`
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
`,Yt=v.Ps`
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
`,jt=(v.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVehicleInspectionStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,v.Ps`
    mutation RemoveVehicleInspection($removeVehicleInspectionId: String!) {
        removeVehicleInspection(id: $removeVehicleInspectionId) {
            ok
            message
        }
    }
`),Gt=v.Ps`
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
`,Ht=v.Ps`
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
`;let me=(()=>{class o{constructor(t,r,i){this.apolloProvider=t,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createVehicleInspection(t){return this.store.select(ne).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:Mt,variables:{createVehicleInspectionInput:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i,data:s})=>{if(i){let l="";i.forEach(d=>l+=`\n ${d.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,C.cloneDeep)(r);a.push(s.createVehicleInspection.vehicleInspection),this.store.dispatch((0,ae.SR)({vehicleInspections:a}))}))))}getVehicleInspections(t=1,r=20,i="code",s="asc",a=""){return this._apollo.query({query:Gt,errorPolicy:"all",variables:{offset:r*(t-1),limit:r,sort:i,order:s,search:a}}).pipe((0,f.b)(({errors:l,data:d})=>{if(l){let I="";l.forEach(K=>I+=`\n ${K.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:I,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,re.Jr)({pagination:d.findAllVehicleInspections.pagination})),this.store.dispatch((0,ae.SR)({vehicleInspections:d.findAllVehicleInspections.vehicleInspections}))}))}getVehicleInspectionById(t){return this._apollo.query({query:Ht,variables:{findVehicleInspectionByIdId:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:r,data:i})=>{if(r){let s="";r.forEach(a=>s+=`\n ${a.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ae.k6)({vehicleInspection:i.findVehicleInspectionById.vehicleInspection}))}))}updateVehicleInspection(t){return this.store.select(ne).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:Yt,variables:{updateVehicleInspectionInput:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i,data:s})=>{if(i){let d="";i.forEach(I=>d+=`\n ${I.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,C.cloneDeep)(r);a[r.findIndex(d=>d.id===t.id)]=s.updateVehicleInspection.vehicleInspection,this.store.dispatch((0,ae.SR)({vehicleInspections:a}))}))))}removeVehicleInspection(t){return this.store.select(ne).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:jt,variables:{removeVehicleInspectionId:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i})=>{if(i){let l="";i.forEach(d=>l+=`\n ${d.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,C.cloneDeep)(r),a=r.findIndex(l=>l.id===t);s.splice(a,1),this.store.dispatch((0,ae.SR)({vehicleInspections:s}))}))))}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(v._M),e.LFG(q.ux),e.LFG(b.yh))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const Kt=o=>[o];function Xt(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",25)(1,"div",26),e._uU(2),e.qZA(),e.TgZ(3,"div",27),e._uU(4),e.qZA(),e.TgZ(5,"div",23),e._uU(6),e.qZA(),e.TgZ(7,"div",23),e._uU(8),e.qZA(),e.TgZ(9,"div",28),e._uU(10),e.ALo(11,"date"),e.qZA(),e.TgZ(12,"div",29)(13,"button",30),e._UZ(14,"mat-icon",31),e.qZA(),e.TgZ(15,"button",32),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(4);return e.KtG(a.deleteVehicleInspection(s))}),e._UZ(16,"mat-icon",31),e.qZA()()()}if(2&o){const t=c.$implicit,r=c.$index;e.xp6(2),e.hij(" ",r+1," "),e.xp6(2),e.hij(" ",t.vehicle.registrationNumber," "),e.xp6(2),e.hij(" ",t.vehicle.customer.name," "),e.xp6(2),e.hij(" ",t.employee.fullname," "),e.xp6(2),e.hij(" ",e.xi3(11,8,t.date,"dd/MM/yyyy")," "),e.xp6(3),e.Q6J("routerLink",e.VKq(11,Kt,t.id)),e.xp6(),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}function eo(o,c){1&o&&e.SjG(0,Xt,17,13,"div",33,e.QCX().trackByFn),2&o&&e.wJu(c)}const to=o=>({"pointer-events-none":o}),oo=()=>[5,10,25,100];function ro(o,c){if(1&o&&(e.TgZ(0,"div",20)(1,"div",21),e._UZ(2,"div",22),e.TgZ(3,"div"),e._uU(4," Veh\xedculo "),e.qZA(),e.TgZ(5,"div",23),e._uU(6," Cliente "),e.qZA(),e.TgZ(7,"div",23),e._uU(8," Empleado "),e.qZA(),e.TgZ(9,"div",23),e._uU(10," Fecha "),e.qZA(),e.TgZ(11,"div",23),e._uU(12," Acciones "),e.qZA()(),e.YNc(13,eo,2,0),e.ALo(14,"async"),e._UZ(15,"mat-paginator",24),e.qZA()),2&o){const t=e.oxw(2);let r;e.xp6(13),e.um2(13,(r=e.lcZ(14,7,t.vehicleInspections$))?13:-1,r),e.xp6(2),e.Q6J("ngClass",e.VKq(9,to,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(11,oo))("showFirstLastButtons",!0)}}function io(o,c){1&o&&(e.TgZ(0,"div",34),e._uU(1," \xa1No se ha registrado ninguna inspecci\xf3n!"),e.qZA())}function so(o,c){1&o&&e.YNc(0,ro,16,12,"div",19)(1,io,2,0),2&o&&e.um2(0,c.length>0?0:1)}const no=()=>["new"];let ao=(()=>{class o{constructor(t,r,i,s,a,l){this._vehicleInspectionsService=t,this._changeDetectorRef=r,this._dialog=i,this._fuseConfirmationService=s,this._snackBar=a,this.store=l,this.vehicleInspection=new Ae,this.vehicleInspections$=(0,$.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.searchInputControl=new n.NI,this.selectedSlide=null,this._unsubscribeAll=new w.x}ngOnInit(){this.vehicleInspections$=this.store.select(ne),this.store.select(j.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,Z.T)(this._sort.sortChange,this._paginator.page).pipe((0,_.w)(()=>(this.isLoading=!0,this._vehicleInspectionsService.getVehicleInspections(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,y.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteVehicleInspection(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la inspecci\xf3n: ${t.vehicle.registrationNumber}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._vehicleInspectionsService.removeVehicleInspection(t.id).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeVehicleInspection.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}trackByFn(t,r){return r.id||t}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(me),e.Y36(e.sBO),e.Y36(T.uw),e.Y36(O.R),e.Y36(q.ux),e.Y36(b.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-vehicle-inspections"]],viewQuery:function(r,i){if(1&r&&(e.Gf(F.NW,5),e.Gf(A.YE,5)),2&r){let s;e.iGM(s=e.CRH())&&(i._paginator=s.first),e.iGM(s=e.CRH())&&(i._sort=s.first)}},standalone:!0,features:[e.jDz],decls:30,vars:12,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-auto","sm:mb-18"],["class","grid"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","inspections-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","inspections-grid","md:px-8"],[1,"hidden","font-mono","sm:block"],[1,"font-mono","truncate"],[1,"font-mono","text-center"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["class","grid items-center gap-4 px-6 py-3 border-b inspections-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Taller"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Inspecciones"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Inspecciones "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Agregar"),e.qZA()()()(),e.TgZ(26,"div",17)(27,"div",18),e.YNc(28,so,2,1),e.ALo(29,"async"),e.qZA()()()),2&r){let s;e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(),e.Q6J("routerLink",e.DdM(11,no)),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.um2(28,(s=e.lcZ(29,9,i.vehicleInspections$))?28:-1,s)}},dependencies:[E.Ov,E.uU,h.ot,h.lW,u.lN,u.KE,u.qo,U.Ps,U.Hw,M.c,M.Nt,F.TU,F.NW,G.Cq,S.rP,A.JX,A.YE,E.mk,n.UX,n.Fj,n.JJ,n.oH,D.rH],encapsulation:2,changeDetection:0})}return o})();var Ze=p(57482);const we=o=>({"cursor-not-allowed":o});function co(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createVehicleInspection())}),e._UZ(1,"mat-icon",31),e.TgZ(2,"span",32),e._uU(3,"Guardar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.inspectionForm.invalid)("ngClass",e.VKq(3,we,t.inspectionForm.invalid)),e.xp6(),e.Q6J("svgIcon","mat_solid:save")}}function lo(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.updateVehicleInspection())}),e._UZ(1,"mat-icon",31),e.TgZ(2,"span",32),e._uU(3,"Actualizar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.inspectionForm.invalid)("ngClass",e.VKq(3,we,t.inspectionForm.invalid)),e.xp6(),e.Q6J("svgIcon","mat_solid:refresh")}}function po(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",33),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectEmployee(s))}),e._uU(1),e.qZA()}if(2&o){const t=c.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.fullname," ")}}function mo(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",33),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectVehicle(s))}),e._uU(1),e.qZA()}if(2&o){const t=c.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.registrationNumber," ")}}let uo=(()=>{class o{constructor(t,r,i,s,a,l,d,I){this._activatedRoute=t,this._changeDetectorRef=r,this._formBuilder=i,this._fuseConfirmationService=s,this._vehicleInspectionsService=a,this._snackBar=l,this._router=d,this.store=I,this.maxDate=new Date,this.editMode=!1,this.employees=[],this.employeeSelected="",this.inspections$=(0,$.of)([]),this.searchEmployeeControl=new n.NI(""),this.searchInputControl=new n.NI,this.searchVehicleControl=new n.NI(""),this.selectedVehicleInspection=new Ae,this.vehicleInspectionId=null,this.vehicles=[],this.vehicleSelected="",this._unsubscribeAll=new w.x}ngOnInit(){this.store.select(X).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.vehicles=t,this._changeDetectorRef.markForCheck()}),this.vehiclesFiltered$=this.searchVehicleControl.valueChanges.pipe((0,N.O)(""),(0,y.U)(t=>{const r="string"==typeof t?t:t?.registrationNumber;return r?this._filterVehicles(r):this.vehicles.slice()})),this.store.select(Ze.ri).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.employees=t,this._changeDetectorRef.markForCheck()}),this.employeesFiltered$=this.searchEmployeeControl.valueChanges.pipe((0,N.O)(""),(0,y.U)(t=>{const r="string"==typeof t?t:t?.name;return r?this._filterEmployees(r):this.employees.slice()})),this.inspectionForm=this._formBuilder.group({id:[""],employeeId:[null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],vehicleId:[null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],date:[null,[n.kI.required]],tank_cover_fuel:[!1],tank_cover_brake_fluid:[!1],tank_cover_coolant_liquid:[!1],tank_cover_windshield_water:[!1],tank_cover_oil:[!1],radiator_cover:[!1],oil_stick:[!1],wheel_trim:[!1],front_brushes:[!1],tail_brush:[!1],emblems:[!1],inside_mirror:[!1],outside_left_mirrors:[!1],outside_right_mirrors:[!1],cigar_lighter:[!1],clock:[!1],radio_player:[!1],speakers:[!1],bonnet_hydraulic_arm:[!1],tailgate_hydraulic_arm:[!1],rugs:[!1],horn:[!1],front_lights:[!1],tail_lights:[!1],third_stop:[!1],cat:[!1],wheel_wrench:[!1],antenna:[!1],air_conditioning:[!1],engine_grill:[!1],obs:[null,[n.kI.maxLength(1e4)]]}),this._activatedRoute.params.pipe((0,m.R)(this._unsubscribeAll)).subscribe(({vehicleInspectionId:t})=>{this.vehicleInspectionId=t,"new"!==this.vehicleInspectionId&&(this.editMode=!0,this.store.select(Qt).pipe((0,m.R)(this._unsubscribeAll)).subscribe(r=>{this.selectedVehicleInspection=r,this.inspectionForm.patchValue(r),this.searchEmployeeControl.patchValue(r.employee),this.searchVehicleControl.patchValue(r.vehicle)})),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createVehicleInspection(){const t=this.inspectionForm.getRawValue();delete t.id,"generic"===t.type&&(delete t.stock,delete t.price),this._fuseConfirmationService.open({title:"Crear inspecci\xf3n",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._vehicleInspectionsService.createVehicleInspection(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:s.createVehicleInspection.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/vehicles-inspections")}),this._changeDetectorRef.markForCheck()})}updateVehicleInspection(){const t=this.inspectionForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Inspecci\xf3n",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._vehicleInspectionsService.updateVehicleInspection(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:s.updateVehicleInspection.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/vehicles-inspections")}),this._changeDetectorRef.markForCheck()})}selectEmployee(t){this.inspectionForm.get("employeeId").setValue(t.id)}selectVehicle(t){this.inspectionForm.get("vehicleId").setValue(t.id)}trackByFn(t,r){return r.id||t}displayFnEmployee(t){return t&&t.fullname?t.fullname:""}displayFnVehicle(t){return t&&t.registrationNumber?t.registrationNumber:""}_filterEmployees(t){const r=t.toLowerCase();return this.employees.filter(i=>i.name.toLowerCase().includes(r))}_filterVehicles(t){const r=t.toLowerCase();return this.vehicles.filter(i=>i.registrationNumber.toLowerCase().includes(r))}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(D.gz),e.Y36(e.sBO),e.Y36(n.qu),e.Y36(O.R),e.Y36(me),e.Y36(q.ux),e.Y36(D.F0),e.Y36(b.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-vehicle-inspection-details"]],standalone:!0,features:[e.jDz],decls:127,vars:61,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","gap-5","p-3","overflow-y-auto","bg-cover","sm:absolute","sm:inset-0","dark:bg-transparent"],[1,"z-20","flex","flex-col","bg-transparent","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:px-5"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],["routerLink","/workshop/vehicles-inspections",1,"ml-1","text-primary-500"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],["class","ml-4","mat-raised-button","","class","text-white bg-gradient-to-r from-primary-500 to-primary-700",3,"disabled","ngClass"],[1,"flex","flex-auto"],[1,"w-full",3,"formGroup","autocomplete"],[1,"flex","flex-col","gap-3","p-3","rounded-md","shadow-md","bg-card"],[1,"text-xl","font-semibold"],[1,"grid","grid-cols-1","gap-3","mt-5","sm:grid-cols-2","md:grid-cols-3"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[3,"displayWith"],["employeeAutocomplete","matAutocomplete"],["vehicleAutocomplete","matAutocomplete"],["matInput","",3,"formControlName","max","matDatepicker","placeholder"],["matIconSuffix","",3,"for"],["picker",""],[1,"col-span-3","mt-3","text-xl","font-semibold"],[1,"flex","flex-col","gap-3"],[3,"formControlName"],[1,"w-full","sm:col-span-3"],["matInput","","matTextareaAutosize","","maxlength","10000",3,"formControlName","rows"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","ngClass","click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"value","click"],[3,"value"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div")(6,"a",4),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",5),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Taller"),e.qZA()(),e.TgZ(12,"div",5),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",8),e._uU(15,"Inspecciones"),e.qZA()(),e.TgZ(16,"div",5),e._UZ(17,"mat-icon",6),e.TgZ(18,"a",7),e._uU(19),e.qZA()()()()(),e.TgZ(20,"div",9),e.YNc(21,co,4,5,"button",10)(22,lo,4,5,"button",10),e.qZA()(),e.TgZ(23,"div",11)(24,"form",12)(25,"div",13)(26,"div",14),e._uU(27," Informaci\xf3n de la inspecci\xf3n "),e.qZA(),e.TgZ(28,"div",15)(29,"mat-form-field",16)(30,"mat-label"),e._uU(31,"Empleado"),e.qZA(),e._UZ(32,"mat-icon",17)(33,"input",18),e.TgZ(34,"mat-autocomplete",19,20),e.SjG(36,po,2,2,"mat-option",34,e.x6l),e.ALo(38,"async"),e.qZA()(),e.TgZ(39,"mat-form-field",16)(40,"mat-label"),e._uU(41,"Veh\xedculo"),e.qZA(),e._UZ(42,"mat-icon",17)(43,"input",18),e.TgZ(44,"mat-autocomplete",19,21),e.SjG(46,mo,2,2,"mat-option",34,e.x6l),e.ALo(48,"async"),e.qZA()(),e.TgZ(49,"mat-form-field",16)(50,"mat-label"),e._uU(51,"Fecha de la inspecci\xf3n"),e.qZA(),e._UZ(52,"input",22)(53,"mat-datepicker-toggle",23)(54,"mat-datepicker",null,24),e.qZA(),e.TgZ(56,"div",25),e._uU(57," Inventario del veh\xedculo "),e.qZA(),e.TgZ(58,"div",26)(59,"mat-checkbox",27),e._uU(60,"Tapa dep. combustible"),e.qZA(),e.TgZ(61,"mat-checkbox",27),e._uU(62,"Tapa dep. L. Freno"),e.qZA(),e.TgZ(63,"mat-checkbox",27),e._uU(64,"Tapa dep. L. Refrig."),e.qZA(),e.TgZ(65,"mat-checkbox",27),e._uU(66,"Tapa dep. Parabrisas"),e.qZA(),e.TgZ(67,"mat-checkbox",27),e._uU(68,"Tapa dep. Aceite"),e.qZA(),e.TgZ(69,"mat-checkbox",27),e._uU(70,"Tapa radiador"),e.qZA(),e.TgZ(71,"mat-checkbox",27),e._uU(72,"Varilla aceite"),e.qZA(),e.TgZ(73,"mat-checkbox",27),e._uU(74,"Embellecedor ruedas"),e.qZA(),e.TgZ(75,"mat-checkbox",27),e._uU(76,"Escobillas delanteras"),e.qZA(),e.TgZ(77,"mat-checkbox",27),e._uU(78,"Escobilla trasera"),e.qZA()(),e.TgZ(79,"div",26)(80,"mat-checkbox",27),e._uU(81,"Emblemas"),e.qZA(),e.TgZ(82,"mat-checkbox",27),e._uU(83,"Retrovisor interior"),e.qZA(),e.TgZ(84,"mat-checkbox",27),e._uU(85,"Retrovisores Ext Izq."),e.qZA(),e.TgZ(86,"mat-checkbox",27),e._uU(87,"Retrovisores Ext Der."),e.qZA(),e.TgZ(88,"mat-checkbox",27),e._uU(89,"Encendedor cigarros"),e.qZA(),e.TgZ(90,"mat-checkbox",27),e._uU(91,"Reloj"),e.qZA(),e.TgZ(92,"mat-checkbox",27),e._uU(93,"Radio Reproductora"),e.qZA(),e.TgZ(94,"mat-checkbox",27),e._uU(95,"Parlantes"),e.qZA(),e.TgZ(96,"mat-checkbox",27),e._uU(97,"Hidr\xe1ulicos Capot"),e.qZA(),e.TgZ(98,"mat-checkbox",27),e._uU(99,"Hidr\xe1ulicos Port\xf3n Tras."),e.qZA()(),e.TgZ(100,"div",26)(101,"mat-checkbox",27),e._uU(102,"Alfombras"),e.qZA(),e.TgZ(103,"mat-checkbox",27),e._uU(104,"Claxon"),e.qZA(),e.TgZ(105,"mat-checkbox",27),e._uU(106,"Luces Del."),e.qZA(),e.TgZ(107,"mat-checkbox",27),e._uU(108,"Luces Tras."),e.qZA(),e.TgZ(109,"mat-checkbox",27),e._uU(110,"3er stop"),e.qZA(),e.TgZ(111,"mat-checkbox",27),e._uU(112,"Gato"),e.qZA(),e.TgZ(113,"mat-checkbox",27),e._uU(114,"Llave Rueda"),e.qZA(),e.TgZ(115,"mat-checkbox",27),e._uU(116,"Antena"),e.qZA(),e.TgZ(117,"mat-checkbox",27),e._uU(118,"Aire Acondicionado"),e.qZA(),e.TgZ(119,"mat-checkbox",27),e._uU(120,"Parrilla Motor"),e.qZA()(),e.TgZ(121,"div",25),e._uU(122," Detalles resultantes en la inspecci\xf3n "),e.qZA(),e.TgZ(123,"mat-form-field",28)(124,"mat-label"),e._uU(125,"Observaciones"),e.qZA(),e._UZ(126,"textarea",29),e.qZA()()()()()()),2&r){const s=e.MAs(35),a=e.MAs(45),l=e.MAs(55);e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(2),e.Oqu("new"===i.vehicleInspectionId?"Registrar Inspecci\xf3n":i.selectedVehicleInspection.vehicle.registrationNumber),e.xp6(2),e.um2(21,i.editMode?-1:21),e.xp6(),e.um2(22,i.editMode?22:-1),e.xp6(2),e.Q6J("formGroup",i.inspectionForm)("autocomplete","off"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchEmployeeControl)("matAutocomplete",s)("placeholder","Buscar empleado")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFnEmployee),e.xp6(2),e.wJu(e.lcZ(38,57,i.employeesFiltered$)),e.xp6(6),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchVehicleControl)("matAutocomplete",a)("placeholder","Buscar veh\xedculo")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFnVehicle),e.xp6(2),e.wJu(e.lcZ(48,59,i.vehiclesFiltered$)),e.xp6(6),e.Q6J("formControlName","date")("max",i.maxDate)("matDatepicker",l)("placeholder","MM/DD/YYYY"),e.xp6(),e.Q6J("for",l),e.xp6(6),e.Q6J("formControlName","tank_cover_fuel"),e.xp6(2),e.Q6J("formControlName","tank_cover_brake_fluid"),e.xp6(2),e.Q6J("formControlName","tank_cover_coolant_liquid"),e.xp6(2),e.Q6J("formControlName","tank_cover_windshield_water"),e.xp6(2),e.Q6J("formControlName","tank_cover_oil"),e.xp6(2),e.Q6J("formControlName","radiator_cover"),e.xp6(2),e.Q6J("formControlName","oil_stick"),e.xp6(2),e.Q6J("formControlName","wheel_trim"),e.xp6(2),e.Q6J("formControlName","front_brushes"),e.xp6(2),e.Q6J("formControlName","tail_brush"),e.xp6(3),e.Q6J("formControlName","emblems"),e.xp6(2),e.Q6J("formControlName","inside_mirror"),e.xp6(2),e.Q6J("formControlName","outside_left_mirrors"),e.xp6(2),e.Q6J("formControlName","outside_right_mirrors"),e.xp6(2),e.Q6J("formControlName","cigar_lighter"),e.xp6(2),e.Q6J("formControlName","clock"),e.xp6(2),e.Q6J("formControlName","radio_player"),e.xp6(2),e.Q6J("formControlName","speakers"),e.xp6(2),e.Q6J("formControlName","bonnet_hydraulic_arm"),e.xp6(2),e.Q6J("formControlName","tailgate_hydraulic_arm"),e.xp6(3),e.Q6J("formControlName","rugs"),e.xp6(2),e.Q6J("formControlName","horn"),e.xp6(2),e.Q6J("formControlName","front_lights"),e.xp6(2),e.Q6J("formControlName","tail_lights"),e.xp6(2),e.Q6J("formControlName","third_stop"),e.xp6(2),e.Q6J("formControlName","cat"),e.xp6(2),e.Q6J("formControlName","wheel_wrench"),e.xp6(2),e.Q6J("formControlName","antenna"),e.xp6(2),e.Q6J("formControlName","air_conditioning"),e.xp6(2),e.Q6J("formControlName","engine_grill"),e.xp6(7),e.Q6J("formControlName","obs")("rows",2)}},dependencies:[E.Ov,n.u5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.nD,V.Bb,fe.PQ,V.XC,se.ey,V.ZL,h.ot,h.lW,J.FA,J.Mq,J.hl,J.nW,T.Is,u.lN,u.KE,u.hX,u.qo,u.R9,U.Ps,U.Hw,Y.LD,E.mk,n.UX,n.oH,n.sg,n.u],encapsulation:2,changeDetection:0})}return o})();var ce=p(77988),z=p(16676),Te=p(36236),R=p(57069),Fe=p(53374);const Se=o=>o.workshopOrders,ho=(0,b.P1)(Se,o=>o.workshopOrder),ee=(0,b.P1)(Se,o=>o.workshopOrders);var Ee=p(29643),qe=p(83620),fo=p(7185),go=p(302),_o=p(10959),H=p(98371);const vo=v.Ps`
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
`,xo=v.Ps`
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
`,bo=v.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateWorkshopOrderStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,ko=v.Ps`
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
                    fullname
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
`,Co=v.Ps`
    mutation RemoveWorkshopOrder($removeWorkshopOrderId: String!) {
        removeWorkshopOrder(id: $removeWorkshopOrderId) {
            ok
            message
        }
    }
`,Io=v.Ps`
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
                    fullname
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
`,yo=v.Ps`
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
`;let le=(()=>{class o{constructor(t,r,i){this.apolloProvider=t,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createWorkshopOrder(t){return this.store.select(ee).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:vo,variables:{createWorkshopOrderInput:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i,data:s})=>{if(i){let l="";i.forEach(d=>l+=`\n ${d.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,C.cloneDeep)(r);a.push(s.createWorkshopOrder.workshopOrder),this.store.dispatch((0,H.tM)({workshopOrders:a}))}))))}getWorkshopOrders(t=1,r=20,i="code",s="asc",a=""){return this._apollo.query({query:Io,errorPolicy:"all",variables:{offset:r*(t-1),limit:r,sort:i,order:s,search:a}}).pipe((0,f.b)(({errors:l,data:d})=>{if(l){let I="";l.forEach(K=>I+=`\n ${K.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:I,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,re.Jr)({pagination:d.findAllWorkshopOrders.pagination})),this.store.dispatch((0,H.tM)({workshopOrders:d.findAllWorkshopOrders.workshopOrders}))}))}getWorkshopOrderById(t){return this._apollo.query({query:yo,variables:{findWorkshopOrderByIdId:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:r,data:i})=>{if(r){let s="";r.forEach(a=>s+=`\n ${a.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,H.Xh)({workshopOrder:i.findWorkshopOrderById.workshopOrder}))}))}updateWorkshopOrder(t){return this.store.select(ee).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:xo,variables:{updateWorkshopOrderInput:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i,data:s})=>{if(i){let d="";i.forEach(I=>d+=`\n ${I.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,C.cloneDeep)(r);a[r.findIndex(d=>d.id===t.id)]=s.updateWorkshopOrder.workshopOrder,this.store.dispatch((0,H.tM)({workshopOrders:a}))}))))}updateWorkshopOrderStatus(t){return this.store.select(ee).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:bo,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i})=>{if(i){let l="";i.forEach(d=>l+=`\n ${d.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,C.cloneDeep)(r);s[r.findIndex(l=>l.id===t.id)].active=t.active,this.store.dispatch((0,H.tM)({workshopOrders:s}))}))))}removeWorkshopOrder(t){return this.store.select(ee).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:Co,variables:{removeWorkshopOrderId:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i})=>{if(i){let l="";i.forEach(d=>l+=`\n ${d.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,C.cloneDeep)(r),a=r.findIndex(l=>l.id===t);s.splice(a,1),this.store.dispatch((0,H.tM)({workshopOrders:s}))}))))}closeWorkshopOrder(t){return this.store.select(ee).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:ko,variables:{closeWorkshopOrderInput:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i,data:s})=>{if(i){let d="";i.forEach(I=>d+=`\n ${I.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,C.cloneDeep)(r);a[r.findIndex(d=>d.id===t.workshopOrderId)]=s.closeWorkshopOrder.workshopOrder,this.store.dispatch((0,H.tM)({workshopOrders:a}))}))))}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(v._M),e.LFG(q.ux),e.LFG(b.yh))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ao=p(90716);function Zo(o,c){if(1&o&&(e.TgZ(0,"mat-option",7),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(),e.Oqu(t.name)}}function wo(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Debe seleccionar un m\xe9todo de pago. "),e.qZA())}function To(o,c){if(1&o&&(e.TgZ(0,"mat-option",7),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(),e.Oqu(t.name)}}function Fo(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Debe seleccionar un tipo de operaci\xf3n. "),e.qZA())}function So(o,c){if(1&o&&(e.TgZ(0,"mat-option",7),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(),e.AsE(" ",t.name," ",t.value," ")}}function Eo(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Debe seleccionar un tipo de cambio. "),e.qZA())}function qo(o,c){if(1&o&&(e.TgZ(0,"mat-option",7),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.Q6J("value",t.value),e.xp6(),e.hij("x",t.value,"")}}function Uo(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Debe seleccionar un tipo de cambio. "),e.qZA())}function Wo(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," 'La suma del valor de los porcentajes en ambas monedas debe ser 1' "),e.qZA())}function Do(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," 'La suma del valor de los porcentajes en ambas monedas debe ser 1' "),e.qZA())}let Oo=(()=>{class o{constructor(t,r,i,s,a,l){this.data=t,this._changeDetectorRef=r,this._formBuilder=i,this._dialogRef=s,this._snackBar=a,this.store=l,this.multipliers=[],this.operationTypes=[],this.paymentMethods=[],this.rates=[],this._unsubscribeAll=new w.x,this._fuseConfirmationService=(0,e.f3M)(O.R),this._workshopOrdersService=(0,e.f3M)(le),this.workshopOrder=t.workshopOrder}ngOnInit(){this.closeWorkshopOrderDataForm=this._formBuilder.group({workshopOrderId:new n.NI(this.workshopOrder.id,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),paymentMethodId:new n.NI(null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),operationTypeId:new n.NI(null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),rateId:new n.NI(null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),multiplier:new n.NI(1,[n.kI.required,n.kI.min(1)]),currenciesPercents:this._formBuilder.group({cup:new n.NI(1,[n.kI.required,n.kI.min(0),n.kI.max(1)]),usd:new n.NI(0,[n.kI.required,n.kI.min(0),n.kI.max(1)])},{validators:this.validatePercentages("cup","usd")})}),this.store.select(Ao.Af).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.multipliers=t,this._changeDetectorRef.markForCheck()}),this.store.select(fo.pU).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.operationTypes=t,this._changeDetectorRef.markForCheck()}),this.store.select(go.VS).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.paymentMethods=t,this._changeDetectorRef.markForCheck()}),this.store.select(_o.I).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.rates=t,this._changeDetectorRef.markForCheck()}),this.closeWorkshopOrderDataForm.get("currenciesPercents.cup").valueChanges.pipe((0,qe.b)(700)).subscribe(t=>{this.closeWorkshopOrderDataForm.get("currenciesPercents.usd").setValue(1-t),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}closeWorkshopOrder(){const t=this.closeWorkshopOrderDataForm.getRawValue();this._fuseConfirmationService.open({title:"Cerrar orden de trabajo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?\nSe crear\xe1 una factura inmediatamente.",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._workshopOrdersService.closeWorkshopOrder(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.closeWorkshopOrder.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}validatePercentages(t,r){return i=>{const s=i.get(t),a=i.get(r);if(!(s&&t&&a&&r&&(s.hasError("validPercentages")&&(delete s.errors.controlCup,s.updateValueAndValidity()),a.hasError("validPercentages")&&(delete a.errors.controlUsd,a.updateValueAndValidity()),s.value+a.value!==1)))return null;const l={validPercentages:"La suma del valor de los porcentajes en ambas monedas debe ser 1"};return s.setErrors(l),a.setErrors(l),l}}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(T.WI),e.Y36(e.sBO),e.Y36(n.qu),e.Y36(T.so),e.Y36(q.ux),e.Y36(b.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-order-close-dialog"]],standalone:!0,features:[e.jDz],decls:52,vars:23,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"w-full","p-8"],[1,"grid","w-full","grid-cols-1","gap-5","sm:grid-cols-2","md:grid-cols-3",3,"formGroup","autocomplete"],[1,"fuse-mat-dense"],[3,"formControlName"],[3,"value"],[1,"grid","grid-cols-1","gap-5","sm:grid-cols-2","sm:col-span-2",3,"formGroupName"],["matInput","","type","number","required","","min","0","max","1","step",".1",3,"formControlName","placeholder"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3)(5,"form",4)(6,"mat-form-field",5)(7,"mat-label"),e._uU(8,"M\xe9todo de pago"),e.qZA(),e.TgZ(9,"mat-select",6),e.SjG(10,Zo,2,2,"mat-option",7,e.x6l),e.qZA(),e.YNc(12,wo,2,0,"mat-error"),e.qZA(),e.TgZ(13,"mat-form-field",5)(14,"mat-label"),e._uU(15,"Tipo de operaci\xf3n"),e.qZA(),e.TgZ(16,"mat-select",6),e.SjG(17,To,2,2,"mat-option",7,e.x6l),e.qZA(),e.YNc(19,Fo,2,0,"mat-error"),e.qZA(),e.TgZ(20,"mat-form-field",5)(21,"mat-label"),e._uU(22,"Tipo de cambio"),e.qZA(),e.TgZ(23,"mat-select",6),e.SjG(24,So,2,3,"mat-option",7,e.x6l),e.qZA(),e.YNc(26,Eo,2,0,"mat-error"),e.qZA(),e.TgZ(27,"mat-form-field",5)(28,"mat-label"),e._uU(29,"Multiplicador"),e.qZA(),e.TgZ(30,"mat-select",6)(31,"mat-option",7),e._uU(32,"x1"),e.qZA(),e.SjG(33,qo,2,2,"mat-option",7,e.x6l),e.qZA(),e.YNc(35,Uo,2,0,"mat-error"),e.qZA(),e.TgZ(36,"form",8)(37,"mat-form-field",5)(38,"mat-label"),e._uU(39,"Por ciento a facturar en CUP"),e.qZA(),e._UZ(40,"input",9),e.YNc(41,Wo,2,0,"mat-error"),e.qZA(),e.TgZ(42,"mat-form-field",5)(43,"mat-label"),e._uU(44,"Por ciento a facturar en USD"),e.qZA(),e._UZ(45,"input",9),e.YNc(46,Do,2,0,"mat-error"),e.qZA()()()(),e.TgZ(47,"div",10)(48,"button",11),e._uU(49," Cancelar "),e.qZA(),e.TgZ(50,"button",12),e.NdJ("click",function(){return i.closeWorkshopOrder()}),e._uU(51," Agregar "),e.qZA()()()),2&r&&(e.xp6(3),e.hij(" Cerrar orden de trabajo ",i.workshopOrder.no," "),e.xp6(2),e.Q6J("formGroup",i.closeWorkshopOrderDataForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","paymentMethodId"),e.xp6(),e.wJu(i.paymentMethods),e.xp6(2),e.um2(12,i.closeWorkshopOrderDataForm.get("paymentMethodId").hasError("required")?12:-1),e.xp6(4),e.Q6J("formControlName","operationTypeId"),e.xp6(),e.wJu(i.operationTypes),e.xp6(2),e.um2(19,i.closeWorkshopOrderDataForm.get("operationTypeId").hasError("required")?19:-1),e.xp6(4),e.Q6J("formControlName","rateId"),e.xp6(),e.wJu(i.rates),e.xp6(2),e.um2(26,i.closeWorkshopOrderDataForm.get("rateId").hasError("required")?26:-1),e.xp6(4),e.Q6J("formControlName","multiplier"),e.xp6(),e.Q6J("value",1),e.xp6(2),e.wJu(i.multipliers),e.xp6(2),e.um2(35,i.closeWorkshopOrderDataForm.get("multiplier").hasError("required")?35:-1),e.xp6(),e.Q6J("formGroupName","currenciesPercents"),e.xp6(4),e.Q6J("formControlName","cup")("placeholder","Ejemplo: 0.5"),e.xp6(),e.um2(41,i.closeWorkshopOrderDataForm.get("currenciesPercents.cup").hasError("validPercentages")?41:-1),e.xp6(4),e.Q6J("formControlName","usd")("placeholder","Ejemplo: 0.5"),e.xp6(),e.um2(46,i.closeWorkshopOrderDataForm.get("currenciesPercents.usd").hasError("validPercentages")?46:-1),e.xp6(2),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("color","primary")("disabled",i.closeWorkshopOrderDataForm.invalid)("matDialogClose","confirmed"))},dependencies:[T.Is,T.ZT,n.UX,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.Q7,n.qQ,n.Fd,n.sg,n.u,n.x0,u.lN,u.KE,u.hX,u.TO,h.ot,h.lW,Y.LD,Y.gD,se.ey],encapsulation:2})}return o})();class Ue{}class Ro{constructor(c,t){this.productId=c,this.quantity=t}}const No=o=>[o];function $o(o,c){if(1&o&&(e.TgZ(0,"button",31),e._UZ(1,"mat-icon",28),e.qZA()),2&o){const t=e.oxw().$implicit;e.Q6J("routerLink",e.VKq(2,No,t.id)),e.xp6(),e.Q6J("svgIcon","mat_solid:edit")}}function Vo(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.deleteWorkshopOrder(i))}),e._UZ(1,"mat-icon",28),e.qZA()}2&o&&(e.xp6(),e.Q6J("svgIcon","mat_solid:delete"))}function Jo(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.closeWorkshopOrderDialog(i))}),e._UZ(1,"mat-icon",28),e.qZA()}2&o&&(e.xp6(),e.Q6J("svgIcon","mat_solid:beenhere"))}const zo=(o,c)=>({"bg-yellow-600":o,"bg-emerald-600":c});function Lo(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",23)(1,"div",24),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA(),e.TgZ(5,"div",21),e._uU(6),e.qZA(),e.TgZ(7,"div",21),e._uU(8),e.qZA(),e.TgZ(9,"div",21),e._uU(10),e.qZA(),e.TgZ(11,"div",21),e._uU(12),e.qZA(),e.TgZ(13,"div",21)(14,"span",25),e._uU(15),e.qZA()(),e.TgZ(16,"div",26)(17,"button",27),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.printWorkshopOrder(s))}),e._UZ(18,"mat-icon",28),e.qZA(),e.YNc(19,$o,2,4,"button",29)(20,Vo,2,1,"button",30)(21,Jo,2,1,"button",30),e.qZA()()}if(2&o){const t=c.$implicit;e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.vehicle.registrationNumber," "),e.xp6(2),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.employee.fullname," "),e.xp6(2),e.hij(" ",t.inspection.no," "),e.xp6(2),e.hij(" ",t.workshop.name," "),e.xp6(2),e.Q6J("ngClass",e.WLB(12,zo,"open"===t.status,"close"===t.status)),e.xp6(),e.hij(" ","open"===t.status?"ABIERTA":"CERRADA"," "),e.xp6(3),e.Q6J("svgIcon","mat_solid:print"),e.xp6(),e.um2(19,"open"===t.status?19:-1),e.xp6(),e.um2(20,"open"===t.status?20:-1),e.xp6(),e.um2(21,"open"===t.status?21:-1)}}const Bo=o=>({"pointer-events-none":o}),Qo=()=>[5,10,25,100];function Mo(o,c){if(1&o&&(e.TgZ(0,"div",18)(1,"div",19)(2,"div",20),e._uU(3," NO "),e.qZA(),e.TgZ(4,"div",21),e._uU(5," Veh\xedculo "),e.qZA(),e.TgZ(6,"div",21),e._uU(7," Cliente "),e.qZA(),e.TgZ(8,"div",21),e._uU(9," Empleado "),e.qZA(),e.TgZ(10,"div",21),e._uU(11," Inspecci\xf3n "),e.qZA(),e.TgZ(12,"div",21),e._uU(13," Taller "),e.qZA(),e.TgZ(14,"div",21),e._uU(15," Estado "),e.qZA(),e.TgZ(16,"div",21),e._uU(17," Acciones "),e.qZA()(),e.SjG(18,Lo,22,15,"div",32,e.QCX().trackByFn),e._UZ(20,"mat-paginator",22),e.qZA()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(16),e.wJu(t.workshopOrders),e.xp6(2),e.Q6J("ngClass",e.VKq(7,Bo,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(9,Qo))("showFirstLastButtons",!0)}}function Yo(o,c){1&o&&(e.TgZ(0,"div",33),e._uU(1," \xa1No hay \xf3rdenes de trabajo creados para el negocio!"),e.qZA())}const jo=()=>["new"];R.vfs=Te.I.vfs;let Go=(()=>{class o{constructor(t,r,i,s){this._changeDetectorRef=t,this._dialog=r,this._snackBar=i,this.store=s,this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.searchInputControl=new n.NI,this.selectedSlide=null,this.user=null,this.workshopOrder=new Ue,this.workshopOrders=[],this._unsubscribeAll=new w.x,this._workshopOrdersService=(0,e.f3M)(le),this._fuseConfirmationService=(0,e.f3M)(O.R)}ngOnInit(){this.store.select(Fe.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(Ee.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(ee).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.workshopOrders=t,this._changeDetectorRef.markForCheck()}),this.store.select(j.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,Z.T)(this._sort.sortChange,this._paginator.page).pipe((0,_.w)(()=>(this.isLoading=!0,this._workshopOrdersService.getWorkshopOrders(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,y.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteWorkshopOrder(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la orden de trabajo: ${t.no}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._workshopOrdersService.removeWorkshopOrder(t.id).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeWorkshopOrder.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}generateOsPDF(t="open"){const r={content:[{table:{widths:["*","*","*"],headerRows:1,body:[[{text:"",border:[!0,!0,!1,!0]},{alignment:"center",text:"MODELO DE ORDEN DE TRABAJO",bold:!0,border:[!1,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{text:"No OT:",border:[!1,!0,!0,!0],bold:!0,fontFeatures:["c2sc","smcp"]}],[{alignment:"left",text:"DATOS DEL CLIENTE",bold:!0,border:[!0,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"DATOS DEL VEH\xcdCULO",bold:!0,border:[!1,!0,!0,!0],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{alignment:"left",text:"NOMBRE DE LA EMPRESA",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"MARCA",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"center",text:"SERVICIOS",bold:!0,fontFeatures:["c2sc","smcp"]}],[{rowSpan:2,text:""},{alignment:"left",text:"MODELO",bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"MEC\xc1NICA",bold:!0,fontFeatures:["c2sc","smcp"]}],[{},{alignment:"left",text:"MATR\xcdCULA",bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"CHAPISTER\xcdA",bold:!0,fontFeatures:["c2sc","smcp"]}],[{alignment:"left",text:"NOMBRE DEL CLIENTE",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"COLOR",bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"PINTURA",bold:!0,fontFeatures:["c2sc","smcp"]}],[{rowSpan:2,text:""},{alignment:"left",text:"BATER\xcdA",bold:!0,border:[!1,!1,!0,!1],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{},{alignment:"left",text:"REPRODUCTORA",bold:!0,border:[!1,!1,!0,!1],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{alignment:"left",text:"TEL\xc9FONO",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"COMBUSTIBLE",bold:!0,border:[!1,!1,!0,!0],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{alignment:"center",text:"INVENTARIO DEL VEH\xcdCULO",bold:!0,colSpan:3,fontFeatures:["c2sc","smcp"]},{},{}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:"Tapa dep. combustible",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Emblemas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Alfombras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. L. Freno",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Retrovisor interior",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Claxon",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. L. Refrig.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Retrovisores Ext Izq.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Luces Del.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. Parabrisas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Retrovisores Ext Der.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Luces Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. Aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Encendedor cigarros",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"3er stop",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa radiador",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Reloj",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Gato",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Varilla aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Radio Reproductora",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Llave Rueda",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Embellecedor ruedas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Parlantes",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Antena",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Escobillas delanteras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Hidr\xe1ulicos Capot",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Aire Acondicionado",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Escobilla trasera",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Hidr\xe1ulicos Port\xf3n Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Parrilla Motor",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Solicitud del cliente",colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{alignment:"center",text:"MATERIALES",bold:!0,colSpan:6,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"observaciones",colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:"elaborado",colSpan:4,border:[!0,!1,!1,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{},{},{},{text:"aprobado",colSpan:2,border:[!1,!1,!0,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{}]]}}],footer:(i,s)=>({table:{widths:["*","*"],body:[[{text:"MODELO DE ORDEN DE TRABAJO",bold:!0,fontSize:8},{text:`P\xe1gina ${i.toString()}/${s} - Fecha de impresi\xf3n ${z().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"],fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"]},totals_value:{alignment:"center",fontFeatures:["c2sc","smcp"]}},pageOrientation:"portrait",pageSize:"LETTER",info:{title:"MODELO DE ORDEN DE TRABAJO",author:`${this.user.name} ${this.user.lastname1} ${this.user.lastname2}`,creationDate:z().toDate(),modDate:z().toDate(),producer:this.merchant.name}};switch(t){case t="download":R.createPdf(r).download();break;case t="open":R.createPdf(r).open();break;case t="print":R.createPdf(r).print()}}printWorkshopOrder(t,r="open"){const i={content:[{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{colSpan:2,text:"",border:[!0,!0,!1,!0]},{text:""},{colSpan:2,alignment:"center",text:"MODELO DE ORDEN DE TRABAJO",bold:!0,border:[!1,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:2,color:"red",text:`No OT: ${t.no}`,border:[!1,!0,!0,!0],bold:!0,fontFeatures:["c2sc","smcp"]},{text:""}],[{colSpan:2,alignment:"left",text:"DATOS DEL CLIENTE",bold:!0,border:[!0,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:4,alignment:"left",text:"DATOS DEL VEH\xcdCULO",bold:!0,border:[!1,!0,!0,!0],fontFeatures:["c2sc","smcp"]},{text:""},{text:"",colSpan:2},{text:""}],[{colSpan:2,alignment:"left",text:"NOMBRE DE LA EMPRESA",bold:!0,fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:2,color:"red",alignment:"left",text:`MARCA: ${t.vehicle.brand.name}`,bold:!0,fontFeatures:["c2sc","smcp"],border:[!0,!0,!0,!1]},{text:""},{colSpan:2,alignment:"center",text:"SERVICIOS",bold:!0,fontFeatures:["c2sc","smcp"]},{text:""}],[{colSpan:2,color:"red",rowSpan:2,text:`${t.customer.name}`},{text:""},{colSpan:2,color:"red",alignment:"left",text:`MODELO: ${t.vehicle.model}`,bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{text:""},{alignment:"left",text:"MEC\xc1NICA",bold:!0,fontFeatures:["c2sc","smcp"]},{color:"red",alignment:"center",text:t.serviceTypes.findIndex(s=>"mec\xe1nica"===s.name.trim().toLocaleLowerCase())>-1?"X":""}],[{text:"",colSpan:2},{text:""},{colSpan:2,color:"red",alignment:"left",text:`MATR\xcdCULA: ${t.vehicle.registrationNumber}`,bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{text:""},{alignment:"left",text:"CHAPISTER\xcdA",bold:!0,fontFeatures:["c2sc","smcp"]},{color:"red",alignment:"center",text:t.serviceTypes.findIndex(s=>"chapister\xeda"===s.name.trim().toLocaleLowerCase())>-1?"X":""}],[{colSpan:2,alignment:"left",text:"NOMBRE DEL CLIENTE",bold:!0,fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:2,color:"red",alignment:"left",text:`COLOR: ${t.vehicle.color}`,bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{text:""},{alignment:"left",text:"PINTURA",bold:!0,fontFeatures:["c2sc","smcp"]},{color:"red",alignment:"center",text:t.serviceTypes.findIndex(s=>"pintura"===s.name.trim().toLocaleLowerCase())>-1?"X":""}],[{colSpan:2,color:"red",rowSpan:2,text:`${t.customer.name}`},{text:""},{colSpan:4,color:"red",alignment:"left",text:`BATER\xcdA: ${t.vehicle.battery}`,bold:!0,border:[!1,!1,!0,!1],fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""}],[{},{text:""},{color:"red",alignment:"left",text:`REPRODUCTORA: ${t.vehicle.carPlayer}`,bold:!0,border:[!1,!1,!0,!1],colSpan:4,fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""}],[{colSpan:2,color:"red",alignment:"left",text:`TEL\xc9FONO: ${t.customer.phone}`,bold:!0,fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:4,color:"red",alignment:"left",text:`COMBUSTIBLE: ${t.vehicle.fuel.name}`,bold:!0,border:[!1,!1,!0,!0],fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""}],[{alignment:"center",text:"INVENTARIO DEL VEH\xcdCULO",bold:!0,colSpan:5,fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""},{},{text:""}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:"Tapa dep. combustible",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_fuel?"X":"",alignment:"center"},{text:"Emblemas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.emblems?"X":"",alignment:"center"},{text:"Alfombras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.rugs?"X":"",alignment:"center"}],[{text:"Tapa dep. L. Freno",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_brake_fluid?"X":"",alignment:"center"},{text:"Retrovisor interior",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.inside_mirror?"X":"",alignment:"center"},{text:"Claxon",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.horn?"X":"",alignment:"center"}],[{text:"Tapa dep. L. Refrig.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_coolant_liquid?"X":"",alignment:"center"},{text:"Retrovisores Ext Izq.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.outside_left_mirrors?"X":"",alignment:"center"},{text:"Luces Del.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.front_lights?"X":"",alignment:"center"}],[{text:"Tapa dep. Parabrisas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_windshield_water?"X":"",alignment:"center"},{text:"Retrovisores Ext Der.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.outside_right_mirrors?"X":"",alignment:"center"},{text:"Luces Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tail_lights?"X":"",alignment:"center"}],[{text:"Tapa dep. Aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_oil?"X":"",alignment:"center"},{text:"Encendedor cigarros",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.cigar_lighter?"X":"",alignment:"center"},{text:"3er stop",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.third_stop?"X":"",alignment:"center"}],[{text:"Tapa radiador",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.radiator_cover?"X":"",alignment:"center"},{text:"Reloj",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.clock?"X":"",alignment:"center"},{text:"Gato",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.cat?"X":"",alignment:"center"}],[{text:"Varilla aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.oil_stick?"X":"",alignment:"center"},{text:"Radio Reproductora",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.radio_player?"X":"",alignment:"center"},{text:"Llave Rueda",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.wheel_wrench?"X":"",alignment:"center"}],[{text:"Embellecedor ruedas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.wheel_trim?"X":"",alignment:"center"},{text:"Parlantes",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.speakers?"X":"",alignment:"center"},{text:"Antena",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.antenna?"X":"",alignment:"center"}],[{text:"Escobillas delanteras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tail_brush?"X":"",alignment:"center"},{text:"Hidr\xe1ulicos Capot",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.bonnet_hydraulic_arm?"X":"",alignment:"center"},{text:"Aire Acondicionado",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.air_conditioning?"X":"",alignment:"center"}],[{text:"Escobilla trasera",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tail_brush?"X":"",alignment:"center"},{text:"Hidr\xe1ulicos Port\xf3n Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tailgate_hydraulic_arm?"X":"",alignment:"center"},{text:"Parrilla Motor",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.engine_grill?"X":"",alignment:"center"}],[{color:"red",text:`Solicitud del cliente: ${t.comments}`,colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{alignment:"center",text:"MATERIALES",bold:!0,colSpan:6,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{colSpan:5,text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{},{},{},{},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],...t.productsInOrder.map(s=>[{color:"red",colSpan:5,text:s.name,bold:!0,fontFeatures:["c2sc","smcp"]},{},{},{},{},{color:"red",text:this._getProductQuantity(t.products,s.id),alignment:"center",bold:!0,fontFeatures:["c2sc","smcp"]}]),[{alignment:"center",text:"SERVICIOS",bold:!0,colSpan:6,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],...t.servicesInOrder.map(s=>[{color:"red",colSpan:6,text:s.description,bold:!0,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}]),[{color:"red",text:`observaciones: ${t.inspection.obs}`,colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{color:"red",text:`elaborado: ${t.employee.fullname}`,colSpan:4,border:[!0,!1,!1,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{},{},{},{text:"aprobado",colSpan:2,border:[!1,!1,!0,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{}]]}}],footer:(s,a)=>({table:{widths:["*","*"],body:[[{text:"MODELO DE ORDEN DE TRABAJO",bold:!0,fontSize:8},{text:`P\xe1gina ${s.toString()}/${a} - Fecha de impresi\xf3n ${z().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"],fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"]},totals_value:{alignment:"center",fontFeatures:["c2sc","smcp"]}},pageOrientation:"portrait",pageSize:"LETTER",info:{title:"MODELO DE ORDEN DE TRABAJO",author:`${this.user.name} ${this.user.lastname1} ${this.user.lastname2}`,creationDate:z().toDate(),modDate:z().toDate(),producer:this.merchant.name}};switch(r){case r="download":R.createPdf(i).download();break;case r="open":R.createPdf(i).open();break;case r="print":R.createPdf(i).print()}}trackByFn(t,r){return r.id||t}closeWorkshopOrderDialog(t){this._dialog.open(Oo,{data:{workshopOrder:t},panelClass:"ath-dialog-panel"})}_getProductQuantity(t,r){return t.find(i=>i.productId===r).quantity}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(e.sBO),e.Y36(T.uw),e.Y36(q.ux),e.Y36(b.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-orders"]],viewQuery:function(r,i){if(1&r&&(e.Gf(F.NW,5),e.Gf(A.YE,5)),2&r){let s;e.iGM(s=e.CRH())&&(i._paginator=s.first),e.iGM(s=e.CRH())&&(i._sort=s.first)}},standalone:!0,features:[e.jDz],decls:31,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-auto","sm:mb-18"],["class","grid"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","workshops-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[3,"mat-sort-header"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","workshops-grid","md:px-8"],[1,"truncate"],[1,"rounded-full","py-0.5","px-2.5",3,"ngClass"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["class","px-2 leading-6 min-w-10 min-h-7 h-7","mat-stroked-button","",3,"routerLink"],["class","px-2 leading-6 min-w-10 min-h-7 h-7","mat-stroked-button",""],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],["class","grid items-center gap-4 px-6 py-3 border-b workshops-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Taller"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"\xd3rdenes de Trabajo"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," \xd3rdenes de Trabajo "),e.qZA()()(),e.TgZ(18,"div",10)(19,"button",11),e.NdJ("click",function(){return i.generateOsPDF()}),e._UZ(20,"mat-icon",12),e.TgZ(21,"span",13),e._uU(22,"Descargar Modelo"),e.qZA()(),e.TgZ(23,"button",14),e._UZ(24,"mat-icon",12),e.TgZ(25,"span",13),e._uU(26,"Agregar"),e.qZA()()()(),e.TgZ(27,"div",15)(28,"div",16),e.YNc(29,Mo,21,10,"div",17)(30,Yo,2,0),e.qZA()()()),2&r&&(e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:file_download"),e.xp6(3),e.Q6J("routerLink",e.DdM(6,jo)),e.xp6(),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.um2(29,i.workshopOrders.length>0?29:30))},dependencies:[h.ot,h.lW,u.lN,U.Ps,U.Hw,M.c,ce.Tx,F.TU,F.NW,G.Cq,S.rP,A.JX,A.YE,A.nU,E.mk,n.UX,D.rH],encapsulation:2,changeDetection:0})}return o})();var Ho=p(16650);const We=o=>o.workshopServices,te=((0,b.P1)(We,o=>o.workshopService),(0,b.P1)(We,o=>o.workshopServices));var Ko=p(12936),De=p(47452);const Oe=o=>({"cursor-not-allowed":o});function Xo(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",38),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createWorkshopOrder())}),e._UZ(1,"mat-icon",39),e.TgZ(2,"span",40),e._uU(3,"Guardar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.workshopOrderForm.invalid)("ngClass",e.VKq(3,Oe,t.workshopOrderForm.invalid)),e.xp6(),e.Q6J("svgIcon","mat_solid:save")}}function er(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",38),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.updateWorkshopOrder())}),e._UZ(1,"mat-icon",39),e.TgZ(2,"span",40),e._uU(3,"Actualizar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.workshopOrderForm.invalid)("ngClass",e.VKq(3,Oe,t.workshopOrderForm.invalid)),e.xp6(),e.Q6J("svgIcon","mat_solid:refresh")}}function tr(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",41),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectVehicleInspection(s))}),e._uU(1),e.qZA()}if(2&o){const t=c.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.no," ")}}function or(o,c){if(1&o&&(e.TgZ(0,"mat-option",42),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function rr(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El taller del servicio es obligatorio "),e.qZA())}function ir(o,c){if(1&o&&(e.TgZ(0,"mat-option",42),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.name," ")}}function sr(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de servicio es obligatorio "),e.qZA())}function nr(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",41),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.addWorkshopServiceToOrder(s))}),e._uU(1),e.qZA()}if(2&o){const t=c.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.description," ")}}function ar(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",47)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",48),e._uU(4),e.qZA(),e.TgZ(5,"div",49),e._uU(6),e.ALo(7,"number"),e.qZA(),e.TgZ(8,"div",49),e._uU(9),e.ALo(10,"number"),e.qZA(),e.TgZ(11,"div",50)(12,"button",51),e.NdJ("click",function(){const s=e.CHM(t).$index,a=e.oxw(2);return e.KtG(a.removeServiceToOrder(s))}),e._UZ(13,"mat-icon",52),e.qZA()()()}if(2&o){const t=c.$implicit,r=c.$index;e.xp6(2),e.hij(" ",r+1," "),e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",e.xi3(7,5,t.minPrice,"1.2-2")," "),e.xp6(3),e.hij(" ",e.xi3(10,8,t.maxPrice,"1.2-2")," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function cr(o,c){if(1&o&&(e.TgZ(0,"div",43)(1,"div",44),e._UZ(2,"div"),e.TgZ(3,"div",45),e._uU(4," Descripci\xf3n "),e.qZA(),e.TgZ(5,"div",46),e._uU(6," Precio M\xednimo "),e.qZA(),e.TgZ(7,"div",46),e._uU(8," Precio M\xe1ximo "),e.qZA(),e.TgZ(9,"div",46),e._uU(10," Quitar "),e.qZA()(),e.SjG(11,ar,14,11,"div",53,e.QCX().trackByFn),e.qZA()),2&o){const t=e.oxw();e.xp6(11),e.wJu(t.orderServices)}}function lr(o,c){1&o&&(e.TgZ(0,"div",54),e._uU(1," \xa1No ha seleccionado ning\xfan servicio a\xfan! "),e.qZA())}function pr(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",41),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.addProductToOrder(s))}),e._uU(1),e.qZA()}if(2&o){const t=c.$implicit;e.Q6J("value",t),e.xp6(),e.hij(" ",t.name," ")}}function dr(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",47)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",48),e._uU(4),e.qZA(),e.TgZ(5,"div",46),e._uU(6),e.qZA(),e.TgZ(7,"div",46)(8,"div",55)(9,"button",56),e.NdJ("click",function(){const i=e.CHM(t),s=i.$index,a=i.$implicit,l=e.oxw(2);return e.KtG(l.decrementProductQty(s,a))}),e._UZ(10,"mat-icon",52),e.qZA(),e.TgZ(11,"mat-form-field",57)(12,"input",58),e.NdJ("ngModelChange",function(i){const a=e.CHM(t).$implicit;return e.KtG(a.quantity=i)}),e.qZA()(),e.TgZ(13,"button",56),e.NdJ("click",function(){const i=e.CHM(t),s=i.$index,a=i.$implicit,l=e.oxw(2);return e.KtG(l.incrementProductQty(s,a))}),e._UZ(14,"mat-icon",52),e.qZA()()(),e.TgZ(15,"div",49),e._uU(16),e.ALo(17,"number"),e.qZA(),e.TgZ(18,"div",49),e._uU(19),e.ALo(20,"number"),e.qZA(),e.TgZ(21,"div",50)(22,"button",51),e.NdJ("click",function(){const s=e.CHM(t).$index,a=e.oxw(2);return e.KtG(a.removeProductToOrder(s))}),e._UZ(23,"mat-icon",52),e.qZA()()()}if(2&o){const t=c.$implicit,r=c.$index;e.xp6(2),e.hij(" ",r+1," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",t.uom," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(2),e.Q6J("ngModel",t.quantity),e.xp6(2),e.Q6J("svgIcon","mat_solid:add"),e.xp6(2),e.hij(" ",e.xi3(17,9,t.price,"1.2-2")," "),e.xp6(3),e.hij(" ",e.xi3(20,12,t.quantity*t.price,"1.2-2")," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function mr(o,c){if(1&o&&(e.TgZ(0,"div",43)(1,"div",44),e._UZ(2,"div"),e.TgZ(3,"div",45),e._uU(4," Producto "),e.qZA(),e.TgZ(5,"div",46),e._uU(6," Presentaci\xf3n "),e.qZA(),e.TgZ(7,"div",46),e._uU(8," Cantidad "),e.qZA(),e.TgZ(9,"div",46),e._uU(10," Precio "),e.qZA(),e.TgZ(11,"div",46),e._uU(12," Total "),e.qZA(),e.TgZ(13,"div",46),e._uU(14," Quitar "),e.qZA()(),e.SjG(15,dr,24,15,"div",53,e.QCX().trackByFn),e.qZA()),2&o){const t=e.oxw();e.xp6(15),e.wJu(t.orderProducts)}}function ur(o,c){1&o&&(e.TgZ(0,"div",54),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}let hr=(()=>{class o{constructor(t,r,i,s,a,l){this._activatedRoute=t,this._changeDetectorRef=r,this._formBuilder=i,this._snackBar=s,this._router=a,this.store=l,this.editMode=!1,this.employees=[],this.employeeSelected="",this.maxDate=new Date,this.orderProducts=[],this.orderServices=[],this.products=[],this.searchEmployeeControl=new n.NI(""),this.searchInputControl=new n.NI,this.searchProductControl=new n.NI(""),this.searchVehicleControl=new n.NI(""),this.searchVehicleInspectionControl=new n.NI(""),this.searchWorkshopServiceControl=new n.NI(""),this.selectedWorkshopOrder=new Ue,this.serviceTypes=[],this.total=0,this.vehicleInspections=[],this.vehicleInspectionSelected="",this.vehicles=[],this.vehicleSelected="",this.workshopOrderId=null,this.workshops=[],this.workshopServices=[],this._unsubscribeAll=new w.x,this._fuseConfirmationService=(0,e.f3M)(O.R),this._workshopOrdersService=(0,e.f3M)(le)}ngOnInit(){this.store.select(Ho.Fr).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.serviceTypes=t,this._changeDetectorRef.markForCheck()}),this.store.select(B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.workshops=t,this._changeDetectorRef.markForCheck()}),this.store.select(te).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.workshopServices=t,this._changeDetectorRef.markForCheck()}),this.workshopServicesFiltered$=this.searchWorkshopServiceControl.valueChanges.pipe((0,N.O)(""),(0,y.U)(t=>{const r="string"==typeof t?t:t?.description;return r?this._filterWorkshopServices(r):this.workshopServices.slice()})),this.store.select(X).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.vehicles=t,this._changeDetectorRef.markForCheck()}),this.vehiclesFiltered$=this.searchVehicleControl.valueChanges.pipe((0,N.O)(""),(0,y.U)(t=>{const r="string"==typeof t?t:t?.registrationNumber;return r?this._filterVehicles(r):this.vehicles.slice()})),this.store.select(ne).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.vehicleInspections=t,this._changeDetectorRef.markForCheck()}),this.vehicleInspectionsFiltered$=this.searchVehicleInspectionControl.valueChanges.pipe((0,N.O)(""),(0,y.U)(t=>{const r="string"==typeof t?t:t?.no;return r?this._filterVehicleInspections(r):this.vehicleInspections.slice()})),this.store.select(Ze.ri).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.employees=t,this._changeDetectorRef.markForCheck()}),this.employeesFiltered$=this.searchEmployeeControl.valueChanges.pipe((0,N.O)(""),(0,y.U)(t=>{const r="string"==typeof t?t:t?.name;return r?this._filterEmployees(r):this.employees.slice()})),this.store.select(Ko.K2).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.products=t,this._changeDetectorRef.markForCheck()}),this.productsFiltered$=this.searchProductControl.valueChanges.pipe((0,N.O)(""),(0,y.U)(t=>{const r="string"==typeof t?t:t?.name;return r?this._filterProducts(r):this.products.slice()})),this.workshopOrderForm=this._formBuilder.group({id:[""],customerId:[null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],employeeId:[null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],inspectionId:[null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],serviceTypesId:[[],[n.kI.required]],vehicleId:[null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],workshopId:[null,[n.kI.required,n.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],initDate:[null],closeDate:[null],products:[[]],services:[[]],comments:[null,[n.kI.maxLength(1e4)]]}),this._activatedRoute.params.pipe((0,m.R)(this._unsubscribeAll)).subscribe(({workshopOrderId:t})=>{this.workshopOrderId=t,"new"!==this.workshopOrderId&&(this.editMode=!0,this.store.select(ho).pipe((0,m.R)(this._unsubscribeAll)).subscribe(r=>{this.selectedWorkshopOrder=r,this.workshopOrderForm.patchValue(r),this.searchEmployeeControl.patchValue(r.employee),this.searchVehicleInspectionControl.patchValue(r.inspection),this.selectVehicleInspection(r.inspection),this.orderProducts=this._mapProductFromProductInOrder(r.productsInOrder,r.products)})),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createWorkshopOrder(){const t=this.workshopOrderForm.getRawValue();delete t.id;const r=[];for(const a of this.orderProducts)r.push(this._mapProductToWorkshopOrder(a));t.products=r;const i=[];if(this.orderServices.length>0)for(const a of this.orderServices)i.push({serviceId:a.id,quantity:1});t.services=i,this._fuseConfirmationService.open({title:"Crear orden de trabajo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(a=>{"confirmed"===a&&this._workshopOrdersService.createWorkshopOrder(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:l})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:l.createWorkshopOrder.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/workshop-orders")}),this._changeDetectorRef.markForCheck()})}updateWorkshopOrder(){const t=this.workshopOrderForm.getRawValue(),r=[];for(const a of this.orderProducts)r.push(this._mapProductToWorkshopOrder(a));t.products=r;const i=[];if(this.orderServices.length>0)for(const a of this.orderServices)i.push({serviceId:a.id,quantity:1});t.services=i,this._fuseConfirmationService.open({title:"Actualizar orden de trabajo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(a=>{"confirmed"===a&&this._workshopOrdersService.updateWorkshopOrder(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:l})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:l.updateWorkshopOrder.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/workshop-orders")}),this._changeDetectorRef.markForCheck()})}selectEmployee(t){this.workshopOrderForm.get("employeeId").setValue(t.id)}selectVehicle(t){this.workshopOrderForm.get("vehicleId").setValue(t.id)}selectVehicleInspection(t){this.workshopOrderForm.get("inspectionId").setValue(t.id),this.workshopOrderForm.get("employeeId").setValue(t.employeeId),this.editMode||this.workshopOrderForm.get("customerId").setValue(t.vehicle.customerId),this.workshopOrderForm.get("vehicleId").setValue(t.vehicleId),this._changeDetectorRef.markForCheck()}addWorkshopServiceToOrder(t){this.orderServices.findIndex(i=>i.id===t.id)>-1?this.searchWorkshopServiceControl.reset():(this.orderServices.push(t),this.searchWorkshopServiceControl.reset(),this._calculateOrderTotal())}addProductToOrder(t){if(this.orderProducts.findIndex(s=>s.productId===t.productId)>-1)return void this.searchProductControl.reset();const i=this._mapProductToOrder(t);this.orderProducts.push(i),this.searchProductControl.reset(),this._calculateOrderTotal()}incrementProductQty(t,r){const i=r;i.quantity++,this.orderProducts[t]=i,this._calculateOrderTotal()}decrementProductQty(t,r){const i=r;i.quantity--,this.orderProducts[t]=i,this._calculateOrderTotal()}removeProductToOrder(t){this.orderProducts.splice(t,1),this._calculateOrderTotal()}removeServiceToOrder(t){this.orderServices.splice(t,1),this._calculateOrderTotal()}trackByFn(t,r){return r.id||t}displayFnEmployee(t){return t&&t.fullname?t.fullname:""}displayFnVehicle(t){return t&&t.registrationNumber?t.registrationNumber:""}displayFnVehicleInspection(t){return t&&t.no?t.no:""}displayFnWorkshopService(t){return t&&t.description?t.description:""}displayFnProduct(t){return t&&t.name?t.name:""}_filterEmployees(t){const r=t.toLowerCase();return this.employees.filter(i=>i.name.toLowerCase().includes(r))}_filterVehicles(t){const r=t.toLowerCase();return this.vehicles.filter(i=>i.registrationNumber.toLowerCase().includes(r))}_filterVehicleInspections(t){const r=t.toLowerCase();return this.vehicleInspections.filter(i=>i.no.toLowerCase().includes(r))}_filterProducts(t){const r=t.toLowerCase();return this.products.filter(i=>i.name.toLowerCase().includes(r))}_filterWorkshopServices(t){const r=t.toLowerCase();return this.workshopServices.filter(i=>i.description.toLowerCase().includes(r))}_mapProductToOrder(t){const{productId:r,name:i,uom:s,price:a}=t;return new De.vr(r,i,s,a,1)}_mapProductFromProductInOrder(t,r){const i=[];for(const s of t)i.push(new De.vr(s.id,s.name,s.uom.abbr,s.price,this._getProductQuantity(r,s.id)));return i}_calculateOrderTotal(){const t=Number(this.orderProducts.reduce((i,s)=>s.price*s.quantity+i,0).toFixed(2));this.total=t+Number(()=>this.orderServices.reduce((i,s)=>s.maxPrice+i,0))}_mapProductToWorkshopOrder(t){const{productId:r,quantity:i}=t;return new Ro(r,i)}_getProductQuantity(t,r){return t.find(i=>i.productId===r).quantity}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(D.gz),e.Y36(e.sBO),e.Y36(n.qu),e.Y36(q.ux),e.Y36(D.F0),e.Y36(b.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-order-details"]],standalone:!0,features:[e.jDz],decls:99,vars:48,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","gap-5","p-3","overflow-y-auto","bg-cover","sm:absolute","sm:inset-0","dark:bg-transparent"],[1,"z-20","flex","flex-col","bg-transparent","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:px-5"],[1,"flex-1","min-w-0"],[1,"flex","items-center","overflow-hidden","font-medium","overflow-ellipsis"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],["routerLink","/workshop/workshop-orders",1,"ml-1","text-primary-500"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],["class","ml-4","mat-raised-button","","class","text-white bg-gradient-to-r from-primary-500 to-primary-700",3,"disabled","ngClass"],[1,"flex","flex-auto"],[1,"flex","flex-col","w-full","gap-3","p-3","rounded-md","shadow-md","bg-card"],[1,"flex","flex-col","w-full","gap-3",3,"formGroup","autocomplete"],[1,"text-xl","font-semibold"],[1,"flex","flex-col","gap-3","mt-5"],[1,"grid","grid-cols-1","gap-3","mt-5","sm:grid-cols-2","md:grid-cols-5"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[3,"displayWith"],["inspectionAutocomplete","matAutocomplete"],["svgIcon","mat_solid:help","matTooltip","Taller donde se realizar\xe1 el servicio",1,"icon-size-4"],[3,"formControlName","required"],["multiple","",3,"formControlName","required"],["matInput","",3,"formControlName","matDatepicker","placeholder"],["matIconSuffix","",3,"for"],["initDatePicker",""],["closeDatePicker",""],[1,"mt-3","text-xl","font-semibold"],[1,"w-full","fuse-mat-dense"],["matInput","","matTextareaAutosize","","maxlength","10000",3,"formControlName","rows"],["type","text","matInput","","autocomplete","off",3,"formControl","matAutocomplete","placeholder"],["workshopServicesAutocomplete","matAutocomplete"],[1,"flex","flex-col","flex-auto","col-span-3","mt-2","overflow-hidden","sm:overflow-y-auto"],["class","grid"],["productsAutocomplete","matAutocomplete"],[1,"flex","flex-col","flex-auto","col-span-3","mt-2","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","ngClass","click"],[3,"svgIcon"],[1,"ml-2","mr-1","text-white"],[3,"value","click"],[3,"value"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"hidden","text-left","sm:block"],[1,"hidden","text-center","sm:block"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"hidden","truncate","md:block"],[1,"hidden","font-mono","text-center","sm:block"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["class","grid items-center gap-4 px-6 py-3 border-b billing-products-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],[1,"fuse-mat-dense","fuse-mat-rounded"],["matInput","","type","text","pattern","^[0-9]+$","name","quantity",1,"font-mono","font-semibold","text-center",3,"ngModel","ngModelChange"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div")(6,"a",4),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",5),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Taller"),e.qZA()(),e.TgZ(12,"div",5),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",8),e._uU(15,"\xd3rdenes de Servicios"),e.qZA()(),e.TgZ(16,"div",5),e._UZ(17,"mat-icon",6),e.TgZ(18,"a",7),e._uU(19),e.qZA()()()()(),e.TgZ(20,"div",9),e.YNc(21,Xo,4,5,"button",10)(22,er,4,5,"button",10),e.qZA()(),e.TgZ(23,"div",11)(24,"div",12)(25,"form",13)(26,"div",14),e._uU(27," Informaci\xf3n de la inspecci\xf3n "),e.qZA(),e.TgZ(28,"div",15)(29,"div",16)(30,"mat-form-field",17)(31,"mat-label"),e._uU(32,"Inspecci\xf3n"),e.qZA(),e._UZ(33,"mat-icon",18)(34,"input",19),e.TgZ(35,"mat-autocomplete",20,21),e.SjG(37,tr,2,2,"mat-option",42,e.x6l),e.ALo(39,"async"),e.qZA()(),e.TgZ(40,"mat-form-field",17)(41,"mat-label"),e._uU(42,"Taller del servicio "),e._UZ(43,"mat-icon",22),e.qZA(),e.TgZ(44,"mat-select",23),e.SjG(45,or,2,2,"mat-option",42,e.x6l),e.qZA(),e.YNc(47,rr,2,0,"mat-error"),e.qZA(),e.TgZ(48,"mat-form-field",17)(49,"mat-label"),e._uU(50,"Tipo de servicio"),e.qZA(),e.TgZ(51,"mat-select",24),e.SjG(52,ir,2,2,"mat-option",42,e.x6l),e.qZA(),e.YNc(54,sr,2,0,"mat-error"),e.qZA(),e.TgZ(55,"mat-form-field",17)(56,"mat-label"),e._uU(57,"Fecha de inicio del servicio"),e.qZA(),e._UZ(58,"input",25)(59,"mat-datepicker-toggle",26)(60,"mat-datepicker",null,27),e.qZA(),e.TgZ(62,"mat-form-field",17)(63,"mat-label"),e._uU(64,"Fecha de fin del servicio"),e.qZA(),e._UZ(65,"input",25)(66,"mat-datepicker-toggle",26)(67,"mat-datepicker",null,28),e.qZA()(),e.TgZ(69,"div",29),e._uU(70," Comentarios del cliente en la solicitud "),e.qZA(),e.TgZ(71,"mat-form-field",30),e._UZ(72,"textarea",31),e.qZA(),e.TgZ(73,"div",14),e._uU(74," Servicios a realizar "),e.qZA(),e.TgZ(75,"mat-form-field",17),e._UZ(76,"mat-icon",18)(77,"input",32),e.TgZ(78,"mat-autocomplete",20,33),e.SjG(80,nr,2,2,"mat-option",42,e.x6l),e.ALo(82,"async"),e.qZA()(),e.TgZ(83,"div",34),e.YNc(84,cr,13,0,"div",35)(85,lr,2,0),e.qZA(),e.TgZ(86,"div",29),e._uU(87," Materiales necesarios "),e.qZA(),e.TgZ(88,"mat-form-field",17),e._UZ(89,"mat-icon",18)(90,"input",32),e.TgZ(91,"mat-autocomplete",20,36),e.SjG(93,pr,2,2,"mat-option",42,e.x6l),e.ALo(95,"async"),e.qZA()()()(),e.TgZ(96,"div",37),e.YNc(97,mr,17,0,"div",35)(98,ur,2,0),e.qZA()()()()),2&r){const s=e.MAs(36),a=e.MAs(61),l=e.MAs(68),d=e.MAs(79),I=e.MAs(92);e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(2),e.hij(" ","new"===i.workshopOrderId?"Registrar Inspecci\xf3n":i.selectedWorkshopOrder.no," "),e.xp6(2),e.um2(21,i.editMode?-1:21),e.xp6(),e.um2(22,i.editMode?22:-1),e.xp6(3),e.Q6J("formGroup",i.workshopOrderForm)("autocomplete","off"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchVehicleInspectionControl)("matAutocomplete",s)("placeholder","Buscar inspecci\xf3n")("required",!0),e.xp6(),e.Q6J("displayWith",i.displayFnVehicleInspection),e.xp6(2),e.wJu(e.lcZ(39,42,i.vehicleInspectionsFiltered$)),e.xp6(7),e.Q6J("formControlName","workshopId")("required",!0),e.xp6(),e.wJu(i.workshops),e.xp6(2),e.um2(47,i.workshopOrderForm.get("workshopId").hasError("required")?47:-1),e.xp6(4),e.Q6J("formControlName","serviceTypesId")("required",!0),e.xp6(),e.wJu(i.serviceTypes),e.xp6(2),e.um2(54,i.workshopOrderForm.get("serviceTypesId").hasError("required")?54:-1),e.xp6(4),e.Q6J("formControlName","initDate")("matDatepicker",a)("placeholder","MM/DD/YYYY"),e.xp6(),e.Q6J("for",a),e.xp6(6),e.Q6J("formControlName","closeDate")("matDatepicker",l)("placeholder","MM/DD/YYYY"),e.xp6(),e.Q6J("for",l),e.xp6(6),e.Q6J("formControlName","comments")("rows",2),e.xp6(4),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchWorkshopServiceControl)("matAutocomplete",d)("placeholder","Buscar servicios de taller"),e.xp6(),e.Q6J("displayWith",i.displayFnWorkshopService),e.xp6(2),e.wJu(e.lcZ(82,44,i.workshopServicesFiltered$)),e.xp6(4),e.um2(84,i.orderServices.length>0?84:85),e.xp6(5),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchProductControl)("matAutocomplete",I)("placeholder","Buscar productos"),e.xp6(),e.Q6J("displayWith",i.displayFnProduct),e.xp6(2),e.wJu(e.lcZ(95,46,i.productsFiltered$)),e.xp6(4),e.um2(97,i.orderProducts.length>0?97:98)}},dependencies:[E.Ov,E.JJ,n.u5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.nD,n.c5,n.On,U.Ps,U.Hw,E.mk,V.Bb,fe.PQ,V.XC,se.ey,V.ZL,J.FA,J.Mq,J.hl,J.nW,T.Is,n.UX,n.oH,n.sg,n.u,u.lN,u.KE,u.hX,u.TO,u.qo,u.R9,h.ot,h.lW,Y.LD,Y.gD],encapsulation:2,changeDetection:0})}return o})();var fr=p(21510),oe=p(1880);const gr=v.Ps`
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
`,_r=v.Ps`
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
`,vr=v.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateWorkshopServiceStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,xr=v.Ps`
    mutation RemoveWorkshopService($removeWorkshopServiceId: String!) {
        removeWorkshopService(id: $removeWorkshopServiceId) {
            ok
            message
        }
    }
`,br=v.Ps`
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
`,kr=v.Ps`
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
`,Cr=v.Ps`
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
`;let ge=(()=>{class o{constructor(t,r,i){this.apolloProvider=t,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createWorkshopService(t){return this.store.select(te).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:gr,variables:{createWorkshopServiceInput:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i,data:s})=>{if(i){let l="";i.forEach(d=>l+=`\n ${d.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,C.cloneDeep)(r);a.push(s.createWorkshopService.workshopService),this.store.dispatch((0,oe.l1)({workshopServices:a}))}))))}getWorkshopServices(t=1,r=20,i="no",s="asc",a=""){return this._apollo.query({query:br,errorPolicy:"all",variables:{offset:r*(t-1),limit:r,sort:i,order:s,search:a}}).pipe((0,f.b)(({errors:l,data:d})=>{if(l){let I="";l.forEach(K=>I+=`\n ${K.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:I,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,re.Jr)({pagination:d.findWorkshopServices.pagination})),this.store.dispatch((0,oe.l1)({workshopServices:d.findWorkshopServices.workshopServices}))}))}getAllWorkshopServices(){return this._apollo.query({query:kr,errorPolicy:"all"}).pipe((0,f.b)(({errors:t})=>{if(t){let r="";t.forEach(i=>r+=`\n ${i.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getWorkshopServiceById(t){return this._apollo.query({query:Cr,variables:{findWorkshopServiceByIdId:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:r,data:i})=>{if(r){let s="";r.forEach(a=>s+=`\n ${a.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,oe.H6)({workshopService:i.findWorkshopServiceById.workshopService}))}))}updateWorkshopService(t){return this.store.select(te).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:_r,variables:{updateWorkshopServiceInput:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i,data:s})=>{if(i){let d="";i.forEach(I=>d+=`\n ${I.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,C.cloneDeep)(r);a[r.findIndex(d=>d.id===t.id)]=s.updateWorkshopService.workshopService,this.store.dispatch((0,oe.l1)({workshopServices:a}))}))))}updateWorkshopServiceStatus(t){return this.store.select(te).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:vr,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i})=>{if(i){let l="";i.forEach(d=>l+=`\n ${d.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,C.cloneDeep)(r);s[r.findIndex(l=>l.id===t.id)].active=t.active,this.store.dispatch((0,oe.l1)({workshopServices:s}))}))))}removeWorkshopService(t){return this.store.select(te).pipe((0,k.q)(1),(0,_.w)(r=>this._apollo.mutate({mutation:xr,variables:{removeWorkshopServiceId:t},errorPolicy:"all"}).pipe((0,f.b)(({errors:i})=>{if(i){let l="";i.forEach(d=>l+=`\n ${d.message}.`),this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,C.cloneDeep)(r),a=r.findIndex(l=>l.id===t);s.splice(a,1),this.store.dispatch((0,oe.l1)({workshopServices:s}))}))))}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(v._M),e.LFG(q.ux),e.LFG(b.yh))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function Ir(o,c){1&o&&(e.TgZ(0,"h2",7),e._uU(1," Agregar servicio de taller "),e.qZA())}function yr(o,c){1&o&&(e.TgZ(0,"h2",7),e._uU(1," Editar servicio de taller "),e.qZA())}function Ar(o,c){if(1&o&&(e.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"span",14),e._uU(8),e.qZA()()()()()()),2&o){const t=e.oxw();e.xp6(8),e.Oqu(t.data.workshopService.description||"Sin nombre")}}function Zr(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La descripci\xf3n del es obligatoria "),e.qZA())}function wr(o,c){if(1&o&&(e.TgZ(0,"mat-option",24),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.iso," ")}}function Tr(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La moneda es obligatoria "),e.qZA())}function Fr(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El precio m\xednimo es obligatorio "),e.qZA())}function Sr(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El precio m\xe1ximo es obligatorio "),e.qZA())}function Er(o,c){if(1&o&&(e.TgZ(0,"div",15)(1,"div",16)(2,"form",17)(3,"mat-form-field",18)(4,"mat-label"),e._uU(5,"Descripci\xf3n"),e.qZA(),e._UZ(6,"input",19),e.TgZ(7,"mat-hint"),e._uU(8,"Ejemplo: Monte y desmonte de caja"),e.qZA(),e.YNc(9,Zr,2,0,"mat-error"),e.qZA(),e.TgZ(10,"mat-form-field",20)(11,"mat-label"),e._uU(12,"Moneda"),e.qZA(),e.TgZ(13,"mat-select",21),e.SjG(14,wr,2,2,"mat-option",24,e.x6l),e.qZA(),e.YNc(16,Tr,2,0,"mat-error"),e.qZA(),e.TgZ(17,"mat-form-field",20)(18,"mat-label"),e._uU(19,"Precio M\xednimo"),e.qZA(),e._UZ(20,"input",22),e.YNc(21,Fr,2,0,"mat-error"),e.qZA(),e.TgZ(22,"mat-form-field",20)(23,"mat-label"),e._uU(24,"Precio M\xe1ximo"),e.qZA(),e._UZ(25,"input",23),e.YNc(26,Sr,2,0,"mat-error"),e.qZA()()()()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.workshopServiceForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","description")("placeholder","Ejemplo: Monte y desmonte de caja"),e.xp6(3),e.um2(9,t.workshopServiceForm.get("description").hasError("required")?9:-1),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0),e.xp6(),e.wJu(t.currencies),e.xp6(2),e.um2(16,t.workshopServiceForm.get("currencyId").hasError("required")?16:-1),e.xp6(4),e.Q6J("formControlName","minPrice")("placeholder","0.00"),e.xp6(),e.um2(21,t.workshopServiceForm.get("minPrice").hasError("required")?21:-1),e.xp6(4),e.Q6J("formControlName","maxPrice")("min",t.workshopServiceForm.get("minPrice").value)("placeholder","0.00"),e.xp6(),e.um2(26,t.workshopServiceForm.get("maxPrice").hasError("required")?26:-1)}}function qr(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",28),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.updateWorkshopService())}),e._uU(1," Actualizar "),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.workshopServiceForm.invalid)("matDialogClose","confirmed")}}function Ur(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",28),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createWorkshopService())}),e._uU(1," Agregar "),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("color","primary")("disabled",t.workshopServiceForm.invalid)("matDialogClose","confirmed")}}function Wr(o,c){if(1&o&&(e.TgZ(0,"div",25)(1,"button",26),e._uU(2," Cancelar "),e.qZA(),e.YNc(3,qr,2,3,"button",27)(4,Ur,2,3,"button",27),e.qZA()),2&o){const t=e.oxw();e.xp6(),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.um2(3,"edit"===t.data.dialogMode?3:-1),e.xp6(),e.um2(4,"add"===t.data.dialogMode?4:-1)}}let Dr=(()=>{class o{constructor(t,r,i,s,a,l,d){this.data=t,this._changeDetectorRef=r,this._formBuilder=i,this._fuseConfirmationService=s,this._dialogRef=a,this._snackBar=l,this.store=d,this.currencies=[],this.maxDate=new Date,this.dialogMode="view",this._unsubscribeAll=new w.x,this._workshopServicesService=(0,e.f3M)(ge),this.dialogMode=t.dialogMode,this.workshopService=t.workshopService}ngOnInit(){this.workshopServiceForm=this._formBuilder.group({id:new n.NI(null),description:new n.NI(null,[n.kI.required,n.kI.maxLength(1e5)]),minPrice:new n.NI(0,[n.kI.required,n.kI.min(0)]),maxPrice:new n.NI(0,[n.kI.required]),currencyId:new n.NI(null,[n.kI.required,n.kI.maxLength(100)])}),"edit"===this.dialogMode&&this.workshopServiceForm.patchValue(this.workshopService),this.store.select(fr.zd).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createWorkshopService(){let t=this.workshopServiceForm.getRawValue();t=(0,Q.Z)(t,["id"]),this._fuseConfirmationService.open({title:"Crear servicio de taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._workshopServicesService.createWorkshopService(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.createWorkshopService.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateWorkshopService(){const t=this.workshopServiceForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar servicio de taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._workshopServicesService.updateWorkshopService(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.updateWorkshopService.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(T.WI),e.Y36(e.sBO),e.Y36(n.qu),e.Y36(O.R),e.Y36(T.so),e.Y36(q.ux),e.Y36(b.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-service-dialog"]],standalone:!0,features:[e.jDz],decls:8,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto"],["class","w-full overflow-hidden"],["class","flex items-center justify-center px-6 py-4 space-x-3 sm:justify-end bg-gray-50 dark:bg-black dark:bg-opacity-10"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"grid","w-full","grid-cols-1","gap-5","mt-3","sm:grid-cols-3",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-dense","sm:col-span-3"],["matInput","","type","text","required","","maxlength","50",3,"formControlName","placeholder"],[1,"w-full","fuse-mat-dense"],[3,"formControlName","required"],["matInput","","type","number","required","","min","0",3,"formControlName","placeholder"],["matInput","","type","number","required","",3,"formControlName","min","placeholder"],[3,"value"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Ir,2,0,"h2",2)(3,yr,2,0,"h2",2),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,Ar,9,1,"div",4)(6,Er,27,15,"div",5),e.qZA(),e.YNc(7,Wr,5,3,"div",6),e.qZA()),2&r&&(e.xp6(2),e.um2(2,"add"===i.data.dialogMode?2:-1),e.xp6(),e.um2(3,"edit"===i.data.dialogMode?3:-1),e.xp6(2),e.um2(5,"view"===i.data.dialogMode?5:-1),e.xp6(),e.um2(6,6),e.xp6(),e.um2(7,"view"!==i.data.dialogMode?7:-1))},dependencies:[T.Is,T.ZT,n.UX,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.Q7,n.nD,n.qQ,n.sg,n.u,u.lN,u.KE,u.hX,u.bx,u.TO,h.ot,h.lW,Y.LD,Y.gD,se.ey],encapsulation:2})}return o})();var Or=p(27627);class Rr{}function Pr(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"mat-slide-toggle",39),e.NdJ("change",function(i){e.CHM(t);const s=e.oxw(),a=s.$implicit,l=s.$index,d=e.oxw(2);return e.KtG(d.updateRateStatus(i,a,l))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("checked",t.active)("color","primary")}}function Nr(o,c){1&o&&e._UZ(0,"mat-spinner",35),2&o&&e.Q6J("diameter",20)("color","primary")}function $r(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",30)(1,"div",31),e._uU(2),e.qZA(),e.TgZ(3,"div",32),e._uU(4),e.qZA(),e.TgZ(5,"div",33),e._uU(6),e.ALo(7,"currency"),e.qZA(),e.TgZ(8,"div",33),e._uU(9),e.ALo(10,"currency"),e.qZA(),e.TgZ(11,"div",28),e.YNc(12,Pr,1,2,"mat-slide-toggle",34)(13,Nr,1,2,"mat-spinner",35),e.qZA(),e.TgZ(14,"div",36)(15,"button",37),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.openDialog(s,"edit"))}),e._UZ(16,"mat-icon",38),e.qZA(),e.TgZ(17,"button",37),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.deleteWorkshopService(s))}),e._UZ(18,"mat-icon",38),e.qZA()()()}if(2&o){const t=c.$implicit,r=c.$index,i=e.oxw(2);e.xp6(2),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",e.Dn7(7,8,t.minPrice,t.currency.iso+" ","symbol")," "),e.xp6(3),e.hij(" ",e.Dn7(10,12,t.maxPrice,t.currency.iso+" ","symbol")," "),e.xp6(3),e.um2(12,i.isSlideLoading&&i.selectedSlide===r?-1:12),e.xp6(),e.um2(13,i.isSlideLoading&&i.selectedSlide===r?13:-1),e.xp6(3),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}const Vr=o=>({"pointer-events-none":o}),Jr=()=>[5,10,25,100];function zr(o,c){if(1&o&&(e.TgZ(0,"div",24)(1,"div",25)(2,"div",26),e._uU(3," No "),e.qZA(),e.TgZ(4,"div",27),e._uU(5," Descripci\xf3n "),e.qZA(),e.TgZ(6,"div",28),e._uU(7," Precio M\xednimo "),e.qZA(),e.TgZ(8,"div",28),e._uU(9," Precio M\xe1ximo "),e.qZA(),e.TgZ(10,"div",28),e._uU(11," Estado "),e.qZA(),e.TgZ(12,"div",28),e._uU(13," Acciones "),e.qZA()(),e.SjG(14,$r,19,16,"div",40,e.QCX().trackByFn),e._UZ(16,"mat-paginator",29),e.qZA()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("mat-sort-header","no"),e.xp6(12),e.wJu(t.workshopServices),e.xp6(2),e.Q6J("ngClass",e.VKq(7,Vr,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(9,Jr))("showFirstLastButtons",!0)}}function Lr(o,c){1&o&&(e.TgZ(0,"div",41),e._uU(1," \xa1No hay servicios creados para el taller!"),e.qZA())}R.vfs=Te.I.vfs;let Br=(()=>{class o{constructor(t,r,i,s){this._changeDetectorRef=t,this._dialog=r,this._snackBar=i,this.store=s,this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.searchInputControl=new n.NI(""),this.selectedSlide=null,this.user=null,this.workshopService=new Rr,this.workshopServices=[],this._unsubscribeAll=new w.x,this._workshopServicesService=(0,e.f3M)(ge),this._fuseConfirmationService=(0,e.f3M)(O.R),this._fileSaverService=(0,e.f3M)(Or.m)}ngOnInit(){this.store.select(Fe.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(Ee.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(te).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.workshopServices=t,this._changeDetectorRef.markForCheck()}),this.store.select(j.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,qe.b)(300),(0,_.w)(t=>(this.isLoading=!0,this._workshopServicesService.getWorkshopServices(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,y.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,Z.T)(this._sort.sortChange,this._paginator.page).pipe((0,_.w)(()=>(this.isLoading=!0,this._workshopServicesService.getWorkshopServices(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,y.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteWorkshopService(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la orden de trabajo: ${t.no}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._workshopServicesService.removeWorkshopService(t.id).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeWorkshopService.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}updateRateStatus(t,r,i){this.isSlideLoading=!0,this.selectedSlide=i,this._workshopServicesService.updateWorkshopServiceStatus({id:r.id,active:t.checked}).subscribe(({data:s})=>{this._snackBar.openFromComponent(g.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.updateWorkshopServiceStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}openDialog(t,r){this._dialog.open(Dr,{data:{workshopService:t,dialogMode:r},panelClass:"ath-dialog-panel"})}printWorkshopServicesList(t="open"){this._workshopServicesService.getAllWorkshopServices().pipe((0,k.q)(1)).subscribe(({data:r})=>{const i={header:{text:"Listado de servicios",style:"header",marginTop:5},content:[{lineHeight:1.3,table:{headerRows:1,widths:[60,"*",120,120],body:[[{text:"No.",style:"table_header"},{text:"Descripci\xf3n",style:"table_header",alignment:"left"},{text:"Precio M\xednimo",style:"table_header"},{text:"Precio M\xe1ximo",style:"table_header"}],...r.findAllWorkshopServices.workshopServices.map(s=>[{style:"table_body",text:s.no,alignment:"center"},{style:"table_body",text:s.description,alignment:"left"},{style:"table_body",text:s.currency.iso+" "+s.minPrice.toFixed(2),alignment:"right"},{style:"table_body",text:s.currency.iso+" "+s.maxPrice.toFixed(2),alignment:"right"}])]},layout:"lightHorizontalLines"}],footer:(s,a)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${this.user.name} ${this.user.lastname1} ${this.user.lastname2} | Esta informaci\xf3n es exclusiva de ${this.merchant.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${s.toString()}/${a} - Fecha de impresi\xf3n ${z().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"]},table_body:{fontSize:10}},pageOrientation:"landscape",pageSize:"LETTER",watermark:{text:this.merchant.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:"Listado de servicios",author:`${this.user.name} ${this.user.lastname1} ${this.user.lastname2}`,creationDate:z().toDate(),modDate:z().toDate(),producer:this.merchant.name}};switch(t){case t="download":R.createPdf(i).download();break;case t="open":R.createPdf(i).open();break;case t="print":R.createPdf(i).print()}})}exportWorkshopServicesListToExcel(){this._workshopServicesService.getAllWorkshopServices().pipe((0,k.q)(1)).subscribe(({data:t})=>{this._fileSaverService.exportAsExcelFile(t.findAllWorkshopServices.workshopServices,"Listado de servicios")})}trackByFn(t,r){return r.id||t}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(e.sBO),e.Y36(T.uw),e.Y36(q.ux),e.Y36(b.yh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-services"]],viewQuery:function(r,i){if(1&r&&(e.Gf(F.NW,5),e.Gf(A.YE,5)),2&r){let s;e.iGM(s=e.CRH())&&(i._paginator=s.first),e.iGM(s=e.CRH())&&(i._sort=s.first)}},standalone:!0,features:[e.jDz],decls:42,vars:13,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"matMenuTriggerFor"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"xPosition"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-auto","sm:mb-18"],["class","grid"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","workshops-services-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,"text-left"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","workshops-services-grid","md:px-8"],[1,"hidden","font-mono","sm:block"],[1,"text-left","truncate"],[1,"font-mono","text-center"],[3,"checked","color"],[3,"diameter","color"],[1,"flex","flex-row","items-center","justify-start","gap-1"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[3,"checked","color","change"],["class","grid items-center gap-4 px-6 py-3 border-b workshops-services-grid md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Taller"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Servicios"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Servicios "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Reportes"),e.qZA()(),e.TgZ(26,"mat-menu",17,18)(28,"button",19),e.NdJ("click",function(){return i.printWorkshopServicesList()}),e._UZ(29,"mat-icon",15),e._uU(30," Imprimir listado de servicios "),e.qZA(),e.TgZ(31,"button",19),e.NdJ("click",function(){return i.exportWorkshopServicesListToExcel()}),e._UZ(32,"mat-icon",15),e._uU(33," Exportar listado de servicios "),e.qZA()(),e.TgZ(34,"button",20),e.NdJ("click",function(){return i.openDialog(i.workshopService,"add")}),e._UZ(35,"mat-icon",15),e.TgZ(36,"span",16),e._uU(37,"Agregar"),e.qZA()()()(),e.TgZ(38,"div",21)(39,"div",22),e.YNc(40,zr,17,10,"div",23)(41,Lr,2,0),e.qZA()()()),2&r){const s=e.MAs(27);e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(),e.Q6J("matMenuTriggerFor",s),e.xp6(),e.Q6J("svgIcon","mat_solid:expand_more"),e.xp6(3),e.Q6J("xPosition","before"),e.xp6(3),e.Q6J("svgIcon","mat_solid:description"),e.xp6(3),e.Q6J("svgIcon","mat_solid:description"),e.xp6(3),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.um2(40,i.workshopServices.length>0?40:41)}},dependencies:[E.H9,h.ot,h.lW,u.lN,u.KE,u.qo,U.Ps,U.Hw,M.c,M.Nt,ce.Tx,ce.VK,ce.OP,ce.p6,F.TU,F.NW,G.Cq,G.Ou,S.rP,S.Rr,A.JX,A.YE,A.nU,E.mk,n.UX,n.Fj,n.JJ,n.oH],encapsulation:2,changeDetection:0})}return o})();var Qr=p(7604),Mr=p(9427),Yr=p(35612),jr=p(2019),Gr=p(52759),Hr=p(6514),Kr=p(78896),Xr=p(37714),_e=p(26306),ve=p(58504);let ei=(()=>{class o{constructor(t,r){this._vehicleInspectionsService=t,this._router=r}resolve(t,r){const i=t.paramMap.get("vehicleInspectionId");if("new"!==i)return this._vehicleInspectionsService.getVehicleInspectionById(i).pipe((0,_e.K)(s=>{console.error(s);const a=r.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,ve._)(s)}))}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(me),e.LFG(D.F0))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Re=(()=>{class o{constructor(t){this._vehicleInspectionsService=t}resolve(t,r){return this._vehicleInspectionsService.getVehicleInspections()}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(me))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),ti=(()=>{class o{constructor(t,r){this._vehiclesService=t,this._router=r}resolve(t,r){const i=t.paramMap.get("vehicleId");if("new"!==i)return this._vehiclesService.getVehicleById(i).pipe((0,_e.K)(s=>{console.error(s);const a=r.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,ve._)(s)}))}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(de),e.LFG(D.F0))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),xe=(()=>{class o{constructor(t){this._vehiclesService=t}resolve(t,r){return this._vehiclesService.getVehicles()}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(de))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),oi=(()=>{class o{constructor(t){this._workshopOrdersService=t}resolve(t,r){return this._workshopOrdersService.getWorkshopOrders()}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(le))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),ri=(()=>{class o{constructor(t,r){this._workshopOrdersService=t,this._router=r}resolve(t,r){const i=t.paramMap.get("workshopOrderId");if("new"!==i)return this._workshopOrdersService.getWorkshopOrderById(i).pipe((0,_e.K)(s=>{console.error(s);const a=r.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,ve._)(s)}))}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(le),e.LFG(D.F0))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Pe=(()=>{class o{constructor(t){this._workshopServicesService=t}resolve(t,r){return this._workshopServicesService.getWorkshopServices()}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(ge))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Ne=(()=>{class o{constructor(t){this._workshopsService=t}resolve(t,r){return this._workshopsService.getWorkshops()}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(he))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var $e=p(31451),ii=p(23605);const si=[{path:"",component:x},{path:"vehicles",component:wt,resolve:{vehicles:xe}},{path:"vehicles/:vehicleId",component:Bt,resolve:{brands:Qr.J,fuels:Yr.I,vehicle:ti}},{path:"vehicles-inspections",component:ao,resolve:{vehicles:Re}},{path:"vehicles-inspections/:vehicleInspectionId",component:uo,resolve:{employees:$e.Q,vehicles:xe,locations:ii.r7,inspection:ei}},{path:"workshops",component:dt,resolve:{workshops:Ne}},{path:"workshop-orders",component:Go,resolve:{multiplier:jr.K,operationTypes:Gr.Z,paymentMethods:Hr.p,rates:Kr.L,workshopOrders:oi}},{path:"workshop-orders/:workshopOrderId",component:hr,resolve:{employees:$e.Q,inspection:Re,serviceTypes:Xr.P,vehicles:xe,workshopOrder:ri,workshops:Ne,workshopServices:Pe}},{path:"services",component:Br,resolve:{currencies:Mr.Y,workshopServices:Pe}}]}}]);