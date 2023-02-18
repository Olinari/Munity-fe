import axios from 'axios';

const baseUrl = (import.meta as any).env.VITE_BASE_URL;

export const getAgentAuthData = async () => {
  const response = await axios.get(`${baseUrl}/connect-agent`);
  return response.data;
};

export const secureConnection = async () => {
  const response = await axios.get(`${baseUrl}/secure-connection`);
  return response.data;
};

export const getGroupsData = async () => {
  const response = await axios.get(`${baseUrl}/groups-data`);
  return response.data;
};

export const getGroupData = async (groupId: string) => {
  const response = await axios.get(`${baseUrl}/group-data`, {
    params: { groupId },
  });
  return response.data;
};

export const getDailyGroupData = async (groupId: string, day: Date) => {
  const response = await axios.get(`${baseUrl}/group-daily-data`, {
    params: { groupId, date: day },
  });
  return response.data;
};

export const getWeeklyGroupData = async (groupId: string, startDay: Date) => {
  const response = await axios.get(`${baseUrl}/group-weekly-data`, {
    params: { groupId, date: startDay },
  });
  console.log(response.data);
  return response.data;
};
