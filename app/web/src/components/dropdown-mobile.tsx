/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default (props, { $, $f7, $on }) => {

    $on('pageInit', () => {var ac1 = $f7.actions.create({
      buttons: [
        {
          text: 'Profile',
          bold: true
        },
        {
          text: 'Setting'
        },
        {
          text: 'Log Out',
          color: 'red'
        },
      ]
    })})
  $('.ac-1').on('click', () => {
    ac1.open();
    })

    return (
      <div><a href="#" class="ac-1">One group, title, three buttons</a></div>
    
    );
  };

    