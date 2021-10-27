import { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'


const Details = ({history, location,match}:RouteComponentProps) => {

    const ID = match.params
    console.log(ID)
   useEffect(()=>{
  
    const fetchData = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/track/' + ID)
            if(response.ok){
                let fetchedData = await response.json()
                console.log(fetchedData)
             }
        } catch (error) {
            console.log(error)
        }
        
    }

   },[ID])
    
    return(
          <div>
              <h4 className="text-success">song details page</h4>

          </div>
    )
}

export default Details