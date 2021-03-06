import { Box, GridItem, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { getChannels } from "api/handler/channel";
import useChannelSocket from "api/ws/useChannelSocket";
import ChannelListItem from "components/items/ChannelListItem";
import GuildMenu from "components/menus/GuildMenu";
import CreateChannelModal from "components/modals/CreateChannelModal";
import InviteModal from "components/modals/InviteModal";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { cKey } from "utils/querykeys";
import AccountBar from "../AccountBar";
import channelScrollbarCss from "./css/ChannelScrollerCSS";

export default function Channels() {

  const {
    isOpen: inviteIsOpen,
    onOpen: inviteOpen,
    onClose: inviteClose,
  } = useDisclosure();
  const {
    isOpen: channelIsOpen,
    onOpen: channelOpen,
    onClose: channelClose,
  } = useDisclosure();

  const { guildId } = useParams();
  const key = cKey(guildId);

  const { data } = useQuery(key, () => getChannels(guildId).then(res => res.data));

  useChannelSocket(guildId, key);

  return (
    <>
      <GuildMenu channelOpen={channelOpen} inviteOpen={inviteOpen} />
      <GridItem
        gridColumn={2}
        gridRow={"2/4"}
        bg="brandGray.dark"
        overflowY="hidden"
        _hover={{ overflowY: "auto" }}
        css={channelScrollbarCss}
      >
        {inviteIsOpen && (
          <InviteModal isOpen={inviteIsOpen} onClose={inviteClose} />
        )}
        {channelIsOpen && (
          <CreateChannelModal
            guildId={guildId}
            onClose={channelClose}
            isOpen={channelIsOpen}
          />
        )}
        <UnorderedList listStyleType="none" ml="0" mt="4">
          {data?.map(channel => (
            <ChannelListItem key={channel.id} channel={channel} guildId={guildId} />
          ))}
          <Box h="16" />
        </UnorderedList>
        <AccountBar />
      </GridItem>
    </>
  );
}
