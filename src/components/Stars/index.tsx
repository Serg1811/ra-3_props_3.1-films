import { Star } from '../Star';
import './index.css';
import type { CountTypeStars } from './type/countTypeStars';

const Stars: React.FC<CountTypeStars> = ({ count = 0 }) => {
    if(count < 1 || count > 5) {
        return;
    }
    const starsArray = Array.from( {length: Math.trunc(count)}, (_, index) => {
        return (
            <li key={index}>
                <Star />
            </li>
        )
    } )
    return (   
        <ul className='card-body-stars u-clearfix'>
            {starsArray}
        </ul>
    );
}

export default Stars;
