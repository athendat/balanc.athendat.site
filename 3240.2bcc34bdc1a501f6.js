"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3240],{19669:(b,E,e)=>{e.d(E,{N8:()=>p,a_:()=>A});var t=e(59640);const a=s=>s.accounts,p=((0,t.Mz)(a,s=>s.account),(0,t.Mz)(a,s=>({accounts:s.accounts,accountsNodes:s.accountsNodes}))),A=((0,t.Mz)(a,s=>s.accountsNodes),(0,t.Mz)(a,s=>({expenseAccounts:s.expenseAccounts,incomeAccounts:s.incomeAccounts})))},25941:(b,E,e)=>{e.d(E,{_S:()=>p});var t=e(59640);const a=i=>i.banks,p=((0,t.Mz)(a,i=>i.bank),(0,t.Mz)(a,i=>i.banks))},98872:(b,E,e)=>{e.d(E,{n:()=>y});var t=e(54438),a=e(73512),k=e(96697),p=e(25558),i=e(88141),A=e(59640),s=e(58600),C=e(98216),v=e(25941);const g=a.J1`
    mutation CreateBank($createBankInput: CreateBankInput!) {
        createBank(createBankInput: $createBankInput) {

            ok
            message

            bank {
                id
                active
                name
                abbr
                slug
                logo
                description
                createdAt
                updatedAt
                address
                country
                city
                state
                zip
            }

        }
    }
`,F=a.J1`
    mutation UpdateBank($updateBankInput: UpdateBankInput!) {
        updateBank(updateBankInput: $updateBankInput) {
            ok
            message

            bank {
                id
                active
                name
                abbr
                slug
                logo
                description
                createdAt
                updatedAt
                address
                country
                city
                state
                zip
            }
        }
    }
`,I=a.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateBankStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,$=a.J1`
    mutation RemoveBank($removeBankId: String!) {
        removeBank(id: $removeBankId) {
            ok
            message
        }
    }
`,D=a.J1`
    query FindAllBanks($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllBanks(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            banks {
                id
                active
                name
                description
                slug
            }
        }
    }
`,R=a.J1`
    query FindActiveBanks($search: String!, $size: Int!) {
        findActiveBanks(search: $search, size: $size) {
            ok
            message

            banks {
                id
                name
                slug
            }
        }
    }
`,M=a.J1`
    query FindBankById($findBankByIdId: String!) {
        findBankById(id: $findBankByIdId) {
            ok
            message

            bank {
                id
                active
                name
                abbr
                slug
                logo
                description
                createdAt
                updatedAt
                address
                country
                city
                state
                zip
            }
        }
    }
