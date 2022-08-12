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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
var counter = 0;
var MyButton = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "primary" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.variant, variant = _d === void 0 ? "contained" : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, children = _a.children, onClick = _a.onClick;
    var _f = useState(null), clickPosition = _f[0], setClickPosition = _f[1];
    var _g = useState([]), rippleArr = _g[0], setRippleArr = _g[1];
    var handleClick = function (e) {
        if (disabled)
            return;
        var _a = e.nativeEvent, offsetX = _a.offsetX, offsetY = _a.offsetY;
        setClickPosition({ x: offsetX, y: offsetY });
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    useEffect(function () {
        //add the ripple circle to the rippleArr state
        if (clickPosition !== null) {
            var newRipple_1 = (_jsx("div", { "data-testid": "ripple-element", style: {
                    position: "absolute",
                    left: clickPosition.x,
                    top: clickPosition.y,
                    transform: "translate(-50%,-50%)"
                }, className: "btn-ripple-".concat(color, "-").concat(variant), onAnimationEnd: function () {
                    setRippleArr(function (prev) {
                        var nextRippleArr = __spreadArray([], prev, true);
                        nextRippleArr.shift();
                        return nextRippleArr;
                    });
                } }, counter++));
            setRippleArr(function (prev) { return __spreadArray(__spreadArray([], prev, true), [newRipple_1], false); });
        }
    }, [clickPosition]);
    var constructClassName = function () {
        var colorVariantCls = "btn-".concat(color, "-").concat(variant);
        var sizeCls = "btn-".concat(size);
        return ["btn", colorVariantCls, sizeCls].join(" ");
    };
    //"btn btn-large"
    return (_jsxs("button", __assign({ id: "123", onClick: handleClick, disabled: disabled, className: constructClassName() }, { children: [_jsx("span", { children: children }), rippleArr] })));
};
export default MyButton;
//# sourceMappingURL=MyButton.js.map