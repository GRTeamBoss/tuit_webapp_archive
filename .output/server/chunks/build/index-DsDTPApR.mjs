import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1 } from './PageSection-Dq2HFK-8.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'reka-ui';
import './Container-w6ZohlMa.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UPage = _sfc_main$3;
  const _component_UPageHero = _sfc_main$2;
  const _component_UPageSection = _sfc_main$1;
  _push(ssrRenderComponent(_component_UPage, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UPageHero, { title: "TUIT Archive Web-App" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UPageSection, {
          title: "About",
          description: "This Web-App have search filter in category, subject, year"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UPageHero, { title: "TUIT Archive Web-App" }),
          createVNode(_component_UPageSection, {
            title: "About",
            description: "This Web-App have search filter in category, subject, year"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DsDTPApR.mjs.map
