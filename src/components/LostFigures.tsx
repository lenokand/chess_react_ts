import React, {FC} from 'react';
import { Figure } from '../models/figurs/Figure';

interface LostFiguresProps{
    title: string;
    figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className='lost'>
                <h3>{title}</h3>
                {figures.map(figure => 
                    <div key={figure.id}>
                       
                        {figure.logo && <img className='lost_img' src={figure.logo} />}
                        {figure.name}
                    </div>
                    )}
        </div>
    );
};

export default LostFigures;