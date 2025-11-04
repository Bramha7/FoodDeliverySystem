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
"[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/place-item/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$global$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/lib/global/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SingleItem = (param)=>{
    let { params } = param;
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$global$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "SingleItem.useAppSelector": (store)=>store.menu.data
    }["SingleItem.useAppSelector"]);
    const { id } = params;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SingleItem.useEffect": ()=>{
            console.log(menu);
        }
    }["SingleItem.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
        fileName: "[project]/Documents/Course/Learning/Projects/FoodDeliverySystem/frontend/src/app/place-item/[id]/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SingleItem, "ROf5Nd/TnM1qpxyGP+XkrvWIzsM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Course$2f$Learning$2f$Projects$2f$FoodDeliverySystem$2f$frontend$2f$src$2f$lib$2f$global$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = SingleItem;
const __TURBOPACK__default__export__ = SingleItem;
var _c;
__turbopack_context__.k.register(_c, "SingleItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Course_Learning_Projects_FoodDeliverySystem_frontend_src_b91fde44._.js.map