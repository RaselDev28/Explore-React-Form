
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';
import { AssetContext } from './FamilyTree';
import Special from './special';

const Grandpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;