import React, { ReactElement } from "react";
import { Grade, StudentSessionInfo } from "../../types";

const Student = ({ student }: Props): ReactElement => {
  return (
    <tr className="student">
      <td>{student.name}</td>

      {student.SessionGrades.map((sessionGrade: Grade, sIndex: number) => (
        <td key={sIndex} className="align-right">
          {sessionGrade.points} / {sessionGrade.maxPoints}
        </td>
      ))}
    </tr>
  );
};

interface Props {
  student: StudentSessionInfo;
}

export default Student;
