import { useEffect } from "react";
import { BaseWindow } from "web.init/src/window";
import { api } from "web.utils/src/api";

var $ = require('jquery');
require('datatables.net')(window, $);
declare const window: BaseWindow

export default () => {
    api("/api/get-level").then((res) => {
        $('#dtable').DataTable({
            data: res.data,
            aoColumns: [
                {
                    mData: 'level_ticket'
                },
                {
                    mData: 'deskripsi_level_ticket',
                    sWidth: '70%'
                },
            ]
        });
    })

    return (
        <div>
            <table className="stripe w-full" id="dtable">
                <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="py-3">Level Name</th>
                        <th className="py-3">Description</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400 "></tbody>
            </table>
        </div>
    )
}