"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9250],{10959:(S,v,r)=>{r.d(v,{I:()=>f});const f=(0,r(84221).P1)(l=>l.rates,l=>l.rates)},66330:(S,v,r)=>{r.d(v,{m:()=>U});var t=r(19212),m=r(48180),f=r(94664),l=r(99397),E=r(37398),d=r(50967),F=r(84221),M=r(97214),_=r(65413),T=r(10959);const I=d.Ps`
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
`,R=d.Ps`
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
`,B=d.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateRateStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,b=d.Ps`
    mutation RemoveRate($removeRateId: String!) {
        removeRate(id: $removeRateId) {
            ok
            message
        }
    }
`,x=d.Ps`
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
`,P=d.Ps`
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
`,D=d.Ps`
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
`,O=d.Ps`
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
`;let U=(()=>{class C{constructor(){this.apolloProvider=(0,t.f3M)(d._M),this.store=(0,t.f3M)(F.yh),this._apollo=this.apolloProvider.use("BALANC")}createRate(o){return this.store.select(T.I).pipe((0,m.q)(1),(0,f.w)(i=>this._apollo.mutate({mutation:I,variables:{createRateInput:o},errorPolicy:"all"}).pipe((0,l.b)(({data:h})=>{const c=structuredClone(i);c.push(h.createRate.rate),this.store.dispatch((0,_.jM)({rates:c}))}))))}getRates(o=0,i=10,h="name",c="asc",g=""){return this._apollo.query({query:x,errorPolicy:"all",variables:{page:o,size:i,sort:h,order:c,search:g}}).pipe((0,l.b)(({data:y})=>{this.store.dispatch((0,M.Jr)({pagination:y.findAllRates.pagination})),this.store.dispatch((0,_.jM)({rates:y.findAllRates.rates}))}))}findActiveByBaseId(o){return this._apollo.query({query:P,variables:{currencyBaseId:o},errorPolicy:"all"}).pipe((0,E.U)(({data:i})=>i?i.findActiveByBaseId:[]),(0,l.b)(i=>{i&&this.store.dispatch((0,_.jM)({rates:i}))}))}getActiveRateByBaseIdForAthendatPlatform(o){return this._apollo.query({query:D,variables:{currencyBaseId:o},errorPolicy:"all"}).pipe((0,E.U)(({data:i})=>i?i.getActiveRateByBaseIdForAthendatPlatform:null),(0,l.b)(i=>{i&&this.store.dispatch((0,_.FY)({rate:i}))}))}getRateById(o){return this._apollo.query({query:O,variables:{findRateByIdId:o},errorPolicy:"all"}).pipe((0,l.b)(({data:i})=>{this.store.dispatch((0,_.FY)({rate:i.findRateById.rate}))}))}updateRate(o){return this.store.select(T.I).pipe((0,m.q)(1),(0,f.w)(i=>this._apollo.mutate({mutation:R,variables:{updateRateInput:o},errorPolicy:"all"}).pipe((0,l.b)(({data:h})=>{const c=structuredClone(i);c[i.findIndex(y=>y.id===o.id)]=h.updateRate.rate,this.store.dispatch((0,_.jM)({rates:c}))}))))}updateRateStatus(o){return this.store.select(T.I).pipe((0,m.q)(1),(0,f.w)(i=>this._apollo.mutate({mutation:B,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,l.b)(({})=>{const c=structuredClone(i);c[i.findIndex(y=>y.id===o.id)].active=o.active,this.store.dispatch((0,_.jM)({rates:c}))}))))}removeRate(o){return this.store.select(T.I).pipe((0,m.q)(1),(0,f.w)(i=>this._apollo.mutate({mutation:b,variables:{removeRateId:o},errorPolicy:"all"}).pipe((0,l.b)(({data:h})=>{if(h){const c=structuredClone(i),g=i.findIndex(y=>y.id===o);c.splice(g,1),this.store.dispatch((0,_.jM)({rates:c}))}}))))}static#t=this.\u0275fac=function(i){return new(i||C)};static#e=this.\u0275prov=t.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"})}return C})()},64610:(S,v,r)=>{r.d(v,{q:()=>$});var t=r(19212),m=r(56223),f=r(77988),l=r(30617),E=r(32296),d=r(78645),F=r(59773),M=r(55568),_=r(75986),T=r(96814),I=r(38034),R=r(64170),B=r(24516),b=r(98525),x=r(24630),P=r(23680);const D=["bt"];function O(a,p){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"uppercase"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(),t.Oqu(t.lcZ(2,1,e.get("name").value))}}function U(a,p){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(),t.Oqu(t.lcZ(2,1,e.get("name").value))}}function C(a,p){if(1&a&&(t.TgZ(0,"div",14)(1,"mat-checkbox",15),t.YNc(2,O,3,3,"span")(3,U,3,3,"span"),t.qZA()()),2&a){const e=p.$implicit,n=t.oxw(2);t.xp6(),t.Q6J("formControl",e.get("checked")),t.xp6(),t.um2(2,n.useUpperCase?2:-1),t.xp6(),t.um2(3,n.useUpperCase?-1:3)}}function Z(a,p){if(1&a&&(t.TgZ(0,"div",13),t.SjG(1,C,4,3,"div",16,t.x6l),t.qZA()),2&a){const e=t.oxw();t.xp6(),t.wJu(e.formArray.controls)}}function o(a,p){if(1&a&&(t.TgZ(0,"mat-form-field",17),t._UZ(1,"input",18)(2,"mat-datepicker-toggle",19)(3,"mat-datepicker",null,20),t.qZA()),2&a){const e=t.MAs(4),n=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("matDatepicker",e)("formControl",n.dateControl)("max",n.maxDate),t.xp6(),t.Q6J("for",e)}}function i(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"mat-option",26),t.NdJ("click",function(){const u=t.CHM(e).$implicit,A=t.oxw(2);return t.KtG(A.selectEntity(u))}),t._uU(1),t.qZA()}if(2&a){const e=p.$implicit;t.Q6J("value",e.name),t.xp6(),t.hij(" ",e.name," ")}}function h(a,p){if(1&a&&(t.TgZ(0,"mat-form-field",21),t._UZ(1,"mat-icon",22)(2,"input",23),t.TgZ(3,"mat-autocomplete",24,25),t.SjG(5,i,2,2,"mat-option",27,t.x6l),t.ALo(7,"async"),t.qZA()()),2&a){const e=t.MAs(4),n=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("svgIcon","mat_solid:search"),t.xp6(),t.Q6J("formControl",n.searchEntityControl)("matAutocomplete",e)("placeholder","Buscar..."),t.xp6(3),t.wJu(t.lcZ(7,5,n.entitiesFiltered))}}function c(a,p){if(1&a&&(t.TgZ(0,"mat-form-field",17),t._UZ(1,"input",18)(2,"mat-datepicker-toggle",19)(3,"mat-datepicker",null,20),t.qZA()),2&a){const e=t.MAs(4),n=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("matDatepicker",e)("formControl",n.dateControl)("max",n.maxDate),t.xp6(),t.Q6J("for",e)}}function g(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"mat-option",26),t.NdJ("click",function(){const u=t.CHM(e).$implicit,A=t.oxw(2);return t.KtG(A.selectEntity(u))}),t._uU(1),t.qZA()}if(2&a){const e=p.$implicit;t.Q6J("value",e.name),t.xp6(),t.hij(" ",e.name," ")}}function y(a,p){if(1&a&&(t.TgZ(0,"mat-form-field",21),t._UZ(1,"mat-icon",22)(2,"input",23),t.TgZ(3,"mat-autocomplete",24,25),t.SjG(5,g,2,2,"mat-option",27,t.x6l),t.ALo(7,"async"),t.qZA()()),2&a){const e=t.MAs(4),n=t.oxw();t.Q6J("subscriptSizing","dynamic"),t.xp6(),t.Q6J("svgIcon","mat_solid:search"),t.xp6(),t.Q6J("formControl",n.searchEntityControl)("matAutocomplete",e)("placeholder","Buscar..."),t.xp6(3),t.wJu(t.lcZ(7,5,n.entitiesFiltered))}}let $=(()=>{class a{constructor(){this.useUpperCase=!1,this.dataChange=new t.vpe,this.entityPropertyName="name",this.data=[],this.maxDate=new Date,this.dateControl=new m.NI({disabled:!0}),this.formArray=new m.Oe([]),this._unsubscribeAll=new d.x,this._formBuilder=(0,t.f3M)(m.qu),this._changeDetectorRef=(0,t.f3M)(t.sBO)}get hasFilter(){return!M.W.IsNullOrEmpty(this.selectedFilter)}ngOnInit(){this.initializeFormArray(),this.dateControl.valueChanges.pipe((0,F.R)(this._unsubscribeAll)).subscribe(e=>{this.dataChange.next(e),this.selectedFilter=e,this.menu.closeMenu()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}clearFilter(){switch(this.filterType){case"filterEntity":this.searchEntityControl.setValue(""),this.dataChange.next(null),this.selectedFilter=null;break;case"date":this.dateControl.setValue(null);break;case"multiSelect":case"multiSelectEntity":this.clearFormArray()}this.menu.closeMenu()}closeMenu(){this.menu.closeMenu()}selectEntity(e){this.dataChange.next(e),this.selectedFilter=e,this.menu.closeMenu()}initializeFormArray(){switch(this.filterType){case"multiSelect":this.formArray=this._formBuilder.array(this.data.map(e=>this._formBuilder.group({name:[e],checked:[!1]})));break;case"multiSelectEntity":this.formArray=this._formBuilder.array(this.data.map(e=>this._formBuilder.group({id:[e.id],name:[e[this.entityPropertyName]],checked:[!1]})))}this._changeDetectorRef.markForCheck(),this.formArraySubscription=this.formArray.valueChanges.pipe((0,F.R)(this._unsubscribeAll)).subscribe(e=>{let n=[];switch(this.filterType){case"multiSelect":n=e.filter(s=>s.checked).map(s=>s.name);break;case"multiSelectEntity":for(const s of e.filter(u=>u.checked)){const u=this.data.find(A=>A.id===s.id);n.push(u)}}this.dataChange.next(n),this.selectedFilter=n})}clearFormArray(){this.formArraySubscription.unsubscribe(),this.selectedFilter=[],this.dataChange.next([]),this.initializeFormArray()}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["table-filter"]],viewQuery:function(n,s){if(1&n&&t.Gf(D,7),2&n){let u;t.iGM(u=t.CRH())&&(s.menu=u.first)}},inputs:{filterType:"filterType",useUpperCase:"useUpperCase",entityPropertyName:"entityPropertyName",data:"data",entitiesFiltered:"entitiesFiltered",searchEntityControl:"searchEntityControl"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.jDz],decls:19,vars:6,consts:[["mat-icon-button","","matTooltip","",1,"w-6","h-6","min-h-6","min-w-6",3,"color","matMenuTriggerFor"],["bt","matMenuTrigger"],[1,"icon-size-4",3,"svgIcon"],["listStatusMenu","matMenu"],[3,"click"],["class","w-full px-4 py-4"],["class","w-full px-4 pt-4 pb-6 fuse-mat-dense fuse-mat-rounded","appearance","fill",3,"subscriptSizing"],["class","w-full px-4 pt-4 pb-6 fuse-mat-dense mat-fuse-de fuse-mat-rounded max-w-64 min-w-64","appearance","fill",3,"subscriptSizing"],[1,"flex","justify-end","w-full","p-2","pb-0","border-t-2"],["mat-flat-button","",3,"click"],["mat-button","","color","warn",3,"click"],["dateEntity",""],["SearchEntity",""],[1,"w-full","px-4","py-4"],[1,""],["color","primary",3,"formControl"],["class",""],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matInput","","placeholder","Fecha",3,"matDatepicker","formControl","max"],["matIconSuffix","",3,"for"],["entityDate",""],["appearance","fill",1,"w-full","px-4","pt-4","pb-6","fuse-mat-dense","mat-fuse-de","fuse-mat-rounded","max-w-64","min-w-64",3,"subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],["entitiesAutocomplete","matAutocomplete"],[3,"value","click"],[3,"value"]],template:function(n,s){if(1&n&&(t.TgZ(0,"div")(1,"button",0,1),t._UZ(3,"mat-icon",2),t.qZA(),t.TgZ(4,"mat-menu",null,3)(6,"div",4),t.NdJ("click",function(A){return A.stopPropagation()}),t.YNc(7,Z,3,0,"div",5)(8,o,5,5,"mat-form-field",6)(9,h,8,7,"mat-form-field",7),t.TgZ(10,"div",8)(11,"button",9),t.NdJ("click",function(){return s.closeMenu()}),t._uU(12,"Cerrar"),t.qZA(),t.TgZ(13,"button",10),t.NdJ("click",function(){return s.clearFilter()}),t._uU(14,"Limpiar"),t.qZA()()()()(),t.YNc(15,c,5,5,"ng-template",null,11,t.W1O)(17,y,8,7,"ng-template",null,12,t.W1O)),2&n){const u=t.MAs(5);t.xp6(),t.Q6J("color",s.hasFilter?"primary":"default")("matMenuTriggerFor",u),t.xp6(2),t.Q6J("svgIcon","mat_solid:filter_list"),t.xp6(4),t.um2(7,"multiSelect"===s.filterType||"multiSelectEntity"===s.filterType?7:-1),t.xp6(),t.um2(8,"date"===s.filterType?8:-1),t.xp6(),t.um2(9,"filterEntity"===s.filterType?9:-1)}},dependencies:[T.Ov,E.ot,E.lW,E.RK,l.Ps,l.Hw,f.Tx,f.VK,f.p6,_.p9,_.oG,T.gd,T.rS,I.FA,I.Mq,I.hl,I.nW,R.lN,R.KE,R.qo,R.R9,B.c,B.Nt,m.UX,m.Fj,m.JJ,m.oH,x.Bb,x.XC,P.ey,x.ZL,b.LD],encapsulation:2,changeDetection:0})}return a})()}}]);