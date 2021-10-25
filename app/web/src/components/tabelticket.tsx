/** @jsx jsx */
import { useComponent } from "web.utils/component";
import { useEffect } from "react";
import { BaseWindow } from "web.init/src/window";
import { api } from "web.utils/src/api";

var $ = require("jquery");
require("datatables.net")(window, $);
declare const window: BaseWindow;

export default () => {
  api("/api/get-ticket").then((res) => {
    $("#dtable").DataTable({
      data: res.data,
      aoColumns: [
        { 
          mData: "id_ticket" 
        },
        {
          mData: "judul_ticket",
        },
        {
          mData: "jenis_ticket",
        },
         {
          mData: "tanggal_masuk",
        },
         {
          mData: "tanggal_solved",
        },
        {
          mData: null,
          bSortable: false,
          sWidth: "10%",
          sClass: "center",
          onclick :"false",
          mRender: function (data, type, full) {
            return (
              
              "<button class='space-x-3 items-center justify-center px-2 my-2 py-1 bg-green-500 border  rounded-lg'><a class='text-sm font-sm text-white' " +
              full.id_status_ticket +
              "'> OPEN" +
              
              "<path fill-rule='evenodd' d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z' clip-rule='evenodd'></path>" +
              "</svg></a></button></div>"

              // "<button class='space-x-3 items-center justify-center px-2 my-2 py-1 bg-yellow-600 border  rounded-lg'><a class='text-sm font-sm text-white'" +
              // full.id_status_ticket +
              // "'> ASSIGNED" +
              
              // "<path fill-rule='evenodd' d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z' clip-rule='evenodd'></path>" +
              // "</svg></a></button></div>"

              // "<button class='space-x-3 items-center justify-center px-2 my-2 py-1 bg-red-600 border  rounded-lg'><a class='text-sm font-sm text-white' " +
              // full.id_status_ticket +
              // "'> IN PROGRESS" +
              
              // "<path fill-rule='evenodd' d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z' clip-rule='evenodd'></path>" +
              // "</svg></a></button></div>"

              // "<button class='space-x-3 items-center justify-center px-2 my-2 py-1 bg-gray-800 border  rounded-lg'><a class='text-sm font-sm text-white' " +
              // full.id_status_ticket +
              // "'> RESOLVED" +
              
              // "<path fill-rule='evenodd' d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z' clip-rule='evenodd'></path>" +
              // "</svg></a></button></div>"
            ); 
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
            <th className="pl-28 pl-10 py-3">Subject</th>
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