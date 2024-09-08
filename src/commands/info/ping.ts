import type { CommandData, SlashCommandProps, CommandOptions } from "commandkit";

export const data: CommandData = {
  name: "ping",
  description: "Pong!",
};

export const options: CommandOptions = {
  devOnly: true,
  userPermissions: ["Administrator", "AddReactions"],
  botPermissions: ["Administrator", "AddReactions"],
  deleted: false,
};

export function run({ interaction, client, handler }: SlashCommandProps) {
  interaction.reply({ content: `:ping_pong: Pong! ${interaction.client.ws.ping}ms` });
}
