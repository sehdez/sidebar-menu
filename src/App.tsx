import React from 'react';
import { SideBarMenu }     from './components/SideBarMenu';
import { SideBarMenuItem, SideBarMenuCard } from './types/types';
// import { FcHome }   from 'react-icons/fc'


function App() {

  const items: SideBarMenuItem[] = [
    {
      id   : '1',
      label: 'Briseyda',
      // icon : FcHome,
      photoUrl:'https://scontent.fgdl2-2.fna.fbcdn.net/v/t1.6435-9/120159109_5060211364004217_2292811821606804712_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEuPpQ_vVAS-UxyocG51P3IXF3GGCGdZldcXcYYIZ1mV2jiIFhPZ64JG6WgKqBJHeIUfHqLYhLlyb4xcn9YcG-r&_nc_ohc=4vovbxAMxsMAX_rgz4C&_nc_ht=scontent.fgdl2-2.fna&oh=00_AT-onE0m3-nns55LjcuKbC4ODJY91gf4xGgxH1s3qwPDbQ&oe=62B2BE0A',
      url  : '/',
    },
    {
      id   : '2',
      label: 'David Paúl',
      // icon : FcHome,
      photoUrl:'https://scontent.fgdl2-2.fna.fbcdn.net/v/t1.6435-9/82861406_2789566504439420_7051173265837916160_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEhVQyHTNfW6mRG7Sm-Ovv9n5b7dakBXguflvt1qQFeC8swbQV6laYCaOon4Fx69aT087qNutKhCimHJrD79U-S&_nc_ohc=m4-f7rpj864AX-A4fB4&_nc_oc=AQm9ltXvRmThW956_aIioJjGdJPqG066yo0Pn5YtUxxpr6haFgbUcoHUpkvKK10BLPy8AzrGFQDIeJCAi9CwDjW3&_nc_ht=scontent.fgdl2-2.fna&oh=00_AT-pRgAL3LIxjzuUUs5En9GawkNdIR-M-TdKLHgNU4G0pg&oe=62B4F1AE',
      url  : '/',
    },
    {
      id   : '3',
      label: 'Riel',
      // icon : FcHome,
      photoUrl:'https://scontent.fgdl2-2.fna.fbcdn.net/v/t31.18172-8/25352264_1632398140156268_6807877727072439109_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGjuNgcz8cFfFJk5gNE5g4b3ya5CFETITHfJrkIURMhMcS2VwW6Ft7aYgZ4i0DRSZHM1AZPcDrngotEgnEwDoQL&_nc_ohc=c6lGT-DPd1cAX9zSKSe&_nc_ht=scontent.fgdl2-2.fna&oh=00_AT-HNiC-QU-rsWQvzLshsTo59eTiP8OpjxI8JtLJpKjS2g&oe=62B2B4A3',
      url  : '/',
    }
  ];
  const card: SideBarMenuCard = {
    id         : 'card-01',
    displayName: 'Sergio Hernández',
    title      : 'Desarrollador',
    photoUrl   : 'https://scontent.fgdl2-2.fna.fbcdn.net/v/t1.6435-9/130985003_3640862649309797_320675183278876501_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEERsLPo9h9SucjsvGH8dBeqBgUFdJs4MSoGBQV0mzgxBEpD-p_8w4RINGLfGhYgU6yUBULza21NU39QfZcq6pz&_nc_ohc=k904but9zksAX9DVx4_&_nc_ht=scontent.fgdl2-2.fna&oh=00_AT865nkMOjy8UCgdA94fRvLSf9HREE5dPzNckLCS39Z1TA&oe=62B39E7C',
    url        : '/'
}

  return (
      <SideBarMenu items= { items }
                    card = {card} />
    
  );
}

export default App;
