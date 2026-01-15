import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1 } from './PageSection-Dq2HFK-8.mjs';
import { _ as _sfc_main$4 } from './NavigationMenu-1dMkt1qq.mjs';
import { defineComponent, ref, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import 'reka-ui';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'node:url';
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
import './Container-w6ZohlMa.mjs';
import 'reka-ui/namespaced';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      [
        {
          label: "Links",
          type: "label"
        },
        {
          label: "UNILibrary",
          to: "/catalog/unilibrary/",
          target: "_blank"
        }
      ]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$3;
      const _component_UPageHero = _sfc_main$2;
      const _component_UPageSection = _sfc_main$1;
      const _component_UNavigationMenu = _sfc_main$4;
      _push(ssrRenderComponent(_component_UPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHero, {
              title: "Catalog",
              description: "You might find in this page items from UNILibrary and also uploaded items"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageSection, { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UNavigationMenu, {
                    items: unref(items),
                    class: "mx-auto"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UNavigationMenu, {
                      items: unref(items),
                      class: "mx-auto"
                    }, null, 8, ["items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageHero, {
                title: "Catalog",
                description: "You might find in this page items from UNILibrary and also uploaded items"
              }),
              createVNode(_component_UPageSection, { class: "text-center" }, {
                default: withCtx(() => [
                  createVNode(_component_UNavigationMenu, {
                    items: unref(items),
                    class: "mx-auto"
                  }, null, 8, ["items"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-nVBBNHMe.mjs.map
