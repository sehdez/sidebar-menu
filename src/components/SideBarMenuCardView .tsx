import { SideBarMenuCard } from '../types/types';
import { classNames } from '../util/clasesNames';

interface SideBarMenuCardViewProps {
    card   : SideBarMenuCard;
    isOpen : boolean;
}



export  function SideBarMenuCardView  ( { card, isOpen }: SideBarMenuCardViewProps ){
    return  <div className='SideBarMenuCardView' >  
                <img className='profile' 
                     src={card.photoUrl} 
                     alt={ card.displayName } 
                     width='100%' />
                <div className={ classNames( 'profileInfo', isOpen ? '' : 'collapsed' )} >
                    <div className='name' > { card.displayName } </div>
                    <div className='title' > { card.title } </div>
                    <div className='url' > 
                        <a href={ card.url}> Ir al perfil </a>
                    </div>
                </div>
            </div>;
}