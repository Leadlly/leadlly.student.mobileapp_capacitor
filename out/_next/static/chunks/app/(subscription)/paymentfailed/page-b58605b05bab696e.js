(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6753],{2443:function(e,t,s){Promise.resolve().then(s.t.bind(s,231,23))},291:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=s(9920)._(s(2265)).default.createContext(null)},9195:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return i.isDynamicRoute}});let n=s(9089),i=s(8083)},8083:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return r}});let n=s(2269),i=/\/\[[^/]+?\](?=\/|$)/;function r(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),i.test(e)}},9089:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return n}});class s{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let s=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&s.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');s.unshift(t)}return null!==this.restSlugName&&s.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&s.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),s}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let i=e[0];if(i.startsWith("[")&&i.endsWith("]")){let s=i.slice(1,-1),o=!1;if(s.startsWith("[")&&s.endsWith("]")&&(s=s.slice(1,-1),o=!0),s.startsWith("...")&&(s=s.substring(3),n=!0),s.startsWith("[")||s.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+s+"').");if(s.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+s+"').");function r(e,s){if(null!==e&&e!==s)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+s+"').");t.forEach(e=>{if(e===s)throw Error('You cannot have the same slug name "'+s+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===i.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+s+'" differ only by non-word symbols within a single dynamic path')}),t.push(s)}if(n){if(o){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');r(this.optionalRestSlugName,s),this.optionalRestSlugName=s,i="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');r(this.restSlugName,s),this.restSlugName=s,i="[...]"}}else{if(o)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');r(this.slugName,s),this.slugName=s,i="[]"}}this.children.has(i)||this.children.set(i,new s),this.children.get(i)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function n(e){let t=new s;return e.forEach(e=>t.insert(e)),t.smoosh()}}},function(e){e.O(0,[231,2971,7023,1744],function(){return e(e.s=2443)}),_N_E=e.O()}]);