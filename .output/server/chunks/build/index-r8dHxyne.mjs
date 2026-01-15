import { _ as _sfc_main$3, a as _sfc_main$2$1, b as _sfc_main$4 } from './PageSection-Dq2HFK-8.mjs';
import { _ as _sfc_main$5 } from './NavigationMenu-1dMkt1qq.mjs';
import { defineComponent, withAsyncContext, ref, withCtx, unref, createVNode, mergeProps, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, computed, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { _ as _export_sfc, u as useAppConfig, t as tv } from './server.mjs';
import { u as useUnilibrary, _ as _sfc_main$6 } from './useUnilibrary-Deicu5d1.mjs';
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
import '@vueuse/core';
import 'reka-ui/namespaced';
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

const theme = {
  "base": "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
};
const _sfc_main$2 = {
  __name: "UPageGrid",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pageGrid || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UnilibraryMain",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { getBooks, getPosts, getDissertations } = ([__temp, __restore] = withAsyncContext(() => useUnilibrary()), __temp = await __temp, __restore(), __temp);
    const books = ([__temp, __restore] = withAsyncContext(() => getBooks(1)), __temp = await __temp, __restore(), __temp);
    const booksData = books.result.data;
    const posts = ([__temp, __restore] = withAsyncContext(() => getPosts(1)), __temp = await __temp, __restore(), __temp);
    const postsData = posts.result.data;
    const dissertations = ([__temp, __restore] = withAsyncContext(() => getDissertations(1)), __temp = await __temp, __restore(), __temp);
    const dissertationsData = dissertations.result.data;
    const items = ref([
      [
        {
          label: "Books",
          to: "#books"
        },
        {
          label: "Posts",
          to: "#posts"
        },
        {
          label: "Dissertations",
          to: "#dissertations"
        }
      ]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$3;
      const _component_UPageHero = _sfc_main$2$1;
      const _component_UPageSection = _sfc_main$4;
      const _component_UNavigationMenu = _sfc_main$5;
      const _component_UPageGrid = _sfc_main$2;
      const _component_UPageCard = _sfc_main$6;
      _push(ssrRenderComponent(_component_UPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHero, { title: "UNILibrary" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageSection, null, {
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
            _push2(ssrRenderComponent(_component_UPageSection, {
              title: "Books",
              id: "books"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageGrid, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(booksData), (book, index2) => {
                          _push4(ssrRenderComponent(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                            title: book.name,
                            description: book.abstract_name
                          }), {
                            footer: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-green-400"${_scopeId4}>${ssrInterpolate(book.authors)} - ${ssrInterpolate(book.publisher_name)} - ${ssrInterpolate(book.publisher_year)}</p><p${_scopeId4}><b${_scopeId4}>Category</b>: ${ssrInterpolate(book.resource_category_name)}</p><p${_scopeId4}><b${_scopeId4}>Language</b>: ${ssrInterpolate(book.resource_language_name)}</p><p${_scopeId4}><b${_scopeId4}>Type</b>: ${ssrInterpolate(book.resource_type_name)}</p><p${_scopeId4}><b${_scopeId4}>Country</b>: ${ssrInterpolate(book.country_name)}</p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Category"),
                                    createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Language"),
                                    createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Type"),
                                    createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Country"),
                                    createTextVNode(": " + toDisplayString(book.country_name), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(booksData), (book, index2) => {
                            return openBlock(), createBlock(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                              title: book.name,
                              description: book.abstract_name
                            }), {
                              footer: withCtx(() => [
                                createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                                createVNode("p", null, [
                                  createVNode("b", null, "Category"),
                                  createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("b", null, "Language"),
                                  createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("b", null, "Type"),
                                  createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("b", null, "Country"),
                                  createTextVNode(": " + toDisplayString(book.country_name), 1)
                                ])
                              ]),
                              _: 2
                            }, 1040, ["title", "description"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageGrid, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(booksData), (book, index2) => {
                          return openBlock(), createBlock(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                            title: book.name,
                            description: book.abstract_name
                          }), {
                            footer: withCtx(() => [
                              createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                              createVNode("p", null, [
                                createVNode("b", null, "Category"),
                                createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("b", null, "Language"),
                                createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("b", null, "Type"),
                                createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("b", null, "Country"),
                                createTextVNode(": " + toDisplayString(book.country_name), 1)
                              ])
                            ]),
                            _: 2
                          }, 1040, ["title", "description"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageSection, {
              title: "Posts",
              id: "posts"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageGrid, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(postsData), (book, index2) => {
                          _push4(ssrRenderComponent(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                            title: book.name,
                            description: book.abstract_name
                          }), {
                            footer: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-green-400"${_scopeId4}>${ssrInterpolate(book.authors)} - ${ssrInterpolate(book.publisher_name)} - ${ssrInterpolate(book.publisher_year)}</p><p${_scopeId4}><b${_scopeId4}>Category</b>: ${ssrInterpolate(book.resource_category_name)}</p><p${_scopeId4}><b${_scopeId4}>Language</b>: ${ssrInterpolate(book.resource_language_name)}</p><p${_scopeId4}><b${_scopeId4}>Type</b>: ${ssrInterpolate(book.resource_type_name)}</p><p${_scopeId4}><b${_scopeId4}>Country</b>: ${ssrInterpolate(book.country_name)}</p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Category"),
                                    createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Language"),
                                    createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Type"),
                                    createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Country"),
                                    createTextVNode(": " + toDisplayString(book.country_name), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(postsData), (book, index2) => {
                            return openBlock(), createBlock(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                              title: book.name,
                              description: book.abstract_name
                            }), {
                              footer: withCtx(() => [
                                createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                                createVNode("p", null, [
                                  createVNode("b", null, "Category"),
                                  createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("b", null, "Language"),
                                  createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("b", null, "Type"),
                                  createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("b", null, "Country"),
                                  createTextVNode(": " + toDisplayString(book.country_name), 1)
                                ])
                              ]),
                              _: 2
                            }, 1040, ["title", "description"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageGrid, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(postsData), (book, index2) => {
                          return openBlock(), createBlock(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                            title: book.name,
                            description: book.abstract_name
                          }), {
                            footer: withCtx(() => [
                              createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                              createVNode("p", null, [
                                createVNode("b", null, "Category"),
                                createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("b", null, "Language"),
                                createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("b", null, "Type"),
                                createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("b", null, "Country"),
                                createTextVNode(": " + toDisplayString(book.country_name), 1)
                              ])
                            ]),
                            _: 2
                          }, 1040, ["title", "description"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageSection, {
              title: "Dissertations",
              id: "dissertations"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageGrid, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(dissertationsData), (book, index2) => {
                          _push4(ssrRenderComponent(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                            title: book.name,
                            description: book.abstract_name
                          }), {
                            footer: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-green-400"${_scopeId4}>${ssrInterpolate(book.authors)} - ${ssrInterpolate(book.publisher_name)} - ${ssrInterpolate(book.publisher_year)}</p><p${_scopeId4}><b${_scopeId4}>Category</b>: ${ssrInterpolate(book.resource_category_name)}</p><p${_scopeId4}><b${_scopeId4}>Language</b>: ${ssrInterpolate(book.resource_language_name)}</p><p${_scopeId4}><b${_scopeId4}>Type</b>: ${ssrInterpolate(book.resource_type_name)}</p><p${_scopeId4}><b${_scopeId4}>Country</b>: ${ssrInterpolate(book.country_name)}</p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Category"),
                                    createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Language"),
                                    createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Type"),
                                    createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Country"),
                                    createTextVNode(": " + toDisplayString(book.country_name), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(dissertationsData), (book, index2) => {
                            return openBlock(), createBlock(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                              title: book.name,
                              description: book.abstract_name
                            }), {
                              footer: withCtx(() => [
                                createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                                createVNode("p", null, [
                                  createVNode("b", null, "Category"),
                                  createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("b", null, "Language"),
                                  createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("b", null, "Type"),
                                  createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("b", null, "Country"),
                                  createTextVNode(": " + toDisplayString(book.country_name), 1)
                                ])
                              ]),
                              _: 2
                            }, 1040, ["title", "description"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageGrid, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(dissertationsData), (book, index2) => {
                          return openBlock(), createBlock(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                            title: book.name,
                            description: book.abstract_name
                          }), {
                            footer: withCtx(() => [
                              createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                              createVNode("p", null, [
                                createVNode("b", null, "Category"),
                                createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("b", null, "Language"),
                                createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("b", null, "Type"),
                                createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("b", null, "Country"),
                                createTextVNode(": " + toDisplayString(book.country_name), 1)
                              ])
                            ]),
                            _: 2
                          }, 1040, ["title", "description"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageHero, { title: "UNILibrary" }),
              createVNode(_component_UPageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_UNavigationMenu, {
                    items: unref(items),
                    class: "mx-auto"
                  }, null, 8, ["items"])
                ]),
                _: 1
              }),
              createVNode(_component_UPageSection, {
                title: "Books",
                id: "books"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UPageGrid, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(booksData), (book, index2) => {
                        return openBlock(), createBlock(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                          title: book.name,
                          description: book.abstract_name
                        }), {
                          footer: withCtx(() => [
                            createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                            createVNode("p", null, [
                              createVNode("b", null, "Category"),
                              createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("b", null, "Language"),
                              createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("b", null, "Type"),
                              createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("b", null, "Country"),
                              createTextVNode(": " + toDisplayString(book.country_name), 1)
                            ])
                          ]),
                          _: 2
                        }, 1040, ["title", "description"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UPageSection, {
                title: "Posts",
                id: "posts"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UPageGrid, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(postsData), (book, index2) => {
                        return openBlock(), createBlock(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                          title: book.name,
                          description: book.abstract_name
                        }), {
                          footer: withCtx(() => [
                            createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                            createVNode("p", null, [
                              createVNode("b", null, "Category"),
                              createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("b", null, "Language"),
                              createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("b", null, "Type"),
                              createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("b", null, "Country"),
                              createTextVNode(": " + toDisplayString(book.country_name), 1)
                            ])
                          ]),
                          _: 2
                        }, 1040, ["title", "description"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UPageSection, {
                title: "Dissertations",
                id: "dissertations"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UPageGrid, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(dissertationsData), (book, index2) => {
                        return openBlock(), createBlock(_component_UPageCard, mergeProps({ key: index2 }, { ref_for: true }, book, {
                          title: book.name,
                          description: book.abstract_name
                        }), {
                          footer: withCtx(() => [
                            createVNode("p", { class: "text-green-400" }, toDisplayString(book.authors) + " - " + toDisplayString(book.publisher_name) + " - " + toDisplayString(book.publisher_year), 1),
                            createVNode("p", null, [
                              createVNode("b", null, "Category"),
                              createTextVNode(": " + toDisplayString(book.resource_category_name), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("b", null, "Language"),
                              createTextVNode(": " + toDisplayString(book.resource_language_name), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("b", null, "Type"),
                              createTextVNode(": " + toDisplayString(book.resource_type_name), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("b", null, "Country"),
                              createTextVNode(": " + toDisplayString(book.country_name), 1)
                            ])
                          ]),
                          _: 2
                        }, 1040, ["title", "description"]);
                      }), 128))
                    ]),
                    _: 1
                  })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UnilibraryMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "UnilibraryMain" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UnilibraryMain = __nuxt_component_0;
  _push(ssrRenderComponent(_component_UnilibraryMain, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/unilibrary/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-r8dHxyne.mjs.map
