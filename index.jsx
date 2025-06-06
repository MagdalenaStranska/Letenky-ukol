import React from 'react';
import { render } from '@czechitas/render';
import './index.css'
import { Flight } from './components/Flight'

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {
      <>
         <Flight cityFrom = 'Praha' cityTo= 'Londýn' timeFrom= '3. srpna 2022, 13:30' timeTo= '3. srpna 2022, 14:00' />
      </>
    }

  </div>
);

/*
 cityFrom: 'Praha',
  cityTo: 'Londýn',
  timeFrom: '3. srpna 2022, 13:30',
  timeTo: '3. srpna 2022, 14:00',
}
*/