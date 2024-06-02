

const SectionTitle = ({header,subHeader}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-8">
            
            <p className="text-orange-500 mb-2">{subHeader} </p>
            <h2 className="text-4xl border-y-4 py-3 uppercase">{header}</h2>
        </div>
    );
};

export default SectionTitle;