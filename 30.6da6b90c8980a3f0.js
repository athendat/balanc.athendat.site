"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[30],{85194:(C,f,t)=>{t.d(f,{d:()=>p});var r=t(19212),u=t(61942);let p=(()=>{class h{constructor(m){this._uomService=m}resolve(m,o){return this._uomService.getUoms()}static#t=this.\u0275fac=function(o){return new(o||h)(r.LFG(u.c))};static#e=this.\u0275prov=r.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},33355:(C,f,t)=>{t.d(f,{av:()=>h});var r=t(84221);const u=v=>v.uoms,h=((0,r.P1)(u,v=>v.uom),(0,r.P1)(u,v=>v.uoms))},61942:(C,f,t)=>{t.d(f,{c:()=>B});var r=t(19212),u=t(50967),p=t(48180),h=t(94664),v=t(99397),m=t(84221),o=t(46053),d=t(97214),P=t(33355);const I=u.Ps`
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
`,M=u.Ps`
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
`,E=u.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateUomStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,e=u.Ps`
    mutation RemoveUom($removeUomId: String!) {
        removeUom(id: $removeUomId) {
            ok
            message
        }
    }
`,T=u.Ps`
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
`,O=u.Ps`
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
`;var U=t(42090),b=t(22939);let B=(()=>{class A{constructor(g){this._snackBar=g,this.apolloProvider=(0,r.f3M)(u._M),this.store=(0,r.f3M)(m.yh),this._apollo=this.apolloProvider.use("BALANC")}createUom(g){return this.store.select(P.av).pipe((0,p.q)(1),(0,h.w)(a=>this._apollo.mutate({mutation:I,variables:{createUomInput:g},errorPolicy:"all"}).pipe((0,v.b)(({errors:c,data:n})=>{if(c){let s="";c.forEach(i=>s+=`\n ${i.message}.`),this._snackBar.openFromComponent(U.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(a);l.push(n.createUom.uom),this.store.dispatch((0,o.u8)({uoms:l}))}))))}getUoms(g=1,a=20,c="code",n="asc",l=""){return this._apollo.query({query:T,errorPolicy:"all",variables:{offset:a*(g-1),limit:a,sort:c,order:n,search:l}}).pipe((0,v.b)(({errors:s,data:i})=>{if(s){let D="";s.forEach(_=>D+=`\n ${_.message}.`),this._snackBar.openFromComponent(U.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:D,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,d.Jr)({pagination:i.findAllUoms.pagination})),this.store.dispatch((0,o.u8)({uoms:i.findAllUoms.uoms}))}))}getUomById(g){return this._apollo.query({query:O,variables:{findUomByIdId:g},errorPolicy:"all"}).pipe((0,v.b)(({errors:a,data:c})=>{if(a){let n="";a.forEach(l=>n+=`\n ${l.message}.`),this._snackBar.openFromComponent(U.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:n,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,o.sh)({uom:c.findUomById.uom}))}))}updateUom(g){return this.store.select(P.av).pipe((0,p.q)(1),(0,h.w)(a=>this._apollo.mutate({mutation:M,variables:{updateUomInput:g},errorPolicy:"all"}).pipe((0,v.b)(({errors:c,data:n})=>{if(c){let i="";c.forEach(D=>i+=`\n ${D.message}.`),this._snackBar.openFromComponent(U.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=structuredClone(a);l[a.findIndex(i=>i.id===g.id)]=n.updateUom.uom,this.store.dispatch((0,o.u8)({uoms:l}))}))))}updateUomStatus(g){return this.store.select(P.av).pipe((0,p.q)(1),(0,h.w)(a=>this._apollo.mutate({mutation:E,variables:{updateEntityStatusInput:g},errorPolicy:"all"}).pipe((0,v.b)(({errors:c})=>{if(c){let s="";c.forEach(i=>s+=`\n ${i.message}.`),this._snackBar.openFromComponent(U.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=structuredClone(a);n[a.findIndex(s=>s.id===g.id)].active=g.active,this.store.dispatch((0,o.u8)({uoms:n}))}))))}removeUom(g){return this.store.select(P.av).pipe((0,p.q)(1),(0,h.w)(a=>this._apollo.mutate({mutation:e,variables:{removeUomId:g},errorPolicy:"all"}).pipe((0,v.b)(({errors:c})=>{if(c){let s="";c.forEach(i=>s+=`\n ${i.message}.`),this._snackBar.openFromComponent(U.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const n=structuredClone(a),l=a.findIndex(s=>s.id===g);n.splice(l,1),this.store.dispatch((0,o.u8)({uoms:n}))}))))}static#t=this.\u0275fac=function(a){return new(a||A)(r.LFG(b.ux))};static#e=this.\u0275prov=r.Yz7({token:A,factory:A.\u0275fac,providedIn:"root"})}return A})()},21189:(C,f,t)=>{t.d(f,{N6:()=>m,lN:()=>h});var r=t(98246),u=t(19212),p=t(15608);let h=(()=>{class o{constructor(P){this._purchasesService=P}resolve(P,I){return this._purchasesService.getPurchases()}static#t=this.\u0275fac=function(I){return new(I||o)(u.LFG(p.F))};static#e=this.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),m=(()=>{class o{constructor(P){this._purchasesService=P}resolve(P,I){return this._purchasesService.getPurchases(0,25,"createdAt","asc","","",[],[],[r.L0.nueva])}static#t=this.\u0275fac=function(I){return new(I||o)(u.LFG(p.F))};static#e=this.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},58578:(C,f,t)=>{t.d(f,{pk:()=>h});var r=t(84221);const u=v=>v.purchases,h=((0,r.P1)(u,v=>v.purchase),(0,r.P1)(u,v=>v.purchases))},15608:(C,f,t)=>{t.d(f,{F:()=>A});var r=t(62660),u=t(48180),p=t(94664),h=t(99397),v=t(37398),m=t(58578),o=t(7027),d=t(50967);const P=d.Ps`
    mutation CreatedPurchase($createPurchaseInput: CreatePurchaseInput!) {
        createdPurchase(createPurchaseInput: $createPurchaseInput) {
            code
            createdAt
            currencyId
            id
            paymentMethodId
            products {
                productId
                cud
                cui
                quantity
            }
            status
            paymentStatus
            supplierId
            total
            userId
            voucherDate
            voucherNo
            voucherTypeId
            ratesId
        }
    }

