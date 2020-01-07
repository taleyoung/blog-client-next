webpackHotUpdate("static/development/pages/overview.js",{

/***/ "./pages/overview/index.tsx":
/*!**********************************!*\
  !*** ./pages/overview/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/pagination */ "./node_modules/antd/lib/pagination/index.js");
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _client_components_Preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @client/components/Preview */ "./client/components/Preview/index.tsx");
/* harmony import */ var _client_redux_actions_article__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @client/redux/actions/article */ "./client/redux/actions/article.ts");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var Overview = function Overview(props) {
  console.log("props2 :", props); // const [loading, setLoading] = useState(true);

  var articleList = props.articleList;
  var total = articleList.total,
      _articleList$data = articleList.data,
      data = _articleList$data === void 0 ? [] : _articleList$data;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var getArticles =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return props.fetchArticleList();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getArticles() {
        return _ref.apply(this, arguments);
      };
    }();

    getArticles(); // setLoading(false);
  }, []);

  var toArticleDetail = function toArticleDetail(id) {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/article?id=".concat(id));
  };

  var pageChange =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(page) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return props.fetchArticleList(page);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function pageChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: "jsx-345726532" + " " + "container"
  }, __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
    spinning: false
  }, data.map(function (item, index) {
    return __jsx("div", {
      key: "".concat(item.title).concat(index),
      className: "jsx-345726532"
    }, __jsx(_client_components_Preview__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: item.id,
      title: item.title,
      content: item.content,
      tags: item.tags,
      time: item.updatedAt,
      toDetail: toArticleDetail
    }));
  }), __jsx(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default.a, {
    pageSize: 10,
    defaultCurrent: 1,
    total: total,
    onChange: function onChange(page) {
      return pageChange(page);
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "345726532"
  }, ".container.jsx-345726532{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWxleW91bmcvRG9jdW1lbnRzL+W8gOWPkS9ORVhUL0lzb21vcGhpYy10eS9wYWdlcy9vdmVydmlldy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RrQixBQUd3QiwwRUFDUyw4RUFDQyxtR0FDSiw2RkFDSCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3RhbGV5b3VuZy9Eb2N1bWVudHMv5byA5Y+RL05FWFQvSXNvbW9waGljLXR5L3BhZ2VzL292ZXJ2aWV3L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdpbmF0aW9uLCBTcGluIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFN0b3JlLCBBcnRpY2xlTGlzdCB9IGZyb20gXCJAY2xpZW50L3R5cGluZ3Mvc3RvcmVcIjtcbmltcG9ydCBQcmV2aWV3IGZyb20gXCJAY2xpZW50L2NvbXBvbmVudHMvUHJldmlld1wiO1xuaW1wb3J0IHsgZmV0Y2hBcnRpY2xlTGlzdCB9IGZyb20gXCJAY2xpZW50L3JlZHV4L2FjdGlvbnMvYXJ0aWNsZVwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFydGljbGVMaXN0OiBBcnRpY2xlTGlzdDtcbiAgZmV0Y2hBcnRpY2xlTGlzdDogdHlwZW9mIGZldGNoQXJ0aWNsZUxpc3Q7XG4gIHJlczogYW55O1xufVxuXG5pbnRlcmZhY2UgTmV4dCB7XG4gIGdldEluaXRpYWxQcm9wczogYW55O1xufVxuXG5jb25zdCBPdmVydmlldzogU0ZDPFByb3BzPiAmIE5leHQgPSBwcm9wcyA9PiB7XG4gIGNvbnNvbGUubG9nKFwicHJvcHMyIDpcIiwgcHJvcHMpO1xuICAvLyBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyBhcnRpY2xlTGlzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgdG90YWwsIGRhdGEgPSBbXSB9ID0gYXJ0aWNsZUxpc3Q7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRBcnRpY2xlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHByb3BzLmZldGNoQXJ0aWNsZUxpc3QoKTtcbiAgICB9O1xuICAgIGdldEFydGljbGVzKCk7XG4gICAgLy8gc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b0FydGljbGVEZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIFJvdXRlci5wdXNoKGAvYXJ0aWNsZT9pZD0ke2lkfWApO1xuICB9O1xuXG4gIGNvbnN0IHBhZ2VDaGFuZ2UgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgYXdhaXQgcHJvcHMuZmV0Y2hBcnRpY2xlTGlzdChwYWdlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8U3BpbiBzcGlubmluZz17ZmFsc2V9PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2Ake2l0ZW0udGl0bGV9JHtpbmRleH1gfT5cbiAgICAgICAgICAgIDxQcmV2aWV3XG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICB0YWdzPXtpdGVtLnRhZ3N9XG4gICAgICAgICAgICAgIHRpbWU9e2l0ZW0udXBkYXRlZEF0fVxuICAgICAgICAgICAgICB0b0RldGFpbD17dG9BcnRpY2xlRGV0YWlsfVxuICAgICAgICAgICAgPjwvUHJldmlldz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgcGFnZVNpemU9ezEwfVxuICAgICAgICAgIGRlZmF1bHRDdXJyZW50PXsxfVxuICAgICAgICAgIHRvdGFsPXt0b3RhbH1cbiAgICAgICAgICBvbkNoYW5nZT17cGFnZSA9PiBwYWdlQ2hhbmdlKHBhZ2UpfVxuICAgICAgICAvPlxuICAgICAgPC9TcGluPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5PdmVydmlldy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwi6L+b5YWlaW5pdGlhbFByb3BzIDpcIik7XG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoQXJ0aWNsZUxpc3QoKTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjMwMDAvYXBpL3YxL2FydGljbGVcIiwge1xuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH1cbiAgfSkudGhlbihyID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJcIiwgcik7XG4gICAgcmV0dXJuIHIuanNvbigpO1xuICB9KTtcbiAgY29uc29sZS5sb2coXCJyZXMgOlwiLCByZXMpO1xuICByZXR1cm4geyByZXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZTogU3RvcmUpID0+ICh7XG4gICAgYXJ0aWNsZUxpc3Q6IHN0YXRlLmFydGljbGUuYXJ0aWNsZUxpc3RcbiAgfSksXG4gIHsgZmV0Y2hBcnRpY2xlTGlzdCB9XG4pKE92ZXJ2aWV3KTtcbiJdfQ== */\n/*@ sourceURL=/Users/taleyoung/Documents/\u5F00\u53D1/NEXT/Isomophic-ty/pages/overview/index.tsx */"));
};

Overview.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
  var res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("进入initialProps :"); // const res = await fetchArticleList();

          _context3.next = 3;
          return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default()("http://127.0.0.1:3000/api/v1/article", {
            method: "get",
            headers: {
              "Content-Type": "application/json"
            }
          }).then(function (r) {
            console.log("r", r);
            return r.json();
          });

        case 3:
          res = _context3.sent;
          console.log("res :", res);
          return _context3.abrupt("return", {
            res: res
          });

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return {
    articleList: state.article.articleList
  };
}, {
  fetchArticleList: _client_redux_actions_article__WEBPACK_IMPORTED_MODULE_9__["fetchArticleList"]
})(Overview));

/***/ })

})
//# sourceMappingURL=overview.js.2c403f4b3535958cbbf1.hot-update.js.map