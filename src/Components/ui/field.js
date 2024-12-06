var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Field as ChakraField } from "@chakra-ui/react";
import * as React from "react";
export var Field = React.forwardRef(function Field(props, ref) {
    var label = props.label, children = props.children, helperText = props.helperText, errorText = props.errorText, optionalText = props.optionalText, rest = __rest(props, ["label", "children", "helperText", "errorText", "optionalText"]);
    return (_jsxs(ChakraField.Root, __assign({ ref: ref }, rest, { children: [label && (_jsxs(ChakraField.Label, { children: [label, _jsx(ChakraField.RequiredIndicator, { fallback: optionalText })] })), children, helperText && (_jsx(ChakraField.HelperText, { children: helperText })), errorText && (_jsx(ChakraField.ErrorText, { children: errorText }))] })));
});