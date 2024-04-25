import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

function Page(){

    return(
    
    <div className="mx-8">

        <StudentTable students={students}></StudentTable>
        
    </div>
    )
}

export default Page;