`,I=d.Ps`
    mutation UpdatePurchaseStatus($updatePurchaseStatusInput: UpdatePurchaseStatusInput!) {
        updatePurchaseStatus(updatePurchaseStatusInput: $updatePurchaseStatusInput) {

            ok
            message

            purchase {
                id
                code
                createdAt
                currencyId
                paymentMethodId
                products {
                    productId
                    cud
                    cui
                    quantity

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }
                status
                paymentStatus
                supplierId
                total
                userId
                voucherDate
                voucherNo
                voucherTypeId
                ratesId

                currency {
                    id
                    iso
                }
                paymentMethod {
                    id
                    name
                }

                supplier {
                    id
                    name
                }

                voucher {
                    id
                    name
                }
            }
        }
    }
`,M=d.Ps`
    mutation RemovePurchase($removePurchaseId: String!) {
        removePurchase(id: $removePurchaseId)
    }
`,E=d.Ps`
    query FindAllPurchases(
        $page: Int,
        $size: Int,
        $sort: String,
        $order: Order,
        $search: String,
        $supplierId: String,
        $vouchersId: [String!],
        $paymentMethodsId: [String!],
        $status: [PurchaseStatus!],
        $paymentStatus: [PaymentStatus!],
        $voucherDate: DateTime,
        ) {
        findAllPurchases(
            page: $page,
            size: $size,
            sort: $sort,
            order: $order,
            search: $search,
            supplierId:$supplierId,
            vouchersId:$vouchersId,
            paymentMethodsId:$paymentMethodsId,
            status: $status,
            paymentStatus: $paymentStatus,
            voucherDate:$voucherDate,
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

            purchases {
                id
                code
                createdAt
                currencyId
                paymentMethodId
                products {
                    productId
                    cud
                    cui
                    quantity

                    product {
                        name
                        uom {
                            name
                            abbr
                        }
                    }
                }
                status
                paymentStatus
                supplierId
                total
                userId
                voucherDate
                voucherNo
                voucherTypeId
                ratesId

                currency {
                    id
                    iso
                }
                paymentMethod {
                    id
                    name
                }

                supplier {
                    id
                    name
                    phone
                    email
                }

                voucher {
                    id
                    name
                }

                indirectCost {
                    fobCosts
                    freight
                    insurance
                    customsDuties
                    customsServices
                    transportation
                    unloading
                    otherCosts
                }
            }
        }
    }
