import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from '../Hook/useAxiosSecure';

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;