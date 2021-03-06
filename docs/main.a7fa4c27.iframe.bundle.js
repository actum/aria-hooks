(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    134: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function () {
        return HiddenInfo;
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function () {
          return Backdrop;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return StyledBtn;
        });
      __webpack_require__(12), __webpack_require__(73);
      var _templateObject,
        _templateObject2,
        _templateObject3,
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(37),
        _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      var HiddenInfo = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.span(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteralLoose([
              '\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n',
            ]))
        ),
        Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteralLoose([
              '\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  display: ',
              ';\n  align-items: center;\n  justify-content: center;\n  background: ',
              ";\n  z-index: 1000;\n\n  &[aria-hidden='true'] {\n    display: none;\n  }\n",
            ])),
          function (props) {
            return props.hidden ? 'none' : 'flex';
          },
          _variables__WEBPACK_IMPORTED_MODULE_3__.b.backdropMaskColor
        ),
        StyledBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.button(
          _templateObject3 ||
            (_templateObject3 = _taggedTemplateLiteralLoose([
              "\n  font-family: 'Roboto', sans-serif;\n  font-size: ",
              ';\n  border-radius: ',
              ';\n  padding: ',
              ';\n  font-weight: ',
              ';\n  outline: none;\n  border: ',
              ' solid ',
              ';\n  display: inline-block;\n  transition-property: ',
              ';\n  transition-timing-function: ',
              ';\n  transition-duration: ',
              ';\n\n  color: ',
              ';\n  background: ',
              ';\n\n  &--disabled {\n    pointer-events: none;\n    opacity: 0.65;\n  }\n\n  &:hover {\n    cursor: pointer;\n    ',
              '\n    ',
              '\n  }\n\n  &:focus {\n    box-shadow: ',
              ';\n\n    /* If focusBorderColor exist, asign it */\n    ',
              '\n  }\n\n  &:hover,\n  &:focus {\n    .btn__icon {\n      transform: translateX(',
              ');\n    }\n  }\n\n  .btn__icon {\n    vertical-align: middle;\n    margin-left: ',
              ';\n    transition-timing-function: ',
              ';\n    transition-duration: ',
              ';\n\n    ',
              ';\n  }\n',
            ])),
          _variables__WEBPACK_IMPORTED_MODULE_3__.c.m,
          _variables__WEBPACK_IMPORTED_MODULE_3__.a.roundedFull,
          _variables__WEBPACK_IMPORTED_MODULE_3__.e.defaultButtonPadding,
          _variables__WEBPACK_IMPORTED_MODULE_3__.d.bold,
          _variables__WEBPACK_IMPORTED_MODULE_3__.a.defaultWidth,
          function (props) {
            return props.theme.borderColor;
          },
          _variables__WEBPACK_IMPORTED_MODULE_3__.f.buttonProperties,
          _variables__WEBPACK_IMPORTED_MODULE_3__.f.timingFunction,
          _variables__WEBPACK_IMPORTED_MODULE_3__.f.defaultDuration,
          function (props) {
            return props.theme.color;
          },
          function (props) {
            return props.theme.background;
          },
          function (props) {
            return props.theme.hoverBackground
              ? 'background:' + props.theme.hoverBackground
              : '';
          },
          function (props) {
            return props.theme.hoverBorderColor
              ? 'border-color:' + props.theme.hoverBorderColor
              : '';
          },
          function (props) {
            return props.theme.isDarkMode
              ? _variables__WEBPACK_IMPORTED_MODULE_3__.a.focusOutlineDarkMode
              : _variables__WEBPACK_IMPORTED_MODULE_3__.a.focusOutlineLightMode;
          },
          function (props) {
            return props.theme.focusBorderColor
              ? 'border-color:' + props.theme.focusBorderColor
              : '';
          },
          _variables__WEBPACK_IMPORTED_MODULE_3__.e['spacer-1'],
          _variables__WEBPACK_IMPORTED_MODULE_3__.e['spacer-6'],
          _variables__WEBPACK_IMPORTED_MODULE_3__.f.timingFunction,
          _variables__WEBPACK_IMPORTED_MODULE_3__.f.defaultDuration,
          function (props) {
            return props.theme.svgColor
              ? 'fill:' + props.theme.svgColor
              : 'fill: currentColor';
          }
        );
    },
    168: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(20),
        __webpack_require__(131),
        __webpack_require__(4),
        __webpack_require__(7),
        __webpack_require__(0);
      var storybook_dark_mode__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(203),
        _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(134),
        _themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(202),
        _variables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(17),
        _excluded = ['variation', 'children'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Button = function Button(_ref) {
        var _ref$variation = _ref.variation,
          variation = void 0 === _ref$variation ? 'primary' : _ref$variation,
          children = _ref.children,
          rest = _objectWithoutProperties(_ref, _excluded);
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
          _shared__WEBPACK_IMPORTED_MODULE_6__.c,
          Object.assign(
            {
              theme: Object.assign(
                {},
                _themes__WEBPACK_IMPORTED_MODULE_7__.a[variation],
                {
                  isDarkMode: Object(
                    storybook_dark_mode__WEBPACK_IMPORTED_MODULE_5__.useDarkMode
                  )(),
                }
              ),
            },
            rest,
            {
              children: [
                children,
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                  'svg',
                  {
                    width: _variables__WEBPACK_IMPORTED_MODULE_8__.c.xl,
                    height: _variables__WEBPACK_IMPORTED_MODULE_8__.c.xl,
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg',
                    className: 'icon btn__icon',
                    children: Object(
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx
                    )('path', {
                      d: 'M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z',
                    }),
                  }
                ),
              ],
            }
          )
        );
      };
      (Button.displayName = 'Button'), (__webpack_exports__.a = Button);
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              variation: {
                defaultValue: { value: 'primary' },
                description: '',
                name: 'variation',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"unique"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/styles/components/Button.tsx#Button'
            ] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/styles/components/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    202: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return btnThemes;
      }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return lightTheme;
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return darkTheme;
        });
      var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5),
        btnThemes = {
          primary: {
            color: _variables__WEBPACK_IMPORTED_MODULE_0__.b.white,
            background: _variables__WEBPACK_IMPORTED_MODULE_0__.b.black,
            borderColor: _variables__WEBPACK_IMPORTED_MODULE_0__.b.transparent,
            hoverBackground: _variables__WEBPACK_IMPORTED_MODULE_0__.b.red,
          },
          secondary: {
            color: _variables__WEBPACK_IMPORTED_MODULE_0__.b.primary,
            background: _variables__WEBPACK_IMPORTED_MODULE_0__.b.transparent,
            borderColor: _variables__WEBPACK_IMPORTED_MODULE_0__.b.primary,
            svgColor: _variables__WEBPACK_IMPORTED_MODULE_0__.b.red,
            hoverBorderColor: _variables__WEBPACK_IMPORTED_MODULE_0__.b.unique,
            focusBorderColor: _variables__WEBPACK_IMPORTED_MODULE_0__.b.primary,
          },
          unique: {
            color: _variables__WEBPACK_IMPORTED_MODULE_0__.b.white,
            background: _variables__WEBPACK_IMPORTED_MODULE_0__.b.red,
            borderColor: _variables__WEBPACK_IMPORTED_MODULE_0__.b.transparent,
          },
        },
        lightTheme = {
          isDarkTheme: !1,
          textColor: _variables__WEBPACK_IMPORTED_MODULE_0__.b.black,
          primaryBackground: _variables__WEBPACK_IMPORTED_MODULE_0__.b.white,
          secondaryBackground: _variables__WEBPACK_IMPORTED_MODULE_0__.b.gray,
        },
        darkTheme = {
          isDarkTheme: !0,
          textColor: _variables__WEBPACK_IMPORTED_MODULE_0__.b.white,
          primaryBackground:
            _variables__WEBPACK_IMPORTED_MODULE_0__.b.primaryDark,
          secondaryBackground:
            _variables__WEBPACK_IMPORTED_MODULE_0__.b.secondaryDark,
        };
    },
    262: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return modal_useAriaModal;
      });
      var react = __webpack_require__(0),
        constants = __webpack_require__(39),
        focus_trap_esm = __webpack_require__(549);
      var focussableElements =
          'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        focusTrapFactory_FocusTrapFactory = function FocusTrapFactory(
          _container
        ) {
          var _this = this;
          !(function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError('Cannot call a class as a function');
          })(this, FocusTrapFactory),
            (this.container = void 0),
            (this.focusTrap = void 0),
            (this.mount = function () {
              var container =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : _this.container,
                firstFocusableEl = container.querySelector(focussableElements);
              (_this.focusTrap = Object(focus_trap_esm.a)(container, {
                preventScroll: !0,
                fallbackFocus: firstFocusableEl,
              })),
                _this.focusTrap.activate();
            }),
            (this.destroy = function () {
              var _this$focusTrap;
              return null === (_this$focusTrap = _this.focusTrap) ||
                void 0 === _this$focusTrap
                ? void 0
                : _this$focusTrap.deactivate();
            }),
            (this.container = _container);
        };
      var controller_ModalController = function ModalController(onDismiss, id) {
          var _this = this;
          !(function controller_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError('Cannot call a class as a function');
          })(this, ModalController),
            (this.focusTrap = void 0),
            (this.modalRef = void 0),
            (this.isOpen = void 0),
            (this.onDismiss = void 0),
            (this.id = void 0),
            (this.setModalRef = function (modal) {
              return (_this.modalRef = modal);
            }),
            (this.onOpen = function () {
              _this.isOpen ||
                ((_this.modalRef || document.getElementById(_this.id)) &&
                  ((_this.focusTrap = new focusTrapFactory_FocusTrapFactory(
                    _this.modalRef
                  )),
                  _this.focusTrap.mount()),
                window.addEventListener('keydown', _this.handleKeyPress),
                window.addEventListener('touchstart', _this.handleClick),
                window.addEventListener('mousedown', _this.handleClick),
                (_this.isOpen = !0));
            }),
            (this.onClose = function () {
              var _this$focusTrap, _this$onDismiss;
              _this.isOpen &&
                (null === (_this$focusTrap = _this.focusTrap) ||
                  void 0 === _this$focusTrap ||
                  _this$focusTrap.destroy(),
                window.removeEventListener('keydown', _this.handleKeyPress),
                window.removeEventListener('touchstart', _this.handleClick),
                window.removeEventListener('mousedown', _this.handleClick),
                null === (_this$onDismiss = _this.onDismiss) ||
                  void 0 === _this$onDismiss ||
                  _this$onDismiss.call(_this),
                (_this.isOpen = !1));
            }),
            (this.handleKeyPress = function (ev) {
              'Escape' === ev.key && (ev.stopPropagation(), _this.onClose());
            }),
            (this.handleClick = function (e) {
              _this.modalRef.contains(e.target) || _this.onClose();
            }),
            (this.onDismiss = onDismiss),
            (this.id = id);
        },
        getDescriptionId = function getDescriptionId(id) {
          return id + '__description';
        },
        modal_useAriaModal = function useAriaModal(_ref) {
          var isOpen = _ref.isOpen,
            onDismiss = _ref.onDismiss,
            dialogLabel = _ref.dialogLabel,
            closeLabel = _ref.closeLabel,
            id = _ref.id,
            controller = Object(react.useRef)(
              new controller_ModalController(onDismiss, id)
            );
          Object(react.useEffect)(
            function () {
              isOpen
                ? controller.current.onOpen()
                : controller.current.onClose();
            },
            [isOpen]
          );
          var modalProps = Object(react.useMemo)(
              function () {
                var _ref2;
                return (
                  ((_ref2 = {
                    'aria-modal': !0,
                    role: 'dialog',
                    'aria-label': dialogLabel,
                  })[constants.d] = !isOpen),
                  (_ref2[constants.b] = getDescriptionId(id)),
                  (_ref2.id = id),
                  (_ref2.ref = controller.current.setModalRef),
                  (_ref2.tabIndex = -1),
                  _ref2
                );
              },
              [isOpen, id, dialogLabel]
            ),
            closeButtonProps = Object(react.useMemo)(
              function () {
                return {
                  'aria-label': closeLabel || 'Close modal',
                  onClick: function onClick() {
                    return controller.current.onClose();
                  },
                };
              },
              [closeLabel]
            ),
            descriptionTextProps = Object(react.useMemo)(
              function () {
                return { id: getDescriptionId(id) };
              },
              [id]
            );
          return Object(react.useMemo)(
            function () {
              return {
                modalProps: modalProps,
                closeButtonProps: closeButtonProps,
                descriptionTextProps: descriptionTextProps,
              };
            },
            [modalProps, closeButtonProps, descriptionTextProps]
          );
        };
    },
    39: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'd', function () {
        return ARIA_HIDDEN;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return ARIA_DESCRIBEDBY;
        }),
        __webpack_require__.d(__webpack_exports__, 'e', function () {
          return ARIA_LABELLEDBY;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return ARIA_EXPANDED;
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function () {
          return ARIA_CONTROLS;
        }),
        __webpack_require__.d(__webpack_exports__, 'f', function () {
          return ARIA_SELECTED;
        });
      var ARIA_HIDDEN = 'aria-hidden',
        ARIA_DESCRIBEDBY = 'aria-describedby',
        ARIA_LABELLEDBY = 'aria-labelledby',
        ARIA_EXPANDED = 'aria-expanded',
        ARIA_CONTROLS = 'aria-controls',
        ARIA_SELECTED = 'aria-selected';
    },
    5: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function () {
        return colors;
      }),
        __webpack_require__.d(__webpack_exports__, 'f', function () {
          return transitions;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return fontSizes;
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function () {
          return fontWeights;
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function () {
          return borders;
        }),
        __webpack_require__.d(__webpack_exports__, 'e', function () {
          return spacers;
        });
      __webpack_require__(7);
      for (
        var colors = {
            red: '#d93c31',
            black: '#2e2d2c',
            blue: '#1459db',
            gray: '#ededed',
            white: 'white',
            unique: 'red',
            primary: 'black',
            backdropMaskColor: '#0009',
            transparent: 'transparent',
            primaryDark: '#2f2f2f',
            secondaryDark: '#212121',
          },
          transitions = {
            defaultDuration: ' .2s',
            timingFunction: ' cubic-bezier(0.39, 0.575, 0.565, 1)',
            buttonProperties: 'color, border, background-color, box-shadow',
          },
          fontSizes = {
            xs: '0.8rem',
            s: '0.9rem',
            m: '1rem',
            l: '1.2rem',
            xl: '1.4rem',
            xxl: '2rem',
            xxxl: '2.4rem',
          },
          fontWeights = { normal: '400', bold: '700' },
          borders = {
            lightBorder: '1px solid #dbdbdb',
            focusOutlineLightMode: '0 0 0 0.15rem ' + colors.blue,
            focusOutlineDarkMode: '0 0 0 0.15rem ' + colors.white,
            defaultWidth: '1px',
            wide: '2px',
            roundedFull: '1000px',
          },
          spacers = { defaultButtonPadding: '11px 15px 11px 30px' },
          i = 0;
        i < 17;
        i++
      ) {
        var _Object$assign;
        spacers = Object.assign(
          {},
          spacers,
          (((_Object$assign = {})['spacer-' + i] = 4 * i + 'px'),
          _Object$assign)
        );
      }
    },
    513: function (module, exports, __webpack_require__) {
      var map = {
        './hooks/accordion/accordion.stories.mdx': 955,
        './hooks/drawer/drawer.stories.mdx': 963,
        './hooks/listbox/listbox.stories.mdx': 958,
        './hooks/modal/modal.stories.mdx': 964,
        './hooks/navigation/menubar.stories.mdx': 959,
        './hooks/tabs/tabs.stories.mdx': 956,
        './hooks/tooltip/tooltip.stories.mdx': 960,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 513);
    },
    542: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/logo-actum-black.67eb1e35.svg';
    },
    543: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/logo-actum-white.b1ba1db1.svg';
    },
    553: function (module, exports, __webpack_require__) {
      __webpack_require__(554),
        __webpack_require__(712),
        __webpack_require__(713),
        __webpack_require__(961),
        __webpack_require__(954),
        __webpack_require__(965),
        __webpack_require__(966),
        __webpack_require__(962),
        __webpack_require__(957),
        (module.exports = __webpack_require__(951));
    },
    621: function (module, exports) {},
    713: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(397);
    },
    951: function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0, __webpack_require__(397).configure)(
          [
            __webpack_require__(513),
            __webpack_require__(513),
            __webpack_require__(952),
          ],
          module,
          !1
        );
      }.call(this, __webpack_require__(231)(module)));
    },
    952: function (module, exports) {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = function () {
        return [];
      }),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (module.exports = webpackEmptyContext),
        (webpackEmptyContext.id = 952);
    },
    955: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(20),
        __webpack_require__(131),
        __webpack_require__(4),
        __webpack_require__(7);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        esm = __webpack_require__(2),
        dist_esm = __webpack_require__(28),
        constants =
          (__webpack_require__(25),
          __webpack_require__(85),
          __webpack_require__(10),
          __webpack_require__(8),
          __webpack_require__(18),
          __webpack_require__(13),
          __webpack_require__(14),
          __webpack_require__(15),
          __webpack_require__(12),
          __webpack_require__(9),
          __webpack_require__(21),
          __webpack_require__(39));
      __webpack_require__(54),
        __webpack_require__(65),
        __webpack_require__(159);
      var AccordionController = function AccordionController(id) {
        var _this = this;
        !(function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor))
            throw new TypeError('Cannot call a class as a function');
        })(this, AccordionController),
          (this.accordionRef = void 0),
          (this.id = void 0),
          (this.setActivity = function (isActive, setIsActive) {
            var accordion =
              _this.accordionRef || document.querySelector(_this.id);
            Array.from(accordion.querySelectorAll('.acc_btn')).includes(
              document.activeElement
            ) && !isActive
              ? setIsActive(!0)
              : setIsActive(!1);
          }),
          (this.onActive = function () {
            window.addEventListener('keydown', _this.handleKeyPress);
          }),
          (this.onInactive = function () {
            window.removeEventListener('keydown', _this.handleKeyPress);
          }),
          (this.setAccRef = function (accordion) {
            _this.accordionRef = accordion;
          }),
          (this.getFocusedIndex = function () {
            if (!_this.accordionRef) return -1;
            var items = Array.from(
              _this.accordionRef.querySelectorAll('.acc_btn')
            );
            return items
              ? items.findIndex(function (item) {
                  return item.isSameNode(document.activeElement);
                })
              : -1;
          }),
          (this.changeFocusToItem = function (item) {
            var _items$index,
              accordion =
                _this.accordionRef || document.querySelector(_this.id),
              items = Array.from(accordion.querySelectorAll('.acc_btn')),
              index = _this.getFocusedIndex();
            'last' === item
              ? (index = items.length - 1)
              : 'first' === item
              ? (index = 0)
              : 'next' === item
              ? (index = index === items.length - 1 ? 0 : index + 1)
              : 'prev' === item &&
                (index = index <= 0 ? items.length - 1 : index - 1),
              null === (_items$index = items[index]) ||
                void 0 === _items$index ||
                _items$index.focus();
          }),
          (this.handleVisibilityChange = function (e) {
            var accordion =
                _this.accordionRef || document.querySelector(_this.id),
              accBtn = e.target;
            if (
              Array.from(accordion.querySelectorAll('.acc_btn')).includes(
                accBtn
              )
            ) {
              var accPanel = document.querySelector(
                '#' + accBtn.getAttribute('aria-controls')
              );
              'none' !== accPanel.style.display
                ? ((accPanel.style.display = 'none'),
                  accBtn.setAttribute('aria-expanded', 'false'))
                : ((accPanel.style.display = 'block'),
                  accBtn.setAttribute('aria-expanded', 'true'));
            }
          }),
          (this.handleKeyPress = function (e) {
            switch (e.key) {
              case 'ArrowDown':
                e.preventDefault(), _this.changeFocusToItem('next');
                break;
              case 'ArrowUp':
                e.preventDefault(), _this.changeFocusToItem('prev');
                break;
              case 'Home':
                e.preventDefault(), _this.changeFocusToItem('first');
                break;
              case 'End':
                e.preventDefault(), _this.changeFocusToItem('last');
            }
          }),
          (this.id = id);
      };
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var _templateObject,
        _templateObject2,
        _templateObject3,
        items = [
          {
            title: 'Accordion 1',
            id: '1',
            content:
              'Lorem ipsum dolorlit. Ducimus facere possimus necessitatibus voluptates voluptas assumenda!',
            isOpen: !0,
          },
          {
            title: 'Accordion 2',
            id: '2',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. facere possimus necessitatibus. Ducimus facere possimus necessitatibus voluptates voluptas assumenda!',
            isOpen: !1,
          },
          {
            title: 'Accordion 3',
            id: '3',
            content:
              'Lorem ipsum dolor. facere possimus necessitatibus voluptates voluptas assumenda!',
            isOpen: !1,
          },
        ],
        styled_components_browser_esm =
          (__webpack_require__(73), __webpack_require__(37)),
        variables = __webpack_require__(5);
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      var Container = styled_components_browser_esm.b.div(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteralLoose([
              '\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-inline: auto;\n\n  text-align: left;\n',
            ]))
        ),
        StyledTabBtn = styled_components_browser_esm.b.button(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteralLoose([
              '\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: ',
              ';\n  padding: ',
              ';\n\n  background-color: ',
              ';\n  color: ',
              ';\n  font-weight: ',
              ';\n  font-size: ',
              ';\n  outline: none;\n  cursor: pointer;\n  border: ',
              ' solid ',
              ';\n\n  transition-property: ',
              ';\n  transition-timing-function: ',
              ';\n  transition-duration: ',
              ';\n\n  &:hover {\n    color: ',
              ';\n    border-color: ',
              ';\n  }\n\n  &:focus {\n    box-shadow: ',
              ";\n  }\n\n  &[aria-expanded='true'] {\n    margin-bottom: 0;\n    .btn__icon {\n      transform: rotate(-90deg);\n    }\n  }\n\n  .btn__icon {\n    vertical-align: middle;\n    margin-left: ",
              ';\n\n    fill: ',
              ';\n    transform: rotate(90deg);\n  }\n',
            ])),
          variables.e['spacer-2'],
          variables.e.defaultButtonPadding,
          function (props) {
            return props.theme.secondaryBackground;
          },
          function (props) {
            return props.theme.textColor;
          },
          variables.d.bold,
          variables.c.m,
          variables.a.defaultWidth,
          variables.b.black,
          variables.f.buttonProperties,
          variables.f.timingFunction,
          variables.f.defaultDuration,
          variables.b.red,
          variables.b.red,
          function (props) {
            return props.theme.isDarkTheme
              ? variables.a.focusOutlineDarkMode
              : variables.a.focusOutlineLightMode;
          },
          variables.e['spacer-6'],
          variables.b.red
        ),
        StyledPanel = styled_components_browser_esm.b.div(
          _templateObject3 ||
            (_templateObject3 = _taggedTemplateLiteralLoose([
              '\n  width: 100%;\n  padding: ',
              ' ',
              ';\n\n  font-size: ',
              ';\n  color: ',
              ';\n',
            ])),
          variables.e['spacer-3'],
          variables.e['spacer-4'],
          variables.c.m,
          function (props) {
            return props.theme.textColor;
          }
        ),
        jsx_runtime = __webpack_require__(17),
        accordion_component_Accordion = function Accordion() {
          var _useAriaAccordion = (function useAriaAccordion(_ref) {
              var id = _ref.id,
                getId = function getId(prefix, id) {
                  return prefix + '_' + id;
                },
                controller = Object(react.useRef)(new AccordionController(id)),
                _useState2 = _slicedToArray(Object(react.useState)(!1), 2),
                isActive = _useState2[0],
                setIsActive = _useState2[1],
                setActivity = function setActivity() {
                  controller.current.setActivity(isActive, setIsActive);
                };
              Object(react.useEffect)(function () {
                return (
                  window.addEventListener('focusin', setActivity),
                  window.addEventListener(
                    'click',
                    controller.current.handleVisibilityChange
                  ),
                  function () {
                    window.removeEventListener('focusin', setActivity);
                  }
                );
              }, []),
                Object(react.useEffect)(
                  function () {
                    isActive
                      ? controller.current.onActive()
                      : controller.current.onInactive();
                  },
                  [isActive]
                );
              var accordionProps = Object(react.useMemo)(function () {
                  return { id: id, ref: controller.current.setAccRef };
                }, []),
                buttonProps = Object(react.useCallback)(function (id) {
                  var _ref2,
                    expandedByDefault =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  return (
                    ((_ref2 = {})[constants.c] = expandedByDefault),
                    (_ref2[constants.a] = getId('acc_panel', id)),
                    (_ref2.id = getId('acc_btn', id)),
                    (_ref2.className = 'acc_btn'),
                    _ref2
                  );
                }, []),
                panelProps = Object(react.useCallback)(function (
                  id,
                  isOpenByDefault
                ) {
                  var _ref3;
                  return (
                    ((_ref3 = {})[constants.e] = getId('acc_btn', id)),
                    (_ref3.id = getId('acc_panel', id)),
                    (_ref3.style = {
                      display: isOpenByDefault ? 'block' : 'none',
                    }),
                    (_ref3.className = 'acc_panel'),
                    _ref3
                  );
                },
                []);
              return Object(react.useMemo)(
                function () {
                  return {
                    accordionProps: accordionProps,
                    panelProps: panelProps,
                    buttonProps: buttonProps,
                  };
                },
                [accordionProps, panelProps, buttonProps]
              );
            })({ id: 'Accordion1' }),
            accordionProps = _useAriaAccordion.accordionProps,
            buttonProps = _useAriaAccordion.buttonProps,
            panelProps = _useAriaAccordion.panelProps;
          return Object(jsx_runtime.jsx)(
            Container,
            Object.assign({}, accordionProps, {
              children: items.map(function (item) {
                return Object(jsx_runtime.jsxs)(
                  react_default.a.Fragment,
                  {
                    children: [
                      Object(jsx_runtime.jsxs)(
                        StyledTabBtn,
                        Object.assign(
                          { className: 'acc_button' },
                          buttonProps(item.id, item.isOpen),
                          {
                            children: [
                              item.title,
                              Object(jsx_runtime.jsx)('svg', {
                                width: '20px',
                                height: '20px',
                                viewBox: '0 0 24 24',
                                xmlns: 'http://www.w3.org/2000/svg',
                                className: 'icon btn__icon',
                                children: Object(jsx_runtime.jsx)('path', {
                                  d: 'M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z',
                                }),
                              }),
                            ],
                          }
                        )
                      ),
                      Object(jsx_runtime.jsx)(
                        StyledPanel,
                        Object.assign({}, panelProps(item.id, item.isOpen), {
                          children: item.content,
                        })
                      ),
                    ],
                  },
                  item.id
                );
              }),
            })
          );
        };
      accordion_component_Accordion.displayName = 'Accordion';
      var AccordionHookProps = function AccordionHookProps() {
          return null;
        },
        AccordionHookReturnProps = function AccordionHookReturnProps() {
          return null;
        };
      try {
        (accordion_component_Accordion.displayName = 'Accordion'),
          (accordion_component_Accordion.__docgenInfo = {
            description: '',
            displayName: 'Accordion',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/accordion/accordion.component.tsx#Accordion'
            ] = {
              docgenInfo: accordion_component_Accordion.__docgenInfo,
              name: 'Accordion',
              path: 'src/hooks/accordion/accordion.component.tsx#Accordion',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (AccordionHookProps.displayName = 'AccordionHookProps'),
          (AccordionHookProps.__docgenInfo = {
            description: '',
            displayName: 'AccordionHookProps',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/accordion/accordion.component.tsx#AccordionHookProps'
            ] = {
              docgenInfo: AccordionHookProps.__docgenInfo,
              name: 'AccordionHookProps',
              path: 'src/hooks/accordion/accordion.component.tsx#AccordionHookProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (AccordionHookReturnProps.displayName = 'AccordionHookReturnProps'),
          (AccordionHookReturnProps.__docgenInfo = {
            description: '',
            displayName: 'AccordionHookReturnProps',
            props: {
              accordionProps: {
                defaultValue: null,
                description: '',
                name: 'accordionProps',
                required: !0,
                type: { name: '{ id: string; }' },
              },
              buttonProps: {
                defaultValue: null,
                description: '',
                name: 'buttonProps',
                required: !0,
                type: {
                  name: '(id: string, expandedByDefault?: boolean) => { id: string; className: string; "aria-expanded": boolean; "aria-controls": string; }',
                },
              },
              panelProps: {
                defaultValue: null,
                description: '',
                name: 'panelProps',
                required: !0,
                type: {
                  name: '(id: string, isOpenByDefault: boolean) => { id: string; className: string; style: { display: string; }; "aria-labelledby": string; }',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/accordion/accordion.component.tsx#AccordionHookReturnProps'
            ] = {
              docgenInfo: AccordionHookReturnProps.__docgenInfo,
              name: 'AccordionHookReturnProps',
              path: 'src/hooks/accordion/accordion.component.tsx#AccordionHookReturnProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _excluded = ['components'];
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(dist_esm.d, {
            title: 'Aria Component/Accordion',
            mdxType: 'Meta',
          }),
          Object(esm.b)('h1', { id: 'accordion' }, 'Accordion'),
          Object(esm.b)(
            'p',
            null,
            'An accordion is a vertical stack of interactive headings used to toggle the display of further information.'
          ),
          Object(esm.b)(
            'p',
            null,
            "Each item can be 'collapsed' with just a short label visible or 'expanded' to show the full content."
          ),
          Object(esm.b)('h2', { id: 'example' }, 'Example'),
          Object(esm.b)(
            dist_esm.c,
            { mdxSource: '%0A%3CAccordion%20/%3E%0A', mdxType: 'Canvas' },
            Object(esm.b)(accordion_component_Accordion, {
              mdxType: 'Accordion',
            })
          ),
          Object(esm.b)('h2', { id: 'setup' }, 'Setup'),
          Object(esm.b)(
            'p',
            null,
            'The ',
            Object(esm.b)(
              'inlineCode',
              { parentName: 'p' },
              'useAriaAccordion'
            ),
            ' hook expects the following parameters:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: AccordionHookProps,
            sort: 'requiredFirst',
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)(
            'p',
            null,
            'The hook returns an object with the following values:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: AccordionHookReturnProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h2', { id: 'component' }, 'Component'),
          Object(esm.b)(
            'p',
            null,
            'In order to create a fully accessible implementation of an accordion, your component should look like the following:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-jsx' },
              "import { useAriaAccordion } from '@actum-digital/aria-hooks';\n\nconst items = [\n  {\n    title: 'Accordion 1',\n    id: '1',\n    content:\n      'Lorem ipsum dolorlit. Ducimus facere possimus necessitatibus voluptates voluptas assumenda!',\n    isOpen: true,\n  },\n  {\n    title: 'Accordion 2',\n    id: '2',\n    content:\n      'Lorem ipsum dolor sit amet consectetur adipisicing elit. facere possimus necessitatibus. Ducimus facere possimus necessitatibus voluptates voluptas assumenda!',\n    isOpen: false,\n  },\n  {\n    title: 'Accordion 3',\n    id: '3',\n    content:\n      'Lorem ipsum dolor. facere possimus necessitatibus voluptates voluptas assumenda!',\n    isOpen: false,\n  },\n];\n\nexport const Accordion = () => {\n  const { accordionProps, buttonProps, panelProps } = useAriaAccordion({\n    id: 'Accordion1',\n  });\n\n  return (\n    <div className=\"accordion__container\" {...accordionProps}>\n      {items.map((item) => (\n        <div key={item.id}>\n          <button {...buttonProps(item.id, item.isOpen)}>{item.title}</button>\n          <div {...panelProps(item.id, item.isOpen)}>{item.content}</div>\n        </div>\n      ))}\n    </div>\n  );\n};\n"
            )
          ),
          Object(esm.b)('h2', { id: 'styles' }, 'Styles'),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-css' },
              '.accordion__container {\n  display: flex;\n  flex-direction: column;\n}\n'
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Aria Component/Accordion',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(esm.b)(
                dist_esm.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(esm.b)(MDXContent, null)
              );
            },
          }
        ));
      __webpack_exports__.default = componentMeta;
    },
    956: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(20),
        __webpack_require__(131),
        __webpack_require__(4),
        __webpack_require__(7);
      var react = __webpack_require__(0),
        esm = __webpack_require__(2),
        dist_esm = __webpack_require__(28);
      __webpack_require__(25),
        __webpack_require__(85),
        __webpack_require__(10),
        __webpack_require__(8),
        __webpack_require__(18),
        __webpack_require__(13),
        __webpack_require__(14),
        __webpack_require__(15),
        __webpack_require__(12),
        __webpack_require__(9),
        __webpack_require__(21),
        __webpack_require__(54),
        __webpack_require__(65),
        __webpack_require__(130),
        __webpack_require__(34),
        __webpack_require__(159);
      var TabsController = function TabsController(id) {
        var _this = this;
        !(function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor))
            throw new TypeError('Cannot call a class as a function');
        })(this, TabsController),
          (this.tabsRef = void 0),
          (this.tabsId = void 0),
          (this.setActivity = function (isActive, setIsActive) {
            Array.from(_this.tabsRef.querySelectorAll('[role="tab"]')).includes(
              document.activeElement
            ) && !isActive
              ? setIsActive(!0)
              : setIsActive(!1);
          }),
          (this.onActive = function () {
            window.addEventListener('keydown', _this.handleKeyPress);
          }),
          (this.onInactive = function () {
            window.removeEventListener('keydown', _this.handleKeyPress);
          }),
          (this.setTabListRef = function (tabList) {
            _this.tabsRef = tabList || document.querySelector(_this.tabsId);
          }),
          (this.setStates = function () {
            var tabpanels = Array.from(
                _this.tabsRef.querySelectorAll('[role="tabpanel"]')
              ),
              tabs = Array.from(_this.tabsRef.querySelectorAll('[role="tab"]'));
            tabpanels.forEach(function (tabpanel) {
              tabpanel.getAttribute('aria-labelledby') ===
              document.activeElement.id
                ? (tabpanel.style.display = 'block')
                : (tabpanel.style.display = 'none');
            }),
              tabs.forEach(function (tab) {
                tab.id === document.activeElement.id
                  ? (tab.setAttribute('aria-selected', 'true'),
                    (tab.tabIndex = 0))
                  : ((tab.tabIndex = -1),
                    tab.setAttribute('aria-selected', 'false'));
              });
          }),
          (this.getIndex = function (targetItem) {
            if (void 0 === _this.tabsRef) return -1;
            var items = Array.from(
              _this.tabsRef.querySelectorAll('[role="tab"]')
            );
            return targetItem
              ? items.findIndex(function (item) {
                  return item.isSameNode(targetItem);
                })
              : items
              ? items.findIndex(function (item) {
                  return item.isSameNode(document.activeElement);
                })
              : -1;
          }),
          (this.changeFocusToItem = function (position, targetItem) {
            var _items$index,
              items = Array.from(
                _this.tabsRef.querySelectorAll('[role="tab"]')
              ),
              index = -1 === _this.getIndex() ? 0 : _this.getIndex();
            if ('last' === position) index = items.length - 1;
            else if ('first' === position) index = 0;
            else if ('next' === position)
              index = index === items.length - 1 ? 0 : index + 1;
            else if ('prev' === position)
              index = index <= 0 ? items.length - 1 : index - 1;
            else if ('custom' === position) {
              if (!targetItem) return;
              index = _this.getIndex(targetItem);
            }
            null === (_items$index = items[index]) ||
              void 0 === _items$index ||
              _items$index.focus(),
              _this.setStates();
          }),
          (this.handleMouseClick = function (e) {
            var items = Array.from(
                _this.tabsRef.querySelectorAll('[role="tab"]')
              ),
              targetEl = e.target;
            items.includes(targetEl) &&
              _this.changeFocusToItem('custom', targetEl);
          }),
          (this.handleKeyPress = function (e) {
            switch (e.key) {
              case 'ArrowRight':
                _this.changeFocusToItem('next');
                break;
              case 'ArrowLeft':
                _this.changeFocusToItem('prev');
                break;
              case 'Home':
                _this.changeFocusToItem('first');
                break;
              case 'End':
                _this.changeFocusToItem('last');
            }
          }),
          (this.tabsId = id);
      };
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      __webpack_require__(73);
      var _templateObject,
        _templateObject2,
        _templateObject3,
        styled_components_browser_esm = __webpack_require__(37),
        variables = __webpack_require__(5);
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      var StyledTabs = styled_components_browser_esm.b.div(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteralLoose([
              '\n  max-width: 400px;\n  margin-inline: auto;\n',
            ]))
        ),
        StyledTabList = styled_components_browser_esm.b.div(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteralLoose([
              '\n  display: flex;\n  justify-content: center;\n  width: 100%;\n\n  button {\n    padding: ',
              ';\n    flex-grow: 1;\n\n    font-size: ',
              ';\n    font-weight: ',
              ';\n    text-transform: capitalize;\n\n    background-color: ',
              ';\n    color: ',
              ';\n    border: 0;\n    border-bottom: ',
              ' solid ',
              ';\n    cursor: pointer;\n    outline: none;\n\n    &:hover {\n      background-color: ',
              ';\n    }\n\n    &:focus {\n      box-shadow: ',
              ";\n    }\n\n    &[aria-selected='true'] {\n      background-color: ",
              ';\n      border-color: ',
              ';\n    }\n  }\n',
            ])),
          variables.e['spacer-3'],
          variables.c.m,
          variables.d.bold,
          variables.b.transparent,
          function (props) {
            return props.theme.textColor;
          },
          variables.a.wide,
          variables.b.transparent,
          variables.b.red + '22',
          function (props) {
            return props.theme.isDarkTheme
              ? variables.a.focusOutlineDarkMode
              : variables.a.focusOutlineLightMode;
          },
          variables.b.red + '22',
          variables.b.red
        ),
        StyledTabPanel = styled_components_browser_esm.b.div(
          _templateObject3 ||
            (_templateObject3 = _taggedTemplateLiteralLoose([
              '\n  margin-top: ',
              ';\n\n  color: ',
              ';\n  outline: none;\n\n  &:focus {\n    box-shadow: ',
              ';\n  }\n\n  h2 {\n    font-size: ',
              ';\n  }\n  p {\n    font-size: ',
              ';\n  }\n',
            ])),
          variables.e['spacer-8'],
          function (props) {
            return props.theme.textColor;
          },
          function (props) {
            return props.theme.isDarkTheme
              ? variables.a.focusOutlineDarkMode
              : variables.a.focusOutlineLightMode;
          },
          variables.c.l,
          variables.c.m
        ),
        tabs = [
          {
            label: 'Tab 1',
            id: '1',
            content:
              'Eveniet, aut iste qui eum a maiores veniam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut iste qui eum a maiores veniam laborum provident ipsam vitae?',
          },
          {
            label: 'Tab 2',
            id: '2',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut iste qui eum a maiores veniam laborum provident ipsam vitae?',
          },
          {
            label: 'Tab 3',
            id: '3',
            content:
              'Upsum dolor sit amet consectetur adipisicing elit. Voluptate, vitae dolore laudantium aliquam natus iste obcaecati autem. Quam, nisi laboriosam!',
          },
        ],
        jsx_runtime = __webpack_require__(17),
        tabs_component_Tabs = function Tabs() {
          var _useAriaTabs = (function useAriaTabs(_ref) {
              var tablistLabel = _ref.tablistLabel,
                tabsId = _ref.tabsId,
                getId = function getId(prefix, id) {
                  return 'tabs' === prefix
                    ? id || 'tabs_container'
                    : prefix + '_' + id;
                },
                controller = Object(react.useRef)(
                  new TabsController(getId('tabs', tabsId))
                ),
                _useState2 = _slicedToArray(Object(react.useState)(!1), 2),
                isActive = _useState2[0],
                setIsActive = _useState2[1],
                setActivity = function setActivity() {
                  controller.current.setActivity(isActive, setIsActive);
                };
              Object(react.useEffect)(function () {
                return (
                  document.addEventListener('focusin', setActivity),
                  document.addEventListener(
                    'click',
                    controller.current.handleMouseClick
                  ),
                  function () {
                    document.removeEventListener('focusin', setActivity),
                      document.removeEventListener(
                        'click',
                        controller.current.handleMouseClick
                      );
                  }
                );
              }, []),
                Object(react.useEffect)(
                  function () {
                    isActive
                      ? controller.current.onActive()
                      : controller.current.onInactive();
                  },
                  [isActive]
                );
              var tabsProps = Object(react.useMemo)(function () {
                  return {
                    ref: controller.current.setTabListRef,
                    id: getId('tabs', tabsId),
                  };
                }, []),
                tablistProps = Object(react.useMemo)(function () {
                  return { role: 'tablist', 'aria-label': tablistLabel || '' };
                }, []),
                tabProps = Object(react.useCallback)(function (id, i) {
                  var focusedIndex = controller.current.getIndex();
                  return {
                    role: 'tab',
                    'aria-selected': 0 === i,
                    'aria-controls': getId('tabpanel', id),
                    id: getId('tab', id),
                    tabIndex:
                      (-1 === focusedIndex && 0 === i) || focusedIndex === i
                        ? 0
                        : -1,
                  };
                }, []),
                tabpanelProps = Object(react.useCallback)(function (id, i) {
                  return {
                    role: 'tabpanel',
                    'aria-labelledby': getId('tab', id),
                    tabIndex: 0,
                    id: getId('tabpanel', id),
                    style: { display: 0 === i ? 'block' : 'none' },
                  };
                }, []);
              return Object(react.useMemo)(
                function () {
                  return {
                    tabsProps: tabsProps,
                    tablistProps: tablistProps,
                    tabProps: tabProps,
                    tabpanelProps: tabpanelProps,
                  };
                },
                [tabsProps, tablistProps, tabProps, tabpanelProps]
              );
            })({}),
            tablistProps = _useAriaTabs.tablistProps,
            tabProps = _useAriaTabs.tabProps,
            tabpanelProps = _useAriaTabs.tabpanelProps,
            tabsProps = _useAriaTabs.tabsProps;
          return Object(jsx_runtime.jsxs)(
            StyledTabs,
            Object.assign({}, tabsProps, {
              children: [
                Object(jsx_runtime.jsx)(
                  StyledTabList,
                  Object.assign({}, tablistProps, {
                    className: 'tablist',
                    children: tabs.map(function (_ref, idx) {
                      var label = _ref.label,
                        id = _ref.id;
                      return Object(react.createElement)(
                        'button',
                        Object.assign({}, tabProps(id, idx), { key: id }),
                        label
                      );
                    }),
                  })
                ),
                tabs.map(function (_ref2, idx) {
                  var label = _ref2.label,
                    content = _ref2.content,
                    id = _ref2.id;
                  return Object(react.createElement)(
                    StyledTabPanel,
                    Object.assign({}, tabpanelProps(id, idx), {
                      key: id,
                      className: 'tabpanel',
                    }),
                    Object(jsx_runtime.jsx)('h2', { children: label }),
                    Object(jsx_runtime.jsx)('p', { children: content })
                  );
                }),
              ],
            })
          );
        };
      tabs_component_Tabs.displayName = 'Tabs';
      var tabs_component = tabs_component_Tabs,
        TabsHookProps = function TabsHookProps() {
          return null;
        },
        TabsHookReturnProps = function TabsHookReturnProps() {
          return null;
        };
      try {
        (tabs_component_Tabs.displayName = 'Tabs'),
          (tabs_component_Tabs.__docgenInfo = {
            description: '',
            displayName: 'Tabs',
            props: {
              tablistLabel: {
                defaultValue: null,
                description: '',
                name: 'tablistLabel',
                required: !1,
                type: { name: 'string' },
              },
              tabsId: {
                defaultValue: null,
                description: '',
                name: 'tabsId',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/hooks/tabs/tabs.component.tsx#Tabs'] =
              {
                docgenInfo: tabs_component_Tabs.__docgenInfo,
                name: 'Tabs',
                path: 'src/hooks/tabs/tabs.component.tsx#Tabs',
              });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (tabscomponent.displayName = 'tabscomponent'),
          (tabscomponent.__docgenInfo = {
            description: '',
            displayName: 'tabscomponent',
            props: {
              tablistLabel: {
                defaultValue: null,
                description: '',
                name: 'tablistLabel',
                required: !1,
                type: { name: 'string' },
              },
              tabsId: {
                defaultValue: null,
                description: '',
                name: 'tabsId',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/tabs/tabs.component.tsx#tabscomponent'
            ] = {
              docgenInfo: tabscomponent.__docgenInfo,
              name: 'tabscomponent',
              path: 'src/hooks/tabs/tabs.component.tsx#tabscomponent',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (TabsHookProps.displayName = 'TabsHookProps'),
          (TabsHookProps.__docgenInfo = {
            description: '',
            displayName: 'TabsHookProps',
            props: {
              tablistLabel: {
                defaultValue: null,
                description: '',
                name: 'tablistLabel',
                required: !1,
                type: { name: 'string' },
              },
              tabsId: {
                defaultValue: null,
                description: '',
                name: 'tabsId',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/tabs/tabs.component.tsx#TabsHookProps'
            ] = {
              docgenInfo: TabsHookProps.__docgenInfo,
              name: 'TabsHookProps',
              path: 'src/hooks/tabs/tabs.component.tsx#TabsHookProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (TabsHookReturnProps.displayName = 'TabsHookReturnProps'),
          (TabsHookReturnProps.__docgenInfo = {
            description: '',
            displayName: 'TabsHookReturnProps',
            props: {
              tabsProps: {
                defaultValue: null,
                description: '',
                name: 'tabsProps',
                required: !0,
                type: { name: '{ id: string; }' },
              },
              tablistProps: {
                defaultValue: null,
                description: '',
                name: 'tablistProps',
                required: !0,
                type: { name: '{ role: string; "aria-label": string; }' },
              },
              tabProps: {
                defaultValue: null,
                description: '',
                name: 'tabProps',
                required: !0,
                type: {
                  name: '(id: string, i: number) => { role: string; id: string; tabIndex: number; "aria-selected": boolean; "aria-controls": string; }',
                },
              },
              tabpanelProps: {
                defaultValue: null,
                description: '',
                name: 'tabpanelProps',
                required: !0,
                type: {
                  name: '(id: string, i: number) => { role: string; tabIndex: number; id: string; style: { display: string; }; "aria-labelledby": string; }',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/tabs/tabs.component.tsx#TabsHookReturnProps'
            ] = {
              docgenInfo: TabsHookReturnProps.__docgenInfo,
              name: 'TabsHookReturnProps',
              path: 'src/hooks/tabs/tabs.component.tsx#TabsHookReturnProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _excluded = ['components'];
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(dist_esm.d, {
            title: 'Aria Component/Tabs',
            mdxType: 'Meta',
          }),
          Object(esm.b)('h1', { id: 'tabs' }, 'Tabs'),
          Object(esm.b)(
            'p',
            null,
            'Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.'
          ),
          Object(esm.b)('h2', { id: 'example' }, 'Example'),
          Object(esm.b)(
            dist_esm.c,
            { mdxSource: '%0A%3CTabs%20/%3E%0A', mdxType: 'Canvas' },
            Object(esm.b)(tabs_component, { mdxType: 'Tabs' })
          ),
          Object(esm.b)('h2', { id: 'setup' }, 'Setup'),
          Object(esm.b)(
            'p',
            null,
            'The ',
            Object(esm.b)('inlineCode', { parentName: 'p' }, 'useAriaTabs'),
            ' hook expects the following parameters:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: TabsHookProps,
            sort: 'requiredFirst',
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)(
            'p',
            null,
            'The hook returns an object with the following values:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: TabsHookReturnProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h2', { id: 'component' }, 'Component'),
          Object(esm.b)(
            'p',
            null,
            'In order to create a fully accessible implementation of tabs, your component should look like the following:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-jsx' },
              "import { useAriaTabs } from '@actum-digital/aria-hooks';\n\nconst tabs = [\n  {\n    label: 'Tab 1',\n    id: '1',\n    content:\n      'Eveniet, aut iste qui eum a maiores veniam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut iste qui eum a maiores veniam laborum provident ipsam vitae?',\n  },\n  {\n    label: 'Tab 2',\n    id: '2',\n    content:\n      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut iste qui eum a maiores veniam laborum provident ipsam vitae?',\n  },\n  {\n    label: 'Tab 3',\n    id: '3',\n    content:\n      'Upsum dolor sit amet consectetur adipisicing elit. Voluptate, vitae dolore laudantium aliquam natus iste obcaecati autem. Quam, nisi laboriosam!',\n  },\n];\n\nconst Tabs = () => {\n  const { tablistProps, tabProps, tabpanelProps, tabsProps } = useAriaTabs({});\n\n  return (\n    <div {...tabsProps}>\n      <div {...tablistProps}>\n        {tabs.map(({ label, id }, idx) => (\n          <button {...tabProps(id, idx)} key={id}>\n            {label}\n          </button>\n        ))}\n      </div>\n      {tabs.map(({ label, content, id }, idx) => (\n        <div {...tabpanelProps(id, idx)} key={id}>\n          <h2>{label}</h2>\n          <p>{content}</p>\n        </div>\n      ))}\n    </div>\n  );\n};\n"
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Aria Component/Tabs',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(esm.b)(
                dist_esm.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(esm.b)(MDXContent, null)
              );
            },
          }
        ));
      __webpack_exports__.default = componentMeta;
    },
    957: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          'parameters',
          function () {
            return parameters;
          }
        ),
        __webpack_require__.d(
          preview_namespaceObject,
          'decorators',
          function () {
            return decorators;
          }
        );
      __webpack_require__(20),
        __webpack_require__(4),
        __webpack_require__(43),
        __webpack_require__(500),
        __webpack_require__(130),
        __webpack_require__(34),
        __webpack_require__(901),
        __webpack_require__(902),
        __webpack_require__(196);
      var client_api = __webpack_require__(972),
        esm = __webpack_require__(11),
        react =
          (__webpack_require__(7),
          __webpack_require__(85),
          __webpack_require__(10),
          __webpack_require__(8),
          __webpack_require__(18),
          __webpack_require__(13),
          __webpack_require__(14),
          __webpack_require__(15),
          __webpack_require__(12),
          __webpack_require__(9),
          __webpack_require__(21),
          __webpack_require__(0)),
        react_default = __webpack_require__.n(react),
        public_api = __webpack_require__(110),
        create = __webpack_require__(170),
        logo_actum_black = __webpack_require__(542),
        logo_actum_black_default = __webpack_require__.n(logo_actum_black),
        ActumTheme = Object(create.a)({
          base: 'light',
          colorPrimary: 'red',
          colorSecondary: '#d93c31',
          appBg: '#fff',
          appContentBg: '#fff',
          appBorderColor: '#2e2d2c',
          appBorderRadius: 0,
          fontBase: '"Roboto", sans-serif',
          fontCode: 'monospace',
          textColor: '#2e2d2c',
          textInverseColor: 'white',
          barTextColor: '#2e2d2c',
          barSelectedColor: '#d93c31',
          barBg: '#f5f5f5',
          inputBg: '#f5f5f5',
          inputBorder: '#2e2d2c',
          inputTextColor: '#2e2d2c',
          inputBorderRadius: 0,
          brandTitle: 'aria-hooks | ACTUM Digital',
          brandUrl: 'https://www.actumdigital.com/',
          brandImage: logo_actum_black_default.a,
        }),
        logo_actum_white = __webpack_require__(543),
        logo_actum_white_default = __webpack_require__.n(logo_actum_white),
        ActumThemeDark = Object(create.a)(
          Object.assign({}, create.b.dark, {
            colorPrimary: 'red',
            colorSecondary: '#d93c31',
            appBorderRadius: 0,
            fontBase: '"Roboto", sans-serif',
            fontCode: 'monospace',
            barTextColor: '#fff',
            barSelectedColor: '#d93c31',
            barBg: '#212121',
            inputBorderRadius: 0,
            brandImage: logo_actum_white_default.a,
          })
        ),
        blocks = __webpack_require__(544),
        styled_components_browser_esm = __webpack_require__(37),
        themes = __webpack_require__(202),
        jsx_runtime = __webpack_require__(17),
        DocContainer_DocsContainer = function DocsContainer(_ref) {
          var children = _ref.children,
            context = _ref.context,
            isDarkTheme = _ref.isDarkTheme;
          return Object(jsx_runtime.jsx)(styled_components_browser_esm.a, {
            theme: isDarkTheme ? themes.b : themes.c,
            children: Object(jsx_runtime.jsx)(blocks.a, {
              context: Object.assign({}, context, {
                parameters: Object.assign({}, context.parameters, {
                  docs: Object.assign({}, context.parameters.docs, {
                    theme: isDarkTheme ? create.b.dark : create.b.light,
                  }),
                }),
              }),
              children: children,
            }),
          });
        };
      DocContainer_DocsContainer.displayName = 'DocsContainer';
      try {
        (DocContainer_DocsContainer.displayName = 'DocsContainer'),
          (DocContainer_DocsContainer.__docgenInfo = {
            description: '',
            displayName: 'DocsContainer',
            props: {
              context: {
                defaultValue: null,
                description: '',
                name: 'context',
                required: !0,
                type: { name: 'any' },
              },
              isDarkTheme: {
                defaultValue: null,
                description: '',
                name: 'isDarkTheme',
                required: !0,
                type: { name: 'any' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              '.storybook/components/DocContainer.tsx#DocsContainer'
            ] = {
              docgenInfo: DocContainer_DocsContainer.__docgenInfo,
              name: 'DocsContainer',
              path: '.storybook/components/DocContainer.tsx#DocsContainer',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var dist = __webpack_require__(203);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var channel = public_api.default.getChannel(),
        parameters = {
          actions: { argTypesRegex: '^on[A-Z].*' },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
          previewTabs: { 'storybook/docs/panel': { hidden: !0 } },
          docs: {
            container: function container(props) {
              var _React$useState2 = _slicedToArray(
                  react_default.a.useState(),
                  2
                ),
                isDark = _React$useState2[0],
                setDark = _React$useState2[1];
              return (
                react_default.a.useEffect(
                  function () {
                    return (
                      channel.on(dist.DARK_MODE_EVENT_NAME, setDark),
                      function () {
                        return channel.off(dist.DARK_MODE_EVENT_NAME, setDark);
                      }
                    );
                  },
                  [channel, setDark]
                ),
                Object(jsx_runtime.jsx)(
                  DocContainer_DocsContainer,
                  Object.assign({}, props, { isDarkTheme: isDark })
                )
              );
            },
          },
          darkMode: {
            stylePreview: !0,
            dark: ActumThemeDark,
            light: ActumTheme,
          },
        },
        decorators = [
          function (Story) {
            return Object(jsx_runtime.jsx)(Story, {});
          },
        ];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn(
              'Invalid args/argTypes in config, ignoring.',
              JSON.stringify(value)
            );
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(client_api.c)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(client_api.d)(loader, !1);
            });
          case 'parameters':
            return Object(client_api.e)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(client_api.a)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(client_api.b)(enhancer);
            });
          case 'render':
            return Object(client_api.g)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(client_api.e)(v, !1);
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    958: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(20),
        __webpack_require__(131),
        __webpack_require__(4),
        __webpack_require__(7);
      var react = __webpack_require__(0),
        esm = __webpack_require__(2),
        dist_esm = __webpack_require__(28),
        constants =
          (__webpack_require__(78),
          __webpack_require__(25),
          __webpack_require__(85),
          __webpack_require__(10),
          __webpack_require__(8),
          __webpack_require__(18),
          __webpack_require__(13),
          __webpack_require__(14),
          __webpack_require__(15),
          __webpack_require__(12),
          __webpack_require__(9),
          __webpack_require__(21),
          __webpack_require__(39));
      __webpack_require__(159),
        __webpack_require__(130),
        __webpack_require__(34);
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it =
          ('undefined' != typeof Symbol && o[Symbol.iterator]) ||
          o['@@iterator'];
        if (!it) {
          if (
            Array.isArray(o) ||
            (it = (function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              'Object' === n && o.constructor && (n = o.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(o);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return _arrayLikeToArray(o, minLen);
            })(o)) ||
            (allowArrayLike && o && 'number' == typeof o.length)
          ) {
            it && (o = it);
            var i = 0,
              F = function F() {};
            return {
              s: F,
              n: function n() {
                return i >= o.length
                  ? { done: !0 }
                  : { done: !1, value: o[i++] };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var err,
          normalCompletion = !0,
          didErr = !1;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            var step = it.next();
            return (normalCompletion = step.done), step;
          },
          e: function e(_e2) {
            (didErr = !0), (err = _e2);
          },
          f: function f() {
            try {
              normalCompletion || null == it.return || it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var changeFocusToElement = function changeFocusToElement(
          element,
          baseElement
        ) {
          if (document.activeElement) {
            var selectedElement,
              _selectedElement$scro,
              _selectedElement,
              focussable = Array.from(
                baseElement.querySelectorAll('[role="option"]')
              );
            if ('first' === element) selectedElement = focussable.shift();
            else if ('last' === element) selectedElement = focussable.pop();
            else if ('number' == typeof element)
              selectedElement = focussable[element];
            else {
              var el = baseElement.querySelector('.selected'),
                index = focussable.findIndex(function (e) {
                  return el.isSameNode(e);
                });
              index > -1 &&
                (selectedElement =
                  focussable[index + ('next' === element ? 1 : -1)]);
            }
            if (selectedElement)
              if (
                (focussable.forEach(function (button) {
                  button.classList.remove('selected');
                }),
                selectedElement.classList.add('selected'),
                Math.abs(
                  selectedElement.parentElement.scrollHeight -
                    selectedElement.parentElement.clientHeight
                ) > 5)
              )
                null ===
                  (_selectedElement$scro = (_selectedElement = selectedElement)
                    .scrollIntoView) ||
                  void 0 === _selectedElement$scro ||
                  _selectedElement$scro.call(_selectedElement);
          }
        },
        controller_ListboxController = function ListboxController(_id) {
          var _this = this;
          !(function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError('Cannot call a class as a function');
          })(this, ListboxController),
            (this.contentElement = void 0),
            (this.triggerElement = void 0),
            (this.id = void 0),
            (this.firstLetters = void 0),
            (this.setContentElement = function (el) {
              return (_this.contentElement = el);
            }),
            (this.setTriggerElement = function (el) {
              return (_this.triggerElement = el);
            }),
            (this.setFirstLetters = function () {
              var optionElements = Array.from(
                _this.contentElement.querySelectorAll('[role="option"]')
              );
              _this.firstLetters = optionElements.map(function (option) {
                return {
                  item: option,
                  firstLetter: option.innerText[0].toLowerCase(),
                };
              });
            }),
            (this.getItemIndex = function (testedItem) {
              if (void 0 === _this.contentElement) return -1;
              var optionElements = Array.from(
                _this.contentElement.querySelectorAll('[role="option"]')
              );
              return optionElements
                ? optionElements.findIndex(function (option) {
                    return option.isSameNode(testedItem);
                  })
                : -1;
            }),
            (this.open = function () {
              Array.from(
                _this.contentElement.querySelectorAll('[role="option"]')
              ).forEach(function (button) {
                button.classList.remove('selected');
              }),
                _this.registerListeners(),
                _this.triggerElement ||
                  (_this.triggerElement = document
                    .getElementById(_this.id)
                    .querySelector('[aria-haspopup=listbox]')),
                _this.contentElement.setAttribute(constants.d, 'false'),
                _this.contentElement.focus(),
                _this.triggerElement.setAttribute(constants.c, 'true');
              var _selected$scrollIntoV,
                selected =
                  _this.contentElement.querySelector(
                    '[' + constants.f + '="true"]'
                  ) || _this.contentElement.querySelector('[role="option"]');
              Math.abs(
                (null == selected
                  ? void 0
                  : selected.parentElement.scrollHeight) -
                  (null == selected
                    ? void 0
                    : selected.parentElement.clientHeight)
              ) > 5 &&
                (null == selected ||
                  null === (_selected$scrollIntoV = selected.scrollIntoView) ||
                  void 0 === _selected$scrollIntoV ||
                  _selected$scrollIntoV.call(selected));
              null == selected || selected.classList.add('selected');
            }),
            (this.close = function () {
              _this.cleanupListeners();
              var listboxElement = _this.contentElement;
              listboxElement.setAttribute(constants.d, 'true'),
                _this.triggerElement.setAttribute(constants.c, 'false'),
                Array.from(
                  listboxElement.querySelectorAll('[role="option"]')
                ).forEach(function (button) {
                  return button.classList.remove('selected');
                }),
                _this.triggerElement.focus();
            }),
            (this.getOpen = function () {
              var _this$triggerElement, _document$getElementB;
              _this.triggerElement ||
                (_this.triggerElement =
                  null ===
                    (_document$getElementB = document.getElementById(
                      _this.id
                    )) || void 0 === _document$getElementB
                    ? void 0
                    : _document$getElementB.querySelector(
                        '[aria-haspopup=listbox]'
                      ));
              return (
                'true' ===
                  (null === (_this$triggerElement = _this.triggerElement) ||
                  void 0 === _this$triggerElement
                    ? void 0
                    : _this$triggerElement.getAttribute(constants.c)) || !1
              );
            }),
            (this.handleKeyDown = function (onSelect) {
              return function (ev) {
                switch (ev.key) {
                  case 'ArrowDown':
                    ev.preventDefault(),
                      changeFocusToElement('next', _this.contentElement);
                    break;
                  case 'ArrowUp':
                    ev.preventDefault(),
                      changeFocusToElement('prev', _this.contentElement);
                    break;
                  case 'Home':
                    ev.preventDefault(),
                      changeFocusToElement('first', _this.contentElement);
                    break;
                  case 'End':
                    ev.preventDefault(),
                      changeFocusToElement('last', _this.contentElement);
                    break;
                  case 'Enter':
                  case ' ':
                    var _this$contentElement$;
                    ev.preventDefault(),
                      Array.from(
                        _this.contentElement.querySelectorAll('[role="option"]')
                      ).forEach(function (button) {
                        return button.setAttribute(constants.f, 'false');
                      }),
                      null == onSelect ||
                        onSelect(
                          null ===
                            (_this$contentElement$ =
                              _this.contentElement.querySelector(
                                '.selected'
                              )) || void 0 === _this$contentElement$
                            ? void 0
                            : _this$contentElement$.id
                        );
                }
                var _step,
                  _iterator = _createForOfIteratorHelper(_this.firstLetters);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    var _ref = _step.value,
                      firstLetter = _ref.firstLetter,
                      item = _ref.item;
                    if (ev.key === firstLetter) {
                      var index = _this.getItemIndex(item);
                      ev.preventDefault(),
                        changeFocusToElement(index, _this.contentElement);
                      break;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              };
            }),
            (this.select = function (id) {
              var _this$contentElement$2;
              Array.from(
                _this.contentElement.querySelectorAll('[role="option"]')
              ).forEach(function (button) {
                return button.setAttribute(constants.f, 'false');
              }),
                null ===
                  (_this$contentElement$2 = _this.contentElement.querySelector(
                    '#' + id
                  )) ||
                  void 0 === _this$contentElement$2 ||
                  _this$contentElement$2.setAttribute(constants.f, 'true');
            }),
            (this.handleButtonKeyDown = function (ev) {
              'Escape' === ev.key && _this.close();
            }),
            (this.handleClick = function (e) {
              var _document$getElementB2;
              _this.contentElement.contains(e.target) ||
                (null !==
                  (_document$getElementB2 =
                    document.getElementById('overlays')) &&
                  void 0 !== _document$getElementB2 &&
                  _document$getElementB2.contains(e.target)) ||
                _this.close();
            }),
            (this.registerListeners = function () {
              window.addEventListener('keydown', _this.handleButtonKeyDown),
                window.addEventListener('touchstart', _this.handleClick),
                window.addEventListener('mousedown', _this.handleClick),
                _this.setFirstLetters();
            }),
            (this.cleanupListeners = function () {
              window.removeEventListener('keydown', _this.handleButtonKeyDown),
                window.removeEventListener('touchstart', _this.handleClick),
                window.removeEventListener('mousedown', _this.handleClick);
            }),
            (this.id = _id);
        },
        listbox_useAriaListbox = function useAriaListbox(_ref) {
          var id = _ref.id,
            selectedValue = _ref.selectedValue,
            triggerLabel = _ref.triggerLabel,
            isOpen = _ref.isOpen,
            onSelect = _ref.onSelect,
            closeOnSelect = _ref.closeOnSelect,
            onToggle = _ref.onToggle,
            controller = Object(react.useRef)(
              new controller_ListboxController(id)
            ),
            triggerProps = Object(react.useMemo)(
              function () {
                var _ref2;
                return (
                  ((_ref2 = {
                    'aria-label': triggerLabel,
                    'aria-haspopup': 'listbox',
                  })[constants.c] =
                    'boolean' == typeof isOpen
                      ? isOpen
                      : controller.current.getOpen()),
                  (_ref2.ref = controller.current.setTriggerElement),
                  (_ref2.onClick = function onClick(e) {
                    e.target.focus(),
                      controller.current.open(),
                      null == onToggle || onToggle(!0);
                  }),
                  _ref2
                );
              },
              [isOpen, triggerLabel]
            ),
            listboxProps = Object(react.useMemo)(
              function () {
                var _ref3;
                return (
                  ((_ref3 = {
                    ref: controller.current.setContentElement,
                    onClick: function onClick(e) {
                      return e.stopPropagation();
                    },
                  })[constants.d] = 'true'),
                  (_ref3.role = 'listbox'),
                  (_ref3['aria-activedescendant'] = selectedValue),
                  (_ref3.tabIndex = -1),
                  (_ref3.id = id),
                  (_ref3.onKeyDown = controller.current.handleKeyDown(function (
                    id
                  ) {
                    null == onSelect || onSelect(id),
                      controller.current.select(id),
                      closeOnSelect &&
                        (controller.current.close(),
                        null == onToggle || onToggle(!1));
                  })),
                  _ref3
                );
              },
              [selectedValue, id]
            ),
            entryItemProps = Object(react.useCallback)(function (id) {
              var _ref4;
              return (
                ((_ref4 = { id: id, role: 'option' })[constants.f] =
                  id === selectedValue),
                (_ref4.onClick = function onClick() {
                  null == onSelect || onSelect(id),
                    controller.current.select(id),
                    closeOnSelect &&
                      (controller.current.close(),
                      null == onToggle || onToggle(!1));
                }),
                _ref4
              );
            }, []);
          return Object(react.useMemo)(
            function () {
              return {
                triggerProps: triggerProps,
                listboxProps: listboxProps,
                entryItemProps: entryItemProps,
              };
            },
            [triggerProps, listboxProps, entryItemProps]
          );
        };
      try {
        (listbox_useAriaListbox.displayName = 'useAriaListbox'),
          (listbox_useAriaListbox.__docgenInfo = {
            description: '',
            displayName: 'useAriaListbox',
            props: {
              id: {
                defaultValue: null,
                description: 'Unique ID for the menu',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              isOpen: {
                defaultValue: null,
                description: 'Whether or not the menu is open',
                name: 'isOpen',
                required: !1,
                type: { name: 'boolean' },
              },
              triggerLabel: {
                defaultValue: null,
                description: 'The label of the triggering button',
                name: 'triggerLabel',
                required: !1,
                type: { name: 'string' },
              },
              selectedValue: {
                defaultValue: null,
                description: 'ID of the selected entry (if any)',
                name: 'selectedValue',
                required: !1,
                type: { name: 'string' },
              },
              onSelect: {
                defaultValue: null,
                description:
                  'Callback for when selection of entry happens\n@param',
                name: 'onSelect',
                required: !1,
                type: { name: '(val: string) => void' },
              },
              closeOnSelect: {
                defaultValue: null,
                description:
                  'Whether or not menu should close when selecting entry',
                name: 'closeOnSelect',
                required: !1,
                type: { name: 'boolean' },
              },
              onToggle: {
                defaultValue: null,
                description:
                  'Callback when toggling open/close\nIf not provided, the component will work uncontrolled\n@param',
                name: 'onToggle',
                required: !1,
                type: { name: '(open: boolean) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/listbox/index.tsx#useAriaListbox'
            ] = {
              docgenInfo: listbox_useAriaListbox.__docgenInfo,
              name: 'useAriaListbox',
              path: 'src/hooks/listbox/index.tsx#useAriaListbox',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__(73);
      var _templateObject,
        styled_components_browser_esm = __webpack_require__(37),
        variables = __webpack_require__(5);
      var listboxStyleVariables = {
          wrapperHeight: '290px',
          wrapperWidth: 'max-content',
          textTransform: 'capitalize',
          hoverItemBackgroundColor: variables.b.red + '22',
          focusItemBackgroundColor: variables.b.red,
        },
        Wrapper = styled_components_browser_esm.b.div(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(
              strings,
              raw
            ) {
              return (
                raw || (raw = strings.slice(0)), (strings.raw = raw), strings
              );
            })([
              '\n  position: relative;\n\n  height: ',
              ';\n  width: ',
              ';\n\n  color: ',
              ';\n\n  button {\n    display: flex;\n    align-items: center;\n    padding: ',
              ';\n\n    background-color: ',
              ';\n    color: ',
              ';\n    font-weight: ',
              ';\n    font-size: ',
              ';\n    text-transform: ',
              ';\n    outline: none;\n    cursor: pointer;\n    border: ',
              ' solid ',
              ';\n\n    transition-property: ',
              ';\n    transition-timing-function: ',
              ';\n    transition-duration: ',
              ';\n\n    &:hover {\n      color: ',
              ';\n      border-color: ',
              ';\n    }\n\n    &:focus {\n      box-shadow: ',
              ';\n    }\n\n    .btn__icon {\n      vertical-align: middle;\n      margin-left: ',
              ';\n\n      fill: ',
              ';\n      transform: rotate(90deg);\n    }\n  }\n\n  .listbox {\n    position: absolute;\n    top: calc(100% + 4px);\n\n    box-sizing: border-box;\n    width: 100%;\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n    background-color: ',
              ';\n    color: ',
              ';\n    border: ',
              ' solid ',
              ';\n    border-radius: 0;\n\n    li {\n      position: relative;\n\n      box-sizing: border-box;\n      width: calc(100% + 2px);\n      padding: ',
              ';\n      margin: -1px;\n\n      text-align: center;\n      font-size: ',
              ';\n      font-weight: ',
              ';\n      text-transform: ',
              ';\n      cursor: pointer;\n\n      &:hover:not(.',
              ') {\n        background-color: ',
              ';\n      }\n\n      &.',
              ' {\n        background-color: ',
              ';\n      }\n\n      &.',
              ' {\n        color: ',
              ";\n      }\n    }\n\n    &:focus {\n      outline: none;\n    }\n  }\n\n  .listbox[aria-hidden='true'] {\n    display: none;\n  }\n",
            ])),
          listboxStyleVariables.wrapperHeight,
          listboxStyleVariables.wrapperWidth,
          variables.b.black,
          variables.e.defaultButtonPadding,
          function (props) {
            return props.theme.secondaryBackground;
          },
          function (props) {
            return props.theme.textColor;
          },
          variables.d.bold,
          variables.c.m,
          listboxStyleVariables.textTransform,
          variables.a.defaultWidth,
          variables.b.black,
          variables.f.buttonProperties,
          variables.f.timingFunction,
          variables.f.defaultDuration,
          variables.b.red,
          variables.b.red,
          function (props) {
            return props.theme.isDarkTheme
              ? variables.a.focusOutlineDarkMode
              : variables.a.focusOutlineLightMode;
          },
          variables.e['spacer-6'],
          variables.b.red,
          function (props) {
            return props.theme.primaryBackground;
          },
          function (props) {
            return props.theme.textColor;
          },
          variables.a.defaultWidth,
          variables.b.black,
          variables.e['spacer-3'],
          variables.c.m,
          variables.d.bold,
          listboxStyleVariables.textTransform,
          'selected',
          listboxStyleVariables.hoverItemBackgroundColor,
          'selected',
          listboxStyleVariables.focusItemBackgroundColor,
          'selected',
          variables.b.white
        ),
        jsx_runtime = __webpack_require__(17);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function listbox_component_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o)
              return listbox_component_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return listbox_component_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function listbox_component_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var listbox_component_Listbox = function Listbox() {
        var _entries$find,
          entries = react.useMemo(function () {
            return [
              { id: 'entry-1', label: 'Dog' },
              { id: 'entry-2', label: 'Cat' },
              { id: 'entry-3', label: 'Parrot' },
              { id: 'entry-4', label: 'Goldfish' },
              { id: 'entry-5', label: 'Hamster' },
            ];
          }, []),
          _React$useState2 = _slicedToArray(react.useState(entries[0].id), 2),
          selectedValue = _React$useState2[0],
          setSelectedValue = _React$useState2[1],
          _useAriaListbox = listbox_useAriaListbox({
            id: 'listbox-component',
            selectedValue: selectedValue,
            triggerLabel: 'Open listbox',
            closeOnSelect: !0,
            onSelect: setSelectedValue,
          }),
          triggerProps = _useAriaListbox.triggerProps,
          listboxProps = _useAriaListbox.listboxProps,
          entryItemProps = _useAriaListbox.entryItemProps;
        return Object(jsx_runtime.jsx)(Wrapper, {
          children: Object(jsx_runtime.jsxs)('div', {
            style: { position: 'relative' },
            children: [
              Object(jsx_runtime.jsxs)(
                'button',
                Object.assign({}, triggerProps, {
                  children: [
                    (null ===
                      (_entries$find = entries.find(function (e) {
                        return e.id === selectedValue;
                      })) || void 0 === _entries$find
                      ? void 0
                      : _entries$find.label) || 'Select option',
                    Object(jsx_runtime.jsx)('svg', {
                      width: variables.c.xl,
                      height: variables.c.xl,
                      viewBox: '0 0 24 24',
                      xmlns: 'http://www.w3.org/2000/svg',
                      className: 'icon btn__icon',
                      children: Object(jsx_runtime.jsx)('path', {
                        d: 'M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z',
                      }),
                    }),
                  ],
                })
              ),
              Object(jsx_runtime.jsx)(
                'ul',
                Object.assign({ className: 'listbox' }, listboxProps, {
                  children: entries.map(function (entry) {
                    return Object(jsx_runtime.jsx)(
                      'li',
                      Object.assign({}, entryItemProps(entry.id), {
                        children: entry.label,
                      }),
                      entry.id
                    );
                  }),
                })
              ),
            ],
          }),
        });
      };
      listbox_component_Listbox.displayName = 'Listbox';
      var ListboxHookProps = function ListboxHookProps() {
          return null;
        },
        ListboxTriggerHookReturnProps =
          function ListboxTriggerHookReturnProps() {
            return null;
          },
        ListboxBoxHookReturnProps = function ListboxBoxHookReturnProps() {
          return null;
        },
        ListboxEntryHookReturnProps = function ListboxEntryHookReturnProps() {
          return null;
        };
      try {
        (listbox_component_Listbox.displayName = 'Listbox'),
          (listbox_component_Listbox.__docgenInfo = {
            description: '',
            displayName: 'Listbox',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/listbox/listbox.component.tsx#Listbox'
            ] = {
              docgenInfo: listbox_component_Listbox.__docgenInfo,
              name: 'Listbox',
              path: 'src/hooks/listbox/listbox.component.tsx#Listbox',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (ListboxHookProps.displayName = 'ListboxHookProps'),
          (ListboxHookProps.__docgenInfo = {
            description: '',
            displayName: 'ListboxHookProps',
            props: {
              id: {
                defaultValue: null,
                description: 'Unique ID for the menu',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              isOpen: {
                defaultValue: null,
                description: 'Whether or not the menu is open',
                name: 'isOpen',
                required: !1,
                type: { name: 'boolean' },
              },
              triggerLabel: {
                defaultValue: null,
                description: 'The label of the triggering button',
                name: 'triggerLabel',
                required: !1,
                type: { name: 'string' },
              },
              selectedValue: {
                defaultValue: null,
                description: 'ID of the selected entry (if any)',
                name: 'selectedValue',
                required: !1,
                type: { name: 'string' },
              },
              onSelect: {
                defaultValue: null,
                description:
                  'Callback for when selection of entry happens\n@param',
                name: 'onSelect',
                required: !1,
                type: { name: '(val: string) => void' },
              },
              closeOnSelect: {
                defaultValue: null,
                description:
                  'Whether or not menu should close when selecting entry',
                name: 'closeOnSelect',
                required: !1,
                type: { name: 'boolean' },
              },
              onToggle: {
                defaultValue: null,
                description:
                  'Callback when toggling open/close\nIf not provided, the component will work uncontrolled\n@param',
                name: 'onToggle',
                required: !1,
                type: { name: '(open: boolean) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/listbox/listbox.component.tsx#ListboxHookProps'
            ] = {
              docgenInfo: ListboxHookProps.__docgenInfo,
              name: 'ListboxHookProps',
              path: 'src/hooks/listbox/listbox.component.tsx#ListboxHookProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (ListboxTriggerHookReturnProps.displayName =
          'ListboxTriggerHookReturnProps'),
          (ListboxTriggerHookReturnProps.__docgenInfo = {
            description: '',
            displayName: 'ListboxTriggerHookReturnProps',
            props: {
              'aria-label': {
                defaultValue: null,
                description: '',
                name: 'aria-label',
                required: !0,
                type: { name: 'string' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description: '',
                name: 'aria-haspopup',
                required: !0,
                type: {
                  name: 'boolean | "menu" | "dialog" | "false" | "true" | "listbox" | "tree" | "grid"',
                },
              },
              'aria-expanded': {
                defaultValue: null,
                description: '',
                name: 'aria-expanded',
                required: !0,
                type: { name: 'boolean' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !0,
                type: { name: '(element: HTMLButtonElement) => void' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: {
                  name: '(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/listbox/listbox.component.tsx#ListboxTriggerHookReturnProps'
            ] = {
              docgenInfo: ListboxTriggerHookReturnProps.__docgenInfo,
              name: 'ListboxTriggerHookReturnProps',
              path: 'src/hooks/listbox/listbox.component.tsx#ListboxTriggerHookReturnProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (ListboxBoxHookReturnProps.displayName = 'ListboxBoxHookReturnProps'),
          (ListboxBoxHookReturnProps.__docgenInfo = {
            description: '',
            displayName: 'ListboxBoxHookReturnProps',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !0,
                type: { name: '(element: HTMLUListElement) => void' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: {
                  name: '(e: MouseEvent<HTMLUListElement, MouseEvent>) => void',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description: '',
                name: 'aria-hidden',
                required: !0,
                type: { name: 'boolean' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !0,
                type: { name: '"listbox"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description: '',
                name: 'aria-activedescendant',
                required: !0,
                type: { name: 'string' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !0,
                type: { name: '-1' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !0,
                type: { name: '(e: KeyboardEvent<HTMLUListElement>) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/listbox/listbox.component.tsx#ListboxBoxHookReturnProps'
            ] = {
              docgenInfo: ListboxBoxHookReturnProps.__docgenInfo,
              name: 'ListboxBoxHookReturnProps',
              path: 'src/hooks/listbox/listbox.component.tsx#ListboxBoxHookReturnProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (ListboxEntryHookReturnProps.displayName =
          'ListboxEntryHookReturnProps'),
          (ListboxEntryHookReturnProps.__docgenInfo = {
            description: '',
            displayName: 'ListboxEntryHookReturnProps',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !0,
                type: { name: '"option"' },
              },
              'aria-selected': {
                defaultValue: null,
                description: '',
                name: 'aria-selected',
                required: !0,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: {
                  name: '(e: MouseEvent<HTMLLIElement, MouseEvent>) => void',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/listbox/listbox.component.tsx#ListboxEntryHookReturnProps'
            ] = {
              docgenInfo: ListboxEntryHookReturnProps.__docgenInfo,
              name: 'ListboxEntryHookReturnProps',
              path: 'src/hooks/listbox/listbox.component.tsx#ListboxEntryHookReturnProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _excluded = ['components'];
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(dist_esm.d, {
            title: 'Aria Component/Listbox',
            mdxType: 'Meta',
          }),
          Object(esm.b)('h1', { id: 'listbox' }, 'Listbox'),
          Object(esm.b)(
            'p',
            null,
            'A component that allows the user to choose one value from a list. When a listbox is inactive, it displays a single value. When activated, it displays a list of values, from which the user may select one. When the user selects a new value, listbox becomes inactive again, displaying the selected value.'
          ),
          Object(esm.b)('h2', { id: 'example' }, 'Example'),
          Object(esm.b)(
            dist_esm.c,
            { mdxSource: '%0A%3CListbox%20/%3E%0A', mdxType: 'Canvas' },
            Object(esm.b)(listbox_component_Listbox, { mdxType: 'Listbox' })
          ),
          Object(esm.b)('h2', { id: 'setup' }, 'Setup'),
          Object(esm.b)(
            'p',
            null,
            'The ',
            Object(esm.b)('inlineCode', { parentName: 'p' }, 'useAriaListbox'),
            ' hook expects the following parameters:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: ListboxHookProps,
            sort: 'requiredFirst',
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)(
            'p',
            null,
            'The hook returns an object with the following values:'
          ),
          Object(esm.b)('h3', { id: 'triggerprops' }, 'triggerProps'),
          Object(esm.b)(dist_esm.b, {
            of: ListboxTriggerHookReturnProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h3', { id: 'listboxprops' }, 'listboxProps'),
          Object(esm.b)(dist_esm.b, {
            of: ListboxBoxHookReturnProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h3', { id: 'entryitemprops' }, 'entryItemProps'),
          Object(esm.b)(
            'p',
            null,
            'The ',
            Object(esm.b)('inlineCode', { parentName: 'p' }, 'entryItemProps'),
            ' value is a function that expects a unique ID as a parameter. The function, then, returns an object with the following values:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: ListboxEntryHookReturnProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h2', { id: 'component' }, 'Component'),
          Object(esm.b)(
            'p',
            null,
            'In order to create a fully accessible implementation of a listbox, your component should look like the following:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-jsx' },
              "import { useAriaListbox } from '@actum-digital/aria-hooks';\n\nconst Listbox = () => {\n  const [selectedValue, setSelectedValue] = React.useState('entry-1');\n\n  const entries = React.useMemo(\n    () => [\n      { id: 'entry-1', label: 'Entry 1' },\n      { id: 'entry-2', label: 'Entry 2' },\n      { id: 'entry-3', label: 'Entry 3' },\n      { id: 'entry-4', label: 'Entry 4' },\n      { id: 'entry-5', label: 'Entry 5' },\n    ],\n    []\n  );\n\n  const { triggerProps, listboxProps, entryItemProps } = useAriaListbox({\n    id: 'listbox-component',\n    selectedValue,\n    triggerLabel: 'Open listbox',\n    closeOnSelect: true,\n    onSelect: setSelectedValue,\n  });\n\n  return (\n    <div>\n      <div style={{ position: 'relative' }}>\n        <button\n          {...triggerProps}\n          onClick={(e) => {\n            e.stopPropagation();\n            triggerProps.onClick(e);\n          }}\n        >\n          {entries.find((e) => e.id === selectedValue)?.label ||\n            'Select option'}\n        </button>\n\n        <ul className=\"listbox\" {...listboxProps}>\n          {entries.map((entry) => (\n            <li key={entry.id} {...entryItemProps(entry.id)}>\n              {entry.label}\n            </li>\n          ))}\n        </ul>\n      </div>\n    </div>\n  );\n};\n"
            )
          ),
          Object(esm.b)('h2', { id: 'styles' }, 'Styles'),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-css' },
              ".listbox {\n  margin: 0;\n  background-color: white;\n  border: 1px solid #eaebee;\n  padding: 4px;\n  list-style: none;\n\n  position: absolute;\n  top: calc(100% + 4px);\n\n  max-height: 100px;\n  overflow: auto;\n\n  width: 90px;\n}\n\n.listbox[aria-hidden='true'] {\n  display: none;\n}\n\n.selected {\n  background: blue;\n}\n"
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Aria Component/Listbox',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(esm.b)(
                dist_esm.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(esm.b)(MDXContent, null)
              );
            },
          }
        ));
      __webpack_exports__.default = componentMeta;
    },
    959: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(20),
        __webpack_require__(131),
        __webpack_require__(4),
        __webpack_require__(7);
      var react = __webpack_require__(0),
        esm = __webpack_require__(2),
        dist_esm = __webpack_require__(28),
        constants =
          (__webpack_require__(25),
          __webpack_require__(85),
          __webpack_require__(10),
          __webpack_require__(8),
          __webpack_require__(18),
          __webpack_require__(13),
          __webpack_require__(14),
          __webpack_require__(15),
          __webpack_require__(12),
          __webpack_require__(9),
          __webpack_require__(21),
          __webpack_require__(39));
      __webpack_require__(54),
        __webpack_require__(65),
        __webpack_require__(159),
        __webpack_require__(130),
        __webpack_require__(34),
        __webpack_require__(43);
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it =
          ('undefined' != typeof Symbol && o[Symbol.iterator]) ||
          o['@@iterator'];
        if (!it) {
          if (
            Array.isArray(o) ||
            (it = (function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              'Object' === n && o.constructor && (n = o.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(o);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return _arrayLikeToArray(o, minLen);
            })(o)) ||
            (allowArrayLike && o && 'number' == typeof o.length)
          ) {
            it && (o = it);
            var i = 0,
              F = function F() {};
            return {
              s: F,
              n: function n() {
                return i >= o.length
                  ? { done: !0 }
                  : { done: !1, value: o[i++] };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var err,
          normalCompletion = !0,
          didErr = !1;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            var step = it.next();
            return (normalCompletion = step.done), step;
          },
          e: function e(_e2) {
            (didErr = !0), (err = _e2);
          },
          f: function f() {
            try {
              normalCompletion || null == it.return || it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var NavigationContoller = function NavigationContoller(
        id,
        isSubmenuLink
      ) {
        var _this = this;
        !(function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor))
            throw new TypeError('Cannot call a class as a function');
        })(this, NavigationContoller),
          (this.menuRef = void 0),
          (this.id = void 0),
          (this.isSubmenuLink = void 0),
          (this.indexMainMenu = void 0),
          (this.firstLetters = void 0),
          (this.setMenuRef = function (menu) {
            _this.menuRef = menu || document.getElementById(_this.id);
          }),
          (this.setFirstLetters = function () {
            var items = Array.from(
              _this.menuRef.querySelectorAll(
                'ul[role="menubar"]>li> [role="menuitem"]'
              )
            );
            _this.firstLetters = items.map(function (menuItem) {
              return {
                item: menuItem,
                firstLetter: menuItem.innerText[0].toLowerCase(),
              };
            });
          }),
          (this.setActivity = function (isActive, setIsActive) {
            Array.from(
              _this.menuRef.querySelectorAll('li>[role="menuitem"]')
            ).includes(document.activeElement) && !isActive
              ? setIsActive(!0)
              : setIsActive(!1);
          }),
          (this.setMainMenuIndex = function (idx) {
            -1 !== idx && (_this.indexMainMenu = idx);
          }),
          (this.getFocusedIndex = function (optItems) {
            if (void 0 === _this.menuRef) return -1;
            var items =
              optItems ||
              Array.from(
                _this.menuRef.querySelectorAll(
                  'ul[role="menubar"]>li> [role="menuitem"]'
                )
              );
            return items
              ? items.findIndex(function (item) {
                  return item.isSameNode(document.activeElement);
                })
              : -1;
          }),
          (this.getItemIndex = function (testedItem) {
            if (void 0 === _this.menuRef) return -1;
            var items = Array.from(
              _this.menuRef.querySelectorAll(
                'ul[role="menubar"]>li> [role="menuitem"]'
              )
            );
            return items
              ? items.findIndex(function (item) {
                  return item.isSameNode(testedItem);
                })
              : -1;
          }),
          (this.changeFocusToItem = function (item, submenuItems) {
            var _items$index,
              items =
                submenuItems ||
                Array.from(
                  _this.menuRef.querySelectorAll(
                    'ul[role="menubar"]>li> [role="menuitem"]'
                  )
                ),
              index =
                -1 === _this.getFocusedIndex(items)
                  ? _this.indexMainMenu
                  : _this.getFocusedIndex(items);
            (index =
              'last' === item
                ? items.length - 1
                : 'first' === item
                ? 0
                : 'next' === item
                ? index === items.length - 1
                  ? 0
                  : index + 1
                : 'prev' === item
                ? index <= 0
                  ? items.length - 1
                  : index - 1
                : item),
              items.forEach(function (item, i) {
                item.tabIndex = index === i ? 0 : -1;
              }),
              submenuItems || _this.setMainMenuIndex(index),
              null === (_items$index = items[index]) ||
                void 0 === _items$index ||
                _items$index.focus();
          }),
          (this.hideSubmenus = function () {
            Array.from(_this.menuRef.querySelectorAll('[role="menu"]')).forEach(
              function (item) {
                Array.from(item.querySelectorAll('[role="menuitem"]')).forEach(
                  function (i) {
                    i.tabIndex = -1;
                  }
                ),
                  (item.style.display = 'none');
              }
            );
          }),
          (this.getSubmenuStates = function () {
            var isSubmenuVisible,
              submenu,
              items,
              el =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : document.activeElement,
              currentElement = 'innerHTML' in el ? el : document.activeElement,
              parentLi = currentElement.parentElement,
              parentMenu = parentLi.parentElement,
              hasSubmenu =
                'true' === currentElement.getAttribute('aria-haspopup'),
              isSubmenu = 'menu' === parentMenu.getAttribute('role');
            return (
              (hasSubmenu || isSubmenu) &&
                ((submenu = isSubmenu
                  ? parentMenu
                  : parentLi.querySelector('ul')),
                (items = Array.from(
                  submenu.querySelectorAll('[role="menuitem"]')
                )),
                (isSubmenuVisible = 'none' !== submenu.style.display)),
              {
                hasSubmenu: hasSubmenu,
                isSubmenu: isSubmenu,
                submenu: submenu,
                items: items,
                isSubmenuVisible: isSubmenuVisible,
              }
            );
          }),
          (this.handleKeyDown = function (e) {
            if ('menuitem' === e.target.getAttribute('role')) {
              var _this$getSubmenuState = _this.getSubmenuStates(e.target),
                hasSubmenu = _this$getSubmenuState.hasSubmenu,
                isSubmenu = _this$getSubmenuState.isSubmenu,
                submenu = _this$getSubmenuState.submenu,
                items = _this$getSubmenuState.items,
                isSubmenuVisible = _this$getSubmenuState.isSubmenuVisible;
              switch (e.key) {
                case 'ArrowRight':
                  e.preventDefault(),
                    _this.changeFocusToItem('next'),
                    _this.hideSubmenus();
                  break;
                case 'ArrowLeft':
                  e.preventDefault(),
                    _this.changeFocusToItem('prev'),
                    _this.hideSubmenus();
                  break;
                case 'Home':
                  e.preventDefault(),
                    isSubmenu
                      ? _this.changeFocusToItem('first', items)
                      : (_this.changeFocusToItem('first'),
                        _this.hideSubmenus());
                  break;
                case 'End':
                  e.preventDefault(),
                    isSubmenu
                      ? _this.changeFocusToItem('last', items)
                      : (_this.changeFocusToItem('last'), _this.hideSubmenus());
                  break;
                case 'ArrowDown':
                  e.preventDefault(),
                    (hasSubmenu || isSubmenu) &&
                      (isSubmenuVisible
                        ? _this.changeFocusToItem('next', items)
                        : ((submenu.style.display = 'initial'),
                          _this.changeFocusToItem('first', items)));
                  break;
                case 'ArrowUp':
                  e.preventDefault(),
                    isSubmenu &&
                      (isSubmenuVisible
                        ? _this.changeFocusToItem('next', items)
                        : ((submenu.style.display = 'initial'),
                          _this.changeFocusToItem('first', items)));
                  break;
                case 'Escape':
                  e.preventDefault(),
                    _this.changeFocusToItem(),
                    _this.hideSubmenus();
                  break;
                case 'Enter':
                case ' ':
                  !hasSubmenu ||
                    isSubmenuVisible ||
                    _this.isSubmenuLink ||
                    (e.preventDefault(),
                    (submenu.style.display = 'initial'),
                    _this.changeFocusToItem('first', items));
              }
              var _step,
                _iterator = _createForOfIteratorHelper(_this.firstLetters);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  var _ref = _step.value,
                    firstLetter = _ref.firstLetter,
                    item = _ref.item;
                  if (e.key === firstLetter) {
                    var index = _this.getItemIndex(item);
                    e.preventDefault(),
                      _this.changeFocusToItem(index),
                      _this.hideSubmenus();
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }),
          (this.regiterEvents = function () {
            var topItemsWithSubmenu = Array.from(
                document.querySelectorAll('ul[role="menubar"]>li')
              ).filter(function (item) {
                return item.querySelector('[role="menu"]');
              }),
              submenus = Array.from(document.querySelectorAll('[role="menu"]'));
            topItemsWithSubmenu.forEach(function (item) {
              item.addEventListener('mouseover', function () {
                var submenuOfItem = item.querySelector('[role="menu"]');
                'block' !== submenuOfItem.style.display &&
                  (submenuOfItem.style.display = 'block');
              }),
                item.addEventListener('mouseleave', function () {
                  item.querySelector('[role="menu"]').style.display = 'none';
                });
            }),
              submenus.forEach(function (submenu) {
                submenu.addEventListener('mouseenter', function () {
                  submenu.style.display = 'block';
                }),
                  submenu.addEventListener('mouseleave', function () {
                    submenu.style.display = 'none';
                  });
              }),
              _this.setFirstLetters();
          }),
          (this.onActive = function () {
            window.addEventListener('keydown', _this.handleKeyDown);
          }),
          (this.onInactive = function () {
            window.addEventListener('keydown', _this.handleKeyDown);
          }),
          (this.id = id),
          (this.isSubmenuLink = isSubmenuLink);
      };
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function navigation_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o)
              return navigation_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return navigation_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function navigation_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var _templateObject,
        _templateObject2,
        _templateObject3,
        styled_components_browser_esm = __webpack_require__(37),
        variables = __webpack_require__(5);
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      var StyledNav = styled_components_browser_esm.b.nav(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteralLoose([
              "\n  display: flex;\n  justify-content: center;\n\n  [tabindex='0'] {\n    color: ",
              ';\n  }\n\n  .dropdown__icon {\n    vertical-align: middle;\n    transform: rotate(90deg);\n  }\n',
            ])),
          variables.b.red
        ),
        StyledMenu = styled_components_browser_esm.b.ul(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteralLoose([
              '\n  position: relative;\n  display: flex;\n  padding: ',
              ' 0;\n  margin: 0;\n  list-style-type: none;\n\n  li {\n    padding: ',
              ";\n  }\n\n  [role='menuitem'] {\n    padding: ",
              ';\n    color: ',
              ';\n    text-decoration: none;\n    outline: none;\n    cursor: pointer;\n    box-shadow: 0;\n\n    &:focus {\n      box-shadow: ',
              ';\n    }\n\n    &:hover {\n      color: ',
              ';\n    }\n  }\n',
            ])),
          variables.e['spacer-4'],
          variables.e['spacer-2'],
          variables.e['spacer-1'],
          function (props) {
            return props.theme.textColor;
          },
          function (props) {
            return props.theme.isDarkTheme
              ? variables.a.focusOutlineDarkMode
              : variables.a.focusOutlineLightMode;
          },
          variables.b.red
        ),
        StyledSubmenu = Object(styled_components_browser_esm.b)(StyledMenu)(
          _templateObject3 ||
            (_templateObject3 = _taggedTemplateLiteralLoose([
              '\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n\n  border-top: ',
              ';\n  border-bottom: ',
              ';\n',
            ])),
          variables.a.lightBorder,
          variables.a.lightBorder
        ),
        jsx_runtime = __webpack_require__(17),
        menubar_component_Menubar = function Menubar() {
          var _useAriaNavigation = (function useAriaNavigation(_ref) {
              var menubarLabel = _ref.menubarLabel,
                id = _ref.id,
                isSubmenuLink = _ref.isSubmenuLink,
                controller = Object(react.useRef)(
                  new NavigationContoller(id, isSubmenuLink)
                ),
                _useState2 = _slicedToArray(Object(react.useState)(!1), 2),
                isActive = _useState2[0],
                setIsActive = _useState2[1],
                setActivity = function setActivity() {
                  controller.current.setActivity(isActive, setIsActive);
                };
              Object(react.useEffect)(function () {
                return (
                  controller.current.regiterEvents(),
                  document.addEventListener('focusin', setActivity),
                  function () {
                    document.removeEventListener('focusin', setActivity);
                  }
                );
              }, []),
                Object(react.useEffect)(
                  function () {
                    isActive
                      ? controller.current.onActive()
                      : controller.current.onInactive();
                  },
                  [isActive]
                );
              var menubarProps = Object(react.useMemo)(
                  function () {
                    return {
                      id: id,
                      role: 'menubar',
                      'aria-label': menubarLabel || 'Main menubar',
                      ref: controller.current.setMenuRef,
                      style: { padding: '0' },
                    };
                  },
                  [menubarLabel, id]
                ),
                submenuProps = Object(react.useCallback)(function (label) {
                  return {
                    role: 'menu',
                    'aria-label': label,
                    style: { display: 'none' },
                  };
                }, []),
                menuItemProps = Object(react.useCallback)(function (
                  i,
                  hasSubmenu
                ) {
                  var _ref2,
                    focusedIndex = controller.current.getFocusedIndex();
                  return Object.assign(
                    {
                      role: 'menuitem',
                      tabIndex:
                        (-1 === focusedIndex && 0 === i) || focusedIndex === i
                          ? 0
                          : -1,
                    },
                    hasSubmenu
                      ? (((_ref2 = { 'aria-haspopup': hasSubmenu })[
                          constants.c
                        ] = !1),
                        _ref2)
                      : {}
                  );
                },
                []),
                itemProps = Object(react.useMemo)(function () {
                  return { role: 'none' };
                }, []);
              return Object(react.useMemo)(
                function () {
                  return {
                    itemProps: itemProps,
                    menuItemProps: menuItemProps,
                    menubarProps: menubarProps,
                    submenuProps: submenuProps,
                  };
                },
                [itemProps, menuItemProps, menubarProps, submenuProps]
              );
            })({ menubarLabel: 'Main navigation menu', id: 'navigation' }),
            menubarProps = _useAriaNavigation.menubarProps,
            menuItemProps = _useAriaNavigation.menuItemProps,
            itemProps = _useAriaNavigation.itemProps,
            submenuProps = _useAriaNavigation.submenuProps;
          return Object(jsx_runtime.jsx)('div', {
            style: { height: 170 },
            children: Object(jsx_runtime.jsx)(StyledNav, {
              children: Object(jsx_runtime.jsx)(
                StyledMenu,
                Object.assign({}, menubarProps, {
                  children: [
                    { title: 'Home' },
                    {
                      title: 'Contact',
                      items: [
                        { title: 'Submenu Item 1' },
                        { title: 'Submenu Item 2' },
                      ],
                    },
                    {
                      title: 'About',
                      items: [
                        { title: 'Submenu Item 1' },
                        { title: 'Submenu Item 2' },
                      ],
                    },
                  ].map(function (item, idx) {
                    return Object(jsx_runtime.jsxs)(
                      'li',
                      Object.assign({}, itemProps, {
                        children: [
                          item.items
                            ? Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                children: Object(jsx_runtime.jsxs)(
                                  'span',
                                  Object.assign({}, menuItemProps(idx, !0), {
                                    children: [
                                      item.title,
                                      Object(jsx_runtime.jsx)('svg', {
                                        fill: 'currentColor',
                                        width: '19px',
                                        height: '19px',
                                        viewBox: '0 0 24 24',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        className: 'dropdown__icon',
                                        children: Object(jsx_runtime.jsx)(
                                          'path',
                                          {
                                            d: 'M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z',
                                          }
                                        ),
                                      }),
                                    ],
                                  })
                                ),
                              })
                            : Object(jsx_runtime.jsx)(
                                'a',
                                Object.assign(
                                  { href: '#' },
                                  menuItemProps(idx, !1),
                                  { children: item.title }
                                )
                              ),
                          item.items &&
                            Object(jsx_runtime.jsx)(
                              StyledSubmenu,
                              Object.assign({}, submenuProps('submenu'), {
                                className: 'submenu',
                                children: item.items.map(function (childItem) {
                                  return Object(jsx_runtime.jsx)(
                                    'li',
                                    Object.assign({}, itemProps, {
                                      children: Object(jsx_runtime.jsx)(
                                        'a',
                                        Object.assign(
                                          { href: '#' },
                                          menuItemProps(-1),
                                          { children: childItem.title }
                                        )
                                      ),
                                    }),
                                    childItem.title
                                  );
                                }),
                              })
                            ),
                        ],
                      }),
                      item.title
                    );
                  }),
                })
              ),
            }),
          });
        };
      menubar_component_Menubar.displayName = 'Menubar';
      var NavigationPropsComponent = function NavigationPropsComponent() {
          return null;
        },
        NavigationReturnPropsItemProps =
          function NavigationReturnPropsItemProps() {
            return null;
          },
        NavigationReturnPropsMenuItemProps =
          function NavigationReturnPropsMenuItemProps() {
            return null;
          },
        NavigationReturnPropsMenubarProps =
          function NavigationReturnPropsMenubarProps() {
            return null;
          },
        NavigationReturnPropsSubmenuProps =
          function NavigationReturnPropsSubmenuProps() {
            return null;
          };
      try {
        (menubar_component_Menubar.displayName = 'Menubar'),
          (menubar_component_Menubar.__docgenInfo = {
            description: '',
            displayName: 'Menubar',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/navigation/menubar.component.tsx#Menubar'
            ] = {
              docgenInfo: menubar_component_Menubar.__docgenInfo,
              name: 'Menubar',
              path: 'src/hooks/navigation/menubar.component.tsx#Menubar',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (NavigationPropsComponent.displayName = 'NavigationPropsComponent'),
          (NavigationPropsComponent.__docgenInfo = {
            description: '',
            displayName: 'NavigationPropsComponent',
            props: {
              id: {
                defaultValue: null,
                description: 'Unique ID for the menu',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              menubarLabel: {
                defaultValue: null,
                description:
                  'Label for menu, which will be presented to screen readers',
                name: 'menubarLabel',
                required: !1,
                type: { name: 'string' },
              },
              isSubmenuLink: {
                defaultValue: null,
                description: 'Whether or not top item with submenu is link',
                name: 'isSubmenuLink',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/navigation/menubar.component.tsx#NavigationPropsComponent'
            ] = {
              docgenInfo: NavigationPropsComponent.__docgenInfo,
              name: 'NavigationPropsComponent',
              path: 'src/hooks/navigation/menubar.component.tsx#NavigationPropsComponent',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (NavigationReturnPropsItemProps.displayName =
          'NavigationReturnPropsItemProps'),
          (NavigationReturnPropsItemProps.__docgenInfo = {
            description: '',
            displayName: 'NavigationReturnPropsItemProps',
            props: {
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !0,
                type: { name: '"none"' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/navigation/menubar.component.tsx#NavigationReturnPropsItemProps'
            ] = {
              docgenInfo: NavigationReturnPropsItemProps.__docgenInfo,
              name: 'NavigationReturnPropsItemProps',
              path: 'src/hooks/navigation/menubar.component.tsx#NavigationReturnPropsItemProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (NavigationReturnPropsMenuItemProps.displayName =
          'NavigationReturnPropsMenuItemProps'),
          (NavigationReturnPropsMenuItemProps.__docgenInfo = {
            description: '',
            displayName: 'NavigationReturnPropsMenuItemProps',
            props: {
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !0,
                type: { name: '"menuitem"' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !0,
                type: { name: 'number' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description: '',
                name: 'aria-haspopup',
                required: !1,
                type: { name: 'boolean' },
              },
              'aria-expanded': {
                defaultValue: null,
                description: '',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/navigation/menubar.component.tsx#NavigationReturnPropsMenuItemProps'
            ] = {
              docgenInfo: NavigationReturnPropsMenuItemProps.__docgenInfo,
              name: 'NavigationReturnPropsMenuItemProps',
              path: 'src/hooks/navigation/menubar.component.tsx#NavigationReturnPropsMenuItemProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (NavigationReturnPropsMenubarProps.displayName =
          'NavigationReturnPropsMenubarProps'),
          (NavigationReturnPropsMenubarProps.__docgenInfo = {
            description: '',
            displayName: 'NavigationReturnPropsMenubarProps',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !0,
                type: { name: '"menubar"' },
              },
              'aria-label': {
                defaultValue: null,
                description: '',
                name: 'aria-label',
                required: !0,
                type: { name: 'string' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !0,
                type: { name: '(element: HTMLElement) => void' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !0,
                type: { name: 'any' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/navigation/menubar.component.tsx#NavigationReturnPropsMenubarProps'
            ] = {
              docgenInfo: NavigationReturnPropsMenubarProps.__docgenInfo,
              name: 'NavigationReturnPropsMenubarProps',
              path: 'src/hooks/navigation/menubar.component.tsx#NavigationReturnPropsMenubarProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (NavigationReturnPropsSubmenuProps.displayName =
          'NavigationReturnPropsSubmenuProps'),
          (NavigationReturnPropsSubmenuProps.__docgenInfo = {
            description: '',
            displayName: 'NavigationReturnPropsSubmenuProps',
            props: {
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !0,
                type: { name: '"menu"' },
              },
              'aria-label': {
                defaultValue: null,
                description: '',
                name: 'aria-label',
                required: !0,
                type: { name: 'string' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !0,
                type: { name: '{ display: "none"; }' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/navigation/menubar.component.tsx#NavigationReturnPropsSubmenuProps'
            ] = {
              docgenInfo: NavigationReturnPropsSubmenuProps.__docgenInfo,
              name: 'NavigationReturnPropsSubmenuProps',
              path: 'src/hooks/navigation/menubar.component.tsx#NavigationReturnPropsSubmenuProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _excluded = ['components'];
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(dist_esm.d, {
            title: 'Aria Component/Navigation',
            mdxType: 'Meta',
          }),
          Object(esm.b)('h1', { id: 'navigation' }, 'Navigation'),
          Object(esm.b)(
            'p',
            null,
            "A component that contains important links or buttons, which helps with navigating through the website. It may contain dropdown menus for better clarity. It's usually located on the top of the website."
          ),
          Object(esm.b)('h2', { id: 'example' }, 'Example'),
          Object(esm.b)(
            dist_esm.c,
            { mdxSource: '%0A%3CMenubar%20/%3E%0A', mdxType: 'Canvas' },
            Object(esm.b)(menubar_component_Menubar, { mdxType: 'Menubar' })
          ),
          Object(esm.b)('h2', { id: 'setup' }, 'Setup'),
          Object(esm.b)(
            'p',
            null,
            'The ',
            Object(esm.b)(
              'inlineCode',
              { parentName: 'p' },
              'useAriaNavigation'
            ),
            ' hook expects the following parameters:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: NavigationPropsComponent,
            sort: 'requiredFirst',
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)(
            'p',
            null,
            'The hook returns an object with the following values:'
          ),
          Object(esm.b)('h3', { id: 'itemprops' }, 'itemProps'),
          Object(esm.b)(dist_esm.b, {
            of: NavigationReturnPropsItemProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h3', { id: 'menuitemprops' }, 'menuItemProps'),
          Object(esm.b)(dist_esm.b, {
            of: NavigationReturnPropsMenuItemProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h3', { id: 'menubarprops' }, 'menubarProps'),
          Object(esm.b)(dist_esm.b, {
            of: NavigationReturnPropsMenubarProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h3', { id: 'submenuprops' }, 'submenuProps'),
          Object(esm.b)(dist_esm.b, {
            of: NavigationReturnPropsSubmenuProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h2', { id: 'component' }, 'Component'),
          Object(esm.b)(
            'p',
            null,
            'In order to create a fully accessible implementation of a modal, your component should look like the following:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-jsx' },
              "import { useAriaNavigation } from '@actum-digital/aria-hooks';\n\nconst Navigation = () => {\n  const items = [\n    { title: 'Home' },\n    {\n      title: 'Contact',\n      items: [{ title: 'Submenu Item 1' }, { title: 'Submenu Item 2' }],\n    },\n    {\n      title: 'About',\n      items: [{ title: 'Submenu Item 1' }, { title: 'Submenu Item 2' }],\n    },\n  ];\n\n  const { menubarProps, menuItemProps, itemProps, submenuProps } =\n    useAriaNavigation({\n      menubarLabel: 'Main navigation menu',\n      id: 'navigation',\n    });\n\n  return (\n    <nav>\n      <ul {...menubarProps}>\n        {items.map((item, idx) => (\n          <li key={item.title} {...itemProps}>\n            {item.items && item.items.length > 0 ? (\n              <>\n                <span {...menuItemProps(idx, true)}>\n                  {item.title}\n                  <svg\n                    width=\"19px\"\n                    height=\"19px\"\n                    viewBox=\"0 0 24 24\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    className=\"icon btn__icon\"\n                  >\n                    <path d=\"M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z\" />\n                  </svg>\n                </span>\n              </>\n            ) : (\n              <a {...menuItemProps(idx, false)}>{item.title}</a>\n            )}\n            {item.items && item.items.length > 0 && (\n              <ul {...submenuProps('submenu')} className=\"submenu\">\n                {item.items.map((childItem) => (\n                  <li key={childItem.title} {...itemProps}>\n                    <a {...menuItemProps(-1)}>{childItem.title}</a>\n                  </li>\n                ))}\n              </ul>\n            )}\n          </li>\n        ))}\n      </ul>\n    </nav>\n  );\n};\n"
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Aria Component/Navigation',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(esm.b)(
                dist_esm.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(esm.b)(MDXContent, null)
              );
            },
          }
        ));
      __webpack_exports__.default = componentMeta;
    },
    960: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(20),
        __webpack_require__(131),
        __webpack_require__(4),
        __webpack_require__(7);
      var react = __webpack_require__(0),
        esm = __webpack_require__(2),
        dist_esm = __webpack_require__(28),
        constants =
          (__webpack_require__(85),
          __webpack_require__(10),
          __webpack_require__(8),
          __webpack_require__(18),
          __webpack_require__(13),
          __webpack_require__(14),
          __webpack_require__(15),
          __webpack_require__(12),
          __webpack_require__(9),
          __webpack_require__(21),
          __webpack_require__(39));
      var _templateObject,
        _templateObject2,
        controller_ToolTipController = function ToolTipController(
          id,
          onDismiss,
          onRelease
        ) {
          var _this = this;
          !(function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError('Cannot call a class as a function');
          })(this, ToolTipController),
            (this.id = void 0),
            (this.buttonRef = void 0),
            (this.tooltipRef = void 0),
            (this.onDismiss = void 0),
            (this.onRelease = void 0),
            (this.getBtnId = function () {
              return _this.id + '_button';
            }),
            (this.getTooltipId = function () {
              return _this.id + '_tooltip';
            }),
            (this.setBtnRef = function (buttonRef) {
              _this.buttonRef = buttonRef;
            }),
            (this.setTooltipRef = function (tooltipRef) {
              _this.tooltipRef = tooltipRef;
            }),
            (this.registerEvents = function () {
              var button =
                _this.buttonRef || document.getElementById(_this.getBtnId());
              button.addEventListener('focus', _this.onOpen),
                button.addEventListener('blur', _this.onClose),
                button.addEventListener('mouseenter', _this.onOpen),
                button.addEventListener('mouseleave', _this.onClose);
            }),
            (this.onOpen = function () {
              var _this$onRelease,
                button =
                  _this.buttonRef || document.getElementById(_this.getBtnId()),
                tooltip =
                  _this.tooltipRef ||
                  document.getElementById(_this.getTooltipId());
              button.setAttribute(constants.c, 'true'),
                (tooltip.style.visibility = 'visible'),
                window.addEventListener('keydown', _this.handleKeyDown),
                null === (_this$onRelease = _this.onRelease) ||
                  void 0 === _this$onRelease ||
                  _this$onRelease.call(_this);
            }),
            (this.onClose = function () {
              var _this$onDismiss,
                button =
                  _this.buttonRef || document.getElementById(_this.getBtnId()),
                tooltip =
                  _this.tooltipRef ||
                  document.getElementById(_this.getTooltipId());
              button.setAttribute(constants.c, 'false'),
                (tooltip.style.visibility = 'hidden'),
                window.removeEventListener('keydown', _this.handleKeyDown),
                null === (_this$onDismiss = _this.onDismiss) ||
                  void 0 === _this$onDismiss ||
                  _this$onDismiss.call(_this);
            }),
            (this.handleKeyDown = function (e) {
              'Escape' === e.key && _this.onClose();
            }),
            (this.id = id),
            (this.onDismiss = onDismiss),
            (this.onRelease = onRelease);
        },
        Button = __webpack_require__(168),
        styled_components_browser_esm = __webpack_require__(37),
        variables = __webpack_require__(5);
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      var tooltipStyleVariables = {
          arrowSize: variables.e['spacer-2'],
          backgroundColor: function backgroundColor(props) {
            return props.theme.secondaryBackground;
          },
          color: function color(props) {
            return props.theme.textColor;
          },
        },
        StyledTooltip = styled_components_browser_esm.b.div(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteralLoose([
              '\n  position: absolute;\n  left: 110%;\n\n  display: initial;\n  width: max-content;\n  padding: ',
              ' ',
              ';\n\n  background: ',
              ';\n  color: ',
              ";\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    right: 100%;\n\n    border: ",
              ' solid transparent;\n    border-right-color: ',
              ';\n    transform: translateY(-50%);\n  }\n',
            ])),
          variables.e['spacer-3'],
          variables.e['spacer-4'],
          tooltipStyleVariables.backgroundColor,
          tooltipStyleVariables.color,
          tooltipStyleVariables.arrowSize,
          tooltipStyleVariables.backgroundColor
        ),
        TooltipContainer = styled_components_browser_esm.b.div(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteralLoose([
              '\n  position: relative;\n  width: max-content;\n',
            ]))
        ),
        jsx_runtime = __webpack_require__(17);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var tooltip_component_Tooltip = function Tooltip() {
        var _useState2 = _slicedToArray(Object(react.useState)(!1), 2),
          isShowing = _useState2[0],
          setIsShowing = _useState2[1],
          _useAriaToolTip = (function useAriaToolTip(_ref) {
            var id = _ref.id,
              onRelease = _ref.onRelease,
              onDismiss = _ref.onDismiss,
              isShowing = _ref.isShowing,
              controller = Object(react.useRef)(
                new controller_ToolTipController(id, onRelease, onDismiss)
              );
            Object(react.useEffect)(function () {
              controller.current.registerEvents();
            }, []);
            var buttonProps = Object(react.useMemo)(
                function () {
                  var _ref2;
                  return (
                    ((_ref2 = {
                      id: controller.current.getBtnId(),
                      ref: controller.current.setBtnRef,
                      role: 'button',
                      tabIndex: 0,
                    })[constants.c] = !!isShowing),
                    (_ref2[constants.b] = controller.current.getTooltipId()),
                    _ref2
                  );
                },
                [id]
              ),
              toolTipProps = Object(react.useMemo)(
                function () {
                  return {
                    id: controller.current.getTooltipId(),
                    ref: controller.current.setTooltipRef,
                    role: 'tooltip',
                    style: { visibility: isShowing ? 'visible' : 'hidden' },
                  };
                },
                [id]
              );
            return Object(react.useMemo)(
              function () {
                return { buttonProps: buttonProps, toolTipProps: toolTipProps };
              },
              [buttonProps, toolTipProps]
            );
          })({
            id: 'tooltip',
            isShowing: isShowing,
            onRelease: function onRelease() {
              return setIsShowing(!0);
            },
            onDismiss: function onDismiss() {
              return setIsShowing(!1);
            },
          }),
          buttonProps = _useAriaToolTip.buttonProps,
          toolTipProps = _useAriaToolTip.toolTipProps;
        return Object(jsx_runtime.jsxs)(TooltipContainer, {
          children: [
            Object(jsx_runtime.jsx)(
              Button.a,
              Object.assign({ variation: 'unique' }, buttonProps, {
                children: 'See tooltip',
              })
            ),
            Object(jsx_runtime.jsx)(
              StyledTooltip,
              Object.assign({}, toolTipProps, { children: 'I am the tooltip ' })
            ),
          ],
        });
      };
      tooltip_component_Tooltip.displayName = 'Tooltip';
      var TooltipComponentProps = function TooltipComponentProps() {
          return null;
        },
        TooltipComponentButtonProps = function TooltipComponentButtonProps() {
          return null;
        },
        TooltipComponentTipProps = function TooltipComponentTipProps() {
          return null;
        };
      try {
        (TooltipComponentProps.displayName = 'TooltipComponentProps'),
          (TooltipComponentProps.__docgenInfo = {
            description: '',
            displayName: 'TooltipComponentProps',
            props: {
              id: {
                defaultValue: null,
                description: 'Unique ID for the Tooltip',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              onDismiss: {
                defaultValue: null,
                description: 'Callback for closing tooltip',
                name: 'onDismiss',
                required: !1,
                type: { name: '() => void' },
              },
              isShowing: {
                defaultValue: null,
                description: 'Whether or not Tooltip is visible',
                name: 'isShowing',
                required: !1,
                type: { name: 'boolean' },
              },
              onRelease: {
                defaultValue: null,
                description: 'Callback for opening tooltip',
                name: 'onRelease',
                required: !1,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/tooltip/tooltip.component.tsx#TooltipComponentProps'
            ] = {
              docgenInfo: TooltipComponentProps.__docgenInfo,
              name: 'TooltipComponentProps',
              path: 'src/hooks/tooltip/tooltip.component.tsx#TooltipComponentProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (TooltipComponentButtonProps.displayName =
          'TooltipComponentButtonProps'),
          (TooltipComponentButtonProps.__docgenInfo = {
            description: '',
            displayName: 'TooltipComponentButtonProps',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !0,
                type: { name: '(element: HTMLElement) => void' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !0,
                type: { name: '"button"' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !0,
                type: { name: '0' },
              },
              'aria-expanded': {
                defaultValue: null,
                description: '',
                name: 'aria-expanded',
                required: !0,
                type: { name: 'boolean' },
              },
              'aria-describedby': {
                defaultValue: null,
                description: '',
                name: 'aria-describedby',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/tooltip/tooltip.component.tsx#TooltipComponentButtonProps'
            ] = {
              docgenInfo: TooltipComponentButtonProps.__docgenInfo,
              name: 'TooltipComponentButtonProps',
              path: 'src/hooks/tooltip/tooltip.component.tsx#TooltipComponentButtonProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (TooltipComponentTipProps.displayName = 'TooltipComponentTipProps'),
          (TooltipComponentTipProps.__docgenInfo = {
            description: '',
            displayName: 'TooltipComponentTipProps',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !0,
                type: { name: '(element: HTMLElement) => void' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !0,
                type: { name: '"tooltip"' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !0,
                type: { name: 'CSSProperties' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/tooltip/tooltip.component.tsx#TooltipComponentTipProps'
            ] = {
              docgenInfo: TooltipComponentTipProps.__docgenInfo,
              name: 'TooltipComponentTipProps',
              path: 'src/hooks/tooltip/tooltip.component.tsx#TooltipComponentTipProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _excluded = ['components'];
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(dist_esm.d, {
            title: 'Aria Component/Tooltip',
            mdxType: 'Meta',
          }),
          Object(esm.b)('h1', { id: 'tooltip' }, 'Tooltip'),
          Object(esm.b)(
            'p',
            null,
            'A component that displays informative text on hover, focus, or tap.'
          ),
          Object(esm.b)(
            'p',
            null,
            "It can be used to display a description of a button's function or hint on keyboard shortcut to activate functionality."
          ),
          Object(esm.b)('h2', { id: 'example' }, 'Example'),
          Object(esm.b)(
            dist_esm.c,
            { mdxSource: '%0A%3CTooltip%20/%3E%0A', mdxType: 'Canvas' },
            Object(esm.b)(tooltip_component_Tooltip, { mdxType: 'Tooltip' })
          ),
          Object(esm.b)('h2', { id: 'setup' }, 'Setup'),
          Object(esm.b)(
            'p',
            null,
            'The ',
            Object(esm.b)('inlineCode', { parentName: 'p' }, 'useAriaTooltip'),
            ' hook expects the following parameters:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: TooltipComponentProps,
            sort: 'requiredFirst',
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)(
            'p',
            null,
            'The hook returns an object with the following values:'
          ),
          Object(esm.b)('h3', { id: 'buttonprops' }, 'buttonProps'),
          Object(esm.b)(dist_esm.b, {
            of: TooltipComponentButtonProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h3', { id: 'tooltipprops' }, 'toolTipProps'),
          Object(esm.b)(dist_esm.b, {
            of: TooltipComponentTipProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h2', { id: 'component' }, 'Component'),
          Object(esm.b)(
            'p',
            null,
            'In order to create a fully accessible implementation of a tooltip, your component should look like the following:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-jsx' },
              "import { useAriaToolTip } from '@actum-digital/aria-hooks';\n\nexport const Tooltip = () => {\n  const [isShowing, setIsShowing] = useState(false);\n\n  const { buttonProps, toolTipProps } = useAriaToolTip({\n    id: 'tooltip',\n    isShowing,\n    onRelease: () => setIsShowing(true),\n    onDismiss: () => setIsShowing(false),\n  });\n\n  return (\n    <div>\n      <button variation=\"primary\" {...buttonProps}>\n        See tooltip\n      </button>\n      <div {...toolTipProps}>I am the tool tip </div>\n    </div>\n  );\n};\n"
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Aria Component/Tooltip',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(esm.b)(
                dist_esm.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(esm.b)(MDXContent, null)
              );
            },
          }
        ));
      __webpack_exports__.default = componentMeta;
    },
    963: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(20),
        __webpack_require__(131),
        __webpack_require__(4),
        __webpack_require__(7);
      var _templateObject,
        _templateObject2,
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        esm = __webpack_require__(2),
        dist_esm = __webpack_require__(28),
        Button =
          (__webpack_require__(85),
          __webpack_require__(10),
          __webpack_require__(8),
          __webpack_require__(18),
          __webpack_require__(13),
          __webpack_require__(14),
          __webpack_require__(15),
          __webpack_require__(12),
          __webpack_require__(9),
          __webpack_require__(21),
          __webpack_require__(168)),
        shared = __webpack_require__(134),
        styled_components_browser_esm = __webpack_require__(37),
        variables = __webpack_require__(5);
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      var drawerStyleVariables_width = '40%',
        drawerStyleVariables_maxWidth = '500px',
        drawerStyleVariables_minWidth = '300px',
        StyledDrawer = styled_components_browser_esm.b.div(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteralLoose([
              '\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n\n  width: ',
              ';\n  max-width: ',
              ';\n  min-width: ',
              ';\n  padding: ',
              ';\n\n  background: ',
              ';\n  color: ',
              ';\n\n  .wrapper {\n    position: relative;\n\n    width: 100%;\n    height: 100%;\n  }\n\n  .sample_text {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    font-size: ',
              ';\n\n    transform: translate(-50%, -50%);\n  }\n',
            ])),
          drawerStyleVariables_width,
          drawerStyleVariables_maxWidth,
          drawerStyleVariables_minWidth,
          variables.e['spacer-5'],
          function (props) {
            return props.theme.primaryBackground;
          },
          function (props) {
            return props.theme.textColor;
          },
          variables.c.xxl
        ),
        StyledContainer = styled_components_browser_esm.b.div(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteralLoose([
              '\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: ',
              ';\n\n  border-bottom: ',
              ';\n\n  .icon_btn {\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n\n    &:focus {\n      box-shadow: ',
              ';\n      outline: none;\n    }\n\n    svg {\n      fill: ',
              ';\n    }\n  }\n',
            ])),
          variables.e['spacer-2'],
          variables.a.lightBorder,
          function (props) {
            return props.theme.isDarkTheme
              ? variables.a.focusOutlineDarkMode
              : variables.a.focusOutlineLightMode;
          },
          function (props) {
            return props.theme.textColor;
          }
        ),
        modal = __webpack_require__(262),
        jsx_runtime = __webpack_require__(17);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var drawer_component_Drawer = function Drawer() {
          var _React$useState2 = _slicedToArray(
              react_default.a.useState(!1),
              2
            ),
            isModalOpen = _React$useState2[0],
            setModalOpen = _React$useState2[1],
            _useAriaModal = Object(modal.a)({
              isOpen: isModalOpen,
              onDismiss: function onDismiss() {
                return setModalOpen(!1);
              },
              id: 'modal-test-storybook',
            }),
            modalProps = _useAriaModal.modalProps,
            closeButtonProps = _useAriaModal.closeButtonProps,
            descriptionTextProps = _useAriaModal.descriptionTextProps;
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)(Button.a, {
                onClick: function onClick() {
                  return setModalOpen(!0);
                },
                variation: 'unique',
                children: 'Open Drawer',
              }),
              Object(jsx_runtime.jsx)(shared.a, {
                hidden: !isModalOpen,
                className: 'backdrop',
                children: Object(jsx_runtime.jsx)(
                  StyledDrawer,
                  Object.assign({}, modalProps, {
                    children: Object(jsx_runtime.jsxs)('div', {
                      className: 'wrapper',
                      children: [
                        Object(jsx_runtime.jsxs)(StyledContainer, {
                          children: [
                            Object(jsx_runtime.jsx)(
                              shared.b,
                              Object.assign({}, descriptionTextProps, {
                                children: 'A cool drawer.',
                              })
                            ),
                            Object(jsx_runtime.jsx)(
                              'button',
                              Object.assign({}, closeButtonProps, {
                                className: 'icon_btn',
                                children: Object(jsx_runtime.jsx)('svg', {
                                  width: '24px',
                                  height: '24px',
                                  viewBox: '0 0 24 24',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: Object(jsx_runtime.jsx)('polygon', {
                                    points:
                                      '12 10.586 16.95 5.636 18.364 7.05 13.414 12 18.364 16.95 16.95 18.364 12 13.414 7.05 18.364 5.636 16.95 10.586 12 5.636 7.05 7.05 5.636',
                                  }),
                                }),
                              })
                            ),
                          ],
                        }),
                        Object(jsx_runtime.jsx)('span', {
                          className: 'sample_text',
                          children: 'Drawer',
                        }),
                      ],
                    }),
                  })
                ),
              }),
            ],
          });
        },
        DrawerHookProps = function DrawerHookProps() {
          return null;
        },
        DrawerHookReturnProps = function DrawerHookReturnProps() {
          return null;
        };
      try {
        (drawer_component_Drawer.displayName = 'Drawer'),
          (drawer_component_Drawer.__docgenInfo = {
            description: '',
            displayName: 'Drawer',
            props: {
              isOpen: {
                defaultValue: null,
                description: 'Whether or not modal is open',
                name: 'isOpen',
                required: !0,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: 'Modal ID',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              dialogLabel: {
                defaultValue: null,
                description: "Dialog's label",
                name: 'dialogLabel',
                required: !1,
                type: { name: 'string' },
              },
              closeLabel: {
                defaultValue: null,
                description: 'Close modal label',
                name: 'closeLabel',
                required: !1,
                type: { name: 'string' },
              },
              onDismiss: {
                defaultValue: null,
                description: 'Callback for closing',
                name: 'onDismiss',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/drawer/drawer.component.tsx#Drawer'
            ] = {
              docgenInfo: drawer_component_Drawer.__docgenInfo,
              name: 'Drawer',
              path: 'src/hooks/drawer/drawer.component.tsx#Drawer',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (DrawerHookProps.displayName = 'DrawerHookProps'),
          (DrawerHookProps.__docgenInfo = {
            description: '',
            displayName: 'DrawerHookProps',
            props: {
              isOpen: {
                defaultValue: null,
                description: 'Whether or not modal is open',
                name: 'isOpen',
                required: !0,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: 'Modal ID',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              dialogLabel: {
                defaultValue: null,
                description: "Dialog's label",
                name: 'dialogLabel',
                required: !1,
                type: { name: 'string' },
              },
              closeLabel: {
                defaultValue: null,
                description: 'Close modal label',
                name: 'closeLabel',
                required: !1,
                type: { name: 'string' },
              },
              onDismiss: {
                defaultValue: null,
                description: 'Callback for closing',
                name: 'onDismiss',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/drawer/drawer.component.tsx#DrawerHookProps'
            ] = {
              docgenInfo: DrawerHookProps.__docgenInfo,
              name: 'DrawerHookProps',
              path: 'src/hooks/drawer/drawer.component.tsx#DrawerHookProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (DrawerHookReturnProps.displayName = 'DrawerHookReturnProps'),
          (DrawerHookReturnProps.__docgenInfo = {
            description: '',
            displayName: 'DrawerHookReturnProps',
            props: {
              modalProps: {
                defaultValue: null,
                description: '',
                name: 'modalProps',
                required: !0,
                type: {
                  name: "{ 'aria-modal': true; role: \"dialog\"; 'aria-label': string; 'aria-hidden': boolean; 'aria-describedby': string; id: string; ref: (element: HTMLDivElement) => void; tabIndex: -1; }",
                },
              },
              closeButtonProps: {
                defaultValue: null,
                description: '',
                name: 'closeButtonProps',
                required: !0,
                type: {
                  name: "{ 'aria-label': string; onClick: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void; }",
                },
              },
              descriptionTextProps: {
                defaultValue: null,
                description: '',
                name: 'descriptionTextProps',
                required: !0,
                type: { name: '{ id: string; }' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/drawer/drawer.component.tsx#DrawerHookReturnProps'
            ] = {
              docgenInfo: DrawerHookReturnProps.__docgenInfo,
              name: 'DrawerHookReturnProps',
              path: 'src/hooks/drawer/drawer.component.tsx#DrawerHookReturnProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _excluded = ['components'];
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(dist_esm.d, {
            title: 'Aria Component/Drawer',
            mdxType: 'Meta',
          }),
          Object(esm.b)('h1', { id: 'drawer' }, 'Drawer'),
          Object(esm.b)(
            'p',
            null,
            'A component that is hidden by default and is opened upon an action, usually a button interaction.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Most commonly it contains some sort of navigation or filters, which helps with orientation in the application.'
          ),
          Object(esm.b)('h2', { id: 'example' }, 'Example'),
          Object(esm.b)(
            dist_esm.c,
            { mdxSource: '%0A%3CDrawer%20/%3E%0A', mdxType: 'Canvas' },
            Object(esm.b)(drawer_component_Drawer, { mdxType: 'Drawer' })
          ),
          Object(esm.b)('h2', { id: 'setup' }, 'Setup'),
          Object(esm.b)(
            'p',
            null,
            'Note: Even though there are visual differences between modal and drawer components, they are the same from an accessibility point of view. We can use the ',
            Object(esm.b)('inlineCode', { parentName: 'p' }, 'useAriaModal'),
            ' hook to make our drawer accessible.'
          ),
          Object(esm.b)(
            'p',
            null,
            'The ',
            Object(esm.b)('inlineCode', { parentName: 'p' }, 'useAriaModal'),
            ' hook expects the following parameters:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: DrawerHookProps,
            sort: 'requiredFirst',
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)(
            'p',
            null,
            'The hook returns an object with the following values:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: DrawerHookReturnProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h2', { id: 'component' }, 'Component'),
          Object(esm.b)(
            'p',
            null,
            'In order to create a fully accessible implementation of a drawer, your component should look like the following:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-jsx' },
              'import { useAriaModal } from \'@actum-digital/aria-hooks\';\n\nconst Drawer = () => {\n  const [isOpen, setOpen] = React.useState(false);\n  const { modalProps, closeButtonProps, descriptionTextProps } = useAriaModal({\n    isOpen,\n    onDismiss: () => setOpen(false),\n    id: \'modal-test\',\n  });\n\n  return (\n    <>\n      <button onClick={() => setOpen(true)}>Open Drawer</button>\n\n      <div className="drawer-backdrop">\n        <div className="drawer" {...modalProps}>\n          <h1 {...descriptionTextProps}>Drawer</h1>\n          <button {...closeButtonProps}>Close</button>\n        </div>\n      </div>\n    </>\n  );\n};\n'
            )
          ),
          Object(esm.b)('h2', { id: 'styles' }, 'Styles'),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-css' },
              ".drawer-backdrop {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  right: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background: #0007;\n}\n\n.drawer-backdrop[aria-hidden='true'] {\n  display: none;\n}\n\n.drawer {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n\n  background: white;\n\n  width: 400px;\n}\n"
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Aria Component/Drawer',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(esm.b)(
                dist_esm.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(esm.b)(MDXContent, null)
              );
            },
          }
        ));
      __webpack_exports__.default = componentMeta;
    },
    964: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(20),
        __webpack_require__(131),
        __webpack_require__(4),
        __webpack_require__(7);
      var _templateObject,
        _templateObject2,
        react = __webpack_require__(0),
        esm = __webpack_require__(2),
        dist_esm = __webpack_require__(28),
        modal =
          (__webpack_require__(85),
          __webpack_require__(10),
          __webpack_require__(8),
          __webpack_require__(18),
          __webpack_require__(13),
          __webpack_require__(14),
          __webpack_require__(15),
          __webpack_require__(12),
          __webpack_require__(9),
          __webpack_require__(21),
          __webpack_require__(262)),
        shared = __webpack_require__(134),
        Button = __webpack_require__(168),
        styled_components_browser_esm = __webpack_require__(37),
        variables = __webpack_require__(5);
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      var modalStyleVariables_width = '500px',
        modalStyleVariables_height = '500px',
        modalStyleVariables_maxWidth = '70vw',
        modalStyleVariables_maxHeight = '70vh',
        StyledModal = styled_components_browser_esm.b.div(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteralLoose([
              '\n  position: relative;\n\n  width: ',
              ';\n  height: ',
              ';\n  max-height: ',
              ';\n  max-width: ',
              ';\n  padding: ',
              ';\n\n  background: ',
              ';\n  color: ',
              ';\n\n  .sample_text {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    font-size: ',
              ';\n    transform: translate(-50%, -50%);\n  }\n',
            ])),
          modalStyleVariables_width,
          modalStyleVariables_height,
          modalStyleVariables_maxHeight,
          modalStyleVariables_maxWidth,
          variables.e['spacer-5'],
          function (props) {
            return props.theme.primaryBackground;
          },
          function (props) {
            return props.theme.textColor;
          },
          variables.c.xxl
        ),
        ModalPanel = styled_components_browser_esm.b.div(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteralLoose([
              '\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: ',
              ';\n\n  border-bottom: ',
              ';\n\n  .modal__close-btn {\n    background-color: transparent;\n    cursor: pointer;\n    border: none;\n\n    &:focus {\n      outline: none;\n      box-shadow: ',
              ';\n    }\n\n    svg {\n      fill: ',
              ';\n    }\n  }\n',
            ])),
          variables.e['spacer-2'],
          variables.a.lightBorder,
          function (props) {
            return props.theme.isDarkTheme
              ? variables.a.focusOutlineDarkMode
              : variables.a.focusOutlineLightMode;
          },
          function (props) {
            return props.theme.textColor;
          }
        ),
        jsx_runtime = __webpack_require__(17);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var modal_component_Modal = function Modal() {
          var _React$useState2 = _slicedToArray(react.useState(!1), 2),
            isModalOpen = _React$useState2[0],
            setModalOpen = _React$useState2[1],
            _useAriaModal = Object(modal.a)({
              isOpen: isModalOpen,
              onDismiss: function onDismiss() {
                return setModalOpen(!1);
              },
              id: 'modal-test-storybook',
            }),
            modalProps = _useAriaModal.modalProps,
            closeButtonProps = _useAriaModal.closeButtonProps,
            descriptionTextProps = _useAriaModal.descriptionTextProps;
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)(Button.a, {
                variation: 'unique',
                className: 'App-link',
                onClick: function onClick() {
                  return setModalOpen(!0);
                },
                children: 'Open Modal',
              }),
              Object(jsx_runtime.jsx)(shared.a, {
                hidden: !isModalOpen,
                className: 'modal-backdrop',
                children: Object(jsx_runtime.jsxs)(
                  StyledModal,
                  Object.assign({}, modalProps, {
                    children: [
                      Object(jsx_runtime.jsx)(
                        shared.b,
                        Object.assign({}, descriptionTextProps, {
                          children: 'A cool modal.',
                        })
                      ),
                      Object(jsx_runtime.jsx)(ModalPanel, {
                        children: Object(jsx_runtime.jsx)(
                          'button',
                          Object.assign({}, closeButtonProps, {
                            className: 'modal__close-btn',
                            children: Object(jsx_runtime.jsx)('svg', {
                              width: '24px',
                              height: '24px',
                              viewBox: '0 0 24 24',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: Object(jsx_runtime.jsx)('polygon', {
                                points:
                                  '12 10.586 16.95 5.636 18.364 7.05 13.414 12 18.364 16.95 16.95 18.364 12 13.414 7.05 18.364 5.636 16.95 10.586 12 5.636 7.05 7.05 5.636',
                              }),
                            }),
                          })
                        ),
                      }),
                      Object(jsx_runtime.jsx)('span', {
                        className: 'sample_text',
                        children: 'Modal',
                      }),
                    ],
                  })
                ),
              }),
            ],
          });
        },
        ModalHookProps = function ModalHookProps() {
          return null;
        },
        ModalHookReturnProps = function ModalHookReturnProps() {
          return null;
        };
      try {
        (modal_component_Modal.displayName = 'Modal'),
          (modal_component_Modal.__docgenInfo = {
            description: '',
            displayName: 'Modal',
            props: {
              isOpen: {
                defaultValue: null,
                description: 'Whether or not modal is open',
                name: 'isOpen',
                required: !0,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: 'Modal ID',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              dialogLabel: {
                defaultValue: null,
                description: "Dialog's label",
                name: 'dialogLabel',
                required: !1,
                type: { name: 'string' },
              },
              closeLabel: {
                defaultValue: null,
                description: 'Close modal label',
                name: 'closeLabel',
                required: !1,
                type: { name: 'string' },
              },
              onDismiss: {
                defaultValue: null,
                description: 'Callback for closing',
                name: 'onDismiss',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/modal/modal.component.tsx#Modal'
            ] = {
              docgenInfo: modal_component_Modal.__docgenInfo,
              name: 'Modal',
              path: 'src/hooks/modal/modal.component.tsx#Modal',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (ModalHookProps.displayName = 'ModalHookProps'),
          (ModalHookProps.__docgenInfo = {
            description: '',
            displayName: 'ModalHookProps',
            props: {
              isOpen: {
                defaultValue: null,
                description: 'Whether or not modal is open',
                name: 'isOpen',
                required: !0,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: 'Modal ID',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              dialogLabel: {
                defaultValue: null,
                description: "Dialog's label",
                name: 'dialogLabel',
                required: !1,
                type: { name: 'string' },
              },
              closeLabel: {
                defaultValue: null,
                description: 'Close modal label',
                name: 'closeLabel',
                required: !1,
                type: { name: 'string' },
              },
              onDismiss: {
                defaultValue: null,
                description: 'Callback for closing',
                name: 'onDismiss',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/modal/modal.component.tsx#ModalHookProps'
            ] = {
              docgenInfo: ModalHookProps.__docgenInfo,
              name: 'ModalHookProps',
              path: 'src/hooks/modal/modal.component.tsx#ModalHookProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (ModalHookReturnProps.displayName = 'ModalHookReturnProps'),
          (ModalHookReturnProps.__docgenInfo = {
            description: '',
            displayName: 'ModalHookReturnProps',
            props: {
              modalProps: {
                defaultValue: null,
                description: '',
                name: 'modalProps',
                required: !0,
                type: {
                  name: "{ 'aria-modal': true; role: \"dialog\"; 'aria-label': string; 'aria-hidden': boolean; 'aria-describedby': string; id: string; ref: (element: HTMLDivElement) => void; tabIndex: -1; }",
                },
              },
              closeButtonProps: {
                defaultValue: null,
                description: '',
                name: 'closeButtonProps',
                required: !0,
                type: {
                  name: "{ 'aria-label': string; onClick: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void; }",
                },
              },
              descriptionTextProps: {
                defaultValue: null,
                description: '',
                name: 'descriptionTextProps',
                required: !0,
                type: { name: '{ id: string; }' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/hooks/modal/modal.component.tsx#ModalHookReturnProps'
            ] = {
              docgenInfo: ModalHookReturnProps.__docgenInfo,
              name: 'ModalHookReturnProps',
              path: 'src/hooks/modal/modal.component.tsx#ModalHookReturnProps',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _excluded = ['components'];
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(dist_esm.d, {
            title: 'Aria Component/Modal',
            mdxType: 'Meta',
          }),
          Object(esm.b)('h1', { id: 'modal' }, 'Modal'),
          Object(esm.b)(
            'p',
            null,
            'A component that creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent window.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Most commonly it should draw attention to vital pieces of information or block the application flow until the information required to continue is entered.'
          ),
          Object(esm.b)('h2', { id: 'example' }, 'Example'),
          Object(esm.b)(
            dist_esm.c,
            { mdxSource: '%0A%3CModal%20/%3E%0A', mdxType: 'Canvas' },
            Object(esm.b)(modal_component_Modal, { mdxType: 'Modal' })
          ),
          Object(esm.b)('h2', { id: 'setup' }, 'Setup'),
          Object(esm.b)(
            'p',
            null,
            'The ',
            Object(esm.b)('inlineCode', { parentName: 'p' }, 'useAriaModal'),
            ' hook expects the following parameters:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: ModalHookProps,
            sort: 'requiredFirst',
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)(
            'p',
            null,
            'The hook returns an object with the following values:'
          ),
          Object(esm.b)(dist_esm.b, {
            of: ModalHookReturnProps,
            mdxType: 'ArgsTable',
          }),
          Object(esm.b)('h2', { id: 'component' }, 'Component'),
          Object(esm.b)(
            'p',
            null,
            'In order to create a fully accessible implementation of a modal using ',
            Object(esm.b)(
              'inlineCode',
              { parentName: 'p' },
              '@actum/aria-hooks'
            ),
            ', your component should look like the following:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-jsx' },
              "import { useAriaModal } from '@actum-digital/aria-hooks';\n\nconst Modal = () => {\n  const [isOpen, setOpen] = React.useState(false);\n\n  const { modalProps, closeButtonProps, descriptionTextProps } = useAriaModal({\n    isOpen,\n    onDismiss: () => setOpen(false),\n    id: 'modal-test-storybook',\n  });\n\n  return (\n    <>\n      <button onClick={() => setOpen(true)}>Open Modal</button>\n\n      <div className={`backdrop ${isOpen ? '' : 'backdrop--hidden'}`}>\n        <div className=\"modal\" {...modalProps}>\n          <h1 {...descriptionTextProps}>Modal Title</h1>\n          <button {...closeButtonProps}>Close Modal</button>\n        </div>\n      </div>\n    </>\n  );\n};\n"
            )
          ),
          Object(esm.b)('h2', { id: 'styles' }, 'Styles'),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-css' },
              '.backdrop {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  right: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background: #0007;\n}\n\n.backdrop--hidden {\n  display: none;\n}\n\n.modal {\n  width: 50%;\n  height: 50%;\n\n  background: white;\n}\n'
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Aria Component/Modal',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(esm.b)(
                dist_esm.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(esm.b)(MDXContent, null)
              );
            },
          }
        ));
      __webpack_exports__.default = componentMeta;
    },
  },
  [[553, 2, 3]],
]);
