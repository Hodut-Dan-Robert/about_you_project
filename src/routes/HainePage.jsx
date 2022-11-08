import React from 'react'

import Navbar from '../components/navbar/Navbar';
import Infobord from '../components/infobord/Infobord';
import Filter from '../components/filter/Filter';
import Filter0 from '../components/filter0/Filter0';
import Sidebar from '../components/sidebar/Sidebar';
import Items from '../components/items/Items';
import Items1 from '../components/items1/Items1';
import Items2 from '../components/items2/Items2';

const HainePage = () => {
    return (
        <>
      <Navbar/>
      <Infobord/>
      <Filter/>
      <Filter0/>
      <Sidebar/>
      <Items/>
      <Items1/>
      <Items2/>

        </>
    );
};

export default HainePage;