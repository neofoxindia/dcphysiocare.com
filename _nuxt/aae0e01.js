(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{228:function(t,e,o){var content=o(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(59).default)("71de331d",content,!0,{sourceMap:!1})},229:function(t,e,o){"use strict";o(228)},230:function(t,e,o){var n=o(58)(!1);n.push([t.i,".puff-out-center[data-v-bf47ee1e]{-webkit-animation:puff-out-center-data-v-bf47ee1e 1s cubic-bezier(.165,.84,.44,1) both;animation:puff-out-center-data-v-bf47ee1e 1s cubic-bezier(.165,.84,.44,1) both}@-webkit-keyframes puff-out-center-data-v-bf47ee1e{0%{transform:scale(1);filter:blur(0);opacity:1}to{transform:scale(1.5);filter:blur(4px);opacity:0}}@keyframes puff-out-center-data-v-bf47ee1e{0%{transform:scale(1);filter:blur(0);opacity:1}to{transform:scale(1.5);filter:blur(4px);opacity:0}}.card[data-v-bf47ee1e]{background-color:#eee5dc;box-shadow:0 3px 8px rgba(0,0,0,.24)}",""]),t.exports=n},231:function(t,e,o){"use strict";o.r(e);var n=o(234),l=(o(232),{name:"AppointmentForm",components:{DatePicker:n.a},data:function(){return{bookingPresent:!0,booking:{date:"",fullName:"",email:"",phone:""}}},created:function(){var t=localStorage.getItem("booking")||!1;!1!==t?this.booking=JSON.parse(t):this.bookingPresent=!1},methods:{createAppointment:function(){localStorage.setItem("booking",JSON.stringify(this.booking)),this.bookingPresent=!0},cancelAppointment:function(){localStorage.clear(),this.bookingPresent=!1}}}),c=(o(229),o(20)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[t.bookingPresent?o("div",{staticClass:"card border-0 m-md-5 m-2"},[o("div",{staticClass:"card-body bg-transparent"},[o("h4",[t._v(" Dear, "),o("b",[t._v(t._s(t.booking.fullName))]),t._v(" "),o("br"),o("br"),t._v("\n        Your have booking "),o("br"),t._v(" on "),o("b",[t._v(t._s(t.booking.date)+".")])])]),t._v(" "),o("div",{staticClass:"card-footer bg-transparent"},[o("button",{staticClass:"btn btn-warning text-dark"},[t._v("call us")]),t._v(" "),o("button",{staticClass:"ml-5 btn btn-danger text-dark",on:{click:t.cancelAppointment}},[t._v("cancel")])])]):o("form",{staticClass:"intro-form row",on:{submit:[function(t){t.preventDefault()},t.createAppointment]}},[t._m(0),t._v(" "),o("div",{staticClass:"form-group col-lg-12 col-md-6 col-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.booking.fullName,expression:"booking.fullName"}],staticClass:"form-control",attrs:{required:"",type:"text",minlength:"4","aria-label":"Full Name",placeholder:"Full Name"},domProps:{value:t.booking.fullName},on:{input:function(e){e.target.composing||t.$set(t.booking,"fullName",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-lg-12 col-md-6 col-12"},[o("date-picker",{staticClass:"w-100",attrs:{valueType:"MMMM-DD",format:"MMMM-DD",placeholder:"Date"},model:{value:t.booking.date,callback:function(e){t.$set(t.booking,"date",e)},expression:"booking.date"}})],1),t._v(" "),o("div",{staticClass:"form-group col-lg-12 col-md-6 col-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.booking.email,expression:"booking.email"}],staticClass:"form-control",attrs:{"aria-label":"Email",type:"text",name:"email",placeholder:"Email"},domProps:{value:t.booking.email},on:{input:function(e){e.target.composing||t.$set(t.booking,"email",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-lg-12 col-md-6 col-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.booking.phone,expression:"booking.phone"}],staticClass:"form-control",attrs:{"aria-label":"phone",type:"text",maxlength:"15",placeholder:"Phone"},domProps:{value:t.booking.phone},on:{input:function(e){e.target.composing||t.$set(t.booking,"phone",e.target.value)}}})]),t._v(" "),o("button",{staticClass:"btn btn-block btn-lg btn-primary",attrs:{type:"submit"}},[t._v("Make an Appointment\n    ")])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticClass:"col-12 p-0 pb-4 text-center"},[o("b",[t._v("#1")]),t._v(" Physical Treatment")])}],!1,null,"bf47ee1e",null);e.default=component.exports},233:function(t,e,o){var content=o(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(59).default)("1b7833da",content,!0,{sourceMap:!1})},236:function(t,e,o){"use strict";o(233)},237:function(t,e,o){var n=o(58)(!1);n.push([t.i,"body{overflow-x:hidden}.your{letter-spacing:-2px;font-size:2rem}.text-shadow{text-shadow:rgba(0,0,0,.24) 0 3px 8px}",""]),t.exports=n},238:function(t,e,o){"use strict";o.r(e);var n={components:{AppointmentForm:o(231).default},name:"index"},l=(o(236),o(20)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"intro intro1",attrs:{id:"home"}},[t._m(0),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"row d-flex justify-content-center align-item-center",staticStyle:{padding:"12vw 0"}},[t._m(1),t._v(" "),o("AppointmentForm",{staticClass:"offset-md-1 col-lg-5 col-md-10 col-11 mt-lg-0 mt-5"})],1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay"},[e("a",{attrs:{href:"https://www.freepik.com/photos/people"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-6 p-0 pl-md-3 pl-4"},[o("h2",{staticClass:"align-middle",staticStyle:{"font-size":"calc(3vw + 4vh + 10px)","margin-top":"4vw"}},[o("span",{staticClass:"your"},[t._v("YOUR")]),o("span",{staticClass:"text-info text-shadow"},[t._v("HEALTH")]),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"your"},[t._v("YOUR")]),o("span",{staticClass:"text-info text-shadow"},[t._v("JOURNEY")]),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"your"},[o("s",{staticClass:"text-warning"},[t._v(" Y ")]),t._v("OUR")]),o("span",{staticClass:"text-danger text-shadow"},[t._v("CARE")])]),t._v(" "),o("p",{staticClass:"font-weight-normal"},[t._v("\n            Let's not wait for perfect conditions to begin. Let's begin to make perfect conditions for a healthy\n            physical condition\n            ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-primary",attrs:{id:"stats2"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-3 col-6"},[o("div",{staticClass:"stats2-info"},[o("i",{staticClass:"ilmosys-business-manwoman"}),t._v(" "),o("p",[o("span",{staticClass:"count"},[t._v("5500")])]),t._v(" "),o("h2",[t._v("Healthy Clients")])])]),t._v(" "),o("div",{staticClass:"col-md-3 col-6"},[o("div",{staticClass:"stats2-info"},[o("i",{staticClass:"ilmosys-doctor"}),t._v(" "),o("p",[o("span",{staticClass:"count"},[t._v("85")])]),t._v(" "),o("h2",[t._v("Professional Doctors")])])]),t._v(" "),o("div",{staticClass:"col-md-3 col-6"},[o("div",{staticClass:"stats2-info"},[o("i",{staticClass:"ilmosys-ambulance"}),t._v(" "),o("p",[o("span",{staticClass:"count"},[t._v("30")])]),t._v(" "),o("h2",[t._v("Ambulance")])])]),t._v(" "),o("div",{staticClass:"col-md-3 col-6"},[o("div",{staticClass:"stats2-info"},[o("i",{staticClass:"ilmosys-hospital-2"}),t._v(" "),o("p",[o("span",{staticClass:"count"},[t._v("200")])]),t._v(" "),o("h2",[t._v("Rooms")])])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"features"}},[o("div",{staticClass:"about-inline text-center"},[o("div",{staticClass:"container"},[o("p",[t._v("- FEATURES -")]),t._v(" "),o("h3",[t._v("Check out some of our professional"),o("br"),t._v(" features! ")])])]),t._v(" "),o("div",{staticClass:"info-content"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row center-content"},[o("div",{staticClass:"col-md-8 text-center"},[o("img",{staticClass:"pull-right img-responsive",attrs:{src:"images/services/2.jpg",alt:""}})]),t._v(" "),o("div",{staticClass:"col-md-4"},[o("h3",[t._v("The Perfect Template for Medical. ")]),t._v(" "),o("ul",{staticClass:"list"},[o("li",[o("i",{staticClass:"icon-check"}),t._v(" Nunc quis justo sed odio scelerisque.")]),t._v(" "),o("li",[o("i",{staticClass:"icon-check"}),t._v(" Duis tristique lorem non risus dignissim.")]),t._v(" "),o("li",[o("i",{staticClass:"icon-check"}),t._v("Vivamus accumsan sem sit amet.")]),t._v(" "),o("li",[o("i",{staticClass:"icon-check"}),t._v("Morbi sed orci a tortor bibendum finibus vitae.")]),t._v(" "),o("li",[o("i",{staticClass:"icon-check"}),t._v("Nam sed sem quis nisi faucibus tempor.")])]),t._v(" "),o("div",{staticClass:"space30"}),t._v(" "),o("a",{staticClass:"btn btn-lg btn-primary",attrs:{href:"#"}},[t._v("Learn More "),o("i",{staticClass:"icon-arrow-right"})])])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"services bg-light",attrs:{id:"services"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"about-inline text-center"},[o("p",[t._v("- SERVICES -")]),t._v(" "),o("h3",[t._v("Our Medical Service ")]),t._v(" "),o("p",[t._v("We're different from typical health checkup center. We're out to create magic. The goal is to WOW you with\n          outstanding treatment.")])]),t._v(" "),o("div",{staticClass:"services-s5 row"},[o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"service-content"},[o("i",{staticClass:"ilmosys-astronaut"}),t._v(" "),o("h4",[t._v("Robotic Surgery")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic\n              itudin urna interdum.")])])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"service-content"},[o("i",{staticClass:"ilmosys-women"}),t._v(" "),o("h4",[t._v("Women’s Care")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic\n              itudin urna interdum.")])])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"service-content"},[o("i",{staticClass:"ilmosys-virus-2"}),t._v(" "),o("h4",[t._v("Cancer Services")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic\n              itudin urna interdum.")])])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"service-content"},[o("i",{staticClass:"ilmosys-first-aid"}),t._v(" "),o("h4",[t._v("Emergency Services")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic\n              itudin urna interdum.")])])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"space50"}),t._v(" "),o("div",{staticClass:"service-content"},[o("i",{staticClass:"ilmosys-medicine-2"}),t._v(" "),o("h4",[t._v("Wellness Center")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic\n              itudin urna interdum.")])])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"space50"}),t._v(" "),o("div",{staticClass:"service-content"},[o("i",{staticClass:"ilmosys-hospital-2"}),t._v(" "),o("h4",[t._v("Orthopaedic & Spine Institute")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic\n              itudin urna interdum.")])])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"space50"}),t._v(" "),o("div",{staticClass:"service-content"},[o("i",{staticClass:"ilmosys-brain-3"}),t._v(" "),o("h4",[t._v("Barin Checkup")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic\n              itudin urna interdum.")])])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"space50"}),t._v(" "),o("div",{staticClass:"service-content"},[o("i",{staticClass:"ilmosys-heart"}),t._v(" "),o("h4",[t._v("Heart Care Services")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic\n              itudin urna interdum.")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AppointmentForm:o(231).default})}}]);