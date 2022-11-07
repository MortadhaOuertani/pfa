import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { DeleteProfile } from "../redux/action/profileactions";

function RowDetails({id,title,user}) {
    const dispatch = useDispatch();
    const DeleteHandler = (__id)=>{
        dispatch(DeleteProfile(__id))
      }

      useEffect(() => {
        console.log(id)
    }, []);
  return (
    <tr>
      <th>{user.name}</th>
      <th>{title}</th>
      <th>{user.role}</th>
      <td>
    
        <button
          className="btn btn-outline-danger"
          onClick={() => DeleteHandler(id)}
          >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RowDetails;
