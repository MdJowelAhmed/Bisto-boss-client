import './featured.css'
import SectionTitle from "../../../components/Share/Section title/SectionTitle";
import img from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className="featured-items bg-fixed  px-32 pb-24 text-white my-12">
            <div className='pt-12'>
                <SectionTitle subHeader='Check it out' header='Featured'></SectionTitle>
            </div>
            <div className='md:flex bg-slate-600 bg-opacity-40'>
                <img className='w-80' src={img} alt="" />
                <div className='md:ml-8'>
                    <p> 23/11/2026</p>
                    <h2 className='uppercase'>Where you i find</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, repellat reprehenderit aut blanditiis, esse fuga eveniet aperiam molestiae magni adipisci maxime! Sapiente inventore facilis alias officiis cumque culpa tempora quisquam esse veniam amet nulla aspernatur natus voluptatibus, placeat ducimus neque.</p>
                </div>
            </div>

        </div>
    );
};

export default Featured;