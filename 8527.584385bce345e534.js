"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8527],{41017:($,b,s)=>{s.d(b,{u:()=>S});var A=s(54438),d=s(88141),m=s(96697),p=s(25558),i=s(53473);const f=i.J1`
    mutation CreateAccount($createAccountInput: CreateAccountInput!) {
        createAccount(createAccountInput: $createAccountInput) {
            ok,
            message,

            account {
                id
                userId
                merchantId
                parentId
                active
                name
                slug
                no
                type
                balance
                hasChild
            }
        }
    }
`,h=i.J1`
    query FindAccountsNodes {
        findAccountsNodes {

            ok
            message

            accounts {
                id
                userId
                merchantId
                parentId
                active
                name
                slug
                no
                type
                balance
                hasChild
                # children
            }

            accountsNodes {
                item {
                    id
                    userId
                    merchantId
                    parentId
                    active
                    name
                    slug
                    no
                    type
                    balance
                    hasChild
                    # children
                }

                children {

                    item {
                        id
                        parentId
                        active
                        name
                        no
                        type
                        balance
                    }

                    children {

                        item {
                            id
                            parentId
                            active
                            name
                            no
                            type
                            balance
                        }

                    }
                }

            }
        }
    }
`,N=i.J1`
    query FindBankCashAccounts {
        findBankCashAccounts {

            ok
            message

            accounts {
                id
                name
                no
                type
                active
                hasChild
                children {
                    id
                    active
                    name
                    no
                    type
                }
            }

            accountsNodes {
                item {
                    id
                    userId
                    merchantId
                    parentId
                    active
                    name
                    slug
                    no
                    type
                    balance
                    hasChild
                    # children
                }

                children {

                    item {
                        id
                        parentId
                        active
                        name
                        no
                        type
                        balance
                    }

                    children {

                        item {
                            id
                            parentId
                            active
                            name
                            no
                            type
                            balance
                        }

                    }
                }

            }
        }
    }
`,B=i.J1`
    query FindConceptsAccounts {
        findConceptsAccounts {

            ok
            message

            expenseAccounts {
                id
                name
                no
                type
                active
            }

            incomeAccounts {
                id
                name
                no
                type
                active
            }
        }
    }
`,T=(i.J1`
    query FindAllWithOutChildAccounts {
        findAllWithOutChildAccounts {
            id
            name
            parentId
            active

            children {
                id
                name
                parentId
            }
        }
    }
`,i.J1`
    mutation UpdateAccount($updateAccountInput: UpdateAccountInput!) {
        updateAccount(updateAccountInput: $updateAccountInput) {
            ok,
            message,

            account {
                id
                userId
                merchantId
                parentId
                active
                name
                slug
                no
                type
                balance
                hasChild
            }
        }
    }
