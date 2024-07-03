"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5222],{56808:(y,C,o)=>{o.d(C,{hQ:()=>a,wQ:()=>n});var t=o(59640);const l=c=>c.customers,a=(0,t.Mz)(l,c=>c.customer),n=(0,t.Mz)(l,c=>c.customers)},72797:(y,C,o)=>{o.d(C,{h:()=>u});var t=o(84412),l=o(96354),a=o(88141),n=o(42409),c=o(98216),m=o(53473);const E=m.J1`
    mutation CreateCustomer($createCustomerInput: CreateCustomerInput!) {
        createCustomer(createCustomerInput: $createCustomerInput) {
            ok,
            message,

            customer {
                id,
                merchantId,
                logoUrl,
                type,
                name,
                nit

                phoneNumber {
                    stateCode,
                    phoneNumber,
                    label
                },

            }
        }
    }
`,g=m.J1`
    query FindAllCustomers($page: Int, $size: Int! $sort: String, $order: Order, $search: String ) {
        findAllCustomers(page: $page, size: $size, sort: $sort, order: $order, search: $search ) {
            ok,
            message,

            pagination {
                length,
                size,
                page,
                lastPage,
                startIndex,
                endIndex
            },

            customers {
                id,
                merchantId,
                active,
                logoUrl,
                code,
                type,
                name,
                domain,
                credit
                nit

                email {
                    email,
                    label
                },

                phoneNumber {
                    stateCode,
                    phoneNumber,
                    label
                },

                bankAccounts {
                    no
                },
            }
        }
    }
`,f=(m.J1`
    query FindAllActiveCustomers {
        findAllActiveCustomers {
            id,
            name,
            merchantId,
        }
    }
`,m.J1`
    query FindCustomerById($customerId: String!) {
        findCustomerById(id: $customerId ) {
            ok,
            message,

            customer {
                id,
                userId,
                merchantId,
                commercialId,
                active,
                name,
                code
                credit

                domain,
                address,
                city,
                state,
                country,
                zip,

                email {
                    email,
                    label
                },
                phoneNumber {
                    stateCode,
                    phoneNumber,
                    label
                },

                nit,
                type,

                bankAccounts {
                    no
                    currencyId
                    bankId
                    beneficiary
                }

                description,
                website,
                logoUrl,
                coverUrl,
            }
        }
    }
`),D=m.J1`
    mutation UpdateCustomer($updateCustomerInput: UpdateCustomerInput!) {
        updateCustomer(updateCustomerInput: $updateCustomerInput) {
            ok,
            message,

            customer {
                id,
                merchantId,
                logoUrl,
                type,
                name,
                domain

                phoneNumber {
                    stateCode,
                    phoneNumber,
                    label
                },
            }
        }
    }
`,v=m.J1`
    mutation UpdateCustomerStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCustomerStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,A=m.J1`
    mutation UpdateCustomerImage($imageProperty: String!, $updateEntityImageInput: UpdateEntityImageInput!) {
        updateCustomerImage(imageProperty: $imageProperty, updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,d=m.J1`
    mutation RemoveCustomer($customerId: String!) {
        removeCustomer(id: $customerId) {
            ok,
            message,
        }
    }
`,I=m.J1`
    query FindActiveCustomers($search: String!, $size: Int!) {
        findActiveCustomers(search: $search, size: $size) {
            id
            active
            name
            code
            credit
            logoUrl
        }
    }
