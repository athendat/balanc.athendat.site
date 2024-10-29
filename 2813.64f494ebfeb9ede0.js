"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2813],{34413:(E,I,o)=>{o.d(I,{MI:()=>$,wf:()=>_,zA:()=>y});var t=o(17705),l=o(18810),u=o(99437),v=o(62590),n=o(51188);let _=(()=>{class d{constructor(p,m){this._employeesService=p,this._router=m}resolve(p,m){return this._employeesService.findAllEmployees().pipe((0,u.W)(f=>this._router.navigateByUrl("/desktop")))}static#t=this.\u0275fac=function(m){return new(m||d)(t.KVO(v.r),t.KVO(n.Ix))};static#e=this.\u0275prov=t.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})(),y=(()=>{class d{constructor(p,m){this._employeesService=p,this._router=m}resolve(p,m){const f=p.params.employeeId;return"new"===f?null:this._employeesService.findEmployeeById(f).pipe((0,u.W)(A=>{const F=m.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(F),(0,l.$)(A)}))}static#t=this.\u0275fac=function(m){return new(m||d)(t.KVO(v.r),t.KVO(n.Ix))};static#e=this.\u0275prov=t.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();const $=(d,R)=>(0,t.WQX)(v.r).findActiveEmployees()},11781:(E,I,o)=>{o.d(I,{BF:()=>v,UA:()=>u});var t=o(59640);const l=n=>n.locations,u=(0,t.Mz)(l,n=>n.location),v=(0,t.Mz)(l,n=>n.locations)},49098:(E,I,o)=>{o.d(I,{O:()=>F});var t=o(88141),l=o(96354),u=o(24984),v=o(98216),n=o(53473);const _=n.J1`
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
`,y=n.J1`
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
`,$=n.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateLocationStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,d=n.J1`
    mutation RemoveLocation($removeLocationId: String!) {
        removeLocation(id: $removeLocationId) {
            ok
            message
        }
    }
