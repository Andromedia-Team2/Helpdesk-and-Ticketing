import { useEffect } from "react";
import { BaseWindow } from "web.init/src/window";
import { api } from "web.utils/src/api";

var $ = require('jquery');
require('datatables.net')(window, $);
declare const window: BaseWindow

export default () => {
    var no = 0;
    api("/api/get-performance").then((res) => {
        $('#dtable').DataTable({
            data: res.data,
            aoColumns: [
                { mData: 'nama_employee' },
                { mData: null,
                    mRender: function (data, type, full) {
                      return (full.department.nama_department);
                    } 
                },
                { mData: null,
                    mRender: function (data, type, full) {
                        var totReply = 0;
                        var totTicket = 0;
                        var avg = 0;
                        for (let x in full.history_ticket){
                            totReply += full.history_ticket[x].firstReply_deviation;
                            totTicket += 1;
                        }
                        avg = totReply / totTicket;
                        return (avg + " Minutes");
                    } 
                },
                { mData: null,
                    mRender: function (data, type, full) {                        
                        var totSol = 0;
                        var totTicket = 0;
                        var avg = 0;
                        for (let x in full.history_ticket){
                            totSol += full.history_ticket[x].ticketSolved_deviation;
                            totTicket += 1;
                        }
                        avg = totSol / totTicket;
                        return (avg + " Hours");
                    } 
                },
                { mData: null,
                    mRender: function (data, type, full) {     
                        var totTicket = 0;
                        for (let x in full.history_ticket){
                            totTicket += 1;
                        }
                        return (totTicket + " Ticket");
                    } 
                }
            ],
            "bDestroy": true
        });

    })

    return (
        <div>
            <table className="stripe w-full" id="dtable">
                <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="py-3">Employee Name</th>
                        <th className="py-3">Department</th>
                        <th className="py-3">Avg. First Repl.</th>
                        <th className="py-3">Avg. Ticket Solv.</th>                        
                        <th className="py-3">Tot. Ticket Solv.</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400 "></tbody>
            </table>
        </div>
    )
}