import { SideBarMenuItem } from '../types/types';
import { classNames } from '../util/clasesNames';

interface SideBarMenuItemViewProps{
    item  : SideBarMenuItem;
    isOpen: boolean;    
}


export  function SideBarMenuItemView  ( { item, isOpen }: SideBarMenuItemViewProps ){
    return <div className='SideBarMenuItemView'> 
                <a href={ item.url }>
                    <div className={ classNames('ItemContent', isOpen ? '' : 'collapsed') } > 
                        <div className='icon' >
                            {/* <item.icon size='32'/>  */}
                            <img src={item.photoUrl} className="iconImage" alt={item.label} />
                        </div> 
                        <span className='label' >{ item.label }</span>
                    </div>
                </a>
                {
                    isOpen 
                        ? ''
                        : <div className='tooltip' > { item.label } </div>
                }
             </div>;
}