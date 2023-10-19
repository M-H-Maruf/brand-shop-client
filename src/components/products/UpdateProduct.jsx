import { useParams } from "react-router-dom";


const UpdateProduct = () => {
    const {_id} = useParams();
    
    return (
        <div>
            {_id}
        </div>
    );
};

export default UpdateProduct;