import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

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

export const getGroupData = async (groupId) => {
  const response = await axios.get(`${baseUrl}/group-data`, {
    params: { groupId },
  });
  return response.data;
};

export const getTimelineData = async () => {
  const response = await axios.get(`${baseUrl}/timeline-data`);
  return response.data;
};
