webpackJsonp([36],{"95qf":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vuestic-tree-root",[n("vuestic-tree-category",{attrs:{label:"Electronics"}},e._l(e.electronics,function(t){return n("vuestic-tree-node",{key:t.id},[n("div",{staticClass:"form-group"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"electronic.name"}],domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}),e._v(" "),n("i",{staticClass:"bar"})])])])})),e._v(" "),n("vuestic-tree-category",{attrs:{isOpen:"",label:"Products"}},[e._l(e.products,function(t){return n("vuestic-tree-node",{key:t.id},[n("div",{staticClass:"form-group"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"product.name"}],domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}),e._v(" "),n("i",{staticClass:"bar"})])]),e._v(" "),n("div",{staticClass:"icon",attrs:{slot:"iconRight"},on:{click:function(n){e.removeProduct(t)}},slot:"iconRight"},[n("span",{staticClass:"ion ion-md-close",attrs:{"aria-hidden":"true"}})])])}),e._v(" "),n("vuestic-tree-node",[n("button",{staticClass:"btn btn-primary btn-micro mb-2",on:{click:function(t){e.addProduct()}}},[e._v("\n        Add new product\n      ")])])],2)],1)},o=[],a={render:i,staticRenderFns:o};t.a=a},CC6L:function(e,t,n){"use strict";t.a={name:"tree-view-editable-preview",data:function(){return{electronics:[{id:1,name:"Cellphones"},{id:2,name:"Camera Body Kits"},{id:3,name:"External HDDs"}],products:[{id:4,name:"Cables"},{id:5,name:"Monitors"},{id:6,name:"Keyboards"}]}},methods:{addProduct:function(){this.products.push({id:Math.floor(1e5*Math.random()),name:"New product"})},removeProduct:function(e){this.products=this.products.filter(function(t){return t!==e})}}}},QtuA:function(e,t,n){"use strict";function i(e){n("kvPp")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("CC6L"),a=n("95qf"),r=n("VU/8"),s=i,c=r(o.a,a.a,!1,s,"data-v-b4a4db64",null);t.default=c.exports},dpZh:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"TreeViewEditablePreview.vue",sourceRoot:""}])},kvPp:function(e,t,n){var i=n("dpZh");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("cacffd30",i,!0)}});
//# sourceMappingURL=36.826e43f8f6b91fb79f97.js.map