`,e=d.Ps`
    query FindPurchases($search: String!, $size: Int!, $status: PurchaseStatus ) {
        findPurchases(search: $search, size: $size, status: $status) {
            id
            code
            createdAt
            currencyId
            paymentMethodId
            products {
                productId
                cud
                cui
                quantity

                product {
                    name
                    uom {
                        name
                        abbr
                    }
                }
            }

            status
            paymentStatus
            supplierId
            total
            userId
            voucherDate
            voucherTypeId
            ratesId

            currency {
                id
                iso
            }
            paymentMethod {
                id
                name
            }

            supplier {
                id
                name
            }

            voucher {
                id
                name
            }
        }
    }
`,T=d.Ps`
    query FindPurchaseById($findPurchaseById: String!) {
        purchase(id: $findPurchaseById) {
            id
            code
            createdAt
            currencyId
            paymentMethodId
            products {
                productId
                cud
                cui
                quantity

                product {
                    name
                    uom {
                        name
                        abbr
                    }
                }
            }
            status
            paymentStatus
            supplierId
            total
            userId
            voucherDate
            voucherNo
            voucherTypeId
            ratesId

            currency {
                id
                iso
            }
            paymentMethod {
                id
                name
            }

            supplier {
                id
                name
            }

            voucher {
                id
                name
            }
        }
    }
