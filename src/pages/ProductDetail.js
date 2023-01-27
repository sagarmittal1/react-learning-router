import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return <>
    <h1>Products Details</h1>
    <p>{params.productId}</p>
    <p><Link to=".." relative='path'>Back</Link></p>
  </>
};

export default ProductDetailPage;