`),U=i.J1`
    mutation UpdateAccountStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateAccountStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,g=i.J1`
    mutation RemoveAccount($accountId: String!) {
        removeAccount(id: $accountId) {
            ok,
            message,
        }
    }
`;var E=s(59640),I=s(10856),v=s(19669);let S=(()=>{class y{#n;#c=(0,A.WQX)(i.Ic);#t=(0,A.WQX)(E.il);constructor(){this.#n=this.#c.use("BALANC")}findAccountsNodes(){return this.#n.query({query:h,errorPolicy:"all"}).pipe((0,d.M)(({data:n})=>{const{accounts:l,accountsNodes:a}=n.findAccountsNodes;this.#t.dispatch((0,I.j2)({accounts:l,accountsNodes:a}))}))}createAccount(n){return this.#t.select(v.N8).pipe((0,m.s)(1),(0,p.n)(({accounts:l,accountsNodes:a})=>this.#n.mutate({mutation:f,variables:{createAccountInput:n},errorPolicy:"all"}).pipe((0,d.M)(({data:e})=>{let c=structuredClone(l),t=structuredClone(a);const o=e.createAccount.account;if(c.push(o),c=c.sort((r,u)=>r.no.localeCompare(u.no)),o.parentId||t.push({item:o,children:[]}),o.parentId)for(const r of t)r.item.id===o.parentId&&r.children.push({item:o,children:[]});t=t.sort((r,u)=>r.item.no.localeCompare(u.item.no)),this.#t.dispatch((0,I.j2)({accounts:c,accountsNodes:t}))}))))}updateAccount(n){return this.#t.select(v.N8).pipe((0,m.s)(1),(0,p.n)(({accounts:l,accountsNodes:a})=>this.#n.mutate({mutation:T,variables:{updateAccountInput:n},errorPolicy:"all"}).pipe((0,d.M)(({data:e})=>{let c=structuredClone(l),t=structuredClone(a);const o=e.updateAccount.account,r=c.findIndex(u=>u.id==u.id);if(c[r]=n,o.parentId){const u=t.findIndex(k=>k.item.id===n.parentId),C=t[u].children.findIndex(k=>k.item.id===n.id);t[u].children[C].item=n,t[u].children=t[u].children.sort((k,M)=>k.item.no.localeCompare(M.item.no))}else{const u=t.findIndex(C=>C.item.id===n.id);t[u].item=n}t=t.sort((u,C)=>u.item.no.localeCompare(C.item.no)),this.#t.dispatch((0,I.j2)({accounts:c,accountsNodes:t}))}))))}updateAccountStatus(n){return this.#t.select(v.N8).pipe((0,m.s)(1),(0,p.n)(({accounts:l,accountsNodes:a})=>this.#n.mutate({mutation:U,variables:{updateEntityStatusInput:n},errorPolicy:"all"}).pipe((0,d.M)(()=>{const e=structuredClone(l),c=structuredClone(a),t=e.find(u=>u.id===n.id);t.active=n.active;const o=e.findIndex(u=>u.id===n.id);e[o]=t;const r=c.findIndex(u=>u.item.id===n.id);if(t.parentId){const u=c.findIndex(k=>k.item.id===t.parentId),C=c[u].children.findIndex(k=>k.item.id===t.id);c[u].children[C].item=t}else c[r].item=t;this.#t.dispatch((0,I.j2)({accounts:e,accountsNodes:c}))}))))}removeAccount(n){return this.#t.select(v.N8).pipe((0,m.s)(1),(0,p.n)(({accounts:l,accountsNodes:a})=>this.#n.mutate({mutation:g,variables:{accountId:n},errorPolicy:"all"}).pipe((0,d.M)(()=>{const e=structuredClone(l),c=structuredClone(a),t=e.find(o=>o.id===n);if(e.splice(e.indexOf(t),1),t.parentId||c.splice(c.indexOf(c.find(o=>o.item.id===n)),1),t.parentId)for(const o of c)o.item.id===t.parentId&&o.children.splice(o.children.indexOf(o.children.find(r=>r.item.id===n)),1);this.#t.dispatch((0,I.j2)({accounts:e,accountsNodes:c}))}))))}findBankCashAccounts(){return this.#n.query({query:N,errorPolicy:"all"}).pipe((0,d.M)(({data:n})=>{this.#t.dispatch((0,I.j2)({accounts:n.findBankCashAccounts.accounts,accountsNodes:[]}))}))}findConceptsAccounts(){return this.#n.query({query:B,errorPolicy:"all"}).pipe((0,d.M)(({data:n})=>{this.#t.dispatch((0,I.aL)({incomeAccounts:n.findConceptsAccounts.incomeAccounts,expenseAccounts:n.findConceptsAccounts.expenseAccounts}))}))}static#e=this.\u0275fac=function(l){return new(l||y)};static#a=this.\u0275prov=A.jDH({token:y,factory:y.\u0275fac,providedIn:"root"})}return y})()},61911:($,b,s)=>{s.d(b,{b4:()=>p});var A=s(59640);const d=i=>i.bankAccounts,p=((0,A.Mz)(d,i=>i.bankAccount),(0,A.Mz)(d,i=>i.bankAccounts))},88007:($,b,s)=>{s.d(b,{S:()=>P});var A=s(54438),d=s(53473),m=s(96697),p=s(25558),i=s(88141),f=s(59640),h=s(93166),N=s(98216),B=s(61911);const O=d.J1`
    mutation CreateBankAccount($createBankAccountInput: CreateBankAccountInput!) {
        createBankAccount(createBankAccountInput: $createBankAccountInput) {

            ok
            message

            bankAccount {
                id
                userId
                merchantId
                active
                name
                slug
                bankId
                beneficiary
                no
                balance
                currencyId
                accountId
                account {
                    no
                    name
                }
                currency{
                    iso
                }
                bank {
                    name
                    abbr
                }
            }

        }
    }
`,T=d.J1`
    mutation UpdateBankAccount($updateBankAccountInput: UpdateBankAccountInput!) {
        updateBankAccount(updateBankAccountInput: $updateBankAccountInput) {
            ok
            message

            bankAccount {
                id
                userId
                merchantId
                active
                name
                slug
                bankId
                beneficiary
                no
                balance
                currencyId
                accountId
                account {
                    no
                    name
                }
                currency{
                    iso
                }
                bank {
                    name
                    abbr
                }
            }
        }
    }
`,U=d.J1`
    mutation UpdateBankAccounts($updateBankAccountsInput: [UpdateBankAccountInput!]!) {
        updateBankAccounts(updateBankAccountsInput: $updateBankAccountsInput) {
            ok
            message

            bankAccounts {
                id
                userId
                merchantId
                active
                name
                slug
                bankId
                beneficiary
                no
                balance
                currencyId
                accountId
                account {
                    no
                    name
                }
                currency{
                    iso
                }
                bank {
                    name
                    abbr
                }
            }
        }
    }
`,g=d.J1`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateBankAccountStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,E=d.J1`
    mutation RemoveBankAccount($removeBankAccountId: String!) {
        removeBankAccount(id: $removeBankAccountId) {
            ok
            message
        }
    }
`,I=d.J1`
    query FindAllBankAccounts($page: Int, $size: Int, $sort: String, $order: Order, $search: String) {
        findAllBankAccounts(page: $page, size: $size, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            bankAccounts {
                id
                active
                name
                no
                beneficiary
                bankId
                balance
                bank {
                    name
                    abbr
                }
                currencyId
                currency {
                    name
                    iso
                }
                accountId
            }
        }
    }
`,v=d.J1`
    query FindActiveBankAccounts {
        findActiveBankAccounts {
            ok
            message

            bankAccounts {
                id
                name
                balance
                currency{
                    iso
                }
                bank {
                    name
                    abbr
                }
            }
        }
    }
`,S=d.J1`
    query FindBankAccountById($findBankAccountByIdId: String!) {
        findBankAccountById(id: $findBankAccountByIdId) {
            ok
            message

            bankAccount {
                id
                userId
                merchantId
                active
                name
                slug
                bankId
                beneficiary
                no
                balance
                currencyId
                accountId
                account {
                    no
                    name
                }
                currency{
                    iso
                }
                bank {
                    name
                    abbr
                }
            }
        }
    }
`;var y=s(13754);let P=(()=>{class n{#n;#c=(0,A.WQX)(d.Ic);#t=(0,A.WQX)(f.il);constructor(){this.#n=this.#c.use("BALANC")}createBankAccount(a){return this.#t.select(B.b4).pipe((0,m.s)(1),(0,p.n)(e=>this.#n.mutate({mutation:O,variables:{createBankAccountInput:a},errorPolicy:"all"}).pipe((0,i.M)(({data:c})=>{const t=structuredClone(e);t.push(c.createBankAccount.bankAccount),this.#t.dispatch((0,h.l0)({bankAccounts:t}))}))))}getBankAccounts(a=0,e=20,c="code",t="asc",o=""){return this.#n.query({query:I,errorPolicy:"all",variables:{page:a,size:e,sort:c,order:t,search:o}}).pipe((0,i.M)(({data:r})=>{this.#t.dispatch((0,N.Bp)({pagination:r.findAllBankAccounts.pagination})),this.#t.dispatch((0,h.l0)({bankAccounts:r.findAllBankAccounts.bankAccounts}))}))}findActiveBankAccounts(){return this.#n.query({query:v,errorPolicy:"all"}).pipe((0,i.M)(({data:a})=>{this.#t.dispatch((0,h.l0)({bankAccounts:a.findActiveBankAccounts.bankAccounts}))}))}getBankAccountById(a){return this.#n.query({query:S,variables:{findBankAccountByIdId:a},errorPolicy:"all"}).pipe((0,i.M)(({data:e})=>{this.#t.dispatch((0,h.cj)({bankAccount:e.findBankAccountById.bankAccount}))}))}updateBankAccount(a){return this.#t.select(B.b4).pipe((0,m.s)(1),(0,p.n)(e=>this.#n.mutate({mutation:T,variables:{updateBankAccountInput:a},errorPolicy:"all"}).pipe((0,i.M)(({data:c})=>{const t=structuredClone(e);t[e.findIndex(r=>r.id===a.id)]=c.updateBankAccount.bankAccount,this.#t.dispatch((0,h.l0)({bankAccounts:t}))}))))}updateBankAccounts(a,e){return this.#n.mutate({mutation:U,variables:{updateBankAccountsInput:e},errorPolicy:"all"}).pipe((0,i.M)(({data:c})=>{this.#t.dispatch((0,y.we)({id:a,bankAccounts:c.updateBankAccounts.bankAccounts}))}))}updateBankAccountStatus(a){return this.#t.select(B.b4).pipe((0,m.s)(1),(0,p.n)(e=>this.#n.mutate({mutation:g,variables:{updateEntityStatusInput:a},errorPolicy:"all"}).pipe((0,i.M)(()=>{const c=structuredClone(e);c[e.findIndex(o=>o.id===a.id)].active=a.active,this.#t.dispatch((0,h.l0)({bankAccounts:c}))}))))}removeBankAccount(a){return this.#t.select(B.b4).pipe((0,m.s)(1),(0,p.n)(e=>this.#n.mutate({mutation:E,variables:{removeBankAccountId:a},errorPolicy:"all"}).pipe((0,i.M)(({})=>{const t=structuredClone(e),o=e.findIndex(r=>r.id===a);t.splice(o,1),this.#t.dispatch((0,h.l0)({bankAccounts:t}))}))))}static#e=this.\u0275fac=function(e){return new(e||n)};static#a=this.\u0275prov=A.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);