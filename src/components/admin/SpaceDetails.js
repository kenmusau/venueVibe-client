import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function SpaceDetails({selectedSpace}) {

    const [editing, setEditing] = useState(false)
    const [editName, setEditName] = useState(false)
    const [editPrice, setEditPrice] = useState(false)
    const [editStatus, setEditStatus] = useState(false)
    const [editDescription, setEditDescription] = useState(false)
    const [editedData, setEditedData] = useState([])
    const navigate = useNavigate()

    // fetch
    function handleNavigate(){
        window.location.reload()
    }
    function handleEdit(id) {
        setEditing(prevValue=> !prevValue);
      }
      function handleEditDescription(){
        if (editing) {
            setEditDescription(true);
          }
      }

      function handleEditPrice(){
        if (editing) {
            setEditPrice(true);
          }
      }

      function handleEditStatus(){
          if (editing) {
              setEditStatus(true);
          }
      }
      
      function handleH3Editing() {
        if (editing) {
          setEditName(true);
        }
      }

      function handleCancel(value){
        if(value === "name"){
            setEditName(false)
        }else if(value === "description"){
            setEditDescription(false)
        }else if(value === "price"){
            setEditPrice(false)
        }else{
            setEditStatus(false)
        }
    }

    function handleDelete(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://venuevibe-server.onrender.com/spaces/${id}`,{
                    method: "DELETE"
                })
                .then(response =>{
                    if(!response.ok){
                        throw new Error("Delete unsuccesful")
                    }
                })
                .catch((error)=>{
                    console.error("Error deleting space:", error)
                })
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              window.location.reload()
            }
        })
    }

    function handleInputs(e) {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
      }

      function handleSave(id) {
        // Make a PATCH request to update the space's information
        fetch(`https://venuevibe-server.onrender.com/spaces/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Update unsuccessful');
            }
          })
          .catch((error) => {
            console.error('Error updating space:', error);
          });
        // Close the editing mode
        setEditing(false);
        window.location.reload()
      }

    return (
    <div className="spaceDetails-div">
      <div className="spaceDetails">
        <button className="spaces-back-button" onClick={handleNavigate}>back</button>
        <img src={selectedSpace.image} />
        <div className="space-text">
          {editName ? (
            <div>
              <input 
              onChange={handleInputs} 
              name="name" 
              placeholder="edit name" 
              value={editedData.name || selectedSpace.name}/>
              <button onClick={()=>handleSave(selectedSpace.id)}>submit</button>
              <button onClick={()=>handleCancel("name")}>cancel</button>
            </div>
          ) : (
            <h3 onClick={handleH3Editing} >{selectedSpace.name}</h3>
          )}
          {editDescription? (
            <div>
              <input 
              onChange={handleInputs}
              name="description"
              placeholder="edit description" 
              value={editedData.description || selectedSpace.description}
              />
              <button onClick={()=>handleSave(selectedSpace.id)}>submit</button>
              <button onClick={()=>handleCancel("description")}>cancel</button>
            </div>
            ) : (
            <small onClick={handleEditDescription}>{selectedSpace.description}</small>
            )}
            {editPrice ? (
            <div>
                <input 
                onChange={handleInputs}
                name="price"
                placeholder="edit price" 
                value={editedData.price || selectedSpace.price}   
                   />
                <button onClick={()=>handleSave(selectedSpace.id)}>submit</button>
                <button onClick={()=>handleCancel("price")}>cancel</button>
            </div>
            ): (
                <i onClick={handleEditPrice}>${selectedSpace.price}/hr</i>
            )}
            {editStatus? (
            <div>
                <input 
                onChange={handleInputs}
                name="status"
                placeholder="edit status" 
                value={editedData.status || selectedSpace.status}
                  />
                <button onClick={()=>handleSave(selectedSpace.id)}>submit</button>
                <button onClick={()=>handleCancel("status")}>cancel</button>
            </div>
            ) : (
          <i onClick={handleEditStatus}>{selectedSpace.status ? "Occupied" : "Vacant"}</i>
            )}
          <div className="space-details-buttons">
            <button onClick={() => handleEdit(selectedSpace.id)}>{editing ? "REVERT" : "EDIT"}</button>
            <button onClick={() => handleDelete(selectedSpace.id)}>DELETE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpaceDetails