// make sure to export default component not export const
export default {
  "render-html": () => [
    import("web.utils/components/RenderHTML"),
    { c: "", s: "", h: "" },
  ],
  "html-head": () => [
    import("web.utils/components/HtmlHead"),
    { c: "", s: "", h: "" },
  ],
  "hello-world": () => [
    import("web.utils/components/HelloWorld"),
    { c: "", s: "", h: "" },
  ],
  loading: () => [
    import("web.crud/src/legacy/Loading"),
    { c: "", s: "", h: "" },
  ],
  admin: () => [import("web.crud/src/CRUD"), { c: "", s: "", h: "" }],
  qform: () => [import("web.crud/src/form/BaseForm"), { c: "", s: "", h: "" }],
  qlist: () => [import("web.crud/src/list/QBaseList"), { c: "", s: "", h: "" }],
  ficon: () => [import("./components/FluentIcon"), { c: "", s: "", h: "" }],
  faicon: () => [import("./components/FAIcon"), { c: "", s: "", h: "" }],
  qrcode: () => [import("./components/qrcode"), { c: "", s: "", h: "" }],
  dropify: () => [import("./components/Dropify"), { c: "", s: "", h: "" }],
  tabelvendor: () => [
    import("./components/tabel-vendor"),
    { c: "", s: "", h: "" },
  ],
  tabelclient: () => [
    import("./components/tabel-client"),
    { c: "", s: "", h: "" },
  ],
  tabelemployee: () => [
    import("./components/tabel-employee"),
    { c: "", s: "", h: "" },
  ],
  tabeldepartment: () => [
    import("./components/tabel-department"),
    { c: "", s: "", h: "" },
  ],
  tabeljenis: () => [
    import("./components/tabel-jenis"),
    { c: "", s: "", h: "" },
  ],
  tabellevel: () => [
    import("./components/tabel-level"),
    { c: "", s: "", h: "" },
  ],
  tabelstatus: () => [
    import("./components/tabel-status"),
    { c: "", s: "", h: "" },
  ],
  tabelticket: () => [
    import("./components/tabelticket"),
    { c: "", s: "", h: "" },
  ],
  tabelticketlistven: () => [
    import("./components/tabelticketlistven"),
    { c: "", s: "", h: "" },
  ],
  tabelticketlistemp: () => [
    import("./components/tabelticketlistemp"),
    { c: "", s: "", h: "" },
  ],
  "dropdown-mobile": () => [
    import("./components/dropdown-mobile"),
    { c: "", s: "", h: "" },
  ],
};
