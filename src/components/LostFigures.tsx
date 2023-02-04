import React, {FC} from 'react';
import { Figure } from '../models/figurs/Figure';

interface LostFiguresProps{
    title: string;
    figures: Figure[];
    playerColor: string
}

const LostFigures: FC<LostFiguresProps> = ({title, figures, playerColor}) => {
    playerColor = playerColor + " lost";
    return (
        <div className={playerColor}>
                <h3>{title} </h3>
                
                {figures.map(figure => 
                    <div key={figure.id} className='lost-row'>
                       
                        {figure.logo && <img className='lost_img' src={figure.logo} />}
                        <div> {figure.name}</div>
                    </div>
                    )}
        </div>
    );
};

export default LostFigures;