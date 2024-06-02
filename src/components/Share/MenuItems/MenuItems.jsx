

const MenuItems = ({item}) => {
    const {name,image,price,recipe}=item;
    return (
        <div className="flex space-y-4">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-28 object-cover" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-------- </h3>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-600">${price}</p>
        </div>
    );
};

export default MenuItems;