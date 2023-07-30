import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useSeller = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data: isSeller, isLoading: isSellerLoading} = useQuery({
        queryKey: ['isSeller', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/seller/${user?.email}`);
            return res.data.seller;
            
        }
    })
    return [isSeller, isSellerLoading]
};

export default useSeller;