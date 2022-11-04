import axios from 'axios';
import { toast } from 'react-toastify';

const createCard = async (payload) => {
  const { title, boardId, listId } = payload;
  try {
    const res = await axios.post('/card', { title, boardId, listId });
    const { data } = res;
    return data;
  } catch (error) {
    toast.error(error.response.data.message, { theme: 'colored' });
  }
};

const updateCard = async (cardId, payload) => {
  try {
    const res = await axios.put(`/card/${cardId}`, payload);
    const { data } = res;
    return data;
  } catch (error) {
    toast.error(error.response.data.message, { theme: 'colored' });
  }
};

const deleteCard = () => {};

const cardApi = { createCard, updateCard, deleteCard };

export default cardApi;
