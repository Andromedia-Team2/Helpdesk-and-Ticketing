// make sure to export default component not export const
export default {
"render-html": () => import("web.utils/components/RenderHTML"),
  "html-head": () => import("web.utils/components/HtmlHead"),
  "hello-world": () => import("web.utils/components/HelloWorld"),
  "loading": () => import("web.crud/src/legacy/Loading"),
  "admin": () => import("web.crud/src/CRUD"),
  "qform": () => import("web.crud/src/form/BaseForm"),
  "qlist": () => import("web.crud/src/list/QBaseList"),
  "ficon": () => import("./components/FluentIcon"),
  "faicon": () => import("./components/FAIcon"),
  "qrcode": () => import("./components/qrcode"),
  tabelvendor: () => [import("./components/tabel-vendor"), { c: "", s: "", h: "" }],
  tabelclient: () => [import("./components/tabel-client"), { c: "", s: "", h: "" }],
  tabelemployee: () => [import("./components/tabel-employee"), { c: "", s: "", h: "" }],
  tabeldepartment: () => [import("./components/tabel-department"), { c: "", s: "", h: "" }],
}
