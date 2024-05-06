import { Student } from "@/types/Student";

type Props = {
    students: Student[];
}

export const StudentTable = ({students}: Props) => {
    return ( 
        <div>
            <table className="w-full border rounded overflow-hidden">
                <thead className="text-left bg-gray-100 ">
                    <tr className="flex h-12 items-center px-6 border-b border-gray-300 ">

                        <th className="font-normal flex-1">Name</th>
                        <th className="font-normal flex-1">Status</th>
                        <th className="font-normal flex-1">Grade1</th>
                        <th className="font-normal flex-1">Grade2</th>
                        <th className="font-normal flex-1">Final Grade</th>

                    </tr>
                </thead>

                <tbody>
                {students.map(student => (
                    <tr key={student.id} className="grid grid-cols-5">
                        <td className="h-10 w-16">{student.name}</td>
                        <td>{student.active ? 'Ativo' : 'Inativo'}</td>
                        <td>{student.grade1}</td>
                        <td>{student.grade2}</td>
                        <td>{student.active ? ((student.grade1 + student.grade2) / 2).toFixed(2) : '-'}</td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
} 