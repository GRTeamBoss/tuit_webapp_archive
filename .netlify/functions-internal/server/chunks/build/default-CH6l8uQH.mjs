import { defineComponent, ref, withAsyncContext, mergeProps, withCtx, unref, createVNode, mergeModels, isRef, toDisplayString, useSlots, useModel, computed, watch, toRef, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, useTemplateRef, createSlots, renderList, resolveDynamicComponent, toHandlers, Fragment, onScopeDispose, toValue, withKeys, useId, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { Primitive, useForwardProps, useForwardPropsEmits, VisuallyHidden, DialogRoot, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogTrigger, DialogPortal, DialogOverlay, ListboxItem, ListboxItemIndicator, ListboxRoot, ListboxFilter, ListboxContent, ListboxVirtualizer, ListboxGroup, ListboxGroupLabel, SwitchRoot, SwitchThumb, Label } from 'reka-ui';
import { j as defu } from '../nitro/nitro.mjs';
import { createReusableTemplate, reactivePick, useDebounceFn, useActiveElement, useEventListener, refThrottled, useVModel } from '@vueuse/core';
import { _ as _export_sfc, e as _sfc_main$9$1, d as useRoute, f as useLocale, u as useAppConfig, g as getSlotChildrenText, t as tv, a as _sfc_main$a$1, v as transformUI, o as omit, w as __nuxt_component_0$3, h as usePortal, s as useNuxtApp, r as useState, p as pickLinkProps, b as _sfc_main$b$1, c as _sfc_main$f, m as _sfc_main$c$1, q as _sfc_main$d$1, i as get, j as useFormField, k as useFieldGroup, l as useComponentIcons, n as looseToNumber } from './server.mjs';
import { _ as _sfc_main$e } from './Container-w6ZohlMa.mjs';
import { DrawerRootNested, DrawerRoot, DrawerTrigger, DrawerPortal, DrawerOverlay, DrawerContent, DrawerHandle, DrawerTitle, DrawerDescription } from 'vaul-vue';
import { useFuse } from '@vueuse/integrations/useFuse';
import { _ as _sfc_main$d, u as useKbd, a as _sfc_main$2$1 } from './NavigationMenu-1dMkt1qq.mjs';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'reka-ui/namespaced';

const theme$8 = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default divide-y divide-default sm:ring ring-default sm:shadow-lg flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "side": {
      "top": {
        "content": ""
      },
      "right": {
        "content": "max-w-md"
      },
      "bottom": {
        "content": ""
      },
      "left": {
        "content": "max-w-md"
      }
    },
    "inset": {
      "true": {
        "content": "rounded-lg"
      }
    },
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]"
      }
    }
  },
  "compoundVariants": [
    {
      "side": "top",
      "inset": true,
      "class": {
        "content": "max-h-[calc(100%-2rem)] inset-x-4 top-4"
      }
    },
    {
      "side": "top",
      "inset": false,
      "class": {
        "content": "max-h-full inset-x-0 top-0"
      }
    },
    {
      "side": "right",
      "inset": true,
      "class": {
        "content": "w-[calc(100%-2rem)] inset-y-4 right-4"
      }
    },
    {
      "side": "right",
      "inset": false,
      "class": {
        "content": "w-full inset-y-0 right-0"
      }
    },
    {
      "side": "bottom",
      "inset": true,
      "class": {
        "content": "max-h-[calc(100%-2rem)] inset-x-4 bottom-4"
      }
    },
    {
      "side": "bottom",
      "inset": false,
      "class": {
        "content": "max-h-full inset-x-0 bottom-0"
      }
    },
    {
      "side": "left",
      "inset": true,
      "class": {
        "content": "w-[calc(100%-2rem)] inset-y-4 left-4"
      }
    },
    {
      "side": "left",
      "inset": false,
      "class": {
        "content": "w-full inset-y-0 left-0"
      }
    },
    {
      "transition": true,
      "side": "top",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "right",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "bottom",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "left",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-left_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-left_200ms_ease-in-out]"
      }
    }
  ]
};
const _sfc_main$c = {
  __name: "USlideover",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    transition: { type: Boolean, required: false, default: true },
    side: { type: null, required: false, default: "right" },
    inset: { type: Boolean, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: null, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["after:leave", "after:enter", "close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      return {};
    });
    const ui = computed(() => tv({ extend: tv(theme$8), ...appConfig.ui?.slideover || {} })({
      transition: props.transition,
      side: props.side,
      inset: props.inset
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    "data-side": __props.side,
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close)) {
                            _push4(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
                              _push4(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId3}>`);
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push4, _parent4, _scopeId3);
                              if (props.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        if (props.close) {
                                          _push5(ssrRenderComponent(_sfc_main$9$1, mergeProps({
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            "data-slot": "close",
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                          props.close ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            "data-slot": "close",
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                          if (!!slots.footer) {
                            _push4(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", { close }, () => [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              "data-slot": "header",
                              class: ui.value.header({ class: props.ui?.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => [
                                createVNode("div", {
                                  "data-slot": "wrapper",
                                  class: ui.value.wrapper({ class: props.ui?.wrapper })
                                }, [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                    key: 0,
                                    "data-slot": "title",
                                    class: ui.value.title({ class: props.ui?.title })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                    key: 1,
                                    "data-slot": "description",
                                    class: ui.value.description({ class: props.ui?.description })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true)
                                ], 2),
                                renderSlot(_ctx.$slots, "actions"),
                                props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                  key: 0,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                      props.close ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                                        key: 0,
                                        icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                        color: "neutral",
                                        variant: "ghost",
                                        "aria-label": unref(t)("slideover.close")
                                      }, typeof props.close === "object" ? props.close : {}, {
                                        "data-slot": "close",
                                        class: ui.value.close({ class: props.ui?.close })
                                      }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            createVNode("div", {
                              "data-slot": "body",
                              class: ui.value.body({ class: props.ui?.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 1,
                              "data-slot": "footer",
                              class: ui.value.footer({ class: props.ui?.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      "data-side": __props.side,
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => [
                          !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "header",
                            class: ui.value.header({ class: props.ui?.header })
                          }, [
                            renderSlot(_ctx.$slots, "header", { close }, () => [
                              createVNode("div", {
                                "data-slot": "wrapper",
                                class: ui.value.wrapper({ class: props.ui?.wrapper })
                              }, [
                                __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                  key: 0,
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "title", {}, () => [
                                      createTextVNode(toDisplayString(__props.title), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true),
                                __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                  key: 1,
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "description", {}, () => [
                                      createTextVNode(toDisplayString(__props.description), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true)
                              ], 2),
                              renderSlot(_ctx.$slots, "actions"),
                              props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                key: 0,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                    props.close ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                                      key: 0,
                                      icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                      color: "neutral",
                                      variant: "ghost",
                                      "aria-label": unref(t)("slideover.close")
                                    }, typeof props.close === "object" ? props.close : {}, {
                                      "data-slot": "close",
                                      class: ui.value.close({ class: props.ui?.close })
                                    }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          createVNode("div", {
                            "data-slot": "body",
                            class: ui.value.body({ class: props.ui?.body })
                          }, [
                            renderSlot(_ctx.$slots, "body", { close })
                          ], 2),
                          !!slots.footer ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "footer",
                            class: ui.value.footer({ class: props.ui?.footer })
                          }, [
                            renderSlot(_ctx.$slots, "footer", { close })
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), unref(portalProps), {
                default: withCtx(() => [
                  __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                    key: 0,
                    "data-slot": "overlay",
                    class: ui.value.overlay({ class: props.ui?.overlay })
                  }, null, 8, ["class"])) : createCommentVNode("", true),
                  createVNode(unref(DialogContent), mergeProps({
                    "data-side": __props.side,
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                        default: withCtx(() => [
                          __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", { close }, () => [
                        !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                          key: 0,
                          "data-slot": "header",
                          class: ui.value.header({ class: props.ui?.header })
                        }, [
                          renderSlot(_ctx.$slots, "header", { close }, () => [
                            createVNode("div", {
                              "data-slot": "wrapper",
                              class: ui.value.wrapper({ class: props.ui?.wrapper })
                            }, [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                key: 0,
                                "data-slot": "title",
                                class: ui.value.title({ class: props.ui?.title })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                key: 1,
                                "data-slot": "description",
                                class: ui.value.description({ class: props.ui?.description })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true)
                            ], 2),
                            renderSlot(_ctx.$slots, "actions"),
                            props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                              key: 0,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                  props.close ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                                    key: 0,
                                    icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                    color: "neutral",
                                    variant: "ghost",
                                    "aria-label": unref(t)("slideover.close")
                                  }, typeof props.close === "object" ? props.close : {}, {
                                    "data-slot": "close",
                                    class: ui.value.close({ class: props.ui?.close })
                                  }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        createVNode("div", {
                          "data-slot": "body",
                          class: ui.value.body({ class: props.ui?.body })
                        }, [
                          renderSlot(_ctx.$slots, "body", { close })
                        ], 2),
                        !!slots.footer ? (openBlock(), createBlock("div", {
                          key: 1,
                          "data-slot": "footer",
                          class: ui.value.footer({ class: props.ui?.footer })
                        }, [
                          renderSlot(_ctx.$slots, "footer", { close })
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const theme$7 = {
  "slots": {
    "overlay": "fixed inset-0",
    "content": "bg-default divide-y divide-default flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
        "content": "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"
      }
    },
    "fullscreen": {
      "true": {
        "content": "inset-0"
      },
      "false": {
        "content": "w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring ring-default"
      }
    },
    "overlay": {
      "true": {
        "overlay": "bg-elevated/75"
      }
    },
    "scrollable": {
      "true": {
        "overlay": "overflow-y-auto",
        "content": "relative"
      },
      "false": {
        "content": "fixed",
        "body": "overflow-y-auto"
      }
    }
  },
  "compoundVariants": [
    {
      "scrollable": true,
      "fullscreen": false,
      "class": {
        "overlay": "grid place-items-center p-4 sm:py-8"
      }
    },
    {
      "scrollable": false,
      "fullscreen": false,
      "class": {
        "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-hidden"
      }
    }
  ]
};
const _sfc_main$b = {
  __name: "UModal",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    scrollable: { type: Boolean, required: false },
    transition: { type: Boolean, required: false, default: true },
    fullscreen: { type: Boolean, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: null, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["after:leave", "after:enter", "close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      if (props.scrollable) {
        return {
          // FIXME: This is a workaround to prevent the modal from closing when clicking on the scrollbar https://reka-ui.com/docs/components/dialog#scrollable-overlay but it's not working on Mac OS.
          pointerDownOutside: (e) => {
            const originalEvent = e.detail.originalEvent;
            const target = originalEvent.target;
            if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
              e.preventDefault();
            }
          }
        };
      }
      return {};
    });
    const [DefineContentTemplate, ReuseContentTemplate] = createReusableTemplate();
    const ui = computed(() => tv({ extend: tv(theme$7), ...appConfig.ui?.modal || {} })({
      transition: props.transition,
      fullscreen: props.fullscreen,
      overlay: props.overlay,
      scrollable: props.scrollable
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DefineContentTemplate), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close)) {
                            _push4(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
                              _push4(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId3}>`);
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push4, _parent4, _scopeId3);
                              if (props.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        if (props.close) {
                                          _push5(ssrRenderComponent(_sfc_main$9$1, mergeProps({
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            "data-slot": "close",
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                          props.close ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            "data-slot": "close",
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", { close }, () => [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              "data-slot": "header",
                              class: ui.value.header({ class: props.ui?.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => [
                                createVNode("div", {
                                  "data-slot": "wrapper",
                                  class: ui.value.wrapper({ class: props.ui?.wrapper })
                                }, [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                    key: 0,
                                    "data-slot": "title",
                                    class: ui.value.title({ class: props.ui?.title })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                    key: 1,
                                    "data-slot": "description",
                                    class: ui.value.description({ class: props.ui?.description })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true)
                                ], 2),
                                renderSlot(_ctx.$slots, "actions"),
                                props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                  key: 0,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                      props.close ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                                        key: 0,
                                        icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                        color: "neutral",
                                        variant: "ghost",
                                        "aria-label": unref(t)("modal.close")
                                      }, typeof props.close === "object" ? props.close : {}, {
                                        "data-slot": "close",
                                        class: ui.value.close({ class: props.ui?.close })
                                      }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              "data-slot": "body",
                              class: ui.value.body({ class: props.ui?.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              "data-slot": "footer",
                              class: ui.value.footer({ class: props.ui?.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(DialogContent), mergeProps({
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => [
                          !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "header",
                            class: ui.value.header({ class: props.ui?.header })
                          }, [
                            renderSlot(_ctx.$slots, "header", { close }, () => [
                              createVNode("div", {
                                "data-slot": "wrapper",
                                class: ui.value.wrapper({ class: props.ui?.wrapper })
                              }, [
                                __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                  key: 0,
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "title", {}, () => [
                                      createTextVNode(toDisplayString(__props.title), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true),
                                __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                  key: 1,
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "description", {}, () => [
                                      createTextVNode(toDisplayString(__props.description), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true)
                              ], 2),
                              renderSlot(_ctx.$slots, "actions"),
                              props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                key: 0,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                    props.close ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                                      key: 0,
                                      icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                      color: "neutral",
                                      variant: "ghost",
                                      "aria-label": unref(t)("modal.close")
                                    }, typeof props.close === "object" ? props.close : {}, {
                                      "data-slot": "close",
                                      class: ui.value.close({ class: props.ui?.close })
                                    }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          !!slots.body ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "body",
                            class: ui.value.body({ class: props.ui?.body })
                          }, [
                            renderSlot(_ctx.$slots, "body", { close })
                          ], 2)) : createCommentVNode("", true),
                          !!slots.footer ? (openBlock(), createBlock("div", {
                            key: 2,
                            "data-slot": "footer",
                            class: ui.value.footer({ class: props.ui?.footer })
                          }, [
                            renderSlot(_ctx.$slots, "footer", { close })
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1040, ["class", "onAfterEnter", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.scrollable) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(ReuseContentTemplate))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!--[-->`);
                    if (__props.overlay) {
                      _push3(ssrRenderComponent(unref(DialogOverlay), {
                        "data-slot": "overlay",
                        class: ui.value.overlay({ class: props.ui?.overlay })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  }
                } else {
                  return [
                    __props.scrollable ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ReuseContentTemplate))
                      ]),
                      _: 1
                    }, 8, ["class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                        key: 0,
                        "data-slot": "overlay",
                        class: ui.value.overlay({ class: props.ui?.overlay })
                      }, null, 8, ["class"])) : createCommentVNode("", true),
                      createVNode(unref(ReuseContentTemplate))
                    ], 64))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DefineContentTemplate), null, {
                default: withCtx(() => [
                  createVNode(unref(DialogContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                        default: withCtx(() => [
                          __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", { close }, () => [
                        !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                          key: 0,
                          "data-slot": "header",
                          class: ui.value.header({ class: props.ui?.header })
                        }, [
                          renderSlot(_ctx.$slots, "header", { close }, () => [
                            createVNode("div", {
                              "data-slot": "wrapper",
                              class: ui.value.wrapper({ class: props.ui?.wrapper })
                            }, [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                key: 0,
                                "data-slot": "title",
                                class: ui.value.title({ class: props.ui?.title })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                key: 1,
                                "data-slot": "description",
                                class: ui.value.description({ class: props.ui?.description })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true)
                            ], 2),
                            renderSlot(_ctx.$slots, "actions"),
                            props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                              key: 0,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                  props.close ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                                    key: 0,
                                    icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                    color: "neutral",
                                    variant: "ghost",
                                    "aria-label": unref(t)("modal.close")
                                  }, typeof props.close === "object" ? props.close : {}, {
                                    "data-slot": "close",
                                    class: ui.value.close({ class: props.ui?.close })
                                  }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        !!slots.body ? (openBlock(), createBlock("div", {
                          key: 1,
                          "data-slot": "body",
                          class: ui.value.body({ class: props.ui?.body })
                        }, [
                          renderSlot(_ctx.$slots, "body", { close })
                        ], 2)) : createCommentVNode("", true),
                        !!slots.footer ? (openBlock(), createBlock("div", {
                          key: 2,
                          "data-slot": "footer",
                          class: ui.value.footer({ class: props.ui?.footer })
                        }, [
                          renderSlot(_ctx.$slots, "footer", { close })
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1040, ["class", "onAfterEnter", "onAfterLeave"])
                ]),
                _: 2
              }, 1024),
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), unref(portalProps), {
                default: withCtx(() => [
                  __props.scrollable ? (openBlock(), createBlock(unref(DialogOverlay), {
                    key: 0,
                    "data-slot": "overlay",
                    class: ui.value.overlay({ class: props.ui?.overlay })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ReuseContentTemplate))
                    ]),
                    _: 1
                  }, 8, ["class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(ReuseContentTemplate))
                  ], 64))
                ]),
                _: 1
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const theme$6 = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default ring ring-default flex focus:outline-none",
    "handle": [
      "shrink-0 !bg-accented",
      "transition-opacity"
    ],
    "container": "w-full flex flex-col gap-4 p-4 overflow-y-auto",
    "header": "",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "body": "flex-1",
    "footer": "flex flex-col gap-1.5"
  },
  "variants": {
    "direction": {
      "top": {
        "content": "mb-24 flex-col-reverse",
        "handle": "mb-4"
      },
      "right": {
        "content": "flex-row",
        "handle": "!ml-4"
      },
      "bottom": {
        "content": "mt-24 flex-col",
        "handle": "mt-4"
      },
      "left": {
        "content": "flex-row-reverse",
        "handle": "!mr-4"
      }
    },
    "inset": {
      "true": {
        "content": "rounded-lg after:hidden overflow-hidden [--initial-transform:calc(100%+1.5rem)]"
      }
    },
    "snapPoints": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "direction": [
        "top",
        "bottom"
      ],
      "class": {
        "content": "h-auto max-h-[96%]",
        "handle": "!w-12 !h-1.5 mx-auto"
      }
    },
    {
      "direction": [
        "top",
        "bottom"
      ],
      "snapPoints": true,
      "class": {
        "content": "h-full"
      }
    },
    {
      "direction": [
        "right",
        "left"
      ],
      "class": {
        "content": "w-auto max-w-[calc(100%-2rem)]",
        "handle": "!h-12 !w-1.5 mt-auto mb-auto"
      }
    },
    {
      "direction": [
        "right",
        "left"
      ],
      "snapPoints": true,
      "class": {
        "content": "w-full"
      }
    },
    {
      "direction": "top",
      "inset": true,
      "class": {
        "content": "inset-x-4 top-4"
      }
    },
    {
      "direction": "top",
      "inset": false,
      "class": {
        "content": "inset-x-0 top-0 rounded-b-lg"
      }
    },
    {
      "direction": "bottom",
      "inset": true,
      "class": {
        "content": "inset-x-4 bottom-4"
      }
    },
    {
      "direction": "bottom",
      "inset": false,
      "class": {
        "content": "inset-x-0 bottom-0 rounded-t-lg"
      }
    },
    {
      "direction": "left",
      "inset": true,
      "class": {
        "content": "inset-y-4 left-4"
      }
    },
    {
      "direction": "left",
      "inset": false,
      "class": {
        "content": "inset-y-0 left-0 rounded-r-lg"
      }
    },
    {
      "direction": "right",
      "inset": true,
      "class": {
        "content": "inset-y-4 right-4"
      }
    },
    {
      "direction": "right",
      "inset": false,
      "class": {
        "content": "inset-y-0 right-0 rounded-l-lg"
      }
    }
  ]
};
const _sfc_main$a = {
  __name: "UDrawer",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    inset: { type: Boolean, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    handle: { type: Boolean, required: false, default: true },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    nested: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    activeSnapPoint: { type: [Number, String, null], required: false },
    closeThreshold: { type: Number, required: false },
    shouldScaleBackground: { type: Boolean, required: false },
    setBackgroundColorOnScale: { type: Boolean, required: false },
    scrollLockTimeout: { type: Number, required: false },
    fixed: { type: Boolean, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    modal: { type: Boolean, required: false, default: true },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    direction: { type: String, required: false, default: "bottom" },
    noBodyStyles: { type: Boolean, required: false },
    handleOnly: { type: Boolean, required: false },
    preventScrollRestoration: { type: Boolean, required: false },
    snapPoints: { type: Array, required: false }
  },
  emits: ["close:prevent", "drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "activeSnapPoint", "closeThreshold", "shouldScaleBackground", "setBackgroundColorOnScale", "scrollLockTimeout", "fixed", "dismissible", "modal", "open", "defaultOpen", "nested", "direction", "noBodyStyles", "handleOnly", "preventScrollRestoration", "snapPoints"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      return {};
    });
    const ui = computed(() => tv({ extend: tv(theme$6), ...appConfig.ui?.drawer || {} })({
      direction: props.direction,
      inset: props.inset,
      snapPoints: props.snapPoints && props.snapPoints.length > 0
    }));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.nested ? unref(DrawerRootNested) : unref(DrawerRoot)), mergeProps(unref(rootProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DrawerTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DrawerPortal), unref(portalProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DrawerOverlay), {
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DrawerContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, toHandlers(contentEvents.value)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.handle) {
                          _push4(ssrRenderComponent(unref(DrawerHandle), {
                            "data-slot": "handle",
                            class: ui.value.handle({ class: props.ui?.handle })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DrawerTitle), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 3
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DrawerDescription), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 3
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          _push4(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId3}>`);
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                            _push4(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DrawerTitle), {
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DrawerDescription), {
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                            key: 0,
                            "data-slot": "handle",
                            class: ui.value.handle({ class: props.ui?.handle })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => [
                            createVNode("div", {
                              "data-slot": "container",
                              class: ui.value.container({ class: props.ui?.container })
                            }, [
                              !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                key: 0,
                                "data-slot": "header",
                                class: ui.value.header({ class: props.ui?.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", {}, () => [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                    key: 0,
                                    "data-slot": "title",
                                    class: ui.value.title({ class: props.ui?.title })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                    key: 1,
                                    "data-slot": "description",
                                    class: ui.value.description({ class: props.ui?.description })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              !!slots.body ? (openBlock(), createBlock("div", {
                                key: 1,
                                "data-slot": "body",
                                class: ui.value.body({ class: props.ui?.body })
                              }, [
                                renderSlot(_ctx.$slots, "body")
                              ], 2)) : createCommentVNode("", true),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 2,
                                "data-slot": "footer",
                                class: ui.value.footer({ class: props.ui?.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DrawerContent), mergeProps({
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }, contentProps.value, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                          key: 0,
                          "data-slot": "handle",
                          class: ui.value.handle({ class: props.ui?.handle })
                        }, null, 8, ["class"])) : createCommentVNode("", true),
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => [
                          createVNode("div", {
                            "data-slot": "container",
                            class: ui.value.container({ class: props.ui?.container })
                          }, [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                              key: 0,
                              "data-slot": "header",
                              class: ui.value.header({ class: props.ui?.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => [
                                __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                  key: 0,
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "title", {}, () => [
                                      createTextVNode(toDisplayString(__props.title), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true),
                                __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                  key: 1,
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "description", {}, () => [
                                      createTextVNode(toDisplayString(__props.description), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              "data-slot": "body",
                              class: ui.value.body({ class: props.ui?.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              "data-slot": "footer",
                              class: ui.value.footer({ class: props.ui?.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ])
                      ]),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DrawerTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DrawerPortal), unref(portalProps), {
                default: withCtx(() => [
                  __props.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                    key: 0,
                    "data-slot": "overlay",
                    class: ui.value.overlay({ class: props.ui?.overlay })
                  }, null, 8, ["class"])) : createCommentVNode("", true),
                  createVNode(unref(DrawerContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                        key: 0,
                        "data-slot": "handle",
                        class: ui.value.handle({ class: props.ui?.handle })
                      }, null, 8, ["class"])) : createCommentVNode("", true),
                      !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                        default: withCtx(() => [
                          __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", {}, () => [
                        createVNode("div", {
                          "data-slot": "container",
                          class: ui.value.container({ class: props.ui?.container })
                        }, [
                          !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "header",
                            class: ui.value.header({ class: props.ui?.header })
                          }, [
                            renderSlot(_ctx.$slots, "header", {}, () => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                key: 0,
                                "data-slot": "title",
                                class: ui.value.title({ class: props.ui?.title })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                key: 1,
                                "data-slot": "description",
                                class: ui.value.description({ class: props.ui?.description })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          !!slots.body ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "body",
                            class: ui.value.body({ class: props.ui?.body })
                          }, [
                            renderSlot(_ctx.$slots, "body")
                          ], 2)) : createCommentVNode("", true),
                          !!slots.footer ? (openBlock(), createBlock("div", {
                            key: 2,
                            "data-slot": "footer",
                            class: ui.value.footer({ class: props.ui?.footer })
                          }, [
                            renderSlot(_ctx.$slots, "footer")
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ])
                    ]),
                    _: 3
                  }, 16, ["class"])
                ]),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const theme$5 = {
  "slots": {
    "root": "bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50",
    "container": "flex items-center justify-between gap-3 h-full",
    "left": "lg:flex-1 flex items-center gap-1.5",
    "center": "hidden lg:flex",
    "right": "flex items-center justify-end lg:flex-1 gap-1.5",
    "title": "shrink-0 font-bold text-xl text-highlighted flex items-end gap-1.5",
    "toggle": "lg:hidden",
    "content": "lg:hidden",
    "overlay": "lg:hidden",
    "header": "px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3",
    "body": "p-4 sm:p-6 overflow-y-auto"
  },
  "variants": {
    "toggleSide": {
      "left": {
        "toggle": "-ms-1.5"
      },
      "right": {
        "toggle": "-me-1.5"
      }
    }
  }
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UHeader",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false, default: "header" },
    title: { type: String, required: false, default: "Nuxt UI" },
    to: { type: String, required: false, default: "/" },
    mode: { type: null, required: false, default: "modal" },
    menu: { type: null, required: false },
    toggle: { type: [Boolean, Object], required: false, default: true },
    toggleSide: { type: String, required: false, default: "right" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const open = useModel(__props, "open", { type: Boolean, ...{ default: false } });
    const route = useRoute();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const [DefineLeftTemplate, ReuseLeftTemplate] = createReusableTemplate();
    const [DefineRightTemplate, ReuseRightTemplate] = createReusableTemplate();
    const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Nuxt UI").trim();
    });
    watch(() => route.fullPath, () => {
      open.value = false;
    });
    const ui = computed(() => tv({ extend: tv(theme$5), ...appConfig.ui?.header || {} })());
    const Menu = computed(() => ({
      slideover: _sfc_main$c,
      modal: _sfc_main$b,
      drawer: _sfc_main$a
    })[props.mode]);
    const menuProps = toRef(() => defu(props.menu, {
      content: {
        onOpenAutoFocus: (e) => e.preventDefault()
      }
    }, props.mode === "modal" ? { fullscreen: true, transition: false } : {}));
    function toggleOpen() {
      open.value = !open.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineToggleTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "toggle", {
              open: open.value,
              toggle: toggleOpen,
              ui: ui.value
            }, () => {
              if (__props.toggle) {
                _push2(ssrRenderComponent(_sfc_main$9$1, mergeProps({
                  color: "neutral",
                  variant: "ghost",
                  "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
                  icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
                }, typeof __props.toggle === "object" ? __props.toggle : {}, {
                  "data-slot": "toggle",
                  class: ui.value.toggle({ class: props.ui?.toggle, toggleSide: __props.toggleSide }),
                  onClick: toggleOpen
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "toggle", {
                open: open.value,
                toggle: toggleOpen,
                ui: ui.value
              }, () => [
                __props.toggle ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                  key: 0,
                  color: "neutral",
                  variant: "ghost",
                  "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
                  icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
                }, typeof __props.toggle === "object" ? __props.toggle : {}, {
                  "data-slot": "toggle",
                  class: ui.value.toggle({ class: props.ui?.toggle, toggleSide: __props.toggleSide }),
                  onClick: toggleOpen
                }), null, 16, ["aria-label", "icon", "class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineLeftTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="left" class="${ssrRenderClass(ui.value.left({ class: props.ui?.left }))}"${_scopeId}>`);
            if (__props.toggleSide === "left") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "left", {}, () => {
              _push2(ssrRenderComponent(_sfc_main$a$1, {
                to: __props.to,
                "aria-label": ariaLabel.value,
                "data-slot": "title",
                class: ui.value.title({ class: props.ui?.title })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push3(`${ssrInterpolate(__props.title)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(__props.title), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                "data-slot": "left",
                class: ui.value.left({ class: props.ui?.left })
              }, [
                __props.toggleSide === "left" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "left", {}, () => [
                  createVNode(_sfc_main$a$1, {
                    to: __props.to,
                    "aria-label": ariaLabel.value,
                    "data-slot": "title",
                    class: ui.value.title({ class: props.ui?.title })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(__props.title), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["to", "aria-label", "class"])
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineRightTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="right" class="${ssrRenderClass(ui.value.right({ class: props.ui?.right }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "right", {}, null, _push2, _parent2, _scopeId);
            if (__props.toggleSide === "right") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                "data-slot": "right",
                class: ui.value.right({ class: props.ui?.right })
              }, [
                renderSlot(_ctx.$slots, "right"),
                __props.toggleSide === "right" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), mergeProps({ as: __props.as }, _ctx.$attrs, {
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$e, {
              "data-slot": "container",
              class: ui.value.container({ class: props.ui?.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent3, _scopeId2));
                  _push3(`<div data-slot="center" class="${ssrRenderClass(ui.value.center({ class: props.ui?.center }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ReuseLeftTemplate)),
                    createVNode("div", {
                      "data-slot": "center",
                      class: ui.value.center({ class: props.ui?.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode(unref(ReuseRightTemplate))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top"),
              createVNode(_sfc_main$e, {
                "data-slot": "container",
                class: ui.value.container({ class: props.ui?.container })
              }, {
                default: withCtx(() => [
                  createVNode(unref(ReuseLeftTemplate)),
                  createVNode("div", {
                    "data-slot": "center",
                    class: ui.value.center({ class: props.ui?.center })
                  }, [
                    renderSlot(_ctx.$slots, "default")
                  ], 2),
                  createVNode(unref(ReuseRightTemplate))
                ]),
                _: 3
              }, 8, ["class"]),
              renderSlot(_ctx.$slots, "bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Menu), mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        title: unref(t)("header.title"),
        description: unref(t)("header.description")
      }, menuProps.value, {
        ui: {
          overlay: ui.value.overlay({ class: props.ui?.overlay }),
          content: ui.value.content({ class: props.ui?.content })
        }
      }), {
        content: withCtx((contentData, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "content", contentData, () => {
              if (__props.mode !== "drawer") {
                _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "body", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "content", contentData, () => [
                __props.mode !== "drawer" ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "header",
                  class: ui.value.header({ class: props.ui?.header })
                }, [
                  createVNode(unref(ReuseLeftTemplate)),
                  createVNode(unref(ReuseRightTemplate))
                ], 2)) : createCommentVNode("", true),
                createVNode("div", {
                  "data-slot": "body",
                  class: ui.value.body({ class: props.ui?.body })
                }, [
                  renderSlot(_ctx.$slots, "body")
                ], 2)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Header.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
function truncateHTMLFromStart(html, maxLength) {
  let truncated = "";
  let totalLength = 0;
  let insideTag = false;
  for (let i = html.length - 1; i >= 0; i--) {
    if (html[i] === ">") {
      insideTag = true;
    } else if (html[i] === "<") {
      insideTag = false;
      truncated = html[i] + truncated;
      continue;
    }
    if (!insideTag) {
      totalLength++;
    }
    if (totalLength <= maxLength) {
      truncated = html[i] + truncated;
    } else {
      truncated = "..." + truncated;
      break;
    }
  }
  return truncated;
}
function highlight(item, searchTerm, forceKey, omitKeys) {
  function generateHighlightedText(value, indices = []) {
    value = value || "";
    let content = "";
    let nextUnhighlightedRegionStartingIndex = 0;
    indices.forEach((region) => {
      if (region.length === 2 && region[0] === region[1]) {
        return;
      }
      const lastIndiceNextIndex = region[1] + 1;
      const isMatched = lastIndiceNextIndex - region[0] >= searchTerm.length;
      content += [
        value.substring(nextUnhighlightedRegionStartingIndex, region[0]),
        isMatched && `<mark>`,
        value.substring(region[0], lastIndiceNextIndex),
        isMatched && "</mark>"
      ].filter(Boolean).join("");
      nextUnhighlightedRegionStartingIndex = lastIndiceNextIndex;
    });
    content += value.substring(nextUnhighlightedRegionStartingIndex);
    const markIndex = content.indexOf("<mark>");
    if (markIndex !== -1) {
      content = truncateHTMLFromStart(content, content.length - markIndex);
    }
    return content;
  }
  if (!item.matches?.length) {
    return;
  }
  for (const match of item.matches) {
    if (forceKey && match.key !== forceKey) {
      continue;
    }
    if (omitKeys?.includes(match.key)) {
      continue;
    }
    return generateHighlightedText(match.value, match.indices);
  }
}
function hasDescription(item, descriptionKey) {
  if (typeof item !== "object" || item === null) {
    return false;
  }
  const value = get(item, descriptionKey);
  return value !== void 0 && value !== null && value !== "";
}
function getSize(size, hasDescription2) {
  if (hasDescription2) {
    return {
      xs: 44,
      sm: 48,
      md: 52,
      lg: 56,
      xl: 60
    }[size];
  }
  return {
    xs: 24,
    sm: 28,
    md: 32,
    lg: 36,
    xl: 40
  }[size];
}
function getEstimateSize(items, size, descriptionKey) {
  const anyHasDescription = descriptionKey ? items.some((item) => hasDescription(item, descriptionKey)) : false;
  return getSize(size, anyHasDescription);
}
const theme$4 = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-md border-0 appearance-none placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
      },
      "vertical": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UInput",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    type: { type: null, required: false, default: "text" },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    autocomplete: { type: null, required: false, default: "off" },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    disabled: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    modelModifiers: { type: Object, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = useVModel(props, "modelValue", emits, { defaultValue: props.defaultValue });
    const appConfig = useAppConfig();
    const { emitFormBlur, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight: highlight2, disabled, emitFormFocus, ariaAttrs } = useFormField(props, { deferInputValidation: true });
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const inputSize = computed(() => fieldGroupSize.value || formGroupSize.value);
    const ui = computed(() => tv({ extend: tv(theme$4), ...appConfig.ui?.input || {} })({
      type: props.type,
      color: color.value,
      variant: props.variant,
      size: inputSize?.value,
      loading: props.loading,
      highlight: highlight2.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      fieldGroup: orientation.value
    }));
    const inputRef = useTemplateRef("inputRef");
    function updateInput(value) {
      if (props.modelModifiers?.trim) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullable) {
        value ||= null;
      }
      if (props.modelModifiers?.optional) {
        value ||= void 0;
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      if (!props.modelModifiers?.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (props.modelModifiers?.lazy) {
        updateInput(value);
      }
      if (props.modelModifiers?.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    __expose({
      inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input${ssrRenderAttrs(mergeProps({
              id: unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              type: __props.type,
              value: unref(modelValue),
              name: unref(name),
              placeholder: __props.placeholder,
              "data-slot": "base",
              class: ui.value.base({ class: props.ui?.base }),
              disabled: unref(disabled),
              required: __props.required,
              autocomplete: __props.autocomplete
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }))}${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$f, {
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$c$1, mergeProps({
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: props.ui?.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$f, {
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("input", mergeProps({
                id: unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                type: __props.type,
                value: unref(modelValue),
                name: unref(name),
                placeholder: __props.placeholder,
                "data-slot": "base",
                class: ui.value.base({ class: props.ui?.base }),
                disabled: unref(disabled),
                required: __props.required,
                autocomplete: __props.autocomplete
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "type", "value", "name", "placeholder", "disabled", "required", "autocomplete", "onFocus"]),
              renderSlot(_ctx.$slots, "default", { ui: ui.value }),
              unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 0,
                "data-slot": "leading",
                class: ui.value.leading({ class: props.ui?.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$f, {
                    key: 0,
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$c$1, mergeProps({
                    key: 1,
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 1,
                "data-slot": "trailing",
                class: ui.value.trailing({ class: props.ui?.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                  unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$f, {
                    key: 0,
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const theme$3 = {
  "slots": {
    "root": "flex flex-col min-h-0 min-w-0 divide-y divide-default",
    "input": "[&>input]:h-12",
    "close": "",
    "back": "p-0",
    "content": "relative overflow-hidden flex flex-col",
    "footer": "p-1",
    "viewport": "relative scroll-py-1 overflow-y-auto flex-1 focus:outline-none",
    "group": "p-1 isolate",
    "empty": "py-6 text-center text-sm text-muted",
    "label": "p-1.5 text-xs font-semibold text-highlighted",
    "item": "group relative w-full flex items-start gap-1.5 p-1.5 text-sm select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
    "itemLeadingIcon": "shrink-0 size-5",
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "2xs",
    "itemLeadingChip": "shrink-0 size-5",
    "itemLeadingChipSize": "md",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0 size-5",
    "itemTrailingHighlightedIcon": "shrink-0 size-5 text-dimmed hidden group-data-highlighted:inline-flex",
    "itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5",
    "itemTrailingKbdsSize": "md",
    "itemWrapper": "flex-1 flex flex-col text-start min-w-0",
    "itemLabel": "truncate space-x-1 text-dimmed",
    "itemDescription": "truncate text-muted",
    "itemLabelBase": "text-highlighted [&>mark]:text-inverted [&>mark]:bg-primary",
    "itemLabelPrefix": "text-default",
    "itemLabelSuffix": "text-dimmed [&>mark]:text-inverted [&>mark]:bg-primary"
  },
  "variants": {
    "virtualize": {
      "true": {
        "viewport": "p-1 isolate"
      },
      "false": {
        "viewport": "divide-y divide-default"
      }
    },
    "active": {
      "true": {
        "item": "text-highlighted before:bg-elevated",
        "itemLeadingIcon": "text-default"
      },
      "false": {
        "item": [
          "text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ],
        "itemLeadingIcon": [
          "text-dimmed group-data-highlighted:not-group-data-disabled:text-default",
          "transition-colors"
        ]
      }
    },
    "loading": {
      "true": {
        "itemLeadingIcon": "animate-spin"
      }
    }
  }
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UCommandPalette",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    icon: { type: null, required: false },
    trailingIcon: { type: null, required: false },
    selectedIcon: { type: null, required: false },
    childrenIcon: { type: null, required: false },
    placeholder: { type: String, required: false },
    autofocus: { type: Boolean, required: false, default: true },
    close: { type: [Boolean, Object], required: false },
    closeIcon: { type: null, required: false },
    back: { type: [Boolean, Object], required: false, default: true },
    backIcon: { type: null, required: false },
    groups: { type: Array, required: false },
    fuse: { type: Object, required: false },
    virtualize: { type: [Boolean, Object], required: false, default: false },
    labelKey: { type: null, required: false, default: "label" },
    descriptionKey: { type: null, required: false, default: "description" },
    preserveGroupOrder: { type: Boolean, required: false, default: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    multiple: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    modelValue: { type: null, required: false, default: "" },
    defaultValue: { type: null, required: false },
    highlightOnHover: { type: Boolean, required: false, default: true },
    selectionBehavior: { type: String, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  }, {
    "searchTerm": { type: String, ...{ default: "" } },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "highlight", "entryFocus", "leave", "update:open"], ["update:searchTerm"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const searchTerm = useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "disabled", "multiple", "modelValue", "defaultValue", "highlightOnHover"), emits);
    const inputProps = useForwardProps(reactivePick(props, "loading"));
    const virtualizerProps = toRef(() => {
      if (!props.virtualize) return false;
      return defu(typeof props.virtualize === "boolean" ? {} : props.virtualize, {
        estimateSize: getEstimateSize(filteredItems.value, "md", props.descriptionKey)
      });
    });
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
      props: {
        item: {
          type: Object,
          required: true
        },
        group: {
          type: Object,
          required: false
        },
        index: {
          type: Number,
          required: false
        }
      }
    });
    const ui = computed(() => tv({ extend: tv(theme$3), ...appConfig.ui?.commandPalette || {} })({
      virtualize: !!props.virtualize
    }));
    const fuse = computed(() => defu({}, props.fuse, {
      fuseOptions: {
        ignoreLocation: true,
        threshold: 0.1,
        keys: [props.labelKey, "suffix"]
      },
      resultLimit: 12,
      matchAllWhenSearchEmpty: true
    }));
    const history = ref([]);
    const placeholder = computed(() => history.value[history.value.length - 1]?.placeholder || props.placeholder || t("commandPalette.placeholder"));
    const groups = computed(() => history.value?.length ? [history.value[history.value.length - 1]] : props.groups);
    const items = computed(() => groups.value?.filter((group) => {
      if (!group.id) {
        console.warn(`[@nuxt/ui] CommandPalette group is missing an \`id\` property`);
        return false;
      }
      if (group.ignoreFilter) {
        return false;
      }
      return true;
    })?.flatMap((group) => group.items?.map((item) => ({ ...item, group: group.id })) || []) || []);
    const { results: fuseResults } = useFuse(searchTerm, items, fuse);
    const throttledFuseResults = refThrottled(fuseResults, 16, true);
    function processGroupItems(group, items2) {
      let processedItems = items2;
      if (group?.postFilter && typeof group.postFilter === "function") {
        processedItems = group.postFilter(searchTerm.value, processedItems);
      }
      return {
        ...group,
        items: processedItems.slice(0, fuse.value.resultLimit).map((item) => {
          return {
            ...item,
            labelHtml: highlight(item, searchTerm.value, props.labelKey),
            suffixHtml: highlight(item, searchTerm.value, void 0, [props.labelKey])
          };
        })
      };
    }
    const filteredGroups = computed(() => {
      const currentGroups = groups.value;
      const groupsById = throttledFuseResults.value.reduce((acc, result) => {
        const { item, matches } = result;
        if (!item.group) {
          return acc;
        }
        acc[item.group] ||= [];
        acc[item.group]?.push({ ...item, matches });
        return acc;
      }, {});
      if (props.preserveGroupOrder) {
        const processedGroups = [];
        for (const group of currentGroups || []) {
          if (!group.items?.length) {
            continue;
          }
          const items2 = group.ignoreFilter ? group.items : groupsById[group.id];
          if (!items2?.length) {
            continue;
          }
          const processedGroup = processGroupItems(group, items2);
          if (processedGroup.items?.length) {
            processedGroups.push(processedGroup);
          }
        }
        return processedGroups;
      }
      const fuseGroups = Object.entries(groupsById).map(([id, items2]) => {
        const group = currentGroups?.find((group2) => group2.id === id);
        if (!group) {
          return;
        }
        const processedGroup = processGroupItems(group, items2);
        return processedGroup.items?.length ? processedGroup : void 0;
      }).filter((group) => !!group);
      const nonFuseGroups = currentGroups?.map((group, index) => ({ ...group, index }))?.filter((group) => group.ignoreFilter && group.items?.length)?.map((group) => {
        const processedGroup = processGroupItems(group, group.items || []);
        return { ...processedGroup, index: group.index };
      })?.filter((group) => group.items?.length) || [];
      return nonFuseGroups.reduce((acc, group) => {
        acc.splice(group.index, 0, group);
        return acc;
      }, [...fuseGroups]);
    });
    const filteredItems = computed(() => filteredGroups.value.flatMap((group) => group.items || []));
    const rootRef = useTemplateRef("rootRef");
    function navigate(item) {
      if (!item.children?.length) {
        return;
      }
      history.value.push({
        id: `history-${history.value.length}`,
        label: item.label,
        slot: item.slot,
        placeholder: item.placeholder,
        items: item.children
      });
      searchTerm.value = "";
      rootRef.value?.highlightFirstItem();
    }
    function navigateBack() {
      if (!history.value.length) {
        return;
      }
      history.value.pop();
      searchTerm.value = "";
      rootRef.value?.highlightFirstItem();
    }
    function onBackspace() {
      if (!searchTerm.value) {
        navigateBack();
      }
    }
    function onSelect(e, item) {
      if (item.children?.length) {
        e.preventDefault();
        navigate(item);
      } else {
        item.onSelect?.(e);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index, group }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ListboxItem), {
              value: unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml", "children"]),
              disabled: item.disabled,
              "as-child": "",
              onSelect: ($event) => onSelect($event, item)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$a$1, mergeProps(unref(pickLinkProps)(item), { custom: "" }), {
                    default: withCtx(({ active, ...slotProps }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$b$1, mergeProps(slotProps, {
                          "data-slot": "item",
                          class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class], active: active || item.active })
                        }), {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, item.slot || group?.slot || "item", {
                                item,
                                index,
                                ui: ui.value
                              }, () => {
                                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group?.slot ? `${group.slot}-leading` : `item-leading`, {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => {
                                  if (item.loading) {
                                    _push5(ssrRenderComponent(_sfc_main$f, {
                                      name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                      "data-slot": "itemLeadingIcon",
                                      class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon], loading: true })
                                    }, null, _parent5, _scopeId4));
                                  } else if (item.icon) {
                                    _push5(ssrRenderComponent(_sfc_main$f, {
                                      name: item.icon,
                                      "data-slot": "itemLeadingIcon",
                                      class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon], active: active || item.active })
                                    }, null, _parent5, _scopeId4));
                                  } else if (item.avatar) {
                                    _push5(ssrRenderComponent(_sfc_main$c$1, mergeProps({
                                      size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                    }, item.avatar, {
                                      "data-slot": "itemLeadingAvatar",
                                      class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar], active: active || item.active })
                                    }), null, _parent5, _scopeId4));
                                  } else if (item.chip) {
                                    _push5(ssrRenderComponent(_sfc_main$d$1, mergeProps({
                                      size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                      inset: "",
                                      standalone: ""
                                    }, item.chip, {
                                      "data-slot": "itemLeadingChip",
                                      class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip], active: active || item.active })
                                    }), null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (item.prefix || (item.labelHtml || unref(get)(item, props.labelKey)) || (item.suffixHtml || item.suffix) || !!slots[item.slot ? `${item.slot}-label` : group?.slot ? `${group.slot}-label` : `item-label`] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : group?.slot ? `${group.slot}-description` : `item-description`])) {
                                  _push5(`<span data-slot="itemWrapper" class="${ssrRenderClass(ui.value.itemWrapper({ class: [props.ui?.itemWrapper, item.ui?.itemWrapper] }))}"${_scopeId4}><span data-slot="itemLabel" class="${ssrRenderClass(ui.value.itemLabel({ class: [props.ui?.itemLabel, item.ui?.itemLabel], active: active || item.active }))}"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group?.slot ? `${group.slot}-label` : `item-label`, {
                                    item,
                                    index,
                                    ui: ui.value
                                  }, () => {
                                    if (item.prefix) {
                                      _push5(`<span data-slot="itemLabelPrefix" class="${ssrRenderClass(ui.value.itemLabelPrefix({ class: [props.ui?.itemLabelPrefix, item.ui?.itemLabelPrefix] }))}"${_scopeId4}>${ssrInterpolate(item.prefix)}</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    if (item.labelHtml) {
                                      _push5(`<span data-slot="itemLabelBase" class="${ssrRenderClass(ui.value.itemLabelBase({ class: [props.ui?.itemLabelBase, item.ui?.itemLabelBase], active: active || item.active }))}"${_scopeId4}>${item.labelHtml ?? ""}</span>`);
                                    } else {
                                      _push5(`<span data-slot="itemLabelBase" class="${ssrRenderClass(ui.value.itemLabelBase({ class: [props.ui?.itemLabelBase, item.ui?.itemLabelBase], active: active || item.active }))}"${_scopeId4}>${ssrInterpolate(unref(get)(item, props.labelKey))}</span>`);
                                    }
                                    if (item.suffixHtml) {
                                      _push5(`<span data-slot="itemLabelSuffix" class="${ssrRenderClass(ui.value.itemLabelSuffix({ class: [props.ui?.itemLabelSuffix, item.ui?.itemLabelSuffix], active: active || item.active }))}"${_scopeId4}>${item.suffixHtml ?? ""}</span>`);
                                    } else if (item.suffix) {
                                      _push5(`<span data-slot="itemLabelSuffix" class="${ssrRenderClass(ui.value.itemLabelSuffix({ class: [props.ui?.itemLabelSuffix, item.ui?.itemLabelSuffix], active: active || item.active }))}"${_scopeId4}>${ssrInterpolate(item.suffix)}</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`</span>`);
                                  if (unref(get)(item, props.descriptionKey)) {
                                    _push5(`<span data-slot="itemDescription" class="${ssrRenderClass(ui.value.itemDescription({ class: [props.ui?.itemDescription, item.ui?.itemDescription] }))}"${_scopeId4}>`);
                                    ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : group?.slot ? `${group.slot}-description` : `item-description`, {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => {
                                      _push5(`${ssrInterpolate(unref(get)(item, props.descriptionKey))}`);
                                    }, _push5, _parent5, _scopeId4);
                                    _push5(`</span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<span data-slot="itemTrailing" class="${ssrRenderClass(ui.value.itemTrailing({ class: [props.ui?.itemTrailing, item.ui?.itemTrailing] }))}"${_scopeId4}>`);
                                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group?.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => {
                                  if (item.children && item.children.length > 0) {
                                    _push5(ssrRenderComponent(_sfc_main$f, {
                                      name: __props.childrenIcon || unref(appConfig).ui.icons.chevronRight,
                                      "data-slot": "itemTrailingIcon",
                                      class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, item.ui?.itemTrailingIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else if (item.kbds?.length) {
                                    _push5(`<span data-slot="itemTrailingKbds" class="${ssrRenderClass(ui.value.itemTrailingKbds({ class: [props.ui?.itemTrailingKbds, item.ui?.itemTrailingKbds] }))}"${_scopeId4}><!--[-->`);
                                    ssrRenderList(item.kbds, (kbd, kbdIndex) => {
                                      _push5(ssrRenderComponent(_sfc_main$2$1, mergeProps({
                                        key: kbdIndex,
                                        size: item.ui?.itemTrailingKbdsSize || props.ui?.itemTrailingKbdsSize || ui.value.itemTrailingKbdsSize()
                                      }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent5, _scopeId4));
                                    });
                                    _push5(`<!--]--></span>`);
                                  } else if (group?.highlightedIcon) {
                                    _push5(ssrRenderComponent(_sfc_main$f, {
                                      name: group.highlightedIcon,
                                      "data-slot": "itemTrailingHighlightedIcon",
                                      class: ui.value.itemTrailingHighlightedIcon({ class: [props.ui?.itemTrailingHighlightedIcon, item.ui?.itemTrailingHighlightedIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (!item.children?.length) {
                                  _push5(ssrRenderComponent(unref(ListboxItemIndicator), { "as-child": "" }, {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_sfc_main$f, {
                                          name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                          "data-slot": "itemTrailingIcon",
                                          class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, item.ui?.itemTrailingIcon] })
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_sfc_main$f, {
                                            name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                            "data-slot": "itemTrailingIcon",
                                            class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, item.ui?.itemTrailingIcon] })
                                          }, null, 8, ["name", "class"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</span>`);
                              }, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, item.slot || group?.slot || "item", {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group?.slot ? `${group.slot}-leading` : `item-leading`, {
                                    item,
                                    index,
                                    ui: ui.value
                                  }, () => [
                                    item.loading ? (openBlock(), createBlock(_sfc_main$f, {
                                      key: 0,
                                      name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                      "data-slot": "itemLeadingIcon",
                                      class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon], loading: true })
                                    }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$f, {
                                      key: 1,
                                      name: item.icon,
                                      "data-slot": "itemLeadingIcon",
                                      class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon], active: active || item.active })
                                    }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$c$1, mergeProps({
                                      key: 2,
                                      size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                    }, item.avatar, {
                                      "data-slot": "itemLeadingAvatar",
                                      class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar], active: active || item.active })
                                    }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$d$1, mergeProps({
                                      key: 3,
                                      size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                      inset: "",
                                      standalone: ""
                                    }, item.chip, {
                                      "data-slot": "itemLeadingChip",
                                      class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip], active: active || item.active })
                                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                  ]),
                                  item.prefix || (item.labelHtml || unref(get)(item, props.labelKey)) || (item.suffixHtml || item.suffix) || !!slots[item.slot ? `${item.slot}-label` : group?.slot ? `${group.slot}-label` : `item-label`] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : group?.slot ? `${group.slot}-description` : `item-description`]) ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    "data-slot": "itemWrapper",
                                    class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, item.ui?.itemWrapper] })
                                  }, [
                                    createVNode("span", {
                                      "data-slot": "itemLabel",
                                      class: ui.value.itemLabel({ class: [props.ui?.itemLabel, item.ui?.itemLabel], active: active || item.active })
                                    }, [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group?.slot ? `${group.slot}-label` : `item-label`, {
                                        item,
                                        index,
                                        ui: ui.value
                                      }, () => [
                                        item.prefix ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          "data-slot": "itemLabelPrefix",
                                          class: ui.value.itemLabelPrefix({ class: [props.ui?.itemLabelPrefix, item.ui?.itemLabelPrefix] })
                                        }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                        item.labelHtml ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          "data-slot": "itemLabelBase",
                                          class: ui.value.itemLabelBase({ class: [props.ui?.itemLabelBase, item.ui?.itemLabelBase], active: active || item.active }),
                                          innerHTML: item.labelHtml
                                        }, null, 10, ["innerHTML"])) : (openBlock(), createBlock("span", {
                                          key: 2,
                                          "data-slot": "itemLabelBase",
                                          class: ui.value.itemLabelBase({ class: [props.ui?.itemLabelBase, item.ui?.itemLabelBase], active: active || item.active })
                                        }, toDisplayString(unref(get)(item, props.labelKey)), 3)),
                                        item.suffixHtml ? (openBlock(), createBlock("span", {
                                          key: 3,
                                          "data-slot": "itemLabelSuffix",
                                          class: ui.value.itemLabelSuffix({ class: [props.ui?.itemLabelSuffix, item.ui?.itemLabelSuffix], active: active || item.active }),
                                          innerHTML: item.suffixHtml
                                        }, null, 10, ["innerHTML"])) : item.suffix ? (openBlock(), createBlock("span", {
                                          key: 4,
                                          "data-slot": "itemLabelSuffix",
                                          class: ui.value.itemLabelSuffix({ class: [props.ui?.itemLabelSuffix, item.ui?.itemLabelSuffix], active: active || item.active })
                                        }, toDisplayString(item.suffix), 3)) : createCommentVNode("", true)
                                      ])
                                    ], 2),
                                    unref(get)(item, props.descriptionKey) ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      "data-slot": "itemDescription",
                                      class: ui.value.itemDescription({ class: [props.ui?.itemDescription, item.ui?.itemDescription] })
                                    }, [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : group?.slot ? `${group.slot}-description` : `item-description`, {
                                        item,
                                        index,
                                        ui: ui.value
                                      }, () => [
                                        createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                      ])
                                    ], 2)) : createCommentVNode("", true)
                                  ], 2)) : createCommentVNode("", true),
                                  createVNode("span", {
                                    "data-slot": "itemTrailing",
                                    class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, item.ui?.itemTrailing] })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group?.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => [
                                      item.children && item.children.length > 0 ? (openBlock(), createBlock(_sfc_main$f, {
                                        key: 0,
                                        name: __props.childrenIcon || unref(appConfig).ui.icons.chevronRight,
                                        "data-slot": "itemTrailingIcon",
                                        class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, item.ui?.itemTrailingIcon] })
                                      }, null, 8, ["name", "class"])) : item.kbds?.length ? (openBlock(), createBlock("span", {
                                        key: 1,
                                        "data-slot": "itemTrailingKbds",
                                        class: ui.value.itemTrailingKbds({ class: [props.ui?.itemTrailingKbds, item.ui?.itemTrailingKbds] })
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                          return openBlock(), createBlock(_sfc_main$2$1, mergeProps({
                                            key: kbdIndex,
                                            size: item.ui?.itemTrailingKbdsSize || props.ui?.itemTrailingKbdsSize || ui.value.itemTrailingKbdsSize()
                                          }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                        }), 128))
                                      ], 2)) : group?.highlightedIcon ? (openBlock(), createBlock(_sfc_main$f, {
                                        key: 2,
                                        name: group.highlightedIcon,
                                        "data-slot": "itemTrailingHighlightedIcon",
                                        class: ui.value.itemTrailingHighlightedIcon({ class: [props.ui?.itemTrailingHighlightedIcon, item.ui?.itemTrailingHighlightedIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ]),
                                    !item.children?.length ? (openBlock(), createBlock(unref(ListboxItemIndicator), {
                                      key: 0,
                                      "as-child": ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$f, {
                                          name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                          "data-slot": "itemTrailingIcon",
                                          class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, item.ui?.itemTrailingIcon] })
                                        }, null, 8, ["name", "class"])
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ], 2)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$b$1, mergeProps(slotProps, {
                            "data-slot": "item",
                            class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class], active: active || item.active })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot || group?.slot || "item", {
                                item,
                                index,
                                ui: ui.value
                              }, () => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group?.slot ? `${group.slot}-leading` : `item-leading`, {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => [
                                  item.loading ? (openBlock(), createBlock(_sfc_main$f, {
                                    key: 0,
                                    name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                    "data-slot": "itemLeadingIcon",
                                    class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon], loading: true })
                                  }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$f, {
                                    key: 1,
                                    name: item.icon,
                                    "data-slot": "itemLeadingIcon",
                                    class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon], active: active || item.active })
                                  }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$c$1, mergeProps({
                                    key: 2,
                                    size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                  }, item.avatar, {
                                    "data-slot": "itemLeadingAvatar",
                                    class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar], active: active || item.active })
                                  }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$d$1, mergeProps({
                                    key: 3,
                                    size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                    inset: "",
                                    standalone: ""
                                  }, item.chip, {
                                    "data-slot": "itemLeadingChip",
                                    class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip], active: active || item.active })
                                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                ]),
                                item.prefix || (item.labelHtml || unref(get)(item, props.labelKey)) || (item.suffixHtml || item.suffix) || !!slots[item.slot ? `${item.slot}-label` : group?.slot ? `${group.slot}-label` : `item-label`] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : group?.slot ? `${group.slot}-description` : `item-description`]) ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  "data-slot": "itemWrapper",
                                  class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, item.ui?.itemWrapper] })
                                }, [
                                  createVNode("span", {
                                    "data-slot": "itemLabel",
                                    class: ui.value.itemLabel({ class: [props.ui?.itemLabel, item.ui?.itemLabel], active: active || item.active })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group?.slot ? `${group.slot}-label` : `item-label`, {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => [
                                      item.prefix ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        "data-slot": "itemLabelPrefix",
                                        class: ui.value.itemLabelPrefix({ class: [props.ui?.itemLabelPrefix, item.ui?.itemLabelPrefix] })
                                      }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                      item.labelHtml ? (openBlock(), createBlock("span", {
                                        key: 1,
                                        "data-slot": "itemLabelBase",
                                        class: ui.value.itemLabelBase({ class: [props.ui?.itemLabelBase, item.ui?.itemLabelBase], active: active || item.active }),
                                        innerHTML: item.labelHtml
                                      }, null, 10, ["innerHTML"])) : (openBlock(), createBlock("span", {
                                        key: 2,
                                        "data-slot": "itemLabelBase",
                                        class: ui.value.itemLabelBase({ class: [props.ui?.itemLabelBase, item.ui?.itemLabelBase], active: active || item.active })
                                      }, toDisplayString(unref(get)(item, props.labelKey)), 3)),
                                      item.suffixHtml ? (openBlock(), createBlock("span", {
                                        key: 3,
                                        "data-slot": "itemLabelSuffix",
                                        class: ui.value.itemLabelSuffix({ class: [props.ui?.itemLabelSuffix, item.ui?.itemLabelSuffix], active: active || item.active }),
                                        innerHTML: item.suffixHtml
                                      }, null, 10, ["innerHTML"])) : item.suffix ? (openBlock(), createBlock("span", {
                                        key: 4,
                                        "data-slot": "itemLabelSuffix",
                                        class: ui.value.itemLabelSuffix({ class: [props.ui?.itemLabelSuffix, item.ui?.itemLabelSuffix], active: active || item.active })
                                      }, toDisplayString(item.suffix), 3)) : createCommentVNode("", true)
                                    ])
                                  ], 2),
                                  unref(get)(item, props.descriptionKey) ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    "data-slot": "itemDescription",
                                    class: ui.value.itemDescription({ class: [props.ui?.itemDescription, item.ui?.itemDescription] })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : group?.slot ? `${group.slot}-description` : `item-description`, {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true)
                                ], 2)) : createCommentVNode("", true),
                                createVNode("span", {
                                  "data-slot": "itemTrailing",
                                  class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, item.ui?.itemTrailing] })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group?.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                    item,
                                    index,
                                    ui: ui.value
                                  }, () => [
                                    item.children && item.children.length > 0 ? (openBlock(), createBlock(_sfc_main$f, {
                                      key: 0,
                                      name: __props.childrenIcon || unref(appConfig).ui.icons.chevronRight,
                                      "data-slot": "itemTrailingIcon",
                                      class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, item.ui?.itemTrailingIcon] })
                                    }, null, 8, ["name", "class"])) : item.kbds?.length ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      "data-slot": "itemTrailingKbds",
                                      class: ui.value.itemTrailingKbds({ class: [props.ui?.itemTrailingKbds, item.ui?.itemTrailingKbds] })
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                        return openBlock(), createBlock(_sfc_main$2$1, mergeProps({
                                          key: kbdIndex,
                                          size: item.ui?.itemTrailingKbdsSize || props.ui?.itemTrailingKbdsSize || ui.value.itemTrailingKbdsSize()
                                        }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                      }), 128))
                                    ], 2)) : group?.highlightedIcon ? (openBlock(), createBlock(_sfc_main$f, {
                                      key: 2,
                                      name: group.highlightedIcon,
                                      "data-slot": "itemTrailingHighlightedIcon",
                                      class: ui.value.itemTrailingHighlightedIcon({ class: [props.ui?.itemTrailingHighlightedIcon, item.ui?.itemTrailingHighlightedIcon] })
                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                  ]),
                                  !item.children?.length ? (openBlock(), createBlock(unref(ListboxItemIndicator), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$f, {
                                        name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                        "data-slot": "itemTrailingIcon",
                                        class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, item.ui?.itemTrailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ], 2)
                              ])
                            ]),
                            _: 2
                          }, 1040, ["class"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$a$1, mergeProps(unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => [
                        createVNode(_sfc_main$b$1, mergeProps(slotProps, {
                          "data-slot": "item",
                          class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class], active: active || item.active })
                        }), {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, item.slot || group?.slot || "item", {
                              item,
                              index,
                              ui: ui.value
                            }, () => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group?.slot ? `${group.slot}-leading` : `item-leading`, {
                                item,
                                index,
                                ui: ui.value
                              }, () => [
                                item.loading ? (openBlock(), createBlock(_sfc_main$f, {
                                  key: 0,
                                  name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                  "data-slot": "itemLeadingIcon",
                                  class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon], loading: true })
                                }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$f, {
                                  key: 1,
                                  name: item.icon,
                                  "data-slot": "itemLeadingIcon",
                                  class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon], active: active || item.active })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$c$1, mergeProps({
                                  key: 2,
                                  size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                }, item.avatar, {
                                  "data-slot": "itemLeadingAvatar",
                                  class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar], active: active || item.active })
                                }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$d$1, mergeProps({
                                  key: 3,
                                  size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                  inset: "",
                                  standalone: ""
                                }, item.chip, {
                                  "data-slot": "itemLeadingChip",
                                  class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip], active: active || item.active })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ]),
                              item.prefix || (item.labelHtml || unref(get)(item, props.labelKey)) || (item.suffixHtml || item.suffix) || !!slots[item.slot ? `${item.slot}-label` : group?.slot ? `${group.slot}-label` : `item-label`] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : group?.slot ? `${group.slot}-description` : `item-description`]) ? (openBlock(), createBlock("span", {
                                key: 0,
                                "data-slot": "itemWrapper",
                                class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, item.ui?.itemWrapper] })
                              }, [
                                createVNode("span", {
                                  "data-slot": "itemLabel",
                                  class: ui.value.itemLabel({ class: [props.ui?.itemLabel, item.ui?.itemLabel], active: active || item.active })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group?.slot ? `${group.slot}-label` : `item-label`, {
                                    item,
                                    index,
                                    ui: ui.value
                                  }, () => [
                                    item.prefix ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      "data-slot": "itemLabelPrefix",
                                      class: ui.value.itemLabelPrefix({ class: [props.ui?.itemLabelPrefix, item.ui?.itemLabelPrefix] })
                                    }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                    item.labelHtml ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      "data-slot": "itemLabelBase",
                                      class: ui.value.itemLabelBase({ class: [props.ui?.itemLabelBase, item.ui?.itemLabelBase], active: active || item.active }),
                                      innerHTML: item.labelHtml
                                    }, null, 10, ["innerHTML"])) : (openBlock(), createBlock("span", {
                                      key: 2,
                                      "data-slot": "itemLabelBase",
                                      class: ui.value.itemLabelBase({ class: [props.ui?.itemLabelBase, item.ui?.itemLabelBase], active: active || item.active })
                                    }, toDisplayString(unref(get)(item, props.labelKey)), 3)),
                                    item.suffixHtml ? (openBlock(), createBlock("span", {
                                      key: 3,
                                      "data-slot": "itemLabelSuffix",
                                      class: ui.value.itemLabelSuffix({ class: [props.ui?.itemLabelSuffix, item.ui?.itemLabelSuffix], active: active || item.active }),
                                      innerHTML: item.suffixHtml
                                    }, null, 10, ["innerHTML"])) : item.suffix ? (openBlock(), createBlock("span", {
                                      key: 4,
                                      "data-slot": "itemLabelSuffix",
                                      class: ui.value.itemLabelSuffix({ class: [props.ui?.itemLabelSuffix, item.ui?.itemLabelSuffix], active: active || item.active })
                                    }, toDisplayString(item.suffix), 3)) : createCommentVNode("", true)
                                  ])
                                ], 2),
                                unref(get)(item, props.descriptionKey) ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  "data-slot": "itemDescription",
                                  class: ui.value.itemDescription({ class: [props.ui?.itemDescription, item.ui?.itemDescription] })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : group?.slot ? `${group.slot}-description` : `item-description`, {
                                    item,
                                    index,
                                    ui: ui.value
                                  }, () => [
                                    createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                  ])
                                ], 2)) : createCommentVNode("", true)
                              ], 2)) : createCommentVNode("", true),
                              createVNode("span", {
                                "data-slot": "itemTrailing",
                                class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, item.ui?.itemTrailing] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group?.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => [
                                  item.children && item.children.length > 0 ? (openBlock(), createBlock(_sfc_main$f, {
                                    key: 0,
                                    name: __props.childrenIcon || unref(appConfig).ui.icons.chevronRight,
                                    "data-slot": "itemTrailingIcon",
                                    class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, item.ui?.itemTrailingIcon] })
                                  }, null, 8, ["name", "class"])) : item.kbds?.length ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    "data-slot": "itemTrailingKbds",
                                    class: ui.value.itemTrailingKbds({ class: [props.ui?.itemTrailingKbds, item.ui?.itemTrailingKbds] })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                      return openBlock(), createBlock(_sfc_main$2$1, mergeProps({
                                        key: kbdIndex,
                                        size: item.ui?.itemTrailingKbdsSize || props.ui?.itemTrailingKbdsSize || ui.value.itemTrailingKbdsSize()
                                      }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                    }), 128))
                                  ], 2)) : group?.highlightedIcon ? (openBlock(), createBlock(_sfc_main$f, {
                                    key: 2,
                                    name: group.highlightedIcon,
                                    "data-slot": "itemTrailingHighlightedIcon",
                                    class: ui.value.itemTrailingHighlightedIcon({ class: [props.ui?.itemTrailingHighlightedIcon, item.ui?.itemTrailingHighlightedIcon] })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                ]),
                                !item.children?.length ? (openBlock(), createBlock(unref(ListboxItemIndicator), {
                                  key: 0,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$f, {
                                      name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                      "data-slot": "itemTrailingIcon",
                                      class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, item.ui?.itemTrailingIcon] })
                                    }, null, 8, ["name", "class"])
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ], 2)
                            ])
                          ]),
                          _: 2
                        }, 1040, ["class"])
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ListboxItem), {
                value: unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml", "children"]),
                disabled: item.disabled,
                "as-child": "",
                onSelect: ($event) => onSelect($event, item)
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$a$1, mergeProps(unref(pickLinkProps)(item), { custom: "" }), {
                    default: withCtx(({ active, ...slotProps }) => [
                      createVNode(_sfc_main$b$1, mergeProps(slotProps, {
                        "data-slot": "item",
                        class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class], active: active || item.active })
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || group?.slot || "item", {
                            item,
                            index,
                            ui: ui.value
                          }, () => [
                            renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group?.slot ? `${group.slot}-leading` : `item-leading`, {
                              item,
                              index,
                              ui: ui.value
                            }, () => [
                              item.loading ? (openBlock(), createBlock(_sfc_main$f, {
                                key: 0,
                                name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                "data-slot": "itemLeadingIcon",
                                class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon], loading: true })
                              }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$f, {
                                key: 1,
                                name: item.icon,
                                "data-slot": "itemLeadingIcon",
                                class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon], active: active || item.active })
                              }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$c$1, mergeProps({
                                key: 2,
                                size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                              }, item.avatar, {
                                "data-slot": "itemLeadingAvatar",
                                class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar], active: active || item.active })
                              }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$d$1, mergeProps({
                                key: 3,
                                size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                inset: "",
                                standalone: ""
                              }, item.chip, {
                                "data-slot": "itemLeadingChip",
                                class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip], active: active || item.active })
                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                            ]),
                            item.prefix || (item.labelHtml || unref(get)(item, props.labelKey)) || (item.suffixHtml || item.suffix) || !!slots[item.slot ? `${item.slot}-label` : group?.slot ? `${group.slot}-label` : `item-label`] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : group?.slot ? `${group.slot}-description` : `item-description`]) ? (openBlock(), createBlock("span", {
                              key: 0,
                              "data-slot": "itemWrapper",
                              class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, item.ui?.itemWrapper] })
                            }, [
                              createVNode("span", {
                                "data-slot": "itemLabel",
                                class: ui.value.itemLabel({ class: [props.ui?.itemLabel, item.ui?.itemLabel], active: active || item.active })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group?.slot ? `${group.slot}-label` : `item-label`, {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => [
                                  item.prefix ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    "data-slot": "itemLabelPrefix",
                                    class: ui.value.itemLabelPrefix({ class: [props.ui?.itemLabelPrefix, item.ui?.itemLabelPrefix] })
                                  }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                  item.labelHtml ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    "data-slot": "itemLabelBase",
                                    class: ui.value.itemLabelBase({ class: [props.ui?.itemLabelBase, item.ui?.itemLabelBase], active: active || item.active }),
                                    innerHTML: item.labelHtml
                                  }, null, 10, ["innerHTML"])) : (openBlock(), createBlock("span", {
                                    key: 2,
                                    "data-slot": "itemLabelBase",
                                    class: ui.value.itemLabelBase({ class: [props.ui?.itemLabelBase, item.ui?.itemLabelBase], active: active || item.active })
                                  }, toDisplayString(unref(get)(item, props.labelKey)), 3)),
                                  item.suffixHtml ? (openBlock(), createBlock("span", {
                                    key: 3,
                                    "data-slot": "itemLabelSuffix",
                                    class: ui.value.itemLabelSuffix({ class: [props.ui?.itemLabelSuffix, item.ui?.itemLabelSuffix], active: active || item.active }),
                                    innerHTML: item.suffixHtml
                                  }, null, 10, ["innerHTML"])) : item.suffix ? (openBlock(), createBlock("span", {
                                    key: 4,
                                    "data-slot": "itemLabelSuffix",
                                    class: ui.value.itemLabelSuffix({ class: [props.ui?.itemLabelSuffix, item.ui?.itemLabelSuffix], active: active || item.active })
                                  }, toDisplayString(item.suffix), 3)) : createCommentVNode("", true)
                                ])
                              ], 2),
                              unref(get)(item, props.descriptionKey) ? (openBlock(), createBlock("span", {
                                key: 0,
                                "data-slot": "itemDescription",
                                class: ui.value.itemDescription({ class: [props.ui?.itemDescription, item.ui?.itemDescription] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : group?.slot ? `${group.slot}-description` : `item-description`, {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => [
                                  createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                ])
                              ], 2)) : createCommentVNode("", true)
                            ], 2)) : createCommentVNode("", true),
                            createVNode("span", {
                              "data-slot": "itemTrailing",
                              class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, item.ui?.itemTrailing] })
                            }, [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group?.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                item,
                                index,
                                ui: ui.value
                              }, () => [
                                item.children && item.children.length > 0 ? (openBlock(), createBlock(_sfc_main$f, {
                                  key: 0,
                                  name: __props.childrenIcon || unref(appConfig).ui.icons.chevronRight,
                                  "data-slot": "itemTrailingIcon",
                                  class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, item.ui?.itemTrailingIcon] })
                                }, null, 8, ["name", "class"])) : item.kbds?.length ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  "data-slot": "itemTrailingKbds",
                                  class: ui.value.itemTrailingKbds({ class: [props.ui?.itemTrailingKbds, item.ui?.itemTrailingKbds] })
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                    return openBlock(), createBlock(_sfc_main$2$1, mergeProps({
                                      key: kbdIndex,
                                      size: item.ui?.itemTrailingKbdsSize || props.ui?.itemTrailingKbdsSize || ui.value.itemTrailingKbdsSize()
                                    }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                  }), 128))
                                ], 2)) : group?.highlightedIcon ? (openBlock(), createBlock(_sfc_main$f, {
                                  key: 2,
                                  name: group.highlightedIcon,
                                  "data-slot": "itemTrailingHighlightedIcon",
                                  class: ui.value.itemTrailingHighlightedIcon({ class: [props.ui?.itemTrailingHighlightedIcon, item.ui?.itemTrailingHighlightedIcon] })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ]),
                              !item.children?.length ? (openBlock(), createBlock(unref(ListboxItemIndicator), {
                                key: 0,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$f, {
                                    name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                    "data-slot": "itemTrailingIcon",
                                    class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, item.ui?.itemTrailingIcon] })
                                  }, null, 8, ["name", "class"])
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ], 2)
                          ])
                        ]),
                        _: 2
                      }, 1040, ["class"])
                    ]),
                    _: 2
                  }, 1040)
                ]),
                _: 2
              }, 1032, ["value", "disabled", "onSelect"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(ListboxRoot), mergeProps({ ...unref(rootProps), ..._ctx.$attrs }, {
        ref_key: "rootRef",
        ref: rootRef,
        "selection-behavior": __props.selectionBehavior,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ListboxFilter), {
              modelValue: searchTerm.value,
              "onUpdate:modelValue": ($event) => searchTerm.value = $event,
              "as-child": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, mergeProps({
                    placeholder: placeholder.value,
                    variant: "none",
                    autofocus: __props.autofocus
                  }, unref(inputProps), {
                    "loading-icon": __props.loadingIcon,
                    "trailing-icon": __props.trailingIcon,
                    icon: __props.icon || unref(appConfig).ui.icons.search,
                    "data-slot": "input",
                    class: ui.value.input({ class: props.ui?.input }),
                    onKeydown: onBackspace
                  }), createSlots({ _: 2 }, [
                    history.value?.length && (__props.back || !!slots.back) ? {
                      name: "leading",
                      fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "back", { ui: ui.value }, () => {
                            _push4(ssrRenderComponent(_sfc_main$9$1, mergeProps({
                              icon: __props.backIcon || unref(appConfig).ui.icons.arrowLeft,
                              color: "neutral",
                              variant: "link",
                              "aria-label": unref(t)("commandPalette.back")
                            }, typeof __props.back === "object" ? __props.back : {}, {
                              "data-slot": "back",
                              class: ui.value.back({ class: props.ui?.back }),
                              onClick: navigateBack
                            }), null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "back", { ui: ui.value }, () => [
                              createVNode(_sfc_main$9$1, mergeProps({
                                icon: __props.backIcon || unref(appConfig).ui.icons.arrowLeft,
                                color: "neutral",
                                variant: "link",
                                "aria-label": unref(t)("commandPalette.back")
                              }, typeof __props.back === "object" ? __props.back : {}, {
                                "data-slot": "back",
                                class: ui.value.back({ class: props.ui?.back }),
                                onClick: navigateBack
                              }), null, 16, ["icon", "aria-label", "class"])
                            ])
                          ];
                        }
                      }),
                      key: "0"
                    } : void 0,
                    __props.close || !!slots.close ? {
                      name: "trailing",
                      fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                            if (__props.close) {
                              _push4(ssrRenderComponent(_sfc_main$9$1, mergeProps({
                                icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                color: "neutral",
                                variant: "ghost",
                                "aria-label": unref(t)("commandPalette.close")
                              }, typeof __props.close === "object" ? __props.close : {}, {
                                "data-slot": "close",
                                class: ui.value.close({ class: props.ui?.close }),
                                onClick: ($event) => emits("update:open", false)
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                              __props.close ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                                key: 0,
                                icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                color: "neutral",
                                variant: "ghost",
                                "aria-label": unref(t)("commandPalette.close")
                              }, typeof __props.close === "object" ? __props.close : {}, {
                                "data-slot": "close",
                                class: ui.value.close({ class: props.ui?.close }),
                                onClick: ($event) => emits("update:open", false)
                              }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      key: "1"
                    } : void 0
                  ]), _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$8, mergeProps({
                      placeholder: placeholder.value,
                      variant: "none",
                      autofocus: __props.autofocus
                    }, unref(inputProps), {
                      "loading-icon": __props.loadingIcon,
                      "trailing-icon": __props.trailingIcon,
                      icon: __props.icon || unref(appConfig).ui.icons.search,
                      "data-slot": "input",
                      class: ui.value.input({ class: props.ui?.input }),
                      onKeydown: withKeys(onBackspace, ["backspace"])
                    }), createSlots({ _: 2 }, [
                      history.value?.length && (__props.back || !!slots.back) ? {
                        name: "leading",
                        fn: withCtx(() => [
                          renderSlot(_ctx.$slots, "back", { ui: ui.value }, () => [
                            createVNode(_sfc_main$9$1, mergeProps({
                              icon: __props.backIcon || unref(appConfig).ui.icons.arrowLeft,
                              color: "neutral",
                              variant: "link",
                              "aria-label": unref(t)("commandPalette.back")
                            }, typeof __props.back === "object" ? __props.back : {}, {
                              "data-slot": "back",
                              class: ui.value.back({ class: props.ui?.back }),
                              onClick: navigateBack
                            }), null, 16, ["icon", "aria-label", "class"])
                          ])
                        ]),
                        key: "0"
                      } : void 0,
                      __props.close || !!slots.close ? {
                        name: "trailing",
                        fn: withCtx(() => [
                          renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                            __props.close ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                              key: 0,
                              icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                              color: "neutral",
                              variant: "ghost",
                              "aria-label": unref(t)("commandPalette.close")
                            }, typeof __props.close === "object" ? __props.close : {}, {
                              "data-slot": "close",
                              class: ui.value.close({ class: props.ui?.close }),
                              onClick: ($event) => emits("update:open", false)
                            }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                          ])
                        ]),
                        key: "1"
                      } : void 0
                    ]), 1040, ["placeholder", "autofocus", "loading-icon", "trailing-icon", "icon", "class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ListboxContent), {
              "data-slot": "content",
              class: ui.value.content({ class: props.ui?.content })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (filteredGroups.value?.length) {
                    _push3(`<div role="presentation" data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: props.ui?.viewport }))}"${_scopeId2}>`);
                    if (!!__props.virtualize) {
                      _push3(ssrRenderComponent(unref(ListboxVirtualizer), mergeProps({
                        options: filteredItems.value,
                        "text-content": (item2) => unref(get)(item2, props.labelKey)
                      }, virtualizerProps.value), {
                        default: withCtx(({ option: item, virtualItem }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(ReuseItemTemplate), {
                              item,
                              index: virtualItem.index
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(ReuseItemTemplate), {
                                item,
                                index: virtualItem.index
                              }, null, 8, ["item", "index"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!--[-->`);
                      ssrRenderList(filteredGroups.value, (group) => {
                        _push3(ssrRenderComponent(unref(ListboxGroup), {
                          key: `group-${group.id}`,
                          "data-slot": "group",
                          class: ui.value.group({ class: props.ui?.group })
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              if (unref(get)(group, props.labelKey)) {
                                _push4(ssrRenderComponent(unref(ListboxGroupLabel), {
                                  "data-slot": "label",
                                  class: ui.value.label({ class: props.ui?.label })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`${ssrInterpolate(unref(get)(group, props.labelKey))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`<!--[-->`);
                              ssrRenderList(group.items, (item, index) => {
                                _push4(ssrRenderComponent(unref(ReuseItemTemplate), {
                                  key: `group-${group.id}-${index}`,
                                  item,
                                  index,
                                  group
                                }, null, _parent4, _scopeId3));
                              });
                              _push4(`<!--]-->`);
                            } else {
                              return [
                                unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                                  key: 0,
                                  "data-slot": "label",
                                  class: ui.value.label({ class: props.ui?.label })
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                                  return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                    key: `group-${group.id}-${index}`,
                                    item,
                                    index,
                                    group
                                  }, null, 8, ["item", "index", "group"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<div data-slot="empty" class="${ssrRenderClass(ui.value.empty({ class: props.ui?.empty }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                      _push3(`${ssrInterpolate(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData"))}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    filteredGroups.value?.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      role: "presentation",
                      "data-slot": "viewport",
                      class: ui.value.viewport({ class: props.ui?.viewport })
                    }, [
                      !!__props.virtualize ? (openBlock(), createBlock(unref(ListboxVirtualizer), mergeProps({
                        key: 0,
                        options: filteredItems.value,
                        "text-content": (item2) => unref(get)(item2, props.labelKey)
                      }, virtualizerProps.value), {
                        default: withCtx(({ option: item, virtualItem }) => [
                          createVNode(unref(ReuseItemTemplate), {
                            item,
                            index: virtualItem.index
                          }, null, 8, ["item", "index"])
                        ]),
                        _: 1
                      }, 16, ["options", "text-content"])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(filteredGroups.value, (group) => {
                        return openBlock(), createBlock(unref(ListboxGroup), {
                          key: `group-${group.id}`,
                          "data-slot": "group",
                          class: ui.value.group({ class: props.ui?.group })
                        }, {
                          default: withCtx(() => [
                            unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                              key: 0,
                              "data-slot": "label",
                              class: ui.value.label({ class: props.ui?.label })
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                              return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                key: `group-${group.id}-${index}`,
                                item,
                                index,
                                group
                              }, null, 8, ["item", "index", "group"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["class"]);
                      }), 128))
                    ], 2)) : (openBlock(), createBlock("div", {
                      key: 1,
                      "data-slot": "empty",
                      class: ui.value.empty({ class: props.ui?.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData")), 1)
                      ])
                    ], 2))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!slots.footer) {
              _push2(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", { ui: ui.value }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(ListboxFilter), {
                modelValue: searchTerm.value,
                "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$8, mergeProps({
                    placeholder: placeholder.value,
                    variant: "none",
                    autofocus: __props.autofocus
                  }, unref(inputProps), {
                    "loading-icon": __props.loadingIcon,
                    "trailing-icon": __props.trailingIcon,
                    icon: __props.icon || unref(appConfig).ui.icons.search,
                    "data-slot": "input",
                    class: ui.value.input({ class: props.ui?.input }),
                    onKeydown: withKeys(onBackspace, ["backspace"])
                  }), createSlots({ _: 2 }, [
                    history.value?.length && (__props.back || !!slots.back) ? {
                      name: "leading",
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, "back", { ui: ui.value }, () => [
                          createVNode(_sfc_main$9$1, mergeProps({
                            icon: __props.backIcon || unref(appConfig).ui.icons.arrowLeft,
                            color: "neutral",
                            variant: "link",
                            "aria-label": unref(t)("commandPalette.back")
                          }, typeof __props.back === "object" ? __props.back : {}, {
                            "data-slot": "back",
                            class: ui.value.back({ class: props.ui?.back }),
                            onClick: navigateBack
                          }), null, 16, ["icon", "aria-label", "class"])
                        ])
                      ]),
                      key: "0"
                    } : void 0,
                    __props.close || !!slots.close ? {
                      name: "trailing",
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                          __props.close ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                            key: 0,
                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                            color: "neutral",
                            variant: "ghost",
                            "aria-label": unref(t)("commandPalette.close")
                          }, typeof __props.close === "object" ? __props.close : {}, {
                            "data-slot": "close",
                            class: ui.value.close({ class: props.ui?.close }),
                            onClick: ($event) => emits("update:open", false)
                          }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                        ])
                      ]),
                      key: "1"
                    } : void 0
                  ]), 1040, ["placeholder", "autofocus", "loading-icon", "trailing-icon", "icon", "class"])
                ]),
                _: 3
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(unref(ListboxContent), {
                "data-slot": "content",
                class: ui.value.content({ class: props.ui?.content })
              }, {
                default: withCtx(() => [
                  filteredGroups.value?.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    role: "presentation",
                    "data-slot": "viewport",
                    class: ui.value.viewport({ class: props.ui?.viewport })
                  }, [
                    !!__props.virtualize ? (openBlock(), createBlock(unref(ListboxVirtualizer), mergeProps({
                      key: 0,
                      options: filteredItems.value,
                      "text-content": (item2) => unref(get)(item2, props.labelKey)
                    }, virtualizerProps.value), {
                      default: withCtx(({ option: item, virtualItem }) => [
                        createVNode(unref(ReuseItemTemplate), {
                          item,
                          index: virtualItem.index
                        }, null, 8, ["item", "index"])
                      ]),
                      _: 1
                    }, 16, ["options", "text-content"])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(filteredGroups.value, (group) => {
                      return openBlock(), createBlock(unref(ListboxGroup), {
                        key: `group-${group.id}`,
                        "data-slot": "group",
                        class: ui.value.group({ class: props.ui?.group })
                      }, {
                        default: withCtx(() => [
                          unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                            key: 0,
                            "data-slot": "label",
                            class: ui.value.label({ class: props.ui?.label })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                            ]),
                            _: 2
                          }, 1032, ["class"])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                            return openBlock(), createBlock(unref(ReuseItemTemplate), {
                              key: `group-${group.id}-${index}`,
                              item,
                              index,
                              group
                            }, null, 8, ["item", "index", "group"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
                  ], 2)) : (openBlock(), createBlock("div", {
                    key: 1,
                    "data-slot": "empty",
                    class: ui.value.empty({ class: props.ui?.empty })
                  }, [
                    renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                      createTextVNode(toDisplayString(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData")), 1)
                    ])
                  ], 2))
                ]),
                _: 3
              }, 8, ["class"]),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "footer",
                class: ui.value.footer({ class: props.ui?.footer })
              }, [
                renderSlot(_ctx.$slots, "footer", { ui: ui.value })
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "modal": "",
    "input": "[&>input]:text-base/5"
  },
  "variants": {
    "fullscreen": {
      "false": {
        "modal": "sm:max-w-3xl h-full sm:h-[28rem]"
      }
    }
  }
};
const useColorMode = () => {
  return useState("color-mode").value;
};
const chainedShortcutRegex = /^[^-]+.*-.*[^-]+$/;
const combinedShortcutRegex = /^[^_]+.*_.*[^_]+$/;
const shiftableKeys = ["arrowleft", "arrowright", "arrowup", "arrowright", "tab", "escape", "enter", "backspace"];
function convertKeyToCode(key) {
  if (/^[a-z]$/i.test(key)) {
    return `Key${key.toUpperCase()}`;
  }
  if (/^\d$/.test(key)) {
    return `Digit${key}`;
  }
  if (/^f\d+$/i.test(key)) {
    return key.toUpperCase();
  }
  const specialKeys = {
    space: "Space",
    enter: "Enter",
    escape: "Escape",
    tab: "Tab",
    backspace: "Backspace",
    delete: "Delete",
    arrowup: "ArrowUp",
    arrowdown: "ArrowDown",
    arrowleft: "ArrowLeft",
    arrowright: "ArrowRight"
  };
  return specialKeys[key.toLowerCase()] || key;
}
function defineShortcuts(config, options = {}) {
  const chainedInputs = ref([]);
  const clearChainedInput = () => {
    chainedInputs.value.splice(0, chainedInputs.value.length);
  };
  const debouncedClearChainedInput = useDebounceFn(clearChainedInput, options.chainDelay ?? 800);
  const { macOS } = useKbd();
  const activeElement = useActiveElement();
  const layoutIndependent = options.layoutIndependent ?? false;
  const shiftableCodes = shiftableKeys.map((k) => convertKeyToCode(k));
  const onKeyDown = (e) => {
    if (!e.key) {
      return;
    }
    const alphabetKey = layoutIndependent ? /^Key[A-Z]$/i.test(e.code) : /^[a-z]{1}$/i.test(e.key);
    const shiftableKey = layoutIndependent ? shiftableCodes.includes(e.code) : shiftableKeys.includes(e.key.toLowerCase());
    let chainedKey;
    chainedInputs.value.push(layoutIndependent ? e.code : e.key);
    if (chainedInputs.value.length >= 2) {
      chainedKey = chainedInputs.value.slice(-2).join("-");
      for (const shortcut of shortcuts.value.filter((s) => s.chained)) {
        if (shortcut.key !== chainedKey) {
          continue;
        }
        if (shortcut.enabled) {
          e.preventDefault();
          shortcut.handler(e);
        }
        clearChainedInput();
        return;
      }
    }
    for (const shortcut of shortcuts.value.filter((s) => !s.chained)) {
      if (layoutIndependent) {
        if (e.code !== shortcut.key) {
          continue;
        }
      } else {
        if (e.key.toLowerCase() !== shortcut.key) {
          continue;
        }
      }
      if (e.metaKey !== shortcut.metaKey) {
        continue;
      }
      if (e.ctrlKey !== shortcut.ctrlKey) {
        continue;
      }
      if ((alphabetKey || shiftableKey) && e.shiftKey !== shortcut.shiftKey) {
        continue;
      }
      if (shortcut.enabled) {
        e.preventDefault();
        shortcut.handler(e);
      }
      clearChainedInput();
      return;
    }
    debouncedClearChainedInput();
  };
  const usingInput = computed(() => {
    const tagName = activeElement.value?.tagName;
    const contentEditable = activeElement.value?.contentEditable;
    const usingInput2 = !!(tagName === "INPUT" || tagName === "TEXTAREA" || contentEditable === "true" || contentEditable === "plaintext-only");
    if (usingInput2) {
      return activeElement.value?.name || true;
    }
    return false;
  });
  const shortcuts = computed(() => {
    return Object.entries(toValue(config)).map(([key, shortcutConfig]) => {
      if (!shortcutConfig) {
        return null;
      }
      let shortcut;
      if (key.includes("-") && key !== "-" && !key.includes("_") && !key.match(chainedShortcutRegex)?.length) {
        console.trace(`[Shortcut] Invalid key: "${key}"`);
      }
      if (key.includes("_") && key !== "_" && !key.match(combinedShortcutRegex)?.length) {
        console.trace(`[Shortcut] Invalid key: "${key}"`);
      }
      const chained = key.includes("-") && key !== "-" && !key.includes("_");
      if (chained) {
        if (layoutIndependent) {
          const parts = key.split("-").map((p) => convertKeyToCode(p));
          shortcut = {
            key: parts.join("-"),
            metaKey: false,
            ctrlKey: false,
            shiftKey: false,
            altKey: false
          };
        } else {
          shortcut = {
            key: key.toLowerCase(),
            metaKey: false,
            ctrlKey: false,
            shiftKey: false,
            altKey: false
          };
        }
      } else {
        const keySplit = key.toLowerCase().split("_").map((k) => k);
        let baseKey = keySplit.filter((k) => !["meta", "command", "ctrl", "shift", "alt", "option"].includes(k)).join("_");
        if (layoutIndependent) {
          baseKey = convertKeyToCode(baseKey);
        }
        shortcut = {
          key: baseKey,
          metaKey: keySplit.includes("meta") || keySplit.includes("command"),
          ctrlKey: keySplit.includes("ctrl"),
          shiftKey: keySplit.includes("shift"),
          altKey: keySplit.includes("alt") || keySplit.includes("option")
        };
      }
      shortcut.chained = chained;
      if (!macOS.value && shortcut.metaKey && !shortcut.ctrlKey) {
        shortcut.metaKey = false;
        shortcut.ctrlKey = true;
      }
      if (typeof shortcutConfig === "function") {
        shortcut.handler = shortcutConfig;
      } else if (typeof shortcutConfig === "object") {
        shortcut = { ...shortcut, handler: shortcutConfig.handler };
      }
      if (!shortcut.handler) {
        console.trace("[Shortcut] Invalid value");
        return null;
      }
      let enabled = true;
      if (!shortcutConfig.usingInput) {
        enabled = !usingInput.value;
      } else if (typeof shortcutConfig.usingInput === "string") {
        enabled = usingInput.value === shortcutConfig.usingInput;
      }
      shortcut.enabled = enabled;
      return shortcut;
    }).filter(Boolean);
  });
  return useEventListener("keydown", onKeyDown);
}
function useRuntimeHook(name, fn) {
  const nuxtApp = useNuxtApp();
  const unregister = nuxtApp.hook(name, fn);
  onScopeDispose(unregister);
}
const _sfc_main$6 = {
  __name: "UDashboardSearch",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    icon: { type: null, required: false },
    placeholder: { type: String, required: false },
    autofocus: { type: Boolean, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: null, required: false },
    shortcut: { type: String, required: false, default: "meta_k" },
    groups: { type: Array, required: false },
    fuse: { type: Object, required: false },
    colorMode: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: void 0, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    overlay: { type: Boolean, required: false },
    transition: { type: Boolean, required: false },
    content: { type: Object, required: false },
    dismissible: { type: Boolean, required: false },
    fullscreen: { type: Boolean, required: false, default: false },
    modal: { type: Boolean, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {},
    "searchTerm": { type: String, ...{ default: "" } },
    "searchTermModifiers": {}
  }),
  emits: ["update:open", "update:searchTerm"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const slots = useSlots();
    const open = useModel(__props, "open", { type: Boolean, ...{ default: false } });
    const searchTerm = useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    useRuntimeHook("dashboard:search:toggle", () => {
      open.value = !open.value;
    });
    const { t } = useLocale();
    const colorMode = useColorMode();
    const appConfig = useAppConfig();
    const commandPaletteProps = useForwardProps(reactivePick(props, "icon", "placeholder", "autofocus", "loading", "loadingIcon", "close", "closeIcon"));
    const modalProps = useForwardProps(reactivePick(props, "overlay", "transition", "content", "dismissible", "fullscreen", "modal", "portal"));
    const getProxySlots = () => omit(slots, ["content"]);
    const fuse = computed(() => defu({}, props.fuse, {
      fuseOptions: {}
    }));
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.dashboardSearch || {} })({
      fullscreen: props.fullscreen
    }));
    const groups = computed(() => {
      const groups2 = [];
      groups2.push(...props.groups || []);
      if (props.colorMode && !colorMode?.forced) {
        groups2.push({
          id: "theme",
          label: t("dashboardSearch.theme"),
          items: [{
            label: t("colorMode.system"),
            icon: appConfig.ui.icons.system,
            active: colorMode.preference === "system",
            onSelect: () => {
              colorMode.preference = "system";
            }
          }, {
            label: t("colorMode.light"),
            icon: appConfig.ui.icons.light,
            active: colorMode.preference === "light",
            onSelect: () => {
              colorMode.preference = "light";
            }
          }, {
            label: t("colorMode.dark"),
            icon: appConfig.ui.icons.dark,
            active: colorMode.preference === "dark",
            onSelect: () => {
              colorMode.preference = "dark";
            }
          }]
        });
      }
      return groups2;
    });
    const commandPaletteRef = useTemplateRef("commandPaletteRef");
    function onSelect(item) {
      if (item.disabled) {
        return;
      }
      open.value = false;
      searchTerm.value = "";
    }
    defineShortcuts({
      [props.shortcut]: {
        usingInput: true,
        handler: () => open.value = !open.value
      }
    });
    __expose({
      commandPaletteRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$b, mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        title: __props.title || unref(t)("dashboardSearch.title"),
        description: __props.description || unref(t)("dashboardSearch.description")
      }, unref(modalProps), {
        "data-slot": "modal",
        class: ui.value.modal({ class: [props.ui?.modal, props.class] })
      }, _attrs), {
        content: withCtx((contentData, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "content", contentData, () => {
              _push2(ssrRenderComponent(_sfc_main$7, mergeProps({
                ref_key: "commandPaletteRef",
                ref: commandPaletteRef,
                "search-term": searchTerm.value,
                "onUpdate:searchTerm": ($event) => searchTerm.value = $event
              }, unref(commandPaletteProps), {
                groups: groups.value,
                fuse: fuse.value,
                ui: unref(transformUI)(unref(omit)(ui.value, ["modal"]), props.ui),
                "onUpdate:modelValue": onSelect,
                "onUpdate:open": ($event) => open.value = $event
              }), createSlots({ _: 2 }, [
                renderList(getProxySlots(), (_, name) => {
                  return {
                    name,
                    fn: withCtx((slotData, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderSlot(_ctx.$slots, name, slotData, null, _push3, _parent3, _scopeId2);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, name, slotData)
                        ];
                      }
                    })
                  };
                })
              ]), _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "content", contentData, () => [
                createVNode(_sfc_main$7, mergeProps({
                  ref_key: "commandPaletteRef",
                  ref: commandPaletteRef,
                  "search-term": searchTerm.value,
                  "onUpdate:searchTerm": ($event) => searchTerm.value = $event
                }, unref(commandPaletteProps), {
                  groups: groups.value,
                  fuse: fuse.value,
                  ui: unref(transformUI)(unref(omit)(ui.value, ["modal"]), props.ui),
                  "onUpdate:modelValue": onSelect,
                  "onUpdate:open": ($event) => open.value = $event
                }), createSlots({ _: 2 }, [
                  renderList(getProxySlots(), (_, name) => {
                    return {
                      name,
                      fn: withCtx((slotData) => [
                        renderSlot(_ctx.$slots, name, slotData)
                      ])
                    };
                  })
                ]), 1040, ["search-term", "onUpdate:searchTerm", "groups", "fuse", "ui", "onUpdate:open"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/DashboardSearch.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative flex items-start",
    "base": [
      "inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 data-[state=unchecked]:bg-accented",
      "transition-[background] duration-200"
    ],
    "container": "flex items-center",
    "thumb": "group pointer-events-none rounded-full bg-default shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center",
    "icon": [
      "absolute shrink-0 group-data-[state=unchecked]:text-dimmed opacity-0 size-10/12",
      "transition-[color,opacity] duration-200"
    ],
    "wrapper": "ms-2",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "data-[state=checked]:bg-primary focus-visible:outline-primary",
        "icon": "group-data-[state=checked]:text-primary"
      },
      "secondary": {
        "base": "data-[state=checked]:bg-secondary focus-visible:outline-secondary",
        "icon": "group-data-[state=checked]:text-secondary"
      },
      "success": {
        "base": "data-[state=checked]:bg-success focus-visible:outline-success",
        "icon": "group-data-[state=checked]:text-success"
      },
      "info": {
        "base": "data-[state=checked]:bg-info focus-visible:outline-info",
        "icon": "group-data-[state=checked]:text-info"
      },
      "warning": {
        "base": "data-[state=checked]:bg-warning focus-visible:outline-warning",
        "icon": "group-data-[state=checked]:text-warning"
      },
      "error": {
        "base": "data-[state=checked]:bg-error focus-visible:outline-error",
        "icon": "group-data-[state=checked]:text-error"
      },
      "neutral": {
        "base": "data-[state=checked]:bg-inverted focus-visible:outline-inverted",
        "icon": "group-data-[state=checked]:text-highlighted"
      }
    },
    "size": {
      "xs": {
        "base": "w-7",
        "container": "h-4",
        "thumb": "size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "w-8",
        "container": "h-4",
        "thumb": "size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "w-9",
        "container": "h-5",
        "thumb": "size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "w-10",
        "container": "h-5",
        "thumb": "size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "w-11",
        "container": "h-6",
        "thumb": "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5",
        "wrapper": "text-base"
      }
    },
    "checked": {
      "true": {
        "icon": "group-data-[state=checked]:opacity-100"
      }
    },
    "unchecked": {
      "true": {
        "icon": "group-data-[state=unchecked]:opacity-100"
      }
    },
    "loading": {
      "true": {
        "icon": "animate-spin"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    },
    "disabled": {
      "true": {
        "root": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    }
  },
  "defaultVariants": {
    "color": "primary",
    "size": "md"
  }
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "USwitch",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false },
    checkedIcon: { type: null, required: false },
    uncheckedIcon: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    value: { type: String, required: false },
    defaultValue: { type: Boolean, required: false }
  }, {
    "modelValue": { type: Boolean, ...{ default: void 0 } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue", { type: Boolean, ...{ default: void 0 } });
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props);
    const id = _id.value ?? useId();
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.switch || {} })({
      size: size.value,
      color: color.value,
      required: props.required,
      loading: props.loading,
      disabled: disabled.value || props.loading
    }));
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(SwitchRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              modelValue: modelValue.value,
              "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
              name: unref(name),
              disabled: unref(disabled) || __props.loading,
              "data-slot": "base",
              class: ui.value.base({ class: props.ui?.base })
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SwitchThumb), {
                    "data-slot": "thumb",
                    class: ui.value.thumb({ class: props.ui?.thumb })
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.loading) {
                          _push4(ssrRenderComponent(_sfc_main$f, {
                            name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, checked: true, unchecked: true })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!--[-->`);
                          if (__props.checkedIcon) {
                            _push4(ssrRenderComponent(_sfc_main$f, {
                              name: __props.checkedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: props.ui?.icon, checked: true })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (__props.uncheckedIcon) {
                            _push4(ssrRenderComponent(_sfc_main$f, {
                              name: __props.uncheckedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: props.ui?.icon, unchecked: true })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--]-->`);
                        }
                      } else {
                        return [
                          __props.loading ? (openBlock(), createBlock(_sfc_main$f, {
                            key: 0,
                            name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, checked: true, unchecked: true })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            __props.checkedIcon ? (openBlock(), createBlock(_sfc_main$f, {
                              key: 0,
                              name: __props.checkedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: props.ui?.icon, checked: true })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                            __props.uncheckedIcon ? (openBlock(), createBlock(_sfc_main$f, {
                              key: 1,
                              name: __props.uncheckedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: props.ui?.icon, unchecked: true })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ], 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SwitchThumb), {
                      "data-slot": "thumb",
                      class: ui.value.thumb({ class: props.ui?.thumb })
                    }, {
                      default: withCtx(() => [
                        __props.loading ? (openBlock(), createBlock(_sfc_main$f, {
                          key: 0,
                          name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon, checked: true, unchecked: true })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          __props.checkedIcon ? (openBlock(), createBlock(_sfc_main$f, {
                            key: 0,
                            name: __props.checkedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, checked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                          __props.uncheckedIcon ? (openBlock(), createBlock(_sfc_main$f, {
                            key: 1,
                            name: __props.uncheckedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, unchecked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ], 64))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.label || !!slots.label || (__props.description || !!slots.description)) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
              if (__props.label || !!slots.label) {
                _push2(ssrRenderComponent(unref(Label), {
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", { label: __props.label }, () => {
                        _push3(`${ssrInterpolate(__props.label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                          createTextVNode(toDisplayString(__props.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "container",
                class: ui.value.container({ class: props.ui?.container })
              }, [
                createVNode(unref(SwitchRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                  modelValue: modelValue.value,
                  "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
                  name: unref(name),
                  disabled: unref(disabled) || __props.loading,
                  "data-slot": "base",
                  class: ui.value.base({ class: props.ui?.base })
                }), {
                  default: withCtx(() => [
                    createVNode(unref(SwitchThumb), {
                      "data-slot": "thumb",
                      class: ui.value.thumb({ class: props.ui?.thumb })
                    }, {
                      default: withCtx(() => [
                        __props.loading ? (openBlock(), createBlock(_sfc_main$f, {
                          key: 0,
                          name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon, checked: true, unchecked: true })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          __props.checkedIcon ? (openBlock(), createBlock(_sfc_main$f, {
                            key: 0,
                            name: __props.checkedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, checked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                          __props.uncheckedIcon ? (openBlock(), createBlock(_sfc_main$f, {
                            key: 1,
                            name: __props.uncheckedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, unchecked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ], 64))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ]),
                  _: 1
                }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])
              ], 2),
              __props.label || !!slots.label || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock(unref(Label), {
                  key: 0,
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                      createTextVNode(toDisplayString(__props.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  "data-slot": "description",
                  class: ui.value.description({ class: props.ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UColorModeSwitch",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    value: { type: String, required: false },
    defaultValue: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const colorMode = useColorMode();
    const appConfig = useAppConfig();
    const switchProps = useForwardProps(props);
    const isDark = computed({
      get() {
        return colorMode.value === "dark";
      },
      set(_isDark) {
        colorMode.preference = _isDark ? "dark" : "light";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$3;
      if (!unref(colorMode)?.forced) {
        _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
          fallback: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, mergeProps({
                "checked-icon": unref(appConfig).ui.icons.dark,
                "unchecked-icon": unref(appConfig).ui.icons.light
              }, {
                ...unref(switchProps),
                "aria-label": isDark.value ? unref(t)("colorMode.switchToLight") : unref(t)("colorMode.switchToDark"),
                ..._ctx.$attrs
              }, { disabled: "" }), null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$5, mergeProps({
                  "checked-icon": unref(appConfig).ui.icons.dark,
                  "unchecked-icon": unref(appConfig).ui.icons.light
                }, {
                  ...unref(switchProps),
                  "aria-label": isDark.value ? unref(t)("colorMode.switchToLight") : unref(t)("colorMode.switchToDark"),
                  ..._ctx.$attrs
                }, { disabled: "" }), null, 16, ["checked-icon", "unchecked-icon"])
              ];
            }
          })
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeSwitch.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HEADER = {
  Accept: "application/json",
  Origin: "https://unilibrary.uz",
  Referer: "https://unilibrary.uz"
};
const useSearch = async () => {
  const searchLib = async (name) => {
    const result = await $fetch(`https://api.unilibrary.uz/api/user/guest-publisher-resources?page=0&limit=15&language=ru&global_search=${name}&sort=desc&sort_direction=id`, { headers: HEADER });
    return result;
  };
  return { searchLib };
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HeaderComp",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const books = ref([
      {
        id: "books",
        label: "Books",
        items: []
      }
    ]);
    const searchTerm = ref("");
    const { searchLib } = ([__temp, __restore] = withAsyncContext(() => useSearch()), __temp = await __temp, __restore(), __temp);
    const setBooks = async (name) => {
      const data = await searchLib(name);
      books.value[0].items = [];
      data.result.data.forEach((book) => {
        books.value[0]?.items.push({
          label: book.name,
          suffix: book.authors,
          to: `/catalog/unilibrary/${book.id}`
        });
      });
    };
    const items = ref([
      [
        {
          label: "Navigate",
          type: "label"
        },
        {
          label: "Catalog",
          to: "/catalog"
        }
      ]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UHeader = _sfc_main$9;
      const _component_UDashboardSearch = _sfc_main$6;
      const _component_UColorModeSwitch = _sfc_main$4;
      const _component_UNavigationMenu = _sfc_main$d;
      _push(ssrRenderComponent(_component_UHeader, mergeProps({ title: "TUIT Archive" }, _attrs), {
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardSearch, {
              "search-term": unref(searchTerm),
              "onUpdate:searchTerm": [($event) => isRef(searchTerm) ? searchTerm.value = $event : null, ($event) => setBooks($event)],
              loading: "",
              shortcut: "meta_k",
              groups: unref(books),
              fuse: { resultLimit: 42 }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UColorModeSwitch, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardSearch, {
                "search-term": unref(searchTerm),
                "onUpdate:searchTerm": [($event) => isRef(searchTerm) ? searchTerm.value = $event : null, ($event) => setBooks($event)],
                loading: "",
                shortcut: "meta_k",
                groups: unref(books),
                fuse: { resultLimit: 42 }
              }, null, 8, ["search-term", "onUpdate:searchTerm", "groups"]),
              createVNode(_component_UColorModeSwitch)
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UNavigationMenu, {
              orientation: "vertical",
              tooltip: "",
              items: unref(items),
              variant: "pill"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UNavigationMenu, {
                orientation: "vertical",
                tooltip: "",
                items: unref(items),
                variant: "pill"
              }, null, 8, ["items"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UNavigationMenu, {
              items: unref(items),
              variant: "pill"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UNavigationMenu, {
                items: unref(items),
                variant: "pill"
              }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderComp.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "HeaderComp" });
const theme = {
  "slots": {
    "root": "",
    "top": "py-8 lg:py-12",
    "bottom": "py-8 lg:py-12",
    "container": "py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3",
    "left": "flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1",
    "center": "mt-3 lg:mt-0 lg:order-2 flex items-center justify-center",
    "right": "lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
  }
};
const _sfc_main$2 = {
  __name: "UFooter",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "footer" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.footer || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.top) {
              _push2(`<div data-slot="top" class="${ssrRenderClass(ui.value.top({ class: props.ui?.top }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$e, {
              "data-slot": "container",
              class: ui.value.container({ class: props.ui?.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-slot="right" class="${ssrRenderClass(ui.value.right({ class: props.ui?.right }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "right", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div><div data-slot="center" class="${ssrRenderClass(ui.value.center({ class: props.ui?.center }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div><div data-slot="left" class="${ssrRenderClass(ui.value.left({ class: props.ui?.left }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "left", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      "data-slot": "right",
                      class: ui.value.right({ class: props.ui?.right })
                    }, [
                      renderSlot(_ctx.$slots, "right")
                    ], 2),
                    createVNode("div", {
                      "data-slot": "center",
                      class: ui.value.center({ class: props.ui?.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode("div", {
                      "data-slot": "left",
                      class: ui.value.left({ class: props.ui?.left })
                    }, [
                      renderSlot(_ctx.$slots, "left")
                    ], 2)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!slots.bottom) {
              _push2(`<div data-slot="bottom" class="${ssrRenderClass(ui.value.bottom({ class: props.ui?.bottom }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.top ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "top",
                class: ui.value.top({ class: props.ui?.top })
              }, [
                renderSlot(_ctx.$slots, "top")
              ], 2)) : createCommentVNode("", true),
              createVNode(_sfc_main$e, {
                "data-slot": "container",
                class: ui.value.container({ class: props.ui?.container })
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    "data-slot": "right",
                    class: ui.value.right({ class: props.ui?.right })
                  }, [
                    renderSlot(_ctx.$slots, "right")
                  ], 2),
                  createVNode("div", {
                    "data-slot": "center",
                    class: ui.value.center({ class: props.ui?.center })
                  }, [
                    renderSlot(_ctx.$slots, "default")
                  ], 2),
                  createVNode("div", {
                    "data-slot": "left",
                    class: ui.value.left({ class: props.ui?.left })
                  }, [
                    renderSlot(_ctx.$slots, "left")
                  ], 2)
                ]),
                _: 3
              }, 8, ["class"]),
              !!slots.bottom ? (openBlock(), createBlock("div", {
                key: 1,
                "data-slot": "bottom",
                class: ui.value.bottom({ class: props.ui?.bottom })
              }, [
                renderSlot(_ctx.$slots, "bottom")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FooterComp",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        label: "GitHub",
        to: "https://github.com/GRTeamBoss/tuit_webapp_archive",
        target: "_blank"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFooter = _sfc_main$2;
      const _component_UNavigationMenu = _sfc_main$d;
      const _component_UButton = _sfc_main$9$1;
      _push(ssrRenderComponent(_component_UFooter, _attrs, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-muted text-sm"${_scopeId}> Copyright © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-muted text-sm" }, " Copyright © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()), 1)
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-simple-icons-github",
              color: "neutral",
              variant: "ghost",
              to: "https://github.com/GRTeamBoss/tuit_webapp_archive",
              target: "_blank",
              "aria-label": "GitHub"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "i-simple-icons-github",
                color: "neutral",
                variant: "ghost",
                to: "https://github.com/GRTeamBoss/tuit_webapp_archive",
                target: "_blank",
                "aria-label": "GitHub"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UNavigationMenu, {
              items,
              variant: "link"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UNavigationMenu, {
                items,
                variant: "link"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterComp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "FooterComp" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderComp = __nuxt_component_0;
  const _component_FooterComp = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_HeaderComp, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_FooterComp, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CH6l8uQH.mjs.map
