import { baseUrl, client } from '@/services/apiClient';

export const getAgentAuthData = async () => {
  const response = await client.get(`${baseUrl}/connect-agent`);
  return response.data;
};

export const secureConnection = async () => {
  const response = await client.get(`${baseUrl}/secure-connection`);
  return response.data;
};

export const getGroupsData = async () => {
  const response = await client.get(`${baseUrl}/groups-data`);
  return response.data;
};

export const getGroupData = async (groupId: string) => {
  const response = await client.get(`${baseUrl}/group-data`, {
    params: { groupId },
  });
  return response.data;
};

export const getDailyGroupData = async (groupId: string, day: Date) => {
  const response = await client.get(`${baseUrl}/group-daily-data`, {
    params: { groupId, date: day },
  });
  return response.data;
};

export const getWeeklyGroupData = async (groupId: string, startDay: Date) => {
  const response = await client.get(`${baseUrl}/group-weekly-data`, {
    params: { groupId, date: startDay },
  });

  return response.data;
};