`;let y=(()=>{class f{constructor(){this.apolloProvider=(0,t.WQX)(a.Ic),this.store=(0,t.WQX)(A.il),this._apollo=this.apolloProvider.use("BALANC")}createBank(c){return this.store.select(v._S).pipe((0,k.s)(1),(0,p.n)(l=>this._apollo.mutate({mutation:g,variables:{createBankInput:c},errorPolicy:"all"}).pipe((0,i.M)(({data:d})=>{const u=structuredClone(l);u.push(d.createBank.bank),this.store.dispatch((0,s.Sn)({banks:u}))}))))}getBanks(c=0,l=20,d="code",u="asc",_=""){return this._apollo.query({query:D,errorPolicy:"all",variables:{page:c,size:l,sort:d,order:u,search:_}}).pipe((0,i.M)(({data:h})=>{this.store.dispatch((0,C.Bp)({pagination:h.findAllBanks.pagination})),this.store.dispatch((0,s.Sn)({banks:h.findAllBanks.banks}))}))}findActiveBanks(c="",l=50){return this._apollo.query({query:R,errorPolicy:"all",variables:{search:c,size:l}}).pipe((0,i.M)(({data:d})=>{this.store.dispatch((0,s.Sn)({banks:d.findActiveBanks.banks}))}))}getBankById(c){return this._apollo.query({query:M,variables:{findBankByIdId:c},errorPolicy:"all"}).pipe((0,i.M)(({data:l})=>{this.store.dispatch((0,s.Vk)({bank:l.findBankById.bank}))}))}updateBank(c){return this.store.select(v._S).pipe((0,k.s)(1),(0,p.n)(l=>this._apollo.mutate({mutation:F,variables:{updateBankInput:c},errorPolicy:"all"}).pipe((0,i.M)(({data:d})=>{const u=structuredClone(l);u[l.findIndex(h=>h.id===c.id)]=d.updateBank.bank,this.store.dispatch((0,s.Sn)({banks:u}))}))))}updateBankStatus(c){return this.store.select(v._S).pipe((0,k.s)(1),(0,p.n)(l=>this._apollo.mutate({mutation:I,variables:{updateEntityStatusInput:c},errorPolicy:"all"}).pipe((0,i.M)(()=>{const d=structuredClone(l);d[l.findIndex(_=>_.id===c.id)].active=c.active,this.store.dispatch((0,s.Sn)({banks:d}))}))))}removeBank(c){return this.store.select(v._S).pipe((0,k.s)(1),(0,p.n)(l=>this._apollo.mutate({mutation:$,variables:{removeBankId:c},errorPolicy:"all"}).pipe((0,i.M)(({})=>{const u=structuredClone(l),_=l.findIndex(h=>h.id===c);u.splice(_,1),this.store.dispatch((0,s.Sn)({banks:u}))}))))}static#n=this.\u0275fac=function(l){return new(l||f)};static#t=this.\u0275prov=t.jDH({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})()},44383:(b,E,e)=>{e.d(E,{n:()=>W});var t=e(54438),a=e(89417),k=e(21413),p=e(56977),i=e(32102),A=e(59042),s=e(88834),C=e(99213),v=e(60850),g=e(82798),F=e(14823),I=e(59640),$=e(25941),D=e(91401),R=e(19669),M=e(86600);const y=["bankAccountNgForm"],f=(n,r)=>r.id;function x(n,r){1&n&&(t.j41(0,"mat-label"),t.EFF(1,"Nombre"),t.k0s())}function c(n,r){if(1&n&&(t.j41(0,"mat-form-field",1),t.DNE(1,x,2,0,"mat-label"),t.nrm(2,"input",10),t.k0s()),2&n){const o=t.XpG();t.R7$(),t.vxM(1,o.first?1:-1),t.R7$(),t.Y8G("formControlName","name")("placeholder","Nombre de la cuenta")}}function l(n,r){1&n&&(t.j41(0,"mat-label"),t.EFF(1,"N\xfamero de Cuenta"),t.k0s())}function d(n,r){if(1&n&&t.nrm(0,"img",5),2&n){const o=t.XpG();t.Y8G("src",o.cardImage,t.B4B)}}function u(n,r){1&n&&(t.j41(0,"mat-error"),t.EFF(1," El n\xfamero de cuenta es obligatorio "),t.k0s())}function _(n,r){1&n&&(t.j41(0,"mat-label"),t.EFF(1,"Banco"),t.k0s())}function h(n,r){if(1&n&&(t.j41(0,"mat-option",7),t.EFF(1),t.k0s()),2&n){const o=r.$implicit;t.Y8G("value",o.id),t.R7$(),t.JRh(o.name)}}function P(n,r){1&n&&(t.j41(0,"mat-label"),t.EFF(1,"Beneficiario"),t.k0s())}function N(n,r){1&n&&(t.j41(0,"mat-error"),t.EFF(1," El beneficiario no presenta un formato v\xe1lido "),t.k0s())}function O(n,r){1&n&&(t.j41(0,"mat-error"),t.EFF(1," El beneficiario es obligatorio "),t.k0s())}function S(n,r){1&n&&(t.j41(0,"mat-label"),t.EFF(1,"Moneda"),t.k0s())}function j(n,r){if(1&n&&(t.j41(0,"mat-option",7),t.EFF(1),t.k0s()),2&n){const o=r.$implicit;t.Y8G("value",o.id),t.R7$(),t.SpI(" ",o.iso," ")}}function U(n,r){1&n&&(t.j41(0,"mat-label"),t.EFF(1,"Cuenta Contable"),t.k0s())}function G(n,r){if(1&n&&(t.j41(0,"mat-option",7),t.EFF(1),t.k0s()),2&n){const o=r.$implicit;t.Y8G("value",o.id),t.R7$(),t.Lme("",o.no," - ",o.name,"")}}function K(n,r){if(1&n&&(t.j41(0,"mat-optgroup",12),t.Z7z(1,G,2,3,"mat-option",7,t.fX1),t.k0s()),2&n){const o=r.$implicit;t.Y8G("label",o.name),t.R7$(),t.Dyx(o.children)}}function z(n,r){if(1&n&&(t.j41(0,"mat-form-field",1),t.DNE(1,U,2,0,"mat-label"),t.j41(2,"mat-select",11),t.Z7z(3,K,3,1,"mat-optgroup",12,f),t.k0s(),t.j41(5,"mat-hint"),t.EFF(6,"Cuenta contable asociada a la moneda"),t.k0s()()),2&n){const o=t.XpG();t.R7$(),t.vxM(1,o.first?1:-1),t.R7$(),t.Y8G("formControlName","accountId")("placeholder","Seleccione una cuenta"),t.R7$(),t.Dyx(o.accounts)}}function L(n,r){if(1&n){const o=t.RV6();t.j41(0,"div",9)(1,"button",13),t.bIt("click",function(){t.eBV(o);const m=t.XpG();return t.Njj(m.removeBankAccount(m.index))}),t.nrm(2,"mat-icon",14),t.k0s()()}2&n&&(t.R7$(2),t.Y8G("svgIcon","mat_solid:delete"))}let W=(()=>{class n{constructor(){this.isMerchant=!1,this.remove=new t.bkB,this.banks=[],this.cardImage=null,this.#n=(0,t.WQX)(I.il),this.#t=new k.B,this.#e=(0,t.WQX)(t.gRc)}#n;#t;#e;ngOnInit(){this.#n.select(R.N8).pipe((0,p.Q)(this.#t)).subscribe(({accounts:o})=>{this.accounts=o,this.#e.markForCheck()}),this.#n.select($._S).pipe((0,p.Q)(this.#t)).subscribe(o=>{this.banks=o,this.#e.markForCheck()}),this.#n.select(D.y$).pipe((0,p.Q)(this.#t)).subscribe(o=>{this.currencies=o,this.#e.markForCheck()})}ngOnDestroy(){this.#t.next(null),this.#t.complete()}removeBankAccount(o){this.remove.next(o)}clearForm(){this.bankAccountNgForm.resetForm()}static#o=this.\u0275fac=function(B){return new(B||n)};static#a=this.\u0275cmp=t.VBU({type:n,selectors:[["bank-account"]],viewQuery:function(B,m){if(1&B&&t.GBs(y,5),2&B){let T;t.mGM(T=t.lsd())&&(m.bankAccountNgForm=T.first)}},inputs:{isMerchant:"isMerchant",bankAccountForm:"bankAccountForm",first:"first",last:"last",index:"index"},outputs:{remove:"remove"},standalone:!0,features:[t.aNF],decls:28,vars:30,consts:[[1,"grid","grid-cols-1","gap-3","md:grid-cols-2",3,"formGroup"],[1,"flex-auto","fuse-mat-dense"],[1,"flex-auto","mat-fuse-dense"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","",3,"type","minlength","maxlength","formControlName","placeholder","spellcheck"],["matSuffix","",1,"w-12","h-8",3,"src"],["required","",3,"formControlName","placeholder"],[3,"value"],["maxlength","255","matInput","",3,"type","formControlName","placeholder","spellcheck"],[1,"flex","items-center","w-10","pl-2"],["matInput","","type","text","required","","maxlength","250",3,"formControlName","placeholder"],[3,"formControlName","placeholder"],[3,"label"],["mat-icon-button","","matTooltip","Eliminar cuenta",1,"w-8","h-8","min-h-8",3,"click"],[1,"icon-size-5",3,"svgIcon"]],template:function(B,m){1&B&&(t.j41(0,"form",0),t.DNE(1,c,3,3,"mat-form-field",1),t.j41(2,"mat-form-field",2),t.DNE(3,l,2,0,"mat-label"),t.nrm(4,"mat-icon",3)(5,"input",4),t.DNE(6,d,1,1,"img",5)(7,u,2,0,"mat-error"),t.k0s(),t.j41(8,"mat-form-field",2),t.DNE(9,_,2,0,"mat-label"),t.nrm(10,"mat-icon",3),t.j41(11,"mat-select",6),t.Z7z(12,h,2,2,"mat-option",7,f),t.k0s()(),t.j41(14,"mat-form-field",2),t.DNE(15,P,2,0,"mat-label"),t.nrm(16,"mat-icon",3)(17,"input",8),t.DNE(18,N,2,0,"mat-error")(19,O,2,0,"mat-error"),t.k0s(),t.j41(20,"mat-form-field",2),t.DNE(21,S,2,0,"mat-label"),t.nrm(22,"mat-icon",3),t.j41(23,"mat-select",6),t.Z7z(24,j,2,2,"mat-option",7,t.fX1),t.k0s()(),t.DNE(26,z,7,3,"mat-form-field",1)(27,L,3,1,"div",9),t.k0s()),2&B&&(t.Y8G("formGroup",m.bankAccountForm),t.R7$(),t.vxM(1,m.isMerchant?1:-1),t.R7$(2),t.vxM(3,m.first?3:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:credit_card"),t.R7$(),t.Y8G("type","text")("minlength",16)("maxlength",24)("formControlName","no")("placeholder","Ejemplo: 1234567890123456")("spellcheck",!1),t.R7$(),t.vxM(6,m.cardImage?6:-1),t.R7$(),t.vxM(7,m.bankAccountForm.get("no").hasError("required")?7:-1),t.R7$(2),t.vxM(9,m.first?9:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:account_balance"),t.R7$(),t.Y8G("formControlName","bankId")("placeholder","Seleccione un banco"),t.R7$(),t.Dyx(m.banks),t.R7$(3),t.vxM(15,m.first?15:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:business"),t.R7$(),t.Y8G("type","text")("formControlName","beneficiary")("placeholder","Ejemplo: Empresa SRL")("spellcheck",!1),t.R7$(),t.vxM(18,m.bankAccountForm.get("beneficiary").hasError("pattern")?18:-1),t.R7$(),t.vxM(19,m.bankAccountForm.get("beneficiary").hasError("required")?19:-1),t.R7$(2),t.vxM(21,m.first?21:-1),t.R7$(),t.Y8G("svgIcon","mat_solid:monetization_on"),t.R7$(),t.Y8G("formControlName","currencyId")("placeholder","Ejemplo: USD"),t.R7$(),t.Dyx(m.currencies),t.R7$(2),t.vxM(26,m.isMerchant?26:-1),t.R7$(),t.vxM(27,m.first&&m.last?-1:27))},dependencies:[v.jL,M.wT,M.D7,s.Hl,s.iY,i.RG,i.rl,i.nJ,i.MV,i.TL,i.JW,i.yw,C.m_,C.An,A.fS,A.fg,g.Ve,g.VO,F.uc,F.oV,a.X1,a.qT,a.me,a.BC,a.cb,a.YS,a.xh,a.tU,a.j4,a.JD],encapsulation:2,changeDetection:0})}return n})()}}]);