# Blacksmith Text-Based Adventure Game
## What is Blacksmith
Blacksmith is a simple text-based game, played entirely in the console.

## Game Play
As a blacksmith you can make weapons using ore, wood and fire. You will sell them for gold. You will use gold to buy more ore and wood so you can make more weapons. The fire cannot be burning when the blacksmith goes to buy or sell

## Game Commands
Use the following commands to interact with the game.

### Buy 
The `buy()` command is used to buy new supplies when needed. The item the blacksmith wishes to buy must be given. The blacksmith can only buy one item at at a time in single quantities. If the blacksmith does not have enough money or if the fire is burying, no item will be bought.

### Make
The `make()` command is used to make new weapons using ore, wood, and fire. The weapon the blacksmith wishes to make must be given. The blacksmith can only make one item at a time in single quantities. If the blacksmith does not have enough ore or wood or if the fire is not burning, no weapon will be made.

### Sell
The `sell()` command is used to sell weapons currently in the inventory. The weapon the blacksmith wishes to sell must be given. The blacksmith can only sell one item at a time in single quantities. The amount of gold received from selling a weapon will vary with in the exchange rate range. If the blacksmith does not have the select weapon or if the fire is buring, no weapon will be sold. 

### Fire
The `fire()` command will be used to start and stop the fire. A fire will be started if there is currently no fire burning and if there is enough wood. A fire will be stopped if the fire is currently burning. 

### Inventory
The `inventory()` command will list the blacksmith's current inventory.

### Help
The `help()` command will display the instructions for the game. 

## Game Exchange Rates
- BUY: 1 piece of ore costs 3 pieces of gold
- BUY: 1 piece of wood costs 1 piece of gold
- MAKE: 1 sword with 2 pieces of ore and 1 piece of wood
- MAKE: 1 axe with 1 piece of ore and 2 pieces of wood
- SELL: 1 sword for 5 to 10 pieces of gold
- SELL: 1 axe for 4 to 8 pieces of gold
- FIRE: 1 piece of wood

