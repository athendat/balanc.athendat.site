"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9250],{10959:(U,A,i)=>{i.d(A,{I:()=>d});const d=(0,i(84221).P1)(m=>m.rates,m=>m.rates)},66330:(U,A,i)=>{i.d(A,{m:()=>O});var t=i(19212),u=i(48180),d=i(94664),m=i(99397),v=i(37398),_=i(50967),F=i(84221),b=i(97214),f=i(65413),C=i(10959);const x=_.Ps`
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
`,I=_.Ps`
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
`,M=_.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRateStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,P=_.Ps`
    mutation RemoveRate($removeRateId: String!) {
        removeRate(id: $removeRateId) {
            ok
            message
        }
    }
`,R=_.Ps`
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
`,B=_.Ps`
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
`,D=_.Ps`
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
`;let O=(()=>{class T{constructor(){this.apolloProvider=(0,t.f3M)(_._M),this.store=(0,t.f3M)(F.yh),this._apollo=this.apolloProvider.use("BALANC")}createRate(o){return this.store.select(C.I).pipe((0,u.q)(1),(0,d.w)(n=>this._apollo.mutate({mutation:x,variables:{createRateInput:o},errorPolicy:"all"}).pipe((0,m.b)(({data:h})=>{const l=structuredClone(n);l.push(h.createRate.rate),this.store.dispatch((0,f.jM)({rates:l}))}))))}getRates(o=0,n=10,h="name",l="asc",g=""){return this._apollo.query({query:R,errorPolicy:"all",variables:{page:o,size:n,sort:h,order:l,search:g}}).pipe((0,m.b)(({data:y})=>{this.store.dispatch((0,b.Jr)({pagination:y.findAllRates.pagination})),this.store.dispatch((0,f.jM)({rates:y.findAllRates.rates}))}))}findActiveByBaseId(o){return this._apollo.query({query:B,variables:{currencyBaseId:o},errorPolicy:"all"}).pipe((0,v.U)(({data:n})=>n?n.findActiveByBaseId:[]),(0,m.b)(n=>{n&&this.store.dispatch((0,f.jM)({rates:n}))}))}getRateById(o){return this._apollo.query({query:D,variables:{findRateByIdId:o},errorPolicy:"all"}).pipe((0,m.b)(({data:n})=>{this.store.dispatch((0,f.FY)({rate:n.findRateById.rate}))}))}updateRate(o){return this.store.select(C.I).pipe((0,u.q)(1),(0,d.w)(n=>this._apollo.mutate({mutation:I,variables:{updateRateInput:o},errorPolicy:"all"}).pipe((0,m.b)(({data:h})=>{const l=structuredClone(n);l[n.findIndex(y=>y.id===o.id)]=h.updateRate.rate,this.store.dispatch((0,f.jM)({rates:l}))}))))}updateRateStatus(o){return this.store.select(C.I).pipe((0,u.q)(1),(0,d.w)(n=>this._apollo.mutate({mutation:M,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,m.b)(({})=>{const l=structuredClone(n);l[n.findIndex(y=>y.id===o.id)].active=o.active,this.store.dispatch((0,f.jM)({rates:l}))}))))}removeRate(o){return this.store.select(C.I).pipe((0,u.q)(1),(0,d.w)(n=>this._apollo.mutate({mutation:P,variables:{removeRateId:o},errorPolicy:"all"}).pipe((0,m.b)(({data:h})=>{if(h){const l=structuredClone(n),g=n.findIndex(y=>y.id===o);l.splice(g,1),this.store.dispatch((0,f.jM)({rates:l}))}}))))}static#t=this.\u0275fac=function(n){return new(n||T)};static#e=this.\u0275prov=t.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"})}return T})()},64610:(U,A,i)=>{i.d(A,{q:()=>$});var t=i(19212),u=i(56223),d=i(77988),m=i(30617),v=i(32296),_=i(78645),F=i(59773),b=i(55568),f=i(75986),C=i(96814),x=i(38034),I=i(64170),M=i(24516),P=i(98525),R=i(24630),B=i(23680);const D=["bt"];function O(a,p){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"uppercase"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(),t.Oqu(t.lcZ(2,1,e.get("name").value))}}function T(a,p){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(),t.Oqu(t.lcZ(2,1,e.get("name").value))}}function S(a,p){if(1&a&&(t.TgZ(0,"div",14)(1,"mat-checkbox",15),t.YNc(2,O,3,3,"span")(3,T,3,3,"span"),t.qZA()()),2&a){const e=p.$implicit,r=t.oxw(2);t.xp6(),t.Q6J("formControl",e.get("checked")),t.xp6(),t.um2(2,r.useUpperCase?2:-1),t.xp6(),t.um2(3,r.useUpperCase?-1:3)}}function o(a,p){if(1&a&&(t.TgZ(0,"div",13),t.SjG(1,S,4,3,"div",16,t.x6l),t.qZA()),2&a){const e=t.oxw();t.xp6(),t.wJu(e.formArray.controls)}}function n(a,p){if(1&a&&(t.TgZ(0,"mat-form-field",17),t._UZ(1,"input",18)(2,"mat-datepicker-toggle",19)(3,"mat-datepicker",null,20),t.qZA()),2&a){const e=t.MAs(4),r=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("matDatepicker",e)("formControl",r.dateControl)("max",r.maxDate),t.xp6(),t.Q6J("for",e)}}function h(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"mat-option",26),t.NdJ("click",function(){const c=t.CHM(e).$implicit,E=t.oxw(2);return t.KtG(E.selectEntity(c))}),t._uU(1),t.qZA()}if(2&a){const e=p.$implicit;t.Q6J("value",e.name),t.xp6(),t.hij(" ",e.name," ")}}function l(a,p){if(1&a&&(t.TgZ(0,"mat-form-field",21),t._UZ(1,"mat-icon",22)(2,"input",23),t.TgZ(3,"mat-autocomplete",24,25),t.SjG(5,h,2,2,"mat-option",27,t.x6l),t.ALo(7,"async"),t.qZA()()),2&a){const e=t.MAs(4),r=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("svgIcon","mat_solid:search"),t.xp6(),t.Q6J("formControl",r.searchEntityControl)("matAutocomplete",e)("placeholder","Buscar..."),t.xp6(3),t.wJu(t.lcZ(7,5,r.entitiesFiltered))}}function g(a,p){if(1&a&&(t.TgZ(0,"mat-form-field",17),t._UZ(1,"input",18)(2,"mat-datepicker-toggle",19)(3,"mat-datepicker",null,20),t.qZA()),2&a){const e=t.MAs(4),r=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("matDatepicker",e)("formControl",r.dateControl)("max",r.maxDate),t.xp6(),t.Q6J("for",e)}}function y(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"mat-option",26),t.NdJ("click",function(){const c=t.CHM(e).$implicit,E=t.oxw(2);return t.KtG(E.selectEntity(c))}),t._uU(1),t.qZA()}if(2&a){const e=p.$implicit;t.Q6J("value",e.name),t.xp6(),t.hij(" ",e.name," ")}}function Z(a,p){if(1&a&&(t.TgZ(0,"mat-form-field",21),t._UZ(1,"mat-icon",22)(2,"input",23),t.TgZ(3,"mat-autocomplete",24,25),t.SjG(5,y,2,2,"mat-option",27,t.x6l),t.ALo(7,"async"),t.qZA()()),2&a){const e=t.MAs(4),r=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("svgIcon","mat_solid:search"),t.xp6(),t.Q6J("formControl",r.searchEntityControl)("matAutocomplete",e)("placeholder","Buscar..."),t.xp6(3),t.wJu(t.lcZ(7,5,r.entitiesFiltered))}}let $=(()=>{class a{constructor(){this.useUpperCase=!1,this.dataChange=new t.vpe,this.entityPropertyName="name",this.data=[],this.maxDate=new Date,this.dateControl=new u.NI({disabled:!0}),this.formArray=new u.Oe([]),this._unsubscribeAll=new _.x,this._formBuilder=(0,t.f3M)(u.qu),this._changeDetectorRef=(0,t.f3M)(t.sBO)}get hasFilter(){return!b.W.IsNullOrEmpty(this.selectedFilter)}ngOnInit(){this.initializeFormArray(),this.dateControl.valueChanges.pipe((0,F.R)(this._unsubscribeAll)).subscribe(e=>{this.dataChange.next(e),this.selectedFilter=e,this.menu.closeMenu()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}clearFilter(){switch(this.filterType){case"filterEntity":this.searchEntityControl.setValue(""),this.dataChange.next(null),this.selectedFilter=null;break;case"date":this.dateControl.setValue(null);break;case"multiSelect":case"multiSelectEntity":this.clearFormArray()}this.menu.closeMenu()}closeMenu(){this.menu.closeMenu()}selectEntity(e){this.dataChange.next(e),this.selectedFilter=e,this.menu.closeMenu()}initializeFormArray(){switch(this.filterType){case"multiSelect":this.formArray=this._formBuilder.array(this.data.map(e=>this._formBuilder.group({name:[e],checked:[!1]})));break;case"multiSelectEntity":this.formArray=this._formBuilder.array(this.data.map(e=>this._formBuilder.group({id:[e.id],name:[e[this.entityPropertyName]],checked:[!1]})))}this._changeDetectorRef.markForCheck(),this.formArraySubscription=this.formArray.valueChanges.pipe((0,F.R)(this._unsubscribeAll)).subscribe(e=>{let r=[];switch(this.filterType){case"multiSelect":r=e.filter(s=>s.checked).map(s=>s.name);break;case"multiSelectEntity":for(const s of e.filter(c=>c.checked)){const c=this.data.find(E=>E.id===s.id);r.push(c)}}this.dataChange.next(r),this.selectedFilter=r})}clearFormArray(){this.formArraySubscription.unsubscribe(),this.selectedFilter=[],this.dataChange.next([]),this.initializeFormArray()}static#t=this.\u0275fac=function(r){return new(r||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["table-filter"]],viewQuery:function(r,s){if(1&r&&t.Gf(D,7),2&r){let c;t.iGM(c=t.CRH())&&(s.menu=c.first)}},inputs:{filterType:"filterType",useUpperCase:"useUpperCase",entityPropertyName:"entityPropertyName",data:"data",entitiesFiltered:"entitiesFiltered",searchEntityControl:"searchEntityControl"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.jDz],decls:19,vars:6,consts:[["mat-icon-button","","matTooltip","",1,"w-6","h-6","min-h-6","min-w-6",3,"color","matMenuTriggerFor"],["bt","matMenuTrigger"],[1,"icon-size-4",3,"svgIcon"],["listStatusMenu","matMenu"],[3,"click"],["class","w-full px-4 py-4"],["class","w-full px-4 pt-4 pb-6 fuse-mat-dense fuse-mat-rounded","appearance","fill",3,"subscriptSizing"],["class","w-full px-4 pt-4 pb-6 fuse-mat-dense mat-fuse-de fuse-mat-rounded max-w-64 min-w-64","appearance","fill",3,"subscriptSizing"],[1,"flex","justify-end","w-full","p-2","pb-0","border-t-2"],["mat-flat-button","",3,"click"],["mat-button","","color","warn",3,"click"],["dateEntity",""],["SearchEntity",""],[1,"w-full","px-4","py-4"],[1,""],["color","primary",3,"formControl"],["class",""],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","placeholder","Fecha",3,"matDatepicker","formControl","max"],["matIconSuffix","",3,"for"],["entityDate",""],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","mat-fuse-de","fuse-mat-rounded","max-w-64","min-w-64",3,"subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],["entitiesAutocomplete","matAutocomplete"],[3,"value","click"],[3,"value"]],template:function(r,s){if(1&r&&(t.TgZ(0,"div")(1,"button",0,1),t._UZ(3,"mat-icon",2),t.qZA(),t.TgZ(4,"mat-menu",null,3)(6,"div",4),t.NdJ("click",function(E){return E.stopPropagation()}),t.YNc(7,o,3,0,"div",5)(8,n,5,5,"mat-form-field",6)(9,l,8,7,"mat-form-field",7),t.TgZ(10,"div",8)(11,"button",9),t.NdJ("click",function(){return s.closeMenu()}),t._uU(12,"Cerrar"),t.qZA(),t.TgZ(13,"button",10),t.NdJ("click",function(){return s.clearFilter()}),t._uU(14,"Limpiar"),t.qZA()()()()(),t.YNc(15,g,5,5,"ng-template",null,11,t.W1O)(17,Z,8,7,"ng-template",null,12,t.W1O)),2&r){const c=t.MAs(5);t.xp6(),t.Q6J("color",s.hasFilter?"primary":"default")("matMenuTriggerFor",c),t.xp6(2),t.Q6J("svgIcon","mat_solid:filter_list"),t.xp6(4),t.um2(7,"multiSelect"===s.filterType||"multiSelectEntity"===s.filterType?7:-1),t.xp6(),t.um2(8,"date"===s.filterType?8:-1),t.xp6(),t.um2(9,"filterEntity"===s.filterType?9:-1)}},dependencies:[C.Ov,v.ot,v.lW,v.RK,m.Ps,m.Hw,d.Tx,d.VK,d.p6,f.p9,f.oG,C.gd,C.rS,x.FA,x.Mq,x.hl,x.nW,I.lN,I.KE,I.qo,I.R9,M.c,M.Nt,u.UX,u.Fj,u.JJ,u.oH,R.Bb,R.XC,B.ey,R.ZL,P.LD],encapsulation:2,changeDetection:0})}return a})()}}]);