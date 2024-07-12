import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';

function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuidv4();
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Duties;
<h1>duteis</h1>;
