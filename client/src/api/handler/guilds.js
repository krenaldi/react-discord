import { api } from "../apiClient";

export const getUserGuilds = () => api.get('/guilds');

export const createGuild = (payload) => api.post(`/guilds/create`, payload);

export const joinGuild = (payload) => api.post(`/guilds/join`, payload);

export const getInviteLink = (id, isPermanent = false) => api.get(`/guilds/${id}/invite${isPermanent ? "?isPermanent=true" : ""}`);

export const invalidateInviteLinks = (id) => api.delete(`/guilds/${id}/invite`);

export const getGuildMembers = () => null;

export const editGuild = (id, body) => api.put(`/guilds/${id}`, body, {
  headers: {
    "Content-Type": "multipart/form-data"
  }
});

export const deleteGuild = () => null;

export const getGuildMemberSettings = () => null;

export const changeGuildMemberSettings = () => null;

export const kickMember = () => null;

export const banMember = () => null;

export const leaveGuild = (id) => api.delete(`guilds/${id}`);

export const getBanList = (id) => api.get(`guilds/${id}/bans`);

export const unbanMember = (guildId, memberId) =>
  api.delete(`guilds/${guildId}/bans`, { data: { memberId } });