`;o(45312);var _=o(54438),P=o(21626),O=o(59640);let u=(()=>{class p{constructor(s,e,r){this._httpClient=s,this.apolloProvider=e,this.store=r,this._domains=new t.t(null),this._apollo=this.apolloProvider.use("BALANC")}get domains$(){return this._domains.asObservable()}createCustomer(s){return this._apollo.mutate({mutation:E,variables:{createCustomerInput:s},errorPolicy:"all"}).pipe((0,l.T)(({data:e})=>e?e.createCustomer:null),(0,a.M)(e=>{e&&(this.store.dispatch((0,n.ff)({customer:e.customer})),this.store.dispatch((0,n.hv)({customer:e.customer})))}))}findAllCustomers(s=0,e=10,r="name",U="asc",$=null,S=!1){return this._apollo.query({query:g,variables:{page:s,size:e,sort:r,order:U,search:$},errorPolicy:"all"}).pipe((0,l.T)(({data:h})=>h?h.findAllCustomers:null),(0,a.M)(h=>{h&&(this.store.dispatch(S?(0,n.Yi)({customers:h.customers}):(0,n.GM)({customers:h.customers})),this.store.dispatch((0,c.Bp)({pagination:h.pagination})))}))}findActiveCustomers(s="",e=10){return this._apollo.query({query:I,variables:{search:s,size:e},errorPolicy:"all"}).pipe((0,l.T)(({data:r})=>r?r.findActiveCustomers:[]),(0,a.M)(r=>{r&&this.store.dispatch((0,n.GM)({customers:r}))}))}findCustomerById(s){return this._apollo.query({query:f,variables:{customerId:s},errorPolicy:"all"}).pipe((0,l.T)(({data:e})=>e?e.findCustomerById:null),(0,a.M)(e=>{e&&this.store.dispatch((0,n.hv)({customer:e.customer}))}))}updateCustomer(s){return this._apollo.mutate({mutation:D,variables:{updateCustomerInput:s},errorPolicy:"all"}).pipe((0,l.T)(({data:e})=>e?e.updateCustomer:null),(0,a.M)(e=>{e&&(this.store.dispatch((0,n.Gk)({customer:e.customer})),this.store.dispatch((0,n.hv)({customer:e.customer})))}))}updateCustomerStatus(s){return this._apollo.mutate({mutation:v,variables:{updateEntityStatusInput:s},errorPolicy:"all"}).pipe((0,a.M)(()=>{this.store.dispatch((0,n.uz)(s))}))}updateCustomerImage(s,e){return this._apollo.mutate({mutation:A,variables:{imageProperty:s,updateEntityImageInput:e},errorPolicy:"all"}).pipe((0,l.T)(({data:r})=>r?r.updateCustomerImage:null),(0,a.M)(r=>{r&&this.store.dispatch((0,n.pw)({...e,imageProperty:s}))}))}removeCustomer(s){return this._apollo.mutate({mutation:d,variables:{customerId:s},errorPolicy:"all"}).pipe((0,a.M)(()=>{this.store.dispatch((0,n.Be)({id:s}))}))}getDomains(){return this._httpClient.get("assets/data/domains.json").pipe((0,l.T)(s=>s.sort((e,r)=>e.name.toLowerCase()<r.name.toLowerCase()?-1:e.name.toLowerCase()>r.name.toLowerCase()?1:void 0)),(0,a.M)(s=>{this._domains.next(s)}))}getDomainFiltered(s){return this._httpClient.get("assets/data/domains.json").pipe((0,l.T)(e=>e.filter(r=>r.name===s)))}static#t=this.\u0275fac=function(e){return new(e||p)(_.KVO(P.Qq),_.KVO(m.Ic),_.KVO(O.il))};static#e=this.\u0275prov=_.jDH({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},59649:(y,C,o)=>{o.d(C,{E:()=>R});var t=o(54438),l=o(60177),a=o(89417),n=o(60850),c=o(99213),m=o(21413),E=o(70152),g=o(99172),T=o(70980),f=o(31397),D=o(59640),v=o(53159),A=o(69599),d=o(32102),I=o(59042),M=o(86600);const _=u=>({"fuse-mat-rounded":u});function P(u,p){if(1&u){const i=t.RV6();t.j41(0,"mat-option",7),t.bIt("click",function(){const e=t.eBV(i).$implicit,r=t.XpG();return t.Njj(r.addDepot(e))}),t.EFF(1),t.k0s()}if(2&u){const i=p.$implicit;t.Y8G("value",i.name),t.R7$(),t.SpI(" ",i.name," ")}}function O(u,p){if(1&u){const i=t.RV6();t.j41(0,"mat-icon",8),t.bIt("click",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.resetDepot())}),t.k0s()}}let R=(()=>{class u{constructor(){this.rounded=!0,this.isRequired=!1,this.labelName="Almac\xe9n",this.selectedDepot=null,this.searchDepotsControl=new a.MJ(null),this.isLoading=!1,this.depotChange=new t.bkB,this._changeDetectorRef=(0,t.WQX)(t.gRc),this._depotsService=(0,t.WQX)(A.t),this._unsubscribeAll=new m.B,this.store=(0,t.WQX)(D.il)}ngOnInit(){this.depots$=this.store.select(v.c_),this.depotsFiltered=this.searchDepotsControl.valueChanges.pipe((0,E.B)(200),(0,g.Z)(null),(0,T.j)(()=>{this.isLoading=!1}),(0,f.Z)(i=>null!==i&&"string"==typeof i&&(this.selectedDepot&&i!==this.selectedDepot.name||!this.selectedDepot)?(this.isLoading=!0,this._depotsService.findActiveDepots(i.trim())):this.depots$))}ngAfterViewInit(){this.selectedDepot&&this.searchDepotsControl.setValue(this.selectedDepot.name,{emitEvent:!1})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addDepot(i){this.selectedDepot=i,this.depotChange.next(i),this._changeDetectorRef.markForCheck()}resetDepot(){this.selectedDepot=null,this.searchDepotsControl.setValue(""),this.depotChange.next(null),this._changeDetectorRef.markForCheck()}static#t=this.\u0275fac=function(s){return new(s||u)};static#e=this.\u0275cmp=t.VBU({type:u,selectors:[["autocomplete-depots"]],inputs:{rounded:"rounded",isRequired:"isRequired",labelName:"labelName",selectedDepot:"selectedDepot"},outputs:{depotChange:"depotChange"},standalone:!0,features:[t.aNF],decls:11,vars:13,consts:[["depotsDepotsAutocomplete","matAutocomplete"],["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-no-subscript",3,"ngClass","subscriptSizing"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","required","matAutocomplete","placeholder"],[1,"ath-autocomplete"],[3,"value"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer"],[3,"click","value"],["svgIcon","mat_solid:cancel","matSuffix","",1,"cursor-pointer",3,"click"]],template:function(s,e){if(1&s&&(t.j41(0,"mat-form-field",1),t.nrm(1,"mat-icon",2),t.j41(2,"mat-label"),t.EFF(3),t.k0s(),t.nrm(4,"input",3),t.j41(5,"mat-autocomplete",4,0),t.Z7z(7,P,2,2,"mat-option",5,t.fX1),t.nI1(9,"async"),t.k0s(),t.DNE(10,O,1,0,"mat-icon",6),t.k0s()),2&s){const r=t.sdS(6);t.Y8G("ngClass",t.eq3(11,_,e.rounded))("subscriptSizing","dynamic"),t.R7$(),t.Y8G("svgIcon","mat_solid:search"),t.R7$(2),t.JRh(e.labelName),t.R7$(),t.Y8G("formControl",e.searchDepotsControl)("required",e.isRequired)("matAutocomplete",r)("placeholder","Filtre por Almac\xe9n"),t.R7$(3),t.Dyx(t.bMT(9,9,e.depotsFiltered)),t.R7$(3),t.vxM(10,e.selectedDepot?10:-1)}},dependencies:[n.jL,n.$3,M.wT,n.pN,c.m_,c.An,a.X1,a.me,a.BC,a.YS,a.l_,d.RG,d.rl,d.nJ,d.JW,d.yw,l.YU,l.Jj,I.fS,I.fg],encapsulation:2,changeDetection:0})}return u})()}}]);