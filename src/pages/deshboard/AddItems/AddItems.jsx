import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/Share/Section title/SectionTitle";
import axiosPublic from "../../../components/hooks/useAxiosPublic"
import useAxiosPublic from "../../../components/hooks/useAxiosPublic";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic=useAxiosPublic()
    const axiosSecure=useAxiosSecure()
    const onSubmit =async (data) => {
        console.log(data)
        const imageFile={image:data.image[0]}
        const res=await axiosPublic.post(image_hosting_api,imageFile,{
            headers: { "Content-Type": "multipart/form-data" },
        })
        if(res.data.success){
            const menuItems={
                name:data.name,
                price:parseFloat(data.price),
                category:data.category,
                recipe:data.recipe,
                image:res.data.data.display_url

            }
            const menuRes=await axiosSecure.post('/menu',menuItems)
            if(menuRes.data.insertedId){
                // toast.success('Successfully Add New')
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:`${data.name} new items added`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        
        console.log(res.data)
    }

    return (
        <div>
            <SectionTitle subHeader='Whats new Items' header='Add an items'></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                        </label>
                        <input  {...register("name")} type="text" name="name" placeholder="Recipe Name" className="input input-bordered" required />
                    </div>
                    <div className="flex gap-10 w-full">
                        <div className="">
                            <label className="label">
                                <span className="label-text">Category Selection</span>
                            </label>
                            <select {...register("category")} name="category" className="select select-primary  ">
                                <option value="Pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                                <option value="salad">Salad</option>

                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input  {...register("price")} type="text" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Recipe details</span>
                        </label>
                        <textarea {...register("recipe")} name="recipe" className="textarea textarea-secondary w-2/3 h-32" placeholder="Bio"></textarea>
                    </div>

                    <div>
                        <input {...register("image")} name="image" type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                    </div>
                    <input type="submit" value='Add Items'  className="my-5 btn  bg-gradient-to-r from-[#849974] to-[#272D22]"/>
                </form>
            </div>
        </div>
    );
};

export default AddItems;