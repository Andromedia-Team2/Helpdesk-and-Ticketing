/** @jsx jsx */
import { useComponent } from "web.utils/component";
import { useEffect } from "react";
import { BaseWindow } from "web.init/src/window";
import { api } from "web.utils/src/api";

var $ = require("jquery");
require("datatables.net")(window, $);
declare const window: BaseWindow;

export default () => {
  var no = 0;
  api("/api/get-ticket").then((res) => {
    $("#dtable").DataTable({
      data: res.data,
      aoColumns: [
        { 
          mData: null,
          mRender: function (data, type, full) {
            return (no + 1);
          } 
        },
        {
          mData: null,
          mRender: function (data, type, full) {
            return " <div class='flex items-center justify-center bg-green-500 rounded-full'></div> "+
             "<div class='flex items-center justify-center '>"+
            "<div class='flex flex-col items-center justify-center '>" 
            + full.client.nama_client +  "</div><br/>"+
            "<div class='flex flex-col items-center justify-center '>" 
            + full.client.email_client +  "</div>"+
            "</div>";
            // (full.client.nama_client);
          },
        },
        {
          mData: "judul_ticket",
        },
         
         {
          mData: null,
          mRender: function (data, type, full) {
            return (full.jenis_ticket.jenis_ticket);
          },
        },{
           mData: "tanggal_solved",
        },
        {
          "mData": null,
          "bSortable": false,
          "sClass": "center",
          "sWidth": "15%",
          mRender: function (data, type, full) {
            if (full.status_ticket.status_ticket == "OPEN") {
              return "<div class='flex items-center justify-center text-xs mx-4 my-4 py-2 bg-green-500 text-white rounded-lg'><b>" + full.status_ticket.status_ticket + "</b></div>";
            } else if (full.status_ticket.status_ticket == "ASSIGNED") {
              return "<div class='flex items-center justify-center text-xs mx-4 my-4 py-2 bg-yellow-500 text-white rounded-lg'><b>" + full.status_ticket.status_ticket + "</b></div>";
            } else if (full.status_ticket.status_ticket == "IN PROGRESS") {
              return "<div class='flex items-center justify-center text-xs mx-4 my-4 py-2 bg-red-500 text-white rounded-xl'><b>" + full.status_ticket.status_ticket + "</b></div>";
            } else {
              return "<div class='flex items-center justify-center text-xs mx-4 my-4 py-2 bg-gray-800 text-white rounded-lg'><b>" + full.status_ticket.status_ticket + "</b></div>";
            }
          }, 
        },
      ],
    });
  });

  return (
    <div>
        <table className="stripe w-full whitespace-no-wrap" id="dtable">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="py-3">No</th>
            <th className="py-3">Client</th>
            <th className="py-3">Subject</th>
            <th className="py-3">Ticket Type</th>
            <th className="py-3">Update At</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400 "></tbody>
        </table>
    </div>
)
}