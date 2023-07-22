import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;

export async function getQuizList() {
  const quiz = await axios.get(`${baseUrl}`);
  return quiz.data.results;
}
