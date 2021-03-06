import { useEffect } from "react";
import { BaseWindow } from "web.init/src/window";
import { api } from "web.utils/src/api";

var $ = require('jquery');
require('datatables.net')(window, $);
declare const window: BaseWindow

export default (x) => {
    console.log(x.data);
    api("/api/get-department").then((res) => {
        $('#dtable').DataTable({
            data: res.data,
            aoColumns: [
                { mData: 'nama_department' },
                { mData: 'deskripsi' },
                {
                    "mData": null,
                    "bSortable": false,
                    "sWidth": "10%",
                    "sClass": "center",
                    "mRender": function (data, type, full) { 
                        return "<div class='flex items-center justify-center w-full'><button class='space-x-3 items-center border border-gray-400 justify-center px-2 my-2 mr-1 py-1 bg-white rounded-lg'><a class='text-sm font-sm text-gray-400' href='/department-data/edit/" + full.id_department + "'>"+
                        "<svg class='w-5 h-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>"+
                        "<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'></path>"+
                        "</svg></a></button>&nbsp"+
                        "<button class='space-x-3 items-center justify-center px-2 ml-2 mr-8 py-1 bg-red-600 border border-red-600 rounded-lg'><a class='text-sm font-sm text-white' href='/department-data/delete/" + full.id_department + "'>"+
                        "<svg class='w-5 h-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>"+
                        "<path fill-rule='evenodd' d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z' clip-rule='evenodd'></path>"+
                        "</svg></a></button></div>"; 
                    }
                }
            ]
        });
    })

    return (
        <div>
            <table className="stripe w-full" id="dtable">
                <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="py-3 w-8">Department Name</th>
                        <th className="py-1 w-40">Description</th>
                        <th className="px-4 py-3">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400 "></tbody>
            </table>
        </div>
    )
}