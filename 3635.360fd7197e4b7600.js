"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3635],{93635:(N,d,o)=>{o.r(d),o.d(d,{default:()=>E});var g=o(60177),t=o(54438),s=o(89417),m=o(88834),l=o(32102),h=o(99213),f=o(59042),p=o(9183),k=o(51188),v=o(21413),S=o(56977),F=o(59640),b=o(63729),x=o(87122),C=o(35524);const y=["unlockSessionNgForm"];function R(n,c){1&n&&t.nrm(0,"mat-icon",18),2&n&&t.Y8G("svgIcon","mat_solid:visibility")}function U(n,c){1&n&&t.nrm(0,"mat-icon",18),2&n&&t.Y8G("svgIcon","mat_solid:visibility-off")}function j(n,c){1&n&&(t.j41(0,"mat-error"),t.EFF(1," La contrase\xf1a es obligatoria "),t.k0s())}function w(n,c){1&n&&(t.j41(0,"span"),t.EFF(1," Desbloquear "),t.k0s())}function A(n,c){1&n&&t.nrm(0,"mat-progress-spinner",15),2&n&&t.Y8G("diameter",24)("mode","indeterminate")}const L=()=>["/sign-out"],E=[{path:"",component:(()=>{class n{constructor(){this.redirectURL=(0,t.hFB)("redirectURL"),this.user=null,this._changeDetectorRef=(0,t.WQX)(t.gRc),this._authService=(0,t.WQX)(C.u),this._formBuilder=(0,t.WQX)(s.ok),this._router=(0,t.WQX)(k.Ix),this._unsubscribeAll=new v.B,this.store=(0,t.WQX)(F.il)}ngOnInit(){this.store.select(b.SW).pipe((0,S.Q)(this._unsubscribeAll)).subscribe(a=>{this.user=a,this._changeDetectorRef.markForCheck()}),this.unlockSessionForm=this._formBuilder.group({pwd:["",s.k0.required]})}unlock(){this.unlockSessionForm.invalid||(this.unlockSessionForm.disable(),this._authService.unlockSession({email:this.user.email,pwd:this.unlockSessionForm.get("pwd").value}).subscribe(()=>{localStorage.removeItem("SESSION_LOCKED");const a=this.redirectURL()||"/signed-in-redirect";this._router.navigateByUrl(a)},()=>{this.unlockSessionForm.enable()}))}static#t=this.\u0275fac=function(i){return new(i||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["auth-unlock-session"]],viewQuery:function(i,e){if(1&i&&t.GBs(y,5),2&i){let r;t.mGM(r=t.lsd())&&(e.unlockSessionNgForm=r.first)}},inputs:{redirectURL:[t.Mj6.SignalBased,"redirectURL"]},standalone:!0,features:[t.aNF],decls:29,vars:12,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],["height","72","width","380","ngSrc","/c_scale,h_72/v1710869343/balanc/logos/logo-text_jo2r1s.webp","alt","Logo image",1,"w-auto","h-18","dark:hidden","aspect-auto"],["height","72","width","380","ngSrc","/c_scale,h_72/v1710869344/balanc/logos/logo-text-on-dark_wvkqfx.webp","alt","Logo image",1,"hidden","w-auto","h-18","dark:flex","aspect-auto"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],[1,"mt-8",3,"formGroup"],["unlockSessionNgForm","ngForm"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon"],["mat-flat-button","",1,"fuse-mat-button-large","custom-button",3,"color","disabled","click"],[3,"diameter","mode"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"icon-size-5",3,"svgIcon"]],template:function(i,e){if(1&i){const r=t.RV6();t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),t.nrm(4,"img",3)(5,"img",4),t.k0s(),t.j41(6,"div",5),t.EFF(7,"Desbloquear"),t.k0s(),t.j41(8,"div",6),t.EFF(9,"Su sesi\xf3n ha sido bloqueada por inactividad"),t.k0s(),t.j41(10,"form",7,8)(12,"mat-form-field",9)(13,"mat-label"),t.EFF(14,"Contrase\xf1a"),t.k0s(),t.nrm(15,"input",10,11),t.j41(17,"button",12),t.bIt("click",function(){t.eBV(r);const u=t.sdS(16);return t.Njj(u.type="password"===u.type?"text":"password")}),t.DNE(18,R,1,1,"mat-icon",13)(19,U,1,1,"mat-icon",13),t.k0s(),t.DNE(20,j,2,0,"mat-error"),t.k0s(),t.j41(21,"button",14),t.bIt("click",function(){return e.unlock()}),t.DNE(22,w,2,0,"span")(23,A,1,2,"mat-progress-spinner",15),t.k0s(),t.j41(24,"div",16)(25,"span"),t.EFF(26,"No soy"),t.k0s(),t.j41(27,"a",17),t.EFF(28),t.k0s()()()()()()}if(2&i){const r=t.sdS(16);t.R7$(10),t.Y8G("formGroup",e.unlockSessionForm),t.R7$(5),t.Y8G("formControlName","pwd"),t.R7$(3),t.vxM(18,"password"===r.type?18:-1),t.R7$(),t.vxM(19,"text"===r.type?19:-1),t.R7$(),t.vxM(20,e.unlockSessionForm.get("pwd").hasError("required")?20:-1),t.R7$(),t.Y8G("color","primary")("disabled",e.unlockSessionForm.disabled),t.R7$(),t.vxM(22,e.unlockSessionForm.disabled?-1:22),t.R7$(),t.vxM(23,e.unlockSessionForm.disabled?23:-1),t.R7$(4),t.Y8G("routerLink",t.lJ4(11,L)),t.R7$(),t.SpI(" ",e.user.fullname," ")}},dependencies:[s.YN,s.qT,s.me,s.BC,s.cb,s.X1,s.j4,s.JD,l.RG,l.rl,l.nJ,l.TL,l.yw,f.fS,f.fg,m.Hl,m.$z,m.iY,h.m_,h.An,p.D6,p.LG,g.kt,k.Wk],encapsulation:2,data:{animation:x.X},changeDetection:0})}return n})()}]}}]);