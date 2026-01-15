import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$4 } from './PageSection-Dq2HFK-8.mjs';
import { u as useUnilibrary, _ as _sfc_main$5 } from './useUnilibrary-Deicu5d1.mjs';
import { defineComponent, ref, withAsyncContext, withCtx, unref, createVNode, toDisplayString, useSlots, computed, mergeProps, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { d as useRoute, u as useAppConfig, t as tv, a as _sfc_main$a, p as pickLinkProps, b as _sfc_main$b, c as _sfc_main$f } from './server.mjs';
import './Container-w6ZohlMa.mjs';
import '@vueuse/core';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const theme = {
  "slots": {
    "root": "flex flex-col gap-3",
    "title": "text-sm font-semibold flex items-center gap-1.5",
    "list": "flex flex-col gap-2",
    "item": "relative",
    "link": "group text-sm flex items-center gap-1.5 focus-visible:outline-primary",
    "linkLeadingIcon": "size-5 shrink-0",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "size-3 absolute top-0 text-dimmed"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-primary font-medium"
      },
      "false": {
        "link": [
          "text-muted hover:text-default",
          "transition-colors"
        ]
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UPageLinks",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "nav" },
    title: { type: String, required: false },
    links: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pageLinks || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.title || !!slots.title) {
              _push2(`<p data-slot="title" class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<ul data-slot="list" class="${ssrRenderClass(ui.value.list({ class: props.ui?.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.links, (link, index) => {
              _push2(`<li data-slot="item" class="${ssrRenderClass(ui.value.item({ class: [props.ui?.item, link.ui?.item] }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$a, mergeProps({ ref_for: true }, unref(pickLinkProps)(link), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$b, mergeProps({ ref_for: true }, slotProps, {
                      "data-slot": "link",
                      class: ui.value.link({ class: [props.ui?.link, link.ui?.link, link.class], active })
                    }), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "link", {
                            link,
                            active,
                            ui: ui.value
                          }, () => {
                            ssrRenderSlot(_ctx.$slots, "link-leading", {
                              link,
                              active,
                              ui: ui.value
                            }, () => {
                              if (link.icon) {
                                _push4(ssrRenderComponent(_sfc_main$f, {
                                  name: link.icon,
                                  "data-slot": "linkLeadingIcon",
                                  class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], active })
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            if (link.label || !!slots["link-label"]) {
                              _push4(`<span data-slot="linkLabel" class="${ssrRenderClass(ui.value.linkLabel({ class: [props.ui?.linkLabel, link.ui?.linkLabel], active }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, "link-label", {
                                link,
                                active
                              }, () => {
                                _push4(`${ssrInterpolate(link.label)}`);
                              }, _push4, _parent4, _scopeId3);
                              if (link.target === "_blank") {
                                _push4(ssrRenderComponent(_sfc_main$f, {
                                  name: unref(appConfig).ui.icons.external,
                                  "data-slot": "linkLabelExternalIcon",
                                  class: ui.value.linkLabelExternalIcon({ class: [props.ui?.linkLabelExternalIcon, link.ui?.linkLabelExternalIcon], active })
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            ssrRenderSlot(_ctx.$slots, "link-trailing", {
                              link,
                              active
                            }, null, _push4, _parent4, _scopeId3);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "link", {
                              link,
                              active,
                              ui: ui.value
                            }, () => [
                              renderSlot(_ctx.$slots, "link-leading", {
                                link,
                                active,
                                ui: ui.value
                              }, () => [
                                link.icon ? (openBlock(), createBlock(_sfc_main$f, {
                                  key: 0,
                                  name: link.icon,
                                  "data-slot": "linkLeadingIcon",
                                  class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], active })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ]),
                              link.label || !!slots["link-label"] ? (openBlock(), createBlock("span", {
                                key: 0,
                                "data-slot": "linkLabel",
                                class: ui.value.linkLabel({ class: [props.ui?.linkLabel, link.ui?.linkLabel], active })
                              }, [
                                renderSlot(_ctx.$slots, "link-label", {
                                  link,
                                  active
                                }, () => [
                                  createTextVNode(toDisplayString(link.label), 1)
                                ]),
                                link.target === "_blank" ? (openBlock(), createBlock(_sfc_main$f, {
                                  key: 0,
                                  name: unref(appConfig).ui.icons.external,
                                  "data-slot": "linkLabelExternalIcon",
                                  class: ui.value.linkLabelExternalIcon({ class: [props.ui?.linkLabelExternalIcon, link.ui?.linkLabelExternalIcon], active })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "link-trailing", {
                                link,
                                active
                              })
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$b, mergeProps({ ref_for: true }, slotProps, {
                        "data-slot": "link",
                        class: ui.value.link({ class: [props.ui?.link, link.ui?.link, link.class], active })
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "link", {
                            link,
                            active,
                            ui: ui.value
                          }, () => [
                            renderSlot(_ctx.$slots, "link-leading", {
                              link,
                              active,
                              ui: ui.value
                            }, () => [
                              link.icon ? (openBlock(), createBlock(_sfc_main$f, {
                                key: 0,
                                name: link.icon,
                                "data-slot": "linkLeadingIcon",
                                class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], active })
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                            ]),
                            link.label || !!slots["link-label"] ? (openBlock(), createBlock("span", {
                              key: 0,
                              "data-slot": "linkLabel",
                              class: ui.value.linkLabel({ class: [props.ui?.linkLabel, link.ui?.linkLabel], active })
                            }, [
                              renderSlot(_ctx.$slots, "link-label", {
                                link,
                                active
                              }, () => [
                                createTextVNode(toDisplayString(link.label), 1)
                              ]),
                              link.target === "_blank" ? (openBlock(), createBlock(_sfc_main$f, {
                                key: 0,
                                name: unref(appConfig).ui.icons.external,
                                "data-slot": "linkLabelExternalIcon",
                                class: ui.value.linkLabelExternalIcon({ class: [props.ui?.linkLabelExternalIcon, link.ui?.linkLabelExternalIcon], active })
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "link-trailing", {
                              link,
                              active
                            })
                          ])
                        ]),
                        _: 2
                      }, 1040, ["class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              __props.title || !!slots.title ? (openBlock(), createBlock("p", {
                key: 0,
                "data-slot": "title",
                class: ui.value.title({ class: props.ui?.title })
              }, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(__props.title), 1)
                ])
              ], 2)) : createCommentVNode("", true),
              createVNode("ul", {
                "data-slot": "list",
                class: ui.value.list({ class: props.ui?.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                  return openBlock(), createBlock("li", {
                    key: index,
                    "data-slot": "item",
                    class: ui.value.item({ class: [props.ui?.item, link.ui?.item] })
                  }, [
                    createVNode(_sfc_main$a, mergeProps({ ref_for: true }, unref(pickLinkProps)(link), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => [
                        createVNode(_sfc_main$b, mergeProps({ ref_for: true }, slotProps, {
                          "data-slot": "link",
                          class: ui.value.link({ class: [props.ui?.link, link.ui?.link, link.class], active })
                        }), {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "link", {
                              link,
                              active,
                              ui: ui.value
                            }, () => [
                              renderSlot(_ctx.$slots, "link-leading", {
                                link,
                                active,
                                ui: ui.value
                              }, () => [
                                link.icon ? (openBlock(), createBlock(_sfc_main$f, {
                                  key: 0,
                                  name: link.icon,
                                  "data-slot": "linkLeadingIcon",
                                  class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], active })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ]),
                              link.label || !!slots["link-label"] ? (openBlock(), createBlock("span", {
                                key: 0,
                                "data-slot": "linkLabel",
                                class: ui.value.linkLabel({ class: [props.ui?.linkLabel, link.ui?.linkLabel], active })
                              }, [
                                renderSlot(_ctx.$slots, "link-label", {
                                  link,
                                  active
                                }, () => [
                                  createTextVNode(toDisplayString(link.label), 1)
                                ]),
                                link.target === "_blank" ? (openBlock(), createBlock(_sfc_main$f, {
                                  key: 0,
                                  name: unref(appConfig).ui.icons.external,
                                  "data-slot": "linkLabelExternalIcon",
                                  class: ui.value.linkLabelExternalIcon({ class: [props.ui?.linkLabelExternalIcon, link.ui?.linkLabelExternalIcon], active })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "link-trailing", {
                                link,
                                active
                              })
                            ])
                          ]),
                          _: 2
                        }, 1040, ["class"])
                      ]),
                      _: 2
                    }, 1040)
                  ], 2);
                }), 128))
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const data = ref({});
    const links = ref([{}]);
    const { getByID } = ([__temp, __restore] = withAsyncContext(() => useUnilibrary()), __temp = await __temp, __restore(), __temp);
    const route = useRoute();
    data.value = ([__temp, __restore] = withAsyncContext(() => getByID(parseInt(route.path.split("/")[3]))), __temp = await __temp, __restore(), __temp);
    const dataImage = ref("");
    const dataFile = ref("");
    if (data.value.result[0].icon_file !== null) {
      dataImage.value = `https://api.unilibrary.uz/storage/PublisherResourceImage/${data.value.result[0].id}/images/${data.value.result[0].media[0].filename}.png`;
      if (data.value.result[0].publisher_file !== null) {
        dataFile.value = `https://api.unilibrary.uz/storage/PublisherResourceFile/${data.value.result[0].id}/images/${data.value.result[0].media[1].filename}.pdf`;
      }
    } else {
      if (data.value.result[0].publisher_file !== null) {
        dataFile.value = `https://api.unilibrary.uz/storage/PublisherResourceFile/${data.value.result[0].id}/images/${data.value.result[0].media[0].filename}.pdf`;
      }
    }
    if (dataFile.value === "") {
      links.value = [
        {
          label: "No resource"
        }
      ];
    } else {
      links.value = [
        {
          label: "Download",
          to: dataFile,
          target: "_blank"
        }
      ];
    }
    const downloadPDF = () => {
      (void 0).open(
        `https://api.unilibrary.uz/storage/PublisherResourceFile/${data.value.result[0].id}/images/${data.value.result[0].media[1].filename}.pdf`,
        "_blank"
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$3;
      const _component_UPageHero = _sfc_main$2;
      const _component_UPageSection = _sfc_main$4;
      const _component_UPageCard = _sfc_main$5;
      const _component_UPageLinks = _sfc_main$1;
      _push(ssrRenderComponent(_component_UPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHero, {
              title: unref(data).result[0].resource_type_name
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageSection, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageCard, {
                    title: unref(data).result[0].name,
                    description: unref(data).result[0].abstract_name,
                    reverse: ""
                  }, {
                    leading: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", unref(dataImage))} alt="Image" class="w-50"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: unref(dataImage),
                            alt: "Image",
                            class: "w-50",
                            onClick: ($event) => downloadPDF()
                          }, null, 8, ["src", "onClick"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-green-400"${_scopeId3}>${ssrInterpolate(unref(data).result[0].authors)} - ${ssrInterpolate(unref(data).result[0].publisher_name)} - ${ssrInterpolate(unref(data).result[0].publisher_year)}</p>`);
                        _push4(ssrRenderComponent(_component_UPageLinks, { links: unref(links) }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", { class: "text-green-400" }, toDisplayString(unref(data).result[0].authors) + " - " + toDisplayString(unref(data).result[0].publisher_name) + " - " + toDisplayString(unref(data).result[0].publisher_year), 1),
                          createVNode(_component_UPageLinks, { links: unref(links) }, null, 8, ["links"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageCard, {
                      title: unref(data).result[0].name,
                      description: unref(data).result[0].abstract_name,
                      reverse: ""
                    }, {
                      leading: withCtx(() => [
                        createVNode("img", {
                          src: unref(dataImage),
                          alt: "Image",
                          class: "w-50",
                          onClick: ($event) => downloadPDF()
                        }, null, 8, ["src", "onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode("p", { class: "text-green-400" }, toDisplayString(unref(data).result[0].authors) + " - " + toDisplayString(unref(data).result[0].publisher_name) + " - " + toDisplayString(unref(data).result[0].publisher_year), 1),
                        createVNode(_component_UPageLinks, { links: unref(links) }, null, 8, ["links"])
                      ]),
                      _: 1
                    }, 8, ["title", "description"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageHero, {
                title: unref(data).result[0].resource_type_name
              }, null, 8, ["title"]),
              createVNode(_component_UPageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_UPageCard, {
                    title: unref(data).result[0].name,
                    description: unref(data).result[0].abstract_name,
                    reverse: ""
                  }, {
                    leading: withCtx(() => [
                      createVNode("img", {
                        src: unref(dataImage),
                        alt: "Image",
                        class: "w-50",
                        onClick: ($event) => downloadPDF()
                      }, null, 8, ["src", "onClick"])
                    ]),
                    default: withCtx(() => [
                      createVNode("p", { class: "text-green-400" }, toDisplayString(unref(data).result[0].authors) + " - " + toDisplayString(unref(data).result[0].publisher_name) + " - " + toDisplayString(unref(data).result[0].publisher_year), 1),
                      createVNode(_component_UPageLinks, { links: unref(links) }, null, 8, ["links"])
                    ]),
                    _: 1
                  }, 8, ["title", "description"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/unilibrary/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BUqaphXp.mjs.map
