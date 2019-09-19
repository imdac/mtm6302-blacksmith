/**
 * randomInt:
 * Returns a random positive integer from min to max
 * @Parameters: min - the smallest possible number, max - largest possible number
 * @Return: Int
 * @Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
const randomInt = function (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * The settings object keeps track of all the exchange rates
 * for the game.
 */
const settings = {
  fireWood: 1,
  oreCost: 3,
  woodCost: 1,
  swordOre: 2,
  swordWood: 1,
  axeOre: 1,
  axeWood: 2,
  swordPriceMin: 5,
  swordPriceMax: 10,
  axePriceMin: 4,
  axePriceMax: 8
}

/**
 * The game object stores the current game status
 */
const game = {

}

/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 *
 * To stop a fire:
 *    The fire must be going
 */

/**
 * buy
 * To buy wood or ore
 *    The function must accept a string argument
 *    The argument is the item to buy
 *    The fire most not be burning
 *    The player must have enough gold
 *    The player will on receive 1 item
 */

/**
 * make
 * To make a sword or axe
 *    The function must accept a string argument
 *    The argument is the item to make
 *    The fire must be burning
 *    The player must have enough wood and ore
 *    The player will make 1 item
 */

/**
 * sell
 * To sell a sword or axe
 *   The function must accept a string argument
 *   The argument is the item to sell
 *   The function must check if it is a valid item to sell
 *   The fire must not be burning
 *   The player must have at least 1 item to sell
 *   The player will receive a random value based on the
 *   price range
 */

/**
 * inventory
 * Shows the players current inventory
 */

/**
 * Help Command
 * Returns the instruction on how to play the game.
 */
function help () {
  return `INSTRUCTIONS:\nBlacksmith is a simple text base game. As a blacksmith you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold. \n\nCOMMANDS:\n- buy(item)\n- make(item)\n- sell(item)\n- fire()\n- inventory()\n- help()`
}

// Log the help() function
console.log(help())