`;var O=t(97214),U=t(19212),b=t(22939),B=t(84221);let A=(()=>{class y{constructor(a,c,n){this.apolloProvider=a,this._snackBar=c,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}createPurchase(a){return this.store.select(m.pk).pipe((0,u.q)(1),(0,p.w)(c=>this._apollo.mutate({mutation:P,variables:{createPurchaseInput:a},errorPolicy:"all"}).pipe((0,h.b)(({data:l})=>{if(l){const s=(0,r.Z)(c);s.push(l.createdPurchase),this.store.dispatch((0,o.Lb)({purchases:s}))}}))))}getPurchases(a=0,c=50,n="code",l="desc",s="",i=null,D=[],_=[],$=[],S=[],R=null){return this._apollo.query({query:E,errorPolicy:"all",variables:{page:a,size:c,sort:n,order:l,search:s,supplierId:i,vouchersId:D,paymentMethodsId:_,status:$,paymentStatus:S,voucherDate:R}}).pipe((0,h.b)(({data:x})=>{x&&(this.store.dispatch((0,o.Lb)({purchases:x.findAllPurchases.purchases})),this.store.dispatch((0,O.Jr)({pagination:x.findAllPurchases.pagination})))}))}findPurchases(a="",c,n=10){return this._apollo.query({query:e,variables:{search:a,size:n,status:c},errorPolicy:"all"}).pipe((0,v.U)(({data:l})=>l?l.findPurchases:[]),(0,h.b)(l=>{l&&this.store.dispatch((0,o.Lb)({purchases:l}))}))}getPurchaseById(a){return this._apollo.query({query:T,variables:{findPurchaseByIdId:a},errorPolicy:"all"}).pipe((0,h.b)(({data:n})=>{this.store.dispatch((0,o.tN)({purchase:n.purchase}))}))}updatePurchaseStatus(a,c,n){return this.store.select(m.pk).pipe((0,u.q)(1),(0,p.w)(l=>this._apollo.mutate({mutation:I,variables:{updatePurchaseStatusInput:{id:a,status:c,paymentStatus:n}},errorPolicy:"all"}).pipe((0,h.b)(({data:s})=>{const i=structuredClone(l);i[l.findIndex(_=>_.id===a)]=s.updatePurchaseStatus.purchase,this.store.dispatch((0,o.Lb)({purchases:i}))}))))}removePurchase(a){return this.store.select(m.pk).pipe((0,u.q)(1),(0,p.w)(c=>this._apollo.mutate({mutation:M,variables:{removePurchaseId:a},errorPolicy:"all"}).pipe((0,h.b)(({})=>{const l=(0,r.Z)(c),s=c.findIndex(i=>i.id===a);l.splice(s,1),this.store.dispatch((0,o.Lb)({purchases:l}))}))))}static#t=this.\u0275fac=function(c){return new(c||y)(U.LFG(d._M),U.LFG(b.ux),U.LFG(B.yh))};static#e=this.\u0275prov=U.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"})}return y})()},98246:(C,f,t)=>{t.d(f,{Jw:()=>h,L0:()=>m});var r=t(6990);class h{constructor(d){delete d.ct,delete d.cut,delete d.rate,delete d.currency,delete d.currencyId;const P=d.cost;delete d.cost,d=r(d).omitBy(r.isNull).value(),Object.assign(this,d),this.quantity=Number(Number(d.quantity).toFixed(2)),this.price=Number(d.price.toFixed(2)),this.cud=Number(P.toFixed(2)),delete this.rateId}}var m=function(o){return o.nueva="nueva",o.recibida="recibida",o.rechazada="rechazada",o.cancelada="cancelada",o}(m||{})},8382:(C,f,t)=>{t.d(f,{_u:()=>m,d2:()=>o,gD:()=>P,oF:()=>d,s6:()=>v});var r=t(19212),u=t(26306),p=t(39702),h=t(64190);let v=(()=>{class I{constructor(E){this._depotsService=E}resolve(E,e){return this._depotsService.getDepots()}static#t=this.\u0275fac=function(e){return new(e||I)(r.LFG(p.Y))};static#e=this.\u0275prov=r.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})(),m=(()=>{class I{constructor(E,e){this._depotsService=E,this._router=e}resolve(E,e){return this._depotsService.findActiveDepots().pipe((0,u.K)(T=>this._router.navigateByUrl("/dashboard")))}static#t=this.\u0275fac=function(e){return new(e||I)(r.LFG(p.Y),r.LFG(h.F0))};static#e=this.\u0275prov=r.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})();const o=(I,M)=>(0,r.f3M)(p.Y).findActiveAndRealDepots(),d=(I,M)=>(0,r.f3M)(p.Y).findDepotsForIncomes(),P=(I,M)=>{const E=I.params.periodId;return E?(0,r.f3M)(p.Y).findDepotByPeriodId(E):null}},58695:(C,f,t)=>{t.d(f,{$I:()=>h,ae:()=>p});var r=t(84221);const u=m=>m.depots,p=(0,r.P1)(u,m=>m.depot),h=(0,r.P1)(u,m=>m.depots);(0,r.P1)(u,m=>m.ownDepots)},39702:(C,f,t)=>{t.d(f,{Y:()=>c});var r=t(48180),u=t(94664),p=t(99397),h=t(37398),v=t(97214),m=t(58695),o=t(59668),d=t(50967);const P=d.Ps`
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
`,I=d.Ps`
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
`,M=d.Ps`
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
`,E=d.Ps`
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
`,e=d.Ps`
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
`,T=d.Ps`
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
`,O=d.Ps`
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
`,U=d.Ps`
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
`,b=d.Ps`
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
`,B=d.Ps`
    mutation RemoveDepot($removeDepotId: String!) {
        removeDepot(id: $removeDepotId) {
            ok
            message
        }
    }
