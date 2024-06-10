import useRole from "../../../Hooks/useRole";

const AdminHome = () => {
    const [role] = useRole()
    
    return (
        <div>
            Admin Home
        </div>
    );
};

export default AdminHome;