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
import { Group, InputElement } from "@chakra-ui/react";
import * as React from "react";
export var InputGroup = React.forwardRef(function InputGroup(props, ref) {
    var startElement = props.startElement, startElementProps = props.startElementProps, endElement = props.endElement, endElementProps = props.endElementProps, children = props.children, _a = props.startOffset, startOffset = _a === void 0 ? "6px" : _a, _b = props.endOffset, endOffset = _b === void 0 ? "6px" : _b, rest = __rest(props, ["startElement", "startElementProps", "endElement", "endElementProps", "children", "startOffset", "endOffset"]);
    return (_jsxs(Group, __assign({ ref: ref }, rest, { children: [startElement && (_jsx(InputElement, __assign({ pointerEvents: "none" }, startElementProps, { children: startElement }))), React.cloneElement(children, __assign(__assign(__assign({}, (startElement && {
                ps: "calc(var(--input-height) - ".concat(startOffset, ")"),
            })), (endElement && { pe: "calc(var(--input-height) - ".concat(endOffset, ")") })), children.props)), endElement && (_jsx(InputElement, __assign({ placement: "end" }, endElementProps, { children: endElement })))] })));
});
