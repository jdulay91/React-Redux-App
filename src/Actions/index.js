import axios from 'axios'

export const FETCHING_PIC_START = 'FETCHING_PIC_START'
export const FETCHING_PIC_SUCCESS= 'FETCHING_PIC_SUCCESS'
export const FETCHING_PIC_FAILURE= 'ETCHING_PIC_FAILURE'


export const getPic = () => dispatch =>{
    dispatch({type:'FETCHING_PIC_START'})
    const random = Math.floor(Math.random()*100)    
    axios
    .get(`https://api.jikan.moe/v3/anime/${random}/pictures`)
    .then(res=>{       
        console.log(res.data.pictures[0].large)
        // dispatch({type:FETCHING_PIC_SUCCESS})
        dispatch({type:FETCHING_PIC_SUCCESS, payload:res.data.pictures[0].large})
    })
    .catch(err=>{
        dispatch({type:FETCHING_PIC_FAILURE, payload:`${err.response.message}`})
    })
}