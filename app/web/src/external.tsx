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
  tabelperform: () => [
    import("./components/tabel-perform"),
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
  ],
  "linechart": () => [
    import("./components/linechart"),
  ],
  "barchart": () => [
    import("./components/barchart"),
  ],
  "doghnutchart": () => [
    import("./components/doghnutchart"),
  ],
  "doghnutchart-ros": () => [
    import("./components/doghnutchart-ros"),
  ],
  "barchart-overallticket": () => [
    import("./components/barchart-overallticket"),
  ],
  "barchart-overallemployee": () => [
    import("./components/barchart-overallemployee"),
  ],
  "linechart-overallemployee": () => [
    import("./components/linechart-overallemployee"),
  ],
  "groupchart": () => [
    import("./components/groupchart"),
  ],
  "groupchart-ttype": () => [
    import("./components/groupchart-ttype"),
  ],
  "groupchart-tlevel": () => [
    import("./components/groupchart-tlevel"),
  ],
  "groupchart-tdepartement": () => [
    import("./components/groupchart-tdepartement"),
  ],
  "linechart-overall": () => [
    import("./components/linechart"),
  ],
  "groupchart-elevel": () => [
    import("./components/groupchart-elevel"),
  ],
  "groupchart-etype": () => [
    import("./components/groupchart-etype"),
  ],
  "groupchart-avgfirstreply": () => [
    import("./components/groupchart-avgfirstreply"),
  ],
  "groupchart-avgticketsolved": () => [
    import("./components/groupchart-avgticketsolved"),
  ],
  "doghnutchart-dlevel": () => [
    import("./components/doghnutchart-tlevel"),
  ],
  "doghnutchart-dtype": () => [
    import("./components/doghnutchart-ttype"),
  ],
  "doghnutchart-m-level": () => [
    import("./components/doghnutchart-m-level"),
  ],
  "doghnutchart-m-type": () => [
    import("./components/doghnutchart-m-type"),
  ],
  "barchart-m-totalticket": () => [
    import("./components/barchart-m-totalticket"),
  ],
  "barchart-totalticket": () => [
    import("./components/barchart-totalticket"),
  ],
  "doughnutchart-client-level": () => [
    import("./components/doughnutchart-client-level"),
  ],
  "doughnutchart-client-type": () => [
    import("./components/doughnutchart-client-type"),
  ],
  "colorpicker": () => [
    import("./components/colorpicker"),
  ],
  "inputcolor": () => [
    import("./components/input-color"),
  ],
  "ratingstar": () => [
    import("./components/ratingstart"),
  ],
  "linechart-employee-level-high": () => [
    import("./components/linechart-employee-level-high"),
  ],
  "linechart-employee-level-medium": () => [
    import("./components/linechart-employee-level-medium"),
  ],
  "linechart-employee-level-low": () => [
    import("./components/linechart-employee-level-low"),
  ],
};
