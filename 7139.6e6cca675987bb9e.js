"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[7139],{88458:(y,Z,l)=>{l.d(Z,{L:()=>A});var n=l(56223);class A{static isEmptyInputValue(r){return null==r||0===r.length}static mustMatch(r,s){return o=>{const u=o.get(r),a=o.get(s);if(!u||!a||(a.hasError("mustMatch")&&(delete a.errors.mustMatch,a.updateValueAndValidity()),this.isEmptyInputValue(a.value)||u.value===a.value))return null;const p={mustMatch:"Las contrase\xf1a no coinciden."};return a.setErrors(p),p}}static notMustMatch(r,s){return o=>{const u=o.get(r),a=o.get(s);if(!u||!a||(a.hasError("notMustMatch")&&(delete a.errors.notMustMatch,a.updateValueAndValidity()),this.isEmptyInputValue(a.value)))return null;if(u.value===a.value){const p={notMustMatch:"no pueden coincidir."};return a.setErrors(p),p}return null}}static strongPassWord(r,s,o,u,a){return p=>{const d=p.value;if(!d)return null;const t=!r||/[A-Z]+/.test(d),v=!s||/[a-z]+/.test(d),x=!o||/[0-9]+/.test(d),C=!u||!/^[a-zA-Z0-9]+$/.test(d);return t&&v&&x&&C&&d.length>=a?null:{password:"La contrase\xf1a no cumple con los est\xe1ndares de seguridad requeridos"}}}static onlyNumber(r){return s=>{const o=s.get(r);if(!o||(o.hasError("onlyNumber")&&(delete o.errors.mustMatch,o.updateValueAndValidity()),/^[a-zA-Z0-9]+$/.test(o.value.toString())))return null;const a={onlyNumber:"Solo se admiten n\xfameros."};return o.setErrors(a),a}}static strongPasWordPattern(){return n.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)}static emailPattern(){return n.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")}static onlyIntegerPattern(){return n.kI.pattern("^[0-9]*$")}static onlyNumbersPattern(){return n.kI.pattern(/^[+-]?\d+(\.\d+)?$/)}static onlyAlphabetsWithAccentPattern(){return n.kI.pattern("^[a-zA-Z \xe1\xe9\xed\xf3\xfa\xf1\xfc]*$")}static onlyAlphabetsPattern(){return n.kI.pattern("^[a-zA-Z ]*$")}static futureDateValidator(){return r=>new Date(r.value)<=new Date?null:{futureDate:!0}}static validateIdNumber(){return r=>{if(!r)return null;let s=r.value;if(!s)return null;void 0!==r.value.idNumber&&(s=r.value.idNumber);const o=parseInt(s.substring(0,2),10),u=parseInt(s.substring(2,4),10)-1,a=parseInt(s.substring(4,6),10),p=new Date(o,u,a);if(p.getFullYear().toString().substring(2,4)===o.toString()&&p.getMonth()===u&&p.getDate()===a)return null;const t={validateIdNumber:"El n\xfamero de identidad introducido es incorrecto"};return r.setErrors(t),t}}static validFullName(r){return s=>{const o=s.get(r);if(!o||!r||(o.hasError("validFullName")&&(delete o.errors.validFullName,o.updateValueAndValidity()),this._isEmptyInputValue(o.value))||o.value.trim().split(" ").length>1)return null;const u={validFullName:"El nombre completo deber\xe1 tener al menos un nombre y un apellido"};return o.setErrors(u),u}}static _isEmptyInputValue(r){return null==r||0===r.length}}},7139:(y,Z,l)=>{l.r(Z),l.d(Z,{default:()=>Y});var n=l(56223),A=l(32296),_=l(75986),r=l(64170),s=l(30617),o=l(24516),u=l(55940),a=l(64190),p=l(94748),d=l(88458),t=l(19212),v=l(54855);const x=["signUpNgForm"];function C(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre son obligatorios. "),t.qZA())}function b(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre no deben superar los 250 caracteres. "),t.qZA())}function T(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El Primer Apellido son obligatorios. "),t.qZA())}function F(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El Primer Apellido no deben superar los 250 caracteres. "),t.qZA())}function w(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El Segundo Apellido no deben superar los 250 caracteres. "),t.qZA())}function I(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El correo electr\xf3nico es obligatorio "),t.qZA())}function E(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor ingrese un correo electr\xf3nico v\xe1lido "),t.qZA())}function N(e,m){1&e&&t._UZ(0,"mat-icon",30),2&e&&t.Q6J("svgIcon","mat_solid:visibility")}function q(e,m){1&e&&t._UZ(0,"mat-icon",30),2&e&&t.Q6J("svgIcon","mat_solid:visibility-off")}function S(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: ! " ? $ % ^ &. '),t.qZA())}function k(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La contrase\xf1a es obligatoria "),t.qZA())}function M(e,m){1&e&&t._UZ(0,"mat-icon",30),2&e&&t.Q6J("svgIcon","mat_solid:visibility")}function L(e,m){1&e&&t._UZ(0,"mat-icon",30),2&e&&t.Q6J("svgIcon","mat_solid:visibility-off")}function J(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La contrase\xf1a es obligatoria "),t.qZA())}function P(e,m){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const g=t.oxw();t.xp6(),t.hij(" ",g.signUpForm.get("pwd2").getError("mustMatch")," ")}}function Q(e,m){1&e&&(t.TgZ(0,"span"),t._uU(1," Crear cuenta "),t.qZA())}function D(e,m){1&e&&t._UZ(0,"mat-progress-spinner",29),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const V=()=>["/sign-in"],Y=[{path:"",component:(()=>{class e{constructor(g,c,i){this._authService=g,this._formBuilder=c,this._router=i}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(255),d.L.onlyAlphabetsWithAccentPattern()]],lastname1:["",[n.kI.required,n.kI.maxLength(255),d.L.onlyAlphabetsWithAccentPattern()]],lastname2:["",[n.kI.minLength(3),n.kI.maxLength(255),d.L.onlyAlphabetsWithAccentPattern()]],email:["",[n.kI.required,n.kI.email]],pwd:["*",[n.kI.required,n.kI.minLength(8),n.kI.maxLength(100),d.L.strongPasWordPattern()]],pwd2:["*",[n.kI.required]],agreements:[!0,n.kI.requiredTrue]},{validators:[d.L.mustMatch("pwd","pwd2")]})}signUp(){if(this.signUpForm.invalid)return;const g=this.signUpForm.getRawValue();delete g.pwd2,this.signUpForm.disable(),this._authService.signUp(g).subscribe(c=>{this._router.navigateByUrl("/confirmation-required")},c=>{this.signUpForm.enable(),this.signUpForm.reset()})}static#t=this.\u0275fac=function(c){return new(c||e)(t.Y36(v.e),t.Y36(n.QS),t.Y36(a.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-up"]],viewQuery:function(c,i){if(1&c&&t.Gf(x,5),2&c){let h;t.iGM(h=t.CRH())&&(i.signUpNgForm=h.first)}},standalone:!0,features:[t.jDz],decls:73,vars:36,consts:[[1,"flex","flex-col","items-center","flex-auto","min-w-0","sm:flex-row","md:items-start","sm:justify-center","md:justify-start"],[1,"relative","items-center","justify-center","flex-auto","hidden","w-2/3","h-screen","p-16","overflow-hidden","bg-white","bg-cover","dark:bg-transparent","md:flex","lg:px-28","dark:border-r"],[1,"relative","z-10","w-2/3","aspect-auto"],["src","assets/images/illustrations/auth-dark.svg","alt","Imagen de Inicio"],[1,"border-l","overflow-auto","w-full","px-4","py-8","md:flex","md:items-center","md:justify-end","sm:w-auto","md:h-full","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card",2,"height","100vh !important"],[1,"w-full","mx-auto","max-w-80","sm:w-80","sm:mx-0","overflow-auto","px-2","md:mt-20"],["src","assets/images/logo/logo-text.svg","alt","Logo image",1,"h-18","w-auto","dark:hidden","aspect-auto"],["src","assets/images/logo/logo-text-on-dark.svg","alt","Logo image",1,"h-18","w-auto","hidden","dark:flex","aspect-auto"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8",3,"formGroup"],[1,"w-full","fuse-mat-dense"],["id","name","matInput","","required","",3,"formControlName","maxlength"],["id","lastname1","matInput","","required","",3,"formControlName","maxlength"],["id","lastname2","matInput","",3,"formControlName","maxlength"],["id","email","matInput","",3,"formControlName"],[1,"w-full","fuse-mat-dense","pb-4",3,"subscriptSizing"],["id","pwd","matInput","","type","password","required","",3,"formControlName","minlength","maxlength"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon"],["id","pwd2","matInput","","type","password","required","",3,"formControlName"],["passwordField2",""],[1,"inline-flex","items-end","w-full","mt-1.5"],[3,"color","formControlName"],["href","https://athendat.site/#/terms","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["href","https://athendat.site/#/privacy","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["mat-flat-button","",1,"w-full","mt-6","fuse-mat-button-large",3,"color","disabled","click"],[3,"diameter","mode"],[1,"icon-size-5",3,"svgIcon"]],template:function(c,i){if(1&c){const h=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA()(),t.TgZ(4,"div",4)(5,"div",5)(6,"div"),t._UZ(7,"img",6)(8,"img",7),t.qZA(),t.TgZ(9,"div",8),t._uU(10,"Registro"),t.qZA(),t.TgZ(11,"div",9)(12,"div"),t._uU(13,"\xbfYa tiene un cuenta?"),t.qZA(),t.TgZ(14,"a",10),t._uU(15," Iniciar Sesi\xf3n "),t.qZA()(),t.TgZ(16,"form",11)(17,"mat-form-field",12)(18,"mat-label"),t._uU(19,"Nombre"),t.qZA(),t._UZ(20,"input",13),t.YNc(21,C,2,0,"mat-error")(22,b,2,0,"mat-error"),t.qZA(),t.TgZ(23,"mat-form-field",12)(24,"mat-label"),t._uU(25,"Primer Apellido"),t.qZA(),t._UZ(26,"input",14),t.YNc(27,T,2,0,"mat-error")(28,F,2,0,"mat-error"),t.qZA(),t.TgZ(29,"mat-form-field",12)(30,"mat-label"),t._uU(31,"Segundo Apellido"),t.qZA(),t._UZ(32,"input",15),t.YNc(33,w,2,0,"mat-error"),t.qZA(),t.TgZ(34,"mat-form-field",12)(35,"mat-label"),t._uU(36,"Correo electr\xf3nico"),t.qZA(),t._UZ(37,"input",16),t.YNc(38,I,2,0,"mat-error")(39,E,2,0,"mat-error"),t.qZA(),t.TgZ(40,"mat-form-field",17)(41,"mat-label"),t._uU(42,"Contrase\xf1a"),t.qZA(),t._UZ(43,"input",18,19),t.TgZ(45,"button",20),t.NdJ("click",function(){t.CHM(h);const f=t.MAs(44);return t.KtG(f.type="password"===f.type?"text":"password")}),t.YNc(46,N,1,1,"mat-icon",21)(47,q,1,1,"mat-icon",21),t.qZA(),t.YNc(48,S,2,0,"mat-error")(49,k,2,0,"mat-error"),t.qZA(),t.TgZ(50,"mat-form-field",12)(51,"mat-label"),t._uU(52,"Repita la contrase\xf1a"),t.qZA(),t._UZ(53,"input",22,23),t.TgZ(55,"button",20),t.NdJ("click",function(){t.CHM(h);const f=t.MAs(54);return t.KtG(f.type="password"===f.type?"text":"password")}),t.YNc(56,M,1,1,"mat-icon",21)(57,L,1,1,"mat-icon",21),t.qZA(),t.YNc(58,J,2,0,"mat-error")(59,P,2,1,"mat-error"),t.qZA(),t.TgZ(60,"div",24)(61,"mat-checkbox",25)(62,"span"),t._uU(63,"Estoy de acuerdo con los"),t.qZA(),t.TgZ(64,"a",26),t._uU(65,"T\xe9rminos de Uso "),t.qZA(),t.TgZ(66,"span"),t._uU(67,"y la"),t.qZA(),t.TgZ(68,"a",27),t._uU(69,"Pol\xedtica de Privacidad "),t.qZA()()(),t.TgZ(70,"button",28),t.NdJ("click",function(){return i.signUp()}),t.YNc(71,Q,2,0,"span")(72,D,1,2,"mat-progress-spinner",29),t.qZA()()()()()}if(2&c){const h=t.MAs(44),U=t.MAs(54);t.xp6(14),t.Q6J("routerLink",t.DdM(35,V)),t.xp6(2),t.Q6J("formGroup",i.signUpForm),t.xp6(4),t.Q6J("formControlName","name")("maxlength",255),t.xp6(),t.um2(21,i.signUpForm.get("name").hasError("required")?21:-1),t.xp6(),t.um2(22,i.signUpForm.get("name").hasError("maxlength")?22:-1),t.xp6(4),t.Q6J("formControlName","lastname1")("maxlength",255),t.xp6(),t.um2(27,i.signUpForm.get("lastname1").hasError("required")?27:-1),t.xp6(),t.um2(28,i.signUpForm.get("lastname1").hasError("maxlength")?28:-1),t.xp6(4),t.Q6J("formControlName","lastname2")("maxlength",255),t.xp6(),t.um2(33,i.signUpForm.get("lastname2").hasError("maxlength")?33:-1),t.xp6(4),t.Q6J("formControlName","email"),t.xp6(),t.um2(38,i.signUpForm.get("email").hasError("required")?38:-1),t.xp6(),t.um2(39,i.signUpForm.get("email").hasError("email")?39:-1),t.xp6(),t.Q6J("subscriptSizing","dynamic"),t.xp6(3),t.Q6J("formControlName","pwd")("minlength",8)("maxlength",100),t.xp6(3),t.um2(46,"password"===h.type?46:-1),t.xp6(),t.um2(47,"text"===h.type?47:-1),t.xp6(),t.um2(48,i.signUpForm.get("pwd").hasError("pattern")||i.signUpForm.get("pwd").hasError("minlength")?48:-1),t.xp6(),t.um2(49,i.signUpForm.get("pwd").hasError("required")?49:-1),t.xp6(4),t.Q6J("formControlName","pwd2"),t.xp6(3),t.um2(56,"password"===U.type?56:-1),t.xp6(),t.um2(57,"text"===U.type?57:-1),t.xp6(),t.um2(58,i.signUpForm.get("pwd2").hasError("required")?58:-1),t.xp6(),t.um2(59,i.signUpForm.get("pwd2").hasError("mustMatch")?59:-1),t.xp6(2),t.Q6J("color","primary")("formControlName","agreements"),t.xp6(9),t.Q6J("color","primary")("disabled",i.signUpForm.disabled||i.signUpForm.invalid),t.xp6(),t.um2(71,i.signUpForm.disabled?-1:71),t.xp6(),t.um2(72,i.signUpForm.disabled?72:-1)}},dependencies:[a.rH,n.u5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.wO,n.nD,n.UX,n.sg,n.u,r.lN,r.KE,r.hX,r.TO,r.R9,o.c,o.Nt,A.ot,A.lW,A.RK,s.Ps,s.Hw,_.p9,_.oG,u.Cq,u.Ou],encapsulation:2,data:{animation:p.L}})}return e})()}]}}]);