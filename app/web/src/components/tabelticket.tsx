/** @jsx jsx */
import { useComponent } from "web.utils/component";
import { useEffect } from "react";
import { BaseWindow } from "web.init/src/window";
import { api } from "web.utils/src/api";

var $ = require("jquery");
require("datatables.net")(window, $);
declare const window: BaseWindow;

const format = (date) => {
  date = new Date(date);
  const day = ('0' + date.getDate()).slice(-2);
  const monthIndex = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);
  const myFormattedDate = day + "/" + (monthIndex) + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
  return myFormattedDate;
}

export default () => {
  var no = 0;
  api("/api/get-ticket").then((res) => {
    $("#dtable").DataTable({
      data: res.data,
      aoColumns: [
        { 
          mData: null,
          mRender: function (data, type, full) {
            no = no + 1;
            return (no);
          } 
        },
        {
          mData: null,
          mRender: function (data, type, full) {
            return (full.ticket.judul_ticket);
          }
        },
        {
          mData: null,
          mRender: function (data, type, full) {
            return (full.ticket.jenis_ticket.jenis_ticket);
          }
        },
         {
          mData: null,
          mRender: function (data, type, full) {
            return (format(full.tanggalMasuk_ticket));
          }
        },
         {
          mData: null,
          mRender: function (data, type, full) {
            if (full.tanggalSolved_ticket	 != null){
              return (format(full.tanggalSolved_ticket));
            }else{
              return ("Not Solved")
            }
          }
        },
        {
          "mData": null,
          "bSortable": false,
          "sClass": "center",
          "sWidth": "15%",
          mRender: function (data, type, full) {
            if (full.status_ticket.status_ticket == "OPEN") {
              return "<div class='flex items-center justify-center text-xs font-medium mx-4 my-4 py-2 bg-green-500 text-white rounded-xl'><b><a href='/ticket-data/view/"+ full.ticket.id_ticket +"'>" + full.status_ticket.status_ticket + "</a></b></div>";
            } else if (full.status_ticket.status_ticket == "ASSIGNED") {
              return "<div class='flex items-center justify-center text-xs font-medium mx-4 my-4 py-2 bg-yellow-500 text-white rounded-xl'><b><a href='/ticket-data/view/"+ full.ticket.id_ticket +"'>" + full.status_ticket.status_ticket + "</a></b></div>";
            } else if (full.status_ticket.status_ticket == "IN PROGRESS") {
              return "<div class='flex items-center justify-center text-xs font-medium mx-4 my-4 py-2 bg-red-500 text-white rounded-xl'><b><a href='/ticket-data/view/"+ full.ticket.id_ticket +"'>" + full.status_ticket.status_ticket + "</a></b></div>";
            } else {
              return "<div class='flex items-center justify-center text-xs font-medium mx-4 my-4 py-2 bg-gray-800 text-white rounded-xl'><b><a href='/ticket-data/view/"+ full.ticket.id_ticket +"'>" + full.status_ticket.status_ticket + "</a></b></div>";
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
            <th className="py-3">Subject</th>
            <th className="py-3">Ticket Type</th>
            <th className="py-3">Create At</th>
            <th className="py-3">Finished At</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400 "></tbody>
        </table>
    </div>
)
}