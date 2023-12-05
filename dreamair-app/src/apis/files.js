import axios from 'axios';

export const fileDownload = (fileNo) => axios.get(`/file/${fileNo}`)

export const thumbnail = (fileNo) => axios.get(`/file/img/${fileNo}`)

export const deleteFile = (fileNo) => axios.delete(`/file/${fileNo}`)

// export const uploadFile = (multipartFile) => axios.put('/file')