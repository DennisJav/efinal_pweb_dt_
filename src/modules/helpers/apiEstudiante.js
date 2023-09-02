import axios from "axios";


export const obtenerEstudianteFachadaApiAxios = async (id) => { 
    return await obtenerEstudianteAPIAxios(id);
}


export const ingresarEstudianteFachada = (bodyEstudiante) => {   
    ingresarEstudiante(bodyEstudiante);
}

export const obtenerTokenFachada = async(body) => {
    return await generarToken(body);
}


const obtenerEstudianteAPIAxios = async (id) => {
    const data = axios.get(`http://localhost:8080/API/v1/Inscripcion/estudiantes/${id}`,).then(r => r.data);

    return data;
}

const ingresarEstudiante = (bodyEstudiante) => {

    axios.post(`http://localhost:8080/API/v1/Inscripcion/estudiantes`, bodyEstudiante, ).then(r => r.data);

}

const generarToken = async(body) =>{
    const data = axios.get(`http://localhost:8084/API/v1.0/Autorizacion/tokens/obtener`,body).then(r => r.data);
    return data;
}





