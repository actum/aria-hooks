(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{165:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return HiddenInfo})),__webpack_require__.d(__webpack_exports__,"a",(function(){return Backdrop}));__webpack_require__(10);var _templateObject,_templateObject2,styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(100);function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var HiddenInfo=styled_components__WEBPACK_IMPORTED_MODULE_1__.a.span(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n"]))),Backdrop=styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0007;\n\n  &.modal-backdrop--closed {\n    display: none;\n  }\n"])))},219:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return FocusTrapFactory}));var focus_trap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(463);var FocusTrapFactory=function FocusTrapFactory(container){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,FocusTrapFactory),this.container=void 0,this.focusTrap=void 0,this.mount=function(){var firstFocusableEl=_this.container.querySelector('button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');_this.focusTrap=Object(focus_trap__WEBPACK_IMPORTED_MODULE_0__.a)(_this.container,{preventScroll:!0,fallbackFocus:firstFocusableEl}),_this.focusTrap.activate()},this.destroy=function(){var _this$focusTrap;return null===(_this$focusTrap=_this.focusTrap)||void 0===_this$focusTrap?void 0:_this$focusTrap.deactivate()},this.container=container}},482:function(module,exports,__webpack_require__){__webpack_require__(483),__webpack_require__(643),__webpack_require__(644),__webpack_require__(844),__webpack_require__(845),__webpack_require__(854),__webpack_require__(855),__webpack_require__(849),__webpack_require__(846),__webpack_require__(856),__webpack_require__(847),__webpack_require__(848),__webpack_require__(857),module.exports=__webpack_require__(840)},550:function(module,exports){},644:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(347)},840:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(347).configure)([__webpack_require__(841),__webpack_require__(842)],module,!1)}).call(this,__webpack_require__(196)(module))},841:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=841},842:function(module,exports,__webpack_require__){var map={"./drawer/drawer.stories.tsx":850,"./modal/modal.stories.tsx":851,"./navigation/menubar.stories.tsx":852,"./tooltip/tooltip.stories.tsx":853};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=842},850:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Drawer",(function(){return drawer_stories_Drawer}));__webpack_require__(10),__webpack_require__(202),__webpack_require__(5),__webpack_require__(8),__webpack_require__(7),__webpack_require__(17),__webpack_require__(12),__webpack_require__(11),__webpack_require__(13),__webpack_require__(6),__webpack_require__(24),__webpack_require__(15);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),focusTrapFactory=__webpack_require__(219);var controller_DrawerController=function DrawerController(handleClose){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DrawerController),this.id=void 0,this.contentElement=void 0,this.wrapperElement=void 0,this.focusTrap=void 0,this.isOpen=void 0,this.handleClose=void 0,this.setContentRef=function(content){return _this.contentElement=content},this.setWrapperRef=function(content){_this.wrapperElement=content,_this.focusTrap=new focusTrapFactory.a(content)},this.onOpen=function(){_this.isOpen||(_this.focusTrap.mount(),window.addEventListener("keydown",_this.handleKeyDown),window.addEventListener("touchstart",_this.handleClick),window.addEventListener("mousedown",_this.handleClick),_this.isOpen=!0)},this.onClose=function(){var _this$handleClose;_this.isOpen&&(_this.focusTrap.destroy(),window.removeEventListener("keydown",_this.handleKeyDown),window.removeEventListener("touchstart",_this.handleClick),window.removeEventListener("mousedown",_this.handleClick),_this.isOpen=!1,null===(_this$handleClose=_this.handleClose)||void 0===_this$handleClose||_this$handleClose.call(_this))},this.handleKeyDown=function(e){"Escape"===e.key&&_this.onClose()},this.handleClick=function(e){var _this$contentElement;null!==(_this$contentElement=_this.contentElement)&&void 0!==_this$contentElement&&_this$contentElement.contains(e.target)||_this.onClose()},this.handleClose=handleClose},drawer_useAriaDrawer=function useAriaDrawer(_ref){var onDismiss=_ref.onDismiss,isOpen=_ref.isOpen,closeLabel=_ref.closeLabel,controller=Object(react.useRef)(new controller_DrawerController(onDismiss));Object(react.useEffect)((function(){isOpen?controller.current.onOpen():controller.current.onClose()}),[isOpen]);var drawerProps=Object(react.useMemo)((function(){return{"aria-hidden":!isOpen,ref:controller.current.setWrapperRef}}),[isOpen]),contentProps=Object(react.useMemo)((function(){return{ref:controller.current.setContentRef}}),[]),closeButtonProps=Object(react.useMemo)((function(){return{"aria-label":closeLabel||"Close drawer",onClick:function onClick(){return controller.current.onClose()}}}),[closeLabel]);return Object(react.useMemo)((function(){return{drawerProps:drawerProps,contentProps:contentProps,closeButtonProps:closeButtonProps}}),[drawerProps,contentProps,closeButtonProps])};try{drawer_useAriaDrawer.displayName="useAriaDrawer",drawer_useAriaDrawer.__docgenInfo={description:"",displayName:"useAriaDrawer",props:{id:{defaultValue:null,description:"Unique identifier to the drawer instance",name:"id",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"Used for controlled approach of toggling drawer on and off.",name:"isOpen",required:!0,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"Callback for when drawer closes internally",name:"onDismiss",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"'Close drawer'"},description:"Close drawer aria label",name:"closeLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/drawer/index.tsx#useAriaDrawer"]={docgenInfo:drawer_useAriaDrawer.__docgenInfo,name:"useAriaDrawer",path:"src/drawer/index.tsx#useAriaDrawer"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,shared_styled_components=__webpack_require__(165),styled_components_browser_esm=__webpack_require__(100),jsx_runtime=__webpack_require__(30);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var StyledDrawer=styled_components_browser_esm.a.div(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n  width: 400px;\n"]))),drawer_stories_Drawer=function Drawer(){var _React$useState2=_slicedToArray(react_default.a.useState(!1),2),isDrawerOpen=_React$useState2[0],setDrawerOpen=_React$useState2[1],_useAriaDrawer=drawer_useAriaDrawer({isOpen:isDrawerOpen,onDismiss:function onDismiss(){return setDrawerOpen(!1)},id:"drawer"}),drawerProps=_useAriaDrawer.drawerProps,closeButtonProps=_useAriaDrawer.closeButtonProps,contentProps=_useAriaDrawer.contentProps;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("button",{className:"App-link",onClick:function onClick(){return setDrawerOpen(!0)},children:"Open Drawer"}),Object(jsx_runtime.jsx)(shared_styled_components.a,Object.assign({className:"modal-backdrop "+(isDrawerOpen?"":"modal-backdrop--closed")},drawerProps,{children:Object(jsx_runtime.jsx)(StyledDrawer,Object.assign({},contentProps,{children:Object(jsx_runtime.jsx)("button",Object.assign({},closeButtonProps,{children:"Close"}))}))}))]})};__webpack_exports__.default={title:"Aria Component/Drawer",component:drawer_stories_Drawer};drawer_stories_Drawer.parameters=Object.assign({storySource:{source:"() => {\n  const [isDrawerOpen, setDrawerOpen] = React.useState(false);\n  const { drawerProps, closeButtonProps, contentProps } = useAriaDrawer({\n    isOpen: isDrawerOpen,\n    onDismiss: () => setDrawerOpen(false),\n    id: 'drawer',\n  });\n  return (\n    <>\n      <button className=\"App-link\" onClick={() => setDrawerOpen(true)}>\n        Open Drawer\n      </button>\n      <Backdrop\n        className={`modal-backdrop ${\n          isDrawerOpen ? '' : 'modal-backdrop--closed'\n        }`}\n        {...drawerProps}\n      >\n        <StyledDrawer {...contentProps}>\n          <button {...closeButtonProps}>Close</button>\n        </StyledDrawer>\n      </Backdrop>\n    </>\n  );\n}"}},drawer_stories_Drawer.parameters);try{drawer_stories_Drawer.displayName="Drawer",drawer_stories_Drawer.__docgenInfo={description:"",displayName:"Drawer",props:{id:{defaultValue:null,description:"Unique identifier to the drawer instance",name:"id",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"Used for controlled approach of toggling drawer on and off.",name:"isOpen",required:!0,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"Callback for when drawer closes internally",name:"onDismiss",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"'Close drawer'"},description:"Close drawer aria label",name:"closeLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/drawer/drawer.stories.tsx#Drawer"]={docgenInfo:drawer_stories_Drawer.__docgenInfo,name:"Drawer",path:"src/drawer/drawer.stories.tsx#Drawer"})}catch(__react_docgen_typescript_loader_error){}},851:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Modal",(function(){return modal_stories_Modal}));__webpack_require__(10),__webpack_require__(202),__webpack_require__(5),__webpack_require__(8),__webpack_require__(7),__webpack_require__(17),__webpack_require__(12),__webpack_require__(11),__webpack_require__(13),__webpack_require__(6),__webpack_require__(24),__webpack_require__(15);var react=__webpack_require__(0),focusTrapFactory=__webpack_require__(219);var _templateObject,controller_ModalController=function ModalController(onDismiss,id){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ModalController),this.focusTrap=void 0,this.modalRef=void 0,this.isOpen=void 0,this.onDismiss=void 0,this.id=void 0,this.setModalRef=function(modal){return _this.modalRef=modal},this.onOpen=function(){_this.isOpen||((_this.modalRef||document.getElementById(_this.id))&&(_this.focusTrap=new focusTrapFactory.a(_this.modalRef),_this.focusTrap.mount()),window.addEventListener("keydown",_this.handleKeyPress),window.addEventListener("touchstart",_this.handleClick),window.addEventListener("mousedown",_this.handleClick),_this.isOpen=!0)},this.onClose=function(){var _this$focusTrap,_this$onDismiss;_this.isOpen&&(null===(_this$focusTrap=_this.focusTrap)||void 0===_this$focusTrap||_this$focusTrap.destroy(),window.removeEventListener("keydown",_this.handleKeyPress),window.removeEventListener("touchstart",_this.handleClick),window.removeEventListener("mousedown",_this.handleClick),null===(_this$onDismiss=_this.onDismiss)||void 0===_this$onDismiss||_this$onDismiss.call(_this),_this.isOpen=!1)},this.handleKeyPress=function(ev){"Escape"===ev.key&&(ev.stopPropagation(),_this.onClose())},this.handleClick=function(e){_this.modalRef.contains(e.target)||_this.onClose()},this.onDismiss=onDismiss,this.id=id},getDescriptionId=function getDescriptionId(id){return id+"__description"},shared_styled_components=__webpack_require__(165),styled_components_browser_esm=__webpack_require__(100),jsx_runtime=__webpack_require__(30);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var StyledModal=styled_components_browser_esm.a.div(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  background: white;\n  width: 50%;\n  height: 60%;\n"]))),modal_stories_Modal=function Modal(){var _React$useState2=_slicedToArray(react.useState(!1),2),isModalOpen=_React$useState2[0],setModalOpen=_React$useState2[1],_useAriaModal=function useAriaModal(_ref){var isOpen=_ref.isOpen,onDismiss=_ref.onDismiss,dialogLabel=_ref.dialogLabel,closeLabel=_ref.closeLabel,id=_ref.id,controller=(_ref.description,Object(react.useRef)(new controller_ModalController(onDismiss,id)));Object(react.useEffect)((function(){isOpen?controller.current.onOpen():controller.current.onClose()}),[isOpen]);var modalProps=Object(react.useMemo)((function(){return{"aria-modal":!0,role:"dialog","aria-label":dialogLabel,"aria-hidden":!isOpen,"aria-describedby":getDescriptionId(id),id:id,ref:controller.current.setModalRef,tabIndex:-1}}),[isOpen,id,dialogLabel]),closeButtonProps=Object(react.useMemo)((function(){return{"aria-label":closeLabel||"Close modal",onClick:function onClick(){return controller.current.onClose()}}}),[closeLabel]),descriptionSpanProps=Object(react.useMemo)((function(){return{id:getDescriptionId(id)}}),[id]);return Object(react.useMemo)((function(){return{modalProps:modalProps,closeButtonProps:closeButtonProps,descriptionSpanProps:descriptionSpanProps}}),[modalProps,closeButtonProps,descriptionSpanProps])}({isOpen:isModalOpen,onDismiss:function onDismiss(){return setModalOpen(!1)},description:"A cool modal",id:"modal-test-storybook"}),modalProps=_useAriaModal.modalProps,closeButtonProps=_useAriaModal.closeButtonProps,descriptionSpanProps=_useAriaModal.descriptionSpanProps;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("button",{className:"App-link",onClick:function onClick(){return setModalOpen(!0)},children:"Open Modal"}),Object(jsx_runtime.jsx)(shared_styled_components.a,{className:"modal-backdrop "+(isModalOpen?"":"modal-backdrop--closed"),children:Object(jsx_runtime.jsxs)(StyledModal,Object.assign({},modalProps,{children:[Object(jsx_runtime.jsx)(shared_styled_components.b,Object.assign({},descriptionSpanProps,{children:"The description of the modal"})),Object(jsx_runtime.jsx)("button",Object.assign({},closeButtonProps,{children:"Close"}))]}))})]})};__webpack_exports__.default={title:"Aria Component/Modal",component:modal_stories_Modal};modal_stories_Modal.parameters=Object.assign({storySource:{source:"() => {\n  const [isModalOpen, setModalOpen] = React.useState(false);\n\n  const { modalProps, closeButtonProps, descriptionSpanProps } = useAriaModal({\n    isOpen: isModalOpen,\n    onDismiss: () => setModalOpen(false),\n    description: 'A cool modal',\n    id: 'modal-test-storybook',\n  });\n\n  return (\n    <>\n      <button className=\"App-link\" onClick={() => setModalOpen(true)}>\n        Open Modal\n      </button>\n\n      <Backdrop\n        className={`modal-backdrop ${\n          isModalOpen ? '' : 'modal-backdrop--closed'\n        }`}\n      >\n        <StyledModal {...modalProps}>\n          <HiddenInfo {...descriptionSpanProps}>\n            The description of the modal\n          </HiddenInfo>\n          <button {...closeButtonProps}>Close</button>\n        </StyledModal>\n      </Backdrop>\n    </>\n  );\n}"}},modal_stories_Modal.parameters);try{modal_stories_Modal.displayName="Modal",modal_stories_Modal.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"Whether or not modal is open",name:"isOpen",required:!0,type:{name:"boolean"}},id:{defaultValue:null,description:"Modal ID",name:"id",required:!1,type:{name:"string"}},dialogLabel:{defaultValue:null,description:"Dialog's label",name:"dialogLabel",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description of the content",name:"description",required:!1,type:{name:"string"}},closeLabel:{defaultValue:null,description:"Close modal label",name:"closeLabel",required:!1,type:{name:"string"}},onDismiss:{defaultValue:null,description:"Callback for closing",name:"onDismiss",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modal/modal.stories.tsx#Modal"]={docgenInfo:modal_stories_Modal.__docgenInfo,name:"Modal",path:"src/modal/modal.stories.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},852:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Menubar",(function(){return menubar_stories_Menubar}));__webpack_require__(25),__webpack_require__(15);var react=__webpack_require__(0);__webpack_require__(202),__webpack_require__(5),__webpack_require__(8),__webpack_require__(7),__webpack_require__(17),__webpack_require__(12),__webpack_require__(11),__webpack_require__(13),__webpack_require__(10),__webpack_require__(6),__webpack_require__(24),__webpack_require__(63),__webpack_require__(69),__webpack_require__(396),__webpack_require__(435),__webpack_require__(43);var NavigationContoller=function NavigationContoller(id){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,NavigationContoller),this.menuRef=void 0,this.id=void 0,this.setMenuRef=function(menu){_this.menuRef=menu||document.getElementById(_this.id)},this.setActivity=function(isActive,setIsActive){Array.from(_this.menuRef.querySelectorAll("a")).includes(document.activeElement)&&!isActive?setIsActive(!0):setIsActive(!1)},this.onActive=function(){window.addEventListener("keydown",_this.handleKeyPress)},this.onInactive=function(){window.removeEventListener("keydown",_this.handleKeyPress)},this.getFocusedIndex=function(){if(void 0===_this.menuRef)return-1;var items=Array.from(_this.menuRef.querySelectorAll("li>a"));return items?items.findIndex((function(item){return item.isSameNode(document.activeElement)})):-1},this.changeFocusToItem=function(item){var _items$index,index=_this.getFocusedIndex(),items=Array.from(_this.menuRef.querySelectorAll("li>a"));index="last"===item?items.length-1:"first"===item?0:"next"===item?index===items.length-1?0:index+1:index<=0?items.length-1:index-1,items.forEach((function(item,i){item.tabIndex=index===i?0:-1})),null===(_items$index=items[index])||void 0===_items$index||_items$index.focus()},this.handleKeyPress=function(e){switch(e.key){case"ArrowRight":_this.changeFocusToItem("next");break;case"ArrowLeft":_this.changeFocusToItem("prev");break;case"Home":_this.changeFocusToItem("first");break;case"End":_this.changeFocusToItem("last")}},this.id=id};function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var jsx_runtime=__webpack_require__(30),menubar_stories_Menubar=function Menubar(){var _useAriaNavigation=function useAriaNavigation(_ref){var menubarLabel=_ref.menubarLabel,id=_ref.id,controller=Object(react.useRef)(new NavigationContoller(id)),_useState2=_slicedToArray(Object(react.useState)(!1),2),isActive=_useState2[0],setIsActive=_useState2[1],setActivity=function setActivity(){controller.current.setActivity(isActive,setIsActive)};Object(react.useEffect)((function(){return document.addEventListener("focusin",setActivity),function(){document.removeEventListener("focusin",setActivity)}}),[]),Object(react.useEffect)((function(){isActive?controller.current.onActive():controller.current.onInactive()}),[isActive]);var menubarProps=Object(react.useMemo)((function(){return{id:id,role:"menubar","aria-label":menubarLabel||"Main menubar",ref:controller.current.setMenuRef}}),[menubarLabel,id]),menuItemProps=Object(react.useCallback)((function(i){var focusedIndex=controller.current.getFocusedIndex();return{role:"menuitem",tabIndex:-1===focusedIndex&&0===i||focusedIndex===i?0:-1}}),[]),itemProps=Object(react.useMemo)((function(){return{role:"none"}}),[]);return Object(react.useMemo)((function(){return{itemProps:itemProps,menuItemProps:menuItemProps,menubarProps:menubarProps}}),[itemProps,menuItemProps,menubarProps])}({menubarLabel:"Main navigation menu",id:"navigation"}),menubarProps=_useAriaNavigation.menubarProps,menuItemProps=_useAriaNavigation.menuItemProps,itemProps=_useAriaNavigation.itemProps;return Object(jsx_runtime.jsx)("nav",{children:Object(jsx_runtime.jsx)("ul",Object.assign({},menubarProps,{children:[{title:"Home"},{title:"Contact"},{title:"About"}].map((function(item,idx){return Object(jsx_runtime.jsx)("li",Object.assign({},itemProps,{children:Object(jsx_runtime.jsx)("a",Object.assign({href:"#"},menuItemProps(idx),{children:item.title}))}),item.title)}))}))})};menubar_stories_Menubar.displayName="Menubar";__webpack_exports__.default={title:"Aria Component/Menubar",component:menubar_stories_Menubar};menubar_stories_Menubar.parameters=Object.assign({storySource:{source:"() => {\n  const items = [{ title: 'Home' }, { title: 'Contact' }, { title: 'About' }];\n\n  const { menubarProps, menuItemProps, itemProps } = useAriaNavigation({\n    menubarLabel: 'Main navigation menu',\n    id: 'navigation',\n  });\n\n  return (\n    <nav>\n      <ul {...menubarProps}>\n        {items.map((item, idx) => (\n          <li key={item.title} {...itemProps}>\n            <a href=\"#\" {...menuItemProps(idx)}>\n              {item.title}\n            </a>\n          </li>\n        ))}\n      </ul>\n    </nav>\n  );\n}"}},menubar_stories_Menubar.parameters);try{menubar_stories_Menubar.displayName="Menubar",menubar_stories_Menubar.__docgenInfo={description:"",displayName:"Menubar",props:{id:{defaultValue:null,description:"Unique ID for the menu",name:"id",required:!0,type:{name:"string"}},menubarLabel:{defaultValue:null,description:"Label for menu, which will be presented to screen readers",name:"menubarLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/navigation/menubar.stories.tsx#Menubar"]={docgenInfo:menubar_stories_Menubar.__docgenInfo,name:"Menubar",path:"src/navigation/menubar.stories.tsx#Menubar"})}catch(__react_docgen_typescript_loader_error){}},853:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Tooltip",(function(){return tooltip_stories_Tooltip}));__webpack_require__(10),__webpack_require__(202),__webpack_require__(5),__webpack_require__(8),__webpack_require__(7),__webpack_require__(17),__webpack_require__(12),__webpack_require__(11),__webpack_require__(13),__webpack_require__(6),__webpack_require__(24),__webpack_require__(15);var react=__webpack_require__(0);var _templateObject,ToolTipController=function ToolTipController(id,onDismiss,onRelease){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ToolTipController),this.id=void 0,this.buttonRef=void 0,this.tooltipRef=void 0,this.onDismiss=void 0,this.onRelease=void 0,this.getBtnId=function(){return _this.id+"_button"},this.getTooltipId=function(){return _this.id+"_tooltip"},this.setBtnRef=function(buttonRef){_this.buttonRef=buttonRef},this.setTooltipRef=function(tooltipRef){_this.tooltipRef=tooltipRef},this.registerEvents=function(){var button=_this.buttonRef||document.getElementById(_this.getBtnId());button.addEventListener("focus",_this.onOpen),button.addEventListener("blur",_this.onClose),button.addEventListener("mouseenter",_this.onOpen),button.addEventListener("mouseleave",_this.onClose)},this.onOpen=function(){var _this$onRelease,button=_this.buttonRef||document.getElementById(_this.getBtnId()),tooltip=_this.tooltipRef||document.getElementById(_this.getTooltipId());button.setAttribute("aria-expanded","true"),tooltip.style.visibility="visible",window.addEventListener("keydown",_this.handleKeyDown),null===(_this$onRelease=_this.onRelease)||void 0===_this$onRelease||_this$onRelease.call(_this)},this.onClose=function(){var _this$onDismiss,button=_this.buttonRef||document.getElementById(_this.getBtnId()),tooltip=_this.tooltipRef||document.getElementById(_this.getTooltipId());button.setAttribute("aria-expanded","false"),tooltip.style.visibility="hidden",window.removeEventListener("keydown",_this.handleKeyDown),null===(_this$onDismiss=_this.onDismiss)||void 0===_this$onDismiss||_this$onDismiss.call(_this)},this.handleKeyDown=function(e){"Escape"===e.key&&_this.onClose()},this.id=id,this.onDismiss=onDismiss,this.onRelease=onRelease},styled_components_browser_esm=__webpack_require__(100),jsx_runtime=__webpack_require__(30);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var StyledTooltip=styled_components_browser_esm.a.div(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: initial;\n  margin-left: 10px;\n  padding: 5px;\n  border: 1px solid black;\n"]))),tooltip_stories_Tooltip=function Tooltip(){var _useState2=_slicedToArray(Object(react.useState)(!1),2),isShowing=_useState2[0],setIsShowing=_useState2[1],_useAriaToolTip=function useAriaToolTip(_ref){var id=_ref.id,onRelease=_ref.onRelease,onDismiss=_ref.onDismiss,isShowing=_ref.isShowing,controller=Object(react.useRef)(new ToolTipController(id,onRelease,onDismiss));Object(react.useEffect)((function(){controller.current.registerEvents()}),[]);var buttonProps=Object(react.useMemo)((function(){return{id:controller.current.getBtnId(),ref:controller.current.setBtnRef,role:"button",tabIndex:0,"aria-expanded":!!isShowing,"aria-describedby":controller.current.getTooltipId()}}),[id]),toolTipProps=Object(react.useMemo)((function(){return{id:controller.current.getTooltipId(),ref:controller.current.setTooltipRef,role:"tooltip",style:{visibility:isShowing?"visible":"hidden"}}}),[id]);return Object(react.useMemo)((function(){return{buttonProps:buttonProps,toolTipProps:toolTipProps}}),[buttonProps,toolTipProps])}({id:"tooltip",isShowing:isShowing,onRelease:function onRelease(){return setIsShowing(!0)},onDismiss:function onDismiss(){return setIsShowing(!1)}}),buttonProps=_useAriaToolTip.buttonProps,toolTipProps=_useAriaToolTip.toolTipProps;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("button",Object.assign({},buttonProps,{children:"See tooltip"})),Object(jsx_runtime.jsx)(StyledTooltip,Object.assign({},toolTipProps,{children:"I am the tool tip :)"}))]})};__webpack_exports__.default={title:"Aria Component/Tooltip",component:tooltip_stories_Tooltip};tooltip_stories_Tooltip.parameters=Object.assign({storySource:{source:"() => {\n  const [isShowing, setIsShowing] = useState(false);\n\n  const { buttonProps, toolTipProps } = useAriaToolTip({\n    id: 'tooltip',\n    isShowing,\n    onRelease: () => setIsShowing(true),\n    onDismiss: () => setIsShowing(false),\n  });\n\n  return (\n    <>\n      <button {...buttonProps}>See tooltip</button>\n      <StyledTooltip {...toolTipProps}>{'I am the tool tip :)'}</StyledTooltip>\n    </>\n  );\n}"}},tooltip_stories_Tooltip.parameters);try{tooltip_stories_Tooltip.displayName="Tooltip",tooltip_stories_Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{id:{defaultValue:null,description:"Unique ID for the Tooltip",name:"id",required:!0,type:{name:"string"}},onDismiss:{defaultValue:null,description:"Callback for closing tooltip",name:"onDismiss",required:!1,type:{name:"() => void"}},isShowing:{defaultValue:null,description:"Whether or not Tooltip is visible",name:"isShowing",required:!1,type:{name:"boolean"}},onRelease:{defaultValue:null,description:"Callback for opening tooltip",name:"onRelease",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tooltip/tooltip.stories.tsx#Tooltip"]={docgenInfo:tooltip_stories_Tooltip.__docgenInfo,name:"Tooltip",path:"src/tooltip/tooltip.stories.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},857:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(22),__webpack_require__(5),__webpack_require__(48),__webpack_require__(427),__webpack_require__(435),__webpack_require__(43),__webpack_require__(838),__webpack_require__(839),__webpack_require__(426);var client_api=__webpack_require__(864),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[482,2,3]]]);