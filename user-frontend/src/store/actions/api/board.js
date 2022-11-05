import axios from 'axios';
import { toast } from 'react-toastify';

const createBoard = async (payload) => {
  const { title, status } = payload;
  try {
    const res = await axios.post('/board', { title, status });
    const { data } = res;
    return data;
  } catch (error) {
    toast.error(error.response.data.message, { theme: 'colored' });
  }
};

const updateBoard = async (boardId, payload) => {
  try {
    const res = await axios.put(`/board/${boardId}`, payload);
    const { data } = res;
    return data;
  } catch (error) {
    toast.error(error.response.data.message, { theme: 'colored' });
  }
};

const fetchAllYoursBoards = async () => {
  try {
    const res = await axios.get('/board/your-boards');
    const { data } = res;
    return data;
  } catch (error) {
    toast.error(error.response.data.message, { theme: 'colored' });
  }
};

const fetchAllInvitedBoards = async () => {
  try {
    const res = await axios.get('/board/invited-boards');
    const { data } = res;
    return data;
  } catch (error) {
    toast.error(error.response.data.message, { theme: 'colored' });
  }
};

const fetchBoardDetail = async (boardId) => {
  try {
    const res = await axios.get(`/board/${boardId}`);
    const { data } = res;
    return data;
  } catch (error) {
    toast.error(error.response.data.message, { theme: 'colored' });
  }
};

const boardApi = {
  createBoard,
  updateBoard,
  fetchAllYoursBoards,
  fetchAllInvitedBoards,
  fetchBoardDetail,
};

export default boardApi;
