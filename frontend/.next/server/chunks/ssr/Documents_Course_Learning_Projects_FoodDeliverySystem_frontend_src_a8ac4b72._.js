module.exports = [
"[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/lib/global/hooks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"].withTypes();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"].withTypes();
}),
"[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$global$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/lib/global/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$slice$2f$menu$2f$menu$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/lib/slice/menu/menu.slice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Menu = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$global$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { data: menu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$global$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((store)=>store.menu);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$slice$2f$menu$2f$menu$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchMenuItem"])());
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-200 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: ` w-full min-h-screen flex flex-col flex-1 lg:grid lg:grid-cols-4 lg:gap-3 md:grid md:mx-4 md:grid-cols-3 md:gap-3 lg:mx-3 my-1 `,
            children: menu.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `/place-item/${item._id}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " group w-full h-[45vh] border border-gray-300 shadow-xl hover:shadow-white shadow-black  my-5 flex flex-col overflow-hidden transition-all duration-300 ease-out hover:scale-105 cursor-pointer ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.images[0],
                                className: "w-full h-1/2 object-cover px-2 py-1 rounded-xl "
                            }, void 0, false, {
                                fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-between flex-1 p-2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-xs",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/orders`,
                                        className: "flex  justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: " mr-4 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 transition-opacity duration-300  bg-amber-300 border   hover:bg-black hover:text-white rounded-xl shadow-2xl font-semibold cursor-pointer px-22 py-2",
                                                children: [
                                                    "$",
                                                    Number(item.price.$numberDecimal)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: " translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 transition-opacity duration-300  bg-green-300 text-black border   hover:bg-black hover:text-white rounded-xl shadow-2xl font-semibold cursor-pointer px-6 py-2",
                                                children: "Add to Cart"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/menu/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Menu;
}),
];

//# sourceMappingURL=Documents_Course_Learning_Projects_FoodDeliverySystem_frontend_src_a8ac4b72._.js.map