import { useEffect } from "react";
import { BaseWindow } from "web.init/src/window";
import { api } from "web.utils/src/api";

var $ = require('jquery');
require('datatables.net')(window, $);
declare const window: BaseWindow

export default () => {
    const department = api("/api/get-department");
    api("/api/get-status").then((res) => {
        $('#dtable').DataTable({
            data: res.data,
            aoColumns: [
                { mData: 'id_status_ticket' },
                {
                    "mData": null,
                    "bSortable": false,
                    "sClass": "center",
                    "sWidth": "30%",
                    "mRender": function (data, type, full) {
                        if (full.status_ticket == "OPEN") {
                            return "<div class='flex items-center justify-center text-xs mx-12 my-4 px-4 py-2 bg-green-500 text-white rounded-lg'>" + full.status_ticket + "</div>";
                        } else if (full.status_ticket == "ASSIGNED") {
                            return "<div class='flex items-center justify-center text-xs mx-12 my-4 px-4 py-2 bg-yellow-500 text-white rounded-lg'>" + full.status_ticket + "</div>";
                        }else if (full.status_ticket == "IN PROGRESS") {
                            return "<div class='flex items-center justify-center text-xs mx-12 my-4 px-4 py-2 bg-red-500 text-white rounded-lg'>" + full.status_ticket + "</div>";
                        }else {
                            return "<div class='flex items-center justify-center text-xs mx-12 my-4 px-4 py-2 bg-gray-800 text-white rounded-lg'>" + full.status_ticket + "</div>";
                        }
                    }
                },
                { mData: 'behavior_ticket' },
                { mData: 'deskripsi_status_ticket' },
            ]
        });
    })

    return (
        <div>
            <table className="stripe w-full" id="dtable">
                <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="py-3">No</th>
                        <th className="pl-28 pl-10 py-3">Status Name</th>
                        <th className="py-3">Behavior</th>
                        <th className="py-3">Description</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400 "></tbody>
            </table>
        </div>
    )
}