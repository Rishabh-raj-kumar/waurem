import axios from 'axios';

const createQuestion = async (title, description, userId) => {
  try {
    const res = await axios.post('/questions', {
      title,
      description,
      userId,
    });
    console.log(res.data);
  } catch (err) {
    console.error(err.response.data);
  }
};