`,R=n.J1`
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
`,p=n.J1`
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
`,m=n.J1`
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
`;var f=o(17705),A=o(59640);let F=(()=>{class L{constructor(r,a){this.apolloProvider=r,this.store=a,this._apollo=this.apolloProvider.use("BALANC")}createLocation(r){return this._apollo.mutate({mutation:_,variables:{createLocationInput:r},errorPolicy:"all"}).pipe((0,t.M)(({data:a})=>{a&&(this.store.dispatch((0,u.yJ)({location:a.createLocation.location})),this.store.dispatch((0,u.Og)({location:a.createLocation.location})))}))}getLocations(r=0,a=25,g="name",x="asc",S=""){return this._apollo.query({query:R,errorPolicy:"all",variables:{page:r,size:a,sort:g,order:x,search:S}}).pipe((0,t.M)(({data:D})=>{D&&(this.store.dispatch((0,v.Bp)({pagination:D.findAllLocations.pagination})),this.store.dispatch((0,u.xu)({locations:D.findAllLocations.locations})))}))}findActiveLocations(r="",a=25){return this._apollo.query({query:p,variables:{search:r,size:a},errorPolicy:"all"}).pipe((0,l.T)(({data:g})=>g?g.findActiveLocations:[]),(0,t.M)(g=>{g&&this.store.dispatch((0,u.xu)({locations:g}))}))}getLocationById(r){return this._apollo.query({query:m,variables:{findLocationByIdId:r},errorPolicy:"all"}).pipe((0,t.M)(({data:a})=>{a&&this.store.dispatch((0,u.Og)({location:a.findLocationById.location}))}))}updateLocation(r){return this._apollo.mutate({mutation:y,variables:{updateLocationInput:r},errorPolicy:"all"}).pipe((0,t.M)(({data:a})=>{a&&(this.store.dispatch((0,u.Nt)({location:a.updateLocation.location})),this.store.dispatch((0,u.Og)({location:a.updateLocation.location})))}))}updateLocationStatus(r){return this._apollo.mutate({mutation:$,variables:{updateEntityStatusInput:r},errorPolicy:"all"}).pipe((0,t.M)(({data:a})=>{a&&this.store.dispatch((0,u.jr)({id:r.id,active:r.active}))}))}removeLocation(r){return this._apollo.mutate({mutation:d,variables:{removeLocationId:r},errorPolicy:"all"}).pipe((0,t.M)(({data:a})=>{a&&this.store.dispatch((0,u.q$)({id:r}))}))}static#t=this.\u0275fac=function(a){return new(a||L)(f.KVO(n.Ic),f.KVO(A.il))};static#e=this.\u0275prov=f.jDH({token:L,factory:L.\u0275fac,providedIn:"root"})}return L})()},47305:(E,I,o)=>{o.d(I,{K:()=>J});var t=o(17705),l=o(89417),u=o(75351),v=o(88834),n=o(53719),_=o(82798),y=o(21413),$=o(56977),d=o(59640),R=o(91401),p=o(60177),m=o(60850),f=o(99213),A=o(70152),F=o(99172),L=o(70980),j=o(31397),r=o(11781),a=o(49098),g=o(59042),x=o(86600);const S=s=>({"fuse-mat-rounded":s});function D(s,C){if(1&s){const e=t.RV6();t.j41(0,"mat-option",7),t.bIt("click",function(){const i=t.eBV(e).$implicit,h=t.XpG();return t.Njj(h.addLocation(i))}),t.EFF(1),t.k0s()}if(2&s){const e=C.$implicit;t.Y8G("value",e.name),t.R7$(),t.SpI(" ",e.name," ")}}function T(s,C){if(1&s){const e=t.RV6();t.j41(0,"mat-icon",8),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.resetLocation())}),t.k0s()}}let b=(()=>{class s{constructor(){this.rounded=!0,this.labelName="Almac\xe9n",this.selectedLocation=null,this.searchLocationsControl=new l.MJ(null),this.isLoading=!1,this.locationChange=new t.bkB,this._changeDetectorRef=(0,t.WQX)(t.gRc),this._locationsService=(0,t.WQX)(a.O),this._unsubscribeAll=new y.B,this.store=(0,t.WQX)(d.il)}ngOnInit(){this.locations$=this.store.select(r.BF),this.locationsFiltered=this.searchLocationsControl.valueChanges.pipe((0,A.B)(200),(0,F.Z)(null),(0,L.j)(()=>{this.isLoading=!1}),(0,j.Z)(e=>null!==e&&"string"==typeof e&&(this.selectedLocation&&e!==this.selectedLocation.name||!this.selectedLocation)?(this.isLoading=!0,this._locationsService.findActiveLocations(e.trim())):this.locations$))}ngAfterViewInit(){this.selectedLocation&&this.searchLocationsControl.setValue(this.selectedLocation.name,{emitEvent:!1})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addLocation(e){this.selectedLocation=e,this.locationChange.next(e),this._changeDetectorRef.markForCheck()}resetLocation(){this.selectedLocation=null,this.searchLocationsControl.setValue(""),this.locationChange.next(null),this._changeDetectorRef.markForCheck()}static#t=this.\u0275fac=function(c){return new(c||s)};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["autocomplete-locations"]],inputs:{rounded:"rounded",labelName:"labelName",selectedLocation:"selectedLocation"},outputs:{locationChange:"locationChange"},standalone:!0,features:[t.aNF],decls:11,vars:12,consts:[["locationsLocationsAutocomplete","matAutocomplete"],["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-no-subscript",3,"ngClass","subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],[3,"value"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer"],[3,"click","value"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"]],template:function(c,i){if(1&c&&(t.j41(0,"mat-form-field",1),t.nrm(1,"mat-icon",2),t.j41(2,"mat-label"),t.EFF(3),t.k0s(),t.nrm(4,"input",3),t.j41(5,"mat-autocomplete",4,0),t.Z7z(7,D,2,2,"mat-option",5,t.fX1),t.nI1(9,"async"),t.k0s(),t.DNE(10,T,1,0,"mat-icon",6),t.k0s()),2&c){const h=t.sdS(6);t.Y8G("ngClass",t.eq3(10,S,i.rounded))("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(2),t.JRh(i.labelName),t.R7$(),t.Y8G("formControl",i.searchLocationsControl)("matAutocomplete",h)("placeholder","Filtre por Empleado"),t.R7$(3),t.Dyx(t.bMT(9,8,i.locationsFiltered)),t.R7$(3),t.vxM(i.selectedLocation?10:-1)}},dependencies:[m.jL,m.$3,x.wT,m.pN,f.m_,f.An,l.X1,l.me,l.BC,l.l_,n.RG,n.rl,n.nJ,n.JW,n.yw,p.YU,p.Jj,g.fS,g.fg],encapsulation:2,changeDetection:0})}return s})();var O=o(56808),B=o(72797);const M=s=>({"fuse-mat-rounded":s});function N(s,C){if(1&s){const e=t.RV6();t.j41(0,"mat-option",7),t.bIt("click",function(){const i=t.eBV(e).$implicit,h=t.XpG();return t.Njj(h.addCustomer(i))}),t.EFF(1),t.k0s()}if(2&s){const e=C.$implicit;t.Y8G("value",e.name),t.R7$(),t.SpI(" ",e.name," ")}}function V(s,C){if(1&s){const e=t.RV6();t.j41(0,"mat-icon",8),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.resetCustomer())}),t.k0s()}}let k=(()=>{class s{constructor(){this.rounded=!0,this.labelName="Cliente",this.selectedCustomer=null,this.searchCustomersControl=new l.MJ(null),this.isLoading=!1,this.customerChange=new t.bkB,this._changeDetectorRef=(0,t.WQX)(t.gRc),this._customersService=(0,t.WQX)(B.h),this._unsubscribeAll=new y.B,this.store=(0,t.WQX)(d.il)}ngOnInit(){this.customers$=this.store.select(O.wQ),this.customersFiltered=this.searchCustomersControl.valueChanges.pipe((0,A.B)(200),(0,F.Z)(null),(0,L.j)(()=>{this.isLoading=!1}),(0,j.Z)(e=>null!==e&&"string"==typeof e&&(this.selectedCustomer&&e!==this.selectedCustomer.name||!this.selectedCustomer)?(this.isLoading=!0,this._customersService.findActiveCustomers(e.trim())):this.customers$))}ngAfterViewInit(){this.selectedCustomer&&this.searchCustomersControl.setValue(this.selectedCustomer.name,{emitEvent:!1})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addCustomer(e){this.selectedCustomer=e,this.customerChange.next(e),this._changeDetectorRef.markForCheck()}resetCustomer(){this.selectedCustomer=null,this.searchCustomersControl.setValue(""),this.customerChange.next(null),this._changeDetectorRef.markForCheck()}static#t=this.\u0275fac=function(c){return new(c||s)};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["autocomplete-customers"]],inputs:{rounded:"rounded",labelName:"labelName",selectedCustomer:"selectedCustomer"},outputs:{customerChange:"customerChange"},standalone:!0,features:[t.aNF],decls:11,vars:12,consts:[["customersCustomersAutocomplete","matAutocomplete"],["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-no-subscript",3,"ngClass","subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[1,"ath-autocomplete"],[3,"value"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer"],[3,"click","value"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"]],template:function(c,i){if(1&c&&(t.j41(0,"mat-form-field",1),t.nrm(1,"mat-icon",2),t.j41(2,"mat-label"),t.EFF(3),t.k0s(),t.nrm(4,"input",3),t.j41(5,"mat-autocomplete",4,0),t.Z7z(7,N,2,2,"mat-option",5,t.fX1),t.nI1(9,"async"),t.k0s(),t.DNE(10,V,1,0,"mat-icon",6),t.k0s()),2&c){const h=t.sdS(6);t.Y8G("ngClass",t.eq3(10,M,i.rounded))("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(2),t.JRh(i.labelName),t.R7$(),t.Y8G("formControl",i.searchCustomersControl)("matAutocomplete",h)("placeholder","Filtre por Cliente"),t.R7$(3),t.Dyx(t.bMT(9,8,i.customersFiltered)),t.R7$(3),t.vxM(i.selectedCustomer?10:-1)}},dependencies:[m.jL,m.$3,x.wT,m.pN,f.m_,f.An,l.X1,l.me,l.BC,l.l_,n.RG,n.rl,n.nJ,n.JW,n.yw,p.YU,p.Jj,g.fS,g.fg],encapsulation:2,changeDetection:0})}return s})();var P=o(59649);function G(s,C){if(1&s&&(t.j41(0,"mat-option",14),t.EFF(1),t.k0s()),2&s){const e=C.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.iso," ")}}function U(s,C){if(1&s&&(t.j41(0,"mat-form-field",6)(1,"mat-label"),t.EFF(2,"Moneda"),t.k0s(),t.j41(3,"mat-select",13),t.Z7z(4,G,2,2,"mat-option",14,t.fX1),t.k0s()()),2&s){const e=t.XpG();t.R7$(3),t.Y8G("formControl",e.currencyIdControl),t.R7$(),t.Dyx(e.currencies)}}function X(s,C){if(1&s){const e=t.RV6();t.j41(0,"autocomplete-depots",15),t.bIt("depotChange",function(i){t.eBV(e);const h=t.XpG();return t.Njj(h.selectDepot(i))}),t.k0s()}2&s&&t.Y8G("rounded",!1)}function z(s,C){if(1&s){const e=t.RV6();t.j41(0,"autocomplete-locations",16),t.bIt("locationChange",function(i){t.eBV(e);const h=t.XpG();return t.Njj(h.selectLocation(i))}),t.k0s()}2&s&&t.Y8G("rounded",!1)}function W(s,C){if(1&s){const e=t.RV6();t.j41(0,"autocomplete-customers",17),t.bIt("customerChange",function(i){t.eBV(e);const h=t.XpG();return t.Njj(h.selectCustomer(i))}),t.k0s()}2&s&&t.Y8G("rounded",!1)}let J=(()=>{class s{constructor(e){this.data=e,this.currencyIdControl=new l.MJ(""),this.currencies=[],this.selectedDepot=null,this.selectedLocation=null,this.selectedCustomer=null,this.filterProperties=[],this._changeDetectorRef=(0,t.WQX)(t.gRc),this._dialogRef=(0,t.WQX)(u.CP),this._unsubscribeAll=new y.B,this.store=(0,t.WQX)(d.il),this.filterProperties=e.filterProperties}ngOnInit(){this.store.select(R.y$).pipe((0,$.Q)(this._unsubscribeAll)).subscribe(e=>{this.currencies=e,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}selectDepot(e){this.selectedDepot=e}selectLocation(e){this.selectedLocation=e}selectCustomer(e){this.selectedCustomer=e}selectFilters(){const e=this.currencyIdControl.getRawValue();this._dialogRef.close({currencyId:e,customer:this.selectedCustomer,depot:this.selectedDepot,location:this.selectedLocation})}showField(e){return this.filterProperties.some(c=>c===e)}static#t=this.\u0275fac=function(c){return new(c||s)(t.rXU(u.Vh))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["lists-filter-selectors-dialog"]],standalone:!0,features:[t.aNF],decls:16,vars:7,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","p-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col","gap-3"],[1,"w-full","fuse-mat-no-subscript"],["labelName","Almacenes",3,"rounded"],["labelName","Unidades Comerciales",3,"rounded"],["labelName","Clientes",3,"rounded"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black/10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"click","color","matDialogClose"],[3,"formControl"],[3,"value"],["labelName","Almacenes",3,"depotChange","rounded"],["labelName","Unidades Comerciales",3,"locationChange","rounded"],["labelName","Clientes",3,"customerChange","rounded"]],template:function(c,i){1&c&&(t.j41(0,"div",0)(1,"div",1)(2,"h2",2),t.EFF(3," Seleccionar "),t.k0s()(),t.j41(4,"div",3)(5,"div",4)(6,"div",5),t.DNE(7,U,6,1,"mat-form-field",6)(8,X,1,1,"autocomplete-depots",7)(9,z,1,1,"autocomplete-locations",8)(10,W,1,1,"autocomplete-customers",9),t.k0s()()(),t.j41(11,"div",10)(12,"button",11),t.EFF(13," Cancelar "),t.k0s(),t.j41(14,"button",12),t.bIt("click",function(){return i.selectFilters()}),t.EFF(15," Aceptar "),t.k0s()()()),2&c&&(t.R7$(7),t.vxM(i.showField("currency")?7:-1),t.R7$(),t.vxM(i.showField("depot")?8:-1),t.R7$(),t.vxM(i.showField("location")?9:-1),t.R7$(),t.vxM(i.showField("customer")?10:-1),t.R7$(2),t.Y8G("matDialogClose","cancelled"),t.R7$(2),t.Y8G("color","primary")("matDialogClose","confirmed"))},dependencies:[v.Hl,v.$z,u.hM,u.tx,n.RG,n.rl,n.nJ,_.Ve,_.VO,x.wT,l.X1,l.BC,l.l_,P.E,b,k],encapsulation:2,changeDetection:0})}return s})()}}]);