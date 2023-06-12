import Employee from '../component/user/employee'
import { usePathname } from 'next/navigation'

const Employeee: React.FC = () => {
    const pathname = usePathname()

    return (
        <Employee/>
    );
};
export default Employeee