(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/lib/global/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"].withTypes();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"].withTypes();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$global$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/lib/global/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$slice$2f$menu$2f$menu$2e$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/lib/slice/menu/menu.slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Menu = ()=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$global$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { data: menu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$global$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Menu.useAppSelector": (store)=>store.menu
    }["Menu.useAppSelector"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Menu.useEffect": ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$slice$2f$menu$2f$menu$2e$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMenuItem"])());
        }
    }["Menu.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-200 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " w-full min-h-screen flex flex-col flex-1 lg:grid lg:grid-cols-4 lg:gap-3 md:grid md:mx-4 md:grid-cols-3 md:gap-3 lg:mx-3 my-1 ",
            children: menu.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " group w-full h-[45vh] border border-gray-300 shadow-xl hover:shadow-white shadow-black  my-5 flex flex-col overflow-hidden transition-all duration-300 ease-out hover:scale-105 ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.images[0],
                            className: "w-full h-1/2 object-cover px-2 py-1 rounded-xl "
                        }, void 0, false, {
                            fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-between flex-1 p-2 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    children: "Fish Curry"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-xs",
                                    children: "Fish curry is an Indian popular dish, loved in Nepal. It’s a flavorful, go-to meal for food lovers."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: " translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 transition-opacity duration-300  bg-amber-300 border mx-3 my-2 px-3 py-2 hover:bg-black hover:text-white rounded-2xl shadow-2xl font-semibold cursor-pointer",
                                    children: [
                                        "$",
                                        Number(item.price.$numberDecimal)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Menu, "xRSUGeSKhqcexAVDAVJl4FPAD/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$global$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$global$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = Menu;
const __TURBOPACK__default__export__ = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Course_Learning_Projects_FoodDeliverySystem_frontend_src_583f1561._.js.map