`,A=d.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateDepotStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var y=t(19212),g=t(22939),a=t(84221);let c=(()=>{class n{constructor(s,i,D){this.apolloProvider=s,this._snackBar=i,this.store=D,this._apollo=this.apolloProvider.use("BALANC")}createDepot(s){return this.store.select(m.$I).pipe((0,r.q)(1),(0,u.w)(i=>this._apollo.mutate({mutation:U,variables:{createDepotInput:s},errorPolicy:"all"}).pipe((0,p.b)(({data:D})=>{const _=structuredClone(i);_.push(D.createDepot.depot),this.store.dispatch((0,o.Us)({depots:_}))}))))}getDepots(s=0,i=50,D="code",_="asc",$=""){return this._apollo.query({query:I,errorPolicy:"all",variables:{page:s,size:i,sort:D,order:_,search:$}}).pipe((0,p.b)(({data:S})=>{this.store.dispatch((0,o.Us)({depots:S.findAllDepots.depots})),this.store.dispatch((0,v.Jr)({pagination:S.findAllDepots.pagination}))}))}getDepotsByManager(){return this._apollo.query({query:P,errorPolicy:"all"}).pipe((0,p.b)(({data:s})=>{this.store.dispatch((0,o.qT)({ownDepots:s.findDepotsByManager.depots}))}))}findActiveDepots(s="",i=50){return this._apollo.query({query:M,variables:{search:s,size:i},errorPolicy:"all"}).pipe((0,h.U)(({data:D})=>(this.store.dispatch((0,o.Us)({depots:D.findActiveDepots})),D.findActiveDepots)))}findActiveAndRealDepots(){return this._apollo.query({query:E,errorPolicy:"all"}).pipe((0,p.b)(({data:s})=>{this.store.dispatch((0,o.Us)({depots:s.findActiveAndRealDepots.depots}))}))}findDepotsForIncomes(){return this._apollo.query({query:e,errorPolicy:"all"}).pipe((0,p.b)(({data:s})=>{this.store.dispatch((0,o.Us)({depots:s.findDepotsForIncomes.depots}))}))}findDepotByPeriodId(s){return this._apollo.query({query:T,errorPolicy:"all",variables:{periodId:s}}).pipe((0,p.b)(({data:i})=>{this.store.dispatch((0,o.IH)({depot:i.findDepotByPeriodId.depot}))}))}getDepotById(s){return this._apollo.query({query:O,variables:{findDepotByIdId:s},errorPolicy:"all"}).pipe((0,p.b)(({data:i})=>{this.store.dispatch((0,o.IH)({depot:i.createDepot.depot}))}))}updateDepot(s){return this.store.select(m.$I).pipe((0,r.q)(1),(0,u.w)(i=>this._apollo.mutate({mutation:b,variables:{updateDepotInput:s},errorPolicy:"all"}).pipe((0,p.b)(({data:D})=>{const _=structuredClone(i);_[i.findIndex(S=>S.id===s.id)]=D.updateDepot.depot,this.store.dispatch((0,o.Us)({depots:_}))}))))}updateDepotStatus(s){return this.store.select(m.$I).pipe((0,r.q)(1),(0,u.w)(i=>this._apollo.mutate({mutation:A,variables:{updateEntityStatusInput:s},errorPolicy:"all"}).pipe((0,p.b)(({})=>{const _=structuredClone(i);_[i.findIndex(S=>S.id===s.id)].active=s.active,this.store.dispatch((0,o.Us)({depots:_}))}))))}removeDepot(s){return this.store.select(m.$I).pipe((0,r.q)(1),(0,u.w)(i=>this._apollo.mutate({mutation:B,variables:{removeDepotId:s},errorPolicy:"all"}).pipe((0,p.b)(({})=>{const _=structuredClone(i),$=i.findIndex(S=>S.id===s);_.splice($,1)}))))}static#t=this.\u0275fac=function(i){return new(i||n)(y.LFG(d._M),y.LFG(g.ux),y.LFG(a.yh))};static#e=this.\u0275prov=y.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},44565:(C,f,t)=>{t.d(f,{v:()=>A});var r=t(56223),u=t(32296),p=t(75986),h=t(17700),v=t(64170),m=t(30617),o=t(24516),d=t(78645),P=t(59773),I=t(83620),M=t(94664),E=t(58695),e=t(19212),T=t(39702),O=t(84221);function U(y,g){if(1&y){const a=e.EpF();e.TgZ(0,"div")(1,"mat-checkbox",8),e.NdJ("change",function(n){const l=e.CHM(a),s=l.$index,i=l.$implicit,D=e.oxw(2);return e.KtG(D.onCheckboxChange(s,i,n.checked))}),e._uU(2),e.qZA()()}if(2&y){const a=g.$implicit,c=g.$index,n=e.oxw(2);e.xp6(),e.Q6J("checked",n.selectedIndex===c),e.xp6(),e.hij(" ",a.name," ")}}function b(y,g){if(1&y&&e.SjG(0,U,3,2,"div",null,e.x6l),2&y){const a=e.oxw();e.wJu(a.depots)}}function B(y,g){1&y&&(e.TgZ(0,"div",9),e._uU(1," No se encontraron almacenes "),e.qZA())}let A=(()=>{class y{constructor(a,c,n,l,s){this.data=a,this._changeDetectorRef=c,this._dialogRef=n,this._depotsService=l,this.store=s,this.searchInputControl=new r.NI(null),this.selectedIndex=-1,this._unsubscribeAll=new d.x}ngOnInit(){this.store.select(E.$I).pipe((0,P.R)(this._unsubscribeAll)).subscribe(a=>{this.depots=a,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,P.R)(this._unsubscribeAll),(0,I.b)(300),(0,M.w)(a=>this._depotsService.findActiveDepots(a.trim()))).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onCheckboxChange(a,c,n){this.selectedIndex!==a||n?(this.selectedIndex=a,this.selectedDepot=c):(this.selectedIndex=-1,this.selectedDepot=null),this._changeDetectorRef.markForCheck()}closeDialog(){this._dialogRef.close({depot:this.selectedDepot})}static#t=this.\u0275fac=function(c){return new(c||y)(e.Y36(h.WI),e.Y36(e.sBO),e.Y36(h.so),e.Y36(T.Y),e.Y36(O.yh))};static#e=this.\u0275cmp=e.Xpm({type:y,selectors:[["select-depot-dialog"]],standalone:!0,features:[e.jDz],decls:12,vars:9,consts:[[1,"p-12","pb-2"],["appearance","fill",1,"w-full","fuse-mat-dense","fuse-mat-rounded",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"grid","my-10","overflow-auto","max-h-100","sm:grid-cols-2"],[1,"flex","items-center","justify-center","w-full","px-8","py-4","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-button","","mat-dialog-close","",1,"-ml-4",3,"color"],["mat-flat-button","",3,"disabled","color","click"],["color","primary",3,"checked","change"],[1,"w-full","p-10","text-2xl","font-medium","text-center","sm:col-span-2"]],template:function(c,n){1&c&&(e.TgZ(0,"div",0)(1,"mat-form-field",1),e._UZ(2,"mat-icon",2)(3,"input",3),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,b,2,0)(6,B,2,0),e.qZA()(),e.TgZ(7,"div",5)(8,"button",6),e._uU(9,"Cancelar"),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return n.closeDialog()}),e._uU(11,"Aceptar"),e.qZA()()),2&c&&(e.xp6(),e.Q6J("subscriptSizing","dynamic"),e.xp6(),e.Q6J("svgIcon","mat_solid:search"),e.xp6(),e.Q6J("formControl",n.searchInputControl)("autocomplete","off")("placeholder","Ingrese el nombre del almac\xe9n..."),e.xp6(2),e.um2(5,n.depots.length>0?5:6),e.xp6(3),e.Q6J("color","warn"),e.xp6(2),e.Q6J("disabled",!n.selectedDepot)("color","primary"))},dependencies:[u.ot,u.lW,p.p9,p.oG,v.lN,v.KE,v.qo,m.Ps,m.Hw,o.c,o.Nt,r.UX,r.Fj,r.JJ,r.oH],encapsulation:2})}return y})()}}]);